function gi3dEvent(n, t) {
  var i = document.createEvent("Event");
  i.initEvent(n, !0, !0);
  i.data = t;
  document.dispatchEvent(i);
}
function gi3dDebug() {
  typeof gi3d_debug_mode != "undefined" &&
    window.gi3d_debug_mode === !0 &&
    console.debug("🐛", [].slice.call(arguments).join(" "));
}
function gi3dInit() {
  "use strict";
  function u() {
    i.one("load", function () {
      f();
    }).each(function () {
      this.complete && $(this).load();
    });
  }
  function f() {
    if (n < r) {
      n++;
      return;
    }
    var i = window.performance.now(),
      u = t > i ? Math.floor(t - i) : 0;
    setTimeout(function () {
      gi3dDebug("openEnvelope()", n, "loadingRemainder (ms)", u);
      $(".layout").addClass("layout--is-ready");
      setTimeout(function () {
        $(".loading").addClass("loading--is-loaded");
        $(".envelope").addClass("envelope--is-shown");
      }, 2e3);
      setTimeout(function () {
        $(".layout").addClass("overflow--visible");
        $(".envelope").removeClass("envelope--is-shown");
        $(".envelope").addClass("envelope--is-opening");
      }, 4e3);
      setTimeout(function () {
        $(".envelope").removeClass("envelope--is-opening");
        $(".envelope").addClass("envelope--is-opened");
      }, 5100);
      setTimeout(function () {
        e();
      }, 7e3);
    }, u);
  }
  function e() {
    gi3dEvent("gi3d-card-ready");
  }
  gi3dDebug("envelope.js was loaded");
  var t = 4e3,
    o = window.performance.now(),
    i = $("img.preload"),
    r = i.length,
    n = 1;
  gi3dDebug(r, "total preloaded images");
  u();
  $("#rerun-toggle").click(function () {
    $(".loading").removeClass("is-loaded");
    $(".layout").removeClass("layout--is-ready overflow--visible");
    $(".envelope").removeClass("envelope--is-shown");
    $(".envelope").removeClass("envelope--is-opening");
    $(".envelope").removeClass("envelope--is-opened");
    $(".card")
      .removeClass("is-gesture-enabled")
      .removeClass(removeAllFrameClasses);
    n = 1;
    u();
  });
}
function removeAllFrameClasses() {
  return this.className
    .split(" ")
    .filter(function (n) {
      return n.match(/frame-\d{1,3}/);
    })
    .join(" ");
}
(function (n, t, i, r) {
  "use strict";
  function ci(n, t, i) {
    return setTimeout(ai(n, i), t);
  }
  function ut(n, t, i) {
    return Array.isArray(n) ? (v(n, i[t], i), !0) : !1;
  }
  function v(n, t, i) {
    var u;
    if (n)
      if (n.forEach) n.forEach(t, i);
      else if (n.length !== r)
        for (u = 0; u < n.length; ) t.call(i, n[u], u, n), u++;
      else for (u in n) n.hasOwnProperty(u) && t.call(i, n[u], u, n);
  }
  function or(t, i, r) {
    var u = "DEPRECATED METHOD: " + i + "\n" + r + " AT \n";
    return function () {
      var i = new Error("get-stack-trace"),
        f =
          i && i.stack
            ? i.stack
                .replace(/^[^\(]+?[\n$]/gm, "")
                .replace(/^\s+at\s+/gm, "")
                .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
            : "Unknown Stack Trace",
        r = n.console && (n.console.warn || n.console.log);
      return r && r.call(n.console, u, f), t.apply(this, arguments);
    };
  }
  function o(n, t, i) {
    var u = t.prototype,
      r;
    r = n.prototype = Object.create(u);
    r.constructor = n;function gi3dEvent(n, t) {
  var i = document.createEvent("Event");
  i.initEvent(n, !0, !0);
  i.data = t;
  document.dispatchEvent(i);
}
function gi3dDebug() {
  typeof gi3d_debug_mode != "undefined" &&
    window.gi3d_debug_mode === !0 &&
    console.debug("🐛", [].slice.call(arguments).join(" "));
}
function gi3dInit() {
  "use strict";
  function u() {
    i.one("load", function () {
      f();
    }).each(function () {
      this.complete && $(this).load();
    });
  }
  function f() {
    if (n < r) {
      n++;
      return;
    }
    var i = window.performance.now(),
      u = t > i ? Math.floor(t - i) : 0;
    setTimeout(function () {
      gi3dDebug("openEnvelope()", n, "loadingRemainder (ms)", u);
      $(".layout").addClass("layout--is-ready");
      setTimeout(function () {
        $(".loading").addClass("loading--is-loaded");
        $(".envelope").addClass("envelope--is-shown");
      }, 2e3);
      setTimeout(function () {
        $(".layout").addClass("overflow--visible");
        $(".envelope").removeClass("envelope--is-shown");
        $(".envelope").addClass("envelope--is-opening");
      }, 4e3);
      setTimeout(function () {
        $(".envelope").removeClass("envelope--is-opening");
        $(".envelope").addClass("envelope--is-opened");
      }, 5100);
      setTimeout(function () {
        e();
      }, 7e3);
    }, u);
  }
  function e() {
    gi3dEvent("gi3d-card-ready");
  }
  gi3dDebug("envelope.js was loaded");
  var t = 4e3,
    o = window.performance.now(),
    i = $("img.preload"),
    r = i.length,
    n = 1;
  gi3dDebug(r, "total preloaded images");
  u();
  $("#rerun-toggle").click(function () {
    $(".loading").removeClass("is-loaded");
    $(".layout").removeClass("layout--is-ready overflow--visible");
    $(".envelope").removeClass("envelope--is-shown");
    $(".envelope").removeClass("envelope--is-opening");
    $(".envelope").removeClass("envelope--is-opened");
    $(".card")
      .removeClass("is-gesture-enabled")
      .removeClass(removeAllFrameClasses);
    n = 1;
    u();
  });
}
function removeAllFrameClasses() {
  return this.className
    .split(" ")
    .filter(function (n) {
      return n.match(/frame-\d{1,3}/);
    })
    .join(" ");
}
(function (n, t, i, r) {
  "use strict";
  function ci(n, t, i) {
    return setTimeout(ai(n, i), t);
  }
  function ut(n, t, i) {
    return Array.isArray(n) ? (v(n, i[t], i), !0) : !1;
  }
  function v(n, t, i) {
    var u;
    if (n)
      if (n.forEach) n.forEach(t, i);
      else if (n.length !== r)
        for (u = 0; u < n.length; ) t.call(i, n[u], u, n), u++;
      else for (u in n) n.hasOwnProperty(u) && t.call(i, n[u], u, n);
  }
  function or(t, i, r) {
    var u = "DEPRECATED METHOD: " + i + "\n" + r + " AT \n";
    return function () {
      var i = new Error("get-stack-trace"),
        f =
          i && i.stack
            ? i.stack
                .replace(/^[^\(]+?[\n$]/gm, "")
                .replace(/^\s+at\s+/gm, "")
                .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
            : "Unknown Stack Trace",
        r = n.console && (n.console.warn || n.console.log);
      return r && r.call(n.console, u, f), t.apply(this, arguments);
    };
  }
  function o(n, t, i) {
    var u = t.prototype,
      r;
    r = n.prototype = Object.create(u);
    r.constructor = n;
    r._super = u;
    i && y(r, i);
  }
  function ai(n, t) {
    return function () {
      return n.apply(t, arguments);
    };
  }
  function vi(n, t) {
    return typeof n == bu ? n.apply(t ? t[0] || r : r, t) : n;
  }
  function hr(n, t) {
    return n === r ? t : n;
  }
  function pt(n, t, i) {
    v(bt(t), function (t) {
      n.addEventListener(t, i, !1);
    });
  }
  function wt(n, t, i) {
    v(bt(t), function (t) {
      n.removeEventListener(t, i, !1);
    });
  }
  function cr(n, t) {
    while (n) {
      if (n == t) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  function g(n, t) {
    return n.indexOf(t) > -1;
  }
  function bt(n) {
    return n.trim().split(/\s+/g);
  }
  function ft(n, t, i) {
    if (n.indexOf && !i) return n.indexOf(t);
    for (var r = 0; r < n.length; ) {
      if ((i && n[r][i] == t) || (!i && n[r] === t)) return r;
      r++;
    }
    return -1;
  }
  function kt(n) {
    return Array.prototype.slice.call(n, 0);
  }
  function lr(n, t, i) {
    for (var u = [], e = [], r = 0, f; r < n.length; )
      (f = t ? n[r][t] : n[r]), ft(e, f) < 0 && u.push(n[r]), (e[r] = f), r++;
    return (
      i &&
        (u = t
          ? u.sort(function (n, i) {
              return n[t] > i[t];
            })
          : u.sort()),
      u
    );
  }
  function dt(n, t) {
    for (
      var i, u, e = t[0].toUpperCase() + t.slice(1), f = 0;
      f < er.length;

    ) {
      if (((i = er[f]), (u = i ? i + e : t), u in n)) return u;
      f++;
    }
    return r;
  }
  function ku() {
    return ar++;
  }
  function vr(t) {
    var i = t.ownerDocument || t;
    return i.defaultView || i.parentWindow || n;
  }
  function s(n, t) {
    var i = this;
    this.manager = n;
    this.callback = t;
    this.element = n.element;
    this.target = n.options.inputTarget;
    this.domHandler = function (t) {
      vi(n.options.enable, [n]) && i.handler(t);
    };
    this.init();
  }
  function tf(n) {
    var t,
      i = n.options.inputClass;
    return (t = i ? i : du ? wi : gu ? ri : yr ? ki : ii), new t(n, rf);
  }
  function rf(n, t, i) {
    var r = i.pointers.length,
      o = i.changedPointers.length,
      s = t & f && r - o == 0,
      h = t & (u | e) && r - o == 0;
    i.isFirst = !!s;
    i.isFinal = !!h;
    s && (n.session = {});
    i.eventType = t;
    uf(n, i);
    n.emit("hammer.input", i);
    n.recognize(i);
    n.session.prevInput = i;
  }
  function uf(n, t) {
    var i = n.session,
      f = t.pointers,
      o = f.length,
      r,
      e;
    i.firstInput || (i.firstInput = br(t));
    o > 1 && !i.firstMultiple
      ? (i.firstMultiple = br(t))
      : o === 1 && (i.firstMultiple = !1);
    var s = i.firstInput,
      u = i.firstMultiple,
      h = u ? u.center : s.center,
      c = (t.center = kr(f));
    t.timeStamp = hi();
    t.deltaTime = t.timeStamp - s.timeStamp;
    t.angle = pi(h, c);
    t.distance = ti(h, c);
    ff(i, t);
    t.offsetDirection = gr(t.deltaX, t.deltaY);
    r = dr(t.deltaTime, t.deltaX, t.deltaY);
    t.overallVelocityX = r.x;
    t.overallVelocityY = r.y;
    t.overallVelocity = d(r.x) > d(r.y) ? r.x : r.y;
    t.scale = u ? hf(u.pointers, f) : 1;
    t.rotation = u ? sf(u.pointers, f) : 0;
    t.maxPointers = i.prevInput
      ? t.pointers.length > i.prevInput.maxPointers
        ? t.pointers.length
        : i.prevInput.maxPointers
      : t.pointers.length;
    ef(i, t);
    e = n.element;
    cr(t.srcEvent.target, e) && (e = t.srcEvent.target);
    t.target = e;
  }
  function ff(n, t) {
    var i = t.center,
      r = n.offsetDelta || {},
      e = n.prevDelta || {},
      o = n.prevInput || {};
    (t.eventType === f || o.eventType === u) &&
      ((e = n.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
      (r = n.offsetDelta = { x: i.x, y: i.y }));
    t.deltaX = e.x + (i.x - r.x);
    t.deltaY = e.y + (i.y - r.y);
  }
  function ef(n, t) {
    var i = n.lastInterval || t,
      c = t.timeStamp - i.timeStamp,
      f,
      o,
      s,
      h;
    if (t.eventType != e && (c > nf || i.velocity === r)) {
      var l = t.deltaX - i.deltaX,
        a = t.deltaY - i.deltaY,
        u = dr(c, l, a);
      o = u.x;
      s = u.y;
      f = d(u.x) > d(u.y) ? u.x : u.y;
      h = gr(l, a);
      n.lastInterval = t;
    } else
      (f = i.velocity), (o = i.velocityX), (s = i.velocityY), (h = i.direction);
    t.velocity = f;
    t.velocityX = o;
    t.velocityY = s;
    t.direction = h;
  }
  function br(n) {
    for (var i = [], t = 0; t < n.pointers.length; )
      (i[t] = {
        clientX: rt(n.pointers[t].clientX),
        clientY: rt(n.pointers[t].clientY),
      }),
        t++;
    return {
      timeStamp: hi(),
      pointers: i,
      center: kr(i),
      deltaX: n.deltaX,
      deltaY: n.deltaY,
    };
  }
  function kr(n) {
    var t = n.length;
    if (t === 1) return { x: rt(n[0].clientX), y: rt(n[0].clientY) };
    for (var r = 0, u = 0, i = 0; i < t; )
      (r += n[i].clientX), (u += n[i].clientY), i++;
    return { x: rt(r / t), y: rt(u / t) };
  }
  function dr(n, t, i) {
    return { x: t / n || 0, y: i / n || 0 };
  }
  function gr(n, t) {
    return n === t ? gt : d(n) >= d(t) ? (n < 0 ? st : ht) : t < 0 ? ct : lt;
  }
  function ti(n, t, i) {
    i || (i = wr);
    var r = t[i[0]] - n[i[0]],
      u = t[i[1]] - n[i[1]];
    return Math.sqrt(r * r + u * u);
  }
  function pi(n, t, i) {
    i || (i = wr);
    var r = t[i[0]] - n[i[0]],
      u = t[i[1]] - n[i[1]];
    return (Math.atan2(u, r) * 180) / Math.PI;
  }
  function sf(n, t) {
    return pi(t[1], t[0], ni) + pi(n[1], n[0], ni);
  }
  function hf(n, t) {
    return ti(t[0], t[1], ni) / ti(n[0], n[1], ni);
  }
  function ii() {
    this.evEl = lf;
    this.evWin = af;
    this.pressed = !1;
    s.apply(this, arguments);
  }
  function wi() {
    this.evEl = nu;
    this.evWin = tu;
    s.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }
  function iu() {
    this.evTarget = wf;
    this.evWin = bf;
    this.started = !1;
    s.apply(this, arguments);
  }
  function kf(n, t) {
    var i = kt(n.touches),
      r = kt(n.changedTouches);
    return t & (u | e) && (i = lr(i.concat(r), "identifier", !0)), [i, r];
  }
  function ri() {
    this.evTarget = uu;
    this.targetIds = {};
    s.apply(this, arguments);
  }
  function df(n, t) {
    var r = kt(n.touches),
      o = this.targetIds;
    if (t & (f | nt) && r.length === 1)
      return (o[r[0].identifier] = !0), [r, r];
    var i,
      s,
      h = kt(n.changedTouches),
      c = [],
      l = this.target;
    if (
      ((s = r.filter(function (n) {
        return cr(n.target, l);
      })),
      t === f)
    )
      for (i = 0; i < s.length; ) (o[s[i].identifier] = !0), i++;
    for (i = 0; i < h.length; )
      o[h[i].identifier] && c.push(h[i]),
        t & (u | e) && delete o[h[i].identifier],
        i++;
    if (c.length) return [lr(s.concat(c), "identifier", !0), c];
  }
  function ki() {
    s.apply(this, arguments);
    var n = ai(this.handler, this);
    this.touch = new ri(this.manager, n);
    this.mouse = new ii(this.manager, n);
    this.primaryTouch = null;
    this.lastTouches = [];
  }
  function gf(n, t) {
    n & f
      ? ((this.primaryTouch = t.changedPointers[0].identifier),
        eu.call(this, t))
      : n & (u | e) && eu.call(this, t);
  }
  function eu(n) {
    var t = n.changedPointers[0],
      i,
      r,
      u;
    t.identifier === this.primaryTouch &&
      ((i = { x: t.clientX, y: t.clientY }),
      this.lastTouches.push(i),
      (r = this.lastTouches),
      (u = function () {
        var n = r.indexOf(i);
        n > -1 && r.splice(n, 1);
      }),
      setTimeout(u, fu));
  }
  function ne(n) {
    for (
      var r = n.srcEvent.clientX, u = n.srcEvent.clientY, t = 0;
      t < this.lastTouches.length;
      t++
    ) {
      var i = this.lastTouches[t],
        f = Math.abs(r - i.x),
        e = Math.abs(u - i.y);
      if (f <= bi && e <= bi) return !0;
    }
    return !1;
  }
  function gi(n, t) {
    this.manager = n;
    this.set(t);
  }
  function te(n) {
    if (g(n, it)) return it;
    var t = g(n, at),
      i = g(n, vt);
    return t && i ? it : t || i ? (t ? at : vt) : g(n, di) ? di : cu;
  }
  function ie() {
    if (!su) return !1;
    var t = {},
      i = n.CSS && n.CSS.supports;
    return (
      ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(
        function (r) {
          t[r] = i ? n.CSS.supports("touch-action", r) : !0;
        }
      ),
      t
    );
  }
  function w(n) {
    this.options = y({}, this.defaults, n || {});
    this.id = ku();
    this.manager = null;
    this.options.enable = hr(this.options.enable, !0);
    this.state = fi;
    this.simultaneous = {};
    this.requireFail = [];
  }
  function lu(n) {
    return n & yt
      ? "cancel"
      : n & k
      ? "end"
      : n & et
      ? "move"
      : n & h
      ? "start"
      : "";
  }
  function au(n) {
    return n == lt
      ? "down"
      : n == ct
      ? "up"
      : n == st
      ? "left"
      : n == ht
      ? "right"
      : "";
  }
  function ei(n, t) {
    var i = t.manager;
    return i ? i.get(n) : n;
  }
  function c() {
    w.apply(this, arguments);
  }
  function oi() {
    c.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  function nr() {
    c.apply(this, arguments);
  }
  function tr() {
    w.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  function ir() {
    c.apply(this, arguments);
  }
  function rr() {
    c.apply(this, arguments);
  }
  function si() {
    w.apply(this, arguments);
    this.pTime = !1;
    this.pCenter = !1;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  function b(n, t) {
    return (
      (t = t || {}),
      (t.recognizers = hr(t.recognizers, b.defaults.preset)),
      new fr(n, t)
    );
  }
  function fr(n, t) {
    this.options = y({}, b.defaults, t || {});
    this.options.inputTarget = this.options.inputTarget || n;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = n;
    this.input = tf(this);
    this.touchAction = new gi(this, this.options.touchAction);
    yu(this, !0);
    v(
      this.options.recognizers,
      function (n) {
        var t = this.add(new n[0](n[1]));
        n[2] && t.recognizeWith(n[2]);
        n[3] && t.requireFailure(n[3]);
      },
      this
    );
  }
  function yu(n, t) {
    var r = n.element,
      i;
    r.style &&
      (v(n.options.cssProps, function (u, f) {
        i = dt(r.style, f);
        t
          ? ((n.oldCssProps[i] = r.style[i]), (r.style[i] = u))
          : (r.style[i] = n.oldCssProps[i] || "");
      }),
      t || (n.oldCssProps = {}));
  }
  function re(n, i) {
    var r = t.createEvent("Event");
    r.initEvent(n, !0, !0);
    r.gesture = i;
    i.target.dispatchEvent(r);
  }
  var er = ["", "webkit", "Moz", "MS", "ms", "o"],
    wu = t.createElement("div"),
    bu = "function",
    rt = Math.round,
    d = Math.abs,
    hi = Date.now,
    y,
    li,
    sr,
    ar,
    ru,
    uu,
    fu,
    bi,
    vu,
    ur,
    pu;
  y =
    typeof Object.assign != "function"
      ? function (n) {
          var f, i, t, u;
          if (n === r || n === null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (f = Object(n), i = 1; i < arguments.length; i++)
            if (((t = arguments[i]), t !== r && t !== null))
              for (u in t) t.hasOwnProperty(u) && (f[u] = t[u]);
          return f;
        }
      : Object.assign;
  li = or(
    function (n, t, i) {
      for (var f = Object.keys(t), u = 0; u < f.length; )
        (!i || (i && n[f[u]] === r)) && (n[f[u]] = t[f[u]]), u++;
      return n;
    },
    "extend",
    "Use `assign`."
  );
  sr = or(
    function (n, t) {
      return li(n, t, !0);
    },
    "merge",
    "Use `assign`."
  );
  ar = 1;
  var yr = "ontouchstart" in n,
    du = dt(n, "PointerEvent") !== r,
    gu =
      yr && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
    ot = "touch",
    yi = "mouse",
    nf = 25,
    f = 1,
    nt = 2,
    u = 4,
    e = 8,
    gt = 1,
    st = 2,
    ht = 4,
    ct = 8,
    lt = 16,
    l = st | ht,
    tt = ct | lt,
    pr = l | tt,
    wr = ["x", "y"],
    ni = ["clientX", "clientY"];
  s.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && pt(this.element, this.evEl, this.domHandler);
      this.evTarget && pt(this.target, this.evTarget, this.domHandler);
      this.evWin && pt(vr(this.element), this.evWin, this.domHandler);
    },
    destroy: function () {
      this.evEl && wt(this.element, this.evEl, this.domHandler);
      this.evTarget && wt(this.target, this.evTarget, this.domHandler);
      this.evWin && wt(vr(this.element), this.evWin, this.domHandler);
    },
  };
  var cf = { mousedown: f, mousemove: nt, mouseup: u },
    lf = "mousedown",
    af = "mousemove mouseup";
  o(ii, s, {
    handler: function (n) {
      var t = cf[n.type];
      (t & f && n.button === 0 && (this.pressed = !0),
      t & nt && n.which !== 1 && (t = u),
      this.pressed) &&
        (t & u && (this.pressed = !1),
        this.callback(this.manager, t, {
          pointers: [n],
          changedPointers: [n],
          pointerType: yi,
          srcEvent: n,
        }));
    },
  });
  var vf = {
      pointerdown: f,
      pointermove: nt,
      pointerup: u,
      pointercancel: e,
      pointerout: e,
    },
    yf = { 2: ot, 3: "pen", 4: yi, 5: "kinect" },
    nu = "pointerdown",
    tu = "pointermove pointerup pointercancel";
  n.MSPointerEvent &&
    !n.PointerEvent &&
    ((nu = "MSPointerDown"),
    (tu = "MSPointerMove MSPointerUp MSPointerCancel"));
  o(wi, s, {
    handler: function (n) {
      var t = this.store,
        o = !1,
        h = n.type.toLowerCase().replace("ms", ""),
        r = vf[h],
        s = yf[n.pointerType] || n.pointerType,
        c = s == ot,
        i = ft(t, n.pointerId, "pointerId");
      (r & f && (n.button === 0 || c)
        ? i < 0 && (t.push(n), (i = t.length - 1))
        : r & (u | e) && (o = !0),
      i < 0) ||
        ((t[i] = n),
        this.callback(this.manager, r, {
          pointers: t,
          changedPointers: [n],
          pointerType: s,
          srcEvent: n,
        }),
        o && t.splice(i, 1));
    },
  });
  var pf = { touchstart: f, touchmove: nt, touchend: u, touchcancel: e },
    wf = "touchstart",
    bf = "touchstart touchmove touchend touchcancel";
  o(iu, s, {
    handler: function (n) {
      var i = pf[n.type],
        t;
      (i === f && (this.started = !0), this.started) &&
        ((t = kf.call(this, n, i)),
        i & (u | e) && t[0].length - t[1].length == 0 && (this.started = !1),
        this.callback(this.manager, i, {
          pointers: t[0],
          changedPointers: t[1],
          pointerType: ot,
          srcEvent: n,
        }));
    },
  });
  ru = { touchstart: f, touchmove: nt, touchend: u, touchcancel: e };
  uu = "touchstart touchmove touchend touchcancel";
  o(ri, s, {
    handler: function (n) {
      var i = ru[n.type],
        t = df.call(this, n, i);
      t &&
        this.callback(this.manager, i, {
          pointers: t[0],
          changedPointers: t[1],
          pointerType: ot,
          srcEvent: n,
        });
    },
  });
  fu = 2500;
  bi = 25;
  o(ki, s, {
    handler: function (n, t, i) {
      var u = i.pointerType == ot,
        r = i.pointerType == yi;
      if (
        !r ||
        !i.sourceCapabilities ||
        !i.sourceCapabilities.firesTouchEvents
      ) {
        if (u) gf.call(this, t, i);
        else if (r && ne.call(this, i)) return;
        this.callback(n, t, i);
      }
    },
    destroy: function () {
      this.touch.destroy();
      this.mouse.destroy();
    },
  });
  var ou = dt(wu.style, "touchAction"),
    su = ou !== r,
    hu = "compute",
    cu = "auto",
    di = "manipulation",
    it = "none",
    at = "pan-x",
    vt = "pan-y",
    ui = ie();
  gi.prototype = {
    set: function (n) {
      n == hu && (n = this.compute());
      su &&
        this.manager.element.style &&
        ui[n] &&
        (this.manager.element.style[ou] = n);
      this.actions = n.toLowerCase().trim();
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var n = [];
      return (
        v(this.manager.recognizers, function (t) {
          vi(t.options.enable, [t]) && (n = n.concat(t.getTouchAction()));
        }),
        te(n.join(" "))
      );
    },
    preventDefaults: function (n) {
      var i = n.srcEvent,
        r = n.offsetDirection;
      if (this.manager.session.prevented) {
        i.preventDefault();
        return;
      }
      var t = this.actions,
        u = g(t, it) && !ui[it],
        f = g(t, vt) && !ui[vt],
        e = g(t, at) && !ui[at];
      if (u) {
        var o = n.pointers.length === 1,
          s = n.distance < 2,
          h = n.deltaTime < 250;
        if (o && s && h) return;
      }
      if (!e || !f)
        return u || (f && r & l) || (e && r & tt) ? this.preventSrc(i) : void 0;
    },
    preventSrc: function (n) {
      this.manager.session.prevented = !0;
      n.preventDefault();
    },
  };
  var fi = 1,
    h = 2,
    et = 4,
    k = 8,
    p = k,
    yt = 16,
    a = 32;
  w.prototype = {
    defaults: {},
    set: function (n) {
      return (
        y(this.options, n),
        this.manager && this.manager.touchAction.update(),
        this
      );
    },
    recognizeWith: function (n) {
      if (ut(n, "recognizeWith", this)) return this;
      var t = this.simultaneous;
      return (
        (n = ei(n, this)),
        t[n.id] || ((t[n.id] = n), n.recognizeWith(this)),
        this
      );
    },
    dropRecognizeWith: function (n) {
      return ut(n, "dropRecognizeWith", this)
        ? this
        : ((n = ei(n, this)), delete this.simultaneous[n.id], this);
    },
    requireFailure: function (n) {
      if (ut(n, "requireFailure", this)) return this;
      var t = this.requireFail;
      return (
        (n = ei(n, this)),
        ft(t, n) === -1 && (t.push(n), n.requireFailure(this)),
        this
      );
    },
    dropRequireFailure: function (n) {
      if (ut(n, "dropRequireFailure", this)) return this;
      n = ei(n, this);
      var t = ft(this.requireFail, n);
      return t > -1 && this.requireFail.splice(t, 1), this;
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function (n) {
      return !!this.simultaneous[n.id];
    },
    emit: function (n) {
      function r(i) {
        t.manager.emit(i, n);
      }
      var t = this,
        i = this.state;
      i < k && r(t.options.event + lu(i));
      r(t.options.event);
      n.additionalEvent && r(n.additionalEvent);
      i >= k && r(t.options.event + lu(i));
    },
    tryEmit: function (n) {
      if (this.canEmit()) return this.emit(n);
      this.state = a;
    },
    canEmit: function () {
      for (var n = 0; n < this.requireFail.length; ) {
        if (!(this.requireFail[n].state & (a | fi))) return !1;
        n++;
      }
      return !0;
    },
    recognize: function (n) {
      var t = y({}, n);
      if (!vi(this.options.enable, [this, t])) {
        this.reset();
        this.state = a;
        return;
      }
      this.state & (p | yt | a) && (this.state = fi);
      this.state = this.process(t);
      this.state & (h | et | k | yt) && this.tryEmit(t);
    },
    process: function () {},
    getTouchAction: function () {},
    reset: function () {},
  };
  o(c, w, {
    defaults: { pointers: 1 },
    attrTest: function (n) {
      var t = this.options.pointers;
      return t === 0 || n.pointers.length === t;
    },
    process: function (n) {
      var t = this.state,
        i = n.eventType,
        r = t & (h | et),
        f = this.attrTest(n);
      return r && (i & e || !f)
        ? t | yt
        : r || f
        ? i & u
          ? t | k
          : t & h
          ? t | et
          : h
        : a;
    },
  });
  o(oi, c, {
    defaults: { event: "pan", threshold: 10, pointers: 1, direction: pr },
    getTouchAction: function () {
      var t = this.options.direction,
        n = [];
      return t & l && n.push(vt), t & tt && n.push(at), n;
    },
    directionTest: function (n) {
      var i = this.options,
        r = !0,
        u = n.distance,
        t = n.direction,
        f = n.deltaX,
        e = n.deltaY;
      return (
        t & i.direction ||
          (i.direction & l
            ? ((t = f === 0 ? gt : f < 0 ? st : ht),
              (r = f != this.pX),
              (u = Math.abs(n.deltaX)))
            : ((t = e === 0 ? gt : e < 0 ? ct : lt),
              (r = e != this.pY),
              (u = Math.abs(n.deltaY)))),
        (n.direction = t),
        r && u > i.threshold && t & i.direction
      );
    },
    attrTest: function (n) {
      return (
        c.prototype.attrTest.call(this, n) &&
        (this.state & h || (!(this.state & h) && this.directionTest(n)))
      );
    },
    emit: function (n) {
      this.pX = n.deltaX;
      this.pY = n.deltaY;
      var t = au(n.direction);
      t && (n.additionalEvent = this.options.event + t);
      this._super.emit.call(this, n);
    },
  });
  o(nr, c, {
    defaults: { event: "pinch", threshold: 0, pointers: 2 },
    getTouchAction: function () {
      return [it];
    },
    attrTest: function (n) {
      return (
        this._super.attrTest.call(this, n) &&
        (Math.abs(n.scale - 1) > this.options.threshold || this.state & h)
      );
    },
    emit: function (n) {
      if (n.scale !== 1) {
        var t = n.scale < 1 ? "in" : "out";
        n.additionalEvent = this.options.event + t;
      }
      this._super.emit.call(this, n);
    },
  });
  o(tr, w, {
    defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
    getTouchAction: function () {
      return [cu];
    },
    process: function (n) {
      var t = this.options,
        i = n.pointers.length === t.pointers,
        r = n.distance < t.threshold,
        o = n.deltaTime > t.time;
      if (((this._input = n), !r || !i || (n.eventType & (u | e) && !o)))
        this.reset();
      else if (n.eventType & f)
        this.reset(),
          (this._timer = ci(
            function () {
              this.state = p;
              this.tryEmit();
            },
            t.time,
            this
          ));
      else if (n.eventType & u) return p;
      return a;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (n) {
      this.state === p &&
        (n && n.eventType & u
          ? this.manager.emit(this.options.event + "up", n)
          : ((this._input.timeStamp = hi()),
            this.manager.emit(this.options.event, this._input)));
    },
  });
  o(ir, c, {
    defaults: { event: "rotate", threshold: 0, pointers: 2 },
    getTouchAction: function () {
      return [it];
    },
    attrTest: function (n) {
      return (
        this._super.attrTest.call(this, n) &&
        (Math.abs(n.rotation) > this.options.threshold || this.state & h)
      );
    },
  });
  o(rr, c, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: 0.3,
      direction: l | tt,
      pointers: 1,
    },
    getTouchAction: function () {
      return oi.prototype.getTouchAction.call(this);
    },
    attrTest: function (n) {
      var t = this.options.direction,
        i;
      return (
        t & (l | tt)
          ? (i = n.overallVelocity)
          : t & l
          ? (i = n.overallVelocityX)
          : t & tt && (i = n.overallVelocityY),
        this._super.attrTest.call(this, n) &&
          t & n.offsetDirection &&
          n.distance > this.options.threshold &&
          n.maxPointers == this.options.pointers &&
          d(i) > this.options.velocity &&
          n.eventType & u
      );
    },
    emit: function (n) {
      var t = au(n.offsetDirection);
      t && this.manager.emit(this.options.event + t, n);
      this.manager.emit(this.options.event, n);
    },
  });
  o(si, w, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10,
    },
    getTouchAction: function () {
      return [di];
    },
    process: function (n) {
      var t = this.options,
        o = n.pointers.length === t.pointers,
        s = n.distance < t.threshold,
        c = n.deltaTime < t.time,
        i,
        r,
        e;
      if ((this.reset(), n.eventType & f && this.count === 0))
        return this.failTimeout();
      if (s && c && o) {
        if (n.eventType != u) return this.failTimeout();
        if (
          ((i = this.pTime ? n.timeStamp - this.pTime < t.interval : !0),
          (r = !this.pCenter || ti(this.pCenter, n.center) < t.posThreshold),
          (this.pTime = n.timeStamp),
          (this.pCenter = n.center),
          r && i ? (this.count += 1) : (this.count = 1),
          (this._input = n),
          (e = this.count % t.taps),
          e === 0)
        )
          return this.hasRequireFailures()
            ? ((this._timer = ci(
                function () {
                  this.state = p;
                  this.tryEmit();
                },
                t.interval,
                this
              )),
              h)
            : p;
      }
      return a;
    },
    failTimeout: function () {
      return (
        (this._timer = ci(
          function () {
            this.state = a;
          },
          this.options.interval,
          this
        )),
        a
      );
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      this.state == p &&
        ((this._input.tapCount = this.count),
        this.manager.emit(this.options.event, this._input));
    },
  });
  b.VERSION = "2.0.7";
  b.defaults = {
    domEvents: !1,
    touchAction: hu,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [
      [ir, { enable: !1 }],
      [nr, { enable: !1 }, ["rotate"]],
      [rr, { direction: l }],
      [oi, { direction: l }, ["swipe"]],
      [si],
      [si, { event: "doubletap", taps: 2 }, ["tap"]],
      [tr],
    ],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)",
    },
  };
  vu = 1;
  ur = 2;
  fr.prototype = {
    set: function (n) {
      return (
        y(this.options, n),
        n.touchAction && this.touchAction.update(),
        n.inputTarget &&
          (this.input.destroy(),
          (this.input.target = n.inputTarget),
          this.input.init()),
        this
      );
    },
    stop: function (n) {
      this.session.stopped = n ? ur : vu;
    },
    recognize: function (n) {
      var r = this.session,
        i,
        f,
        t,
        u;
      if (!r.stopped)
        for (
          this.touchAction.preventDefaults(n),
            f = this.recognizers,
            t = r.curRecognizer,
            (!t || (t && t.state & p)) && (t = r.curRecognizer = null),
            u = 0;
          u < f.length;

        )
          (i = f[u]),
            r.stopped !== ur && (!t || i == t || i.canRecognizeWith(t))
              ? i.recognize(n)
              : i.reset(),
            !t && i.state & (h | et | k) && (t = r.curRecognizer = i),
            u++;
    },
    get: function (n) {
      var i, t;
      if (n instanceof w) return n;
      for (i = this.recognizers, t = 0; t < i.length; t++)
        if (i[t].options.event == n) return i[t];
      return null;
    },
    add: function (n) {
      if (ut(n, "add", this)) return this;
      var t = this.get(n.options.event);
      return (
        t && this.remove(t),
        this.recognizers.push(n),
        (n.manager = this),
        this.touchAction.update(),
        n
      );
    },
    remove: function (n) {
      if (ut(n, "remove", this)) return this;
      if (((n = this.get(n)), n)) {
        var t = this.recognizers,
          i = ft(t, n);
        i !== -1 && (t.splice(i, 1), this.touchAction.update());
      }
      return this;
    },
    on: function (n, t) {
      if (n !== r && t !== r) {
        var i = this.handlers;
        return (
          v(bt(n), function (n) {
            i[n] = i[n] || [];
            i[n].push(t);
          }),
          this
        );
      }
    },
    off: function (n, t) {
      if (n !== r) {
        var i = this.handlers;
        return (
          v(bt(n), function (n) {
            t ? i[n] && i[n].splice(ft(i[n], t), 1) : delete i[n];
          }),
          this
        );
      }
    },
    emit: function (n, t) {
      var i, r;
      if (
        (this.options.domEvents && re(n, t),
        (i = this.handlers[n] && this.handlers[n].slice()),
        i && i.length)
      )
        for (
          t.type = n,
            t.preventDefault = function () {
              t.srcEvent.preventDefault();
            },
            r = 0;
          r < i.length;

        )
          i[r](t), r++;
    },
    destroy: function () {
      this.element && yu(this, !1);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    },
  };
  y(b, {
    INPUT_START: f,
    INPUT_MOVE: nt,
    INPUT_END: u,
    INPUT_CANCEL: e,
    STATE_POSSIBLE: fi,
    STATE_BEGAN: h,
    STATE_CHANGED: et,
    STATE_ENDED: k,
    STATE_RECOGNIZED: p,
    STATE_CANCELLED: yt,
    STATE_FAILED: a,
    DIRECTION_NONE: gt,
    DIRECTION_LEFT: st,
    DIRECTION_RIGHT: ht,
    DIRECTION_UP: ct,
    DIRECTION_DOWN: lt,
    DIRECTION_HORIZONTAL: l,
    DIRECTION_VERTICAL: tt,
    DIRECTION_ALL: pr,
    Manager: fr,
    Input: s,
    TouchAction: gi,
    TouchInput: ri,
    MouseInput: ii,
    PointerEventInput: wi,
    TouchMouseInput: ki,
    SingleTouchInput: iu,
    Recognizer: w,
    AttrRecognizer: c,
    Tap: si,
    Pan: oi,
    Swipe: rr,
    Pinch: nr,
    Rotate: ir,
    Press: tr,
    on: pt,
    off: wt,
    each: v,
    merge: sr,
    extend: li,
    assign: y,
    inherit: o,
    bindFn: ai,
    prefixed: dt,
  });
  pu = typeof n != "undefined" ? n : typeof self != "undefined" ? self : {};
  pu.Hammer = b;
  typeof define == "function" && define.amd
    ? define(function () {
        return b;
      })
    : typeof module != "undefined" && module.exports
    ? (module.exports = b)
    : (n[i] = b);
})(window, document, "Hammer"),
  (function (n) {
    "use strict";
    gi3dDebug("_global.js was loaded");
    n("html").removeClass("no-js").addClass("js");
    typeof gi3d_debug_mode != "undefined" &&
      window.gi3d_debug_mode === !0 &&
      n("html").addClass("debug");
    n("#debug-toggle").click(function () {
      window.gi3d_debug_mode = !window.gi3d_debug_mode;
      window.gi3d_debug_mode === !0
        ? n("html").addClass("debug")
        : n("html").removeClass("debug");
    });
  })(jQuery),
  (function (n, t) {
    "use strict";
    gi3dDebug("gesture.js was loaded");
    n(document).on("gi3d-card-ready", function (i) {
      function w(t) {
        var u, l, f, i;
        if (
          (d(),
          t.type === "panstart" ? ((c = e), (e = 0), (h = 0)) : (c = 0),
          o.hasClass("layout--portrait") || o.hasClass("layout--square"))
        )
          (u = o[0].clientWidth - 50),
            (l = Math.max(Math.floor(u / s), 1)),
            (f = t.deltaX);
        else if (o.hasClass("layout--landscape"))
          (u = o[0].clientHeight - 50),
            (l = Math.max(Math.floor(u / s), 1)),
            (f = t.deltaY);
        else {
          gi3dDebug("😢 could not determine card type.");
          return;
        }
        if (((i = Math.floor((f / -l) * nt)), h !== i)) {
          if (
            ((r = c + e + i - h),
            (r = r < 1 ? 1 : r),
            (r = r > s ? s : r),
            e !== r)
          )
            (e = r), (h = i);
          else return;
          gi3dDebug(
            t.type,
            "deltaSize",
            f,
            "deltaStep",
            i,
            "oldDeltaStep",
            h,
            "initFrame",
            c,
            "oldFrame",
            e,
            "currentFrame",
            r
          );
          window.requestAnimationFrame(function () {
            n(".card")
              .removeClass(removeAllFrameClasses)
              .addClass("frame-" + r);
          });
        }
      }
      function b() {
        var n = 5;
        if (p) {
          gi3dDebug(
            "Hammer.Tap callback ignored because we are currently tweening"
          );
          return;
        }
        if (r >= u[2] - n) {
          gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", 0);
          y(0);
          return;
        }
        if (r >= u[1] - n && r < u[2] - n) {
          gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", u[2]);
          y(u[2] - 1);
          return;
        }
        if (r >= u[0] - n && r < u[1] - n) {
          gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", u[1]);
          y(u[1]);
          return;
        }
        gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", u[0]);
        y(u[0]);
        return;
      }
      function y(t, i) {
        if (typeof t == "undefined") {
          console.error("tweenTo() requires an endFrame argument");
          return;
        }
        typeof i == "undefined" && (i = 60);
        var u = Math.max(Math.floor(Math.abs(r - t) / i), 1),
          f = t > r ? "increasing" : "decreasing";
        gi3dDebug("framesPerStep", u, "tweenDirection", f);
        k = setInterval(function () {
          p = !0;
          (f === "increasing" && r >= t) || (f === "decreasing" && r <= t)
            ? d()
            : ((f === "increasing" && r >= t - u) ||
                (f === "decreasing" && r <= t + u)) &&
              (u = 1);
          window.requestAnimationFrame(function () {
            n(".card")
              .removeClass(removeAllFrameClasses)
              .addClass("frame-" + r);
            e = r;
            f === "increasing" ? (r += u) : (r -= u);
          });
        }, 17);
      }
      function d() {
        clearInterval(k);
        p = !1;
      }
      var g = i.originalEvent.data;
      gi3dDebug("gi3d-card-ready — gestureData:", g || "none");
      n(".card").addClass("is-gesture-enabled");
      var s = Number(
          window
            .getComputedStyle(document.querySelector(".layout"), "::after")
            .getPropertyValue("content")
            .replace(/"/g, "")
            .replace(/'/g, "")
            .split("||")[0]
        ),
        f = window
          .getComputedStyle(document.querySelector(".layout"), "::after")
          .getPropertyValue("content")
          .replace(/"/g, "")
          .replace(/'/g, "")
          .split("||")[1]
          .split("|"),
        u = [
          Number(f[0]),
          Number(f[0]) + Number(f[1]),
          Number(f[0]) + Number(f[1]) + Number(f[2]),
        ];
      gi3dDebug("🎥 NUM_FRAMES:", s, "FRAME_COUNTS:", f, "keyframes:", u);
      var c = 1,
        r = 1,
        e = 0,
        h = 0,
        nt = 5 / 3,
        k,
        p = !1,
        o = n(".layout"),
        l = new t(o[0]),
        tt = n(".drag"),
        a = new t(tt[0]),
        it = n(".dragMob"),
        v = new t(it[0]);
      l.add(new t.Pan({ direction: t.DIRECTION_ALL, threshold: 0 }));
      a.add(new t.Pan({ direction: t.DIRECTION_ALL, threshold: 0 }));
      v.add(new t.Pan({ direction: t.DIRECTION_ALL, threshold: 0 }));
      l.on("panstart panmove", w);
      a.on("panstart panmove", w);
      v.on("panstart panmove", w);
      l.add(new t.Tap({}));
      a.add(new t.Tap({}));
      v.add(new t.Tap({}));
      l.on("tap", b);
      a.on("tap", b);
      v.on("tap", b);
    });
  })(jQuery, Hammer);

    r._super = u;
    i && y(r, i);
  }
  function ai(n, t) {
    return function () {
      return n.apply(t, arguments);
    };
  }
  function vi(n, t) {
    return typeof n == bu ? n.apply(t ? t[0] || r : r, t) : n;
  }
  function hr(n, t) {
    return n === r ? t : n;
  }
  function pt(n, t, i) {
    v(bt(t), function (t) {
      n.addEventListener(t, i, !1);
    });
  }
  function wt(n, t, i) {
    v(bt(t), function (t) {
      n.removeEventListener(t, i, !1);
    });
  }
  function cr(n, t) {
    while (n) {
      if (n == t) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  function g(n, t) {
    return n.indexOf(t) > -1;
  }
  function bt(n) {
    return n.trim().split(/\s+/g);
  }
  function ft(n, t, i) {
    if (n.indexOf && !i) return n.indexOf(t);
    for (var r = 0; r < n.length; ) {
      if ((i && n[r][i] == t) || (!i && n[r] === t)) return r;
      r++;
    }
    return -1;
  }
  function kt(n) {
    return Array.prototype.slice.call(n, 0);
  }
  function lr(n, t, i) {
    for (var u = [], e = [], r = 0, f; r < n.length; )
      (f = t ? n[r][t] : n[r]), ft(e, f) < 0 && u.push(n[r]), (e[r] = f), r++;
    return (
      i &&
        (u = t
          ? u.sort(function (n, i) {
              return n[t] > i[t];
            })
          : u.sort()),
      u
    );
  }
  function dt(n, t) {
    for (
      var i, u, e = t[0].toUpperCase() + t.slice(1), f = 0;
      f < er.length;

    ) {
      if (((i = er[f]), (u = i ? i + e : t), u in n)) return u;
      f++;
    }
    return r;
  }
  function ku() {
    return ar++;
  }
  function vr(t) {
    var i = t.ownerDocument || t;
    return i.defaultView || i.parentWindow || n;
  }
  function s(n, t) {
    var i = this;
    this.manager = n;
    this.callback = t;
    this.element = n.element;
    this.target = n.options.inputTarget;
    this.domHandler = function (t) {
      vi(n.options.enable, [n]) && i.handler(t);
    };
    this.init();
  }
  function tf(n) {
    var t,
      i = n.options.inputClass;
    return (t = i ? i : du ? wi : gu ? ri : yr ? ki : ii), new t(n, rf);
  }
  function rf(n, t, i) {
    var r = i.pointers.length,
      o = i.changedPointers.length,
      s = t & f && r - o == 0,
      h = t & (u | e) && r - o == 0;
    i.isFirst = !!s;
    i.isFinal = !!h;
    s && (n.session = {});
    i.eventType = t;
    uf(n, i);
    n.emit("hammer.input", i);
    n.recognize(i);
    n.session.prevInput = i;
  }
  function uf(n, t) {
    var i = n.session,
      f = t.pointers,
      o = f.length,
      r,
      e;
    i.firstInput || (i.firstInput = br(t));
    o > 1 && !i.firstMultiple
      ? (i.firstMultiple = br(t))
      : o === 1 && (i.firstMultiple = !1);
    var s = i.firstInput,
      u = i.firstMultiple,
      h = u ? u.center : s.center,
      c = (t.center = kr(f));
    t.timeStamp = hi();
    t.deltaTime = t.timeStamp - s.timeStamp;
    t.angle = pi(h, c);
    t.distance = ti(h, c);
    ff(i, t);
    t.offsetDirection = gr(t.deltaX, t.deltaY);
    r = dr(t.deltaTime, t.deltaX, t.deltaY);
    t.overallVelocityX = r.x;
    t.overallVelocityY = r.y;
    t.overallVelocity = d(r.x) > d(r.y) ? r.x : r.y;
    t.scale = u ? hf(u.pointers, f) : 1;
    t.rotation = u ? sf(u.pointers, f) : 0;
    t.maxPointers = i.prevInput
      ? t.pointers.length > i.prevInput.maxPointers
        ? t.pointers.length
        : i.prevInput.maxPointers
      : t.pointers.length;
    ef(i, t);
    e = n.element;
    cr(t.srcEvent.target, e) && (e = t.srcEvent.target);
    t.target = e;
  }
  function ff(n, t) {
    var i = t.center,
      r = n.offsetDelta || {},
      e = n.prevDelta || {},
      o = n.prevInput || {};
    (t.eventType === f || o.eventType === u) &&
      ((e = n.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
      (r = n.offsetDelta = { x: i.x, y: i.y }));
    t.deltaX = e.x + (i.x - r.x);
    t.deltaY = e.y + (i.y - r.y);
  }
  function ef(n, t) {
    var i = n.lastInterval || t,
      c = t.timeStamp - i.timeStamp,
      f,
      o,
      s,
      h;
    if (t.eventType != e && (c > nf || i.velocity === r)) {
      var l = t.deltaX - i.deltaX,
        a = t.deltaY - i.deltaY,
        u = dr(c, l, a);
      o = u.x;
      s = u.y;
      f = d(u.x) > d(u.y) ? u.x : u.y;
      h = gr(l, a);
      n.lastInterval = t;
    } else
      (f = i.velocity), (o = i.velocityX), (s = i.velocityY), (h = i.direction);
    t.velocity = f;
    t.velocityX = o;
    t.velocityY = s;
    t.direction = h;
  }
  function br(n) {
    for (var i = [], t = 0; t < n.pointers.length; )
      (i[t] = {
        clientX: rt(n.pointers[t].clientX),
        clientY: rt(n.pointers[t].clientY),
      }),
        t++;
    return {
      timeStamp: hi(),
      pointers: i,
      center: kr(i),
      deltaX: n.deltaX,
      deltaY: n.deltaY,
    };
  }
  function kr(n) {
    var t = n.length;
    if (t === 1) return { x: rt(n[0].clientX), y: rt(n[0].clientY) };
    for (var r = 0, u = 0, i = 0; i < t; )
      (r += n[i].clientX), (u += n[i].clientY), i++;
    return { x: rt(r / t), y: rt(u / t) };
  }
  function dr(n, t, i) {
    return { x: t / n || 0, y: i / n || 0 };
  }
  function gr(n, t) {
    return n === t ? gt : d(n) >= d(t) ? (n < 0 ? st : ht) : t < 0 ? ct : lt;
  }
  function ti(n, t, i) {
    i || (i = wr);
    var r = t[i[0]] - n[i[0]],
      u = t[i[1]] - n[i[1]];
    return Math.sqrt(r * r + u * u);
  }
  function pi(n, t, i) {
    i || (i = wr);
    var r = t[i[0]] - n[i[0]],
      u = t[i[1]] - n[i[1]];
    return (Math.atan2(u, r) * 180) / Math.PI;
  }
  function sf(n, t) {
    return pi(t[1], t[0], ni) + pi(n[1], n[0], ni);
  }
  function hf(n, t) {
    return ti(t[0], t[1], ni) / ti(n[0], n[1], ni);
  }
  function ii() {
    this.evEl = lf;
    this.evWin = af;
    this.pressed = !1;
    s.apply(this, arguments);
  }
  function wi() {
    this.evEl = nu;
    this.evWin = tu;
    s.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }
  function iu() {
    this.evTarget = wf;
    this.evWin = bf;
    this.started = !1;
    s.apply(this, arguments);
  }
  function kf(n, t) {
    var i = kt(n.touches),
      r = kt(n.changedTouches);
    return t & (u | e) && (i = lr(i.concat(r), "identifier", !0)), [i, r];
  }
  function ri() {
    this.evTarget = uu;
    this.targetIds = {};
    s.apply(this, arguments);
  }
  function df(n, t) {
    var r = kt(n.touches),
      o = this.targetIds;
    if (t & (f | nt) && r.length === 1)
      return (o[r[0].identifier] = !0), [r, r];
    var i,
      s,
      h = kt(n.changedTouches),
      c = [],
      l = this.target;
    if (
      ((s = r.filter(function (n) {
        return cr(n.target, l);
      })),
      t === f)
    )
      for (i = 0; i < s.length; ) (o[s[i].identifier] = !0), i++;
    for (i = 0; i < h.length; )
      o[h[i].identifier] && c.push(h[i]),
        t & (u | e) && delete o[h[i].identifier],
        i++;
    if (c.length) return [lr(s.concat(c), "identifier", !0), c];
  }
  function ki() {
    s.apply(this, arguments);
    var n = ai(this.handler, this);
    this.touch = new ri(this.manager, n);
    this.mouse = new ii(this.manager, n);
    this.primaryTouch = null;
    this.lastTouches = [];
  }
  function gf(n, t) {
    n & f
      ? ((this.primaryTouch = t.changedPointers[0].identifier),
        eu.call(this, t))
      : n & (u | e) && eu.call(this, t);
  }
  function eu(n) {
    var t = n.changedPointers[0],
      i,
      r,
      u;
    t.identifier === this.primaryTouch &&
      ((i = { x: t.clientX, y: t.clientY }),
      this.lastTouches.push(i),
      (r = this.lastTouches),
      (u = function () {
        var n = r.indexOf(i);
        n > -1 && r.splice(n, 1);
      }),
      setTimeout(u, fu));
  }
  function ne(n) {
    for (
      var r = n.srcEvent.clientX, u = n.srcEvent.clientY, t = 0;
      t < this.lastTouches.length;
      t++
    ) {
      var i = this.lastTouches[t],
        f = Math.abs(r - i.x),
        e = Math.abs(u - i.y);
      if (f <= bi && e <= bi) return !0;
    }
    return !1;
  }
  function gi(n, t) {
    this.manager = n;
    this.set(t);
  }
  function te(n) {
    if (g(n, it)) return it;
    var t = g(n, at),
      i = g(n, vt);
    return t && i ? it : t || i ? (t ? at : vt) : g(n, di) ? di : cu;
  }
  function ie() {
    if (!su) return !1;
    var t = {},
      i = n.CSS && n.CSS.supports;
    return (
      ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(
        function (r) {
          t[r] = i ? n.CSS.supports("touch-action", r) : !0;
        }
      ),
      t
    );
  }
  function w(n) {
    this.options = y({}, this.defaults, n || {});
    this.id = ku();
    this.manager = null;
    this.options.enable = hr(this.options.enable, !0);
    this.state = fi;
    this.simultaneous = {};
    this.requireFail = [];
  }
  function lu(n) {
    return n & yt
      ? "cancel"
      : n & k
      ? "end"
      : n & et
      ? "move"
      : n & h
      ? "start"
      : "";
  }
  function au(n) {
    return n == lt
      ? "down"
      : n == ct
      ? "up"
      : n == st
      ? "left"
      : n == ht
      ? "right"
      : "";
  }
  function ei(n, t) {
    var i = t.manager;
    return i ? i.get(n) : n;
  }
  function c() {
    w.apply(this, arguments);
  }
  function oi() {
    c.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  function nr() {
    c.apply(this, arguments);
  }
  function tr() {
    w.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  function ir() {
    c.apply(this, arguments);
  }
  function rr() {
    c.apply(this, arguments);
  }
  function si() {
    w.apply(this, arguments);
    this.pTime = !1;
    this.pCenter = !1;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  function b(n, t) {
    return (
      (t = t || {}),
      (t.recognizers = hr(t.recognizers, b.defaults.preset)),
      new fr(n, t)
    );
  }
  function fr(n, t) {
    this.options = y({}, b.defaults, t || {});
    this.options.inputTarget = this.options.inputTarget || n;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = n;
    this.input = tf(this);
    this.touchAction = new gi(this, this.options.touchAction);
    yu(this, !0);
    v(
      this.options.recognizers,
      function (n) {
        var t = this.add(new n[0](n[1]));
        n[2] && t.recognizeWith(n[2]);
        n[3] && t.requireFailure(n[3]);
      },
      this
    );
  }
  function yu(n, t) {
    var r = n.element,
      i;
    r.style &&
      (v(n.options.cssProps, function (u, f) {
        i = dt(r.style, f);
        t
          ? ((n.oldCssProps[i] = r.style[i]), (r.style[i] = u))
          : (r.style[i] = n.oldCssProps[i] || "");
      }),
      t || (n.oldCssProps = {}));
  }
  function re(n, i) {
    var r = t.createEvent("Event");
    r.initEvent(n, !0, !0);
    r.gesture = i;
    i.target.dispatchEvent(r);
  }
  var er = ["", "webkit", "Moz", "MS", "ms", "o"],
    wu = t.createElement("div"),
    bu = "function",
    rt = Math.round,
    d = Math.abs,
    hi = Date.now,
    y,
    li,
    sr,
    ar,
    ru,
    uu,
    fu,
    bi,
    vu,
    ur,
    pu;
  y =
    typeof Object.assign != "function"
      ? function (n) {
          var f, i, t, u;
          if (n === r || n === null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (f = Object(n), i = 1; i < arguments.length; i++)
            if (((t = arguments[i]), t !== r && t !== null))
              for (u in t) t.hasOwnProperty(u) && (f[u] = t[u]);
          return f;
        }
      : Object.assign;
  li = or(
    function (n, t, i) {
      for (var f = Object.keys(t), u = 0; u < f.length; )
        (!i || (i && n[f[u]] === r)) && (n[f[u]] = t[f[u]]), u++;
      return n;
    },
    "extend",
    "Use `assign`."
  );
  sr = or(
    function (n, t) {
      return li(n, t, !0);
    },
    "merge",
    "Use `assign`."
  );
  ar = 1;
  var yr = "ontouchstart" in n,
    du = dt(n, "PointerEvent") !== r,
    gu =
      yr && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
    ot = "touch",
    yi = "mouse",
    nf = 25,
    f = 1,
    nt = 2,
    u = 4,
    e = 8,
    gt = 1,
    st = 2,
    ht = 4,
    ct = 8,
    lt = 16,
    l = st | ht,
    tt = ct | lt,
    pr = l | tt,
    wr = ["x", "y"],
    ni = ["clientX", "clientY"];
  s.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && pt(this.element, this.evEl, this.domHandler);
      this.evTarget && pt(this.target, this.evTarget, this.domHandler);
      this.evWin && pt(vr(this.element), this.evWin, this.domHandler);
    },
    destroy: function () {
      this.evEl && wt(this.element, this.evEl, this.domHandler);
      this.evTarget && wt(this.target, this.evTarget, this.domHandler);
      this.evWin && wt(vr(this.element), this.evWin, this.domHandler);
    },
  };
  var cf = { mousedown: f, mousemove: nt, mouseup: u },
    lf = "mousedown",
    af = "mousemove mouseup";
  o(ii, s, {
    handler: function (n) {
      var t = cf[n.type];
      (t & f && n.button === 0 && (this.pressed = !0),
      t & nt && n.which !== 1 && (t = u),
      this.pressed) &&
        (t & u && (this.pressed = !1),
        this.callback(this.manager, t, {
          pointers: [n],
          changedPointers: [n],
          pointerType: yi,
          srcEvent: n,
        }));
    },
  });
  var vf = {
      pointerdown: f,
      pointermove: nt,
      pointerup: u,
      pointercancel: e,
      pointerout: e,
    },
    yf = { 2: ot, 3: "pen", 4: yi, 5: "kinect" },
    nu = "pointerdown",
    tu = "pointermove pointerup pointercancel";
  n.MSPointerEvent &&
    !n.PointerEvent &&
    ((nu = "MSPointerDown"),
    (tu = "MSPointerMove MSPointerUp MSPointerCancel"));
  o(wi, s, {
    handler: function (n) {
      var t = this.store,
        o = !1,
        h = n.type.toLowerCase().replace("ms", ""),
        r = vf[h],
        s = yf[n.pointerType] || n.pointerType,
        c = s == ot,
        i = ft(t, n.pointerId, "pointerId");
      (r & f && (n.button === 0 || c)
        ? i < 0 && (t.push(n), (i = t.length - 1))
        : r & (u | e) && (o = !0),
      i < 0) ||
        ((t[i] = n),
        this.callback(this.manager, r, {
          pointers: t,
          changedPointers: [n],
          pointerType: s,
          srcEvent: n,
        }),
        o && t.splice(i, 1));
    },
  });
  var pf = { touchstart: f, touchmove: nt, touchend: u, touchcancel: e },
    wf = "touchstart",
    bf = "touchstart touchmove touchend touchcancel";
  o(iu, s, {
    handler: function (n) {
      var i = pf[n.type],
        t;
      (i === f && (this.started = !0), this.started) &&
        ((t = kf.call(this, n, i)),
        i & (u | e) && t[0].length - t[1].length == 0 && (this.started = !1),
        this.callback(this.manager, i, {
          pointers: t[0],
          changedPointers: t[1],
          pointerType: ot,
          srcEvent: n,
        }));
    },
  });
  ru = { touchstart: f, touchmove: nt, touchend: u, touchcancel: e };
  uu = "touchstart touchmove touchend touchcancel";
  o(ri, s, {
    handler: function (n) {
      var i = ru[n.type],
        t = df.call(this, n, i);
      t &&
        this.callback(this.manager, i, {
          pointers: t[0],
          changedPointers: t[1],
          pointerType: ot,
          srcEvent: n,
        });
    },
  });
  fu = 2500;
  bi = 25;
  o(ki, s, {
    handler: function (n, t, i) {
      var u = i.pointerType == ot,
        r = i.pointerType == yi;
      if (
        !r ||
        !i.sourceCapabilities ||
        !i.sourceCapabilities.firesTouchEvents
      ) {
        if (u) gf.call(this, t, i);
        else if (r && ne.call(this, i)) return;
        this.callback(n, t, i);
      }
    },
    destroy: function () {
      this.touch.destroy();
      this.mouse.destroy();
    },
  });
  var ou = dt(wu.style, "touchAction"),
    su = ou !== r,
    hu = "compute",
    cu = "auto",
    di = "manipulation",
    it = "none",
    at = "pan-x",
    vt = "pan-y",
    ui = ie();
  gi.prototype = {
    set: function (n) {
      n == hu && (n = this.compute());
      su &&
        this.manager.element.style &&
        ui[n] &&
        (this.manager.element.style[ou] = n);
      this.actions = n.toLowerCase().trim();
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var n = [];
      return (
        v(this.manager.recognizers, function (t) {
          vi(t.options.enable, [t]) && (n = n.concat(t.getTouchAction()));
        }),
        te(n.join(" "))
      );
    },
    preventDefaults: function (n) {
      var i = n.srcEvent,
        r = n.offsetDirection;
      if (this.manager.session.prevented) {
        i.preventDefault();
        return;
      }
      var t = this.actions,
        u = g(t, it) && !ui[it],
        f = g(t, vt) && !ui[vt],
        e = g(t, at) && !ui[at];
      if (u) {
        var o = n.pointers.length === 1,
          s = n.distance < 2,
          h = n.deltaTime < 250;
        if (o && s && h) return;
      }
      if (!e || !f)
        return u || (f && r & l) || (e && r & tt) ? this.preventSrc(i) : void 0;
    },
    preventSrc: function (n) {
      this.manager.session.prevented = !0;
      n.preventDefault();
    },
  };
  var fi = 1,
    h = 2,
    et = 4,
    k = 8,
    p = k,
    yt = 16,
    a = 32;
  w.prototype = {
    defaults: {},
    set: function (n) {
      return (
        y(this.options, n),
        this.manager && this.manager.touchAction.update(),
        this
      );
    },
    recognizeWith: function (n) {
      if (ut(n, "recognizeWith", this)) return this;
      var t = this.simultaneous;
      return (
        (n = ei(n, this)),
        t[n.id] || ((t[n.id] = n), n.recognizeWith(this)),
        this
      );
    },
    dropRecognizeWith: function (n) {
      return ut(n, "dropRecognizeWith", this)
        ? this
        : ((n = ei(n, this)), delete this.simultaneous[n.id], this);
    },
    requireFailure: function (n) {
      if (ut(n, "requireFailure", this)) return this;
      var t = this.requireFail;
      return (
        (n = ei(n, this)),
        ft(t, n) === -1 && (t.push(n), n.requireFailure(this)),
        this
      );
    },
    dropRequireFailure: function (n) {
      if (ut(n, "dropRequireFailure", this)) return this;
      n = ei(n, this);
      var t = ft(this.requireFail, n);
      return t > -1 && this.requireFail.splice(t, 1), this;
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function (n) {
      return !!this.simultaneous[n.id];
    },
    emit: function (n) {
      function r(i) {
        t.manager.emit(i, n);
      }
      var t = this,
        i = this.state;
      i < k && r(t.options.event + lu(i));
      r(t.options.event);
      n.additionalEvent && r(n.additionalEvent);
      i >= k && r(t.options.event + lu(i));
    },
    tryEmit: function (n) {
      if (this.canEmit()) return this.emit(n);
      this.state = a;
    },
    canEmit: function () {
      for (var n = 0; n < this.requireFail.length; ) {
        if (!(this.requireFail[n].state & (a | fi))) return !1;
        n++;
      }
      return !0;
    },
    recognize: function (n) {
      var t = y({}, n);
      if (!vi(this.options.enable, [this, t])) {
        this.reset();
        this.state = a;
        return;
      }
      this.state & (p | yt | a) && (this.state = fi);
      this.state = this.process(t);
      this.state & (h | et | k | yt) && this.tryEmit(t);
    },
    process: function () {},
    getTouchAction: function () {},
    reset: function () {},
  };
  o(c, w, {
    defaults: { pointers: 1 },
    attrTest: function (n) {
      var t = this.options.pointers;
      return t === 0 || n.pointers.length === t;
    },
    process: function (n) {
      var t = this.state,
        i = n.eventType,
        r = t & (h | et),
        f = this.attrTest(n);
      return r && (i & e || !f)
        ? t | yt
        : r || f
        ? i & u
          ? t | k
          : t & h
          ? t | et
          : h
        : a;
    },
  });
  o(oi, c, {
    defaults: { event: "pan", threshold: 10, pointers: 1, direction: pr },
    getTouchAction: function () {
      var t = this.options.direction,
        n = [];
      return t & l && n.push(vt), t & tt && n.push(at), n;
    },
    directionTest: function (n) {
      var i = this.options,
        r = !0,
        u = n.distance,
        t = n.direction,
        f = n.deltaX,
        e = n.deltaY;
      return (
        t & i.direction ||
          (i.direction & l
            ? ((t = f === 0 ? gt : f < 0 ? st : ht),
              (r = f != this.pX),
              (u = Math.abs(n.deltaX)))
            : ((t = e === 0 ? gt : e < 0 ? ct : lt),
              (r = e != this.pY),
              (u = Math.abs(n.deltaY)))),
        (n.direction = t),
        r && u > i.threshold && t & i.direction
      );
    },
    attrTest: function (n) {
      return (
        c.prototype.attrTest.call(this, n) &&
        (this.state & h || (!(this.state & h) && this.directionTest(n)))
      );
    },
    emit: function (n) {
      this.pX = n.deltaX;
      this.pY = n.deltaY;
      var t = au(n.direction);
      t && (n.additionalEvent = this.options.event + t);
      this._super.emit.call(this, n);
    },
  });
  o(nr, c, {
    defaults: { event: "pinch", threshold: 0, pointers: 2 },
    getTouchAction: function () {
      return [it];
    },
    attrTest: function (n) {
      return (
        this._super.attrTest.call(this, n) &&
        (Math.abs(n.scale - 1) > this.options.threshold || this.state & h)
      );
    },
    emit: function (n) {
      if (n.scale !== 1) {
        var t = n.scale < 1 ? "in" : "out";
        n.additionalEvent = this.options.event + t;
      }
      this._super.emit.call(this, n);
    },
  });
  o(tr, w, {
    defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
    getTouchAction: function () {
      return [cu];
    },
    process: function (n) {
      var t = this.options,
        i = n.pointers.length === t.pointers,
        r = n.distance < t.threshold,
        o = n.deltaTime > t.time;
      if (((this._input = n), !r || !i || (n.eventType & (u | e) && !o)))
        this.reset();
      else if (n.eventType & f)
        this.reset(),
          (this._timer = ci(
            function () {
              this.state = p;
              this.tryEmit();
            },
            t.time,
            this
          ));
      else if (n.eventType & u) return p;
      return a;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (n) {
      this.state === p &&
        (n && n.eventType & u
          ? this.manager.emit(this.options.event + "up", n)
          : ((this._input.timeStamp = hi()),
            this.manager.emit(this.options.event, this._input)));
    },
  });
  o(ir, c, {
    defaults: { event: "rotate", threshold: 0, pointers: 2 },
    getTouchAction: function () {
      return [it];
    },
    attrTest: function (n) {
      return (
        this._super.attrTest.call(this, n) &&
        (Math.abs(n.rotation) > this.options.threshold || this.state & h)
      );
    },
  });
  o(rr, c, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: 0.3,
      direction: l | tt,
      pointers: 1,
    },
    getTouchAction: function () {
      return oi.prototype.getTouchAction.call(this);
    },
    attrTest: function (n) {
      var t = this.options.direction,
        i;
      return (
        t & (l | tt)
          ? (i = n.overallVelocity)
          : t & l
          ? (i = n.overallVelocityX)
          : t & tt && (i = n.overallVelocityY),
        this._super.attrTest.call(this, n) &&
          t & n.offsetDirection &&
          n.distance > this.options.threshold &&
          n.maxPointers == this.options.pointers &&
          d(i) > this.options.velocity &&
          n.eventType & u
      );
    },
    emit: function (n) {
      var t = au(n.offsetDirection);
      t && this.manager.emit(this.options.event + t, n);
      this.manager.emit(this.options.event, n);
    },
  });
  o(si, w, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10,
    },
    getTouchAction: function () {
      return [di];
    },
    process: function (n) {
      var t = this.options,
        o = n.pointers.length === t.pointers,
        s = n.distance < t.threshold,
        c = n.deltaTime < t.time,
        i,
        r,
        e;
      if ((this.reset(), n.eventType & f && this.count === 0))
        return this.failTimeout();
      if (s && c && o) {
        if (n.eventType != u) return this.failTimeout();
        if (
          ((i = this.pTime ? n.timeStamp - this.pTime < t.interval : !0),
          (r = !this.pCenter || ti(this.pCenter, n.center) < t.posThreshold),
          (this.pTime = n.timeStamp),
          (this.pCenter = n.center),
          r && i ? (this.count += 1) : (this.count = 1),
          (this._input = n),
          (e = this.count % t.taps),
          e === 0)
        )
          return this.hasRequireFailures()
            ? ((this._timer = ci(
                function () {
                  this.state = p;
                  this.tryEmit();
                },
                t.interval,
                this
              )),
              h)
            : p;
      }
      return a;
    },
    failTimeout: function () {
      return (
        (this._timer = ci(
          function () {
            this.state = a;
          },
          this.options.interval,
          this
        )),
        a
      );
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      this.state == p &&
        ((this._input.tapCount = this.count),
        this.manager.emit(this.options.event, this._input));
    },
  });
  b.VERSION = "2.0.7";
  b.defaults = {
    domEvents: !1,
    touchAction: hu,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [
      [ir, { enable: !1 }],
      [nr, { enable: !1 }, ["rotate"]],
      [rr, { direction: l }],
      [oi, { direction: l }, ["swipe"]],
      [si],
      [si, { event: "doubletap", taps: 2 }, ["tap"]],
      [tr],
    ],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)",
    },
  };
  vu = 1;
  ur = 2;
  fr.prototype = {
    set: function (n) {
      return (
        y(this.options, n),
        n.touchAction && this.touchAction.update(),
        n.inputTarget &&
          (this.input.destroy(),
          (this.input.target = n.inputTarget),
          this.input.init()),
        this
      );
    },
    stop: function (n) {
      this.session.stopped = n ? ur : vu;
    },
    recognize: function (n) {
      var r = this.session,
        i,
        f,
        t,
        u;
      if (!r.stopped)
        for (
          this.touchAction.preventDefaults(n),
            f = this.recognizers,
            t = r.curRecognizer,
            (!t || (t && t.state & p)) && (t = r.curRecognizer = null),
            u = 0;
          u < f.length;

        )
          (i = f[u]),
            r.stopped !== ur && (!t || i == t || i.canRecognizeWith(t))
              ? i.recognize(n)
              : i.reset(),
            !t && i.state & (h | et | k) && (t = r.curRecognizer = i),
            u++;
    },
    get: function (n) {
      var i, t;
      if (n instanceof w) return n;
      for (i = this.recognizers, t = 0; t < i.length; t++)
        if (i[t].options.event == n) return i[t];
      return null;
    },
    add: function (n) {
      if (ut(n, "add", this)) return this;
      var t = this.get(n.options.event);
      return (
        t && this.remove(t),
        this.recognizers.push(n),
        (n.manager = this),
        this.touchAction.update(),
        n
      );
    },
    remove: function (n) {
      if (ut(n, "remove", this)) return this;
      if (((n = this.get(n)), n)) {
        var t = this.recognizers,
          i = ft(t, n);
        i !== -1 && (t.splice(i, 1), this.touchAction.update());
      }
      return this;
    },
    on: function (n, t) {
      if (n !== r && t !== r) {
        var i = this.handlers;
        return (
          v(bt(n), function (n) {
            i[n] = i[n] || [];
            i[n].push(t);
          }),
          this
        );
      }
    },
    off: function (n, t) {
      if (n !== r) {
        var i = this.handlers;
        return (
          v(bt(n), function (n) {
            t ? i[n] && i[n].splice(ft(i[n], t), 1) : delete i[n];
          }),
          this
        );
      }
    },
    emit: function (n, t) {
      var i, r;
      if (
        (this.options.domEvents && re(n, t),
        (i = this.handlers[n] && this.handlers[n].slice()),
        i && i.length)
      )
        for (
          t.type = n,
            t.preventDefault = function () {
              t.srcEvent.preventDefault();
            },
            r = 0;
          r < i.length;

        )
          i[r](t), r++;
    },
    destroy: function () {
      this.element && yu(this, !1);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    },
  };
  y(b, {
    INPUT_START: f,
    INPUT_MOVE: nt,
    INPUT_END: u,
    INPUT_CANCEL: e,
    STATE_POSSIBLE: fi,
    STATE_BEGAN: h,
    STATE_CHANGED: et,
    STATE_ENDED: k,
    STATE_RECOGNIZED: p,
    STATE_CANCELLED: yt,
    STATE_FAILED: a,
    DIRECTION_NONE: gt,
    DIRECTION_LEFT: st,
    DIRECTION_RIGHT: ht,
    DIRECTION_UP: ct,
    DIRECTION_DOWN: lt,
    DIRECTION_HORIZONTAL: l,
    DIRECTION_VERTICAL: tt,
    DIRECTION_ALL: pr,
    Manager: fr,
    Input: s,
    TouchAction: gi,
    TouchInput: ri,
    MouseInput: ii,
    PointerEventInput: wi,
    TouchMouseInput: ki,
    SingleTouchInput: iu,
    Recognizer: w,
    AttrRecognizer: c,
    Tap: si,
    Pan: oi,
    Swipe: rr,
    Pinch: nr,
    Rotate: ir,
    Press: tr,
    on: pt,
    off: wt,
    each: v,
    merge: sr,
    extend: li,
    assign: y,
    inherit: o,
    bindFn: ai,
    prefixed: dt,
  });
  pu = typeof n != "undefined" ? n : typeof self != "undefined" ? self : {};
  pu.Hammer = b;
  typeof define == "function" && define.amd
    ? define(function () {
        return b;
      })
    : typeof module != "undefined" && module.exports
    ? (module.exports = b)
    : (n[i] = b);
})(window, document, "Hammer"),
  (function (n) {
    "use strict";
    gi3dDebug("_global.js was loaded");
    n("html").removeClass("no-js").addClass("js");
    typeof gi3d_debug_mode != "undefined" &&
      window.gi3d_debug_mode === !0 &&
      n("html").addClass("debug");
    n("#debug-toggle").click(function () {
      window.gi3d_debug_mode = !window.gi3d_debug_mode;
      window.gi3d_debug_mode === !0
        ? n("html").addClass("debug")
        : n("html").removeClass("debug");
    });
  })(jQuery),
  (function (n, t) {
    "use strict";
    gi3dDebug("gesture.js was loaded");
    n(document).on("gi3d-card-ready", function (i) {
      function w(t) {
        var u, l, f, i;
        if (
          (d(),
          t.type === "panstart" ? ((c = e), (e = 0), (h = 0)) : (c = 0),
          o.hasClass("layout--portrait") || o.hasClass("layout--square"))
        )
          (u = o[0].clientWidth - 50),
            (l = Math.max(Math.floor(u / s), 1)),
            (f = t.deltaX);
        else if (o.hasClass("layout--landscape"))
          (u = o[0].clientHeight - 50),
            (l = Math.max(Math.floor(u / s), 1)),
            (f = t.deltaY);
        else {
          gi3dDebug("😢 could not determine card type.");
          return;
        }
        if (((i = Math.floor((f / -l) * nt)), h !== i)) {
          if (
            ((r = c + e + i - h),
            (r = r < 1 ? 1 : r),
            (r = r > s ? s : r),
            e !== r)
          )
            (e = r), (h = i);
          else return;
          gi3dDebug(
            t.type,
            "deltaSize",
            f,
            "deltaStep",
            i,
            "oldDeltaStep",
            h,
            "initFrame",
            c,
            "oldFrame",
            e,
            "currentFrame",
            r
          );
          window.requestAnimationFrame(function () {
            n(".card")
              .removeClass(removeAllFrameClasses)
              .addClass("frame-" + r);
          });
        }
      }
      function b() {
        var n = 5;
        if (p) {
          gi3dDebug(
            "Hammer.Tap callback ignored because we are currently tweening"
          );
          return;
        }
        if (r >= u[2] - n) {
          gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", 0);
          y(0);
          return;
        }
        if (r >= u[1] - n && r < u[2] - n) {
          gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", u[2]);
          y(u[2] - 1);
          return;
        }
        if (r >= u[0] - n && r < u[1] - n) {
          gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", u[1]);
          y(u[1]);
          return;
        }
        gi3dDebug("Hammer.Tap", "currentFrame", r, "endFrame", u[0]);
        y(u[0]);
        return;
      }
      function y(t, i) {
        if (typeof t == "undefined") {
          console.error("tweenTo() requires an endFrame argument");
          return;
        }
        typeof i == "undefined" && (i = 60);
        var u = Math.max(Math.floor(Math.abs(r - t) / i), 1),
          f = t > r ? "increasing" : "decreasing";
        gi3dDebug("framesPerStep", u, "tweenDirection", f);
        k = setInterval(function () {
          p = !0;
          (f === "increasing" && r >= t) || (f === "decreasing" && r <= t)
            ? d()
            : ((f === "increasing" && r >= t - u) ||
                (f === "decreasing" && r <= t + u)) &&
              (u = 1);
          window.requestAnimationFrame(function () {
            n(".card")
              .removeClass(removeAllFrameClasses)
              .addClass("frame-" + r);
            e = r;
            f === "increasing" ? (r += u) : (r -= u);
          });
        }, 17);
      }
      function d() {
        clearInterval(k);
        p = !1;
      }
      var g = i.originalEvent.data;
      gi3dDebug("gi3d-card-ready — gestureData:", g || "none");
      n(".card").addClass("is-gesture-enabled");
      var s = Number(
          window
            .getComputedStyle(document.querySelector(".layout"), "::after")
            .getPropertyValue("content")
            .replace(/"/g, "")
            .replace(/'/g, "")
            .split("||")[0]
        ),
        f = window
          .getComputedStyle(document.querySelector(".layout"), "::after")
          .getPropertyValue("content")
          .replace(/"/g, "")
          .replace(/'/g, "")
          .split("||")[1]
          .split("|"),
        u = [
          Number(f[0]),
          Number(f[0]) + Number(f[1]),
          Number(f[0]) + Number(f[1]) + Number(f[2]),
        ];
      gi3dDebug("🎥 NUM_FRAMES:", s, "FRAME_COUNTS:", f, "keyframes:", u);
      var c = 1,
        r = 1,
        e = 0,
        h = 0,
        nt = 5 / 3,
        k,
        p = !1,
        o = n(".layout"),
        l = new t(o[0]),
        tt = n(".drag"),
        a = new t(tt[0]),
        it = n(".dragMob"),
        v = new t(it[0]);
      l.add(new t.Pan({ direction: t.DIRECTION_ALL, threshold: 0 }));
      a.add(new t.Pan({ direction: t.DIRECTION_ALL, threshold: 0 }));
      v.add(new t.Pan({ direction: t.DIRECTION_ALL, threshold: 0 }));
      l.on("panstart panmove", w);
      a.on("panstart panmove", w);
      v.on("panstart panmove", w);
      l.add(new t.Tap({}));
      a.add(new t.Tap({}));
      v.add(new t.Tap({}));
      l.on("tap", b);
      a.on("tap", b);
      v.on("tap", b);
    });
  })(jQuery, Hammer);
