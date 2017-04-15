// Compiled by ClojureScript 1.9.225 {}
goog.provide('main.js');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
var map__30297_30299 = taoensso.sente.make_channel_socket_BANG_.call(null,"chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__30297_30300__$1 = ((((!((map__30297_30299 == null)))?((((map__30297_30299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30297_30299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30297_30299):map__30297_30299);
var chsk_30301 = cljs.core.get.call(null,map__30297_30300__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_30302 = cljs.core.get.call(null,map__30297_30300__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_30303 = cljs.core.get.call(null,map__30297_30300__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_30304 = cljs.core.get.call(null,map__30297_30300__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
main.js.chsk = chsk_30301;

main.js.ch_chsk = ch_recv_30302;

main.js.chsk_send_BANG_ = send_fn_30303;

main.js.chsk_state = state_30304;
main.js.__GT_output_BANG_ = (function main$js$__GT_output_BANG_(var_args){
var args__28033__auto__ = [];
var len__28026__auto___30306 = arguments.length;
var i__28027__auto___30307 = (0);
while(true){
if((i__28027__auto___30307 < len__28026__auto___30306)){
args__28033__auto__.push((arguments[i__28027__auto___30307]));

var G__30308 = (i__28027__auto___30307 + (1));
i__28027__auto___30307 = G__30308;
continue;
} else {
}
break;
}

var argseq__28034__auto__ = ((((0) < args__28033__auto__.length))?(new cljs.core.IndexedSeq(args__28033__auto__.slice((0)),(0),null)):null);
return main.js.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__28034__auto__);
});

main.js.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,cljs.core.map.call(null,cljs.core.clj__GT_js,args));
});

main.js.__GT_output_BANG_.cljs$lang$maxFixedArity = (0);

main.js.__GT_output_BANG_.cljs$lang$applyTo = (function (seq30305){
return main.js.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30305));
});

if(typeof main.js._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
main.js._event_msg_handler = (function (){var method_table__27876__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27877__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27878__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27879__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27880__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"main.js","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27880__auto__,method_table__27876__auto__,prefer_table__27877__auto__,method_cache__27878__auto__,cached_hierarchy__27879__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
main.js.event_msg_handler = (function main$js$event_msg_handler(p__30309){
var map__30312 = p__30309;
var map__30312__$1 = ((((!((map__30312 == null)))?((((map__30312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30312):map__30312);
var ev_msg = map__30312__$1;
var id = cljs.core.get.call(null,map__30312__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__30312__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__30312__$1,new cljs.core.Keyword(null,"event","event",301435442));
return main.js._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30314){
var map__30315 = p__30314;
var map__30315__$1 = ((((!((map__30315 == null)))?((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var ev_msg = map__30315__$1;
var event = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"event","event",301435442));
return main.js.__GT_output_BANG_.call(null,"Unhandled event:",event);
}));
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__30317){
var map__30318 = p__30317;
var map__30318__$1 = ((((!((map__30318 == null)))?((((map__30318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30318):map__30318);
var ev_msg = map__30318__$1;
var _QMARK_data = cljs.core.get.call(null,map__30318__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return main.js.__GT_output_BANG_.call(null,"State change: ",ev_msg);
}));
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__30320){
var map__30321 = p__30320;
var map__30321__$1 = ((((!((map__30321 == null)))?((((map__30321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30321):map__30321);
var vec__30322 = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event_id = cljs.core.nth.call(null,vec__30322,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__30322,(1),null);
main.js.__GT_output_BANG_.call(null,"Push event from server:",event_id,_QMARK_data);

var pred__30326 = cljs.core._EQ_;
var expr__30327 = event_id;
if(cljs.core.truth_(pred__30326.call(null,new cljs.core.Keyword("push","services","push/services",969737637),expr__30327))){
return main.js.update_services_list.call(null,_QMARK_data);
} else {
return console.log((2));
}
}));
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__30329){
var map__30330 = p__30329;
var map__30330__$1 = ((((!((map__30330 == null)))?((((map__30330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30330):map__30330);
var ev_msg = map__30330__$1;
var _QMARK_data = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__30332 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__30332,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__30332,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__30332,(2),null);
return main.js.__GT_output_BANG_.call(null,"Handshake:",_QMARK_data);
}));
main.js.patch_dom = (function main$js$patch_dom(node,layout){
return IncrementalDOM.patch(node,jsonml2idom,cljs.core.clj__GT_js.call(null,layout));
});
var services_list_30335 = document.getElementById("services-list");
main.js.update_services_list = ((function (services_list_30335){
return (function main$js$update_services_list(services){
if(cljs.core.truth_(services_list_30335)){
return main.js.patch_dom.call(null,services_list_30335,cljs.core.list_STAR_.call(null,"div",cljs.core.map.call(null,((function (services_list_30335){
return (function (service){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-navigation__link"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(service)], null);
});})(services_list_30335))
,services)));
} else {
return null;
}
});})(services_list_30335))
;
if(typeof main.js.router_ !== 'undefined'){
} else {
main.js.router_ = cljs.core.atom.call(null,null);
}
main.js.stop_router_BANG_ = (function main$js$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,main.js.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
main.js.start_router_BANG_ = (function main$js$start_router_BANG_(){
main.js.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,main.js.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,main.js.ch_chsk,main.js.event_msg_handler));
});
main.js.start_BANG_ = (function main$js$start_BANG_(){
return main.js.start_router_BANG_.call(null);
});
if(typeof main.js._start_once !== 'undefined'){
} else {
main.js._start_once = main.js.start_BANG_.call(null);
}

//# sourceMappingURL=js.js.map