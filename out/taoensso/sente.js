// Compiled by ClojureScript 1.9.225 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__35394 = x;
var ev_id = cljs.core.nth.call(null,vec__35394,(0),null);
var _ = cljs.core.nth.call(null,vec__35394,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__26563__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__26563__auto__){
var and__26563__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__26563__auto____$1){
var map__35407 = x;
var map__35407__$1 = ((((!((map__35407 == null)))?((((map__35407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35407):map__35407);
var ch_recv = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35407__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__26563__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__26563__auto____$2){
var and__26563__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__26563__auto____$3){
var and__26563__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__26563__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__26563__auto____$4;
}
} else {
return and__26563__auto____$3;
}
} else {
return and__26563__auto____$2;
}
} else {
return and__26563__auto____$1;
}
} else {
return and__26563__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__26563__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__26563__auto__){
var and__26563__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__26563__auto____$1){
var map__35419 = x;
var map__35419__$1 = ((((!((map__35419 == null)))?((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35419):map__35419);
var ch_recv = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__26563__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__26563__auto____$2){
var and__26563__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__26563__auto____$3){
var and__26563__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__26563__auto____$4){
var and__26563__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__26563__auto____$5){
var and__26563__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__26563__auto____$6){
var and__26563__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__26563__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__26563__auto____$7;
}
} else {
return and__26563__auto____$6;
}
} else {
return and__26563__auto____$5;
}
} else {
return and__26563__auto____$4;
}
} else {
return and__26563__auto____$3;
}
} else {
return and__26563__auto____$2;
}
} else {
return and__26563__auto____$1;
}
} else {
return and__26563__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35421){
var map__35427 = p__35421;
var map__35427__$1 = ((((!((map__35427 == null)))?((((map__35427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35427):map__35427);
var ev_msg = map__35427__$1;
var event = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35429 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35429,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35429,(1),null);
var valid_event = vec__35429;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35429,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35427,map__35427__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35429,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35427,map__35427__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,2119617159);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e35439){var t = e35439;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1914140187);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__35436 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35436,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35436,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__35436,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__35436,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-933757464);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args35440 = [];
var len__27650__auto___35443 = arguments.length;
var i__27651__auto___35444 = (0);
while(true){
if((i__27651__auto___35444 < len__27650__auto___35443)){
args35440.push((arguments[i__27651__auto___35444]));

var G__35445 = (i__27651__auto___35444 + (1));
i__27651__auto___35444 = G__35445;
continue;
} else {
}
break;
}

var G__35442 = args35440.length;
switch (G__35442) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35440.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1113357352);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1856645424);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__35447_SHARP_){
if(!((p1__35447_SHARP_ == null))){
if((false) || (p1__35447_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__35447_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__35447_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__35447_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35450){if((e35450 instanceof Error)){
var e = e35450;
return e;
} else {
throw e35450;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35447#] (satisfies? interfaces/IPacker p1__35447#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__27657__auto__ = [];
var len__27650__auto___35758 = arguments.length;
var i__27651__auto___35759 = (0);
while(true){
if((i__27651__auto___35759 < len__27650__auto___35758)){
args__27657__auto__.push((arguments[i__27651__auto___35759]));

var G__35760 = (i__27651__auto___35759 + (1));
i__27651__auto___35759 = G__35760;
continue;
} else {
}
break;
}

var argseq__27658__auto__ = ((((1) < args__27657__auto__.length))?(new cljs.core.IndexedSeq(args__27657__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27658__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__35455){
var vec__35456 = p__35455;
var map__35459 = cljs.core.nth.call(null,vec__35456,(0),null);
var map__35459__$1 = ((((!((map__35459 == null)))?((((map__35459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35459):map__35459);
var recv_buf_or_n = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__26575__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var or__26575__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__26575__auto____$1)){
return or__26575__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35461){if((e35461 instanceof Error)){
var e = e35461;
return e;
} else {
throw e35461;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35462){if((e35462 instanceof Error)){
var e = e35462;
return e;
} else {
throw e35462;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_35761 = (function (){try{if(((function (vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35452_SHARP_){
if(!((p1__35452_SHARP_ == null))){
if((false) || (p1__35452_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35452_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35452_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35452_SHARP_);
}
});})(vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35463){if((e35463 instanceof Error)){
var e = e35463;
return e;
} else {
throw e35463;

}
}})();
if((e_35761 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35452#] (satisfies? interfaces/IServerChanAdapter p1__35452#)) web-server-ch-adapter)",web_server_ch_adapter,e_35761,null);
}

var max_ms_35762 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_35762)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_35762)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_35762], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__26575__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__35763 = null;
var G__35763__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__35465 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__35465,(0),null);
var _udt = cljs.core.nth.call(null,vec__35465,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__35763__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__35763 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__35763__3.call(this,conn_type,uid,client_id);
case 4:
return G__35763__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35763.cljs$core$IFn$_invoke$arity$3 = G__35763__3;
G__35763.cljs$core$IFn$_invoke$arity$4 = G__35763__4;
return G__35763;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35468){if((e35468 instanceof Error)){
var e = e35468;
return e;
} else {
throw e35468;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35469){
var map__35470 = p__35469;
var map__35470__$1 = ((((!((map__35470 == null)))?((((map__35470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35470):map__35470);
var old_m = map__35470__$1;
var ws = cljs.core.get.call(null,map__35470__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__35470__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35470__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35472 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__35472) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35473){if((e35473 instanceof Error)){
var e = e35473;
return e;
} else {
throw e35473;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35474){
var map__35475 = p__35474;
var map__35475__$1 = ((((!((map__35475 == null)))?((((map__35475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35475):map__35475);
var old_m = map__35475__$1;
var ws = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35765__delegate = function (user_id,ev,p__35477){
var vec__35478 = p__35477;
var map__35481 = cljs.core.nth.call(null,vec__35478,(0),null);
var map__35481__$1 = ((((!((map__35481 == null)))?((((map__35481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35481):map__35481);
var opts = map__35481__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35481__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35766 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35767 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35766,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35766,ev], null);
});})(uid_35766,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1147307917);
var __35768__$1 = (cljs.core.truth_(uid_35766)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35769__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35770 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35771 = ((function (uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35483 = cljs.core.get.call(null,m,uid_35766);
var ___$3 = cljs.core.nth.call(null,vec__35483,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35483,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35770)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35766),cljs.core.get.call(null,m,uid_35766));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__35486 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35486,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35486,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35486,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35486,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-303667984);

var G__35489 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__35489) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35766,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35766,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35766], null);
});})(uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1962438800);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__35771.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__35771.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__35490_35773 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35766], null))));
var chunk__35491_35774 = null;
var count__35492_35775 = (0);
var i__35493_35776 = (0);
while(true){
if((i__35493_35776 < count__35492_35775)){
var vec__35494_35777 = cljs.core._nth.call(null,chunk__35491_35774,i__35493_35776);
var _QMARK_sch_35778 = cljs.core.nth.call(null,vec__35494_35777,(0),null);
var _udt_35779 = cljs.core.nth.call(null,vec__35494_35777,(1),null);
var temp__4657__auto___35780 = _QMARK_sch_35778;
if(cljs.core.truth_(temp__4657__auto___35780)){
var sch_35781 = temp__4657__auto___35780;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35781);
} else {
}

var G__35782 = seq__35490_35773;
var G__35783 = chunk__35491_35774;
var G__35784 = count__35492_35775;
var G__35785 = (i__35493_35776 + (1));
seq__35490_35773 = G__35782;
chunk__35491_35774 = G__35783;
count__35492_35775 = G__35784;
i__35493_35776 = G__35785;
continue;
} else {
var temp__4657__auto___35786 = cljs.core.seq.call(null,seq__35490_35773);
if(temp__4657__auto___35786){
var seq__35490_35787__$1 = temp__4657__auto___35786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35490_35787__$1)){
var c__27386__auto___35788 = cljs.core.chunk_first.call(null,seq__35490_35787__$1);
var G__35789 = cljs.core.chunk_rest.call(null,seq__35490_35787__$1);
var G__35790 = c__27386__auto___35788;
var G__35791 = cljs.core.count.call(null,c__27386__auto___35788);
var G__35792 = (0);
seq__35490_35773 = G__35789;
chunk__35491_35774 = G__35790;
count__35492_35775 = G__35791;
i__35493_35776 = G__35792;
continue;
} else {
var vec__35497_35793 = cljs.core.first.call(null,seq__35490_35787__$1);
var _QMARK_sch_35794 = cljs.core.nth.call(null,vec__35497_35793,(0),null);
var _udt_35795 = cljs.core.nth.call(null,vec__35497_35793,(1),null);
var temp__4657__auto___35796__$1 = _QMARK_sch_35794;
if(cljs.core.truth_(temp__4657__auto___35796__$1)){
var sch_35797 = temp__4657__auto___35796__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35797);
} else {
}

var G__35798 = cljs.core.next.call(null,seq__35490_35787__$1);
var G__35799 = null;
var G__35800 = (0);
var G__35801 = (0);
seq__35490_35773 = G__35798;
chunk__35491_35774 = G__35799;
count__35492_35775 = G__35800;
i__35493_35776 = G__35801;
continue;
}
} else {
}
}
break;
}

var seq__35500_35802 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35766], null))));
var chunk__35501_35803 = null;
var count__35502_35804 = (0);
var i__35503_35805 = (0);
while(true){
if((i__35503_35805 < count__35502_35804)){
var vec__35504_35806 = cljs.core._nth.call(null,chunk__35501_35803,i__35503_35805);
var _QMARK_sch_35807 = cljs.core.nth.call(null,vec__35504_35806,(0),null);
var _udt_35808 = cljs.core.nth.call(null,vec__35504_35806,(1),null);
var temp__4657__auto___35809 = _QMARK_sch_35807;
if(cljs.core.truth_(temp__4657__auto___35809)){
var sch_35810 = temp__4657__auto___35809;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35810);
} else {
}

var G__35811 = seq__35500_35802;
var G__35812 = chunk__35501_35803;
var G__35813 = count__35502_35804;
var G__35814 = (i__35503_35805 + (1));
seq__35500_35802 = G__35811;
chunk__35501_35803 = G__35812;
count__35502_35804 = G__35813;
i__35503_35805 = G__35814;
continue;
} else {
var temp__4657__auto___35815 = cljs.core.seq.call(null,seq__35500_35802);
if(temp__4657__auto___35815){
var seq__35500_35816__$1 = temp__4657__auto___35815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35500_35816__$1)){
var c__27386__auto___35817 = cljs.core.chunk_first.call(null,seq__35500_35816__$1);
var G__35818 = cljs.core.chunk_rest.call(null,seq__35500_35816__$1);
var G__35819 = c__27386__auto___35817;
var G__35820 = cljs.core.count.call(null,c__27386__auto___35817);
var G__35821 = (0);
seq__35500_35802 = G__35818;
chunk__35501_35803 = G__35819;
count__35502_35804 = G__35820;
i__35503_35805 = G__35821;
continue;
} else {
var vec__35507_35822 = cljs.core.first.call(null,seq__35500_35816__$1);
var _QMARK_sch_35823 = cljs.core.nth.call(null,vec__35507_35822,(0),null);
var _udt_35824 = cljs.core.nth.call(null,vec__35507_35822,(1),null);
var temp__4657__auto___35825__$1 = _QMARK_sch_35823;
if(cljs.core.truth_(temp__4657__auto___35825__$1)){
var sch_35826 = temp__4657__auto___35825__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35826);
} else {
}

var G__35827 = cljs.core.next.call(null,seq__35500_35816__$1);
var G__35828 = null;
var G__35829 = (0);
var G__35830 = (0);
seq__35500_35802 = G__35827;
chunk__35501_35803 = G__35828;
count__35502_35804 = G__35829;
i__35503_35805 = G__35830;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35510_35831 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35511_35832 = null;
var count__35512_35833 = (0);
var i__35513_35834 = (0);
while(true){
if((i__35513_35834 < count__35512_35833)){
var conn_type_35835 = cljs.core._nth.call(null,chunk__35511_35832,i__35513_35834);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_35835,uid_35766], null),((function (seq__35510_35831,chunk__35511_35832,count__35512_35833,i__35513_35834,conn_type_35835,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35770], true)], null);
} else {
var vec__35514 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35514,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35514,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35770)], null);
}
});})(seq__35510_35831,chunk__35511_35832,count__35512_35833,i__35513_35834,conn_type_35835,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35836 = seq__35510_35831;
var G__35837 = chunk__35511_35832;
var G__35838 = count__35512_35833;
var G__35839 = (i__35513_35834 + (1));
seq__35510_35831 = G__35836;
chunk__35511_35832 = G__35837;
count__35512_35833 = G__35838;
i__35513_35834 = G__35839;
continue;
} else {
var temp__4657__auto___35840 = cljs.core.seq.call(null,seq__35510_35831);
if(temp__4657__auto___35840){
var seq__35510_35841__$1 = temp__4657__auto___35840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35510_35841__$1)){
var c__27386__auto___35842 = cljs.core.chunk_first.call(null,seq__35510_35841__$1);
var G__35843 = cljs.core.chunk_rest.call(null,seq__35510_35841__$1);
var G__35844 = c__27386__auto___35842;
var G__35845 = cljs.core.count.call(null,c__27386__auto___35842);
var G__35846 = (0);
seq__35510_35831 = G__35843;
chunk__35511_35832 = G__35844;
count__35512_35833 = G__35845;
i__35513_35834 = G__35846;
continue;
} else {
var conn_type_35847 = cljs.core.first.call(null,seq__35510_35841__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_35847,uid_35766], null),((function (seq__35510_35831,chunk__35511_35832,count__35512_35833,i__35513_35834,conn_type_35847,seq__35510_35841__$1,temp__4657__auto___35840,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35770], true)], null);
} else {
var vec__35517 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35517,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35770)], null);
}
});})(seq__35510_35831,chunk__35511_35832,count__35512_35833,i__35513_35834,conn_type_35847,seq__35510_35841__$1,temp__4657__auto___35840,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35848 = cljs.core.next.call(null,seq__35510_35841__$1);
var G__35849 = null;
var G__35850 = (0);
var G__35851 = (0);
seq__35510_35831 = G__35848;
chunk__35511_35832 = G__35849;
count__35512_35833 = G__35850;
i__35513_35834 = G__35851;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__35771.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__35771.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_35852 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_35853 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__32489__auto___35854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___35854,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___35854,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35524){
var state_val_35525 = (state_35524[(1)]);
if((state_val_35525 === (1))){
var state_35524__$1 = state_35524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35524__$1,(2),ws_timeout_35852);
} else {
if((state_val_35525 === (2))){
var inst_35521 = (state_35524[(2)]);
var inst_35522 = flush_buffer_BANG__35771.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35524__$1 = (function (){var statearr_35526 = state_35524;
(statearr_35526[(7)] = inst_35521);

return statearr_35526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35524__$1,inst_35522);
} else {
return null;
}
}
});})(c__32489__auto___35854,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32377__auto__,c__32489__auto___35854,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_35530 = [null,null,null,null,null,null,null,null];
(statearr_35530[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_35530[(1)] = (1));

return statearr_35530;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_35524){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35531){if((e35531 instanceof Object)){
var ex__32381__auto__ = e35531;
var statearr_35532_35855 = state_35524;
(statearr_35532_35855[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35856 = state_35524;
state_35524 = G__35856;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_35524){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_35524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___35854,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32491__auto__ = (function (){var statearr_35533 = f__32490__auto__.call(null);
(statearr_35533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___35854);

return statearr_35533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___35854,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__32489__auto___35857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___35857,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___35857,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35538){
var state_val_35539 = (state_35538[(1)]);
if((state_val_35539 === (1))){
var state_35538__$1 = state_35538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35538__$1,(2),ajax_timeout_35853);
} else {
if((state_val_35539 === (2))){
var inst_35535 = (state_35538[(2)]);
var inst_35536 = flush_buffer_BANG__35771.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35538__$1 = (function (){var statearr_35540 = state_35538;
(statearr_35540[(7)] = inst_35535);

return statearr_35540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35538__$1,inst_35536);
} else {
return null;
}
}
});})(c__32489__auto___35857,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32377__auto__,c__32489__auto___35857,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_35544 = [null,null,null,null,null,null,null,null];
(statearr_35544[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_35544[(1)] = (1));

return statearr_35544;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_35538){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35545){if((e35545 instanceof Object)){
var ex__32381__auto__ = e35545;
var statearr_35546_35858 = state_35538;
(statearr_35546_35858[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35859 = state_35538;
state_35538 = G__35859;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_35538){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_35538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___35857,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32491__auto__ = (function (){var statearr_35547 = f__32490__auto__.call(null);
(statearr_35547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___35857);

return statearr_35547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___35857,ws_timeout_35852,ajax_timeout_35853,uid_35766,__35767,__35768__$1,__35769__$2,ev_uuid_35770,flush_buffer_BANG__35771,vec__35478,map__35481,map__35481__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__35765 = function (user_id,ev,var_args){
var p__35477 = null;
if (arguments.length > 2) {
var G__35860__i = 0, G__35860__a = new Array(arguments.length -  2);
while (G__35860__i < G__35860__a.length) {G__35860__a[G__35860__i] = arguments[G__35860__i + 2]; ++G__35860__i;}
  p__35477 = new cljs.core.IndexedSeq(G__35860__a,0);
} 
return G__35765__delegate.call(this,user_id,ev,p__35477);};
G__35765.cljs$lang$maxFixedArity = 2;
G__35765.cljs$lang$applyTo = (function (arglist__35861){
var user_id = cljs.core.first(arglist__35861);
arglist__35861 = cljs.core.next(arglist__35861);
var ev = cljs.core.first(arglist__35861);
var p__35477 = cljs.core.rest(arglist__35861);
return G__35765__delegate(user_id,ev,p__35477);
});
G__35765.cljs$core$IFn$_invoke$arity$variadic = G__35765__delegate;
return G__35765;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35548 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35548,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35548,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,306810869);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35556){
var state_val_35557 = (state_35556[(1)]);
if((state_val_35557 === (1))){
var inst_35551 = cljs.core.async.timeout.call(null,ms);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(2),inst_35551);
} else {
if((state_val_35557 === (2))){
var inst_35553 = (state_35556[(2)]);
var inst_35554 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_35556__$1 = (function (){var statearr_35558 = state_35556;
(statearr_35558[(7)] = inst_35553);

return statearr_35558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35556__$1,inst_35554);
} else {
return null;
}
}
});})(c__32489__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32377__auto__,c__32489__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_35562 = [null,null,null,null,null,null,null,null];
(statearr_35562[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_35562[(1)] = (1));

return statearr_35562;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_35556){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35563){if((e35563 instanceof Object)){
var ex__32381__auto__ = e35563;
var statearr_35564_35862 = state_35556;
(statearr_35564_35862[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35863 = state_35556;
state_35556 = G__35863;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_35556){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_35556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32491__auto__ = (function (){var statearr_35565 = f__32490__auto__.call(null);
(statearr_35565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_35565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35548,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32489__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1150033565);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1861633090);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1895395308);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35601){
var state_val_35602 = (state_35601[(1)]);
if((state_val_35602 === (7))){
var inst_35597 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35603_35864 = state_35601__$1;
(statearr_35603_35864[(2)] = inst_35597);

(statearr_35603_35864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (1))){
var inst_35566 = udt_open;
var state_35601__$1 = (function (){var statearr_35604 = state_35601;
(statearr_35604[(7)] = inst_35566);

return statearr_35604;
})();
var statearr_35605_35865 = state_35601__$1;
(statearr_35605_35865[(2)] = null);

(statearr_35605_35865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (4))){
var inst_35575 = (state_35601[(8)]);
var inst_35570 = (state_35601[(2)]);
var inst_35571 = cljs.core.deref.call(null,conns_);
var inst_35572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35573 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_35574 = (new cljs.core.PersistentVector(null,3,(5),inst_35572,inst_35573,null));
var inst_35575__$1 = cljs.core.get_in.call(null,inst_35571,inst_35574);
var state_35601__$1 = (function (){var statearr_35606 = state_35601;
(statearr_35606[(8)] = inst_35575__$1);

(statearr_35606[(9)] = inst_35570);

return statearr_35606;
})();
if(cljs.core.truth_(inst_35575__$1)){
var statearr_35607_35866 = state_35601__$1;
(statearr_35607_35866[(1)] = (5));

} else {
var statearr_35608_35867 = state_35601__$1;
(statearr_35608_35867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (13))){
var inst_35581 = (state_35601[(10)]);
var inst_35590 = (state_35601[(2)]);
var inst_35566 = inst_35581;
var state_35601__$1 = (function (){var statearr_35609 = state_35601;
(statearr_35609[(11)] = inst_35590);

(statearr_35609[(7)] = inst_35566);

return statearr_35609;
})();
var statearr_35610_35868 = state_35601__$1;
(statearr_35610_35868[(2)] = null);

(statearr_35610_35868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (6))){
var state_35601__$1 = state_35601;
var statearr_35611_35869 = state_35601__$1;
(statearr_35611_35869[(2)] = null);

(statearr_35611_35869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (3))){
var inst_35599 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35601__$1,inst_35599);
} else {
if((state_val_35602 === (12))){
var state_35601__$1 = state_35601;
var statearr_35612_35870 = state_35601__$1;
(statearr_35612_35870[(2)] = null);

(statearr_35612_35870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (2))){
var inst_35568 = cljs.core.async.timeout.call(null,ms);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35601__$1,(4),inst_35568);
} else {
if((state_val_35602 === (11))){
var inst_35586 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_35587 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_35586);
var state_35601__$1 = state_35601;
var statearr_35613_35871 = state_35601__$1;
(statearr_35613_35871[(2)] = inst_35587);

(statearr_35613_35871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (9))){
var state_35601__$1 = state_35601;
var statearr_35614_35872 = state_35601__$1;
(statearr_35614_35872[(2)] = null);

(statearr_35614_35872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (5))){
var inst_35575 = (state_35601[(8)]);
var inst_35580 = cljs.core.nth.call(null,inst_35575,(0),null);
var inst_35581 = cljs.core.nth.call(null,inst_35575,(1),null);
var inst_35582 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_35601__$1 = (function (){var statearr_35615 = state_35601;
(statearr_35615[(12)] = inst_35580);

(statearr_35615[(10)] = inst_35581);

return statearr_35615;
})();
if(cljs.core.truth_(inst_35582)){
var statearr_35616_35873 = state_35601__$1;
(statearr_35616_35873[(1)] = (8));

} else {
var statearr_35617_35874 = state_35601__$1;
(statearr_35617_35874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (10))){
var inst_35594 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35618_35875 = state_35601__$1;
(statearr_35618_35875[(2)] = inst_35594);

(statearr_35618_35875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (8))){
var inst_35581 = (state_35601[(10)]);
var inst_35566 = (state_35601[(7)]);
var inst_35584 = cljs.core._EQ_.call(null,inst_35581,inst_35566);
var state_35601__$1 = state_35601;
if(inst_35584){
var statearr_35619_35876 = state_35601__$1;
(statearr_35619_35876[(1)] = (11));

} else {
var statearr_35620_35877 = state_35601__$1;
(statearr_35620_35877[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32377__auto__,c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_35624 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35624[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_35624[(1)] = (1));

return statearr_35624;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_35601){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35625){if((e35625 instanceof Object)){
var ex__32381__auto__ = e35625;
var statearr_35626_35878 = state_35601;
(statearr_35626_35878[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35879 = state_35601;
state_35601 = G__35879;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_35601){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_35601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32491__auto__ = (function (){var statearr_35627 = f__32490__auto__.call(null);
(statearr_35627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_35627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32489__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1297231700);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__26575__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35653){
var state_val_35654 = (state_35653[(1)]);
if((state_val_35654 === (1))){
var inst_35628 = cljs.core.async.timeout.call(null,ms);
var state_35653__$1 = state_35653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35653__$1,(2),inst_35628);
} else {
if((state_val_35654 === (2))){
var inst_35635 = (state_35653[(7)]);
var inst_35630 = (state_35653[(2)]);
var inst_35631 = cljs.core.deref.call(null,conns_);
var inst_35632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35633 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_35634 = (new cljs.core.PersistentVector(null,3,(5),inst_35632,inst_35633,null));
var inst_35635__$1 = cljs.core.get_in.call(null,inst_35631,inst_35634);
var state_35653__$1 = (function (){var statearr_35655 = state_35653;
(statearr_35655[(7)] = inst_35635__$1);

(statearr_35655[(8)] = inst_35630);

return statearr_35655;
})();
if(cljs.core.truth_(inst_35635__$1)){
var statearr_35656_35880 = state_35653__$1;
(statearr_35656_35880[(1)] = (3));

} else {
var statearr_35657_35881 = state_35653__$1;
(statearr_35657_35881[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (3))){
var inst_35635 = (state_35653[(7)]);
var inst_35640 = cljs.core.nth.call(null,inst_35635,(0),null);
var inst_35641 = cljs.core.nth.call(null,inst_35635,(1),null);
var inst_35642 = cljs.core._EQ_.call(null,inst_35641,udt_open);
var state_35653__$1 = (function (){var statearr_35658 = state_35653;
(statearr_35658[(9)] = inst_35640);

return statearr_35658;
})();
if(inst_35642){
var statearr_35659_35882 = state_35653__$1;
(statearr_35659_35882[(1)] = (6));

} else {
var statearr_35660_35883 = state_35653__$1;
(statearr_35660_35883[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (4))){
var state_35653__$1 = state_35653;
var statearr_35661_35884 = state_35653__$1;
(statearr_35661_35884[(2)] = null);

(statearr_35661_35884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (5))){
var inst_35651 = (state_35653[(2)]);
var state_35653__$1 = state_35653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35653__$1,inst_35651);
} else {
if((state_val_35654 === (6))){
var inst_35644 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_35645 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_35644);
var state_35653__$1 = state_35653;
var statearr_35662_35885 = state_35653__$1;
(statearr_35662_35885[(2)] = inst_35645);

(statearr_35662_35885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (7))){
var state_35653__$1 = state_35653;
var statearr_35663_35886 = state_35653__$1;
(statearr_35663_35886[(2)] = null);

(statearr_35663_35886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35654 === (8))){
var inst_35648 = (state_35653[(2)]);
var state_35653__$1 = state_35653;
var statearr_35664_35887 = state_35653__$1;
(statearr_35664_35887[(2)] = inst_35648);

(statearr_35664_35887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32377__auto__,c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_35668 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35668[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_35668[(1)] = (1));

return statearr_35668;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_35653){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35669){if((e35669 instanceof Object)){
var ex__32381__auto__ = e35669;
var statearr_35670_35888 = state_35653;
(statearr_35670_35888[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35889 = state_35653;
state_35653 = G__35889;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_35653){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_35653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32491__auto__ = (function (){var statearr_35671 = f__32490__auto__.call(null);
(statearr_35671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_35671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32489__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__35672 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35672,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35672,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35672,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35672,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35672,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,293005461);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35672,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1352703622);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35726){
var state_val_35727 = (state_35726[(1)]);
if((state_val_35727 === (7))){
var state_35726__$1 = state_35726;
var statearr_35728_35890 = state_35726__$1;
(statearr_35728_35890[(2)] = null);

(statearr_35728_35890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (1))){
var inst_35675 = cljs.core.async.timeout.call(null,(5000));
var state_35726__$1 = state_35726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35726__$1,(2),inst_35675);
} else {
if((state_val_35727 === (4))){
var state_35726__$1 = state_35726;
var statearr_35729_35891 = state_35726__$1;
(statearr_35729_35891[(2)] = null);

(statearr_35729_35891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (13))){
var state_35726__$1 = state_35726;
var statearr_35730_35892 = state_35726__$1;
(statearr_35730_35892[(2)] = null);

(statearr_35730_35892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (6))){
var inst_35703 = (state_35726[(7)]);
var inst_35685 = (state_35726[(8)]);
var inst_35686 = (state_35726[(9)]);
var inst_35687 = (state_35726[(10)]);
var inst_35698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35699 = [conn_type,uid,client_id];
var inst_35700 = (new cljs.core.PersistentVector(null,3,(5),inst_35698,inst_35699,null));
var inst_35702 = (function (){var vec__35678 = inst_35685;
var __QMARK_sch = inst_35686;
var udt_t1 = inst_35687;
return ((function (vec__35678,__QMARK_sch,udt_t1,inst_35703,inst_35685,inst_35686,inst_35687,inst_35698,inst_35699,inst_35700,state_val_35727,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35701){
var vec__35731 = p__35701;
var _sch = cljs.core.nth.call(null,vec__35731,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__35731,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__35678,__QMARK_sch,udt_t1,inst_35703,inst_35685,inst_35686,inst_35687,inst_35698,inst_35699,inst_35700,state_val_35727,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35703__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35700,inst_35702);
var state_35726__$1 = (function (){var statearr_35734 = state_35726;
(statearr_35734[(7)] = inst_35703__$1);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35703__$1)){
var statearr_35735_35893 = state_35726__$1;
(statearr_35735_35893[(1)] = (9));

} else {
var statearr_35736_35894 = state_35726__$1;
(statearr_35736_35894[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (3))){
var inst_35685 = (state_35726[(8)]);
var inst_35686 = (state_35726[(9)]);
var inst_35687 = (state_35726[(10)]);
var inst_35690 = (function (){var vec__35678 = inst_35685;
var __QMARK_sch = inst_35686;
var udt_t1 = inst_35687;
return ((function (vec__35678,__QMARK_sch,udt_t1,inst_35685,inst_35686,inst_35687,state_val_35727,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__35678,__QMARK_sch,udt_t1,inst_35685,inst_35686,inst_35687,state_val_35727,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35691 = (new cljs.core.Delay(inst_35690,null));
var inst_35692 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_35691,null,570445021);
var state_35726__$1 = state_35726;
var statearr_35737_35895 = state_35726__$1;
(statearr_35737_35895[(2)] = inst_35692);

(statearr_35737_35895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (12))){
var inst_35712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35713 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_35714 = (new cljs.core.PersistentVector(null,2,(5),inst_35712,inst_35713,null));
var inst_35715 = receive_event_msg_BANG_.call(null,inst_35714);
var state_35726__$1 = state_35726;
var statearr_35738_35896 = state_35726__$1;
(statearr_35738_35896[(2)] = inst_35715);

(statearr_35738_35896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (2))){
var inst_35685 = (state_35726[(8)]);
var inst_35677 = (state_35726[(2)]);
var inst_35681 = cljs.core.deref.call(null,conns_);
var inst_35682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35683 = [conn_type,uid,client_id];
var inst_35684 = (new cljs.core.PersistentVector(null,3,(5),inst_35682,inst_35683,null));
var inst_35685__$1 = cljs.core.get_in.call(null,inst_35681,inst_35684);
var inst_35686 = cljs.core.nth.call(null,inst_35685__$1,(0),null);
var inst_35687 = cljs.core.nth.call(null,inst_35685__$1,(1),null);
var inst_35688 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_35726__$1 = (function (){var statearr_35739 = state_35726;
(statearr_35739[(8)] = inst_35685__$1);

(statearr_35739[(9)] = inst_35686);

(statearr_35739[(10)] = inst_35687);

(statearr_35739[(11)] = inst_35677);

return statearr_35739;
})();
if(cljs.core.truth_(inst_35688)){
var statearr_35740_35897 = state_35726__$1;
(statearr_35740_35897[(1)] = (3));

} else {
var statearr_35741_35898 = state_35726__$1;
(statearr_35741_35898[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (11))){
var inst_35721 = (state_35726[(2)]);
var state_35726__$1 = state_35726;
var statearr_35742_35899 = state_35726__$1;
(statearr_35742_35899[(2)] = inst_35721);

(statearr_35742_35899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (9))){
var inst_35703 = (state_35726[(7)]);
var inst_35685 = (state_35726[(8)]);
var inst_35686 = (state_35726[(9)]);
var inst_35687 = (state_35726[(10)]);
var inst_35705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35706 = [conn_type,uid];
var inst_35707 = (new cljs.core.PersistentVector(null,2,(5),inst_35705,inst_35706,null));
var inst_35708 = (function (){var vec__35678 = inst_35685;
var __QMARK_sch = inst_35686;
var udt_t1 = inst_35687;
var disconnect_QMARK_ = inst_35703;
return ((function (vec__35678,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_35703,inst_35685,inst_35686,inst_35687,inst_35705,inst_35706,inst_35707,state_val_35727,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__35678,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_35703,inst_35685,inst_35686,inst_35687,inst_35705,inst_35706,inst_35707,state_val_35727,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35709 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35707,inst_35708);
var inst_35710 = upd_connected_uid_BANG_.call(null,uid);
var state_35726__$1 = (function (){var statearr_35743 = state_35726;
(statearr_35743[(12)] = inst_35709);

return statearr_35743;
})();
if(cljs.core.truth_(inst_35710)){
var statearr_35744_35900 = state_35726__$1;
(statearr_35744_35900[(1)] = (12));

} else {
var statearr_35745_35901 = state_35726__$1;
(statearr_35745_35901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (5))){
var inst_35687 = (state_35726[(10)]);
var inst_35695 = (state_35726[(2)]);
var inst_35696 = cljs.core._EQ_.call(null,inst_35687,udt_close);
var state_35726__$1 = (function (){var statearr_35746 = state_35726;
(statearr_35746[(13)] = inst_35695);

return statearr_35746;
})();
if(inst_35696){
var statearr_35747_35902 = state_35726__$1;
(statearr_35747_35902[(1)] = (6));

} else {
var statearr_35748_35903 = state_35726__$1;
(statearr_35748_35903[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (14))){
var inst_35718 = (state_35726[(2)]);
var state_35726__$1 = state_35726;
var statearr_35749_35904 = state_35726__$1;
(statearr_35749_35904[(2)] = inst_35718);

(statearr_35749_35904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (10))){
var state_35726__$1 = state_35726;
var statearr_35750_35905 = state_35726__$1;
(statearr_35750_35905[(2)] = null);

(statearr_35750_35905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35727 === (8))){
var inst_35724 = (state_35726[(2)]);
var state_35726__$1 = state_35726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35726__$1,inst_35724);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32377__auto__,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_35754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35754[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_35754[(1)] = (1));

return statearr_35754;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_35726){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object)){
var ex__32381__auto__ = e35755;
var statearr_35756_35906 = state_35726;
(statearr_35756_35906[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35907 = state_35726;
state_35726 = G__35907;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_35726){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_35726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32491__auto__ = (function (){var statearr_35757 = f__32490__auto__.call(null);
(statearr_35757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_35757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32489__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-953515658);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35456,map__35459,map__35459__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35453){
var G__35454 = cljs.core.first.call(null,seq35453);
var seq35453__$1 = cljs.core.next.call(null,seq35453);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35454,seq35453__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-91382773);

var seq__35924 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__35925 = null;
var count__35926 = (0);
var i__35927 = (0);
while(true){
if((i__35927 < count__35926)){
var vec__35928 = cljs.core._nth.call(null,chunk__35925,i__35927);
var client_id = cljs.core.nth.call(null,vec__35928,(0),null);
var vec__35931 = cljs.core.nth.call(null,vec__35928,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__35931,(0),null);
var _udt = cljs.core.nth.call(null,vec__35931,(1),null);
var temp__4657__auto___35940 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___35940)){
var sch_35941 = temp__4657__auto___35940;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_35941,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__35942 = seq__35924;
var G__35943 = chunk__35925;
var G__35944 = count__35926;
var G__35945 = (i__35927 + (1));
seq__35924 = G__35942;
chunk__35925 = G__35943;
count__35926 = G__35944;
i__35927 = G__35945;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35924);
if(temp__4657__auto__){
var seq__35924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35924__$1)){
var c__27386__auto__ = cljs.core.chunk_first.call(null,seq__35924__$1);
var G__35946 = cljs.core.chunk_rest.call(null,seq__35924__$1);
var G__35947 = c__27386__auto__;
var G__35948 = cljs.core.count.call(null,c__27386__auto__);
var G__35949 = (0);
seq__35924 = G__35946;
chunk__35925 = G__35947;
count__35926 = G__35948;
i__35927 = G__35949;
continue;
} else {
var vec__35934 = cljs.core.first.call(null,seq__35924__$1);
var client_id = cljs.core.nth.call(null,vec__35934,(0),null);
var vec__35937 = cljs.core.nth.call(null,vec__35934,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__35937,(0),null);
var _udt = cljs.core.nth.call(null,vec__35937,(1),null);
var temp__4657__auto___35950__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___35950__$1)){
var sch_35951 = temp__4657__auto___35950__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_35951,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__35952 = cljs.core.next.call(null,seq__35924__$1);
var G__35953 = null;
var G__35954 = (0);
var G__35955 = (0);
seq__35924 = G__35952;
chunk__35925 = G__35953;
count__35926 = G__35954;
i__35927 = G__35955;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,322432640);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_36086){
var state_val_36087 = (state_36086[(1)]);
if((state_val_36087 === (7))){
var inst_36042 = (state_36086[(7)]);
var inst_36041 = (state_36086[(8)]);
var inst_36048 = (state_36086[(9)]);
var inst_36058 = (function (){var n = inst_36041;
var client_ids_satisfied = inst_36042;
var _QMARK_pulled = inst_36048;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36042,inst_36041,inst_36048,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__36057){
var vec__36088 = p__36057;
var _QMARK_sch = cljs.core.nth.call(null,vec__36088,(0),null);
var _udt = cljs.core.nth.call(null,vec__36088,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36042,inst_36041,inst_36048,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36059 = cljs.core.PersistentHashSet.EMPTY;
var inst_36060 = cljs.core.reduce_kv.call(null,inst_36058,inst_36059,inst_36048);
var state_36086__$1 = state_36086;
var statearr_36091_36124 = state_36086__$1;
(statearr_36091_36124[(2)] = inst_36060);

(statearr_36091_36124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (1))){
var inst_36040 = cljs.core.PersistentHashSet.EMPTY;
var inst_36041 = (0);
var inst_36042 = inst_36040;
var state_36086__$1 = (function (){var statearr_36092 = state_36086;
(statearr_36092[(7)] = inst_36042);

(statearr_36092[(8)] = inst_36041);

return statearr_36092;
})();
var statearr_36093_36125 = state_36086__$1;
(statearr_36093_36125[(2)] = null);

(statearr_36093_36125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (4))){
var state_36086__$1 = state_36086;
var statearr_36094_36126 = state_36086__$1;
(statearr_36094_36126[(2)] = true);

(statearr_36094_36126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (15))){
var inst_36079 = (state_36086[(2)]);
var state_36086__$1 = state_36086;
var statearr_36095_36127 = state_36086__$1;
(statearr_36095_36127[(2)] = inst_36079);

(statearr_36095_36127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (13))){
var inst_36065 = (state_36086[(10)]);
var inst_36070 = cljs.core.rand_int.call(null,inst_36065);
var inst_36071 = (inst_36065 + inst_36070);
var inst_36072 = cljs.core.async.timeout.call(null,inst_36071);
var state_36086__$1 = state_36086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36086__$1,(16),inst_36072);
} else {
if((state_val_36087 === (6))){
var inst_36048 = (state_36086[(9)]);
var inst_36055 = (state_36086[(2)]);
var state_36086__$1 = (function (){var statearr_36096 = state_36086;
(statearr_36096[(11)] = inst_36055);

return statearr_36096;
})();
if(cljs.core.truth_(inst_36048)){
var statearr_36097_36128 = state_36086__$1;
(statearr_36097_36128[(1)] = (7));

} else {
var statearr_36098_36129 = state_36086__$1;
(statearr_36098_36129[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (3))){
var inst_36084 = (state_36086[(2)]);
var state_36086__$1 = state_36086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36086__$1,inst_36084);
} else {
if((state_val_36087 === (12))){
var inst_36082 = (state_36086[(2)]);
var state_36086__$1 = state_36086;
var statearr_36099_36130 = state_36086__$1;
(statearr_36099_36130[(2)] = inst_36082);

(statearr_36099_36130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (2))){
var inst_36042 = (state_36086[(7)]);
var inst_36041 = (state_36086[(8)]);
var inst_36048 = (state_36086[(9)]);
var inst_36044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36045 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36046 = (new cljs.core.PersistentVector(null,2,(5),inst_36044,inst_36045,null));
var inst_36047 = (function (){var n = inst_36041;
var client_ids_satisfied = inst_36042;
return ((function (n,client_ids_satisfied,inst_36042,inst_36041,inst_36048,inst_36044,inst_36045,inst_36046,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36042,inst_36041,inst_36048,inst_36044,inst_36045,inst_36046,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__36100 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__36100,(0),null);
var udt = cljs.core.nth.call(null,vec__36100,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36042,inst_36041,inst_36048,inst_36044,inst_36045,inst_36046,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36042,inst_36041,inst_36048,inst_36044,inst_36045,inst_36046,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36048__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36046,inst_36047);
var inst_36049 = (function (){var n = inst_36041;
var client_ids_satisfied = inst_36042;
var _QMARK_pulled = inst_36048__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36042,inst_36041,inst_36048,inst_36044,inst_36045,inst_36046,inst_36047,inst_36048__$1,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__26575__auto__ = (x == null);
if(or__26575__auto__){
return or__26575__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36042,inst_36041,inst_36048,inst_36044,inst_36045,inst_36046,inst_36047,inst_36048__$1,state_val_36087,c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36050 = inst_36049.call(null,inst_36048__$1);
var state_36086__$1 = (function (){var statearr_36103 = state_36086;
(statearr_36103[(9)] = inst_36048__$1);

return statearr_36103;
})();
if(cljs.core.truth_(inst_36050)){
var statearr_36104_36131 = state_36086__$1;
(statearr_36104_36131[(1)] = (4));

} else {
var statearr_36105_36132 = state_36086__$1;
(statearr_36105_36132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (11))){
var state_36086__$1 = state_36086;
var statearr_36106_36133 = state_36086__$1;
(statearr_36106_36133[(2)] = null);

(statearr_36106_36133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (9))){
var inst_36042 = (state_36086[(7)]);
var inst_36041 = (state_36086[(8)]);
var inst_36065 = (state_36086[(10)]);
var inst_36063 = (state_36086[(2)]);
var inst_36064 = cljs.core.into.call(null,inst_36042,inst_36063);
var inst_36065__$1 = cljs.core.get.call(null,ms_backoffs,inst_36041);
var state_36086__$1 = (function (){var statearr_36107 = state_36086;
(statearr_36107[(12)] = inst_36064);

(statearr_36107[(10)] = inst_36065__$1);

return statearr_36107;
})();
if(cljs.core.truth_(inst_36065__$1)){
var statearr_36108_36134 = state_36086__$1;
(statearr_36108_36134[(1)] = (10));

} else {
var statearr_36109_36135 = state_36086__$1;
(statearr_36109_36135[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (5))){
var inst_36048 = (state_36086[(9)]);
var inst_36053 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_36048,null,null);
var state_36086__$1 = state_36086;
var statearr_36110_36136 = state_36086__$1;
(statearr_36110_36136[(2)] = inst_36053);

(statearr_36110_36136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (14))){
var state_36086__$1 = state_36086;
var statearr_36111_36137 = state_36086__$1;
(statearr_36111_36137[(2)] = null);

(statearr_36111_36137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (16))){
var inst_36064 = (state_36086[(12)]);
var inst_36041 = (state_36086[(8)]);
var inst_36074 = (state_36086[(2)]);
var inst_36075 = (inst_36041 + (1));
var inst_36041__$1 = inst_36075;
var inst_36042 = inst_36064;
var state_36086__$1 = (function (){var statearr_36112 = state_36086;
(statearr_36112[(7)] = inst_36042);

(statearr_36112[(8)] = inst_36041__$1);

(statearr_36112[(13)] = inst_36074);

return statearr_36112;
})();
var statearr_36113_36138 = state_36086__$1;
(statearr_36113_36138[(2)] = null);

(statearr_36113_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (10))){
var inst_36064 = (state_36086[(12)]);
var inst_36067 = cljs.core.complement.call(null,inst_36064);
var inst_36068 = taoensso.encore.rsome.call(null,inst_36067,client_ids_unsatisfied);
var state_36086__$1 = state_36086;
if(cljs.core.truth_(inst_36068)){
var statearr_36114_36139 = state_36086__$1;
(statearr_36114_36139[(1)] = (13));

} else {
var statearr_36115_36140 = state_36086__$1;
(statearr_36115_36140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36087 === (8))){
var state_36086__$1 = state_36086;
var statearr_36116_36141 = state_36086__$1;
(statearr_36116_36141[(2)] = null);

(statearr_36116_36141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__32377__auto__,c__32489__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto____0 = (function (){
var statearr_36120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36120[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto__);

(statearr_36120[(1)] = (1));

return statearr_36120;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto____1 = (function (state_36086){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_36086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e36121){if((e36121 instanceof Object)){
var ex__32381__auto__ = e36121;
var statearr_36122_36142 = state_36086;
(statearr_36122_36142[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36143 = state_36086;
state_36086 = G__36143;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto__ = function(state_36086){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto____1.call(this,state_36086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__32491__auto__ = (function (){var statearr_36123 = f__32490__auto__.call(null);
(statearr_36123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_36123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__32489__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__27238__auto__ = (((chsk == null))?null:chsk);
var m__27239__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,chsk);
} else {
var m__27239__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__27238__auto__ = (((chsk == null))?null:chsk);
var m__27239__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,chsk,reason);
} else {
var m__27239__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__27238__auto__ = (((chsk == null))?null:chsk);
var m__27239__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,chsk);
} else {
var m__27239__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__27238__auto__ = (((chsk == null))?null:chsk);
var m__27239__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,chsk,ev,opts);
} else {
var m__27239__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args36144 = [];
var len__27650__auto___36147 = arguments.length;
var i__27651__auto___36148 = (0);
while(true){
if((i__27651__auto___36148 < len__27650__auto___36147)){
args36144.push((arguments[i__27651__auto___36148]));

var G__36149 = (i__27651__auto___36148 + (1));
i__27651__auto___36148 = G__36149;
continue;
} else {
}
break;
}

var G__36146 = args36144.length;
switch (G__36146) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36144.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-463837970);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-743054633);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__36154 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__36154,(0),null);
var new_state = cljs.core.nth.call(null,vec__36154,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_36161 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36159){if((e36159 instanceof Error)){
var e = e36159;
return e;
} else {
throw e36159;

}
}})();
if((e_36161 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_36161,null);
}

var e_36162 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36160){if((e36160 instanceof Error)){
var e = e36160;
return e;
} else {
throw e36160;

}
}})();
if((e_36162 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_36162,null);
}

if(cljs.core.truth_((function (){var or__26575__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_36171 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36167){if((e36167 instanceof Error)){
var e = e36167;
return e;
} else {
throw e36167;

}
}})();
if((e_36171 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_36171,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__36168 = ev;
var ev_id = cljs.core.nth.call(null,vec__36168,(0),null);
var _ = cljs.core.nth.call(null,vec__36168,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36168,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36168,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1279064274);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__36182 = cljs.core.seq.call(null,buffered_evs);
var chunk__36183 = null;
var count__36184 = (0);
var i__36185 = (0);
while(true){
if((i__36185 < count__36184)){
var ev = cljs.core._nth.call(null,chunk__36183,i__36185);
taoensso.sente.assert_event.call(null,ev);

var vec__36186_36192 = ev;
var id_36193 = cljs.core.nth.call(null,vec__36186_36192,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_36193),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36194 = seq__36182;
var G__36195 = chunk__36183;
var G__36196 = count__36184;
var G__36197 = (i__36185 + (1));
seq__36182 = G__36194;
chunk__36183 = G__36195;
count__36184 = G__36196;
i__36185 = G__36197;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36182);
if(temp__4657__auto__){
var seq__36182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36182__$1)){
var c__27386__auto__ = cljs.core.chunk_first.call(null,seq__36182__$1);
var G__36198 = cljs.core.chunk_rest.call(null,seq__36182__$1);
var G__36199 = c__27386__auto__;
var G__36200 = cljs.core.count.call(null,c__27386__auto__);
var G__36201 = (0);
seq__36182 = G__36198;
chunk__36183 = G__36199;
count__36184 = G__36200;
i__36185 = G__36201;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36182__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__36189_36202 = ev;
var id_36203 = cljs.core.nth.call(null,vec__36189_36202,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_36203),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36204 = cljs.core.next.call(null,seq__36182__$1);
var G__36205 = null;
var G__36206 = (0);
var G__36207 = (0);
seq__36182 = G__36204;
chunk__36183 = G__36205;
count__36184 = G__36206;
i__36185 = G__36207;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__26563__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__26563__auto__){
var vec__36217 = x;
var x1 = cljs.core.nth.call(null,vec__36217,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__26563__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_36241 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36231){if((e36231 instanceof Error)){
var e = e36231;
return e;
} else {
throw e36231;

}
}})();
if((e_36241 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_36241,null);
}

var e_36242 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36232){if((e36232 instanceof Error)){
var e = e36232;
return e;
} else {
throw e36232;

}
}})();
if((e_36242 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_36242,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-547710354);

var vec__36233 = clj;
var _ = cljs.core.nth.call(null,vec__36233,(0),null);
var vec__36236 = cljs.core.nth.call(null,vec__36233,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36236,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36236,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36236,(2),null);
var map__36239 = chsk;
var map__36239__$1 = ((((!((map__36239 == null)))?((((map__36239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36239):map__36239);
var chs = cljs.core.get.call(null,map__36239__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__36239__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36233,_,vec__36236,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36239,map__36239__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36233,_,vec__36236,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36239,map__36239__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,844324300);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__36233,_,vec__36236,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36239,map__36239__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__36220_SHARP_){
return cljs.core.merge.call(null,p1__36220_SHARP_,new_state);
});})(vec__36233,_,vec__36236,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36239,map__36239__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(cljs.core.truth_((function (){var and__26563__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__26563__auto__)){
return typeof require !== 'undefined';
} else {
return and__26563__auto__;
}
})())){
try{return require("websocket");
}catch (e36243){var e = e36243;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27197__auto__,k__27198__auto__){
var self__ = this;
var this__27197__auto____$1 = this;
return cljs.core._lookup.call(null,this__27197__auto____$1,k__27198__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27199__auto__,k36250,else__27200__auto__){
var self__ = this;
var this__27199__auto____$1 = this;
var G__36252 = (((k36250 instanceof cljs.core.Keyword))?k36250.fqn:null);
switch (G__36252) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36250,else__27200__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27211__auto__,writer__27212__auto__,opts__27213__auto__){
var self__ = this;
var this__27211__auto____$1 = this;
var pr_pair__27214__auto__ = ((function (this__27211__auto____$1){
return (function (keyval__27215__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27212__auto__,cljs.core.pr_writer,""," ","",opts__27213__auto__,keyval__27215__auto__);
});})(this__27211__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27212__auto__,pr_pair__27214__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__27213__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36249){
var self__ = this;
var G__36249__$1 = this;
return (new cljs.core.RecordIter((0),G__36249__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27195__auto__){
var self__ = this;
var this__27195__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27191__auto__){
var self__ = this;
var this__27191__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27201__auto__){
var self__ = this;
var this__27201__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27192__auto__){
var self__ = this;
var this__27192__auto____$1 = this;
var h__27010__auto__ = self__.__hash;
if(!((h__27010__auto__ == null))){
return h__27010__auto__;
} else {
var h__27010__auto____$1 = cljs.core.hash_imap.call(null,this__27192__auto____$1);
self__.__hash = h__27010__auto____$1;

return h__27010__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27193__auto__,other__27194__auto__){
var self__ = this;
var this__27193__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26563__auto__ = other__27194__auto__;
if(cljs.core.truth_(and__26563__auto__)){
var and__26563__auto____$1 = (this__27193__auto____$1.constructor === other__27194__auto__.constructor);
if(and__26563__auto____$1){
return cljs.core.equiv_map.call(null,this__27193__auto____$1,other__27194__auto__);
} else {
return and__26563__auto____$1;
}
} else {
return and__26563__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27206__auto__,k__27207__auto__){
var self__ = this;
var this__27206__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__27207__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27206__auto____$1),self__.__meta),k__27207__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27207__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27204__auto__,k__27205__auto__,G__36249){
var self__ = this;
var this__27204__auto____$1 = this;
var pred__36253 = cljs.core.keyword_identical_QMARK_;
var expr__36254 = k__27205__auto__;
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36254))){
return (new taoensso.sente.ChWebSocket(G__36249,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36249,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36249,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36249,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36249,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36249,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__36249,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__36249,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__36249,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__36249,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__36249,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__36249,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__36249,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36253.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__36254))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__36249,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27205__auto__,G__36249),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27209__auto__){
var self__ = this;
var this__27209__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27196__auto__,G__36249){
var self__ = this;
var this__27196__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__36249,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27202__auto__,entry__27203__auto__){
var self__ = this;
var this__27202__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27203__auto__)){
return cljs.core._assoc.call(null,this__27202__auto____$1,cljs.core._nth.call(null,entry__27203__auto__,(0)),cljs.core._nth.call(null,entry__27203__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27202__auto____$1,entry__27203__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__36244_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36244_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__36256 = opts;
var map__36256__$1 = ((((!((map__36256 == null)))?((((map__36256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36256):map__36256);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36256__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36256__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36256__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___36347 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36347)){
var cb_uuid_36348 = temp__4657__auto___36347;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36348], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36258){if((e36258 instanceof Error)){
var e = e36258;
return e;
} else {
throw e36258;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___36349__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___36349__$1)){
var timeout_ms_36350 = temp__4657__auto___36349__$1;
var c__32489__auto___36351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___36351,timeout_ms_36350,temp__4657__auto___36349__$1,cb_uuid_36348,temp__4657__auto___36347,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___36351,timeout_ms_36350,temp__4657__auto___36349__$1,cb_uuid_36348,temp__4657__auto___36347,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_36269){
var state_val_36270 = (state_36269[(1)]);
if((state_val_36270 === (1))){
var inst_36259 = cljs.core.async.timeout.call(null,timeout_ms_36350);
var state_36269__$1 = state_36269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36269__$1,(2),inst_36259);
} else {
if((state_val_36270 === (2))){
var inst_36262 = (state_36269[(7)]);
var inst_36261 = (state_36269[(2)]);
var inst_36262__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36269__$1 = (function (){var statearr_36271 = state_36269;
(statearr_36271[(8)] = inst_36261);

(statearr_36271[(7)] = inst_36262__$1);

return statearr_36271;
})();
if(cljs.core.truth_(inst_36262__$1)){
var statearr_36272_36352 = state_36269__$1;
(statearr_36272_36352[(1)] = (3));

} else {
var statearr_36273_36353 = state_36269__$1;
(statearr_36273_36353[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36270 === (3))){
var inst_36262 = (state_36269[(7)]);
var inst_36264 = inst_36262.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36269__$1 = state_36269;
var statearr_36274_36354 = state_36269__$1;
(statearr_36274_36354[(2)] = inst_36264);

(statearr_36274_36354[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36270 === (4))){
var state_36269__$1 = state_36269;
var statearr_36275_36355 = state_36269__$1;
(statearr_36275_36355[(2)] = null);

(statearr_36275_36355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36270 === (5))){
var inst_36267 = (state_36269[(2)]);
var state_36269__$1 = state_36269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36269__$1,inst_36267);
} else {
return null;
}
}
}
}
}
});})(c__32489__auto___36351,timeout_ms_36350,temp__4657__auto___36349__$1,cb_uuid_36348,temp__4657__auto___36347,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__32377__auto__,c__32489__auto___36351,timeout_ms_36350,temp__4657__auto___36349__$1,cb_uuid_36348,temp__4657__auto___36347,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_36279 = [null,null,null,null,null,null,null,null,null];
(statearr_36279[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_36279[(1)] = (1));

return statearr_36279;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_36269){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_36269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e36280){if((e36280 instanceof Object)){
var ex__32381__auto__ = e36280;
var statearr_36281_36356 = state_36269;
(statearr_36281_36356[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36357 = state_36269;
state_36269 = G__36357;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_36269){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_36269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___36351,timeout_ms_36350,temp__4657__auto___36349__$1,cb_uuid_36348,temp__4657__auto___36347,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__32491__auto__ = (function (){var statearr_36282 = f__32490__auto__.call(null);
(statearr_36282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___36351);

return statearr_36282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___36351,timeout_ms_36350,temp__4657__auto___36349__$1,cb_uuid_36348,temp__4657__auto___36347,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36283){var e = e36283;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__36256,map__36256__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-830405971);

var temp__4657__auto___36358 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36358)){
var cb_uuid_36359 = temp__4657__auto___36358;
var cb_fn_STAR__36360 = (function (){var or__26575__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36359);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36284){if((e36284 instanceof Error)){
var e__$1 = e36284;
return e__$1;
} else {
throw e36284;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__36360.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__26575__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var or__26575__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__26575__auto____$1)){
return or__26575__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1593976972);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36245_SHARP_){
return cljs.core.assoc.call(null,p1__36245_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e36291){var e = e36291;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1247864284);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36292 = _QMARK_socket;
(G__36292["onerror"] = ((function (G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e36293){var _ = e36293;
return ws_ev;
}})()], null);
});})(G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-317385750);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36246_SHARP_){
return cljs.core.assoc.call(null,p1__36246_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36292["onmessage"] = ((function (G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36294 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36294,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36294,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__26575__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var or__26575__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__26575__auto____$1)){
return or__26575__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__26575__auto____$1,or__26575__auto__,ppstr,vec__36294,clj,_QMARK_cb_uuid,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__26575__auto____$1,or__26575__auto__,ppstr,vec__36294,clj,_QMARK_cb_uuid,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,472702979);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36292["onclose"] = ((function (G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,2126522686);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36247_SHARP_){
return cljs.core.assoc.call(null,p1__36247_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36248_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__36248_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__36292,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__36292;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___36361__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___36361__$1)){
var ms_36362 = temp__4657__auto___36361__$1;
var c__32489__auto___36363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___36363,ms_36362,temp__4657__auto___36361__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___36363,ms_36362,temp__4657__auto___36361__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_36324){
var state_val_36325 = (state_36324[(1)]);
if((state_val_36325 === (7))){
var inst_36320 = (state_36324[(2)]);
var state_36324__$1 = state_36324;
var statearr_36326_36364 = state_36324__$1;
(statearr_36326_36364[(2)] = inst_36320);

(statearr_36326_36364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (1))){
var state_36324__$1 = state_36324;
var statearr_36327_36365 = state_36324__$1;
(statearr_36327_36365[(2)] = null);

(statearr_36327_36365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (4))){
var inst_36301 = (state_36324[(2)]);
var inst_36302 = have_handle_QMARK_.call(null);
var state_36324__$1 = (function (){var statearr_36328 = state_36324;
(statearr_36328[(7)] = inst_36301);

return statearr_36328;
})();
if(cljs.core.truth_(inst_36302)){
var statearr_36329_36366 = state_36324__$1;
(statearr_36329_36366[(1)] = (5));

} else {
var statearr_36330_36367 = state_36324__$1;
(statearr_36330_36367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (6))){
var state_36324__$1 = state_36324;
var statearr_36331_36368 = state_36324__$1;
(statearr_36331_36368[(2)] = null);

(statearr_36331_36368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (3))){
var inst_36322 = (state_36324[(2)]);
var state_36324__$1 = state_36324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36324__$1,inst_36322);
} else {
if((state_val_36325 === (2))){
var inst_36298 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_36299 = cljs.core.async.timeout.call(null,ms_36362);
var state_36324__$1 = (function (){var statearr_36332 = state_36324;
(statearr_36332[(8)] = inst_36298);

return statearr_36332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36324__$1,(4),inst_36299);
} else {
if((state_val_36325 === (9))){
var state_36324__$1 = state_36324;
var statearr_36333_36369 = state_36324__$1;
(statearr_36333_36369[(2)] = null);

(statearr_36333_36369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (5))){
var inst_36298 = (state_36324[(8)]);
var inst_36304 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_36305 = cljs.core._EQ_.call(null,inst_36298,inst_36304);
var state_36324__$1 = state_36324;
if(inst_36305){
var statearr_36334_36370 = state_36324__$1;
(statearr_36334_36370[(1)] = (8));

} else {
var statearr_36335_36371 = state_36324__$1;
(statearr_36335_36371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (10))){
var inst_36316 = (state_36324[(2)]);
var state_36324__$1 = (function (){var statearr_36336 = state_36324;
(statearr_36336[(9)] = inst_36316);

return statearr_36336;
})();
var statearr_36337_36372 = state_36324__$1;
(statearr_36337_36372[(2)] = null);

(statearr_36337_36372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (8))){
var inst_36307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36308 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_36309 = (new cljs.core.PersistentVector(null,1,(5),inst_36307,inst_36308,null));
var inst_36310 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_36311 = [true];
var inst_36312 = cljs.core.PersistentHashMap.fromArrays(inst_36310,inst_36311);
var inst_36313 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_36309,inst_36312);
var state_36324__$1 = state_36324;
var statearr_36338_36373 = state_36324__$1;
(statearr_36338_36373[(2)] = inst_36313);

(statearr_36338_36373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32489__auto___36363,ms_36362,temp__4657__auto___36361__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__32377__auto__,c__32489__auto___36363,ms_36362,temp__4657__auto___36361__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__32378__auto__ = null;
var taoensso$sente$state_machine__32378__auto____0 = (function (){
var statearr_36342 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36342[(0)] = taoensso$sente$state_machine__32378__auto__);

(statearr_36342[(1)] = (1));

return statearr_36342;
});
var taoensso$sente$state_machine__32378__auto____1 = (function (state_36324){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_36324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e36343){if((e36343 instanceof Object)){
var ex__32381__auto__ = e36343;
var statearr_36344_36374 = state_36324;
(statearr_36344_36374[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_36324;
state_36324 = G__36375;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$state_machine__32378__auto__ = function(state_36324){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32378__auto____1.call(this,state_36324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32378__auto____0;
taoensso$sente$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32378__auto____1;
return taoensso$sente$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___36363,ms_36362,temp__4657__auto___36361__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__32491__auto__ = (function (){var statearr_36345 = f__32490__auto__.call(null);
(statearr_36345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___36363);

return statearr_36345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___36363,ms_36362,temp__4657__auto___36361__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__27231__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__27231__auto__,writer__27232__auto__){
return cljs.core._write.call(null,writer__27232__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36251){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36251),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__36251),null,cljs.core.dissoc.call(null,G__36251,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27197__auto__,k__27198__auto__){
var self__ = this;
var this__27197__auto____$1 = this;
return cljs.core._lookup.call(null,this__27197__auto____$1,k__27198__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27199__auto__,k36383,else__27200__auto__){
var self__ = this;
var this__27199__auto____$1 = this;
var G__36385 = (((k36383 instanceof cljs.core.Keyword))?k36383.fqn:null);
switch (G__36385) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36383,else__27200__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27211__auto__,writer__27212__auto__,opts__27213__auto__){
var self__ = this;
var this__27211__auto____$1 = this;
var pr_pair__27214__auto__ = ((function (this__27211__auto____$1){
return (function (keyval__27215__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27212__auto__,cljs.core.pr_writer,""," ","",opts__27213__auto__,keyval__27215__auto__);
});})(this__27211__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27212__auto__,pr_pair__27214__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__27213__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36382){
var self__ = this;
var G__36382__$1 = this;
return (new cljs.core.RecordIter((0),G__36382__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27195__auto__){
var self__ = this;
var this__27195__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27191__auto__){
var self__ = this;
var this__27191__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27201__auto__){
var self__ = this;
var this__27201__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27192__auto__){
var self__ = this;
var this__27192__auto____$1 = this;
var h__27010__auto__ = self__.__hash;
if(!((h__27010__auto__ == null))){
return h__27010__auto__;
} else {
var h__27010__auto____$1 = cljs.core.hash_imap.call(null,this__27192__auto____$1);
self__.__hash = h__27010__auto____$1;

return h__27010__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27193__auto__,other__27194__auto__){
var self__ = this;
var this__27193__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26563__auto__ = other__27194__auto__;
if(cljs.core.truth_(and__26563__auto__)){
var and__26563__auto____$1 = (this__27193__auto____$1.constructor === other__27194__auto__.constructor);
if(and__26563__auto____$1){
return cljs.core.equiv_map.call(null,this__27193__auto____$1,other__27194__auto__);
} else {
return and__26563__auto____$1;
}
} else {
return and__26563__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27206__auto__,k__27207__auto__){
var self__ = this;
var this__27206__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__27207__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27206__auto____$1),self__.__meta),k__27207__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27207__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27204__auto__,k__27205__auto__,G__36382){
var self__ = this;
var this__27204__auto____$1 = this;
var pred__36386 = cljs.core.keyword_identical_QMARK_;
var expr__36387 = k__27205__auto__;
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(G__36382,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36382,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36382,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36382,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36382,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36382,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36382,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__36382,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__36382,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__36382,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36386.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36387))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__36382,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27205__auto__,G__36382),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27209__auto__){
var self__ = this;
var this__27209__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27196__auto__,G__36382){
var self__ = this;
var this__27196__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__36382,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27202__auto__,entry__27203__auto__){
var self__ = this;
var this__27202__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27203__auto__)){
return cljs.core._assoc.call(null,this__27202__auto____$1,cljs.core._nth.call(null,entry__27203__auto__,(0)),cljs.core._nth.call(null,entry__27203__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27202__auto____$1,entry__27203__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__36376_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36376_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__36389 = opts;
var map__36389__$1 = ((((!((map__36389 == null)))?((((map__36389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36389):map__36389);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__26575__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var or__26575__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__26575__auto____$1)){
return or__26575__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__36391){
var map__36397 = p__36391;
var map__36397__$1 = ((((!((map__36397 == null)))?((((map__36397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36397):map__36397);
var _QMARK_error = cljs.core.get.call(null,map__36397__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36397__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__36397,map__36397__$1,_QMARK_error,_QMARK_content,csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__36377_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36377_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__36397,map__36397__$1,_QMARK_error,_QMARK_content,csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__36399 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36399,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__36399,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36399,resp_clj,___$1,map__36397,map__36397__$1,_QMARK_error,_QMARK_content,csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36399,resp_clj,___$1,map__36397,map__36397__$1,_QMARK_error,_QMARK_content,csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-147951548);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__36399,resp_clj,___$1,map__36397,map__36397__$1,_QMARK_error,_QMARK_content,csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__36378_SHARP_){
return cljs.core.assoc.call(null,p1__36378_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__36399,resp_clj,___$1,map__36397,map__36397__$1,_QMARK_error,_QMARK_content,csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__36389,map__36389__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,960977017);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1643718598);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36379_SHARP_){
return cljs.core.assoc.call(null,p1__36379_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__26575__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36413){
var map__36419 = p__36413;
var map__36419__$1 = ((((!((map__36419 == null)))?((((map__36419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36419):map__36419);
var _QMARK_error = cljs.core.get.call(null,map__36419__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36419__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__36419,map__36419__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36380_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36380_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__36419,map__36419__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__36421 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36421,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__36421,clj,handshake_QMARK_,map__36419,map__36419__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36381_SHARP_){
return cljs.core.assoc.call(null,p1__36381_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__36421,clj,handshake_QMARK_,map__36419,map__36419__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__26575__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__27231__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__27231__auto__,writer__27232__auto__){
return cljs.core._write.call(null,writer__27232__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36384){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36384),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36384),null,cljs.core.dissoc.call(null,G__36384,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27197__auto__,k__27198__auto__){
var self__ = this;
var this__27197__auto____$1 = this;
return cljs.core._lookup.call(null,this__27197__auto____$1,k__27198__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27199__auto__,k36426,else__27200__auto__){
var self__ = this;
var this__27199__auto____$1 = this;
var G__36428 = (((k36426 instanceof cljs.core.Keyword))?k36426.fqn:null);
switch (G__36428) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36426,else__27200__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27211__auto__,writer__27212__auto__,opts__27213__auto__){
var self__ = this;
var this__27211__auto____$1 = this;
var pr_pair__27214__auto__ = ((function (this__27211__auto____$1){
return (function (keyval__27215__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27212__auto__,cljs.core.pr_writer,""," ","",opts__27213__auto__,keyval__27215__auto__);
});})(this__27211__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27212__auto__,pr_pair__27214__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__27213__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36425){
var self__ = this;
var G__36425__$1 = this;
return (new cljs.core.RecordIter((0),G__36425__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27195__auto__){
var self__ = this;
var this__27195__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27191__auto__){
var self__ = this;
var this__27191__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27201__auto__){
var self__ = this;
var this__27201__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27192__auto__){
var self__ = this;
var this__27192__auto____$1 = this;
var h__27010__auto__ = self__.__hash;
if(!((h__27010__auto__ == null))){
return h__27010__auto__;
} else {
var h__27010__auto____$1 = cljs.core.hash_imap.call(null,this__27192__auto____$1);
self__.__hash = h__27010__auto____$1;

return h__27010__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27193__auto__,other__27194__auto__){
var self__ = this;
var this__27193__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26563__auto__ = other__27194__auto__;
if(cljs.core.truth_(and__26563__auto__)){
var and__26563__auto____$1 = (this__27193__auto____$1.constructor === other__27194__auto__.constructor);
if(and__26563__auto____$1){
return cljs.core.equiv_map.call(null,this__27193__auto____$1,other__27194__auto__);
} else {
return and__26563__auto____$1;
}
} else {
return and__26563__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27206__auto__,k__27207__auto__){
var self__ = this;
var this__27206__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__27207__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27206__auto____$1),self__.__meta),k__27207__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27207__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27204__auto__,k__27205__auto__,G__36425){
var self__ = this;
var this__27204__auto____$1 = this;
var pred__36429 = cljs.core.keyword_identical_QMARK_;
var expr__36430 = k__27205__auto__;
if(cljs.core.truth_(pred__36429.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__36430))){
return (new taoensso.sente.ChAutoSocket(G__36425,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36429.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__36430))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__36425,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36429.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36430))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__36425,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36429.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__36430))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__36425,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27205__auto__,G__36425),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27209__auto__){
var self__ = this;
var this__27209__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27196__auto__,G__36425){
var self__ = this;
var this__27196__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__36425,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27202__auto__,entry__27203__auto__){
var self__ = this;
var this__27202__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27203__auto__)){
return cljs.core._assoc.call(null,this__27202__auto____$1,cljs.core._nth.call(null,entry__27203__auto__,(0)),cljs.core._nth.call(null,entry__27203__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27202__auto____$1,entry__27203__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__36432 = opts;
var map__36432__$1 = ((((!((map__36432 == null)))?((((map__36432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36432):map__36432);
var _QMARK_cb = cljs.core.get.call(null,map__36432__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___36435 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___36435,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___36435,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___36435,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___36435,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1407529919);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___36435,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__26575__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__27231__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__27231__auto__,writer__27232__auto__){
return cljs.core._write.call(null,writer__27232__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__36427){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__36427),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__36427),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36427),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__36427),null,cljs.core.dissoc.call(null,G__36427,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__36440 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__36440) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36441){if((e36441 instanceof Error)){
var e = e36441;
return e;
} else {
throw e36441;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__36442 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36442) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__36443 = protocol__$2;
switch (G__36443) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__27657__auto__ = [];
var len__27650__auto___36464 = arguments.length;
var i__27651__auto___36465 = (0);
while(true){
if((i__27651__auto___36465 < len__27650__auto___36464)){
args__27657__auto__.push((arguments[i__27651__auto___36465]));

var G__36466 = (i__27651__auto___36465 + (1));
i__27651__auto___36465 = G__36466;
continue;
} else {
}
break;
}

var argseq__27658__auto__ = ((((1) < args__27657__auto__.length))?(new cljs.core.IndexedSeq(args__27657__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27658__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36449){
var vec__36450 = p__36449;
var map__36453 = cljs.core.nth.call(null,vec__36450,(0),null);
var map__36453__$1 = ((((!((map__36453 == null)))?((((map__36453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36453):map__36453);
var opts = map__36453__$1;
var ajax_opts = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__26575__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36450,(1),null);
var e_36467 = (function (){try{if(((function (vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36455){if((e36455 instanceof Error)){
var e = e36455;
return e;
} else {
throw e36455;

}
}})();
if((e_36467 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_36467,null);
}

var e_36468 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36456){if((e36456 instanceof Error)){
var e = e36456;
return e;
} else {
throw e36456;

}
}})();
if((e_36468 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_36468,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1299883965);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,304353443);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__36457 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__26575__auto__ = path;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__26575__auto__ = protocol;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
var or__26575__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__26575__auto____$1)){
return or__26575__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__26575__auto__ = host;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__36457,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__36457,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__36457,ws_url,ajax_url,vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__36457,ws_url,ajax_url,vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__36460 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36460) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__36457,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36461 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36461,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36461,(1),null);
var ev__$1 = vec__36461;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__36457,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__36457,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__36457,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36450,map__36453,map__36453__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1237205339);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36447){
var G__36448 = cljs.core.first.call(null,seq36447);
var seq36447__$1 = cljs.core.next.call(null,seq36447);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36448,seq36447__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36549 = opts;
var map__36549__$1 = ((((!((map__36549 == null)))?((((map__36549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36549):map__36549);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36549__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36549__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__36549__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__32489__auto___36628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_36595){
var state_val_36596 = (state_36595[(1)]);
if((state_val_36596 === (7))){
var inst_36591 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
var statearr_36597_36629 = state_36595__$1;
(statearr_36597_36629[(2)] = inst_36591);

(statearr_36597_36629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (1))){
var state_36595__$1 = state_36595;
var statearr_36598_36630 = state_36595__$1;
(statearr_36598_36630[(2)] = null);

(statearr_36598_36630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (4))){
var inst_36562 = (state_36595[(7)]);
var inst_36561 = (state_36595[(8)]);
var inst_36559 = (state_36595[(9)]);
var inst_36559__$1 = (state_36595[(2)]);
var inst_36560 = cljs.core.nth.call(null,inst_36559__$1,(0),null);
var inst_36561__$1 = cljs.core.nth.call(null,inst_36559__$1,(1),null);
var inst_36562__$1 = cljs.core._EQ_.call(null,inst_36561__$1,ch_ctrl);
var state_36595__$1 = (function (){var statearr_36599 = state_36595;
(statearr_36599[(7)] = inst_36562__$1);

(statearr_36599[(8)] = inst_36561__$1);

(statearr_36599[(10)] = inst_36560);

(statearr_36599[(9)] = inst_36559__$1);

return statearr_36599;
})();
if(inst_36562__$1){
var statearr_36600_36631 = state_36595__$1;
(statearr_36600_36631[(1)] = (5));

} else {
var statearr_36601_36632 = state_36595__$1;
(statearr_36601_36632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (15))){
var inst_36560 = (state_36595[(10)]);
var state_36595__$1 = state_36595;
var statearr_36602_36633 = state_36595__$1;
(statearr_36602_36633[(2)] = inst_36560);

(statearr_36602_36633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (13))){
var inst_36577 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
var statearr_36603_36634 = state_36595__$1;
(statearr_36603_36634[(2)] = inst_36577);

(statearr_36603_36634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (6))){
var inst_36560 = (state_36595[(10)]);
var inst_36567 = (inst_36560 == null);
var inst_36568 = cljs.core.not.call(null,inst_36567);
var state_36595__$1 = state_36595;
if(inst_36568){
var statearr_36604_36635 = state_36595__$1;
(statearr_36604_36635[(1)] = (8));

} else {
var statearr_36605_36636 = state_36595__$1;
(statearr_36605_36636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (3))){
var inst_36593 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36595__$1,inst_36593);
} else {
if((state_val_36596 === (12))){
var state_36595__$1 = state_36595;
var statearr_36606_36637 = state_36595__$1;
(statearr_36606_36637[(2)] = false);

(statearr_36606_36637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (2))){
var inst_36555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36556 = [ch_recv,ch_ctrl];
var inst_36557 = (new cljs.core.PersistentVector(null,2,(5),inst_36555,inst_36556,null));
var state_36595__$1 = state_36595;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36595__$1,(4),inst_36557);
} else {
if((state_val_36596 === (11))){
var state_36595__$1 = state_36595;
var statearr_36607_36638 = state_36595__$1;
(statearr_36607_36638[(2)] = true);

(statearr_36607_36638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (9))){
var state_36595__$1 = state_36595;
var statearr_36608_36639 = state_36595__$1;
(statearr_36608_36639[(2)] = false);

(statearr_36608_36639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (5))){
var state_36595__$1 = state_36595;
var statearr_36609_36640 = state_36595__$1;
(statearr_36609_36640[(2)] = null);

(statearr_36609_36640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (14))){
var inst_36560 = (state_36595[(10)]);
var inst_36582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36560);
var state_36595__$1 = state_36595;
var statearr_36610_36641 = state_36595__$1;
(statearr_36610_36641[(2)] = inst_36582);

(statearr_36610_36641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (16))){
var inst_36562 = (state_36595[(7)]);
var inst_36561 = (state_36595[(8)]);
var inst_36560 = (state_36595[(10)]);
var inst_36559 = (state_36595[(9)]);
var inst_36585 = (state_36595[(2)]);
var inst_36586 = cljs.core.get.call(null,inst_36585,new cljs.core.Keyword(null,"event","event",301435442));
var inst_36587 = (function (){var vec__36552 = inst_36559;
var v = inst_36560;
var p = inst_36561;
var stop_QMARK_ = inst_36562;
var map__36565 = inst_36585;
var event_msg = inst_36585;
var event = inst_36586;
return ((function (vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-212876892);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36613){if((e36613 instanceof Error)){
var e = e36613;
return e;
} else {
throw e36613;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36614){if((e36614 instanceof Error)){
var e = e36614;
return e;
} else {
throw e36614;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e36611){if((e36611 instanceof Error)){
var e1 = e36611;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1533607617);
}
}catch (e36612){if((e36612 instanceof Error)){
var e2 = e36612;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/kkocherov/workspace/service-swarm/src/service_swarm/core.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1656145856);
} else {
throw e36612;

}
}} else {
throw e36611;

}
}});
;})(vec__36552,v,p,stop_QMARK_,map__36565,event_msg,event,inst_36562,inst_36561,inst_36560,inst_36559,inst_36585,inst_36586,state_val_36596,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_36588 = execute1.call(null,inst_36587);
var state_36595__$1 = (function (){var statearr_36615 = state_36595;
(statearr_36615[(11)] = inst_36588);

return statearr_36615;
})();
var statearr_36616_36642 = state_36595__$1;
(statearr_36616_36642[(2)] = null);

(statearr_36616_36642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (10))){
var inst_36580 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
if(cljs.core.truth_(inst_36580)){
var statearr_36617_36643 = state_36595__$1;
(statearr_36617_36643[(1)] = (14));

} else {
var statearr_36618_36644 = state_36595__$1;
(statearr_36618_36644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (8))){
var inst_36560 = (state_36595[(10)]);
var inst_36570 = inst_36560.cljs$lang$protocol_mask$partition0$;
var inst_36571 = (inst_36570 & (64));
var inst_36572 = inst_36560.cljs$core$ISeq$;
var inst_36573 = (inst_36571) || (inst_36572);
var state_36595__$1 = state_36595;
if(cljs.core.truth_(inst_36573)){
var statearr_36619_36645 = state_36595__$1;
(statearr_36619_36645[(1)] = (11));

} else {
var statearr_36620_36646 = state_36595__$1;
(statearr_36620_36646[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__32377__auto__,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto____0 = (function (){
var statearr_36624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36624[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto__);

(statearr_36624[(1)] = (1));

return statearr_36624;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto____1 = (function (state_36595){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_36595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e36625){if((e36625 instanceof Object)){
var ex__32381__auto__ = e36625;
var statearr_36626_36647 = state_36595;
(statearr_36626_36647[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36648 = state_36595;
state_36595 = G__36648;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto__ = function(state_36595){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto____1.call(this,state_36595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__32491__auto__ = (function (){var statearr_36627 = f__32490__auto__.call(null);
(statearr_36627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___36628);

return statearr_36627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___36628,map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36549,map__36549__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__27657__auto__ = [];
var len__27650__auto___36658 = arguments.length;
var i__27651__auto___36659 = (0);
while(true){
if((i__27651__auto___36659 < len__27650__auto___36658)){
args__27657__auto__.push((arguments[i__27651__auto___36659]));

var G__36660 = (i__27651__auto___36659 + (1));
i__27651__auto___36659 = G__36660;
continue;
} else {
}
break;
}

var argseq__27658__auto__ = ((((2) < args__27657__auto__.length))?(new cljs.core.IndexedSeq(args__27657__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27658__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36652){
var vec__36653 = p__36652;
var map__36656 = cljs.core.nth.call(null,vec__36653,(0),null);
var map__36656__$1 = ((((!((map__36656 == null)))?((((map__36656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36656):map__36656);
var opts = map__36656__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36649){
var G__36650 = cljs.core.first.call(null,seq36649);
var seq36649__$1 = cljs.core.next.call(null,seq36649);
var G__36651 = cljs.core.first.call(null,seq36649__$1);
var seq36649__$2 = cljs.core.next.call(null,seq36649__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36650,G__36651,seq36649__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__27657__auto__ = [];
var len__27650__auto___36670 = arguments.length;
var i__27651__auto___36671 = (0);
while(true){
if((i__27651__auto___36671 < len__27650__auto___36670)){
args__27657__auto__.push((arguments[i__27651__auto___36671]));

var G__36672 = (i__27651__auto___36671 + (1));
i__27651__auto___36671 = G__36672;
continue;
} else {
}
break;
}

var argseq__27658__auto__ = ((((2) < args__27657__auto__.length))?(new cljs.core.IndexedSeq(args__27657__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27658__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36664){
var vec__36665 = p__36664;
var map__36668 = cljs.core.nth.call(null,vec__36665,(0),null);
var map__36668__$1 = ((((!((map__36668 == null)))?((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36668):map__36668);
var opts = map__36668__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36661){
var G__36662 = cljs.core.first.call(null,seq36661);
var seq36661__$1 = cljs.core.next.call(null,seq36661);
var G__36663 = cljs.core.first.call(null,seq36661__$1);
var seq36661__$2 = cljs.core.next.call(null,seq36661__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36662,G__36663,seq36661__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36673,websocket_QMARK_){
var map__36676 = p__36673;
var map__36676__$1 = ((((!((map__36676 == null)))?((((map__36676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36676):map__36676);
var location = map__36676__$1;
var protocol = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__26575__auto__ = path;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map