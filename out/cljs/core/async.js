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
var args32534 = [];
var len__27650__auto___32540 = arguments.length;
var i__27651__auto___32541 = (0);
while(true){
if((i__27651__auto___32541 < len__27650__auto___32540)){
args32534.push((arguments[i__27651__auto___32541]));

var G__32542 = (i__27651__auto___32541 + (1));
i__27651__auto___32541 = G__32542;
continue;
} else {
}
break;
}

var G__32536 = args32534.length;
switch (G__32536) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32534.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32537 = (function (f,blockable,meta32538){
this.f = f;
this.blockable = blockable;
this.meta32538 = meta32538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32539,meta32538__$1){
var self__ = this;
var _32539__$1 = this;
return (new cljs.core.async.t_cljs$core$async32537(self__.f,self__.blockable,meta32538__$1));
});

cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32539){
var self__ = this;
var _32539__$1 = this;
return self__.meta32538;
});

cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32538","meta32538",1501472308,null)], null);
});

cljs.core.async.t_cljs$core$async32537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32537";

cljs.core.async.t_cljs$core$async32537.cljs$lang$ctorPrWriter = (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async32537");
});

cljs.core.async.__GT_t_cljs$core$async32537 = (function cljs$core$async$__GT_t_cljs$core$async32537(f__$1,blockable__$1,meta32538){
return (new cljs.core.async.t_cljs$core$async32537(f__$1,blockable__$1,meta32538));
});

}

return (new cljs.core.async.t_cljs$core$async32537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32546 = [];
var len__27650__auto___32549 = arguments.length;
var i__27651__auto___32550 = (0);
while(true){
if((i__27651__auto___32550 < len__27650__auto___32549)){
args32546.push((arguments[i__27651__auto___32550]));

var G__32551 = (i__27651__auto___32550 + (1));
i__27651__auto___32550 = G__32551;
continue;
} else {
}
break;
}

var G__32548 = args32546.length;
switch (G__32548) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32546.length)].join('')));

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
var args32553 = [];
var len__27650__auto___32556 = arguments.length;
var i__27651__auto___32557 = (0);
while(true){
if((i__27651__auto___32557 < len__27650__auto___32556)){
args32553.push((arguments[i__27651__auto___32557]));

var G__32558 = (i__27651__auto___32557 + (1));
i__27651__auto___32557 = G__32558;
continue;
} else {
}
break;
}

var G__32555 = args32553.length;
switch (G__32555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32553.length)].join('')));

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
var args32560 = [];
var len__27650__auto___32563 = arguments.length;
var i__27651__auto___32564 = (0);
while(true){
if((i__27651__auto___32564 < len__27650__auto___32563)){
args32560.push((arguments[i__27651__auto___32564]));

var G__32565 = (i__27651__auto___32564 + (1));
i__27651__auto___32564 = G__32565;
continue;
} else {
}
break;
}

var G__32562 = args32560.length;
switch (G__32562) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32560.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32567 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32567);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32567,ret){
return (function (){
return fn1.call(null,val_32567);
});})(val_32567,ret))
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
var args32568 = [];
var len__27650__auto___32571 = arguments.length;
var i__27651__auto___32572 = (0);
while(true){
if((i__27651__auto___32572 < len__27650__auto___32571)){
args32568.push((arguments[i__27651__auto___32572]));

var G__32573 = (i__27651__auto___32572 + (1));
i__27651__auto___32572 = G__32573;
continue;
} else {
}
break;
}

var G__32570 = args32568.length;
switch (G__32570) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32568.length)].join('')));

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
var n__27490__auto___32575 = n;
var x_32576 = (0);
while(true){
if((x_32576 < n__27490__auto___32575)){
(a[x_32576] = (0));

var G__32577 = (x_32576 + (1));
x_32576 = G__32577;
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

var G__32578 = (i + (1));
i = G__32578;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32582 = (function (alt_flag,flag,meta32583){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32583 = meta32583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32584,meta32583__$1){
var self__ = this;
var _32584__$1 = this;
return (new cljs.core.async.t_cljs$core$async32582(self__.alt_flag,self__.flag,meta32583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32584){
var self__ = this;
var _32584__$1 = this;
return self__.meta32583;
});})(flag))
;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32583","meta32583",401710594,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32582";

cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async32582");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32582(alt_flag__$1,flag__$1,meta32583){
return (new cljs.core.async.t_cljs$core$async32582(alt_flag__$1,flag__$1,meta32583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32582(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32588 = (function (alt_handler,flag,cb,meta32589){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32589 = meta32589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32590,meta32589__$1){
var self__ = this;
var _32590__$1 = this;
return (new cljs.core.async.t_cljs$core$async32588(self__.alt_handler,self__.flag,self__.cb,meta32589__$1));
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32590){
var self__ = this;
var _32590__$1 = this;
return self__.meta32589;
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32589","meta32589",1370297227,null)], null);
});

cljs.core.async.t_cljs$core$async32588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32588";

cljs.core.async.t_cljs$core$async32588.cljs$lang$ctorPrWriter = (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async32588");
});

cljs.core.async.__GT_t_cljs$core$async32588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32588(alt_handler__$1,flag__$1,cb__$1,meta32589){
return (new cljs.core.async.t_cljs$core$async32588(alt_handler__$1,flag__$1,cb__$1,meta32589));
});

}

return (new cljs.core.async.t_cljs$core$async32588(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32591_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32592_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26575__auto__ = wport;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32593 = (i + (1));
i = G__32593;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26575__auto__ = ret;
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26563__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26563__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26563__auto__;
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
var args__27657__auto__ = [];
var len__27650__auto___32599 = arguments.length;
var i__27651__auto___32600 = (0);
while(true){
if((i__27651__auto___32600 < len__27650__auto___32599)){
args__27657__auto__.push((arguments[i__27651__auto___32600]));

var G__32601 = (i__27651__auto___32600 + (1));
i__27651__auto___32600 = G__32601;
continue;
} else {
}
break;
}

var argseq__27658__auto__ = ((((1) < args__27657__auto__.length))?(new cljs.core.IndexedSeq(args__27657__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27658__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32596){
var map__32597 = p__32596;
var map__32597__$1 = ((((!((map__32597 == null)))?((((map__32597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32597):map__32597);
var opts = map__32597__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32594){
var G__32595 = cljs.core.first.call(null,seq32594);
var seq32594__$1 = cljs.core.next.call(null,seq32594);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32595,seq32594__$1);
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
var args32602 = [];
var len__27650__auto___32652 = arguments.length;
var i__27651__auto___32653 = (0);
while(true){
if((i__27651__auto___32653 < len__27650__auto___32652)){
args32602.push((arguments[i__27651__auto___32653]));

var G__32654 = (i__27651__auto___32653 + (1));
i__27651__auto___32653 = G__32654;
continue;
} else {
}
break;
}

var G__32604 = args32602.length;
switch (G__32604) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32602.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32489__auto___32656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___32656){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___32656){
return (function (state_32628){
var state_val_32629 = (state_32628[(1)]);
if((state_val_32629 === (7))){
var inst_32624 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
var statearr_32630_32657 = state_32628__$1;
(statearr_32630_32657[(2)] = inst_32624);

(statearr_32630_32657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (1))){
var state_32628__$1 = state_32628;
var statearr_32631_32658 = state_32628__$1;
(statearr_32631_32658[(2)] = null);

(statearr_32631_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (4))){
var inst_32607 = (state_32628[(7)]);
var inst_32607__$1 = (state_32628[(2)]);
var inst_32608 = (inst_32607__$1 == null);
var state_32628__$1 = (function (){var statearr_32632 = state_32628;
(statearr_32632[(7)] = inst_32607__$1);

return statearr_32632;
})();
if(cljs.core.truth_(inst_32608)){
var statearr_32633_32659 = state_32628__$1;
(statearr_32633_32659[(1)] = (5));

} else {
var statearr_32634_32660 = state_32628__$1;
(statearr_32634_32660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (13))){
var state_32628__$1 = state_32628;
var statearr_32635_32661 = state_32628__$1;
(statearr_32635_32661[(2)] = null);

(statearr_32635_32661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (6))){
var inst_32607 = (state_32628[(7)]);
var state_32628__$1 = state_32628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32628__$1,(11),to,inst_32607);
} else {
if((state_val_32629 === (3))){
var inst_32626 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32628__$1,inst_32626);
} else {
if((state_val_32629 === (12))){
var state_32628__$1 = state_32628;
var statearr_32636_32662 = state_32628__$1;
(statearr_32636_32662[(2)] = null);

(statearr_32636_32662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (2))){
var state_32628__$1 = state_32628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32628__$1,(4),from);
} else {
if((state_val_32629 === (11))){
var inst_32617 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
if(cljs.core.truth_(inst_32617)){
var statearr_32637_32663 = state_32628__$1;
(statearr_32637_32663[(1)] = (12));

} else {
var statearr_32638_32664 = state_32628__$1;
(statearr_32638_32664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (9))){
var state_32628__$1 = state_32628;
var statearr_32639_32665 = state_32628__$1;
(statearr_32639_32665[(2)] = null);

(statearr_32639_32665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (5))){
var state_32628__$1 = state_32628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32640_32666 = state_32628__$1;
(statearr_32640_32666[(1)] = (8));

} else {
var statearr_32641_32667 = state_32628__$1;
(statearr_32641_32667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (14))){
var inst_32622 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
var statearr_32642_32668 = state_32628__$1;
(statearr_32642_32668[(2)] = inst_32622);

(statearr_32642_32668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (10))){
var inst_32614 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
var statearr_32643_32669 = state_32628__$1;
(statearr_32643_32669[(2)] = inst_32614);

(statearr_32643_32669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (8))){
var inst_32611 = cljs.core.async.close_BANG_.call(null,to);
var state_32628__$1 = state_32628;
var statearr_32644_32670 = state_32628__$1;
(statearr_32644_32670[(2)] = inst_32611);

(statearr_32644_32670[(1)] = (10));


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
});})(c__32489__auto___32656))
;
return ((function (switch__32377__auto__,c__32489__auto___32656){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_32648 = [null,null,null,null,null,null,null,null];
(statearr_32648[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_32648[(1)] = (1));

return statearr_32648;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_32628){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_32628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e32649){if((e32649 instanceof Object)){
var ex__32381__auto__ = e32649;
var statearr_32650_32671 = state_32628;
(statearr_32650_32671[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32672 = state_32628;
state_32628 = G__32672;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_32628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_32628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___32656))
})();
var state__32491__auto__ = (function (){var statearr_32651 = f__32490__auto__.call(null);
(statearr_32651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___32656);

return statearr_32651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___32656))
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
return (function (p__32860){
var vec__32861 = p__32860;
var v = cljs.core.nth.call(null,vec__32861,(0),null);
var p = cljs.core.nth.call(null,vec__32861,(1),null);
var job = vec__32861;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32489__auto___33047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___33047,res,vec__32861,v,p,job,jobs,results){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___33047,res,vec__32861,v,p,job,jobs,results){
return (function (state_32868){
var state_val_32869 = (state_32868[(1)]);
if((state_val_32869 === (1))){
var state_32868__$1 = state_32868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32868__$1,(2),res,v);
} else {
if((state_val_32869 === (2))){
var inst_32865 = (state_32868[(2)]);
var inst_32866 = cljs.core.async.close_BANG_.call(null,res);
var state_32868__$1 = (function (){var statearr_32870 = state_32868;
(statearr_32870[(7)] = inst_32865);

return statearr_32870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32868__$1,inst_32866);
} else {
return null;
}
}
});})(c__32489__auto___33047,res,vec__32861,v,p,job,jobs,results))
;
return ((function (switch__32377__auto__,c__32489__auto___33047,res,vec__32861,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0 = (function (){
var statearr_32874 = [null,null,null,null,null,null,null,null];
(statearr_32874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__);

(statearr_32874[(1)] = (1));

return statearr_32874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1 = (function (state_32868){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_32868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e32875){if((e32875 instanceof Object)){
var ex__32381__auto__ = e32875;
var statearr_32876_33048 = state_32868;
(statearr_32876_33048[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33049 = state_32868;
state_32868 = G__33049;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = function(state_32868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1.call(this,state_32868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___33047,res,vec__32861,v,p,job,jobs,results))
})();
var state__32491__auto__ = (function (){var statearr_32877 = f__32490__auto__.call(null);
(statearr_32877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___33047);

return statearr_32877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___33047,res,vec__32861,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32878){
var vec__32879 = p__32878;
var v = cljs.core.nth.call(null,vec__32879,(0),null);
var p = cljs.core.nth.call(null,vec__32879,(1),null);
var job = vec__32879;
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
var n__27490__auto___33050 = n;
var __33051 = (0);
while(true){
if((__33051 < n__27490__auto___33050)){
var G__32882_33052 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32882_33052) {
case "compute":
var c__32489__auto___33054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33051,c__32489__auto___33054,G__32882_33052,n__27490__auto___33050,jobs,results,process,async){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (__33051,c__32489__auto___33054,G__32882_33052,n__27490__auto___33050,jobs,results,process,async){
return (function (state_32895){
var state_val_32896 = (state_32895[(1)]);
if((state_val_32896 === (1))){
var state_32895__$1 = state_32895;
var statearr_32897_33055 = state_32895__$1;
(statearr_32897_33055[(2)] = null);

(statearr_32897_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (2))){
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32895__$1,(4),jobs);
} else {
if((state_val_32896 === (3))){
var inst_32893 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32895__$1,inst_32893);
} else {
if((state_val_32896 === (4))){
var inst_32885 = (state_32895[(2)]);
var inst_32886 = process.call(null,inst_32885);
var state_32895__$1 = state_32895;
if(cljs.core.truth_(inst_32886)){
var statearr_32898_33056 = state_32895__$1;
(statearr_32898_33056[(1)] = (5));

} else {
var statearr_32899_33057 = state_32895__$1;
(statearr_32899_33057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (5))){
var state_32895__$1 = state_32895;
var statearr_32900_33058 = state_32895__$1;
(statearr_32900_33058[(2)] = null);

(statearr_32900_33058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (6))){
var state_32895__$1 = state_32895;
var statearr_32901_33059 = state_32895__$1;
(statearr_32901_33059[(2)] = null);

(statearr_32901_33059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (7))){
var inst_32891 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32902_33060 = state_32895__$1;
(statearr_32902_33060[(2)] = inst_32891);

(statearr_32902_33060[(1)] = (3));


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
});})(__33051,c__32489__auto___33054,G__32882_33052,n__27490__auto___33050,jobs,results,process,async))
;
return ((function (__33051,switch__32377__auto__,c__32489__auto___33054,G__32882_33052,n__27490__auto___33050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0 = (function (){
var statearr_32906 = [null,null,null,null,null,null,null];
(statearr_32906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__);

(statearr_32906[(1)] = (1));

return statearr_32906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1 = (function (state_32895){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_32895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e32907){if((e32907 instanceof Object)){
var ex__32381__auto__ = e32907;
var statearr_32908_33061 = state_32895;
(statearr_32908_33061[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33062 = state_32895;
state_32895 = G__33062;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = function(state_32895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1.call(this,state_32895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__;
})()
;})(__33051,switch__32377__auto__,c__32489__auto___33054,G__32882_33052,n__27490__auto___33050,jobs,results,process,async))
})();
var state__32491__auto__ = (function (){var statearr_32909 = f__32490__auto__.call(null);
(statearr_32909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___33054);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(__33051,c__32489__auto___33054,G__32882_33052,n__27490__auto___33050,jobs,results,process,async))
);


break;
case "async":
var c__32489__auto___33063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33051,c__32489__auto___33063,G__32882_33052,n__27490__auto___33050,jobs,results,process,async){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (__33051,c__32489__auto___33063,G__32882_33052,n__27490__auto___33050,jobs,results,process,async){
return (function (state_32922){
var state_val_32923 = (state_32922[(1)]);
if((state_val_32923 === (1))){
var state_32922__$1 = state_32922;
var statearr_32924_33064 = state_32922__$1;
(statearr_32924_33064[(2)] = null);

(statearr_32924_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (2))){
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(4),jobs);
} else {
if((state_val_32923 === (3))){
var inst_32920 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32922__$1,inst_32920);
} else {
if((state_val_32923 === (4))){
var inst_32912 = (state_32922[(2)]);
var inst_32913 = async.call(null,inst_32912);
var state_32922__$1 = state_32922;
if(cljs.core.truth_(inst_32913)){
var statearr_32925_33065 = state_32922__$1;
(statearr_32925_33065[(1)] = (5));

} else {
var statearr_32926_33066 = state_32922__$1;
(statearr_32926_33066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (5))){
var state_32922__$1 = state_32922;
var statearr_32927_33067 = state_32922__$1;
(statearr_32927_33067[(2)] = null);

(statearr_32927_33067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (6))){
var state_32922__$1 = state_32922;
var statearr_32928_33068 = state_32922__$1;
(statearr_32928_33068[(2)] = null);

(statearr_32928_33068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (7))){
var inst_32918 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32929_33069 = state_32922__$1;
(statearr_32929_33069[(2)] = inst_32918);

(statearr_32929_33069[(1)] = (3));


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
});})(__33051,c__32489__auto___33063,G__32882_33052,n__27490__auto___33050,jobs,results,process,async))
;
return ((function (__33051,switch__32377__auto__,c__32489__auto___33063,G__32882_33052,n__27490__auto___33050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0 = (function (){
var statearr_32933 = [null,null,null,null,null,null,null];
(statearr_32933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__);

(statearr_32933[(1)] = (1));

return statearr_32933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1 = (function (state_32922){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_32922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e32934){if((e32934 instanceof Object)){
var ex__32381__auto__ = e32934;
var statearr_32935_33070 = state_32922;
(statearr_32935_33070[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_32922;
state_32922 = G__33071;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = function(state_32922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1.call(this,state_32922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__;
})()
;})(__33051,switch__32377__auto__,c__32489__auto___33063,G__32882_33052,n__27490__auto___33050,jobs,results,process,async))
})();
var state__32491__auto__ = (function (){var statearr_32936 = f__32490__auto__.call(null);
(statearr_32936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___33063);

return statearr_32936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(__33051,c__32489__auto___33063,G__32882_33052,n__27490__auto___33050,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33072 = (__33051 + (1));
__33051 = G__33072;
continue;
} else {
}
break;
}

var c__32489__auto___33073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___33073,jobs,results,process,async){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___33073,jobs,results,process,async){
return (function (state_32958){
var state_val_32959 = (state_32958[(1)]);
if((state_val_32959 === (1))){
var state_32958__$1 = state_32958;
var statearr_32960_33074 = state_32958__$1;
(statearr_32960_33074[(2)] = null);

(statearr_32960_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (2))){
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32958__$1,(4),from);
} else {
if((state_val_32959 === (3))){
var inst_32956 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32958__$1,inst_32956);
} else {
if((state_val_32959 === (4))){
var inst_32939 = (state_32958[(7)]);
var inst_32939__$1 = (state_32958[(2)]);
var inst_32940 = (inst_32939__$1 == null);
var state_32958__$1 = (function (){var statearr_32961 = state_32958;
(statearr_32961[(7)] = inst_32939__$1);

return statearr_32961;
})();
if(cljs.core.truth_(inst_32940)){
var statearr_32962_33075 = state_32958__$1;
(statearr_32962_33075[(1)] = (5));

} else {
var statearr_32963_33076 = state_32958__$1;
(statearr_32963_33076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (5))){
var inst_32942 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32958__$1 = state_32958;
var statearr_32964_33077 = state_32958__$1;
(statearr_32964_33077[(2)] = inst_32942);

(statearr_32964_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (6))){
var inst_32944 = (state_32958[(8)]);
var inst_32939 = (state_32958[(7)]);
var inst_32944__$1 = cljs.core.async.chan.call(null,(1));
var inst_32945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32946 = [inst_32939,inst_32944__$1];
var inst_32947 = (new cljs.core.PersistentVector(null,2,(5),inst_32945,inst_32946,null));
var state_32958__$1 = (function (){var statearr_32965 = state_32958;
(statearr_32965[(8)] = inst_32944__$1);

return statearr_32965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32958__$1,(8),jobs,inst_32947);
} else {
if((state_val_32959 === (7))){
var inst_32954 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32966_33078 = state_32958__$1;
(statearr_32966_33078[(2)] = inst_32954);

(statearr_32966_33078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (8))){
var inst_32944 = (state_32958[(8)]);
var inst_32949 = (state_32958[(2)]);
var state_32958__$1 = (function (){var statearr_32967 = state_32958;
(statearr_32967[(9)] = inst_32949);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32958__$1,(9),results,inst_32944);
} else {
if((state_val_32959 === (9))){
var inst_32951 = (state_32958[(2)]);
var state_32958__$1 = (function (){var statearr_32968 = state_32958;
(statearr_32968[(10)] = inst_32951);

return statearr_32968;
})();
var statearr_32969_33079 = state_32958__$1;
(statearr_32969_33079[(2)] = null);

(statearr_32969_33079[(1)] = (2));


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
});})(c__32489__auto___33073,jobs,results,process,async))
;
return ((function (switch__32377__auto__,c__32489__auto___33073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0 = (function (){
var statearr_32973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__);

(statearr_32973[(1)] = (1));

return statearr_32973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1 = (function (state_32958){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_32958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e32974){if((e32974 instanceof Object)){
var ex__32381__auto__ = e32974;
var statearr_32975_33080 = state_32958;
(statearr_32975_33080[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33081 = state_32958;
state_32958 = G__33081;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = function(state_32958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1.call(this,state_32958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___33073,jobs,results,process,async))
})();
var state__32491__auto__ = (function (){var statearr_32976 = f__32490__auto__.call(null);
(statearr_32976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___33073);

return statearr_32976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___33073,jobs,results,process,async))
);


var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,jobs,results,process,async){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,jobs,results,process,async){
return (function (state_33014){
var state_val_33015 = (state_33014[(1)]);
if((state_val_33015 === (7))){
var inst_33010 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
var statearr_33016_33082 = state_33014__$1;
(statearr_33016_33082[(2)] = inst_33010);

(statearr_33016_33082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (20))){
var state_33014__$1 = state_33014;
var statearr_33017_33083 = state_33014__$1;
(statearr_33017_33083[(2)] = null);

(statearr_33017_33083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (1))){
var state_33014__$1 = state_33014;
var statearr_33018_33084 = state_33014__$1;
(statearr_33018_33084[(2)] = null);

(statearr_33018_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (4))){
var inst_32979 = (state_33014[(7)]);
var inst_32979__$1 = (state_33014[(2)]);
var inst_32980 = (inst_32979__$1 == null);
var state_33014__$1 = (function (){var statearr_33019 = state_33014;
(statearr_33019[(7)] = inst_32979__$1);

return statearr_33019;
})();
if(cljs.core.truth_(inst_32980)){
var statearr_33020_33085 = state_33014__$1;
(statearr_33020_33085[(1)] = (5));

} else {
var statearr_33021_33086 = state_33014__$1;
(statearr_33021_33086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (15))){
var inst_32992 = (state_33014[(8)]);
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33014__$1,(18),to,inst_32992);
} else {
if((state_val_33015 === (21))){
var inst_33005 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
var statearr_33022_33087 = state_33014__$1;
(statearr_33022_33087[(2)] = inst_33005);

(statearr_33022_33087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (13))){
var inst_33007 = (state_33014[(2)]);
var state_33014__$1 = (function (){var statearr_33023 = state_33014;
(statearr_33023[(9)] = inst_33007);

return statearr_33023;
})();
var statearr_33024_33088 = state_33014__$1;
(statearr_33024_33088[(2)] = null);

(statearr_33024_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (6))){
var inst_32979 = (state_33014[(7)]);
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33014__$1,(11),inst_32979);
} else {
if((state_val_33015 === (17))){
var inst_33000 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
if(cljs.core.truth_(inst_33000)){
var statearr_33025_33089 = state_33014__$1;
(statearr_33025_33089[(1)] = (19));

} else {
var statearr_33026_33090 = state_33014__$1;
(statearr_33026_33090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (3))){
var inst_33012 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33014__$1,inst_33012);
} else {
if((state_val_33015 === (12))){
var inst_32989 = (state_33014[(10)]);
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33014__$1,(14),inst_32989);
} else {
if((state_val_33015 === (2))){
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33014__$1,(4),results);
} else {
if((state_val_33015 === (19))){
var state_33014__$1 = state_33014;
var statearr_33027_33091 = state_33014__$1;
(statearr_33027_33091[(2)] = null);

(statearr_33027_33091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (11))){
var inst_32989 = (state_33014[(2)]);
var state_33014__$1 = (function (){var statearr_33028 = state_33014;
(statearr_33028[(10)] = inst_32989);

return statearr_33028;
})();
var statearr_33029_33092 = state_33014__$1;
(statearr_33029_33092[(2)] = null);

(statearr_33029_33092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (9))){
var state_33014__$1 = state_33014;
var statearr_33030_33093 = state_33014__$1;
(statearr_33030_33093[(2)] = null);

(statearr_33030_33093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (5))){
var state_33014__$1 = state_33014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33031_33094 = state_33014__$1;
(statearr_33031_33094[(1)] = (8));

} else {
var statearr_33032_33095 = state_33014__$1;
(statearr_33032_33095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (14))){
var inst_32992 = (state_33014[(8)]);
var inst_32994 = (state_33014[(11)]);
var inst_32992__$1 = (state_33014[(2)]);
var inst_32993 = (inst_32992__$1 == null);
var inst_32994__$1 = cljs.core.not.call(null,inst_32993);
var state_33014__$1 = (function (){var statearr_33033 = state_33014;
(statearr_33033[(8)] = inst_32992__$1);

(statearr_33033[(11)] = inst_32994__$1);

return statearr_33033;
})();
if(inst_32994__$1){
var statearr_33034_33096 = state_33014__$1;
(statearr_33034_33096[(1)] = (15));

} else {
var statearr_33035_33097 = state_33014__$1;
(statearr_33035_33097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (16))){
var inst_32994 = (state_33014[(11)]);
var state_33014__$1 = state_33014;
var statearr_33036_33098 = state_33014__$1;
(statearr_33036_33098[(2)] = inst_32994);

(statearr_33036_33098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (10))){
var inst_32986 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
var statearr_33037_33099 = state_33014__$1;
(statearr_33037_33099[(2)] = inst_32986);

(statearr_33037_33099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (18))){
var inst_32997 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
var statearr_33038_33100 = state_33014__$1;
(statearr_33038_33100[(2)] = inst_32997);

(statearr_33038_33100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (8))){
var inst_32983 = cljs.core.async.close_BANG_.call(null,to);
var state_33014__$1 = state_33014;
var statearr_33039_33101 = state_33014__$1;
(statearr_33039_33101[(2)] = inst_32983);

(statearr_33039_33101[(1)] = (10));


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
});})(c__32489__auto__,jobs,results,process,async))
;
return ((function (switch__32377__auto__,c__32489__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0 = (function (){
var statearr_33043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__);

(statearr_33043[(1)] = (1));

return statearr_33043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1 = (function (state_33014){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_33014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e33044){if((e33044 instanceof Object)){
var ex__32381__auto__ = e33044;
var statearr_33045_33102 = state_33014;
(statearr_33045_33102[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33103 = state_33014;
state_33014 = G__33103;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__ = function(state_33014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1.call(this,state_33014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,jobs,results,process,async))
})();
var state__32491__auto__ = (function (){var statearr_33046 = f__32490__auto__.call(null);
(statearr_33046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_33046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,jobs,results,process,async))
);

return c__32489__auto__;
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
var args33104 = [];
var len__27650__auto___33107 = arguments.length;
var i__27651__auto___33108 = (0);
while(true){
if((i__27651__auto___33108 < len__27650__auto___33107)){
args33104.push((arguments[i__27651__auto___33108]));

var G__33109 = (i__27651__auto___33108 + (1));
i__27651__auto___33108 = G__33109;
continue;
} else {
}
break;
}

var G__33106 = args33104.length;
switch (G__33106) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33104.length)].join('')));

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
var args33111 = [];
var len__27650__auto___33114 = arguments.length;
var i__27651__auto___33115 = (0);
while(true){
if((i__27651__auto___33115 < len__27650__auto___33114)){
args33111.push((arguments[i__27651__auto___33115]));

var G__33116 = (i__27651__auto___33115 + (1));
i__27651__auto___33115 = G__33116;
continue;
} else {
}
break;
}

var G__33113 = args33111.length;
switch (G__33113) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33111.length)].join('')));

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
var args33118 = [];
var len__27650__auto___33171 = arguments.length;
var i__27651__auto___33172 = (0);
while(true){
if((i__27651__auto___33172 < len__27650__auto___33171)){
args33118.push((arguments[i__27651__auto___33172]));

var G__33173 = (i__27651__auto___33172 + (1));
i__27651__auto___33172 = G__33173;
continue;
} else {
}
break;
}

var G__33120 = args33118.length;
switch (G__33120) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33118.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32489__auto___33175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___33175,tc,fc){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___33175,tc,fc){
return (function (state_33146){
var state_val_33147 = (state_33146[(1)]);
if((state_val_33147 === (7))){
var inst_33142 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
var statearr_33148_33176 = state_33146__$1;
(statearr_33148_33176[(2)] = inst_33142);

(statearr_33148_33176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (1))){
var state_33146__$1 = state_33146;
var statearr_33149_33177 = state_33146__$1;
(statearr_33149_33177[(2)] = null);

(statearr_33149_33177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (4))){
var inst_33123 = (state_33146[(7)]);
var inst_33123__$1 = (state_33146[(2)]);
var inst_33124 = (inst_33123__$1 == null);
var state_33146__$1 = (function (){var statearr_33150 = state_33146;
(statearr_33150[(7)] = inst_33123__$1);

return statearr_33150;
})();
if(cljs.core.truth_(inst_33124)){
var statearr_33151_33178 = state_33146__$1;
(statearr_33151_33178[(1)] = (5));

} else {
var statearr_33152_33179 = state_33146__$1;
(statearr_33152_33179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (13))){
var state_33146__$1 = state_33146;
var statearr_33153_33180 = state_33146__$1;
(statearr_33153_33180[(2)] = null);

(statearr_33153_33180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (6))){
var inst_33123 = (state_33146[(7)]);
var inst_33129 = p.call(null,inst_33123);
var state_33146__$1 = state_33146;
if(cljs.core.truth_(inst_33129)){
var statearr_33154_33181 = state_33146__$1;
(statearr_33154_33181[(1)] = (9));

} else {
var statearr_33155_33182 = state_33146__$1;
(statearr_33155_33182[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (3))){
var inst_33144 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33146__$1,inst_33144);
} else {
if((state_val_33147 === (12))){
var state_33146__$1 = state_33146;
var statearr_33156_33183 = state_33146__$1;
(statearr_33156_33183[(2)] = null);

(statearr_33156_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (2))){
var state_33146__$1 = state_33146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33146__$1,(4),ch);
} else {
if((state_val_33147 === (11))){
var inst_33123 = (state_33146[(7)]);
var inst_33133 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33146__$1,(8),inst_33133,inst_33123);
} else {
if((state_val_33147 === (9))){
var state_33146__$1 = state_33146;
var statearr_33157_33184 = state_33146__$1;
(statearr_33157_33184[(2)] = tc);

(statearr_33157_33184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (5))){
var inst_33126 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33127 = cljs.core.async.close_BANG_.call(null,fc);
var state_33146__$1 = (function (){var statearr_33158 = state_33146;
(statearr_33158[(8)] = inst_33126);

return statearr_33158;
})();
var statearr_33159_33185 = state_33146__$1;
(statearr_33159_33185[(2)] = inst_33127);

(statearr_33159_33185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (14))){
var inst_33140 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
var statearr_33160_33186 = state_33146__$1;
(statearr_33160_33186[(2)] = inst_33140);

(statearr_33160_33186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (10))){
var state_33146__$1 = state_33146;
var statearr_33161_33187 = state_33146__$1;
(statearr_33161_33187[(2)] = fc);

(statearr_33161_33187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (8))){
var inst_33135 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
if(cljs.core.truth_(inst_33135)){
var statearr_33162_33188 = state_33146__$1;
(statearr_33162_33188[(1)] = (12));

} else {
var statearr_33163_33189 = state_33146__$1;
(statearr_33163_33189[(1)] = (13));

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
});})(c__32489__auto___33175,tc,fc))
;
return ((function (switch__32377__auto__,c__32489__auto___33175,tc,fc){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_33167 = [null,null,null,null,null,null,null,null,null];
(statearr_33167[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_33146){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_33146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e33168){if((e33168 instanceof Object)){
var ex__32381__auto__ = e33168;
var statearr_33169_33190 = state_33146;
(statearr_33169_33190[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33191 = state_33146;
state_33146 = G__33191;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_33146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_33146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___33175,tc,fc))
})();
var state__32491__auto__ = (function (){var statearr_33170 = f__32490__auto__.call(null);
(statearr_33170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___33175);

return statearr_33170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___33175,tc,fc))
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
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__){
return (function (state_33255){
var state_val_33256 = (state_33255[(1)]);
if((state_val_33256 === (7))){
var inst_33251 = (state_33255[(2)]);
var state_33255__$1 = state_33255;
var statearr_33257_33278 = state_33255__$1;
(statearr_33257_33278[(2)] = inst_33251);

(statearr_33257_33278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (1))){
var inst_33235 = init;
var state_33255__$1 = (function (){var statearr_33258 = state_33255;
(statearr_33258[(7)] = inst_33235);

return statearr_33258;
})();
var statearr_33259_33279 = state_33255__$1;
(statearr_33259_33279[(2)] = null);

(statearr_33259_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (4))){
var inst_33238 = (state_33255[(8)]);
var inst_33238__$1 = (state_33255[(2)]);
var inst_33239 = (inst_33238__$1 == null);
var state_33255__$1 = (function (){var statearr_33260 = state_33255;
(statearr_33260[(8)] = inst_33238__$1);

return statearr_33260;
})();
if(cljs.core.truth_(inst_33239)){
var statearr_33261_33280 = state_33255__$1;
(statearr_33261_33280[(1)] = (5));

} else {
var statearr_33262_33281 = state_33255__$1;
(statearr_33262_33281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (6))){
var inst_33238 = (state_33255[(8)]);
var inst_33235 = (state_33255[(7)]);
var inst_33242 = (state_33255[(9)]);
var inst_33242__$1 = f.call(null,inst_33235,inst_33238);
var inst_33243 = cljs.core.reduced_QMARK_.call(null,inst_33242__$1);
var state_33255__$1 = (function (){var statearr_33263 = state_33255;
(statearr_33263[(9)] = inst_33242__$1);

return statearr_33263;
})();
if(inst_33243){
var statearr_33264_33282 = state_33255__$1;
(statearr_33264_33282[(1)] = (8));

} else {
var statearr_33265_33283 = state_33255__$1;
(statearr_33265_33283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (3))){
var inst_33253 = (state_33255[(2)]);
var state_33255__$1 = state_33255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33255__$1,inst_33253);
} else {
if((state_val_33256 === (2))){
var state_33255__$1 = state_33255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33255__$1,(4),ch);
} else {
if((state_val_33256 === (9))){
var inst_33242 = (state_33255[(9)]);
var inst_33235 = inst_33242;
var state_33255__$1 = (function (){var statearr_33266 = state_33255;
(statearr_33266[(7)] = inst_33235);

return statearr_33266;
})();
var statearr_33267_33284 = state_33255__$1;
(statearr_33267_33284[(2)] = null);

(statearr_33267_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (5))){
var inst_33235 = (state_33255[(7)]);
var state_33255__$1 = state_33255;
var statearr_33268_33285 = state_33255__$1;
(statearr_33268_33285[(2)] = inst_33235);

(statearr_33268_33285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (10))){
var inst_33249 = (state_33255[(2)]);
var state_33255__$1 = state_33255;
var statearr_33269_33286 = state_33255__$1;
(statearr_33269_33286[(2)] = inst_33249);

(statearr_33269_33286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (8))){
var inst_33242 = (state_33255[(9)]);
var inst_33245 = cljs.core.deref.call(null,inst_33242);
var state_33255__$1 = state_33255;
var statearr_33270_33287 = state_33255__$1;
(statearr_33270_33287[(2)] = inst_33245);

(statearr_33270_33287[(1)] = (10));


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
});})(c__32489__auto__))
;
return ((function (switch__32377__auto__,c__32489__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32378__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32378__auto____0 = (function (){
var statearr_33274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33274[(0)] = cljs$core$async$reduce_$_state_machine__32378__auto__);

(statearr_33274[(1)] = (1));

return statearr_33274;
});
var cljs$core$async$reduce_$_state_machine__32378__auto____1 = (function (state_33255){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_33255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e33275){if((e33275 instanceof Object)){
var ex__32381__auto__ = e33275;
var statearr_33276_33288 = state_33255;
(statearr_33276_33288[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33289 = state_33255;
state_33255 = G__33289;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32378__auto__ = function(state_33255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32378__auto____1.call(this,state_33255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32378__auto____0;
cljs$core$async$reduce_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32378__auto____1;
return cljs$core$async$reduce_$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__))
})();
var state__32491__auto__ = (function (){var statearr_33277 = f__32490__auto__.call(null);
(statearr_33277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_33277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__))
);

return c__32489__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__,f__$1){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__,f__$1){
return (function (state_33309){
var state_val_33310 = (state_33309[(1)]);
if((state_val_33310 === (1))){
var inst_33304 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33309__$1 = state_33309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33309__$1,(2),inst_33304);
} else {
if((state_val_33310 === (2))){
var inst_33306 = (state_33309[(2)]);
var inst_33307 = f__$1.call(null,inst_33306);
var state_33309__$1 = state_33309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33309__$1,inst_33307);
} else {
return null;
}
}
});})(c__32489__auto__,f__$1))
;
return ((function (switch__32377__auto__,c__32489__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32378__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32378__auto____0 = (function (){
var statearr_33314 = [null,null,null,null,null,null,null];
(statearr_33314[(0)] = cljs$core$async$transduce_$_state_machine__32378__auto__);

(statearr_33314[(1)] = (1));

return statearr_33314;
});
var cljs$core$async$transduce_$_state_machine__32378__auto____1 = (function (state_33309){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_33309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e33315){if((e33315 instanceof Object)){
var ex__32381__auto__ = e33315;
var statearr_33316_33318 = state_33309;
(statearr_33316_33318[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33319 = state_33309;
state_33309 = G__33319;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32378__auto__ = function(state_33309){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32378__auto____1.call(this,state_33309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32378__auto____0;
cljs$core$async$transduce_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32378__auto____1;
return cljs$core$async$transduce_$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__,f__$1))
})();
var state__32491__auto__ = (function (){var statearr_33317 = f__32490__auto__.call(null);
(statearr_33317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_33317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__,f__$1))
);

return c__32489__auto__;
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
var args33320 = [];
var len__27650__auto___33372 = arguments.length;
var i__27651__auto___33373 = (0);
while(true){
if((i__27651__auto___33373 < len__27650__auto___33372)){
args33320.push((arguments[i__27651__auto___33373]));

var G__33374 = (i__27651__auto___33373 + (1));
i__27651__auto___33373 = G__33374;
continue;
} else {
}
break;
}

var G__33322 = args33320.length;
switch (G__33322) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33320.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__){
return (function (state_33347){
var state_val_33348 = (state_33347[(1)]);
if((state_val_33348 === (7))){
var inst_33329 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
var statearr_33349_33376 = state_33347__$1;
(statearr_33349_33376[(2)] = inst_33329);

(statearr_33349_33376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (1))){
var inst_33323 = cljs.core.seq.call(null,coll);
var inst_33324 = inst_33323;
var state_33347__$1 = (function (){var statearr_33350 = state_33347;
(statearr_33350[(7)] = inst_33324);

return statearr_33350;
})();
var statearr_33351_33377 = state_33347__$1;
(statearr_33351_33377[(2)] = null);

(statearr_33351_33377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (4))){
var inst_33324 = (state_33347[(7)]);
var inst_33327 = cljs.core.first.call(null,inst_33324);
var state_33347__$1 = state_33347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33347__$1,(7),ch,inst_33327);
} else {
if((state_val_33348 === (13))){
var inst_33341 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
var statearr_33352_33378 = state_33347__$1;
(statearr_33352_33378[(2)] = inst_33341);

(statearr_33352_33378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (6))){
var inst_33332 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
if(cljs.core.truth_(inst_33332)){
var statearr_33353_33379 = state_33347__$1;
(statearr_33353_33379[(1)] = (8));

} else {
var statearr_33354_33380 = state_33347__$1;
(statearr_33354_33380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (3))){
var inst_33345 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33347__$1,inst_33345);
} else {
if((state_val_33348 === (12))){
var state_33347__$1 = state_33347;
var statearr_33355_33381 = state_33347__$1;
(statearr_33355_33381[(2)] = null);

(statearr_33355_33381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (2))){
var inst_33324 = (state_33347[(7)]);
var state_33347__$1 = state_33347;
if(cljs.core.truth_(inst_33324)){
var statearr_33356_33382 = state_33347__$1;
(statearr_33356_33382[(1)] = (4));

} else {
var statearr_33357_33383 = state_33347__$1;
(statearr_33357_33383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (11))){
var inst_33338 = cljs.core.async.close_BANG_.call(null,ch);
var state_33347__$1 = state_33347;
var statearr_33358_33384 = state_33347__$1;
(statearr_33358_33384[(2)] = inst_33338);

(statearr_33358_33384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (9))){
var state_33347__$1 = state_33347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33359_33385 = state_33347__$1;
(statearr_33359_33385[(1)] = (11));

} else {
var statearr_33360_33386 = state_33347__$1;
(statearr_33360_33386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (5))){
var inst_33324 = (state_33347[(7)]);
var state_33347__$1 = state_33347;
var statearr_33361_33387 = state_33347__$1;
(statearr_33361_33387[(2)] = inst_33324);

(statearr_33361_33387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (10))){
var inst_33343 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
var statearr_33362_33388 = state_33347__$1;
(statearr_33362_33388[(2)] = inst_33343);

(statearr_33362_33388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (8))){
var inst_33324 = (state_33347[(7)]);
var inst_33334 = cljs.core.next.call(null,inst_33324);
var inst_33324__$1 = inst_33334;
var state_33347__$1 = (function (){var statearr_33363 = state_33347;
(statearr_33363[(7)] = inst_33324__$1);

return statearr_33363;
})();
var statearr_33364_33389 = state_33347__$1;
(statearr_33364_33389[(2)] = null);

(statearr_33364_33389[(1)] = (2));


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
});})(c__32489__auto__))
;
return ((function (switch__32377__auto__,c__32489__auto__){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_33368 = [null,null,null,null,null,null,null,null];
(statearr_33368[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_33368[(1)] = (1));

return statearr_33368;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_33347){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_33347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e33369){if((e33369 instanceof Object)){
var ex__32381__auto__ = e33369;
var statearr_33370_33390 = state_33347;
(statearr_33370_33390[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33391 = state_33347;
state_33347 = G__33391;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_33347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_33347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__))
})();
var state__32491__auto__ = (function (){var statearr_33371 = f__32490__auto__.call(null);
(statearr_33371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_33371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__))
);

return c__32489__auto__;
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
var x__27238__auto__ = (((_ == null))?null:_);
var m__27239__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,_);
} else {
var m__27239__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,_);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27239__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m,ch);
} else {
var m__27239__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m,ch);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m);
} else {
var m__27239__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33617 = (function (mult,ch,cs,meta33618){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33618 = meta33618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33619,meta33618__$1){
var self__ = this;
var _33619__$1 = this;
return (new cljs.core.async.t_cljs$core$async33617(self__.mult,self__.ch,self__.cs,meta33618__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33619){
var self__ = this;
var _33619__$1 = this;
return self__.meta33618;
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33618","meta33618",1385745087,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33617";

cljs.core.async.t_cljs$core$async33617.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async33617");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33617 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33617(mult__$1,ch__$1,cs__$1,meta33618){
return (new cljs.core.async.t_cljs$core$async33617(mult__$1,ch__$1,cs__$1,meta33618));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33617(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32489__auto___33842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___33842,cs,m,dchan,dctr,done){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___33842,cs,m,dchan,dctr,done){
return (function (state_33754){
var state_val_33755 = (state_33754[(1)]);
if((state_val_33755 === (7))){
var inst_33750 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33756_33843 = state_33754__$1;
(statearr_33756_33843[(2)] = inst_33750);

(statearr_33756_33843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (20))){
var inst_33653 = (state_33754[(7)]);
var inst_33665 = cljs.core.first.call(null,inst_33653);
var inst_33666 = cljs.core.nth.call(null,inst_33665,(0),null);
var inst_33667 = cljs.core.nth.call(null,inst_33665,(1),null);
var state_33754__$1 = (function (){var statearr_33757 = state_33754;
(statearr_33757[(8)] = inst_33666);

return statearr_33757;
})();
if(cljs.core.truth_(inst_33667)){
var statearr_33758_33844 = state_33754__$1;
(statearr_33758_33844[(1)] = (22));

} else {
var statearr_33759_33845 = state_33754__$1;
(statearr_33759_33845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (27))){
var inst_33622 = (state_33754[(9)]);
var inst_33695 = (state_33754[(10)]);
var inst_33702 = (state_33754[(11)]);
var inst_33697 = (state_33754[(12)]);
var inst_33702__$1 = cljs.core._nth.call(null,inst_33695,inst_33697);
var inst_33703 = cljs.core.async.put_BANG_.call(null,inst_33702__$1,inst_33622,done);
var state_33754__$1 = (function (){var statearr_33760 = state_33754;
(statearr_33760[(11)] = inst_33702__$1);

return statearr_33760;
})();
if(cljs.core.truth_(inst_33703)){
var statearr_33761_33846 = state_33754__$1;
(statearr_33761_33846[(1)] = (30));

} else {
var statearr_33762_33847 = state_33754__$1;
(statearr_33762_33847[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (1))){
var state_33754__$1 = state_33754;
var statearr_33763_33848 = state_33754__$1;
(statearr_33763_33848[(2)] = null);

(statearr_33763_33848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (24))){
var inst_33653 = (state_33754[(7)]);
var inst_33672 = (state_33754[(2)]);
var inst_33673 = cljs.core.next.call(null,inst_33653);
var inst_33631 = inst_33673;
var inst_33632 = null;
var inst_33633 = (0);
var inst_33634 = (0);
var state_33754__$1 = (function (){var statearr_33764 = state_33754;
(statearr_33764[(13)] = inst_33632);

(statearr_33764[(14)] = inst_33633);

(statearr_33764[(15)] = inst_33672);

(statearr_33764[(16)] = inst_33634);

(statearr_33764[(17)] = inst_33631);

return statearr_33764;
})();
var statearr_33765_33849 = state_33754__$1;
(statearr_33765_33849[(2)] = null);

(statearr_33765_33849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (39))){
var state_33754__$1 = state_33754;
var statearr_33769_33850 = state_33754__$1;
(statearr_33769_33850[(2)] = null);

(statearr_33769_33850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (4))){
var inst_33622 = (state_33754[(9)]);
var inst_33622__$1 = (state_33754[(2)]);
var inst_33623 = (inst_33622__$1 == null);
var state_33754__$1 = (function (){var statearr_33770 = state_33754;
(statearr_33770[(9)] = inst_33622__$1);

return statearr_33770;
})();
if(cljs.core.truth_(inst_33623)){
var statearr_33771_33851 = state_33754__$1;
(statearr_33771_33851[(1)] = (5));

} else {
var statearr_33772_33852 = state_33754__$1;
(statearr_33772_33852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (15))){
var inst_33632 = (state_33754[(13)]);
var inst_33633 = (state_33754[(14)]);
var inst_33634 = (state_33754[(16)]);
var inst_33631 = (state_33754[(17)]);
var inst_33649 = (state_33754[(2)]);
var inst_33650 = (inst_33634 + (1));
var tmp33766 = inst_33632;
var tmp33767 = inst_33633;
var tmp33768 = inst_33631;
var inst_33631__$1 = tmp33768;
var inst_33632__$1 = tmp33766;
var inst_33633__$1 = tmp33767;
var inst_33634__$1 = inst_33650;
var state_33754__$1 = (function (){var statearr_33773 = state_33754;
(statearr_33773[(18)] = inst_33649);

(statearr_33773[(13)] = inst_33632__$1);

(statearr_33773[(14)] = inst_33633__$1);

(statearr_33773[(16)] = inst_33634__$1);

(statearr_33773[(17)] = inst_33631__$1);

return statearr_33773;
})();
var statearr_33774_33853 = state_33754__$1;
(statearr_33774_33853[(2)] = null);

(statearr_33774_33853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (21))){
var inst_33676 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33778_33854 = state_33754__$1;
(statearr_33778_33854[(2)] = inst_33676);

(statearr_33778_33854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (31))){
var inst_33702 = (state_33754[(11)]);
var inst_33706 = done.call(null,null);
var inst_33707 = cljs.core.async.untap_STAR_.call(null,m,inst_33702);
var state_33754__$1 = (function (){var statearr_33779 = state_33754;
(statearr_33779[(19)] = inst_33706);

return statearr_33779;
})();
var statearr_33780_33855 = state_33754__$1;
(statearr_33780_33855[(2)] = inst_33707);

(statearr_33780_33855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (32))){
var inst_33695 = (state_33754[(10)]);
var inst_33696 = (state_33754[(20)]);
var inst_33697 = (state_33754[(12)]);
var inst_33694 = (state_33754[(21)]);
var inst_33709 = (state_33754[(2)]);
var inst_33710 = (inst_33697 + (1));
var tmp33775 = inst_33695;
var tmp33776 = inst_33696;
var tmp33777 = inst_33694;
var inst_33694__$1 = tmp33777;
var inst_33695__$1 = tmp33775;
var inst_33696__$1 = tmp33776;
var inst_33697__$1 = inst_33710;
var state_33754__$1 = (function (){var statearr_33781 = state_33754;
(statearr_33781[(22)] = inst_33709);

(statearr_33781[(10)] = inst_33695__$1);

(statearr_33781[(20)] = inst_33696__$1);

(statearr_33781[(12)] = inst_33697__$1);

(statearr_33781[(21)] = inst_33694__$1);

return statearr_33781;
})();
var statearr_33782_33856 = state_33754__$1;
(statearr_33782_33856[(2)] = null);

(statearr_33782_33856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (40))){
var inst_33722 = (state_33754[(23)]);
var inst_33726 = done.call(null,null);
var inst_33727 = cljs.core.async.untap_STAR_.call(null,m,inst_33722);
var state_33754__$1 = (function (){var statearr_33783 = state_33754;
(statearr_33783[(24)] = inst_33726);

return statearr_33783;
})();
var statearr_33784_33857 = state_33754__$1;
(statearr_33784_33857[(2)] = inst_33727);

(statearr_33784_33857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (33))){
var inst_33713 = (state_33754[(25)]);
var inst_33715 = cljs.core.chunked_seq_QMARK_.call(null,inst_33713);
var state_33754__$1 = state_33754;
if(inst_33715){
var statearr_33785_33858 = state_33754__$1;
(statearr_33785_33858[(1)] = (36));

} else {
var statearr_33786_33859 = state_33754__$1;
(statearr_33786_33859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (13))){
var inst_33643 = (state_33754[(26)]);
var inst_33646 = cljs.core.async.close_BANG_.call(null,inst_33643);
var state_33754__$1 = state_33754;
var statearr_33787_33860 = state_33754__$1;
(statearr_33787_33860[(2)] = inst_33646);

(statearr_33787_33860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (22))){
var inst_33666 = (state_33754[(8)]);
var inst_33669 = cljs.core.async.close_BANG_.call(null,inst_33666);
var state_33754__$1 = state_33754;
var statearr_33788_33861 = state_33754__$1;
(statearr_33788_33861[(2)] = inst_33669);

(statearr_33788_33861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (36))){
var inst_33713 = (state_33754[(25)]);
var inst_33717 = cljs.core.chunk_first.call(null,inst_33713);
var inst_33718 = cljs.core.chunk_rest.call(null,inst_33713);
var inst_33719 = cljs.core.count.call(null,inst_33717);
var inst_33694 = inst_33718;
var inst_33695 = inst_33717;
var inst_33696 = inst_33719;
var inst_33697 = (0);
var state_33754__$1 = (function (){var statearr_33789 = state_33754;
(statearr_33789[(10)] = inst_33695);

(statearr_33789[(20)] = inst_33696);

(statearr_33789[(12)] = inst_33697);

(statearr_33789[(21)] = inst_33694);

return statearr_33789;
})();
var statearr_33790_33862 = state_33754__$1;
(statearr_33790_33862[(2)] = null);

(statearr_33790_33862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (41))){
var inst_33713 = (state_33754[(25)]);
var inst_33729 = (state_33754[(2)]);
var inst_33730 = cljs.core.next.call(null,inst_33713);
var inst_33694 = inst_33730;
var inst_33695 = null;
var inst_33696 = (0);
var inst_33697 = (0);
var state_33754__$1 = (function (){var statearr_33791 = state_33754;
(statearr_33791[(10)] = inst_33695);

(statearr_33791[(20)] = inst_33696);

(statearr_33791[(27)] = inst_33729);

(statearr_33791[(12)] = inst_33697);

(statearr_33791[(21)] = inst_33694);

return statearr_33791;
})();
var statearr_33792_33863 = state_33754__$1;
(statearr_33792_33863[(2)] = null);

(statearr_33792_33863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (43))){
var state_33754__$1 = state_33754;
var statearr_33793_33864 = state_33754__$1;
(statearr_33793_33864[(2)] = null);

(statearr_33793_33864[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (29))){
var inst_33738 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33794_33865 = state_33754__$1;
(statearr_33794_33865[(2)] = inst_33738);

(statearr_33794_33865[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (44))){
var inst_33747 = (state_33754[(2)]);
var state_33754__$1 = (function (){var statearr_33795 = state_33754;
(statearr_33795[(28)] = inst_33747);

return statearr_33795;
})();
var statearr_33796_33866 = state_33754__$1;
(statearr_33796_33866[(2)] = null);

(statearr_33796_33866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (6))){
var inst_33686 = (state_33754[(29)]);
var inst_33685 = cljs.core.deref.call(null,cs);
var inst_33686__$1 = cljs.core.keys.call(null,inst_33685);
var inst_33687 = cljs.core.count.call(null,inst_33686__$1);
var inst_33688 = cljs.core.reset_BANG_.call(null,dctr,inst_33687);
var inst_33693 = cljs.core.seq.call(null,inst_33686__$1);
var inst_33694 = inst_33693;
var inst_33695 = null;
var inst_33696 = (0);
var inst_33697 = (0);
var state_33754__$1 = (function (){var statearr_33797 = state_33754;
(statearr_33797[(30)] = inst_33688);

(statearr_33797[(10)] = inst_33695);

(statearr_33797[(20)] = inst_33696);

(statearr_33797[(29)] = inst_33686__$1);

(statearr_33797[(12)] = inst_33697);

(statearr_33797[(21)] = inst_33694);

return statearr_33797;
})();
var statearr_33798_33867 = state_33754__$1;
(statearr_33798_33867[(2)] = null);

(statearr_33798_33867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (28))){
var inst_33713 = (state_33754[(25)]);
var inst_33694 = (state_33754[(21)]);
var inst_33713__$1 = cljs.core.seq.call(null,inst_33694);
var state_33754__$1 = (function (){var statearr_33799 = state_33754;
(statearr_33799[(25)] = inst_33713__$1);

return statearr_33799;
})();
if(inst_33713__$1){
var statearr_33800_33868 = state_33754__$1;
(statearr_33800_33868[(1)] = (33));

} else {
var statearr_33801_33869 = state_33754__$1;
(statearr_33801_33869[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (25))){
var inst_33696 = (state_33754[(20)]);
var inst_33697 = (state_33754[(12)]);
var inst_33699 = (inst_33697 < inst_33696);
var inst_33700 = inst_33699;
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33700)){
var statearr_33802_33870 = state_33754__$1;
(statearr_33802_33870[(1)] = (27));

} else {
var statearr_33803_33871 = state_33754__$1;
(statearr_33803_33871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (34))){
var state_33754__$1 = state_33754;
var statearr_33804_33872 = state_33754__$1;
(statearr_33804_33872[(2)] = null);

(statearr_33804_33872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (17))){
var state_33754__$1 = state_33754;
var statearr_33805_33873 = state_33754__$1;
(statearr_33805_33873[(2)] = null);

(statearr_33805_33873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (3))){
var inst_33752 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33754__$1,inst_33752);
} else {
if((state_val_33755 === (12))){
var inst_33681 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33806_33874 = state_33754__$1;
(statearr_33806_33874[(2)] = inst_33681);

(statearr_33806_33874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (2))){
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33754__$1,(4),ch);
} else {
if((state_val_33755 === (23))){
var state_33754__$1 = state_33754;
var statearr_33807_33875 = state_33754__$1;
(statearr_33807_33875[(2)] = null);

(statearr_33807_33875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (35))){
var inst_33736 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33808_33876 = state_33754__$1;
(statearr_33808_33876[(2)] = inst_33736);

(statearr_33808_33876[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (19))){
var inst_33653 = (state_33754[(7)]);
var inst_33657 = cljs.core.chunk_first.call(null,inst_33653);
var inst_33658 = cljs.core.chunk_rest.call(null,inst_33653);
var inst_33659 = cljs.core.count.call(null,inst_33657);
var inst_33631 = inst_33658;
var inst_33632 = inst_33657;
var inst_33633 = inst_33659;
var inst_33634 = (0);
var state_33754__$1 = (function (){var statearr_33809 = state_33754;
(statearr_33809[(13)] = inst_33632);

(statearr_33809[(14)] = inst_33633);

(statearr_33809[(16)] = inst_33634);

(statearr_33809[(17)] = inst_33631);

return statearr_33809;
})();
var statearr_33810_33877 = state_33754__$1;
(statearr_33810_33877[(2)] = null);

(statearr_33810_33877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (11))){
var inst_33653 = (state_33754[(7)]);
var inst_33631 = (state_33754[(17)]);
var inst_33653__$1 = cljs.core.seq.call(null,inst_33631);
var state_33754__$1 = (function (){var statearr_33811 = state_33754;
(statearr_33811[(7)] = inst_33653__$1);

return statearr_33811;
})();
if(inst_33653__$1){
var statearr_33812_33878 = state_33754__$1;
(statearr_33812_33878[(1)] = (16));

} else {
var statearr_33813_33879 = state_33754__$1;
(statearr_33813_33879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (9))){
var inst_33683 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33814_33880 = state_33754__$1;
(statearr_33814_33880[(2)] = inst_33683);

(statearr_33814_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (5))){
var inst_33629 = cljs.core.deref.call(null,cs);
var inst_33630 = cljs.core.seq.call(null,inst_33629);
var inst_33631 = inst_33630;
var inst_33632 = null;
var inst_33633 = (0);
var inst_33634 = (0);
var state_33754__$1 = (function (){var statearr_33815 = state_33754;
(statearr_33815[(13)] = inst_33632);

(statearr_33815[(14)] = inst_33633);

(statearr_33815[(16)] = inst_33634);

(statearr_33815[(17)] = inst_33631);

return statearr_33815;
})();
var statearr_33816_33881 = state_33754__$1;
(statearr_33816_33881[(2)] = null);

(statearr_33816_33881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (14))){
var state_33754__$1 = state_33754;
var statearr_33817_33882 = state_33754__$1;
(statearr_33817_33882[(2)] = null);

(statearr_33817_33882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (45))){
var inst_33744 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33818_33883 = state_33754__$1;
(statearr_33818_33883[(2)] = inst_33744);

(statearr_33818_33883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (26))){
var inst_33686 = (state_33754[(29)]);
var inst_33740 = (state_33754[(2)]);
var inst_33741 = cljs.core.seq.call(null,inst_33686);
var state_33754__$1 = (function (){var statearr_33819 = state_33754;
(statearr_33819[(31)] = inst_33740);

return statearr_33819;
})();
if(inst_33741){
var statearr_33820_33884 = state_33754__$1;
(statearr_33820_33884[(1)] = (42));

} else {
var statearr_33821_33885 = state_33754__$1;
(statearr_33821_33885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (16))){
var inst_33653 = (state_33754[(7)]);
var inst_33655 = cljs.core.chunked_seq_QMARK_.call(null,inst_33653);
var state_33754__$1 = state_33754;
if(inst_33655){
var statearr_33822_33886 = state_33754__$1;
(statearr_33822_33886[(1)] = (19));

} else {
var statearr_33823_33887 = state_33754__$1;
(statearr_33823_33887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (38))){
var inst_33733 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33824_33888 = state_33754__$1;
(statearr_33824_33888[(2)] = inst_33733);

(statearr_33824_33888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (30))){
var state_33754__$1 = state_33754;
var statearr_33825_33889 = state_33754__$1;
(statearr_33825_33889[(2)] = null);

(statearr_33825_33889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (10))){
var inst_33632 = (state_33754[(13)]);
var inst_33634 = (state_33754[(16)]);
var inst_33642 = cljs.core._nth.call(null,inst_33632,inst_33634);
var inst_33643 = cljs.core.nth.call(null,inst_33642,(0),null);
var inst_33644 = cljs.core.nth.call(null,inst_33642,(1),null);
var state_33754__$1 = (function (){var statearr_33826 = state_33754;
(statearr_33826[(26)] = inst_33643);

return statearr_33826;
})();
if(cljs.core.truth_(inst_33644)){
var statearr_33827_33890 = state_33754__$1;
(statearr_33827_33890[(1)] = (13));

} else {
var statearr_33828_33891 = state_33754__$1;
(statearr_33828_33891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (18))){
var inst_33679 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33829_33892 = state_33754__$1;
(statearr_33829_33892[(2)] = inst_33679);

(statearr_33829_33892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (42))){
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33754__$1,(45),dchan);
} else {
if((state_val_33755 === (37))){
var inst_33722 = (state_33754[(23)]);
var inst_33622 = (state_33754[(9)]);
var inst_33713 = (state_33754[(25)]);
var inst_33722__$1 = cljs.core.first.call(null,inst_33713);
var inst_33723 = cljs.core.async.put_BANG_.call(null,inst_33722__$1,inst_33622,done);
var state_33754__$1 = (function (){var statearr_33830 = state_33754;
(statearr_33830[(23)] = inst_33722__$1);

return statearr_33830;
})();
if(cljs.core.truth_(inst_33723)){
var statearr_33831_33893 = state_33754__$1;
(statearr_33831_33893[(1)] = (39));

} else {
var statearr_33832_33894 = state_33754__$1;
(statearr_33832_33894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (8))){
var inst_33633 = (state_33754[(14)]);
var inst_33634 = (state_33754[(16)]);
var inst_33636 = (inst_33634 < inst_33633);
var inst_33637 = inst_33636;
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33637)){
var statearr_33833_33895 = state_33754__$1;
(statearr_33833_33895[(1)] = (10));

} else {
var statearr_33834_33896 = state_33754__$1;
(statearr_33834_33896[(1)] = (11));

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
});})(c__32489__auto___33842,cs,m,dchan,dctr,done))
;
return ((function (switch__32377__auto__,c__32489__auto___33842,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32378__auto__ = null;
var cljs$core$async$mult_$_state_machine__32378__auto____0 = (function (){
var statearr_33838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33838[(0)] = cljs$core$async$mult_$_state_machine__32378__auto__);

(statearr_33838[(1)] = (1));

return statearr_33838;
});
var cljs$core$async$mult_$_state_machine__32378__auto____1 = (function (state_33754){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_33754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e33839){if((e33839 instanceof Object)){
var ex__32381__auto__ = e33839;
var statearr_33840_33897 = state_33754;
(statearr_33840_33897[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33898 = state_33754;
state_33754 = G__33898;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32378__auto__ = function(state_33754){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32378__auto____1.call(this,state_33754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32378__auto____0;
cljs$core$async$mult_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32378__auto____1;
return cljs$core$async$mult_$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___33842,cs,m,dchan,dctr,done))
})();
var state__32491__auto__ = (function (){var statearr_33841 = f__32490__auto__.call(null);
(statearr_33841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___33842);

return statearr_33841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___33842,cs,m,dchan,dctr,done))
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
var args33899 = [];
var len__27650__auto___33902 = arguments.length;
var i__27651__auto___33903 = (0);
while(true){
if((i__27651__auto___33903 < len__27650__auto___33902)){
args33899.push((arguments[i__27651__auto___33903]));

var G__33904 = (i__27651__auto___33903 + (1));
i__27651__auto___33903 = G__33904;
continue;
} else {
}
break;
}

var G__33901 = args33899.length;
switch (G__33901) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33899.length)].join('')));

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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m,ch);
} else {
var m__27239__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m,ch);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m,ch);
} else {
var m__27239__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m,ch);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m);
} else {
var m__27239__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m,state_map);
} else {
var m__27239__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m,state_map);
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
var x__27238__auto__ = (((m == null))?null:m);
var m__27239__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,m,mode);
} else {
var m__27239__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27657__auto__ = [];
var len__27650__auto___33916 = arguments.length;
var i__27651__auto___33917 = (0);
while(true){
if((i__27651__auto___33917 < len__27650__auto___33916)){
args__27657__auto__.push((arguments[i__27651__auto___33917]));

var G__33918 = (i__27651__auto___33917 + (1));
i__27651__auto___33917 = G__33918;
continue;
} else {
}
break;
}

var argseq__27658__auto__ = ((((3) < args__27657__auto__.length))?(new cljs.core.IndexedSeq(args__27657__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27658__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33910){
var map__33911 = p__33910;
var map__33911__$1 = ((((!((map__33911 == null)))?((((map__33911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33911):map__33911);
var opts = map__33911__$1;
var statearr_33913_33919 = state;
(statearr_33913_33919[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33911,map__33911__$1,opts){
return (function (val){
var statearr_33914_33920 = state;
(statearr_33914_33920[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33911,map__33911__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33915_33921 = state;
(statearr_33915_33921[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33906){
var G__33907 = cljs.core.first.call(null,seq33906);
var seq33906__$1 = cljs.core.next.call(null,seq33906);
var G__33908 = cljs.core.first.call(null,seq33906__$1);
var seq33906__$2 = cljs.core.next.call(null,seq33906__$1);
var G__33909 = cljs.core.first.call(null,seq33906__$2);
var seq33906__$3 = cljs.core.next.call(null,seq33906__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33907,G__33908,G__33909,seq33906__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34087 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34088){
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
this.meta34088 = meta34088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34089,meta34088__$1){
var self__ = this;
var _34089__$1 = this;
return (new cljs.core.async.t_cljs$core$async34087(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34089){
var self__ = this;
var _34089__$1 = this;
return self__.meta34088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34087.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34088","meta34088",2092573136,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34087";

cljs.core.async.t_cljs$core$async34087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async34087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34087(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34088){
return (new cljs.core.async.t_cljs$core$async34087(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34087(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32489__auto___34252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___34252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___34252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34189){
var state_val_34190 = (state_34189[(1)]);
if((state_val_34190 === (7))){
var inst_34105 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34191_34253 = state_34189__$1;
(statearr_34191_34253[(2)] = inst_34105);

(statearr_34191_34253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (20))){
var inst_34117 = (state_34189[(7)]);
var state_34189__$1 = state_34189;
var statearr_34192_34254 = state_34189__$1;
(statearr_34192_34254[(2)] = inst_34117);

(statearr_34192_34254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (27))){
var state_34189__$1 = state_34189;
var statearr_34193_34255 = state_34189__$1;
(statearr_34193_34255[(2)] = null);

(statearr_34193_34255[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (1))){
var inst_34093 = (state_34189[(8)]);
var inst_34093__$1 = calc_state.call(null);
var inst_34095 = (inst_34093__$1 == null);
var inst_34096 = cljs.core.not.call(null,inst_34095);
var state_34189__$1 = (function (){var statearr_34194 = state_34189;
(statearr_34194[(8)] = inst_34093__$1);

return statearr_34194;
})();
if(inst_34096){
var statearr_34195_34256 = state_34189__$1;
(statearr_34195_34256[(1)] = (2));

} else {
var statearr_34196_34257 = state_34189__$1;
(statearr_34196_34257[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (24))){
var inst_34149 = (state_34189[(9)]);
var inst_34140 = (state_34189[(10)]);
var inst_34163 = (state_34189[(11)]);
var inst_34163__$1 = inst_34140.call(null,inst_34149);
var state_34189__$1 = (function (){var statearr_34197 = state_34189;
(statearr_34197[(11)] = inst_34163__$1);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34163__$1)){
var statearr_34198_34258 = state_34189__$1;
(statearr_34198_34258[(1)] = (29));

} else {
var statearr_34199_34259 = state_34189__$1;
(statearr_34199_34259[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (4))){
var inst_34108 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34108)){
var statearr_34200_34260 = state_34189__$1;
(statearr_34200_34260[(1)] = (8));

} else {
var statearr_34201_34261 = state_34189__$1;
(statearr_34201_34261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (15))){
var inst_34134 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34134)){
var statearr_34202_34262 = state_34189__$1;
(statearr_34202_34262[(1)] = (19));

} else {
var statearr_34203_34263 = state_34189__$1;
(statearr_34203_34263[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (21))){
var inst_34139 = (state_34189[(12)]);
var inst_34139__$1 = (state_34189[(2)]);
var inst_34140 = cljs.core.get.call(null,inst_34139__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34141 = cljs.core.get.call(null,inst_34139__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34142 = cljs.core.get.call(null,inst_34139__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34189__$1 = (function (){var statearr_34204 = state_34189;
(statearr_34204[(12)] = inst_34139__$1);

(statearr_34204[(10)] = inst_34140);

(statearr_34204[(13)] = inst_34141);

return statearr_34204;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34189__$1,(22),inst_34142);
} else {
if((state_val_34190 === (31))){
var inst_34171 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34171)){
var statearr_34205_34264 = state_34189__$1;
(statearr_34205_34264[(1)] = (32));

} else {
var statearr_34206_34265 = state_34189__$1;
(statearr_34206_34265[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (32))){
var inst_34148 = (state_34189[(14)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34189__$1,(35),out,inst_34148);
} else {
if((state_val_34190 === (33))){
var inst_34139 = (state_34189[(12)]);
var inst_34117 = inst_34139;
var state_34189__$1 = (function (){var statearr_34207 = state_34189;
(statearr_34207[(7)] = inst_34117);

return statearr_34207;
})();
var statearr_34208_34266 = state_34189__$1;
(statearr_34208_34266[(2)] = null);

(statearr_34208_34266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (13))){
var inst_34117 = (state_34189[(7)]);
var inst_34124 = inst_34117.cljs$lang$protocol_mask$partition0$;
var inst_34125 = (inst_34124 & (64));
var inst_34126 = inst_34117.cljs$core$ISeq$;
var inst_34127 = (inst_34125) || (inst_34126);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34127)){
var statearr_34209_34267 = state_34189__$1;
(statearr_34209_34267[(1)] = (16));

} else {
var statearr_34210_34268 = state_34189__$1;
(statearr_34210_34268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (22))){
var inst_34149 = (state_34189[(9)]);
var inst_34148 = (state_34189[(14)]);
var inst_34147 = (state_34189[(2)]);
var inst_34148__$1 = cljs.core.nth.call(null,inst_34147,(0),null);
var inst_34149__$1 = cljs.core.nth.call(null,inst_34147,(1),null);
var inst_34150 = (inst_34148__$1 == null);
var inst_34151 = cljs.core._EQ_.call(null,inst_34149__$1,change);
var inst_34152 = (inst_34150) || (inst_34151);
var state_34189__$1 = (function (){var statearr_34211 = state_34189;
(statearr_34211[(9)] = inst_34149__$1);

(statearr_34211[(14)] = inst_34148__$1);

return statearr_34211;
})();
if(cljs.core.truth_(inst_34152)){
var statearr_34212_34269 = state_34189__$1;
(statearr_34212_34269[(1)] = (23));

} else {
var statearr_34213_34270 = state_34189__$1;
(statearr_34213_34270[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (36))){
var inst_34139 = (state_34189[(12)]);
var inst_34117 = inst_34139;
var state_34189__$1 = (function (){var statearr_34214 = state_34189;
(statearr_34214[(7)] = inst_34117);

return statearr_34214;
})();
var statearr_34215_34271 = state_34189__$1;
(statearr_34215_34271[(2)] = null);

(statearr_34215_34271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (29))){
var inst_34163 = (state_34189[(11)]);
var state_34189__$1 = state_34189;
var statearr_34216_34272 = state_34189__$1;
(statearr_34216_34272[(2)] = inst_34163);

(statearr_34216_34272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (6))){
var state_34189__$1 = state_34189;
var statearr_34217_34273 = state_34189__$1;
(statearr_34217_34273[(2)] = false);

(statearr_34217_34273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (28))){
var inst_34159 = (state_34189[(2)]);
var inst_34160 = calc_state.call(null);
var inst_34117 = inst_34160;
var state_34189__$1 = (function (){var statearr_34218 = state_34189;
(statearr_34218[(15)] = inst_34159);

(statearr_34218[(7)] = inst_34117);

return statearr_34218;
})();
var statearr_34219_34274 = state_34189__$1;
(statearr_34219_34274[(2)] = null);

(statearr_34219_34274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (25))){
var inst_34185 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34220_34275 = state_34189__$1;
(statearr_34220_34275[(2)] = inst_34185);

(statearr_34220_34275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (34))){
var inst_34183 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34221_34276 = state_34189__$1;
(statearr_34221_34276[(2)] = inst_34183);

(statearr_34221_34276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (17))){
var state_34189__$1 = state_34189;
var statearr_34222_34277 = state_34189__$1;
(statearr_34222_34277[(2)] = false);

(statearr_34222_34277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (3))){
var state_34189__$1 = state_34189;
var statearr_34223_34278 = state_34189__$1;
(statearr_34223_34278[(2)] = false);

(statearr_34223_34278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (12))){
var inst_34187 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34189__$1,inst_34187);
} else {
if((state_val_34190 === (2))){
var inst_34093 = (state_34189[(8)]);
var inst_34098 = inst_34093.cljs$lang$protocol_mask$partition0$;
var inst_34099 = (inst_34098 & (64));
var inst_34100 = inst_34093.cljs$core$ISeq$;
var inst_34101 = (inst_34099) || (inst_34100);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34101)){
var statearr_34224_34279 = state_34189__$1;
(statearr_34224_34279[(1)] = (5));

} else {
var statearr_34225_34280 = state_34189__$1;
(statearr_34225_34280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (23))){
var inst_34148 = (state_34189[(14)]);
var inst_34154 = (inst_34148 == null);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34154)){
var statearr_34226_34281 = state_34189__$1;
(statearr_34226_34281[(1)] = (26));

} else {
var statearr_34227_34282 = state_34189__$1;
(statearr_34227_34282[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (35))){
var inst_34174 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34174)){
var statearr_34228_34283 = state_34189__$1;
(statearr_34228_34283[(1)] = (36));

} else {
var statearr_34229_34284 = state_34189__$1;
(statearr_34229_34284[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (19))){
var inst_34117 = (state_34189[(7)]);
var inst_34136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34117);
var state_34189__$1 = state_34189;
var statearr_34230_34285 = state_34189__$1;
(statearr_34230_34285[(2)] = inst_34136);

(statearr_34230_34285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (11))){
var inst_34117 = (state_34189[(7)]);
var inst_34121 = (inst_34117 == null);
var inst_34122 = cljs.core.not.call(null,inst_34121);
var state_34189__$1 = state_34189;
if(inst_34122){
var statearr_34231_34286 = state_34189__$1;
(statearr_34231_34286[(1)] = (13));

} else {
var statearr_34232_34287 = state_34189__$1;
(statearr_34232_34287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (9))){
var inst_34093 = (state_34189[(8)]);
var state_34189__$1 = state_34189;
var statearr_34233_34288 = state_34189__$1;
(statearr_34233_34288[(2)] = inst_34093);

(statearr_34233_34288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (5))){
var state_34189__$1 = state_34189;
var statearr_34234_34289 = state_34189__$1;
(statearr_34234_34289[(2)] = true);

(statearr_34234_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (14))){
var state_34189__$1 = state_34189;
var statearr_34235_34290 = state_34189__$1;
(statearr_34235_34290[(2)] = false);

(statearr_34235_34290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (26))){
var inst_34149 = (state_34189[(9)]);
var inst_34156 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34149);
var state_34189__$1 = state_34189;
var statearr_34236_34291 = state_34189__$1;
(statearr_34236_34291[(2)] = inst_34156);

(statearr_34236_34291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (16))){
var state_34189__$1 = state_34189;
var statearr_34237_34292 = state_34189__$1;
(statearr_34237_34292[(2)] = true);

(statearr_34237_34292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (38))){
var inst_34179 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34238_34293 = state_34189__$1;
(statearr_34238_34293[(2)] = inst_34179);

(statearr_34238_34293[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (30))){
var inst_34149 = (state_34189[(9)]);
var inst_34140 = (state_34189[(10)]);
var inst_34141 = (state_34189[(13)]);
var inst_34166 = cljs.core.empty_QMARK_.call(null,inst_34140);
var inst_34167 = inst_34141.call(null,inst_34149);
var inst_34168 = cljs.core.not.call(null,inst_34167);
var inst_34169 = (inst_34166) && (inst_34168);
var state_34189__$1 = state_34189;
var statearr_34239_34294 = state_34189__$1;
(statearr_34239_34294[(2)] = inst_34169);

(statearr_34239_34294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (10))){
var inst_34093 = (state_34189[(8)]);
var inst_34113 = (state_34189[(2)]);
var inst_34114 = cljs.core.get.call(null,inst_34113,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34115 = cljs.core.get.call(null,inst_34113,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34116 = cljs.core.get.call(null,inst_34113,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34117 = inst_34093;
var state_34189__$1 = (function (){var statearr_34240 = state_34189;
(statearr_34240[(16)] = inst_34116);

(statearr_34240[(17)] = inst_34115);

(statearr_34240[(7)] = inst_34117);

(statearr_34240[(18)] = inst_34114);

return statearr_34240;
})();
var statearr_34241_34295 = state_34189__$1;
(statearr_34241_34295[(2)] = null);

(statearr_34241_34295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (18))){
var inst_34131 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34242_34296 = state_34189__$1;
(statearr_34242_34296[(2)] = inst_34131);

(statearr_34242_34296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (37))){
var state_34189__$1 = state_34189;
var statearr_34243_34297 = state_34189__$1;
(statearr_34243_34297[(2)] = null);

(statearr_34243_34297[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (8))){
var inst_34093 = (state_34189[(8)]);
var inst_34110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34093);
var state_34189__$1 = state_34189;
var statearr_34244_34298 = state_34189__$1;
(statearr_34244_34298[(2)] = inst_34110);

(statearr_34244_34298[(1)] = (10));


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
});})(c__32489__auto___34252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32377__auto__,c__32489__auto___34252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32378__auto__ = null;
var cljs$core$async$mix_$_state_machine__32378__auto____0 = (function (){
var statearr_34248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34248[(0)] = cljs$core$async$mix_$_state_machine__32378__auto__);

(statearr_34248[(1)] = (1));

return statearr_34248;
});
var cljs$core$async$mix_$_state_machine__32378__auto____1 = (function (state_34189){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e34249){if((e34249 instanceof Object)){
var ex__32381__auto__ = e34249;
var statearr_34250_34299 = state_34189;
(statearr_34250_34299[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34300 = state_34189;
state_34189 = G__34300;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32378__auto__ = function(state_34189){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32378__auto____1.call(this,state_34189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32378__auto____0;
cljs$core$async$mix_$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32378__auto____1;
return cljs$core$async$mix_$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___34252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32491__auto__ = (function (){var statearr_34251 = f__32490__auto__.call(null);
(statearr_34251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___34252);

return statearr_34251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___34252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27238__auto__ = (((p == null))?null:p);
var m__27239__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27239__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27238__auto__ = (((p == null))?null:p);
var m__27239__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,p,v,ch);
} else {
var m__27239__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34301 = [];
var len__27650__auto___34304 = arguments.length;
var i__27651__auto___34305 = (0);
while(true){
if((i__27651__auto___34305 < len__27650__auto___34304)){
args34301.push((arguments[i__27651__auto___34305]));

var G__34306 = (i__27651__auto___34305 + (1));
i__27651__auto___34305 = G__34306;
continue;
} else {
}
break;
}

var G__34303 = args34301.length;
switch (G__34303) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34301.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27238__auto__ = (((p == null))?null:p);
var m__27239__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,p);
} else {
var m__27239__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,p);
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
var x__27238__auto__ = (((p == null))?null:p);
var m__27239__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27238__auto__)]);
if(!((m__27239__auto__ == null))){
return m__27239__auto__.call(null,p,v);
} else {
var m__27239__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27239__auto____$1 == null))){
return m__27239__auto____$1.call(null,p,v);
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
var args34309 = [];
var len__27650__auto___34434 = arguments.length;
var i__27651__auto___34435 = (0);
while(true){
if((i__27651__auto___34435 < len__27650__auto___34434)){
args34309.push((arguments[i__27651__auto___34435]));

var G__34436 = (i__27651__auto___34435 + (1));
i__27651__auto___34435 = G__34436;
continue;
} else {
}
break;
}

var G__34311 = args34309.length;
switch (G__34311) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34309.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26575__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26575__auto__)){
return or__26575__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26575__auto__,mults){
return (function (p1__34308_SHARP_){
if(cljs.core.truth_(p1__34308_SHARP_.call(null,topic))){
return p1__34308_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34308_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26575__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34312 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34313){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34313 = meta34313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34314,meta34313__$1){
var self__ = this;
var _34314__$1 = this;
return (new cljs.core.async.t_cljs$core$async34312(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34313__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34314){
var self__ = this;
var _34314__$1 = this;
return self__.meta34313;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34313","meta34313",-1557079289,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34312";

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async34312");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34312 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34312(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34313){
return (new cljs.core.async.t_cljs$core$async34312(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34313));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34312(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32489__auto___34438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___34438,mults,ensure_mult,p){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___34438,mults,ensure_mult,p){
return (function (state_34386){
var state_val_34387 = (state_34386[(1)]);
if((state_val_34387 === (7))){
var inst_34382 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34388_34439 = state_34386__$1;
(statearr_34388_34439[(2)] = inst_34382);

(statearr_34388_34439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (20))){
var state_34386__$1 = state_34386;
var statearr_34389_34440 = state_34386__$1;
(statearr_34389_34440[(2)] = null);

(statearr_34389_34440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (1))){
var state_34386__$1 = state_34386;
var statearr_34390_34441 = state_34386__$1;
(statearr_34390_34441[(2)] = null);

(statearr_34390_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (24))){
var inst_34365 = (state_34386[(7)]);
var inst_34374 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34365);
var state_34386__$1 = state_34386;
var statearr_34391_34442 = state_34386__$1;
(statearr_34391_34442[(2)] = inst_34374);

(statearr_34391_34442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (4))){
var inst_34317 = (state_34386[(8)]);
var inst_34317__$1 = (state_34386[(2)]);
var inst_34318 = (inst_34317__$1 == null);
var state_34386__$1 = (function (){var statearr_34392 = state_34386;
(statearr_34392[(8)] = inst_34317__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34318)){
var statearr_34393_34443 = state_34386__$1;
(statearr_34393_34443[(1)] = (5));

} else {
var statearr_34394_34444 = state_34386__$1;
(statearr_34394_34444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (15))){
var inst_34359 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34395_34445 = state_34386__$1;
(statearr_34395_34445[(2)] = inst_34359);

(statearr_34395_34445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (21))){
var inst_34379 = (state_34386[(2)]);
var state_34386__$1 = (function (){var statearr_34396 = state_34386;
(statearr_34396[(9)] = inst_34379);

return statearr_34396;
})();
var statearr_34397_34446 = state_34386__$1;
(statearr_34397_34446[(2)] = null);

(statearr_34397_34446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (13))){
var inst_34341 = (state_34386[(10)]);
var inst_34343 = cljs.core.chunked_seq_QMARK_.call(null,inst_34341);
var state_34386__$1 = state_34386;
if(inst_34343){
var statearr_34398_34447 = state_34386__$1;
(statearr_34398_34447[(1)] = (16));

} else {
var statearr_34399_34448 = state_34386__$1;
(statearr_34399_34448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (22))){
var inst_34371 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34371)){
var statearr_34400_34449 = state_34386__$1;
(statearr_34400_34449[(1)] = (23));

} else {
var statearr_34401_34450 = state_34386__$1;
(statearr_34401_34450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (6))){
var inst_34317 = (state_34386[(8)]);
var inst_34365 = (state_34386[(7)]);
var inst_34367 = (state_34386[(11)]);
var inst_34365__$1 = topic_fn.call(null,inst_34317);
var inst_34366 = cljs.core.deref.call(null,mults);
var inst_34367__$1 = cljs.core.get.call(null,inst_34366,inst_34365__$1);
var state_34386__$1 = (function (){var statearr_34402 = state_34386;
(statearr_34402[(7)] = inst_34365__$1);

(statearr_34402[(11)] = inst_34367__$1);

return statearr_34402;
})();
if(cljs.core.truth_(inst_34367__$1)){
var statearr_34403_34451 = state_34386__$1;
(statearr_34403_34451[(1)] = (19));

} else {
var statearr_34404_34452 = state_34386__$1;
(statearr_34404_34452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (25))){
var inst_34376 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34405_34453 = state_34386__$1;
(statearr_34405_34453[(2)] = inst_34376);

(statearr_34405_34453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (17))){
var inst_34341 = (state_34386[(10)]);
var inst_34350 = cljs.core.first.call(null,inst_34341);
var inst_34351 = cljs.core.async.muxch_STAR_.call(null,inst_34350);
var inst_34352 = cljs.core.async.close_BANG_.call(null,inst_34351);
var inst_34353 = cljs.core.next.call(null,inst_34341);
var inst_34327 = inst_34353;
var inst_34328 = null;
var inst_34329 = (0);
var inst_34330 = (0);
var state_34386__$1 = (function (){var statearr_34406 = state_34386;
(statearr_34406[(12)] = inst_34328);

(statearr_34406[(13)] = inst_34352);

(statearr_34406[(14)] = inst_34327);

(statearr_34406[(15)] = inst_34330);

(statearr_34406[(16)] = inst_34329);

return statearr_34406;
})();
var statearr_34407_34454 = state_34386__$1;
(statearr_34407_34454[(2)] = null);

(statearr_34407_34454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (3))){
var inst_34384 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34386__$1,inst_34384);
} else {
if((state_val_34387 === (12))){
var inst_34361 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34408_34455 = state_34386__$1;
(statearr_34408_34455[(2)] = inst_34361);

(statearr_34408_34455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (2))){
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34386__$1,(4),ch);
} else {
if((state_val_34387 === (23))){
var state_34386__$1 = state_34386;
var statearr_34409_34456 = state_34386__$1;
(statearr_34409_34456[(2)] = null);

(statearr_34409_34456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (19))){
var inst_34317 = (state_34386[(8)]);
var inst_34367 = (state_34386[(11)]);
var inst_34369 = cljs.core.async.muxch_STAR_.call(null,inst_34367);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34386__$1,(22),inst_34369,inst_34317);
} else {
if((state_val_34387 === (11))){
var inst_34341 = (state_34386[(10)]);
var inst_34327 = (state_34386[(14)]);
var inst_34341__$1 = cljs.core.seq.call(null,inst_34327);
var state_34386__$1 = (function (){var statearr_34410 = state_34386;
(statearr_34410[(10)] = inst_34341__$1);

return statearr_34410;
})();
if(inst_34341__$1){
var statearr_34411_34457 = state_34386__$1;
(statearr_34411_34457[(1)] = (13));

} else {
var statearr_34412_34458 = state_34386__$1;
(statearr_34412_34458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (9))){
var inst_34363 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34413_34459 = state_34386__$1;
(statearr_34413_34459[(2)] = inst_34363);

(statearr_34413_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (5))){
var inst_34324 = cljs.core.deref.call(null,mults);
var inst_34325 = cljs.core.vals.call(null,inst_34324);
var inst_34326 = cljs.core.seq.call(null,inst_34325);
var inst_34327 = inst_34326;
var inst_34328 = null;
var inst_34329 = (0);
var inst_34330 = (0);
var state_34386__$1 = (function (){var statearr_34414 = state_34386;
(statearr_34414[(12)] = inst_34328);

(statearr_34414[(14)] = inst_34327);

(statearr_34414[(15)] = inst_34330);

(statearr_34414[(16)] = inst_34329);

return statearr_34414;
})();
var statearr_34415_34460 = state_34386__$1;
(statearr_34415_34460[(2)] = null);

(statearr_34415_34460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (14))){
var state_34386__$1 = state_34386;
var statearr_34419_34461 = state_34386__$1;
(statearr_34419_34461[(2)] = null);

(statearr_34419_34461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (16))){
var inst_34341 = (state_34386[(10)]);
var inst_34345 = cljs.core.chunk_first.call(null,inst_34341);
var inst_34346 = cljs.core.chunk_rest.call(null,inst_34341);
var inst_34347 = cljs.core.count.call(null,inst_34345);
var inst_34327 = inst_34346;
var inst_34328 = inst_34345;
var inst_34329 = inst_34347;
var inst_34330 = (0);
var state_34386__$1 = (function (){var statearr_34420 = state_34386;
(statearr_34420[(12)] = inst_34328);

(statearr_34420[(14)] = inst_34327);

(statearr_34420[(15)] = inst_34330);

(statearr_34420[(16)] = inst_34329);

return statearr_34420;
})();
var statearr_34421_34462 = state_34386__$1;
(statearr_34421_34462[(2)] = null);

(statearr_34421_34462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (10))){
var inst_34328 = (state_34386[(12)]);
var inst_34327 = (state_34386[(14)]);
var inst_34330 = (state_34386[(15)]);
var inst_34329 = (state_34386[(16)]);
var inst_34335 = cljs.core._nth.call(null,inst_34328,inst_34330);
var inst_34336 = cljs.core.async.muxch_STAR_.call(null,inst_34335);
var inst_34337 = cljs.core.async.close_BANG_.call(null,inst_34336);
var inst_34338 = (inst_34330 + (1));
var tmp34416 = inst_34328;
var tmp34417 = inst_34327;
var tmp34418 = inst_34329;
var inst_34327__$1 = tmp34417;
var inst_34328__$1 = tmp34416;
var inst_34329__$1 = tmp34418;
var inst_34330__$1 = inst_34338;
var state_34386__$1 = (function (){var statearr_34422 = state_34386;
(statearr_34422[(17)] = inst_34337);

(statearr_34422[(12)] = inst_34328__$1);

(statearr_34422[(14)] = inst_34327__$1);

(statearr_34422[(15)] = inst_34330__$1);

(statearr_34422[(16)] = inst_34329__$1);

return statearr_34422;
})();
var statearr_34423_34463 = state_34386__$1;
(statearr_34423_34463[(2)] = null);

(statearr_34423_34463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (18))){
var inst_34356 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34424_34464 = state_34386__$1;
(statearr_34424_34464[(2)] = inst_34356);

(statearr_34424_34464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (8))){
var inst_34330 = (state_34386[(15)]);
var inst_34329 = (state_34386[(16)]);
var inst_34332 = (inst_34330 < inst_34329);
var inst_34333 = inst_34332;
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34333)){
var statearr_34425_34465 = state_34386__$1;
(statearr_34425_34465[(1)] = (10));

} else {
var statearr_34426_34466 = state_34386__$1;
(statearr_34426_34466[(1)] = (11));

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
});})(c__32489__auto___34438,mults,ensure_mult,p))
;
return ((function (switch__32377__auto__,c__32489__auto___34438,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_34430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34430[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_34430[(1)] = (1));

return statearr_34430;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_34386){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e34431){if((e34431 instanceof Object)){
var ex__32381__auto__ = e34431;
var statearr_34432_34467 = state_34386;
(statearr_34432_34467[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34468 = state_34386;
state_34386 = G__34468;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_34386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_34386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___34438,mults,ensure_mult,p))
})();
var state__32491__auto__ = (function (){var statearr_34433 = f__32490__auto__.call(null);
(statearr_34433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___34438);

return statearr_34433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___34438,mults,ensure_mult,p))
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
var args34469 = [];
var len__27650__auto___34472 = arguments.length;
var i__27651__auto___34473 = (0);
while(true){
if((i__27651__auto___34473 < len__27650__auto___34472)){
args34469.push((arguments[i__27651__auto___34473]));

var G__34474 = (i__27651__auto___34473 + (1));
i__27651__auto___34473 = G__34474;
continue;
} else {
}
break;
}

var G__34471 = args34469.length;
switch (G__34471) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34469.length)].join('')));

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
var args34476 = [];
var len__27650__auto___34479 = arguments.length;
var i__27651__auto___34480 = (0);
while(true){
if((i__27651__auto___34480 < len__27650__auto___34479)){
args34476.push((arguments[i__27651__auto___34480]));

var G__34481 = (i__27651__auto___34480 + (1));
i__27651__auto___34480 = G__34481;
continue;
} else {
}
break;
}

var G__34478 = args34476.length;
switch (G__34478) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34476.length)].join('')));

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
var args34483 = [];
var len__27650__auto___34554 = arguments.length;
var i__27651__auto___34555 = (0);
while(true){
if((i__27651__auto___34555 < len__27650__auto___34554)){
args34483.push((arguments[i__27651__auto___34555]));

var G__34556 = (i__27651__auto___34555 + (1));
i__27651__auto___34555 = G__34556;
continue;
} else {
}
break;
}

var G__34485 = args34483.length;
switch (G__34485) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34483.length)].join('')));

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
var c__32489__auto___34558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___34558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___34558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34524){
var state_val_34525 = (state_34524[(1)]);
if((state_val_34525 === (7))){
var state_34524__$1 = state_34524;
var statearr_34526_34559 = state_34524__$1;
(statearr_34526_34559[(2)] = null);

(statearr_34526_34559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (1))){
var state_34524__$1 = state_34524;
var statearr_34527_34560 = state_34524__$1;
(statearr_34527_34560[(2)] = null);

(statearr_34527_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (4))){
var inst_34488 = (state_34524[(7)]);
var inst_34490 = (inst_34488 < cnt);
var state_34524__$1 = state_34524;
if(cljs.core.truth_(inst_34490)){
var statearr_34528_34561 = state_34524__$1;
(statearr_34528_34561[(1)] = (6));

} else {
var statearr_34529_34562 = state_34524__$1;
(statearr_34529_34562[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (15))){
var inst_34520 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34530_34563 = state_34524__$1;
(statearr_34530_34563[(2)] = inst_34520);

(statearr_34530_34563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (13))){
var inst_34513 = cljs.core.async.close_BANG_.call(null,out);
var state_34524__$1 = state_34524;
var statearr_34531_34564 = state_34524__$1;
(statearr_34531_34564[(2)] = inst_34513);

(statearr_34531_34564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (6))){
var state_34524__$1 = state_34524;
var statearr_34532_34565 = state_34524__$1;
(statearr_34532_34565[(2)] = null);

(statearr_34532_34565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (3))){
var inst_34522 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34524__$1,inst_34522);
} else {
if((state_val_34525 === (12))){
var inst_34510 = (state_34524[(8)]);
var inst_34510__$1 = (state_34524[(2)]);
var inst_34511 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34510__$1);
var state_34524__$1 = (function (){var statearr_34533 = state_34524;
(statearr_34533[(8)] = inst_34510__$1);

return statearr_34533;
})();
if(cljs.core.truth_(inst_34511)){
var statearr_34534_34566 = state_34524__$1;
(statearr_34534_34566[(1)] = (13));

} else {
var statearr_34535_34567 = state_34524__$1;
(statearr_34535_34567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (2))){
var inst_34487 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34488 = (0);
var state_34524__$1 = (function (){var statearr_34536 = state_34524;
(statearr_34536[(7)] = inst_34488);

(statearr_34536[(9)] = inst_34487);

return statearr_34536;
})();
var statearr_34537_34568 = state_34524__$1;
(statearr_34537_34568[(2)] = null);

(statearr_34537_34568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (11))){
var inst_34488 = (state_34524[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34524,(10),Object,null,(9));
var inst_34497 = chs__$1.call(null,inst_34488);
var inst_34498 = done.call(null,inst_34488);
var inst_34499 = cljs.core.async.take_BANG_.call(null,inst_34497,inst_34498);
var state_34524__$1 = state_34524;
var statearr_34538_34569 = state_34524__$1;
(statearr_34538_34569[(2)] = inst_34499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34524__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (9))){
var inst_34488 = (state_34524[(7)]);
var inst_34501 = (state_34524[(2)]);
var inst_34502 = (inst_34488 + (1));
var inst_34488__$1 = inst_34502;
var state_34524__$1 = (function (){var statearr_34539 = state_34524;
(statearr_34539[(10)] = inst_34501);

(statearr_34539[(7)] = inst_34488__$1);

return statearr_34539;
})();
var statearr_34540_34570 = state_34524__$1;
(statearr_34540_34570[(2)] = null);

(statearr_34540_34570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (5))){
var inst_34508 = (state_34524[(2)]);
var state_34524__$1 = (function (){var statearr_34541 = state_34524;
(statearr_34541[(11)] = inst_34508);

return statearr_34541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34524__$1,(12),dchan);
} else {
if((state_val_34525 === (14))){
var inst_34510 = (state_34524[(8)]);
var inst_34515 = cljs.core.apply.call(null,f,inst_34510);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34524__$1,(16),out,inst_34515);
} else {
if((state_val_34525 === (16))){
var inst_34517 = (state_34524[(2)]);
var state_34524__$1 = (function (){var statearr_34542 = state_34524;
(statearr_34542[(12)] = inst_34517);

return statearr_34542;
})();
var statearr_34543_34571 = state_34524__$1;
(statearr_34543_34571[(2)] = null);

(statearr_34543_34571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (10))){
var inst_34492 = (state_34524[(2)]);
var inst_34493 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34524__$1 = (function (){var statearr_34544 = state_34524;
(statearr_34544[(13)] = inst_34492);

return statearr_34544;
})();
var statearr_34545_34572 = state_34524__$1;
(statearr_34545_34572[(2)] = inst_34493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34524__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (8))){
var inst_34506 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34546_34573 = state_34524__$1;
(statearr_34546_34573[(2)] = inst_34506);

(statearr_34546_34573[(1)] = (5));


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
});})(c__32489__auto___34558,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32377__auto__,c__32489__auto___34558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_34550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34550[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_34550[(1)] = (1));

return statearr_34550;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_34524){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e34551){if((e34551 instanceof Object)){
var ex__32381__auto__ = e34551;
var statearr_34552_34574 = state_34524;
(statearr_34552_34574[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34575 = state_34524;
state_34524 = G__34575;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_34524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_34524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___34558,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32491__auto__ = (function (){var statearr_34553 = f__32490__auto__.call(null);
(statearr_34553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___34558);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___34558,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34577 = [];
var len__27650__auto___34635 = arguments.length;
var i__27651__auto___34636 = (0);
while(true){
if((i__27651__auto___34636 < len__27650__auto___34635)){
args34577.push((arguments[i__27651__auto___34636]));

var G__34637 = (i__27651__auto___34636 + (1));
i__27651__auto___34636 = G__34637;
continue;
} else {
}
break;
}

var G__34579 = args34577.length;
switch (G__34579) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34577.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32489__auto___34639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___34639,out){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___34639,out){
return (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (7))){
var inst_34591 = (state_34611[(7)]);
var inst_34590 = (state_34611[(8)]);
var inst_34590__$1 = (state_34611[(2)]);
var inst_34591__$1 = cljs.core.nth.call(null,inst_34590__$1,(0),null);
var inst_34592 = cljs.core.nth.call(null,inst_34590__$1,(1),null);
var inst_34593 = (inst_34591__$1 == null);
var state_34611__$1 = (function (){var statearr_34613 = state_34611;
(statearr_34613[(7)] = inst_34591__$1);

(statearr_34613[(8)] = inst_34590__$1);

(statearr_34613[(9)] = inst_34592);

return statearr_34613;
})();
if(cljs.core.truth_(inst_34593)){
var statearr_34614_34640 = state_34611__$1;
(statearr_34614_34640[(1)] = (8));

} else {
var statearr_34615_34641 = state_34611__$1;
(statearr_34615_34641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (1))){
var inst_34580 = cljs.core.vec.call(null,chs);
var inst_34581 = inst_34580;
var state_34611__$1 = (function (){var statearr_34616 = state_34611;
(statearr_34616[(10)] = inst_34581);

return statearr_34616;
})();
var statearr_34617_34642 = state_34611__$1;
(statearr_34617_34642[(2)] = null);

(statearr_34617_34642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (4))){
var inst_34581 = (state_34611[(10)]);
var state_34611__$1 = state_34611;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34611__$1,(7),inst_34581);
} else {
if((state_val_34612 === (6))){
var inst_34607 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34618_34643 = state_34611__$1;
(statearr_34618_34643[(2)] = inst_34607);

(statearr_34618_34643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var inst_34609 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34611__$1,inst_34609);
} else {
if((state_val_34612 === (2))){
var inst_34581 = (state_34611[(10)]);
var inst_34583 = cljs.core.count.call(null,inst_34581);
var inst_34584 = (inst_34583 > (0));
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34584)){
var statearr_34620_34644 = state_34611__$1;
(statearr_34620_34644[(1)] = (4));

} else {
var statearr_34621_34645 = state_34611__$1;
(statearr_34621_34645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (11))){
var inst_34581 = (state_34611[(10)]);
var inst_34600 = (state_34611[(2)]);
var tmp34619 = inst_34581;
var inst_34581__$1 = tmp34619;
var state_34611__$1 = (function (){var statearr_34622 = state_34611;
(statearr_34622[(10)] = inst_34581__$1);

(statearr_34622[(11)] = inst_34600);

return statearr_34622;
})();
var statearr_34623_34646 = state_34611__$1;
(statearr_34623_34646[(2)] = null);

(statearr_34623_34646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (9))){
var inst_34591 = (state_34611[(7)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34611__$1,(11),out,inst_34591);
} else {
if((state_val_34612 === (5))){
var inst_34605 = cljs.core.async.close_BANG_.call(null,out);
var state_34611__$1 = state_34611;
var statearr_34624_34647 = state_34611__$1;
(statearr_34624_34647[(2)] = inst_34605);

(statearr_34624_34647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (10))){
var inst_34603 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34625_34648 = state_34611__$1;
(statearr_34625_34648[(2)] = inst_34603);

(statearr_34625_34648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (8))){
var inst_34591 = (state_34611[(7)]);
var inst_34590 = (state_34611[(8)]);
var inst_34581 = (state_34611[(10)]);
var inst_34592 = (state_34611[(9)]);
var inst_34595 = (function (){var cs = inst_34581;
var vec__34586 = inst_34590;
var v = inst_34591;
var c = inst_34592;
return ((function (cs,vec__34586,v,c,inst_34591,inst_34590,inst_34581,inst_34592,state_val_34612,c__32489__auto___34639,out){
return (function (p1__34576_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34576_SHARP_);
});
;})(cs,vec__34586,v,c,inst_34591,inst_34590,inst_34581,inst_34592,state_val_34612,c__32489__auto___34639,out))
})();
var inst_34596 = cljs.core.filterv.call(null,inst_34595,inst_34581);
var inst_34581__$1 = inst_34596;
var state_34611__$1 = (function (){var statearr_34626 = state_34611;
(statearr_34626[(10)] = inst_34581__$1);

return statearr_34626;
})();
var statearr_34627_34649 = state_34611__$1;
(statearr_34627_34649[(2)] = null);

(statearr_34627_34649[(1)] = (2));


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
});})(c__32489__auto___34639,out))
;
return ((function (switch__32377__auto__,c__32489__auto___34639,out){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_34611){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e34632){if((e34632 instanceof Object)){
var ex__32381__auto__ = e34632;
var statearr_34633_34650 = state_34611;
(statearr_34633_34650[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34651 = state_34611;
state_34611 = G__34651;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___34639,out))
})();
var state__32491__auto__ = (function (){var statearr_34634 = f__32490__auto__.call(null);
(statearr_34634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___34639);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___34639,out))
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
var args34652 = [];
var len__27650__auto___34701 = arguments.length;
var i__27651__auto___34702 = (0);
while(true){
if((i__27651__auto___34702 < len__27650__auto___34701)){
args34652.push((arguments[i__27651__auto___34702]));

var G__34703 = (i__27651__auto___34702 + (1));
i__27651__auto___34702 = G__34703;
continue;
} else {
}
break;
}

var G__34654 = args34652.length;
switch (G__34654) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34652.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32489__auto___34705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___34705,out){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___34705,out){
return (function (state_34678){
var state_val_34679 = (state_34678[(1)]);
if((state_val_34679 === (7))){
var inst_34660 = (state_34678[(7)]);
var inst_34660__$1 = (state_34678[(2)]);
var inst_34661 = (inst_34660__$1 == null);
var inst_34662 = cljs.core.not.call(null,inst_34661);
var state_34678__$1 = (function (){var statearr_34680 = state_34678;
(statearr_34680[(7)] = inst_34660__$1);

return statearr_34680;
})();
if(inst_34662){
var statearr_34681_34706 = state_34678__$1;
(statearr_34681_34706[(1)] = (8));

} else {
var statearr_34682_34707 = state_34678__$1;
(statearr_34682_34707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (1))){
var inst_34655 = (0);
var state_34678__$1 = (function (){var statearr_34683 = state_34678;
(statearr_34683[(8)] = inst_34655);

return statearr_34683;
})();
var statearr_34684_34708 = state_34678__$1;
(statearr_34684_34708[(2)] = null);

(statearr_34684_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (4))){
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(7),ch);
} else {
if((state_val_34679 === (6))){
var inst_34673 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34685_34709 = state_34678__$1;
(statearr_34685_34709[(2)] = inst_34673);

(statearr_34685_34709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (3))){
var inst_34675 = (state_34678[(2)]);
var inst_34676 = cljs.core.async.close_BANG_.call(null,out);
var state_34678__$1 = (function (){var statearr_34686 = state_34678;
(statearr_34686[(9)] = inst_34675);

return statearr_34686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34678__$1,inst_34676);
} else {
if((state_val_34679 === (2))){
var inst_34655 = (state_34678[(8)]);
var inst_34657 = (inst_34655 < n);
var state_34678__$1 = state_34678;
if(cljs.core.truth_(inst_34657)){
var statearr_34687_34710 = state_34678__$1;
(statearr_34687_34710[(1)] = (4));

} else {
var statearr_34688_34711 = state_34678__$1;
(statearr_34688_34711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (11))){
var inst_34655 = (state_34678[(8)]);
var inst_34665 = (state_34678[(2)]);
var inst_34666 = (inst_34655 + (1));
var inst_34655__$1 = inst_34666;
var state_34678__$1 = (function (){var statearr_34689 = state_34678;
(statearr_34689[(10)] = inst_34665);

(statearr_34689[(8)] = inst_34655__$1);

return statearr_34689;
})();
var statearr_34690_34712 = state_34678__$1;
(statearr_34690_34712[(2)] = null);

(statearr_34690_34712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (9))){
var state_34678__$1 = state_34678;
var statearr_34691_34713 = state_34678__$1;
(statearr_34691_34713[(2)] = null);

(statearr_34691_34713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (5))){
var state_34678__$1 = state_34678;
var statearr_34692_34714 = state_34678__$1;
(statearr_34692_34714[(2)] = null);

(statearr_34692_34714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (10))){
var inst_34670 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34693_34715 = state_34678__$1;
(statearr_34693_34715[(2)] = inst_34670);

(statearr_34693_34715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (8))){
var inst_34660 = (state_34678[(7)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34678__$1,(11),out,inst_34660);
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
});})(c__32489__auto___34705,out))
;
return ((function (switch__32377__auto__,c__32489__auto___34705,out){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_34697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34697[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_34697[(1)] = (1));

return statearr_34697;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_34678){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e34698){if((e34698 instanceof Object)){
var ex__32381__auto__ = e34698;
var statearr_34699_34716 = state_34678;
(statearr_34699_34716[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34717 = state_34678;
state_34678 = G__34717;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_34678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_34678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___34705,out))
})();
var state__32491__auto__ = (function (){var statearr_34700 = f__32490__auto__.call(null);
(statearr_34700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___34705);

return statearr_34700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___34705,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34725 = (function (map_LT_,f,ch,meta34726){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34726 = meta34726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34727,meta34726__$1){
var self__ = this;
var _34727__$1 = this;
return (new cljs.core.async.t_cljs$core$async34725(self__.map_LT_,self__.f,self__.ch,meta34726__$1));
});

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34727){
var self__ = this;
var _34727__$1 = this;
return self__.meta34726;
});

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34728 = (function (map_LT_,f,ch,meta34726,_,fn1,meta34729){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34726 = meta34726;
this._ = _;
this.fn1 = fn1;
this.meta34729 = meta34729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34730,meta34729__$1){
var self__ = this;
var _34730__$1 = this;
return (new cljs.core.async.t_cljs$core$async34728(self__.map_LT_,self__.f,self__.ch,self__.meta34726,self__._,self__.fn1,meta34729__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34730){
var self__ = this;
var _34730__$1 = this;
return self__.meta34729;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34728.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34718_SHARP_){
return f1.call(null,(((p1__34718_SHARP_ == null))?null:self__.f.call(null,p1__34718_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34728.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34726","meta34726",1267955562,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34725","cljs.core.async/t_cljs$core$async34725",1955749150,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34729","meta34729",2084087100,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34728";

cljs.core.async.t_cljs$core$async34728.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async34728");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34728 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34728(map_LT___$1,f__$1,ch__$1,meta34726__$1,___$2,fn1__$1,meta34729){
return (new cljs.core.async.t_cljs$core$async34728(map_LT___$1,f__$1,ch__$1,meta34726__$1,___$2,fn1__$1,meta34729));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34728(self__.map_LT_,self__.f,self__.ch,self__.meta34726,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26563__auto__ = ret;
if(cljs.core.truth_(and__26563__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26563__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34726","meta34726",1267955562,null)], null);
});

cljs.core.async.t_cljs$core$async34725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34725";

cljs.core.async.t_cljs$core$async34725.cljs$lang$ctorPrWriter = (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async34725");
});

cljs.core.async.__GT_t_cljs$core$async34725 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34725(map_LT___$1,f__$1,ch__$1,meta34726){
return (new cljs.core.async.t_cljs$core$async34725(map_LT___$1,f__$1,ch__$1,meta34726));
});

}

return (new cljs.core.async.t_cljs$core$async34725(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34734 = (function (map_GT_,f,ch,meta34735){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34735 = meta34735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34736,meta34735__$1){
var self__ = this;
var _34736__$1 = this;
return (new cljs.core.async.t_cljs$core$async34734(self__.map_GT_,self__.f,self__.ch,meta34735__$1));
});

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34736){
var self__ = this;
var _34736__$1 = this;
return self__.meta34735;
});

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34735","meta34735",-1276692431,null)], null);
});

cljs.core.async.t_cljs$core$async34734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34734";

cljs.core.async.t_cljs$core$async34734.cljs$lang$ctorPrWriter = (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async34734");
});

cljs.core.async.__GT_t_cljs$core$async34734 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34734(map_GT___$1,f__$1,ch__$1,meta34735){
return (new cljs.core.async.t_cljs$core$async34734(map_GT___$1,f__$1,ch__$1,meta34735));
});

}

return (new cljs.core.async.t_cljs$core$async34734(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34740 = (function (filter_GT_,p,ch,meta34741){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34741 = meta34741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34742,meta34741__$1){
var self__ = this;
var _34742__$1 = this;
return (new cljs.core.async.t_cljs$core$async34740(self__.filter_GT_,self__.p,self__.ch,meta34741__$1));
});

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34742){
var self__ = this;
var _34742__$1 = this;
return self__.meta34741;
});

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34741","meta34741",-172852618,null)], null);
});

cljs.core.async.t_cljs$core$async34740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34740";

cljs.core.async.t_cljs$core$async34740.cljs$lang$ctorPrWriter = (function (this__27181__auto__,writer__27182__auto__,opt__27183__auto__){
return cljs.core._write.call(null,writer__27182__auto__,"cljs.core.async/t_cljs$core$async34740");
});

cljs.core.async.__GT_t_cljs$core$async34740 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34740(filter_GT___$1,p__$1,ch__$1,meta34741){
return (new cljs.core.async.t_cljs$core$async34740(filter_GT___$1,p__$1,ch__$1,meta34741));
});

}

return (new cljs.core.async.t_cljs$core$async34740(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34743 = [];
var len__27650__auto___34787 = arguments.length;
var i__27651__auto___34788 = (0);
while(true){
if((i__27651__auto___34788 < len__27650__auto___34787)){
args34743.push((arguments[i__27651__auto___34788]));

var G__34789 = (i__27651__auto___34788 + (1));
i__27651__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var G__34745 = args34743.length;
switch (G__34745) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34743.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32489__auto___34791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___34791,out){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___34791,out){
return (function (state_34766){
var state_val_34767 = (state_34766[(1)]);
if((state_val_34767 === (7))){
var inst_34762 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34768_34792 = state_34766__$1;
(statearr_34768_34792[(2)] = inst_34762);

(statearr_34768_34792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (1))){
var state_34766__$1 = state_34766;
var statearr_34769_34793 = state_34766__$1;
(statearr_34769_34793[(2)] = null);

(statearr_34769_34793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (4))){
var inst_34748 = (state_34766[(7)]);
var inst_34748__$1 = (state_34766[(2)]);
var inst_34749 = (inst_34748__$1 == null);
var state_34766__$1 = (function (){var statearr_34770 = state_34766;
(statearr_34770[(7)] = inst_34748__$1);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34749)){
var statearr_34771_34794 = state_34766__$1;
(statearr_34771_34794[(1)] = (5));

} else {
var statearr_34772_34795 = state_34766__$1;
(statearr_34772_34795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (6))){
var inst_34748 = (state_34766[(7)]);
var inst_34753 = p.call(null,inst_34748);
var state_34766__$1 = state_34766;
if(cljs.core.truth_(inst_34753)){
var statearr_34773_34796 = state_34766__$1;
(statearr_34773_34796[(1)] = (8));

} else {
var statearr_34774_34797 = state_34766__$1;
(statearr_34774_34797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (3))){
var inst_34764 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34766__$1,inst_34764);
} else {
if((state_val_34767 === (2))){
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34766__$1,(4),ch);
} else {
if((state_val_34767 === (11))){
var inst_34756 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34775_34798 = state_34766__$1;
(statearr_34775_34798[(2)] = inst_34756);

(statearr_34775_34798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (9))){
var state_34766__$1 = state_34766;
var statearr_34776_34799 = state_34766__$1;
(statearr_34776_34799[(2)] = null);

(statearr_34776_34799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (5))){
var inst_34751 = cljs.core.async.close_BANG_.call(null,out);
var state_34766__$1 = state_34766;
var statearr_34777_34800 = state_34766__$1;
(statearr_34777_34800[(2)] = inst_34751);

(statearr_34777_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (10))){
var inst_34759 = (state_34766[(2)]);
var state_34766__$1 = (function (){var statearr_34778 = state_34766;
(statearr_34778[(8)] = inst_34759);

return statearr_34778;
})();
var statearr_34779_34801 = state_34766__$1;
(statearr_34779_34801[(2)] = null);

(statearr_34779_34801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (8))){
var inst_34748 = (state_34766[(7)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34766__$1,(11),out,inst_34748);
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
});})(c__32489__auto___34791,out))
;
return ((function (switch__32377__auto__,c__32489__auto___34791,out){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null,null,null];
(statearr_34783[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_34766){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__32381__auto__ = e34784;
var statearr_34785_34802 = state_34766;
(statearr_34785_34802[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34803 = state_34766;
state_34766 = G__34803;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_34766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_34766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___34791,out))
})();
var state__32491__auto__ = (function (){var statearr_34786 = f__32490__auto__.call(null);
(statearr_34786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___34791);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___34791,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34804 = [];
var len__27650__auto___34807 = arguments.length;
var i__27651__auto___34808 = (0);
while(true){
if((i__27651__auto___34808 < len__27650__auto___34807)){
args34804.push((arguments[i__27651__auto___34808]));

var G__34809 = (i__27651__auto___34808 + (1));
i__27651__auto___34808 = G__34809;
continue;
} else {
}
break;
}

var G__34806 = args34804.length;
switch (G__34806) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34804.length)].join('')));

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
var c__32489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto__){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto__){
return (function (state_34976){
var state_val_34977 = (state_34976[(1)]);
if((state_val_34977 === (7))){
var inst_34972 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
var statearr_34978_35019 = state_34976__$1;
(statearr_34978_35019[(2)] = inst_34972);

(statearr_34978_35019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (20))){
var inst_34942 = (state_34976[(7)]);
var inst_34953 = (state_34976[(2)]);
var inst_34954 = cljs.core.next.call(null,inst_34942);
var inst_34928 = inst_34954;
var inst_34929 = null;
var inst_34930 = (0);
var inst_34931 = (0);
var state_34976__$1 = (function (){var statearr_34979 = state_34976;
(statearr_34979[(8)] = inst_34929);

(statearr_34979[(9)] = inst_34931);

(statearr_34979[(10)] = inst_34953);

(statearr_34979[(11)] = inst_34930);

(statearr_34979[(12)] = inst_34928);

return statearr_34979;
})();
var statearr_34980_35020 = state_34976__$1;
(statearr_34980_35020[(2)] = null);

(statearr_34980_35020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (1))){
var state_34976__$1 = state_34976;
var statearr_34981_35021 = state_34976__$1;
(statearr_34981_35021[(2)] = null);

(statearr_34981_35021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (4))){
var inst_34917 = (state_34976[(13)]);
var inst_34917__$1 = (state_34976[(2)]);
var inst_34918 = (inst_34917__$1 == null);
var state_34976__$1 = (function (){var statearr_34982 = state_34976;
(statearr_34982[(13)] = inst_34917__$1);

return statearr_34982;
})();
if(cljs.core.truth_(inst_34918)){
var statearr_34983_35022 = state_34976__$1;
(statearr_34983_35022[(1)] = (5));

} else {
var statearr_34984_35023 = state_34976__$1;
(statearr_34984_35023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (15))){
var state_34976__$1 = state_34976;
var statearr_34988_35024 = state_34976__$1;
(statearr_34988_35024[(2)] = null);

(statearr_34988_35024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (21))){
var state_34976__$1 = state_34976;
var statearr_34989_35025 = state_34976__$1;
(statearr_34989_35025[(2)] = null);

(statearr_34989_35025[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (13))){
var inst_34929 = (state_34976[(8)]);
var inst_34931 = (state_34976[(9)]);
var inst_34930 = (state_34976[(11)]);
var inst_34928 = (state_34976[(12)]);
var inst_34938 = (state_34976[(2)]);
var inst_34939 = (inst_34931 + (1));
var tmp34985 = inst_34929;
var tmp34986 = inst_34930;
var tmp34987 = inst_34928;
var inst_34928__$1 = tmp34987;
var inst_34929__$1 = tmp34985;
var inst_34930__$1 = tmp34986;
var inst_34931__$1 = inst_34939;
var state_34976__$1 = (function (){var statearr_34990 = state_34976;
(statearr_34990[(8)] = inst_34929__$1);

(statearr_34990[(9)] = inst_34931__$1);

(statearr_34990[(11)] = inst_34930__$1);

(statearr_34990[(12)] = inst_34928__$1);

(statearr_34990[(14)] = inst_34938);

return statearr_34990;
})();
var statearr_34991_35026 = state_34976__$1;
(statearr_34991_35026[(2)] = null);

(statearr_34991_35026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (22))){
var state_34976__$1 = state_34976;
var statearr_34992_35027 = state_34976__$1;
(statearr_34992_35027[(2)] = null);

(statearr_34992_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (6))){
var inst_34917 = (state_34976[(13)]);
var inst_34926 = f.call(null,inst_34917);
var inst_34927 = cljs.core.seq.call(null,inst_34926);
var inst_34928 = inst_34927;
var inst_34929 = null;
var inst_34930 = (0);
var inst_34931 = (0);
var state_34976__$1 = (function (){var statearr_34993 = state_34976;
(statearr_34993[(8)] = inst_34929);

(statearr_34993[(9)] = inst_34931);

(statearr_34993[(11)] = inst_34930);

(statearr_34993[(12)] = inst_34928);

return statearr_34993;
})();
var statearr_34994_35028 = state_34976__$1;
(statearr_34994_35028[(2)] = null);

(statearr_34994_35028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (17))){
var inst_34942 = (state_34976[(7)]);
var inst_34946 = cljs.core.chunk_first.call(null,inst_34942);
var inst_34947 = cljs.core.chunk_rest.call(null,inst_34942);
var inst_34948 = cljs.core.count.call(null,inst_34946);
var inst_34928 = inst_34947;
var inst_34929 = inst_34946;
var inst_34930 = inst_34948;
var inst_34931 = (0);
var state_34976__$1 = (function (){var statearr_34995 = state_34976;
(statearr_34995[(8)] = inst_34929);

(statearr_34995[(9)] = inst_34931);

(statearr_34995[(11)] = inst_34930);

(statearr_34995[(12)] = inst_34928);

return statearr_34995;
})();
var statearr_34996_35029 = state_34976__$1;
(statearr_34996_35029[(2)] = null);

(statearr_34996_35029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (3))){
var inst_34974 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34976__$1,inst_34974);
} else {
if((state_val_34977 === (12))){
var inst_34962 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
var statearr_34997_35030 = state_34976__$1;
(statearr_34997_35030[(2)] = inst_34962);

(statearr_34997_35030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (2))){
var state_34976__$1 = state_34976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34976__$1,(4),in$);
} else {
if((state_val_34977 === (23))){
var inst_34970 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
var statearr_34998_35031 = state_34976__$1;
(statearr_34998_35031[(2)] = inst_34970);

(statearr_34998_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (19))){
var inst_34957 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
var statearr_34999_35032 = state_34976__$1;
(statearr_34999_35032[(2)] = inst_34957);

(statearr_34999_35032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (11))){
var inst_34942 = (state_34976[(7)]);
var inst_34928 = (state_34976[(12)]);
var inst_34942__$1 = cljs.core.seq.call(null,inst_34928);
var state_34976__$1 = (function (){var statearr_35000 = state_34976;
(statearr_35000[(7)] = inst_34942__$1);

return statearr_35000;
})();
if(inst_34942__$1){
var statearr_35001_35033 = state_34976__$1;
(statearr_35001_35033[(1)] = (14));

} else {
var statearr_35002_35034 = state_34976__$1;
(statearr_35002_35034[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (9))){
var inst_34964 = (state_34976[(2)]);
var inst_34965 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34976__$1 = (function (){var statearr_35003 = state_34976;
(statearr_35003[(15)] = inst_34964);

return statearr_35003;
})();
if(cljs.core.truth_(inst_34965)){
var statearr_35004_35035 = state_34976__$1;
(statearr_35004_35035[(1)] = (21));

} else {
var statearr_35005_35036 = state_34976__$1;
(statearr_35005_35036[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (5))){
var inst_34920 = cljs.core.async.close_BANG_.call(null,out);
var state_34976__$1 = state_34976;
var statearr_35006_35037 = state_34976__$1;
(statearr_35006_35037[(2)] = inst_34920);

(statearr_35006_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (14))){
var inst_34942 = (state_34976[(7)]);
var inst_34944 = cljs.core.chunked_seq_QMARK_.call(null,inst_34942);
var state_34976__$1 = state_34976;
if(inst_34944){
var statearr_35007_35038 = state_34976__$1;
(statearr_35007_35038[(1)] = (17));

} else {
var statearr_35008_35039 = state_34976__$1;
(statearr_35008_35039[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (16))){
var inst_34960 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
var statearr_35009_35040 = state_34976__$1;
(statearr_35009_35040[(2)] = inst_34960);

(statearr_35009_35040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (10))){
var inst_34929 = (state_34976[(8)]);
var inst_34931 = (state_34976[(9)]);
var inst_34936 = cljs.core._nth.call(null,inst_34929,inst_34931);
var state_34976__$1 = state_34976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34976__$1,(13),out,inst_34936);
} else {
if((state_val_34977 === (18))){
var inst_34942 = (state_34976[(7)]);
var inst_34951 = cljs.core.first.call(null,inst_34942);
var state_34976__$1 = state_34976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34976__$1,(20),out,inst_34951);
} else {
if((state_val_34977 === (8))){
var inst_34931 = (state_34976[(9)]);
var inst_34930 = (state_34976[(11)]);
var inst_34933 = (inst_34931 < inst_34930);
var inst_34934 = inst_34933;
var state_34976__$1 = state_34976;
if(cljs.core.truth_(inst_34934)){
var statearr_35010_35041 = state_34976__$1;
(statearr_35010_35041[(1)] = (10));

} else {
var statearr_35011_35042 = state_34976__$1;
(statearr_35011_35042[(1)] = (11));

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
});})(c__32489__auto__))
;
return ((function (switch__32377__auto__,c__32489__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32378__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32378__auto____0 = (function (){
var statearr_35015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35015[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32378__auto__);

(statearr_35015[(1)] = (1));

return statearr_35015;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32378__auto____1 = (function (state_34976){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_34976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35016){if((e35016 instanceof Object)){
var ex__32381__auto__ = e35016;
var statearr_35017_35043 = state_34976;
(statearr_35017_35043[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35044 = state_34976;
state_34976 = G__35044;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32378__auto__ = function(state_34976){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32378__auto____1.call(this,state_34976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32378__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32378__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto__))
})();
var state__32491__auto__ = (function (){var statearr_35018 = f__32490__auto__.call(null);
(statearr_35018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto__);

return statearr_35018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto__))
);

return c__32489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35045 = [];
var len__27650__auto___35048 = arguments.length;
var i__27651__auto___35049 = (0);
while(true){
if((i__27651__auto___35049 < len__27650__auto___35048)){
args35045.push((arguments[i__27651__auto___35049]));

var G__35050 = (i__27651__auto___35049 + (1));
i__27651__auto___35049 = G__35050;
continue;
} else {
}
break;
}

var G__35047 = args35045.length;
switch (G__35047) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35045.length)].join('')));

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
var args35052 = [];
var len__27650__auto___35055 = arguments.length;
var i__27651__auto___35056 = (0);
while(true){
if((i__27651__auto___35056 < len__27650__auto___35055)){
args35052.push((arguments[i__27651__auto___35056]));

var G__35057 = (i__27651__auto___35056 + (1));
i__27651__auto___35056 = G__35057;
continue;
} else {
}
break;
}

var G__35054 = args35052.length;
switch (G__35054) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35052.length)].join('')));

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
var args35059 = [];
var len__27650__auto___35110 = arguments.length;
var i__27651__auto___35111 = (0);
while(true){
if((i__27651__auto___35111 < len__27650__auto___35110)){
args35059.push((arguments[i__27651__auto___35111]));

var G__35112 = (i__27651__auto___35111 + (1));
i__27651__auto___35111 = G__35112;
continue;
} else {
}
break;
}

var G__35061 = args35059.length;
switch (G__35061) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35059.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32489__auto___35114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___35114,out){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___35114,out){
return (function (state_35085){
var state_val_35086 = (state_35085[(1)]);
if((state_val_35086 === (7))){
var inst_35080 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35087_35115 = state_35085__$1;
(statearr_35087_35115[(2)] = inst_35080);

(statearr_35087_35115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (1))){
var inst_35062 = null;
var state_35085__$1 = (function (){var statearr_35088 = state_35085;
(statearr_35088[(7)] = inst_35062);

return statearr_35088;
})();
var statearr_35089_35116 = state_35085__$1;
(statearr_35089_35116[(2)] = null);

(statearr_35089_35116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (4))){
var inst_35065 = (state_35085[(8)]);
var inst_35065__$1 = (state_35085[(2)]);
var inst_35066 = (inst_35065__$1 == null);
var inst_35067 = cljs.core.not.call(null,inst_35066);
var state_35085__$1 = (function (){var statearr_35090 = state_35085;
(statearr_35090[(8)] = inst_35065__$1);

return statearr_35090;
})();
if(inst_35067){
var statearr_35091_35117 = state_35085__$1;
(statearr_35091_35117[(1)] = (5));

} else {
var statearr_35092_35118 = state_35085__$1;
(statearr_35092_35118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (6))){
var state_35085__$1 = state_35085;
var statearr_35093_35119 = state_35085__$1;
(statearr_35093_35119[(2)] = null);

(statearr_35093_35119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (3))){
var inst_35082 = (state_35085[(2)]);
var inst_35083 = cljs.core.async.close_BANG_.call(null,out);
var state_35085__$1 = (function (){var statearr_35094 = state_35085;
(statearr_35094[(9)] = inst_35082);

return statearr_35094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35085__$1,inst_35083);
} else {
if((state_val_35086 === (2))){
var state_35085__$1 = state_35085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35085__$1,(4),ch);
} else {
if((state_val_35086 === (11))){
var inst_35065 = (state_35085[(8)]);
var inst_35074 = (state_35085[(2)]);
var inst_35062 = inst_35065;
var state_35085__$1 = (function (){var statearr_35095 = state_35085;
(statearr_35095[(10)] = inst_35074);

(statearr_35095[(7)] = inst_35062);

return statearr_35095;
})();
var statearr_35096_35120 = state_35085__$1;
(statearr_35096_35120[(2)] = null);

(statearr_35096_35120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (9))){
var inst_35065 = (state_35085[(8)]);
var state_35085__$1 = state_35085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35085__$1,(11),out,inst_35065);
} else {
if((state_val_35086 === (5))){
var inst_35065 = (state_35085[(8)]);
var inst_35062 = (state_35085[(7)]);
var inst_35069 = cljs.core._EQ_.call(null,inst_35065,inst_35062);
var state_35085__$1 = state_35085;
if(inst_35069){
var statearr_35098_35121 = state_35085__$1;
(statearr_35098_35121[(1)] = (8));

} else {
var statearr_35099_35122 = state_35085__$1;
(statearr_35099_35122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (10))){
var inst_35077 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35100_35123 = state_35085__$1;
(statearr_35100_35123[(2)] = inst_35077);

(statearr_35100_35123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (8))){
var inst_35062 = (state_35085[(7)]);
var tmp35097 = inst_35062;
var inst_35062__$1 = tmp35097;
var state_35085__$1 = (function (){var statearr_35101 = state_35085;
(statearr_35101[(7)] = inst_35062__$1);

return statearr_35101;
})();
var statearr_35102_35124 = state_35085__$1;
(statearr_35102_35124[(2)] = null);

(statearr_35102_35124[(1)] = (2));


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
});})(c__32489__auto___35114,out))
;
return ((function (switch__32377__auto__,c__32489__auto___35114,out){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_35106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35106[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_35106[(1)] = (1));

return statearr_35106;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_35085){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35107){if((e35107 instanceof Object)){
var ex__32381__auto__ = e35107;
var statearr_35108_35125 = state_35085;
(statearr_35108_35125[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35126 = state_35085;
state_35085 = G__35126;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_35085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_35085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___35114,out))
})();
var state__32491__auto__ = (function (){var statearr_35109 = f__32490__auto__.call(null);
(statearr_35109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___35114);

return statearr_35109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___35114,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35127 = [];
var len__27650__auto___35197 = arguments.length;
var i__27651__auto___35198 = (0);
while(true){
if((i__27651__auto___35198 < len__27650__auto___35197)){
args35127.push((arguments[i__27651__auto___35198]));

var G__35199 = (i__27651__auto___35198 + (1));
i__27651__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var G__35129 = args35127.length;
switch (G__35129) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35127.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32489__auto___35201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___35201,out){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___35201,out){
return (function (state_35167){
var state_val_35168 = (state_35167[(1)]);
if((state_val_35168 === (7))){
var inst_35163 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
var statearr_35169_35202 = state_35167__$1;
(statearr_35169_35202[(2)] = inst_35163);

(statearr_35169_35202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (1))){
var inst_35130 = (new Array(n));
var inst_35131 = inst_35130;
var inst_35132 = (0);
var state_35167__$1 = (function (){var statearr_35170 = state_35167;
(statearr_35170[(7)] = inst_35131);

(statearr_35170[(8)] = inst_35132);

return statearr_35170;
})();
var statearr_35171_35203 = state_35167__$1;
(statearr_35171_35203[(2)] = null);

(statearr_35171_35203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (4))){
var inst_35135 = (state_35167[(9)]);
var inst_35135__$1 = (state_35167[(2)]);
var inst_35136 = (inst_35135__$1 == null);
var inst_35137 = cljs.core.not.call(null,inst_35136);
var state_35167__$1 = (function (){var statearr_35172 = state_35167;
(statearr_35172[(9)] = inst_35135__$1);

return statearr_35172;
})();
if(inst_35137){
var statearr_35173_35204 = state_35167__$1;
(statearr_35173_35204[(1)] = (5));

} else {
var statearr_35174_35205 = state_35167__$1;
(statearr_35174_35205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (15))){
var inst_35157 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
var statearr_35175_35206 = state_35167__$1;
(statearr_35175_35206[(2)] = inst_35157);

(statearr_35175_35206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (13))){
var state_35167__$1 = state_35167;
var statearr_35176_35207 = state_35167__$1;
(statearr_35176_35207[(2)] = null);

(statearr_35176_35207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (6))){
var inst_35132 = (state_35167[(8)]);
var inst_35153 = (inst_35132 > (0));
var state_35167__$1 = state_35167;
if(cljs.core.truth_(inst_35153)){
var statearr_35177_35208 = state_35167__$1;
(statearr_35177_35208[(1)] = (12));

} else {
var statearr_35178_35209 = state_35167__$1;
(statearr_35178_35209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (3))){
var inst_35165 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35167__$1,inst_35165);
} else {
if((state_val_35168 === (12))){
var inst_35131 = (state_35167[(7)]);
var inst_35155 = cljs.core.vec.call(null,inst_35131);
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35167__$1,(15),out,inst_35155);
} else {
if((state_val_35168 === (2))){
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35167__$1,(4),ch);
} else {
if((state_val_35168 === (11))){
var inst_35147 = (state_35167[(2)]);
var inst_35148 = (new Array(n));
var inst_35131 = inst_35148;
var inst_35132 = (0);
var state_35167__$1 = (function (){var statearr_35179 = state_35167;
(statearr_35179[(7)] = inst_35131);

(statearr_35179[(8)] = inst_35132);

(statearr_35179[(10)] = inst_35147);

return statearr_35179;
})();
var statearr_35180_35210 = state_35167__$1;
(statearr_35180_35210[(2)] = null);

(statearr_35180_35210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (9))){
var inst_35131 = (state_35167[(7)]);
var inst_35145 = cljs.core.vec.call(null,inst_35131);
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35167__$1,(11),out,inst_35145);
} else {
if((state_val_35168 === (5))){
var inst_35131 = (state_35167[(7)]);
var inst_35135 = (state_35167[(9)]);
var inst_35140 = (state_35167[(11)]);
var inst_35132 = (state_35167[(8)]);
var inst_35139 = (inst_35131[inst_35132] = inst_35135);
var inst_35140__$1 = (inst_35132 + (1));
var inst_35141 = (inst_35140__$1 < n);
var state_35167__$1 = (function (){var statearr_35181 = state_35167;
(statearr_35181[(12)] = inst_35139);

(statearr_35181[(11)] = inst_35140__$1);

return statearr_35181;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35182_35211 = state_35167__$1;
(statearr_35182_35211[(1)] = (8));

} else {
var statearr_35183_35212 = state_35167__$1;
(statearr_35183_35212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (14))){
var inst_35160 = (state_35167[(2)]);
var inst_35161 = cljs.core.async.close_BANG_.call(null,out);
var state_35167__$1 = (function (){var statearr_35185 = state_35167;
(statearr_35185[(13)] = inst_35160);

return statearr_35185;
})();
var statearr_35186_35213 = state_35167__$1;
(statearr_35186_35213[(2)] = inst_35161);

(statearr_35186_35213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (10))){
var inst_35151 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
var statearr_35187_35214 = state_35167__$1;
(statearr_35187_35214[(2)] = inst_35151);

(statearr_35187_35214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (8))){
var inst_35131 = (state_35167[(7)]);
var inst_35140 = (state_35167[(11)]);
var tmp35184 = inst_35131;
var inst_35131__$1 = tmp35184;
var inst_35132 = inst_35140;
var state_35167__$1 = (function (){var statearr_35188 = state_35167;
(statearr_35188[(7)] = inst_35131__$1);

(statearr_35188[(8)] = inst_35132);

return statearr_35188;
})();
var statearr_35189_35215 = state_35167__$1;
(statearr_35189_35215[(2)] = null);

(statearr_35189_35215[(1)] = (2));


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
});})(c__32489__auto___35201,out))
;
return ((function (switch__32377__auto__,c__32489__auto___35201,out){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_35193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35193[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_35193[(1)] = (1));

return statearr_35193;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_35167){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35194){if((e35194 instanceof Object)){
var ex__32381__auto__ = e35194;
var statearr_35195_35216 = state_35167;
(statearr_35195_35216[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35217 = state_35167;
state_35167 = G__35217;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_35167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_35167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___35201,out))
})();
var state__32491__auto__ = (function (){var statearr_35196 = f__32490__auto__.call(null);
(statearr_35196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___35201);

return statearr_35196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___35201,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35218 = [];
var len__27650__auto___35292 = arguments.length;
var i__27651__auto___35293 = (0);
while(true){
if((i__27651__auto___35293 < len__27650__auto___35292)){
args35218.push((arguments[i__27651__auto___35293]));

var G__35294 = (i__27651__auto___35293 + (1));
i__27651__auto___35293 = G__35294;
continue;
} else {
}
break;
}

var G__35220 = args35218.length;
switch (G__35220) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35218.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32489__auto___35296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32489__auto___35296,out){
return (function (){
var f__32490__auto__ = (function (){var switch__32377__auto__ = ((function (c__32489__auto___35296,out){
return (function (state_35262){
var state_val_35263 = (state_35262[(1)]);
if((state_val_35263 === (7))){
var inst_35258 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
var statearr_35264_35297 = state_35262__$1;
(statearr_35264_35297[(2)] = inst_35258);

(statearr_35264_35297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (1))){
var inst_35221 = [];
var inst_35222 = inst_35221;
var inst_35223 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35262__$1 = (function (){var statearr_35265 = state_35262;
(statearr_35265[(7)] = inst_35223);

(statearr_35265[(8)] = inst_35222);

return statearr_35265;
})();
var statearr_35266_35298 = state_35262__$1;
(statearr_35266_35298[(2)] = null);

(statearr_35266_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (4))){
var inst_35226 = (state_35262[(9)]);
var inst_35226__$1 = (state_35262[(2)]);
var inst_35227 = (inst_35226__$1 == null);
var inst_35228 = cljs.core.not.call(null,inst_35227);
var state_35262__$1 = (function (){var statearr_35267 = state_35262;
(statearr_35267[(9)] = inst_35226__$1);

return statearr_35267;
})();
if(inst_35228){
var statearr_35268_35299 = state_35262__$1;
(statearr_35268_35299[(1)] = (5));

} else {
var statearr_35269_35300 = state_35262__$1;
(statearr_35269_35300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (15))){
var inst_35252 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
var statearr_35270_35301 = state_35262__$1;
(statearr_35270_35301[(2)] = inst_35252);

(statearr_35270_35301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (13))){
var state_35262__$1 = state_35262;
var statearr_35271_35302 = state_35262__$1;
(statearr_35271_35302[(2)] = null);

(statearr_35271_35302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (6))){
var inst_35222 = (state_35262[(8)]);
var inst_35247 = inst_35222.length;
var inst_35248 = (inst_35247 > (0));
var state_35262__$1 = state_35262;
if(cljs.core.truth_(inst_35248)){
var statearr_35272_35303 = state_35262__$1;
(statearr_35272_35303[(1)] = (12));

} else {
var statearr_35273_35304 = state_35262__$1;
(statearr_35273_35304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (3))){
var inst_35260 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35262__$1,inst_35260);
} else {
if((state_val_35263 === (12))){
var inst_35222 = (state_35262[(8)]);
var inst_35250 = cljs.core.vec.call(null,inst_35222);
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35262__$1,(15),out,inst_35250);
} else {
if((state_val_35263 === (2))){
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35262__$1,(4),ch);
} else {
if((state_val_35263 === (11))){
var inst_35230 = (state_35262[(10)]);
var inst_35226 = (state_35262[(9)]);
var inst_35240 = (state_35262[(2)]);
var inst_35241 = [];
var inst_35242 = inst_35241.push(inst_35226);
var inst_35222 = inst_35241;
var inst_35223 = inst_35230;
var state_35262__$1 = (function (){var statearr_35274 = state_35262;
(statearr_35274[(11)] = inst_35242);

(statearr_35274[(7)] = inst_35223);

(statearr_35274[(12)] = inst_35240);

(statearr_35274[(8)] = inst_35222);

return statearr_35274;
})();
var statearr_35275_35305 = state_35262__$1;
(statearr_35275_35305[(2)] = null);

(statearr_35275_35305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (9))){
var inst_35222 = (state_35262[(8)]);
var inst_35238 = cljs.core.vec.call(null,inst_35222);
var state_35262__$1 = state_35262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35262__$1,(11),out,inst_35238);
} else {
if((state_val_35263 === (5))){
var inst_35230 = (state_35262[(10)]);
var inst_35226 = (state_35262[(9)]);
var inst_35223 = (state_35262[(7)]);
var inst_35230__$1 = f.call(null,inst_35226);
var inst_35231 = cljs.core._EQ_.call(null,inst_35230__$1,inst_35223);
var inst_35232 = cljs.core.keyword_identical_QMARK_.call(null,inst_35223,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35233 = (inst_35231) || (inst_35232);
var state_35262__$1 = (function (){var statearr_35276 = state_35262;
(statearr_35276[(10)] = inst_35230__$1);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35233)){
var statearr_35277_35306 = state_35262__$1;
(statearr_35277_35306[(1)] = (8));

} else {
var statearr_35278_35307 = state_35262__$1;
(statearr_35278_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (14))){
var inst_35255 = (state_35262[(2)]);
var inst_35256 = cljs.core.async.close_BANG_.call(null,out);
var state_35262__$1 = (function (){var statearr_35280 = state_35262;
(statearr_35280[(13)] = inst_35255);

return statearr_35280;
})();
var statearr_35281_35308 = state_35262__$1;
(statearr_35281_35308[(2)] = inst_35256);

(statearr_35281_35308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (10))){
var inst_35245 = (state_35262[(2)]);
var state_35262__$1 = state_35262;
var statearr_35282_35309 = state_35262__$1;
(statearr_35282_35309[(2)] = inst_35245);

(statearr_35282_35309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35263 === (8))){
var inst_35230 = (state_35262[(10)]);
var inst_35226 = (state_35262[(9)]);
var inst_35222 = (state_35262[(8)]);
var inst_35235 = inst_35222.push(inst_35226);
var tmp35279 = inst_35222;
var inst_35222__$1 = tmp35279;
var inst_35223 = inst_35230;
var state_35262__$1 = (function (){var statearr_35283 = state_35262;
(statearr_35283[(14)] = inst_35235);

(statearr_35283[(7)] = inst_35223);

(statearr_35283[(8)] = inst_35222__$1);

return statearr_35283;
})();
var statearr_35284_35310 = state_35262__$1;
(statearr_35284_35310[(2)] = null);

(statearr_35284_35310[(1)] = (2));


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
});})(c__32489__auto___35296,out))
;
return ((function (switch__32377__auto__,c__32489__auto___35296,out){
return (function() {
var cljs$core$async$state_machine__32378__auto__ = null;
var cljs$core$async$state_machine__32378__auto____0 = (function (){
var statearr_35288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35288[(0)] = cljs$core$async$state_machine__32378__auto__);

(statearr_35288[(1)] = (1));

return statearr_35288;
});
var cljs$core$async$state_machine__32378__auto____1 = (function (state_35262){
while(true){
var ret_value__32379__auto__ = (function (){try{while(true){
var result__32380__auto__ = switch__32377__auto__.call(null,state_35262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32380__auto__;
}
break;
}
}catch (e35289){if((e35289 instanceof Object)){
var ex__32381__auto__ = e35289;
var statearr_35290_35311 = state_35262;
(statearr_35290_35311[(5)] = ex__32381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35312 = state_35262;
state_35262 = G__35312;
continue;
} else {
return ret_value__32379__auto__;
}
break;
}
});
cljs$core$async$state_machine__32378__auto__ = function(state_35262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32378__auto____1.call(this,state_35262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32378__auto____0;
cljs$core$async$state_machine__32378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32378__auto____1;
return cljs$core$async$state_machine__32378__auto__;
})()
;})(switch__32377__auto__,c__32489__auto___35296,out))
})();
var state__32491__auto__ = (function (){var statearr_35291 = f__32490__auto__.call(null);
(statearr_35291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32489__auto___35296);

return statearr_35291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32491__auto__);
});})(c__32489__auto___35296,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map