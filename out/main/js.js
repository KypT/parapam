// Compiled by ClojureScript 1.9.225 {}
goog.provide('main.js');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
var map__29671_29673 = taoensso.sente.make_channel_socket_BANG_.call(null,"chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__29671_29674__$1 = ((((!((map__29671_29673 == null)))?((((map__29671_29673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29671_29673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29671_29673):map__29671_29673);
var chsk_29675 = cljs.core.get.call(null,map__29671_29674__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_29676 = cljs.core.get.call(null,map__29671_29674__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_29677 = cljs.core.get.call(null,map__29671_29674__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_29678 = cljs.core.get.call(null,map__29671_29674__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
main.js.chsk = chsk_29675;

main.js.ch_chsk = ch_recv_29676;

main.js.chsk_send_BANG_ = send_fn_29677;

main.js.chsk_state = state_29678;
main.js.__GT_output_BANG_ = (function main$js$__GT_output_BANG_(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29680 = arguments.length;
var i__27823__auto___29681 = (0);
while(true){
if((i__27823__auto___29681 < len__27822__auto___29680)){
args__27829__auto__.push((arguments[i__27823__auto___29681]));

var G__29682 = (i__27823__auto___29681 + (1));
i__27823__auto___29681 = G__29682;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return main.js.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});

main.js.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,cljs.core.map.call(null,cljs.core.clj__GT_js,args));
});

main.js.__GT_output_BANG_.cljs$lang$maxFixedArity = (0);

main.js.__GT_output_BANG_.cljs$lang$applyTo = (function (seq29679){
return main.js.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29679));
});

if(typeof main.js._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
main.js._event_msg_handler = (function (){var method_table__27672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"main.js","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27676__auto__,method_table__27672__auto__,prefer_table__27673__auto__,method_cache__27674__auto__,cached_hierarchy__27675__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
main.js.event_msg_handler = (function main$js$event_msg_handler(p__29683){
var map__29686 = p__29683;
var map__29686__$1 = ((((!((map__29686 == null)))?((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var ev_msg = map__29686__$1;
var id = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"event","event",301435442));
return main.js._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29688){
var map__29689 = p__29688;
var map__29689__$1 = ((((!((map__29689 == null)))?((((map__29689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29689):map__29689);
var ev_msg = map__29689__$1;
var event = cljs.core.get.call(null,map__29689__$1,new cljs.core.Keyword(null,"event","event",301435442));
return main.js.__GT_output_BANG_.call(null,"Unhandled event:",event);
}));
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__29691){
var map__29692 = p__29691;
var map__29692__$1 = ((((!((map__29692 == null)))?((((map__29692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29692):map__29692);
var ev_msg = map__29692__$1;
var _QMARK_data = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return main.js.__GT_output_BANG_.call(null,"State change: ",ev_msg);
}));
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__29694){
var map__29695 = p__29694;
var map__29695__$1 = ((((!((map__29695 == null)))?((((map__29695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);
var ev_msg = map__29695__$1;
var _QMARK_data = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
main.js.__GT_output_BANG_.call(null,"Push event from server:",_QMARK_data);

return IncrementalDOM.patch(document.body,jsonml2idom,cljs.core.clj__GT_js.call(null,_QMARK_data));
}));
cljs.core._add_method.call(null,main.js._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__29697){
var map__29698 = p__29697;
var map__29698__$1 = ((((!((map__29698 == null)))?((((map__29698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);
var ev_msg = map__29698__$1;
var _QMARK_data = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__29700 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__29700,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29700,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29700,(2),null);
return main.js.__GT_output_BANG_.call(null,"Handshake:",_QMARK_data);
}));
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