(ns service-swarm.core
  (:require
    [cljs.build.api :as cljs]
    [compojure.core :refer :all]
    [taoensso.sente :as sente]
    [aleph.http :as http]
    [ring.middleware.file]
    [ring.middleware.keyword-params]
    [ring.middleware.params]
    [taoensso.sente.server-adapters.aleph :refer (get-sch-adapter)]))

(defn compile-clojurescript []
  (cljs/build "src/cljs"
              {:output-to "main.js"
               :main 'main.js}))

(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes my-app-routes
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  )

(def my-app
  (-> my-app-routes
      ring.middleware.keyword-params/wrap-keyword-params
      ring.middleware.params/wrap-params
      (ring.middleware.file/wrap-file "/home/kkocherov/workspace/service-swarm")))

(add-watch connected-uids :connected-uids
  (fn [_ _ old new]
    (when (not= old new)
      (println "Connected uids change: %s" new))))

(def client (first (:ws @connected-uids)))
(chsk-send! client [:asd/zz ["h1" {} "Hello world!"]])

(compile-clojurescript)
(def server (http/start-server my-app {:port 2017}))
(.close server)
