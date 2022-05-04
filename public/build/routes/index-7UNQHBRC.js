import {
  News
} from "/build/_shared/chunk-FG6RBXIH.js";
import {
  Ender
} from "/build/_shared/chunk-3GDA3ZKA.js";
import {
  gql,
  useQuery
} from "/build/_shared/chunk-UUGMOJW4.js";
import {
  Season_F
} from "/build/_shared/chunk-ISVYQV2F.js";
import {
  Season_Su
} from "/build/_shared/chunk-YJDGBTQF.js";
import {
  Season_F as Season_F2
} from "/build/_shared/chunk-ACPK2NDK.js";
import {
  Season
} from "/build/_shared/chunk-EQP3YLDK.js";
import "/build/_shared/chunk-DDY35C6H.js";
import {
  Navbar
} from "/build/_shared/chunk-NEPZMOVE.js";
import "/build/_shared/chunk-BM7UA6J7.js";
import "/build/_shared/chunk-DSGR2ZV7.js";
import {
  React,
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  init_react
} from "/build/_shared/chunk-QO3FLZQJ.js";

// node-modules-polyfills:crypto
var crypto_exports = {};
__export(crypto_exports, {
  default: () => crypto_default
});
var crypto_default;
var init_crypto = __esm({
  "node-modules-polyfills:crypto"() {
    init_react();
    crypto_default = {};
  }
});

// node-modules-polyfills-commonjs:crypto
var require_crypto = __commonJS({
  "node-modules-polyfills-commonjs:crypto"(exports, module) {
    init_react();
    var polyfill = (init_crypto(), __toCommonJS(crypto_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node-modules-polyfills:events
var events_exports = {};
__export(events_exports, {
  EventEmitter: () => EventEmitter,
  default: () => events_default
});
function EventHandlers() {
}
function EventEmitter() {
  EventEmitter.init.call(this);
}
function $getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
function emitNone(handler, isFn, self2) {
  if (isFn)
    handler.call(self2);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2);
  }
}
function emitOne(handler, isFn, self2, arg1) {
  if (isFn)
    handler.call(self2, arg1);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1);
  }
}
function emitTwo(handler, isFn, self2, arg1, arg2) {
  if (isFn)
    handler.call(self2, arg1, arg2);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1, arg2);
  }
}
function emitThree(handler, isFn, self2, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self2, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1, arg2, arg3);
  }
}
function emitMany(handler, isFn, self2, args) {
  if (isFn)
    handler.apply(self2, args);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].apply(self2, args);
  }
}
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    if (events.newListener) {
      target.emit("newListener", type, listener.listener ? listener.listener : listener);
      events = target._events;
    }
    existing = events[type];
  }
  if (!existing) {
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + type + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }
  return target;
}
function emitWarning(e) {
  typeof console.warn === "function" ? console.warn(e) : console.log(e);
}
function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}
function listenerCount(type) {
  var events = this._events;
  if (events) {
    var evlistener = events[type];
    if (typeof evlistener === "function") {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }
  return 0;
}
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}
function arrayClone(arr, i) {
  var copy2 = new Array(i);
  while (i--)
    copy2[i] = arr[i];
  return copy2;
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
var domain, events_default;
var init_events = __esm({
  "node-modules-polyfills:events"() {
    "use strict";
    init_react();
    EventHandlers.prototype = /* @__PURE__ */ Object.create(null);
    events_default = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.usingDomains = false;
    EventEmitter.prototype.domain = void 0;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._maxListeners = void 0;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.init = function() {
      this.domain = null;
      if (EventEmitter.usingDomains) {
        if (domain.active && !(this instanceof domain.Domain)) {
          this.domain = domain.active;
        }
      }
      if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
        this._events = new EventHandlers();
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
      this._maxListeners = n;
      return this;
    };
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var er, handler, len, args, i, events, domain2;
      var needDomainExit = false;
      var doError = type === "error";
      events = this._events;
      if (events)
        doError = doError && events.error == null;
      else if (!doError)
        return false;
      domain2 = this.domain;
      if (doError) {
        er = arguments[1];
        if (domain2) {
          if (!er)
            er = new Error('Uncaught, unspecified "error" event');
          er.domainEmitter = this;
          er.domain = domain2;
          er.domainThrown = false;
          domain2.emit("error", er);
        } else if (er instanceof Error) {
          throw er;
        } else {
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
          err.context = er;
          throw err;
        }
        return false;
      }
      handler = events[type];
      if (!handler)
        return false;
      var isFn = typeof handler === "function";
      len = arguments.length;
      switch (len) {
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          emitMany(handler, isFn, this, args);
      }
      if (needDomainExit)
        domain2.exit();
      return true;
    };
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    EventEmitter.prototype.once = function once(type, listener) {
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      events = this._events;
      if (!events)
        return this;
      list = events[type];
      if (!list)
        return this;
      if (list === listener || list.listener && list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length; i-- > 0; ) {
          if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (list.length === 1) {
          list[0] = void 0;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }
        if (events.removeListener)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners2, events;
      events = this._events;
      if (!events)
        return this;
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys2 = Object.keys(events);
        for (var i = 0, key; i < keys2.length; ++i) {
          key = keys2[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }
      listeners2 = events[type];
      if (typeof listeners2 === "function") {
        this.removeListener(type, listeners2);
      } else if (listeners2) {
        do {
          this.removeListener(type, listeners2[listeners2.length - 1]);
        } while (listeners2[0]);
      }
      return this;
    };
    EventEmitter.prototype.listeners = function listeners(type) {
      var evlistener;
      var ret;
      var events = this._events;
      if (!events)
        ret = [];
      else {
        evlistener = events[type];
        if (!evlistener)
          ret = [];
        else if (typeof evlistener === "function")
          ret = [evlistener.listener || evlistener];
        else
          ret = unwrapListeners(evlistener);
      }
      return ret;
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
  }
});

// node-modules-polyfills-commonjs:events
var require_events = __commonJS({
  "node-modules-polyfills-commonjs:events"(exports, module) {
    init_react();
    var polyfill = (init_events(), __toCommonJS(events_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node-modules-polyfills:net
var net_exports = {};
__export(net_exports, {
  default: () => net_default
});
var net_default;
var init_net = __esm({
  "node-modules-polyfills:net"() {
    init_react();
    net_default = {};
  }
});

// node-modules-polyfills-commonjs:net
var require_net = __commonJS({
  "node-modules-polyfills-commonjs:net"(exports, module) {
    init_react();
    var polyfill = (init_net(), __toCommonJS(net_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node-modules-polyfills:tls
var tls_exports = {};
__export(tls_exports, {
  default: () => tls_default
});
var tls_default;
var init_tls = __esm({
  "node-modules-polyfills:tls"() {
    init_react();
    tls_default = {};
  }
});

// node-modules-polyfills-commonjs:tls
var require_tls = __commonJS({
  "node-modules-polyfills-commonjs:tls"(exports, module) {
    init_react();
    var polyfill = (init_tls(), __toCommonJS(tls_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node-modules-polyfills:punycode
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}
function mapDomain(string, fn) {
  var parts = string.split("@");
  var result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  var labels = string.split(".");
  var encoded = map(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  var output = [], counter = 0, length = string.length, value, extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function digitToBasic(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}
function encode(input) {
  var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
  input = ucs2decode(input);
  inputLength = input.length;
  n = initialN;
  delta = 0;
  bias = initialBias;
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  handledCPCount = basicLength = output.length;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m - n) * handledCPCountPlusOne;
    n = m;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < n && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue == n) {
        for (q = delta, k = base; ; k += base) {
          t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n;
  }
  return output.join("");
}
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
}
var maxInt, base, tMin, tMax, skew, damp, initialBias, initialN, delimiter, regexNonASCII, regexSeparators, errors, baseMinusTMin, floor, stringFromCharCode;
var init_punycode = __esm({
  "node-modules-polyfills:punycode"() {
    init_react();
    maxInt = 2147483647;
    base = 36;
    tMin = 1;
    tMax = 26;
    skew = 38;
    damp = 700;
    initialBias = 72;
    initialN = 128;
    delimiter = "-";
    regexNonASCII = /[^\x20-\x7E]/;
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    baseMinusTMin = base - tMin;
    floor = Math.floor;
    stringFromCharCode = String.fromCharCode;
  }
});

// node-modules-polyfills:process
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
function noop() {
}
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, title, platform, browser, env, argv, version, versions, release, config, on, addListener2, once2, off, removeListener2, removeAllListeners2, emit2, performance, performanceNow, startTime, browser$1, process_default;
var init_process = __esm({
  "node-modules-polyfills:process"() {
    init_react();
    cachedSetTimeout = defaultSetTimout;
    cachedClearTimeout = defaultClearTimeout;
    if (typeof globalThis.setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    }
    if (typeof globalThis.clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    }
    queue = [];
    draining = false;
    queueIndex = -1;
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    title = "browser";
    platform = "browser";
    browser = true;
    env = {};
    argv = [];
    version = "";
    versions = {};
    release = {};
    config = {};
    on = noop;
    addListener2 = noop;
    once2 = noop;
    off = noop;
    removeListener2 = noop;
    removeAllListeners2 = noop;
    emit2 = noop;
    performance = globalThis.performance || {};
    performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
      return new Date().getTime();
    };
    startTime = new Date();
    browser$1 = {
      nextTick,
      title,
      browser,
      env,
      argv,
      version,
      versions,
      on,
      addListener: addListener2,
      once: once2,
      off,
      removeListener: removeListener2,
      removeAllListeners: removeAllListeners2,
      emit: emit2,
      binding,
      cwd,
      chdir,
      umask,
      hrtime,
      platform,
      release,
      config,
      uptime
    };
    process_default = browser$1;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js
var inherits, inherits_default;
var init_inherits = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    init_react();
    if (typeof Object.create === "function") {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    inherits_default = inherits;
  }
});

// node-modules-polyfills:util
var util_exports = {};
__export(util_exports, {
  _extend: () => _extend,
  debuglog: () => debuglog,
  default: () => util_default,
  deprecate: () => deprecate,
  format: () => format,
  inherits: () => inherits_default,
  inspect: () => inspect,
  isArray: () => isArray,
  isBoolean: () => isBoolean,
  isBuffer: () => isBuffer,
  isDate: () => isDate,
  isError: () => isError,
  isFunction: () => isFunction,
  isNull: () => isNull,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isUndefined: () => isUndefined,
  log: () => log
});
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(" ");
  }
  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i >= len)
      return x2;
    switch (x2) {
      case "%s":
        return String(args[i++]);
      case "%d":
        return Number(args[i++]);
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return "[Circular]";
        }
      default:
        return x2;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += " " + x;
    } else {
      str += " " + inspect(x);
    }
  }
  return str;
}
function deprecate(fn, msg) {
  if (isUndefined(globalThis.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }
  if (process_default.noDeprecation === true) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process_default.throwDeprecation) {
        throw new Error(msg);
      } else if (process_default.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process_default.env.NODE_DEBUG || "";
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error("%s %d: %s", set, pid, msg);
      };
    } else {
      debugs[set] = function() {
      };
    }
  }
  return debugs[set];
}
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys2 = Object.keys(value);
  var visibleKeys = arrayToHash(keys2);
  if (ctx.showHidden) {
    keys2 = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys2.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base2 = "", array = false, braces = ["{", "}"];
  if (isArray(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction(value)) {
    var n = value.name ? ": " + value.name : "";
    base2 = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base2 = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base2 = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base2 = " " + formatError(value);
  }
  if (keys2.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base2 + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
  } else {
    output = keys2.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base2, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys2.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base2, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf("\n") >= 0)
      numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base2 === "" ? "" : base2 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base2 + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isSymbol(arg) {
  return typeof arg === "symbol";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isPrimitive(arg) {
  return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
}
function isBuffer(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function pad(n) {
  return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
function timestamp() {
  var d = new Date();
  var time = [
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join(":");
  return [d.getDate(), months[d.getMonth()], time].join(" ");
}
function log() {
  console.log("%s - %s", timestamp(), format.apply(null, arguments));
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  var keys2 = Object.keys(add);
  var i = keys2.length;
  while (i--) {
    origin[keys2[i]] = add[keys2[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var formatRegExp, debugs, debugEnviron, months, util_default;
var init_util = __esm({
  "node-modules-polyfills:util"() {
    init_react();
    init_process();
    init_inherits();
    formatRegExp = /%[sdj%]/g;
    debugs = {};
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    util_default = {
      inherits: inherits_default,
      _extend,
      log,
      isBuffer,
      isPrimitive,
      isFunction,
      isError,
      isDate,
      isObject,
      isRegExp,
      isUndefined,
      isSymbol,
      isString,
      isNumber,
      isNullOrUndefined,
      isNull,
      isBoolean,
      isArray,
      inspect,
      deprecate,
      format,
      debuglog
    };
  }
});

// node-modules-polyfills:querystring
function hasOwnProperty2(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function stringifyPrimitive(v) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "true" : "false";
    case "number":
      return isFinite(v) ? v : "";
    default:
      return "";
  }
}
function stringify(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return map2(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray2(obj[k])) {
        return map2(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }
  if (!name)
    return "";
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
}
function map2(xs, f) {
  if (xs.map)
    return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}
function parse(qs, sep, eq, options) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options && typeof options.maxKeys === "number") {
    maxKeys = options.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);
    if (!hasOwnProperty2(obj, k)) {
      obj[k] = v;
    } else if (isArray2(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
}
var isArray2, objectKeys;
var init_querystring = __esm({
  "node-modules-polyfills:querystring"() {
    init_react();
    isArray2 = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
    objectKeys = Object.keys || function(obj) {
      var res = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          res.push(key);
      }
      return res;
    };
  }
});

// node-modules-polyfills:url
var url_exports = {};
__export(url_exports, {
  Url: () => Url,
  default: () => url_default,
  format: () => urlFormat,
  parse: () => urlParse,
  resolve: () => urlResolve,
  resolveObject: () => urlResolveObject
});
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}
function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url)
    return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}
function parse2(self2, url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }
  var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, "/");
  url = uSplit.join(splitter);
  var rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      self2.path = rest;
      self2.href = rest;
      self2.pathname = simplePath[1];
      if (simplePath[2]) {
        self2.search = simplePath[2];
        if (parseQueryString) {
          self2.query = parse(self2.search.substr(1));
        } else {
          self2.query = self2.search.substr(1);
        }
      } else if (parseQueryString) {
        self2.search = "";
        self2.query = {};
      }
      return self2;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    self2.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      self2.slashes = true;
    }
  }
  var i, hec, l, p;
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      self2.auth = decodeURIComponent(auth);
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    if (hostEnd === -1)
      hostEnd = rest.length;
    self2.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    parseHost(self2);
    self2.hostname = self2.hostname || "";
    var ipv6Hostname = self2.hostname[0] === "[" && self2.hostname[self2.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = self2.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part)
          continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = "/" + notHost.join(".") + rest;
            }
            self2.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (self2.hostname.length > hostnameMaxLen) {
      self2.hostname = "";
    } else {
      self2.hostname = self2.hostname.toLowerCase();
    }
    if (!ipv6Hostname) {
      self2.hostname = toASCII(self2.hostname);
    }
    p = self2.port ? ":" + self2.port : "";
    var h = self2.hostname || "";
    self2.host = h + p;
    self2.href += self2.host;
    if (ipv6Hostname) {
      self2.hostname = self2.hostname.substr(1, self2.hostname.length - 2);
      if (rest[0] !== "/") {
        rest = "/" + rest;
      }
    }
  }
  if (!unsafeProtocol[lowerProto]) {
    for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    self2.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    self2.search = rest.substr(qm);
    self2.query = rest.substr(qm + 1);
    if (parseQueryString) {
      self2.query = parse(self2.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    self2.search = "";
    self2.query = {};
  }
  if (rest)
    self2.pathname = rest;
  if (slashedProtocol[lowerProto] && self2.hostname && !self2.pathname) {
    self2.pathname = "/";
  }
  if (self2.pathname || self2.search) {
    p = self2.pathname || "";
    var s = self2.search || "";
    self2.path = p + s;
  }
  self2.href = format2(self2);
  return self2;
}
function urlFormat(obj) {
  if (isString(obj))
    obj = parse2({}, obj);
  return format2(obj);
}
function format2(self2) {
  var auth = self2.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var protocol = self2.protocol || "", pathname = self2.pathname || "", hash = self2.hash || "", host = false, query = "";
  if (self2.host) {
    host = auth + self2.host;
  } else if (self2.hostname) {
    host = auth + (self2.hostname.indexOf(":") === -1 ? self2.hostname : "[" + this.hostname + "]");
    if (self2.port) {
      host += ":" + self2.port;
    }
  }
  if (self2.query && isObject(self2.query) && Object.keys(self2.query).length) {
    query = stringify(self2.query);
  }
  var search = self2.search || query && "?" + query || "";
  if (protocol && protocol.substr(-1) !== ":")
    protocol += ":";
  if (self2.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = "//" + (host || "");
    if (pathname && pathname.charAt(0) !== "/")
      pathname = "/" + pathname;
  } else if (!host) {
    host = "";
  }
  if (hash && hash.charAt(0) !== "#")
    hash = "#" + hash;
  if (search && search.charAt(0) !== "?")
    search = "?" + search;
  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return protocol + host + pathname + search + hash;
}
function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}
function urlResolveObject(source, relative) {
  if (!source)
    return relative;
  return urlParse(source, false, true).resolveObject(relative);
}
function parseHost(self2) {
  var host = self2.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      self2.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host)
    self2.hostname = host;
}
var url_default, protocolPattern, portPattern, simplePathPattern, delims, unwise, autoEscape, nonHostChars, hostEndingChars, hostnameMaxLen, hostnamePartPattern, hostnamePartStart, unsafeProtocol, hostlessProtocol, slashedProtocol;
var init_url = __esm({
  "node-modules-polyfills:url"() {
    init_react();
    init_punycode();
    init_util();
    init_querystring();
    url_default = {
      parse: urlParse,
      resolve: urlResolve,
      resolveObject: urlResolveObject,
      format: urlFormat,
      Url
    };
    protocolPattern = /^([a-z0-9.+-]+:)/i;
    portPattern = /:[0-9]*$/;
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    autoEscape = ["'"].concat(unwise);
    nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    hostEndingChars = ["/", "?", "#"];
    hostnameMaxLen = 255;
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    unsafeProtocol = {
      "javascript": true,
      "javascript:": true
    };
    hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
      return parse2(this, url, parseQueryString, slashesDenoteHost);
    };
    Url.prototype.format = function() {
      return format2(this);
    };
    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };
    Url.prototype.resolveObject = function(relative) {
      if (isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }
      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }
      result.hash = relative.hash;
      if (relative.href === "") {
        result.href = result.format();
        return result;
      }
      if (relative.slashes && !relative.protocol) {
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== "protocol")
            result[rkey] = relative[rkey];
        }
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
          result.path = result.pathname = "/";
        }
        result.href = result.format();
        return result;
      }
      var relPath;
      if (relative.protocol && relative.protocol !== result.protocol) {
        if (!slashedProtocol[relative.protocol]) {
          var keys2 = Object.keys(relative);
          for (var v = 0; v < keys2.length; v++) {
            var k = keys2[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          relPath = (relative.pathname || "").split("/");
          while (relPath.length && !(relative.host = relPath.shift()))
            ;
          if (!relative.host)
            relative.host = "";
          if (!relative.hostname)
            relative.hostname = "";
          if (relPath[0] !== "")
            relPath.unshift("");
          if (relPath.length < 2)
            relPath.unshift("");
          result.pathname = relPath.join("/");
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        if (result.pathname || result.search) {
          var p = result.pathname || "";
          var s = result.search || "";
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }
      var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
      relPath = relative.pathname && relative.pathname.split("/") || [];
      if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
          if (srcPath[0] === "")
            srcPath[0] = result.host;
          else
            srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === "")
              relPath[0] = relative.host;
            else
              relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
      }
      var authInHost;
      if (isRelAbs) {
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
      } else if (relPath.length) {
        if (!srcPath)
          srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!isNullOrUndefined(relative.search)) {
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        if (!isNull(result.pathname) || !isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.href = result.format();
        return result;
      }
      if (!srcPath.length) {
        result.pathname = null;
        if (result.search) {
          result.path = "/" + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
          srcPath.splice(i, 1);
        } else if (last === "..") {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift("..");
        }
      }
      if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
        srcPath.unshift("");
      }
      if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
        srcPath.push("");
      }
      var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      mustEndAbs = mustEndAbs || result.host && srcPath.length;
      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
      }
      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join("/");
      }
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };
    Url.prototype.parseHost = function() {
      return parseHost(this);
    };
  }
});

// node-modules-polyfills-commonjs:url
var require_url = __commonJS({
  "node-modules-polyfills-commonjs:url"(exports, module) {
    init_react();
    var polyfill = (init_url(), __toCommonJS(url_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/mysql/lib/protocol/constants/client.js
var require_client = __commonJS({
  "node_modules/mysql/lib/protocol/constants/client.js"(exports) {
    init_react();
    exports.CLIENT_LONG_PASSWORD = 1;
    exports.CLIENT_FOUND_ROWS = 2;
    exports.CLIENT_LONG_FLAG = 4;
    exports.CLIENT_CONNECT_WITH_DB = 8;
    exports.CLIENT_NO_SCHEMA = 16;
    exports.CLIENT_COMPRESS = 32;
    exports.CLIENT_ODBC = 64;
    exports.CLIENT_LOCAL_FILES = 128;
    exports.CLIENT_IGNORE_SPACE = 256;
    exports.CLIENT_PROTOCOL_41 = 512;
    exports.CLIENT_INTERACTIVE = 1024;
    exports.CLIENT_SSL = 2048;
    exports.CLIENT_IGNORE_SIGPIPE = 4096;
    exports.CLIENT_TRANSACTIONS = 8192;
    exports.CLIENT_RESERVED = 16384;
    exports.CLIENT_SECURE_CONNECTION = 32768;
    exports.CLIENT_MULTI_STATEMENTS = 65536;
    exports.CLIENT_MULTI_RESULTS = 131072;
    exports.CLIENT_PS_MULTI_RESULTS = 262144;
    exports.CLIENT_PLUGIN_AUTH = 524288;
    exports.CLIENT_SSL_VERIFY_SERVER_CERT = 1073741824;
    exports.CLIENT_REMEMBER_OPTIONS = 2147483648;
  }
});

// node_modules/mysql/lib/protocol/constants/charsets.js
var require_charsets = __commonJS({
  "node_modules/mysql/lib/protocol/constants/charsets.js"(exports) {
    init_react();
    exports.BIG5_CHINESE_CI = 1;
    exports.LATIN2_CZECH_CS = 2;
    exports.DEC8_SWEDISH_CI = 3;
    exports.CP850_GENERAL_CI = 4;
    exports.LATIN1_GERMAN1_CI = 5;
    exports.HP8_ENGLISH_CI = 6;
    exports.KOI8R_GENERAL_CI = 7;
    exports.LATIN1_SWEDISH_CI = 8;
    exports.LATIN2_GENERAL_CI = 9;
    exports.SWE7_SWEDISH_CI = 10;
    exports.ASCII_GENERAL_CI = 11;
    exports.UJIS_JAPANESE_CI = 12;
    exports.SJIS_JAPANESE_CI = 13;
    exports.CP1251_BULGARIAN_CI = 14;
    exports.LATIN1_DANISH_CI = 15;
    exports.HEBREW_GENERAL_CI = 16;
    exports.TIS620_THAI_CI = 18;
    exports.EUCKR_KOREAN_CI = 19;
    exports.LATIN7_ESTONIAN_CS = 20;
    exports.LATIN2_HUNGARIAN_CI = 21;
    exports.KOI8U_GENERAL_CI = 22;
    exports.CP1251_UKRAINIAN_CI = 23;
    exports.GB2312_CHINESE_CI = 24;
    exports.GREEK_GENERAL_CI = 25;
    exports.CP1250_GENERAL_CI = 26;
    exports.LATIN2_CROATIAN_CI = 27;
    exports.GBK_CHINESE_CI = 28;
    exports.CP1257_LITHUANIAN_CI = 29;
    exports.LATIN5_TURKISH_CI = 30;
    exports.LATIN1_GERMAN2_CI = 31;
    exports.ARMSCII8_GENERAL_CI = 32;
    exports.UTF8_GENERAL_CI = 33;
    exports.CP1250_CZECH_CS = 34;
    exports.UCS2_GENERAL_CI = 35;
    exports.CP866_GENERAL_CI = 36;
    exports.KEYBCS2_GENERAL_CI = 37;
    exports.MACCE_GENERAL_CI = 38;
    exports.MACROMAN_GENERAL_CI = 39;
    exports.CP852_GENERAL_CI = 40;
    exports.LATIN7_GENERAL_CI = 41;
    exports.LATIN7_GENERAL_CS = 42;
    exports.MACCE_BIN = 43;
    exports.CP1250_CROATIAN_CI = 44;
    exports.UTF8MB4_GENERAL_CI = 45;
    exports.UTF8MB4_BIN = 46;
    exports.LATIN1_BIN = 47;
    exports.LATIN1_GENERAL_CI = 48;
    exports.LATIN1_GENERAL_CS = 49;
    exports.CP1251_BIN = 50;
    exports.CP1251_GENERAL_CI = 51;
    exports.CP1251_GENERAL_CS = 52;
    exports.MACROMAN_BIN = 53;
    exports.UTF16_GENERAL_CI = 54;
    exports.UTF16_BIN = 55;
    exports.UTF16LE_GENERAL_CI = 56;
    exports.CP1256_GENERAL_CI = 57;
    exports.CP1257_BIN = 58;
    exports.CP1257_GENERAL_CI = 59;
    exports.UTF32_GENERAL_CI = 60;
    exports.UTF32_BIN = 61;
    exports.UTF16LE_BIN = 62;
    exports.BINARY = 63;
    exports.ARMSCII8_BIN = 64;
    exports.ASCII_BIN = 65;
    exports.CP1250_BIN = 66;
    exports.CP1256_BIN = 67;
    exports.CP866_BIN = 68;
    exports.DEC8_BIN = 69;
    exports.GREEK_BIN = 70;
    exports.HEBREW_BIN = 71;
    exports.HP8_BIN = 72;
    exports.KEYBCS2_BIN = 73;
    exports.KOI8R_BIN = 74;
    exports.KOI8U_BIN = 75;
    exports.LATIN2_BIN = 77;
    exports.LATIN5_BIN = 78;
    exports.LATIN7_BIN = 79;
    exports.CP850_BIN = 80;
    exports.CP852_BIN = 81;
    exports.SWE7_BIN = 82;
    exports.UTF8_BIN = 83;
    exports.BIG5_BIN = 84;
    exports.EUCKR_BIN = 85;
    exports.GB2312_BIN = 86;
    exports.GBK_BIN = 87;
    exports.SJIS_BIN = 88;
    exports.TIS620_BIN = 89;
    exports.UCS2_BIN = 90;
    exports.UJIS_BIN = 91;
    exports.GEOSTD8_GENERAL_CI = 92;
    exports.GEOSTD8_BIN = 93;
    exports.LATIN1_SPANISH_CI = 94;
    exports.CP932_JAPANESE_CI = 95;
    exports.CP932_BIN = 96;
    exports.EUCJPMS_JAPANESE_CI = 97;
    exports.EUCJPMS_BIN = 98;
    exports.CP1250_POLISH_CI = 99;
    exports.UTF16_UNICODE_CI = 101;
    exports.UTF16_ICELANDIC_CI = 102;
    exports.UTF16_LATVIAN_CI = 103;
    exports.UTF16_ROMANIAN_CI = 104;
    exports.UTF16_SLOVENIAN_CI = 105;
    exports.UTF16_POLISH_CI = 106;
    exports.UTF16_ESTONIAN_CI = 107;
    exports.UTF16_SPANISH_CI = 108;
    exports.UTF16_SWEDISH_CI = 109;
    exports.UTF16_TURKISH_CI = 110;
    exports.UTF16_CZECH_CI = 111;
    exports.UTF16_DANISH_CI = 112;
    exports.UTF16_LITHUANIAN_CI = 113;
    exports.UTF16_SLOVAK_CI = 114;
    exports.UTF16_SPANISH2_CI = 115;
    exports.UTF16_ROMAN_CI = 116;
    exports.UTF16_PERSIAN_CI = 117;
    exports.UTF16_ESPERANTO_CI = 118;
    exports.UTF16_HUNGARIAN_CI = 119;
    exports.UTF16_SINHALA_CI = 120;
    exports.UTF16_GERMAN2_CI = 121;
    exports.UTF16_CROATIAN_MYSQL561_CI = 122;
    exports.UTF16_UNICODE_520_CI = 123;
    exports.UTF16_VIETNAMESE_CI = 124;
    exports.UCS2_UNICODE_CI = 128;
    exports.UCS2_ICELANDIC_CI = 129;
    exports.UCS2_LATVIAN_CI = 130;
    exports.UCS2_ROMANIAN_CI = 131;
    exports.UCS2_SLOVENIAN_CI = 132;
    exports.UCS2_POLISH_CI = 133;
    exports.UCS2_ESTONIAN_CI = 134;
    exports.UCS2_SPANISH_CI = 135;
    exports.UCS2_SWEDISH_CI = 136;
    exports.UCS2_TURKISH_CI = 137;
    exports.UCS2_CZECH_CI = 138;
    exports.UCS2_DANISH_CI = 139;
    exports.UCS2_LITHUANIAN_CI = 140;
    exports.UCS2_SLOVAK_CI = 141;
    exports.UCS2_SPANISH2_CI = 142;
    exports.UCS2_ROMAN_CI = 143;
    exports.UCS2_PERSIAN_CI = 144;
    exports.UCS2_ESPERANTO_CI = 145;
    exports.UCS2_HUNGARIAN_CI = 146;
    exports.UCS2_SINHALA_CI = 147;
    exports.UCS2_GERMAN2_CI = 148;
    exports.UCS2_CROATIAN_MYSQL561_CI = 149;
    exports.UCS2_UNICODE_520_CI = 150;
    exports.UCS2_VIETNAMESE_CI = 151;
    exports.UCS2_GENERAL_MYSQL500_CI = 159;
    exports.UTF32_UNICODE_CI = 160;
    exports.UTF32_ICELANDIC_CI = 161;
    exports.UTF32_LATVIAN_CI = 162;
    exports.UTF32_ROMANIAN_CI = 163;
    exports.UTF32_SLOVENIAN_CI = 164;
    exports.UTF32_POLISH_CI = 165;
    exports.UTF32_ESTONIAN_CI = 166;
    exports.UTF32_SPANISH_CI = 167;
    exports.UTF32_SWEDISH_CI = 168;
    exports.UTF32_TURKISH_CI = 169;
    exports.UTF32_CZECH_CI = 170;
    exports.UTF32_DANISH_CI = 171;
    exports.UTF32_LITHUANIAN_CI = 172;
    exports.UTF32_SLOVAK_CI = 173;
    exports.UTF32_SPANISH2_CI = 174;
    exports.UTF32_ROMAN_CI = 175;
    exports.UTF32_PERSIAN_CI = 176;
    exports.UTF32_ESPERANTO_CI = 177;
    exports.UTF32_HUNGARIAN_CI = 178;
    exports.UTF32_SINHALA_CI = 179;
    exports.UTF32_GERMAN2_CI = 180;
    exports.UTF32_CROATIAN_MYSQL561_CI = 181;
    exports.UTF32_UNICODE_520_CI = 182;
    exports.UTF32_VIETNAMESE_CI = 183;
    exports.UTF8_UNICODE_CI = 192;
    exports.UTF8_ICELANDIC_CI = 193;
    exports.UTF8_LATVIAN_CI = 194;
    exports.UTF8_ROMANIAN_CI = 195;
    exports.UTF8_SLOVENIAN_CI = 196;
    exports.UTF8_POLISH_CI = 197;
    exports.UTF8_ESTONIAN_CI = 198;
    exports.UTF8_SPANISH_CI = 199;
    exports.UTF8_SWEDISH_CI = 200;
    exports.UTF8_TURKISH_CI = 201;
    exports.UTF8_CZECH_CI = 202;
    exports.UTF8_DANISH_CI = 203;
    exports.UTF8_LITHUANIAN_CI = 204;
    exports.UTF8_SLOVAK_CI = 205;
    exports.UTF8_SPANISH2_CI = 206;
    exports.UTF8_ROMAN_CI = 207;
    exports.UTF8_PERSIAN_CI = 208;
    exports.UTF8_ESPERANTO_CI = 209;
    exports.UTF8_HUNGARIAN_CI = 210;
    exports.UTF8_SINHALA_CI = 211;
    exports.UTF8_GERMAN2_CI = 212;
    exports.UTF8_CROATIAN_MYSQL561_CI = 213;
    exports.UTF8_UNICODE_520_CI = 214;
    exports.UTF8_VIETNAMESE_CI = 215;
    exports.UTF8_GENERAL_MYSQL500_CI = 223;
    exports.UTF8MB4_UNICODE_CI = 224;
    exports.UTF8MB4_ICELANDIC_CI = 225;
    exports.UTF8MB4_LATVIAN_CI = 226;
    exports.UTF8MB4_ROMANIAN_CI = 227;
    exports.UTF8MB4_SLOVENIAN_CI = 228;
    exports.UTF8MB4_POLISH_CI = 229;
    exports.UTF8MB4_ESTONIAN_CI = 230;
    exports.UTF8MB4_SPANISH_CI = 231;
    exports.UTF8MB4_SWEDISH_CI = 232;
    exports.UTF8MB4_TURKISH_CI = 233;
    exports.UTF8MB4_CZECH_CI = 234;
    exports.UTF8MB4_DANISH_CI = 235;
    exports.UTF8MB4_LITHUANIAN_CI = 236;
    exports.UTF8MB4_SLOVAK_CI = 237;
    exports.UTF8MB4_SPANISH2_CI = 238;
    exports.UTF8MB4_ROMAN_CI = 239;
    exports.UTF8MB4_PERSIAN_CI = 240;
    exports.UTF8MB4_ESPERANTO_CI = 241;
    exports.UTF8MB4_HUNGARIAN_CI = 242;
    exports.UTF8MB4_SINHALA_CI = 243;
    exports.UTF8MB4_GERMAN2_CI = 244;
    exports.UTF8MB4_CROATIAN_MYSQL561_CI = 245;
    exports.UTF8MB4_UNICODE_520_CI = 246;
    exports.UTF8MB4_VIETNAMESE_CI = 247;
    exports.UTF8_GENERAL50_CI = 253;
    exports.ARMSCII8 = exports.ARMSCII8_GENERAL_CI;
    exports.ASCII = exports.ASCII_GENERAL_CI;
    exports.BIG5 = exports.BIG5_CHINESE_CI;
    exports.BINARY = exports.BINARY;
    exports.CP1250 = exports.CP1250_GENERAL_CI;
    exports.CP1251 = exports.CP1251_GENERAL_CI;
    exports.CP1256 = exports.CP1256_GENERAL_CI;
    exports.CP1257 = exports.CP1257_GENERAL_CI;
    exports.CP866 = exports.CP866_GENERAL_CI;
    exports.CP850 = exports.CP850_GENERAL_CI;
    exports.CP852 = exports.CP852_GENERAL_CI;
    exports.CP932 = exports.CP932_JAPANESE_CI;
    exports.DEC8 = exports.DEC8_SWEDISH_CI;
    exports.EUCJPMS = exports.EUCJPMS_JAPANESE_CI;
    exports.EUCKR = exports.EUCKR_KOREAN_CI;
    exports.GB2312 = exports.GB2312_CHINESE_CI;
    exports.GBK = exports.GBK_CHINESE_CI;
    exports.GEOSTD8 = exports.GEOSTD8_GENERAL_CI;
    exports.GREEK = exports.GREEK_GENERAL_CI;
    exports.HEBREW = exports.HEBREW_GENERAL_CI;
    exports.HP8 = exports.HP8_ENGLISH_CI;
    exports.KEYBCS2 = exports.KEYBCS2_GENERAL_CI;
    exports.KOI8R = exports.KOI8R_GENERAL_CI;
    exports.KOI8U = exports.KOI8U_GENERAL_CI;
    exports.LATIN1 = exports.LATIN1_SWEDISH_CI;
    exports.LATIN2 = exports.LATIN2_GENERAL_CI;
    exports.LATIN5 = exports.LATIN5_TURKISH_CI;
    exports.LATIN7 = exports.LATIN7_GENERAL_CI;
    exports.MACCE = exports.MACCE_GENERAL_CI;
    exports.MACROMAN = exports.MACROMAN_GENERAL_CI;
    exports.SJIS = exports.SJIS_JAPANESE_CI;
    exports.SWE7 = exports.SWE7_SWEDISH_CI;
    exports.TIS620 = exports.TIS620_THAI_CI;
    exports.UCS2 = exports.UCS2_GENERAL_CI;
    exports.UJIS = exports.UJIS_JAPANESE_CI;
    exports.UTF16 = exports.UTF16_GENERAL_CI;
    exports.UTF16LE = exports.UTF16LE_GENERAL_CI;
    exports.UTF8 = exports.UTF8_GENERAL_CI;
    exports.UTF8MB4 = exports.UTF8MB4_GENERAL_CI;
    exports.UTF32 = exports.UTF32_GENERAL_CI;
  }
});

// node_modules/mysql/lib/protocol/constants/ssl_profiles.js
var require_ssl_profiles = __commonJS({
  "node_modules/mysql/lib/protocol/constants/ssl_profiles.js"(exports) {
    init_react();
    exports["Amazon RDS"] = {
      ca: [
        "-----BEGIN CERTIFICATE-----\nMIIDQzCCAqygAwIBAgIJAOd1tlfiGoEoMA0GCSqGSIb3DQEBBQUAMHUxCzAJBgNV\nBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdTZWF0dGxlMRMw\nEQYDVQQKEwpBbWF6b24uY29tMQwwCgYDVQQLEwNSRFMxHDAaBgNVBAMTE2F3cy5h\nbWF6b24uY29tL3Jkcy8wHhcNMTAwNDA1MjI0NDMxWhcNMTUwNDA0MjI0NDMxWjB1\nMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHU2Vh\ndHRsZTETMBEGA1UEChMKQW1hem9uLmNvbTEMMAoGA1UECxMDUkRTMRwwGgYDVQQD\nExNhd3MuYW1hem9uLmNvbS9yZHMvMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKB\ngQDKhXGU7tizxUR5WaFoMTFcxNxa05PEjZaIOEN5ctkWrqYSRov0/nOMoZjqk8bC\nmed9vPFoQGD0OTakPs0jVe3wwmR735hyVwmKIPPsGlaBYj1O6llIpZeQVyupNx56\nUzqtiLaDzh1KcmfqP3qP2dInzBfJQKjiRudo1FWnpPt33QIDAQABo4HaMIHXMB0G\nA1UdDgQWBBT/H3x+cqSkR/ePSIinPtc4yWKe3DCBpwYDVR0jBIGfMIGcgBT/H3x+\ncqSkR/ePSIinPtc4yWKe3KF5pHcwdTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh\nc2hpbmd0b24xEDAOBgNVBAcTB1NlYXR0bGUxEzARBgNVBAoTCkFtYXpvbi5jb20x\nDDAKBgNVBAsTA1JEUzEcMBoGA1UEAxMTYXdzLmFtYXpvbi5jb20vcmRzL4IJAOd1\ntlfiGoEoMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAvguZy/BDT66x\nGfgnJlyQwnFSeVLQm9u/FIvz4huGjbq9dqnD6h/Gm56QPFdyMEyDiZWaqY6V08lY\nLTBNb4kcIc9/6pc0/ojKciP5QJRm6OiZ4vgG05nF4fYjhU7WClUx7cxq1fKjNc2J\nUCmmYqgiVkAGWRETVo+byOSDZ4swb10=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID9DCCAtygAwIBAgIBQjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUwOTExMzFaFw0y\nMDAzMDUwOTExMzFaMIGKMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEbMBkGA1UEAwwSQW1hem9uIFJE\nUyBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuD8nrZ8V\nu+VA8yVlUipCZIKPTDcOILYpUe8Tct0YeQQr0uyl018StdBsa3CjBgvwpDRq1HgF\nJi2N3+39+shCNspQeE6aYU+BHXhKhIIStt3r7gl/4NqYiDDMWKHxHq0nsGDFfArf\nAOcjZdJagOMqb3fF46flc8k2E7THTm9Sz4L7RY1WdABMuurpICLFE3oHcGdapOb9\nT53pQR+xpHW9atkcf3pf7gbO0rlKVSIoUenBlZipUlp1VZl/OD/E+TtRhDDNdI2J\nP/DSMM3aEsq6ZQkfbz/Ilml+Lx3tJYXUDmp+ZjzMPLk/+3beT8EhrwtcG3VPpvwp\nBIOqsqVVTvw/CwIDAQABo2MwYTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUw\nAwEB/zAdBgNVHQ4EFgQUTgLurD72FchM7Sz1BcGPnIQISYMwHwYDVR0jBBgwFoAU\nTgLurD72FchM7Sz1BcGPnIQISYMwDQYJKoZIhvcNAQEFBQADggEBAHZcgIio8pAm\nMjHD5cl6wKjXxScXKtXygWH2BoDMYBJF9yfyKO2jEFxYKbHePpnXB1R04zJSWAw5\n2EUuDI1pSBh9BA82/5PkuNlNeSTB3dXDD2PEPdzVWbSKvUB8ZdooV+2vngL0Zm4r\n47QPyd18yPHrRIbtBtHR/6CwKevLZ394zgExqhnekYKIqqEX41xsUV0Gm6x4vpjf\n2u6O/+YE2U+qyyxHE5Wd5oqde0oo9UUpFETJPVb6Q2cEeQib8PBAyi0i6KnF+kIV\nA9dY7IHSubtCK/i8wxMVqfd5GtbA8mmpeJFwnDvm9rBEsHybl08qlax9syEwsUYr\n/40NawZfTUU=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBjCCAu6gAwIBAgIJAMc0ZzaSUK51MA0GCSqGSIb3DQEBCwUAMIGPMQswCQYD\nVQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\nMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\nem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkw\nODIyMTcwODUwWhcNMjQwODIyMTcwODUwWjCBjzELMAkGA1UEBhMCVVMxEDAOBgNV\nBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoMGUFtYXpv\nbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxIDAeBgNV\nBAMMF0FtYXpvbiBSRFMgUm9vdCAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEFAAOC\nAQ8AMIIBCgKCAQEArXnF/E6/Qh+ku3hQTSKPMhQQlCpoWvnIthzX6MK3p5a0eXKZ\noWIjYcNNG6UwJjp4fUXl6glp53Jobn+tWNX88dNH2n8DVbppSwScVE2LpuL+94vY\n0EYE/XxN7svKea8YvlrqkUBKyxLxTjh+U/KrGOaHxz9v0l6ZNlDbuaZw3qIWdD/I\n6aNbGeRUVtpM6P+bWIoxVl/caQylQS6CEYUk+CpVyJSkopwJlzXT07tMoDL5WgX9\nO08KVgDNz9qP/IGtAcRduRcNioH3E9v981QO1zt/Gpb2f8NqAjUUCUZzOnij6mx9\nMcZ+9cWX88CRzR0vQODWuZscgI08NvM69Fn2SQIDAQABo2MwYTAOBgNVHQ8BAf8E\nBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUc19g2LzLA5j0Kxc0LjZa\npmD/vB8wHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJKoZIhvcN\nAQELBQADggEBAHAG7WTmyjzPRIM85rVj+fWHsLIvqpw6DObIjMWokpliCeMINZFV\nynfgBKsf1ExwbvJNzYFXW6dihnguDG9VMPpi2up/ctQTN8tm9nDKOy08uNZoofMc\nNUZxKCEkVKZv+IL4oHoeayt8egtv3ujJM6V14AstMQ6SwvwvA93EP/Ug2e4WAXHu\ncbI1NAbUgVDqp+DRdfvZkgYKryjTWd/0+1fS8X1bBZVWzl7eirNVnHbSH2ZDpNuY\n0SBd8dj5F6ld3t58ydZbrTHze7JJOd8ijySAp4/kiu9UfZWuTPABzDa/DSdz9Dk/\nzPW4CXXvhLmE02TA9/HeCw3KEHIwicNuEfw=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBRDANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMDZaFw0y\nMDAzMDUyMjAzMDZaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1ub3J0aGVhc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAMmM2B4PfTXCZjbZMWiDPyxvk/eeNwIRJAhfzesiGUiLozX6CRy3rwC1ZOPV\nAcQf0LB+O8wY88C/cV+d4Q2nBDmnk+Vx7o2MyMh343r5rR3Na+4izd89tkQVt0WW\nvO21KRH5i8EuBjinboOwAwu6IJ+HyiQiM0VjgjrmEr/YzFPL8MgHD/YUHehqjACn\nC0+B7/gu7W4qJzBL2DOf7ub2qszGtwPE+qQzkCRDwE1A4AJmVE++/FLH2Zx78Egg\nfV1sUxPtYgjGH76VyyO6GNKM6rAUMD/q5mnPASQVIXgKbupr618bnH+SWHFjBqZq\nHvDGPMtiiWII41EmGUypyt5AbysCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFIiKM0Q6n1K4EmLxs3ZXxINbwEwR\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQBezGbE9Rw/k2e25iGjj5n8r+M3dlye8ORfCE/dijHtxqAKasXHgKX8I9Tw\nJkBiGWiuzqn7gO5MJ0nMMro1+gq29qjZnYX1pDHPgsRjUX8R+juRhgJ3JSHijRbf\n4qNJrnwga7pj94MhcLq9u0f6dxH6dXbyMv21T4TZMTmcFduf1KgaiVx1PEyJjC6r\nM+Ru+A0eM+jJ7uCjUoZKcpX8xkj4nmSnz9NMPog3wdOSB9cAW7XIc5mHa656wr7I\nWJxVcYNHTXIjCcng2zMKd1aCcl2KSFfy56sRfT7J5Wp69QSr+jq8KM55gw8uqAwi\nVPrXn2899T1rcTtFYFP16WXjGuc0\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBTDANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTExMDYwMDA1NDZaFw0y\nMDAzMDUwMDA1NDZaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1ub3J0aGVhc3QtMiBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAKSwd+RVUzTRH0FgnbwoTK8TMm/zMT4+2BvALpAUe6YXbkisg2goycWuuWLg\njOpFBB3GtyvXZnkqi7MkDWUmj1a2kf8l2oLyoaZ+Hm9x/sV+IJzOqPvj1XVUGjP6\nyYYnPJmUYqvZeI7fEkIGdFkP2m4/sgsSGsFvpD9FK1bL1Kx2UDpYX0kHTtr18Zm/\n1oN6irqWALSmXMDydb8hE0FB2A1VFyeKE6PnoDj/Y5cPHwPPdEi6/3gkDkSaOG30\nrWeQfL3pOcKqzbHaWTxMphd0DSL/quZ64Nr+Ly65Q5PRcTrtr55ekOUziuqXwk+o\n9QpACMwcJ7ROqOznZTqTzSFVXFECAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFM6Nox/QWbhzWVvzoJ/y0kGpNPK+\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQCTkWBqNvyRf3Y/W21DwFx3oT/AIWrHt0BdGZO34tavummXemTH9LZ/mqv9\naljt6ZuDtf5DEQjdsAwXMsyo03ffnP7doWm8iaF1+Mui77ot0TmTsP/deyGwukvJ\ntkxX8bZjDh+EaNauWKr+CYnniNxCQLfFtXYJsfOdVBzK3xNL+Z3ucOQRhr2helWc\nCDQgwfhP1+3pRVKqHvWCPC4R3fT7RZHuRmZ38kndv476GxRntejh+ePffif78bFI\n3rIZCPBGobrrUMycafSbyXteoGca/kA+/IqrAPlk0pWQ4aEL0yTWN2h2dnjoD7oX\nbyIuL/g9AGRh97+ssn7D6bDRPTbW\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBRTANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMTlaFw0y\nMDAzMDUyMjAzMTlaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1zb3V0aGVhc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBANaXElmSEYt/UtxHFsARFhSUahTf1KNJzR0Dmay6hqOXQuRVbKRwPd19u5vx\nDdF1sLT7D69IK3VDnUiQScaCv2Dpu9foZt+rLx+cpx1qiQd1UHrvqq8xPzQOqCdC\nRFStq6yVYZ69yfpfoI67AjclMOjl2Vph3ftVnqP0IgVKZdzeC7fd+umGgR9xY0Qr\nUbhd/lWdsbNvzK3f1TPWcfIKQnpvSt85PIEDJir6/nuJUKMtmJRwTymJf0i+JZ4x\n7dJa341p2kHKcHMgOPW7nJQklGBA70ytjUV6/qebS3yIugr/28mwReflg3TJzVDl\nEOvi6pqbqNbkMuEwGDCmEQIVqgkCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFAu93/4k5xbWOsgdCdn+/KdiRuit\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQBlcjSyscpPjf5+MgzMuAsCxByqUt+WFspwcMCpwdaBeHOPSQrXNqX2Sk6P\nkth6oCivA64trWo8tFMvPYlUA1FYVD5WpN0kCK+P5pD4KHlaDsXhuhClJzp/OP8t\npOyUr5109RHLxqoKB5J5m1XA7rgcFjnMxwBSWFe3/4uMk/+4T53YfCVXuc6QV3i7\nI/2LAJwFf//pTtt6fZenYfCsahnr2nvrNRNyAxcfvGZ/4Opn/mJtR6R/AjvQZHiR\nbkRNKF2GW0ueK5W4FkZVZVhhX9xh1Aj2Ollb+lbOqADaVj+AT3PoJPZ3MPQHKCXm\nxwG0LOLlRr/TfD6li1AfOVTAJXv9\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBRjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMjRaFw0y\nMDAzMDUyMjAzMjRaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1zb3V0aGVhc3QtMiBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAJqBAJutz69hFOh3BtLHZTbwE8eejGGKayn9hu98YMDPzWzGXWCmW+ZYWELA\ncY3cNWNF8K4FqKXFr2ssorBYim1UtYFX8yhydT2hMD5zgQ2sCGUpuidijuPA6zaq\nZ3tdhVR94f0q8mpwpv2zqR9PcqaGDx2VR1x773FupRPRo7mEW1vC3IptHCQlP/zE\n7jQiLl28bDIH2567xg7e7E9WnZToRnhlYdTaDaJsHTzi5mwILi4cihSok7Shv/ME\nhnukvxeSPUpaVtFaBhfBqq055ePq9I+Ns4KGreTKMhU0O9fkkaBaBmPaFgmeX/XO\nn2AX7gMouo3mtv34iDTZ0h6YCGkCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFIlQnY0KHYWn1jYumSdJYfwj/Nfw\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQA0wVU6/l41cTzHc4azc4CDYY2Wd90DFWiH9C/mw0SgToYfCJ/5Cfi0NT/Y\nPRnk3GchychCJgoPA/k9d0//IhYEAIiIDjyFVgjbTkKV3sh4RbdldKVOUB9kumz/\nZpShplsGt3z4QQiVnKfrAgqxWDjR0I0pQKkxXa6Sjkicos9LQxVtJ0XA4ieG1E7z\nzJr+6t80wmzxvkInSaWP3xNJK9azVRTrgQZQlvkbpDbExl4mNTG66VD3bAp6t3Wa\nB49//uDdfZmPkqqbX+hsxp160OH0rxJppwO3Bh869PkDnaPEd/Pxw7PawC+li0gi\nNRV8iCEx85aFxcyOhqn0WZOasxee\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/zCCAuegAwIBAgIBRzANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMzFaFw0y\nMDAzMDUyMjAzMzFaMIGSMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEjMCEGA1UEAwwaQW1hem9uIFJE\nUyBldS1jZW50cmFsLTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQDFtP2dhSLuaPOI4ZrrPWsK4OY9ocQBp3yApH1KJYmI9wpQKZG/KCH2E6Oo7JAw\nQORU519r033T+FO2Z7pFPlmz1yrxGXyHpJs8ySx3Yo5S8ncDCdZJCLmtPiq/hahg\n5/0ffexMFUCQaYicFZsrJ/cStdxUV+tSw2JQLD7UxS9J97LQWUPyyG+ZrjYVTVq+\nzudnFmNSe4QoecXMhAFTGJFQXxP7nhSL9Ao5FGgdXy7/JWeWdQIAj8ku6cBDKPa6\nY6kP+ak+In+Lye8z9qsCD/afUozfWjPR2aA4JoIZVF8dNRShIMo8l0XfgfM2q0+n\nApZWZ+BjhIO5XuoUgHS3D2YFAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNV\nHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRm4GsWIA/M6q+tK8WGHWDGh2gcyTAf\nBgNVHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOC\nAQEAHpMmeVQNqcxgfQdbDIi5UIy+E7zZykmtAygN1XQrvga9nXTis4kOTN6g5/+g\nHCx7jIXeNJzAbvg8XFqBN84Quqgpl/tQkbpco9Jh1HDs558D5NnZQxNqH5qXQ3Mm\nuPgCw0pYcPOa7bhs07i+MdVwPBsX27CFDtsgAIru8HvKxY1oTZrWnyIRo93tt/pk\nWuItVMVHjaQZVfTCow0aDUbte6Vlw82KjUFq+n2NMSCJDiDKsDDHT6BJc4AJHIq3\n/4Z52MSC9KMr0yAaaoWfW/yMEj9LliQauAgwVjArF4q78rxpfKTG9Rfd8U1BZANP\n7FrFMN0ThjfA1IvmOYcgskY5bQ==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSDANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMzVaFw0y\nMDAzMDUyMjAzMzVaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBldS13ZXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCx\nPdbqQ0HKRj79Pmocxvjc+P6i4Ux24kgFIl+ckiir1vzkmesc3a58gjrMlCksEObt\nYihs5IhzEq1ePT0gbfS9GYFp34Uj/MtPwlrfCBWG4d2TcrsKRHr1/EXUYhWqmdrb\nRhX8XqoRhVkbF/auzFSBhTzcGGvZpQ2KIaxRcQfcXlMVhj/pxxAjh8U4F350Fb0h\nnX1jw4/KvEreBL0Xb2lnlGTkwVxaKGSgXEnOgIyOFdOQc61vdome0+eeZsP4jqeR\nTGYJA9izJsRbe2YJxHuazD+548hsPlM3vFzKKEVURCha466rAaYAHy3rKur3HYQx\nYt+SoKcEz9PXuSGj96ejAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBTebg//h2oeXbZjQ4uuoiuLYzuiPDAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nTikPaGeZasTPw+4RBemlsyPAjtFFQLo7ddaFdORLgdEysVf8aBqndvbA6MT/v4lj\nGtEtUdF59ZcbWOrVm+fBZ2h/jYJ59dYF/xzb09nyRbdMSzB9+mkSsnOMqluq5y8o\nDY/PfP2vGhEg/2ZncRC7nlQU1Dm8F4lFWEiQ2fi7O1cW852Vmbq61RIfcYsH/9Ma\nkpgk10VZ75b8m3UhmpZ/2uRY+JEHImH5WpcTJ7wNiPNJsciZMznGtrgOnPzYco8L\ncDleOASIZifNMQi9PKOJKvi0ITz0B/imr8KBsW0YjZVJ54HMa7W1lwugSM7aMAs+\nE3Sd5lS+SHwWaOCHwhOEVA==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSTANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzNDBaFw0y\nMDAzMDUyMjAzNDBaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBzYS1lYXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCU\nX4OBnQ5xA6TLJAiFEI6l7bUWjoVJBa/VbMdCCSs2i2dOKmqUaXu2ix2zcPILj3lZ\nGMk3d/2zvTK/cKhcFrewHUBamTeVHdEmynhMQamqNmkM4ptYzFcvEUw1TGxHT4pV\nQ6gSN7+/AJewQvyHexHo8D0+LDN0/Wa9mRm4ixCYH2CyYYJNKaZt9+EZfNu+PPS4\n8iB0TWH0DgQkbWMBfCRgolLLitAZklZ4dvdlEBS7evN1/7ttBxUK6SvkeeSx3zBl\nww3BlXqc3bvTQL0A+RRysaVyFbvtp9domFaDKZCpMmDFAN/ntx215xmQdrSt+K3F\ncXdGQYHx5q410CAclGnbAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT6iVWnm/uakS+tEX2mzIfw+8JL0zAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nFmDD+QuDklXn2EgShwQxV13+txPRuVdOSrutHhoCgMwFWCMtPPtBAKs6KPY7Guvw\nDpJoZSehDiOfsgMirjOWjvfkeWSNvKfjWTVneX7pZD9W5WPnsDBvTbCGezm+v87z\nb+ZM2ZMo98m/wkMcIEAgdSKilR2fuw8rLkAjhYFfs0A7tDgZ9noKwgHvoE4dsrI0\nKZYco6DlP/brASfHTPa2puBLN9McK3v+h0JaSqqm5Ro2Bh56tZkQh8AWy/miuDuK\n3+hNEVdxosxlkM1TPa1DGj0EzzK0yoeerXuH2HX7LlCrrxf6/wdKnjR12PMrLQ4A\npCqkcWw894z6bV9MAvKe6A==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBQzANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMTU0MDRaFw0y\nMDAzMDUyMTU0MDRaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy1lYXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDI\nUIuwh8NusKHk1SqPXcP7OqxY3S/M2ZyQWD3w7Bfihpyyy/fc1w0/suIpX3kbMhAV\n2ESwged2/2zSx4pVnjp/493r4luhSqQYzru78TuPt9bhJIJ51WXunZW2SWkisSaf\nUSYUzVN9ezR/bjXTumSUQaLIouJt3OHLX49s+3NAbUyOI8EdvgBQWD68H1epsC0n\nCI5s+pIktyOZ59c4DCDLQcXErQ+tNbDC++oct1ANd/q8p9URonYwGCGOBy7sbCYq\n9eVHh1Iy2M+SNXddVOGw5EuruvHoCIQyOz5Lz4zSuZA9dRbrfztNOpezCNYu6NKM\nn+hzcvdiyxv77uNm8EaxAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQSQG3TmMe6Sa3KufaPBa72v4QFDzAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nL/mOZfB3187xTmjOHMqN2G2oSKHBKiQLM9uv8+97qT+XR+TVsBT6b3yoPpMAGhHA\nPc7nxAF5gPpuzatx0OTLPcmYucFmfqT/1qA5WlgCnMNtczyNMH97lKFTNV7Njtek\njWEzAEQSyEWrkNpNlC4j6kMYyPzVXQeXUeZTgJ9FNnVZqmvfjip2N22tawMjrCn5\n7KN/zN65EwY2oO9XsaTwwWmBu3NrDdMbzJnbxoWcFWj4RBwanR1XjQOVNhDwmCOl\n/1Et13b8CPyj69PC8BOVU6cfTSx8WUVy0qvYOKHNY9Bqa5BDnIL3IVmUkeTlM1mt\nenRpyBj+Bk9rh/ICdiRKmA==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzNDVaFw0y\nMDAzMDUyMjAzNDVaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy13ZXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDE\nDhw+uw/ycaiIhhyu2pXFRimq0DlB8cNtIe8hdqndH8TV/TFrljNgR8QdzOgZtZ9C\nzzQ2GRpInN/qJF6slEd6wO+6TaDBQkPY+07TXNt52POFUhdVkhJXHpE2BS7Xn6J7\n7RFAOeG1IZmc2DDt+sR1BgXzUqHslQGfFYNS0/MBO4P+ya6W7IhruB1qfa4HiYQS\ndbe4MvGWnv0UzwAqdR7OF8+8/5c58YXZIXCO9riYF2ql6KNSL5cyDPcYK5VK0+Q9\nVI6vuJHSMYcF7wLePw8jtBktqAFE/wbdZiIHhZvNyiNWPPNTGUmQbaJ+TzQEHDs5\n8en+/W7JKnPyBOkxxENbAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBS0nw/tFR9bCjgqWTPJkyy4oOD8bzAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nCXGAY3feAak6lHdqj6+YWjy6yyUnLK37bRxZDsyDVXrPRQaXRzPTzx79jvDwEb/H\nQ/bdQ7zQRWqJcbivQlwhuPJ4kWPUZgSt3JUUuqkMsDzsvj/bwIjlrEFDOdHGh0mi\neVIngFEjUXjMh+5aHPEF9BlQnB8LfVtKj18e15UDTXFa+xJPFxUR7wDzCfo4WI1m\nsUMG4q1FkGAZgsoyFPZfF8IVvgCuGdR8z30VWKklFxttlK0eGLlPAyIO0CQxPQlo\nsaNJrHf4tLOgZIWk+LpDhNd9Et5EzvJ3aURUsKY4pISPPF5WdvM9OE59bERwUErd\nnuOuQWQeeadMceZnauRzJQ==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSzANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzNTBaFw0y\nMDAzMDUyMjAzNTBaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy13ZXN0LTIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDM\nH58SR48U6jyERC1vYTnub34smf5EQVXyzaTmspWGWGzT31NLNZGSDFaa7yef9kdO\nmzJsgebR5tXq6LdwlIoWkKYQ7ycUaadtVKVYdI40QcI3cHn0qLFlg2iBXmWp/B+i\nZ34VuVlCh31Uj5WmhaBoz8t/GRqh1V/aCsf3Wc6jCezH3QfuCjBpzxdOOHN6Ie2v\nxX09O5qmZTvMoRBAvPkxdaPg/Mi7fxueWTbEVk78kuFbF1jHYw8U1BLILIAhcqlq\nx4u8nl73t3O3l/soNUcIwUDK0/S+Kfqhwn9yQyPlhb4Wy3pfnZLJdkyHldktnQav\n9TB9u7KH5Lk0aAYslMLxAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT8roM4lRnlFHWMPWRz0zkwFZog1jAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nJwrxwgwmPtcdaU7O7WDdYa4hprpOMamI49NDzmE0s10oGrqmLwZygcWU0jT+fJ+Y\npJe1w0CVfKaeLYNsOBVW3X4ZPmffYfWBheZiaiEflq/P6t7/Eg81gaKYnZ/x1Dfa\nsUYkzPvCkXe9wEz5zdUTOCptDt89rBR9CstL9vE7WYUgiVVmBJffWbHQLtfjv6OF\nNMb0QME981kGRzc2WhgP71YS2hHd1kXtsoYP1yTu4vThSKsoN4bkiHsaC1cRkLoy\n0fFA4wpB3WloMEvCDaUvvH1LZlBXTNlwi9KtcwD4tDxkkBt4tQczKLGpQ/nF/W9n\n8YDWk3IIc1sd0bkZqoau2Q==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/TCCAuWgAwIBAgIBTTANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjA1MDMyMTI5MjJaFw0y\nMDAzMDUyMTI5MjJaMIGQMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEhMB8GA1UEAwwYQW1hem9uIFJE\nUyBhcC1zb3V0aC0xIENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n06eWGLE0TeqL9kyWOLkS8q0fXO97z+xyBV3DKSB2lg2GkgBz3B98MkmkeB0SZy3G\nCe4uCpCPbFKiFEdiUclOlhZsrBuCeaimxLM3Ig2wuenElO/7TqgaYHYUbT3d+VQW\nGUbLn5GRZJZe1OAClYdOWm7A1CKpuo+cVV1vxbY2nGUQSJPpVn2sT9gnwvjdE60U\nJGYU/RLCTm8zmZBvlWaNIeKDnreIc4rKn6gUnJ2cQn1ryCVleEeyc3xjYDSrjgdn\nFLYGcp9mphqVT0byeQMOk0c7RHpxrCSA0V5V6/CreFV2LteK50qcDQzDSM18vWP/\np09FoN8O7QrtOeZJzH/lmwIDAQABo2YwZDAOBgNVHQ8BAf8EBAMCAQYwEgYDVR0T\nAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU2i83QHuEl/d0keXF+69HNJph7cMwHwYD\nVR0jBBgwFoAUTgLurD72FchM7Sz1BcGPnIQISYMwDQYJKoZIhvcNAQELBQADggEB\nACqnH2VjApoDqoSQOky52QBwsGaj+xWYHW5Gm7EvCqvQuhWMkeBuD6YJmMvNyA9G\nI2lh6/o+sUk/RIsbYbxPRdhNPTOgDR9zsNRw6qxaHztq/CEC+mxDCLa3O1hHBaDV\nBmB3nCZb93BvO0EQSEk7aytKq/f+sjyxqOcs385gintdHGU9uM7gTZHnU9vByJsm\n/TL07Miq67X0NlhIoo3jAk+xHaeKJdxdKATQp0448P5cY20q4b8aMk1twcNaMvCP\ndG4M5doaoUA8OQ/0ukLLae/LBxLeTw04q1/a2SyFaVUX2Twbb1S3xVWwLA8vsyGr\nigXx7B5GgP+IHb6DTjPJAi0=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBTjANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjA4MTExOTU4NDVaFw0y\nMDAzMDUxOTU4NDVaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy1lYXN0LTIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCp\nWnnUX7wM0zzstccX+4iXKJa9GR0a2PpvB1paEX4QRCgfhEdQWDaSqyrWNgdVCKkt\n1aQkWu5j6VAC2XIG7kKoonm1ZdBVyBLqW5lXNywlaiU9yhJkwo8BR+/OqgE+PLt/\nEO1mlN0PQudja/XkExCXTO29TG2j7F/O7hox6vTyHNHc0H88zS21uPuBE+jivViS\nyzj/BkyoQ85hnkues3f9R6gCGdc+J51JbZnmgzUkvXjAEuKhAm9JksVOxcOKUYe5\nERhn0U9zjzpfbAITIkul97VVa5IxskFFTHIPJbvRKHJkiF6wTJww/tc9wm+fSCJ1\n+DbQTGZgkQ3bJrqRN29/AgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBSAHQzUYYZbepwKEMvGdHp8wzHnfDAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOCAQEA\nMbaEzSYZ+aZeTBxf8yi0ta8K4RdwEJsEmP6IhFFQHYUtva2Cynl4Q9tZg3RMsybT\n9mlnSQQlbN/wqIIXbkrcgFcHoXG9Odm/bDtUwwwDaiEhXVfeQom3G77QHOWMTCGK\nqadwuh5msrb17JdXZoXr4PYHDKP7j0ONfAyFNER2+uecblHfRSpVq5UeF3L6ZJb8\nfSw/GtAV6an+/0r+Qm+PiI2H5XuZ4GmRJYnGMhqWhBYrY7p3jtVnKcsh39wgfUnW\nAvZEZG/yhFyAZW0Essa39LiL5VSq14Y1DOj0wgnhSY/9WHxaAo1HB1T9OeZknYbD\nfl/EGSZ0TEvZkENrXcPlVA==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/zCCAuegAwIBAgIBTzANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjA5MTUwMDEwMTFaFw0y\nMDAzMDUwMDEwMTFaMIGSMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEjMCEGA1UEAwwaQW1hem9uIFJE\nUyBjYS1jZW50cmFsLTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQCZYI/iQ6DrS3ny3t1EwX1wAD+3LMgh7Fd01EW5LIuaK2kYIIQpsVKhxLCit/V5\nAGc/1qiJS1Qz9ODLTh0Na6bZW6EakRzuHJLe32KJtoFYPC7Z09UqzXrpA/XL+1hM\nP0ZmCWsU7Nn/EmvfBp9zX3dZp6P6ATrvDuYaVFr+SA7aT3FXpBroqBS1fyzUPs+W\nc6zTR6+yc4zkHX0XQxC5RH6xjgpeRkoOajA/sNo7AQF7KlWmKHbdVF44cvvAhRKZ\nXaoVs/C4GjkaAEPTCbopYdhzg+KLx9eB2BQnYLRrIOQZtRfbQI2Nbj7p3VsRuOW1\ntlcks2w1Gb0YC6w6SuIMFkl1AgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNV\nHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBToYWxE1lawl6Ks6NsvpbHQ3GKEtzAf\nBgNVHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOC\nAQEAG/8tQ0ooi3hoQpa5EJz0/E5VYBsAz3YxA2HoIonn0jJyG16bzB4yZt4vNQMA\nKsNlQ1uwDWYL1nz63axieUUFIxqxl1KmwfhsmLgZ0Hd2mnTPIl2Hw3uj5+wdgGBg\nagnAZ0bajsBYgD2VGQbqjdk2Qn7Fjy3LEWIvGZx4KyZ99OJ2QxB7JOPdauURAtWA\nDKYkP4LLJxtj07DSzG8kuRWb9B47uqUD+eKDIyjfjbnzGtd9HqqzYFau7EX3HVD9\n9Qhnjl7bTZ6YfAEZ3nH2t3Vc0z76XfGh47rd0pNRhMV+xpok75asKf/lNh5mcUrr\nVKwflyMkQpSbDCmcdJ90N2xEXQ==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBUDANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjEwMTAxNzQ0NDJaFw0y\nMDAzMDUxNzQ0NDJaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBldS13ZXN0LTIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDO\ncttLJfubB4XMMIGWNfJISkIdCMGJyOzLiMJaiWB5GYoXKhEl7YGotpy0qklwW3BQ\na0fmVdcCLX+dIuVQ9iFK+ZcK7zwm7HtdDTCHOCKeOh2IcnU4c/VIokFi6Gn8udM6\nN/Zi5M5OGpVwLVALQU7Yctsn3c95el6MdVx6mJiIPVu7tCVZn88Z2koBQ2gq9P4O\nSb249SHFqOb03lYDsaqy1NDsznEOhaRBw7DPJFpvmw1lA3/Y6qrExRI06H2VYR2i\n7qxwDV50N58fs10n7Ye1IOxTVJsgEA7X6EkRRXqYaM39Z76R894548WHfwXWjUsi\nMEX0RS0/t1GmnUQjvevDAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQBxmcuRSxERYCtNnSr5xNfySokHjAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOCAQEA\nUyCUQjsF3nUAABjfEZmpksTuUo07aT3KGYt+EMMFdejnBQ0+2lJJFGtT+CDAk1SD\nRSgfEBon5vvKEtlnTf9a3pv8WXOAkhfxnryr9FH6NiB8obISHNQNPHn0ljT2/T+I\nY6ytfRvKHa0cu3V0NXbJm2B4KEOt4QCDiFxUIX9z6eB4Kditwu05OgQh6KcogOiP\nJesWxBMXXGoDC1rIYTFO7szwDyOHlCcVXJDNsTJhc32oDWYdeIbW7o/5I+aQsrXZ\nC96HykZcgWzz6sElrQxUaT3IoMw/5nmw4uWKKnZnxgI9bY4fpQwMeBZ96iHfFxvH\nmqfEEuC7uUoPofXdBp2ObQ==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZMxCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSQwIgYDVQQDDBtBbWF6b24gUkRTIEdvdkNsb3VkIFJvb3QgQ0EwHhcNMTcwNTE5\nMjIzMTE5WhcNMjIwNTE4MTIwMDAwWjCBkzELMAkGA1UEBhMCVVMxEzARBgNVBAgM\nCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBX\nZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJDAiBgNVBAMM\nG0FtYXpvbiBSRFMgdXMtZ292LXdlc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAM8YZLKAzzOdNnoi7Klih26Zkj+OCpDfwx4ZYB6f8L8UoQi5\n8z9ZtIwMjiJ/kO08P1yl4gfc7YZcNFvhGruQZNat3YNpxwUpQcr4mszjuffbL4uz\n+/8FBxALdqCVOJ5Q0EVSfz3d9Bd1pUPL7ARtSpy7bn/tUPyQeI+lODYO906C0TQ3\nb9bjOsgAdBKkHfjLdsknsOZYYIzYWOJyFJJa0B11XjDUNBy/3IuC0KvDl6At0V5b\n8M6cWcKhte2hgjwTYepV+/GTadeube1z5z6mWsN5arOAQUtYDLH6Aztq9mCJzLHm\nRccBugnGl3fRLJ2VjioN8PoGoN9l9hFBy5fnFgsCAwEAAaNmMGQwDgYDVR0PAQH/\nBAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFEG7+br8KkvwPd5g\n71Rvh2stclJbMB8GA1UdIwQYMBaAFEkQz6S4NS5lOYKcDjBSuCcVpdzjMA0GCSqG\nSIb3DQEBCwUAA4IBAQBMA327u5ABmhX+aPxljoIbxnydmAFWxW6wNp5+rZrvPig8\nzDRqGQWWr7wWOIjfcWugSElYtf/m9KZHG/Z6+NG7nAoUrdcd1h/IQhb+lFQ2b5g9\nsVzQv/H2JNkfZA8fL/Ko/Tm/f9tcqe0zrGCtT+5u0Nvz35Wl8CEUKLloS5xEb3k5\n7D9IhG3fsE3vHWlWrGCk1cKry3j12wdPG5cUsug0vt34u6rdhP+FsM0tHI15Kjch\nRuUCvyQecy2ZFNAa3jmd5ycNdL63RWe8oayRBpQBxPPCbHfILxGZEdJbCH9aJ2D/\nl8oHIDnvOLdv7/cBjyYuvmprgPtu3QEkbre5Hln/\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBUTANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNzA4MjUyMTM5MjZaFw0y\nMDAzMDUyMTM5MjZaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBldS13ZXN0LTMgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC+\nxmlEC/3a4cJH+UPwXCE02lC7Zq5NHd0dn6peMeLN8agb6jW4VfSY0NydjRj2DJZ8\nK7wV6sub5NUGT1NuFmvSmdbNR2T59KX0p2dVvxmXHHtIpQ9Y8Aq3ZfhmC5q5Bqgw\ntMA1xayDi7HmoPX3R8kk9ktAZQf6lDeksCvok8idjTu9tiSpDiMwds5BjMsWfyjZ\nd13PTGGNHYVdP692BSyXzSP1Vj84nJKnciW8tAqwIiadreJt5oXyrCXi8ekUMs80\ncUTuGm3aA3Q7PB5ljJMPqz0eVddaiIvmTJ9O3Ez3Du/HpImyMzXjkFaf+oNXf/Hx\n/EW5jCRR6vEiXJcDRDS7AgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRZ9mRtS5fHk3ZKhG20Oack4cAqMTAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOCAQEA\nF/u/9L6ExQwD73F/bhCw7PWcwwqsK1mypIdrjdIsu0JSgwWwGCXmrIspA3n3Dqxq\nsMhAJD88s9Em7337t+naar2VyLO63MGwjj+vA4mtvQRKq8ScIpiEc7xN6g8HUMsd\ngPG9lBGfNjuAZsrGJflrko4HyuSM7zHExMjXLH+CXcv/m3lWOZwnIvlVMa4x0Tz0\nA4fklaawryngzeEjuW6zOiYCzjZtPlP8Fw0SpzppJ8VpQfrZ751RDo4yudmPqoPK\n5EUe36L8U+oYBXnC5TlYs9bpVv9o5wJQI5qA9oQE2eFWxF1E0AyZ4V5sgGUBStaX\nBjDDWul0wSo7rt1Tq7XpnA==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBTjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNzEyMDEwMDU1NDJaFw0y\nMDAzMDUwMDU1NDJaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1ub3J0aGVhc3QtMyBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAMZtQNnm/XT19mTa10ftHLzg5UhajoI65JHv4TQNdGXdsv+CQdGYU49BJ9Eu\n3bYgiEtTzR2lQe9zGMvtuJobLhOWuavzp7IixoIQcHkFHN6wJ1CvqrxgvJfBq6Hy\nEuCDCiU+PPDLUNA6XM6Qx3IpHd1wrJkjRB80dhmMSpxmRmx849uFafhN+P1QybsM\nTI0o48VON2+vj+mNuQTyLMMP8D4odSQHjaoG+zyJfJGZeAyqQyoOUOFEyQaHC3TT\n3IDSNCQlpxb9LerbCoKu79WFBBq3CS5cYpg8/fsnV2CniRBFFUumBt5z4dhw9RJU\nqlUXXO1ZyzpGd+c5v6FtrfXtnIUCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFETv7ELNplYy/xTeIOInl6nzeiHg\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQCpKxOQcd0tEKb3OtsOY8q/MPwTyustGk2Rt7t9G68idADp8IytB7M0SDRo\nwWZqynEq7orQVKdVOanhEWksNDzGp0+FPAf/KpVvdYCd7ru3+iI+V4ZEp2JFdjuZ\nZz0PIjS6AgsZqE5Ri1J+NmfmjGZCPhsHnGZiBaenX6K5VRwwwmLN6xtoqrrfR5zL\nQfBeeZNJG6KiM3R/DxJ5rAa6Fz+acrhJ60L7HprhB7SFtj1RCijau3+ZwiGmUOMr\nyKlMv+VgmzSw7o4Hbxy1WVrA6zQsTHHSGf+vkQn2PHvnFMUEu/ZLbTDYFNmTLK91\nK6o4nMsEvhBKgo4z7H1EqqxXhvN2\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEDjCCAvagAwIBAgIJAMM61RQn3/kdMA0GCSqGSIb3DQEBCwUAMIGTMQswCQYD\nVQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\nMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\nem9uIFJEUzEkMCIGA1UEAwwbQW1hem9uIFJEUyBHb3ZDbG91ZCBSb290IENBMB4X\nDTE3MDUxOTIyMjkxMVoXDTIyMDUxODIyMjkxMVowgZMxCzAJBgNVBAYTAlVTMRAw\nDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQKDBlB\nbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMSQw\nIgYDVQQDDBtBbWF6b24gUkRTIEdvdkNsb3VkIFJvb3QgQ0EwggEiMA0GCSqGSIb3\nDQEBAQUAA4IBDwAwggEKAoIBAQDGS9bh1FGiJPT+GRb3C5aKypJVDC1H2gbh6n3u\nj8cUiyMXfmm+ak402zdLpSYMaxiQ7oL/B3wEmumIpRDAsQrSp3B/qEeY7ipQGOfh\nq2TXjXGIUjiJ/FaoGqkymHRLG+XkNNBtb7MRItsjlMVNELXECwSiMa3nJL2/YyHW\nnTr1+11/weeZEKgVbCUrOugFkMXnfZIBSn40j6EnRlO2u/NFU5ksK5ak2+j8raZ7\nxW7VXp9S1Tgf1IsWHjGZZZguwCkkh1tHOlHC9gVA3p63WecjrIzcrR/V27atul4m\ntn56s5NwFvYPUIx1dbC8IajLUrepVm6XOwdQCfd02DmOyjWJAgMBAAGjYzBhMA4G\nA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRJEM+kuDUu\nZTmCnA4wUrgnFaXc4zAfBgNVHSMEGDAWgBRJEM+kuDUuZTmCnA4wUrgnFaXc4zAN\nBgkqhkiG9w0BAQsFAAOCAQEAcfA7uirXsNZyI2j4AJFVtOTKOZlQwqbyNducnmlg\n/5nug9fAkwM4AgvF5bBOD1Hw6khdsccMwIj+1S7wpL+EYb/nSc8G0qe1p/9lZ/mZ\nff5g4JOa26lLuCrZDqAk4TzYnt6sQKfa5ZXVUUn0BK3okhiXS0i+NloMyaBCL7vk\nkDwkHwEqflRKfZ9/oFTcCfoiHPA7AdBtaPVr0/Kj9L7k+ouz122huqG5KqX0Zpo8\nS0IGvcd2FZjNSNPttNAK7YuBVsZ0m2nIH1SLp//00v7yAHIgytQwwB17PBcp4NXD\npCfTa27ng9mMMC2YLqWQpW4TkqjDin2ZC+5X/mbrjzTvVg==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZQxCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSUwIwYDVQQDDBxBbWF6b24gUkRTIGFwLWVhc3QtMSBSb290IENBMB4XDTE5MDIx\nNzAyNDcwMFoXDTIyMDYwMTEyMDAwMFowgY8xCzAJBgNVBAYTAlVTMRMwEQYDVQQI\nDApXYXNoaW5ndG9uMRAwDgYDVQQHDAdTZWF0dGxlMSIwIAYDVQQKDBlBbWF6b24g\nV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMSAwHgYDVQQD\nDBdBbWF6b24gUkRTIGFwLWVhc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAOcJAUofyJuBuPr5ISHi/Ha5ed8h3eGdzn4MBp6rytPOg9NVGRQs\nO93fNGCIKsUT6gPuk+1f1ncMTV8Y0Fdf4aqGWme+Khm3ZOP3V1IiGnVq0U2xiOmn\nSQ4Q7LoeQC4lC6zpoCHVJyDjZ4pAknQQfsXb77Togdt/tK5ahev0D+Q3gCwAoBoO\nDHKJ6t820qPi63AeGbJrsfNjLKiXlFPDUj4BGir4dUzjEeH7/hx37na1XG/3EcxP\n399cT5k7sY/CR9kctMlUyEEUNQOmhi/ly1Lgtihm3QfjL6K9aGLFNwX35Bkh9aL2\nF058u+n8DP/dPeKUAcJKiQZUmzuen5n57x8CAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFFlqgF4FQlb9yP6c+Q3E\nO3tXv+zOMB8GA1UdIwQYMBaAFK9T6sY/PBZVbnHcNcQXf58P4OuPMA0GCSqGSIb3\nDQEBCwUAA4IBAQDeXiS3v1z4jWAo1UvVyKDeHjtrtEH1Rida1eOXauFuEQa5tuOk\nE53Os4haZCW4mOlKjigWs4LN+uLIAe1aFXGo92nGIqyJISHJ1L+bopx/JmIbHMCZ\n0lTNJfR12yBma5VQy7vzeFku/SisKwX0Lov1oHD4MVhJoHbUJYkmAjxorcIHORvh\nI3Vj5XrgDWtLDPL8/Id/roul/L+WX5ir+PGScKBfQIIN2lWdZoqdsx8YWqhm/ikL\nC6qNieSwcvWL7C03ri0DefTQMY54r5wP33QU5hJ71JoaZI3YTeT0Nf+NRL4hM++w\nQ0veeNzBQXg1f/JxfeA39IDIX1kiCf71tGlT\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICcEUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTgxNjU2\nMjBaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1ub3J0aGVhc3QtMSAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAndtkldmHtk4TVQAyqhAvtEHSMb6pLhyKrIFved1WO3S7\n+I+bWwv9b2W/ljJxLq9kdT43bhvzonNtI4a1LAohS6bqyirmk8sFfsWT3akb+4Sx\n1sjc8Ovc9eqIWJCrUiSvv7+cS7ZTA9AgM1PxvHcsqrcUXiK3Jd/Dax9jdZE1e15s\nBEhb2OEPE+tClFZ+soj8h8Pl2Clo5OAppEzYI4LmFKtp1X/BOf62k4jviXuCSst3\nUnRJzE/CXtjmN6oZySVWSe0rQYuyqRl6//9nK40cfGKyxVnimB8XrrcxUN743Vud\nQQVU0Esm8OVTX013mXWQXJHP2c0aKkog8LOga0vobQIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQULmoOS1mFSjj+\nsnUPx4DgS3SkLFYwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAAkVL2P1M2/G9GM3DANVAqYOwmX0Xk58YBHQu6iiQg4j\nb4Ky/qsZIsgT7YBsZA4AOcPKQFgGTWhe9pvhmXqoN3RYltN8Vn7TbUm/ZVDoMsrM\ngwv0+TKxW1/u7s8cXYfHPiTzVSJuOogHx99kBW6b2f99GbP7O1Sv3sLq4j6lVvBX\nFiacf5LAWC925nvlTzLlBgIc3O9xDtFeAGtZcEtxZJ4fnGXiqEnN4539+nqzIyYq\nnvlgCzyvcfRAxwltrJHuuRu6Maw5AGcd2Y0saMhqOVq9KYKFKuD/927BTrbd2JVf\n2sGWyuPZPCk3gq+5pCjbD0c6DkhcMGI6WwxvM5V/zSM=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICOFAwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTAxNzQ2\nMjFaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1ub3J0aGVhc3QtMiAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAzU72e6XbaJbi4HjJoRNjKxzUEuChKQIt7k3CWzNnmjc5\n8I1MjCpa2W1iw1BYVysXSNSsLOtUsfvBZxi/1uyMn5ZCaf9aeoA9UsSkFSZBjOCN\nDpKPCmfV1zcEOvJz26+1m8WDg+8Oa60QV0ou2AU1tYcw98fOQjcAES0JXXB80P2s\n3UfkNcnDz+l4k7j4SllhFPhH6BQ4lD2NiFAP4HwoG6FeJUn45EPjzrydxjq6v5Fc\ncQ8rGuHADVXotDbEhaYhNjIrsPL+puhjWfhJjheEw8c4whRZNp6gJ/b6WEes/ZhZ\nh32DwsDsZw0BfRDUMgUn8TdecNexHUw8vQWeC181hwIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUwW9bWgkWkr0U\nlrOsq2kvIdrECDgwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAEugF0Gj7HVhX0ehPZoGRYRt3PBuI2YjfrrJRTZ9X5wc\n9T8oHmw07mHmNy1qqWvooNJg09bDGfB0k5goC2emDiIiGfc/kvMLI7u+eQOoMKj6\nmkfCncyRN3ty08Po45vTLBFZGUvtQmjM6yKewc4sXiASSBmQUpsMbiHRCL72M5qV\nobcJOjGcIdDTmV1BHdWT+XcjynsGjUqOvQWWhhLPrn4jWe6Xuxll75qlrpn3IrIx\nCRBv/5r7qbcQJPOgwQsyK4kv9Ly8g7YT1/vYBlR3cRsYQjccw5ceWUj2DrMVWhJ4\nprf+E3Aa4vYmLLOUUvKnDQ1k3RGNu56V0tonsQbfsaM=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICOYIwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTcyMDA1\nMjlaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1ub3J0aGVhc3QtMyAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEA4dMak8W+XW8y/2F6nRiytFiA4XLwePadqWebGtlIgyCS\nkbug8Jv5w7nlMkuxOxoUeD4WhI6A9EkAn3r0REM/2f0aYnd2KPxeqS2MrtdxxHw1\nxoOxk2x0piNSlOz6yog1idsKR5Wurf94fvM9FdTrMYPPrDabbGqiBMsZZmoHLvA3\nZ+57HEV2tU0Ei3vWeGIqnNjIekS+E06KhASxrkNU5vi611UsnYZlSi0VtJsH4UGV\nLhnHl53aZL0YFO5mn/fzuNG/51qgk/6EFMMhaWInXX49Dia9FnnuWXwVwi6uX1Wn\n7kjoHi5VtmC8ZlGEHroxX2DxEr6bhJTEpcLMnoQMqwIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUsUI5Cb3SWB8+\ngv1YLN/ABPMdxSAwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAJAF3E9PM1uzVL8YNdzb6fwJrxxqI2shvaMVmC1mXS+w\nG0zh4v2hBZOf91l1EO0rwFD7+fxoI6hzQfMxIczh875T6vUXePKVOCOKI5wCrDad\nzQbVqbFbdhsBjF4aUilOdtw2qjjs9JwPuB0VXN4/jY7m21oKEOcnpe36+7OiSPjN\nxngYewCXKrSRqoj3mw+0w/+exYj3Wsush7uFssX18av78G+ehKPIVDXptOCP/N7W\n8iKVNeQ2QGTnu2fzWsGUSvMGyM7yqT+h1ILaT//yQS8er511aHMLc142bD4D9VSy\nDgactwPDTShK/PXqhvNey9v/sKXm4XatZvwcc8KYlW4=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgICVIYwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MDQxNzEz\nMDRaFw0yNDA4MjIxNzA4NTBaMIGVMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEmMCQGA1UEAwwdQW1h\nem9uIFJEUyBhcC1zb3V0aC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQDUYOz1hGL42yUCrcsMSOoU8AeD/3KgZ4q7gP+vAz1WnY9K/kim\neWN/2Qqzlo3+mxSFQFyD4MyV3+CnCPnBl9Sh1G/F6kThNiJ7dEWSWBQGAB6HMDbC\nBaAsmUc1UIz8sLTL3fO+S9wYhA63Wun0Fbm/Rn2yk/4WnJAaMZcEtYf6e0KNa0LM\np/kN/70/8cD3iz3dDR8zOZFpHoCtf0ek80QqTich0A9n3JLxR6g6tpwoYviVg89e\nqCjQ4axxOkWWeusLeTJCcY6CkVyFvDAKvcUl1ytM5AiaUkXblE7zDFXRM4qMMRdt\nlPm8d3pFxh0fRYk8bIKnpmtOpz3RIctDrZZxAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT99wKJftD3jb4sHoHG\ni3uGlH6W6TAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAZ17hhr3dII3hUfuHQ1hPWGrpJOX/G9dLzkprEIcCidkmRYl+\nhu1Pe3caRMh/17+qsoEErmnVq5jNY9X1GZL04IZH8YbHc7iRHw3HcWAdhN8633+K\njYEB2LbJ3vluCGnCejq9djDb6alOugdLMJzxOkHDhMZ6/gYbECOot+ph1tQuZXzD\ntZ7prRsrcuPBChHlPjmGy8M9z8u+kF196iNSUGC4lM8vLkHM7ycc1/ZOwRq9aaTe\niOghbQQyAEe03MWCyDGtSmDfr0qEk+CHN+6hPiaL8qKt4s+V9P7DeK4iW08ny8Ox\nAVS7u0OK/5+jKMAMrKwpYrBydOjTUTHScocyNw==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICY4kwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTMyMDEx\nNDJaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1zb3V0aGVhc3QtMSAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAr5u9OuLL/OF/fBNUX2kINJLzFl4DnmrhnLuSeSnBPgbb\nqddjf5EFFJBfv7IYiIWEFPDbDG5hoBwgMup5bZDbas+ZTJTotnnxVJTQ6wlhTmns\neHECcg2pqGIKGrxZfbQhlj08/4nNAPvyYCTS0bEcmQ1emuDPyvJBYDDLDU6AbCB5\n6Z7YKFQPTiCBblvvNzchjLWF9IpkqiTsPHiEt21sAdABxj9ityStV3ja/W9BfgxH\nwzABSTAQT6FbDwmQMo7dcFOPRX+hewQSic2Rn1XYjmNYzgEHisdUsH7eeXREAcTw\n61TRvaLH8AiOWBnTEJXPAe6wYfrcSd1pD0MXpoB62wIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUytwMiomQOgX5\nIchd+2lDWRUhkikwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBACf6lRDpfCD7BFRqiWM45hqIzffIaysmVfr+Jr+fBTjP\nuYe/ba1omSrNGG23bOcT9LJ8hkQJ9d+FxUwYyICQNWOy6ejicm4z0C3VhphbTPqj\nyjpt9nG56IAcV8BcRJh4o/2IfLNzC/dVuYJV8wj7XzwlvjysenwdrJCoLadkTr1h\neIdG6Le07sB9IxrGJL9e04afk37h7c8ESGSE4E+oS4JQEi3ATq8ne1B9DQ9SasXi\nIRmhNAaISDzOPdyLXi9N9V9Lwe/DHcja7hgLGYx3UqfjhLhOKwp8HtoZORixAmOI\nHfILgNmwyugAbuZoCazSKKBhQ0wgO0WZ66ZKTMG8Oho=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICEkYwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTYxOTUz\nNDdaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1zb3V0aGVhc3QtMiAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAufodI2Flker8q7PXZG0P0vmFSlhQDw907A6eJuF/WeMo\nGHnll3b4S6nC3oRS3nGeRMHbyU2KKXDwXNb3Mheu+ox+n5eb/BJ17eoj9HbQR1cd\ngEkIciiAltf8gpMMQH4anP7TD+HNFlZnP7ii3geEJB2GGXSxgSWvUzH4etL67Zmn\nTpGDWQMB0T8lK2ziLCMF4XAC/8xDELN/buHCNuhDpxpPebhct0T+f6Arzsiswt2j\n7OeNeLLZwIZvVwAKF7zUFjC6m7/VmTQC8nidVY559D6l0UhhU0Co/txgq3HVsMOH\nPbxmQUwJEKAzQXoIi+4uZzHFZrvov/nDTNJUhC6DqwIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUwaZpaCme+EiV\nM5gcjeHZSTgOn4owHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAAR6a2meCZuXO2TF9bGqKGtZmaah4pH2ETcEVUjkvXVz\nsl+ZKbYjrun+VkcMGGKLUjS812e7eDF726ptoku9/PZZIxlJB0isC/0OyixI8N4M\nNsEyvp52XN9QundTjkl362bomPnHAApeU0mRbMDRR2JdT70u6yAzGLGsUwMkoNnw\n1VR4XKhXHYGWo7KMvFrZ1KcjWhubxLHxZWXRulPVtGmyWg/MvE6KF+2XMLhojhUL\n+9jB3Fpn53s6KMx5tVq1x8PukHmowcZuAF8k+W4gk8Y68wIwynrdZrKRyRv6CVtR\nFZ8DeJgoNZT3y/GT254VqMxxfuy2Ccb/RInd16tEvVk=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgICEzUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTAyMDUy\nMjVaFw0yNDA4MjIxNzA4NTBaMIGXMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEoMCYGA1UEAwwfQW1h\nem9uIFJEUyBjYS1jZW50cmFsLTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAOxHqdcPSA2uBjsCP4DLSlqSoPuQ/X1kkJLusVRKiQE2zayB\nviuCBt4VB9Qsh2rW3iYGM+usDjltGnI1iUWA5KHcvHszSMkWAOYWLiMNKTlg6LCp\nXnE89tvj5dIH6U8WlDvXLdjB/h30gW9JEX7S8supsBSci2GxEzb5mRdKaDuuF/0O\nqvz4YE04pua3iZ9QwmMFuTAOYzD1M72aOpj+7Ac+YLMM61qOtU+AU6MndnQkKoQi\nqmUN2A9IFaqHFzRlSdXwKCKUA4otzmz+/N3vFwjb5F4DSsbsrMfjeHMo6o/nb6Nh\nYDb0VJxxPee6TxSuN7CQJ2FxMlFUezcoXqwqXD0CAwEAAaNmMGQwDgYDVR0PAQH/\nBAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFDGGpon9WfIpsggE\nCxHq8hZ7E2ESMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqG\nSIb3DQEBCwUAA4IBAQAvpeQYEGZvoTVLgV9rd2+StPYykMsmFjWQcyn3dBTZRXC2\nlKq7QhQczMAOhEaaN29ZprjQzsA2X/UauKzLR2Uyqc2qOeO9/YOl0H3qauo8C/W9\nr8xqPbOCDLEXlOQ19fidXyyEPHEq5WFp8j+fTh+s8WOx2M7IuC0ANEetIZURYhSp\nxl9XOPRCJxOhj7JdelhpweX0BJDNHeUFi0ClnFOws8oKQ7sQEv66d5ddxqqZ3NVv\nRbCvCtEutQMOUMIuaygDlMn1anSM8N7Wndx8G6+Uy67AnhjGx7jw/0YPPxopEj6x\nJXP8j0sJbcT9K/9/fPVLNT25RvQ/93T2+IQL4Ca2\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgICV2YwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTExOTM2\nMjBaFw0yNDA4MjIxNzA4NTBaMIGXMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEoMCYGA1UEAwwfQW1h\nem9uIFJEUyBldS1jZW50cmFsLTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAMEx54X2pHVv86APA0RWqxxRNmdkhAyp2R1cFWumKQRofoFv\nn+SPXdkpIINpMuEIGJANozdiEz7SPsrAf8WHyD93j/ZxrdQftRcIGH41xasetKGl\nI67uans8d+pgJgBKGb/Z+B5m+UsIuEVekpvgpwKtmmaLFC/NCGuSsJoFsRqoa6Gh\nm34W6yJoY87UatddCqLY4IIXaBFsgK9Q/wYzYLbnWM6ZZvhJ52VMtdhcdzeTHNW0\n5LGuXJOF7Ahb4JkEhoo6TS2c0NxB4l4MBfBPgti+O7WjR3FfZHpt18A6Zkq6A2u6\nD/oTSL6c9/3sAaFTFgMyL3wHb2YlW0BPiljZIqECAwEAAaNmMGQwDgYDVR0PAQH/\nBAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFOcAToAc6skWffJa\nTnreaswAfrbcMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqG\nSIb3DQEBCwUAA4IBAQA1d0Whc1QtspK496mFWfFEQNegLh0a9GWYlJm+Htcj5Nxt\nDAIGXb+8xrtOZFHmYP7VLCT5Zd2C+XytqseK/+s07iAr0/EPF+O2qcyQWMN5KhgE\ncXw2SwuP9FPV3i+YAm11PBVeenrmzuk9NrdHQ7TxU4v7VGhcsd2C++0EisrmquWH\nmgIfmVDGxphwoES52cY6t3fbnXmTkvENvR+h3rj+fUiSz0aSo+XZUGHPgvuEKM/W\nCBD9Smc9CBoBgvy7BgHRgRUmwtABZHFUIEjHI5rIr7ZvYn+6A0O6sogRfvVYtWFc\nqpyrW1YX8mD0VlJ8fGKM3G+aCOsiiPKDV/Uafrm+\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgICGAcwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTIxODE5\nNDRaFw0yNDA4MjIxNzA4NTBaMIGVMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEmMCQGA1UEAwwdQW1h\nem9uIFJEUyBldS1ub3J0aC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQCiIYnhe4UNBbdBb/nQxl5giM0XoVHWNrYV5nB0YukA98+TPn9v\nAoj1RGYmtryjhrf01Kuv8SWO+Eom95L3zquoTFcE2gmxCfk7bp6qJJ3eHOJB+QUO\nXsNRh76fwDzEF1yTeZWH49oeL2xO13EAx4PbZuZpZBttBM5zAxgZkqu4uWQczFEs\nJXfla7z2fvWmGcTagX10O5C18XaFroV0ubvSyIi75ue9ykg/nlFAeB7O0Wxae88e\nuhiBEFAuLYdqWnsg3459NfV8Yi1GnaitTym6VI3tHKIFiUvkSiy0DAlAGV2iiyJE\nq+DsVEO4/hSINJEtII4TMtysOsYPpINqeEzRAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRR0UpnbQyjnHChgmOc\nhnlc0PogzTAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAKJD4xVzSf4zSGTBJrmamo86jl1NHQxXUApAZuBZEc8tqC6TI\nT5CeoSr9CMuVC8grYyBjXblC4OsM5NMvmsrXl/u5C9dEwtBFjo8mm53rOOIm1fxl\nI1oYB/9mtO9ANWjkykuLzWeBlqDT/i7ckaKwalhLODsRDO73vRhYNjsIUGloNsKe\npxw3dzHwAZx4upSdEVG4RGCZ1D0LJ4Gw40OfD69hfkDfRVVxKGrbEzqxXRvovmDc\ntKLdYZO/6REoca36v4BlgIs1CbUXJGLSXUwtg7YXGLSVBJ/U0+22iGJmBSNcoyUN\ncjPFD9JQEhDDIYYKSGzIYpvslvGc4T5ISXFiuQ==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICYpgwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTExNzMx\nNDhaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBldS13ZXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAMk3YdSZ64iAYp6MyyKtYJtNzv7zFSnnNf6vv0FB4VnfITTMmOyZ\nLXqKAT2ahZ00hXi34ewqJElgU6eUZT/QlzdIu359TEZyLVPwURflL6SWgdG01Q5X\nO++7fSGcBRyIeuQWs9FJNIIqK8daF6qw0Rl5TXfu7P9dBc3zkgDXZm2DHmxGDD69\n7liQUiXzoE1q2Z9cA8+jirDioJxN9av8hQt12pskLQumhlArsMIhjhHRgF03HOh5\ntvi+RCfihVOxELyIRTRpTNiIwAqfZxxTWFTgfn+gijTmd0/1DseAe82aYic8JbuS\nEMbrDduAWsqrnJ4GPzxHKLXX0JasCUcWyMECAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFPLtsq1NrwJXO13C9eHt\nsLY11AGwMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQAnWBKj5xV1A1mYd0kIgDdkjCwQkiKF5bjIbGkT3YEFFbXoJlSP\n0lZZ/hDaOHI8wbLT44SzOvPEEmWF9EE7SJzkvSdQrUAWR9FwDLaU427ALI3ngNHy\nlGJ2hse1fvSRNbmg8Sc9GBv8oqNIBPVuw+AJzHTacZ1OkyLZrz1c1QvwvwN2a+Jd\nvH0V0YIhv66llKcYDMUQJAQi4+8nbRxXWv6Gq3pvrFoorzsnkr42V3JpbhnYiK+9\nnRKd4uWl62KRZjGkfMbmsqZpj2fdSWMY1UGyN1k+kDmCSWYdrTRDP0xjtIocwg+A\nJ116n4hV/5mbA0BaPiS2krtv17YAeHABZcvz\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICZIEwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTIyMTMy\nMzJaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBldS13ZXN0LTIgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBALGiwqjiF7xIjT0Sx7zB3764K2T2a1DHnAxEOr+/EIftWKxWzT3u\nPFwS2eEZcnKqSdRQ+vRzonLBeNLO4z8aLjQnNbkizZMBuXGm4BqRm1Kgq3nlLDQn\n7YqdijOq54SpShvR/8zsO4sgMDMmHIYAJJOJqBdaus2smRt0NobIKc0liy7759KB\n6kmQ47Gg+kfIwxrQA5zlvPLeQImxSoPi9LdbRoKvu7Iot7SOa+jGhVBh3VdqndJX\n7tm/saj4NE375csmMETFLAOXjat7zViMRwVorX4V6AzEg1vkzxXpA9N7qywWIT5Y\nfYaq5M8i6vvLg0CzrH9fHORtnkdjdu1y+0MCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFFOhOx1yt3Z7mvGB9jBv\n2ymdZwiOMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQBehqY36UGDvPVU9+vtaYGr38dBbp+LzkjZzHwKT1XJSSUc2wqM\nhnCIQKilonrTIvP1vmkQi8qHPvDRtBZKqvz/AErW/ZwQdZzqYNFd+BmOXaeZWV0Q\noHtDzXmcwtP8aUQpxN0e1xkWb1E80qoy+0uuRqb/50b/R4Q5qqSfJhkn6z8nwB10\n7RjLtJPrK8igxdpr3tGUzfAOyiPrIDncY7UJaL84GFp7WWAkH0WG3H8Y8DRcRXOU\nmqDxDLUP3rNuow3jnGxiUY+gGX5OqaZg4f4P6QzOSmeQYs6nLpH0PiN00+oS1BbD\nbpWdZEttILPI+vAYkU4QuBKKDjJL6HbSd+cn\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICJDQwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTgxNzAz\nMTVaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBldS13ZXN0LTMgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAL9bL7KE0n02DLVtlZ2PL+g/BuHpMYFq2JnE2RgompGurDIZdjmh\n1pxfL3nT+QIVMubuAOy8InRfkRxfpxyjKYdfLJTPJG+jDVL+wDcPpACFVqoV7Prg\npVYEV0lc5aoYw4bSeYFhdzgim6F8iyjoPnObjll9mo4XsHzSoqJLCd0QC+VG9Fw2\nq+GDRZrLRmVM2oNGDRbGpGIFg77aRxRapFZa8SnUgs2AqzuzKiprVH5i0S0M6dWr\ni+kk5epmTtkiDHceX+dP/0R1NcnkCPoQ9TglyXyPdUdTPPRfKCq12dftqll+u4mV\nARdN6WFjovxax8EAP2OAUTi1afY+1JFMj+sCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFLfhrbrO5exkCVgxW0x3\nY2mAi8lNMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQAigQ5VBNGyw+OZFXwxeJEAUYaXVoP/qrhTOJ6mCE2DXUVEoJeV\nSxScy/TlFA9tJXqmit8JH8VQ/xDL4ubBfeMFAIAo4WzNWDVoeVMqphVEcDWBHsI1\nAETWzfsapRS9yQekOMmxg63d/nV8xewIl8aNVTHdHYXMqhhik47VrmaVEok1UQb3\nO971RadLXIEbVd9tjY5bMEHm89JsZDnDEw1hQXBb67Elu64OOxoKaHBgUH8AZn/2\nzFsL1ynNUjOhCSAA15pgd1vjwc0YsBbAEBPcHBWYBEyME6NLNarjOzBl4FMtATSF\nwWCKRGkvqN8oxYhwR2jf2rR5Mu4DWkK5Q8Ep\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEEjCCAvqgAwIBAgIJANew34ehz5l8MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD\nVQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\nMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\nem9uIFJEUzEmMCQGA1UEAwwdQW1hem9uIFJEUyBtZS1zb3V0aC0xIFJvb3QgQ0Ew\nHhcNMTkwNTEwMjE0ODI3WhcNMjQwNTA4MjE0ODI3WjCBlTELMAkGA1UEBhMCVVMx\nEDAOBgNVBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nJjAkBgNVBAMMHUFtYXpvbiBSRFMgbWUtc291dGgtMSBSb290IENBMIIBIjANBgkq\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp7BYV88MukcY+rq0r79+C8UzkT30fEfT\naPXbx1d6M7uheGN4FMaoYmL+JE1NZPaMRIPTHhFtLSdPccInvenRDIatcXX+jgOk\nUA6lnHQ98pwN0pfDUyz/Vph4jBR9LcVkBbe0zdoKKp+HGbMPRU0N2yNrog9gM5O8\ngkU/3O2csJ/OFQNnj4c2NQloGMUpEmedwJMOyQQfcUyt9CvZDfIPNnheUS29jGSw\nERpJe/AENu8Pxyc72jaXQuD+FEi2Ck6lBkSlWYQFhTottAeGvVFNCzKszCntrtqd\nrdYUwurYsLTXDHv9nW2hfDUQa0mhXf9gNDOBIVAZugR9NqNRNyYLHQIDAQABo2Mw\nYTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU54cf\nDjgwBx4ycBH8+/r8WXdaiqYwHwYDVR0jBBgwFoAU54cfDjgwBx4ycBH8+/r8WXda\niqYwDQYJKoZIhvcNAQELBQADggEBAIIMTSPx/dR7jlcxggr+O6OyY49Rlap2laKA\neC/XI4ySP3vQkIFlP822U9Kh8a9s46eR0uiwV4AGLabcu0iKYfXjPkIprVCqeXV7\nny9oDtrbflyj7NcGdZLvuzSwgl9SYTJp7PVCZtZutsPYlbJrBPHwFABvAkMvRtDB\nhitIg4AESDGPoCl94sYHpfDfjpUDMSrAMDUyO6DyBdZH5ryRMAs3lGtsmkkNUrso\naTW6R05681Z0mvkRdb+cdXtKOSuDZPoe2wJJIaz3IlNQNSrB5TImMYgmt6iAsFhv\n3vfTSTKrZDNTJn4ybG6pq1zWExoXsktZPylJly6R3RBwV6nwqBM=\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICQ2QwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MDUxODQ2\nMjlaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBzYS1lYXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAMMvR+ReRnOzqJzoaPipNTt1Z2VA968jlN1+SYKUrYM3No+Vpz0H\nM6Tn0oYB66ByVsXiGc28ulsqX1HbHsxqDPwvQTKvO7SrmDokoAkjJgLocOLUAeld\n5AwvUjxGRP6yY90NV7X786MpnYb2Il9DIIaV9HjCmPt+rjy2CZjS0UjPjCKNfB8J\nbFjgW6GGscjeyGb/zFwcom5p4j0rLydbNaOr9wOyQrtt3ZQWLYGY9Zees/b8pmcc\nJt+7jstZ2UMV32OO/kIsJ4rMUn2r/uxccPwAc1IDeRSSxOrnFKhW3Cu69iB3bHp7\nJbawY12g7zshE4I14sHjv3QoXASoXjx4xgMCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFI1Fc/Ql2jx+oJPgBVYq\nccgP0pQ8MB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQB4VVVabVp70myuYuZ3vltQIWqSUMhkaTzehMgGcHjMf9iLoZ/I\n93KiFUSGnek5cRePyS9wcpp0fcBT3FvkjpUdCjVtdttJgZFhBxgTd8y26ImdDDMR\n4+BUuhI5msvjL08f+Vkkpu1GQcGmyFVPFOy/UY8iefu+QyUuiBUnUuEDd49Hw0Fn\n/kIPII6Vj82a2mWV/Q8e+rgN8dIRksRjKI03DEoP8lhPlsOkhdwU6Uz9Vu6NOB2Q\nLs1kbcxAc7cFSyRVJEhh12Sz9d0q/CQSTFsVJKOjSNQBQfVnLz1GwO/IieUEAr4C\njkTntH0r1LX5b/GwN4R887LvjAEdTbg1his7\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICJVUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTkxODE2\nNTNaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyB1cy1lYXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAM3i/k2u6cqbMdcISGRvh+m+L0yaSIoOXjtpNEoIftAipTUYoMhL\nInXGlQBVA4shkekxp1N7HXe1Y/iMaPEyb3n+16pf3vdjKl7kaSkIhjdUz3oVUEYt\ni8Z/XeJJ9H2aEGuiZh3kHixQcZczn8cg3dA9aeeyLSEnTkl/npzLf//669Ammyhs\nXcAo58yvT0D4E0D/EEHf2N7HRX7j/TlyWvw/39SW0usiCrHPKDLxByLojxLdHzso\nQIp/S04m+eWn6rmD+uUiRteN1hI5ncQiA3wo4G37mHnUEKo6TtTUh+sd/ku6a8HK\nglMBcgqudDI90s1OpuIAWmuWpY//8xEG2YECAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFPqhoWZcrVY9mU7tuemR\nRBnQIj1jMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQB6zOLZ+YINEs72heHIWlPZ8c6WY8MDU+Be5w1M+BK2kpcVhCUK\nPJO4nMXpgamEX8DIiaO7emsunwJzMSvavSPRnxXXTKIc0i/g1EbiDjnYX9d85DkC\nE1LaAUCmCZBVi9fIe0H2r9whIh4uLWZA41oMnJx/MOmo3XyMfQoWcqaSFlMqfZM4\n0rNoB/tdHLNuV4eIdaw2mlHxdWDtF4oH+HFm+2cVBUVC1jXKrFv/euRVtsTT+A6i\nh2XBHKxQ1Y4HgAn0jACP2QSPEmuoQEIa57bEKEcZsBR8SDY6ZdTd2HLRIApcCOSF\nMRM8CKLeF658I0XgF8D5EsYoKPsA+74Z+jDH\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgIDAIVCMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJV\nUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\nCgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\nUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkwOTEzMTcw\nNjQxWhcNMjQwODIyMTcwODUwWjCBlDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldh\nc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBXZWIg\nU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJTAjBgNVBAMMHEFt\nYXpvbiBSRFMgdXMtZWFzdC0yIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQDE+T2xYjUbxOp+pv+gRA3FO24+1zCWgXTDF1DHrh1lsPg5k7ht\n2KPYzNc+Vg4E+jgPiW0BQnA6jStX5EqVh8BU60zELlxMNvpg4KumniMCZ3krtMUC\nau1NF9rM7HBh+O+DYMBLK5eSIVt6lZosOb7bCi3V6wMLA8YqWSWqabkxwN4w0vXI\n8lu5uXXFRemHnlNf+yA/4YtN4uaAyd0ami9+klwdkZfkrDOaiy59haOeBGL8EB/c\ndbJJlguHH5CpCscs3RKtOOjEonXnKXldxarFdkMzi+aIIjQ8GyUOSAXHtQHb3gZ4\nnS6Ey0CMlwkB8vUObZU9fnjKJcL5QCQqOfwvAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQUPuRHohPxx4VjykmH\n6usGrLL1ETAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAUdR9Vb3y33Yj6X6KGtuthZ08SwjImVQPtknzpajNE5jOJAh8\nquvQnU9nlnMO85fVDU1Dz3lLHGJ/YG1pt1Cqq2QQ200JcWCvBRgdvH6MjHoDQpqZ\nHvQ3vLgOGqCLNQKFuet9BdpsHzsctKvCVaeBqbGpeCtt3Hh/26tgx0rorPLw90A2\nV8QSkZJjlcKkLa58N5CMM8Xz8KLWg3MZeT4DmlUXVCukqK2RGuP2L+aME8dOxqNv\nOnOz1zrL5mR2iJoDpk8+VE/eBDmJX40IJk6jBjWoxAO/RXq+vBozuF5YHN1ujE92\ntO8HItgTp37XT8bJBAiAnt5mxw+NLSqtxk2QdQ==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgIDAIkHMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJV\nUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\nCgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\nUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkwOTA2MTc0\nMDIxWhcNMjQwODIyMTcwODUwWjCBlDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldh\nc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBXZWIg\nU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJTAjBgNVBAMMHEFt\nYXpvbiBSRFMgdXMtd2VzdC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQDD2yzbbAl77OofTghDMEf624OvU0eS9O+lsdO0QlbfUfWa1Kd6\n0WkgjkLZGfSRxEHMCnrv4UPBSK/Qwn6FTjkDLgemhqBtAnplN4VsoDL+BkRX4Wwq\n/dSQJE2b+0hm9w9UMVGFDEq1TMotGGTD2B71eh9HEKzKhGzqiNeGsiX4VV+LJzdH\nuM23eGisNqmd4iJV0zcAZ+Gbh2zK6fqTOCvXtm7Idccv8vZZnyk1FiWl3NR4WAgK\nAkvWTIoFU3Mt7dIXKKClVmvssG8WHCkd3Xcb4FHy/G756UZcq67gMMTX/9fOFM/v\nl5C0+CHl33Yig1vIDZd+fXV1KZD84dEJfEvHAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBR+ap20kO/6A7pPxo3+\nT3CfqZpQWjAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAHCJky2tPjPttlDM/RIqExupBkNrnSYnOK4kr9xJ3sl8UF2DA\nPAnYsjXp3rfcjN/k/FVOhxwzi3cXJF/2Tjj39Bm/OEfYTOJDNYtBwB0VVH4ffa/6\ntZl87jaIkrxJcreeeHqYMnIxeN0b/kliyA+a5L2Yb0VPjt9INq34QDc1v74FNZ17\n4z8nr1nzg4xsOWu0Dbjo966lm4nOYIGBRGOKEkHZRZ4mEiMgr3YLkv8gSmeitx57\nZ6dVemNtUic/LVo5Iqw4n3TBS0iF2C1Q1xT/s3h+0SXZlfOWttzSluDvoMv5PvCd\npFjNn+aXLAALoihL1MJSsxydtsLjOBro5eK0Vw==\n-----END CERTIFICATE-----\n",
        "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICUYkwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTYxODIx\nMTVaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyB1cy13ZXN0LTIgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBANCEZBZyu6yJQFZBJmSUZfSZd3Ui2gitczMKC4FLr0QzkbxY+cLa\nuVONIOrPt4Rwi+3h/UdnUg917xao3S53XDf1TDMFEYp4U8EFPXqCn/GXBIWlU86P\nPvBN+gzw3nS+aco7WXb+woTouvFVkk8FGU7J532llW8o/9ydQyDIMtdIkKTuMfho\nOiNHSaNc+QXQ32TgvM9A/6q7ksUoNXGCP8hDOkSZ/YOLiI5TcdLh/aWj00ziL5bj\npvytiMZkilnc9dLY9QhRNr0vGqL0xjmWdoEXz9/OwjmCihHqJq+20MJPsvFm7D6a\n2NKybR9U+ddrjb8/iyLOjURUZnj5O+2+OPcCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFEBxMBdv81xuzqcK5TVu\npHj+Aor8MB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQBZkfiVqGoJjBI37aTlLOSjLcjI75L5wBrwO39q+B4cwcmpj58P\n3sivv+jhYfAGEbQnGRzjuFoyPzWnZ1DesRExX+wrmHsLLQbF2kVjLZhEJMHF9eB7\nGZlTPdTzHErcnuXkwA/OqyXMpj9aghcQFuhCNguEfnROY9sAoK2PTfnTz9NJHL+Q\nUpDLEJEUfc0GZMVWYhahc0x38ZnSY2SKacIPECQrTI0KpqZv/P+ijCEcMD9xmYEb\njL4en+XKS1uJpw5fIU5Sj0MxhdGstH6S84iAE5J3GM3XHklGSFwwqPYvuTXvANH6\nuboynxRgSae59jIlAK6Jrr6GWMwQRbgcaAlW\n-----END CERTIFICATE-----\n"
      ]
    };
  }
});

// node_modules/mysql/lib/ConnectionConfig.js
var require_ConnectionConfig = __commonJS({
  "node_modules/mysql/lib/ConnectionConfig.js"(exports, module) {
    init_react();
    var urlParse2 = require_url().parse;
    var ClientConstants = require_client();
    var Charsets = require_charsets();
    var SSLProfiles = null;
    module.exports = ConnectionConfig;
    function ConnectionConfig(options) {
      if (typeof options === "string") {
        options = ConnectionConfig.parseUrl(options);
      }
      this.host = options.host || "localhost";
      this.port = options.port || 3306;
      this.localAddress = options.localAddress;
      this.socketPath = options.socketPath;
      this.user = options.user || void 0;
      this.password = options.password || void 0;
      this.database = options.database;
      this.connectTimeout = options.connectTimeout === void 0 ? 10 * 1e3 : options.connectTimeout;
      this.insecureAuth = options.insecureAuth || false;
      this.supportBigNumbers = options.supportBigNumbers || false;
      this.bigNumberStrings = options.bigNumberStrings || false;
      this.dateStrings = options.dateStrings || false;
      this.debug = options.debug;
      this.trace = options.trace !== false;
      this.stringifyObjects = options.stringifyObjects || false;
      this.timezone = options.timezone || "local";
      this.flags = options.flags || "";
      this.queryFormat = options.queryFormat;
      this.pool = options.pool || void 0;
      this.ssl = typeof options.ssl === "string" ? ConnectionConfig.getSSLProfile(options.ssl) : options.ssl || false;
      this.localInfile = options.localInfile === void 0 ? true : options.localInfile;
      this.multipleStatements = options.multipleStatements || false;
      this.typeCast = options.typeCast === void 0 ? true : options.typeCast;
      if (this.timezone[0] === " ") {
        this.timezone = "+" + this.timezone.substr(1);
      }
      if (this.ssl) {
        this.ssl.rejectUnauthorized = this.ssl.rejectUnauthorized !== false;
      }
      this.maxPacketSize = 0;
      this.charsetNumber = options.charset ? ConnectionConfig.getCharsetNumber(options.charset) : options.charsetNumber || Charsets.UTF8_GENERAL_CI;
      var defaultFlags = ConnectionConfig.getDefaultFlags(options);
      this.clientFlags = ConnectionConfig.mergeFlags(defaultFlags, options.flags);
    }
    ConnectionConfig.mergeFlags = function mergeFlags(defaultFlags, userFlags) {
      var allFlags = ConnectionConfig.parseFlagList(defaultFlags);
      var newFlags = ConnectionConfig.parseFlagList(userFlags);
      for (var flag in newFlags) {
        if (allFlags[flag] !== false) {
          allFlags[flag] = newFlags[flag];
        }
      }
      var flags = 0;
      for (var flag in allFlags) {
        if (allFlags[flag]) {
          flags |= ClientConstants["CLIENT_" + flag] || 0;
        }
      }
      return flags;
    };
    ConnectionConfig.getCharsetNumber = function getCharsetNumber(charset) {
      var num = Charsets[charset.toUpperCase()];
      if (num === void 0) {
        throw new TypeError("Unknown charset '" + charset + "'");
      }
      return num;
    };
    ConnectionConfig.getDefaultFlags = function getDefaultFlags(options) {
      var defaultFlags = [
        "-COMPRESS",
        "-CONNECT_ATTRS",
        "+CONNECT_WITH_DB",
        "+FOUND_ROWS",
        "+IGNORE_SIGPIPE",
        "+IGNORE_SPACE",
        "+LOCAL_FILES",
        "+LONG_FLAG",
        "+LONG_PASSWORD",
        "+MULTI_RESULTS",
        "+ODBC",
        "-PLUGIN_AUTH",
        "+PROTOCOL_41",
        "+PS_MULTI_RESULTS",
        "+RESERVED",
        "+SECURE_CONNECTION",
        "+TRANSACTIONS"
      ];
      if (options && options.localInfile !== void 0 && !options.localInfile) {
        defaultFlags.push("-LOCAL_FILES");
      }
      if (options && options.multipleStatements) {
        defaultFlags.push("+MULTI_STATEMENTS");
      }
      return defaultFlags;
    };
    ConnectionConfig.getSSLProfile = function getSSLProfile(name) {
      if (!SSLProfiles) {
        SSLProfiles = require_ssl_profiles();
      }
      var ssl = SSLProfiles[name];
      if (ssl === void 0) {
        throw new TypeError("Unknown SSL profile '" + name + "'");
      }
      return ssl;
    };
    ConnectionConfig.parseFlagList = function parseFlagList(flagList) {
      var allFlags = /* @__PURE__ */ Object.create(null);
      if (!flagList) {
        return allFlags;
      }
      var flags = !Array.isArray(flagList) ? String(flagList || "").toUpperCase().split(/\s*,+\s*/) : flagList;
      for (var i = 0; i < flags.length; i++) {
        var flag = flags[i];
        var offset = 1;
        var state = flag[0];
        if (state === void 0) {
          continue;
        }
        if (state !== "-" && state !== "+") {
          offset = 0;
          state = "+";
        }
        allFlags[flag.substr(offset)] = state === "+";
      }
      return allFlags;
    };
    ConnectionConfig.parseUrl = function(url) {
      url = urlParse2(url, true);
      var options = {
        host: url.hostname,
        port: url.port,
        database: url.pathname.substr(1)
      };
      if (url.auth) {
        var auth = url.auth.split(":");
        options.user = auth.shift();
        options.password = auth.join(":");
      }
      if (url.query) {
        for (var key in url.query) {
          var value = url.query[key];
          try {
            options[key] = JSON.parse(value);
          } catch (err) {
            options[key] = value;
          }
        }
      }
      return options;
    };
  }
});

// node_modules/mysql/lib/protocol/PacketHeader.js
var require_PacketHeader = __commonJS({
  "node_modules/mysql/lib/protocol/PacketHeader.js"(exports, module) {
    init_react();
    module.exports = PacketHeader;
    function PacketHeader(length, number) {
      this.length = length;
      this.number = number;
    }
  }
});

// node_modules/bignumber.js/bignumber.js
var require_bignumber = __commonJS({
  "node_modules/bignumber.js/bignumber.js"(exports, module) {
    init_react();
    (function(globalObject) {
      "use strict";
      var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
      function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: "\xA0",
          suffix: ""
        }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
        function BigNumber2(v, b) {
          var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
          if (!(x instanceof BigNumber2))
            return new BigNumber2(v, b);
          if (b == null) {
            if (v && v._isBigNumber === true) {
              x.s = v.s;
              if (!v.c || v.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (v.e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = v.e;
                x.c = v.c.slice();
              }
              return;
            }
            if ((isNum = typeof v == "number") && v * 0 == 0) {
              x.s = 1 / v < 0 ? (v = -v, -1) : 1;
              if (v === ~~v) {
                for (e = 0, i = v; i >= 10; i /= 10, e++)
                  ;
                if (e > MAX_EXP) {
                  x.c = x.e = null;
                } else {
                  x.e = e;
                  x.c = [v];
                }
                return;
              }
              str = String(v);
            } else {
              if (!isNumeric.test(str = String(v)))
                return parseNumeric(x, str, isNum);
              x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }
            if ((e = str.indexOf(".")) > -1)
              str = str.replace(".", "");
            if ((i = str.search(/e/i)) > 0) {
              if (e < 0)
                e = i;
              e += +str.slice(i + 1);
              str = str.substring(0, i);
            } else if (e < 0) {
              e = str.length;
            }
          } else {
            intCheck(b, 2, ALPHABET.length, "Base");
            if (b == 10) {
              x = new BigNumber2(v);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }
            str = String(v);
            if (isNum = typeof v == "number") {
              if (v * 0 != 0)
                return parseNumeric(x, str, isNum, b);
              x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
              if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                throw Error(tooManyDigits + v);
              }
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }
            alphabet = ALPHABET.slice(0, b);
            e = i = 0;
            for (len = str.length; i < len; i++) {
              if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                if (c == ".") {
                  if (i > e) {
                    e = len;
                    continue;
                  }
                } else if (!caseChanged) {
                  if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                    caseChanged = true;
                    i = -1;
                    e = 0;
                    continue;
                  }
                }
                return parseNumeric(x, String(v), isNum, b);
              }
            }
            isNum = false;
            str = convertBase(str, b, 10, x.s);
            if ((e = str.indexOf(".")) > -1)
              str = str.replace(".", "");
            else
              e = str.length;
          }
          for (i = 0; str.charCodeAt(i) === 48; i++)
            ;
          for (len = str.length; str.charCodeAt(--len) === 48; )
            ;
          if (str = str.slice(i, ++len)) {
            len -= i;
            if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
              throw Error(tooManyDigits + x.s * v);
            }
            if ((e = e - i - 1) > MAX_EXP) {
              x.c = x.e = null;
            } else if (e < MIN_EXP) {
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = [];
              i = (e + 1) % LOG_BASE;
              if (e < 0)
                i += LOG_BASE;
              if (i < len) {
                if (i)
                  x.c.push(+str.slice(0, i));
                for (len -= LOG_BASE; i < len; ) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }
                i = LOG_BASE - (str = str.slice(i)).length;
              } else {
                i -= len;
              }
              for (; i--; str += "0")
                ;
              x.c.push(+str);
            }
          } else {
            x.c = [x.e = 0];
          }
        }
        BigNumber2.clone = clone;
        BigNumber2.ROUND_UP = 0;
        BigNumber2.ROUND_DOWN = 1;
        BigNumber2.ROUND_CEIL = 2;
        BigNumber2.ROUND_FLOOR = 3;
        BigNumber2.ROUND_HALF_UP = 4;
        BigNumber2.ROUND_HALF_DOWN = 5;
        BigNumber2.ROUND_HALF_EVEN = 6;
        BigNumber2.ROUND_HALF_CEIL = 7;
        BigNumber2.ROUND_HALF_FLOOR = 8;
        BigNumber2.EUCLID = 9;
        BigNumber2.config = BigNumber2.set = function(obj) {
          var p, v;
          if (obj != null) {
            if (typeof obj == "object") {
              if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                DECIMAL_PLACES = v;
              }
              if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                v = obj[p];
                intCheck(v, 0, 8, p);
                ROUNDING_MODE = v;
              }
              if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, 0, p);
                  intCheck(v[1], 0, MAX, p);
                  TO_EXP_NEG = v[0];
                  TO_EXP_POS = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                }
              }
              if (obj.hasOwnProperty(p = "RANGE")) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, -1, p);
                  intCheck(v[1], 1, MAX, p);
                  MIN_EXP = v[0];
                  MAX_EXP = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  if (v) {
                    MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                  } else {
                    throw Error(bignumberError + p + " cannot be zero: " + v);
                  }
                }
              }
              if (obj.hasOwnProperty(p = "CRYPTO")) {
                v = obj[p];
                if (v === !!v) {
                  if (v) {
                    if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                      CRYPTO = v;
                    } else {
                      CRYPTO = !v;
                      throw Error(bignumberError + "crypto unavailable");
                    }
                  } else {
                    CRYPTO = v;
                  }
                } else {
                  throw Error(bignumberError + p + " not true or false: " + v);
                }
              }
              if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                v = obj[p];
                intCheck(v, 0, 9, p);
                MODULO_MODE = v;
              }
              if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                POW_PRECISION = v;
              }
              if (obj.hasOwnProperty(p = "FORMAT")) {
                v = obj[p];
                if (typeof v == "object")
                  FORMAT = v;
                else
                  throw Error(bignumberError + p + " not an object: " + v);
              }
              if (obj.hasOwnProperty(p = "ALPHABET")) {
                v = obj[p];
                if (typeof v == "string" && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
                  ALPHABET = v;
                } else {
                  throw Error(bignumberError + p + " invalid: " + v);
                }
              }
            } else {
              throw Error(bignumberError + "Object expected: " + obj);
            }
          }
          return {
            DECIMAL_PLACES,
            ROUNDING_MODE,
            EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
            RANGE: [MIN_EXP, MAX_EXP],
            CRYPTO,
            MODULO_MODE,
            POW_PRECISION,
            FORMAT,
            ALPHABET
          };
        };
        BigNumber2.isBigNumber = function(v) {
          if (!v || v._isBigNumber !== true)
            return false;
          if (!BigNumber2.DEBUG)
            return true;
          var i, n, c = v.c, e = v.e, s = v.s;
          out:
            if ({}.toString.call(c) == "[object Array]") {
              if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                if (c[0] === 0) {
                  if (e === 0 && c.length === 1)
                    return true;
                  break out;
                }
                i = (e + 1) % LOG_BASE;
                if (i < 1)
                  i += LOG_BASE;
                if (String(c[0]).length == i) {
                  for (i = 0; i < c.length; i++) {
                    n = c[i];
                    if (n < 0 || n >= BASE || n !== mathfloor(n))
                      break out;
                  }
                  if (n !== 0)
                    return true;
                }
              }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
              return true;
            }
          throw Error(bignumberError + "Invalid BigNumber: " + v);
        };
        BigNumber2.maximum = BigNumber2.max = function() {
          return maxOrMin(arguments, P.lt);
        };
        BigNumber2.minimum = BigNumber2.min = function() {
          return maxOrMin(arguments, P.gt);
        };
        BigNumber2.random = function() {
          var pow2_53 = 9007199254740992;
          var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
            return mathfloor(Math.random() * pow2_53);
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
          };
          return function(dp) {
            var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
            if (dp == null)
              dp = DECIMAL_PLACES;
            else
              intCheck(dp, 0, MAX);
            k = mathceil(dp / LOG_BASE);
            if (CRYPTO) {
              if (crypto.getRandomValues) {
                a = crypto.getRandomValues(new Uint32Array(k *= 2));
                for (; i < k; ) {
                  v = a[i] * 131072 + (a[i + 1] >>> 11);
                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {
                    c.push(v % 1e14);
                    i += 2;
                  }
                }
                i = k / 2;
              } else if (crypto.randomBytes) {
                a = crypto.randomBytes(k *= 7);
                for (; i < k; ) {
                  v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {
                    c.push(v % 1e14);
                    i += 7;
                  }
                }
                i = k / 7;
              } else {
                CRYPTO = false;
                throw Error(bignumberError + "crypto unavailable");
              }
            }
            if (!CRYPTO) {
              for (; i < k; ) {
                v = random53bitInt();
                if (v < 9e15)
                  c[i++] = v % 1e14;
              }
            }
            k = c[--i];
            dp %= LOG_BASE;
            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            }
            for (; c[i] === 0; c.pop(), i--)
              ;
            if (i < 0) {
              c = [e = 0];
            } else {
              for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
                ;
              for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
                ;
              if (i < LOG_BASE)
                e -= LOG_BASE - i;
            }
            rand.e = e;
            rand.c = c;
            return rand;
          };
        }();
        BigNumber2.sum = function() {
          var i = 1, args = arguments, sum = new BigNumber2(args[0]);
          for (; i < args.length; )
            sum = sum.plus(args[i++]);
          return sum;
        };
        convertBase = function() {
          var decimal = "0123456789";
          function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j, arr = [0], arrL, i = 0, len = str.length;
            for (; i < len; ) {
              for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
                ;
              arr[0] += alphabet.indexOf(str.charAt(i++));
              for (j = 0; j < arr.length; j++) {
                if (arr[j] > baseOut - 1) {
                  if (arr[j + 1] == null)
                    arr[j + 1] = 0;
                  arr[j + 1] += arr[j] / baseOut | 0;
                  arr[j] %= baseOut;
                }
              }
            }
            return arr.reverse();
          }
          return function(str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
            if (i >= 0) {
              k = POW_PRECISION;
              POW_PRECISION = 0;
              str = str.replace(".", "");
              y = new BigNumber2(baseIn);
              x = y.pow(str.length - i);
              POW_PRECISION = k;
              y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
              y.e = y.c.length;
            }
            xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
            e = k = xc.length;
            for (; xc[--k] == 0; xc.pop())
              ;
            if (!xc[0])
              return alphabet.charAt(0);
            if (i < 0) {
              --e;
            } else {
              x.c = xc;
              x.e = e;
              x.s = sign;
              x = div(x, y, dp, rm, baseOut);
              xc = x.c;
              r = x.r;
              e = x.e;
            }
            d = e + dp + 1;
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;
            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
            if (d < 1 || !xc[0]) {
              str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {
              xc.length = d;
              if (r) {
                for (--baseOut; ++xc[--d] > baseOut; ) {
                  xc[d] = 0;
                  if (!d) {
                    ++e;
                    xc = [1].concat(xc);
                  }
                }
              }
              for (k = xc.length; !xc[--k]; )
                ;
              for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
                ;
              str = toFixedPoint(str, e, alphabet.charAt(0));
            }
            return str;
          };
        }();
        div = function() {
          function multiply(x, k, base2) {
            var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
            for (x = x.slice(); i--; ) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
              carry = (temp / base2 | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base2;
            }
            if (carry)
              x = [carry].concat(x);
            return x;
          }
          function compare4(a, b, aL, bL) {
            var i, cmp;
            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {
              for (i = cmp = 0; i < aL; i++) {
                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }
            return cmp;
          }
          function subtract(a, b, aL, base2) {
            var i = 0;
            for (; aL--; ) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base2 + a[aL] - b[aL];
            }
            for (; !a[0] && a.length > 1; a.splice(0, 1))
              ;
          }
          return function(x, y, dp, rm, base2) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
            if (!xc || !xc[0] || !yc || !yc[0]) {
              return new BigNumber2(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
            }
            q = new BigNumber2(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;
            if (!base2) {
              base2 = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            }
            for (i = 0; yc[i] == (xc[i] || 0); i++)
              ;
            if (yc[i] > (xc[i] || 0))
              e--;
            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2;
              n = mathfloor(base2 / (yc[0] + 1));
              if (n > 1) {
                yc = multiply(yc, n, base2);
                xc = multiply(xc, n, base2);
                yL = yc.length;
                xL = xc.length;
              }
              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length;
              for (; remL < yL; rem[remL++] = 0)
                ;
              yz = yc.slice();
              yz = [0].concat(yz);
              yc0 = yc[0];
              if (yc[1] >= base2 / 2)
                yc0++;
              do {
                n = 0;
                cmp = compare4(yc, rem, yL, remL);
                if (cmp < 0) {
                  rem0 = rem[0];
                  if (yL != remL)
                    rem0 = rem0 * base2 + (rem[1] || 0);
                  n = mathfloor(rem0 / yc0);
                  if (n > 1) {
                    if (n >= base2)
                      n = base2 - 1;
                    prod = multiply(yc, n, base2);
                    prodL = prod.length;
                    remL = rem.length;
                    while (compare4(prod, rem, prodL, remL) == 1) {
                      n--;
                      subtract(prod, yL < prodL ? yz : yc, prodL, base2);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {
                    if (n == 0) {
                      cmp = n = 1;
                    }
                    prod = yc.slice();
                    prodL = prod.length;
                  }
                  if (prodL < remL)
                    prod = [0].concat(prod);
                  subtract(rem, prod, remL, base2);
                  remL = rem.length;
                  if (cmp == -1) {
                    while (compare4(yc, rem, yL, remL) < 1) {
                      n++;
                      subtract(rem, yL < remL ? yz : yc, remL, base2);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                }
                qc[i++] = n;
                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);
              more = rem[0] != null;
              if (!qc[0])
                qc.splice(0, 1);
            }
            if (base2 == BASE) {
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
                ;
              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
            } else {
              q.e = e;
              q.r = +more;
            }
            return q;
          };
        }();
        function format3(n, i, rm, id) {
          var c0, e, ne, len, str;
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          if (!n.c)
            return n.toString();
          c0 = n.c[0];
          ne = n.e;
          if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
          } else {
            n = round(new BigNumber2(n), i, rm);
            e = n.e;
            str = coeffToString(n.c);
            len = str.length;
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
              for (; len < i; str += "0", len++)
                ;
              str = toExponential(str, e);
            } else {
              i -= ne;
              str = toFixedPoint(str, e, "0");
              if (e + 1 > len) {
                if (--i > 0)
                  for (str += "."; i--; str += "0")
                    ;
              } else {
                i += e - len;
                if (i > 0) {
                  if (e + 1 == len)
                    str += ".";
                  for (; i--; str += "0")
                    ;
                }
              }
            }
          }
          return n.s < 0 && c0 ? "-" + str : str;
        }
        function maxOrMin(args, method) {
          var n, i = 1, m = new BigNumber2(args[0]);
          for (; i < args.length; i++) {
            n = new BigNumber2(args[i]);
            if (!n.s) {
              m = n;
              break;
            } else if (method.call(m, n)) {
              m = n;
            }
          }
          return m;
        }
        function normalise(n, c, e) {
          var i = 1, j = c.length;
          for (; !c[--j]; c.pop())
            ;
          for (j = c[0]; j >= 10; j /= 10, i++)
            ;
          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
            n.c = n.e = null;
          } else if (e < MIN_EXP) {
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }
          return n;
        }
        parseNumeric = function() {
          var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
          return function(x, str, isNum, b) {
            var base2, s = isNum ? str : str.replace(whitespaceOrPlus, "");
            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
              if (!isNum) {
                s = s.replace(basePrefix, function(m, p1, p2) {
                  base2 = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                  return !b || b == base2 ? p1 : m;
                });
                if (b) {
                  base2 = b;
                  s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                }
                if (str != s)
                  return new BigNumber2(s, base2);
              }
              if (BigNumber2.DEBUG) {
                throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
              }
              x.s = null;
            }
            x.c = x.e = null;
          };
        }();
        function round(x, sd, rm, r) {
          var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
          if (xc) {
            out: {
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
                ;
              i = sd - d;
              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0];
                rd = n / pows10[d - j - 1] % 10 | 0;
              } else {
                ni = mathceil((i + 1) / LOG_BASE);
                if (ni >= xc.length) {
                  if (r) {
                    for (; xc.length <= ni; xc.push(0))
                      ;
                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni];
                  for (d = 1; k >= 10; k /= 10, d++)
                    ;
                  i %= LOG_BASE;
                  j = i - LOG_BASE + d;
                  rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                }
              }
              r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
              r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
              if (sd < 1 || !xc[0]) {
                xc.length = 0;
                if (r) {
                  sd -= x.e + 1;
                  xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                  x.e = -sd || 0;
                } else {
                  xc[0] = x.e = 0;
                }
                return x;
              }
              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i];
                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              }
              if (r) {
                for (; ; ) {
                  if (ni == 0) {
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                      ;
                    j = xc[0] += k;
                    for (k = 1; j >= 10; j /= 10, k++)
                      ;
                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE)
                        xc[0] = 1;
                    }
                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE)
                      break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              }
              for (i = xc.length; xc[--i] === 0; xc.pop())
                ;
            }
            if (x.e > MAX_EXP) {
              x.c = x.e = null;
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }
          return x;
        }
        function valueOf(n) {
          var str, e = n.e;
          if (e === null)
            return n.toString();
          str = coeffToString(n.c);
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
          return n.s < 0 ? "-" + str : str;
        }
        P.absoluteValue = P.abs = function() {
          var x = new BigNumber2(this);
          if (x.s < 0)
            x.s = 1;
          return x;
        };
        P.comparedTo = function(y, b) {
          return compare3(this, new BigNumber2(y, b));
        };
        P.decimalPlaces = P.dp = function(dp, rm) {
          var c, n, v, x = this;
          if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(new BigNumber2(x), dp + x.e + 1, rm);
          }
          if (!(c = x.c))
            return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
          if (v = c[v])
            for (; v % 10 == 0; v /= 10, n--)
              ;
          if (n < 0)
            n = 0;
          return n;
        };
        P.dividedBy = P.div = function(y, b) {
          return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        P.dividedToIntegerBy = P.idiv = function(y, b) {
          return div(this, new BigNumber2(y, b), 0, 1);
        };
        P.exponentiatedBy = P.pow = function(n, m) {
          var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
          n = new BigNumber2(n);
          if (n.c && !n.isInteger()) {
            throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
          }
          if (m != null)
            m = new BigNumber2(m);
          nIsBig = n.e > 14;
          if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
            y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
            return m ? y.mod(m) : y;
          }
          nIsNeg = n.s < 0;
          if (m) {
            if (m.c ? !m.c[0] : !m.s)
              return new BigNumber2(NaN);
            isModExp = !nIsNeg && x.isInteger() && m.isInteger();
            if (isModExp)
              x = x.mod(m);
          } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
            k = x.s < 0 && isOdd(n) ? -0 : 0;
            if (x.e > -1)
              k = 1 / k;
            return new BigNumber2(nIsNeg ? 1 / k : k);
          } else if (POW_PRECISION) {
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
          }
          if (nIsBig) {
            half = new BigNumber2(0.5);
            if (nIsNeg)
              n.s = 1;
            nIsOdd = isOdd(n);
          } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
          }
          y = new BigNumber2(ONE);
          for (; ; ) {
            if (nIsOdd) {
              y = y.times(x);
              if (!y.c)
                break;
              if (k) {
                if (y.c.length > k)
                  y.c.length = k;
              } else if (isModExp) {
                y = y.mod(m);
              }
            }
            if (i) {
              i = mathfloor(i / 2);
              if (i === 0)
                break;
              nIsOdd = i % 2;
            } else {
              n = n.times(half);
              round(n, n.e + 1, 1);
              if (n.e > 14) {
                nIsOdd = isOdd(n);
              } else {
                i = +valueOf(n);
                if (i === 0)
                  break;
                nIsOdd = i % 2;
              }
            }
            x = x.times(x);
            if (k) {
              if (x.c && x.c.length > k)
                x.c.length = k;
            } else if (isModExp) {
              x = x.mod(m);
            }
          }
          if (isModExp)
            return y;
          if (nIsNeg)
            y = ONE.div(y);
          return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        P.integerValue = function(rm) {
          var n = new BigNumber2(this);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(n, n.e + 1, rm);
        };
        P.isEqualTo = P.eq = function(y, b) {
          return compare3(this, new BigNumber2(y, b)) === 0;
        };
        P.isFinite = function() {
          return !!this.c;
        };
        P.isGreaterThan = P.gt = function(y, b) {
          return compare3(this, new BigNumber2(y, b)) > 0;
        };
        P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
          return (b = compare3(this, new BigNumber2(y, b))) === 1 || b === 0;
        };
        P.isInteger = function() {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        P.isLessThan = P.lt = function(y, b) {
          return compare3(this, new BigNumber2(y, b)) < 0;
        };
        P.isLessThanOrEqualTo = P.lte = function(y, b) {
          return (b = compare3(this, new BigNumber2(y, b))) === -1 || b === 0;
        };
        P.isNaN = function() {
          return !this.s;
        };
        P.isNegative = function() {
          return this.s < 0;
        };
        P.isPositive = function() {
          return this.s > 0;
        };
        P.isZero = function() {
          return !!this.c && this.c[0] == 0;
        };
        P.minus = function(y, b) {
          var i, j, t, xLTy, x = this, a = x.s;
          y = new BigNumber2(y, b);
          b = y.s;
          if (!a || !b)
            return new BigNumber2(NaN);
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }
          var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
          if (!xe || !ye) {
            if (!xc || !yc)
              return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
            if (!xc[0] || !yc[0]) {
              return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
            }
          }
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
          if (a = xe - ye) {
            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }
            t.reverse();
            for (b = a; b--; t.push(0))
              ;
            t.reverse();
          } else {
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
            for (a = b = 0; b < j; b++) {
              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          }
          if (xLTy)
            t = xc, xc = yc, yc = t, y.s = -y.s;
          b = (j = yc.length) - (i = xc.length);
          if (b > 0)
            for (; b--; xc[i++] = 0)
              ;
          b = BASE - 1;
          for (; j > a; ) {
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b)
                ;
              --xc[i];
              xc[j] += BASE;
            }
            xc[j] -= yc[j];
          }
          for (; xc[0] == 0; xc.splice(0, 1), --ye)
            ;
          if (!xc[0]) {
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          }
          return normalise(y, xc, ye);
        };
        P.modulo = P.mod = function(y, b) {
          var q, s, x = this;
          y = new BigNumber2(y, b);
          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber2(NaN);
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber2(x);
          }
          if (MODULO_MODE == 9) {
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }
          y = x.minus(q.times(y));
          if (!y.c[0] && MODULO_MODE == 1)
            y.s = x.s;
          return y;
        };
        P.multipliedBy = P.times = function(y, b) {
          var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base2, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
          if (!xc || !yc || !xc[0] || !yc[0]) {
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s;
              if (!xc || !yc) {
                y.c = y.e = null;
              } else {
                y.c = [0];
                y.e = 0;
              }
            }
            return y;
          }
          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length;
          if (xcL < ycL)
            zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
          for (i = xcL + ycL, zc = []; i--; zc.push(0))
            ;
          base2 = BASE;
          sqrtBase = SQRT_BASE;
          for (i = ycL; --i >= 0; ) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;
            for (k = xcL, j = i + k; j > i; ) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
              c = (xlo / base2 | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base2;
            }
            zc[j] = c;
          }
          if (c) {
            ++e;
          } else {
            zc.splice(0, 1);
          }
          return normalise(y, zc, e);
        };
        P.negated = function() {
          var x = new BigNumber2(this);
          x.s = -x.s || null;
          return x;
        };
        P.plus = function(y, b) {
          var t, x = this, a = x.s;
          y = new BigNumber2(y, b);
          b = y.s;
          if (!a || !b)
            return new BigNumber2(NaN);
          if (a != b) {
            y.s = -b;
            return x.minus(y);
          }
          var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
          if (!xe || !ye) {
            if (!xc || !yc)
              return new BigNumber2(a / 0);
            if (!xc[0] || !yc[0])
              return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
          }
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }
            t.reverse();
            for (; a--; t.push(0))
              ;
            t.reverse();
          }
          a = xc.length;
          b = yc.length;
          if (a - b < 0)
            t = yc, yc = xc, xc = t, b = a;
          for (a = 0; b; ) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
          }
          if (a) {
            xc = [a].concat(xc);
            ++ye;
          }
          return normalise(y, xc, ye);
        };
        P.precision = P.sd = function(sd, rm) {
          var c, n, v, x = this;
          if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(new BigNumber2(x), sd, rm);
          }
          if (!(c = x.c))
            return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;
          if (v = c[v]) {
            for (; v % 10 == 0; v /= 10, n--)
              ;
            for (v = c[0]; v >= 10; v /= 10, n++)
              ;
          }
          if (sd && x.e + 1 > n)
            n = x.e + 1;
          return n;
        };
        P.shiftedBy = function(k) {
          intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
          return this.times("1e" + k);
        };
        P.squareRoot = P.sqrt = function() {
          var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
          if (s !== 1 || !c || !c[0]) {
            return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          }
          s = Math.sqrt(+valueOf(x));
          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0)
              n += "0";
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) {
              n = "1e" + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf("e") + 1) + e;
            }
            r = new BigNumber2(n);
          } else {
            r = new BigNumber2(s + "");
          }
          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3)
              s = 0;
            for (; ; ) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));
              if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                if (r.e < e)
                  --s;
                n = n.slice(s - 3, s + 1);
                if (n == "9999" || !rep && n == "4999") {
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);
                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }
                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {
                  if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }
                  break;
                }
              }
            }
          }
          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        P.toExponential = function(dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
          }
          return format3(this, dp, rm, 1);
        };
        P.toFixed = function(dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
          }
          return format3(this, dp, rm);
        };
        P.toFormat = function(dp, rm, format4) {
          var str, x = this;
          if (format4 == null) {
            if (dp != null && rm && typeof rm == "object") {
              format4 = rm;
              rm = null;
            } else if (dp && typeof dp == "object") {
              format4 = dp;
              dp = rm = null;
            } else {
              format4 = FORMAT;
            }
          } else if (typeof format4 != "object") {
            throw Error(bignumberError + "Argument not an object: " + format4);
          }
          str = x.toFixed(dp, rm);
          if (x.c) {
            var i, arr = str.split("."), g1 = +format4.groupSize, g2 = +format4.secondaryGroupSize, groupSeparator = format4.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
            if (g2)
              i = g1, g1 = g2, g2 = i, len -= i;
            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);
              for (; i < len; i += g1)
                intPart += groupSeparator + intDigits.substr(i, g1);
              if (g2 > 0)
                intPart += groupSeparator + intDigits.slice(i);
              if (isNeg)
                intPart = "-" + intPart;
            }
            str = fractionPart ? intPart + (format4.decimalSeparator || "") + ((g2 = +format4.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format4.fractionGroupSeparator || "")) : fractionPart) : intPart;
          }
          return (format4.prefix || "") + str + (format4.suffix || "");
        };
        P.toFraction = function(md) {
          var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
          if (md != null) {
            n = new BigNumber2(md);
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
              throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
          }
          if (!xc)
            return new BigNumber2(x);
          d = new BigNumber2(ONE);
          n1 = d0 = new BigNumber2(ONE);
          d1 = n0 = new BigNumber2(ONE);
          s = coeffToString(xc);
          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber2(s);
          n0.c[0] = 0;
          for (; ; ) {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1)
              break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }
          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e = e * 2;
          r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
          MAX_EXP = exp;
          return r;
        };
        P.toNumber = function() {
          return +valueOf(this);
        };
        P.toPrecision = function(sd, rm) {
          if (sd != null)
            intCheck(sd, 1, MAX);
          return format3(this, sd, rm, 2);
        };
        P.toString = function(b) {
          var str, n = this, s = n.s, e = n.e;
          if (e === null) {
            if (s) {
              str = "Infinity";
              if (s < 0)
                str = "-" + str;
            } else {
              str = "NaN";
            }
          } else {
            if (b == null) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
            } else if (b === 10) {
              n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
              str = toFixedPoint(coeffToString(n.c), n.e, "0");
            } else {
              intCheck(b, 2, ALPHABET.length, "Base");
              str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
            }
            if (s < 0 && n.c[0])
              str = "-" + str;
          }
          return str;
        };
        P.valueOf = P.toJSON = function() {
          return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null)
          BigNumber2.set(configObject);
        return BigNumber2;
      }
      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      }
      function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + "";
        for (; i < j; ) {
          s = a[i++] + "";
          z = LOG_BASE - s.length;
          for (; z--; s = "0" + s)
            ;
          r += s;
        }
        for (j = r.length; r.charCodeAt(--j) === 48; )
          ;
        return r.slice(0, j + 1 || 1);
      }
      function compare3(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        if (!i || !j)
          return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        if (a || b)
          return a ? b ? 0 : -j : i;
        if (i != j)
          return i;
        a = i < 0;
        b = k == l;
        if (!xc || !yc)
          return b ? 0 : !xc ^ a ? 1 : -1;
        if (!b)
          return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        for (i = 0; i < j; i++)
          if (xc[i] != yc[i])
            return xc[i] > yc[i] ^ a ? 1 : -1;
        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }
      function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) {
          throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
        }
      }
      function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
      }
      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
      }
      function toFixedPoint(str, e, z) {
        var len, zs;
        if (e < 0) {
          for (zs = z + "."; ++e; zs += z)
            ;
          str = zs + str;
        } else {
          len = str.length;
          if (++e > len) {
            for (zs = z, e -= len; --e; zs += z)
              ;
            str += zs;
          } else if (e < len) {
            str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        return str;
      }
      BigNumber = clone();
      BigNumber["default"] = BigNumber.BigNumber = BigNumber;
      if (typeof define == "function" && define.amd) {
        define(function() {
          return BigNumber;
        });
      } else if (typeof module != "undefined" && module.exports) {
        module.exports = BigNumber;
      } else {
        if (!globalObject) {
          globalObject = typeof self != "undefined" && self ? self : window;
        }
        globalObject.BigNumber = BigNumber;
      }
    })(exports);
  }
});

// node-modules-polyfills:buffer
var buffer_exports = {};
__export(buffer_exports, {
  Buffer: () => Buffer2,
  INSPECT_MAX_BYTES: () => INSPECT_MAX_BYTES,
  SlowBuffer: () => SlowBuffer,
  isBuffer: () => isBuffer2,
  kMaxLength: () => _kMaxLength
});
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
function kMaxLength() {
  return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer2.prototype;
  } else {
    if (that === null) {
      that = new Buffer2(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
    return new Buffer2(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer2.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer2.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray3(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
function SlowBuffer(length) {
  if (+length != length) {
    length = 0;
  }
  return Buffer2.alloc(+length);
}
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim)
    return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16)
    return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer2(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
var lookup, revLookup, Arr, inited, toString, isArray3, INSPECT_MAX_BYTES, _kMaxLength, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE;
var init_buffer = __esm({
  "node-modules-polyfills:buffer"() {
    init_react();
    lookup = [];
    revLookup = [];
    Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    inited = false;
    toString = {}.toString;
    isArray3 = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
    INSPECT_MAX_BYTES = 50;
    Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
    _kMaxLength = kMaxLength();
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      arr.__proto__ = Buffer2.prototype;
      return arr;
    };
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
    }
    Buffer2.alloc = function(size, fill2, encoding) {
      return alloc(null, size, fill2, encoding);
    };
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.isBuffer = isBuffer2;
    Buffer2.compare = function compare(a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!isArray3(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = true;
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString2() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function equals(b) {
      if (!internalIsBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect2() {
      var str = "";
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    Buffer2.prototype.write = function write2(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH = 4096;
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
      return newBuf;
    };
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8);
    };
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  }
});

// node-modules-polyfills-commonjs:buffer
var require_buffer = __commonJS({
  "node-modules-polyfills-commonjs:buffer"(exports, module) {
    init_react();
    var polyfill = (init_buffer(), __toCommonJS(buffer_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    init_react();
    var buffer = require_buffer();
    var Buffer3 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer3.from && Buffer3.alloc && Buffer3.allocUnsafe && Buffer3.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer3(arg, encodingOrOffset, length);
    }
    copyProps(Buffer3, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer3(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill2, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer3(size);
      if (fill2 !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill2, encoding);
        } else {
          buf.fill(fill2);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer3(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/mysql/lib/protocol/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/mysql/lib/protocol/BufferList.js"(exports, module) {
    init_react();
    module.exports = BufferList2;
    function BufferList2() {
      this.bufs = [];
      this.size = 0;
    }
    BufferList2.prototype.shift = function shift() {
      var buf = this.bufs.shift();
      if (buf) {
        this.size -= buf.length;
      }
      return buf;
    };
    BufferList2.prototype.push = function push(buf) {
      if (!buf || !buf.length) {
        return;
      }
      this.bufs.push(buf);
      this.size += buf.length;
    };
  }
});

// node_modules/mysql/lib/protocol/Parser.js
var require_Parser = __commonJS({
  "node_modules/mysql/lib/protocol/Parser.js"(exports, module) {
    init_react();
    var PacketHeader = require_PacketHeader();
    var BigNumber = require_bignumber();
    var Buffer3 = require_safe_buffer().Buffer;
    var BufferList2 = require_BufferList();
    var MAX_PACKET_LENGTH = Math.pow(2, 24) - 1;
    var MUL_32BIT = Math.pow(2, 32);
    var PACKET_HEADER_LENGTH = 4;
    module.exports = Parser;
    function Parser(options) {
      options = options || {};
      this._supportBigNumbers = options.config && options.config.supportBigNumbers;
      this._buffer = Buffer3.alloc(0);
      this._nextBuffers = new BufferList2();
      this._longPacketBuffers = new BufferList2();
      this._offset = 0;
      this._packetEnd = null;
      this._packetHeader = null;
      this._packetOffset = null;
      this._onError = options.onError || function(err) {
        throw err;
      };
      this._onPacket = options.onPacket || function() {
      };
      this._nextPacketNumber = 0;
      this._encoding = "utf-8";
      this._paused = false;
    }
    Parser.prototype.write = function write3(chunk) {
      this._nextBuffers.push(chunk);
      while (!this._paused) {
        var packetHeader = this._tryReadPacketHeader();
        if (!packetHeader) {
          break;
        }
        if (!this._combineNextBuffers(packetHeader.length)) {
          break;
        }
        this._parsePacket(packetHeader);
      }
    };
    Parser.prototype.append = function append(chunk) {
      if (!chunk || chunk.length === 0) {
        return;
      }
      var sliceEnd = this._buffer.length;
      var sliceStart = this._packetOffset === null ? this._offset : this._packetOffset;
      var sliceLength = sliceEnd - sliceStart;
      var buffer = null;
      var chunks = !(chunk instanceof Array || Array.isArray(chunk)) ? [chunk] : chunk;
      var length = 0;
      var offset = 0;
      for (var i = 0; i < chunks.length; i++) {
        length += chunks[i].length;
      }
      if (sliceLength !== 0) {
        buffer = Buffer3.allocUnsafe(sliceLength + length);
        offset = 0;
        offset += this._buffer.copy(buffer, 0, sliceStart, sliceEnd);
        for (var i = 0; i < chunks.length; i++) {
          offset += chunks[i].copy(buffer, offset);
        }
      } else if (chunks.length > 1) {
        buffer = Buffer3.allocUnsafe(length);
        offset = 0;
        for (var i = 0; i < chunks.length; i++) {
          offset += chunks[i].copy(buffer, offset);
        }
      } else {
        buffer = chunks[0];
      }
      this._buffer = buffer;
      this._offset = this._offset - sliceStart;
      this._packetEnd = this._packetEnd !== null ? this._packetEnd - sliceStart : null;
      this._packetOffset = this._packetOffset !== null ? this._packetOffset - sliceStart : null;
    };
    Parser.prototype.pause = function() {
      this._paused = true;
    };
    Parser.prototype.resume = function() {
      this._paused = false;
      process.nextTick(this.write.bind(this));
    };
    Parser.prototype.peak = function peak(offset) {
      return this._buffer[this._offset + (offset >>> 0)];
    };
    Parser.prototype.parseUnsignedNumber = function parseUnsignedNumber(bytes) {
      if (bytes === 1) {
        return this._buffer[this._offset++];
      }
      var buffer = this._buffer;
      var offset = this._offset + bytes - 1;
      var value = 0;
      if (bytes > 4) {
        var err = new Error("parseUnsignedNumber: Supports only up to 4 bytes");
        err.offset = this._offset - this._packetOffset - 1;
        err.code = "PARSER_UNSIGNED_TOO_LONG";
        throw err;
      }
      while (offset >= this._offset) {
        value = (value << 8 | buffer[offset]) >>> 0;
        offset--;
      }
      this._offset += bytes;
      return value;
    };
    Parser.prototype.parseLengthCodedString = function() {
      var length = this.parseLengthCodedNumber();
      if (length === null) {
        return null;
      }
      return this.parseString(length);
    };
    Parser.prototype.parseLengthCodedBuffer = function() {
      var length = this.parseLengthCodedNumber();
      if (length === null) {
        return null;
      }
      return this.parseBuffer(length);
    };
    Parser.prototype.parseLengthCodedNumber = function parseLengthCodedNumber() {
      if (this._offset >= this._buffer.length) {
        var err = new Error("Parser: read past end");
        err.offset = this._offset - this._packetOffset;
        err.code = "PARSER_READ_PAST_END";
        throw err;
      }
      var bits = this._buffer[this._offset++];
      if (bits <= 250) {
        return bits;
      }
      switch (bits) {
        case 251:
          return null;
        case 252:
          return this.parseUnsignedNumber(2);
        case 253:
          return this.parseUnsignedNumber(3);
        case 254:
          break;
        default:
          var err = new Error("Unexpected first byte" + (bits ? ": 0x" + bits.toString(16) : ""));
          err.offset = this._offset - this._packetOffset - 1;
          err.code = "PARSER_BAD_LENGTH_BYTE";
          throw err;
      }
      var low = this.parseUnsignedNumber(4);
      var high = this.parseUnsignedNumber(4);
      var value;
      if (high >>> 21) {
        value = BigNumber(MUL_32BIT).times(high).plus(low).toString();
        if (this._supportBigNumbers) {
          return value;
        }
        var err = new Error('parseLengthCodedNumber: JS precision range exceeded, number is >= 53 bit: "' + value + '"');
        err.offset = this._offset - this._packetOffset - 8;
        err.code = "PARSER_JS_PRECISION_RANGE_EXCEEDED";
        throw err;
      }
      value = low + MUL_32BIT * high;
      return value;
    };
    Parser.prototype.parseFiller = function(length) {
      return this.parseBuffer(length);
    };
    Parser.prototype.parseNullTerminatedBuffer = function() {
      var end = this._nullByteOffset();
      var value = this._buffer.slice(this._offset, end);
      this._offset = end + 1;
      return value;
    };
    Parser.prototype.parseNullTerminatedString = function() {
      var end = this._nullByteOffset();
      var value = this._buffer.toString(this._encoding, this._offset, end);
      this._offset = end + 1;
      return value;
    };
    Parser.prototype._nullByteOffset = function() {
      var offset = this._offset;
      while (this._buffer[offset] !== 0) {
        offset++;
        if (offset >= this._buffer.length) {
          var err = new Error("Offset of null terminated string not found.");
          err.offset = this._offset - this._packetOffset;
          err.code = "PARSER_MISSING_NULL_BYTE";
          throw err;
        }
      }
      return offset;
    };
    Parser.prototype.parsePacketTerminatedBuffer = function parsePacketTerminatedBuffer() {
      var length = this._packetEnd - this._offset;
      return this.parseBuffer(length);
    };
    Parser.prototype.parsePacketTerminatedString = function() {
      var length = this._packetEnd - this._offset;
      return this.parseString(length);
    };
    Parser.prototype.parseBuffer = function(length) {
      var response = Buffer3.alloc(length);
      this._buffer.copy(response, 0, this._offset, this._offset + length);
      this._offset += length;
      return response;
    };
    Parser.prototype.parseString = function(length) {
      var offset = this._offset;
      var end = offset + length;
      var value = this._buffer.toString(this._encoding, offset, end);
      this._offset = end;
      return value;
    };
    Parser.prototype.parseGeometryValue = function() {
      var buffer = this.parseLengthCodedBuffer();
      var offset = 4;
      if (buffer === null || !buffer.length) {
        return null;
      }
      function parseGeometry() {
        var result = null;
        var byteOrder = buffer.readUInt8(offset);
        offset += 1;
        var wkbType = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
        offset += 4;
        switch (wkbType) {
          case 1:
            var x = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
            offset += 8;
            var y = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
            offset += 8;
            result = { x, y };
            break;
          case 2:
            var numPoints = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
            offset += 4;
            result = [];
            for (var i = numPoints; i > 0; i--) {
              var x = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
              offset += 8;
              var y = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
              offset += 8;
              result.push({ x, y });
            }
            break;
          case 3:
            var numRings = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
            offset += 4;
            result = [];
            for (var i = numRings; i > 0; i--) {
              var numPoints = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
              offset += 4;
              var line = [];
              for (var j = numPoints; j > 0; j--) {
                var x = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                offset += 8;
                var y = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                offset += 8;
                line.push({ x, y });
              }
              result.push(line);
            }
            break;
          case 4:
          case 5:
          case 6:
          case 7:
            var num = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
            offset += 4;
            var result = [];
            for (var i = num; i > 0; i--) {
              result.push(parseGeometry());
            }
            break;
        }
        return result;
      }
      return parseGeometry();
    };
    Parser.prototype.reachedPacketEnd = function() {
      return this._offset === this._packetEnd;
    };
    Parser.prototype.incrementPacketNumber = function() {
      var currentPacketNumber = this._nextPacketNumber;
      this._nextPacketNumber = (this._nextPacketNumber + 1) % 256;
      return currentPacketNumber;
    };
    Parser.prototype.resetPacketNumber = function() {
      this._nextPacketNumber = 0;
    };
    Parser.prototype.packetLength = function packetLength() {
      if (!this._packetHeader) {
        return null;
      }
      return this._packetHeader.length + this._longPacketBuffers.size;
    };
    Parser.prototype._combineNextBuffers = function _combineNextBuffers(bytes) {
      var length = this._buffer.length - this._offset;
      if (length >= bytes) {
        return true;
      }
      if (length + this._nextBuffers.size < bytes) {
        return false;
      }
      var buffers = [];
      var bytesNeeded = bytes - length;
      while (bytesNeeded > 0) {
        var buffer = this._nextBuffers.shift();
        buffers.push(buffer);
        bytesNeeded -= buffer.length;
      }
      this.append(buffers);
      return true;
    };
    Parser.prototype._combineLongPacketBuffers = function _combineLongPacketBuffers() {
      if (!this._longPacketBuffers.size) {
        return;
      }
      var remainingBytes = this._buffer.length - this._offset;
      var trailingPacketBytes = this._buffer.length - this._packetEnd;
      var buf = null;
      var buffer = Buffer3.allocUnsafe(remainingBytes + this._longPacketBuffers.size);
      var offset = 0;
      while (buf = this._longPacketBuffers.shift()) {
        offset += buf.copy(buffer, offset);
      }
      this._buffer.copy(buffer, offset, this._offset);
      this._buffer = buffer;
      this._offset = 0;
      this._packetEnd = this._buffer.length - trailingPacketBytes;
      this._packetOffset = 0;
    };
    Parser.prototype._parsePacket = function _parsePacket(packetHeader) {
      this._packetEnd = this._offset + packetHeader.length;
      this._packetOffset = this._offset;
      if (packetHeader.length === MAX_PACKET_LENGTH) {
        this._longPacketBuffers.push(this._buffer.slice(this._packetOffset, this._packetEnd));
        this._advanceToNextPacket();
        return;
      }
      this._combineLongPacketBuffers();
      var hadException = true;
      try {
        this._onPacket(packetHeader);
        hadException = false;
      } catch (err) {
        if (!err || typeof err.code !== "string" || err.code.substr(0, 7) !== "PARSER_") {
          throw err;
        }
        this._onError(err);
        hadException = false;
      } finally {
        this._advanceToNextPacket();
        if (hadException) {
          process.nextTick(this.write.bind(this));
        }
      }
    };
    Parser.prototype._tryReadPacketHeader = function _tryReadPacketHeader() {
      if (this._packetHeader) {
        return this._packetHeader;
      }
      if (!this._combineNextBuffers(PACKET_HEADER_LENGTH)) {
        return null;
      }
      this._packetHeader = new PacketHeader(this.parseUnsignedNumber(3), this.parseUnsignedNumber(1));
      if (this._packetHeader.number !== this._nextPacketNumber) {
        var err = new Error("Packets out of order. Got: " + this._packetHeader.number + " Expected: " + this._nextPacketNumber);
        err.code = "PROTOCOL_PACKETS_OUT_OF_ORDER";
        err.fatal = true;
        this._onError(err);
      }
      this.incrementPacketNumber();
      return this._packetHeader;
    };
    Parser.prototype._advanceToNextPacket = function() {
      this._offset = this._packetEnd;
      this._packetHeader = null;
      this._packetEnd = null;
      this._packetOffset = null;
    };
  }
});

// node-modules-polyfills-commonjs:util
var require_util = __commonJS({
  "node-modules-polyfills-commonjs:util"(exports, module) {
    init_react();
    var polyfill = (init_util(), __toCommonJS(util_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/mysql/lib/protocol/packets/AuthSwitchRequestPacket.js
var require_AuthSwitchRequestPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/AuthSwitchRequestPacket.js"(exports, module) {
    init_react();
    module.exports = AuthSwitchRequestPacket;
    function AuthSwitchRequestPacket(options) {
      options = options || {};
      this.status = 254;
      this.authMethodName = options.authMethodName;
      this.authMethodData = options.authMethodData;
    }
    AuthSwitchRequestPacket.prototype.parse = function parse3(parser) {
      this.status = parser.parseUnsignedNumber(1);
      this.authMethodName = parser.parseNullTerminatedString();
      this.authMethodData = parser.parsePacketTerminatedBuffer();
    };
    AuthSwitchRequestPacket.prototype.write = function write3(writer) {
      writer.writeUnsignedNumber(1, this.status);
      writer.writeNullTerminatedString(this.authMethodName);
      writer.writeBuffer(this.authMethodData);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/AuthSwitchResponsePacket.js
var require_AuthSwitchResponsePacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/AuthSwitchResponsePacket.js"(exports, module) {
    init_react();
    module.exports = AuthSwitchResponsePacket;
    function AuthSwitchResponsePacket(options) {
      options = options || {};
      this.data = options.data;
    }
    AuthSwitchResponsePacket.prototype.parse = function parse3(parser) {
      this.data = parser.parsePacketTerminatedBuffer();
    };
    AuthSwitchResponsePacket.prototype.write = function write3(writer) {
      writer.writeBuffer(this.data);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ClientAuthenticationPacket.js
var require_ClientAuthenticationPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ClientAuthenticationPacket.js"(exports, module) {
    init_react();
    var Buffer3 = require_safe_buffer().Buffer;
    module.exports = ClientAuthenticationPacket;
    function ClientAuthenticationPacket(options) {
      options = options || {};
      this.clientFlags = options.clientFlags;
      this.maxPacketSize = options.maxPacketSize;
      this.charsetNumber = options.charsetNumber;
      this.filler = void 0;
      this.user = options.user;
      this.scrambleBuff = options.scrambleBuff;
      this.database = options.database;
      this.protocol41 = options.protocol41;
    }
    ClientAuthenticationPacket.prototype.parse = function(parser) {
      if (this.protocol41) {
        this.clientFlags = parser.parseUnsignedNumber(4);
        this.maxPacketSize = parser.parseUnsignedNumber(4);
        this.charsetNumber = parser.parseUnsignedNumber(1);
        this.filler = parser.parseFiller(23);
        this.user = parser.parseNullTerminatedString();
        this.scrambleBuff = parser.parseLengthCodedBuffer();
        this.database = parser.parseNullTerminatedString();
      } else {
        this.clientFlags = parser.parseUnsignedNumber(2);
        this.maxPacketSize = parser.parseUnsignedNumber(3);
        this.user = parser.parseNullTerminatedString();
        this.scrambleBuff = parser.parseBuffer(8);
        this.database = parser.parseLengthCodedBuffer();
      }
    };
    ClientAuthenticationPacket.prototype.write = function(writer) {
      if (this.protocol41) {
        writer.writeUnsignedNumber(4, this.clientFlags);
        writer.writeUnsignedNumber(4, this.maxPacketSize);
        writer.writeUnsignedNumber(1, this.charsetNumber);
        writer.writeFiller(23);
        writer.writeNullTerminatedString(this.user);
        writer.writeLengthCodedBuffer(this.scrambleBuff);
        writer.writeNullTerminatedString(this.database);
      } else {
        writer.writeUnsignedNumber(2, this.clientFlags);
        writer.writeUnsignedNumber(3, this.maxPacketSize);
        writer.writeNullTerminatedString(this.user);
        writer.writeBuffer(this.scrambleBuff);
        if (this.database && this.database.length) {
          writer.writeFiller(1);
          writer.writeBuffer(Buffer3.from(this.database));
        }
      }
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ComChangeUserPacket.js
var require_ComChangeUserPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ComChangeUserPacket.js"(exports, module) {
    init_react();
    module.exports = ComChangeUserPacket;
    function ComChangeUserPacket(options) {
      options = options || {};
      this.command = 17;
      this.user = options.user;
      this.scrambleBuff = options.scrambleBuff;
      this.database = options.database;
      this.charsetNumber = options.charsetNumber;
    }
    ComChangeUserPacket.prototype.parse = function(parser) {
      this.command = parser.parseUnsignedNumber(1);
      this.user = parser.parseNullTerminatedString();
      this.scrambleBuff = parser.parseLengthCodedBuffer();
      this.database = parser.parseNullTerminatedString();
      this.charsetNumber = parser.parseUnsignedNumber(1);
    };
    ComChangeUserPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, this.command);
      writer.writeNullTerminatedString(this.user);
      writer.writeLengthCodedBuffer(this.scrambleBuff);
      writer.writeNullTerminatedString(this.database);
      writer.writeUnsignedNumber(2, this.charsetNumber);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ComPingPacket.js
var require_ComPingPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ComPingPacket.js"(exports, module) {
    init_react();
    module.exports = ComPingPacket;
    function ComPingPacket() {
      this.command = 14;
    }
    ComPingPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, this.command);
    };
    ComPingPacket.prototype.parse = function(parser) {
      this.command = parser.parseUnsignedNumber(1);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ComQueryPacket.js
var require_ComQueryPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ComQueryPacket.js"(exports, module) {
    init_react();
    module.exports = ComQueryPacket;
    function ComQueryPacket(sql) {
      this.command = 3;
      this.sql = sql;
    }
    ComQueryPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, this.command);
      writer.writeString(this.sql);
    };
    ComQueryPacket.prototype.parse = function(parser) {
      this.command = parser.parseUnsignedNumber(1);
      this.sql = parser.parsePacketTerminatedString();
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ComQuitPacket.js
var require_ComQuitPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ComQuitPacket.js"(exports, module) {
    init_react();
    module.exports = ComQuitPacket;
    function ComQuitPacket() {
      this.command = 1;
    }
    ComQuitPacket.prototype.parse = function parse3(parser) {
      this.command = parser.parseUnsignedNumber(1);
    };
    ComQuitPacket.prototype.write = function write3(writer) {
      writer.writeUnsignedNumber(1, this.command);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ComStatisticsPacket.js
var require_ComStatisticsPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ComStatisticsPacket.js"(exports, module) {
    init_react();
    module.exports = ComStatisticsPacket;
    function ComStatisticsPacket() {
      this.command = 9;
    }
    ComStatisticsPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, this.command);
    };
    ComStatisticsPacket.prototype.parse = function(parser) {
      this.command = parser.parseUnsignedNumber(1);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/EmptyPacket.js
var require_EmptyPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/EmptyPacket.js"(exports, module) {
    init_react();
    module.exports = EmptyPacket;
    function EmptyPacket() {
    }
    EmptyPacket.prototype.parse = function parse3() {
    };
    EmptyPacket.prototype.write = function write3() {
    };
  }
});

// node_modules/mysql/lib/protocol/packets/EofPacket.js
var require_EofPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/EofPacket.js"(exports, module) {
    init_react();
    module.exports = EofPacket;
    function EofPacket(options) {
      options = options || {};
      this.fieldCount = void 0;
      this.warningCount = options.warningCount;
      this.serverStatus = options.serverStatus;
      this.protocol41 = options.protocol41;
    }
    EofPacket.prototype.parse = function(parser) {
      this.fieldCount = parser.parseUnsignedNumber(1);
      if (this.protocol41) {
        this.warningCount = parser.parseUnsignedNumber(2);
        this.serverStatus = parser.parseUnsignedNumber(2);
      }
    };
    EofPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, 254);
      if (this.protocol41) {
        writer.writeUnsignedNumber(2, this.warningCount);
        writer.writeUnsignedNumber(2, this.serverStatus);
      }
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ErrorPacket.js
var require_ErrorPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ErrorPacket.js"(exports, module) {
    init_react();
    module.exports = ErrorPacket;
    function ErrorPacket(options) {
      options = options || {};
      this.fieldCount = options.fieldCount;
      this.errno = options.errno;
      this.sqlStateMarker = options.sqlStateMarker;
      this.sqlState = options.sqlState;
      this.message = options.message;
    }
    ErrorPacket.prototype.parse = function(parser) {
      this.fieldCount = parser.parseUnsignedNumber(1);
      this.errno = parser.parseUnsignedNumber(2);
      if (parser.peak() === 35) {
        this.sqlStateMarker = parser.parseString(1);
        this.sqlState = parser.parseString(5);
      }
      this.message = parser.parsePacketTerminatedString();
    };
    ErrorPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, 255);
      writer.writeUnsignedNumber(2, this.errno);
      if (this.sqlStateMarker) {
        writer.writeString(this.sqlStateMarker);
        writer.writeString(this.sqlState);
      }
      writer.writeString(this.message);
    };
  }
});

// node_modules/mysql/lib/protocol/constants/types.js
var require_types = __commonJS({
  "node_modules/mysql/lib/protocol/constants/types.js"(exports) {
    init_react();
    exports.DECIMAL = 0;
    exports.TINY = 1;
    exports.SHORT = 2;
    exports.LONG = 3;
    exports.FLOAT = 4;
    exports.DOUBLE = 5;
    exports.NULL = 6;
    exports.TIMESTAMP = 7;
    exports.LONGLONG = 8;
    exports.INT24 = 9;
    exports.DATE = 10;
    exports.TIME = 11;
    exports.DATETIME = 12;
    exports.YEAR = 13;
    exports.NEWDATE = 14;
    exports.VARCHAR = 15;
    exports.BIT = 16;
    exports.TIMESTAMP2 = 17;
    exports.DATETIME2 = 18;
    exports.TIME2 = 19;
    exports.JSON = 245;
    exports.NEWDECIMAL = 246;
    exports.ENUM = 247;
    exports.SET = 248;
    exports.TINY_BLOB = 249;
    exports.MEDIUM_BLOB = 250;
    exports.LONG_BLOB = 251;
    exports.BLOB = 252;
    exports.VAR_STRING = 253;
    exports.STRING = 254;
    exports.GEOMETRY = 255;
    exports[0] = "DECIMAL";
    exports[1] = "TINY";
    exports[2] = "SHORT";
    exports[3] = "LONG";
    exports[4] = "FLOAT";
    exports[5] = "DOUBLE";
    exports[6] = "NULL";
    exports[7] = "TIMESTAMP";
    exports[8] = "LONGLONG";
    exports[9] = "INT24";
    exports[10] = "DATE";
    exports[11] = "TIME";
    exports[12] = "DATETIME";
    exports[13] = "YEAR";
    exports[14] = "NEWDATE";
    exports[15] = "VARCHAR";
    exports[16] = "BIT";
    exports[17] = "TIMESTAMP2";
    exports[18] = "DATETIME2";
    exports[19] = "TIME2";
    exports[245] = "JSON";
    exports[246] = "NEWDECIMAL";
    exports[247] = "ENUM";
    exports[248] = "SET";
    exports[249] = "TINY_BLOB";
    exports[250] = "MEDIUM_BLOB";
    exports[251] = "LONG_BLOB";
    exports[252] = "BLOB";
    exports[253] = "VAR_STRING";
    exports[254] = "STRING";
    exports[255] = "GEOMETRY";
  }
});

// node_modules/mysql/lib/protocol/packets/Field.js
var require_Field = __commonJS({
  "node_modules/mysql/lib/protocol/packets/Field.js"(exports, module) {
    init_react();
    var Types = require_types();
    module.exports = Field;
    function Field(options) {
      options = options || {};
      this.parser = options.parser;
      this.packet = options.packet;
      this.db = options.packet.db;
      this.table = options.packet.table;
      this.name = options.packet.name;
      this.type = Types[options.packet.type];
      this.length = options.packet.length;
    }
    Field.prototype.string = function() {
      return this.parser.parseLengthCodedString();
    };
    Field.prototype.buffer = function() {
      return this.parser.parseLengthCodedBuffer();
    };
    Field.prototype.geometry = function() {
      return this.parser.parseGeometryValue();
    };
  }
});

// node_modules/mysql/lib/protocol/packets/FieldPacket.js
var require_FieldPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/FieldPacket.js"(exports, module) {
    init_react();
    module.exports = FieldPacket;
    function FieldPacket(options) {
      options = options || {};
      this.catalog = options.catalog;
      this.db = options.db;
      this.table = options.table;
      this.orgTable = options.orgTable;
      this.name = options.name;
      this.orgName = options.orgName;
      this.charsetNr = options.charsetNr;
      this.length = options.length;
      this.type = options.type;
      this.flags = options.flags;
      this.decimals = options.decimals;
      this.default = options.default;
      this.zeroFill = options.zeroFill;
      this.protocol41 = options.protocol41;
    }
    FieldPacket.prototype.parse = function(parser) {
      if (this.protocol41) {
        this.catalog = parser.parseLengthCodedString();
        this.db = parser.parseLengthCodedString();
        this.table = parser.parseLengthCodedString();
        this.orgTable = parser.parseLengthCodedString();
        this.name = parser.parseLengthCodedString();
        this.orgName = parser.parseLengthCodedString();
        if (parser.parseLengthCodedNumber() !== 12) {
          var err = new TypeError("Received invalid field length");
          err.code = "PARSER_INVALID_FIELD_LENGTH";
          throw err;
        }
        this.charsetNr = parser.parseUnsignedNumber(2);
        this.length = parser.parseUnsignedNumber(4);
        this.type = parser.parseUnsignedNumber(1);
        this.flags = parser.parseUnsignedNumber(2);
        this.decimals = parser.parseUnsignedNumber(1);
        var filler = parser.parseBuffer(2);
        if (filler[0] !== 0 || filler[1] !== 0) {
          var err = new TypeError("Received invalid filler");
          err.code = "PARSER_INVALID_FILLER";
          throw err;
        }
        this.zeroFill = this.flags & 64 ? true : false;
        if (parser.reachedPacketEnd()) {
          return;
        }
        this.default = parser.parseLengthCodedString();
      } else {
        this.table = parser.parseLengthCodedString();
        this.name = parser.parseLengthCodedString();
        this.length = parser.parseUnsignedNumber(parser.parseUnsignedNumber(1));
        this.type = parser.parseUnsignedNumber(parser.parseUnsignedNumber(1));
      }
    };
    FieldPacket.prototype.write = function(writer) {
      if (this.protocol41) {
        writer.writeLengthCodedString(this.catalog);
        writer.writeLengthCodedString(this.db);
        writer.writeLengthCodedString(this.table);
        writer.writeLengthCodedString(this.orgTable);
        writer.writeLengthCodedString(this.name);
        writer.writeLengthCodedString(this.orgName);
        writer.writeLengthCodedNumber(12);
        writer.writeUnsignedNumber(2, this.charsetNr || 0);
        writer.writeUnsignedNumber(4, this.length || 0);
        writer.writeUnsignedNumber(1, this.type || 0);
        writer.writeUnsignedNumber(2, this.flags || 0);
        writer.writeUnsignedNumber(1, this.decimals || 0);
        writer.writeFiller(2);
        if (this.default !== void 0) {
          writer.writeLengthCodedString(this.default);
        }
      } else {
        writer.writeLengthCodedString(this.table);
        writer.writeLengthCodedString(this.name);
        writer.writeUnsignedNumber(1, 1);
        writer.writeUnsignedNumber(1, this.length);
        writer.writeUnsignedNumber(1, 1);
        writer.writeUnsignedNumber(1, this.type);
      }
    };
  }
});

// node_modules/mysql/lib/protocol/packets/HandshakeInitializationPacket.js
var require_HandshakeInitializationPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/HandshakeInitializationPacket.js"(exports, module) {
    init_react();
    var Buffer3 = require_safe_buffer().Buffer;
    var Client = require_client();
    module.exports = HandshakeInitializationPacket;
    function HandshakeInitializationPacket(options) {
      options = options || {};
      this.protocolVersion = options.protocolVersion;
      this.serverVersion = options.serverVersion;
      this.threadId = options.threadId;
      this.scrambleBuff1 = options.scrambleBuff1;
      this.filler1 = options.filler1;
      this.serverCapabilities1 = options.serverCapabilities1;
      this.serverLanguage = options.serverLanguage;
      this.serverStatus = options.serverStatus;
      this.serverCapabilities2 = options.serverCapabilities2;
      this.scrambleLength = options.scrambleLength;
      this.filler2 = options.filler2;
      this.scrambleBuff2 = options.scrambleBuff2;
      this.filler3 = options.filler3;
      this.pluginData = options.pluginData;
      this.protocol41 = options.protocol41;
      if (this.protocol41) {
        this.serverCapabilities1 |= Client.CLIENT_PROTOCOL_41;
      }
    }
    HandshakeInitializationPacket.prototype.parse = function(parser) {
      this.protocolVersion = parser.parseUnsignedNumber(1);
      this.serverVersion = parser.parseNullTerminatedString();
      this.threadId = parser.parseUnsignedNumber(4);
      this.scrambleBuff1 = parser.parseBuffer(8);
      this.filler1 = parser.parseFiller(1);
      this.serverCapabilities1 = parser.parseUnsignedNumber(2);
      this.serverLanguage = parser.parseUnsignedNumber(1);
      this.serverStatus = parser.parseUnsignedNumber(2);
      this.protocol41 = (this.serverCapabilities1 & 1 << 9) > 0;
      if (this.protocol41) {
        this.serverCapabilities2 = parser.parseUnsignedNumber(2);
        this.scrambleLength = parser.parseUnsignedNumber(1);
        this.filler2 = parser.parseFiller(10);
        this.scrambleBuff2 = parser.parseBuffer(12);
        this.filler3 = parser.parseFiller(1);
      } else {
        this.filler2 = parser.parseFiller(13);
      }
      if (parser.reachedPacketEnd()) {
        return;
      }
      this.pluginData = parser.parsePacketTerminatedString();
      var lastChar = this.pluginData.length - 1;
      if (this.pluginData[lastChar] === "\0") {
        this.pluginData = this.pluginData.substr(0, lastChar);
      }
    };
    HandshakeInitializationPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, this.protocolVersion);
      writer.writeNullTerminatedString(this.serverVersion);
      writer.writeUnsignedNumber(4, this.threadId);
      writer.writeBuffer(this.scrambleBuff1);
      writer.writeFiller(1);
      writer.writeUnsignedNumber(2, this.serverCapabilities1);
      writer.writeUnsignedNumber(1, this.serverLanguage);
      writer.writeUnsignedNumber(2, this.serverStatus);
      if (this.protocol41) {
        writer.writeUnsignedNumber(2, this.serverCapabilities2);
        writer.writeUnsignedNumber(1, this.scrambleLength);
        writer.writeFiller(10);
      }
      writer.writeNullTerminatedBuffer(this.scrambleBuff2);
      if (this.pluginData !== void 0) {
        writer.writeNullTerminatedString(this.pluginData);
      }
    };
    HandshakeInitializationPacket.prototype.scrambleBuff = function() {
      var buffer = null;
      if (typeof this.scrambleBuff2 === "undefined") {
        buffer = Buffer3.from(this.scrambleBuff1);
      } else {
        buffer = Buffer3.allocUnsafe(this.scrambleBuff1.length + this.scrambleBuff2.length);
        this.scrambleBuff1.copy(buffer, 0);
        this.scrambleBuff2.copy(buffer, this.scrambleBuff1.length);
      }
      return buffer;
    };
  }
});

// node_modules/mysql/lib/protocol/packets/LocalDataFilePacket.js
var require_LocalDataFilePacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/LocalDataFilePacket.js"(exports, module) {
    init_react();
    module.exports = LocalDataFilePacket;
    function LocalDataFilePacket(data) {
      this.data = data;
    }
    LocalDataFilePacket.prototype.write = function(writer) {
      writer.writeBuffer(this.data);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/LocalInfileRequestPacket.js
var require_LocalInfileRequestPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/LocalInfileRequestPacket.js"(exports, module) {
    init_react();
    module.exports = LocalInfileRequestPacket;
    function LocalInfileRequestPacket(options) {
      options = options || {};
      this.filename = options.filename;
    }
    LocalInfileRequestPacket.prototype.parse = function parse3(parser) {
      if (parser.parseLengthCodedNumber() !== null) {
        var err = new TypeError("Received invalid field length");
        err.code = "PARSER_INVALID_FIELD_LENGTH";
        throw err;
      }
      this.filename = parser.parsePacketTerminatedString();
    };
    LocalInfileRequestPacket.prototype.write = function write3(writer) {
      writer.writeLengthCodedNumber(null);
      writer.writeString(this.filename);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/OkPacket.js
var require_OkPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/OkPacket.js"(exports, module) {
    init_react();
    var ER_UPDATE_INFO_REGEXP = /^[^:0-9]+: [0-9]+[^:0-9]+: ([0-9]+)[^:0-9]+: [0-9]+[^:0-9]*$/;
    module.exports = OkPacket;
    function OkPacket(options) {
      options = options || {};
      this.fieldCount = void 0;
      this.affectedRows = void 0;
      this.insertId = void 0;
      this.serverStatus = void 0;
      this.warningCount = void 0;
      this.message = void 0;
      this.protocol41 = options.protocol41;
    }
    OkPacket.prototype.parse = function(parser) {
      this.fieldCount = parser.parseUnsignedNumber(1);
      this.affectedRows = parser.parseLengthCodedNumber();
      this.insertId = parser.parseLengthCodedNumber();
      if (this.protocol41) {
        this.serverStatus = parser.parseUnsignedNumber(2);
        this.warningCount = parser.parseUnsignedNumber(2);
      }
      this.message = parser.parsePacketTerminatedString();
      this.changedRows = 0;
      var m = ER_UPDATE_INFO_REGEXP.exec(this.message);
      if (m !== null) {
        this.changedRows = parseInt(m[1], 10);
      }
    };
    OkPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, 0);
      writer.writeLengthCodedNumber(this.affectedRows || 0);
      writer.writeLengthCodedNumber(this.insertId || 0);
      if (this.protocol41) {
        writer.writeUnsignedNumber(2, this.serverStatus || 0);
        writer.writeUnsignedNumber(2, this.warningCount || 0);
      }
      writer.writeString(this.message);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/OldPasswordPacket.js
var require_OldPasswordPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/OldPasswordPacket.js"(exports, module) {
    init_react();
    module.exports = OldPasswordPacket;
    function OldPasswordPacket(options) {
      options = options || {};
      this.scrambleBuff = options.scrambleBuff;
    }
    OldPasswordPacket.prototype.parse = function(parser) {
      this.scrambleBuff = parser.parsePacketTerminatedBuffer();
    };
    OldPasswordPacket.prototype.write = function(writer) {
      writer.writeBuffer(this.scrambleBuff);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/ResultSetHeaderPacket.js
var require_ResultSetHeaderPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/ResultSetHeaderPacket.js"(exports, module) {
    init_react();
    module.exports = ResultSetHeaderPacket;
    function ResultSetHeaderPacket(options) {
      options = options || {};
      this.fieldCount = options.fieldCount;
    }
    ResultSetHeaderPacket.prototype.parse = function(parser) {
      this.fieldCount = parser.parseLengthCodedNumber();
    };
    ResultSetHeaderPacket.prototype.write = function(writer) {
      writer.writeLengthCodedNumber(this.fieldCount);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/RowDataPacket.js
var require_RowDataPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/RowDataPacket.js"(exports, module) {
    init_react();
    var Types = require_types();
    var Charsets = require_charsets();
    var Field = require_Field();
    var IEEE_754_BINARY_64_PRECISION = Math.pow(2, 53);
    module.exports = RowDataPacket;
    function RowDataPacket() {
    }
    Object.defineProperty(RowDataPacket.prototype, "parse", {
      configurable: true,
      enumerable: false,
      value: parse3
    });
    Object.defineProperty(RowDataPacket.prototype, "_typeCast", {
      configurable: true,
      enumerable: false,
      value: typeCast
    });
    function parse3(parser, fieldPackets, typeCast2, nestTables, connection) {
      var self2 = this;
      var next = function() {
        return self2._typeCast(fieldPacket, parser, connection.config.timezone, connection.config.supportBigNumbers, connection.config.bigNumberStrings, connection.config.dateStrings);
      };
      for (var i = 0; i < fieldPackets.length; i++) {
        var fieldPacket = fieldPackets[i];
        var value;
        if (typeof typeCast2 === "function") {
          value = typeCast2.apply(connection, [new Field({ packet: fieldPacket, parser }), next]);
        } else {
          value = typeCast2 ? this._typeCast(fieldPacket, parser, connection.config.timezone, connection.config.supportBigNumbers, connection.config.bigNumberStrings, connection.config.dateStrings) : fieldPacket.charsetNr === Charsets.BINARY ? parser.parseLengthCodedBuffer() : parser.parseLengthCodedString();
        }
        if (typeof nestTables === "string" && nestTables.length) {
          this[fieldPacket.table + nestTables + fieldPacket.name] = value;
        } else if (nestTables) {
          this[fieldPacket.table] = this[fieldPacket.table] || {};
          this[fieldPacket.table][fieldPacket.name] = value;
        } else {
          this[fieldPacket.name] = value;
        }
      }
    }
    function typeCast(field, parser, timeZone, supportBigNumbers, bigNumberStrings, dateStrings) {
      var numberString;
      switch (field.type) {
        case Types.TIMESTAMP:
        case Types.TIMESTAMP2:
        case Types.DATE:
        case Types.DATETIME:
        case Types.DATETIME2:
        case Types.NEWDATE:
          var dateString = parser.parseLengthCodedString();
          if (typeMatch(field.type, dateStrings)) {
            return dateString;
          }
          if (dateString === null) {
            return null;
          }
          var originalString = dateString;
          if (field.type === Types.DATE) {
            dateString += " 00:00:00";
          }
          if (timeZone !== "local") {
            dateString += " " + timeZone;
          }
          var dt = new Date(dateString);
          if (isNaN(dt.getTime())) {
            return originalString;
          }
          return dt;
        case Types.TINY:
        case Types.SHORT:
        case Types.LONG:
        case Types.INT24:
        case Types.YEAR:
        case Types.FLOAT:
        case Types.DOUBLE:
          numberString = parser.parseLengthCodedString();
          return numberString === null || field.zeroFill && numberString[0] === "0" ? numberString : Number(numberString);
        case Types.NEWDECIMAL:
        case Types.LONGLONG:
          numberString = parser.parseLengthCodedString();
          return numberString === null || field.zeroFill && numberString[0] === "0" ? numberString : supportBigNumbers && (bigNumberStrings || Number(numberString) >= IEEE_754_BINARY_64_PRECISION || Number(numberString) <= -IEEE_754_BINARY_64_PRECISION) ? numberString : Number(numberString);
        case Types.BIT:
          return parser.parseLengthCodedBuffer();
        case Types.STRING:
        case Types.VAR_STRING:
        case Types.TINY_BLOB:
        case Types.MEDIUM_BLOB:
        case Types.LONG_BLOB:
        case Types.BLOB:
          return field.charsetNr === Charsets.BINARY ? parser.parseLengthCodedBuffer() : parser.parseLengthCodedString();
        case Types.GEOMETRY:
          return parser.parseGeometryValue();
        default:
          return parser.parseLengthCodedString();
      }
    }
    function typeMatch(type, list) {
      if (Array.isArray(list)) {
        return list.indexOf(Types[type]) !== -1;
      } else {
        return Boolean(list);
      }
    }
  }
});

// node_modules/mysql/lib/protocol/packets/SSLRequestPacket.js
var require_SSLRequestPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/SSLRequestPacket.js"(exports, module) {
    init_react();
    var ClientConstants = require_client();
    module.exports = SSLRequestPacket;
    function SSLRequestPacket(options) {
      options = options || {};
      this.clientFlags = options.clientFlags | ClientConstants.CLIENT_SSL;
      this.maxPacketSize = options.maxPacketSize;
      this.charsetNumber = options.charsetNumber;
    }
    SSLRequestPacket.prototype.parse = function(parser) {
      this.clientFlags = parser.parseUnsignedNumber(4);
      this.maxPacketSize = parser.parseUnsignedNumber(4);
      this.charsetNumber = parser.parseUnsignedNumber(1);
    };
    SSLRequestPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(4, this.clientFlags);
      writer.writeUnsignedNumber(4, this.maxPacketSize);
      writer.writeUnsignedNumber(1, this.charsetNumber);
      writer.writeFiller(23);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/StatisticsPacket.js
var require_StatisticsPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/StatisticsPacket.js"(exports, module) {
    init_react();
    module.exports = StatisticsPacket;
    function StatisticsPacket() {
      this.message = void 0;
    }
    StatisticsPacket.prototype.parse = function(parser) {
      this.message = parser.parsePacketTerminatedString();
      var items = this.message.split(/\s\s/);
      for (var i = 0; i < items.length; i++) {
        var m = items[i].match(/^(.+)\:\s+(.+)$/);
        if (m !== null) {
          this[m[1].toLowerCase().replace(/\s/g, "_")] = Number(m[2]);
        }
      }
    };
    StatisticsPacket.prototype.write = function(writer) {
      writer.writeString(this.message);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/UseOldPasswordPacket.js
var require_UseOldPasswordPacket = __commonJS({
  "node_modules/mysql/lib/protocol/packets/UseOldPasswordPacket.js"(exports, module) {
    init_react();
    module.exports = UseOldPasswordPacket;
    function UseOldPasswordPacket(options) {
      options = options || {};
      this.firstByte = options.firstByte || 254;
    }
    UseOldPasswordPacket.prototype.parse = function(parser) {
      this.firstByte = parser.parseUnsignedNumber(1);
    };
    UseOldPasswordPacket.prototype.write = function(writer) {
      writer.writeUnsignedNumber(1, this.firstByte);
    };
  }
});

// node_modules/mysql/lib/protocol/packets/index.js
var require_packets = __commonJS({
  "node_modules/mysql/lib/protocol/packets/index.js"(exports) {
    init_react();
    exports.AuthSwitchRequestPacket = require_AuthSwitchRequestPacket();
    exports.AuthSwitchResponsePacket = require_AuthSwitchResponsePacket();
    exports.ClientAuthenticationPacket = require_ClientAuthenticationPacket();
    exports.ComChangeUserPacket = require_ComChangeUserPacket();
    exports.ComPingPacket = require_ComPingPacket();
    exports.ComQueryPacket = require_ComQueryPacket();
    exports.ComQuitPacket = require_ComQuitPacket();
    exports.ComStatisticsPacket = require_ComStatisticsPacket();
    exports.EmptyPacket = require_EmptyPacket();
    exports.EofPacket = require_EofPacket();
    exports.ErrorPacket = require_ErrorPacket();
    exports.Field = require_Field();
    exports.FieldPacket = require_FieldPacket();
    exports.HandshakeInitializationPacket = require_HandshakeInitializationPacket();
    exports.LocalDataFilePacket = require_LocalDataFilePacket();
    exports.LocalInfileRequestPacket = require_LocalInfileRequestPacket();
    exports.OkPacket = require_OkPacket();
    exports.OldPasswordPacket = require_OldPasswordPacket();
    exports.ResultSetHeaderPacket = require_ResultSetHeaderPacket();
    exports.RowDataPacket = require_RowDataPacket();
    exports.SSLRequestPacket = require_SSLRequestPacket();
    exports.StatisticsPacket = require_StatisticsPacket();
    exports.UseOldPasswordPacket = require_UseOldPasswordPacket();
  }
});

// node_modules/mysql/lib/protocol/constants/errors.js
var require_errors = __commonJS({
  "node_modules/mysql/lib/protocol/constants/errors.js"(exports) {
    init_react();
    exports.EE_CANTCREATEFILE = 1;
    exports.EE_READ = 2;
    exports.EE_WRITE = 3;
    exports.EE_BADCLOSE = 4;
    exports.EE_OUTOFMEMORY = 5;
    exports.EE_DELETE = 6;
    exports.EE_LINK = 7;
    exports.EE_EOFERR = 9;
    exports.EE_CANTLOCK = 10;
    exports.EE_CANTUNLOCK = 11;
    exports.EE_DIR = 12;
    exports.EE_STAT = 13;
    exports.EE_CANT_CHSIZE = 14;
    exports.EE_CANT_OPEN_STREAM = 15;
    exports.EE_GETWD = 16;
    exports.EE_SETWD = 17;
    exports.EE_LINK_WARNING = 18;
    exports.EE_OPEN_WARNING = 19;
    exports.EE_DISK_FULL = 20;
    exports.EE_CANT_MKDIR = 21;
    exports.EE_UNKNOWN_CHARSET = 22;
    exports.EE_OUT_OF_FILERESOURCES = 23;
    exports.EE_CANT_READLINK = 24;
    exports.EE_CANT_SYMLINK = 25;
    exports.EE_REALPATH = 26;
    exports.EE_SYNC = 27;
    exports.EE_UNKNOWN_COLLATION = 28;
    exports.EE_FILENOTFOUND = 29;
    exports.EE_FILE_NOT_CLOSED = 30;
    exports.EE_CHANGE_OWNERSHIP = 31;
    exports.EE_CHANGE_PERMISSIONS = 32;
    exports.EE_CANT_SEEK = 33;
    exports.EE_CAPACITY_EXCEEDED = 34;
    exports.HA_ERR_KEY_NOT_FOUND = 120;
    exports.HA_ERR_FOUND_DUPP_KEY = 121;
    exports.HA_ERR_INTERNAL_ERROR = 122;
    exports.HA_ERR_RECORD_CHANGED = 123;
    exports.HA_ERR_WRONG_INDEX = 124;
    exports.HA_ERR_CRASHED = 126;
    exports.HA_ERR_WRONG_IN_RECORD = 127;
    exports.HA_ERR_OUT_OF_MEM = 128;
    exports.HA_ERR_NOT_A_TABLE = 130;
    exports.HA_ERR_WRONG_COMMAND = 131;
    exports.HA_ERR_OLD_FILE = 132;
    exports.HA_ERR_NO_ACTIVE_RECORD = 133;
    exports.HA_ERR_RECORD_DELETED = 134;
    exports.HA_ERR_RECORD_FILE_FULL = 135;
    exports.HA_ERR_INDEX_FILE_FULL = 136;
    exports.HA_ERR_END_OF_FILE = 137;
    exports.HA_ERR_UNSUPPORTED = 138;
    exports.HA_ERR_TOO_BIG_ROW = 139;
    exports.HA_WRONG_CREATE_OPTION = 140;
    exports.HA_ERR_FOUND_DUPP_UNIQUE = 141;
    exports.HA_ERR_UNKNOWN_CHARSET = 142;
    exports.HA_ERR_WRONG_MRG_TABLE_DEF = 143;
    exports.HA_ERR_CRASHED_ON_REPAIR = 144;
    exports.HA_ERR_CRASHED_ON_USAGE = 145;
    exports.HA_ERR_LOCK_WAIT_TIMEOUT = 146;
    exports.HA_ERR_LOCK_TABLE_FULL = 147;
    exports.HA_ERR_READ_ONLY_TRANSACTION = 148;
    exports.HA_ERR_LOCK_DEADLOCK = 149;
    exports.HA_ERR_CANNOT_ADD_FOREIGN = 150;
    exports.HA_ERR_NO_REFERENCED_ROW = 151;
    exports.HA_ERR_ROW_IS_REFERENCED = 152;
    exports.HA_ERR_NO_SAVEPOINT = 153;
    exports.HA_ERR_NON_UNIQUE_BLOCK_SIZE = 154;
    exports.HA_ERR_NO_SUCH_TABLE = 155;
    exports.HA_ERR_TABLE_EXIST = 156;
    exports.HA_ERR_NO_CONNECTION = 157;
    exports.HA_ERR_NULL_IN_SPATIAL = 158;
    exports.HA_ERR_TABLE_DEF_CHANGED = 159;
    exports.HA_ERR_NO_PARTITION_FOUND = 160;
    exports.HA_ERR_RBR_LOGGING_FAILED = 161;
    exports.HA_ERR_DROP_INDEX_FK = 162;
    exports.HA_ERR_FOREIGN_DUPLICATE_KEY = 163;
    exports.HA_ERR_TABLE_NEEDS_UPGRADE = 164;
    exports.HA_ERR_TABLE_READONLY = 165;
    exports.HA_ERR_AUTOINC_READ_FAILED = 166;
    exports.HA_ERR_AUTOINC_ERANGE = 167;
    exports.HA_ERR_GENERIC = 168;
    exports.HA_ERR_RECORD_IS_THE_SAME = 169;
    exports.HA_ERR_LOGGING_IMPOSSIBLE = 170;
    exports.HA_ERR_CORRUPT_EVENT = 171;
    exports.HA_ERR_NEW_FILE = 172;
    exports.HA_ERR_ROWS_EVENT_APPLY = 173;
    exports.HA_ERR_INITIALIZATION = 174;
    exports.HA_ERR_FILE_TOO_SHORT = 175;
    exports.HA_ERR_WRONG_CRC = 176;
    exports.HA_ERR_TOO_MANY_CONCURRENT_TRXS = 177;
    exports.HA_ERR_NOT_IN_LOCK_PARTITIONS = 178;
    exports.HA_ERR_INDEX_COL_TOO_LONG = 179;
    exports.HA_ERR_INDEX_CORRUPT = 180;
    exports.HA_ERR_UNDO_REC_TOO_BIG = 181;
    exports.HA_FTS_INVALID_DOCID = 182;
    exports.HA_ERR_TABLE_IN_FK_CHECK = 183;
    exports.HA_ERR_TABLESPACE_EXISTS = 184;
    exports.HA_ERR_TOO_MANY_FIELDS = 185;
    exports.HA_ERR_ROW_IN_WRONG_PARTITION = 186;
    exports.HA_ERR_INNODB_READ_ONLY = 187;
    exports.HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT = 188;
    exports.HA_ERR_TEMP_FILE_WRITE_FAILURE = 189;
    exports.HA_ERR_INNODB_FORCED_RECOVERY = 190;
    exports.HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE = 191;
    exports.HA_ERR_FK_DEPTH_EXCEEDED = 192;
    exports.HA_MISSING_CREATE_OPTION = 193;
    exports.HA_ERR_SE_OUT_OF_MEMORY = 194;
    exports.HA_ERR_TABLE_CORRUPT = 195;
    exports.HA_ERR_QUERY_INTERRUPTED = 196;
    exports.HA_ERR_TABLESPACE_MISSING = 197;
    exports.HA_ERR_TABLESPACE_IS_NOT_EMPTY = 198;
    exports.HA_ERR_WRONG_FILE_NAME = 199;
    exports.HA_ERR_NOT_ALLOWED_COMMAND = 200;
    exports.HA_ERR_COMPUTE_FAILED = 201;
    exports.ER_HASHCHK = 1e3;
    exports.ER_NISAMCHK = 1001;
    exports.ER_NO = 1002;
    exports.ER_YES = 1003;
    exports.ER_CANT_CREATE_FILE = 1004;
    exports.ER_CANT_CREATE_TABLE = 1005;
    exports.ER_CANT_CREATE_DB = 1006;
    exports.ER_DB_CREATE_EXISTS = 1007;
    exports.ER_DB_DROP_EXISTS = 1008;
    exports.ER_DB_DROP_DELETE = 1009;
    exports.ER_DB_DROP_RMDIR = 1010;
    exports.ER_CANT_DELETE_FILE = 1011;
    exports.ER_CANT_FIND_SYSTEM_REC = 1012;
    exports.ER_CANT_GET_STAT = 1013;
    exports.ER_CANT_GET_WD = 1014;
    exports.ER_CANT_LOCK = 1015;
    exports.ER_CANT_OPEN_FILE = 1016;
    exports.ER_FILE_NOT_FOUND = 1017;
    exports.ER_CANT_READ_DIR = 1018;
    exports.ER_CANT_SET_WD = 1019;
    exports.ER_CHECKREAD = 1020;
    exports.ER_DISK_FULL = 1021;
    exports.ER_DUP_KEY = 1022;
    exports.ER_ERROR_ON_CLOSE = 1023;
    exports.ER_ERROR_ON_READ = 1024;
    exports.ER_ERROR_ON_RENAME = 1025;
    exports.ER_ERROR_ON_WRITE = 1026;
    exports.ER_FILE_USED = 1027;
    exports.ER_FILSORT_ABORT = 1028;
    exports.ER_FORM_NOT_FOUND = 1029;
    exports.ER_GET_ERRNO = 1030;
    exports.ER_ILLEGAL_HA = 1031;
    exports.ER_KEY_NOT_FOUND = 1032;
    exports.ER_NOT_FORM_FILE = 1033;
    exports.ER_NOT_KEYFILE = 1034;
    exports.ER_OLD_KEYFILE = 1035;
    exports.ER_OPEN_AS_READONLY = 1036;
    exports.ER_OUTOFMEMORY = 1037;
    exports.ER_OUT_OF_SORTMEMORY = 1038;
    exports.ER_UNEXPECTED_EOF = 1039;
    exports.ER_CON_COUNT_ERROR = 1040;
    exports.ER_OUT_OF_RESOURCES = 1041;
    exports.ER_BAD_HOST_ERROR = 1042;
    exports.ER_HANDSHAKE_ERROR = 1043;
    exports.ER_DBACCESS_DENIED_ERROR = 1044;
    exports.ER_ACCESS_DENIED_ERROR = 1045;
    exports.ER_NO_DB_ERROR = 1046;
    exports.ER_UNKNOWN_COM_ERROR = 1047;
    exports.ER_BAD_NULL_ERROR = 1048;
    exports.ER_BAD_DB_ERROR = 1049;
    exports.ER_TABLE_EXISTS_ERROR = 1050;
    exports.ER_BAD_TABLE_ERROR = 1051;
    exports.ER_NON_UNIQ_ERROR = 1052;
    exports.ER_SERVER_SHUTDOWN = 1053;
    exports.ER_BAD_FIELD_ERROR = 1054;
    exports.ER_WRONG_FIELD_WITH_GROUP = 1055;
    exports.ER_WRONG_GROUP_FIELD = 1056;
    exports.ER_WRONG_SUM_SELECT = 1057;
    exports.ER_WRONG_VALUE_COUNT = 1058;
    exports.ER_TOO_LONG_IDENT = 1059;
    exports.ER_DUP_FIELDNAME = 1060;
    exports.ER_DUP_KEYNAME = 1061;
    exports.ER_DUP_ENTRY = 1062;
    exports.ER_WRONG_FIELD_SPEC = 1063;
    exports.ER_PARSE_ERROR = 1064;
    exports.ER_EMPTY_QUERY = 1065;
    exports.ER_NONUNIQ_TABLE = 1066;
    exports.ER_INVALID_DEFAULT = 1067;
    exports.ER_MULTIPLE_PRI_KEY = 1068;
    exports.ER_TOO_MANY_KEYS = 1069;
    exports.ER_TOO_MANY_KEY_PARTS = 1070;
    exports.ER_TOO_LONG_KEY = 1071;
    exports.ER_KEY_COLUMN_DOES_NOT_EXITS = 1072;
    exports.ER_BLOB_USED_AS_KEY = 1073;
    exports.ER_TOO_BIG_FIELDLENGTH = 1074;
    exports.ER_WRONG_AUTO_KEY = 1075;
    exports.ER_READY = 1076;
    exports.ER_NORMAL_SHUTDOWN = 1077;
    exports.ER_GOT_SIGNAL = 1078;
    exports.ER_SHUTDOWN_COMPLETE = 1079;
    exports.ER_FORCING_CLOSE = 1080;
    exports.ER_IPSOCK_ERROR = 1081;
    exports.ER_NO_SUCH_INDEX = 1082;
    exports.ER_WRONG_FIELD_TERMINATORS = 1083;
    exports.ER_BLOBS_AND_NO_TERMINATED = 1084;
    exports.ER_TEXTFILE_NOT_READABLE = 1085;
    exports.ER_FILE_EXISTS_ERROR = 1086;
    exports.ER_LOAD_INFO = 1087;
    exports.ER_ALTER_INFO = 1088;
    exports.ER_WRONG_SUB_KEY = 1089;
    exports.ER_CANT_REMOVE_ALL_FIELDS = 1090;
    exports.ER_CANT_DROP_FIELD_OR_KEY = 1091;
    exports.ER_INSERT_INFO = 1092;
    exports.ER_UPDATE_TABLE_USED = 1093;
    exports.ER_NO_SUCH_THREAD = 1094;
    exports.ER_KILL_DENIED_ERROR = 1095;
    exports.ER_NO_TABLES_USED = 1096;
    exports.ER_TOO_BIG_SET = 1097;
    exports.ER_NO_UNIQUE_LOGFILE = 1098;
    exports.ER_TABLE_NOT_LOCKED_FOR_WRITE = 1099;
    exports.ER_TABLE_NOT_LOCKED = 1100;
    exports.ER_BLOB_CANT_HAVE_DEFAULT = 1101;
    exports.ER_WRONG_DB_NAME = 1102;
    exports.ER_WRONG_TABLE_NAME = 1103;
    exports.ER_TOO_BIG_SELECT = 1104;
    exports.ER_UNKNOWN_ERROR = 1105;
    exports.ER_UNKNOWN_PROCEDURE = 1106;
    exports.ER_WRONG_PARAMCOUNT_TO_PROCEDURE = 1107;
    exports.ER_WRONG_PARAMETERS_TO_PROCEDURE = 1108;
    exports.ER_UNKNOWN_TABLE = 1109;
    exports.ER_FIELD_SPECIFIED_TWICE = 1110;
    exports.ER_INVALID_GROUP_FUNC_USE = 1111;
    exports.ER_UNSUPPORTED_EXTENSION = 1112;
    exports.ER_TABLE_MUST_HAVE_COLUMNS = 1113;
    exports.ER_RECORD_FILE_FULL = 1114;
    exports.ER_UNKNOWN_CHARACTER_SET = 1115;
    exports.ER_TOO_MANY_TABLES = 1116;
    exports.ER_TOO_MANY_FIELDS = 1117;
    exports.ER_TOO_BIG_ROWSIZE = 1118;
    exports.ER_STACK_OVERRUN = 1119;
    exports.ER_WRONG_OUTER_JOIN = 1120;
    exports.ER_NULL_COLUMN_IN_INDEX = 1121;
    exports.ER_CANT_FIND_UDF = 1122;
    exports.ER_CANT_INITIALIZE_UDF = 1123;
    exports.ER_UDF_NO_PATHS = 1124;
    exports.ER_UDF_EXISTS = 1125;
    exports.ER_CANT_OPEN_LIBRARY = 1126;
    exports.ER_CANT_FIND_DL_ENTRY = 1127;
    exports.ER_FUNCTION_NOT_DEFINED = 1128;
    exports.ER_HOST_IS_BLOCKED = 1129;
    exports.ER_HOST_NOT_PRIVILEGED = 1130;
    exports.ER_PASSWORD_ANONYMOUS_USER = 1131;
    exports.ER_PASSWORD_NOT_ALLOWED = 1132;
    exports.ER_PASSWORD_NO_MATCH = 1133;
    exports.ER_UPDATE_INFO = 1134;
    exports.ER_CANT_CREATE_THREAD = 1135;
    exports.ER_WRONG_VALUE_COUNT_ON_ROW = 1136;
    exports.ER_CANT_REOPEN_TABLE = 1137;
    exports.ER_INVALID_USE_OF_NULL = 1138;
    exports.ER_REGEXP_ERROR = 1139;
    exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS = 1140;
    exports.ER_NONEXISTING_GRANT = 1141;
    exports.ER_TABLEACCESS_DENIED_ERROR = 1142;
    exports.ER_COLUMNACCESS_DENIED_ERROR = 1143;
    exports.ER_ILLEGAL_GRANT_FOR_TABLE = 1144;
    exports.ER_GRANT_WRONG_HOST_OR_USER = 1145;
    exports.ER_NO_SUCH_TABLE = 1146;
    exports.ER_NONEXISTING_TABLE_GRANT = 1147;
    exports.ER_NOT_ALLOWED_COMMAND = 1148;
    exports.ER_SYNTAX_ERROR = 1149;
    exports.ER_DELAYED_CANT_CHANGE_LOCK = 1150;
    exports.ER_TOO_MANY_DELAYED_THREADS = 1151;
    exports.ER_ABORTING_CONNECTION = 1152;
    exports.ER_NET_PACKET_TOO_LARGE = 1153;
    exports.ER_NET_READ_ERROR_FROM_PIPE = 1154;
    exports.ER_NET_FCNTL_ERROR = 1155;
    exports.ER_NET_PACKETS_OUT_OF_ORDER = 1156;
    exports.ER_NET_UNCOMPRESS_ERROR = 1157;
    exports.ER_NET_READ_ERROR = 1158;
    exports.ER_NET_READ_INTERRUPTED = 1159;
    exports.ER_NET_ERROR_ON_WRITE = 1160;
    exports.ER_NET_WRITE_INTERRUPTED = 1161;
    exports.ER_TOO_LONG_STRING = 1162;
    exports.ER_TABLE_CANT_HANDLE_BLOB = 1163;
    exports.ER_TABLE_CANT_HANDLE_AUTO_INCREMENT = 1164;
    exports.ER_DELAYED_INSERT_TABLE_LOCKED = 1165;
    exports.ER_WRONG_COLUMN_NAME = 1166;
    exports.ER_WRONG_KEY_COLUMN = 1167;
    exports.ER_WRONG_MRG_TABLE = 1168;
    exports.ER_DUP_UNIQUE = 1169;
    exports.ER_BLOB_KEY_WITHOUT_LENGTH = 1170;
    exports.ER_PRIMARY_CANT_HAVE_NULL = 1171;
    exports.ER_TOO_MANY_ROWS = 1172;
    exports.ER_REQUIRES_PRIMARY_KEY = 1173;
    exports.ER_NO_RAID_COMPILED = 1174;
    exports.ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE = 1175;
    exports.ER_KEY_DOES_NOT_EXITS = 1176;
    exports.ER_CHECK_NO_SUCH_TABLE = 1177;
    exports.ER_CHECK_NOT_IMPLEMENTED = 1178;
    exports.ER_CANT_DO_THIS_DURING_AN_TRANSACTION = 1179;
    exports.ER_ERROR_DURING_COMMIT = 1180;
    exports.ER_ERROR_DURING_ROLLBACK = 1181;
    exports.ER_ERROR_DURING_FLUSH_LOGS = 1182;
    exports.ER_ERROR_DURING_CHECKPOINT = 1183;
    exports.ER_NEW_ABORTING_CONNECTION = 1184;
    exports.ER_DUMP_NOT_IMPLEMENTED = 1185;
    exports.ER_FLUSH_MASTER_BINLOG_CLOSED = 1186;
    exports.ER_INDEX_REBUILD = 1187;
    exports.ER_MASTER = 1188;
    exports.ER_MASTER_NET_READ = 1189;
    exports.ER_MASTER_NET_WRITE = 1190;
    exports.ER_FT_MATCHING_KEY_NOT_FOUND = 1191;
    exports.ER_LOCK_OR_ACTIVE_TRANSACTION = 1192;
    exports.ER_UNKNOWN_SYSTEM_VARIABLE = 1193;
    exports.ER_CRASHED_ON_USAGE = 1194;
    exports.ER_CRASHED_ON_REPAIR = 1195;
    exports.ER_WARNING_NOT_COMPLETE_ROLLBACK = 1196;
    exports.ER_TRANS_CACHE_FULL = 1197;
    exports.ER_SLAVE_MUST_STOP = 1198;
    exports.ER_SLAVE_NOT_RUNNING = 1199;
    exports.ER_BAD_SLAVE = 1200;
    exports.ER_MASTER_INFO = 1201;
    exports.ER_SLAVE_THREAD = 1202;
    exports.ER_TOO_MANY_USER_CONNECTIONS = 1203;
    exports.ER_SET_CONSTANTS_ONLY = 1204;
    exports.ER_LOCK_WAIT_TIMEOUT = 1205;
    exports.ER_LOCK_TABLE_FULL = 1206;
    exports.ER_READ_ONLY_TRANSACTION = 1207;
    exports.ER_DROP_DB_WITH_READ_LOCK = 1208;
    exports.ER_CREATE_DB_WITH_READ_LOCK = 1209;
    exports.ER_WRONG_ARGUMENTS = 1210;
    exports.ER_NO_PERMISSION_TO_CREATE_USER = 1211;
    exports.ER_UNION_TABLES_IN_DIFFERENT_DIR = 1212;
    exports.ER_LOCK_DEADLOCK = 1213;
    exports.ER_TABLE_CANT_HANDLE_FT = 1214;
    exports.ER_CANNOT_ADD_FOREIGN = 1215;
    exports.ER_NO_REFERENCED_ROW = 1216;
    exports.ER_ROW_IS_REFERENCED = 1217;
    exports.ER_CONNECT_TO_MASTER = 1218;
    exports.ER_QUERY_ON_MASTER = 1219;
    exports.ER_ERROR_WHEN_EXECUTING_COMMAND = 1220;
    exports.ER_WRONG_USAGE = 1221;
    exports.ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT = 1222;
    exports.ER_CANT_UPDATE_WITH_READLOCK = 1223;
    exports.ER_MIXING_NOT_ALLOWED = 1224;
    exports.ER_DUP_ARGUMENT = 1225;
    exports.ER_USER_LIMIT_REACHED = 1226;
    exports.ER_SPECIFIC_ACCESS_DENIED_ERROR = 1227;
    exports.ER_LOCAL_VARIABLE = 1228;
    exports.ER_GLOBAL_VARIABLE = 1229;
    exports.ER_NO_DEFAULT = 1230;
    exports.ER_WRONG_VALUE_FOR_VAR = 1231;
    exports.ER_WRONG_TYPE_FOR_VAR = 1232;
    exports.ER_VAR_CANT_BE_READ = 1233;
    exports.ER_CANT_USE_OPTION_HERE = 1234;
    exports.ER_NOT_SUPPORTED_YET = 1235;
    exports.ER_MASTER_FATAL_ERROR_READING_BINLOG = 1236;
    exports.ER_SLAVE_IGNORED_TABLE = 1237;
    exports.ER_INCORRECT_GLOBAL_LOCAL_VAR = 1238;
    exports.ER_WRONG_FK_DEF = 1239;
    exports.ER_KEY_REF_DO_NOT_MATCH_TABLE_REF = 1240;
    exports.ER_OPERAND_COLUMNS = 1241;
    exports.ER_SUBQUERY_NO_1_ROW = 1242;
    exports.ER_UNKNOWN_STMT_HANDLER = 1243;
    exports.ER_CORRUPT_HELP_DB = 1244;
    exports.ER_CYCLIC_REFERENCE = 1245;
    exports.ER_AUTO_CONVERT = 1246;
    exports.ER_ILLEGAL_REFERENCE = 1247;
    exports.ER_DERIVED_MUST_HAVE_ALIAS = 1248;
    exports.ER_SELECT_REDUCED = 1249;
    exports.ER_TABLENAME_NOT_ALLOWED_HERE = 1250;
    exports.ER_NOT_SUPPORTED_AUTH_MODE = 1251;
    exports.ER_SPATIAL_CANT_HAVE_NULL = 1252;
    exports.ER_COLLATION_CHARSET_MISMATCH = 1253;
    exports.ER_SLAVE_WAS_RUNNING = 1254;
    exports.ER_SLAVE_WAS_NOT_RUNNING = 1255;
    exports.ER_TOO_BIG_FOR_UNCOMPRESS = 1256;
    exports.ER_ZLIB_Z_MEM_ERROR = 1257;
    exports.ER_ZLIB_Z_BUF_ERROR = 1258;
    exports.ER_ZLIB_Z_DATA_ERROR = 1259;
    exports.ER_CUT_VALUE_GROUP_CONCAT = 1260;
    exports.ER_WARN_TOO_FEW_RECORDS = 1261;
    exports.ER_WARN_TOO_MANY_RECORDS = 1262;
    exports.ER_WARN_NULL_TO_NOTNULL = 1263;
    exports.ER_WARN_DATA_OUT_OF_RANGE = 1264;
    exports.WARN_DATA_TRUNCATED = 1265;
    exports.ER_WARN_USING_OTHER_HANDLER = 1266;
    exports.ER_CANT_AGGREGATE_2COLLATIONS = 1267;
    exports.ER_DROP_USER = 1268;
    exports.ER_REVOKE_GRANTS = 1269;
    exports.ER_CANT_AGGREGATE_3COLLATIONS = 1270;
    exports.ER_CANT_AGGREGATE_NCOLLATIONS = 1271;
    exports.ER_VARIABLE_IS_NOT_STRUCT = 1272;
    exports.ER_UNKNOWN_COLLATION = 1273;
    exports.ER_SLAVE_IGNORED_SSL_PARAMS = 1274;
    exports.ER_SERVER_IS_IN_SECURE_AUTH_MODE = 1275;
    exports.ER_WARN_FIELD_RESOLVED = 1276;
    exports.ER_BAD_SLAVE_UNTIL_COND = 1277;
    exports.ER_MISSING_SKIP_SLAVE = 1278;
    exports.ER_UNTIL_COND_IGNORED = 1279;
    exports.ER_WRONG_NAME_FOR_INDEX = 1280;
    exports.ER_WRONG_NAME_FOR_CATALOG = 1281;
    exports.ER_WARN_QC_RESIZE = 1282;
    exports.ER_BAD_FT_COLUMN = 1283;
    exports.ER_UNKNOWN_KEY_CACHE = 1284;
    exports.ER_WARN_HOSTNAME_WONT_WORK = 1285;
    exports.ER_UNKNOWN_STORAGE_ENGINE = 1286;
    exports.ER_WARN_DEPRECATED_SYNTAX = 1287;
    exports.ER_NON_UPDATABLE_TABLE = 1288;
    exports.ER_FEATURE_DISABLED = 1289;
    exports.ER_OPTION_PREVENTS_STATEMENT = 1290;
    exports.ER_DUPLICATED_VALUE_IN_TYPE = 1291;
    exports.ER_TRUNCATED_WRONG_VALUE = 1292;
    exports.ER_TOO_MUCH_AUTO_TIMESTAMP_COLS = 1293;
    exports.ER_INVALID_ON_UPDATE = 1294;
    exports.ER_UNSUPPORTED_PS = 1295;
    exports.ER_GET_ERRMSG = 1296;
    exports.ER_GET_TEMPORARY_ERRMSG = 1297;
    exports.ER_UNKNOWN_TIME_ZONE = 1298;
    exports.ER_WARN_INVALID_TIMESTAMP = 1299;
    exports.ER_INVALID_CHARACTER_STRING = 1300;
    exports.ER_WARN_ALLOWED_PACKET_OVERFLOWED = 1301;
    exports.ER_CONFLICTING_DECLARATIONS = 1302;
    exports.ER_SP_NO_RECURSIVE_CREATE = 1303;
    exports.ER_SP_ALREADY_EXISTS = 1304;
    exports.ER_SP_DOES_NOT_EXIST = 1305;
    exports.ER_SP_DROP_FAILED = 1306;
    exports.ER_SP_STORE_FAILED = 1307;
    exports.ER_SP_LILABEL_MISMATCH = 1308;
    exports.ER_SP_LABEL_REDEFINE = 1309;
    exports.ER_SP_LABEL_MISMATCH = 1310;
    exports.ER_SP_UNINIT_VAR = 1311;
    exports.ER_SP_BADSELECT = 1312;
    exports.ER_SP_BADRETURN = 1313;
    exports.ER_SP_BADSTATEMENT = 1314;
    exports.ER_UPDATE_LOG_DEPRECATED_IGNORED = 1315;
    exports.ER_UPDATE_LOG_DEPRECATED_TRANSLATED = 1316;
    exports.ER_QUERY_INTERRUPTED = 1317;
    exports.ER_SP_WRONG_NO_OF_ARGS = 1318;
    exports.ER_SP_COND_MISMATCH = 1319;
    exports.ER_SP_NORETURN = 1320;
    exports.ER_SP_NORETURNEND = 1321;
    exports.ER_SP_BAD_CURSOR_QUERY = 1322;
    exports.ER_SP_BAD_CURSOR_SELECT = 1323;
    exports.ER_SP_CURSOR_MISMATCH = 1324;
    exports.ER_SP_CURSOR_ALREADY_OPEN = 1325;
    exports.ER_SP_CURSOR_NOT_OPEN = 1326;
    exports.ER_SP_UNDECLARED_VAR = 1327;
    exports.ER_SP_WRONG_NO_OF_FETCH_ARGS = 1328;
    exports.ER_SP_FETCH_NO_DATA = 1329;
    exports.ER_SP_DUP_PARAM = 1330;
    exports.ER_SP_DUP_VAR = 1331;
    exports.ER_SP_DUP_COND = 1332;
    exports.ER_SP_DUP_CURS = 1333;
    exports.ER_SP_CANT_ALTER = 1334;
    exports.ER_SP_SUBSELECT_NYI = 1335;
    exports.ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG = 1336;
    exports.ER_SP_VARCOND_AFTER_CURSHNDLR = 1337;
    exports.ER_SP_CURSOR_AFTER_HANDLER = 1338;
    exports.ER_SP_CASE_NOT_FOUND = 1339;
    exports.ER_FPARSER_TOO_BIG_FILE = 1340;
    exports.ER_FPARSER_BAD_HEADER = 1341;
    exports.ER_FPARSER_EOF_IN_COMMENT = 1342;
    exports.ER_FPARSER_ERROR_IN_PARAMETER = 1343;
    exports.ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER = 1344;
    exports.ER_VIEW_NO_EXPLAIN = 1345;
    exports.ER_FRM_UNKNOWN_TYPE = 1346;
    exports.ER_WRONG_OBJECT = 1347;
    exports.ER_NONUPDATEABLE_COLUMN = 1348;
    exports.ER_VIEW_SELECT_DERIVED = 1349;
    exports.ER_VIEW_SELECT_CLAUSE = 1350;
    exports.ER_VIEW_SELECT_VARIABLE = 1351;
    exports.ER_VIEW_SELECT_TMPTABLE = 1352;
    exports.ER_VIEW_WRONG_LIST = 1353;
    exports.ER_WARN_VIEW_MERGE = 1354;
    exports.ER_WARN_VIEW_WITHOUT_KEY = 1355;
    exports.ER_VIEW_INVALID = 1356;
    exports.ER_SP_NO_DROP_SP = 1357;
    exports.ER_SP_GOTO_IN_HNDLR = 1358;
    exports.ER_TRG_ALREADY_EXISTS = 1359;
    exports.ER_TRG_DOES_NOT_EXIST = 1360;
    exports.ER_TRG_ON_VIEW_OR_TEMP_TABLE = 1361;
    exports.ER_TRG_CANT_CHANGE_ROW = 1362;
    exports.ER_TRG_NO_SUCH_ROW_IN_TRG = 1363;
    exports.ER_NO_DEFAULT_FOR_FIELD = 1364;
    exports.ER_DIVISION_BY_ZERO = 1365;
    exports.ER_TRUNCATED_WRONG_VALUE_FOR_FIELD = 1366;
    exports.ER_ILLEGAL_VALUE_FOR_TYPE = 1367;
    exports.ER_VIEW_NONUPD_CHECK = 1368;
    exports.ER_VIEW_CHECK_FAILED = 1369;
    exports.ER_PROCACCESS_DENIED_ERROR = 1370;
    exports.ER_RELAY_LOG_FAIL = 1371;
    exports.ER_PASSWD_LENGTH = 1372;
    exports.ER_UNKNOWN_TARGET_BINLOG = 1373;
    exports.ER_IO_ERR_LOG_INDEX_READ = 1374;
    exports.ER_BINLOG_PURGE_PROHIBITED = 1375;
    exports.ER_FSEEK_FAIL = 1376;
    exports.ER_BINLOG_PURGE_FATAL_ERR = 1377;
    exports.ER_LOG_IN_USE = 1378;
    exports.ER_LOG_PURGE_UNKNOWN_ERR = 1379;
    exports.ER_RELAY_LOG_INIT = 1380;
    exports.ER_NO_BINARY_LOGGING = 1381;
    exports.ER_RESERVED_SYNTAX = 1382;
    exports.ER_WSAS_FAILED = 1383;
    exports.ER_DIFF_GROUPS_PROC = 1384;
    exports.ER_NO_GROUP_FOR_PROC = 1385;
    exports.ER_ORDER_WITH_PROC = 1386;
    exports.ER_LOGGING_PROHIBIT_CHANGING_OF = 1387;
    exports.ER_NO_FILE_MAPPING = 1388;
    exports.ER_WRONG_MAGIC = 1389;
    exports.ER_PS_MANY_PARAM = 1390;
    exports.ER_KEY_PART_0 = 1391;
    exports.ER_VIEW_CHECKSUM = 1392;
    exports.ER_VIEW_MULTIUPDATE = 1393;
    exports.ER_VIEW_NO_INSERT_FIELD_LIST = 1394;
    exports.ER_VIEW_DELETE_MERGE_VIEW = 1395;
    exports.ER_CANNOT_USER = 1396;
    exports.ER_XAER_NOTA = 1397;
    exports.ER_XAER_INVAL = 1398;
    exports.ER_XAER_RMFAIL = 1399;
    exports.ER_XAER_OUTSIDE = 1400;
    exports.ER_XAER_RMERR = 1401;
    exports.ER_XA_RBROLLBACK = 1402;
    exports.ER_NONEXISTING_PROC_GRANT = 1403;
    exports.ER_PROC_AUTO_GRANT_FAIL = 1404;
    exports.ER_PROC_AUTO_REVOKE_FAIL = 1405;
    exports.ER_DATA_TOO_LONG = 1406;
    exports.ER_SP_BAD_SQLSTATE = 1407;
    exports.ER_STARTUP = 1408;
    exports.ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR = 1409;
    exports.ER_CANT_CREATE_USER_WITH_GRANT = 1410;
    exports.ER_WRONG_VALUE_FOR_TYPE = 1411;
    exports.ER_TABLE_DEF_CHANGED = 1412;
    exports.ER_SP_DUP_HANDLER = 1413;
    exports.ER_SP_NOT_VAR_ARG = 1414;
    exports.ER_SP_NO_RETSET = 1415;
    exports.ER_CANT_CREATE_GEOMETRY_OBJECT = 1416;
    exports.ER_FAILED_ROUTINE_BREAK_BINLOG = 1417;
    exports.ER_BINLOG_UNSAFE_ROUTINE = 1418;
    exports.ER_BINLOG_CREATE_ROUTINE_NEED_SUPER = 1419;
    exports.ER_EXEC_STMT_WITH_OPEN_CURSOR = 1420;
    exports.ER_STMT_HAS_NO_OPEN_CURSOR = 1421;
    exports.ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG = 1422;
    exports.ER_NO_DEFAULT_FOR_VIEW_FIELD = 1423;
    exports.ER_SP_NO_RECURSION = 1424;
    exports.ER_TOO_BIG_SCALE = 1425;
    exports.ER_TOO_BIG_PRECISION = 1426;
    exports.ER_M_BIGGER_THAN_D = 1427;
    exports.ER_WRONG_LOCK_OF_SYSTEM_TABLE = 1428;
    exports.ER_CONNECT_TO_FOREIGN_DATA_SOURCE = 1429;
    exports.ER_QUERY_ON_FOREIGN_DATA_SOURCE = 1430;
    exports.ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST = 1431;
    exports.ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE = 1432;
    exports.ER_FOREIGN_DATA_STRING_INVALID = 1433;
    exports.ER_CANT_CREATE_FEDERATED_TABLE = 1434;
    exports.ER_TRG_IN_WRONG_SCHEMA = 1435;
    exports.ER_STACK_OVERRUN_NEED_MORE = 1436;
    exports.ER_TOO_LONG_BODY = 1437;
    exports.ER_WARN_CANT_DROP_DEFAULT_KEYCACHE = 1438;
    exports.ER_TOO_BIG_DISPLAYWIDTH = 1439;
    exports.ER_XAER_DUPID = 1440;
    exports.ER_DATETIME_FUNCTION_OVERFLOW = 1441;
    exports.ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG = 1442;
    exports.ER_VIEW_PREVENT_UPDATE = 1443;
    exports.ER_PS_NO_RECURSION = 1444;
    exports.ER_SP_CANT_SET_AUTOCOMMIT = 1445;
    exports.ER_MALFORMED_DEFINER = 1446;
    exports.ER_VIEW_FRM_NO_USER = 1447;
    exports.ER_VIEW_OTHER_USER = 1448;
    exports.ER_NO_SUCH_USER = 1449;
    exports.ER_FORBID_SCHEMA_CHANGE = 1450;
    exports.ER_ROW_IS_REFERENCED_2 = 1451;
    exports.ER_NO_REFERENCED_ROW_2 = 1452;
    exports.ER_SP_BAD_VAR_SHADOW = 1453;
    exports.ER_TRG_NO_DEFINER = 1454;
    exports.ER_OLD_FILE_FORMAT = 1455;
    exports.ER_SP_RECURSION_LIMIT = 1456;
    exports.ER_SP_PROC_TABLE_CORRUPT = 1457;
    exports.ER_SP_WRONG_NAME = 1458;
    exports.ER_TABLE_NEEDS_UPGRADE = 1459;
    exports.ER_SP_NO_AGGREGATE = 1460;
    exports.ER_MAX_PREPARED_STMT_COUNT_REACHED = 1461;
    exports.ER_VIEW_RECURSIVE = 1462;
    exports.ER_NON_GROUPING_FIELD_USED = 1463;
    exports.ER_TABLE_CANT_HANDLE_SPKEYS = 1464;
    exports.ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA = 1465;
    exports.ER_REMOVED_SPACES = 1466;
    exports.ER_AUTOINC_READ_FAILED = 1467;
    exports.ER_USERNAME = 1468;
    exports.ER_HOSTNAME = 1469;
    exports.ER_WRONG_STRING_LENGTH = 1470;
    exports.ER_NON_INSERTABLE_TABLE = 1471;
    exports.ER_ADMIN_WRONG_MRG_TABLE = 1472;
    exports.ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT = 1473;
    exports.ER_NAME_BECOMES_EMPTY = 1474;
    exports.ER_AMBIGUOUS_FIELD_TERM = 1475;
    exports.ER_FOREIGN_SERVER_EXISTS = 1476;
    exports.ER_FOREIGN_SERVER_DOESNT_EXIST = 1477;
    exports.ER_ILLEGAL_HA_CREATE_OPTION = 1478;
    exports.ER_PARTITION_REQUIRES_VALUES_ERROR = 1479;
    exports.ER_PARTITION_WRONG_VALUES_ERROR = 1480;
    exports.ER_PARTITION_MAXVALUE_ERROR = 1481;
    exports.ER_PARTITION_SUBPARTITION_ERROR = 1482;
    exports.ER_PARTITION_SUBPART_MIX_ERROR = 1483;
    exports.ER_PARTITION_WRONG_NO_PART_ERROR = 1484;
    exports.ER_PARTITION_WRONG_NO_SUBPART_ERROR = 1485;
    exports.ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR = 1486;
    exports.ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR = 1487;
    exports.ER_FIELD_NOT_FOUND_PART_ERROR = 1488;
    exports.ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR = 1489;
    exports.ER_INCONSISTENT_PARTITION_INFO_ERROR = 1490;
    exports.ER_PARTITION_FUNC_NOT_ALLOWED_ERROR = 1491;
    exports.ER_PARTITIONS_MUST_BE_DEFINED_ERROR = 1492;
    exports.ER_RANGE_NOT_INCREASING_ERROR = 1493;
    exports.ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR = 1494;
    exports.ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR = 1495;
    exports.ER_PARTITION_ENTRY_ERROR = 1496;
    exports.ER_MIX_HANDLER_ERROR = 1497;
    exports.ER_PARTITION_NOT_DEFINED_ERROR = 1498;
    exports.ER_TOO_MANY_PARTITIONS_ERROR = 1499;
    exports.ER_SUBPARTITION_ERROR = 1500;
    exports.ER_CANT_CREATE_HANDLER_FILE = 1501;
    exports.ER_BLOB_FIELD_IN_PART_FUNC_ERROR = 1502;
    exports.ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF = 1503;
    exports.ER_NO_PARTS_ERROR = 1504;
    exports.ER_PARTITION_MGMT_ON_NONPARTITIONED = 1505;
    exports.ER_FOREIGN_KEY_ON_PARTITIONED = 1506;
    exports.ER_DROP_PARTITION_NON_EXISTENT = 1507;
    exports.ER_DROP_LAST_PARTITION = 1508;
    exports.ER_COALESCE_ONLY_ON_HASH_PARTITION = 1509;
    exports.ER_REORG_HASH_ONLY_ON_SAME_NO = 1510;
    exports.ER_REORG_NO_PARAM_ERROR = 1511;
    exports.ER_ONLY_ON_RANGE_LIST_PARTITION = 1512;
    exports.ER_ADD_PARTITION_SUBPART_ERROR = 1513;
    exports.ER_ADD_PARTITION_NO_NEW_PARTITION = 1514;
    exports.ER_COALESCE_PARTITION_NO_PARTITION = 1515;
    exports.ER_REORG_PARTITION_NOT_EXIST = 1516;
    exports.ER_SAME_NAME_PARTITION = 1517;
    exports.ER_NO_BINLOG_ERROR = 1518;
    exports.ER_CONSECUTIVE_REORG_PARTITIONS = 1519;
    exports.ER_REORG_OUTSIDE_RANGE = 1520;
    exports.ER_PARTITION_FUNCTION_FAILURE = 1521;
    exports.ER_PART_STATE_ERROR = 1522;
    exports.ER_LIMITED_PART_RANGE = 1523;
    exports.ER_PLUGIN_IS_NOT_LOADED = 1524;
    exports.ER_WRONG_VALUE = 1525;
    exports.ER_NO_PARTITION_FOR_GIVEN_VALUE = 1526;
    exports.ER_FILEGROUP_OPTION_ONLY_ONCE = 1527;
    exports.ER_CREATE_FILEGROUP_FAILED = 1528;
    exports.ER_DROP_FILEGROUP_FAILED = 1529;
    exports.ER_TABLESPACE_AUTO_EXTEND_ERROR = 1530;
    exports.ER_WRONG_SIZE_NUMBER = 1531;
    exports.ER_SIZE_OVERFLOW_ERROR = 1532;
    exports.ER_ALTER_FILEGROUP_FAILED = 1533;
    exports.ER_BINLOG_ROW_LOGGING_FAILED = 1534;
    exports.ER_BINLOG_ROW_WRONG_TABLE_DEF = 1535;
    exports.ER_BINLOG_ROW_RBR_TO_SBR = 1536;
    exports.ER_EVENT_ALREADY_EXISTS = 1537;
    exports.ER_EVENT_STORE_FAILED = 1538;
    exports.ER_EVENT_DOES_NOT_EXIST = 1539;
    exports.ER_EVENT_CANT_ALTER = 1540;
    exports.ER_EVENT_DROP_FAILED = 1541;
    exports.ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG = 1542;
    exports.ER_EVENT_ENDS_BEFORE_STARTS = 1543;
    exports.ER_EVENT_EXEC_TIME_IN_THE_PAST = 1544;
    exports.ER_EVENT_OPEN_TABLE_FAILED = 1545;
    exports.ER_EVENT_NEITHER_M_EXPR_NOR_M_AT = 1546;
    exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED = 1547;
    exports.ER_CANNOT_LOAD_FROM_TABLE = 1548;
    exports.ER_EVENT_CANNOT_DELETE = 1549;
    exports.ER_EVENT_COMPILE_ERROR = 1550;
    exports.ER_EVENT_SAME_NAME = 1551;
    exports.ER_EVENT_DATA_TOO_LONG = 1552;
    exports.ER_DROP_INDEX_FK = 1553;
    exports.ER_WARN_DEPRECATED_SYNTAX_WITH_VER = 1554;
    exports.ER_CANT_WRITE_LOCK_LOG_TABLE = 1555;
    exports.ER_CANT_LOCK_LOG_TABLE = 1556;
    exports.ER_FOREIGN_DUPLICATE_KEY = 1557;
    exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE = 1558;
    exports.ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR = 1559;
    exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1560;
    exports.ER_NDB_CANT_SWITCH_BINLOG_FORMAT = 1561;
    exports.ER_PARTITION_NO_TEMPORARY = 1562;
    exports.ER_PARTITION_CONST_DOMAIN_ERROR = 1563;
    exports.ER_PARTITION_FUNCTION_IS_NOT_ALLOWED = 1564;
    exports.ER_DDL_LOG_ERROR = 1565;
    exports.ER_NULL_IN_VALUES_LESS_THAN = 1566;
    exports.ER_WRONG_PARTITION_NAME = 1567;
    exports.ER_CANT_CHANGE_TX_CHARACTERISTICS = 1568;
    exports.ER_DUP_ENTRY_AUTOINCREMENT_CASE = 1569;
    exports.ER_EVENT_MODIFY_QUEUE_ERROR = 1570;
    exports.ER_EVENT_SET_VAR_ERROR = 1571;
    exports.ER_PARTITION_MERGE_ERROR = 1572;
    exports.ER_CANT_ACTIVATE_LOG = 1573;
    exports.ER_RBR_NOT_AVAILABLE = 1574;
    exports.ER_BASE64_DECODE_ERROR = 1575;
    exports.ER_EVENT_RECURSION_FORBIDDEN = 1576;
    exports.ER_EVENTS_DB_ERROR = 1577;
    exports.ER_ONLY_INTEGERS_ALLOWED = 1578;
    exports.ER_UNSUPORTED_LOG_ENGINE = 1579;
    exports.ER_BAD_LOG_STATEMENT = 1580;
    exports.ER_CANT_RENAME_LOG_TABLE = 1581;
    exports.ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT = 1582;
    exports.ER_WRONG_PARAMETERS_TO_NATIVE_FCT = 1583;
    exports.ER_WRONG_PARAMETERS_TO_STORED_FCT = 1584;
    exports.ER_NATIVE_FCT_NAME_COLLISION = 1585;
    exports.ER_DUP_ENTRY_WITH_KEY_NAME = 1586;
    exports.ER_BINLOG_PURGE_EMFILE = 1587;
    exports.ER_EVENT_CANNOT_CREATE_IN_THE_PAST = 1588;
    exports.ER_EVENT_CANNOT_ALTER_IN_THE_PAST = 1589;
    exports.ER_SLAVE_INCIDENT = 1590;
    exports.ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT = 1591;
    exports.ER_BINLOG_UNSAFE_STATEMENT = 1592;
    exports.ER_SLAVE_FATAL_ERROR = 1593;
    exports.ER_SLAVE_RELAY_LOG_READ_FAILURE = 1594;
    exports.ER_SLAVE_RELAY_LOG_WRITE_FAILURE = 1595;
    exports.ER_SLAVE_CREATE_EVENT_FAILURE = 1596;
    exports.ER_SLAVE_MASTER_COM_FAILURE = 1597;
    exports.ER_BINLOG_LOGGING_IMPOSSIBLE = 1598;
    exports.ER_VIEW_NO_CREATION_CTX = 1599;
    exports.ER_VIEW_INVALID_CREATION_CTX = 1600;
    exports.ER_SR_INVALID_CREATION_CTX = 1601;
    exports.ER_TRG_CORRUPTED_FILE = 1602;
    exports.ER_TRG_NO_CREATION_CTX = 1603;
    exports.ER_TRG_INVALID_CREATION_CTX = 1604;
    exports.ER_EVENT_INVALID_CREATION_CTX = 1605;
    exports.ER_TRG_CANT_OPEN_TABLE = 1606;
    exports.ER_CANT_CREATE_SROUTINE = 1607;
    exports.ER_NEVER_USED = 1608;
    exports.ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT = 1609;
    exports.ER_SLAVE_CORRUPT_EVENT = 1610;
    exports.ER_LOAD_DATA_INVALID_COLUMN = 1611;
    exports.ER_LOG_PURGE_NO_FILE = 1612;
    exports.ER_XA_RBTIMEOUT = 1613;
    exports.ER_XA_RBDEADLOCK = 1614;
    exports.ER_NEED_REPREPARE = 1615;
    exports.ER_DELAYED_NOT_SUPPORTED = 1616;
    exports.WARN_NO_MASTER_INFO = 1617;
    exports.WARN_OPTION_IGNORED = 1618;
    exports.ER_PLUGIN_DELETE_BUILTIN = 1619;
    exports.WARN_PLUGIN_BUSY = 1620;
    exports.ER_VARIABLE_IS_READONLY = 1621;
    exports.ER_WARN_ENGINE_TRANSACTION_ROLLBACK = 1622;
    exports.ER_SLAVE_HEARTBEAT_FAILURE = 1623;
    exports.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE = 1624;
    exports.ER_NDB_REPLICATION_SCHEMA_ERROR = 1625;
    exports.ER_CONFLICT_FN_PARSE_ERROR = 1626;
    exports.ER_EXCEPTIONS_WRITE_ERROR = 1627;
    exports.ER_TOO_LONG_TABLE_COMMENT = 1628;
    exports.ER_TOO_LONG_FIELD_COMMENT = 1629;
    exports.ER_FUNC_INEXISTENT_NAME_COLLISION = 1630;
    exports.ER_DATABASE_NAME = 1631;
    exports.ER_TABLE_NAME = 1632;
    exports.ER_PARTITION_NAME = 1633;
    exports.ER_SUBPARTITION_NAME = 1634;
    exports.ER_TEMPORARY_NAME = 1635;
    exports.ER_RENAMED_NAME = 1636;
    exports.ER_TOO_MANY_CONCURRENT_TRXS = 1637;
    exports.WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED = 1638;
    exports.ER_DEBUG_SYNC_TIMEOUT = 1639;
    exports.ER_DEBUG_SYNC_HIT_LIMIT = 1640;
    exports.ER_DUP_SIGNAL_SET = 1641;
    exports.ER_SIGNAL_WARN = 1642;
    exports.ER_SIGNAL_NOT_FOUND = 1643;
    exports.ER_SIGNAL_EXCEPTION = 1644;
    exports.ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER = 1645;
    exports.ER_SIGNAL_BAD_CONDITION_TYPE = 1646;
    exports.WARN_COND_ITEM_TRUNCATED = 1647;
    exports.ER_COND_ITEM_TOO_LONG = 1648;
    exports.ER_UNKNOWN_LOCALE = 1649;
    exports.ER_SLAVE_IGNORE_SERVER_IDS = 1650;
    exports.ER_QUERY_CACHE_DISABLED = 1651;
    exports.ER_SAME_NAME_PARTITION_FIELD = 1652;
    exports.ER_PARTITION_COLUMN_LIST_ERROR = 1653;
    exports.ER_WRONG_TYPE_COLUMN_VALUE_ERROR = 1654;
    exports.ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR = 1655;
    exports.ER_MAXVALUE_IN_VALUES_IN = 1656;
    exports.ER_TOO_MANY_VALUES_ERROR = 1657;
    exports.ER_ROW_SINGLE_PARTITION_FIELD_ERROR = 1658;
    exports.ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD = 1659;
    exports.ER_PARTITION_FIELDS_TOO_LONG = 1660;
    exports.ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE = 1661;
    exports.ER_BINLOG_ROW_MODE_AND_STMT_ENGINE = 1662;
    exports.ER_BINLOG_UNSAFE_AND_STMT_ENGINE = 1663;
    exports.ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE = 1664;
    exports.ER_BINLOG_STMT_MODE_AND_ROW_ENGINE = 1665;
    exports.ER_BINLOG_ROW_INJECTION_AND_STMT_MODE = 1666;
    exports.ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1667;
    exports.ER_BINLOG_UNSAFE_LIMIT = 1668;
    exports.ER_BINLOG_UNSAFE_INSERT_DELAYED = 1669;
    exports.ER_BINLOG_UNSAFE_SYSTEM_TABLE = 1670;
    exports.ER_BINLOG_UNSAFE_AUTOINC_COLUMNS = 1671;
    exports.ER_BINLOG_UNSAFE_UDF = 1672;
    exports.ER_BINLOG_UNSAFE_SYSTEM_VARIABLE = 1673;
    exports.ER_BINLOG_UNSAFE_SYSTEM_FUNCTION = 1674;
    exports.ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS = 1675;
    exports.ER_MESSAGE_AND_STATEMENT = 1676;
    exports.ER_SLAVE_CONVERSION_FAILED = 1677;
    exports.ER_SLAVE_CANT_CREATE_CONVERSION = 1678;
    exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1679;
    exports.ER_PATH_LENGTH = 1680;
    exports.ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT = 1681;
    exports.ER_WRONG_NATIVE_TABLE_STRUCTURE = 1682;
    exports.ER_WRONG_PERFSCHEMA_USAGE = 1683;
    exports.ER_WARN_I_S_SKIPPED_TABLE = 1684;
    exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1685;
    exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1686;
    exports.ER_SPATIAL_MUST_HAVE_GEOM_COL = 1687;
    exports.ER_TOO_LONG_INDEX_COMMENT = 1688;
    exports.ER_LOCK_ABORTED = 1689;
    exports.ER_DATA_OUT_OF_RANGE = 1690;
    exports.ER_WRONG_SPVAR_TYPE_IN_LIMIT = 1691;
    exports.ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1692;
    exports.ER_BINLOG_UNSAFE_MIXED_STATEMENT = 1693;
    exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1694;
    exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1695;
    exports.ER_FAILED_READ_FROM_PAR_FILE = 1696;
    exports.ER_VALUES_IS_NOT_INT_TYPE_ERROR = 1697;
    exports.ER_ACCESS_DENIED_NO_PASSWORD_ERROR = 1698;
    exports.ER_SET_PASSWORD_AUTH_PLUGIN = 1699;
    exports.ER_GRANT_PLUGIN_USER_EXISTS = 1700;
    exports.ER_TRUNCATE_ILLEGAL_FK = 1701;
    exports.ER_PLUGIN_IS_PERMANENT = 1702;
    exports.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN = 1703;
    exports.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX = 1704;
    exports.ER_STMT_CACHE_FULL = 1705;
    exports.ER_MULTI_UPDATE_KEY_CONFLICT = 1706;
    exports.ER_TABLE_NEEDS_REBUILD = 1707;
    exports.WARN_OPTION_BELOW_LIMIT = 1708;
    exports.ER_INDEX_COLUMN_TOO_LONG = 1709;
    exports.ER_ERROR_IN_TRIGGER_BODY = 1710;
    exports.ER_ERROR_IN_UNKNOWN_TRIGGER_BODY = 1711;
    exports.ER_INDEX_CORRUPT = 1712;
    exports.ER_UNDO_RECORD_TOO_BIG = 1713;
    exports.ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT = 1714;
    exports.ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE = 1715;
    exports.ER_BINLOG_UNSAFE_REPLACE_SELECT = 1716;
    exports.ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT = 1717;
    exports.ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT = 1718;
    exports.ER_BINLOG_UNSAFE_UPDATE_IGNORE = 1719;
    exports.ER_PLUGIN_NO_UNINSTALL = 1720;
    exports.ER_PLUGIN_NO_INSTALL = 1721;
    exports.ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT = 1722;
    exports.ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC = 1723;
    exports.ER_BINLOG_UNSAFE_INSERT_TWO_KEYS = 1724;
    exports.ER_TABLE_IN_FK_CHECK = 1725;
    exports.ER_UNSUPPORTED_ENGINE = 1726;
    exports.ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST = 1727;
    exports.ER_CANNOT_LOAD_FROM_TABLE_V2 = 1728;
    exports.ER_MASTER_DELAY_VALUE_OUT_OF_RANGE = 1729;
    exports.ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT = 1730;
    exports.ER_PARTITION_EXCHANGE_DIFFERENT_OPTION = 1731;
    exports.ER_PARTITION_EXCHANGE_PART_TABLE = 1732;
    exports.ER_PARTITION_EXCHANGE_TEMP_TABLE = 1733;
    exports.ER_PARTITION_INSTEAD_OF_SUBPARTITION = 1734;
    exports.ER_UNKNOWN_PARTITION = 1735;
    exports.ER_TABLES_DIFFERENT_METADATA = 1736;
    exports.ER_ROW_DOES_NOT_MATCH_PARTITION = 1737;
    exports.ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX = 1738;
    exports.ER_WARN_INDEX_NOT_APPLICABLE = 1739;
    exports.ER_PARTITION_EXCHANGE_FOREIGN_KEY = 1740;
    exports.ER_NO_SUCH_KEY_VALUE = 1741;
    exports.ER_RPL_INFO_DATA_TOO_LONG = 1742;
    exports.ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE = 1743;
    exports.ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE = 1744;
    exports.ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX = 1745;
    exports.ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT = 1746;
    exports.ER_PARTITION_CLAUSE_ON_NONPARTITIONED = 1747;
    exports.ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET = 1748;
    exports.ER_NO_SUCH_PARTITION = 1749;
    exports.ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE = 1750;
    exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE = 1751;
    exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE = 1752;
    exports.ER_MTS_FEATURE_IS_NOT_SUPPORTED = 1753;
    exports.ER_MTS_UPDATED_DBS_GREATER_MAX = 1754;
    exports.ER_MTS_CANT_PARALLEL = 1755;
    exports.ER_MTS_INCONSISTENT_DATA = 1756;
    exports.ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING = 1757;
    exports.ER_DA_INVALID_CONDITION_NUMBER = 1758;
    exports.ER_INSECURE_PLAIN_TEXT = 1759;
    exports.ER_INSECURE_CHANGE_MASTER = 1760;
    exports.ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO = 1761;
    exports.ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO = 1762;
    exports.ER_SQLTHREAD_WITH_SECURE_SLAVE = 1763;
    exports.ER_TABLE_HAS_NO_FT = 1764;
    exports.ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER = 1765;
    exports.ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION = 1766;
    exports.ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST = 1767;
    exports.ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION = 1768;
    exports.ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION = 1769;
    exports.ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL = 1770;
    exports.ER_SKIPPING_LOGGED_TRANSACTION = 1771;
    exports.ER_MALFORMED_GTID_SET_SPECIFICATION = 1772;
    exports.ER_MALFORMED_GTID_SET_ENCODING = 1773;
    exports.ER_MALFORMED_GTID_SPECIFICATION = 1774;
    exports.ER_GNO_EXHAUSTED = 1775;
    exports.ER_BAD_SLAVE_AUTO_POSITION = 1776;
    exports.ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF = 1777;
    exports.ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET = 1778;
    exports.ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON = 1779;
    exports.ER_GTID_MODE_REQUIRES_BINLOG = 1780;
    exports.ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF = 1781;
    exports.ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON = 1782;
    exports.ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF = 1783;
    exports.ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF = 1784;
    exports.ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE = 1785;
    exports.ER_GTID_UNSAFE_CREATE_SELECT = 1786;
    exports.ER_GTID_UNSAFE_CREATE_DROP_TEMPORARY_TABLE_IN_TRANSACTION = 1787;
    exports.ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME = 1788;
    exports.ER_MASTER_HAS_PURGED_REQUIRED_GTIDS = 1789;
    exports.ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID = 1790;
    exports.ER_UNKNOWN_EXPLAIN_FORMAT = 1791;
    exports.ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION = 1792;
    exports.ER_TOO_LONG_TABLE_PARTITION_COMMENT = 1793;
    exports.ER_SLAVE_CONFIGURATION = 1794;
    exports.ER_INNODB_FT_LIMIT = 1795;
    exports.ER_INNODB_NO_FT_TEMP_TABLE = 1796;
    exports.ER_INNODB_FT_WRONG_DOCID_COLUMN = 1797;
    exports.ER_INNODB_FT_WRONG_DOCID_INDEX = 1798;
    exports.ER_INNODB_ONLINE_LOG_TOO_BIG = 1799;
    exports.ER_UNKNOWN_ALTER_ALGORITHM = 1800;
    exports.ER_UNKNOWN_ALTER_LOCK = 1801;
    exports.ER_MTS_CHANGE_MASTER_CANT_RUN_WITH_GAPS = 1802;
    exports.ER_MTS_RECOVERY_FAILURE = 1803;
    exports.ER_MTS_RESET_WORKERS = 1804;
    exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2 = 1805;
    exports.ER_SLAVE_SILENT_RETRY_TRANSACTION = 1806;
    exports.ER_DISCARD_FK_CHECKS_RUNNING = 1807;
    exports.ER_TABLE_SCHEMA_MISMATCH = 1808;
    exports.ER_TABLE_IN_SYSTEM_TABLESPACE = 1809;
    exports.ER_IO_READ_ERROR = 1810;
    exports.ER_IO_WRITE_ERROR = 1811;
    exports.ER_TABLESPACE_MISSING = 1812;
    exports.ER_TABLESPACE_EXISTS = 1813;
    exports.ER_TABLESPACE_DISCARDED = 1814;
    exports.ER_INTERNAL_ERROR = 1815;
    exports.ER_INNODB_IMPORT_ERROR = 1816;
    exports.ER_INNODB_INDEX_CORRUPT = 1817;
    exports.ER_INVALID_YEAR_COLUMN_LENGTH = 1818;
    exports.ER_NOT_VALID_PASSWORD = 1819;
    exports.ER_MUST_CHANGE_PASSWORD = 1820;
    exports.ER_FK_NO_INDEX_CHILD = 1821;
    exports.ER_FK_NO_INDEX_PARENT = 1822;
    exports.ER_FK_FAIL_ADD_SYSTEM = 1823;
    exports.ER_FK_CANNOT_OPEN_PARENT = 1824;
    exports.ER_FK_INCORRECT_OPTION = 1825;
    exports.ER_FK_DUP_NAME = 1826;
    exports.ER_PASSWORD_FORMAT = 1827;
    exports.ER_FK_COLUMN_CANNOT_DROP = 1828;
    exports.ER_FK_COLUMN_CANNOT_DROP_CHILD = 1829;
    exports.ER_FK_COLUMN_NOT_NULL = 1830;
    exports.ER_DUP_INDEX = 1831;
    exports.ER_FK_COLUMN_CANNOT_CHANGE = 1832;
    exports.ER_FK_COLUMN_CANNOT_CHANGE_CHILD = 1833;
    exports.ER_FK_CANNOT_DELETE_PARENT = 1834;
    exports.ER_MALFORMED_PACKET = 1835;
    exports.ER_READ_ONLY_MODE = 1836;
    exports.ER_GTID_NEXT_TYPE_UNDEFINED_GROUP = 1837;
    exports.ER_VARIABLE_NOT_SETTABLE_IN_SP = 1838;
    exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF = 1839;
    exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY = 1840;
    exports.ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY = 1841;
    exports.ER_GTID_PURGED_WAS_CHANGED = 1842;
    exports.ER_GTID_EXECUTED_WAS_CHANGED = 1843;
    exports.ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES = 1844;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED = 1845;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON = 1846;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY = 1847;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION = 1848;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME = 1849;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE = 1850;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK = 1851;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE = 1852;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK = 1853;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC = 1854;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS = 1855;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS = 1856;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS = 1857;
    exports.ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE = 1858;
    exports.ER_DUP_UNKNOWN_IN_INDEX = 1859;
    exports.ER_IDENT_CAUSES_TOO_LONG_PATH = 1860;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL = 1861;
    exports.ER_MUST_CHANGE_PASSWORD_LOGIN = 1862;
    exports.ER_ROW_IN_WRONG_PARTITION = 1863;
    exports.ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX = 1864;
    exports.ER_INNODB_NO_FT_USES_PARSER = 1865;
    exports.ER_BINLOG_LOGICAL_CORRUPTION = 1866;
    exports.ER_WARN_PURGE_LOG_IN_USE = 1867;
    exports.ER_WARN_PURGE_LOG_IS_ACTIVE = 1868;
    exports.ER_AUTO_INCREMENT_CONFLICT = 1869;
    exports.WARN_ON_BLOCKHOLE_IN_RBR = 1870;
    exports.ER_SLAVE_MI_INIT_REPOSITORY = 1871;
    exports.ER_SLAVE_RLI_INIT_REPOSITORY = 1872;
    exports.ER_ACCESS_DENIED_CHANGE_USER_ERROR = 1873;
    exports.ER_INNODB_READ_ONLY = 1874;
    exports.ER_STOP_SLAVE_SQL_THREAD_TIMEOUT = 1875;
    exports.ER_STOP_SLAVE_IO_THREAD_TIMEOUT = 1876;
    exports.ER_TABLE_CORRUPT = 1877;
    exports.ER_TEMP_FILE_WRITE_FAILURE = 1878;
    exports.ER_INNODB_FT_AUX_NOT_HEX_ID = 1879;
    exports.ER_OLD_TEMPORALS_UPGRADED = 1880;
    exports.ER_INNODB_FORCED_RECOVERY = 1881;
    exports.ER_AES_INVALID_IV = 1882;
    exports.ER_PLUGIN_CANNOT_BE_UNINSTALLED = 1883;
    exports.ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP = 1884;
    exports.ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER = 1885;
    exports.ER_MISSING_KEY = 1886;
    exports.WARN_NAMED_PIPE_ACCESS_EVERYONE = 1887;
    exports.ER_FOUND_MISSING_GTIDS = 1888;
    exports.ER_FILE_CORRUPT = 3e3;
    exports.ER_ERROR_ON_MASTER = 3001;
    exports.ER_INCONSISTENT_ERROR = 3002;
    exports.ER_STORAGE_ENGINE_NOT_LOADED = 3003;
    exports.ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER = 3004;
    exports.ER_WARN_LEGACY_SYNTAX_CONVERTED = 3005;
    exports.ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN = 3006;
    exports.ER_CANNOT_DISCARD_TEMPORARY_TABLE = 3007;
    exports.ER_FK_DEPTH_EXCEEDED = 3008;
    exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2 = 3009;
    exports.ER_WARN_TRIGGER_DOESNT_HAVE_CREATED = 3010;
    exports.ER_REFERENCED_TRG_DOES_NOT_EXIST = 3011;
    exports.ER_EXPLAIN_NOT_SUPPORTED = 3012;
    exports.ER_INVALID_FIELD_SIZE = 3013;
    exports.ER_MISSING_HA_CREATE_OPTION = 3014;
    exports.ER_ENGINE_OUT_OF_MEMORY = 3015;
    exports.ER_PASSWORD_EXPIRE_ANONYMOUS_USER = 3016;
    exports.ER_SLAVE_SQL_THREAD_MUST_STOP = 3017;
    exports.ER_NO_FT_MATERIALIZED_SUBQUERY = 3018;
    exports.ER_INNODB_UNDO_LOG_FULL = 3019;
    exports.ER_INVALID_ARGUMENT_FOR_LOGARITHM = 3020;
    exports.ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP = 3021;
    exports.ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO = 3022;
    exports.ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS = 3023;
    exports.ER_QUERY_TIMEOUT = 3024;
    exports.ER_NON_RO_SELECT_DISABLE_TIMER = 3025;
    exports.ER_DUP_LIST_ENTRY = 3026;
    exports.ER_SQL_MODE_NO_EFFECT = 3027;
    exports.ER_AGGREGATE_ORDER_FOR_UNION = 3028;
    exports.ER_AGGREGATE_ORDER_NON_AGG_QUERY = 3029;
    exports.ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR = 3030;
    exports.ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER = 3031;
    exports.ER_SERVER_OFFLINE_MODE = 3032;
    exports.ER_GIS_DIFFERENT_SRIDS = 3033;
    exports.ER_GIS_UNSUPPORTED_ARGUMENT = 3034;
    exports.ER_GIS_UNKNOWN_ERROR = 3035;
    exports.ER_GIS_UNKNOWN_EXCEPTION = 3036;
    exports.ER_GIS_INVALID_DATA = 3037;
    exports.ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION = 3038;
    exports.ER_BOOST_GEOMETRY_CENTROID_EXCEPTION = 3039;
    exports.ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION = 3040;
    exports.ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION = 3041;
    exports.ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION = 3042;
    exports.ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION = 3043;
    exports.ER_STD_BAD_ALLOC_ERROR = 3044;
    exports.ER_STD_DOMAIN_ERROR = 3045;
    exports.ER_STD_LENGTH_ERROR = 3046;
    exports.ER_STD_INVALID_ARGUMENT = 3047;
    exports.ER_STD_OUT_OF_RANGE_ERROR = 3048;
    exports.ER_STD_OVERFLOW_ERROR = 3049;
    exports.ER_STD_RANGE_ERROR = 3050;
    exports.ER_STD_UNDERFLOW_ERROR = 3051;
    exports.ER_STD_LOGIC_ERROR = 3052;
    exports.ER_STD_RUNTIME_ERROR = 3053;
    exports.ER_STD_UNKNOWN_EXCEPTION = 3054;
    exports.ER_GIS_DATA_WRONG_ENDIANESS = 3055;
    exports.ER_CHANGE_MASTER_PASSWORD_LENGTH = 3056;
    exports.ER_USER_LOCK_WRONG_NAME = 3057;
    exports.ER_USER_LOCK_DEADLOCK = 3058;
    exports.ER_REPLACE_INACCESSIBLE_ROWS = 3059;
    exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS = 3060;
    exports.ER_ILLEGAL_USER_VAR = 3061;
    exports.ER_GTID_MODE_OFF = 3062;
    exports.ER_UNSUPPORTED_BY_REPLICATION_THREAD = 3063;
    exports.ER_INCORRECT_TYPE = 3064;
    exports.ER_FIELD_IN_ORDER_NOT_SELECT = 3065;
    exports.ER_AGGREGATE_IN_ORDER_NOT_SELECT = 3066;
    exports.ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN = 3067;
    exports.ER_NET_OK_PACKET_TOO_LARGE = 3068;
    exports.ER_INVALID_JSON_DATA = 3069;
    exports.ER_INVALID_GEOJSON_MISSING_MEMBER = 3070;
    exports.ER_INVALID_GEOJSON_WRONG_TYPE = 3071;
    exports.ER_INVALID_GEOJSON_UNSPECIFIED = 3072;
    exports.ER_DIMENSION_UNSUPPORTED = 3073;
    exports.ER_SLAVE_CHANNEL_DOES_NOT_EXIST = 3074;
    exports.ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT = 3075;
    exports.ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG = 3076;
    exports.ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY = 3077;
    exports.ER_SLAVE_CHANNEL_DELETE = 3078;
    exports.ER_SLAVE_MULTIPLE_CHANNELS_CMD = 3079;
    exports.ER_SLAVE_MAX_CHANNELS_EXCEEDED = 3080;
    exports.ER_SLAVE_CHANNEL_MUST_STOP = 3081;
    exports.ER_SLAVE_CHANNEL_NOT_RUNNING = 3082;
    exports.ER_SLAVE_CHANNEL_WAS_RUNNING = 3083;
    exports.ER_SLAVE_CHANNEL_WAS_NOT_RUNNING = 3084;
    exports.ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP = 3085;
    exports.ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER = 3086;
    exports.ER_WRONG_FIELD_WITH_GROUP_V2 = 3087;
    exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2 = 3088;
    exports.ER_WARN_DEPRECATED_SYSVAR_UPDATE = 3089;
    exports.ER_WARN_DEPRECATED_SQLMODE = 3090;
    exports.ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID = 3091;
    exports.ER_GROUP_REPLICATION_CONFIGURATION = 3092;
    exports.ER_GROUP_REPLICATION_RUNNING = 3093;
    exports.ER_GROUP_REPLICATION_APPLIER_INIT_ERROR = 3094;
    exports.ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT = 3095;
    exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR = 3096;
    exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR = 3097;
    exports.ER_BEFORE_DML_VALIDATION_ERROR = 3098;
    exports.ER_PREVENTS_VARIABLE_WITHOUT_RBR = 3099;
    exports.ER_RUN_HOOK_ERROR = 3100;
    exports.ER_TRANSACTION_ROLLBACK_DURING_COMMIT = 3101;
    exports.ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED = 3102;
    exports.ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN = 3103;
    exports.ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN = 3104;
    exports.ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN = 3105;
    exports.ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN = 3106;
    exports.ER_GENERATED_COLUMN_NON_PRIOR = 3107;
    exports.ER_DEPENDENT_BY_GENERATED_COLUMN = 3108;
    exports.ER_GENERATED_COLUMN_REF_AUTO_INC = 3109;
    exports.ER_FEATURE_NOT_AVAILABLE = 3110;
    exports.ER_CANT_SET_GTID_MODE = 3111;
    exports.ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF = 3112;
    exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION = 3113;
    exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON = 3114;
    exports.ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF = 3115;
    exports.ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS = 3116;
    exports.ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS = 3117;
    exports.ER_ACCOUNT_HAS_BEEN_LOCKED = 3118;
    exports.ER_WRONG_TABLESPACE_NAME = 3119;
    exports.ER_TABLESPACE_IS_NOT_EMPTY = 3120;
    exports.ER_WRONG_FILE_NAME = 3121;
    exports.ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION = 3122;
    exports.ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR = 3123;
    exports.ER_WARN_BAD_MAX_EXECUTION_TIME = 3124;
    exports.ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME = 3125;
    exports.ER_WARN_CONFLICTING_HINT = 3126;
    exports.ER_WARN_UNKNOWN_QB_NAME = 3127;
    exports.ER_UNRESOLVED_HINT_NAME = 3128;
    exports.ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE = 3129;
    exports.ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED = 3130;
    exports.ER_LOCKING_SERVICE_WRONG_NAME = 3131;
    exports.ER_LOCKING_SERVICE_DEADLOCK = 3132;
    exports.ER_LOCKING_SERVICE_TIMEOUT = 3133;
    exports.ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED = 3134;
    exports.ER_SQL_MODE_MERGED = 3135;
    exports.ER_VTOKEN_PLUGIN_TOKEN_MISMATCH = 3136;
    exports.ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND = 3137;
    exports.ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID = 3138;
    exports.ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED = 3139;
    exports.ER_INVALID_JSON_TEXT = 3140;
    exports.ER_INVALID_JSON_TEXT_IN_PARAM = 3141;
    exports.ER_INVALID_JSON_BINARY_DATA = 3142;
    exports.ER_INVALID_JSON_PATH = 3143;
    exports.ER_INVALID_JSON_CHARSET = 3144;
    exports.ER_INVALID_JSON_CHARSET_IN_FUNCTION = 3145;
    exports.ER_INVALID_TYPE_FOR_JSON = 3146;
    exports.ER_INVALID_CAST_TO_JSON = 3147;
    exports.ER_INVALID_JSON_PATH_CHARSET = 3148;
    exports.ER_INVALID_JSON_PATH_WILDCARD = 3149;
    exports.ER_JSON_VALUE_TOO_BIG = 3150;
    exports.ER_JSON_KEY_TOO_BIG = 3151;
    exports.ER_JSON_USED_AS_KEY = 3152;
    exports.ER_JSON_VACUOUS_PATH = 3153;
    exports.ER_JSON_BAD_ONE_OR_ALL_ARG = 3154;
    exports.ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE = 3155;
    exports.ER_INVALID_JSON_VALUE_FOR_CAST = 3156;
    exports.ER_JSON_DOCUMENT_TOO_DEEP = 3157;
    exports.ER_JSON_DOCUMENT_NULL_KEY = 3158;
    exports.ER_SECURE_TRANSPORT_REQUIRED = 3159;
    exports.ER_NO_SECURE_TRANSPORTS_CONFIGURED = 3160;
    exports.ER_DISABLED_STORAGE_ENGINE = 3161;
    exports.ER_USER_DOES_NOT_EXIST = 3162;
    exports.ER_USER_ALREADY_EXISTS = 3163;
    exports.ER_AUDIT_API_ABORT = 3164;
    exports.ER_INVALID_JSON_PATH_ARRAY_CELL = 3165;
    exports.ER_BUFPOOL_RESIZE_INPROGRESS = 3166;
    exports.ER_FEATURE_DISABLED_SEE_DOC = 3167;
    exports.ER_SERVER_ISNT_AVAILABLE = 3168;
    exports.ER_SESSION_WAS_KILLED = 3169;
    exports.ER_CAPACITY_EXCEEDED = 3170;
    exports.ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER = 3171;
    exports.ER_TABLE_NEEDS_UPG_PART = 3172;
    exports.ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID = 3173;
    exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL = 3174;
    exports.ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT = 3175;
    exports.ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE = 3176;
    exports.ER_LOCK_REFUSED_BY_ENGINE = 3177;
    exports.ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN = 3178;
    exports.ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE = 3179;
    exports.ER_MASTER_KEY_ROTATION_ERROR_BY_SE = 3180;
    exports.ER_MASTER_KEY_ROTATION_BINLOG_FAILED = 3181;
    exports.ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE = 3182;
    exports.ER_TABLESPACE_CANNOT_ENCRYPT = 3183;
    exports.ER_INVALID_ENCRYPTION_OPTION = 3184;
    exports.ER_CANNOT_FIND_KEY_IN_KEYRING = 3185;
    exports.ER_CAPACITY_EXCEEDED_IN_PARSER = 3186;
    exports.ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE = 3187;
    exports.ER_KEYRING_UDF_KEYRING_SERVICE_ERROR = 3188;
    exports.ER_USER_COLUMN_OLD_LENGTH = 3189;
    exports.ER_CANT_RESET_MASTER = 3190;
    exports.ER_GROUP_REPLICATION_MAX_GROUP_SIZE = 3191;
    exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED = 3192;
    exports.ER_TABLE_REFERENCED = 3193;
    exports.ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE = 3194;
    exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO = 3195;
    exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID = 3196;
    exports.ER_XA_RETRY = 3197;
    exports.ER_KEYRING_AWS_UDF_AWS_KMS_ERROR = 3198;
    exports.ER_BINLOG_UNSAFE_XA = 3199;
    exports.ER_UDF_ERROR = 3200;
    exports.ER_KEYRING_MIGRATION_FAILURE = 3201;
    exports.ER_KEYRING_ACCESS_DENIED_ERROR = 3202;
    exports.ER_KEYRING_MIGRATION_STATUS = 3203;
    exports.ER_PLUGIN_FAILED_TO_OPEN_TABLES = 3204;
    exports.ER_PLUGIN_FAILED_TO_OPEN_TABLE = 3205;
    exports.ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED = 3206;
    exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET = 3207;
    exports.ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY = 3208;
    exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED = 3209;
    exports.ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED = 3210;
    exports.ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE = 3211;
    exports.ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED = 3212;
    exports.ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS = 3213;
    exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE = 3214;
    exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT = 3215;
    exports.ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED = 3216;
    exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE = 3217;
    exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE = 3218;
    exports.ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR = 3219;
    exports.ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY = 3220;
    exports.ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY = 3221;
    exports.ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS = 3222;
    exports.ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC = 3223;
    exports.ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER = 3224;
    exports.ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER = 3225;
    exports.WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP = 3226;
    exports.ER_XA_REPLICATION_FILTERS = 3227;
    exports.ER_CANT_OPEN_ERROR_LOG = 3228;
    exports.ER_GROUPING_ON_TIMESTAMP_IN_DST = 3229;
    exports.ER_CANT_START_SERVER_NAMED_PIPE = 3230;
    exports[1] = "EE_CANTCREATEFILE";
    exports[2] = "EE_READ";
    exports[3] = "EE_WRITE";
    exports[4] = "EE_BADCLOSE";
    exports[5] = "EE_OUTOFMEMORY";
    exports[6] = "EE_DELETE";
    exports[7] = "EE_LINK";
    exports[9] = "EE_EOFERR";
    exports[10] = "EE_CANTLOCK";
    exports[11] = "EE_CANTUNLOCK";
    exports[12] = "EE_DIR";
    exports[13] = "EE_STAT";
    exports[14] = "EE_CANT_CHSIZE";
    exports[15] = "EE_CANT_OPEN_STREAM";
    exports[16] = "EE_GETWD";
    exports[17] = "EE_SETWD";
    exports[18] = "EE_LINK_WARNING";
    exports[19] = "EE_OPEN_WARNING";
    exports[20] = "EE_DISK_FULL";
    exports[21] = "EE_CANT_MKDIR";
    exports[22] = "EE_UNKNOWN_CHARSET";
    exports[23] = "EE_OUT_OF_FILERESOURCES";
    exports[24] = "EE_CANT_READLINK";
    exports[25] = "EE_CANT_SYMLINK";
    exports[26] = "EE_REALPATH";
    exports[27] = "EE_SYNC";
    exports[28] = "EE_UNKNOWN_COLLATION";
    exports[29] = "EE_FILENOTFOUND";
    exports[30] = "EE_FILE_NOT_CLOSED";
    exports[31] = "EE_CHANGE_OWNERSHIP";
    exports[32] = "EE_CHANGE_PERMISSIONS";
    exports[33] = "EE_CANT_SEEK";
    exports[34] = "EE_CAPACITY_EXCEEDED";
    exports[120] = "HA_ERR_KEY_NOT_FOUND";
    exports[121] = "HA_ERR_FOUND_DUPP_KEY";
    exports[122] = "HA_ERR_INTERNAL_ERROR";
    exports[123] = "HA_ERR_RECORD_CHANGED";
    exports[124] = "HA_ERR_WRONG_INDEX";
    exports[126] = "HA_ERR_CRASHED";
    exports[127] = "HA_ERR_WRONG_IN_RECORD";
    exports[128] = "HA_ERR_OUT_OF_MEM";
    exports[130] = "HA_ERR_NOT_A_TABLE";
    exports[131] = "HA_ERR_WRONG_COMMAND";
    exports[132] = "HA_ERR_OLD_FILE";
    exports[133] = "HA_ERR_NO_ACTIVE_RECORD";
    exports[134] = "HA_ERR_RECORD_DELETED";
    exports[135] = "HA_ERR_RECORD_FILE_FULL";
    exports[136] = "HA_ERR_INDEX_FILE_FULL";
    exports[137] = "HA_ERR_END_OF_FILE";
    exports[138] = "HA_ERR_UNSUPPORTED";
    exports[139] = "HA_ERR_TOO_BIG_ROW";
    exports[140] = "HA_WRONG_CREATE_OPTION";
    exports[141] = "HA_ERR_FOUND_DUPP_UNIQUE";
    exports[142] = "HA_ERR_UNKNOWN_CHARSET";
    exports[143] = "HA_ERR_WRONG_MRG_TABLE_DEF";
    exports[144] = "HA_ERR_CRASHED_ON_REPAIR";
    exports[145] = "HA_ERR_CRASHED_ON_USAGE";
    exports[146] = "HA_ERR_LOCK_WAIT_TIMEOUT";
    exports[147] = "HA_ERR_LOCK_TABLE_FULL";
    exports[148] = "HA_ERR_READ_ONLY_TRANSACTION";
    exports[149] = "HA_ERR_LOCK_DEADLOCK";
    exports[150] = "HA_ERR_CANNOT_ADD_FOREIGN";
    exports[151] = "HA_ERR_NO_REFERENCED_ROW";
    exports[152] = "HA_ERR_ROW_IS_REFERENCED";
    exports[153] = "HA_ERR_NO_SAVEPOINT";
    exports[154] = "HA_ERR_NON_UNIQUE_BLOCK_SIZE";
    exports[155] = "HA_ERR_NO_SUCH_TABLE";
    exports[156] = "HA_ERR_TABLE_EXIST";
    exports[157] = "HA_ERR_NO_CONNECTION";
    exports[158] = "HA_ERR_NULL_IN_SPATIAL";
    exports[159] = "HA_ERR_TABLE_DEF_CHANGED";
    exports[160] = "HA_ERR_NO_PARTITION_FOUND";
    exports[161] = "HA_ERR_RBR_LOGGING_FAILED";
    exports[162] = "HA_ERR_DROP_INDEX_FK";
    exports[163] = "HA_ERR_FOREIGN_DUPLICATE_KEY";
    exports[164] = "HA_ERR_TABLE_NEEDS_UPGRADE";
    exports[165] = "HA_ERR_TABLE_READONLY";
    exports[166] = "HA_ERR_AUTOINC_READ_FAILED";
    exports[167] = "HA_ERR_AUTOINC_ERANGE";
    exports[168] = "HA_ERR_GENERIC";
    exports[169] = "HA_ERR_RECORD_IS_THE_SAME";
    exports[170] = "HA_ERR_LOGGING_IMPOSSIBLE";
    exports[171] = "HA_ERR_CORRUPT_EVENT";
    exports[172] = "HA_ERR_NEW_FILE";
    exports[173] = "HA_ERR_ROWS_EVENT_APPLY";
    exports[174] = "HA_ERR_INITIALIZATION";
    exports[175] = "HA_ERR_FILE_TOO_SHORT";
    exports[176] = "HA_ERR_WRONG_CRC";
    exports[177] = "HA_ERR_TOO_MANY_CONCURRENT_TRXS";
    exports[178] = "HA_ERR_NOT_IN_LOCK_PARTITIONS";
    exports[179] = "HA_ERR_INDEX_COL_TOO_LONG";
    exports[180] = "HA_ERR_INDEX_CORRUPT";
    exports[181] = "HA_ERR_UNDO_REC_TOO_BIG";
    exports[182] = "HA_FTS_INVALID_DOCID";
    exports[183] = "HA_ERR_TABLE_IN_FK_CHECK";
    exports[184] = "HA_ERR_TABLESPACE_EXISTS";
    exports[185] = "HA_ERR_TOO_MANY_FIELDS";
    exports[186] = "HA_ERR_ROW_IN_WRONG_PARTITION";
    exports[187] = "HA_ERR_INNODB_READ_ONLY";
    exports[188] = "HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT";
    exports[189] = "HA_ERR_TEMP_FILE_WRITE_FAILURE";
    exports[190] = "HA_ERR_INNODB_FORCED_RECOVERY";
    exports[191] = "HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE";
    exports[192] = "HA_ERR_FK_DEPTH_EXCEEDED";
    exports[193] = "HA_MISSING_CREATE_OPTION";
    exports[194] = "HA_ERR_SE_OUT_OF_MEMORY";
    exports[195] = "HA_ERR_TABLE_CORRUPT";
    exports[196] = "HA_ERR_QUERY_INTERRUPTED";
    exports[197] = "HA_ERR_TABLESPACE_MISSING";
    exports[198] = "HA_ERR_TABLESPACE_IS_NOT_EMPTY";
    exports[199] = "HA_ERR_WRONG_FILE_NAME";
    exports[200] = "HA_ERR_NOT_ALLOWED_COMMAND";
    exports[201] = "HA_ERR_COMPUTE_FAILED";
    exports[1e3] = "ER_HASHCHK";
    exports[1001] = "ER_NISAMCHK";
    exports[1002] = "ER_NO";
    exports[1003] = "ER_YES";
    exports[1004] = "ER_CANT_CREATE_FILE";
    exports[1005] = "ER_CANT_CREATE_TABLE";
    exports[1006] = "ER_CANT_CREATE_DB";
    exports[1007] = "ER_DB_CREATE_EXISTS";
    exports[1008] = "ER_DB_DROP_EXISTS";
    exports[1009] = "ER_DB_DROP_DELETE";
    exports[1010] = "ER_DB_DROP_RMDIR";
    exports[1011] = "ER_CANT_DELETE_FILE";
    exports[1012] = "ER_CANT_FIND_SYSTEM_REC";
    exports[1013] = "ER_CANT_GET_STAT";
    exports[1014] = "ER_CANT_GET_WD";
    exports[1015] = "ER_CANT_LOCK";
    exports[1016] = "ER_CANT_OPEN_FILE";
    exports[1017] = "ER_FILE_NOT_FOUND";
    exports[1018] = "ER_CANT_READ_DIR";
    exports[1019] = "ER_CANT_SET_WD";
    exports[1020] = "ER_CHECKREAD";
    exports[1021] = "ER_DISK_FULL";
    exports[1022] = "ER_DUP_KEY";
    exports[1023] = "ER_ERROR_ON_CLOSE";
    exports[1024] = "ER_ERROR_ON_READ";
    exports[1025] = "ER_ERROR_ON_RENAME";
    exports[1026] = "ER_ERROR_ON_WRITE";
    exports[1027] = "ER_FILE_USED";
    exports[1028] = "ER_FILSORT_ABORT";
    exports[1029] = "ER_FORM_NOT_FOUND";
    exports[1030] = "ER_GET_ERRNO";
    exports[1031] = "ER_ILLEGAL_HA";
    exports[1032] = "ER_KEY_NOT_FOUND";
    exports[1033] = "ER_NOT_FORM_FILE";
    exports[1034] = "ER_NOT_KEYFILE";
    exports[1035] = "ER_OLD_KEYFILE";
    exports[1036] = "ER_OPEN_AS_READONLY";
    exports[1037] = "ER_OUTOFMEMORY";
    exports[1038] = "ER_OUT_OF_SORTMEMORY";
    exports[1039] = "ER_UNEXPECTED_EOF";
    exports[1040] = "ER_CON_COUNT_ERROR";
    exports[1041] = "ER_OUT_OF_RESOURCES";
    exports[1042] = "ER_BAD_HOST_ERROR";
    exports[1043] = "ER_HANDSHAKE_ERROR";
    exports[1044] = "ER_DBACCESS_DENIED_ERROR";
    exports[1045] = "ER_ACCESS_DENIED_ERROR";
    exports[1046] = "ER_NO_DB_ERROR";
    exports[1047] = "ER_UNKNOWN_COM_ERROR";
    exports[1048] = "ER_BAD_NULL_ERROR";
    exports[1049] = "ER_BAD_DB_ERROR";
    exports[1050] = "ER_TABLE_EXISTS_ERROR";
    exports[1051] = "ER_BAD_TABLE_ERROR";
    exports[1052] = "ER_NON_UNIQ_ERROR";
    exports[1053] = "ER_SERVER_SHUTDOWN";
    exports[1054] = "ER_BAD_FIELD_ERROR";
    exports[1055] = "ER_WRONG_FIELD_WITH_GROUP";
    exports[1056] = "ER_WRONG_GROUP_FIELD";
    exports[1057] = "ER_WRONG_SUM_SELECT";
    exports[1058] = "ER_WRONG_VALUE_COUNT";
    exports[1059] = "ER_TOO_LONG_IDENT";
    exports[1060] = "ER_DUP_FIELDNAME";
    exports[1061] = "ER_DUP_KEYNAME";
    exports[1062] = "ER_DUP_ENTRY";
    exports[1063] = "ER_WRONG_FIELD_SPEC";
    exports[1064] = "ER_PARSE_ERROR";
    exports[1065] = "ER_EMPTY_QUERY";
    exports[1066] = "ER_NONUNIQ_TABLE";
    exports[1067] = "ER_INVALID_DEFAULT";
    exports[1068] = "ER_MULTIPLE_PRI_KEY";
    exports[1069] = "ER_TOO_MANY_KEYS";
    exports[1070] = "ER_TOO_MANY_KEY_PARTS";
    exports[1071] = "ER_TOO_LONG_KEY";
    exports[1072] = "ER_KEY_COLUMN_DOES_NOT_EXITS";
    exports[1073] = "ER_BLOB_USED_AS_KEY";
    exports[1074] = "ER_TOO_BIG_FIELDLENGTH";
    exports[1075] = "ER_WRONG_AUTO_KEY";
    exports[1076] = "ER_READY";
    exports[1077] = "ER_NORMAL_SHUTDOWN";
    exports[1078] = "ER_GOT_SIGNAL";
    exports[1079] = "ER_SHUTDOWN_COMPLETE";
    exports[1080] = "ER_FORCING_CLOSE";
    exports[1081] = "ER_IPSOCK_ERROR";
    exports[1082] = "ER_NO_SUCH_INDEX";
    exports[1083] = "ER_WRONG_FIELD_TERMINATORS";
    exports[1084] = "ER_BLOBS_AND_NO_TERMINATED";
    exports[1085] = "ER_TEXTFILE_NOT_READABLE";
    exports[1086] = "ER_FILE_EXISTS_ERROR";
    exports[1087] = "ER_LOAD_INFO";
    exports[1088] = "ER_ALTER_INFO";
    exports[1089] = "ER_WRONG_SUB_KEY";
    exports[1090] = "ER_CANT_REMOVE_ALL_FIELDS";
    exports[1091] = "ER_CANT_DROP_FIELD_OR_KEY";
    exports[1092] = "ER_INSERT_INFO";
    exports[1093] = "ER_UPDATE_TABLE_USED";
    exports[1094] = "ER_NO_SUCH_THREAD";
    exports[1095] = "ER_KILL_DENIED_ERROR";
    exports[1096] = "ER_NO_TABLES_USED";
    exports[1097] = "ER_TOO_BIG_SET";
    exports[1098] = "ER_NO_UNIQUE_LOGFILE";
    exports[1099] = "ER_TABLE_NOT_LOCKED_FOR_WRITE";
    exports[1100] = "ER_TABLE_NOT_LOCKED";
    exports[1101] = "ER_BLOB_CANT_HAVE_DEFAULT";
    exports[1102] = "ER_WRONG_DB_NAME";
    exports[1103] = "ER_WRONG_TABLE_NAME";
    exports[1104] = "ER_TOO_BIG_SELECT";
    exports[1105] = "ER_UNKNOWN_ERROR";
    exports[1106] = "ER_UNKNOWN_PROCEDURE";
    exports[1107] = "ER_WRONG_PARAMCOUNT_TO_PROCEDURE";
    exports[1108] = "ER_WRONG_PARAMETERS_TO_PROCEDURE";
    exports[1109] = "ER_UNKNOWN_TABLE";
    exports[1110] = "ER_FIELD_SPECIFIED_TWICE";
    exports[1111] = "ER_INVALID_GROUP_FUNC_USE";
    exports[1112] = "ER_UNSUPPORTED_EXTENSION";
    exports[1113] = "ER_TABLE_MUST_HAVE_COLUMNS";
    exports[1114] = "ER_RECORD_FILE_FULL";
    exports[1115] = "ER_UNKNOWN_CHARACTER_SET";
    exports[1116] = "ER_TOO_MANY_TABLES";
    exports[1117] = "ER_TOO_MANY_FIELDS";
    exports[1118] = "ER_TOO_BIG_ROWSIZE";
    exports[1119] = "ER_STACK_OVERRUN";
    exports[1120] = "ER_WRONG_OUTER_JOIN";
    exports[1121] = "ER_NULL_COLUMN_IN_INDEX";
    exports[1122] = "ER_CANT_FIND_UDF";
    exports[1123] = "ER_CANT_INITIALIZE_UDF";
    exports[1124] = "ER_UDF_NO_PATHS";
    exports[1125] = "ER_UDF_EXISTS";
    exports[1126] = "ER_CANT_OPEN_LIBRARY";
    exports[1127] = "ER_CANT_FIND_DL_ENTRY";
    exports[1128] = "ER_FUNCTION_NOT_DEFINED";
    exports[1129] = "ER_HOST_IS_BLOCKED";
    exports[1130] = "ER_HOST_NOT_PRIVILEGED";
    exports[1131] = "ER_PASSWORD_ANONYMOUS_USER";
    exports[1132] = "ER_PASSWORD_NOT_ALLOWED";
    exports[1133] = "ER_PASSWORD_NO_MATCH";
    exports[1134] = "ER_UPDATE_INFO";
    exports[1135] = "ER_CANT_CREATE_THREAD";
    exports[1136] = "ER_WRONG_VALUE_COUNT_ON_ROW";
    exports[1137] = "ER_CANT_REOPEN_TABLE";
    exports[1138] = "ER_INVALID_USE_OF_NULL";
    exports[1139] = "ER_REGEXP_ERROR";
    exports[1140] = "ER_MIX_OF_GROUP_FUNC_AND_FIELDS";
    exports[1141] = "ER_NONEXISTING_GRANT";
    exports[1142] = "ER_TABLEACCESS_DENIED_ERROR";
    exports[1143] = "ER_COLUMNACCESS_DENIED_ERROR";
    exports[1144] = "ER_ILLEGAL_GRANT_FOR_TABLE";
    exports[1145] = "ER_GRANT_WRONG_HOST_OR_USER";
    exports[1146] = "ER_NO_SUCH_TABLE";
    exports[1147] = "ER_NONEXISTING_TABLE_GRANT";
    exports[1148] = "ER_NOT_ALLOWED_COMMAND";
    exports[1149] = "ER_SYNTAX_ERROR";
    exports[1150] = "ER_DELAYED_CANT_CHANGE_LOCK";
    exports[1151] = "ER_TOO_MANY_DELAYED_THREADS";
    exports[1152] = "ER_ABORTING_CONNECTION";
    exports[1153] = "ER_NET_PACKET_TOO_LARGE";
    exports[1154] = "ER_NET_READ_ERROR_FROM_PIPE";
    exports[1155] = "ER_NET_FCNTL_ERROR";
    exports[1156] = "ER_NET_PACKETS_OUT_OF_ORDER";
    exports[1157] = "ER_NET_UNCOMPRESS_ERROR";
    exports[1158] = "ER_NET_READ_ERROR";
    exports[1159] = "ER_NET_READ_INTERRUPTED";
    exports[1160] = "ER_NET_ERROR_ON_WRITE";
    exports[1161] = "ER_NET_WRITE_INTERRUPTED";
    exports[1162] = "ER_TOO_LONG_STRING";
    exports[1163] = "ER_TABLE_CANT_HANDLE_BLOB";
    exports[1164] = "ER_TABLE_CANT_HANDLE_AUTO_INCREMENT";
    exports[1165] = "ER_DELAYED_INSERT_TABLE_LOCKED";
    exports[1166] = "ER_WRONG_COLUMN_NAME";
    exports[1167] = "ER_WRONG_KEY_COLUMN";
    exports[1168] = "ER_WRONG_MRG_TABLE";
    exports[1169] = "ER_DUP_UNIQUE";
    exports[1170] = "ER_BLOB_KEY_WITHOUT_LENGTH";
    exports[1171] = "ER_PRIMARY_CANT_HAVE_NULL";
    exports[1172] = "ER_TOO_MANY_ROWS";
    exports[1173] = "ER_REQUIRES_PRIMARY_KEY";
    exports[1174] = "ER_NO_RAID_COMPILED";
    exports[1175] = "ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE";
    exports[1176] = "ER_KEY_DOES_NOT_EXITS";
    exports[1177] = "ER_CHECK_NO_SUCH_TABLE";
    exports[1178] = "ER_CHECK_NOT_IMPLEMENTED";
    exports[1179] = "ER_CANT_DO_THIS_DURING_AN_TRANSACTION";
    exports[1180] = "ER_ERROR_DURING_COMMIT";
    exports[1181] = "ER_ERROR_DURING_ROLLBACK";
    exports[1182] = "ER_ERROR_DURING_FLUSH_LOGS";
    exports[1183] = "ER_ERROR_DURING_CHECKPOINT";
    exports[1184] = "ER_NEW_ABORTING_CONNECTION";
    exports[1185] = "ER_DUMP_NOT_IMPLEMENTED";
    exports[1186] = "ER_FLUSH_MASTER_BINLOG_CLOSED";
    exports[1187] = "ER_INDEX_REBUILD";
    exports[1188] = "ER_MASTER";
    exports[1189] = "ER_MASTER_NET_READ";
    exports[1190] = "ER_MASTER_NET_WRITE";
    exports[1191] = "ER_FT_MATCHING_KEY_NOT_FOUND";
    exports[1192] = "ER_LOCK_OR_ACTIVE_TRANSACTION";
    exports[1193] = "ER_UNKNOWN_SYSTEM_VARIABLE";
    exports[1194] = "ER_CRASHED_ON_USAGE";
    exports[1195] = "ER_CRASHED_ON_REPAIR";
    exports[1196] = "ER_WARNING_NOT_COMPLETE_ROLLBACK";
    exports[1197] = "ER_TRANS_CACHE_FULL";
    exports[1198] = "ER_SLAVE_MUST_STOP";
    exports[1199] = "ER_SLAVE_NOT_RUNNING";
    exports[1200] = "ER_BAD_SLAVE";
    exports[1201] = "ER_MASTER_INFO";
    exports[1202] = "ER_SLAVE_THREAD";
    exports[1203] = "ER_TOO_MANY_USER_CONNECTIONS";
    exports[1204] = "ER_SET_CONSTANTS_ONLY";
    exports[1205] = "ER_LOCK_WAIT_TIMEOUT";
    exports[1206] = "ER_LOCK_TABLE_FULL";
    exports[1207] = "ER_READ_ONLY_TRANSACTION";
    exports[1208] = "ER_DROP_DB_WITH_READ_LOCK";
    exports[1209] = "ER_CREATE_DB_WITH_READ_LOCK";
    exports[1210] = "ER_WRONG_ARGUMENTS";
    exports[1211] = "ER_NO_PERMISSION_TO_CREATE_USER";
    exports[1212] = "ER_UNION_TABLES_IN_DIFFERENT_DIR";
    exports[1213] = "ER_LOCK_DEADLOCK";
    exports[1214] = "ER_TABLE_CANT_HANDLE_FT";
    exports[1215] = "ER_CANNOT_ADD_FOREIGN";
    exports[1216] = "ER_NO_REFERENCED_ROW";
    exports[1217] = "ER_ROW_IS_REFERENCED";
    exports[1218] = "ER_CONNECT_TO_MASTER";
    exports[1219] = "ER_QUERY_ON_MASTER";
    exports[1220] = "ER_ERROR_WHEN_EXECUTING_COMMAND";
    exports[1221] = "ER_WRONG_USAGE";
    exports[1222] = "ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT";
    exports[1223] = "ER_CANT_UPDATE_WITH_READLOCK";
    exports[1224] = "ER_MIXING_NOT_ALLOWED";
    exports[1225] = "ER_DUP_ARGUMENT";
    exports[1226] = "ER_USER_LIMIT_REACHED";
    exports[1227] = "ER_SPECIFIC_ACCESS_DENIED_ERROR";
    exports[1228] = "ER_LOCAL_VARIABLE";
    exports[1229] = "ER_GLOBAL_VARIABLE";
    exports[1230] = "ER_NO_DEFAULT";
    exports[1231] = "ER_WRONG_VALUE_FOR_VAR";
    exports[1232] = "ER_WRONG_TYPE_FOR_VAR";
    exports[1233] = "ER_VAR_CANT_BE_READ";
    exports[1234] = "ER_CANT_USE_OPTION_HERE";
    exports[1235] = "ER_NOT_SUPPORTED_YET";
    exports[1236] = "ER_MASTER_FATAL_ERROR_READING_BINLOG";
    exports[1237] = "ER_SLAVE_IGNORED_TABLE";
    exports[1238] = "ER_INCORRECT_GLOBAL_LOCAL_VAR";
    exports[1239] = "ER_WRONG_FK_DEF";
    exports[1240] = "ER_KEY_REF_DO_NOT_MATCH_TABLE_REF";
    exports[1241] = "ER_OPERAND_COLUMNS";
    exports[1242] = "ER_SUBQUERY_NO_1_ROW";
    exports[1243] = "ER_UNKNOWN_STMT_HANDLER";
    exports[1244] = "ER_CORRUPT_HELP_DB";
    exports[1245] = "ER_CYCLIC_REFERENCE";
    exports[1246] = "ER_AUTO_CONVERT";
    exports[1247] = "ER_ILLEGAL_REFERENCE";
    exports[1248] = "ER_DERIVED_MUST_HAVE_ALIAS";
    exports[1249] = "ER_SELECT_REDUCED";
    exports[1250] = "ER_TABLENAME_NOT_ALLOWED_HERE";
    exports[1251] = "ER_NOT_SUPPORTED_AUTH_MODE";
    exports[1252] = "ER_SPATIAL_CANT_HAVE_NULL";
    exports[1253] = "ER_COLLATION_CHARSET_MISMATCH";
    exports[1254] = "ER_SLAVE_WAS_RUNNING";
    exports[1255] = "ER_SLAVE_WAS_NOT_RUNNING";
    exports[1256] = "ER_TOO_BIG_FOR_UNCOMPRESS";
    exports[1257] = "ER_ZLIB_Z_MEM_ERROR";
    exports[1258] = "ER_ZLIB_Z_BUF_ERROR";
    exports[1259] = "ER_ZLIB_Z_DATA_ERROR";
    exports[1260] = "ER_CUT_VALUE_GROUP_CONCAT";
    exports[1261] = "ER_WARN_TOO_FEW_RECORDS";
    exports[1262] = "ER_WARN_TOO_MANY_RECORDS";
    exports[1263] = "ER_WARN_NULL_TO_NOTNULL";
    exports[1264] = "ER_WARN_DATA_OUT_OF_RANGE";
    exports[1265] = "WARN_DATA_TRUNCATED";
    exports[1266] = "ER_WARN_USING_OTHER_HANDLER";
    exports[1267] = "ER_CANT_AGGREGATE_2COLLATIONS";
    exports[1268] = "ER_DROP_USER";
    exports[1269] = "ER_REVOKE_GRANTS";
    exports[1270] = "ER_CANT_AGGREGATE_3COLLATIONS";
    exports[1271] = "ER_CANT_AGGREGATE_NCOLLATIONS";
    exports[1272] = "ER_VARIABLE_IS_NOT_STRUCT";
    exports[1273] = "ER_UNKNOWN_COLLATION";
    exports[1274] = "ER_SLAVE_IGNORED_SSL_PARAMS";
    exports[1275] = "ER_SERVER_IS_IN_SECURE_AUTH_MODE";
    exports[1276] = "ER_WARN_FIELD_RESOLVED";
    exports[1277] = "ER_BAD_SLAVE_UNTIL_COND";
    exports[1278] = "ER_MISSING_SKIP_SLAVE";
    exports[1279] = "ER_UNTIL_COND_IGNORED";
    exports[1280] = "ER_WRONG_NAME_FOR_INDEX";
    exports[1281] = "ER_WRONG_NAME_FOR_CATALOG";
    exports[1282] = "ER_WARN_QC_RESIZE";
    exports[1283] = "ER_BAD_FT_COLUMN";
    exports[1284] = "ER_UNKNOWN_KEY_CACHE";
    exports[1285] = "ER_WARN_HOSTNAME_WONT_WORK";
    exports[1286] = "ER_UNKNOWN_STORAGE_ENGINE";
    exports[1287] = "ER_WARN_DEPRECATED_SYNTAX";
    exports[1288] = "ER_NON_UPDATABLE_TABLE";
    exports[1289] = "ER_FEATURE_DISABLED";
    exports[1290] = "ER_OPTION_PREVENTS_STATEMENT";
    exports[1291] = "ER_DUPLICATED_VALUE_IN_TYPE";
    exports[1292] = "ER_TRUNCATED_WRONG_VALUE";
    exports[1293] = "ER_TOO_MUCH_AUTO_TIMESTAMP_COLS";
    exports[1294] = "ER_INVALID_ON_UPDATE";
    exports[1295] = "ER_UNSUPPORTED_PS";
    exports[1296] = "ER_GET_ERRMSG";
    exports[1297] = "ER_GET_TEMPORARY_ERRMSG";
    exports[1298] = "ER_UNKNOWN_TIME_ZONE";
    exports[1299] = "ER_WARN_INVALID_TIMESTAMP";
    exports[1300] = "ER_INVALID_CHARACTER_STRING";
    exports[1301] = "ER_WARN_ALLOWED_PACKET_OVERFLOWED";
    exports[1302] = "ER_CONFLICTING_DECLARATIONS";
    exports[1303] = "ER_SP_NO_RECURSIVE_CREATE";
    exports[1304] = "ER_SP_ALREADY_EXISTS";
    exports[1305] = "ER_SP_DOES_NOT_EXIST";
    exports[1306] = "ER_SP_DROP_FAILED";
    exports[1307] = "ER_SP_STORE_FAILED";
    exports[1308] = "ER_SP_LILABEL_MISMATCH";
    exports[1309] = "ER_SP_LABEL_REDEFINE";
    exports[1310] = "ER_SP_LABEL_MISMATCH";
    exports[1311] = "ER_SP_UNINIT_VAR";
    exports[1312] = "ER_SP_BADSELECT";
    exports[1313] = "ER_SP_BADRETURN";
    exports[1314] = "ER_SP_BADSTATEMENT";
    exports[1315] = "ER_UPDATE_LOG_DEPRECATED_IGNORED";
    exports[1316] = "ER_UPDATE_LOG_DEPRECATED_TRANSLATED";
    exports[1317] = "ER_QUERY_INTERRUPTED";
    exports[1318] = "ER_SP_WRONG_NO_OF_ARGS";
    exports[1319] = "ER_SP_COND_MISMATCH";
    exports[1320] = "ER_SP_NORETURN";
    exports[1321] = "ER_SP_NORETURNEND";
    exports[1322] = "ER_SP_BAD_CURSOR_QUERY";
    exports[1323] = "ER_SP_BAD_CURSOR_SELECT";
    exports[1324] = "ER_SP_CURSOR_MISMATCH";
    exports[1325] = "ER_SP_CURSOR_ALREADY_OPEN";
    exports[1326] = "ER_SP_CURSOR_NOT_OPEN";
    exports[1327] = "ER_SP_UNDECLARED_VAR";
    exports[1328] = "ER_SP_WRONG_NO_OF_FETCH_ARGS";
    exports[1329] = "ER_SP_FETCH_NO_DATA";
    exports[1330] = "ER_SP_DUP_PARAM";
    exports[1331] = "ER_SP_DUP_VAR";
    exports[1332] = "ER_SP_DUP_COND";
    exports[1333] = "ER_SP_DUP_CURS";
    exports[1334] = "ER_SP_CANT_ALTER";
    exports[1335] = "ER_SP_SUBSELECT_NYI";
    exports[1336] = "ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG";
    exports[1337] = "ER_SP_VARCOND_AFTER_CURSHNDLR";
    exports[1338] = "ER_SP_CURSOR_AFTER_HANDLER";
    exports[1339] = "ER_SP_CASE_NOT_FOUND";
    exports[1340] = "ER_FPARSER_TOO_BIG_FILE";
    exports[1341] = "ER_FPARSER_BAD_HEADER";
    exports[1342] = "ER_FPARSER_EOF_IN_COMMENT";
    exports[1343] = "ER_FPARSER_ERROR_IN_PARAMETER";
    exports[1344] = "ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER";
    exports[1345] = "ER_VIEW_NO_EXPLAIN";
    exports[1346] = "ER_FRM_UNKNOWN_TYPE";
    exports[1347] = "ER_WRONG_OBJECT";
    exports[1348] = "ER_NONUPDATEABLE_COLUMN";
    exports[1349] = "ER_VIEW_SELECT_DERIVED";
    exports[1350] = "ER_VIEW_SELECT_CLAUSE";
    exports[1351] = "ER_VIEW_SELECT_VARIABLE";
    exports[1352] = "ER_VIEW_SELECT_TMPTABLE";
    exports[1353] = "ER_VIEW_WRONG_LIST";
    exports[1354] = "ER_WARN_VIEW_MERGE";
    exports[1355] = "ER_WARN_VIEW_WITHOUT_KEY";
    exports[1356] = "ER_VIEW_INVALID";
    exports[1357] = "ER_SP_NO_DROP_SP";
    exports[1358] = "ER_SP_GOTO_IN_HNDLR";
    exports[1359] = "ER_TRG_ALREADY_EXISTS";
    exports[1360] = "ER_TRG_DOES_NOT_EXIST";
    exports[1361] = "ER_TRG_ON_VIEW_OR_TEMP_TABLE";
    exports[1362] = "ER_TRG_CANT_CHANGE_ROW";
    exports[1363] = "ER_TRG_NO_SUCH_ROW_IN_TRG";
    exports[1364] = "ER_NO_DEFAULT_FOR_FIELD";
    exports[1365] = "ER_DIVISION_BY_ZERO";
    exports[1366] = "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD";
    exports[1367] = "ER_ILLEGAL_VALUE_FOR_TYPE";
    exports[1368] = "ER_VIEW_NONUPD_CHECK";
    exports[1369] = "ER_VIEW_CHECK_FAILED";
    exports[1370] = "ER_PROCACCESS_DENIED_ERROR";
    exports[1371] = "ER_RELAY_LOG_FAIL";
    exports[1372] = "ER_PASSWD_LENGTH";
    exports[1373] = "ER_UNKNOWN_TARGET_BINLOG";
    exports[1374] = "ER_IO_ERR_LOG_INDEX_READ";
    exports[1375] = "ER_BINLOG_PURGE_PROHIBITED";
    exports[1376] = "ER_FSEEK_FAIL";
    exports[1377] = "ER_BINLOG_PURGE_FATAL_ERR";
    exports[1378] = "ER_LOG_IN_USE";
    exports[1379] = "ER_LOG_PURGE_UNKNOWN_ERR";
    exports[1380] = "ER_RELAY_LOG_INIT";
    exports[1381] = "ER_NO_BINARY_LOGGING";
    exports[1382] = "ER_RESERVED_SYNTAX";
    exports[1383] = "ER_WSAS_FAILED";
    exports[1384] = "ER_DIFF_GROUPS_PROC";
    exports[1385] = "ER_NO_GROUP_FOR_PROC";
    exports[1386] = "ER_ORDER_WITH_PROC";
    exports[1387] = "ER_LOGGING_PROHIBIT_CHANGING_OF";
    exports[1388] = "ER_NO_FILE_MAPPING";
    exports[1389] = "ER_WRONG_MAGIC";
    exports[1390] = "ER_PS_MANY_PARAM";
    exports[1391] = "ER_KEY_PART_0";
    exports[1392] = "ER_VIEW_CHECKSUM";
    exports[1393] = "ER_VIEW_MULTIUPDATE";
    exports[1394] = "ER_VIEW_NO_INSERT_FIELD_LIST";
    exports[1395] = "ER_VIEW_DELETE_MERGE_VIEW";
    exports[1396] = "ER_CANNOT_USER";
    exports[1397] = "ER_XAER_NOTA";
    exports[1398] = "ER_XAER_INVAL";
    exports[1399] = "ER_XAER_RMFAIL";
    exports[1400] = "ER_XAER_OUTSIDE";
    exports[1401] = "ER_XAER_RMERR";
    exports[1402] = "ER_XA_RBROLLBACK";
    exports[1403] = "ER_NONEXISTING_PROC_GRANT";
    exports[1404] = "ER_PROC_AUTO_GRANT_FAIL";
    exports[1405] = "ER_PROC_AUTO_REVOKE_FAIL";
    exports[1406] = "ER_DATA_TOO_LONG";
    exports[1407] = "ER_SP_BAD_SQLSTATE";
    exports[1408] = "ER_STARTUP";
    exports[1409] = "ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR";
    exports[1410] = "ER_CANT_CREATE_USER_WITH_GRANT";
    exports[1411] = "ER_WRONG_VALUE_FOR_TYPE";
    exports[1412] = "ER_TABLE_DEF_CHANGED";
    exports[1413] = "ER_SP_DUP_HANDLER";
    exports[1414] = "ER_SP_NOT_VAR_ARG";
    exports[1415] = "ER_SP_NO_RETSET";
    exports[1416] = "ER_CANT_CREATE_GEOMETRY_OBJECT";
    exports[1417] = "ER_FAILED_ROUTINE_BREAK_BINLOG";
    exports[1418] = "ER_BINLOG_UNSAFE_ROUTINE";
    exports[1419] = "ER_BINLOG_CREATE_ROUTINE_NEED_SUPER";
    exports[1420] = "ER_EXEC_STMT_WITH_OPEN_CURSOR";
    exports[1421] = "ER_STMT_HAS_NO_OPEN_CURSOR";
    exports[1422] = "ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG";
    exports[1423] = "ER_NO_DEFAULT_FOR_VIEW_FIELD";
    exports[1424] = "ER_SP_NO_RECURSION";
    exports[1425] = "ER_TOO_BIG_SCALE";
    exports[1426] = "ER_TOO_BIG_PRECISION";
    exports[1427] = "ER_M_BIGGER_THAN_D";
    exports[1428] = "ER_WRONG_LOCK_OF_SYSTEM_TABLE";
    exports[1429] = "ER_CONNECT_TO_FOREIGN_DATA_SOURCE";
    exports[1430] = "ER_QUERY_ON_FOREIGN_DATA_SOURCE";
    exports[1431] = "ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST";
    exports[1432] = "ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE";
    exports[1433] = "ER_FOREIGN_DATA_STRING_INVALID";
    exports[1434] = "ER_CANT_CREATE_FEDERATED_TABLE";
    exports[1435] = "ER_TRG_IN_WRONG_SCHEMA";
    exports[1436] = "ER_STACK_OVERRUN_NEED_MORE";
    exports[1437] = "ER_TOO_LONG_BODY";
    exports[1438] = "ER_WARN_CANT_DROP_DEFAULT_KEYCACHE";
    exports[1439] = "ER_TOO_BIG_DISPLAYWIDTH";
    exports[1440] = "ER_XAER_DUPID";
    exports[1441] = "ER_DATETIME_FUNCTION_OVERFLOW";
    exports[1442] = "ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG";
    exports[1443] = "ER_VIEW_PREVENT_UPDATE";
    exports[1444] = "ER_PS_NO_RECURSION";
    exports[1445] = "ER_SP_CANT_SET_AUTOCOMMIT";
    exports[1446] = "ER_MALFORMED_DEFINER";
    exports[1447] = "ER_VIEW_FRM_NO_USER";
    exports[1448] = "ER_VIEW_OTHER_USER";
    exports[1449] = "ER_NO_SUCH_USER";
    exports[1450] = "ER_FORBID_SCHEMA_CHANGE";
    exports[1451] = "ER_ROW_IS_REFERENCED_2";
    exports[1452] = "ER_NO_REFERENCED_ROW_2";
    exports[1453] = "ER_SP_BAD_VAR_SHADOW";
    exports[1454] = "ER_TRG_NO_DEFINER";
    exports[1455] = "ER_OLD_FILE_FORMAT";
    exports[1456] = "ER_SP_RECURSION_LIMIT";
    exports[1457] = "ER_SP_PROC_TABLE_CORRUPT";
    exports[1458] = "ER_SP_WRONG_NAME";
    exports[1459] = "ER_TABLE_NEEDS_UPGRADE";
    exports[1460] = "ER_SP_NO_AGGREGATE";
    exports[1461] = "ER_MAX_PREPARED_STMT_COUNT_REACHED";
    exports[1462] = "ER_VIEW_RECURSIVE";
    exports[1463] = "ER_NON_GROUPING_FIELD_USED";
    exports[1464] = "ER_TABLE_CANT_HANDLE_SPKEYS";
    exports[1465] = "ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA";
    exports[1466] = "ER_REMOVED_SPACES";
    exports[1467] = "ER_AUTOINC_READ_FAILED";
    exports[1468] = "ER_USERNAME";
    exports[1469] = "ER_HOSTNAME";
    exports[1470] = "ER_WRONG_STRING_LENGTH";
    exports[1471] = "ER_NON_INSERTABLE_TABLE";
    exports[1472] = "ER_ADMIN_WRONG_MRG_TABLE";
    exports[1473] = "ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT";
    exports[1474] = "ER_NAME_BECOMES_EMPTY";
    exports[1475] = "ER_AMBIGUOUS_FIELD_TERM";
    exports[1476] = "ER_FOREIGN_SERVER_EXISTS";
    exports[1477] = "ER_FOREIGN_SERVER_DOESNT_EXIST";
    exports[1478] = "ER_ILLEGAL_HA_CREATE_OPTION";
    exports[1479] = "ER_PARTITION_REQUIRES_VALUES_ERROR";
    exports[1480] = "ER_PARTITION_WRONG_VALUES_ERROR";
    exports[1481] = "ER_PARTITION_MAXVALUE_ERROR";
    exports[1482] = "ER_PARTITION_SUBPARTITION_ERROR";
    exports[1483] = "ER_PARTITION_SUBPART_MIX_ERROR";
    exports[1484] = "ER_PARTITION_WRONG_NO_PART_ERROR";
    exports[1485] = "ER_PARTITION_WRONG_NO_SUBPART_ERROR";
    exports[1486] = "ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR";
    exports[1487] = "ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR";
    exports[1488] = "ER_FIELD_NOT_FOUND_PART_ERROR";
    exports[1489] = "ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR";
    exports[1490] = "ER_INCONSISTENT_PARTITION_INFO_ERROR";
    exports[1491] = "ER_PARTITION_FUNC_NOT_ALLOWED_ERROR";
    exports[1492] = "ER_PARTITIONS_MUST_BE_DEFINED_ERROR";
    exports[1493] = "ER_RANGE_NOT_INCREASING_ERROR";
    exports[1494] = "ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR";
    exports[1495] = "ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR";
    exports[1496] = "ER_PARTITION_ENTRY_ERROR";
    exports[1497] = "ER_MIX_HANDLER_ERROR";
    exports[1498] = "ER_PARTITION_NOT_DEFINED_ERROR";
    exports[1499] = "ER_TOO_MANY_PARTITIONS_ERROR";
    exports[1500] = "ER_SUBPARTITION_ERROR";
    exports[1501] = "ER_CANT_CREATE_HANDLER_FILE";
    exports[1502] = "ER_BLOB_FIELD_IN_PART_FUNC_ERROR";
    exports[1503] = "ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF";
    exports[1504] = "ER_NO_PARTS_ERROR";
    exports[1505] = "ER_PARTITION_MGMT_ON_NONPARTITIONED";
    exports[1506] = "ER_FOREIGN_KEY_ON_PARTITIONED";
    exports[1507] = "ER_DROP_PARTITION_NON_EXISTENT";
    exports[1508] = "ER_DROP_LAST_PARTITION";
    exports[1509] = "ER_COALESCE_ONLY_ON_HASH_PARTITION";
    exports[1510] = "ER_REORG_HASH_ONLY_ON_SAME_NO";
    exports[1511] = "ER_REORG_NO_PARAM_ERROR";
    exports[1512] = "ER_ONLY_ON_RANGE_LIST_PARTITION";
    exports[1513] = "ER_ADD_PARTITION_SUBPART_ERROR";
    exports[1514] = "ER_ADD_PARTITION_NO_NEW_PARTITION";
    exports[1515] = "ER_COALESCE_PARTITION_NO_PARTITION";
    exports[1516] = "ER_REORG_PARTITION_NOT_EXIST";
    exports[1517] = "ER_SAME_NAME_PARTITION";
    exports[1518] = "ER_NO_BINLOG_ERROR";
    exports[1519] = "ER_CONSECUTIVE_REORG_PARTITIONS";
    exports[1520] = "ER_REORG_OUTSIDE_RANGE";
    exports[1521] = "ER_PARTITION_FUNCTION_FAILURE";
    exports[1522] = "ER_PART_STATE_ERROR";
    exports[1523] = "ER_LIMITED_PART_RANGE";
    exports[1524] = "ER_PLUGIN_IS_NOT_LOADED";
    exports[1525] = "ER_WRONG_VALUE";
    exports[1526] = "ER_NO_PARTITION_FOR_GIVEN_VALUE";
    exports[1527] = "ER_FILEGROUP_OPTION_ONLY_ONCE";
    exports[1528] = "ER_CREATE_FILEGROUP_FAILED";
    exports[1529] = "ER_DROP_FILEGROUP_FAILED";
    exports[1530] = "ER_TABLESPACE_AUTO_EXTEND_ERROR";
    exports[1531] = "ER_WRONG_SIZE_NUMBER";
    exports[1532] = "ER_SIZE_OVERFLOW_ERROR";
    exports[1533] = "ER_ALTER_FILEGROUP_FAILED";
    exports[1534] = "ER_BINLOG_ROW_LOGGING_FAILED";
    exports[1535] = "ER_BINLOG_ROW_WRONG_TABLE_DEF";
    exports[1536] = "ER_BINLOG_ROW_RBR_TO_SBR";
    exports[1537] = "ER_EVENT_ALREADY_EXISTS";
    exports[1538] = "ER_EVENT_STORE_FAILED";
    exports[1539] = "ER_EVENT_DOES_NOT_EXIST";
    exports[1540] = "ER_EVENT_CANT_ALTER";
    exports[1541] = "ER_EVENT_DROP_FAILED";
    exports[1542] = "ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG";
    exports[1543] = "ER_EVENT_ENDS_BEFORE_STARTS";
    exports[1544] = "ER_EVENT_EXEC_TIME_IN_THE_PAST";
    exports[1545] = "ER_EVENT_OPEN_TABLE_FAILED";
    exports[1546] = "ER_EVENT_NEITHER_M_EXPR_NOR_M_AT";
    exports[1547] = "ER_COL_COUNT_DOESNT_MATCH_CORRUPTED";
    exports[1548] = "ER_CANNOT_LOAD_FROM_TABLE";
    exports[1549] = "ER_EVENT_CANNOT_DELETE";
    exports[1550] = "ER_EVENT_COMPILE_ERROR";
    exports[1551] = "ER_EVENT_SAME_NAME";
    exports[1552] = "ER_EVENT_DATA_TOO_LONG";
    exports[1553] = "ER_DROP_INDEX_FK";
    exports[1554] = "ER_WARN_DEPRECATED_SYNTAX_WITH_VER";
    exports[1555] = "ER_CANT_WRITE_LOCK_LOG_TABLE";
    exports[1556] = "ER_CANT_LOCK_LOG_TABLE";
    exports[1557] = "ER_FOREIGN_DUPLICATE_KEY";
    exports[1558] = "ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE";
    exports[1559] = "ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR";
    exports[1560] = "ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT";
    exports[1561] = "ER_NDB_CANT_SWITCH_BINLOG_FORMAT";
    exports[1562] = "ER_PARTITION_NO_TEMPORARY";
    exports[1563] = "ER_PARTITION_CONST_DOMAIN_ERROR";
    exports[1564] = "ER_PARTITION_FUNCTION_IS_NOT_ALLOWED";
    exports[1565] = "ER_DDL_LOG_ERROR";
    exports[1566] = "ER_NULL_IN_VALUES_LESS_THAN";
    exports[1567] = "ER_WRONG_PARTITION_NAME";
    exports[1568] = "ER_CANT_CHANGE_TX_CHARACTERISTICS";
    exports[1569] = "ER_DUP_ENTRY_AUTOINCREMENT_CASE";
    exports[1570] = "ER_EVENT_MODIFY_QUEUE_ERROR";
    exports[1571] = "ER_EVENT_SET_VAR_ERROR";
    exports[1572] = "ER_PARTITION_MERGE_ERROR";
    exports[1573] = "ER_CANT_ACTIVATE_LOG";
    exports[1574] = "ER_RBR_NOT_AVAILABLE";
    exports[1575] = "ER_BASE64_DECODE_ERROR";
    exports[1576] = "ER_EVENT_RECURSION_FORBIDDEN";
    exports[1577] = "ER_EVENTS_DB_ERROR";
    exports[1578] = "ER_ONLY_INTEGERS_ALLOWED";
    exports[1579] = "ER_UNSUPORTED_LOG_ENGINE";
    exports[1580] = "ER_BAD_LOG_STATEMENT";
    exports[1581] = "ER_CANT_RENAME_LOG_TABLE";
    exports[1582] = "ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT";
    exports[1583] = "ER_WRONG_PARAMETERS_TO_NATIVE_FCT";
    exports[1584] = "ER_WRONG_PARAMETERS_TO_STORED_FCT";
    exports[1585] = "ER_NATIVE_FCT_NAME_COLLISION";
    exports[1586] = "ER_DUP_ENTRY_WITH_KEY_NAME";
    exports[1587] = "ER_BINLOG_PURGE_EMFILE";
    exports[1588] = "ER_EVENT_CANNOT_CREATE_IN_THE_PAST";
    exports[1589] = "ER_EVENT_CANNOT_ALTER_IN_THE_PAST";
    exports[1590] = "ER_SLAVE_INCIDENT";
    exports[1591] = "ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT";
    exports[1592] = "ER_BINLOG_UNSAFE_STATEMENT";
    exports[1593] = "ER_SLAVE_FATAL_ERROR";
    exports[1594] = "ER_SLAVE_RELAY_LOG_READ_FAILURE";
    exports[1595] = "ER_SLAVE_RELAY_LOG_WRITE_FAILURE";
    exports[1596] = "ER_SLAVE_CREATE_EVENT_FAILURE";
    exports[1597] = "ER_SLAVE_MASTER_COM_FAILURE";
    exports[1598] = "ER_BINLOG_LOGGING_IMPOSSIBLE";
    exports[1599] = "ER_VIEW_NO_CREATION_CTX";
    exports[1600] = "ER_VIEW_INVALID_CREATION_CTX";
    exports[1601] = "ER_SR_INVALID_CREATION_CTX";
    exports[1602] = "ER_TRG_CORRUPTED_FILE";
    exports[1603] = "ER_TRG_NO_CREATION_CTX";
    exports[1604] = "ER_TRG_INVALID_CREATION_CTX";
    exports[1605] = "ER_EVENT_INVALID_CREATION_CTX";
    exports[1606] = "ER_TRG_CANT_OPEN_TABLE";
    exports[1607] = "ER_CANT_CREATE_SROUTINE";
    exports[1608] = "ER_NEVER_USED";
    exports[1609] = "ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT";
    exports[1610] = "ER_SLAVE_CORRUPT_EVENT";
    exports[1611] = "ER_LOAD_DATA_INVALID_COLUMN";
    exports[1612] = "ER_LOG_PURGE_NO_FILE";
    exports[1613] = "ER_XA_RBTIMEOUT";
    exports[1614] = "ER_XA_RBDEADLOCK";
    exports[1615] = "ER_NEED_REPREPARE";
    exports[1616] = "ER_DELAYED_NOT_SUPPORTED";
    exports[1617] = "WARN_NO_MASTER_INFO";
    exports[1618] = "WARN_OPTION_IGNORED";
    exports[1619] = "ER_PLUGIN_DELETE_BUILTIN";
    exports[1620] = "WARN_PLUGIN_BUSY";
    exports[1621] = "ER_VARIABLE_IS_READONLY";
    exports[1622] = "ER_WARN_ENGINE_TRANSACTION_ROLLBACK";
    exports[1623] = "ER_SLAVE_HEARTBEAT_FAILURE";
    exports[1624] = "ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE";
    exports[1625] = "ER_NDB_REPLICATION_SCHEMA_ERROR";
    exports[1626] = "ER_CONFLICT_FN_PARSE_ERROR";
    exports[1627] = "ER_EXCEPTIONS_WRITE_ERROR";
    exports[1628] = "ER_TOO_LONG_TABLE_COMMENT";
    exports[1629] = "ER_TOO_LONG_FIELD_COMMENT";
    exports[1630] = "ER_FUNC_INEXISTENT_NAME_COLLISION";
    exports[1631] = "ER_DATABASE_NAME";
    exports[1632] = "ER_TABLE_NAME";
    exports[1633] = "ER_PARTITION_NAME";
    exports[1634] = "ER_SUBPARTITION_NAME";
    exports[1635] = "ER_TEMPORARY_NAME";
    exports[1636] = "ER_RENAMED_NAME";
    exports[1637] = "ER_TOO_MANY_CONCURRENT_TRXS";
    exports[1638] = "WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED";
    exports[1639] = "ER_DEBUG_SYNC_TIMEOUT";
    exports[1640] = "ER_DEBUG_SYNC_HIT_LIMIT";
    exports[1641] = "ER_DUP_SIGNAL_SET";
    exports[1642] = "ER_SIGNAL_WARN";
    exports[1643] = "ER_SIGNAL_NOT_FOUND";
    exports[1644] = "ER_SIGNAL_EXCEPTION";
    exports[1645] = "ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER";
    exports[1646] = "ER_SIGNAL_BAD_CONDITION_TYPE";
    exports[1647] = "WARN_COND_ITEM_TRUNCATED";
    exports[1648] = "ER_COND_ITEM_TOO_LONG";
    exports[1649] = "ER_UNKNOWN_LOCALE";
    exports[1650] = "ER_SLAVE_IGNORE_SERVER_IDS";
    exports[1651] = "ER_QUERY_CACHE_DISABLED";
    exports[1652] = "ER_SAME_NAME_PARTITION_FIELD";
    exports[1653] = "ER_PARTITION_COLUMN_LIST_ERROR";
    exports[1654] = "ER_WRONG_TYPE_COLUMN_VALUE_ERROR";
    exports[1655] = "ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR";
    exports[1656] = "ER_MAXVALUE_IN_VALUES_IN";
    exports[1657] = "ER_TOO_MANY_VALUES_ERROR";
    exports[1658] = "ER_ROW_SINGLE_PARTITION_FIELD_ERROR";
    exports[1659] = "ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD";
    exports[1660] = "ER_PARTITION_FIELDS_TOO_LONG";
    exports[1661] = "ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE";
    exports[1662] = "ER_BINLOG_ROW_MODE_AND_STMT_ENGINE";
    exports[1663] = "ER_BINLOG_UNSAFE_AND_STMT_ENGINE";
    exports[1664] = "ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE";
    exports[1665] = "ER_BINLOG_STMT_MODE_AND_ROW_ENGINE";
    exports[1666] = "ER_BINLOG_ROW_INJECTION_AND_STMT_MODE";
    exports[1667] = "ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE";
    exports[1668] = "ER_BINLOG_UNSAFE_LIMIT";
    exports[1669] = "ER_BINLOG_UNSAFE_INSERT_DELAYED";
    exports[1670] = "ER_BINLOG_UNSAFE_SYSTEM_TABLE";
    exports[1671] = "ER_BINLOG_UNSAFE_AUTOINC_COLUMNS";
    exports[1672] = "ER_BINLOG_UNSAFE_UDF";
    exports[1673] = "ER_BINLOG_UNSAFE_SYSTEM_VARIABLE";
    exports[1674] = "ER_BINLOG_UNSAFE_SYSTEM_FUNCTION";
    exports[1675] = "ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS";
    exports[1676] = "ER_MESSAGE_AND_STATEMENT";
    exports[1677] = "ER_SLAVE_CONVERSION_FAILED";
    exports[1678] = "ER_SLAVE_CANT_CREATE_CONVERSION";
    exports[1679] = "ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT";
    exports[1680] = "ER_PATH_LENGTH";
    exports[1681] = "ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT";
    exports[1682] = "ER_WRONG_NATIVE_TABLE_STRUCTURE";
    exports[1683] = "ER_WRONG_PERFSCHEMA_USAGE";
    exports[1684] = "ER_WARN_I_S_SKIPPED_TABLE";
    exports[1685] = "ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT";
    exports[1686] = "ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT";
    exports[1687] = "ER_SPATIAL_MUST_HAVE_GEOM_COL";
    exports[1688] = "ER_TOO_LONG_INDEX_COMMENT";
    exports[1689] = "ER_LOCK_ABORTED";
    exports[1690] = "ER_DATA_OUT_OF_RANGE";
    exports[1691] = "ER_WRONG_SPVAR_TYPE_IN_LIMIT";
    exports[1692] = "ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE";
    exports[1693] = "ER_BINLOG_UNSAFE_MIXED_STATEMENT";
    exports[1694] = "ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN";
    exports[1695] = "ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN";
    exports[1696] = "ER_FAILED_READ_FROM_PAR_FILE";
    exports[1697] = "ER_VALUES_IS_NOT_INT_TYPE_ERROR";
    exports[1698] = "ER_ACCESS_DENIED_NO_PASSWORD_ERROR";
    exports[1699] = "ER_SET_PASSWORD_AUTH_PLUGIN";
    exports[1700] = "ER_GRANT_PLUGIN_USER_EXISTS";
    exports[1701] = "ER_TRUNCATE_ILLEGAL_FK";
    exports[1702] = "ER_PLUGIN_IS_PERMANENT";
    exports[1703] = "ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN";
    exports[1704] = "ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX";
    exports[1705] = "ER_STMT_CACHE_FULL";
    exports[1706] = "ER_MULTI_UPDATE_KEY_CONFLICT";
    exports[1707] = "ER_TABLE_NEEDS_REBUILD";
    exports[1708] = "WARN_OPTION_BELOW_LIMIT";
    exports[1709] = "ER_INDEX_COLUMN_TOO_LONG";
    exports[1710] = "ER_ERROR_IN_TRIGGER_BODY";
    exports[1711] = "ER_ERROR_IN_UNKNOWN_TRIGGER_BODY";
    exports[1712] = "ER_INDEX_CORRUPT";
    exports[1713] = "ER_UNDO_RECORD_TOO_BIG";
    exports[1714] = "ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT";
    exports[1715] = "ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE";
    exports[1716] = "ER_BINLOG_UNSAFE_REPLACE_SELECT";
    exports[1717] = "ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT";
    exports[1718] = "ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT";
    exports[1719] = "ER_BINLOG_UNSAFE_UPDATE_IGNORE";
    exports[1720] = "ER_PLUGIN_NO_UNINSTALL";
    exports[1721] = "ER_PLUGIN_NO_INSTALL";
    exports[1722] = "ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT";
    exports[1723] = "ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC";
    exports[1724] = "ER_BINLOG_UNSAFE_INSERT_TWO_KEYS";
    exports[1725] = "ER_TABLE_IN_FK_CHECK";
    exports[1726] = "ER_UNSUPPORTED_ENGINE";
    exports[1727] = "ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST";
    exports[1728] = "ER_CANNOT_LOAD_FROM_TABLE_V2";
    exports[1729] = "ER_MASTER_DELAY_VALUE_OUT_OF_RANGE";
    exports[1730] = "ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT";
    exports[1731] = "ER_PARTITION_EXCHANGE_DIFFERENT_OPTION";
    exports[1732] = "ER_PARTITION_EXCHANGE_PART_TABLE";
    exports[1733] = "ER_PARTITION_EXCHANGE_TEMP_TABLE";
    exports[1734] = "ER_PARTITION_INSTEAD_OF_SUBPARTITION";
    exports[1735] = "ER_UNKNOWN_PARTITION";
    exports[1736] = "ER_TABLES_DIFFERENT_METADATA";
    exports[1737] = "ER_ROW_DOES_NOT_MATCH_PARTITION";
    exports[1738] = "ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX";
    exports[1739] = "ER_WARN_INDEX_NOT_APPLICABLE";
    exports[1740] = "ER_PARTITION_EXCHANGE_FOREIGN_KEY";
    exports[1741] = "ER_NO_SUCH_KEY_VALUE";
    exports[1742] = "ER_RPL_INFO_DATA_TOO_LONG";
    exports[1743] = "ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE";
    exports[1744] = "ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE";
    exports[1745] = "ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX";
    exports[1746] = "ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT";
    exports[1747] = "ER_PARTITION_CLAUSE_ON_NONPARTITIONED";
    exports[1748] = "ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET";
    exports[1749] = "ER_NO_SUCH_PARTITION";
    exports[1750] = "ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE";
    exports[1751] = "ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE";
    exports[1752] = "ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE";
    exports[1753] = "ER_MTS_FEATURE_IS_NOT_SUPPORTED";
    exports[1754] = "ER_MTS_UPDATED_DBS_GREATER_MAX";
    exports[1755] = "ER_MTS_CANT_PARALLEL";
    exports[1756] = "ER_MTS_INCONSISTENT_DATA";
    exports[1757] = "ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING";
    exports[1758] = "ER_DA_INVALID_CONDITION_NUMBER";
    exports[1759] = "ER_INSECURE_PLAIN_TEXT";
    exports[1760] = "ER_INSECURE_CHANGE_MASTER";
    exports[1761] = "ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO";
    exports[1762] = "ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO";
    exports[1763] = "ER_SQLTHREAD_WITH_SECURE_SLAVE";
    exports[1764] = "ER_TABLE_HAS_NO_FT";
    exports[1765] = "ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER";
    exports[1766] = "ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION";
    exports[1767] = "ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST";
    exports[1768] = "ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION";
    exports[1769] = "ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION";
    exports[1770] = "ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL";
    exports[1771] = "ER_SKIPPING_LOGGED_TRANSACTION";
    exports[1772] = "ER_MALFORMED_GTID_SET_SPECIFICATION";
    exports[1773] = "ER_MALFORMED_GTID_SET_ENCODING";
    exports[1774] = "ER_MALFORMED_GTID_SPECIFICATION";
    exports[1775] = "ER_GNO_EXHAUSTED";
    exports[1776] = "ER_BAD_SLAVE_AUTO_POSITION";
    exports[1777] = "ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF";
    exports[1778] = "ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET";
    exports[1779] = "ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON";
    exports[1780] = "ER_GTID_MODE_REQUIRES_BINLOG";
    exports[1781] = "ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF";
    exports[1782] = "ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON";
    exports[1783] = "ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF";
    exports[1784] = "ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF";
    exports[1785] = "ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE";
    exports[1786] = "ER_GTID_UNSAFE_CREATE_SELECT";
    exports[1787] = "ER_GTID_UNSAFE_CREATE_DROP_TEMPORARY_TABLE_IN_TRANSACTION";
    exports[1788] = "ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME";
    exports[1789] = "ER_MASTER_HAS_PURGED_REQUIRED_GTIDS";
    exports[1790] = "ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID";
    exports[1791] = "ER_UNKNOWN_EXPLAIN_FORMAT";
    exports[1792] = "ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION";
    exports[1793] = "ER_TOO_LONG_TABLE_PARTITION_COMMENT";
    exports[1794] = "ER_SLAVE_CONFIGURATION";
    exports[1795] = "ER_INNODB_FT_LIMIT";
    exports[1796] = "ER_INNODB_NO_FT_TEMP_TABLE";
    exports[1797] = "ER_INNODB_FT_WRONG_DOCID_COLUMN";
    exports[1798] = "ER_INNODB_FT_WRONG_DOCID_INDEX";
    exports[1799] = "ER_INNODB_ONLINE_LOG_TOO_BIG";
    exports[1800] = "ER_UNKNOWN_ALTER_ALGORITHM";
    exports[1801] = "ER_UNKNOWN_ALTER_LOCK";
    exports[1802] = "ER_MTS_CHANGE_MASTER_CANT_RUN_WITH_GAPS";
    exports[1803] = "ER_MTS_RECOVERY_FAILURE";
    exports[1804] = "ER_MTS_RESET_WORKERS";
    exports[1805] = "ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2";
    exports[1806] = "ER_SLAVE_SILENT_RETRY_TRANSACTION";
    exports[1807] = "ER_DISCARD_FK_CHECKS_RUNNING";
    exports[1808] = "ER_TABLE_SCHEMA_MISMATCH";
    exports[1809] = "ER_TABLE_IN_SYSTEM_TABLESPACE";
    exports[1810] = "ER_IO_READ_ERROR";
    exports[1811] = "ER_IO_WRITE_ERROR";
    exports[1812] = "ER_TABLESPACE_MISSING";
    exports[1813] = "ER_TABLESPACE_EXISTS";
    exports[1814] = "ER_TABLESPACE_DISCARDED";
    exports[1815] = "ER_INTERNAL_ERROR";
    exports[1816] = "ER_INNODB_IMPORT_ERROR";
    exports[1817] = "ER_INNODB_INDEX_CORRUPT";
    exports[1818] = "ER_INVALID_YEAR_COLUMN_LENGTH";
    exports[1819] = "ER_NOT_VALID_PASSWORD";
    exports[1820] = "ER_MUST_CHANGE_PASSWORD";
    exports[1821] = "ER_FK_NO_INDEX_CHILD";
    exports[1822] = "ER_FK_NO_INDEX_PARENT";
    exports[1823] = "ER_FK_FAIL_ADD_SYSTEM";
    exports[1824] = "ER_FK_CANNOT_OPEN_PARENT";
    exports[1825] = "ER_FK_INCORRECT_OPTION";
    exports[1826] = "ER_FK_DUP_NAME";
    exports[1827] = "ER_PASSWORD_FORMAT";
    exports[1828] = "ER_FK_COLUMN_CANNOT_DROP";
    exports[1829] = "ER_FK_COLUMN_CANNOT_DROP_CHILD";
    exports[1830] = "ER_FK_COLUMN_NOT_NULL";
    exports[1831] = "ER_DUP_INDEX";
    exports[1832] = "ER_FK_COLUMN_CANNOT_CHANGE";
    exports[1833] = "ER_FK_COLUMN_CANNOT_CHANGE_CHILD";
    exports[1834] = "ER_FK_CANNOT_DELETE_PARENT";
    exports[1835] = "ER_MALFORMED_PACKET";
    exports[1836] = "ER_READ_ONLY_MODE";
    exports[1837] = "ER_GTID_NEXT_TYPE_UNDEFINED_GROUP";
    exports[1838] = "ER_VARIABLE_NOT_SETTABLE_IN_SP";
    exports[1839] = "ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF";
    exports[1840] = "ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY";
    exports[1841] = "ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY";
    exports[1842] = "ER_GTID_PURGED_WAS_CHANGED";
    exports[1843] = "ER_GTID_EXECUTED_WAS_CHANGED";
    exports[1844] = "ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES";
    exports[1845] = "ER_ALTER_OPERATION_NOT_SUPPORTED";
    exports[1846] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON";
    exports[1847] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY";
    exports[1848] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION";
    exports[1849] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME";
    exports[1850] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE";
    exports[1851] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK";
    exports[1852] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE";
    exports[1853] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK";
    exports[1854] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC";
    exports[1855] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS";
    exports[1856] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS";
    exports[1857] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS";
    exports[1858] = "ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE";
    exports[1859] = "ER_DUP_UNKNOWN_IN_INDEX";
    exports[1860] = "ER_IDENT_CAUSES_TOO_LONG_PATH";
    exports[1861] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL";
    exports[1862] = "ER_MUST_CHANGE_PASSWORD_LOGIN";
    exports[1863] = "ER_ROW_IN_WRONG_PARTITION";
    exports[1864] = "ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX";
    exports[1865] = "ER_INNODB_NO_FT_USES_PARSER";
    exports[1866] = "ER_BINLOG_LOGICAL_CORRUPTION";
    exports[1867] = "ER_WARN_PURGE_LOG_IN_USE";
    exports[1868] = "ER_WARN_PURGE_LOG_IS_ACTIVE";
    exports[1869] = "ER_AUTO_INCREMENT_CONFLICT";
    exports[1870] = "WARN_ON_BLOCKHOLE_IN_RBR";
    exports[1871] = "ER_SLAVE_MI_INIT_REPOSITORY";
    exports[1872] = "ER_SLAVE_RLI_INIT_REPOSITORY";
    exports[1873] = "ER_ACCESS_DENIED_CHANGE_USER_ERROR";
    exports[1874] = "ER_INNODB_READ_ONLY";
    exports[1875] = "ER_STOP_SLAVE_SQL_THREAD_TIMEOUT";
    exports[1876] = "ER_STOP_SLAVE_IO_THREAD_TIMEOUT";
    exports[1877] = "ER_TABLE_CORRUPT";
    exports[1878] = "ER_TEMP_FILE_WRITE_FAILURE";
    exports[1879] = "ER_INNODB_FT_AUX_NOT_HEX_ID";
    exports[1880] = "ER_OLD_TEMPORALS_UPGRADED";
    exports[1881] = "ER_INNODB_FORCED_RECOVERY";
    exports[1882] = "ER_AES_INVALID_IV";
    exports[1883] = "ER_PLUGIN_CANNOT_BE_UNINSTALLED";
    exports[1884] = "ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP";
    exports[1885] = "ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER";
    exports[1886] = "ER_MISSING_KEY";
    exports[1887] = "WARN_NAMED_PIPE_ACCESS_EVERYONE";
    exports[1888] = "ER_FOUND_MISSING_GTIDS";
    exports[3e3] = "ER_FILE_CORRUPT";
    exports[3001] = "ER_ERROR_ON_MASTER";
    exports[3002] = "ER_INCONSISTENT_ERROR";
    exports[3003] = "ER_STORAGE_ENGINE_NOT_LOADED";
    exports[3004] = "ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER";
    exports[3005] = "ER_WARN_LEGACY_SYNTAX_CONVERTED";
    exports[3006] = "ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN";
    exports[3007] = "ER_CANNOT_DISCARD_TEMPORARY_TABLE";
    exports[3008] = "ER_FK_DEPTH_EXCEEDED";
    exports[3009] = "ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2";
    exports[3010] = "ER_WARN_TRIGGER_DOESNT_HAVE_CREATED";
    exports[3011] = "ER_REFERENCED_TRG_DOES_NOT_EXIST";
    exports[3012] = "ER_EXPLAIN_NOT_SUPPORTED";
    exports[3013] = "ER_INVALID_FIELD_SIZE";
    exports[3014] = "ER_MISSING_HA_CREATE_OPTION";
    exports[3015] = "ER_ENGINE_OUT_OF_MEMORY";
    exports[3016] = "ER_PASSWORD_EXPIRE_ANONYMOUS_USER";
    exports[3017] = "ER_SLAVE_SQL_THREAD_MUST_STOP";
    exports[3018] = "ER_NO_FT_MATERIALIZED_SUBQUERY";
    exports[3019] = "ER_INNODB_UNDO_LOG_FULL";
    exports[3020] = "ER_INVALID_ARGUMENT_FOR_LOGARITHM";
    exports[3021] = "ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP";
    exports[3022] = "ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO";
    exports[3023] = "ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS";
    exports[3024] = "ER_QUERY_TIMEOUT";
    exports[3025] = "ER_NON_RO_SELECT_DISABLE_TIMER";
    exports[3026] = "ER_DUP_LIST_ENTRY";
    exports[3027] = "ER_SQL_MODE_NO_EFFECT";
    exports[3028] = "ER_AGGREGATE_ORDER_FOR_UNION";
    exports[3029] = "ER_AGGREGATE_ORDER_NON_AGG_QUERY";
    exports[3030] = "ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR";
    exports[3031] = "ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER";
    exports[3032] = "ER_SERVER_OFFLINE_MODE";
    exports[3033] = "ER_GIS_DIFFERENT_SRIDS";
    exports[3034] = "ER_GIS_UNSUPPORTED_ARGUMENT";
    exports[3035] = "ER_GIS_UNKNOWN_ERROR";
    exports[3036] = "ER_GIS_UNKNOWN_EXCEPTION";
    exports[3037] = "ER_GIS_INVALID_DATA";
    exports[3038] = "ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION";
    exports[3039] = "ER_BOOST_GEOMETRY_CENTROID_EXCEPTION";
    exports[3040] = "ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION";
    exports[3041] = "ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION";
    exports[3042] = "ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION";
    exports[3043] = "ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION";
    exports[3044] = "ER_STD_BAD_ALLOC_ERROR";
    exports[3045] = "ER_STD_DOMAIN_ERROR";
    exports[3046] = "ER_STD_LENGTH_ERROR";
    exports[3047] = "ER_STD_INVALID_ARGUMENT";
    exports[3048] = "ER_STD_OUT_OF_RANGE_ERROR";
    exports[3049] = "ER_STD_OVERFLOW_ERROR";
    exports[3050] = "ER_STD_RANGE_ERROR";
    exports[3051] = "ER_STD_UNDERFLOW_ERROR";
    exports[3052] = "ER_STD_LOGIC_ERROR";
    exports[3053] = "ER_STD_RUNTIME_ERROR";
    exports[3054] = "ER_STD_UNKNOWN_EXCEPTION";
    exports[3055] = "ER_GIS_DATA_WRONG_ENDIANESS";
    exports[3056] = "ER_CHANGE_MASTER_PASSWORD_LENGTH";
    exports[3057] = "ER_USER_LOCK_WRONG_NAME";
    exports[3058] = "ER_USER_LOCK_DEADLOCK";
    exports[3059] = "ER_REPLACE_INACCESSIBLE_ROWS";
    exports[3060] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS";
    exports[3061] = "ER_ILLEGAL_USER_VAR";
    exports[3062] = "ER_GTID_MODE_OFF";
    exports[3063] = "ER_UNSUPPORTED_BY_REPLICATION_THREAD";
    exports[3064] = "ER_INCORRECT_TYPE";
    exports[3065] = "ER_FIELD_IN_ORDER_NOT_SELECT";
    exports[3066] = "ER_AGGREGATE_IN_ORDER_NOT_SELECT";
    exports[3067] = "ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN";
    exports[3068] = "ER_NET_OK_PACKET_TOO_LARGE";
    exports[3069] = "ER_INVALID_JSON_DATA";
    exports[3070] = "ER_INVALID_GEOJSON_MISSING_MEMBER";
    exports[3071] = "ER_INVALID_GEOJSON_WRONG_TYPE";
    exports[3072] = "ER_INVALID_GEOJSON_UNSPECIFIED";
    exports[3073] = "ER_DIMENSION_UNSUPPORTED";
    exports[3074] = "ER_SLAVE_CHANNEL_DOES_NOT_EXIST";
    exports[3075] = "ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT";
    exports[3076] = "ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG";
    exports[3077] = "ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY";
    exports[3078] = "ER_SLAVE_CHANNEL_DELETE";
    exports[3079] = "ER_SLAVE_MULTIPLE_CHANNELS_CMD";
    exports[3080] = "ER_SLAVE_MAX_CHANNELS_EXCEEDED";
    exports[3081] = "ER_SLAVE_CHANNEL_MUST_STOP";
    exports[3082] = "ER_SLAVE_CHANNEL_NOT_RUNNING";
    exports[3083] = "ER_SLAVE_CHANNEL_WAS_RUNNING";
    exports[3084] = "ER_SLAVE_CHANNEL_WAS_NOT_RUNNING";
    exports[3085] = "ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP";
    exports[3086] = "ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER";
    exports[3087] = "ER_WRONG_FIELD_WITH_GROUP_V2";
    exports[3088] = "ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2";
    exports[3089] = "ER_WARN_DEPRECATED_SYSVAR_UPDATE";
    exports[3090] = "ER_WARN_DEPRECATED_SQLMODE";
    exports[3091] = "ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID";
    exports[3092] = "ER_GROUP_REPLICATION_CONFIGURATION";
    exports[3093] = "ER_GROUP_REPLICATION_RUNNING";
    exports[3094] = "ER_GROUP_REPLICATION_APPLIER_INIT_ERROR";
    exports[3095] = "ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT";
    exports[3096] = "ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR";
    exports[3097] = "ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR";
    exports[3098] = "ER_BEFORE_DML_VALIDATION_ERROR";
    exports[3099] = "ER_PREVENTS_VARIABLE_WITHOUT_RBR";
    exports[3100] = "ER_RUN_HOOK_ERROR";
    exports[3101] = "ER_TRANSACTION_ROLLBACK_DURING_COMMIT";
    exports[3102] = "ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED";
    exports[3103] = "ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN";
    exports[3104] = "ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN";
    exports[3105] = "ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN";
    exports[3106] = "ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN";
    exports[3107] = "ER_GENERATED_COLUMN_NON_PRIOR";
    exports[3108] = "ER_DEPENDENT_BY_GENERATED_COLUMN";
    exports[3109] = "ER_GENERATED_COLUMN_REF_AUTO_INC";
    exports[3110] = "ER_FEATURE_NOT_AVAILABLE";
    exports[3111] = "ER_CANT_SET_GTID_MODE";
    exports[3112] = "ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF";
    exports[3113] = "ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION";
    exports[3114] = "ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON";
    exports[3115] = "ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF";
    exports[3116] = "ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS";
    exports[3117] = "ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS";
    exports[3118] = "ER_ACCOUNT_HAS_BEEN_LOCKED";
    exports[3119] = "ER_WRONG_TABLESPACE_NAME";
    exports[3120] = "ER_TABLESPACE_IS_NOT_EMPTY";
    exports[3121] = "ER_WRONG_FILE_NAME";
    exports[3122] = "ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION";
    exports[3123] = "ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR";
    exports[3124] = "ER_WARN_BAD_MAX_EXECUTION_TIME";
    exports[3125] = "ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME";
    exports[3126] = "ER_WARN_CONFLICTING_HINT";
    exports[3127] = "ER_WARN_UNKNOWN_QB_NAME";
    exports[3128] = "ER_UNRESOLVED_HINT_NAME";
    exports[3129] = "ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE";
    exports[3130] = "ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED";
    exports[3131] = "ER_LOCKING_SERVICE_WRONG_NAME";
    exports[3132] = "ER_LOCKING_SERVICE_DEADLOCK";
    exports[3133] = "ER_LOCKING_SERVICE_TIMEOUT";
    exports[3134] = "ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED";
    exports[3135] = "ER_SQL_MODE_MERGED";
    exports[3136] = "ER_VTOKEN_PLUGIN_TOKEN_MISMATCH";
    exports[3137] = "ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND";
    exports[3138] = "ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID";
    exports[3139] = "ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED";
    exports[3140] = "ER_INVALID_JSON_TEXT";
    exports[3141] = "ER_INVALID_JSON_TEXT_IN_PARAM";
    exports[3142] = "ER_INVALID_JSON_BINARY_DATA";
    exports[3143] = "ER_INVALID_JSON_PATH";
    exports[3144] = "ER_INVALID_JSON_CHARSET";
    exports[3145] = "ER_INVALID_JSON_CHARSET_IN_FUNCTION";
    exports[3146] = "ER_INVALID_TYPE_FOR_JSON";
    exports[3147] = "ER_INVALID_CAST_TO_JSON";
    exports[3148] = "ER_INVALID_JSON_PATH_CHARSET";
    exports[3149] = "ER_INVALID_JSON_PATH_WILDCARD";
    exports[3150] = "ER_JSON_VALUE_TOO_BIG";
    exports[3151] = "ER_JSON_KEY_TOO_BIG";
    exports[3152] = "ER_JSON_USED_AS_KEY";
    exports[3153] = "ER_JSON_VACUOUS_PATH";
    exports[3154] = "ER_JSON_BAD_ONE_OR_ALL_ARG";
    exports[3155] = "ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE";
    exports[3156] = "ER_INVALID_JSON_VALUE_FOR_CAST";
    exports[3157] = "ER_JSON_DOCUMENT_TOO_DEEP";
    exports[3158] = "ER_JSON_DOCUMENT_NULL_KEY";
    exports[3159] = "ER_SECURE_TRANSPORT_REQUIRED";
    exports[3160] = "ER_NO_SECURE_TRANSPORTS_CONFIGURED";
    exports[3161] = "ER_DISABLED_STORAGE_ENGINE";
    exports[3162] = "ER_USER_DOES_NOT_EXIST";
    exports[3163] = "ER_USER_ALREADY_EXISTS";
    exports[3164] = "ER_AUDIT_API_ABORT";
    exports[3165] = "ER_INVALID_JSON_PATH_ARRAY_CELL";
    exports[3166] = "ER_BUFPOOL_RESIZE_INPROGRESS";
    exports[3167] = "ER_FEATURE_DISABLED_SEE_DOC";
    exports[3168] = "ER_SERVER_ISNT_AVAILABLE";
    exports[3169] = "ER_SESSION_WAS_KILLED";
    exports[3170] = "ER_CAPACITY_EXCEEDED";
    exports[3171] = "ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER";
    exports[3172] = "ER_TABLE_NEEDS_UPG_PART";
    exports[3173] = "ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID";
    exports[3174] = "ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL";
    exports[3175] = "ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT";
    exports[3176] = "ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE";
    exports[3177] = "ER_LOCK_REFUSED_BY_ENGINE";
    exports[3178] = "ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN";
    exports[3179] = "ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE";
    exports[3180] = "ER_MASTER_KEY_ROTATION_ERROR_BY_SE";
    exports[3181] = "ER_MASTER_KEY_ROTATION_BINLOG_FAILED";
    exports[3182] = "ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE";
    exports[3183] = "ER_TABLESPACE_CANNOT_ENCRYPT";
    exports[3184] = "ER_INVALID_ENCRYPTION_OPTION";
    exports[3185] = "ER_CANNOT_FIND_KEY_IN_KEYRING";
    exports[3186] = "ER_CAPACITY_EXCEEDED_IN_PARSER";
    exports[3187] = "ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE";
    exports[3188] = "ER_KEYRING_UDF_KEYRING_SERVICE_ERROR";
    exports[3189] = "ER_USER_COLUMN_OLD_LENGTH";
    exports[3190] = "ER_CANT_RESET_MASTER";
    exports[3191] = "ER_GROUP_REPLICATION_MAX_GROUP_SIZE";
    exports[3192] = "ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED";
    exports[3193] = "ER_TABLE_REFERENCED";
    exports[3194] = "ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE";
    exports[3195] = "ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO";
    exports[3196] = "ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID";
    exports[3197] = "ER_XA_RETRY";
    exports[3198] = "ER_KEYRING_AWS_UDF_AWS_KMS_ERROR";
    exports[3199] = "ER_BINLOG_UNSAFE_XA";
    exports[3200] = "ER_UDF_ERROR";
    exports[3201] = "ER_KEYRING_MIGRATION_FAILURE";
    exports[3202] = "ER_KEYRING_ACCESS_DENIED_ERROR";
    exports[3203] = "ER_KEYRING_MIGRATION_STATUS";
    exports[3204] = "ER_PLUGIN_FAILED_TO_OPEN_TABLES";
    exports[3205] = "ER_PLUGIN_FAILED_TO_OPEN_TABLE";
    exports[3206] = "ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED";
    exports[3207] = "ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET";
    exports[3208] = "ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY";
    exports[3209] = "ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED";
    exports[3210] = "ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED";
    exports[3211] = "ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE";
    exports[3212] = "ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED";
    exports[3213] = "ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS";
    exports[3214] = "ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE";
    exports[3215] = "ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT";
    exports[3216] = "ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED";
    exports[3217] = "ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE";
    exports[3218] = "ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE";
    exports[3219] = "ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR";
    exports[3220] = "ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY";
    exports[3221] = "ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY";
    exports[3222] = "ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS";
    exports[3223] = "ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC";
    exports[3224] = "ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER";
    exports[3225] = "ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER";
    exports[3226] = "WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP";
    exports[3227] = "ER_XA_REPLICATION_FILTERS";
    exports[3228] = "ER_CANT_OPEN_ERROR_LOG";
    exports[3229] = "ER_GROUPING_ON_TIMESTAMP_IN_DST";
    exports[3230] = "ER_CANT_START_SERVER_NAMED_PIPE";
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/setimmediate.js
function setImmediate2(callback) {
  if (typeof callback !== "function") {
    callback = new Function("" + callback);
  }
  var args = new Array(arguments.length - 1);
  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i + 1];
  }
  var task = { callback, args };
  tasksByHandle[nextHandle] = task;
  registerImmediate(nextHandle);
  return nextHandle++;
}
function clearImmediate(handle) {
  delete tasksByHandle[handle];
}
function run(task) {
  var callback = task.callback;
  var args = task.args;
  switch (args.length) {
    case 0:
      callback();
      break;
    case 1:
      callback(args[0]);
      break;
    case 2:
      callback(args[0], args[1]);
      break;
    case 3:
      callback(args[0], args[1], args[2]);
      break;
    default:
      callback.apply(void 0, args);
      break;
  }
}
function runIfPresent(handle) {
  if (currentlyRunningATask) {
    setTimeout(runIfPresent, 0, handle);
  } else {
    var task = tasksByHandle[handle];
    if (task) {
      currentlyRunningATask = true;
      try {
        run(task);
      } finally {
        clearImmediate(handle);
        currentlyRunningATask = false;
      }
    }
  }
}
function installNextTickImplementation() {
  registerImmediate = function(handle) {
    process.nextTick(function() {
      runIfPresent(handle);
    });
  };
}
function canUsePostMessage() {
  if (globalThis.postMessage && !globalThis.importScripts) {
    var postMessageIsAsynchronous = true;
    var oldOnMessage = globalThis.onmessage;
    globalThis.onmessage = function() {
      postMessageIsAsynchronous = false;
    };
    globalThis.postMessage("", "*");
    globalThis.onmessage = oldOnMessage;
    return postMessageIsAsynchronous;
  }
}
function installPostMessageImplementation() {
  var messagePrefix = "setImmediate$" + Math.random() + "$";
  var onGlobalMessage = function(event) {
    if (event.source === globalThis && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
      runIfPresent(+event.data.slice(messagePrefix.length));
    }
  };
  if (globalThis.addEventListener) {
    globalThis.addEventListener("message", onGlobalMessage, false);
  } else {
    globalThis.attachEvent("onmessage", onGlobalMessage);
  }
  registerImmediate = function(handle) {
    globalThis.postMessage(messagePrefix + handle, "*");
  };
}
function installMessageChannelImplementation() {
  var channel = new MessageChannel();
  channel.port1.onmessage = function(event) {
    var handle = event.data;
    runIfPresent(handle);
  };
  registerImmediate = function(handle) {
    channel.port2.postMessage(handle);
  };
}
function installReadyStateChangeImplementation() {
  var html = doc.documentElement;
  registerImmediate = function(handle) {
    var script = doc.createElement("script");
    script.onreadystatechange = function() {
      runIfPresent(handle);
      script.onreadystatechange = null;
      html.removeChild(script);
      script = null;
    };
    html.appendChild(script);
  };
}
function installSetTimeoutImplementation() {
  registerImmediate = function(handle) {
    setTimeout(runIfPresent, 0, handle);
  };
}
var nextHandle, tasksByHandle, currentlyRunningATask, doc, registerImmediate, attachTo;
var init_setimmediate = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/setimmediate.js"() {
    init_react();
    nextHandle = 1;
    tasksByHandle = {};
    currentlyRunningATask = false;
    doc = globalThis.document;
    attachTo = Object.getPrototypeOf && Object.getPrototypeOf(globalThis);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : globalThis;
    if ({}.toString.call(globalThis.process) === "[object process]") {
      installNextTickImplementation();
    } else if (canUsePostMessage()) {
      installPostMessageImplementation();
    } else if (globalThis.MessageChannel) {
      installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
      installReadyStateChangeImplementation();
    } else {
      installSetTimeoutImplementation();
    }
  }
});

// node-modules-polyfills:timers
var timers_exports = {};
__export(timers_exports, {
  _unrefActive: () => _unrefActive,
  active: () => active,
  clearImmediate: () => clearImmediate,
  clearInterval: () => clearInterval,
  clearTimeout: () => clearTimeout2,
  default: () => timers_default,
  enroll: () => enroll,
  setImmediate: () => setImmediate2,
  setInterval: () => setInterval,
  setTimeout: () => setTimeout2,
  unenroll: () => unenroll
});
function clearInterval(timeout) {
  if (typeof timeout === "number" && typeof globalThis.clearInterval === "function") {
    globalThis.clearInterval(timeout);
  } else {
    clearFn(timeout);
  }
}
function clearTimeout2(timeout) {
  if (typeof timeout === "number" && typeof globalThis.clearTimeout === "function") {
    globalThis.clearTimeout(timeout);
  } else {
    clearFn(timeout);
  }
}
function clearFn(timeout) {
  if (timeout && typeof timeout.close === "function") {
    timeout.close();
  }
}
function setTimeout2() {
  return new Timeout(apply.call(globalThis.setTimeout, window, arguments), clearTimeout2);
}
function setInterval() {
  return new Timeout(apply.call(globalThis.setInterval, window, arguments), clearInterval);
}
function Timeout(id) {
  this._id = id;
}
function enroll(item, msecs) {
  clearTimeout2(item._idleTimeoutId);
  item._idleTimeout = msecs;
}
function unenroll(item) {
  clearTimeout2(item._idleTimeoutId);
  item._idleTimeout = -1;
}
function active(item) {
  clearTimeout2(item._idleTimeoutId);
  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout2(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
}
var apply, _unrefActive, timers_default;
var init_timers = __esm({
  "node-modules-polyfills:timers"() {
    init_react();
    init_setimmediate();
    apply = Function.prototype.apply;
    Timeout.prototype.unref = Timeout.prototype.ref = function() {
    };
    Timeout.prototype.close = function() {
      clearFn(this._id);
    };
    _unrefActive = active;
    timers_default = {
      setImmediate: setImmediate2,
      clearImmediate,
      setTimeout: setTimeout2,
      clearTimeout: clearTimeout2,
      setInterval,
      clearInterval,
      active,
      unenroll,
      _unrefActive,
      enroll
    };
  }
});

// node-modules-polyfills-commonjs:timers
var require_timers = __commonJS({
  "node-modules-polyfills-commonjs:timers"(exports, module) {
    init_react();
    var polyfill = (init_timers(), __toCommonJS(timers_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/mysql/lib/protocol/Timer.js
var require_Timer = __commonJS({
  "node_modules/mysql/lib/protocol/Timer.js"(exports, module) {
    init_react();
    var Timers = require_timers();
    module.exports = Timer;
    function Timer(object) {
      this._object = object;
      this._timeout = null;
    }
    Timer.prototype.active = function active2() {
      if (this._timeout) {
        if (this._timeout.refresh) {
          this._timeout.refresh();
        } else {
          Timers.active(this._timeout);
        }
      }
    };
    Timer.prototype.start = function start(msecs) {
      this.stop();
      this._timeout = Timers.setTimeout(this._onTimeout.bind(this), msecs);
    };
    Timer.prototype.stop = function stop() {
      if (this._timeout) {
        Timers.clearTimeout(this._timeout);
        this._timeout = null;
      }
    };
    Timer.prototype._onTimeout = function _onTimeout() {
      return this._object._onTimeout();
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/Sequence.js
var require_Sequence = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/Sequence.js"(exports, module) {
    init_react();
    var Util = require_util();
    var EventEmitter2 = require_events().EventEmitter;
    var Packets = require_packets();
    var ErrorConstants = require_errors();
    var Timer = require_Timer();
    var listenerCount3 = EventEmitter2.listenerCount || function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var LONG_STACK_DELIMITER = "\n    --------------------\n";
    module.exports = Sequence;
    Util.inherits(Sequence, EventEmitter2);
    function Sequence(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      EventEmitter2.call(this);
      options = options || {};
      this._callback = callback;
      this._callSite = null;
      this._ended = false;
      this._timeout = options.timeout;
      this._timer = new Timer(this);
    }
    Sequence.determinePacket = function(byte) {
      switch (byte) {
        case 0:
          return Packets.OkPacket;
        case 254:
          return Packets.EofPacket;
        case 255:
          return Packets.ErrorPacket;
        default:
          return void 0;
      }
    };
    Sequence.prototype.hasErrorHandler = function() {
      return Boolean(this._callback) || listenerCount3(this, "error") > 1;
    };
    Sequence.prototype._packetToError = function(packet) {
      var code = ErrorConstants[packet.errno] || "UNKNOWN_CODE_PLEASE_REPORT";
      var err = new Error(code + ": " + packet.message);
      err.code = code;
      err.errno = packet.errno;
      err.sqlMessage = packet.message;
      err.sqlState = packet.sqlState;
      return err;
    };
    Sequence.prototype.end = function(err) {
      if (this._ended) {
        return;
      }
      this._ended = true;
      if (err) {
        this._addLongStackTrace(err);
      }
      this._callSite = null;
      try {
        if (err) {
          this.emit("error", err);
        }
      } finally {
        try {
          if (this._callback) {
            this._callback.apply(this, arguments);
          }
        } finally {
          this.emit("end");
        }
      }
    };
    Sequence.prototype["OkPacket"] = function(packet) {
      this.end(null, packet);
    };
    Sequence.prototype["ErrorPacket"] = function(packet) {
      this.end(this._packetToError(packet));
    };
    Sequence.prototype.start = function() {
    };
    Sequence.prototype._addLongStackTrace = function _addLongStackTrace(err) {
      var callSiteStack = this._callSite && this._callSite.stack;
      if (!callSiteStack || typeof callSiteStack !== "string") {
        return;
      }
      if (err.stack.indexOf(LONG_STACK_DELIMITER) !== -1) {
        return;
      }
      var index = callSiteStack.indexOf("\n");
      if (index !== -1) {
        err.stack += LONG_STACK_DELIMITER + callSiteStack.substr(index + 1);
      }
    };
    Sequence.prototype._onTimeout = function _onTimeout() {
      this.emit("timeout");
    };
  }
});

// node_modules/mysql/lib/protocol/Auth.js
var require_Auth = __commonJS({
  "node_modules/mysql/lib/protocol/Auth.js"(exports) {
    init_react();
    var Buffer3 = require_safe_buffer().Buffer;
    var Crypto = require_crypto();
    var Auth = exports;
    function auth(name, data, options) {
      options = options || {};
      switch (name) {
        case "mysql_native_password":
          return Auth.token(options.password, data.slice(0, 20));
        default:
          return void 0;
      }
    }
    Auth.auth = auth;
    function sha1(msg) {
      var hash = Crypto.createHash("sha1");
      hash.update(msg, "binary");
      return hash.digest("binary");
    }
    Auth.sha1 = sha1;
    function xor(a, b) {
      a = Buffer3.from(a, "binary");
      b = Buffer3.from(b, "binary");
      var result = Buffer3.allocUnsafe(a.length);
      for (var i = 0; i < a.length; i++) {
        result[i] = a[i] ^ b[i];
      }
      return result;
    }
    Auth.xor = xor;
    Auth.token = function(password, scramble) {
      if (!password) {
        return Buffer3.alloc(0);
      }
      var stage1 = sha1(Buffer3.from(password, "utf8").toString("binary"));
      var stage2 = sha1(stage1);
      var stage3 = sha1(scramble.toString("binary") + stage2);
      return xor(stage3, stage1);
    };
    Auth.hashPassword = function(password) {
      var nr = [20528, 22325];
      var add = 7;
      var nr2 = [4660, 22129];
      var result = Buffer3.alloc(8);
      if (typeof password === "string") {
        password = Buffer3.from(password);
      }
      for (var i = 0; i < password.length; i++) {
        var c = password[i];
        if (c === 32 || c === 9) {
          continue;
        }
        nr = this.xor32(nr, this.add32(this.mul32(this.add32(this.and32(nr, [0, 63]), [0, add]), [0, c]), this.shl32(nr, 8)));
        nr2 = this.add32(nr2, this.xor32(this.shl32(nr2, 8), nr));
        add += c;
      }
      this.int31Write(result, nr, 0);
      this.int31Write(result, nr2, 4);
      return result;
    };
    Auth.randomInit = function(seed1, seed2) {
      return {
        max_value: 1073741823,
        max_value_dbl: 1073741823,
        seed1: seed1 % 1073741823,
        seed2: seed2 % 1073741823
      };
    };
    Auth.myRnd = function(r) {
      r.seed1 = (r.seed1 * 3 + r.seed2) % r.max_value;
      r.seed2 = (r.seed1 + r.seed2 + 33) % r.max_value;
      return r.seed1 / r.max_value_dbl;
    };
    Auth.scramble323 = function(message, password) {
      if (!password) {
        return Buffer3.alloc(0);
      }
      var to = Buffer3.allocUnsafe(8);
      var hashPass = this.hashPassword(password);
      var hashMessage = this.hashPassword(message.slice(0, 8));
      var seed1 = this.int32Read(hashPass, 0) ^ this.int32Read(hashMessage, 0);
      var seed2 = this.int32Read(hashPass, 4) ^ this.int32Read(hashMessage, 4);
      var r = this.randomInit(seed1, seed2);
      for (var i = 0; i < 8; i++) {
        to[i] = Math.floor(this.myRnd(r) * 31) + 64;
      }
      var extra = Math.floor(this.myRnd(r) * 31);
      for (var i = 0; i < 8; i++) {
        to[i] ^= extra;
      }
      return to;
    };
    Auth.xor32 = function(a, b) {
      return [a[0] ^ b[0], a[1] ^ b[1]];
    };
    Auth.add32 = function(a, b) {
      var w1 = a[1] + b[1];
      var w2 = a[0] + b[0] + ((w1 & 4294901760) >> 16);
      return [w2 & 65535, w1 & 65535];
    };
    Auth.mul32 = function(a, b) {
      var w1 = a[1] * b[1];
      var w2 = (a[1] * b[1] >> 16 & 65535) + (a[0] * b[1] & 65535) + (a[1] * b[0] & 65535);
      return [w2 & 65535, w1 & 65535];
    };
    Auth.and32 = function(a, b) {
      return [a[0] & b[0], a[1] & b[1]];
    };
    Auth.shl32 = function(a, b) {
      var w1 = a[1] << b;
      var w2 = a[0] << b | (w1 & 4294901760) >> 16;
      return [w2 & 65535, w1 & 65535];
    };
    Auth.int31Write = function(buffer, number, offset) {
      buffer[offset] = number[0] >> 8 & 127;
      buffer[offset + 1] = number[0] & 255;
      buffer[offset + 2] = number[1] >> 8 & 255;
      buffer[offset + 3] = number[1] & 255;
    };
    Auth.int32Read = function(buffer, offset) {
      return (buffer[offset] << 24) + (buffer[offset + 1] << 16) + (buffer[offset + 2] << 8) + buffer[offset + 3];
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/ChangeUser.js
var require_ChangeUser = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/ChangeUser.js"(exports, module) {
    init_react();
    var Sequence = require_Sequence();
    var Util = require_util();
    var Packets = require_packets();
    var Auth = require_Auth();
    module.exports = ChangeUser;
    Util.inherits(ChangeUser, Sequence);
    function ChangeUser(options, callback) {
      Sequence.call(this, options, callback);
      this._user = options.user;
      this._password = options.password;
      this._database = options.database;
      this._charsetNumber = options.charsetNumber;
      this._currentConfig = options.currentConfig;
    }
    ChangeUser.prototype.determinePacket = function determinePacket(firstByte) {
      switch (firstByte) {
        case 254:
          return Packets.AuthSwitchRequestPacket;
        case 255:
          return Packets.ErrorPacket;
        default:
          return void 0;
      }
    };
    ChangeUser.prototype.start = function(handshakeInitializationPacket) {
      var scrambleBuff = handshakeInitializationPacket.scrambleBuff();
      scrambleBuff = Auth.token(this._password, scrambleBuff);
      var packet = new Packets.ComChangeUserPacket({
        user: this._user,
        scrambleBuff,
        database: this._database,
        charsetNumber: this._charsetNumber
      });
      this._currentConfig.user = this._user;
      this._currentConfig.password = this._password;
      this._currentConfig.database = this._database;
      this._currentConfig.charsetNumber = this._charsetNumber;
      this.emit("packet", packet);
    };
    ChangeUser.prototype["AuthSwitchRequestPacket"] = function(packet) {
      var name = packet.authMethodName;
      var data = Auth.auth(name, packet.authMethodData, {
        password: this._password
      });
      if (data !== void 0) {
        this.emit("packet", new Packets.AuthSwitchResponsePacket({
          data
        }));
      } else {
        var err = new Error("MySQL is requesting the " + name + " authentication method, which is not supported.");
        err.code = "UNSUPPORTED_AUTH_METHOD";
        err.fatal = true;
        this.end(err);
      }
    };
    ChangeUser.prototype["ErrorPacket"] = function(packet) {
      var err = this._packetToError(packet);
      err.fatal = true;
      this.end(err);
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/Handshake.js
var require_Handshake = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/Handshake.js"(exports, module) {
    init_react();
    var Sequence = require_Sequence();
    var Util = require_util();
    var Packets = require_packets();
    var Auth = require_Auth();
    var ClientConstants = require_client();
    module.exports = Handshake;
    Util.inherits(Handshake, Sequence);
    function Handshake(options, callback) {
      Sequence.call(this, options, callback);
      options = options || {};
      this._config = options.config;
      this._handshakeInitializationPacket = null;
    }
    Handshake.prototype.determinePacket = function determinePacket(firstByte, parser) {
      if (firstByte === 255) {
        return Packets.ErrorPacket;
      }
      if (!this._handshakeInitializationPacket) {
        return Packets.HandshakeInitializationPacket;
      }
      if (firstByte === 254) {
        return parser.packetLength() === 1 ? Packets.UseOldPasswordPacket : Packets.AuthSwitchRequestPacket;
      }
      return void 0;
    };
    Handshake.prototype["AuthSwitchRequestPacket"] = function(packet) {
      var name = packet.authMethodName;
      var data = Auth.auth(name, packet.authMethodData, {
        password: this._config.password
      });
      if (data !== void 0) {
        this.emit("packet", new Packets.AuthSwitchResponsePacket({
          data
        }));
      } else {
        var err = new Error("MySQL is requesting the " + name + " authentication method, which is not supported.");
        err.code = "UNSUPPORTED_AUTH_METHOD";
        err.fatal = true;
        this.end(err);
      }
    };
    Handshake.prototype["HandshakeInitializationPacket"] = function(packet) {
      this._handshakeInitializationPacket = packet;
      this._config.protocol41 = packet.protocol41;
      var serverSSLSupport = packet.serverCapabilities1 & ClientConstants.CLIENT_SSL;
      if (this._config.ssl) {
        if (!serverSSLSupport) {
          var err = new Error("Server does not support secure connection");
          err.code = "HANDSHAKE_NO_SSL_SUPPORT";
          err.fatal = true;
          this.end(err);
          return;
        }
        this._config.clientFlags |= ClientConstants.CLIENT_SSL;
        this.emit("packet", new Packets.SSLRequestPacket({
          clientFlags: this._config.clientFlags,
          maxPacketSize: this._config.maxPacketSize,
          charsetNumber: this._config.charsetNumber
        }));
        this.emit("start-tls");
      } else {
        this._sendCredentials();
      }
    };
    Handshake.prototype._tlsUpgradeCompleteHandler = function() {
      this._sendCredentials();
    };
    Handshake.prototype._sendCredentials = function() {
      var packet = this._handshakeInitializationPacket;
      this.emit("packet", new Packets.ClientAuthenticationPacket({
        clientFlags: this._config.clientFlags,
        maxPacketSize: this._config.maxPacketSize,
        charsetNumber: this._config.charsetNumber,
        user: this._config.user,
        database: this._config.database,
        protocol41: packet.protocol41,
        scrambleBuff: packet.protocol41 ? Auth.token(this._config.password, packet.scrambleBuff()) : Auth.scramble323(packet.scrambleBuff(), this._config.password)
      }));
    };
    Handshake.prototype["UseOldPasswordPacket"] = function() {
      if (!this._config.insecureAuth) {
        var err = new Error("MySQL server is requesting the old and insecure pre-4.1 auth mechanism. Upgrade the user password or use the {insecureAuth: true} option.");
        err.code = "HANDSHAKE_INSECURE_AUTH";
        err.fatal = true;
        this.end(err);
        return;
      }
      this.emit("packet", new Packets.OldPasswordPacket({
        scrambleBuff: Auth.scramble323(this._handshakeInitializationPacket.scrambleBuff(), this._config.password)
      }));
    };
    Handshake.prototype["ErrorPacket"] = function(packet) {
      var err = this._packetToError(packet, true);
      err.fatal = true;
      this.end(err);
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/Ping.js
var require_Ping = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/Ping.js"(exports, module) {
    init_react();
    var Sequence = require_Sequence();
    var Util = require_util();
    var Packets = require_packets();
    module.exports = Ping;
    Util.inherits(Ping, Sequence);
    function Ping(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      Sequence.call(this, options, callback);
    }
    Ping.prototype.start = function() {
      this.emit("packet", new Packets.ComPingPacket());
    };
  }
});

// node-modules-polyfills:fs
var fs_exports = {};
__export(fs_exports, {
  default: () => fs_default
});
var fs_default;
var init_fs = __esm({
  "node-modules-polyfills:fs"() {
    init_react();
    fs_default = {};
  }
});

// node-modules-polyfills-commonjs:fs
var require_fs = __commonJS({
  "node-modules-polyfills-commonjs:fs"(exports, module) {
    init_react();
    var polyfill = (init_fs(), __toCommonJS(fs_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/mysql/lib/protocol/ResultSet.js
var require_ResultSet = __commonJS({
  "node_modules/mysql/lib/protocol/ResultSet.js"(exports, module) {
    init_react();
    module.exports = ResultSet;
    function ResultSet(resultSetHeaderPacket) {
      this.resultSetHeaderPacket = resultSetHeaderPacket;
      this.fieldPackets = [];
      this.eofPackets = [];
      this.rows = [];
    }
  }
});

// node_modules/mysql/lib/protocol/constants/server_status.js
var require_server_status = __commonJS({
  "node_modules/mysql/lib/protocol/constants/server_status.js"(exports) {
    init_react();
    exports.SERVER_STATUS_IN_TRANS = 1;
    exports.SERVER_STATUS_AUTOCOMMIT = 2;
    exports.SERVER_MORE_RESULTS_EXISTS = 8;
    exports.SERVER_QUERY_NO_GOOD_INDEX_USED = 16;
    exports.SERVER_QUERY_NO_INDEX_USED = 32;
    exports.SERVER_STATUS_CURSOR_EXISTS = 64;
    exports.SERVER_STATUS_LAST_ROW_SENT = 128;
    exports.SERVER_STATUS_DB_DROPPED = 256;
    exports.SERVER_STATUS_NO_BACKSLASH_ESCAPES = 512;
    exports.SERVER_STATUS_METADATA_CHANGED = 1024;
    exports.SERVER_QUERY_WAS_SLOW = 2048;
    exports.SERVER_PS_OUT_PARAMS = 4096;
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports, module) {
    "use strict";
    init_react();
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module.exports = { nextTick: nextTick2 };
    } else {
      module.exports = process;
    }
    function nextTick2(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    init_react();
    var toString3 = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString3.call(arr) == "[object Array]";
    };
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/internal/streams/stream-browser.js
var require_stream_browser = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports, module) {
    init_react();
    module.exports = require_events().EventEmitter;
  }
});

// node_modules/core-util-is/lib/util.js
var require_util2 = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports) {
    init_react();
    function isArray4(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString2(arg) === "[object Array]";
    }
    exports.isArray = isArray4;
    function isBoolean2(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean2;
    function isNull2(arg) {
      return arg === null;
    }
    exports.isNull = isNull2;
    function isNullOrUndefined2(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined2;
    function isNumber2(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber2;
    function isString2(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString2;
    function isSymbol2(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol2;
    function isUndefined2(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined2;
    function isRegExp2(re) {
      return objectToString2(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp2;
    function isObject2(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject2;
    function isDate2(d) {
      return objectToString2(d) === "[object Date]";
    }
    exports.isDate = isDate2;
    function isError2(e) {
      return objectToString2(e) === "[object Error]" || e instanceof Error;
    }
    exports.isError = isError2;
    function isFunction2(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction2;
    function isPrimitive2(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive2;
    exports.isBuffer = require_buffer().Buffer.isBuffer;
    function objectToString2(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    init_react();
    if (typeof Object.create === "function") {
      module.exports = function inherits2(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits2(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList2 = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports, module) {
    "use strict";
    init_react();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Buffer3 = require_safe_buffer().Buffer;
    var util = require_util();
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    module.exports = function() {
      function BufferList2() {
        _classCallCheck(this, BufferList2);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      BufferList2.prototype.push = function push(v) {
        var entry = { data: v, next: null };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      };
      BufferList2.prototype.unshift = function unshift(v) {
        var entry = { data: v, next: this.head };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      };
      BufferList2.prototype.shift = function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      };
      BufferList2.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
      };
      BufferList2.prototype.join = function join(s) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s + p.data;
        }
        return ret;
      };
      BufferList2.prototype.concat = function concat2(n) {
        if (this.length === 0)
          return Buffer3.alloc(0);
        if (this.length === 1)
          return this.head.data;
        var ret = Buffer3.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      };
      return BufferList2;
    }();
    if (util && util.inspect && util.inspect.custom) {
      module.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({ length: this.length });
        return this.constructor.name + " " + obj;
      };
    }
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
    "use strict";
    init_react();
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
          pna.nextTick(emitErrorNT, this, err);
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          pna.nextTick(emitErrorNT, _this, err2);
          if (_this._writableState) {
            _this._writableState.errorEmitted = true;
          }
        } else if (cb) {
          cb(err2);
        }
      });
      return this;
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    module.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "node_modules/util-deprecate/browser.js"(exports, module) {
    init_react();
    module.exports = deprecate2;
    function deprecate2(fn, msg) {
      if (config2("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config2("throwDeprecation")) {
            throw new Error(msg);
          } else if (config2("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config2(name) {
      try {
        if (!globalThis.localStorage)
          return false;
      } catch (_) {
        return false;
      }
      var val = globalThis.localStorage[name];
      if (val == null)
        return false;
      return String(val).toLowerCase() === "true";
    }
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    "use strict";
    init_react();
    var pna = require_process_nextick_args();
    module.exports = Writable2;
    function CorkedRequest2(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    var Duplex2;
    Writable2.WritableState = WritableState2;
    var util = Object.create(require_util2());
    util.inherits = require_inherits_browser();
    var internalUtil = {
      deprecate: require_browser()
    };
    var Stream2 = require_stream_browser();
    var Buffer3 = require_safe_buffer().Buffer;
    var OurUint8Array = globalThis.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer3.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer3.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    util.inherits(Writable2, Stream2);
    function nop2() {
    }
    function WritableState2(options, stream) {
      Duplex2 = Duplex2 || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex2;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      var hwm = options.highWaterMark;
      var writableHwm = options.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (writableHwm || writableHwm === 0))
        this.highWaterMark = writableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite2(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest2(this);
    }
    WritableState2.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState2.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable2, Symbol.hasInstance, {
        value: function(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable2)
            return false;
          return object && object._writableState instanceof WritableState2;
        }
      });
    } else {
      realHasInstance = function(object) {
        return object instanceof this;
      };
    }
    function Writable2(options) {
      Duplex2 = Duplex2 || require_stream_duplex();
      if (!realHasInstance.call(Writable2, this) && !(this instanceof Duplex2)) {
        return new Writable2(options);
      }
      this._writableState = new WritableState2(options, this);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream2.call(this);
    }
    Writable2.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd2(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      pna.nextTick(cb, er);
    }
    function validChunk2(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
      if (chunk === null) {
        er = new TypeError("May not write null values to stream");
      } else if (typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    Writable2.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer3.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop2;
      if (state.ended)
        writeAfterEnd2(this, cb);
      else if (isBuf || validChunk2(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer2(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable2.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable2.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer2(this, state);
      }
    };
    Writable2.prototype.setDefaultEncoding = function setDefaultEncoding2(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    function decodeChunk2(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer3.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable2.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer2(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk2(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite2(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite2(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError2(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        pna.nextTick(cb, er);
        pna.nextTick(finishMaybe2, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        finishMaybe2(stream, state);
      }
    }
    function onwriteStateUpdate2(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite2(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate2(state);
      if (er)
        onwriteError2(stream, state, sync, er, cb);
      else {
        var finished = needFinish2(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer2(stream, state);
        }
        if (sync) {
          asyncWrite(afterWrite2, stream, state, finished, cb);
        } else {
          afterWrite2(stream, state, finished, cb);
        }
      }
    }
    function afterWrite2(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain2(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe2(stream, state);
    }
    function onwriteDrain2(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer2(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite2(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest2(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite2(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable2.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable2.prototype._writev = null;
    Writable2.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable2(this, state, cb);
    };
    function needFinish2(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe2(stream, state);
      });
    }
    function prefinish2(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
          state.pendingcb++;
          state.finalCalled = true;
          pna.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe2(stream, state) {
      var need = needFinish2(state);
      if (need) {
        prefinish2(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
        }
      }
      return need;
    }
    function endWritable2(stream, state, cb) {
      state.ending = true;
      finishMaybe2(stream, state);
      if (cb) {
        if (state.finished)
          pna.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = corkReq;
      } else {
        state.corkedRequestsFree = corkReq;
      }
    }
    Object.defineProperty(Writable2.prototype, "destroyed", {
      get: function() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable2.prototype.destroy = destroyImpl.destroy;
    Writable2.prototype._undestroy = destroyImpl.undestroy;
    Writable2.prototype._destroy = function(err, cb) {
      this.end();
      cb(err);
    };
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    "use strict";
    init_react();
    var pna = require_process_nextick_args();
    var objectKeys2 = Object.keys || function(obj) {
      var keys3 = [];
      for (var key in obj) {
        keys3.push(key);
      }
      return keys3;
    };
    module.exports = Duplex2;
    var util = Object.create(require_util2());
    util.inherits = require_inherits_browser();
    var Readable2 = require_stream_readable();
    var Writable2 = require_stream_writable();
    util.inherits(Duplex2, Readable2);
    {
      keys2 = objectKeys2(Writable2.prototype);
      for (v = 0; v < keys2.length; v++) {
        method = keys2[v];
        if (!Duplex2.prototype[method])
          Duplex2.prototype[method] = Writable2.prototype[method];
      }
    }
    var keys2;
    var method;
    var v;
    function Duplex2(options) {
      if (!(this instanceof Duplex2))
        return new Duplex2(options);
      Readable2.call(this, options);
      Writable2.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once("end", onend2);
    }
    Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend2() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      pna.nextTick(onEndNT2, this);
    }
    function onEndNT2(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex2.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    Duplex2.prototype._destroy = function(err, cb) {
      this.push(null);
      this.end();
      pna.nextTick(cb, err);
    };
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    "use strict";
    init_react();
    var pna = require_process_nextick_args();
    module.exports = Readable2;
    var isArray4 = require_isarray();
    var Duplex2;
    Readable2.ReadableState = ReadableState2;
    var EE = require_events().EventEmitter;
    var EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream2 = require_stream_browser();
    var Buffer3 = require_safe_buffer().Buffer;
    var OurUint8Array = globalThis.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer3.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer3.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var util = Object.create(require_util2());
    util.inherits = require_inherits_browser();
    var debugUtil = require_util();
    var debug2 = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug2 = debugUtil.debuglog("stream");
    } else {
      debug2 = function() {
      };
    }
    var BufferList2 = require_BufferList2();
    var destroyImpl = require_destroy();
    var StringDecoder2;
    util.inherits(Readable2, Stream2);
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener3(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (isArray4(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState2(options, stream) {
      Duplex2 = Duplex2 || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex2;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      var hwm = options.highWaterMark;
      var readableHwm = options.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (readableHwm || readableHwm === 0))
        this.highWaterMark = readableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new BufferList2();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder2)
          StringDecoder2 = __require("string_decoder/").StringDecoder;
        this.decoder = new StringDecoder2(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable2(options) {
      Duplex2 = Duplex2 || require_stream_duplex();
      if (!(this instanceof Readable2))
        return new Readable2(options);
      this._readableState = new ReadableState2(options, this);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream2.call(this);
    }
    Object.defineProperty(Readable2.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
      this.push(null);
      cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer3.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk2(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
      return readableAddChunk2(this, chunk, null, true, false);
    };
    function readableAddChunk2(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk2(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid2(state, chunk);
        if (er) {
          stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer3.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              stream.emit("error", new Error("stream.unshift() after end event"));
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit("error", new Error("stream.push() after EOF"));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore2(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }
      return needMoreData2(state);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable2(stream);
      }
      maybeReadMore2(stream, state);
    }
    function chunkInvalid2(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function needMoreData2(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable2.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable2.prototype.setEncoding = function(enc) {
      if (!StringDecoder2)
        StringDecoder2 = __require("string_decoder/").StringDecoder;
      this._readableState.decoder = new StringDecoder2(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM2 = 8388608;
    function computeNewHighWaterMark2(n) {
      if (n >= MAX_HWM2) {
        n = MAX_HWM2;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead2(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark2(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable2.prototype.read = function(n) {
      debug2("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug2("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable2(this);
        else
          emitReadable2(this);
        return null;
      }
      n = howMuchToRead2(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable2(this);
        return null;
      }
      var doRead = state.needReadable;
      debug2("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug2("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug2("reading or ended", doRead);
      } else if (doRead) {
        debug2("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead2(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList2(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable2(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk2(stream, state) {
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable2(stream);
    }
    function emitReadable2(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug2("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          pna.nextTick(emitReadable_2, stream);
        else
          emitReadable_2(stream);
      }
    }
    function emitReadable_2(stream) {
      debug2("emit readable");
      stream.emit("readable");
      flow2(stream);
    }
    function maybeReadMore2(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_2, stream, state);
      }
    }
    function maybeReadMore_2(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug2("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable2.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug2("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend2 : unpipe;
      if (state.endEmitted)
        pna.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug2("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend2() {
        debug2("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain2(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug2("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend2);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug2("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (ret === false && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf3(state.pipes, dest) !== -1) && !cleanedUp) {
            debug2("false write response, pause", src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug2("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          dest.emit("error", er);
      }
      prependListener3(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug2("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug2("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug2("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain2(src) {
      return function() {
        var state = src._readableState;
        debug2("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow2(src);
        }
      };
    }
    Readable2.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = { hasUnpiped: false };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, unpipeInfo);
        }
        return this;
      }
      var index = indexOf3(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream2.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            pna.nextTick(nReadingNextTick2, this);
          } else if (state.length) {
            emitReadable2(this);
          }
        }
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    function nReadingNextTick2(self2) {
      debug2("readable nexttick read 0");
      self2.read(0);
    }
    Readable2.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug2("resume");
        state.flowing = true;
        resume2(this, state);
      }
      return this;
    };
    function resume2(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_2, stream, state);
      }
    }
    function resume_2(stream, state) {
      if (!state.reading) {
        debug2("resume read 0");
        stream.read(0);
      }
      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit("resume");
      flow2(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable2.prototype.pause = function() {
      debug2("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug2("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow2(stream) {
      var state = stream._readableState;
      debug2("flow", state.flowing);
      while (state.flowing && stream.read() !== null) {
      }
    }
    Readable2.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug2("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug2("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug2("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable2._fromList = fromList2;
    function fromList2(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.head.data;
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = fromListPartial2(n, state.buffer, state.decoder);
      }
      return ret;
    }
    function fromListPartial2(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        ret = list.shift();
      } else {
        ret = hasStrings ? copyFromBufferString2(n, list) : copyFromBuffer2(n, list);
      }
      return ret;
    }
    function copyFromBufferString2(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length)
          ret += str;
        else
          ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function copyFromBuffer2(n, list) {
      var ret = Buffer3.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function endReadable2(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT2, state, stream);
      }
    }
    function endReadableNT2(state, stream) {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
      }
    }
    function indexOf3(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = Transform2;
    var Duplex2 = require_stream_duplex();
    var util = Object.create(require_util2());
    util.inherits = require_inherits_browser();
    util.inherits(Transform2, Duplex2);
    function afterTransform2(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform2(options) {
      if (!(this instanceof Transform2))
        return new Transform2(options);
      Duplex2.call(this, options);
      this._transformState = {
        afterTransform: afterTransform2.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish2);
    }
    function prefinish2() {
      var _this = this;
      if (typeof this._flush === "function") {
        this._flush(function(er, data) {
          done2(_this, er, data);
        });
      } else {
        done2(this, null, null);
      }
    }
    Transform2.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex2.prototype.push.call(this, chunk, encoding);
    };
    Transform2.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform2.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform2.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform2.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex2.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
      });
    };
    function done2(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/mysql/node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = PassThrough2;
    var Transform2 = require_stream_transform();
    var util = Object.create(require_util2());
    util.inherits = require_inherits_browser();
    util.inherits(PassThrough2, Transform2);
    function PassThrough2(options) {
      if (!(this instanceof PassThrough2))
        return new PassThrough2(options);
      Transform2.call(this, options);
    }
    PassThrough2.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/mysql/node_modules/readable-stream/readable-browser.js
var require_readable_browser = __commonJS({
  "node_modules/mysql/node_modules/readable-stream/readable-browser.js"(exports, module) {
    init_react();
    exports = module.exports = require_stream_readable();
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require_stream_writable();
    exports.Duplex = require_stream_duplex();
    exports.Transform = require_stream_transform();
    exports.PassThrough = require_stream_passthrough();
  }
});

// node_modules/mysql/lib/protocol/sequences/Query.js
var require_Query = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/Query.js"(exports, module) {
    init_react();
    var ClientConstants = require_client();
    var fs = require_fs();
    var Packets = require_packets();
    var ResultSet = require_ResultSet();
    var Sequence = require_Sequence();
    var ServerStatus = require_server_status();
    var Readable2 = require_readable_browser();
    var Util = require_util();
    module.exports = Query;
    Util.inherits(Query, Sequence);
    function Query(options, callback) {
      Sequence.call(this, options, callback);
      this.sql = options.sql;
      this.values = options.values;
      this.typeCast = options.typeCast === void 0 ? true : options.typeCast;
      this.nestTables = options.nestTables || false;
      this._resultSet = null;
      this._results = [];
      this._fields = [];
      this._index = 0;
      this._loadError = null;
    }
    Query.prototype.start = function() {
      this.emit("packet", new Packets.ComQueryPacket(this.sql));
    };
    Query.prototype.determinePacket = function determinePacket(byte, parser) {
      var resultSet = this._resultSet;
      if (!resultSet) {
        switch (byte) {
          case 0:
            return Packets.OkPacket;
          case 251:
            return Packets.LocalInfileRequestPacket;
          case 255:
            return Packets.ErrorPacket;
          default:
            return Packets.ResultSetHeaderPacket;
        }
      }
      if (resultSet.eofPackets.length === 0) {
        return resultSet.fieldPackets.length < resultSet.resultSetHeaderPacket.fieldCount ? Packets.FieldPacket : Packets.EofPacket;
      }
      if (byte === 255) {
        return Packets.ErrorPacket;
      }
      if (byte === 254 && parser.packetLength() < 9) {
        return Packets.EofPacket;
      }
      return Packets.RowDataPacket;
    };
    Query.prototype["OkPacket"] = function(packet) {
      try {
        if (!this._callback) {
          this.emit("result", packet, this._index);
        } else {
          this._results.push(packet);
          this._fields.push(void 0);
        }
      } finally {
        this._index++;
        this._resultSet = null;
        this._handleFinalResultPacket(packet);
      }
    };
    Query.prototype["ErrorPacket"] = function(packet) {
      var err = this._packetToError(packet);
      var results = this._results.length > 0 ? this._results : void 0;
      var fields = this._fields.length > 0 ? this._fields : void 0;
      err.index = this._index;
      err.sql = this.sql;
      this.end(err, results, fields);
    };
    Query.prototype["LocalInfileRequestPacket"] = function(packet) {
      if (this._connection.config.clientFlags & ClientConstants.CLIENT_LOCAL_FILES) {
        this._sendLocalDataFile(packet.filename);
      } else {
        this._loadError = new Error("Load local files command is disabled");
        this._loadError.code = "LOCAL_FILES_DISABLED";
        this._loadError.fatal = false;
        this.emit("packet", new Packets.EmptyPacket());
      }
    };
    Query.prototype["ResultSetHeaderPacket"] = function(packet) {
      this._resultSet = new ResultSet(packet);
    };
    Query.prototype["FieldPacket"] = function(packet) {
      this._resultSet.fieldPackets.push(packet);
    };
    Query.prototype["EofPacket"] = function(packet) {
      this._resultSet.eofPackets.push(packet);
      if (this._resultSet.eofPackets.length === 1 && !this._callback) {
        this.emit("fields", this._resultSet.fieldPackets, this._index);
      }
      if (this._resultSet.eofPackets.length !== 2) {
        return;
      }
      if (this._callback) {
        this._results.push(this._resultSet.rows);
        this._fields.push(this._resultSet.fieldPackets);
      }
      this._index++;
      this._resultSet = null;
      this._handleFinalResultPacket(packet);
    };
    Query.prototype._handleFinalResultPacket = function(packet) {
      if (packet.serverStatus & ServerStatus.SERVER_MORE_RESULTS_EXISTS) {
        return;
      }
      var results = this._results.length > 1 ? this._results : this._results[0];
      var fields = this._fields.length > 1 ? this._fields : this._fields[0];
      this.end(this._loadError, results, fields);
    };
    Query.prototype["RowDataPacket"] = function(packet, parser, connection) {
      packet.parse(parser, this._resultSet.fieldPackets, this.typeCast, this.nestTables, connection);
      if (this._callback) {
        this._resultSet.rows.push(packet);
      } else {
        this.emit("result", packet, this._index);
      }
    };
    Query.prototype._sendLocalDataFile = function(path) {
      var self2 = this;
      var localStream = fs.createReadStream(path, {
        flag: "r",
        encoding: null,
        autoClose: true
      });
      this.on("pause", function() {
        localStream.pause();
      });
      this.on("resume", function() {
        localStream.resume();
      });
      localStream.on("data", function(data) {
        self2.emit("packet", new Packets.LocalDataFilePacket(data));
      });
      localStream.on("error", function(err) {
        self2._loadError = err;
        localStream.emit("end");
      });
      localStream.on("end", function() {
        self2.emit("packet", new Packets.EmptyPacket());
      });
    };
    Query.prototype.stream = function(options) {
      var self2 = this;
      options = options || {};
      options.objectMode = true;
      var stream = new Readable2(options);
      stream._read = function() {
        self2._connection && self2._connection.resume();
      };
      stream.once("end", function() {
        process.nextTick(function() {
          stream.emit("close");
        });
      });
      this.on("result", function(row, i) {
        if (!stream.push(row))
          self2._connection.pause();
        stream.emit("result", row, i);
      });
      this.on("error", function(err) {
        stream.emit("error", err);
      });
      this.on("end", function() {
        stream.push(null);
      });
      this.on("fields", function(fields, i) {
        stream.emit("fields", fields, i);
      });
      return stream;
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/Quit.js
var require_Quit = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/Quit.js"(exports, module) {
    init_react();
    var Sequence = require_Sequence();
    var Util = require_util();
    var Packets = require_packets();
    module.exports = Quit;
    Util.inherits(Quit, Sequence);
    function Quit(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      Sequence.call(this, options, callback);
      this._started = false;
    }
    Quit.prototype.end = function end(err) {
      if (this._ended) {
        return;
      }
      if (!this._started) {
        Sequence.prototype.end.call(this, err);
        return;
      }
      if (err && err.code === "ECONNRESET" && err.syscall === "read") {
        Sequence.prototype.end.call(this);
        return;
      }
      Sequence.prototype.end.call(this, err);
    };
    Quit.prototype.start = function() {
      this._started = true;
      this.emit("packet", new Packets.ComQuitPacket());
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/Statistics.js
var require_Statistics = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/Statistics.js"(exports, module) {
    init_react();
    var Sequence = require_Sequence();
    var Util = require_util();
    var Packets = require_packets();
    module.exports = Statistics;
    Util.inherits(Statistics, Sequence);
    function Statistics(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      Sequence.call(this, options, callback);
    }
    Statistics.prototype.start = function() {
      this.emit("packet", new Packets.ComStatisticsPacket());
    };
    Statistics.prototype["StatisticsPacket"] = function(packet) {
      this.end(null, packet);
    };
    Statistics.prototype.determinePacket = function determinePacket(firstByte) {
      if (firstByte === 85) {
        return Packets.StatisticsPacket;
      }
      return void 0;
    };
  }
});

// node_modules/mysql/lib/protocol/sequences/index.js
var require_sequences = __commonJS({
  "node_modules/mysql/lib/protocol/sequences/index.js"(exports) {
    init_react();
    exports.ChangeUser = require_ChangeUser();
    exports.Handshake = require_Handshake();
    exports.Ping = require_Ping();
    exports.Query = require_Query();
    exports.Quit = require_Quit();
    exports.Sequence = require_Sequence();
    exports.Statistics = require_Statistics();
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js
function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
var buffer_list_default;
var init_buffer_list = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js"() {
    init_react();
    init_buffer();
    buffer_list_default = BufferList;
    BufferList.prototype.push = function(v) {
      var entry = { data: v, next: null };
      if (this.length > 0)
        this.tail.next = entry;
      else
        this.head = entry;
      this.tail = entry;
      ++this.length;
    };
    BufferList.prototype.unshift = function(v) {
      var entry = { data: v, next: this.head };
      if (this.length === 0)
        this.tail = entry;
      this.head = entry;
      ++this.length;
    };
    BufferList.prototype.shift = function() {
      if (this.length === 0)
        return;
      var ret = this.head.data;
      if (this.length === 1)
        this.head = this.tail = null;
      else
        this.head = this.head.next;
      --this.length;
      return ret;
    };
    BufferList.prototype.clear = function() {
      this.head = this.tail = null;
      this.length = 0;
    };
    BufferList.prototype.join = function(s) {
      if (this.length === 0)
        return "";
      var p = this.head;
      var ret = "" + p.data;
      while (p = p.next) {
        ret += s + p.data;
      }
      return ret;
    };
    BufferList.prototype.concat = function(n) {
      if (this.length === 0)
        return Buffer2.alloc(0);
      if (this.length === 1)
        return this.head.data;
      var ret = Buffer2.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;
      while (p) {
        p.data.copy(ret, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    };
  }
});

// node-modules-polyfills:string_decoder
function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error("Unknown encoding: " + encoding);
  }
}
function StringDecoder(encoding) {
  this.encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, "");
  assertEncoding(encoding);
  switch (this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case "base64":
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }
  this.charBuffer = new Buffer2(6);
  this.charReceived = 0;
  this.charLength = 0;
}
function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}
function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}
function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}
var isBufferEncoding;
var init_string_decoder = __esm({
  "node-modules-polyfills:string_decoder"() {
    init_react();
    init_buffer();
    isBufferEncoding = Buffer2.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    StringDecoder.prototype.write = function(buffer) {
      var charStr = "";
      while (this.charLength) {
        var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) {
          return "";
        }
        buffer = buffer.slice(available, buffer.length);
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 55296 && charCode <= 56319) {
          this.charLength += this.surrogateSize;
          charStr = "";
          continue;
        }
        this.charReceived = this.charLength = 0;
        if (buffer.length === 0) {
          return charStr;
        }
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      if (this.charLength) {
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
      }
      charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1;
      var charCode = charStr.charCodeAt(end);
      if (charCode >= 55296 && charCode <= 56319) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      var i = buffer.length >= 3 ? 3 : buffer.length;
      for (; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = "";
      if (buffer && buffer.length)
        res = this.write(buffer);
      if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js
function prependListener2(emitter, event, fn) {
  if (typeof emitter.prependListener === "function") {
    return emitter.prependListener(event, fn);
  } else {
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount2(emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {
  options = options || {};
  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.readableObjectMode;
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = new buffer_list_default();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.defaultEncoding = options.defaultEncoding || "utf8";
  this.ranOut = false;
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);
  this._readableState = new ReadableState(options, this);
  this.readable = true;
  if (options && typeof options.read === "function")
    this._read = options.read;
  events_default.call(this);
}
function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit("error", er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error("stream.push() after EOF");
      stream.emit("error", e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error("stream.unshift() after end event");
      stream.emit("error", _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }
      if (!addToFront)
        state.reading = false;
      if (!skipAdd) {
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit("data", chunk);
          stream.read(0);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront)
            state.buffer.unshift(chunk);
          else
            state.buffer.push(chunk);
          if (state.needReadable)
            emitReadable(stream);
        }
      }
      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }
  return needMoreData(state);
}
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended)
    return 0;
  if (state.objectMode)
    return 1;
  if (n !== n) {
    if (state.flowing && state.length)
      return state.buffer.head.data.length;
    else
      return state.length;
  }
  if (n > state.highWaterMark)
    state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length)
    return n;
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}
function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== "string" && chunk !== null && chunk !== void 0 && !state.objectMode) {
    er = new TypeError("Invalid non-string/buffer chunk");
  }
  return er;
}
function onEofChunk(stream, state) {
  if (state.ended)
    return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;
  emitReadable(stream);
}
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug("emitReadable", state.flowing);
    state.emittedReadable = true;
    if (state.sync)
      nextTick(emitReadable_, stream);
    else
      emitReadable_(stream);
  }
}
function emitReadable_(stream) {
  debug("emit readable");
  stream.emit("readable");
  flow(stream);
}
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}
function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug("maybeReadMore read 0");
    stream.read(0);
    if (len === state.length)
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}
function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug("pipeOnDrain", state.awaitDrain);
    if (state.awaitDrain)
      state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners("data").length) {
      state.flowing = true;
      flow(src);
    }
  };
}
function nReadingNextTick(self2) {
  debug("readable nexttick read 0");
  self2.read(0);
}
function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}
function resume_(stream, state) {
  if (!state.reading) {
    debug("resume read 0");
    stream.read(0);
  }
  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit("resume");
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}
function flow(stream) {
  var state = stream._readableState;
  debug("flow", state.flowing);
  while (state.flowing && stream.read() !== null) {
  }
}
function fromList(n, state) {
  if (state.length === 0)
    return null;
  var ret;
  if (state.objectMode)
    ret = state.buffer.shift();
  else if (!n || n >= state.length) {
    if (state.decoder)
      ret = state.buffer.join("");
    else if (state.buffer.length === 1)
      ret = state.buffer.head.data;
    else
      ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    ret = fromListPartial(n, state.buffer, state.decoder);
  }
  return ret;
}
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    ret = list.shift();
  } else {
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length)
      ret += str;
    else
      ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next)
          list.head = p.next;
        else
          list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next)
          list.head = p.next;
        else
          list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}
function endReadable(stream) {
  var state = stream._readableState;
  if (state.length > 0)
    throw new Error('"endReadable()" called on non-empty stream');
  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}
function endReadableNT(state, stream) {
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit("end");
  }
}
function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
function indexOf2(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x)
      return i;
  }
  return -1;
}
var debug, MAX_HWM;
var init_readable = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js"() {
    "use strict";
    init_react();
    init_events();
    init_util();
    init_buffer_list();
    init_string_decoder();
    init_duplex();
    init_process();
    Readable.ReadableState = ReadableState;
    debug = debuglog("stream");
    inherits_default(Readable, events_default);
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (!state.objectMode && typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer.from(chunk, encoding);
          encoding = "";
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, "", true);
    };
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    MAX_HWM = 8388608;
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = !pipeOpts || pipeOpts.end !== false;
      var endFn = doEnd ? onend2 : cleanup;
      if (state.endEmitted)
        nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        debug("onunpipe");
        if (readable === src) {
          cleanup();
        }
      }
      function onend2() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend2);
        src.removeListener("end", cleanup);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (ret === false && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf2(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (listenerCount2(dest, "error") === 0)
          dest.emit("error", er);
      }
      prependListener2(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var _i = 0; _i < len; _i++) {
          dests[_i].emit("unpipe", this);
        }
        return this;
      }
      var i = indexOf2(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = events_default.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self2 = this;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self2.push(chunk);
        }
        self2.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = self2.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ["error", "close", "destroy", "pause", "resume"];
      forEach(events, function(ev) {
        stream.on(ev, self2.emit.bind(self2, ev));
      });
      self2._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self2;
    };
    Readable._fromList = fromList;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js
function nop() {
}
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}
function WritableState(options, stream) {
  Object.defineProperty(this, "buffer", {
    get: deprecate(function() {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  });
  options = options || {};
  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.writableObjectMode;
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
  this.highWaterMark = ~~this.highWaterMark;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;
  this.defaultEncoding = options.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function(er) {
    onwrite(stream, er);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new CorkedRequest(this);
}
function Writable(options) {
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);
  this._writableState = new WritableState(options, this);
  this.writable = true;
  if (options) {
    if (typeof options.write === "function")
      this._write = options.write;
    if (typeof options.writev === "function")
      this._writev = options.writev;
  }
  EventEmitter.call(this);
}
function writeAfterEnd(stream, cb) {
  var er = new Error("write after end");
  stream.emit("error", er);
  nextTick(cb, er);
}
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  if (chunk === null) {
    er = new TypeError("May not write null values to stream");
  } else if (!Buffer2.isBuffer(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
    er = new TypeError("Invalid non-string/buffer chunk");
  }
  if (er) {
    stream.emit("error", er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}
function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
    chunk = Buffer2.from(chunk, encoding);
  }
  return chunk;
}
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer2.isBuffer(chunk))
    encoding = "buffer";
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark;
  if (!ret)
    state.needDrain = true;
  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }
  return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync)
    nextTick(cb, er);
  else
    cb(er);
  stream._writableState.errorEmitted = true;
  stream.emit("error", er);
}
function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}
function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    var finished = needFinish(state);
    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }
    if (sync) {
      nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}
function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit("drain");
  }
}
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;
  if (stream._writev && entry && entry.next) {
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }
    doWrite(stream, state, true, state.length, buffer, "", holder.finish);
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      if (state.writing) {
        break;
      }
    }
    if (entry === null)
      state.lastBufferedRequest = null;
  }
  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}
function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit("prefinish");
  }
}
function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit("finish");
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}
function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      nextTick(cb);
    else
      stream.once("finish", cb);
  }
  state.ended = true;
  stream.writable = false;
}
function CorkedRequest(state) {
  var _this = this;
  this.next = null;
  this.entry = null;
  this.finish = function(err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
var init_writable = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js"() {
    init_react();
    init_util();
    init_buffer();
    init_events();
    init_duplex();
    init_process();
    Writable.WritableState = WritableState;
    inherits_default(Writable, EventEmitter);
    WritableState.prototype.getBuffer = function writableStateGetBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (Buffer2.isBuffer(chunk))
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ended)
        writeAfterEnd(this, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js
function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false)
    this.readable = false;
  if (options && options.writable === false)
    this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;
  this.once("end", onend);
}
function onend() {
  if (this.allowHalfOpen || this._writableState.ended)
    return;
  nextTick(onEndNT, this);
}
function onEndNT(self2) {
  self2.end();
}
var keys, method, v;
var init_duplex = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js"() {
    init_react();
    init_util();
    init_process();
    init_readable();
    init_writable();
    inherits_default(Duplex, Readable);
    keys = Object.keys(Writable.prototype);
    for (v = 0; v < keys.length; v++) {
      method = keys[v];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js
function TransformState(stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };
  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}
function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (!cb)
    return stream.emit("error", new Error("no writecb in Transform class"));
  ts.writechunk = null;
  ts.writecb = null;
  if (data !== null && data !== void 0)
    stream.push(data);
  cb(er);
  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);
  Duplex.call(this, options);
  this._transformState = new TransformState(this);
  var stream = this;
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.once("prefinish", function() {
    if (typeof this._flush === "function")
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}
function done(stream, er) {
  if (er)
    return stream.emit("error", er);
  var ws = stream._writableState;
  var ts = stream._transformState;
  if (ws.length)
    throw new Error("Calling transform done when ws.length != 0");
  if (ts.transforming)
    throw new Error("Calling transform done when still transforming");
  return stream.push(null);
}
var init_transform = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js"() {
    init_react();
    init_duplex();
    init_util();
    inherits_default(Transform, Duplex);
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("Not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform.call(this, options);
}
var init_passthrough = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js"() {
    init_react();
    init_transform();
    init_util();
    inherits_default(PassThrough, Transform);
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node-modules-polyfills:stream
var stream_exports = {};
__export(stream_exports, {
  Duplex: () => Duplex,
  PassThrough: () => PassThrough,
  Readable: () => Readable,
  Stream: () => Stream,
  Transform: () => Transform,
  Writable: () => Writable,
  default: () => stream_default
});
function Stream() {
  events_default.call(this);
}
var stream_default;
var init_stream = __esm({
  "node-modules-polyfills:stream"() {
    init_react();
    init_events();
    init_util();
    init_duplex();
    init_readable();
    init_writable();
    init_transform();
    init_passthrough();
    inherits_default(Stream, events_default);
    Stream.Readable = Readable;
    Stream.Writable = Writable;
    Stream.Duplex = Duplex;
    Stream.Transform = Transform;
    Stream.PassThrough = PassThrough;
    Stream.Stream = Stream;
    stream_default = Stream;
    Stream.prototype.pipe = function(dest, options) {
      var source = this;
      function ondata(chunk) {
        if (dest.writable) {
          if (dest.write(chunk) === false && source.pause) {
            source.pause();
          }
        }
      }
      source.on("data", ondata);
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
      dest.on("drain", ondrain);
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on("end", onend2);
        source.on("close", onclose);
      }
      var didOnEnd = false;
      function onend2() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        dest.end();
      }
      function onclose() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        if (typeof dest.destroy === "function")
          dest.destroy();
      }
      function onerror(er) {
        cleanup();
        if (events_default.listenerCount(this, "error") === 0) {
          throw er;
        }
      }
      source.on("error", onerror);
      dest.on("error", onerror);
      function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend2);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
      }
      source.on("end", cleanup);
      source.on("close", cleanup);
      dest.on("close", cleanup);
      dest.emit("pipe", source);
      return dest;
    };
  }
});

// node-modules-polyfills-commonjs:stream
var require_stream = __commonJS({
  "node-modules-polyfills-commonjs:stream"(exports, module) {
    init_react();
    var polyfill = (init_stream(), __toCommonJS(stream_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/mysql/lib/protocol/PacketWriter.js
var require_PacketWriter = __commonJS({
  "node_modules/mysql/lib/protocol/PacketWriter.js"(exports, module) {
    init_react();
    var BIT_16 = Math.pow(2, 16);
    var BIT_24 = Math.pow(2, 24);
    var BUFFER_ALLOC_SIZE = Math.pow(2, 8);
    var IEEE_754_BINARY_64_PRECISION = Math.pow(2, 53);
    var MAX_PACKET_LENGTH = Math.pow(2, 24) - 1;
    var Buffer3 = require_safe_buffer().Buffer;
    module.exports = PacketWriter;
    function PacketWriter() {
      this._buffer = null;
      this._offset = 0;
    }
    PacketWriter.prototype.toBuffer = function toBuffer(parser) {
      if (!this._buffer) {
        this._buffer = Buffer3.alloc(0);
        this._offset = 0;
      }
      var buffer = this._buffer;
      var length = this._offset;
      var packets = Math.floor(length / MAX_PACKET_LENGTH) + 1;
      this._buffer = Buffer3.allocUnsafe(length + packets * 4);
      this._offset = 0;
      for (var packet = 0; packet < packets; packet++) {
        var isLast = packet + 1 === packets;
        var packetLength = isLast ? length % MAX_PACKET_LENGTH : MAX_PACKET_LENGTH;
        var packetNumber = parser.incrementPacketNumber();
        this.writeUnsignedNumber(3, packetLength);
        this.writeUnsignedNumber(1, packetNumber);
        var start = packet * MAX_PACKET_LENGTH;
        var end = start + packetLength;
        this.writeBuffer(buffer.slice(start, end));
      }
      return this._buffer;
    };
    PacketWriter.prototype.writeUnsignedNumber = function(bytes, value) {
      this._allocate(bytes);
      for (var i = 0; i < bytes; i++) {
        this._buffer[this._offset++] = value >> i * 8 & 255;
      }
    };
    PacketWriter.prototype.writeFiller = function(bytes) {
      this._allocate(bytes);
      for (var i = 0; i < bytes; i++) {
        this._buffer[this._offset++] = 0;
      }
    };
    PacketWriter.prototype.writeNullTerminatedString = function(value, encoding) {
      value = value || "";
      value = value + "";
      var bytes = Buffer3.byteLength(value, encoding || "utf-8") + 1;
      this._allocate(bytes);
      this._buffer.write(value, this._offset, encoding);
      this._buffer[this._offset + bytes - 1] = 0;
      this._offset += bytes;
    };
    PacketWriter.prototype.writeString = function(value) {
      value = value || "";
      value = value + "";
      var bytes = Buffer3.byteLength(value, "utf-8");
      this._allocate(bytes);
      this._buffer.write(value, this._offset, "utf-8");
      this._offset += bytes;
    };
    PacketWriter.prototype.writeBuffer = function(value) {
      var bytes = value.length;
      this._allocate(bytes);
      value.copy(this._buffer, this._offset);
      this._offset += bytes;
    };
    PacketWriter.prototype.writeLengthCodedNumber = function(value) {
      if (value === null) {
        this._allocate(1);
        this._buffer[this._offset++] = 251;
        return;
      }
      if (value <= 250) {
        this._allocate(1);
        this._buffer[this._offset++] = value;
        return;
      }
      if (value > IEEE_754_BINARY_64_PRECISION) {
        throw new Error('writeLengthCodedNumber: JS precision range exceeded, your number is > 53 bit: "' + value + '"');
      }
      if (value < BIT_16) {
        this._allocate(3);
        this._buffer[this._offset++] = 252;
      } else if (value < BIT_24) {
        this._allocate(4);
        this._buffer[this._offset++] = 253;
      } else {
        this._allocate(9);
        this._buffer[this._offset++] = 254;
      }
      this._buffer[this._offset++] = value & 255;
      this._buffer[this._offset++] = value >> 8 & 255;
      if (value < BIT_16) {
        return;
      }
      this._buffer[this._offset++] = value >> 16 & 255;
      if (value < BIT_24) {
        return;
      }
      this._buffer[this._offset++] = value >> 24 & 255;
      value = value.toString(2);
      value = value.substr(0, value.length - 32);
      value = parseInt(value, 2);
      this._buffer[this._offset++] = value & 255;
      this._buffer[this._offset++] = value >> 8 & 255;
      this._buffer[this._offset++] = value >> 16 & 255;
      this._buffer[this._offset++] = 0;
    };
    PacketWriter.prototype.writeLengthCodedBuffer = function(value) {
      var bytes = value.length;
      this.writeLengthCodedNumber(bytes);
      this.writeBuffer(value);
    };
    PacketWriter.prototype.writeNullTerminatedBuffer = function(value) {
      this.writeBuffer(value);
      this.writeFiller(1);
    };
    PacketWriter.prototype.writeLengthCodedString = function(value) {
      if (value === null) {
        this.writeLengthCodedNumber(null);
        return;
      }
      value = value === void 0 ? "" : String(value);
      var bytes = Buffer3.byteLength(value, "utf-8");
      this.writeLengthCodedNumber(bytes);
      if (!bytes) {
        return;
      }
      this._allocate(bytes);
      this._buffer.write(value, this._offset, "utf-8");
      this._offset += bytes;
    };
    PacketWriter.prototype._allocate = function _allocate(bytes) {
      if (!this._buffer) {
        this._buffer = Buffer3.alloc(Math.max(BUFFER_ALLOC_SIZE, bytes));
        this._offset = 0;
        return;
      }
      var bytesRemaining = this._buffer.length - this._offset;
      if (bytesRemaining >= bytes) {
        return;
      }
      var newSize = this._buffer.length + Math.max(BUFFER_ALLOC_SIZE, bytes);
      var oldBuffer = this._buffer;
      this._buffer = Buffer3.alloc(newSize);
      oldBuffer.copy(this._buffer);
    };
  }
});

// node_modules/mysql/lib/protocol/Protocol.js
var require_Protocol = __commonJS({
  "node_modules/mysql/lib/protocol/Protocol.js"(exports, module) {
    init_react();
    var Parser = require_Parser();
    var Sequences = require_sequences();
    var Packets = require_packets();
    var Stream2 = require_stream().Stream;
    var Util = require_util();
    var PacketWriter = require_PacketWriter();
    module.exports = Protocol;
    Util.inherits(Protocol, Stream2);
    function Protocol(options) {
      Stream2.call(this);
      options = options || {};
      this.readable = true;
      this.writable = true;
      this._config = options.config || {};
      this._connection = options.connection;
      this._callback = null;
      this._fatalError = null;
      this._quitSequence = null;
      this._handshake = false;
      this._handshaked = false;
      this._ended = false;
      this._destroyed = false;
      this._queue = [];
      this._handshakeInitializationPacket = null;
      this._parser = new Parser({
        onError: this.handleParserError.bind(this),
        onPacket: this._parsePacket.bind(this),
        config: this._config
      });
    }
    Protocol.prototype.write = function(buffer) {
      this._parser.write(buffer);
      return true;
    };
    Protocol.prototype.handshake = function handshake(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      options.config = this._config;
      var sequence = this._enqueue(new Sequences.Handshake(options, callback));
      this._handshake = true;
      return sequence;
    };
    Protocol.prototype.query = function query(options, callback) {
      return this._enqueue(new Sequences.Query(options, callback));
    };
    Protocol.prototype.changeUser = function changeUser(options, callback) {
      return this._enqueue(new Sequences.ChangeUser(options, callback));
    };
    Protocol.prototype.ping = function ping(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      return this._enqueue(new Sequences.Ping(options, callback));
    };
    Protocol.prototype.stats = function stats(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      return this._enqueue(new Sequences.Statistics(options, callback));
    };
    Protocol.prototype.quit = function quit(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      var self2 = this;
      var sequence = this._enqueue(new Sequences.Quit(options, callback));
      sequence.on("end", function() {
        self2.end();
      });
      return this._quitSequence = sequence;
    };
    Protocol.prototype.end = function() {
      if (this._ended) {
        return;
      }
      this._ended = true;
      if (this._quitSequence && (this._quitSequence._ended || this._queue[0] === this._quitSequence)) {
        this._quitSequence.end();
        this.emit("end");
        return;
      }
      var err = new Error("Connection lost: The server closed the connection.");
      err.fatal = true;
      err.code = "PROTOCOL_CONNECTION_LOST";
      this._delegateError(err);
    };
    Protocol.prototype.pause = function() {
      this._parser.pause();
      var seq = this._queue[0];
      if (seq && seq.emit) {
        seq.emit("pause");
      }
    };
    Protocol.prototype.resume = function() {
      this._parser.resume();
      var seq = this._queue[0];
      if (seq && seq.emit) {
        seq.emit("resume");
      }
    };
    Protocol.prototype._enqueue = function(sequence) {
      if (!this._validateEnqueue(sequence)) {
        return sequence;
      }
      if (this._config.trace) {
        sequence._callSite = sequence._callSite || new Error();
      }
      this._queue.push(sequence);
      this.emit("enqueue", sequence);
      var self2 = this;
      sequence.on("error", function(err) {
        self2._delegateError(err, sequence);
      }).on("packet", function(packet) {
        sequence._timer.active();
        self2._emitPacket(packet);
      }).on("timeout", function() {
        var err = new Error(sequence.constructor.name + " inactivity timeout");
        err.code = "PROTOCOL_SEQUENCE_TIMEOUT";
        err.fatal = true;
        err.timeout = sequence._timeout;
        self2._delegateError(err, sequence);
      });
      if (sequence.constructor === Sequences.Handshake) {
        sequence.on("start-tls", function() {
          sequence._timer.active();
          self2._connection._startTLS(function(err) {
            if (err) {
              err.code = "HANDSHAKE_SSL_ERROR";
              err.fatal = true;
              sequence.end(err);
              return;
            }
            sequence._timer.active();
            sequence._tlsUpgradeCompleteHandler();
          });
        });
        sequence.on("end", function() {
          self2._handshaked = true;
          if (!self2._fatalError) {
            self2.emit("handshake", self2._handshakeInitializationPacket);
          }
        });
      }
      sequence.on("end", function() {
        self2._dequeue(sequence);
      });
      if (this._queue.length === 1) {
        this._parser.resetPacketNumber();
        this._startSequence(sequence);
      }
      return sequence;
    };
    Protocol.prototype._validateEnqueue = function _validateEnqueue(sequence) {
      var err;
      var prefix = "Cannot enqueue " + sequence.constructor.name;
      if (this._fatalError) {
        err = new Error(prefix + " after fatal error.");
        err.code = "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR";
      } else if (this._quitSequence) {
        err = new Error(prefix + " after invoking quit.");
        err.code = "PROTOCOL_ENQUEUE_AFTER_QUIT";
      } else if (this._destroyed) {
        err = new Error(prefix + " after being destroyed.");
        err.code = "PROTOCOL_ENQUEUE_AFTER_DESTROY";
      } else if ((this._handshake || this._handshaked) && sequence.constructor === Sequences.Handshake) {
        err = new Error(prefix + " after already enqueuing a Handshake.");
        err.code = "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE";
      } else {
        return true;
      }
      var self2 = this;
      err.fatal = false;
      sequence.on("error", function(err2) {
        self2._delegateError(err2, sequence);
      });
      process.nextTick(function() {
        sequence.end(err);
      });
      return false;
    };
    Protocol.prototype._parsePacket = function() {
      var sequence = this._queue[0];
      if (!sequence) {
        var err = new Error("Received packet with no active sequence.");
        err.code = "PROTOCOL_STRAY_PACKET";
        err.fatal = true;
        this._delegateError(err);
        return;
      }
      var Packet = this._determinePacket(sequence);
      var packet = new Packet({ protocol41: this._config.protocol41 });
      var packetName = Packet.name;
      if (Packet === Packets.RowDataPacket) {
        sequence.RowDataPacket(packet, this._parser, this._connection);
        if (this._config.debug) {
          this._debugPacket(true, packet);
        }
        return;
      }
      if (this._config.debug) {
        this._parsePacketDebug(packet);
      } else {
        packet.parse(this._parser);
      }
      if (Packet === Packets.HandshakeInitializationPacket) {
        this._handshakeInitializationPacket = packet;
        this.emit("initialize", packet);
      }
      sequence._timer.active();
      if (!sequence[packetName]) {
        var err = new Error("Received packet in the wrong sequence.");
        err.code = "PROTOCOL_INCORRECT_PACKET_SEQUENCE";
        err.fatal = true;
        this._delegateError(err);
        return;
      }
      sequence[packetName](packet);
    };
    Protocol.prototype._parsePacketDebug = function _parsePacketDebug(packet) {
      try {
        packet.parse(this._parser);
      } finally {
        this._debugPacket(true, packet);
      }
    };
    Protocol.prototype._emitPacket = function(packet) {
      var packetWriter = new PacketWriter();
      packet.write(packetWriter);
      this.emit("data", packetWriter.toBuffer(this._parser));
      if (this._config.debug) {
        this._debugPacket(false, packet);
      }
    };
    Protocol.prototype._determinePacket = function(sequence) {
      var firstByte = this._parser.peak();
      if (sequence.determinePacket) {
        var Packet = sequence.determinePacket(firstByte, this._parser);
        if (Packet) {
          return Packet;
        }
      }
      switch (firstByte) {
        case 0:
          return Packets.OkPacket;
        case 254:
          return Packets.EofPacket;
        case 255:
          return Packets.ErrorPacket;
      }
      throw new Error("Could not determine packet, firstByte = " + firstByte);
    };
    Protocol.prototype._dequeue = function(sequence) {
      sequence._timer.stop();
      if (this._fatalError) {
        return;
      }
      this._queue.shift();
      var sequence = this._queue[0];
      if (!sequence) {
        this.emit("drain");
        return;
      }
      this._parser.resetPacketNumber();
      this._startSequence(sequence);
    };
    Protocol.prototype._startSequence = function(sequence) {
      if (sequence._timeout > 0 && isFinite(sequence._timeout)) {
        sequence._timer.start(sequence._timeout);
      }
      if (sequence.constructor === Sequences.ChangeUser) {
        sequence.start(this._handshakeInitializationPacket);
      } else {
        sequence.start();
      }
    };
    Protocol.prototype.handleNetworkError = function(err) {
      err.fatal = true;
      var sequence = this._queue[0];
      if (sequence) {
        sequence.end(err);
      } else {
        this._delegateError(err);
      }
    };
    Protocol.prototype.handleParserError = function handleParserError(err) {
      var sequence = this._queue[0];
      if (sequence) {
        sequence.end(err);
      } else {
        this._delegateError(err);
      }
    };
    Protocol.prototype._delegateError = function(err, sequence) {
      if (this._fatalError) {
        return;
      }
      if (err.fatal) {
        this._fatalError = err;
      }
      if (this._shouldErrorBubbleUp(err, sequence)) {
        this.emit("unhandledError", err);
      } else if (err.fatal) {
        var queue2 = this._queue;
        process.nextTick(function() {
          queue2.forEach(function(sequence2) {
            sequence2.end(err);
          });
          queue2.length = 0;
        });
      }
      if (err.fatal) {
        this.emit("end", err);
      }
    };
    Protocol.prototype._shouldErrorBubbleUp = function(err, sequence) {
      if (sequence) {
        if (sequence.hasErrorHandler()) {
          return false;
        } else if (!err.fatal) {
          return true;
        }
      }
      return err.fatal && !this._hasPendingErrorHandlers();
    };
    Protocol.prototype._hasPendingErrorHandlers = function() {
      return this._queue.some(function(sequence) {
        return sequence.hasErrorHandler();
      });
    };
    Protocol.prototype.destroy = function() {
      this._destroyed = true;
      this._parser.pause();
      if (this._connection.state !== "disconnected") {
        if (!this._ended) {
          this.end();
        }
      }
    };
    Protocol.prototype._debugPacket = function(incoming, packet) {
      var connection = this._connection;
      var direction = incoming ? "<--" : "-->";
      var packetName = packet.constructor.name;
      var threadId = connection && connection.threadId !== null ? " (" + connection.threadId + ")" : "";
      if (Array.isArray(this._config.debug) && this._config.debug.indexOf(packetName) === -1) {
        return;
      }
      var packetPayload = Util.inspect(packet).replace(/^[^{]+/, "");
      console.log("%s%s %s %s\n", direction, threadId, packetName, packetPayload);
    };
  }
});

// node_modules/sqlstring/lib/SqlString.js
var require_SqlString = __commonJS({
  "node_modules/sqlstring/lib/SqlString.js"(exports) {
    init_react();
    var SqlString = exports;
    var ID_GLOBAL_REGEXP = /`/g;
    var QUAL_GLOBAL_REGEXP = /\./g;
    var CHARS_GLOBAL_REGEXP = /[\0\b\t\n\r\x1a\"\'\\]/g;
    var CHARS_ESCAPE_MAP = {
      "\0": "\\0",
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\r": "\\r",
      "": "\\Z",
      '"': '\\"',
      "'": "\\'",
      "\\": "\\\\"
    };
    SqlString.escapeId = function escapeId(val, forbidQualified) {
      if (Array.isArray(val)) {
        var sql = "";
        for (var i = 0; i < val.length; i++) {
          sql += (i === 0 ? "" : ", ") + SqlString.escapeId(val[i], forbidQualified);
        }
        return sql;
      } else if (forbidQualified) {
        return "`" + String(val).replace(ID_GLOBAL_REGEXP, "``") + "`";
      } else {
        return "`" + String(val).replace(ID_GLOBAL_REGEXP, "``").replace(QUAL_GLOBAL_REGEXP, "`.`") + "`";
      }
    };
    SqlString.escape = function escape2(val, stringifyObjects, timeZone) {
      if (val === void 0 || val === null) {
        return "NULL";
      }
      switch (typeof val) {
        case "boolean":
          return val ? "true" : "false";
        case "number":
          return val + "";
        case "object":
          if (val instanceof Date) {
            return SqlString.dateToString(val, timeZone || "local");
          } else if (Array.isArray(val)) {
            return SqlString.arrayToList(val, timeZone);
          } else if (Buffer.isBuffer(val)) {
            return SqlString.bufferToString(val);
          } else if (typeof val.toSqlString === "function") {
            return String(val.toSqlString());
          } else if (stringifyObjects) {
            return escapeString(val.toString());
          } else {
            return SqlString.objectToValues(val, timeZone);
          }
        default:
          return escapeString(val);
      }
    };
    SqlString.arrayToList = function arrayToList(array, timeZone) {
      var sql = "";
      for (var i = 0; i < array.length; i++) {
        var val = array[i];
        if (Array.isArray(val)) {
          sql += (i === 0 ? "" : ", ") + "(" + SqlString.arrayToList(val, timeZone) + ")";
        } else {
          sql += (i === 0 ? "" : ", ") + SqlString.escape(val, true, timeZone);
        }
      }
      return sql;
    };
    SqlString.format = function format3(sql, values, stringifyObjects, timeZone) {
      if (values == null) {
        return sql;
      }
      if (!(values instanceof Array || Array.isArray(values))) {
        values = [values];
      }
      var chunkIndex = 0;
      var placeholdersRegex = /\?+/g;
      var result = "";
      var valuesIndex = 0;
      var match;
      while (valuesIndex < values.length && (match = placeholdersRegex.exec(sql))) {
        var len = match[0].length;
        if (len > 2) {
          continue;
        }
        var value = len === 2 ? SqlString.escapeId(values[valuesIndex]) : SqlString.escape(values[valuesIndex], stringifyObjects, timeZone);
        result += sql.slice(chunkIndex, match.index) + value;
        chunkIndex = placeholdersRegex.lastIndex;
        valuesIndex++;
      }
      if (chunkIndex === 0) {
        return sql;
      }
      if (chunkIndex < sql.length) {
        return result + sql.slice(chunkIndex);
      }
      return result;
    };
    SqlString.dateToString = function dateToString(date, timeZone) {
      var dt = new Date(date);
      if (isNaN(dt.getTime())) {
        return "NULL";
      }
      var year;
      var month;
      var day;
      var hour;
      var minute;
      var second;
      var millisecond;
      if (timeZone === "local") {
        year = dt.getFullYear();
        month = dt.getMonth() + 1;
        day = dt.getDate();
        hour = dt.getHours();
        minute = dt.getMinutes();
        second = dt.getSeconds();
        millisecond = dt.getMilliseconds();
      } else {
        var tz = convertTimezone(timeZone);
        if (tz !== false && tz !== 0) {
          dt.setTime(dt.getTime() + tz * 6e4);
        }
        year = dt.getUTCFullYear();
        month = dt.getUTCMonth() + 1;
        day = dt.getUTCDate();
        hour = dt.getUTCHours();
        minute = dt.getUTCMinutes();
        second = dt.getUTCSeconds();
        millisecond = dt.getUTCMilliseconds();
      }
      var str = zeroPad(year, 4) + "-" + zeroPad(month, 2) + "-" + zeroPad(day, 2) + " " + zeroPad(hour, 2) + ":" + zeroPad(minute, 2) + ":" + zeroPad(second, 2) + "." + zeroPad(millisecond, 3);
      return escapeString(str);
    };
    SqlString.bufferToString = function bufferToString(buffer) {
      return "X" + escapeString(buffer.toString("hex"));
    };
    SqlString.objectToValues = function objectToValues(object, timeZone) {
      var sql = "";
      for (var key in object) {
        var val = object[key];
        if (typeof val === "function") {
          continue;
        }
        sql += (sql.length === 0 ? "" : ", ") + SqlString.escapeId(key) + " = " + SqlString.escape(val, true, timeZone);
      }
      return sql;
    };
    SqlString.raw = function raw(sql) {
      if (typeof sql !== "string") {
        throw new TypeError("argument sql must be a string");
      }
      return {
        toSqlString: function toSqlString() {
          return sql;
        }
      };
    };
    function escapeString(val) {
      var chunkIndex = CHARS_GLOBAL_REGEXP.lastIndex = 0;
      var escapedVal = "";
      var match;
      while (match = CHARS_GLOBAL_REGEXP.exec(val)) {
        escapedVal += val.slice(chunkIndex, match.index) + CHARS_ESCAPE_MAP[match[0]];
        chunkIndex = CHARS_GLOBAL_REGEXP.lastIndex;
      }
      if (chunkIndex === 0) {
        return "'" + val + "'";
      }
      if (chunkIndex < val.length) {
        return "'" + escapedVal + val.slice(chunkIndex) + "'";
      }
      return "'" + escapedVal + "'";
    }
    function zeroPad(number, length) {
      number = number.toString();
      while (number.length < length) {
        number = "0" + number;
      }
      return number;
    }
    function convertTimezone(tz) {
      if (tz === "Z") {
        return 0;
      }
      var m = tz.match(/([\+\-\s])(\d\d):?(\d\d)?/);
      if (m) {
        return (m[1] === "-" ? -1 : 1) * (parseInt(m[2], 10) + (m[3] ? parseInt(m[3], 10) : 0) / 60) * 60;
      }
      return false;
    }
  }
});

// node_modules/sqlstring/index.js
var require_sqlstring = __commonJS({
  "node_modules/sqlstring/index.js"(exports, module) {
    init_react();
    module.exports = require_SqlString();
  }
});

// node_modules/mysql/lib/protocol/SqlString.js
var require_SqlString2 = __commonJS({
  "node_modules/mysql/lib/protocol/SqlString.js"(exports, module) {
    init_react();
    module.exports = require_sqlstring();
  }
});

// node_modules/mysql/lib/Connection.js
var require_Connection = __commonJS({
  "node_modules/mysql/lib/Connection.js"(exports, module) {
    init_react();
    var Crypto = require_crypto();
    var Events = require_events();
    var Net = require_net();
    var tls = require_tls();
    var ConnectionConfig = require_ConnectionConfig();
    var Protocol = require_Protocol();
    var SqlString = require_SqlString2();
    var Query = require_Query();
    var Util = require_util();
    module.exports = Connection;
    Util.inherits(Connection, Events.EventEmitter);
    function Connection(options) {
      Events.EventEmitter.call(this);
      this.config = options.config;
      this._socket = options.socket;
      this._protocol = new Protocol({ config: this.config, connection: this });
      this._connectCalled = false;
      this.state = "disconnected";
      this.threadId = null;
    }
    Connection.createQuery = function createQuery(sql, values, callback) {
      if (sql instanceof Query) {
        return sql;
      }
      var cb = callback;
      var options = {};
      if (typeof sql === "function") {
        cb = sql;
      } else if (typeof sql === "object") {
        options = Object.create(sql);
        if (typeof values === "function") {
          cb = values;
        } else if (values !== void 0) {
          Object.defineProperty(options, "values", { value: values });
        }
      } else {
        options.sql = sql;
        if (typeof values === "function") {
          cb = values;
        } else if (values !== void 0) {
          options.values = values;
        }
      }
      if (cb !== void 0) {
        cb = wrapCallbackInDomain(null, cb);
        if (cb === void 0) {
          throw new TypeError("argument callback must be a function when provided");
        }
      }
      return new Query(options, cb);
    };
    Connection.prototype.connect = function connect(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this._connectCalled) {
        this._connectCalled = true;
        this._socket = this.config.socketPath ? Net.createConnection(this.config.socketPath) : Net.createConnection(this.config.port, this.config.host);
        if (Events.usingDomains) {
          this._socket.domain = this.domain;
        }
        var connection = this;
        this._protocol.on("data", function(data) {
          connection._socket.write(data);
        });
        this._socket.on("data", wrapToDomain(connection, function(data) {
          connection._protocol.write(data);
        }));
        this._protocol.on("end", function() {
          connection._socket.end();
        });
        this._socket.on("end", wrapToDomain(connection, function() {
          connection._protocol.end();
        }));
        this._socket.on("error", this._handleNetworkError.bind(this));
        this._socket.on("connect", this._handleProtocolConnect.bind(this));
        this._protocol.on("handshake", this._handleProtocolHandshake.bind(this));
        this._protocol.on("initialize", this._handleProtocolInitialize.bind(this));
        this._protocol.on("unhandledError", this._handleProtocolError.bind(this));
        this._protocol.on("drain", this._handleProtocolDrain.bind(this));
        this._protocol.on("end", this._handleProtocolEnd.bind(this));
        this._protocol.on("enqueue", this._handleProtocolEnqueue.bind(this));
        if (this.config.connectTimeout) {
          var handleConnectTimeout = this._handleConnectTimeout.bind(this);
          this._socket.setTimeout(this.config.connectTimeout, handleConnectTimeout);
          this._socket.once("connect", function() {
            this.setTimeout(0, handleConnectTimeout);
          });
        }
      }
      this._protocol.handshake(options, wrapCallbackInDomain(this, callback));
    };
    Connection.prototype.changeUser = function changeUser(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      this._implyConnect();
      var charsetNumber = options.charset ? ConnectionConfig.getCharsetNumber(options.charset) : this.config.charsetNumber;
      return this._protocol.changeUser({
        user: options.user || this.config.user,
        password: options.password || this.config.password,
        database: options.database || this.config.database,
        timeout: options.timeout,
        charsetNumber,
        currentConfig: this.config
      }, wrapCallbackInDomain(this, callback));
    };
    Connection.prototype.beginTransaction = function beginTransaction(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      options.sql = "START TRANSACTION";
      options.values = null;
      return this.query(options, callback);
    };
    Connection.prototype.commit = function commit(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      options.sql = "COMMIT";
      options.values = null;
      return this.query(options, callback);
    };
    Connection.prototype.rollback = function rollback(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      options.sql = "ROLLBACK";
      options.values = null;
      return this.query(options, callback);
    };
    Connection.prototype.query = function query(sql, values, cb) {
      var query2 = Connection.createQuery(sql, values, cb);
      query2._connection = this;
      if (!(typeof sql === "object" && "typeCast" in sql)) {
        query2.typeCast = this.config.typeCast;
      }
      if (query2.sql) {
        query2.sql = this.format(query2.sql, query2.values);
      }
      if (query2._callback) {
        query2._callback = wrapCallbackInDomain(this, query2._callback);
      }
      this._implyConnect();
      return this._protocol._enqueue(query2);
    };
    Connection.prototype.ping = function ping(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      this._implyConnect();
      this._protocol.ping(options, wrapCallbackInDomain(this, callback));
    };
    Connection.prototype.statistics = function statistics(options, callback) {
      if (!callback && typeof options === "function") {
        callback = options;
        options = {};
      }
      this._implyConnect();
      this._protocol.stats(options, wrapCallbackInDomain(this, callback));
    };
    Connection.prototype.end = function end(options, callback) {
      var cb = callback;
      var opts = options;
      if (!callback && typeof options === "function") {
        cb = options;
        opts = null;
      }
      opts = Object.create(opts || null);
      if (opts.timeout === void 0) {
        opts.timeout = 3e4;
      }
      this._implyConnect();
      this._protocol.quit(opts, wrapCallbackInDomain(this, cb));
    };
    Connection.prototype.destroy = function() {
      this.state = "disconnected";
      this._implyConnect();
      this._socket.destroy();
      this._protocol.destroy();
    };
    Connection.prototype.pause = function() {
      this._socket.pause();
      this._protocol.pause();
    };
    Connection.prototype.resume = function() {
      this._socket.resume();
      this._protocol.resume();
    };
    Connection.prototype.escape = function(value) {
      return SqlString.escape(value, false, this.config.timezone);
    };
    Connection.prototype.escapeId = function escapeId(value) {
      return SqlString.escapeId(value, false);
    };
    Connection.prototype.format = function(sql, values) {
      if (typeof this.config.queryFormat === "function") {
        return this.config.queryFormat.call(this, sql, values, this.config.timezone);
      }
      return SqlString.format(sql, values, this.config.stringifyObjects, this.config.timezone);
    };
    if (tls.TLSSocket) {
      Connection.prototype._startTLS = function _startTLS(onSecure) {
        var connection = this;
        createSecureContext(this.config, function(err, secureContext) {
          if (err) {
            onSecure(err);
            return;
          }
          connection._socket.removeAllListeners("data");
          connection._protocol.removeAllListeners("data");
          var rejectUnauthorized = connection.config.ssl.rejectUnauthorized;
          var secureEstablished = false;
          var secureSocket = new tls.TLSSocket(connection._socket, {
            rejectUnauthorized,
            requestCert: true,
            secureContext,
            isServer: false
          });
          secureSocket.on("_tlsError", function(err2) {
            if (secureEstablished) {
              connection._handleNetworkError(err2);
            } else {
              onSecure(err2);
            }
          });
          secureSocket.pipe(connection._protocol);
          connection._protocol.on("data", function(data) {
            secureSocket.write(data);
          });
          secureSocket.on("secure", function() {
            secureEstablished = true;
            onSecure(rejectUnauthorized ? this.ssl.verifyError() : null);
          });
          secureSocket._start();
        });
      };
    } else {
      Connection.prototype._startTLS = function _startTLS(onSecure) {
        var connection = this;
        var credentials = Crypto.createCredentials({
          ca: this.config.ssl.ca,
          cert: this.config.ssl.cert,
          ciphers: this.config.ssl.ciphers,
          key: this.config.ssl.key,
          passphrase: this.config.ssl.passphrase
        });
        var rejectUnauthorized = this.config.ssl.rejectUnauthorized;
        var secureEstablished = false;
        var securePair = tls.createSecurePair(credentials, false, true, rejectUnauthorized);
        securePair.on("error", function(err) {
          if (secureEstablished) {
            connection._handleNetworkError(err);
          } else {
            onSecure(err);
          }
        });
        this._socket.removeAllListeners("data");
        this._protocol.removeAllListeners("data");
        securePair.encrypted.pipe(this._socket);
        this._socket.on("data", function(data) {
          securePair.encrypted.write(data);
        });
        securePair.cleartext.pipe(this._protocol);
        this._protocol.on("data", function(data) {
          securePair.cleartext.write(data);
        });
        securePair.on("secure", function() {
          secureEstablished = true;
          if (!rejectUnauthorized) {
            onSecure();
            return;
          }
          var verifyError = this.ssl.verifyError();
          var err = verifyError;
          if (typeof err === "string") {
            err = new Error(verifyError);
            err.code = verifyError;
          }
          onSecure(err);
        });
        securePair._cycle = securePair.cycle;
        securePair.cycle = function cycle() {
          if (this.ssl && this.ssl.error) {
            this.error();
          }
          return this._cycle.apply(this, arguments);
        };
      };
    }
    Connection.prototype._handleConnectTimeout = function() {
      if (this._socket) {
        this._socket.setTimeout(0);
        this._socket.destroy();
      }
      var err = new Error("connect ETIMEDOUT");
      err.errorno = "ETIMEDOUT";
      err.code = "ETIMEDOUT";
      err.syscall = "connect";
      this._handleNetworkError(err);
    };
    Connection.prototype._handleNetworkError = function(err) {
      this._protocol.handleNetworkError(err);
    };
    Connection.prototype._handleProtocolError = function(err) {
      this.state = "protocol_error";
      this.emit("error", err);
    };
    Connection.prototype._handleProtocolDrain = function() {
      this.emit("drain");
    };
    Connection.prototype._handleProtocolConnect = function() {
      this.state = "connected";
      this.emit("connect");
    };
    Connection.prototype._handleProtocolHandshake = function _handleProtocolHandshake() {
      this.state = "authenticated";
    };
    Connection.prototype._handleProtocolInitialize = function _handleProtocolInitialize(packet) {
      this.threadId = packet.threadId;
    };
    Connection.prototype._handleProtocolEnd = function(err) {
      this.state = "disconnected";
      this.emit("end", err);
    };
    Connection.prototype._handleProtocolEnqueue = function _handleProtocolEnqueue(sequence) {
      this.emit("enqueue", sequence);
    };
    Connection.prototype._implyConnect = function() {
      if (!this._connectCalled) {
        this.connect();
      }
    };
    function createSecureContext(config2, cb) {
      var context = null;
      var error2 = null;
      try {
        context = tls.createSecureContext({
          ca: config2.ssl.ca,
          cert: config2.ssl.cert,
          ciphers: config2.ssl.ciphers,
          key: config2.ssl.key,
          passphrase: config2.ssl.passphrase
        });
      } catch (err) {
        error2 = err;
      }
      cb(error2, context);
    }
    function unwrapFromDomain(fn) {
      return function() {
        var domains = [];
        var ret;
        while (process.domain) {
          domains.shift(process.domain);
          process.domain.exit();
        }
        try {
          ret = fn.apply(this, arguments);
        } finally {
          for (var i = 0; i < domains.length; i++) {
            domains[i].enter();
          }
        }
        return ret;
      };
    }
    function wrapCallbackInDomain(ee, fn) {
      if (typeof fn !== "function") {
        return void 0;
      }
      if (fn.domain) {
        return fn;
      }
      var domain2 = process.domain;
      if (domain2) {
        return domain2.bind(fn);
      } else if (ee) {
        return unwrapFromDomain(wrapToDomain(ee, fn));
      } else {
        return fn;
      }
    }
    function wrapToDomain(ee, fn) {
      return function() {
        if (Events.usingDomains && ee.domain) {
          ee.domain.enter();
          fn.apply(this, arguments);
          ee.domain.exit();
        } else {
          fn.apply(this, arguments);
        }
      };
    }
  }
});

// node_modules/mysql/lib/PoolConnection.js
var require_PoolConnection = __commonJS({
  "node_modules/mysql/lib/PoolConnection.js"(exports, module) {
    init_react();
    var inherits2 = require_util().inherits;
    var Connection = require_Connection();
    var Events = require_events();
    module.exports = PoolConnection;
    inherits2(PoolConnection, Connection);
    function PoolConnection(pool, options) {
      Connection.call(this, options);
      this._pool = pool;
      if (Events.usingDomains) {
        this.domain = pool.domain;
      }
      this.on("end", this._removeFromPool);
      this.on("error", function(err) {
        if (err.fatal) {
          this._removeFromPool();
        }
      });
    }
    PoolConnection.prototype.release = function release2() {
      var pool = this._pool;
      if (!pool || pool._closed) {
        return void 0;
      }
      return pool.releaseConnection(this);
    };
    PoolConnection.prototype._realEnd = Connection.prototype.end;
    PoolConnection.prototype.end = function() {
      console.warn("Calling conn.end() to release a pooled connection is deprecated. In next version calling conn.end() will be restored to default conn.end() behavior. Use conn.release() instead.");
      this.release();
    };
    PoolConnection.prototype.destroy = function() {
      Connection.prototype.destroy.apply(this, arguments);
      this._removeFromPool(this);
    };
    PoolConnection.prototype._removeFromPool = function _removeFromPool() {
      if (!this._pool || this._pool._closed) {
        return;
      }
      var pool = this._pool;
      this._pool = null;
      pool._purgeConnection(this);
    };
  }
});

// node_modules/mysql/lib/Pool.js
var require_Pool = __commonJS({
  "node_modules/mysql/lib/Pool.js"(exports, module) {
    init_react();
    var mysql = require_mysql();
    var Connection = require_Connection();
    var EventEmitter2 = require_events().EventEmitter;
    var Util = require_util();
    var PoolConnection = require_PoolConnection();
    module.exports = Pool;
    Util.inherits(Pool, EventEmitter2);
    function Pool(options) {
      EventEmitter2.call(this);
      this.config = options.config;
      this.config.connectionConfig.pool = this;
      this._acquiringConnections = [];
      this._allConnections = [];
      this._freeConnections = [];
      this._connectionQueue = [];
      this._closed = false;
    }
    Pool.prototype.getConnection = function(cb) {
      if (this._closed) {
        var err = new Error("Pool is closed.");
        err.code = "POOL_CLOSED";
        process.nextTick(function() {
          cb(err);
        });
        return;
      }
      var connection;
      var pool = this;
      if (this._freeConnections.length > 0) {
        connection = this._freeConnections.shift();
        this.acquireConnection(connection, cb);
        return;
      }
      if (this.config.connectionLimit === 0 || this._allConnections.length < this.config.connectionLimit) {
        connection = new PoolConnection(this, { config: this.config.newConnectionConfig() });
        this._acquiringConnections.push(connection);
        this._allConnections.push(connection);
        connection.connect({ timeout: this.config.acquireTimeout }, function onConnect(err2) {
          spliceConnection(pool._acquiringConnections, connection);
          if (pool._closed) {
            err2 = new Error("Pool is closed.");
            err2.code = "POOL_CLOSED";
          }
          if (err2) {
            pool._purgeConnection(connection);
            cb(err2);
            return;
          }
          pool.emit("connection", connection);
          pool.emit("acquire", connection);
          cb(null, connection);
        });
        return;
      }
      if (!this.config.waitForConnections) {
        process.nextTick(function() {
          var err2 = new Error("No connections available.");
          err2.code = "POOL_CONNLIMIT";
          cb(err2);
        });
        return;
      }
      this._enqueueCallback(cb);
    };
    Pool.prototype.acquireConnection = function acquireConnection(connection, cb) {
      if (connection._pool !== this) {
        throw new Error("Connection acquired from wrong pool.");
      }
      var changeUser = this._needsChangeUser(connection);
      var pool = this;
      this._acquiringConnections.push(connection);
      function onOperationComplete(err) {
        spliceConnection(pool._acquiringConnections, connection);
        if (pool._closed) {
          err = new Error("Pool is closed.");
          err.code = "POOL_CLOSED";
        }
        if (err) {
          pool._connectionQueue.unshift(cb);
          pool._purgeConnection(connection);
          return;
        }
        if (changeUser) {
          pool.emit("connection", connection);
        }
        pool.emit("acquire", connection);
        cb(null, connection);
      }
      if (changeUser) {
        connection.config = this.config.newConnectionConfig();
        connection.changeUser({ timeout: this.config.acquireTimeout }, onOperationComplete);
      } else {
        connection.ping({ timeout: this.config.acquireTimeout }, onOperationComplete);
      }
    };
    Pool.prototype.releaseConnection = function releaseConnection(connection) {
      if (this._acquiringConnections.indexOf(connection) !== -1) {
        return;
      }
      if (connection._pool) {
        if (connection._pool !== this) {
          throw new Error("Connection released to wrong pool");
        }
        if (this._freeConnections.indexOf(connection) !== -1) {
          throw new Error("Connection already released");
        } else {
          this._freeConnections.push(connection);
          this.emit("release", connection);
        }
      }
      if (this._closed) {
        this._connectionQueue.splice(0).forEach(function(cb) {
          var err = new Error("Pool is closed.");
          err.code = "POOL_CLOSED";
          process.nextTick(function() {
            cb(err);
          });
        });
      } else if (this._connectionQueue.length) {
        this.getConnection(this._connectionQueue.shift());
      }
    };
    Pool.prototype.end = function(cb) {
      this._closed = true;
      if (typeof cb !== "function") {
        cb = function(err) {
          if (err)
            throw err;
        };
      }
      var calledBack = false;
      var waitingClose = 0;
      function onEnd(err) {
        if (!calledBack && (err || --waitingClose <= 0)) {
          calledBack = true;
          cb(err);
        }
      }
      while (this._allConnections.length !== 0) {
        waitingClose++;
        this._purgeConnection(this._allConnections[0], onEnd);
      }
      if (waitingClose === 0) {
        process.nextTick(onEnd);
      }
    };
    Pool.prototype.query = function(sql, values, cb) {
      var query = Connection.createQuery(sql, values, cb);
      if (!(typeof sql === "object" && "typeCast" in sql)) {
        query.typeCast = this.config.connectionConfig.typeCast;
      }
      if (this.config.connectionConfig.trace) {
        query._callSite = new Error();
      }
      this.getConnection(function(err, conn) {
        if (err) {
          query.on("error", function() {
          });
          query.end(err);
          return;
        }
        query.once("end", function() {
          conn.release();
        });
        conn.query(query);
      });
      return query;
    };
    Pool.prototype._enqueueCallback = function _enqueueCallback(callback) {
      if (this.config.queueLimit && this._connectionQueue.length >= this.config.queueLimit) {
        process.nextTick(function() {
          var err = new Error("Queue limit reached.");
          err.code = "POOL_ENQUEUELIMIT";
          callback(err);
        });
        return;
      }
      var cb = process.domain ? process.domain.bind(callback) : callback;
      this._connectionQueue.push(cb);
      this.emit("enqueue");
    };
    Pool.prototype._needsChangeUser = function _needsChangeUser(connection) {
      var connConfig = connection.config;
      var poolConfig = this.config.connectionConfig;
      return connConfig.user !== poolConfig.user || connConfig.database !== poolConfig.database || connConfig.password !== poolConfig.password || connConfig.charsetNumber !== poolConfig.charsetNumber;
    };
    Pool.prototype._purgeConnection = function _purgeConnection(connection, callback) {
      var cb = callback || function() {
      };
      if (connection.state === "disconnected") {
        connection.destroy();
      }
      this._removeConnection(connection);
      if (connection.state !== "disconnected" && !connection._protocol._quitSequence) {
        connection._realEnd(cb);
        return;
      }
      process.nextTick(cb);
    };
    Pool.prototype._removeConnection = function(connection) {
      connection._pool = null;
      spliceConnection(this._allConnections, connection);
      spliceConnection(this._freeConnections, connection);
      this.releaseConnection(connection);
    };
    Pool.prototype.escape = function(value) {
      return mysql.escape(value, this.config.connectionConfig.stringifyObjects, this.config.connectionConfig.timezone);
    };
    Pool.prototype.escapeId = function escapeId(value) {
      return mysql.escapeId(value, false);
    };
    function spliceConnection(array, connection) {
      var index;
      if ((index = array.indexOf(connection)) !== -1) {
        array.splice(index, 1);
      }
    }
  }
});

// node_modules/mysql/lib/PoolConfig.js
var require_PoolConfig = __commonJS({
  "node_modules/mysql/lib/PoolConfig.js"(exports, module) {
    init_react();
    var ConnectionConfig = require_ConnectionConfig();
    module.exports = PoolConfig;
    function PoolConfig(options) {
      if (typeof options === "string") {
        options = ConnectionConfig.parseUrl(options);
      }
      this.acquireTimeout = options.acquireTimeout === void 0 ? 10 * 1e3 : Number(options.acquireTimeout);
      this.connectionConfig = new ConnectionConfig(options);
      this.waitForConnections = options.waitForConnections === void 0 ? true : Boolean(options.waitForConnections);
      this.connectionLimit = options.connectionLimit === void 0 ? 10 : Number(options.connectionLimit);
      this.queueLimit = options.queueLimit === void 0 ? 0 : Number(options.queueLimit);
    }
    PoolConfig.prototype.newConnectionConfig = function newConnectionConfig() {
      var connectionConfig = new ConnectionConfig(this.connectionConfig);
      connectionConfig.clientFlags = this.connectionConfig.clientFlags;
      connectionConfig.maxPacketSize = this.connectionConfig.maxPacketSize;
      return connectionConfig;
    };
  }
});

// node_modules/mysql/lib/PoolSelector.js
var require_PoolSelector = __commonJS({
  "node_modules/mysql/lib/PoolSelector.js"(exports, module) {
    init_react();
    var PoolSelector = module.exports = {};
    PoolSelector.RR = function PoolSelectorRoundRobin() {
      var index = 0;
      return function(clusterIds) {
        if (index >= clusterIds.length) {
          index = 0;
        }
        var clusterId = clusterIds[index++];
        return clusterId;
      };
    };
    PoolSelector.RANDOM = function PoolSelectorRandom() {
      return function(clusterIds) {
        return clusterIds[Math.floor(Math.random() * clusterIds.length)];
      };
    };
    PoolSelector.ORDER = function PoolSelectorOrder() {
      return function(clusterIds) {
        return clusterIds[0];
      };
    };
  }
});

// node_modules/mysql/lib/PoolNamespace.js
var require_PoolNamespace = __commonJS({
  "node_modules/mysql/lib/PoolNamespace.js"(exports, module) {
    init_react();
    var Connection = require_Connection();
    var PoolSelector = require_PoolSelector();
    module.exports = PoolNamespace;
    function PoolNamespace(cluster, pattern, selector) {
      this._cluster = cluster;
      this._pattern = pattern;
      this._selector = new PoolSelector[selector]();
    }
    PoolNamespace.prototype.getConnection = function(cb) {
      var clusterNode = this._getClusterNode();
      var cluster = this._cluster;
      var namespace = this;
      if (clusterNode === null) {
        var err = null;
        if (this._cluster._findNodeIds(this._pattern, true).length !== 0) {
          err = new Error("Pool does not have online node.");
          err.code = "POOL_NONEONLINE";
        } else {
          err = new Error("Pool does not exist.");
          err.code = "POOL_NOEXIST";
        }
        cb(err);
        return;
      }
      cluster._getConnection(clusterNode, function(err2, connection) {
        var retry = err2 && cluster._canRetry && cluster._findNodeIds(namespace._pattern).length !== 0;
        if (retry) {
          namespace.getConnection(cb);
          return;
        }
        if (err2) {
          cb(err2);
          return;
        }
        cb(null, connection);
      });
    };
    PoolNamespace.prototype.query = function(sql, values, cb) {
      var cluster = this._cluster;
      var clusterNode = this._getClusterNode();
      var query = Connection.createQuery(sql, values, cb);
      var namespace = this;
      if (clusterNode === null) {
        var err = null;
        if (this._cluster._findNodeIds(this._pattern, true).length !== 0) {
          err = new Error("Pool does not have online node.");
          err.code = "POOL_NONEONLINE";
        } else {
          err = new Error("Pool does not exist.");
          err.code = "POOL_NOEXIST";
        }
        process.nextTick(function() {
          query.on("error", function() {
          });
          query.end(err);
        });
        return query;
      }
      if (!(typeof sql === "object" && "typeCast" in sql)) {
        query.typeCast = clusterNode.pool.config.connectionConfig.typeCast;
      }
      if (clusterNode.pool.config.connectionConfig.trace) {
        query._callSite = new Error();
      }
      cluster._getConnection(clusterNode, function(err2, conn) {
        var retry = err2 && cluster._canRetry && cluster._findNodeIds(namespace._pattern).length !== 0;
        if (retry) {
          namespace.query(query);
          return;
        }
        if (err2) {
          query.on("error", function() {
          });
          query.end(err2);
          return;
        }
        query.once("end", function() {
          conn.release();
        });
        conn.query(query);
      });
      return query;
    };
    PoolNamespace.prototype._getClusterNode = function _getClusterNode() {
      var foundNodeIds = this._cluster._findNodeIds(this._pattern);
      var nodeId;
      switch (foundNodeIds.length) {
        case 0:
          nodeId = null;
          break;
        case 1:
          nodeId = foundNodeIds[0];
          break;
        default:
          nodeId = this._selector(foundNodeIds);
          break;
      }
      return nodeId !== null ? this._cluster._getNode(nodeId) : null;
    };
  }
});

// node_modules/mysql/lib/PoolCluster.js
var require_PoolCluster = __commonJS({
  "node_modules/mysql/lib/PoolCluster.js"(exports, module) {
    init_react();
    var Pool = require_Pool();
    var PoolConfig = require_PoolConfig();
    var PoolNamespace = require_PoolNamespace();
    var PoolSelector = require_PoolSelector();
    var Util = require_util();
    var EventEmitter2 = require_events().EventEmitter;
    module.exports = PoolCluster;
    function PoolCluster(config2) {
      EventEmitter2.call(this);
      config2 = config2 || {};
      this._canRetry = typeof config2.canRetry === "undefined" ? true : config2.canRetry;
      this._defaultSelector = config2.defaultSelector || "RR";
      this._removeNodeErrorCount = config2.removeNodeErrorCount || 5;
      this._restoreNodeTimeout = config2.restoreNodeTimeout || 0;
      this._closed = false;
      this._findCaches = /* @__PURE__ */ Object.create(null);
      this._lastId = 0;
      this._namespaces = /* @__PURE__ */ Object.create(null);
      this._nodes = /* @__PURE__ */ Object.create(null);
    }
    Util.inherits(PoolCluster, EventEmitter2);
    PoolCluster.prototype.add = function add(id, config2) {
      if (this._closed) {
        throw new Error("PoolCluster is closed.");
      }
      var nodeId = typeof id === "object" ? "CLUSTER::" + ++this._lastId : String(id);
      if (this._nodes[nodeId] !== void 0) {
        throw new Error('Node ID "' + nodeId + '" is already defined in PoolCluster.');
      }
      var poolConfig = typeof id !== "object" ? new PoolConfig(config2) : new PoolConfig(id);
      this._nodes[nodeId] = {
        id: nodeId,
        errorCount: 0,
        pool: new Pool({ config: poolConfig }),
        _offlineUntil: 0
      };
      this._clearFindCaches();
    };
    PoolCluster.prototype.end = function end(callback) {
      var cb = callback !== void 0 ? callback : _cb;
      if (typeof cb !== "function") {
        throw TypeError("callback argument must be a function");
      }
      if (this._closed) {
        process.nextTick(cb);
        return;
      }
      this._closed = true;
      var calledBack = false;
      var nodeIds = Object.keys(this._nodes);
      var waitingClose = 0;
      function onEnd(err) {
        if (!calledBack && (err || --waitingClose <= 0)) {
          calledBack = true;
          cb(err);
        }
      }
      for (var i = 0; i < nodeIds.length; i++) {
        var nodeId = nodeIds[i];
        var node = this._nodes[nodeId];
        waitingClose++;
        node.pool.end(onEnd);
      }
      if (waitingClose === 0) {
        process.nextTick(onEnd);
      }
    };
    PoolCluster.prototype.of = function(pattern, selector) {
      pattern = pattern || "*";
      selector = selector || this._defaultSelector;
      selector = selector.toUpperCase();
      if (typeof PoolSelector[selector] === "undefined") {
        selector = this._defaultSelector;
      }
      var key = pattern + selector;
      if (typeof this._namespaces[key] === "undefined") {
        this._namespaces[key] = new PoolNamespace(this, pattern, selector);
      }
      return this._namespaces[key];
    };
    PoolCluster.prototype.remove = function remove(pattern) {
      var foundNodeIds = this._findNodeIds(pattern, true);
      for (var i = 0; i < foundNodeIds.length; i++) {
        var node = this._getNode(foundNodeIds[i]);
        if (node) {
          this._removeNode(node);
        }
      }
    };
    PoolCluster.prototype.getConnection = function(pattern, selector, cb) {
      var namespace;
      if (typeof pattern === "function") {
        cb = pattern;
        namespace = this.of();
      } else {
        if (typeof selector === "function") {
          cb = selector;
          selector = this._defaultSelector;
        }
        namespace = this.of(pattern, selector);
      }
      namespace.getConnection(cb);
    };
    PoolCluster.prototype._clearFindCaches = function _clearFindCaches() {
      this._findCaches = /* @__PURE__ */ Object.create(null);
    };
    PoolCluster.prototype._decreaseErrorCount = function _decreaseErrorCount(node) {
      var errorCount = node.errorCount;
      if (errorCount > this._removeNodeErrorCount) {
        errorCount = this._removeNodeErrorCount;
      }
      if (errorCount < 1) {
        errorCount = 1;
      }
      node.errorCount = errorCount - 1;
      if (node._offlineUntil) {
        node._offlineUntil = 0;
        this.emit("online", node.id);
      }
    };
    PoolCluster.prototype._findNodeIds = function _findNodeIds(pattern, includeOffline) {
      var currentTime = 0;
      var foundNodeIds = this._findCaches[pattern];
      if (foundNodeIds === void 0) {
        var expression = patternRegExp(pattern);
        var nodeIds = Object.keys(this._nodes);
        foundNodeIds = nodeIds.filter(function(id) {
          return id.match(expression);
        });
        this._findCaches[pattern] = foundNodeIds;
      }
      if (includeOffline) {
        return foundNodeIds;
      }
      return foundNodeIds.filter(function(nodeId) {
        var node = this._getNode(nodeId);
        if (!node._offlineUntil) {
          return true;
        }
        if (!currentTime) {
          currentTime = getMonotonicMilliseconds();
        }
        return node._offlineUntil <= currentTime;
      }, this);
    };
    PoolCluster.prototype._getNode = function _getNode(id) {
      return this._nodes[id] || null;
    };
    PoolCluster.prototype._increaseErrorCount = function _increaseErrorCount(node) {
      var errorCount = ++node.errorCount;
      if (this._removeNodeErrorCount > errorCount) {
        return;
      }
      if (this._restoreNodeTimeout > 0) {
        node._offlineUntil = getMonotonicMilliseconds() + this._restoreNodeTimeout;
        this.emit("offline", node.id);
        return;
      }
      this._removeNode(node);
      this.emit("remove", node.id);
    };
    PoolCluster.prototype._getConnection = function(node, cb) {
      var self2 = this;
      node.pool.getConnection(function(err, connection) {
        if (err) {
          self2._increaseErrorCount(node);
          cb(err);
          return;
        } else {
          self2._decreaseErrorCount(node);
        }
        connection._clusterId = node.id;
        cb(null, connection);
      });
    };
    PoolCluster.prototype._removeNode = function _removeNode(node) {
      delete this._nodes[node.id];
      this._clearFindCaches();
      node.pool.end(_noop);
    };
    function getMonotonicMilliseconds() {
      var ms;
      if (typeof process.hrtime === "function") {
        ms = process.hrtime();
        ms = ms[0] * 1e3 + ms[1] * 1e-6;
      } else {
        ms = process.uptime() * 1e3;
      }
      return Math.floor(ms);
    }
    function isRegExp2(val) {
      return typeof val === "object" && Object.prototype.toString.call(val) === "[object RegExp]";
    }
    function patternRegExp(pattern) {
      if (isRegExp2(pattern)) {
        return pattern;
      }
      var source = pattern.replace(/([.+?^=!:${}()|\[\]\/\\])/g, "\\$1").replace(/\*/g, ".*");
      return new RegExp("^" + source + "$");
    }
    function _cb(err) {
      if (err) {
        throw err;
      }
    }
    function _noop() {
    }
  }
});

// node_modules/mysql/index.js
var require_mysql = __commonJS({
  "node_modules/mysql/index.js"(exports) {
    init_react();
    var Classes = /* @__PURE__ */ Object.create(null);
    exports.createConnection = function createConnection(config2) {
      var Connection = loadClass("Connection");
      var ConnectionConfig = loadClass("ConnectionConfig");
      return new Connection({ config: new ConnectionConfig(config2) });
    };
    exports.createPool = function createPool(config2) {
      var Pool = loadClass("Pool");
      var PoolConfig = loadClass("PoolConfig");
      return new Pool({ config: new PoolConfig(config2) });
    };
    exports.createPoolCluster = function createPoolCluster(config2) {
      var PoolCluster = loadClass("PoolCluster");
      return new PoolCluster(config2);
    };
    exports.createQuery = function createQuery(sql, values, callback) {
      var Connection = loadClass("Connection");
      return Connection.createQuery(sql, values, callback);
    };
    exports.escape = function escape2(value, stringifyObjects, timeZone) {
      var SqlString = loadClass("SqlString");
      return SqlString.escape(value, stringifyObjects, timeZone);
    };
    exports.escapeId = function escapeId(value, forbidQualified) {
      var SqlString = loadClass("SqlString");
      return SqlString.escapeId(value, forbidQualified);
    };
    exports.format = function format3(sql, values, stringifyObjects, timeZone) {
      var SqlString = loadClass("SqlString");
      return SqlString.format(sql, values, stringifyObjects, timeZone);
    };
    exports.raw = function raw(sql) {
      var SqlString = loadClass("SqlString");
      return SqlString.raw(sql);
    };
    Object.defineProperty(exports, "Types", {
      get: loadClass.bind(null, "Types")
    });
    function loadClass(className) {
      var Class = Classes[className];
      if (Class !== void 0) {
        return Class;
      }
      switch (className) {
        case "Connection":
          Class = require_Connection();
          break;
        case "ConnectionConfig":
          Class = require_ConnectionConfig();
          break;
        case "Pool":
          Class = require_Pool();
          break;
        case "PoolCluster":
          Class = require_PoolCluster();
          break;
        case "PoolConfig":
          Class = require_PoolConfig();
          break;
        case "SqlString":
          Class = require_SqlString2();
          break;
        case "Types":
          Class = require_types();
          break;
        default:
          throw new Error("Cannot find class '" + className + "'");
      }
      Classes[className] = Class;
      return Class;
    }
  }
});

// browser-route-module:/home/hiniku/ApollosWill/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var dbLoad = gql`
  query anime($id: ID!) {
    findAnimeById(id: $id) {
      id,
      slug,
      description,
      titles{
        localized,
        alternatives
      }
      startDate,
      endDate,
      averageRatingRank,
      subtype,
      status,
  	
      posterImage{
        original{
          url
        }
      }
      bannerImage{
        original{
          url
        }
      }
      
      episodeCount,
    }
  }
`;
function Index() {
  const { loading, error: error2, data } = useQuery(dbLoad, {
    variables: {
      id: 1
    }
  });
  if (loading)
    return "Loading...";
  if (error2)
    return `Error! ${error2.message}`;
  const mysql = require_mysql();
  const connection = mysql.createConnection({
    host: "localhost",
    user: "hiniku",
    password: "obviousthings"
  });
  console.log(data.findAnimeById.titles.localized.join());
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[900px] h-[350px] flex"
  }, /* @__PURE__ */ React.createElement(News, null))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px]"
  }, "Winter 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Spring 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_F, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Summer 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_Su, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Fall 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_F2, null)))), /* @__PURE__ */ React.createElement(Ender, null));
}
export {
  Index as default
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*! https://mths.be/punycode v1.4.1 by @mathias */
//# sourceMappingURL=/build/routes/index-7UNQHBRC.js.map
