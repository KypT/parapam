(ns main.js ; .cljs
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
   ;; <other stuff>
   [cljs.core.async :as async :refer (<! >! put! chan)]
   [taoensso.sente  :as sente :refer (cb-success?)] ; <--- Add this
  ))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "chsk" ; Note the same path as before
       {:type :auto ; e/o #{:auto :ajax :ws}
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(defn ->output! [& args]
  (apply js/console.log (map clj->js args)))


(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (->output! "Unhandled event:" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (->output! "State change: " ev-msg)
  #_
  (let [[old-state-map new-state-map] (have vector? ?data)]
    (if (:first-open? new-state-map)
      (->output! "Channel socket successfully established!:" new-state-map)
      (->output! "Channel socket state change:"              new-state-map))))

(defmethod -event-msg-handler :chsk/recv
  [{[event-id ?data] :?data}]
  (->output! "Push event from server:" event-id ?data)
  (condp = event-id
    :push/services (update-services-list ?data)
    (js/console.log 2)))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (->output! "Handshake:" ?data)))

(defn patch-dom [node layout]
  (js/IncrementalDOM.patch node js/jsonml2idom (clj->js layout)))

(let [services-list (.getElementById js/document "services-list")]
  (defn update-services-list [services]
    (when services-list
      (patch-dom services-list
                 (list* "div" (map (fn [service] ["a" {:class "mdl-navigation__link"} (:name service)]) services))))))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
      ch-chsk event-msg-handler)))

(defn start! [] (start-router!))

(defonce _start-once (start!))
