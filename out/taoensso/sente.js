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
var vec__35741 = x;
var ev_id = cljs.core.nth.call(null,vec__35741,(0),null);
var _ = cljs.core.nth.call(null,vec__35741,(1),null);
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
var and__26910__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__26910__auto__){
var and__26910__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__26910__auto____$1){
var map__35754 = x;
var map__35754__$1 = ((((!((map__35754 == null)))?((((map__35754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35754):map__35754);
var ch_recv = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__26910__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__26910__auto____$2){
var and__26910__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__26910__auto____$3){
var and__26910__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__26910__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__26910__auto____$4;
}
} else {
return and__26910__auto____$3;
}
} else {
return and__26910__auto____$2;
}
} else {
return and__26910__auto____$1;
}
} else {
return and__26910__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__26910__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__26910__auto__){
var and__26910__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__26910__auto____$1){
var map__35766 = x;
var map__35766__$1 = ((((!((map__35766 == null)))?((((map__35766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35766):map__35766);
var ch_recv = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__26910__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__26910__auto____$2){
var and__26910__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__26910__auto____$3){
var and__26910__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__26910__auto____$4){
var and__26910__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__26910__auto____$5){
var and__26910__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__26910__auto____$6){
var and__26910__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__26910__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__26910__auto____$7;
}
} else {
return and__26910__auto____$6;
}
} else {
return and__26910__auto____$5;
}
} else {
return and__26910__auto____$4;
}
} else {
return and__26910__auto____$3;
}
} else {
return and__26910__auto____$2;
}
} else {
return and__26910__auto____$1;
}
} else {
return and__26910__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35768){
var map__35774 = p__35768;
var map__35774__$1 = ((((!((map__35774 == null)))?((((map__35774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35774):map__35774);
var ev_msg = map__35774__$1;
var event = cljs.core.get.call(null,map__35774__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35774__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35776 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35776,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35776,(1),null);
var valid_event = vec__35776;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35776,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35774,map__35774__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35776,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35774,map__35774__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-1471323364);
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
}catch (e35786){var t = e35786;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,1612270874);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__35783 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35783,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35783,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__35783,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__35783,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1588582123);

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
var args35787 = [];
var len__27997__auto___35790 = arguments.length;
var i__27998__auto___35791 = (0);
while(true){
if((i__27998__auto___35791 < len__27997__auto___35790)){
args35787.push((arguments[i__27998__auto___35791]));

var G__35792 = (i__27998__auto___35791 + (1));
i__27998__auto___35791 = G__35792;
continue;
} else {
}
break;
}

var G__35789 = args35787.length;
switch (G__35789) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35787.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1039745120);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1065853801);

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

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__35794_SHARP_){
if(!((p1__35794_SHARP_ == null))){
if((false) || (p1__35794_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__35794_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__35794_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__35794_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35797){if((e35797 instanceof Error)){
var e = e35797;
return e;
} else {
throw e35797;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35794#] (satisfies? interfaces/IPacker p1__35794#)) x)",x,e,null);
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
var args__28004__auto__ = [];
var len__27997__auto___36105 = arguments.length;
var i__27998__auto___36106 = (0);
while(true){
if((i__27998__auto___36106 < len__27997__auto___36105)){
args__28004__auto__.push((arguments[i__27998__auto___36106]));

var G__36107 = (i__27998__auto___36106 + (1));
i__27998__auto___36106 = G__36107;
continue;
} else {
}
break;
}

var argseq__28005__auto__ = ((((1) < args__28004__auto__.length))?(new cljs.core.IndexedSeq(args__28004__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28005__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__35802){
var vec__35803 = p__35802;
var map__35806 = cljs.core.nth.call(null,vec__35803,(0),null);
var map__35806__$1 = ((((!((map__35806 == null)))?((((map__35806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35806):map__35806);
var recv_buf_or_n = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__26922__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
var or__26922__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__26922__auto____$1)){
return or__26922__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35808){if((e35808 instanceof Error)){
var e = e35808;
return e;
} else {
throw e35808;

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
}catch (e35809){if((e35809 instanceof Error)){
var e = e35809;
return e;
} else {
throw e35809;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_36108 = (function (){try{if(((function (vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35799_SHARP_){
if(!((p1__35799_SHARP_ == null))){
if((false) || (p1__35799_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35799_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35799_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35799_SHARP_);
}
});})(vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35810){if((e35810 instanceof Error)){
var e = e35810;
return e;
} else {
throw e35810;

}
}})();
if((e_36108 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35799#] (satisfies? interfaces/IServerChanAdapter p1__35799#)) web-server-ch-adapter)",web_server_ch_adapter,e_36108,null);
}

var max_ms_36109 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_36109)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_36109)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_36109], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__26922__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__36110 = null;
var G__36110__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__35812 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__35812,(0),null);
var _udt = cljs.core.nth.call(null,vec__35812,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__36110__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__36110 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__36110__3.call(this,conn_type,uid,client_id);
case 4:
return G__36110__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36110.cljs$core$IFn$_invoke$arity$3 = G__36110__3;
G__36110.cljs$core$IFn$_invoke$arity$4 = G__36110__4;
return G__36110;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35815){if((e35815 instanceof Error)){
var e = e35815;
return e;
} else {
throw e35815;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35816){
var map__35817 = p__35816;
var map__35817__$1 = ((((!((map__35817 == null)))?((((map__35817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35817):map__35817);
var old_m = map__35817__$1;
var ws = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35819 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__35819) {
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35820){if((e35820 instanceof Error)){
var e = e35820;
return e;
} else {
throw e35820;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35821){
var map__35822 = p__35821;
var map__35822__$1 = ((((!((map__35822 == null)))?((((map__35822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35822):map__35822);
var old_m = map__35822__$1;
var ws = cljs.core.get.call(null,map__35822__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__35822__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35822__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__36112__delegate = function (user_id,ev,p__35824){
var vec__35825 = p__35824;
var map__35828 = cljs.core.nth.call(null,vec__35825,(0),null);
var map__35828__$1 = ((((!((map__35828 == null)))?((((map__35828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35828):map__35828);
var opts = map__35828__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_36113 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __36114 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_36113,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_36113,ev], null);
});})(uid_36113,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,477822239);
var __36115__$1 = (cljs.core.truth_(uid_36113)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __36116__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_36117 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__36118 = ((function (uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35830 = cljs.core.get.call(null,m,uid_36113);
var ___$3 = cljs.core.nth.call(null,vec__35830,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35830,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_36117)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_36113),cljs.core.get.call(null,m,uid_36113));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__35833 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35833,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35833,(1),null);
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35833,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35833,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1229038473);

var G__35836 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__35836) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_36113,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_36113,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_36113], null);
});})(uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1512974512);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__36118.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__36118.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__35837_36120 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_36113], null))));
var chunk__35838_36121 = null;
var count__35839_36122 = (0);
var i__35840_36123 = (0);
while(true){
if((i__35840_36123 < count__35839_36122)){
var vec__35841_36124 = cljs.core._nth.call(null,chunk__35838_36121,i__35840_36123);
var _QMARK_sch_36125 = cljs.core.nth.call(null,vec__35841_36124,(0),null);
var _udt_36126 = cljs.core.nth.call(null,vec__35841_36124,(1),null);
var temp__4657__auto___36127 = _QMARK_sch_36125;
if(cljs.core.truth_(temp__4657__auto___36127)){
var sch_36128 = temp__4657__auto___36127;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_36128);
} else {
}

var G__36129 = seq__35837_36120;
var G__36130 = chunk__35838_36121;
var G__36131 = count__35839_36122;
var G__36132 = (i__35840_36123 + (1));
seq__35837_36120 = G__36129;
chunk__35838_36121 = G__36130;
count__35839_36122 = G__36131;
i__35840_36123 = G__36132;
continue;
} else {
var temp__4657__auto___36133 = cljs.core.seq.call(null,seq__35837_36120);
if(temp__4657__auto___36133){
var seq__35837_36134__$1 = temp__4657__auto___36133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35837_36134__$1)){
var c__27733__auto___36135 = cljs.core.chunk_first.call(null,seq__35837_36134__$1);
var G__36136 = cljs.core.chunk_rest.call(null,seq__35837_36134__$1);
var G__36137 = c__27733__auto___36135;
var G__36138 = cljs.core.count.call(null,c__27733__auto___36135);
var G__36139 = (0);
seq__35837_36120 = G__36136;
chunk__35838_36121 = G__36137;
count__35839_36122 = G__36138;
i__35840_36123 = G__36139;
continue;
} else {
var vec__35844_36140 = cljs.core.first.call(null,seq__35837_36134__$1);
var _QMARK_sch_36141 = cljs.core.nth.call(null,vec__35844_36140,(0),null);
var _udt_36142 = cljs.core.nth.call(null,vec__35844_36140,(1),null);
var temp__4657__auto___36143__$1 = _QMARK_sch_36141;
if(cljs.core.truth_(temp__4657__auto___36143__$1)){
var sch_36144 = temp__4657__auto___36143__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_36144);
} else {
}

var G__36145 = cljs.core.next.call(null,seq__35837_36134__$1);
var G__36146 = null;
var G__36147 = (0);
var G__36148 = (0);
seq__35837_36120 = G__36145;
chunk__35838_36121 = G__36146;
count__35839_36122 = G__36147;
i__35840_36123 = G__36148;
continue;
}
} else {
}
}
break;
}

var seq__35847_36149 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_36113], null))));
var chunk__35848_36150 = null;
var count__35849_36151 = (0);
var i__35850_36152 = (0);
while(true){
if((i__35850_36152 < count__35849_36151)){
var vec__35851_36153 = cljs.core._nth.call(null,chunk__35848_36150,i__35850_36152);
var _QMARK_sch_36154 = cljs.core.nth.call(null,vec__35851_36153,(0),null);
var _udt_36155 = cljs.core.nth.call(null,vec__35851_36153,(1),null);
var temp__4657__auto___36156 = _QMARK_sch_36154;
if(cljs.core.truth_(temp__4657__auto___36156)){
var sch_36157 = temp__4657__auto___36156;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_36157);
} else {
}

var G__36158 = seq__35847_36149;
var G__36159 = chunk__35848_36150;
var G__36160 = count__35849_36151;
var G__36161 = (i__35850_36152 + (1));
seq__35847_36149 = G__36158;
chunk__35848_36150 = G__36159;
count__35849_36151 = G__36160;
i__35850_36152 = G__36161;
continue;
} else {
var temp__4657__auto___36162 = cljs.core.seq.call(null,seq__35847_36149);
if(temp__4657__auto___36162){
var seq__35847_36163__$1 = temp__4657__auto___36162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35847_36163__$1)){
var c__27733__auto___36164 = cljs.core.chunk_first.call(null,seq__35847_36163__$1);
var G__36165 = cljs.core.chunk_rest.call(null,seq__35847_36163__$1);
var G__36166 = c__27733__auto___36164;
var G__36167 = cljs.core.count.call(null,c__27733__auto___36164);
var G__36168 = (0);
seq__35847_36149 = G__36165;
chunk__35848_36150 = G__36166;
count__35849_36151 = G__36167;
i__35850_36152 = G__36168;
continue;
} else {
var vec__35854_36169 = cljs.core.first.call(null,seq__35847_36163__$1);
var _QMARK_sch_36170 = cljs.core.nth.call(null,vec__35854_36169,(0),null);
var _udt_36171 = cljs.core.nth.call(null,vec__35854_36169,(1),null);
var temp__4657__auto___36172__$1 = _QMARK_sch_36170;
if(cljs.core.truth_(temp__4657__auto___36172__$1)){
var sch_36173 = temp__4657__auto___36172__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_36173);
} else {
}

var G__36174 = cljs.core.next.call(null,seq__35847_36163__$1);
var G__36175 = null;
var G__36176 = (0);
var G__36177 = (0);
seq__35847_36149 = G__36174;
chunk__35848_36150 = G__36175;
count__35849_36151 = G__36176;
i__35850_36152 = G__36177;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35857_36178 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35858_36179 = null;
var count__35859_36180 = (0);
var i__35860_36181 = (0);
while(true){
if((i__35860_36181 < count__35859_36180)){
var conn_type_36182 = cljs.core._nth.call(null,chunk__35858_36179,i__35860_36181);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_36182,uid_36113], null),((function (seq__35857_36178,chunk__35858_36179,count__35859_36180,i__35860_36181,conn_type_36182,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_36117], true)], null);
} else {
var vec__35861 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35861,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35861,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_36117)], null);
}
});})(seq__35857_36178,chunk__35858_36179,count__35859_36180,i__35860_36181,conn_type_36182,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__36183 = seq__35857_36178;
var G__36184 = chunk__35858_36179;
var G__36185 = count__35859_36180;
var G__36186 = (i__35860_36181 + (1));
seq__35857_36178 = G__36183;
chunk__35858_36179 = G__36184;
count__35859_36180 = G__36185;
i__35860_36181 = G__36186;
continue;
} else {
var temp__4657__auto___36187 = cljs.core.seq.call(null,seq__35857_36178);
if(temp__4657__auto___36187){
var seq__35857_36188__$1 = temp__4657__auto___36187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35857_36188__$1)){
var c__27733__auto___36189 = cljs.core.chunk_first.call(null,seq__35857_36188__$1);
var G__36190 = cljs.core.chunk_rest.call(null,seq__35857_36188__$1);
var G__36191 = c__27733__auto___36189;
var G__36192 = cljs.core.count.call(null,c__27733__auto___36189);
var G__36193 = (0);
seq__35857_36178 = G__36190;
chunk__35858_36179 = G__36191;
count__35859_36180 = G__36192;
i__35860_36181 = G__36193;
continue;
} else {
var conn_type_36194 = cljs.core.first.call(null,seq__35857_36188__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_36194,uid_36113], null),((function (seq__35857_36178,chunk__35858_36179,count__35859_36180,i__35860_36181,conn_type_36194,seq__35857_36188__$1,temp__4657__auto___36187,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_36117], true)], null);
} else {
var vec__35864 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35864,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35864,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_36117)], null);
}
});})(seq__35857_36178,chunk__35858_36179,count__35859_36180,i__35860_36181,conn_type_36194,seq__35857_36188__$1,temp__4657__auto___36187,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__36195 = cljs.core.next.call(null,seq__35857_36188__$1);
var G__36196 = null;
var G__36197 = (0);
var G__36198 = (0);
seq__35857_36178 = G__36195;
chunk__35858_36179 = G__36196;
count__35859_36180 = G__36197;
i__35860_36181 = G__36198;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__36118.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__36118.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_36199 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_36200 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__29094__auto___36201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___36201,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___36201,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35871){
var state_val_35872 = (state_35871[(1)]);
if((state_val_35872 === (1))){
var state_35871__$1 = state_35871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35871__$1,(2),ws_timeout_36199);
} else {
if((state_val_35872 === (2))){
var inst_35868 = (state_35871[(2)]);
var inst_35869 = flush_buffer_BANG__36118.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35871__$1 = (function (){var statearr_35873 = state_35871;
(statearr_35873[(7)] = inst_35868);

return statearr_35873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35871__$1,inst_35869);
} else {
return null;
}
}
});})(c__29094__auto___36201,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28982__auto__,c__29094__auto___36201,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_35877 = [null,null,null,null,null,null,null,null];
(statearr_35877[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_35877[(1)] = (1));

return statearr_35877;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_35871){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_35871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e35878){if((e35878 instanceof Object)){
var ex__28986__auto__ = e35878;
var statearr_35879_36202 = state_35871;
(statearr_35879_36202[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36203 = state_35871;
state_35871 = G__36203;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_35871){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_35871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___36201,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29096__auto__ = (function (){var statearr_35880 = f__29095__auto__.call(null);
(statearr_35880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___36201);

return statearr_35880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___36201,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__29094__auto___36204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___36204,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___36204,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35885){
var state_val_35886 = (state_35885[(1)]);
if((state_val_35886 === (1))){
var state_35885__$1 = state_35885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35885__$1,(2),ajax_timeout_36200);
} else {
if((state_val_35886 === (2))){
var inst_35882 = (state_35885[(2)]);
var inst_35883 = flush_buffer_BANG__36118.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35885__$1 = (function (){var statearr_35887 = state_35885;
(statearr_35887[(7)] = inst_35882);

return statearr_35887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35885__$1,inst_35883);
} else {
return null;
}
}
});})(c__29094__auto___36204,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28982__auto__,c__29094__auto___36204,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_35891 = [null,null,null,null,null,null,null,null];
(statearr_35891[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_35891[(1)] = (1));

return statearr_35891;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_35885){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_35885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e35892){if((e35892 instanceof Object)){
var ex__28986__auto__ = e35892;
var statearr_35893_36205 = state_35885;
(statearr_35893_36205[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36206 = state_35885;
state_35885 = G__36206;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_35885){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_35885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___36204,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29096__auto__ = (function (){var statearr_35894 = f__29095__auto__.call(null);
(statearr_35894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___36204);

return statearr_35894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___36204,ws_timeout_36199,ajax_timeout_36200,uid_36113,__36114,__36115__$1,__36116__$2,ev_uuid_36117,flush_buffer_BANG__36118,vec__35825,map__35828,map__35828__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__36112 = function (user_id,ev,var_args){
var p__35824 = null;
if (arguments.length > 2) {
var G__36207__i = 0, G__36207__a = new Array(arguments.length -  2);
while (G__36207__i < G__36207__a.length) {G__36207__a[G__36207__i] = arguments[G__36207__i + 2]; ++G__36207__i;}
  p__35824 = new cljs.core.IndexedSeq(G__36207__a,0);
} 
return G__36112__delegate.call(this,user_id,ev,p__35824);};
G__36112.cljs$lang$maxFixedArity = 2;
G__36112.cljs$lang$applyTo = (function (arglist__36208){
var user_id = cljs.core.first(arglist__36208);
arglist__36208 = cljs.core.next(arglist__36208);
var ev = cljs.core.first(arglist__36208);
var p__35824 = cljs.core.rest(arglist__36208);
return G__36112__delegate(user_id,ev,p__35824);
});
G__36112.cljs$core$IFn$_invoke$arity$variadic = G__36112__delegate;
return G__36112;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35895 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35895,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35895,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1462701115);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35903){
var state_val_35904 = (state_35903[(1)]);
if((state_val_35904 === (1))){
var inst_35898 = cljs.core.async.timeout.call(null,ms);
var state_35903__$1 = state_35903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35903__$1,(2),inst_35898);
} else {
if((state_val_35904 === (2))){
var inst_35900 = (state_35903[(2)]);
var inst_35901 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_35903__$1 = (function (){var statearr_35905 = state_35903;
(statearr_35905[(7)] = inst_35900);

return statearr_35905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35903__$1,inst_35901);
} else {
return null;
}
}
});})(c__29094__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28982__auto__,c__29094__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_35909 = [null,null,null,null,null,null,null,null];
(statearr_35909[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_35909[(1)] = (1));

return statearr_35909;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_35903){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_35903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e35910){if((e35910 instanceof Object)){
var ex__28986__auto__ = e35910;
var statearr_35911_36209 = state_35903;
(statearr_35911_36209[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36210 = state_35903;
state_35903 = G__36210;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_35903){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_35903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29096__auto__ = (function (){var statearr_35912 = f__29095__auto__.call(null);
(statearr_35912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_35912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35895,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29094__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-384358065);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1483616134);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-170048833);
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
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35948){
var state_val_35949 = (state_35948[(1)]);
if((state_val_35949 === (7))){
var inst_35944 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35950_36211 = state_35948__$1;
(statearr_35950_36211[(2)] = inst_35944);

(statearr_35950_36211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (1))){
var inst_35913 = udt_open;
var state_35948__$1 = (function (){var statearr_35951 = state_35948;
(statearr_35951[(7)] = inst_35913);

return statearr_35951;
})();
var statearr_35952_36212 = state_35948__$1;
(statearr_35952_36212[(2)] = null);

(statearr_35952_36212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (4))){
var inst_35922 = (state_35948[(8)]);
var inst_35917 = (state_35948[(2)]);
var inst_35918 = cljs.core.deref.call(null,conns_);
var inst_35919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35920 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_35921 = (new cljs.core.PersistentVector(null,3,(5),inst_35919,inst_35920,null));
var inst_35922__$1 = cljs.core.get_in.call(null,inst_35918,inst_35921);
var state_35948__$1 = (function (){var statearr_35953 = state_35948;
(statearr_35953[(9)] = inst_35917);

(statearr_35953[(8)] = inst_35922__$1);

return statearr_35953;
})();
if(cljs.core.truth_(inst_35922__$1)){
var statearr_35954_36213 = state_35948__$1;
(statearr_35954_36213[(1)] = (5));

} else {
var statearr_35955_36214 = state_35948__$1;
(statearr_35955_36214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (13))){
var inst_35928 = (state_35948[(10)]);
var inst_35937 = (state_35948[(2)]);
var inst_35913 = inst_35928;
var state_35948__$1 = (function (){var statearr_35956 = state_35948;
(statearr_35956[(11)] = inst_35937);

(statearr_35956[(7)] = inst_35913);

return statearr_35956;
})();
var statearr_35957_36215 = state_35948__$1;
(statearr_35957_36215[(2)] = null);

(statearr_35957_36215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (6))){
var state_35948__$1 = state_35948;
var statearr_35958_36216 = state_35948__$1;
(statearr_35958_36216[(2)] = null);

(statearr_35958_36216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (3))){
var inst_35946 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35948__$1,inst_35946);
} else {
if((state_val_35949 === (12))){
var state_35948__$1 = state_35948;
var statearr_35959_36217 = state_35948__$1;
(statearr_35959_36217[(2)] = null);

(statearr_35959_36217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (2))){
var inst_35915 = cljs.core.async.timeout.call(null,ms);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35948__$1,(4),inst_35915);
} else {
if((state_val_35949 === (11))){
var inst_35933 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_35934 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_35933);
var state_35948__$1 = state_35948;
var statearr_35960_36218 = state_35948__$1;
(statearr_35960_36218[(2)] = inst_35934);

(statearr_35960_36218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (9))){
var state_35948__$1 = state_35948;
var statearr_35961_36219 = state_35948__$1;
(statearr_35961_36219[(2)] = null);

(statearr_35961_36219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (5))){
var inst_35922 = (state_35948[(8)]);
var inst_35927 = cljs.core.nth.call(null,inst_35922,(0),null);
var inst_35928 = cljs.core.nth.call(null,inst_35922,(1),null);
var inst_35929 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_35948__$1 = (function (){var statearr_35962 = state_35948;
(statearr_35962[(10)] = inst_35928);

(statearr_35962[(12)] = inst_35927);

return statearr_35962;
})();
if(cljs.core.truth_(inst_35929)){
var statearr_35963_36220 = state_35948__$1;
(statearr_35963_36220[(1)] = (8));

} else {
var statearr_35964_36221 = state_35948__$1;
(statearr_35964_36221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (10))){
var inst_35941 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35965_36222 = state_35948__$1;
(statearr_35965_36222[(2)] = inst_35941);

(statearr_35965_36222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (8))){
var inst_35928 = (state_35948[(10)]);
var inst_35913 = (state_35948[(7)]);
var inst_35931 = cljs.core._EQ_.call(null,inst_35928,inst_35913);
var state_35948__$1 = state_35948;
if(inst_35931){
var statearr_35966_36223 = state_35948__$1;
(statearr_35966_36223[(1)] = (11));

} else {
var statearr_35967_36224 = state_35948__$1;
(statearr_35967_36224[(1)] = (12));

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
});})(c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28982__auto__,c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_35971 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35971[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_35971[(1)] = (1));

return statearr_35971;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_35948){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_35948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e35972){if((e35972 instanceof Object)){
var ex__28986__auto__ = e35972;
var statearr_35973_36225 = state_35948;
(statearr_35973_36225[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36226 = state_35948;
state_35948 = G__36226;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_35948){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_35948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29096__auto__ = (function (){var statearr_35974 = f__29095__auto__.call(null);
(statearr_35974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_35974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29094__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1054358776);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__26922__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
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
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36000){
var state_val_36001 = (state_36000[(1)]);
if((state_val_36001 === (1))){
var inst_35975 = cljs.core.async.timeout.call(null,ms);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36000__$1,(2),inst_35975);
} else {
if((state_val_36001 === (2))){
var inst_35982 = (state_36000[(7)]);
var inst_35977 = (state_36000[(2)]);
var inst_35978 = cljs.core.deref.call(null,conns_);
var inst_35979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35980 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_35981 = (new cljs.core.PersistentVector(null,3,(5),inst_35979,inst_35980,null));
var inst_35982__$1 = cljs.core.get_in.call(null,inst_35978,inst_35981);
var state_36000__$1 = (function (){var statearr_36002 = state_36000;
(statearr_36002[(7)] = inst_35982__$1);

(statearr_36002[(8)] = inst_35977);

return statearr_36002;
})();
if(cljs.core.truth_(inst_35982__$1)){
var statearr_36003_36227 = state_36000__$1;
(statearr_36003_36227[(1)] = (3));

} else {
var statearr_36004_36228 = state_36000__$1;
(statearr_36004_36228[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (3))){
var inst_35982 = (state_36000[(7)]);
var inst_35987 = cljs.core.nth.call(null,inst_35982,(0),null);
var inst_35988 = cljs.core.nth.call(null,inst_35982,(1),null);
var inst_35989 = cljs.core._EQ_.call(null,inst_35988,udt_open);
var state_36000__$1 = (function (){var statearr_36005 = state_36000;
(statearr_36005[(9)] = inst_35987);

return statearr_36005;
})();
if(inst_35989){
var statearr_36006_36229 = state_36000__$1;
(statearr_36006_36229[(1)] = (6));

} else {
var statearr_36007_36230 = state_36000__$1;
(statearr_36007_36230[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (4))){
var state_36000__$1 = state_36000;
var statearr_36008_36231 = state_36000__$1;
(statearr_36008_36231[(2)] = null);

(statearr_36008_36231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (5))){
var inst_35998 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36000__$1,inst_35998);
} else {
if((state_val_36001 === (6))){
var inst_35991 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_35992 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_35991);
var state_36000__$1 = state_36000;
var statearr_36009_36232 = state_36000__$1;
(statearr_36009_36232[(2)] = inst_35992);

(statearr_36009_36232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (7))){
var state_36000__$1 = state_36000;
var statearr_36010_36233 = state_36000__$1;
(statearr_36010_36233[(2)] = null);

(statearr_36010_36233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (8))){
var inst_35995 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36011_36234 = state_36000__$1;
(statearr_36011_36234[(2)] = inst_35995);

(statearr_36011_36234[(1)] = (5));


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
});})(c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28982__auto__,c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_36015 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36015[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_36015[(1)] = (1));

return statearr_36015;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_36000){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_36000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e36016){if((e36016 instanceof Object)){
var ex__28986__auto__ = e36016;
var statearr_36017_36235 = state_36000;
(statearr_36017_36235[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36236 = state_36000;
state_36000 = G__36236;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_36000){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_36000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29096__auto__ = (function (){var statearr_36018 = f__29095__auto__.call(null);
(statearr_36018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_36018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29094__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__36019 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__36019,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36019,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__36019,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36019,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__36019,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1517987761);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__36019,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1334780445);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36073){
var state_val_36074 = (state_36073[(1)]);
if((state_val_36074 === (7))){
var state_36073__$1 = state_36073;
var statearr_36075_36237 = state_36073__$1;
(statearr_36075_36237[(2)] = null);

(statearr_36075_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (1))){
var inst_36022 = cljs.core.async.timeout.call(null,(5000));
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36073__$1,(2),inst_36022);
} else {
if((state_val_36074 === (4))){
var state_36073__$1 = state_36073;
var statearr_36076_36238 = state_36073__$1;
(statearr_36076_36238[(2)] = null);

(statearr_36076_36238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (13))){
var state_36073__$1 = state_36073;
var statearr_36077_36239 = state_36073__$1;
(statearr_36077_36239[(2)] = null);

(statearr_36077_36239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (6))){
var inst_36050 = (state_36073[(7)]);
var inst_36034 = (state_36073[(8)]);
var inst_36033 = (state_36073[(9)]);
var inst_36032 = (state_36073[(10)]);
var inst_36045 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36046 = [conn_type,uid,client_id];
var inst_36047 = (new cljs.core.PersistentVector(null,3,(5),inst_36045,inst_36046,null));
var inst_36049 = (function (){var vec__36025 = inst_36032;
var __QMARK_sch = inst_36033;
var udt_t1 = inst_36034;
return ((function (vec__36025,__QMARK_sch,udt_t1,inst_36050,inst_36034,inst_36033,inst_36032,inst_36045,inst_36046,inst_36047,state_val_36074,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__36048){
var vec__36078 = p__36048;
var _sch = cljs.core.nth.call(null,vec__36078,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__36078,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__36025,__QMARK_sch,udt_t1,inst_36050,inst_36034,inst_36033,inst_36032,inst_36045,inst_36046,inst_36047,state_val_36074,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_36050__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36047,inst_36049);
var state_36073__$1 = (function (){var statearr_36081 = state_36073;
(statearr_36081[(7)] = inst_36050__$1);

return statearr_36081;
})();
if(cljs.core.truth_(inst_36050__$1)){
var statearr_36082_36240 = state_36073__$1;
(statearr_36082_36240[(1)] = (9));

} else {
var statearr_36083_36241 = state_36073__$1;
(statearr_36083_36241[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (3))){
var inst_36034 = (state_36073[(8)]);
var inst_36033 = (state_36073[(9)]);
var inst_36032 = (state_36073[(10)]);
var inst_36037 = (function (){var vec__36025 = inst_36032;
var __QMARK_sch = inst_36033;
var udt_t1 = inst_36034;
return ((function (vec__36025,__QMARK_sch,udt_t1,inst_36034,inst_36033,inst_36032,state_val_36074,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__36025,__QMARK_sch,udt_t1,inst_36034,inst_36033,inst_36032,state_val_36074,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_36038 = (new cljs.core.Delay(inst_36037,null));
var inst_36039 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36038,null,707039096);
var state_36073__$1 = state_36073;
var statearr_36084_36242 = state_36073__$1;
(statearr_36084_36242[(2)] = inst_36039);

(statearr_36084_36242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (12))){
var inst_36059 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36060 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_36061 = (new cljs.core.PersistentVector(null,2,(5),inst_36059,inst_36060,null));
var inst_36062 = receive_event_msg_BANG_.call(null,inst_36061);
var state_36073__$1 = state_36073;
var statearr_36085_36243 = state_36073__$1;
(statearr_36085_36243[(2)] = inst_36062);

(statearr_36085_36243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (2))){
var inst_36032 = (state_36073[(10)]);
var inst_36024 = (state_36073[(2)]);
var inst_36028 = cljs.core.deref.call(null,conns_);
var inst_36029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36030 = [conn_type,uid,client_id];
var inst_36031 = (new cljs.core.PersistentVector(null,3,(5),inst_36029,inst_36030,null));
var inst_36032__$1 = cljs.core.get_in.call(null,inst_36028,inst_36031);
var inst_36033 = cljs.core.nth.call(null,inst_36032__$1,(0),null);
var inst_36034 = cljs.core.nth.call(null,inst_36032__$1,(1),null);
var inst_36035 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_36073__$1 = (function (){var statearr_36086 = state_36073;
(statearr_36086[(8)] = inst_36034);

(statearr_36086[(11)] = inst_36024);

(statearr_36086[(9)] = inst_36033);

(statearr_36086[(10)] = inst_36032__$1);

return statearr_36086;
})();
if(cljs.core.truth_(inst_36035)){
var statearr_36087_36244 = state_36073__$1;
(statearr_36087_36244[(1)] = (3));

} else {
var statearr_36088_36245 = state_36073__$1;
(statearr_36088_36245[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (11))){
var inst_36068 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36089_36246 = state_36073__$1;
(statearr_36089_36246[(2)] = inst_36068);

(statearr_36089_36246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (9))){
var inst_36050 = (state_36073[(7)]);
var inst_36034 = (state_36073[(8)]);
var inst_36033 = (state_36073[(9)]);
var inst_36032 = (state_36073[(10)]);
var inst_36052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36053 = [conn_type,uid];
var inst_36054 = (new cljs.core.PersistentVector(null,2,(5),inst_36052,inst_36053,null));
var inst_36055 = (function (){var vec__36025 = inst_36032;
var __QMARK_sch = inst_36033;
var udt_t1 = inst_36034;
var disconnect_QMARK_ = inst_36050;
return ((function (vec__36025,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_36050,inst_36034,inst_36033,inst_36032,inst_36052,inst_36053,inst_36054,state_val_36074,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__36025,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_36050,inst_36034,inst_36033,inst_36032,inst_36052,inst_36053,inst_36054,state_val_36074,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_36056 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36054,inst_36055);
var inst_36057 = upd_connected_uid_BANG_.call(null,uid);
var state_36073__$1 = (function (){var statearr_36090 = state_36073;
(statearr_36090[(12)] = inst_36056);

return statearr_36090;
})();
if(cljs.core.truth_(inst_36057)){
var statearr_36091_36247 = state_36073__$1;
(statearr_36091_36247[(1)] = (12));

} else {
var statearr_36092_36248 = state_36073__$1;
(statearr_36092_36248[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (5))){
var inst_36034 = (state_36073[(8)]);
var inst_36042 = (state_36073[(2)]);
var inst_36043 = cljs.core._EQ_.call(null,inst_36034,udt_close);
var state_36073__$1 = (function (){var statearr_36093 = state_36073;
(statearr_36093[(13)] = inst_36042);

return statearr_36093;
})();
if(inst_36043){
var statearr_36094_36249 = state_36073__$1;
(statearr_36094_36249[(1)] = (6));

} else {
var statearr_36095_36250 = state_36073__$1;
(statearr_36095_36250[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (14))){
var inst_36065 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36096_36251 = state_36073__$1;
(statearr_36096_36251[(2)] = inst_36065);

(statearr_36096_36251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (10))){
var state_36073__$1 = state_36073;
var statearr_36097_36252 = state_36073__$1;
(statearr_36097_36252[(2)] = null);

(statearr_36097_36252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (8))){
var inst_36071 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36073__$1,inst_36071);
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
});})(c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28982__auto__,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_36101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36101[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_36101[(1)] = (1));

return statearr_36101;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_36073){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_36073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e36102){if((e36102 instanceof Object)){
var ex__28986__auto__ = e36102;
var statearr_36103_36253 = state_36073;
(statearr_36103_36253[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36254 = state_36073;
state_36073 = G__36254;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_36073){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_36073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29096__auto__ = (function (){var statearr_36104 = f__29095__auto__.call(null);
(statearr_36104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_36104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29094__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,684022366);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35803,map__35806,map__35806__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35800){
var G__35801 = cljs.core.first.call(null,seq35800);
var seq35800__$1 = cljs.core.next.call(null,seq35800);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35801,seq35800__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1735585128);

var seq__36271 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__36272 = null;
var count__36273 = (0);
var i__36274 = (0);
while(true){
if((i__36274 < count__36273)){
var vec__36275 = cljs.core._nth.call(null,chunk__36272,i__36274);
var client_id = cljs.core.nth.call(null,vec__36275,(0),null);
var vec__36278 = cljs.core.nth.call(null,vec__36275,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__36278,(0),null);
var _udt = cljs.core.nth.call(null,vec__36278,(1),null);
var temp__4657__auto___36287 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___36287)){
var sch_36288 = temp__4657__auto___36287;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_36288,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__36289 = seq__36271;
var G__36290 = chunk__36272;
var G__36291 = count__36273;
var G__36292 = (i__36274 + (1));
seq__36271 = G__36289;
chunk__36272 = G__36290;
count__36273 = G__36291;
i__36274 = G__36292;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36271);
if(temp__4657__auto__){
var seq__36271__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36271__$1)){
var c__27733__auto__ = cljs.core.chunk_first.call(null,seq__36271__$1);
var G__36293 = cljs.core.chunk_rest.call(null,seq__36271__$1);
var G__36294 = c__27733__auto__;
var G__36295 = cljs.core.count.call(null,c__27733__auto__);
var G__36296 = (0);
seq__36271 = G__36293;
chunk__36272 = G__36294;
count__36273 = G__36295;
i__36274 = G__36296;
continue;
} else {
var vec__36281 = cljs.core.first.call(null,seq__36271__$1);
var client_id = cljs.core.nth.call(null,vec__36281,(0),null);
var vec__36284 = cljs.core.nth.call(null,vec__36281,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__36284,(0),null);
var _udt = cljs.core.nth.call(null,vec__36284,(1),null);
var temp__4657__auto___36297__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___36297__$1)){
var sch_36298 = temp__4657__auto___36297__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_36298,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__36299 = cljs.core.next.call(null,seq__36271__$1);
var G__36300 = null;
var G__36301 = (0);
var G__36302 = (0);
seq__36271 = G__36299;
chunk__36272 = G__36300;
count__36273 = G__36301;
i__36274 = G__36302;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,874849747);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_36433){
var state_val_36434 = (state_36433[(1)]);
if((state_val_36434 === (7))){
var inst_36395 = (state_36433[(7)]);
var inst_36389 = (state_36433[(8)]);
var inst_36388 = (state_36433[(9)]);
var inst_36405 = (function (){var n = inst_36388;
var client_ids_satisfied = inst_36389;
var _QMARK_pulled = inst_36395;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36395,inst_36389,inst_36388,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__36404){
var vec__36435 = p__36404;
var _QMARK_sch = cljs.core.nth.call(null,vec__36435,(0),null);
var _udt = cljs.core.nth.call(null,vec__36435,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36395,inst_36389,inst_36388,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36406 = cljs.core.PersistentHashSet.EMPTY;
var inst_36407 = cljs.core.reduce_kv.call(null,inst_36405,inst_36406,inst_36395);
var state_36433__$1 = state_36433;
var statearr_36438_36471 = state_36433__$1;
(statearr_36438_36471[(2)] = inst_36407);

(statearr_36438_36471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (1))){
var inst_36387 = cljs.core.PersistentHashSet.EMPTY;
var inst_36388 = (0);
var inst_36389 = inst_36387;
var state_36433__$1 = (function (){var statearr_36439 = state_36433;
(statearr_36439[(8)] = inst_36389);

(statearr_36439[(9)] = inst_36388);

return statearr_36439;
})();
var statearr_36440_36472 = state_36433__$1;
(statearr_36440_36472[(2)] = null);

(statearr_36440_36472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (4))){
var state_36433__$1 = state_36433;
var statearr_36441_36473 = state_36433__$1;
(statearr_36441_36473[(2)] = true);

(statearr_36441_36473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (15))){
var inst_36426 = (state_36433[(2)]);
var state_36433__$1 = state_36433;
var statearr_36442_36474 = state_36433__$1;
(statearr_36442_36474[(2)] = inst_36426);

(statearr_36442_36474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (13))){
var inst_36412 = (state_36433[(10)]);
var inst_36417 = cljs.core.rand_int.call(null,inst_36412);
var inst_36418 = (inst_36412 + inst_36417);
var inst_36419 = cljs.core.async.timeout.call(null,inst_36418);
var state_36433__$1 = state_36433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36433__$1,(16),inst_36419);
} else {
if((state_val_36434 === (6))){
var inst_36395 = (state_36433[(7)]);
var inst_36402 = (state_36433[(2)]);
var state_36433__$1 = (function (){var statearr_36443 = state_36433;
(statearr_36443[(11)] = inst_36402);

return statearr_36443;
})();
if(cljs.core.truth_(inst_36395)){
var statearr_36444_36475 = state_36433__$1;
(statearr_36444_36475[(1)] = (7));

} else {
var statearr_36445_36476 = state_36433__$1;
(statearr_36445_36476[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (3))){
var inst_36431 = (state_36433[(2)]);
var state_36433__$1 = state_36433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36433__$1,inst_36431);
} else {
if((state_val_36434 === (12))){
var inst_36429 = (state_36433[(2)]);
var state_36433__$1 = state_36433;
var statearr_36446_36477 = state_36433__$1;
(statearr_36446_36477[(2)] = inst_36429);

(statearr_36446_36477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (2))){
var inst_36395 = (state_36433[(7)]);
var inst_36389 = (state_36433[(8)]);
var inst_36388 = (state_36433[(9)]);
var inst_36391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36392 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36393 = (new cljs.core.PersistentVector(null,2,(5),inst_36391,inst_36392,null));
var inst_36394 = (function (){var n = inst_36388;
var client_ids_satisfied = inst_36389;
return ((function (n,client_ids_satisfied,inst_36395,inst_36389,inst_36388,inst_36391,inst_36392,inst_36393,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36395,inst_36389,inst_36388,inst_36391,inst_36392,inst_36393,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__36447 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__36447,(0),null);
var udt = cljs.core.nth.call(null,vec__36447,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36395,inst_36389,inst_36388,inst_36391,inst_36392,inst_36393,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36395,inst_36389,inst_36388,inst_36391,inst_36392,inst_36393,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36395__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36393,inst_36394);
var inst_36396 = (function (){var n = inst_36388;
var client_ids_satisfied = inst_36389;
var _QMARK_pulled = inst_36395__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36395,inst_36389,inst_36388,inst_36391,inst_36392,inst_36393,inst_36394,inst_36395__$1,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__26922__auto__ = (x == null);
if(or__26922__auto__){
return or__26922__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36395,inst_36389,inst_36388,inst_36391,inst_36392,inst_36393,inst_36394,inst_36395__$1,state_val_36434,c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36397 = inst_36396.call(null,inst_36395__$1);
var state_36433__$1 = (function (){var statearr_36450 = state_36433;
(statearr_36450[(7)] = inst_36395__$1);

return statearr_36450;
})();
if(cljs.core.truth_(inst_36397)){
var statearr_36451_36478 = state_36433__$1;
(statearr_36451_36478[(1)] = (4));

} else {
var statearr_36452_36479 = state_36433__$1;
(statearr_36452_36479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (11))){
var state_36433__$1 = state_36433;
var statearr_36453_36480 = state_36433__$1;
(statearr_36453_36480[(2)] = null);

(statearr_36453_36480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (9))){
var inst_36412 = (state_36433[(10)]);
var inst_36389 = (state_36433[(8)]);
var inst_36388 = (state_36433[(9)]);
var inst_36410 = (state_36433[(2)]);
var inst_36411 = cljs.core.into.call(null,inst_36389,inst_36410);
var inst_36412__$1 = cljs.core.get.call(null,ms_backoffs,inst_36388);
var state_36433__$1 = (function (){var statearr_36454 = state_36433;
(statearr_36454[(12)] = inst_36411);

(statearr_36454[(10)] = inst_36412__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36412__$1)){
var statearr_36455_36481 = state_36433__$1;
(statearr_36455_36481[(1)] = (10));

} else {
var statearr_36456_36482 = state_36433__$1;
(statearr_36456_36482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (5))){
var inst_36395 = (state_36433[(7)]);
var inst_36400 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_36395,null,null);
var state_36433__$1 = state_36433;
var statearr_36457_36483 = state_36433__$1;
(statearr_36457_36483[(2)] = inst_36400);

(statearr_36457_36483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (14))){
var state_36433__$1 = state_36433;
var statearr_36458_36484 = state_36433__$1;
(statearr_36458_36484[(2)] = null);

(statearr_36458_36484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (16))){
var inst_36411 = (state_36433[(12)]);
var inst_36388 = (state_36433[(9)]);
var inst_36421 = (state_36433[(2)]);
var inst_36422 = (inst_36388 + (1));
var inst_36388__$1 = inst_36422;
var inst_36389 = inst_36411;
var state_36433__$1 = (function (){var statearr_36459 = state_36433;
(statearr_36459[(13)] = inst_36421);

(statearr_36459[(8)] = inst_36389);

(statearr_36459[(9)] = inst_36388__$1);

return statearr_36459;
})();
var statearr_36460_36485 = state_36433__$1;
(statearr_36460_36485[(2)] = null);

(statearr_36460_36485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (10))){
var inst_36411 = (state_36433[(12)]);
var inst_36414 = cljs.core.complement.call(null,inst_36411);
var inst_36415 = taoensso.encore.rsome.call(null,inst_36414,client_ids_unsatisfied);
var state_36433__$1 = state_36433;
if(cljs.core.truth_(inst_36415)){
var statearr_36461_36486 = state_36433__$1;
(statearr_36461_36486[(1)] = (13));

} else {
var statearr_36462_36487 = state_36433__$1;
(statearr_36462_36487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36434 === (8))){
var state_36433__$1 = state_36433;
var statearr_36463_36488 = state_36433__$1;
(statearr_36463_36488[(2)] = null);

(statearr_36463_36488[(1)] = (9));


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
});})(c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__28982__auto__,c__29094__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto____0 = (function (){
var statearr_36467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36467[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto__);

(statearr_36467[(1)] = (1));

return statearr_36467;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto____1 = (function (state_36433){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_36433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e36468){if((e36468 instanceof Object)){
var ex__28986__auto__ = e36468;
var statearr_36469_36489 = state_36433;
(statearr_36469_36489[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36490 = state_36433;
state_36433 = G__36490;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto__ = function(state_36433){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto____1.call(this,state_36433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__29096__auto__ = (function (){var statearr_36470 = f__29095__auto__.call(null);
(statearr_36470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_36470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__29094__auto__;
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
var x__27585__auto__ = (((chsk == null))?null:chsk);
var m__27586__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,chsk);
} else {
var m__27586__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,chsk);
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
var x__27585__auto__ = (((chsk == null))?null:chsk);
var m__27586__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,chsk,reason);
} else {
var m__27586__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,chsk,reason);
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
var x__27585__auto__ = (((chsk == null))?null:chsk);
var m__27586__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,chsk);
} else {
var m__27586__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,chsk);
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
var x__27585__auto__ = (((chsk == null))?null:chsk);
var m__27586__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,chsk,ev,opts);
} else {
var m__27586__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,chsk,ev,opts);
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
var args36491 = [];
var len__27997__auto___36494 = arguments.length;
var i__27998__auto___36495 = (0);
while(true){
if((i__27998__auto___36495 < len__27997__auto___36494)){
args36491.push((arguments[i__27998__auto___36495]));

var G__36496 = (i__27998__auto___36495 + (1));
i__27998__auto___36495 = G__36496;
continue;
} else {
}
break;
}

var G__36493 = args36491.length;
switch (G__36493) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36491.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1920500087);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,252942844);

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
var vec__36501 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__36501,(0),null);
var new_state = cljs.core.nth.call(null,vec__36501,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_36508 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36506){if((e36506 instanceof Error)){
var e = e36506;
return e;
} else {
throw e36506;

}
}})();
if((e_36508 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_36508,null);
}

var e_36509 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36507){if((e36507 instanceof Error)){
var e = e36507;
return e;
} else {
throw e36507;

}
}})();
if((e_36509 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_36509,null);
}

if(cljs.core.truth_((function (){var or__26922__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
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
var e_36518 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36514){if((e36514 instanceof Error)){
var e = e36514;
return e;
} else {
throw e36514;

}
}})();
if((e_36518 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_36518,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__36515 = ev;
var ev_id = cljs.core.nth.call(null,vec__36515,(0),null);
var _ = cljs.core.nth.call(null,vec__36515,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36515,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36515,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-114359795);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__36529 = cljs.core.seq.call(null,buffered_evs);
var chunk__36530 = null;
var count__36531 = (0);
var i__36532 = (0);
while(true){
if((i__36532 < count__36531)){
var ev = cljs.core._nth.call(null,chunk__36530,i__36532);
taoensso.sente.assert_event.call(null,ev);

var vec__36533_36539 = ev;
var id_36540 = cljs.core.nth.call(null,vec__36533_36539,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_36540),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36541 = seq__36529;
var G__36542 = chunk__36530;
var G__36543 = count__36531;
var G__36544 = (i__36532 + (1));
seq__36529 = G__36541;
chunk__36530 = G__36542;
count__36531 = G__36543;
i__36532 = G__36544;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36529);
if(temp__4657__auto__){
var seq__36529__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36529__$1)){
var c__27733__auto__ = cljs.core.chunk_first.call(null,seq__36529__$1);
var G__36545 = cljs.core.chunk_rest.call(null,seq__36529__$1);
var G__36546 = c__27733__auto__;
var G__36547 = cljs.core.count.call(null,c__27733__auto__);
var G__36548 = (0);
seq__36529 = G__36545;
chunk__36530 = G__36546;
count__36531 = G__36547;
i__36532 = G__36548;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36529__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__36536_36549 = ev;
var id_36550 = cljs.core.nth.call(null,vec__36536_36549,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_36550),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36551 = cljs.core.next.call(null,seq__36529__$1);
var G__36552 = null;
var G__36553 = (0);
var G__36554 = (0);
seq__36529 = G__36551;
chunk__36530 = G__36552;
count__36531 = G__36553;
i__36532 = G__36554;
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
var and__26910__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__26910__auto__){
var vec__36564 = x;
var x1 = cljs.core.nth.call(null,vec__36564,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__26910__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_36588 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36578){if((e36578 instanceof Error)){
var e = e36578;
return e;
} else {
throw e36578;

}
}})();
if((e_36588 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_36588,null);
}

var e_36589 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36579){if((e36579 instanceof Error)){
var e = e36579;
return e;
} else {
throw e36579;

}
}})();
if((e_36589 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_36589,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,526840351);

var vec__36580 = clj;
var _ = cljs.core.nth.call(null,vec__36580,(0),null);
var vec__36583 = cljs.core.nth.call(null,vec__36580,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36583,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36583,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36583,(2),null);
var map__36586 = chsk;
var map__36586__$1 = ((((!((map__36586 == null)))?((((map__36586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36586):map__36586);
var chs = cljs.core.get.call(null,map__36586__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__36586__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36580,_,vec__36583,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36586,map__36586__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36580,_,vec__36583,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36586,map__36586__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-1969637292);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__36580,_,vec__36583,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36586,map__36586__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__36567_SHARP_){
return cljs.core.merge.call(null,p1__36567_SHARP_,new_state);
});})(vec__36580,_,vec__36583,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36586,map__36586__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
if(cljs.core.truth_((function (){var and__26910__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__26910__auto__)){
return typeof require !== 'undefined';
} else {
return and__26910__auto__;
}
})())){
try{return require("websocket");
}catch (e36590){var e = e36590;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27544__auto__,k__27545__auto__){
var self__ = this;
var this__27544__auto____$1 = this;
return cljs.core._lookup.call(null,this__27544__auto____$1,k__27545__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27546__auto__,k36597,else__27547__auto__){
var self__ = this;
var this__27546__auto____$1 = this;
var G__36599 = (((k36597 instanceof cljs.core.Keyword))?k36597.fqn:null);
switch (G__36599) {
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
return cljs.core.get.call(null,self__.__extmap,k36597,else__27547__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27558__auto__,writer__27559__auto__,opts__27560__auto__){
var self__ = this;
var this__27558__auto____$1 = this;
var pr_pair__27561__auto__ = ((function (this__27558__auto____$1){
return (function (keyval__27562__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27559__auto__,cljs.core.pr_writer,""," ","",opts__27560__auto__,keyval__27562__auto__);
});})(this__27558__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27559__auto__,pr_pair__27561__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__27560__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36596){
var self__ = this;
var G__36596__$1 = this;
return (new cljs.core.RecordIter((0),G__36596__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27542__auto__){
var self__ = this;
var this__27542__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27538__auto__){
var self__ = this;
var this__27538__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27548__auto__){
var self__ = this;
var this__27548__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27539__auto__){
var self__ = this;
var this__27539__auto____$1 = this;
var h__27357__auto__ = self__.__hash;
if(!((h__27357__auto__ == null))){
return h__27357__auto__;
} else {
var h__27357__auto____$1 = cljs.core.hash_imap.call(null,this__27539__auto____$1);
self__.__hash = h__27357__auto____$1;

return h__27357__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27540__auto__,other__27541__auto__){
var self__ = this;
var this__27540__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26910__auto__ = other__27541__auto__;
if(cljs.core.truth_(and__26910__auto__)){
var and__26910__auto____$1 = (this__27540__auto____$1.constructor === other__27541__auto__.constructor);
if(and__26910__auto____$1){
return cljs.core.equiv_map.call(null,this__27540__auto____$1,other__27541__auto__);
} else {
return and__26910__auto____$1;
}
} else {
return and__26910__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27553__auto__,k__27554__auto__){
var self__ = this;
var this__27553__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__27554__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27553__auto____$1),self__.__meta),k__27554__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27554__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27551__auto__,k__27552__auto__,G__36596){
var self__ = this;
var this__27551__auto____$1 = this;
var pred__36600 = cljs.core.keyword_identical_QMARK_;
var expr__36601 = k__27552__auto__;
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36601))){
return (new taoensso.sente.ChWebSocket(G__36596,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36596,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36596,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36596,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36596,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36596,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__36596,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__36596,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__36596,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__36596,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__36596,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__36596,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__36596,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36600.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__36601))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__36596,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27552__auto__,G__36596),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27556__auto__){
var self__ = this;
var this__27556__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27543__auto__,G__36596){
var self__ = this;
var this__27543__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__36596,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27549__auto__,entry__27550__auto__){
var self__ = this;
var this__27549__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27550__auto__)){
return cljs.core._assoc.call(null,this__27549__auto____$1,cljs.core._nth.call(null,entry__27550__auto__,(0)),cljs.core._nth.call(null,entry__27550__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27549__auto____$1,entry__27550__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__36591_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36591_SHARP_,reason);
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
var map__36603 = opts;
var map__36603__$1 = ((((!((map__36603 == null)))?((((map__36603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36603):map__36603);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36603__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36603__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36603__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___36694 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36694)){
var cb_uuid_36695 = temp__4657__auto___36694;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36695], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36605){if((e36605 instanceof Error)){
var e = e36605;
return e;
} else {
throw e36605;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___36696__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___36696__$1)){
var timeout_ms_36697 = temp__4657__auto___36696__$1;
var c__29094__auto___36698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___36698,timeout_ms_36697,temp__4657__auto___36696__$1,cb_uuid_36695,temp__4657__auto___36694,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___36698,timeout_ms_36697,temp__4657__auto___36696__$1,cb_uuid_36695,temp__4657__auto___36694,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_36616){
var state_val_36617 = (state_36616[(1)]);
if((state_val_36617 === (1))){
var inst_36606 = cljs.core.async.timeout.call(null,timeout_ms_36697);
var state_36616__$1 = state_36616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36616__$1,(2),inst_36606);
} else {
if((state_val_36617 === (2))){
var inst_36609 = (state_36616[(7)]);
var inst_36608 = (state_36616[(2)]);
var inst_36609__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36616__$1 = (function (){var statearr_36618 = state_36616;
(statearr_36618[(7)] = inst_36609__$1);

(statearr_36618[(8)] = inst_36608);

return statearr_36618;
})();
if(cljs.core.truth_(inst_36609__$1)){
var statearr_36619_36699 = state_36616__$1;
(statearr_36619_36699[(1)] = (3));

} else {
var statearr_36620_36700 = state_36616__$1;
(statearr_36620_36700[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (3))){
var inst_36609 = (state_36616[(7)]);
var inst_36611 = inst_36609.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36616__$1 = state_36616;
var statearr_36621_36701 = state_36616__$1;
(statearr_36621_36701[(2)] = inst_36611);

(statearr_36621_36701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (4))){
var state_36616__$1 = state_36616;
var statearr_36622_36702 = state_36616__$1;
(statearr_36622_36702[(2)] = null);

(statearr_36622_36702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (5))){
var inst_36614 = (state_36616[(2)]);
var state_36616__$1 = state_36616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36616__$1,inst_36614);
} else {
return null;
}
}
}
}
}
});})(c__29094__auto___36698,timeout_ms_36697,temp__4657__auto___36696__$1,cb_uuid_36695,temp__4657__auto___36694,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__28982__auto__,c__29094__auto___36698,timeout_ms_36697,temp__4657__auto___36696__$1,cb_uuid_36695,temp__4657__auto___36694,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_36626 = [null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_36616){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_36616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e36627){if((e36627 instanceof Object)){
var ex__28986__auto__ = e36627;
var statearr_36628_36703 = state_36616;
(statearr_36628_36703[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36704 = state_36616;
state_36616 = G__36704;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_36616){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_36616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___36698,timeout_ms_36697,temp__4657__auto___36696__$1,cb_uuid_36695,temp__4657__auto___36694,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__29096__auto__ = (function (){var statearr_36629 = f__29095__auto__.call(null);
(statearr_36629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___36698);

return statearr_36629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___36698,timeout_ms_36697,temp__4657__auto___36696__$1,cb_uuid_36695,temp__4657__auto___36694,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36630){var e = e36630;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__36603,map__36603__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1048771858);

var temp__4657__auto___36705 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36705)){
var cb_uuid_36706 = temp__4657__auto___36705;
var cb_fn_STAR__36707 = (function (){var or__26922__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36706);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36631){if((e36631 instanceof Error)){
var e__$1 = e36631;
return e__$1;
} else {
throw e36631;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__36707.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__26922__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
var or__26922__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__26922__auto____$1)){
return or__26922__auto____$1;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,457772027);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36592_SHARP_){
return cljs.core.assoc.call(null,p1__36592_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e36638){var e = e36638;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1032292276);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36639 = _QMARK_socket;
(G__36639["onerror"] = ((function (G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e36640){var _ = e36640;
return ws_ev;
}})()], null);
});})(G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1947286564);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36593_SHARP_){
return cljs.core.assoc.call(null,p1__36593_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36639["onmessage"] = ((function (G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36641 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36641,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36641,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__26922__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
var or__26922__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__26922__auto____$1)){
return or__26922__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__26922__auto____$1,or__26922__auto__,ppstr,vec__36641,clj,_QMARK_cb_uuid,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__26922__auto____$1,or__26922__auto__,ppstr,vec__36641,clj,_QMARK_cb_uuid,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1731631861);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36639["onclose"] = ((function (G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1716656448);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36594_SHARP_){
return cljs.core.assoc.call(null,p1__36594_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36595_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__36595_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__36639,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__36639;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___36708__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___36708__$1)){
var ms_36709 = temp__4657__auto___36708__$1;
var c__29094__auto___36710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___36710,ms_36709,temp__4657__auto___36708__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___36710,ms_36709,temp__4657__auto___36708__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_36671){
var state_val_36672 = (state_36671[(1)]);
if((state_val_36672 === (7))){
var inst_36667 = (state_36671[(2)]);
var state_36671__$1 = state_36671;
var statearr_36673_36711 = state_36671__$1;
(statearr_36673_36711[(2)] = inst_36667);

(statearr_36673_36711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (1))){
var state_36671__$1 = state_36671;
var statearr_36674_36712 = state_36671__$1;
(statearr_36674_36712[(2)] = null);

(statearr_36674_36712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (4))){
var inst_36648 = (state_36671[(2)]);
var inst_36649 = have_handle_QMARK_.call(null);
var state_36671__$1 = (function (){var statearr_36675 = state_36671;
(statearr_36675[(7)] = inst_36648);

return statearr_36675;
})();
if(cljs.core.truth_(inst_36649)){
var statearr_36676_36713 = state_36671__$1;
(statearr_36676_36713[(1)] = (5));

} else {
var statearr_36677_36714 = state_36671__$1;
(statearr_36677_36714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (6))){
var state_36671__$1 = state_36671;
var statearr_36678_36715 = state_36671__$1;
(statearr_36678_36715[(2)] = null);

(statearr_36678_36715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (3))){
var inst_36669 = (state_36671[(2)]);
var state_36671__$1 = state_36671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36671__$1,inst_36669);
} else {
if((state_val_36672 === (2))){
var inst_36645 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_36646 = cljs.core.async.timeout.call(null,ms_36709);
var state_36671__$1 = (function (){var statearr_36679 = state_36671;
(statearr_36679[(8)] = inst_36645);

return statearr_36679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36671__$1,(4),inst_36646);
} else {
if((state_val_36672 === (9))){
var state_36671__$1 = state_36671;
var statearr_36680_36716 = state_36671__$1;
(statearr_36680_36716[(2)] = null);

(statearr_36680_36716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (5))){
var inst_36645 = (state_36671[(8)]);
var inst_36651 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_36652 = cljs.core._EQ_.call(null,inst_36645,inst_36651);
var state_36671__$1 = state_36671;
if(inst_36652){
var statearr_36681_36717 = state_36671__$1;
(statearr_36681_36717[(1)] = (8));

} else {
var statearr_36682_36718 = state_36671__$1;
(statearr_36682_36718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (10))){
var inst_36663 = (state_36671[(2)]);
var state_36671__$1 = (function (){var statearr_36683 = state_36671;
(statearr_36683[(9)] = inst_36663);

return statearr_36683;
})();
var statearr_36684_36719 = state_36671__$1;
(statearr_36684_36719[(2)] = null);

(statearr_36684_36719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (8))){
var inst_36654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36655 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_36656 = (new cljs.core.PersistentVector(null,1,(5),inst_36654,inst_36655,null));
var inst_36657 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_36658 = [true];
var inst_36659 = cljs.core.PersistentHashMap.fromArrays(inst_36657,inst_36658);
var inst_36660 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_36656,inst_36659);
var state_36671__$1 = state_36671;
var statearr_36685_36720 = state_36671__$1;
(statearr_36685_36720[(2)] = inst_36660);

(statearr_36685_36720[(1)] = (10));


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
});})(c__29094__auto___36710,ms_36709,temp__4657__auto___36708__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__28982__auto__,c__29094__auto___36710,ms_36709,temp__4657__auto___36708__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__28983__auto__ = null;
var taoensso$sente$state_machine__28983__auto____0 = (function (){
var statearr_36689 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36689[(0)] = taoensso$sente$state_machine__28983__auto__);

(statearr_36689[(1)] = (1));

return statearr_36689;
});
var taoensso$sente$state_machine__28983__auto____1 = (function (state_36671){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_36671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e36690){if((e36690 instanceof Object)){
var ex__28986__auto__ = e36690;
var statearr_36691_36721 = state_36671;
(statearr_36691_36721[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36722 = state_36671;
state_36671 = G__36722;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$state_machine__28983__auto__ = function(state_36671){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28983__auto____1.call(this,state_36671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28983__auto____0;
taoensso$sente$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28983__auto____1;
return taoensso$sente$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___36710,ms_36709,temp__4657__auto___36708__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__29096__auto__ = (function (){var statearr_36692 = f__29095__auto__.call(null);
(statearr_36692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___36710);

return statearr_36692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___36710,ms_36709,temp__4657__auto___36708__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__27578__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__27578__auto__,writer__27579__auto__){
return cljs.core._write.call(null,writer__27579__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36598){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36598),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__36598),null,cljs.core.dissoc.call(null,G__36598,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27544__auto__,k__27545__auto__){
var self__ = this;
var this__27544__auto____$1 = this;
return cljs.core._lookup.call(null,this__27544__auto____$1,k__27545__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27546__auto__,k36730,else__27547__auto__){
var self__ = this;
var this__27546__auto____$1 = this;
var G__36732 = (((k36730 instanceof cljs.core.Keyword))?k36730.fqn:null);
switch (G__36732) {
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
return cljs.core.get.call(null,self__.__extmap,k36730,else__27547__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27558__auto__,writer__27559__auto__,opts__27560__auto__){
var self__ = this;
var this__27558__auto____$1 = this;
var pr_pair__27561__auto__ = ((function (this__27558__auto____$1){
return (function (keyval__27562__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27559__auto__,cljs.core.pr_writer,""," ","",opts__27560__auto__,keyval__27562__auto__);
});})(this__27558__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27559__auto__,pr_pair__27561__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__27560__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36729){
var self__ = this;
var G__36729__$1 = this;
return (new cljs.core.RecordIter((0),G__36729__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27542__auto__){
var self__ = this;
var this__27542__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27538__auto__){
var self__ = this;
var this__27538__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27548__auto__){
var self__ = this;
var this__27548__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27539__auto__){
var self__ = this;
var this__27539__auto____$1 = this;
var h__27357__auto__ = self__.__hash;
if(!((h__27357__auto__ == null))){
return h__27357__auto__;
} else {
var h__27357__auto____$1 = cljs.core.hash_imap.call(null,this__27539__auto____$1);
self__.__hash = h__27357__auto____$1;

return h__27357__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27540__auto__,other__27541__auto__){
var self__ = this;
var this__27540__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26910__auto__ = other__27541__auto__;
if(cljs.core.truth_(and__26910__auto__)){
var and__26910__auto____$1 = (this__27540__auto____$1.constructor === other__27541__auto__.constructor);
if(and__26910__auto____$1){
return cljs.core.equiv_map.call(null,this__27540__auto____$1,other__27541__auto__);
} else {
return and__26910__auto____$1;
}
} else {
return and__26910__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27553__auto__,k__27554__auto__){
var self__ = this;
var this__27553__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__27554__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27553__auto____$1),self__.__meta),k__27554__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27554__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27551__auto__,k__27552__auto__,G__36729){
var self__ = this;
var this__27551__auto____$1 = this;
var pred__36733 = cljs.core.keyword_identical_QMARK_;
var expr__36734 = k__27552__auto__;
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(G__36729,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36729,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36729,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36729,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36729,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36729,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36729,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__36729,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__36729,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__36729,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36733.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36734))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__36729,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27552__auto__,G__36729),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27556__auto__){
var self__ = this;
var this__27556__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27543__auto__,G__36729){
var self__ = this;
var this__27543__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__36729,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27549__auto__,entry__27550__auto__){
var self__ = this;
var this__27549__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27550__auto__)){
return cljs.core._assoc.call(null,this__27549__auto____$1,cljs.core._nth.call(null,entry__27550__auto__,(0)),cljs.core._nth.call(null,entry__27550__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27549__auto____$1,entry__27550__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__36723_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36723_SHARP_,reason);
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
var map__36736 = opts;
var map__36736__$1 = ((((!((map__36736 == null)))?((((map__36736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36736):map__36736);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36736__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36736__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36736__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__26922__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
var or__26922__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__26922__auto____$1)){
return or__26922__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__36738){
var map__36744 = p__36738;
var map__36744__$1 = ((((!((map__36744 == null)))?((((map__36744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36744):map__36744);
var _QMARK_error = cljs.core.get.call(null,map__36744__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36744__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__36744,map__36744__$1,_QMARK_error,_QMARK_content,csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__36724_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36724_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__36744,map__36744__$1,_QMARK_error,_QMARK_content,csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
var vec__36746 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36746,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__36746,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36746,resp_clj,___$1,map__36744,map__36744__$1,_QMARK_error,_QMARK_content,csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36746,resp_clj,___$1,map__36744,map__36744__$1,_QMARK_error,_QMARK_content,csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-949526396);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__36746,resp_clj,___$1,map__36744,map__36744__$1,_QMARK_error,_QMARK_content,csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__36725_SHARP_){
return cljs.core.assoc.call(null,p1__36725_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__36746,resp_clj,___$1,map__36744,map__36744__$1,_QMARK_error,_QMARK_content,csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__36736,map__36736__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-656295798);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-482656293);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36726_SHARP_){
return cljs.core.assoc.call(null,p1__36726_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__26922__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36760){
var map__36766 = p__36760;
var map__36766__$1 = ((((!((map__36766 == null)))?((((map__36766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36766):map__36766);
var _QMARK_error = cljs.core.get.call(null,map__36766__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36766__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__36766,map__36766__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36727_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36727_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__36766,map__36766__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__36768 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36768,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__36768,clj,handshake_QMARK_,map__36766,map__36766__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36728_SHARP_){
return cljs.core.assoc.call(null,p1__36728_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__36768,clj,handshake_QMARK_,map__36766,map__36766__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__26922__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__27578__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__27578__auto__,writer__27579__auto__){
return cljs.core._write.call(null,writer__27579__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36731){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36731),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36731),null,cljs.core.dissoc.call(null,G__36731,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27544__auto__,k__27545__auto__){
var self__ = this;
var this__27544__auto____$1 = this;
return cljs.core._lookup.call(null,this__27544__auto____$1,k__27545__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27546__auto__,k36773,else__27547__auto__){
var self__ = this;
var this__27546__auto____$1 = this;
var G__36775 = (((k36773 instanceof cljs.core.Keyword))?k36773.fqn:null);
switch (G__36775) {
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
return cljs.core.get.call(null,self__.__extmap,k36773,else__27547__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27558__auto__,writer__27559__auto__,opts__27560__auto__){
var self__ = this;
var this__27558__auto____$1 = this;
var pr_pair__27561__auto__ = ((function (this__27558__auto____$1){
return (function (keyval__27562__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27559__auto__,cljs.core.pr_writer,""," ","",opts__27560__auto__,keyval__27562__auto__);
});})(this__27558__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27559__auto__,pr_pair__27561__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__27560__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36772){
var self__ = this;
var G__36772__$1 = this;
return (new cljs.core.RecordIter((0),G__36772__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27542__auto__){
var self__ = this;
var this__27542__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27538__auto__){
var self__ = this;
var this__27538__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27548__auto__){
var self__ = this;
var this__27548__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27539__auto__){
var self__ = this;
var this__27539__auto____$1 = this;
var h__27357__auto__ = self__.__hash;
if(!((h__27357__auto__ == null))){
return h__27357__auto__;
} else {
var h__27357__auto____$1 = cljs.core.hash_imap.call(null,this__27539__auto____$1);
self__.__hash = h__27357__auto____$1;

return h__27357__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27540__auto__,other__27541__auto__){
var self__ = this;
var this__27540__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26910__auto__ = other__27541__auto__;
if(cljs.core.truth_(and__26910__auto__)){
var and__26910__auto____$1 = (this__27540__auto____$1.constructor === other__27541__auto__.constructor);
if(and__26910__auto____$1){
return cljs.core.equiv_map.call(null,this__27540__auto____$1,other__27541__auto__);
} else {
return and__26910__auto____$1;
}
} else {
return and__26910__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27553__auto__,k__27554__auto__){
var self__ = this;
var this__27553__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__27554__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27553__auto____$1),self__.__meta),k__27554__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27554__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27551__auto__,k__27552__auto__,G__36772){
var self__ = this;
var this__27551__auto____$1 = this;
var pred__36776 = cljs.core.keyword_identical_QMARK_;
var expr__36777 = k__27552__auto__;
if(cljs.core.truth_(pred__36776.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__36777))){
return (new taoensso.sente.ChAutoSocket(G__36772,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36776.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__36777))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__36772,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36776.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36777))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__36772,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36776.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__36777))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__36772,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27552__auto__,G__36772),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27556__auto__){
var self__ = this;
var this__27556__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27543__auto__,G__36772){
var self__ = this;
var this__27543__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__36772,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27549__auto__,entry__27550__auto__){
var self__ = this;
var this__27549__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27550__auto__)){
return cljs.core._assoc.call(null,this__27549__auto____$1,cljs.core._nth.call(null,entry__27550__auto__,(0)),cljs.core._nth.call(null,entry__27550__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27549__auto____$1,entry__27550__auto__);
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
var map__36779 = opts;
var map__36779__$1 = ((((!((map__36779 == null)))?((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36779):map__36779);
var _QMARK_cb = cljs.core.get.call(null,map__36779__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___36782 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___36782,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___36782,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___36782,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___36782,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,70504480);

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
});})(downgraded_QMARK___36782,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__26922__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
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

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__27578__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__27578__auto__,writer__27579__auto__){
return cljs.core._write.call(null,writer__27579__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__36774){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__36774),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__36774),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36774),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__36774),null,cljs.core.dissoc.call(null,G__36774,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__36787 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__36787) {
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
}catch (e36788){if((e36788 instanceof Error)){
var e = e36788;
return e;
} else {
throw e36788;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__36789 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36789) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__36790 = protocol__$2;
switch (G__36790) {
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
var args__28004__auto__ = [];
var len__27997__auto___36811 = arguments.length;
var i__27998__auto___36812 = (0);
while(true){
if((i__27998__auto___36812 < len__27997__auto___36811)){
args__28004__auto__.push((arguments[i__27998__auto___36812]));

var G__36813 = (i__27998__auto___36812 + (1));
i__27998__auto___36812 = G__36813;
continue;
} else {
}
break;
}

var argseq__28005__auto__ = ((((1) < args__28004__auto__.length))?(new cljs.core.IndexedSeq(args__28004__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28005__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36796){
var vec__36797 = p__36796;
var map__36800 = cljs.core.nth.call(null,vec__36797,(0),null);
var map__36800__$1 = ((((!((map__36800 == null)))?((((map__36800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36800):map__36800);
var opts = map__36800__$1;
var ajax_opts = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__26922__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36797,(1),null);
var e_36814 = (function (){try{if(((function (vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36802){if((e36802 instanceof Error)){
var e = e36802;
return e;
} else {
throw e36802;

}
}})();
if((e_36814 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_36814,null);
}

var e_36815 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36803){if((e36803 instanceof Error)){
var e = e36803;
return e;
} else {
throw e36803;

}
}})();
if((e_36815 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_36815,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-326411070);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1761261118);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__36804 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__26922__auto__ = path;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__26922__auto__ = protocol;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
var or__26922__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__26922__auto____$1)){
return or__26922__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__26922__auto__ = host;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__36804,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__36804,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__36804,ws_url,ajax_url,vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__36804,ws_url,ajax_url,vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__36807 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36807) {
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
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__36804,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36808 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36808,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36808,(1),null);
var ev__$1 = vec__36808;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__36804,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__36804,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__36804,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36797,map__36800,map__36800__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,405663829);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36794){
var G__36795 = cljs.core.first.call(null,seq36794);
var seq36794__$1 = cljs.core.next.call(null,seq36794);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36795,seq36794__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36896 = opts;
var map__36896__$1 = ((((!((map__36896 == null)))?((((map__36896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36896):map__36896);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__29094__auto___36975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_36942){
var state_val_36943 = (state_36942[(1)]);
if((state_val_36943 === (7))){
var inst_36938 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
var statearr_36944_36976 = state_36942__$1;
(statearr_36944_36976[(2)] = inst_36938);

(statearr_36944_36976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (1))){
var state_36942__$1 = state_36942;
var statearr_36945_36977 = state_36942__$1;
(statearr_36945_36977[(2)] = null);

(statearr_36945_36977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (4))){
var inst_36909 = (state_36942[(7)]);
var inst_36906 = (state_36942[(8)]);
var inst_36908 = (state_36942[(9)]);
var inst_36906__$1 = (state_36942[(2)]);
var inst_36907 = cljs.core.nth.call(null,inst_36906__$1,(0),null);
var inst_36908__$1 = cljs.core.nth.call(null,inst_36906__$1,(1),null);
var inst_36909__$1 = cljs.core._EQ_.call(null,inst_36908__$1,ch_ctrl);
var state_36942__$1 = (function (){var statearr_36946 = state_36942;
(statearr_36946[(7)] = inst_36909__$1);

(statearr_36946[(8)] = inst_36906__$1);

(statearr_36946[(9)] = inst_36908__$1);

(statearr_36946[(10)] = inst_36907);

return statearr_36946;
})();
if(inst_36909__$1){
var statearr_36947_36978 = state_36942__$1;
(statearr_36947_36978[(1)] = (5));

} else {
var statearr_36948_36979 = state_36942__$1;
(statearr_36948_36979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (15))){
var inst_36907 = (state_36942[(10)]);
var state_36942__$1 = state_36942;
var statearr_36949_36980 = state_36942__$1;
(statearr_36949_36980[(2)] = inst_36907);

(statearr_36949_36980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (13))){
var inst_36924 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
var statearr_36950_36981 = state_36942__$1;
(statearr_36950_36981[(2)] = inst_36924);

(statearr_36950_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (6))){
var inst_36907 = (state_36942[(10)]);
var inst_36914 = (inst_36907 == null);
var inst_36915 = cljs.core.not.call(null,inst_36914);
var state_36942__$1 = state_36942;
if(inst_36915){
var statearr_36951_36982 = state_36942__$1;
(statearr_36951_36982[(1)] = (8));

} else {
var statearr_36952_36983 = state_36942__$1;
(statearr_36952_36983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (3))){
var inst_36940 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36942__$1,inst_36940);
} else {
if((state_val_36943 === (12))){
var state_36942__$1 = state_36942;
var statearr_36953_36984 = state_36942__$1;
(statearr_36953_36984[(2)] = false);

(statearr_36953_36984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (2))){
var inst_36902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36903 = [ch_recv,ch_ctrl];
var inst_36904 = (new cljs.core.PersistentVector(null,2,(5),inst_36902,inst_36903,null));
var state_36942__$1 = state_36942;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36942__$1,(4),inst_36904);
} else {
if((state_val_36943 === (11))){
var state_36942__$1 = state_36942;
var statearr_36954_36985 = state_36942__$1;
(statearr_36954_36985[(2)] = true);

(statearr_36954_36985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (9))){
var state_36942__$1 = state_36942;
var statearr_36955_36986 = state_36942__$1;
(statearr_36955_36986[(2)] = false);

(statearr_36955_36986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (5))){
var state_36942__$1 = state_36942;
var statearr_36956_36987 = state_36942__$1;
(statearr_36956_36987[(2)] = null);

(statearr_36956_36987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (14))){
var inst_36907 = (state_36942[(10)]);
var inst_36929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36907);
var state_36942__$1 = state_36942;
var statearr_36957_36988 = state_36942__$1;
(statearr_36957_36988[(2)] = inst_36929);

(statearr_36957_36988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (16))){
var inst_36909 = (state_36942[(7)]);
var inst_36906 = (state_36942[(8)]);
var inst_36908 = (state_36942[(9)]);
var inst_36907 = (state_36942[(10)]);
var inst_36932 = (state_36942[(2)]);
var inst_36933 = cljs.core.get.call(null,inst_36932,new cljs.core.Keyword(null,"event","event",301435442));
var inst_36934 = (function (){var vec__36899 = inst_36906;
var v = inst_36907;
var p = inst_36908;
var stop_QMARK_ = inst_36909;
var map__36912 = inst_36932;
var event_msg = inst_36932;
var event = inst_36933;
return ((function (vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1680021358);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36960){if((e36960 instanceof Error)){
var e = e36960;
return e;
} else {
throw e36960;

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
}catch (e36961){if((e36961 instanceof Error)){
var e = e36961;
return e;
} else {
throw e36961;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e36958){if((e36958 instanceof Error)){
var e1 = e36958;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1343890720);
}
}catch (e36959){if((e36959 instanceof Error)){
var e2 = e36959;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/home/user/projects/parapam/src/service_swarm/core.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1686576333);
} else {
throw e36959;

}
}} else {
throw e36958;

}
}});
;})(vec__36899,v,p,stop_QMARK_,map__36912,event_msg,event,inst_36909,inst_36906,inst_36908,inst_36907,inst_36932,inst_36933,state_val_36943,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_36935 = execute1.call(null,inst_36934);
var state_36942__$1 = (function (){var statearr_36962 = state_36942;
(statearr_36962[(11)] = inst_36935);

return statearr_36962;
})();
var statearr_36963_36989 = state_36942__$1;
(statearr_36963_36989[(2)] = null);

(statearr_36963_36989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (10))){
var inst_36927 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
if(cljs.core.truth_(inst_36927)){
var statearr_36964_36990 = state_36942__$1;
(statearr_36964_36990[(1)] = (14));

} else {
var statearr_36965_36991 = state_36942__$1;
(statearr_36965_36991[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (8))){
var inst_36907 = (state_36942[(10)]);
var inst_36917 = inst_36907.cljs$lang$protocol_mask$partition0$;
var inst_36918 = (inst_36917 & (64));
var inst_36919 = inst_36907.cljs$core$ISeq$;
var inst_36920 = (inst_36918) || (inst_36919);
var state_36942__$1 = state_36942;
if(cljs.core.truth_(inst_36920)){
var statearr_36966_36992 = state_36942__$1;
(statearr_36966_36992[(1)] = (11));

} else {
var statearr_36967_36993 = state_36942__$1;
(statearr_36967_36993[(1)] = (12));

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
});})(c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__28982__auto__,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto____0 = (function (){
var statearr_36971 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36971[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto__);

(statearr_36971[(1)] = (1));

return statearr_36971;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto____1 = (function (state_36942){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_36942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e36972){if((e36972 instanceof Object)){
var ex__28986__auto__ = e36972;
var statearr_36973_36994 = state_36942;
(statearr_36973_36994[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36995 = state_36942;
state_36942 = G__36995;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto__ = function(state_36942){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto____1.call(this,state_36942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__29096__auto__ = (function (){var statearr_36974 = f__29095__auto__.call(null);
(statearr_36974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___36975);

return statearr_36974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___36975,map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36896,map__36896__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__28004__auto__ = [];
var len__27997__auto___37005 = arguments.length;
var i__27998__auto___37006 = (0);
while(true){
if((i__27998__auto___37006 < len__27997__auto___37005)){
args__28004__auto__.push((arguments[i__27998__auto___37006]));

var G__37007 = (i__27998__auto___37006 + (1));
i__27998__auto___37006 = G__37007;
continue;
} else {
}
break;
}

var argseq__28005__auto__ = ((((2) < args__28004__auto__.length))?(new cljs.core.IndexedSeq(args__28004__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28005__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36999){
var vec__37000 = p__36999;
var map__37003 = cljs.core.nth.call(null,vec__37000,(0),null);
var map__37003__$1 = ((((!((map__37003 == null)))?((((map__37003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37003):map__37003);
var opts = map__37003__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36996){
var G__36997 = cljs.core.first.call(null,seq36996);
var seq36996__$1 = cljs.core.next.call(null,seq36996);
var G__36998 = cljs.core.first.call(null,seq36996__$1);
var seq36996__$2 = cljs.core.next.call(null,seq36996__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36997,G__36998,seq36996__$2);
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
var args__28004__auto__ = [];
var len__27997__auto___37017 = arguments.length;
var i__27998__auto___37018 = (0);
while(true){
if((i__27998__auto___37018 < len__27997__auto___37017)){
args__28004__auto__.push((arguments[i__27998__auto___37018]));

var G__37019 = (i__27998__auto___37018 + (1));
i__27998__auto___37018 = G__37019;
continue;
} else {
}
break;
}

var argseq__28005__auto__ = ((((2) < args__28004__auto__.length))?(new cljs.core.IndexedSeq(args__28004__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28005__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__37011){
var vec__37012 = p__37011;
var map__37015 = cljs.core.nth.call(null,vec__37012,(0),null);
var map__37015__$1 = ((((!((map__37015 == null)))?((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37015):map__37015);
var opts = map__37015__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq37008){
var G__37009 = cljs.core.first.call(null,seq37008);
var seq37008__$1 = cljs.core.next.call(null,seq37008);
var G__37010 = cljs.core.first.call(null,seq37008__$1);
var seq37008__$2 = cljs.core.next.call(null,seq37008__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37009,G__37010,seq37008__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__37020,websocket_QMARK_){
var map__37023 = p__37020;
var map__37023__$1 = ((((!((map__37023 == null)))?((((map__37023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37023):map__37023);
var location = map__37023__$1;
var protocol = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__26922__auto__ = path;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map