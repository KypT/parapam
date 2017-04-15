// Compiled by ClojureScript 1.9.225 {}
goog.provide('my_client_side_ns');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
var map__29128_29130 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__29128_29131__$1 = ((((!((map__29128_29130 == null)))?((((map__29128_29130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29128_29130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29128_29130):map__29128_29130);
var chsk_29132 = cljs.core.get.call(null,map__29128_29131__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_29133 = cljs.core.get.call(null,map__29128_29131__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_29134 = cljs.core.get.call(null,map__29128_29131__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_29135 = cljs.core.get.call(null,map__29128_29131__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
my_client_side_ns.chsk = chsk_29132;

my_client_side_ns.ch_chsk = ch_recv_29133;

my_client_side_ns.chsk_send_BANG_ = send_fn_29134;

my_client_side_ns.chsk_state = state_29135;

//# sourceMappingURL=my_client_side_ns.js.map