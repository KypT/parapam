// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29139 = [];
var len__27997__auto___29145 = arguments.length;
var i__27998__auto___29146 = (0);
while(true){
if((i__27998__auto___29146 < len__27997__auto___29145)){
args29139.push((arguments[i__27998__auto___29146]));

var G__29147 = (i__27998__auto___29146 + (1));
i__27998__auto___29146 = G__29147;
continue;
} else {
}
break;
}

var G__29141 = args29139.length;
switch (G__29141) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29139.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29142 = (function (f,blockable,meta29143){
this.f = f;
this.blockable = blockable;
this.meta29143 = meta29143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29144,meta29143__$1){
var self__ = this;
var _29144__$1 = this;
return (new cljs.core.async.t_cljs$core$async29142(self__.f,self__.blockable,meta29143__$1));
});

cljs.core.async.t_cljs$core$async29142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29144){
var self__ = this;
var _29144__$1 = this;
return self__.meta29143;
});

cljs.core.async.t_cljs$core$async29142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29142.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29143","meta29143",1241031368,null)], null);
});

cljs.core.async.t_cljs$core$async29142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29142";

cljs.core.async.t_cljs$core$async29142.cljs$lang$ctorPrWriter = (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async29142");
});

cljs.core.async.__GT_t_cljs$core$async29142 = (function cljs$core$async$__GT_t_cljs$core$async29142(f__$1,blockable__$1,meta29143){
return (new cljs.core.async.t_cljs$core$async29142(f__$1,blockable__$1,meta29143));
});

}

return (new cljs.core.async.t_cljs$core$async29142(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29151 = [];
var len__27997__auto___29154 = arguments.length;
var i__27998__auto___29155 = (0);
while(true){
if((i__27998__auto___29155 < len__27997__auto___29154)){
args29151.push((arguments[i__27998__auto___29155]));

var G__29156 = (i__27998__auto___29155 + (1));
i__27998__auto___29155 = G__29156;
continue;
} else {
}
break;
}

var G__29153 = args29151.length;
switch (G__29153) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29151.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29158 = [];
var len__27997__auto___29161 = arguments.length;
var i__27998__auto___29162 = (0);
while(true){
if((i__27998__auto___29162 < len__27997__auto___29161)){
args29158.push((arguments[i__27998__auto___29162]));

var G__29163 = (i__27998__auto___29162 + (1));
i__27998__auto___29162 = G__29163;
continue;
} else {
}
break;
}

var G__29160 = args29158.length;
switch (G__29160) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29158.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29165 = [];
var len__27997__auto___29168 = arguments.length;
var i__27998__auto___29169 = (0);
while(true){
if((i__27998__auto___29169 < len__27997__auto___29168)){
args29165.push((arguments[i__27998__auto___29169]));

var G__29170 = (i__27998__auto___29169 + (1));
i__27998__auto___29169 = G__29170;
continue;
} else {
}
break;
}

var G__29167 = args29165.length;
switch (G__29167) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29165.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29172 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29172);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29172,ret){
return (function (){
return fn1.call(null,val_29172);
});})(val_29172,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29173 = [];
var len__27997__auto___29176 = arguments.length;
var i__27998__auto___29177 = (0);
while(true){
if((i__27998__auto___29177 < len__27997__auto___29176)){
args29173.push((arguments[i__27998__auto___29177]));

var G__29178 = (i__27998__auto___29177 + (1));
i__27998__auto___29177 = G__29178;
continue;
} else {
}
break;
}

var G__29175 = args29173.length;
switch (G__29175) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29173.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27837__auto___29180 = n;
var x_29181 = (0);
while(true){
if((x_29181 < n__27837__auto___29180)){
(a[x_29181] = (0));

var G__29182 = (x_29181 + (1));
x_29181 = G__29182;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29183 = (i + (1));
i = G__29183;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29187 = (function (alt_flag,flag,meta29188){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29188 = meta29188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29189,meta29188__$1){
var self__ = this;
var _29189__$1 = this;
return (new cljs.core.async.t_cljs$core$async29187(self__.alt_flag,self__.flag,meta29188__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29189){
var self__ = this;
var _29189__$1 = this;
return self__.meta29188;
});})(flag))
;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29187.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29188","meta29188",-62090708,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29187";

cljs.core.async.t_cljs$core$async29187.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async29187");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29187 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29187(alt_flag__$1,flag__$1,meta29188){
return (new cljs.core.async.t_cljs$core$async29187(alt_flag__$1,flag__$1,meta29188));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29187(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29193 = (function (alt_handler,flag,cb,meta29194){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29194 = meta29194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29195,meta29194__$1){
var self__ = this;
var _29195__$1 = this;
return (new cljs.core.async.t_cljs$core$async29193(self__.alt_handler,self__.flag,self__.cb,meta29194__$1));
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29195){
var self__ = this;
var _29195__$1 = this;
return self__.meta29194;
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29194","meta29194",-941426372,null)], null);
});

cljs.core.async.t_cljs$core$async29193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29193";

cljs.core.async.t_cljs$core$async29193.cljs$lang$ctorPrWriter = (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async29193");
});

cljs.core.async.__GT_t_cljs$core$async29193 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29193(alt_handler__$1,flag__$1,cb__$1,meta29194){
return (new cljs.core.async.t_cljs$core$async29193(alt_handler__$1,flag__$1,cb__$1,meta29194));
});

}

return (new cljs.core.async.t_cljs$core$async29193(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29196_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29197_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29197_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26922__auto__ = wport;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29198 = (i + (1));
i = G__29198;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26922__auto__ = ret;
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26910__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26910__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26910__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28004__auto__ = [];
var len__27997__auto___29204 = arguments.length;
var i__27998__auto___29205 = (0);
while(true){
if((i__27998__auto___29205 < len__27997__auto___29204)){
args__28004__auto__.push((arguments[i__27998__auto___29205]));

var G__29206 = (i__27998__auto___29205 + (1));
i__27998__auto___29205 = G__29206;
continue;
} else {
}
break;
}

var argseq__28005__auto__ = ((((1) < args__28004__auto__.length))?(new cljs.core.IndexedSeq(args__28004__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28005__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29201){
var map__29202 = p__29201;
var map__29202__$1 = ((((!((map__29202 == null)))?((((map__29202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var opts = map__29202__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29199){
var G__29200 = cljs.core.first.call(null,seq29199);
var seq29199__$1 = cljs.core.next.call(null,seq29199);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29200,seq29199__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29207 = [];
var len__27997__auto___29257 = arguments.length;
var i__27998__auto___29258 = (0);
while(true){
if((i__27998__auto___29258 < len__27997__auto___29257)){
args29207.push((arguments[i__27998__auto___29258]));

var G__29259 = (i__27998__auto___29258 + (1));
i__27998__auto___29258 = G__29259;
continue;
} else {
}
break;
}

var G__29209 = args29207.length;
switch (G__29209) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29207.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29094__auto___29261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___29261){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___29261){
return (function (state_29233){
var state_val_29234 = (state_29233[(1)]);
if((state_val_29234 === (7))){
var inst_29229 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29235_29262 = state_29233__$1;
(statearr_29235_29262[(2)] = inst_29229);

(statearr_29235_29262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (1))){
var state_29233__$1 = state_29233;
var statearr_29236_29263 = state_29233__$1;
(statearr_29236_29263[(2)] = null);

(statearr_29236_29263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (4))){
var inst_29212 = (state_29233[(7)]);
var inst_29212__$1 = (state_29233[(2)]);
var inst_29213 = (inst_29212__$1 == null);
var state_29233__$1 = (function (){var statearr_29237 = state_29233;
(statearr_29237[(7)] = inst_29212__$1);

return statearr_29237;
})();
if(cljs.core.truth_(inst_29213)){
var statearr_29238_29264 = state_29233__$1;
(statearr_29238_29264[(1)] = (5));

} else {
var statearr_29239_29265 = state_29233__$1;
(statearr_29239_29265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (13))){
var state_29233__$1 = state_29233;
var statearr_29240_29266 = state_29233__$1;
(statearr_29240_29266[(2)] = null);

(statearr_29240_29266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (6))){
var inst_29212 = (state_29233[(7)]);
var state_29233__$1 = state_29233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29233__$1,(11),to,inst_29212);
} else {
if((state_val_29234 === (3))){
var inst_29231 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29233__$1,inst_29231);
} else {
if((state_val_29234 === (12))){
var state_29233__$1 = state_29233;
var statearr_29241_29267 = state_29233__$1;
(statearr_29241_29267[(2)] = null);

(statearr_29241_29267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (2))){
var state_29233__$1 = state_29233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29233__$1,(4),from);
} else {
if((state_val_29234 === (11))){
var inst_29222 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
if(cljs.core.truth_(inst_29222)){
var statearr_29242_29268 = state_29233__$1;
(statearr_29242_29268[(1)] = (12));

} else {
var statearr_29243_29269 = state_29233__$1;
(statearr_29243_29269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (9))){
var state_29233__$1 = state_29233;
var statearr_29244_29270 = state_29233__$1;
(statearr_29244_29270[(2)] = null);

(statearr_29244_29270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (5))){
var state_29233__$1 = state_29233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29245_29271 = state_29233__$1;
(statearr_29245_29271[(1)] = (8));

} else {
var statearr_29246_29272 = state_29233__$1;
(statearr_29246_29272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (14))){
var inst_29227 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29247_29273 = state_29233__$1;
(statearr_29247_29273[(2)] = inst_29227);

(statearr_29247_29273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (10))){
var inst_29219 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29248_29274 = state_29233__$1;
(statearr_29248_29274[(2)] = inst_29219);

(statearr_29248_29274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (8))){
var inst_29216 = cljs.core.async.close_BANG_.call(null,to);
var state_29233__$1 = state_29233;
var statearr_29249_29275 = state_29233__$1;
(statearr_29249_29275[(2)] = inst_29216);

(statearr_29249_29275[(1)] = (10));


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
});})(c__29094__auto___29261))
;
return ((function (switch__28982__auto__,c__29094__auto___29261){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_29233){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29254){if((e29254 instanceof Object)){
var ex__28986__auto__ = e29254;
var statearr_29255_29276 = state_29233;
(statearr_29255_29276[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29277 = state_29233;
state_29233 = G__29277;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_29233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_29233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___29261))
})();
var state__29096__auto__ = (function (){var statearr_29256 = f__29095__auto__.call(null);
(statearr_29256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___29261);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___29261))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29465){
var vec__29466 = p__29465;
var v = cljs.core.nth.call(null,vec__29466,(0),null);
var p = cljs.core.nth.call(null,vec__29466,(1),null);
var job = vec__29466;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29094__auto___29652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___29652,res,vec__29466,v,p,job,jobs,results){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___29652,res,vec__29466,v,p,job,jobs,results){
return (function (state_29473){
var state_val_29474 = (state_29473[(1)]);
if((state_val_29474 === (1))){
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29473__$1,(2),res,v);
} else {
if((state_val_29474 === (2))){
var inst_29470 = (state_29473[(2)]);
var inst_29471 = cljs.core.async.close_BANG_.call(null,res);
var state_29473__$1 = (function (){var statearr_29475 = state_29473;
(statearr_29475[(7)] = inst_29470);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29473__$1,inst_29471);
} else {
return null;
}
}
});})(c__29094__auto___29652,res,vec__29466,v,p,job,jobs,results))
;
return ((function (switch__28982__auto__,c__29094__auto___29652,res,vec__29466,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0 = (function (){
var statearr_29479 = [null,null,null,null,null,null,null,null];
(statearr_29479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__);

(statearr_29479[(1)] = (1));

return statearr_29479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1 = (function (state_29473){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29480){if((e29480 instanceof Object)){
var ex__28986__auto__ = e29480;
var statearr_29481_29653 = state_29473;
(statearr_29481_29653[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29654 = state_29473;
state_29473 = G__29654;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = function(state_29473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1.call(this,state_29473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___29652,res,vec__29466,v,p,job,jobs,results))
})();
var state__29096__auto__ = (function (){var statearr_29482 = f__29095__auto__.call(null);
(statearr_29482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___29652);

return statearr_29482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___29652,res,vec__29466,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29483){
var vec__29484 = p__29483;
var v = cljs.core.nth.call(null,vec__29484,(0),null);
var p = cljs.core.nth.call(null,vec__29484,(1),null);
var job = vec__29484;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27837__auto___29655 = n;
var __29656 = (0);
while(true){
if((__29656 < n__27837__auto___29655)){
var G__29487_29657 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29487_29657) {
case "compute":
var c__29094__auto___29659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29656,c__29094__auto___29659,G__29487_29657,n__27837__auto___29655,jobs,results,process,async){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (__29656,c__29094__auto___29659,G__29487_29657,n__27837__auto___29655,jobs,results,process,async){
return (function (state_29500){
var state_val_29501 = (state_29500[(1)]);
if((state_val_29501 === (1))){
var state_29500__$1 = state_29500;
var statearr_29502_29660 = state_29500__$1;
(statearr_29502_29660[(2)] = null);

(statearr_29502_29660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (2))){
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29500__$1,(4),jobs);
} else {
if((state_val_29501 === (3))){
var inst_29498 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29500__$1,inst_29498);
} else {
if((state_val_29501 === (4))){
var inst_29490 = (state_29500[(2)]);
var inst_29491 = process.call(null,inst_29490);
var state_29500__$1 = state_29500;
if(cljs.core.truth_(inst_29491)){
var statearr_29503_29661 = state_29500__$1;
(statearr_29503_29661[(1)] = (5));

} else {
var statearr_29504_29662 = state_29500__$1;
(statearr_29504_29662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (5))){
var state_29500__$1 = state_29500;
var statearr_29505_29663 = state_29500__$1;
(statearr_29505_29663[(2)] = null);

(statearr_29505_29663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (6))){
var state_29500__$1 = state_29500;
var statearr_29506_29664 = state_29500__$1;
(statearr_29506_29664[(2)] = null);

(statearr_29506_29664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (7))){
var inst_29496 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29507_29665 = state_29500__$1;
(statearr_29507_29665[(2)] = inst_29496);

(statearr_29507_29665[(1)] = (3));


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
});})(__29656,c__29094__auto___29659,G__29487_29657,n__27837__auto___29655,jobs,results,process,async))
;
return ((function (__29656,switch__28982__auto__,c__29094__auto___29659,G__29487_29657,n__27837__auto___29655,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0 = (function (){
var statearr_29511 = [null,null,null,null,null,null,null];
(statearr_29511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__);

(statearr_29511[(1)] = (1));

return statearr_29511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1 = (function (state_29500){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29512){if((e29512 instanceof Object)){
var ex__28986__auto__ = e29512;
var statearr_29513_29666 = state_29500;
(statearr_29513_29666[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29667 = state_29500;
state_29500 = G__29667;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = function(state_29500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1.call(this,state_29500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__;
})()
;})(__29656,switch__28982__auto__,c__29094__auto___29659,G__29487_29657,n__27837__auto___29655,jobs,results,process,async))
})();
var state__29096__auto__ = (function (){var statearr_29514 = f__29095__auto__.call(null);
(statearr_29514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___29659);

return statearr_29514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(__29656,c__29094__auto___29659,G__29487_29657,n__27837__auto___29655,jobs,results,process,async))
);


break;
case "async":
var c__29094__auto___29668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29656,c__29094__auto___29668,G__29487_29657,n__27837__auto___29655,jobs,results,process,async){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (__29656,c__29094__auto___29668,G__29487_29657,n__27837__auto___29655,jobs,results,process,async){
return (function (state_29527){
var state_val_29528 = (state_29527[(1)]);
if((state_val_29528 === (1))){
var state_29527__$1 = state_29527;
var statearr_29529_29669 = state_29527__$1;
(statearr_29529_29669[(2)] = null);

(statearr_29529_29669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (2))){
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(4),jobs);
} else {
if((state_val_29528 === (3))){
var inst_29525 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29527__$1,inst_29525);
} else {
if((state_val_29528 === (4))){
var inst_29517 = (state_29527[(2)]);
var inst_29518 = async.call(null,inst_29517);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29518)){
var statearr_29530_29670 = state_29527__$1;
(statearr_29530_29670[(1)] = (5));

} else {
var statearr_29531_29671 = state_29527__$1;
(statearr_29531_29671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (5))){
var state_29527__$1 = state_29527;
var statearr_29532_29672 = state_29527__$1;
(statearr_29532_29672[(2)] = null);

(statearr_29532_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (6))){
var state_29527__$1 = state_29527;
var statearr_29533_29673 = state_29527__$1;
(statearr_29533_29673[(2)] = null);

(statearr_29533_29673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (7))){
var inst_29523 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29534_29674 = state_29527__$1;
(statearr_29534_29674[(2)] = inst_29523);

(statearr_29534_29674[(1)] = (3));


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
});})(__29656,c__29094__auto___29668,G__29487_29657,n__27837__auto___29655,jobs,results,process,async))
;
return ((function (__29656,switch__28982__auto__,c__29094__auto___29668,G__29487_29657,n__27837__auto___29655,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0 = (function (){
var statearr_29538 = [null,null,null,null,null,null,null];
(statearr_29538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__);

(statearr_29538[(1)] = (1));

return statearr_29538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1 = (function (state_29527){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29539){if((e29539 instanceof Object)){
var ex__28986__auto__ = e29539;
var statearr_29540_29675 = state_29527;
(statearr_29540_29675[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29676 = state_29527;
state_29527 = G__29676;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = function(state_29527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1.call(this,state_29527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__;
})()
;})(__29656,switch__28982__auto__,c__29094__auto___29668,G__29487_29657,n__27837__auto___29655,jobs,results,process,async))
})();
var state__29096__auto__ = (function (){var statearr_29541 = f__29095__auto__.call(null);
(statearr_29541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___29668);

return statearr_29541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(__29656,c__29094__auto___29668,G__29487_29657,n__27837__auto___29655,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29677 = (__29656 + (1));
__29656 = G__29677;
continue;
} else {
}
break;
}

var c__29094__auto___29678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___29678,jobs,results,process,async){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___29678,jobs,results,process,async){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (1))){
var state_29563__$1 = state_29563;
var statearr_29565_29679 = state_29563__$1;
(statearr_29565_29679[(2)] = null);

(statearr_29565_29679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (2))){
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(4),from);
} else {
if((state_val_29564 === (3))){
var inst_29561 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (4))){
var inst_29544 = (state_29563[(7)]);
var inst_29544__$1 = (state_29563[(2)]);
var inst_29545 = (inst_29544__$1 == null);
var state_29563__$1 = (function (){var statearr_29566 = state_29563;
(statearr_29566[(7)] = inst_29544__$1);

return statearr_29566;
})();
if(cljs.core.truth_(inst_29545)){
var statearr_29567_29680 = state_29563__$1;
(statearr_29567_29680[(1)] = (5));

} else {
var statearr_29568_29681 = state_29563__$1;
(statearr_29568_29681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (5))){
var inst_29547 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29563__$1 = state_29563;
var statearr_29569_29682 = state_29563__$1;
(statearr_29569_29682[(2)] = inst_29547);

(statearr_29569_29682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (6))){
var inst_29549 = (state_29563[(8)]);
var inst_29544 = (state_29563[(7)]);
var inst_29549__$1 = cljs.core.async.chan.call(null,(1));
var inst_29550 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29551 = [inst_29544,inst_29549__$1];
var inst_29552 = (new cljs.core.PersistentVector(null,2,(5),inst_29550,inst_29551,null));
var state_29563__$1 = (function (){var statearr_29570 = state_29563;
(statearr_29570[(8)] = inst_29549__$1);

return statearr_29570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29563__$1,(8),jobs,inst_29552);
} else {
if((state_val_29564 === (7))){
var inst_29559 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29571_29683 = state_29563__$1;
(statearr_29571_29683[(2)] = inst_29559);

(statearr_29571_29683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29549 = (state_29563[(8)]);
var inst_29554 = (state_29563[(2)]);
var state_29563__$1 = (function (){var statearr_29572 = state_29563;
(statearr_29572[(9)] = inst_29554);

return statearr_29572;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29563__$1,(9),results,inst_29549);
} else {
if((state_val_29564 === (9))){
var inst_29556 = (state_29563[(2)]);
var state_29563__$1 = (function (){var statearr_29573 = state_29563;
(statearr_29573[(10)] = inst_29556);

return statearr_29573;
})();
var statearr_29574_29684 = state_29563__$1;
(statearr_29574_29684[(2)] = null);

(statearr_29574_29684[(1)] = (2));


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
});})(c__29094__auto___29678,jobs,results,process,async))
;
return ((function (switch__28982__auto__,c__29094__auto___29678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0 = (function (){
var statearr_29578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__);

(statearr_29578[(1)] = (1));

return statearr_29578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1 = (function (state_29563){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29579){if((e29579 instanceof Object)){
var ex__28986__auto__ = e29579;
var statearr_29580_29685 = state_29563;
(statearr_29580_29685[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29686 = state_29563;
state_29563 = G__29686;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___29678,jobs,results,process,async))
})();
var state__29096__auto__ = (function (){var statearr_29581 = f__29095__auto__.call(null);
(statearr_29581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___29678);

return statearr_29581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___29678,jobs,results,process,async))
);


var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,jobs,results,process,async){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,jobs,results,process,async){
return (function (state_29619){
var state_val_29620 = (state_29619[(1)]);
if((state_val_29620 === (7))){
var inst_29615 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29621_29687 = state_29619__$1;
(statearr_29621_29687[(2)] = inst_29615);

(statearr_29621_29687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (20))){
var state_29619__$1 = state_29619;
var statearr_29622_29688 = state_29619__$1;
(statearr_29622_29688[(2)] = null);

(statearr_29622_29688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (1))){
var state_29619__$1 = state_29619;
var statearr_29623_29689 = state_29619__$1;
(statearr_29623_29689[(2)] = null);

(statearr_29623_29689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (4))){
var inst_29584 = (state_29619[(7)]);
var inst_29584__$1 = (state_29619[(2)]);
var inst_29585 = (inst_29584__$1 == null);
var state_29619__$1 = (function (){var statearr_29624 = state_29619;
(statearr_29624[(7)] = inst_29584__$1);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29585)){
var statearr_29625_29690 = state_29619__$1;
(statearr_29625_29690[(1)] = (5));

} else {
var statearr_29626_29691 = state_29619__$1;
(statearr_29626_29691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (15))){
var inst_29597 = (state_29619[(8)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29619__$1,(18),to,inst_29597);
} else {
if((state_val_29620 === (21))){
var inst_29610 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29627_29692 = state_29619__$1;
(statearr_29627_29692[(2)] = inst_29610);

(statearr_29627_29692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (13))){
var inst_29612 = (state_29619[(2)]);
var state_29619__$1 = (function (){var statearr_29628 = state_29619;
(statearr_29628[(9)] = inst_29612);

return statearr_29628;
})();
var statearr_29629_29693 = state_29619__$1;
(statearr_29629_29693[(2)] = null);

(statearr_29629_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (6))){
var inst_29584 = (state_29619[(7)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29619__$1,(11),inst_29584);
} else {
if((state_val_29620 === (17))){
var inst_29605 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
if(cljs.core.truth_(inst_29605)){
var statearr_29630_29694 = state_29619__$1;
(statearr_29630_29694[(1)] = (19));

} else {
var statearr_29631_29695 = state_29619__$1;
(statearr_29631_29695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (3))){
var inst_29617 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29619__$1,inst_29617);
} else {
if((state_val_29620 === (12))){
var inst_29594 = (state_29619[(10)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29619__$1,(14),inst_29594);
} else {
if((state_val_29620 === (2))){
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29619__$1,(4),results);
} else {
if((state_val_29620 === (19))){
var state_29619__$1 = state_29619;
var statearr_29632_29696 = state_29619__$1;
(statearr_29632_29696[(2)] = null);

(statearr_29632_29696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (11))){
var inst_29594 = (state_29619[(2)]);
var state_29619__$1 = (function (){var statearr_29633 = state_29619;
(statearr_29633[(10)] = inst_29594);

return statearr_29633;
})();
var statearr_29634_29697 = state_29619__$1;
(statearr_29634_29697[(2)] = null);

(statearr_29634_29697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (9))){
var state_29619__$1 = state_29619;
var statearr_29635_29698 = state_29619__$1;
(statearr_29635_29698[(2)] = null);

(statearr_29635_29698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (5))){
var state_29619__$1 = state_29619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29636_29699 = state_29619__$1;
(statearr_29636_29699[(1)] = (8));

} else {
var statearr_29637_29700 = state_29619__$1;
(statearr_29637_29700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (14))){
var inst_29599 = (state_29619[(11)]);
var inst_29597 = (state_29619[(8)]);
var inst_29597__$1 = (state_29619[(2)]);
var inst_29598 = (inst_29597__$1 == null);
var inst_29599__$1 = cljs.core.not.call(null,inst_29598);
var state_29619__$1 = (function (){var statearr_29638 = state_29619;
(statearr_29638[(11)] = inst_29599__$1);

(statearr_29638[(8)] = inst_29597__$1);

return statearr_29638;
})();
if(inst_29599__$1){
var statearr_29639_29701 = state_29619__$1;
(statearr_29639_29701[(1)] = (15));

} else {
var statearr_29640_29702 = state_29619__$1;
(statearr_29640_29702[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (16))){
var inst_29599 = (state_29619[(11)]);
var state_29619__$1 = state_29619;
var statearr_29641_29703 = state_29619__$1;
(statearr_29641_29703[(2)] = inst_29599);

(statearr_29641_29703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (10))){
var inst_29591 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29642_29704 = state_29619__$1;
(statearr_29642_29704[(2)] = inst_29591);

(statearr_29642_29704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (18))){
var inst_29602 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29643_29705 = state_29619__$1;
(statearr_29643_29705[(2)] = inst_29602);

(statearr_29643_29705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (8))){
var inst_29588 = cljs.core.async.close_BANG_.call(null,to);
var state_29619__$1 = state_29619;
var statearr_29644_29706 = state_29619__$1;
(statearr_29644_29706[(2)] = inst_29588);

(statearr_29644_29706[(1)] = (10));


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
}
}
}
}
}
});})(c__29094__auto__,jobs,results,process,async))
;
return ((function (switch__28982__auto__,c__29094__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0 = (function (){
var statearr_29648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__);

(statearr_29648[(1)] = (1));

return statearr_29648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1 = (function (state_29619){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29649){if((e29649 instanceof Object)){
var ex__28986__auto__ = e29649;
var statearr_29650_29707 = state_29619;
(statearr_29650_29707[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29708 = state_29619;
state_29619 = G__29708;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__ = function(state_29619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1.call(this,state_29619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,jobs,results,process,async))
})();
var state__29096__auto__ = (function (){var statearr_29651 = f__29095__auto__.call(null);
(statearr_29651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_29651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,jobs,results,process,async))
);

return c__29094__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29709 = [];
var len__27997__auto___29712 = arguments.length;
var i__27998__auto___29713 = (0);
while(true){
if((i__27998__auto___29713 < len__27997__auto___29712)){
args29709.push((arguments[i__27998__auto___29713]));

var G__29714 = (i__27998__auto___29713 + (1));
i__27998__auto___29713 = G__29714;
continue;
} else {
}
break;
}

var G__29711 = args29709.length;
switch (G__29711) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29709.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29716 = [];
var len__27997__auto___29719 = arguments.length;
var i__27998__auto___29720 = (0);
while(true){
if((i__27998__auto___29720 < len__27997__auto___29719)){
args29716.push((arguments[i__27998__auto___29720]));

var G__29721 = (i__27998__auto___29720 + (1));
i__27998__auto___29720 = G__29721;
continue;
} else {
}
break;
}

var G__29718 = args29716.length;
switch (G__29718) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29716.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29723 = [];
var len__27997__auto___29776 = arguments.length;
var i__27998__auto___29777 = (0);
while(true){
if((i__27998__auto___29777 < len__27997__auto___29776)){
args29723.push((arguments[i__27998__auto___29777]));

var G__29778 = (i__27998__auto___29777 + (1));
i__27998__auto___29777 = G__29778;
continue;
} else {
}
break;
}

var G__29725 = args29723.length;
switch (G__29725) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29723.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29094__auto___29780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___29780,tc,fc){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___29780,tc,fc){
return (function (state_29751){
var state_val_29752 = (state_29751[(1)]);
if((state_val_29752 === (7))){
var inst_29747 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29753_29781 = state_29751__$1;
(statearr_29753_29781[(2)] = inst_29747);

(statearr_29753_29781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (1))){
var state_29751__$1 = state_29751;
var statearr_29754_29782 = state_29751__$1;
(statearr_29754_29782[(2)] = null);

(statearr_29754_29782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (4))){
var inst_29728 = (state_29751[(7)]);
var inst_29728__$1 = (state_29751[(2)]);
var inst_29729 = (inst_29728__$1 == null);
var state_29751__$1 = (function (){var statearr_29755 = state_29751;
(statearr_29755[(7)] = inst_29728__$1);

return statearr_29755;
})();
if(cljs.core.truth_(inst_29729)){
var statearr_29756_29783 = state_29751__$1;
(statearr_29756_29783[(1)] = (5));

} else {
var statearr_29757_29784 = state_29751__$1;
(statearr_29757_29784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (13))){
var state_29751__$1 = state_29751;
var statearr_29758_29785 = state_29751__$1;
(statearr_29758_29785[(2)] = null);

(statearr_29758_29785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (6))){
var inst_29728 = (state_29751[(7)]);
var inst_29734 = p.call(null,inst_29728);
var state_29751__$1 = state_29751;
if(cljs.core.truth_(inst_29734)){
var statearr_29759_29786 = state_29751__$1;
(statearr_29759_29786[(1)] = (9));

} else {
var statearr_29760_29787 = state_29751__$1;
(statearr_29760_29787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (3))){
var inst_29749 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29751__$1,inst_29749);
} else {
if((state_val_29752 === (12))){
var state_29751__$1 = state_29751;
var statearr_29761_29788 = state_29751__$1;
(statearr_29761_29788[(2)] = null);

(statearr_29761_29788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (2))){
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29751__$1,(4),ch);
} else {
if((state_val_29752 === (11))){
var inst_29728 = (state_29751[(7)]);
var inst_29738 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29751__$1,(8),inst_29738,inst_29728);
} else {
if((state_val_29752 === (9))){
var state_29751__$1 = state_29751;
var statearr_29762_29789 = state_29751__$1;
(statearr_29762_29789[(2)] = tc);

(statearr_29762_29789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (5))){
var inst_29731 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29732 = cljs.core.async.close_BANG_.call(null,fc);
var state_29751__$1 = (function (){var statearr_29763 = state_29751;
(statearr_29763[(8)] = inst_29731);

return statearr_29763;
})();
var statearr_29764_29790 = state_29751__$1;
(statearr_29764_29790[(2)] = inst_29732);

(statearr_29764_29790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (14))){
var inst_29745 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29765_29791 = state_29751__$1;
(statearr_29765_29791[(2)] = inst_29745);

(statearr_29765_29791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (10))){
var state_29751__$1 = state_29751;
var statearr_29766_29792 = state_29751__$1;
(statearr_29766_29792[(2)] = fc);

(statearr_29766_29792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (8))){
var inst_29740 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
if(cljs.core.truth_(inst_29740)){
var statearr_29767_29793 = state_29751__$1;
(statearr_29767_29793[(1)] = (12));

} else {
var statearr_29768_29794 = state_29751__$1;
(statearr_29768_29794[(1)] = (13));

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
});})(c__29094__auto___29780,tc,fc))
;
return ((function (switch__28982__auto__,c__29094__auto___29780,tc,fc){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_29772 = [null,null,null,null,null,null,null,null,null];
(statearr_29772[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_29772[(1)] = (1));

return statearr_29772;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_29751){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29773){if((e29773 instanceof Object)){
var ex__28986__auto__ = e29773;
var statearr_29774_29795 = state_29751;
(statearr_29774_29795[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29796 = state_29751;
state_29751 = G__29796;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_29751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_29751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___29780,tc,fc))
})();
var state__29096__auto__ = (function (){var statearr_29775 = f__29095__auto__.call(null);
(statearr_29775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___29780);

return statearr_29775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___29780,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__){
return (function (state_29860){
var state_val_29861 = (state_29860[(1)]);
if((state_val_29861 === (7))){
var inst_29856 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
var statearr_29862_29883 = state_29860__$1;
(statearr_29862_29883[(2)] = inst_29856);

(statearr_29862_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (1))){
var inst_29840 = init;
var state_29860__$1 = (function (){var statearr_29863 = state_29860;
(statearr_29863[(7)] = inst_29840);

return statearr_29863;
})();
var statearr_29864_29884 = state_29860__$1;
(statearr_29864_29884[(2)] = null);

(statearr_29864_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (4))){
var inst_29843 = (state_29860[(8)]);
var inst_29843__$1 = (state_29860[(2)]);
var inst_29844 = (inst_29843__$1 == null);
var state_29860__$1 = (function (){var statearr_29865 = state_29860;
(statearr_29865[(8)] = inst_29843__$1);

return statearr_29865;
})();
if(cljs.core.truth_(inst_29844)){
var statearr_29866_29885 = state_29860__$1;
(statearr_29866_29885[(1)] = (5));

} else {
var statearr_29867_29886 = state_29860__$1;
(statearr_29867_29886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (6))){
var inst_29843 = (state_29860[(8)]);
var inst_29847 = (state_29860[(9)]);
var inst_29840 = (state_29860[(7)]);
var inst_29847__$1 = f.call(null,inst_29840,inst_29843);
var inst_29848 = cljs.core.reduced_QMARK_.call(null,inst_29847__$1);
var state_29860__$1 = (function (){var statearr_29868 = state_29860;
(statearr_29868[(9)] = inst_29847__$1);

return statearr_29868;
})();
if(inst_29848){
var statearr_29869_29887 = state_29860__$1;
(statearr_29869_29887[(1)] = (8));

} else {
var statearr_29870_29888 = state_29860__$1;
(statearr_29870_29888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (3))){
var inst_29858 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29860__$1,inst_29858);
} else {
if((state_val_29861 === (2))){
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29860__$1,(4),ch);
} else {
if((state_val_29861 === (9))){
var inst_29847 = (state_29860[(9)]);
var inst_29840 = inst_29847;
var state_29860__$1 = (function (){var statearr_29871 = state_29860;
(statearr_29871[(7)] = inst_29840);

return statearr_29871;
})();
var statearr_29872_29889 = state_29860__$1;
(statearr_29872_29889[(2)] = null);

(statearr_29872_29889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (5))){
var inst_29840 = (state_29860[(7)]);
var state_29860__$1 = state_29860;
var statearr_29873_29890 = state_29860__$1;
(statearr_29873_29890[(2)] = inst_29840);

(statearr_29873_29890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (10))){
var inst_29854 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
var statearr_29874_29891 = state_29860__$1;
(statearr_29874_29891[(2)] = inst_29854);

(statearr_29874_29891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (8))){
var inst_29847 = (state_29860[(9)]);
var inst_29850 = cljs.core.deref.call(null,inst_29847);
var state_29860__$1 = state_29860;
var statearr_29875_29892 = state_29860__$1;
(statearr_29875_29892[(2)] = inst_29850);

(statearr_29875_29892[(1)] = (10));


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
});})(c__29094__auto__))
;
return ((function (switch__28982__auto__,c__29094__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28983__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28983__auto____0 = (function (){
var statearr_29879 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29879[(0)] = cljs$core$async$reduce_$_state_machine__28983__auto__);

(statearr_29879[(1)] = (1));

return statearr_29879;
});
var cljs$core$async$reduce_$_state_machine__28983__auto____1 = (function (state_29860){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29880){if((e29880 instanceof Object)){
var ex__28986__auto__ = e29880;
var statearr_29881_29893 = state_29860;
(statearr_29881_29893[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_29860;
state_29860 = G__29894;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28983__auto__ = function(state_29860){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28983__auto____1.call(this,state_29860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28983__auto____0;
cljs$core$async$reduce_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28983__auto____1;
return cljs$core$async$reduce_$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__))
})();
var state__29096__auto__ = (function (){var statearr_29882 = f__29095__auto__.call(null);
(statearr_29882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_29882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__))
);

return c__29094__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__,f__$1){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__,f__$1){
return (function (state_29914){
var state_val_29915 = (state_29914[(1)]);
if((state_val_29915 === (1))){
var inst_29909 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(2),inst_29909);
} else {
if((state_val_29915 === (2))){
var inst_29911 = (state_29914[(2)]);
var inst_29912 = f__$1.call(null,inst_29911);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29914__$1,inst_29912);
} else {
return null;
}
}
});})(c__29094__auto__,f__$1))
;
return ((function (switch__28982__auto__,c__29094__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28983__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28983__auto____0 = (function (){
var statearr_29919 = [null,null,null,null,null,null,null];
(statearr_29919[(0)] = cljs$core$async$transduce_$_state_machine__28983__auto__);

(statearr_29919[(1)] = (1));

return statearr_29919;
});
var cljs$core$async$transduce_$_state_machine__28983__auto____1 = (function (state_29914){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29920){if((e29920 instanceof Object)){
var ex__28986__auto__ = e29920;
var statearr_29921_29923 = state_29914;
(statearr_29921_29923[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29924 = state_29914;
state_29914 = G__29924;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28983__auto__ = function(state_29914){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28983__auto____1.call(this,state_29914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28983__auto____0;
cljs$core$async$transduce_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28983__auto____1;
return cljs$core$async$transduce_$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__,f__$1))
})();
var state__29096__auto__ = (function (){var statearr_29922 = f__29095__auto__.call(null);
(statearr_29922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_29922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__,f__$1))
);

return c__29094__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29925 = [];
var len__27997__auto___29977 = arguments.length;
var i__27998__auto___29978 = (0);
while(true){
if((i__27998__auto___29978 < len__27997__auto___29977)){
args29925.push((arguments[i__27998__auto___29978]));

var G__29979 = (i__27998__auto___29978 + (1));
i__27998__auto___29978 = G__29979;
continue;
} else {
}
break;
}

var G__29927 = args29925.length;
switch (G__29927) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29925.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__){
return (function (state_29952){
var state_val_29953 = (state_29952[(1)]);
if((state_val_29953 === (7))){
var inst_29934 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
var statearr_29954_29981 = state_29952__$1;
(statearr_29954_29981[(2)] = inst_29934);

(statearr_29954_29981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (1))){
var inst_29928 = cljs.core.seq.call(null,coll);
var inst_29929 = inst_29928;
var state_29952__$1 = (function (){var statearr_29955 = state_29952;
(statearr_29955[(7)] = inst_29929);

return statearr_29955;
})();
var statearr_29956_29982 = state_29952__$1;
(statearr_29956_29982[(2)] = null);

(statearr_29956_29982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (4))){
var inst_29929 = (state_29952[(7)]);
var inst_29932 = cljs.core.first.call(null,inst_29929);
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29952__$1,(7),ch,inst_29932);
} else {
if((state_val_29953 === (13))){
var inst_29946 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
var statearr_29957_29983 = state_29952__$1;
(statearr_29957_29983[(2)] = inst_29946);

(statearr_29957_29983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (6))){
var inst_29937 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
if(cljs.core.truth_(inst_29937)){
var statearr_29958_29984 = state_29952__$1;
(statearr_29958_29984[(1)] = (8));

} else {
var statearr_29959_29985 = state_29952__$1;
(statearr_29959_29985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (3))){
var inst_29950 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29952__$1,inst_29950);
} else {
if((state_val_29953 === (12))){
var state_29952__$1 = state_29952;
var statearr_29960_29986 = state_29952__$1;
(statearr_29960_29986[(2)] = null);

(statearr_29960_29986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (2))){
var inst_29929 = (state_29952[(7)]);
var state_29952__$1 = state_29952;
if(cljs.core.truth_(inst_29929)){
var statearr_29961_29987 = state_29952__$1;
(statearr_29961_29987[(1)] = (4));

} else {
var statearr_29962_29988 = state_29952__$1;
(statearr_29962_29988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (11))){
var inst_29943 = cljs.core.async.close_BANG_.call(null,ch);
var state_29952__$1 = state_29952;
var statearr_29963_29989 = state_29952__$1;
(statearr_29963_29989[(2)] = inst_29943);

(statearr_29963_29989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (9))){
var state_29952__$1 = state_29952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29964_29990 = state_29952__$1;
(statearr_29964_29990[(1)] = (11));

} else {
var statearr_29965_29991 = state_29952__$1;
(statearr_29965_29991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (5))){
var inst_29929 = (state_29952[(7)]);
var state_29952__$1 = state_29952;
var statearr_29966_29992 = state_29952__$1;
(statearr_29966_29992[(2)] = inst_29929);

(statearr_29966_29992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (10))){
var inst_29948 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
var statearr_29967_29993 = state_29952__$1;
(statearr_29967_29993[(2)] = inst_29948);

(statearr_29967_29993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (8))){
var inst_29929 = (state_29952[(7)]);
var inst_29939 = cljs.core.next.call(null,inst_29929);
var inst_29929__$1 = inst_29939;
var state_29952__$1 = (function (){var statearr_29968 = state_29952;
(statearr_29968[(7)] = inst_29929__$1);

return statearr_29968;
})();
var statearr_29969_29994 = state_29952__$1;
(statearr_29969_29994[(2)] = null);

(statearr_29969_29994[(1)] = (2));


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
});})(c__29094__auto__))
;
return ((function (switch__28982__auto__,c__29094__auto__){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_29973 = [null,null,null,null,null,null,null,null];
(statearr_29973[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_29973[(1)] = (1));

return statearr_29973;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_29952){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_29952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e29974){if((e29974 instanceof Object)){
var ex__28986__auto__ = e29974;
var statearr_29975_29995 = state_29952;
(statearr_29975_29995[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29996 = state_29952;
state_29952 = G__29996;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_29952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_29952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__))
})();
var state__29096__auto__ = (function (){var statearr_29976 = f__29095__auto__.call(null);
(statearr_29976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_29976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__))
);

return c__29094__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27585__auto__ = (((_ == null))?null:_);
var m__27586__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,_);
} else {
var m__27586__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27586__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m,ch);
} else {
var m__27586__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m);
} else {
var m__27586__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30222 = (function (mult,ch,cs,meta30223){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30223 = meta30223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30224,meta30223__$1){
var self__ = this;
var _30224__$1 = this;
return (new cljs.core.async.t_cljs$core$async30222(self__.mult,self__.ch,self__.cs,meta30223__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30224){
var self__ = this;
var _30224__$1 = this;
return self__.meta30223;
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30223","meta30223",-1399346265,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30222";

cljs.core.async.t_cljs$core$async30222.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async30222");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30222 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30222(mult__$1,ch__$1,cs__$1,meta30223){
return (new cljs.core.async.t_cljs$core$async30222(mult__$1,ch__$1,cs__$1,meta30223));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30222(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29094__auto___30447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___30447,cs,m,dchan,dctr,done){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___30447,cs,m,dchan,dctr,done){
return (function (state_30359){
var state_val_30360 = (state_30359[(1)]);
if((state_val_30360 === (7))){
var inst_30355 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30361_30448 = state_30359__$1;
(statearr_30361_30448[(2)] = inst_30355);

(statearr_30361_30448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (20))){
var inst_30258 = (state_30359[(7)]);
var inst_30270 = cljs.core.first.call(null,inst_30258);
var inst_30271 = cljs.core.nth.call(null,inst_30270,(0),null);
var inst_30272 = cljs.core.nth.call(null,inst_30270,(1),null);
var state_30359__$1 = (function (){var statearr_30362 = state_30359;
(statearr_30362[(8)] = inst_30271);

return statearr_30362;
})();
if(cljs.core.truth_(inst_30272)){
var statearr_30363_30449 = state_30359__$1;
(statearr_30363_30449[(1)] = (22));

} else {
var statearr_30364_30450 = state_30359__$1;
(statearr_30364_30450[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (27))){
var inst_30307 = (state_30359[(9)]);
var inst_30300 = (state_30359[(10)]);
var inst_30227 = (state_30359[(11)]);
var inst_30302 = (state_30359[(12)]);
var inst_30307__$1 = cljs.core._nth.call(null,inst_30300,inst_30302);
var inst_30308 = cljs.core.async.put_BANG_.call(null,inst_30307__$1,inst_30227,done);
var state_30359__$1 = (function (){var statearr_30365 = state_30359;
(statearr_30365[(9)] = inst_30307__$1);

return statearr_30365;
})();
if(cljs.core.truth_(inst_30308)){
var statearr_30366_30451 = state_30359__$1;
(statearr_30366_30451[(1)] = (30));

} else {
var statearr_30367_30452 = state_30359__$1;
(statearr_30367_30452[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (1))){
var state_30359__$1 = state_30359;
var statearr_30368_30453 = state_30359__$1;
(statearr_30368_30453[(2)] = null);

(statearr_30368_30453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (24))){
var inst_30258 = (state_30359[(7)]);
var inst_30277 = (state_30359[(2)]);
var inst_30278 = cljs.core.next.call(null,inst_30258);
var inst_30236 = inst_30278;
var inst_30237 = null;
var inst_30238 = (0);
var inst_30239 = (0);
var state_30359__$1 = (function (){var statearr_30369 = state_30359;
(statearr_30369[(13)] = inst_30277);

(statearr_30369[(14)] = inst_30238);

(statearr_30369[(15)] = inst_30236);

(statearr_30369[(16)] = inst_30239);

(statearr_30369[(17)] = inst_30237);

return statearr_30369;
})();
var statearr_30370_30454 = state_30359__$1;
(statearr_30370_30454[(2)] = null);

(statearr_30370_30454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (39))){
var state_30359__$1 = state_30359;
var statearr_30374_30455 = state_30359__$1;
(statearr_30374_30455[(2)] = null);

(statearr_30374_30455[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (4))){
var inst_30227 = (state_30359[(11)]);
var inst_30227__$1 = (state_30359[(2)]);
var inst_30228 = (inst_30227__$1 == null);
var state_30359__$1 = (function (){var statearr_30375 = state_30359;
(statearr_30375[(11)] = inst_30227__$1);

return statearr_30375;
})();
if(cljs.core.truth_(inst_30228)){
var statearr_30376_30456 = state_30359__$1;
(statearr_30376_30456[(1)] = (5));

} else {
var statearr_30377_30457 = state_30359__$1;
(statearr_30377_30457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (15))){
var inst_30238 = (state_30359[(14)]);
var inst_30236 = (state_30359[(15)]);
var inst_30239 = (state_30359[(16)]);
var inst_30237 = (state_30359[(17)]);
var inst_30254 = (state_30359[(2)]);
var inst_30255 = (inst_30239 + (1));
var tmp30371 = inst_30238;
var tmp30372 = inst_30236;
var tmp30373 = inst_30237;
var inst_30236__$1 = tmp30372;
var inst_30237__$1 = tmp30373;
var inst_30238__$1 = tmp30371;
var inst_30239__$1 = inst_30255;
var state_30359__$1 = (function (){var statearr_30378 = state_30359;
(statearr_30378[(14)] = inst_30238__$1);

(statearr_30378[(15)] = inst_30236__$1);

(statearr_30378[(16)] = inst_30239__$1);

(statearr_30378[(18)] = inst_30254);

(statearr_30378[(17)] = inst_30237__$1);

return statearr_30378;
})();
var statearr_30379_30458 = state_30359__$1;
(statearr_30379_30458[(2)] = null);

(statearr_30379_30458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (21))){
var inst_30281 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30383_30459 = state_30359__$1;
(statearr_30383_30459[(2)] = inst_30281);

(statearr_30383_30459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (31))){
var inst_30307 = (state_30359[(9)]);
var inst_30311 = done.call(null,null);
var inst_30312 = cljs.core.async.untap_STAR_.call(null,m,inst_30307);
var state_30359__$1 = (function (){var statearr_30384 = state_30359;
(statearr_30384[(19)] = inst_30311);

return statearr_30384;
})();
var statearr_30385_30460 = state_30359__$1;
(statearr_30385_30460[(2)] = inst_30312);

(statearr_30385_30460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (32))){
var inst_30301 = (state_30359[(20)]);
var inst_30300 = (state_30359[(10)]);
var inst_30302 = (state_30359[(12)]);
var inst_30299 = (state_30359[(21)]);
var inst_30314 = (state_30359[(2)]);
var inst_30315 = (inst_30302 + (1));
var tmp30380 = inst_30301;
var tmp30381 = inst_30300;
var tmp30382 = inst_30299;
var inst_30299__$1 = tmp30382;
var inst_30300__$1 = tmp30381;
var inst_30301__$1 = tmp30380;
var inst_30302__$1 = inst_30315;
var state_30359__$1 = (function (){var statearr_30386 = state_30359;
(statearr_30386[(20)] = inst_30301__$1);

(statearr_30386[(22)] = inst_30314);

(statearr_30386[(10)] = inst_30300__$1);

(statearr_30386[(12)] = inst_30302__$1);

(statearr_30386[(21)] = inst_30299__$1);

return statearr_30386;
})();
var statearr_30387_30461 = state_30359__$1;
(statearr_30387_30461[(2)] = null);

(statearr_30387_30461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (40))){
var inst_30327 = (state_30359[(23)]);
var inst_30331 = done.call(null,null);
var inst_30332 = cljs.core.async.untap_STAR_.call(null,m,inst_30327);
var state_30359__$1 = (function (){var statearr_30388 = state_30359;
(statearr_30388[(24)] = inst_30331);

return statearr_30388;
})();
var statearr_30389_30462 = state_30359__$1;
(statearr_30389_30462[(2)] = inst_30332);

(statearr_30389_30462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (33))){
var inst_30318 = (state_30359[(25)]);
var inst_30320 = cljs.core.chunked_seq_QMARK_.call(null,inst_30318);
var state_30359__$1 = state_30359;
if(inst_30320){
var statearr_30390_30463 = state_30359__$1;
(statearr_30390_30463[(1)] = (36));

} else {
var statearr_30391_30464 = state_30359__$1;
(statearr_30391_30464[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (13))){
var inst_30248 = (state_30359[(26)]);
var inst_30251 = cljs.core.async.close_BANG_.call(null,inst_30248);
var state_30359__$1 = state_30359;
var statearr_30392_30465 = state_30359__$1;
(statearr_30392_30465[(2)] = inst_30251);

(statearr_30392_30465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (22))){
var inst_30271 = (state_30359[(8)]);
var inst_30274 = cljs.core.async.close_BANG_.call(null,inst_30271);
var state_30359__$1 = state_30359;
var statearr_30393_30466 = state_30359__$1;
(statearr_30393_30466[(2)] = inst_30274);

(statearr_30393_30466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (36))){
var inst_30318 = (state_30359[(25)]);
var inst_30322 = cljs.core.chunk_first.call(null,inst_30318);
var inst_30323 = cljs.core.chunk_rest.call(null,inst_30318);
var inst_30324 = cljs.core.count.call(null,inst_30322);
var inst_30299 = inst_30323;
var inst_30300 = inst_30322;
var inst_30301 = inst_30324;
var inst_30302 = (0);
var state_30359__$1 = (function (){var statearr_30394 = state_30359;
(statearr_30394[(20)] = inst_30301);

(statearr_30394[(10)] = inst_30300);

(statearr_30394[(12)] = inst_30302);

(statearr_30394[(21)] = inst_30299);

return statearr_30394;
})();
var statearr_30395_30467 = state_30359__$1;
(statearr_30395_30467[(2)] = null);

(statearr_30395_30467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (41))){
var inst_30318 = (state_30359[(25)]);
var inst_30334 = (state_30359[(2)]);
var inst_30335 = cljs.core.next.call(null,inst_30318);
var inst_30299 = inst_30335;
var inst_30300 = null;
var inst_30301 = (0);
var inst_30302 = (0);
var state_30359__$1 = (function (){var statearr_30396 = state_30359;
(statearr_30396[(20)] = inst_30301);

(statearr_30396[(10)] = inst_30300);

(statearr_30396[(27)] = inst_30334);

(statearr_30396[(12)] = inst_30302);

(statearr_30396[(21)] = inst_30299);

return statearr_30396;
})();
var statearr_30397_30468 = state_30359__$1;
(statearr_30397_30468[(2)] = null);

(statearr_30397_30468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (43))){
var state_30359__$1 = state_30359;
var statearr_30398_30469 = state_30359__$1;
(statearr_30398_30469[(2)] = null);

(statearr_30398_30469[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (29))){
var inst_30343 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30399_30470 = state_30359__$1;
(statearr_30399_30470[(2)] = inst_30343);

(statearr_30399_30470[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (44))){
var inst_30352 = (state_30359[(2)]);
var state_30359__$1 = (function (){var statearr_30400 = state_30359;
(statearr_30400[(28)] = inst_30352);

return statearr_30400;
})();
var statearr_30401_30471 = state_30359__$1;
(statearr_30401_30471[(2)] = null);

(statearr_30401_30471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (6))){
var inst_30291 = (state_30359[(29)]);
var inst_30290 = cljs.core.deref.call(null,cs);
var inst_30291__$1 = cljs.core.keys.call(null,inst_30290);
var inst_30292 = cljs.core.count.call(null,inst_30291__$1);
var inst_30293 = cljs.core.reset_BANG_.call(null,dctr,inst_30292);
var inst_30298 = cljs.core.seq.call(null,inst_30291__$1);
var inst_30299 = inst_30298;
var inst_30300 = null;
var inst_30301 = (0);
var inst_30302 = (0);
var state_30359__$1 = (function (){var statearr_30402 = state_30359;
(statearr_30402[(20)] = inst_30301);

(statearr_30402[(30)] = inst_30293);

(statearr_30402[(10)] = inst_30300);

(statearr_30402[(12)] = inst_30302);

(statearr_30402[(29)] = inst_30291__$1);

(statearr_30402[(21)] = inst_30299);

return statearr_30402;
})();
var statearr_30403_30472 = state_30359__$1;
(statearr_30403_30472[(2)] = null);

(statearr_30403_30472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (28))){
var inst_30318 = (state_30359[(25)]);
var inst_30299 = (state_30359[(21)]);
var inst_30318__$1 = cljs.core.seq.call(null,inst_30299);
var state_30359__$1 = (function (){var statearr_30404 = state_30359;
(statearr_30404[(25)] = inst_30318__$1);

return statearr_30404;
})();
if(inst_30318__$1){
var statearr_30405_30473 = state_30359__$1;
(statearr_30405_30473[(1)] = (33));

} else {
var statearr_30406_30474 = state_30359__$1;
(statearr_30406_30474[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (25))){
var inst_30301 = (state_30359[(20)]);
var inst_30302 = (state_30359[(12)]);
var inst_30304 = (inst_30302 < inst_30301);
var inst_30305 = inst_30304;
var state_30359__$1 = state_30359;
if(cljs.core.truth_(inst_30305)){
var statearr_30407_30475 = state_30359__$1;
(statearr_30407_30475[(1)] = (27));

} else {
var statearr_30408_30476 = state_30359__$1;
(statearr_30408_30476[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (34))){
var state_30359__$1 = state_30359;
var statearr_30409_30477 = state_30359__$1;
(statearr_30409_30477[(2)] = null);

(statearr_30409_30477[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (17))){
var state_30359__$1 = state_30359;
var statearr_30410_30478 = state_30359__$1;
(statearr_30410_30478[(2)] = null);

(statearr_30410_30478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (3))){
var inst_30357 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30359__$1,inst_30357);
} else {
if((state_val_30360 === (12))){
var inst_30286 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30411_30479 = state_30359__$1;
(statearr_30411_30479[(2)] = inst_30286);

(statearr_30411_30479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (2))){
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30359__$1,(4),ch);
} else {
if((state_val_30360 === (23))){
var state_30359__$1 = state_30359;
var statearr_30412_30480 = state_30359__$1;
(statearr_30412_30480[(2)] = null);

(statearr_30412_30480[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (35))){
var inst_30341 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30413_30481 = state_30359__$1;
(statearr_30413_30481[(2)] = inst_30341);

(statearr_30413_30481[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (19))){
var inst_30258 = (state_30359[(7)]);
var inst_30262 = cljs.core.chunk_first.call(null,inst_30258);
var inst_30263 = cljs.core.chunk_rest.call(null,inst_30258);
var inst_30264 = cljs.core.count.call(null,inst_30262);
var inst_30236 = inst_30263;
var inst_30237 = inst_30262;
var inst_30238 = inst_30264;
var inst_30239 = (0);
var state_30359__$1 = (function (){var statearr_30414 = state_30359;
(statearr_30414[(14)] = inst_30238);

(statearr_30414[(15)] = inst_30236);

(statearr_30414[(16)] = inst_30239);

(statearr_30414[(17)] = inst_30237);

return statearr_30414;
})();
var statearr_30415_30482 = state_30359__$1;
(statearr_30415_30482[(2)] = null);

(statearr_30415_30482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (11))){
var inst_30236 = (state_30359[(15)]);
var inst_30258 = (state_30359[(7)]);
var inst_30258__$1 = cljs.core.seq.call(null,inst_30236);
var state_30359__$1 = (function (){var statearr_30416 = state_30359;
(statearr_30416[(7)] = inst_30258__$1);

return statearr_30416;
})();
if(inst_30258__$1){
var statearr_30417_30483 = state_30359__$1;
(statearr_30417_30483[(1)] = (16));

} else {
var statearr_30418_30484 = state_30359__$1;
(statearr_30418_30484[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (9))){
var inst_30288 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30419_30485 = state_30359__$1;
(statearr_30419_30485[(2)] = inst_30288);

(statearr_30419_30485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (5))){
var inst_30234 = cljs.core.deref.call(null,cs);
var inst_30235 = cljs.core.seq.call(null,inst_30234);
var inst_30236 = inst_30235;
var inst_30237 = null;
var inst_30238 = (0);
var inst_30239 = (0);
var state_30359__$1 = (function (){var statearr_30420 = state_30359;
(statearr_30420[(14)] = inst_30238);

(statearr_30420[(15)] = inst_30236);

(statearr_30420[(16)] = inst_30239);

(statearr_30420[(17)] = inst_30237);

return statearr_30420;
})();
var statearr_30421_30486 = state_30359__$1;
(statearr_30421_30486[(2)] = null);

(statearr_30421_30486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (14))){
var state_30359__$1 = state_30359;
var statearr_30422_30487 = state_30359__$1;
(statearr_30422_30487[(2)] = null);

(statearr_30422_30487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (45))){
var inst_30349 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30423_30488 = state_30359__$1;
(statearr_30423_30488[(2)] = inst_30349);

(statearr_30423_30488[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (26))){
var inst_30291 = (state_30359[(29)]);
var inst_30345 = (state_30359[(2)]);
var inst_30346 = cljs.core.seq.call(null,inst_30291);
var state_30359__$1 = (function (){var statearr_30424 = state_30359;
(statearr_30424[(31)] = inst_30345);

return statearr_30424;
})();
if(inst_30346){
var statearr_30425_30489 = state_30359__$1;
(statearr_30425_30489[(1)] = (42));

} else {
var statearr_30426_30490 = state_30359__$1;
(statearr_30426_30490[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (16))){
var inst_30258 = (state_30359[(7)]);
var inst_30260 = cljs.core.chunked_seq_QMARK_.call(null,inst_30258);
var state_30359__$1 = state_30359;
if(inst_30260){
var statearr_30427_30491 = state_30359__$1;
(statearr_30427_30491[(1)] = (19));

} else {
var statearr_30428_30492 = state_30359__$1;
(statearr_30428_30492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (38))){
var inst_30338 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30429_30493 = state_30359__$1;
(statearr_30429_30493[(2)] = inst_30338);

(statearr_30429_30493[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (30))){
var state_30359__$1 = state_30359;
var statearr_30430_30494 = state_30359__$1;
(statearr_30430_30494[(2)] = null);

(statearr_30430_30494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (10))){
var inst_30239 = (state_30359[(16)]);
var inst_30237 = (state_30359[(17)]);
var inst_30247 = cljs.core._nth.call(null,inst_30237,inst_30239);
var inst_30248 = cljs.core.nth.call(null,inst_30247,(0),null);
var inst_30249 = cljs.core.nth.call(null,inst_30247,(1),null);
var state_30359__$1 = (function (){var statearr_30431 = state_30359;
(statearr_30431[(26)] = inst_30248);

return statearr_30431;
})();
if(cljs.core.truth_(inst_30249)){
var statearr_30432_30495 = state_30359__$1;
(statearr_30432_30495[(1)] = (13));

} else {
var statearr_30433_30496 = state_30359__$1;
(statearr_30433_30496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (18))){
var inst_30284 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30434_30497 = state_30359__$1;
(statearr_30434_30497[(2)] = inst_30284);

(statearr_30434_30497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (42))){
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30359__$1,(45),dchan);
} else {
if((state_val_30360 === (37))){
var inst_30327 = (state_30359[(23)]);
var inst_30227 = (state_30359[(11)]);
var inst_30318 = (state_30359[(25)]);
var inst_30327__$1 = cljs.core.first.call(null,inst_30318);
var inst_30328 = cljs.core.async.put_BANG_.call(null,inst_30327__$1,inst_30227,done);
var state_30359__$1 = (function (){var statearr_30435 = state_30359;
(statearr_30435[(23)] = inst_30327__$1);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30328)){
var statearr_30436_30498 = state_30359__$1;
(statearr_30436_30498[(1)] = (39));

} else {
var statearr_30437_30499 = state_30359__$1;
(statearr_30437_30499[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (8))){
var inst_30238 = (state_30359[(14)]);
var inst_30239 = (state_30359[(16)]);
var inst_30241 = (inst_30239 < inst_30238);
var inst_30242 = inst_30241;
var state_30359__$1 = state_30359;
if(cljs.core.truth_(inst_30242)){
var statearr_30438_30500 = state_30359__$1;
(statearr_30438_30500[(1)] = (10));

} else {
var statearr_30439_30501 = state_30359__$1;
(statearr_30439_30501[(1)] = (11));

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
});})(c__29094__auto___30447,cs,m,dchan,dctr,done))
;
return ((function (switch__28982__auto__,c__29094__auto___30447,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28983__auto__ = null;
var cljs$core$async$mult_$_state_machine__28983__auto____0 = (function (){
var statearr_30443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30443[(0)] = cljs$core$async$mult_$_state_machine__28983__auto__);

(statearr_30443[(1)] = (1));

return statearr_30443;
});
var cljs$core$async$mult_$_state_machine__28983__auto____1 = (function (state_30359){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_30359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e30444){if((e30444 instanceof Object)){
var ex__28986__auto__ = e30444;
var statearr_30445_30502 = state_30359;
(statearr_30445_30502[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30503 = state_30359;
state_30359 = G__30503;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28983__auto__ = function(state_30359){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28983__auto____1.call(this,state_30359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28983__auto____0;
cljs$core$async$mult_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28983__auto____1;
return cljs$core$async$mult_$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___30447,cs,m,dchan,dctr,done))
})();
var state__29096__auto__ = (function (){var statearr_30446 = f__29095__auto__.call(null);
(statearr_30446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___30447);

return statearr_30446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___30447,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30504 = [];
var len__27997__auto___30507 = arguments.length;
var i__27998__auto___30508 = (0);
while(true){
if((i__27998__auto___30508 < len__27997__auto___30507)){
args30504.push((arguments[i__27998__auto___30508]));

var G__30509 = (i__27998__auto___30508 + (1));
i__27998__auto___30508 = G__30509;
continue;
} else {
}
break;
}

var G__30506 = args30504.length;
switch (G__30506) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30504.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m,ch);
} else {
var m__27586__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m,ch);
} else {
var m__27586__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m);
} else {
var m__27586__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m,state_map);
} else {
var m__27586__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27585__auto__ = (((m == null))?null:m);
var m__27586__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,m,mode);
} else {
var m__27586__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28004__auto__ = [];
var len__27997__auto___30521 = arguments.length;
var i__27998__auto___30522 = (0);
while(true){
if((i__27998__auto___30522 < len__27997__auto___30521)){
args__28004__auto__.push((arguments[i__27998__auto___30522]));

var G__30523 = (i__27998__auto___30522 + (1));
i__27998__auto___30522 = G__30523;
continue;
} else {
}
break;
}

var argseq__28005__auto__ = ((((3) < args__28004__auto__.length))?(new cljs.core.IndexedSeq(args__28004__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28005__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30515){
var map__30516 = p__30515;
var map__30516__$1 = ((((!((map__30516 == null)))?((((map__30516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30516):map__30516);
var opts = map__30516__$1;
var statearr_30518_30524 = state;
(statearr_30518_30524[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30516,map__30516__$1,opts){
return (function (val){
var statearr_30519_30525 = state;
(statearr_30519_30525[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30516,map__30516__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30520_30526 = state;
(statearr_30520_30526[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30511){
var G__30512 = cljs.core.first.call(null,seq30511);
var seq30511__$1 = cljs.core.next.call(null,seq30511);
var G__30513 = cljs.core.first.call(null,seq30511__$1);
var seq30511__$2 = cljs.core.next.call(null,seq30511__$1);
var G__30514 = cljs.core.first.call(null,seq30511__$2);
var seq30511__$3 = cljs.core.next.call(null,seq30511__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30512,G__30513,G__30514,seq30511__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30692 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30693){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30693 = meta30693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30694,meta30693__$1){
var self__ = this;
var _30694__$1 = this;
return (new cljs.core.async.t_cljs$core$async30692(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30693__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30694){
var self__ = this;
var _30694__$1 = this;
return self__.meta30693;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30693","meta30693",418131231,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30692";

cljs.core.async.t_cljs$core$async30692.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async30692");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30692 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30692(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30693){
return (new cljs.core.async.t_cljs$core$async30692(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30693));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30692(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29094__auto___30857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___30857,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___30857,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30794){
var state_val_30795 = (state_30794[(1)]);
if((state_val_30795 === (7))){
var inst_30710 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30796_30858 = state_30794__$1;
(statearr_30796_30858[(2)] = inst_30710);

(statearr_30796_30858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (20))){
var inst_30722 = (state_30794[(7)]);
var state_30794__$1 = state_30794;
var statearr_30797_30859 = state_30794__$1;
(statearr_30797_30859[(2)] = inst_30722);

(statearr_30797_30859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (27))){
var state_30794__$1 = state_30794;
var statearr_30798_30860 = state_30794__$1;
(statearr_30798_30860[(2)] = null);

(statearr_30798_30860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (1))){
var inst_30698 = (state_30794[(8)]);
var inst_30698__$1 = calc_state.call(null);
var inst_30700 = (inst_30698__$1 == null);
var inst_30701 = cljs.core.not.call(null,inst_30700);
var state_30794__$1 = (function (){var statearr_30799 = state_30794;
(statearr_30799[(8)] = inst_30698__$1);

return statearr_30799;
})();
if(inst_30701){
var statearr_30800_30861 = state_30794__$1;
(statearr_30800_30861[(1)] = (2));

} else {
var statearr_30801_30862 = state_30794__$1;
(statearr_30801_30862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (24))){
var inst_30745 = (state_30794[(9)]);
var inst_30754 = (state_30794[(10)]);
var inst_30768 = (state_30794[(11)]);
var inst_30768__$1 = inst_30745.call(null,inst_30754);
var state_30794__$1 = (function (){var statearr_30802 = state_30794;
(statearr_30802[(11)] = inst_30768__$1);

return statearr_30802;
})();
if(cljs.core.truth_(inst_30768__$1)){
var statearr_30803_30863 = state_30794__$1;
(statearr_30803_30863[(1)] = (29));

} else {
var statearr_30804_30864 = state_30794__$1;
(statearr_30804_30864[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (4))){
var inst_30713 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30713)){
var statearr_30805_30865 = state_30794__$1;
(statearr_30805_30865[(1)] = (8));

} else {
var statearr_30806_30866 = state_30794__$1;
(statearr_30806_30866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (15))){
var inst_30739 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30739)){
var statearr_30807_30867 = state_30794__$1;
(statearr_30807_30867[(1)] = (19));

} else {
var statearr_30808_30868 = state_30794__$1;
(statearr_30808_30868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (21))){
var inst_30744 = (state_30794[(12)]);
var inst_30744__$1 = (state_30794[(2)]);
var inst_30745 = cljs.core.get.call(null,inst_30744__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30746 = cljs.core.get.call(null,inst_30744__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30747 = cljs.core.get.call(null,inst_30744__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30794__$1 = (function (){var statearr_30809 = state_30794;
(statearr_30809[(13)] = inst_30746);

(statearr_30809[(9)] = inst_30745);

(statearr_30809[(12)] = inst_30744__$1);

return statearr_30809;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30794__$1,(22),inst_30747);
} else {
if((state_val_30795 === (31))){
var inst_30776 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30776)){
var statearr_30810_30869 = state_30794__$1;
(statearr_30810_30869[(1)] = (32));

} else {
var statearr_30811_30870 = state_30794__$1;
(statearr_30811_30870[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (32))){
var inst_30753 = (state_30794[(14)]);
var state_30794__$1 = state_30794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30794__$1,(35),out,inst_30753);
} else {
if((state_val_30795 === (33))){
var inst_30744 = (state_30794[(12)]);
var inst_30722 = inst_30744;
var state_30794__$1 = (function (){var statearr_30812 = state_30794;
(statearr_30812[(7)] = inst_30722);

return statearr_30812;
})();
var statearr_30813_30871 = state_30794__$1;
(statearr_30813_30871[(2)] = null);

(statearr_30813_30871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (13))){
var inst_30722 = (state_30794[(7)]);
var inst_30729 = inst_30722.cljs$lang$protocol_mask$partition0$;
var inst_30730 = (inst_30729 & (64));
var inst_30731 = inst_30722.cljs$core$ISeq$;
var inst_30732 = (inst_30730) || (inst_30731);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30732)){
var statearr_30814_30872 = state_30794__$1;
(statearr_30814_30872[(1)] = (16));

} else {
var statearr_30815_30873 = state_30794__$1;
(statearr_30815_30873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (22))){
var inst_30753 = (state_30794[(14)]);
var inst_30754 = (state_30794[(10)]);
var inst_30752 = (state_30794[(2)]);
var inst_30753__$1 = cljs.core.nth.call(null,inst_30752,(0),null);
var inst_30754__$1 = cljs.core.nth.call(null,inst_30752,(1),null);
var inst_30755 = (inst_30753__$1 == null);
var inst_30756 = cljs.core._EQ_.call(null,inst_30754__$1,change);
var inst_30757 = (inst_30755) || (inst_30756);
var state_30794__$1 = (function (){var statearr_30816 = state_30794;
(statearr_30816[(14)] = inst_30753__$1);

(statearr_30816[(10)] = inst_30754__$1);

return statearr_30816;
})();
if(cljs.core.truth_(inst_30757)){
var statearr_30817_30874 = state_30794__$1;
(statearr_30817_30874[(1)] = (23));

} else {
var statearr_30818_30875 = state_30794__$1;
(statearr_30818_30875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (36))){
var inst_30744 = (state_30794[(12)]);
var inst_30722 = inst_30744;
var state_30794__$1 = (function (){var statearr_30819 = state_30794;
(statearr_30819[(7)] = inst_30722);

return statearr_30819;
})();
var statearr_30820_30876 = state_30794__$1;
(statearr_30820_30876[(2)] = null);

(statearr_30820_30876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (29))){
var inst_30768 = (state_30794[(11)]);
var state_30794__$1 = state_30794;
var statearr_30821_30877 = state_30794__$1;
(statearr_30821_30877[(2)] = inst_30768);

(statearr_30821_30877[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (6))){
var state_30794__$1 = state_30794;
var statearr_30822_30878 = state_30794__$1;
(statearr_30822_30878[(2)] = false);

(statearr_30822_30878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (28))){
var inst_30764 = (state_30794[(2)]);
var inst_30765 = calc_state.call(null);
var inst_30722 = inst_30765;
var state_30794__$1 = (function (){var statearr_30823 = state_30794;
(statearr_30823[(7)] = inst_30722);

(statearr_30823[(15)] = inst_30764);

return statearr_30823;
})();
var statearr_30824_30879 = state_30794__$1;
(statearr_30824_30879[(2)] = null);

(statearr_30824_30879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (25))){
var inst_30790 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30825_30880 = state_30794__$1;
(statearr_30825_30880[(2)] = inst_30790);

(statearr_30825_30880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (34))){
var inst_30788 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30826_30881 = state_30794__$1;
(statearr_30826_30881[(2)] = inst_30788);

(statearr_30826_30881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (17))){
var state_30794__$1 = state_30794;
var statearr_30827_30882 = state_30794__$1;
(statearr_30827_30882[(2)] = false);

(statearr_30827_30882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (3))){
var state_30794__$1 = state_30794;
var statearr_30828_30883 = state_30794__$1;
(statearr_30828_30883[(2)] = false);

(statearr_30828_30883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (12))){
var inst_30792 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30794__$1,inst_30792);
} else {
if((state_val_30795 === (2))){
var inst_30698 = (state_30794[(8)]);
var inst_30703 = inst_30698.cljs$lang$protocol_mask$partition0$;
var inst_30704 = (inst_30703 & (64));
var inst_30705 = inst_30698.cljs$core$ISeq$;
var inst_30706 = (inst_30704) || (inst_30705);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30706)){
var statearr_30829_30884 = state_30794__$1;
(statearr_30829_30884[(1)] = (5));

} else {
var statearr_30830_30885 = state_30794__$1;
(statearr_30830_30885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (23))){
var inst_30753 = (state_30794[(14)]);
var inst_30759 = (inst_30753 == null);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30759)){
var statearr_30831_30886 = state_30794__$1;
(statearr_30831_30886[(1)] = (26));

} else {
var statearr_30832_30887 = state_30794__$1;
(statearr_30832_30887[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (35))){
var inst_30779 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30779)){
var statearr_30833_30888 = state_30794__$1;
(statearr_30833_30888[(1)] = (36));

} else {
var statearr_30834_30889 = state_30794__$1;
(statearr_30834_30889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (19))){
var inst_30722 = (state_30794[(7)]);
var inst_30741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30722);
var state_30794__$1 = state_30794;
var statearr_30835_30890 = state_30794__$1;
(statearr_30835_30890[(2)] = inst_30741);

(statearr_30835_30890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (11))){
var inst_30722 = (state_30794[(7)]);
var inst_30726 = (inst_30722 == null);
var inst_30727 = cljs.core.not.call(null,inst_30726);
var state_30794__$1 = state_30794;
if(inst_30727){
var statearr_30836_30891 = state_30794__$1;
(statearr_30836_30891[(1)] = (13));

} else {
var statearr_30837_30892 = state_30794__$1;
(statearr_30837_30892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (9))){
var inst_30698 = (state_30794[(8)]);
var state_30794__$1 = state_30794;
var statearr_30838_30893 = state_30794__$1;
(statearr_30838_30893[(2)] = inst_30698);

(statearr_30838_30893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (5))){
var state_30794__$1 = state_30794;
var statearr_30839_30894 = state_30794__$1;
(statearr_30839_30894[(2)] = true);

(statearr_30839_30894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (14))){
var state_30794__$1 = state_30794;
var statearr_30840_30895 = state_30794__$1;
(statearr_30840_30895[(2)] = false);

(statearr_30840_30895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (26))){
var inst_30754 = (state_30794[(10)]);
var inst_30761 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30754);
var state_30794__$1 = state_30794;
var statearr_30841_30896 = state_30794__$1;
(statearr_30841_30896[(2)] = inst_30761);

(statearr_30841_30896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (16))){
var state_30794__$1 = state_30794;
var statearr_30842_30897 = state_30794__$1;
(statearr_30842_30897[(2)] = true);

(statearr_30842_30897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (38))){
var inst_30784 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30843_30898 = state_30794__$1;
(statearr_30843_30898[(2)] = inst_30784);

(statearr_30843_30898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (30))){
var inst_30746 = (state_30794[(13)]);
var inst_30745 = (state_30794[(9)]);
var inst_30754 = (state_30794[(10)]);
var inst_30771 = cljs.core.empty_QMARK_.call(null,inst_30745);
var inst_30772 = inst_30746.call(null,inst_30754);
var inst_30773 = cljs.core.not.call(null,inst_30772);
var inst_30774 = (inst_30771) && (inst_30773);
var state_30794__$1 = state_30794;
var statearr_30844_30899 = state_30794__$1;
(statearr_30844_30899[(2)] = inst_30774);

(statearr_30844_30899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (10))){
var inst_30698 = (state_30794[(8)]);
var inst_30718 = (state_30794[(2)]);
var inst_30719 = cljs.core.get.call(null,inst_30718,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30720 = cljs.core.get.call(null,inst_30718,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30721 = cljs.core.get.call(null,inst_30718,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30722 = inst_30698;
var state_30794__$1 = (function (){var statearr_30845 = state_30794;
(statearr_30845[(7)] = inst_30722);

(statearr_30845[(16)] = inst_30719);

(statearr_30845[(17)] = inst_30721);

(statearr_30845[(18)] = inst_30720);

return statearr_30845;
})();
var statearr_30846_30900 = state_30794__$1;
(statearr_30846_30900[(2)] = null);

(statearr_30846_30900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (18))){
var inst_30736 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30847_30901 = state_30794__$1;
(statearr_30847_30901[(2)] = inst_30736);

(statearr_30847_30901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (37))){
var state_30794__$1 = state_30794;
var statearr_30848_30902 = state_30794__$1;
(statearr_30848_30902[(2)] = null);

(statearr_30848_30902[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (8))){
var inst_30698 = (state_30794[(8)]);
var inst_30715 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30698);
var state_30794__$1 = state_30794;
var statearr_30849_30903 = state_30794__$1;
(statearr_30849_30903[(2)] = inst_30715);

(statearr_30849_30903[(1)] = (10));


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
}
}
}
}
}
}
});})(c__29094__auto___30857,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28982__auto__,c__29094__auto___30857,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28983__auto__ = null;
var cljs$core$async$mix_$_state_machine__28983__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30853[(0)] = cljs$core$async$mix_$_state_machine__28983__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var cljs$core$async$mix_$_state_machine__28983__auto____1 = (function (state_30794){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_30794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e30854){if((e30854 instanceof Object)){
var ex__28986__auto__ = e30854;
var statearr_30855_30904 = state_30794;
(statearr_30855_30904[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30905 = state_30794;
state_30794 = G__30905;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28983__auto__ = function(state_30794){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28983__auto____1.call(this,state_30794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28983__auto____0;
cljs$core$async$mix_$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28983__auto____1;
return cljs$core$async$mix_$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___30857,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29096__auto__ = (function (){var statearr_30856 = f__29095__auto__.call(null);
(statearr_30856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___30857);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___30857,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27585__auto__ = (((p == null))?null:p);
var m__27586__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27586__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27585__auto__ = (((p == null))?null:p);
var m__27586__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,p,v,ch);
} else {
var m__27586__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30906 = [];
var len__27997__auto___30909 = arguments.length;
var i__27998__auto___30910 = (0);
while(true){
if((i__27998__auto___30910 < len__27997__auto___30909)){
args30906.push((arguments[i__27998__auto___30910]));

var G__30911 = (i__27998__auto___30910 + (1));
i__27998__auto___30910 = G__30911;
continue;
} else {
}
break;
}

var G__30908 = args30906.length;
switch (G__30908) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30906.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27585__auto__ = (((p == null))?null:p);
var m__27586__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,p);
} else {
var m__27586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27585__auto__ = (((p == null))?null:p);
var m__27586__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27585__auto__)]);
if(!((m__27586__auto__ == null))){
return m__27586__auto__.call(null,p,v);
} else {
var m__27586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27586__auto____$1 == null))){
return m__27586__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30914 = [];
var len__27997__auto___31039 = arguments.length;
var i__27998__auto___31040 = (0);
while(true){
if((i__27998__auto___31040 < len__27997__auto___31039)){
args30914.push((arguments[i__27998__auto___31040]));

var G__31041 = (i__27998__auto___31040 + (1));
i__27998__auto___31040 = G__31041;
continue;
} else {
}
break;
}

var G__30916 = args30914.length;
switch (G__30916) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30914.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26922__auto__)){
return or__26922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26922__auto__,mults){
return (function (p1__30913_SHARP_){
if(cljs.core.truth_(p1__30913_SHARP_.call(null,topic))){
return p1__30913_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30913_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30917 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30918){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30918 = meta30918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30919,meta30918__$1){
var self__ = this;
var _30919__$1 = this;
return (new cljs.core.async.t_cljs$core$async30917(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30918__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30919){
var self__ = this;
var _30919__$1 = this;
return self__.meta30918;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30918","meta30918",1692157542,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30917";

cljs.core.async.t_cljs$core$async30917.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async30917");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30917 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30917(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30918){
return (new cljs.core.async.t_cljs$core$async30917(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30918));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30917(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29094__auto___31043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31043,mults,ensure_mult,p){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31043,mults,ensure_mult,p){
return (function (state_30991){
var state_val_30992 = (state_30991[(1)]);
if((state_val_30992 === (7))){
var inst_30987 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_30993_31044 = state_30991__$1;
(statearr_30993_31044[(2)] = inst_30987);

(statearr_30993_31044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (20))){
var state_30991__$1 = state_30991;
var statearr_30994_31045 = state_30991__$1;
(statearr_30994_31045[(2)] = null);

(statearr_30994_31045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (1))){
var state_30991__$1 = state_30991;
var statearr_30995_31046 = state_30991__$1;
(statearr_30995_31046[(2)] = null);

(statearr_30995_31046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (24))){
var inst_30970 = (state_30991[(7)]);
var inst_30979 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30970);
var state_30991__$1 = state_30991;
var statearr_30996_31047 = state_30991__$1;
(statearr_30996_31047[(2)] = inst_30979);

(statearr_30996_31047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (4))){
var inst_30922 = (state_30991[(8)]);
var inst_30922__$1 = (state_30991[(2)]);
var inst_30923 = (inst_30922__$1 == null);
var state_30991__$1 = (function (){var statearr_30997 = state_30991;
(statearr_30997[(8)] = inst_30922__$1);

return statearr_30997;
})();
if(cljs.core.truth_(inst_30923)){
var statearr_30998_31048 = state_30991__$1;
(statearr_30998_31048[(1)] = (5));

} else {
var statearr_30999_31049 = state_30991__$1;
(statearr_30999_31049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (15))){
var inst_30964 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31000_31050 = state_30991__$1;
(statearr_31000_31050[(2)] = inst_30964);

(statearr_31000_31050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (21))){
var inst_30984 = (state_30991[(2)]);
var state_30991__$1 = (function (){var statearr_31001 = state_30991;
(statearr_31001[(9)] = inst_30984);

return statearr_31001;
})();
var statearr_31002_31051 = state_30991__$1;
(statearr_31002_31051[(2)] = null);

(statearr_31002_31051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (13))){
var inst_30946 = (state_30991[(10)]);
var inst_30948 = cljs.core.chunked_seq_QMARK_.call(null,inst_30946);
var state_30991__$1 = state_30991;
if(inst_30948){
var statearr_31003_31052 = state_30991__$1;
(statearr_31003_31052[(1)] = (16));

} else {
var statearr_31004_31053 = state_30991__$1;
(statearr_31004_31053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (22))){
var inst_30976 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
if(cljs.core.truth_(inst_30976)){
var statearr_31005_31054 = state_30991__$1;
(statearr_31005_31054[(1)] = (23));

} else {
var statearr_31006_31055 = state_30991__$1;
(statearr_31006_31055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (6))){
var inst_30922 = (state_30991[(8)]);
var inst_30972 = (state_30991[(11)]);
var inst_30970 = (state_30991[(7)]);
var inst_30970__$1 = topic_fn.call(null,inst_30922);
var inst_30971 = cljs.core.deref.call(null,mults);
var inst_30972__$1 = cljs.core.get.call(null,inst_30971,inst_30970__$1);
var state_30991__$1 = (function (){var statearr_31007 = state_30991;
(statearr_31007[(11)] = inst_30972__$1);

(statearr_31007[(7)] = inst_30970__$1);

return statearr_31007;
})();
if(cljs.core.truth_(inst_30972__$1)){
var statearr_31008_31056 = state_30991__$1;
(statearr_31008_31056[(1)] = (19));

} else {
var statearr_31009_31057 = state_30991__$1;
(statearr_31009_31057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (25))){
var inst_30981 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31010_31058 = state_30991__$1;
(statearr_31010_31058[(2)] = inst_30981);

(statearr_31010_31058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (17))){
var inst_30946 = (state_30991[(10)]);
var inst_30955 = cljs.core.first.call(null,inst_30946);
var inst_30956 = cljs.core.async.muxch_STAR_.call(null,inst_30955);
var inst_30957 = cljs.core.async.close_BANG_.call(null,inst_30956);
var inst_30958 = cljs.core.next.call(null,inst_30946);
var inst_30932 = inst_30958;
var inst_30933 = null;
var inst_30934 = (0);
var inst_30935 = (0);
var state_30991__$1 = (function (){var statearr_31011 = state_30991;
(statearr_31011[(12)] = inst_30934);

(statearr_31011[(13)] = inst_30933);

(statearr_31011[(14)] = inst_30957);

(statearr_31011[(15)] = inst_30935);

(statearr_31011[(16)] = inst_30932);

return statearr_31011;
})();
var statearr_31012_31059 = state_30991__$1;
(statearr_31012_31059[(2)] = null);

(statearr_31012_31059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (3))){
var inst_30989 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30991__$1,inst_30989);
} else {
if((state_val_30992 === (12))){
var inst_30966 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31013_31060 = state_30991__$1;
(statearr_31013_31060[(2)] = inst_30966);

(statearr_31013_31060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (2))){
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30991__$1,(4),ch);
} else {
if((state_val_30992 === (23))){
var state_30991__$1 = state_30991;
var statearr_31014_31061 = state_30991__$1;
(statearr_31014_31061[(2)] = null);

(statearr_31014_31061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (19))){
var inst_30922 = (state_30991[(8)]);
var inst_30972 = (state_30991[(11)]);
var inst_30974 = cljs.core.async.muxch_STAR_.call(null,inst_30972);
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30991__$1,(22),inst_30974,inst_30922);
} else {
if((state_val_30992 === (11))){
var inst_30946 = (state_30991[(10)]);
var inst_30932 = (state_30991[(16)]);
var inst_30946__$1 = cljs.core.seq.call(null,inst_30932);
var state_30991__$1 = (function (){var statearr_31015 = state_30991;
(statearr_31015[(10)] = inst_30946__$1);

return statearr_31015;
})();
if(inst_30946__$1){
var statearr_31016_31062 = state_30991__$1;
(statearr_31016_31062[(1)] = (13));

} else {
var statearr_31017_31063 = state_30991__$1;
(statearr_31017_31063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (9))){
var inst_30968 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31018_31064 = state_30991__$1;
(statearr_31018_31064[(2)] = inst_30968);

(statearr_31018_31064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (5))){
var inst_30929 = cljs.core.deref.call(null,mults);
var inst_30930 = cljs.core.vals.call(null,inst_30929);
var inst_30931 = cljs.core.seq.call(null,inst_30930);
var inst_30932 = inst_30931;
var inst_30933 = null;
var inst_30934 = (0);
var inst_30935 = (0);
var state_30991__$1 = (function (){var statearr_31019 = state_30991;
(statearr_31019[(12)] = inst_30934);

(statearr_31019[(13)] = inst_30933);

(statearr_31019[(15)] = inst_30935);

(statearr_31019[(16)] = inst_30932);

return statearr_31019;
})();
var statearr_31020_31065 = state_30991__$1;
(statearr_31020_31065[(2)] = null);

(statearr_31020_31065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (14))){
var state_30991__$1 = state_30991;
var statearr_31024_31066 = state_30991__$1;
(statearr_31024_31066[(2)] = null);

(statearr_31024_31066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (16))){
var inst_30946 = (state_30991[(10)]);
var inst_30950 = cljs.core.chunk_first.call(null,inst_30946);
var inst_30951 = cljs.core.chunk_rest.call(null,inst_30946);
var inst_30952 = cljs.core.count.call(null,inst_30950);
var inst_30932 = inst_30951;
var inst_30933 = inst_30950;
var inst_30934 = inst_30952;
var inst_30935 = (0);
var state_30991__$1 = (function (){var statearr_31025 = state_30991;
(statearr_31025[(12)] = inst_30934);

(statearr_31025[(13)] = inst_30933);

(statearr_31025[(15)] = inst_30935);

(statearr_31025[(16)] = inst_30932);

return statearr_31025;
})();
var statearr_31026_31067 = state_30991__$1;
(statearr_31026_31067[(2)] = null);

(statearr_31026_31067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (10))){
var inst_30934 = (state_30991[(12)]);
var inst_30933 = (state_30991[(13)]);
var inst_30935 = (state_30991[(15)]);
var inst_30932 = (state_30991[(16)]);
var inst_30940 = cljs.core._nth.call(null,inst_30933,inst_30935);
var inst_30941 = cljs.core.async.muxch_STAR_.call(null,inst_30940);
var inst_30942 = cljs.core.async.close_BANG_.call(null,inst_30941);
var inst_30943 = (inst_30935 + (1));
var tmp31021 = inst_30934;
var tmp31022 = inst_30933;
var tmp31023 = inst_30932;
var inst_30932__$1 = tmp31023;
var inst_30933__$1 = tmp31022;
var inst_30934__$1 = tmp31021;
var inst_30935__$1 = inst_30943;
var state_30991__$1 = (function (){var statearr_31027 = state_30991;
(statearr_31027[(12)] = inst_30934__$1);

(statearr_31027[(13)] = inst_30933__$1);

(statearr_31027[(17)] = inst_30942);

(statearr_31027[(15)] = inst_30935__$1);

(statearr_31027[(16)] = inst_30932__$1);

return statearr_31027;
})();
var statearr_31028_31068 = state_30991__$1;
(statearr_31028_31068[(2)] = null);

(statearr_31028_31068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (18))){
var inst_30961 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
var statearr_31029_31069 = state_30991__$1;
(statearr_31029_31069[(2)] = inst_30961);

(statearr_31029_31069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30992 === (8))){
var inst_30934 = (state_30991[(12)]);
var inst_30935 = (state_30991[(15)]);
var inst_30937 = (inst_30935 < inst_30934);
var inst_30938 = inst_30937;
var state_30991__$1 = state_30991;
if(cljs.core.truth_(inst_30938)){
var statearr_31030_31070 = state_30991__$1;
(statearr_31030_31070[(1)] = (10));

} else {
var statearr_31031_31071 = state_30991__$1;
(statearr_31031_31071[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__29094__auto___31043,mults,ensure_mult,p))
;
return ((function (switch__28982__auto__,c__29094__auto___31043,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31035[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31035[(1)] = (1));

return statearr_31035;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_30991){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_30991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31036){if((e31036 instanceof Object)){
var ex__28986__auto__ = e31036;
var statearr_31037_31072 = state_30991;
(statearr_31037_31072[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31073 = state_30991;
state_30991 = G__31073;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_30991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_30991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31043,mults,ensure_mult,p))
})();
var state__29096__auto__ = (function (){var statearr_31038 = f__29095__auto__.call(null);
(statearr_31038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31043);

return statearr_31038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31043,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31074 = [];
var len__27997__auto___31077 = arguments.length;
var i__27998__auto___31078 = (0);
while(true){
if((i__27998__auto___31078 < len__27997__auto___31077)){
args31074.push((arguments[i__27998__auto___31078]));

var G__31079 = (i__27998__auto___31078 + (1));
i__27998__auto___31078 = G__31079;
continue;
} else {
}
break;
}

var G__31076 = args31074.length;
switch (G__31076) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31074.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31081 = [];
var len__27997__auto___31084 = arguments.length;
var i__27998__auto___31085 = (0);
while(true){
if((i__27998__auto___31085 < len__27997__auto___31084)){
args31081.push((arguments[i__27998__auto___31085]));

var G__31086 = (i__27998__auto___31085 + (1));
i__27998__auto___31085 = G__31086;
continue;
} else {
}
break;
}

var G__31083 = args31081.length;
switch (G__31083) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31081.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31088 = [];
var len__27997__auto___31159 = arguments.length;
var i__27998__auto___31160 = (0);
while(true){
if((i__27998__auto___31160 < len__27997__auto___31159)){
args31088.push((arguments[i__27998__auto___31160]));

var G__31161 = (i__27998__auto___31160 + (1));
i__27998__auto___31160 = G__31161;
continue;
} else {
}
break;
}

var G__31090 = args31088.length;
switch (G__31090) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31088.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29094__auto___31163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31163,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31163,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (7))){
var state_31129__$1 = state_31129;
var statearr_31131_31164 = state_31129__$1;
(statearr_31131_31164[(2)] = null);

(statearr_31131_31164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
var statearr_31132_31165 = state_31129__$1;
(statearr_31132_31165[(2)] = null);

(statearr_31132_31165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (4))){
var inst_31093 = (state_31129[(7)]);
var inst_31095 = (inst_31093 < cnt);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31095)){
var statearr_31133_31166 = state_31129__$1;
(statearr_31133_31166[(1)] = (6));

} else {
var statearr_31134_31167 = state_31129__$1;
(statearr_31134_31167[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (15))){
var inst_31125 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31135_31168 = state_31129__$1;
(statearr_31135_31168[(2)] = inst_31125);

(statearr_31135_31168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (13))){
var inst_31118 = cljs.core.async.close_BANG_.call(null,out);
var state_31129__$1 = state_31129;
var statearr_31136_31169 = state_31129__$1;
(statearr_31136_31169[(2)] = inst_31118);

(statearr_31136_31169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var state_31129__$1 = state_31129;
var statearr_31137_31170 = state_31129__$1;
(statearr_31137_31170[(2)] = null);

(statearr_31137_31170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (3))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (12))){
var inst_31115 = (state_31129[(8)]);
var inst_31115__$1 = (state_31129[(2)]);
var inst_31116 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31115__$1);
var state_31129__$1 = (function (){var statearr_31138 = state_31129;
(statearr_31138[(8)] = inst_31115__$1);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31116)){
var statearr_31139_31171 = state_31129__$1;
(statearr_31139_31171[(1)] = (13));

} else {
var statearr_31140_31172 = state_31129__$1;
(statearr_31140_31172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (2))){
var inst_31092 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31093 = (0);
var state_31129__$1 = (function (){var statearr_31141 = state_31129;
(statearr_31141[(9)] = inst_31092);

(statearr_31141[(7)] = inst_31093);

return statearr_31141;
})();
var statearr_31142_31173 = state_31129__$1;
(statearr_31142_31173[(2)] = null);

(statearr_31142_31173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (11))){
var inst_31093 = (state_31129[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31129,(10),Object,null,(9));
var inst_31102 = chs__$1.call(null,inst_31093);
var inst_31103 = done.call(null,inst_31093);
var inst_31104 = cljs.core.async.take_BANG_.call(null,inst_31102,inst_31103);
var state_31129__$1 = state_31129;
var statearr_31143_31174 = state_31129__$1;
(statearr_31143_31174[(2)] = inst_31104);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (9))){
var inst_31093 = (state_31129[(7)]);
var inst_31106 = (state_31129[(2)]);
var inst_31107 = (inst_31093 + (1));
var inst_31093__$1 = inst_31107;
var state_31129__$1 = (function (){var statearr_31144 = state_31129;
(statearr_31144[(7)] = inst_31093__$1);

(statearr_31144[(10)] = inst_31106);

return statearr_31144;
})();
var statearr_31145_31175 = state_31129__$1;
(statearr_31145_31175[(2)] = null);

(statearr_31145_31175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var inst_31113 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31146 = state_31129;
(statearr_31146[(11)] = inst_31113);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(12),dchan);
} else {
if((state_val_31130 === (14))){
var inst_31115 = (state_31129[(8)]);
var inst_31120 = cljs.core.apply.call(null,f,inst_31115);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31129__$1,(16),out,inst_31120);
} else {
if((state_val_31130 === (16))){
var inst_31122 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31147 = state_31129;
(statearr_31147[(12)] = inst_31122);

return statearr_31147;
})();
var statearr_31148_31176 = state_31129__$1;
(statearr_31148_31176[(2)] = null);

(statearr_31148_31176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (10))){
var inst_31097 = (state_31129[(2)]);
var inst_31098 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31129__$1 = (function (){var statearr_31149 = state_31129;
(statearr_31149[(13)] = inst_31097);

return statearr_31149;
})();
var statearr_31150_31177 = state_31129__$1;
(statearr_31150_31177[(2)] = inst_31098);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (8))){
var inst_31111 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31151_31178 = state_31129__$1;
(statearr_31151_31178[(2)] = inst_31111);

(statearr_31151_31178[(1)] = (5));


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
});})(c__29094__auto___31163,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28982__auto__,c__29094__auto___31163,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31155[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31155[(1)] = (1));

return statearr_31155;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31129){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31156){if((e31156 instanceof Object)){
var ex__28986__auto__ = e31156;
var statearr_31157_31179 = state_31129;
(statearr_31157_31179[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31180 = state_31129;
state_31129 = G__31180;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31163,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29096__auto__ = (function (){var statearr_31158 = f__29095__auto__.call(null);
(statearr_31158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31163);

return statearr_31158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31163,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31182 = [];
var len__27997__auto___31240 = arguments.length;
var i__27998__auto___31241 = (0);
while(true){
if((i__27998__auto___31241 < len__27997__auto___31240)){
args31182.push((arguments[i__27998__auto___31241]));

var G__31242 = (i__27998__auto___31241 + (1));
i__27998__auto___31241 = G__31242;
continue;
} else {
}
break;
}

var G__31184 = args31182.length;
switch (G__31184) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31182.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29094__auto___31244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31244,out){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31244,out){
return (function (state_31216){
var state_val_31217 = (state_31216[(1)]);
if((state_val_31217 === (7))){
var inst_31195 = (state_31216[(7)]);
var inst_31196 = (state_31216[(8)]);
var inst_31195__$1 = (state_31216[(2)]);
var inst_31196__$1 = cljs.core.nth.call(null,inst_31195__$1,(0),null);
var inst_31197 = cljs.core.nth.call(null,inst_31195__$1,(1),null);
var inst_31198 = (inst_31196__$1 == null);
var state_31216__$1 = (function (){var statearr_31218 = state_31216;
(statearr_31218[(7)] = inst_31195__$1);

(statearr_31218[(9)] = inst_31197);

(statearr_31218[(8)] = inst_31196__$1);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31198)){
var statearr_31219_31245 = state_31216__$1;
(statearr_31219_31245[(1)] = (8));

} else {
var statearr_31220_31246 = state_31216__$1;
(statearr_31220_31246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (1))){
var inst_31185 = cljs.core.vec.call(null,chs);
var inst_31186 = inst_31185;
var state_31216__$1 = (function (){var statearr_31221 = state_31216;
(statearr_31221[(10)] = inst_31186);

return statearr_31221;
})();
var statearr_31222_31247 = state_31216__$1;
(statearr_31222_31247[(2)] = null);

(statearr_31222_31247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (4))){
var inst_31186 = (state_31216[(10)]);
var state_31216__$1 = state_31216;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31216__$1,(7),inst_31186);
} else {
if((state_val_31217 === (6))){
var inst_31212 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31223_31248 = state_31216__$1;
(statearr_31223_31248[(2)] = inst_31212);

(statearr_31223_31248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (3))){
var inst_31214 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31216__$1,inst_31214);
} else {
if((state_val_31217 === (2))){
var inst_31186 = (state_31216[(10)]);
var inst_31188 = cljs.core.count.call(null,inst_31186);
var inst_31189 = (inst_31188 > (0));
var state_31216__$1 = state_31216;
if(cljs.core.truth_(inst_31189)){
var statearr_31225_31249 = state_31216__$1;
(statearr_31225_31249[(1)] = (4));

} else {
var statearr_31226_31250 = state_31216__$1;
(statearr_31226_31250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (11))){
var inst_31186 = (state_31216[(10)]);
var inst_31205 = (state_31216[(2)]);
var tmp31224 = inst_31186;
var inst_31186__$1 = tmp31224;
var state_31216__$1 = (function (){var statearr_31227 = state_31216;
(statearr_31227[(10)] = inst_31186__$1);

(statearr_31227[(11)] = inst_31205);

return statearr_31227;
})();
var statearr_31228_31251 = state_31216__$1;
(statearr_31228_31251[(2)] = null);

(statearr_31228_31251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (9))){
var inst_31196 = (state_31216[(8)]);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31216__$1,(11),out,inst_31196);
} else {
if((state_val_31217 === (5))){
var inst_31210 = cljs.core.async.close_BANG_.call(null,out);
var state_31216__$1 = state_31216;
var statearr_31229_31252 = state_31216__$1;
(statearr_31229_31252[(2)] = inst_31210);

(statearr_31229_31252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (10))){
var inst_31208 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31230_31253 = state_31216__$1;
(statearr_31230_31253[(2)] = inst_31208);

(statearr_31230_31253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (8))){
var inst_31195 = (state_31216[(7)]);
var inst_31197 = (state_31216[(9)]);
var inst_31186 = (state_31216[(10)]);
var inst_31196 = (state_31216[(8)]);
var inst_31200 = (function (){var cs = inst_31186;
var vec__31191 = inst_31195;
var v = inst_31196;
var c = inst_31197;
return ((function (cs,vec__31191,v,c,inst_31195,inst_31197,inst_31186,inst_31196,state_val_31217,c__29094__auto___31244,out){
return (function (p1__31181_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31181_SHARP_);
});
;})(cs,vec__31191,v,c,inst_31195,inst_31197,inst_31186,inst_31196,state_val_31217,c__29094__auto___31244,out))
})();
var inst_31201 = cljs.core.filterv.call(null,inst_31200,inst_31186);
var inst_31186__$1 = inst_31201;
var state_31216__$1 = (function (){var statearr_31231 = state_31216;
(statearr_31231[(10)] = inst_31186__$1);

return statearr_31231;
})();
var statearr_31232_31254 = state_31216__$1;
(statearr_31232_31254[(2)] = null);

(statearr_31232_31254[(1)] = (2));


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
});})(c__29094__auto___31244,out))
;
return ((function (switch__28982__auto__,c__29094__auto___31244,out){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31236[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31236[(1)] = (1));

return statearr_31236;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31216){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31237){if((e31237 instanceof Object)){
var ex__28986__auto__ = e31237;
var statearr_31238_31255 = state_31216;
(statearr_31238_31255[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31256 = state_31216;
state_31216 = G__31256;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31244,out))
})();
var state__29096__auto__ = (function (){var statearr_31239 = f__29095__auto__.call(null);
(statearr_31239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31244);

return statearr_31239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31244,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31257 = [];
var len__27997__auto___31306 = arguments.length;
var i__27998__auto___31307 = (0);
while(true){
if((i__27998__auto___31307 < len__27997__auto___31306)){
args31257.push((arguments[i__27998__auto___31307]));

var G__31308 = (i__27998__auto___31307 + (1));
i__27998__auto___31307 = G__31308;
continue;
} else {
}
break;
}

var G__31259 = args31257.length;
switch (G__31259) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31257.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29094__auto___31310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31310,out){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31310,out){
return (function (state_31283){
var state_val_31284 = (state_31283[(1)]);
if((state_val_31284 === (7))){
var inst_31265 = (state_31283[(7)]);
var inst_31265__$1 = (state_31283[(2)]);
var inst_31266 = (inst_31265__$1 == null);
var inst_31267 = cljs.core.not.call(null,inst_31266);
var state_31283__$1 = (function (){var statearr_31285 = state_31283;
(statearr_31285[(7)] = inst_31265__$1);

return statearr_31285;
})();
if(inst_31267){
var statearr_31286_31311 = state_31283__$1;
(statearr_31286_31311[(1)] = (8));

} else {
var statearr_31287_31312 = state_31283__$1;
(statearr_31287_31312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (1))){
var inst_31260 = (0);
var state_31283__$1 = (function (){var statearr_31288 = state_31283;
(statearr_31288[(8)] = inst_31260);

return statearr_31288;
})();
var statearr_31289_31313 = state_31283__$1;
(statearr_31289_31313[(2)] = null);

(statearr_31289_31313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (4))){
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31283__$1,(7),ch);
} else {
if((state_val_31284 === (6))){
var inst_31278 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31290_31314 = state_31283__$1;
(statearr_31290_31314[(2)] = inst_31278);

(statearr_31290_31314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (3))){
var inst_31280 = (state_31283[(2)]);
var inst_31281 = cljs.core.async.close_BANG_.call(null,out);
var state_31283__$1 = (function (){var statearr_31291 = state_31283;
(statearr_31291[(9)] = inst_31280);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31283__$1,inst_31281);
} else {
if((state_val_31284 === (2))){
var inst_31260 = (state_31283[(8)]);
var inst_31262 = (inst_31260 < n);
var state_31283__$1 = state_31283;
if(cljs.core.truth_(inst_31262)){
var statearr_31292_31315 = state_31283__$1;
(statearr_31292_31315[(1)] = (4));

} else {
var statearr_31293_31316 = state_31283__$1;
(statearr_31293_31316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (11))){
var inst_31260 = (state_31283[(8)]);
var inst_31270 = (state_31283[(2)]);
var inst_31271 = (inst_31260 + (1));
var inst_31260__$1 = inst_31271;
var state_31283__$1 = (function (){var statearr_31294 = state_31283;
(statearr_31294[(10)] = inst_31270);

(statearr_31294[(8)] = inst_31260__$1);

return statearr_31294;
})();
var statearr_31295_31317 = state_31283__$1;
(statearr_31295_31317[(2)] = null);

(statearr_31295_31317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (9))){
var state_31283__$1 = state_31283;
var statearr_31296_31318 = state_31283__$1;
(statearr_31296_31318[(2)] = null);

(statearr_31296_31318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (5))){
var state_31283__$1 = state_31283;
var statearr_31297_31319 = state_31283__$1;
(statearr_31297_31319[(2)] = null);

(statearr_31297_31319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (10))){
var inst_31275 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31298_31320 = state_31283__$1;
(statearr_31298_31320[(2)] = inst_31275);

(statearr_31298_31320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (8))){
var inst_31265 = (state_31283[(7)]);
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31283__$1,(11),out,inst_31265);
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
});})(c__29094__auto___31310,out))
;
return ((function (switch__28982__auto__,c__29094__auto___31310,out){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31302[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31302[(1)] = (1));

return statearr_31302;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31283){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31303){if((e31303 instanceof Object)){
var ex__28986__auto__ = e31303;
var statearr_31304_31321 = state_31283;
(statearr_31304_31321[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31322 = state_31283;
state_31283 = G__31322;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31310,out))
})();
var state__29096__auto__ = (function (){var statearr_31305 = f__29095__auto__.call(null);
(statearr_31305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31310);

return statearr_31305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31310,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31330 = (function (map_LT_,f,ch,meta31331){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31331 = meta31331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31332,meta31331__$1){
var self__ = this;
var _31332__$1 = this;
return (new cljs.core.async.t_cljs$core$async31330(self__.map_LT_,self__.f,self__.ch,meta31331__$1));
});

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31332){
var self__ = this;
var _31332__$1 = this;
return self__.meta31331;
});

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31333 = (function (map_LT_,f,ch,meta31331,_,fn1,meta31334){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31331 = meta31331;
this._ = _;
this.fn1 = fn1;
this.meta31334 = meta31334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31335,meta31334__$1){
var self__ = this;
var _31335__$1 = this;
return (new cljs.core.async.t_cljs$core$async31333(self__.map_LT_,self__.f,self__.ch,self__.meta31331,self__._,self__.fn1,meta31334__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31335){
var self__ = this;
var _31335__$1 = this;
return self__.meta31334;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31323_SHARP_){
return f1.call(null,(((p1__31323_SHARP_ == null))?null:self__.f.call(null,p1__31323_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31333.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31331","meta31331",1574058829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31330","cljs.core.async/t_cljs$core$async31330",521953949,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31334","meta31334",856849591,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31333";

cljs.core.async.t_cljs$core$async31333.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async31333");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31333 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31333(map_LT___$1,f__$1,ch__$1,meta31331__$1,___$2,fn1__$1,meta31334){
return (new cljs.core.async.t_cljs$core$async31333(map_LT___$1,f__$1,ch__$1,meta31331__$1,___$2,fn1__$1,meta31334));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31333(self__.map_LT_,self__.f,self__.ch,self__.meta31331,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26910__auto__ = ret;
if(cljs.core.truth_(and__26910__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26910__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31331","meta31331",1574058829,null)], null);
});

cljs.core.async.t_cljs$core$async31330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31330";

cljs.core.async.t_cljs$core$async31330.cljs$lang$ctorPrWriter = (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async31330");
});

cljs.core.async.__GT_t_cljs$core$async31330 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31330(map_LT___$1,f__$1,ch__$1,meta31331){
return (new cljs.core.async.t_cljs$core$async31330(map_LT___$1,f__$1,ch__$1,meta31331));
});

}

return (new cljs.core.async.t_cljs$core$async31330(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31339 = (function (map_GT_,f,ch,meta31340){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31340 = meta31340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31341,meta31340__$1){
var self__ = this;
var _31341__$1 = this;
return (new cljs.core.async.t_cljs$core$async31339(self__.map_GT_,self__.f,self__.ch,meta31340__$1));
});

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31341){
var self__ = this;
var _31341__$1 = this;
return self__.meta31340;
});

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31340","meta31340",1447222725,null)], null);
});

cljs.core.async.t_cljs$core$async31339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31339";

cljs.core.async.t_cljs$core$async31339.cljs$lang$ctorPrWriter = (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async31339");
});

cljs.core.async.__GT_t_cljs$core$async31339 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31339(map_GT___$1,f__$1,ch__$1,meta31340){
return (new cljs.core.async.t_cljs$core$async31339(map_GT___$1,f__$1,ch__$1,meta31340));
});

}

return (new cljs.core.async.t_cljs$core$async31339(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31345 = (function (filter_GT_,p,ch,meta31346){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31346 = meta31346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31347,meta31346__$1){
var self__ = this;
var _31347__$1 = this;
return (new cljs.core.async.t_cljs$core$async31345(self__.filter_GT_,self__.p,self__.ch,meta31346__$1));
});

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31347){
var self__ = this;
var _31347__$1 = this;
return self__.meta31346;
});

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31346","meta31346",-1200079792,null)], null);
});

cljs.core.async.t_cljs$core$async31345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31345";

cljs.core.async.t_cljs$core$async31345.cljs$lang$ctorPrWriter = (function (this__27528__auto__,writer__27529__auto__,opt__27530__auto__){
return cljs.core._write.call(null,writer__27529__auto__,"cljs.core.async/t_cljs$core$async31345");
});

cljs.core.async.__GT_t_cljs$core$async31345 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31345(filter_GT___$1,p__$1,ch__$1,meta31346){
return (new cljs.core.async.t_cljs$core$async31345(filter_GT___$1,p__$1,ch__$1,meta31346));
});

}

return (new cljs.core.async.t_cljs$core$async31345(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31348 = [];
var len__27997__auto___31392 = arguments.length;
var i__27998__auto___31393 = (0);
while(true){
if((i__27998__auto___31393 < len__27997__auto___31392)){
args31348.push((arguments[i__27998__auto___31393]));

var G__31394 = (i__27998__auto___31393 + (1));
i__27998__auto___31393 = G__31394;
continue;
} else {
}
break;
}

var G__31350 = args31348.length;
switch (G__31350) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31348.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29094__auto___31396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31396,out){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31396,out){
return (function (state_31371){
var state_val_31372 = (state_31371[(1)]);
if((state_val_31372 === (7))){
var inst_31367 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31373_31397 = state_31371__$1;
(statearr_31373_31397[(2)] = inst_31367);

(statearr_31373_31397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (1))){
var state_31371__$1 = state_31371;
var statearr_31374_31398 = state_31371__$1;
(statearr_31374_31398[(2)] = null);

(statearr_31374_31398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (4))){
var inst_31353 = (state_31371[(7)]);
var inst_31353__$1 = (state_31371[(2)]);
var inst_31354 = (inst_31353__$1 == null);
var state_31371__$1 = (function (){var statearr_31375 = state_31371;
(statearr_31375[(7)] = inst_31353__$1);

return statearr_31375;
})();
if(cljs.core.truth_(inst_31354)){
var statearr_31376_31399 = state_31371__$1;
(statearr_31376_31399[(1)] = (5));

} else {
var statearr_31377_31400 = state_31371__$1;
(statearr_31377_31400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (6))){
var inst_31353 = (state_31371[(7)]);
var inst_31358 = p.call(null,inst_31353);
var state_31371__$1 = state_31371;
if(cljs.core.truth_(inst_31358)){
var statearr_31378_31401 = state_31371__$1;
(statearr_31378_31401[(1)] = (8));

} else {
var statearr_31379_31402 = state_31371__$1;
(statearr_31379_31402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (3))){
var inst_31369 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else {
if((state_val_31372 === (2))){
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(4),ch);
} else {
if((state_val_31372 === (11))){
var inst_31361 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31380_31403 = state_31371__$1;
(statearr_31380_31403[(2)] = inst_31361);

(statearr_31380_31403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (9))){
var state_31371__$1 = state_31371;
var statearr_31381_31404 = state_31371__$1;
(statearr_31381_31404[(2)] = null);

(statearr_31381_31404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (5))){
var inst_31356 = cljs.core.async.close_BANG_.call(null,out);
var state_31371__$1 = state_31371;
var statearr_31382_31405 = state_31371__$1;
(statearr_31382_31405[(2)] = inst_31356);

(statearr_31382_31405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (10))){
var inst_31364 = (state_31371[(2)]);
var state_31371__$1 = (function (){var statearr_31383 = state_31371;
(statearr_31383[(8)] = inst_31364);

return statearr_31383;
})();
var statearr_31384_31406 = state_31371__$1;
(statearr_31384_31406[(2)] = null);

(statearr_31384_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (8))){
var inst_31353 = (state_31371[(7)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(11),out,inst_31353);
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
});})(c__29094__auto___31396,out))
;
return ((function (switch__28982__auto__,c__29094__auto___31396,out){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31388 = [null,null,null,null,null,null,null,null,null];
(statearr_31388[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31388[(1)] = (1));

return statearr_31388;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31371){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31389){if((e31389 instanceof Object)){
var ex__28986__auto__ = e31389;
var statearr_31390_31407 = state_31371;
(statearr_31390_31407[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31408 = state_31371;
state_31371 = G__31408;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31396,out))
})();
var state__29096__auto__ = (function (){var statearr_31391 = f__29095__auto__.call(null);
(statearr_31391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31396);

return statearr_31391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31396,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31409 = [];
var len__27997__auto___31412 = arguments.length;
var i__27998__auto___31413 = (0);
while(true){
if((i__27998__auto___31413 < len__27997__auto___31412)){
args31409.push((arguments[i__27998__auto___31413]));

var G__31414 = (i__27998__auto___31413 + (1));
i__27998__auto___31413 = G__31414;
continue;
} else {
}
break;
}

var G__31411 = args31409.length;
switch (G__31411) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31409.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto__){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto__){
return (function (state_31581){
var state_val_31582 = (state_31581[(1)]);
if((state_val_31582 === (7))){
var inst_31577 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31583_31624 = state_31581__$1;
(statearr_31583_31624[(2)] = inst_31577);

(statearr_31583_31624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (20))){
var inst_31547 = (state_31581[(7)]);
var inst_31558 = (state_31581[(2)]);
var inst_31559 = cljs.core.next.call(null,inst_31547);
var inst_31533 = inst_31559;
var inst_31534 = null;
var inst_31535 = (0);
var inst_31536 = (0);
var state_31581__$1 = (function (){var statearr_31584 = state_31581;
(statearr_31584[(8)] = inst_31533);

(statearr_31584[(9)] = inst_31535);

(statearr_31584[(10)] = inst_31558);

(statearr_31584[(11)] = inst_31534);

(statearr_31584[(12)] = inst_31536);

return statearr_31584;
})();
var statearr_31585_31625 = state_31581__$1;
(statearr_31585_31625[(2)] = null);

(statearr_31585_31625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (1))){
var state_31581__$1 = state_31581;
var statearr_31586_31626 = state_31581__$1;
(statearr_31586_31626[(2)] = null);

(statearr_31586_31626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (4))){
var inst_31522 = (state_31581[(13)]);
var inst_31522__$1 = (state_31581[(2)]);
var inst_31523 = (inst_31522__$1 == null);
var state_31581__$1 = (function (){var statearr_31587 = state_31581;
(statearr_31587[(13)] = inst_31522__$1);

return statearr_31587;
})();
if(cljs.core.truth_(inst_31523)){
var statearr_31588_31627 = state_31581__$1;
(statearr_31588_31627[(1)] = (5));

} else {
var statearr_31589_31628 = state_31581__$1;
(statearr_31589_31628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (15))){
var state_31581__$1 = state_31581;
var statearr_31593_31629 = state_31581__$1;
(statearr_31593_31629[(2)] = null);

(statearr_31593_31629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (21))){
var state_31581__$1 = state_31581;
var statearr_31594_31630 = state_31581__$1;
(statearr_31594_31630[(2)] = null);

(statearr_31594_31630[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (13))){
var inst_31533 = (state_31581[(8)]);
var inst_31535 = (state_31581[(9)]);
var inst_31534 = (state_31581[(11)]);
var inst_31536 = (state_31581[(12)]);
var inst_31543 = (state_31581[(2)]);
var inst_31544 = (inst_31536 + (1));
var tmp31590 = inst_31533;
var tmp31591 = inst_31535;
var tmp31592 = inst_31534;
var inst_31533__$1 = tmp31590;
var inst_31534__$1 = tmp31592;
var inst_31535__$1 = tmp31591;
var inst_31536__$1 = inst_31544;
var state_31581__$1 = (function (){var statearr_31595 = state_31581;
(statearr_31595[(8)] = inst_31533__$1);

(statearr_31595[(9)] = inst_31535__$1);

(statearr_31595[(14)] = inst_31543);

(statearr_31595[(11)] = inst_31534__$1);

(statearr_31595[(12)] = inst_31536__$1);

return statearr_31595;
})();
var statearr_31596_31631 = state_31581__$1;
(statearr_31596_31631[(2)] = null);

(statearr_31596_31631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (22))){
var state_31581__$1 = state_31581;
var statearr_31597_31632 = state_31581__$1;
(statearr_31597_31632[(2)] = null);

(statearr_31597_31632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (6))){
var inst_31522 = (state_31581[(13)]);
var inst_31531 = f.call(null,inst_31522);
var inst_31532 = cljs.core.seq.call(null,inst_31531);
var inst_31533 = inst_31532;
var inst_31534 = null;
var inst_31535 = (0);
var inst_31536 = (0);
var state_31581__$1 = (function (){var statearr_31598 = state_31581;
(statearr_31598[(8)] = inst_31533);

(statearr_31598[(9)] = inst_31535);

(statearr_31598[(11)] = inst_31534);

(statearr_31598[(12)] = inst_31536);

return statearr_31598;
})();
var statearr_31599_31633 = state_31581__$1;
(statearr_31599_31633[(2)] = null);

(statearr_31599_31633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (17))){
var inst_31547 = (state_31581[(7)]);
var inst_31551 = cljs.core.chunk_first.call(null,inst_31547);
var inst_31552 = cljs.core.chunk_rest.call(null,inst_31547);
var inst_31553 = cljs.core.count.call(null,inst_31551);
var inst_31533 = inst_31552;
var inst_31534 = inst_31551;
var inst_31535 = inst_31553;
var inst_31536 = (0);
var state_31581__$1 = (function (){var statearr_31600 = state_31581;
(statearr_31600[(8)] = inst_31533);

(statearr_31600[(9)] = inst_31535);

(statearr_31600[(11)] = inst_31534);

(statearr_31600[(12)] = inst_31536);

return statearr_31600;
})();
var statearr_31601_31634 = state_31581__$1;
(statearr_31601_31634[(2)] = null);

(statearr_31601_31634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (3))){
var inst_31579 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31581__$1,inst_31579);
} else {
if((state_val_31582 === (12))){
var inst_31567 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31602_31635 = state_31581__$1;
(statearr_31602_31635[(2)] = inst_31567);

(statearr_31602_31635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (2))){
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(4),in$);
} else {
if((state_val_31582 === (23))){
var inst_31575 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31603_31636 = state_31581__$1;
(statearr_31603_31636[(2)] = inst_31575);

(statearr_31603_31636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (19))){
var inst_31562 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31604_31637 = state_31581__$1;
(statearr_31604_31637[(2)] = inst_31562);

(statearr_31604_31637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (11))){
var inst_31533 = (state_31581[(8)]);
var inst_31547 = (state_31581[(7)]);
var inst_31547__$1 = cljs.core.seq.call(null,inst_31533);
var state_31581__$1 = (function (){var statearr_31605 = state_31581;
(statearr_31605[(7)] = inst_31547__$1);

return statearr_31605;
})();
if(inst_31547__$1){
var statearr_31606_31638 = state_31581__$1;
(statearr_31606_31638[(1)] = (14));

} else {
var statearr_31607_31639 = state_31581__$1;
(statearr_31607_31639[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (9))){
var inst_31569 = (state_31581[(2)]);
var inst_31570 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31581__$1 = (function (){var statearr_31608 = state_31581;
(statearr_31608[(15)] = inst_31569);

return statearr_31608;
})();
if(cljs.core.truth_(inst_31570)){
var statearr_31609_31640 = state_31581__$1;
(statearr_31609_31640[(1)] = (21));

} else {
var statearr_31610_31641 = state_31581__$1;
(statearr_31610_31641[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (5))){
var inst_31525 = cljs.core.async.close_BANG_.call(null,out);
var state_31581__$1 = state_31581;
var statearr_31611_31642 = state_31581__$1;
(statearr_31611_31642[(2)] = inst_31525);

(statearr_31611_31642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (14))){
var inst_31547 = (state_31581[(7)]);
var inst_31549 = cljs.core.chunked_seq_QMARK_.call(null,inst_31547);
var state_31581__$1 = state_31581;
if(inst_31549){
var statearr_31612_31643 = state_31581__$1;
(statearr_31612_31643[(1)] = (17));

} else {
var statearr_31613_31644 = state_31581__$1;
(statearr_31613_31644[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (16))){
var inst_31565 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31614_31645 = state_31581__$1;
(statearr_31614_31645[(2)] = inst_31565);

(statearr_31614_31645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (10))){
var inst_31534 = (state_31581[(11)]);
var inst_31536 = (state_31581[(12)]);
var inst_31541 = cljs.core._nth.call(null,inst_31534,inst_31536);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31581__$1,(13),out,inst_31541);
} else {
if((state_val_31582 === (18))){
var inst_31547 = (state_31581[(7)]);
var inst_31556 = cljs.core.first.call(null,inst_31547);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31581__$1,(20),out,inst_31556);
} else {
if((state_val_31582 === (8))){
var inst_31535 = (state_31581[(9)]);
var inst_31536 = (state_31581[(12)]);
var inst_31538 = (inst_31536 < inst_31535);
var inst_31539 = inst_31538;
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31539)){
var statearr_31615_31646 = state_31581__$1;
(statearr_31615_31646[(1)] = (10));

} else {
var statearr_31616_31647 = state_31581__$1;
(statearr_31616_31647[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__29094__auto__))
;
return ((function (switch__28982__auto__,c__29094__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28983__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28983__auto____0 = (function (){
var statearr_31620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31620[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28983__auto__);

(statearr_31620[(1)] = (1));

return statearr_31620;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28983__auto____1 = (function (state_31581){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31621){if((e31621 instanceof Object)){
var ex__28986__auto__ = e31621;
var statearr_31622_31648 = state_31581;
(statearr_31622_31648[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31649 = state_31581;
state_31581 = G__31649;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28983__auto__ = function(state_31581){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28983__auto____1.call(this,state_31581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28983__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28983__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto__))
})();
var state__29096__auto__ = (function (){var statearr_31623 = f__29095__auto__.call(null);
(statearr_31623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto__);

return statearr_31623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto__))
);

return c__29094__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31650 = [];
var len__27997__auto___31653 = arguments.length;
var i__27998__auto___31654 = (0);
while(true){
if((i__27998__auto___31654 < len__27997__auto___31653)){
args31650.push((arguments[i__27998__auto___31654]));

var G__31655 = (i__27998__auto___31654 + (1));
i__27998__auto___31654 = G__31655;
continue;
} else {
}
break;
}

var G__31652 = args31650.length;
switch (G__31652) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31650.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31657 = [];
var len__27997__auto___31660 = arguments.length;
var i__27998__auto___31661 = (0);
while(true){
if((i__27998__auto___31661 < len__27997__auto___31660)){
args31657.push((arguments[i__27998__auto___31661]));

var G__31662 = (i__27998__auto___31661 + (1));
i__27998__auto___31661 = G__31662;
continue;
} else {
}
break;
}

var G__31659 = args31657.length;
switch (G__31659) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31657.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31664 = [];
var len__27997__auto___31715 = arguments.length;
var i__27998__auto___31716 = (0);
while(true){
if((i__27998__auto___31716 < len__27997__auto___31715)){
args31664.push((arguments[i__27998__auto___31716]));

var G__31717 = (i__27998__auto___31716 + (1));
i__27998__auto___31716 = G__31717;
continue;
} else {
}
break;
}

var G__31666 = args31664.length;
switch (G__31666) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31664.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29094__auto___31719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31719,out){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31719,out){
return (function (state_31690){
var state_val_31691 = (state_31690[(1)]);
if((state_val_31691 === (7))){
var inst_31685 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31692_31720 = state_31690__$1;
(statearr_31692_31720[(2)] = inst_31685);

(statearr_31692_31720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (1))){
var inst_31667 = null;
var state_31690__$1 = (function (){var statearr_31693 = state_31690;
(statearr_31693[(7)] = inst_31667);

return statearr_31693;
})();
var statearr_31694_31721 = state_31690__$1;
(statearr_31694_31721[(2)] = null);

(statearr_31694_31721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (4))){
var inst_31670 = (state_31690[(8)]);
var inst_31670__$1 = (state_31690[(2)]);
var inst_31671 = (inst_31670__$1 == null);
var inst_31672 = cljs.core.not.call(null,inst_31671);
var state_31690__$1 = (function (){var statearr_31695 = state_31690;
(statearr_31695[(8)] = inst_31670__$1);

return statearr_31695;
})();
if(inst_31672){
var statearr_31696_31722 = state_31690__$1;
(statearr_31696_31722[(1)] = (5));

} else {
var statearr_31697_31723 = state_31690__$1;
(statearr_31697_31723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (6))){
var state_31690__$1 = state_31690;
var statearr_31698_31724 = state_31690__$1;
(statearr_31698_31724[(2)] = null);

(statearr_31698_31724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (3))){
var inst_31687 = (state_31690[(2)]);
var inst_31688 = cljs.core.async.close_BANG_.call(null,out);
var state_31690__$1 = (function (){var statearr_31699 = state_31690;
(statearr_31699[(9)] = inst_31687);

return statearr_31699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31690__$1,inst_31688);
} else {
if((state_val_31691 === (2))){
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(4),ch);
} else {
if((state_val_31691 === (11))){
var inst_31670 = (state_31690[(8)]);
var inst_31679 = (state_31690[(2)]);
var inst_31667 = inst_31670;
var state_31690__$1 = (function (){var statearr_31700 = state_31690;
(statearr_31700[(10)] = inst_31679);

(statearr_31700[(7)] = inst_31667);

return statearr_31700;
})();
var statearr_31701_31725 = state_31690__$1;
(statearr_31701_31725[(2)] = null);

(statearr_31701_31725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (9))){
var inst_31670 = (state_31690[(8)]);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31690__$1,(11),out,inst_31670);
} else {
if((state_val_31691 === (5))){
var inst_31667 = (state_31690[(7)]);
var inst_31670 = (state_31690[(8)]);
var inst_31674 = cljs.core._EQ_.call(null,inst_31670,inst_31667);
var state_31690__$1 = state_31690;
if(inst_31674){
var statearr_31703_31726 = state_31690__$1;
(statearr_31703_31726[(1)] = (8));

} else {
var statearr_31704_31727 = state_31690__$1;
(statearr_31704_31727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (10))){
var inst_31682 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31705_31728 = state_31690__$1;
(statearr_31705_31728[(2)] = inst_31682);

(statearr_31705_31728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (8))){
var inst_31667 = (state_31690[(7)]);
var tmp31702 = inst_31667;
var inst_31667__$1 = tmp31702;
var state_31690__$1 = (function (){var statearr_31706 = state_31690;
(statearr_31706[(7)] = inst_31667__$1);

return statearr_31706;
})();
var statearr_31707_31729 = state_31690__$1;
(statearr_31707_31729[(2)] = null);

(statearr_31707_31729[(1)] = (2));


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
});})(c__29094__auto___31719,out))
;
return ((function (switch__28982__auto__,c__29094__auto___31719,out){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31711[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31711[(1)] = (1));

return statearr_31711;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31690){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31712){if((e31712 instanceof Object)){
var ex__28986__auto__ = e31712;
var statearr_31713_31730 = state_31690;
(statearr_31713_31730[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31731 = state_31690;
state_31690 = G__31731;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31719,out))
})();
var state__29096__auto__ = (function (){var statearr_31714 = f__29095__auto__.call(null);
(statearr_31714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31719);

return statearr_31714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31719,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31732 = [];
var len__27997__auto___31802 = arguments.length;
var i__27998__auto___31803 = (0);
while(true){
if((i__27998__auto___31803 < len__27997__auto___31802)){
args31732.push((arguments[i__27998__auto___31803]));

var G__31804 = (i__27998__auto___31803 + (1));
i__27998__auto___31803 = G__31804;
continue;
} else {
}
break;
}

var G__31734 = args31732.length;
switch (G__31734) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31732.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29094__auto___31806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31806,out){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31806,out){
return (function (state_31772){
var state_val_31773 = (state_31772[(1)]);
if((state_val_31773 === (7))){
var inst_31768 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31774_31807 = state_31772__$1;
(statearr_31774_31807[(2)] = inst_31768);

(statearr_31774_31807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (1))){
var inst_31735 = (new Array(n));
var inst_31736 = inst_31735;
var inst_31737 = (0);
var state_31772__$1 = (function (){var statearr_31775 = state_31772;
(statearr_31775[(7)] = inst_31737);

(statearr_31775[(8)] = inst_31736);

return statearr_31775;
})();
var statearr_31776_31808 = state_31772__$1;
(statearr_31776_31808[(2)] = null);

(statearr_31776_31808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (4))){
var inst_31740 = (state_31772[(9)]);
var inst_31740__$1 = (state_31772[(2)]);
var inst_31741 = (inst_31740__$1 == null);
var inst_31742 = cljs.core.not.call(null,inst_31741);
var state_31772__$1 = (function (){var statearr_31777 = state_31772;
(statearr_31777[(9)] = inst_31740__$1);

return statearr_31777;
})();
if(inst_31742){
var statearr_31778_31809 = state_31772__$1;
(statearr_31778_31809[(1)] = (5));

} else {
var statearr_31779_31810 = state_31772__$1;
(statearr_31779_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (15))){
var inst_31762 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31780_31811 = state_31772__$1;
(statearr_31780_31811[(2)] = inst_31762);

(statearr_31780_31811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (13))){
var state_31772__$1 = state_31772;
var statearr_31781_31812 = state_31772__$1;
(statearr_31781_31812[(2)] = null);

(statearr_31781_31812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (6))){
var inst_31737 = (state_31772[(7)]);
var inst_31758 = (inst_31737 > (0));
var state_31772__$1 = state_31772;
if(cljs.core.truth_(inst_31758)){
var statearr_31782_31813 = state_31772__$1;
(statearr_31782_31813[(1)] = (12));

} else {
var statearr_31783_31814 = state_31772__$1;
(statearr_31783_31814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (3))){
var inst_31770 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31772__$1,inst_31770);
} else {
if((state_val_31773 === (12))){
var inst_31736 = (state_31772[(8)]);
var inst_31760 = cljs.core.vec.call(null,inst_31736);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31772__$1,(15),out,inst_31760);
} else {
if((state_val_31773 === (2))){
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31772__$1,(4),ch);
} else {
if((state_val_31773 === (11))){
var inst_31752 = (state_31772[(2)]);
var inst_31753 = (new Array(n));
var inst_31736 = inst_31753;
var inst_31737 = (0);
var state_31772__$1 = (function (){var statearr_31784 = state_31772;
(statearr_31784[(10)] = inst_31752);

(statearr_31784[(7)] = inst_31737);

(statearr_31784[(8)] = inst_31736);

return statearr_31784;
})();
var statearr_31785_31815 = state_31772__$1;
(statearr_31785_31815[(2)] = null);

(statearr_31785_31815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (9))){
var inst_31736 = (state_31772[(8)]);
var inst_31750 = cljs.core.vec.call(null,inst_31736);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31772__$1,(11),out,inst_31750);
} else {
if((state_val_31773 === (5))){
var inst_31737 = (state_31772[(7)]);
var inst_31736 = (state_31772[(8)]);
var inst_31745 = (state_31772[(11)]);
var inst_31740 = (state_31772[(9)]);
var inst_31744 = (inst_31736[inst_31737] = inst_31740);
var inst_31745__$1 = (inst_31737 + (1));
var inst_31746 = (inst_31745__$1 < n);
var state_31772__$1 = (function (){var statearr_31786 = state_31772;
(statearr_31786[(11)] = inst_31745__$1);

(statearr_31786[(12)] = inst_31744);

return statearr_31786;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31787_31816 = state_31772__$1;
(statearr_31787_31816[(1)] = (8));

} else {
var statearr_31788_31817 = state_31772__$1;
(statearr_31788_31817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (14))){
var inst_31765 = (state_31772[(2)]);
var inst_31766 = cljs.core.async.close_BANG_.call(null,out);
var state_31772__$1 = (function (){var statearr_31790 = state_31772;
(statearr_31790[(13)] = inst_31765);

return statearr_31790;
})();
var statearr_31791_31818 = state_31772__$1;
(statearr_31791_31818[(2)] = inst_31766);

(statearr_31791_31818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (10))){
var inst_31756 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31792_31819 = state_31772__$1;
(statearr_31792_31819[(2)] = inst_31756);

(statearr_31792_31819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (8))){
var inst_31736 = (state_31772[(8)]);
var inst_31745 = (state_31772[(11)]);
var tmp31789 = inst_31736;
var inst_31736__$1 = tmp31789;
var inst_31737 = inst_31745;
var state_31772__$1 = (function (){var statearr_31793 = state_31772;
(statearr_31793[(7)] = inst_31737);

(statearr_31793[(8)] = inst_31736__$1);

return statearr_31793;
})();
var statearr_31794_31820 = state_31772__$1;
(statearr_31794_31820[(2)] = null);

(statearr_31794_31820[(1)] = (2));


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
});})(c__29094__auto___31806,out))
;
return ((function (switch__28982__auto__,c__29094__auto___31806,out){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31772){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object)){
var ex__28986__auto__ = e31799;
var statearr_31800_31821 = state_31772;
(statearr_31800_31821[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31822 = state_31772;
state_31772 = G__31822;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31806,out))
})();
var state__29096__auto__ = (function (){var statearr_31801 = f__29095__auto__.call(null);
(statearr_31801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31806);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31806,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31823 = [];
var len__27997__auto___31897 = arguments.length;
var i__27998__auto___31898 = (0);
while(true){
if((i__27998__auto___31898 < len__27997__auto___31897)){
args31823.push((arguments[i__27998__auto___31898]));

var G__31899 = (i__27998__auto___31898 + (1));
i__27998__auto___31898 = G__31899;
continue;
} else {
}
break;
}

var G__31825 = args31823.length;
switch (G__31825) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31823.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29094__auto___31901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29094__auto___31901,out){
return (function (){
var f__29095__auto__ = (function (){var switch__28982__auto__ = ((function (c__29094__auto___31901,out){
return (function (state_31867){
var state_val_31868 = (state_31867[(1)]);
if((state_val_31868 === (7))){
var inst_31863 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31869_31902 = state_31867__$1;
(statearr_31869_31902[(2)] = inst_31863);

(statearr_31869_31902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (1))){
var inst_31826 = [];
var inst_31827 = inst_31826;
var inst_31828 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31867__$1 = (function (){var statearr_31870 = state_31867;
(statearr_31870[(7)] = inst_31828);

(statearr_31870[(8)] = inst_31827);

return statearr_31870;
})();
var statearr_31871_31903 = state_31867__$1;
(statearr_31871_31903[(2)] = null);

(statearr_31871_31903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (4))){
var inst_31831 = (state_31867[(9)]);
var inst_31831__$1 = (state_31867[(2)]);
var inst_31832 = (inst_31831__$1 == null);
var inst_31833 = cljs.core.not.call(null,inst_31832);
var state_31867__$1 = (function (){var statearr_31872 = state_31867;
(statearr_31872[(9)] = inst_31831__$1);

return statearr_31872;
})();
if(inst_31833){
var statearr_31873_31904 = state_31867__$1;
(statearr_31873_31904[(1)] = (5));

} else {
var statearr_31874_31905 = state_31867__$1;
(statearr_31874_31905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (15))){
var inst_31857 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31875_31906 = state_31867__$1;
(statearr_31875_31906[(2)] = inst_31857);

(statearr_31875_31906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (13))){
var state_31867__$1 = state_31867;
var statearr_31876_31907 = state_31867__$1;
(statearr_31876_31907[(2)] = null);

(statearr_31876_31907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (6))){
var inst_31827 = (state_31867[(8)]);
var inst_31852 = inst_31827.length;
var inst_31853 = (inst_31852 > (0));
var state_31867__$1 = state_31867;
if(cljs.core.truth_(inst_31853)){
var statearr_31877_31908 = state_31867__$1;
(statearr_31877_31908[(1)] = (12));

} else {
var statearr_31878_31909 = state_31867__$1;
(statearr_31878_31909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (3))){
var inst_31865 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31867__$1,inst_31865);
} else {
if((state_val_31868 === (12))){
var inst_31827 = (state_31867[(8)]);
var inst_31855 = cljs.core.vec.call(null,inst_31827);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31867__$1,(15),out,inst_31855);
} else {
if((state_val_31868 === (2))){
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31867__$1,(4),ch);
} else {
if((state_val_31868 === (11))){
var inst_31831 = (state_31867[(9)]);
var inst_31835 = (state_31867[(10)]);
var inst_31845 = (state_31867[(2)]);
var inst_31846 = [];
var inst_31847 = inst_31846.push(inst_31831);
var inst_31827 = inst_31846;
var inst_31828 = inst_31835;
var state_31867__$1 = (function (){var statearr_31879 = state_31867;
(statearr_31879[(7)] = inst_31828);

(statearr_31879[(11)] = inst_31845);

(statearr_31879[(12)] = inst_31847);

(statearr_31879[(8)] = inst_31827);

return statearr_31879;
})();
var statearr_31880_31910 = state_31867__$1;
(statearr_31880_31910[(2)] = null);

(statearr_31880_31910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (9))){
var inst_31827 = (state_31867[(8)]);
var inst_31843 = cljs.core.vec.call(null,inst_31827);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31867__$1,(11),out,inst_31843);
} else {
if((state_val_31868 === (5))){
var inst_31828 = (state_31867[(7)]);
var inst_31831 = (state_31867[(9)]);
var inst_31835 = (state_31867[(10)]);
var inst_31835__$1 = f.call(null,inst_31831);
var inst_31836 = cljs.core._EQ_.call(null,inst_31835__$1,inst_31828);
var inst_31837 = cljs.core.keyword_identical_QMARK_.call(null,inst_31828,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31838 = (inst_31836) || (inst_31837);
var state_31867__$1 = (function (){var statearr_31881 = state_31867;
(statearr_31881[(10)] = inst_31835__$1);

return statearr_31881;
})();
if(cljs.core.truth_(inst_31838)){
var statearr_31882_31911 = state_31867__$1;
(statearr_31882_31911[(1)] = (8));

} else {
var statearr_31883_31912 = state_31867__$1;
(statearr_31883_31912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (14))){
var inst_31860 = (state_31867[(2)]);
var inst_31861 = cljs.core.async.close_BANG_.call(null,out);
var state_31867__$1 = (function (){var statearr_31885 = state_31867;
(statearr_31885[(13)] = inst_31860);

return statearr_31885;
})();
var statearr_31886_31913 = state_31867__$1;
(statearr_31886_31913[(2)] = inst_31861);

(statearr_31886_31913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (10))){
var inst_31850 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31887_31914 = state_31867__$1;
(statearr_31887_31914[(2)] = inst_31850);

(statearr_31887_31914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (8))){
var inst_31831 = (state_31867[(9)]);
var inst_31835 = (state_31867[(10)]);
var inst_31827 = (state_31867[(8)]);
var inst_31840 = inst_31827.push(inst_31831);
var tmp31884 = inst_31827;
var inst_31827__$1 = tmp31884;
var inst_31828 = inst_31835;
var state_31867__$1 = (function (){var statearr_31888 = state_31867;
(statearr_31888[(7)] = inst_31828);

(statearr_31888[(14)] = inst_31840);

(statearr_31888[(8)] = inst_31827__$1);

return statearr_31888;
})();
var statearr_31889_31915 = state_31867__$1;
(statearr_31889_31915[(2)] = null);

(statearr_31889_31915[(1)] = (2));


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
});})(c__29094__auto___31901,out))
;
return ((function (switch__28982__auto__,c__29094__auto___31901,out){
return (function() {
var cljs$core$async$state_machine__28983__auto__ = null;
var cljs$core$async$state_machine__28983__auto____0 = (function (){
var statearr_31893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31893[(0)] = cljs$core$async$state_machine__28983__auto__);

(statearr_31893[(1)] = (1));

return statearr_31893;
});
var cljs$core$async$state_machine__28983__auto____1 = (function (state_31867){
while(true){
var ret_value__28984__auto__ = (function (){try{while(true){
var result__28985__auto__ = switch__28982__auto__.call(null,state_31867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28985__auto__;
}
break;
}
}catch (e31894){if((e31894 instanceof Object)){
var ex__28986__auto__ = e31894;
var statearr_31895_31916 = state_31867;
(statearr_31895_31916[(5)] = ex__28986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31917 = state_31867;
state_31867 = G__31917;
continue;
} else {
return ret_value__28984__auto__;
}
break;
}
});
cljs$core$async$state_machine__28983__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28983__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28983__auto____0;
cljs$core$async$state_machine__28983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28983__auto____1;
return cljs$core$async$state_machine__28983__auto__;
})()
;})(switch__28982__auto__,c__29094__auto___31901,out))
})();
var state__29096__auto__ = (function (){var statearr_31896 = f__29095__auto__.call(null);
(statearr_31896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29094__auto___31901);

return statearr_31896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29096__auto__);
});})(c__29094__auto___31901,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map