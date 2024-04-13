/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function(e) {
    e.fn.appear = function(t, n) {
        var r = e.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, n);
        return this.each(function() {
            var n = e(this);
            n.appeared = false;
            if (!t) {
                n.trigger("appear", r.data);
                return
            }
            var i = e(window);
            var s = function() {
                if (!n.is(":visible")) {
                    n.appeared = false;
                    return
                }
                var e = i.scrollLeft();
                var t = i.scrollTop();
                var s = n.offset();
                var o = s.left;
                var u = s.top;
                var a = r.accX;
                var f = r.accY;
                var l = n.height();
                var c = i.height();
                var h = n.width();
                var p = i.width();
                if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
                    if (!n.appeared) n.trigger("appear", r.data)
                } else {
                    n.appeared = false
                }
            };
            var o = function() {
                n.appeared = true;
                if (r.one) {
                    i.unbind("scroll", s);
                    var o = e.inArray(s, e.fn.appear.checks);
                    if (o >= 0) e.fn.appear.checks.splice(o, 1)
                }
                t.apply(this, arguments)
            };
            if (r.one) n.one("appear", r.data, o);
            else n.bind("appear", r.data, o);
            i.scroll(s);
            e.fn.appear.checks.push(s);
            s()
        })
    };
    e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var t = e.fn.appear.checks.length;
            if (t > 0)
                while (t--) e.fn.appear.checks[t]()
        },
        run: function() {
            if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    });
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
        var r = e.fn[n];
        if (r) {
            e.fn[n] = function() {
                var t = r.apply(this, arguments);
                e.fn.appear.run();
                return t
            }
        }
    })
})(jQuery);
(function(e) {
    e.fn.countTo = function(t) {
        t = e.extend({}, e.fn.countTo.defaults, t || {});
        var n = Math.ceil(t.speed / t.refreshInterval),
            r = (t.to - t.from) / n;
        return e(this).each(function() {
            function a() {
                o += r;
                s++;
                e(i).html(o.toFixed(t.decimals));
                if (typeof t.onUpdate == "function") {
                    t.onUpdate.call(i, o)
                }
                if (s >= n) {
                    clearInterval(u);
                    o = t.to;
                    if (typeof t.onComplete == "function") {
                        t.onComplete.call(i, o)
                    }
                }
            }
            var i = this,
                s = 0,
                o = t.from,
                u = setInterval(a, t.refreshInterval)
        })
    };
    e.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
})(jQuery)