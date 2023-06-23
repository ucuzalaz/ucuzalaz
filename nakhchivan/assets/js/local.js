! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        r = e.document,
        i = n.slice,
        o = n.concat,
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = {},
        d = function(e, t) {
            return new d.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        g = /-([\da-z])/gi,
        m = function(e, t) {
            return t.toUpperCase()
        };

    function v(e) {
        var t = !!e && "length" in e && e.length,
            n = d.type(e);
        return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    d.fn = d.prototype = {
        jquery: "1.12.4",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : i.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return d.each(this, e)
        },
        map: function(e) {
            return this.pushStack(d.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, d.extend = d.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || d.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], a !== (n = i[r]) && (l && n && (d.isPlainObject(n) || (t = d.isArray(n))) ? (t ? (t = !1, o = e && d.isArray(e) ? e : []) : o = e && d.isPlainObject(e) ? e : {}, a[r] = d.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, d.extend({
        expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === d.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
            try {
                if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!f.ownFirst)
                for (t in e) return c.call(e, t);
            for (t in e);
            return void 0 === t || c.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && d.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(g, m)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (v(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (v(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (s) return s.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n != n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (v(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (o = e[t], t = e, e = o), d.isFunction(e)) return n = i.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(i.call(arguments)))
            }).guid = e.guid = e.guid || d.guid++, r
        },
        now: function() {
            return +new Date
        },
        support: f
    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = oe(),
            N = oe(),
            k = oe(),
            S = function(e, t) {
                return e === t && (f = !0), 0
            },
            A = 1 << 31,
            D = {}.hasOwnProperty,
            j = [],
            L = j.pop,
            H = j.push,
            q = j.push,
            _ = j.slice,
            F = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            P = "\\[" + O + "*(" + R + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]",
            B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            W = new RegExp(O + "+", "g"),
            I = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            $ = new RegExp("^" + O + "*," + O + "*"),
            z = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            U = new RegExp(B),
            V = new RegExp("^" + R + "$"),
            Y = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = function() {
                d()
            };
        try {
            q.apply(j = _.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: j.length ? function(e, t) {
                    H.apply(e, _.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, r, i) {
            var o, s, l, c, f, h, v, y, T = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) {
                if (11 !== C && (h = K.exec(e)))
                    if (o = h[1]) {
                        if (9 === C) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (T && (l = T.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (h[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
                    if (1 !== C) T = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = b), s = (v = a(e)).length, f = V.test(c) ? "#" + c : "[id='" + c + "']"; s--;) v[s] = f + " " + ge(v[s]);
                        y = v.join(","), T = Z.test(e) && pe(t.parentNode) || t
                    }
                    if (y) try {
                        return q.apply(r, T.querySelectorAll(y)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(I, "$1"), t, r, i)
        }

        function oe() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ae(e) {
            return e[b] = !0, e
        }

        function se(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return ae(function(t) {
                return t = +t, ae(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ie.support = {}, o = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, d = ie.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !o(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = se(function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = se(function(e) {
                    return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                }), n.getById ? (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete r.find.ID, r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Q.test(p.querySelectorAll)) && (se(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }), se(function(e) {
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", B)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, S = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? F(c, e) - F(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? F(c, e) - F(c, t) : 0;
                    if (i === o) return le(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? le(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, p) : p
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && d(e), t = t.replace(X, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return ie(t, p, null, [e]).length > 0
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && d(e), x(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== p && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = ie.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = ie.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ie.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                x = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++x && d === t) {
                                            c[e] = [T, p, x];
                                            break
                                        }
                                } else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                    for (;
                                        (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]), d !== t)););
                                return (x -= i) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = F(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(I, "$1"));
                        return r[b] ? ae(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ae(function(e) {
                        return function(t) {
                            return ie(e, t).length > 0
                        }
                    }),
                    contains: ae(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: ae(function(e) {
                        return V.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: de(function() {
                        return [0]
                    }),
                    last: de(function(e, t) {
                        return [t - 1]
                    }),
                    eq: de(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: de(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: de(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: de(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: de(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = fe(t);

        function he() {}

        function ge(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = C++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l, c = [T, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((s = (u = (l = t[b] || (t[b] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && s[0] === T && s[1] === o) return c[2] = s[2];
                            if (u[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function ve(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function ye(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function xe(e, t, n, r, i, o) {
            return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), ae(function(o, a, s, u) {
                var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : ye(g, d, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, v, s, u), r)
                    for (l = ye(v, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = i ? F(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = ye(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : q.apply(a, v)
            })
        }

        function be(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                    return e === t
                }, s, !0), f = me(function(e) {
                    return F(t, e) > -1
                }, s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) d = [me(ve(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return xe(u > 1 && ve(d), u > 1 && ge(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(I, "$1"), n, u < i && be(e.slice(u, i)), i < o && be(e = e.slice(i)), i < o && ge(e))
                    }
                    d.push(n)
                }
            return ve(d)
        }
        return he.prototype = r.filters = r.pseudos, r.setFilters = new he, a = ie.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = N[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = $.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(I, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = Y[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ie.error(e) : N(e, u).slice(0)
        }, s = ie.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = k[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = be(t[n]))[b] ? i.push(s) : o.push(s);
                (s = k(e, function(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, u, c) {
                            var f, h, m, v = 0,
                                y = "0",
                                x = o && [],
                                b = [],
                                w = l,
                                C = o || i && r.find.TAG("*", c),
                                E = T += null == w ? 1 : Math.random() || .1,
                                N = C.length;
                            for (c && (l = a === p || a || c); y !== N && null != (f = C[y]); y++) {
                                if (i && f) {
                                    for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); m = e[h++];)
                                        if (m(f, a || p, s)) {
                                            u.push(f);
                                            break
                                        }
                                    c && (T = E)
                                }
                                n && ((f = !m && f) && v--, o && x.push(f))
                            }
                            if (v += y, n && y !== v) {
                                for (h = 0; m = t[h++];) m(x, b, a, s);
                                if (o) {
                                    if (v > 0)
                                        for (; y--;) x[y] || b[y] || (b[y] = L.call(u));
                                    b = ye(b)
                                }
                                q.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && ie.uniqueSort(u)
                            }
                            return c && (T = E, l = w), x
                        };
                    return n ? ae(o) : o
                }(o, i))).selector = e
            }
            return s
        }, u = ie.select = function(e, t, i, o) {
            var u, l, c, f, d, p = "function" == typeof e && e,
                h = !o && a(e = p.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return i;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (u = Y.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[f = c.type]);)
                    if ((d = r.find[f]) && (o = d(c.matches[0].replace(te, ne), Z.test(l[0].type) && pe(t.parentNode) || t))) {
                        if (l.splice(u, 1), !(e = o.length && ge(l))) return q.apply(i, o), i;
                        break
                    }
            }
            return (p || s(e, h))(o, t, !g, i, !t || Z.test(e) && pe(t.parentNode) || t), i
        }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(M, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(e);
    d.find = y, d.expr = y.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = y.uniqueSort, d.text = y.getText, d.isXMLDoc = y.isXML, d.contains = y.contains;
    var x = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && d(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        b = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        w = d.expr.match.needsContext,
        T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function E(e, t, n) {
        if (d.isFunction(t)) return d.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return d.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (C.test(t)) return d.filter(t, e, n);
            t = d.filter(t, e)
        }
        return d.grep(e, function(e) {
            return d.inArray(e, t) > -1 !== n
        })
    }
    d.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [r] : [] : d.find.matches(e, d.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, d.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (d.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) d.find(e, r[t], n);
            return (n = this.pushStack(i > 1 ? d.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && w.test(e) ? d(e) : e || [], !1).length
        }
    });
    var N, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : k.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), T.test(i[1]) && d.isPlainObject(t))
                    for (i in t) d.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((o = r.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2]) return N.find(e);
                this.length = 1, this[0] = o
            }
            return this.context = r, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
    }).prototype = d.fn, N = d(r);
    var S = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    d.fn.extend({
        has: function(e) {
            var t, n = d(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (d.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = w.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? d.inArray(this[0], d(e)) : d.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b(e.firstChild)
        },
        contents: function(e) {
            return d.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : d.merge([], e.childNodes)
        }
    }, function(e, t) {
        d.fn[e] = function(n, r) {
            var i = d.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = d.filter(r, i)), this.length > 1 && (A[e] || (i = d.uniqueSort(i)), S.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var j, L, H = /\S+/g;

    function q() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _)) : (r.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
    }

    function _() {
        (r.addEventListener || "load" === e.event.type || "complete" === r.readyState) && (q(), d.ready())
    }
    for (L in d.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return d.each(e.match(H) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : d.extend({}, e);
            var t, n, r, i, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (i = e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            d.each(n, function(n, r) {
                                d.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== d.type(r) && t(r)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(e, t) {
                            for (var n;
                                (n = d.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? d.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = !0, n || l.disable(), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return l
        }, d.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", d.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return d.Deferred(function(n) {
                                d.each(t, function(t, o) {
                                    var a = d.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? d.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, d.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, o = 0,
                    a = i.call(arguments),
                    s = a.length,
                    u = 1 !== s || e && d.isFunction(e.promise) ? s : 0,
                    l = 1 === u ? e : d.Deferred(),
                    c = function(e, n, r) {
                        return function(o) {
                            n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : o, r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), r = new Array(s); o < s; o++) a[o] && d.isFunction(a[o].promise) ? a[o].promise().progress(c(o, n, t)).done(c(o, r, a)).fail(l.reject) : --u;
                return u || l.resolveWith(r, a), l.promise()
            }
        }), d.fn.ready = function(e) {
            return d.ready.promise().done(e), this
        }, d.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? d.readyWait++ : d.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (j.resolveWith(r, [d]), d.fn.triggerHandler && (d(r).triggerHandler("ready"), d(r).off("ready"))))
            }
        }), d.ready.promise = function(t) {
            if (!j)
                if (j = d.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll) e.setTimeout(d.ready);
                else if (r.addEventListener) r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _);
            else {
                r.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
                var n = !1;
                try {
                    n = null == e.frameElement && r.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!d.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        q(), d.ready()
                    }
                }()
            }
            return j.promise(t)
        }, d.ready.promise(), d(f)) break;
    f.ownFirst = "0" === L, f.inlineBlockNeedsLayout = !1, d(function() {
            var e, t, n, i;
            (n = r.getElementsByTagName("body")[0]) && n.style && (t = r.createElement("div"), (i = r.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", f.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = r.createElement("div");
            f.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                f.deleteExpando = !1
            }
            e = null
        }();
    var F, M = function(e) {
            var t = d.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        R = /([A-Z])/g;

    function P(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(R, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? d.parseJSON(n) : n)
                } catch (e) {}
                d.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function B(e) {
        var t;
        for (t in e)
            if (("data" !== t || !d.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function W(e, t, r, i) {
        if (M(e)) {
            var o, a, s = d.expando,
                u = e.nodeType,
                l = u ? d.cache : e,
                c = u ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== r || "string" != typeof t) return c || (c = u ? e[s] = n.pop() || d.guid++ : s), l[c] || (l[c] = u ? {} : {
                toJSON: d.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[c] = d.extend(l[c], t) : l[c].data = d.extend(l[c].data, t)), a = l[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== r && (a[d.camelCase(t)] = r), "string" == typeof t ? null == (o = a[t]) && (o = a[d.camelCase(t)]) : o = a, o
        }
    }

    function I(e, t, n) {
        if (M(e)) {
            var r, i, o = e.nodeType,
                a = o ? d.cache : e,
                s = o ? e[d.expando] : d.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = d.isArray(t) ? t.concat(d.map(t, d.camelCase)) : t in r ? [t] : (t = d.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !B(r) : !d.isEmptyObject(r)) return
                }(n || (delete a[s].data, B(a[s]))) && (o ? d.cleanData([e], !0) : f.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    d.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? d.cache[e[d.expando]] : e[d.expando]) && !B(e)
        },
        data: function(e, t, n) {
            return W(e, t, n)
        },
        removeData: function(e, t) {
            return I(e, t)
        },
        _data: function(e, t, n) {
            return W(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return I(e, t, !0)
        }
    }), d.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = d.data(o), 1 === o.nodeType && !d._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && P(o, r = d.camelCase(r.slice(5)), i[r]);
                    d._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                d.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                d.data(this, e, t)
            }) : o ? P(o, e, d.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                d.removeData(this, e)
            })
        }
    }), d.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = d._data(e, t), n && (!r || d.isArray(n) ? r = d._data(e, t, d.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = d.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = d._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                d.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return d._data(e, n) || d._data(e, n, {
                empty: d.Callbacks("once memory").add(function() {
                    d._removeData(e, t + "queue"), d._removeData(e, n)
                })
            })
        }
    }), d.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = d.queue(this, e, t);
                d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                d.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = d.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = d._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), f.shrinkWrapBlocks = function() {
        return null != F ? F : (F = !1, (t = r.getElementsByTagName("body")[0]) && t.style ? (e = r.createElement("div"), (n = r.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(r.createElement("div")).style.width = "5px", F = 3 !== e.offsetWidth), t.removeChild(n), F) : void 0);
        var e, t, n
    };
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"],
        U = function(e, t) {
            return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
        };

    function V(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return d.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (d.cssNumber[t] ? "" : "px"),
            c = (d.cssNumber[t] || "px" !== l && +u) && z.exec(d.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                c /= o = o || ".5", d.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var Y, J, G, Q = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === d.type(n))
                for (s in i = !0, n) Q(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, d.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(d(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        K = /^(?:checkbox|radio)$/i,
        Z = /<([\w:-]+)/,
        ee = /^$|\/(?:java|ecma)script/i,
        te = /^\s+/,
        ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function re(e) {
        var t = ne.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    Y = r.createElement("div"), J = r.createDocumentFragment(), G = r.createElement("input"), Y.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", f.leadingWhitespace = 3 === Y.firstChild.nodeType, f.tbody = !Y.getElementsByTagName("tbody").length, f.htmlSerialize = !!Y.getElementsByTagName("link").length, f.html5Clone = "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML, G.type = "checkbox", G.checked = !0, J.appendChild(G), f.appendChecked = G.checked, Y.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!Y.cloneNode(!0).lastChild.defaultValue, J.appendChild(Y), (G = r.createElement("input")).setAttribute("type", "radio"), G.setAttribute("checked", "checked"), G.setAttribute("name", "t"), Y.appendChild(G), f.checkClone = Y.cloneNode(!0).cloneNode(!0).lastChild.checked, f.noCloneEvent = !!Y.addEventListener, Y[d.expando] = 1, f.attributes = !Y.getAttribute(d.expando);
    var ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: f.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function oe(e, t) {
        var n, r, i = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || d.nodeName(r, t) ? o.push(r) : d.merge(o, oe(r, t));
        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], o) : o
    }

    function ae(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) d._data(n, "globalEval", !t || d._data(t[r], "globalEval"))
    }
    ie.optgroup = ie.option, ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead, ie.th = ie.td;
    var se = /<|&#?\w+;/,
        ue = /<tbody/i;

    function le(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }

    function ce(e, t, n, r, i) {
        for (var o, a, s, u, l, c, p, h = e.length, g = re(t), m = [], v = 0; v < h; v++)
            if ((a = e[v]) || 0 === a)
                if ("object" === d.type(a)) d.merge(m, a.nodeType ? [a] : a);
                else if (se.test(a)) {
            for (u = u || g.appendChild(t.createElement("div")), l = (Z.exec(a) || ["", ""])[1].toLowerCase(), p = ie[l] || ie._default, u.innerHTML = p[1] + d.htmlPrefilter(a) + p[2], o = p[0]; o--;) u = u.lastChild;
            if (!f.leadingWhitespace && te.test(a) && m.push(t.createTextNode(te.exec(a)[0])), !f.tbody)
                for (o = (a = "table" !== l || ue.test(a) ? "<table>" !== p[1] || ue.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;) d.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (d.merge(m, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = g.lastChild
        } else m.push(t.createTextNode(a));
        for (u && g.removeChild(u), f.appendChecked || d.grep(oe(m, "input"), le), v = 0; a = m[v++];)
            if (r && d.inArray(a, r) > -1) i && i.push(a);
            else if (s = d.contains(a.ownerDocument, a), u = oe(g.appendChild(a), "script"), s && ae(u), n)
            for (o = 0; a = u[o++];) ee.test(a.type || "") && n.push(a);
        return u = null, g
    }! function() {
        var t, n, i = r.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (f[t] = n in e) || (i.setAttribute(n, "t"), f[t] = !1 === i.attributes[n].expando);
        i = null
    }();
    var fe = /^(?:input|select|textarea)$/i,
        de = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        he = /^(?:focusinfocus|focusoutblur)$/,
        ge = /^([^.]*)(?:\.(.+)|)/;

    function me() {
        return !0
    }

    function ve() {
        return !1
    }

    function ye() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function xe(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) xe(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ve;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return d().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = d.guid++)), e.each(function() {
            d.event.add(this, t, i, r, n)
        })
    }
    d.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, h, g, m, v = d._data(e);
            if (v) {
                for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = d.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || ((c = v.handle = function(e) {
                        return void 0 === d || e && d.event.triggered === e.type ? void 0 : d.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(H) || [""]).length; s--;) h = m = (o = ge.exec(t[s]) || [])[1], g = (o[2] || "").split(".").sort(), h && (l = d.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = d.event.special[h] || {}, f = d.extend({
                    type: h,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && d.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                }, u), (p = a[h]) || ((p = a[h] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, g, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) : p.push(f), d.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, h, g, m, v = d.hasData(e) && d._data(e);
            if (v && (c = v.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--;)
                    if (h = m = (s = ge.exec(t[l]) || [])[1], g = (s[2] || "").split(".").sort(), h) {
                        for (f = d.event.special[h] || {}, p = c[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !p.length && (f.teardown && !1 !== f.teardown.call(e, g, v.handle) || d.removeEvent(e, h, v.handle), delete c[h])
                    } else
                        for (h in c) d.event.remove(e, h + t[l], n, r, !0);
                d.isEmptyObject(c) && (delete v.handle, d._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var a, s, u, l, f, p, h, g = [i || r],
                m = c.call(t, "type") ? t.type : t,
                v = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = p = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !he.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), s = m.indexOf(":") < 0 && "on" + m, (t = t[d.expando] ? t : new d.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : d.makeArray(n, [t]), f = d.event.special[m] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!o && !f.noBubble && !d.isWindow(i)) {
                    for (l = f.delegateType || m, he.test(l + m) || (u = u.parentNode); u; u = u.parentNode) g.push(u), p = u;
                    p === (i.ownerDocument || r) && g.push(p.defaultView || p.parentWindow || e)
                }
                for (h = 0;
                    (u = g[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? l : f.bindType || m, (a = (d._data(u, "events") || {})[t.type] && d._data(u, "handle")) && a.apply(u, n), (a = s && u[s]) && a.apply && M(u) && (t.result = a.apply(u, n), !1 === t.result && t.preventDefault());
                if (t.type = m, !o && !t.isDefaultPrevented() && (!f._default || !1 === f._default.apply(g.pop(), n)) && M(i) && s && i[m] && !d.isWindow(i)) {
                    (p = i[s]) && (i[s] = null), d.event.triggered = m;
                    try {
                        i[m]()
                    } catch (e) {}
                    d.event.triggered = void 0, p && (i[s] = p)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, n, r, o, a, s, u = i.call(arguments),
                l = (d._data(this, "events") || {})[e.type] || [],
                c = d.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = d.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (r = ((d.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? d(i, this).index(u) > -1 : d.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[d.expando]) return e;
            var t, n, i, o = e.type,
                a = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = pe.test(o) ? this.mouseHooks : de.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new d.Event(a), t = i.length; t--;) e[n = i[t]] = a[n];
            return e.target || (e.target = a.srcElement || r), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, a = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || r).documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ye() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ye() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (d.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = d.extend(new d.Event, n, {
                type: e,
                isSimulated: !0
            });
            d.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, d.removeEvent = r.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
    }, d.Event = function(e, t) {
        if (!(this instanceof d.Event)) return new d.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? me : ve) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), this[d.expando] = !0
    }, d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: ve,
        isPropagationStopped: ve,
        isImmediatePropagationStopped: ve,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = me, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = me, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = me, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || d.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), f.submit || (d.event.special.submit = {
        setup: function() {
            if (d.nodeName(this, "form")) return !1;
            d.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = d.nodeName(t, "input") || d.nodeName(t, "button") ? d.prop(t, "form") : void 0;
                n && !d._data(n, "submit") && (d.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), d._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && d.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (d.nodeName(this, "form")) return !1;
            d.event.remove(this, "._submit")
        }
    }), f.change || (d.event.special.change = {
        setup: function() {
            if (fe.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (d.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), d.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), d.event.simulate("change", this, e)
            })), !1;
            d.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                fe.test(t.nodeName) && !d._data(t, "change") && (d.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || d.event.simulate("change", this.parentNode, e)
                }), d._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return d.event.remove(this, "._change"), !fe.test(this.nodeName)
        }
    }), f.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            d.event.simulate(t, e.target, d.event.fix(e))
        };
        d.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = d._data(r, t);
                i || r.addEventListener(e, n, !0), d._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = d._data(r, t) - 1;
                i ? d._data(r, t, i) : (r.removeEventListener(e, n, !0), d._removeData(r, t))
            }
        }
    }), d.fn.extend({
        on: function(e, t, n, r) {
            return xe(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return xe(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ve), this.each(function() {
                d.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                d.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return d.event.trigger(e, t, n, !0)
        }
    });
    var be = / jQuery\d+="(?:null|\d+)"/g,
        we = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ce = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^true\/(.*)/,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Se = re(r).appendChild(r.createElement("div"));

    function Ae(e, t) {
        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function De(e) {
        return e.type = (null !== d.find.attr(e, "type")) + "/" + e.type, e
    }

    function je(e) {
        var t = Ne.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        if (1 === t.nodeType && d.hasData(e)) {
            var n, r, i, o = d._data(e),
                a = d._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (r = 0, i = s[n].length; r < i; r++) d.event.add(t, n, s[n][r]);
            a.data && (a.data = d.extend({}, a.data))
        }
    }

    function He(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !f.noCloneEvent && t[d.expando]) {
                for (r in (i = d._data(t)).events) d.removeEvent(t, r, i.handle);
                t.removeAttribute(d.expando)
            }
            "script" === n && t.text !== e.text ? (De(t).text = e.text, je(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), f.html5Clone && e.innerHTML && !d.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && K.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function qe(e, t, n, r) {
        t = o.apply([], t);
        var i, a, s, u, l, c, p = 0,
            h = e.length,
            g = h - 1,
            m = t[0],
            v = d.isFunction(m);
        if (v || h > 1 && "string" == typeof m && !f.checkClone && Ee.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), qe(o, t, n, r)
        });
        if (h && (i = (c = ce(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === c.childNodes.length && (c = i), i || r)) {
            for (s = (u = d.map(oe(c, "script"), De)).length; p < h; p++) a = c, p !== g && (a = d.clone(a, !0, !0), s && d.merge(u, oe(a, "script"))), n.call(e[p], a, p);
            if (s)
                for (l = u[u.length - 1].ownerDocument, d.map(u, je), p = 0; p < s; p++) a = u[p], ee.test(a.type || "") && !d._data(a, "globalEval") && d.contains(l, a) && (a.src ? d._evalUrl && d._evalUrl(a.src) : d.globalEval((a.text || a.textContent || a.innerHTML || "").replace(ke, "")));
            c = i = null
        }
        return e
    }

    function _e(e, t, n) {
        for (var r, i = t ? d.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || d.cleanData(oe(r)), r.parentNode && (n && d.contains(r.ownerDocument, r) && ae(oe(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    d.extend({
        htmlPrefilter: function(e) {
            return e.replace(Te, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = d.contains(e.ownerDocument, e);
            if (f.html5Clone || d.isXMLDoc(e) || !we.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Se.innerHTML = e.outerHTML, Se.removeChild(o = Se.firstChild)), !(f.noCloneEvent && f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                for (r = oe(o), s = oe(e), a = 0; null != (i = s[a]); ++a) r[a] && He(i, r[a]);
            if (t)
                if (n)
                    for (s = s || oe(e), r = r || oe(o), a = 0; null != (i = s[a]); a++) Le(i, r[a]);
                else Le(e, o);
            return (r = oe(o, "script")).length > 0 && ae(r, !u && oe(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var r, i, o, a, s = 0, u = d.expando, l = d.cache, c = f.attributes, p = d.event.special; null != (r = e[s]); s++)
                if ((t || M(r)) && (a = (o = r[u]) && l[o])) {
                    if (a.events)
                        for (i in a.events) p[i] ? d.event.remove(r, i) : d.removeEvent(r, i, a.handle);
                    l[o] && (delete l[o], c || void 0 === r.removeAttribute ? r[u] = void 0 : r.removeAttribute(u), n.push(o))
                }
        }
    }), d.fn.extend({
        domManip: qe,
        detach: function(e) {
            return _e(this, e, !0)
        },
        remove: function(e) {
            return _e(this, e)
        },
        text: function(e) {
            return Q(this, function(e) {
                return void 0 === e ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && d.cleanData(oe(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && d.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return d.clone(this, e, t)
            })
        },
        html: function(e) {
            return Q(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(be, "") : void 0;
                if ("string" == typeof e && !Ce.test(e) && (f.htmlSerialize || !we.test(e)) && (f.leadingWhitespace || !te.test(e)) && !ie[(Z.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = d.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(oe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return qe(this, arguments, function(t) {
                var n = this.parentNode;
                d.inArray(this, e) < 0 && (d.cleanData(oe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        d.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = d(e), s = o.length - 1; r <= s; r++) n = r === s ? this : this.clone(!0), d(o[r])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Fe, Me = {
        HTML: "block",
        BODY: "block"
    };

    function Oe(e, t) {
        var n = d(t.createElement(e)).appendTo(t.body),
            r = d.css(n[0], "display");
        return n.detach(), r
    }

    function Re(e) {
        var t = r,
            n = Me[e];
        return n || ("none" !== (n = Oe(e, t)) && n || ((t = ((Fe = (Fe || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Fe[0].contentDocument).document).write(), t.close(), n = Oe(e, t), Fe.detach()), Me[e] = n), n
    }
    var Pe = /^margin/,
        Be = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        We = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        },
        Ie = r.documentElement;
    ! function() {
        var t, n, i, o, a, s, u = r.createElement("div"),
            l = r.createElement("div");

        function c() {
            var c, f, d = r.documentElement;
            d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = s = !1, n = a = !0, e.getComputedStyle && (f = e.getComputedStyle(l), t = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, i = "4px" === (f || {
                width: "4px"
            }).width, l.style.marginRight = "50%", n = "4px" === (f || {
                marginRight: "4px"
            }).marginRight, (c = l.appendChild(r.createElement("div"))).style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(c) || {}).marginRight), l.removeChild(c)), l.style.display = "none", (o = 0 === l.getClientRects().length) && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", (c = l.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === c[0].offsetHeight) && (c[0].style.display = "", c[1].style.display = "none", o = 0 === c[0].offsetHeight)), d.removeChild(u)
        }
        l.style && (l.style.cssText = "float:left;opacity:.5", f.opacity = "0.5" === l.style.opacity, f.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === l.style.backgroundClip, (u = r.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), f.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, d.extend(f, {
            reliableHiddenOffsets: function() {
                return null == t && c(), o
            },
            boxSizingReliable: function() {
                return null == t && c(), i
            },
            pixelMarginRight: function() {
                return null == t && c(), n
            },
            pixelPosition: function() {
                return null == t && c(), t
            },
            reliableMarginRight: function() {
                return null == t && c(), a
            },
            reliableMarginLeft: function() {
                return null == t && c(), s
            }
        }))
    }();
    var $e, ze, Xe = /^(top|right|bottom|left)$/;

    function Ue(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    e.getComputedStyle ? ($e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ze = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return "" !== (a = (n = n || $e(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || d.contains(e.ownerDocument, e) || (a = d.style(e, t)), n && !f.pixelMarginRight() && Be.test(a) && Pe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : Ie.currentStyle && ($e = function(e) {
        return e.currentStyle
    }, ze = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return null == (a = (n = n || $e(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), Be.test(a) && !Xe.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var Ve = /alpha\([^)]*\)/i,
        Ye = /opacity\s*=\s*([^)]*)/i,
        Je = /^(none|table(?!-c[ea]).+)/,
        Ge = new RegExp("^(" + $ + ")(.*)$", "i"),
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ze = ["Webkit", "O", "Moz", "ms"],
        et = r.createElement("div").style;

    function tt(e) {
        if (e in et) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ze.length; n--;)
            if ((e = Ze[n] + t) in et) return e
    }

    function nt(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = d._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && U(r) && (o[a] = d._data(r, "olddisplay", Re(r.nodeName)))) : (i = U(r), (n && "none" !== n || !i) && d._data(r, "olddisplay", i ? n : d.css(r, "display"))));
        for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function rt(e, t, n) {
        var r = Ge.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function it(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += d.css(e, n + X[o], !0, i)), r ? ("content" === n && (a -= d.css(e, "padding" + X[o], !0, i)), "margin" !== n && (a -= d.css(e, "border" + X[o] + "Width", !0, i))) : (a += d.css(e, "padding" + X[o], !0, i), "padding" !== n && (a += d.css(e, "border" + X[o] + "Width", !0, i)));
        return a
    }

    function ot(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = $e(e),
            a = f.boxSizing && "border-box" === d.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = ze(e, t, o)) < 0 || null == i) && (i = e.style[t]), Be.test(i)) return i;
            r = a && (f.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + it(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: f.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = d.camelCase(t),
                    u = e.style;
                if (t = d.cssProps[s] || (d.cssProps[s] = tt(s) || s), a = d.cssHooks[t] || d.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if ("string" === (o = typeof n) && (i = z.exec(n)) && i[1] && (n = V(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (d.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = d.camelCase(t);
            return t = d.cssProps[s] || (d.cssProps[s] = tt(s) || s), (a = d.cssHooks[t] || d.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ze(e, t, r)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), d.each(["height", "width"], function(e, t) {
        d.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return Je.test(d.css(e, "display")) && 0 === e.offsetWidth ? We(e, Qe, function() {
                    return ot(e, t, r)
                }) : ot(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && $e(e);
                return rt(0, n, r ? it(e, t, r, f.boxSizing && "border-box" === d.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), f.opacity || (d.cssHooks.opacity = {
        get: function(e, t) {
            return Ye.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = d.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === d.trim(o.replace(Ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ve.test(o) ? o.replace(Ve, i) : o + " " + i)
        }
    }), d.cssHooks.marginRight = Ue(f.reliableMarginRight, function(e, t) {
        if (t) return We(e, {
            display: "inline-block"
        }, ze, [e, "marginRight"])
    }), d.cssHooks.marginLeft = Ue(f.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(ze(e, "marginLeft")) || (d.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + X[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Pe.test(e) || (d.cssHooks[e + t].set = rt)
    }), d.fn.extend({
        css: function(e, t) {
            return Q(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (d.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = d.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return nt(this, !0)
        },
        hide: function() {
            return nt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                U(this) ? d(this).show() : d(this).hide()
            })
        }
    }), d.Tween = at, at.prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || d.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (d.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
        }
    }, at.prototype.init.prototype = at.prototype, at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, d.fx = at.prototype.init, d.fx.step = {};
    var st, ut, lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function ft() {
        return e.setTimeout(function() {
            st = void 0
        }), st = d.now()
    }

    function dt(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = X[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function pt(e, t, n) {
        for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ht(e, t, n) {
        var r, i, o = 0,
            a = ht.prefilters.length,
            s = d.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = st || ft(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: d.extend({}, t),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: st || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = d.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = d.camelCase(n)], o = e[n], d.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = d.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = ht.prefilters[o].call(l, e, c, l.opts)) return d.isFunction(r.stop) && (d._queueHooks(l.elem, l.opts.queue).stop = d.proxy(r.stop, r)), r;
        return d.map(c, pt, l), d.isFunction(l.opts.start) && l.opts.start.call(e, l), d.fx.timer(d.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    d.Animation = d.extend(ht, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return V(n.elem, e, z.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                d.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(H);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && U(e),
                    m = d._data(e, "fxshow");
                for (r in n.queue || (null == (s = d._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || u()
                    }), s.unqueued++, c.always(function() {
                        c.always(function() {
                            s.unqueued--, d.queue(e, "fx").length || s.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (l = d.css(e, "display")) ? d._data(e, "olddisplay") || Re(e.nodeName) : l) && "none" === d.css(e, "float") && (f.inlineBlockNeedsLayout && "inline" !== Re(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.shrinkWrapBlocks() || c.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), t)
                    if (i = t[r], lt.exec(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        p[r] = m && m[r] || d.style(e, r)
                    } else l = void 0;
                if (d.isEmptyObject(p)) "inline" === ("none" === l ? Re(e.nodeName) : l) && (h.display = l);
                else
                    for (r in m ? "hidden" in m && (g = m.hidden) : m = d._data(e, "fxshow", {}), o && (m.hidden = !g), g ? d(e).show() : c.done(function() {
                            d(e).hide()
                        }), c.done(function() {
                            var t;
                            for (t in d._removeData(e, "fxshow"), p) d.style(e, t, p[t])
                        }), p) a = pt(g ? m[r] : 0, r, c), r in m || (m[r] = a.start, g && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
            }
        }), d.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? d.extend({}, e) : {
                complete: n || !n && t || d.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !d.isFunction(t) && t
            };
            return r.duration = d.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in d.fx.speeds ? d.fx.speeds[r.duration] : d.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue)
            }, r
        }, d.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = d.isEmptyObject(e),
                    o = d.speed(t, n, r),
                    a = function() {
                        var t = ht(this, d.extend({}, e), o);
                        (i || d._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = d.timers,
                        a = d._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || d.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = d._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = d.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), d.each(["toggle", "show", "hide"], function(e, t) {
            var n = d.fn[t];
            d.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, i)
            }
        }), d.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            d.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), d.timers = [], d.fx.tick = function() {
            var e, t = d.timers,
                n = 0;
            for (st = d.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || d.fx.stop(), st = void 0
        }, d.fx.timer = function(e) {
            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
        }, d.fx.interval = 13, d.fx.start = function() {
            ut || (ut = e.setInterval(d.fx.tick, d.fx.interval))
        }, d.fx.stop = function() {
            e.clearInterval(ut), ut = null
        }, d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, d.fn.delay = function(t, n) {
            return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e, t = r.createElement("input"),
                n = r.createElement("div"),
                i = r.createElement("select"),
                o = i.appendChild(r.createElement("option"));
            (n = r.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", f.getSetAttribute = "t" !== n.className, f.style = /top/.test(e.getAttribute("style")), f.hrefNormalized = "/a" === e.getAttribute("href"), f.checkOn = !!t.value, f.optSelected = o.selected, f.enctype = !!r.createElement("form").enctype, i.disabled = !0, f.optDisabled = !o.disabled, (t = r.createElement("input")).setAttribute("value", ""), f.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), f.radioValue = "t" === t.value
        }();
    var gt = /\r/g,
        mt = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = d.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, d(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : d.isArray(i) && (i = d.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = d.find.attr(e, "value");
                    return null != t ? t : d.trim(d.text(e)).replace(mt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                            if (t = d(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = d.makeArray(t), a = i.length; a--;)
                        if (r = i[a], d.inArray(d.valHooks.option.get(r), o) > -1) try {
                            r.selected = n = !0
                        } catch (e) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(e, t) {
                if (d.isArray(t)) return e.checked = d.inArray(d(e).val(), t) > -1
            }
        }, f.checkOn || (d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var vt, yt, xt = d.expr.attrHandle,
        bt = /^(?:checked|selected)$/i,
        wt = f.getSetAttribute,
        Tt = f.input;
    d.fn.extend({
        attr: function(e, t) {
            return Q(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    }), d.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? yt : vt)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = d.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(H);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = d.propFix[n] || n, d.expr.match.bool.test(n) ? Tt && wt || !bt.test(n) ? e[r] = !1 : e[d.camelCase("default-" + n)] = e[r] = !1 : d.attr(e, n, ""), e.removeAttribute(wt ? n : r)
        }
    }), yt = {
        set: function(e, t, n) {
            return !1 === t ? d.removeAttr(e, n) : Tt && wt || !bt.test(n) ? e.setAttribute(!wt && d.propFix[n] || n, n) : e[d.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = xt[t] || d.find.attr;
        Tt && wt || !bt.test(t) ? xt[t] = function(e, t, r) {
            var i, o;
            return r || (o = xt[t], xt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, xt[t] = o), i
        } : xt[t] = function(e, t, n) {
            if (!n) return e[d.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Tt && wt || (d.attrHooks.value = {
        set: function(e, t, n) {
            if (!d.nodeName(e, "input")) return vt && vt.set(e, t, n);
            e.defaultValue = t
        }
    }), wt || (vt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, xt.id = xt.name = xt.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, d.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: vt.set
    }, d.attrHooks.contenteditable = {
        set: function(e, t, n) {
            vt.set(e, "" !== t && t, n)
        }
    }, d.each(["width", "height"], function(e, t) {
        d.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), f.style || (d.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ct = /^(?:input|select|textarea|button|object)$/i,
        Et = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return Q(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = d.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), d.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && d.isXMLDoc(e) || (t = d.propFix[t] || t, i = d.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = d.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.hrefNormalized || d.each(["href", "src"], function(e, t) {
        d.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), f.optSelected || (d.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    }), f.enctype || (d.propFix.enctype = "encoding");
    var Nt = /[\t\r\n\f]/g;

    function kt(e) {
        return d.attr(e, "class") || ""
    }
    d.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).addClass(e.call(this, t, kt(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; n = this[u++];)
                    if (i = kt(n), r = 1 === n.nodeType && (" " + i + " ").replace(Nt, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = d.trim(r)) && d.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).removeClass(e.call(this, t, kt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; n = this[u++];)
                    if (i = kt(n), r = 1 === n.nodeType && (" " + i + " ").replace(Nt, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = d.trim(r)) && d.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function(n) {
                d(this).toggleClass(e.call(this, n, kt(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = d(this), o = e.match(H) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = kt(this)) && d._data(this, "__className__", t), d.attr(this, "class", t || !1 === e ? "" : d._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + kt(n) + " ").replace(Nt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        d.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var St = e.location,
        At = d.now(),
        Dt = /\?/,
        jt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    d.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = d.trim(t + "");
        return i && !d.trim(i.replace(jt, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : d.error("Invalid JSON: " + t)
    }, d.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n
    };
    var Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        _t = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ot = {},
        Rt = {},
        Pt = "*/".concat("*"),
        Bt = St.href,
        Wt = Mt.exec(Bt.toLowerCase()) || [];

    function It(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(H) || [];
            if (d.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function $t(e, t, n, r) {
        var i = {},
            o = e === Rt;

        function a(s) {
            var u;
            return i[s] = !0, d.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = d.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && d.extend(!0, e, n), e
    }

    function Xt(e) {
        return e.style && e.style.display || d.css(e, "display")
    }
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Bt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, d.ajaxSettings), t) : zt(d.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Rt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, o, a, s, u, l, c, f = d.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? d(p) : d.event,
                g = d.Deferred(),
                m = d.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = qt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return l && l.abort(t), C(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || Bt) + "").replace(Lt, "").replace(Ft, Wt[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = d.trim(f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain && (r = Mt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Wt[1] && r[2] === Wt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Wt[3] || ("http:" === Wt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = d.param(f.data, f.traditional)), $t(Ot, f, n, T), 2 === b) return T;
            for (i in (u = d.event && f.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_t.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Dt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Ht.test(o) ? o.replace(Ht, "$1_=" + At++) : o + (Dt.test(o) ? "&" : "?") + "_=" + At++)), f.ifModified && (d.lastModified[o] && T.setRequestHeader("If-Modified-Since", d.lastModified[o]), d.etag[o] && T.setRequestHeader("If-None-Match", d.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === b)) return T.abort();
            for (i in w = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](f[i]);
            if (l = $t(Rt, f, n, T)) {
                if (T.readyState = 1, u && h.trigger("ajaxSend", [T, f]), 2 === b) return T;
                f.async && f.timeout > 0 && (s = e.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, l.send(y, C)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, r, i) {
                var c, y, x, w, C, E = n;
                2 !== b && (b = 2, s && e.clearTimeout(s), l = void 0, a = i || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in s)
                            if (s[a] && s[a].test(i)) {
                                u.unshift(a);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (a in n) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                o = a;
                                break
                            }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(f, T, r)), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, T, c), c ? (f.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (d.lastModified[o] = C), (C = T.getResponseHeader("etag")) && (d.etag[o] = C)), 204 === t || "HEAD" === f.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state, y = w.data, c = !(x = w.error))) : (x = E, !t && E || (E = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || E) + "", c ? g.resolveWith(p, [y, E, T]) : g.rejectWith(p, [T, E, x]), T.statusCode(v), v = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? y : x]), m.fireWith(p, [T, E]), u && (h.trigger("ajaxComplete", [T, f]), --d.active || d.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return d.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return d.get(e, void 0, t, "script")
        }
    }), d.each(["get", "post"], function(e, t) {
        d[t] = function(e, n, r, i) {
            return d.isFunction(n) && (i = i || r, r = n, n = void 0), d.ajax(d.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, d.isPlainObject(e) && e))
        }
    }), d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, d.fn.extend({
        wrapAll: function(e) {
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = d(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return d.isFunction(e) ? this.each(function(t) {
                d(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = d(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each(function(n) {
                d(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    }), d.expr.filters.hidden = function(e) {
        return f.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
            if (!d.contains(e.ownerDocument || r, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === Xt(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }(e)
    }, d.expr.filters.visible = function(e) {
        return !d.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Yt = /\r?\n/g,
        Jt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;

    function Qt(e, t, n, r) {
        var i;
        if (d.isArray(t)) d.each(t, function(t, i) {
            n || Vt.test(e) ? r(e, i) : Qt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== d.type(t)) r(e, t);
        else
            for (i in t) Qt(e + "[" + i + "]", t[i], n, r)
    }
    d.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = d.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Qt(n, e[n], t, i);
        return r.join("&").replace(Ut, "+")
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && Gt.test(this.nodeName) && !Jt.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = d(this).val();
                return null == n ? null : d.isArray(n) ? d.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yt, "\r\n")
                }
            }).get()
        }
    }), d.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? nn() : r.documentMode > 8 ? tn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && tn() || nn()
    } : tn;
    var Kt = 0,
        Zt = {},
        en = d.ajaxSettings.xhr();

    function tn() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function nn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), f.cors = !!en && "withCredentials" in en, (en = f.ajax = !!en) && d.ajaxTransport(function(t) {
        var n;
        if (!t.crossDomain || f.cors) return {
            send: function(r, i) {
                var o, a = t.xhr(),
                    s = ++Kt;
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) a[o] = t.xhrFields[o];
                for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                a.send(t.hasContent && t.data || null), n = function(e, r) {
                    var o, u, l;
                    if (n && (r || 4 === a.readyState))
                        if (delete Zt[s], n = void 0, a.onreadystatechange = d.noop, r) 4 !== a.readyState && a.abort();
                        else {
                            l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText
                            } catch (e) {
                                u = ""
                            }
                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                        }
                    l && i(o, u, l, a.getAllResponseHeaders())
                }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = Zt[s] = n : n()
            },
            abort: function() {
                n && n(void 0, !0)
            }
        }
    }), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return d.globalEval(e), e
            }
        }
    }), d.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), d.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = r.head || d("head")[0] || r.documentElement;
            return {
                send: function(i, o) {
                    (t = r.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var rn = [],
        on = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || d.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), d.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (on.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(on, "$1" + i) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || d.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? d(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, rn.push(i)), a && d.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), d.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || r;
        var i = T.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = ce([e], t, o), o && o.length && d(o).remove(), d.merge([], i.childNodes))
    };
    var an = d.fn.load;

    function sn(e) {
        return d.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    d.fn.load = function(e, t, n) {
        if ("string" != typeof e && an) return an.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = d.trim(e.slice(s, e.length)), e = e.slice(0, s)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && d.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? d("<div>").append(d.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), d.expr.filters.animated = function(e) {
        return d.grep(d.timers, function(t) {
            return e === t.elem
        }).length
    }, d.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = d.css(e, "position"),
                c = d(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = d.css(e, "top"), u = d.css(e, "left"), ("absolute" === l || "fixed" === l) && d.inArray("auto", [o, u]) > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, d.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                d.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, d.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = sn(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === d.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (n = e.offset()), n.top += d.css(e[0], "borderTopWidth", !0), n.left += d.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - d.css(r, "marginTop", !0),
                    left: t.left - n.left - d.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !d.nodeName(e, "html") && "static" === d.css(e, "position");) e = e.offsetParent;
                return e || Ie
            })
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        d.fn[e] = function(r) {
            return Q(this, function(e, r, i) {
                var o = sn(e);
                if (void 0 === i) return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
                o ? o.scrollTo(n ? d(o).scrollLeft() : i, n ? i : d(o).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), d.each(["top", "left"], function(e, t) {
        d.cssHooks[t] = Ue(f.pixelPosition, function(e, n) {
            if (n) return n = ze(e, t), Be.test(n) ? d(e).position()[t] + "px" : n
        })
    }), d.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            d.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Q(this, function(t, n, r) {
                    var i;
                    return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? d.css(t, n, a) : d.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), d.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), d.fn.size = function() {
        return this.length
    }, d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var un = e.jQuery,
        ln = e.$;
    return d.noConflict = function(t) {
        return e.$ === d && (e.$ = ln), t && e.jQuery === d && (e.jQuery = un), d
    }, t || (e.jQuery = e.$ = d), d
});

function addToFavorite() {
    $(document).on("click", 'input[name="favorite"], [data-attr="favorite"]', function() {
        var e = $(this).attr("data-page-id"),
            t = !1;
        (t = "favorite" === $(this).attr("data-attr") ? $(this).hasClass("checked_heart") : !$(this).prop("checked")) ? $(this).removeClass("checked_heart"): $(this).addClass("checked_heart");
        var o = $('meta[name="csrf-token"]').attr("content");
        $.post("/add-to-favorite", {
            page: e,
            _token: o,
            remove: t
        }, function(e) {
            e.status && ($("#favorite_counter").html(e.count), $("#favorite_counter_small").html(e.count), $("#favorite_counter_my_page").html(e.count))
        })
    })
}

function hideTdo() {
    var e = null,
        t = document.querySelectorAll("#tidio-chat iframe")[0];
    if (t && void 0 !== t) {
        var o = null,
            a = document.querySelector("#tidio-chat iframe").contentDocument.querySelector("a.powered");
        return a && void 0 !== a ? (document.querySelector("#tidio-chat iframe").contentDocument.querySelector("a.powered").remove(), !0) : (null !== o && clearTimeout(o), void(o = setTimeout(hideTdo, 1)))
    }
    return null !== e && clearTimeout(e), void(e = setTimeout(hideTdo, 500))
}
$(function() {
            $(document).on("click", 'a[href*="#"]:not([href="#"])', function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var e = $(this.hash);
                    if ((e = e.length ? e : "").length && "section" === e.prop("tagName").toLowerCase()) return $("html, body").animate({
                        scrollTop: e.offset().top
                    }, 1e3), $(this).closest("li").hasClass("in-page-nav") && (console.log("active"), $(".in-page-nav").removeClass("active"), $(this).closest("li").addClass("active")), !1
                }
            });
            $(".covid-19 .close").on("click", function(e) {
                e.preventDefault();
                $(this).closest("div").fadeOut()
            });
            $("table").each(function(e, t) {
                t.outerHTML = '<div style="overflow:auto">' + t.outerHTML + "</div>"
            }), hideTdo(), setInterval(hideTdo, 10), $(document).ready(function() {
                $(".form_action").on("submit", function(e) {
                    e.preventDefault();
                    var $button = $(this).find(".form_submit"),
                        $form = $(this);
                    if ($form.attr("request") != true) {
                        $form.attr("request", true);
                        $form.prev(".forsm_response").html("");
                        $form.find(".error").removeClass("error");
                        $button.addClass("sended_button");
                        $button.attr("disabled", "disabled");
                        grecaptcha.execute($('meta[name="g-token"]').attr("content"), {
                            action: "form_submit_" + $form.attr("data-id")
                        }).then(function(token) {
                            $(".form_" + $form.attr("data-id") + ' [name="g_token"]').val(token);
                            $form.find(":required").each(function(e) {
                                "function" != typeof e.checkValidity || e.checkValidity() || ($(e).addClass("error"), a = !1)
                            });
                            var formData = new FormData($form[0]);
                            $.ajax({
                                type: "POST",
                                data: formData,
                                dataType: "json",
                                url: $form.attr("action"),
                                processData: false,
                                contentType: false,
                                success: function(e) {
                                    $button.removeClass("sended_button").removeAttr("disabled");
                                    $form.closest("div").find(".form_response,.form_message").html(e.form_save.message).fadeIn();
                                    setTimeout(function() {
                                        $form.closest("div").find(".form_response,.form_message").html("").fadeOut(2500)
                                    }, 2500);
                                    $form.get(0).reset();
                                    $form.find(".error").removeClass("error");
                                    $form.attr("request", false)
                                }
                            })
                        })
                    }
                });
                $(document).on("click", ".publication_download", function(e) {
                    e.preventDefault(), $(this).addClass("sended_button").attr("disabled", "disabled");
                    var t = $(this).closest("form");
                    if (t.find('input[name="email"]').removeClass("error"), "" == t.find('input[name="email"]').val().trim() && $('input[name="download"]:checked').val() == "email") return $(this).removeClass("sended_button").removeAttr("disabled"), void t.find('input[name="email"]').addClass("error");
                    $.get("/", $(this).closest(".form_action").serialize(), function(e, o, a) {
                        if ("download" === e.type) {
                            var i = document.createElement("a");
                            i.href = e.result, i.target = "_blank", i.download = e.result, i.click()
                        }
                        $(".publication_download").removeClass("sended_button").removeAttr("disabled"), $.fancybox.close(), grecaptcha.execute(window.g_token, {
                            action: "form_submit_" + t.attr("data-id")
                        }).then(function(e) {
                            $(".form_" + t.attr("data-id") + ' [name="g_token"]').val(e)
                        })
                    })
                });
                addToFavorite();
                var e = [];
                $("#personalize").on("click", function() {
                    $(this).attr("disabled", "disabled"), $(this).addClass("sended_button");
                    var t = $(".range-slider");
                    e = [];
                    for (var o = 0; o < t.length; o++) {
                        var a = $(t[o]);
                        e.push({
                            category: $(a).attr("data-category"),
                            range: $(a).slider("value")
                        })
                    }
                    $.get("/experiences-filter/grid", {
                        filter: e
                    }, function(e) {
                        $(".isotope-item.experience").remove();
                        var t = $("section.isotope-grid"),
                            o = $(e.view);
                        $(o).css("display", "none"), t.append(o), $(o).fadeIn("slow"), t.isotope("destroy"), t.imagesLoaded(function() {
                            $("#personalize").removeAttr("disabled"), $("#personalize").removeClass("sended_button"), t.isotope({
                                itemSelector: ".isotope-item",
                                layoutMode: "masonry",
                                animationEngine: "jquery",
                                percentPosition: !0,
                                masonry: {
                                    columnWidth: ".grid-sizer"
                                }
                            })
                        })
                    })
                })
            });
    
    var $ = jQuery.noConflict();
let tooltip = $("#map__tooltip");

function show_map_info(t) {
    let e = t,
        i = e.offset().left,
        s = e.offset().top,
        n = e.closest(".active");
    $(window).width() > 991 && tooltip.css({
        left: i,
        top: s - 100
    }), $("#tooltip_title").html(e.data("name")), $("#tooltip_content").html(e.data("content")), $("#tooltip_url").attr("href", e.data("url")), $("#tooltip_url2").attr("href", e.data("url")), $("#tooltip_image").attr("src", e.data("image")), $(".map .active").not(n).removeClass("selected"), tooltip.addClass("open"), n.addClass("selected")
}

function onTidioChatApiReady() {
    window.tidioChatApi.hide(), window.tidioChatApi.on("close", (function() {
        window.tidioChatApi.hide(), $(".chat-bot").show()
    }))
}

function getDate(t) {
    var e;
    try {
        e = $.datepicker.parseDate(dateFormat, t.value)
    } catch (t) {
        e = null
    }
    return e
}

function initJqueryUI() {
    $(".accordion").accordion({
        active: !1,
        collapsible: !0,
        header: ".opener",
        heightStyle: "content"
    }), $(".booking-tabs").tabs(), $(document).on("click", ".custom-tabs a:not(.external-link)", (function(t) {
        t.preventDefault();
        var e = $(this),
            i = e.closest(".custom-tabs"),
            s = $(".tabs-holder", i),
            n = e.attr("href");
        $(".tab.display", s).removeClass("display"), e.closest("ul").find(".active").removeClass("active"), $(n).addClass("display"), e.parent().addClass("active")
    }))
}
/*! jQuery UI - v1.12.1 - 2019-10-31
 * http://jqueryui.com
 * Includes: widget.js, keycode.js, unique-id.js, widgets/accordion.js, widgets/datepicker.js, widgets/mouse.js, widgets/slider.js, widgets/tabs.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
function initSlick() {
    if ($(".banners").length) $(".banners").slick({
        autoplay: !0,
        nextArrow: !1,
        prevArrow: !1,
        autoplaySpeed: 4e3,
        dots: !0
    });
    $(".intro_sliders").length && $(".intro_sliders").each((function(t, e) {
        if ($(e).children().length <= 1) return;
        let i = $(e);
        var s = i.slick({
            autoplay: !0,
            nextArrow: !1,
            prevArrow: !1,
            autoplaySpeed: 4e3,
            dots: !0
        });
        $(window).width() > 700 && (i.find(".pre-title").addClass("animated fadeInUp"), i.find("h1").addClass("animated fadeInUp"), i.find(".subtitle").addClass("animated fadeInUp"), i.find(".button").addClass("animated fadeInUp"), i.find("video").length && (i.find(".section-intro").length > 1 ? i.find("video")[1].play() : i.find("video")[0].play()), s.on("beforeChange", (function(t, e, s) {
            i.find(".pre-title").removeClass("animated fadeInUp"), i.find("h1").removeClass("animated fadeInUp"), i.find(".subtitle").removeClass("animated fadeInUp"), i.find(".button").removeClass("animated fadeInUp"), $(e.$slides.get(s)).find("video").length > 0 && ($(e.$slides.get(s)).find("video").get(0).pause(), $(e.$slides.get(s)).find("video").get(0).currentTime = 0)
        })), s.on("afterChange", (function(t, e, s) {
            i.find(".slick-current.slick-active  .pre-title").addClass("animated fadeInUp"), i.find(".slick-current.slick-active  h1").addClass("animated fadeInUp"), i.find(".slick-current.slick-active  .subtitle").addClass("animated fadeInUp"), i.find(".slick-current.slick-active  .button").addClass("animated fadeInUp"), $(e.$slides.get(s)).find("video").length > 0 && $(e.$slides.get(s)).find("video").get(0).play()
        })))
    })), $(".sl").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
        nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoWidth: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: !1,
                speed: 100,
                dots: !0,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".sl").on("afterChange", (function(t, e, i, s) {
        $(".slick-slide").find(".thumbnail-info").removeClass("hovered"), $(".slick-current").find(".thumbnail-info").addClass("hovered")
    })), $(".sl-tours").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
        nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".slick-slider-col-3").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
        nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: !1,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".slick-slider-col-4").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
        nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: !1,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".slick-slider-col-2").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
        nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    var t = $(".slider-status-info");
    $(".slick-slider-3d").on("init reInit afterChange", (function(e, i, s, n) {
        var o = (s || 0) + 1;
        t.text(o + "/" + i.slideCount)
    })), $(".slick-slider-3d .slider-for").slick({
        arrows: !1,
        fade: !0,
        adaptiveHeight: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slick-slider-3d .slider-nav"
    }), $(".slick-slider-3d .slider-nav").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-arrow-circle-left">Previous</button>',
        nextArrow: '<button type="button" class="slick-next far fa-arrow-circle-right">Next</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slick-slider-3d .slider-for",
        customPaging: function(t, e) {
            return t.slickCurrentSlide + "/" + (e + 1)
        }
    }), ResponsiveHelper.addRange({
        "..768": {
            on: function() {
                $(".to-slider-on-mobile").slick({
                    infinite: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                })
            },
            off: function() {
                $(".to-slider-on-mobile").slick("unslick")
            }
        }
    }), $(".media-slider .slider-for").slick({
        prevArrow: '<button type="button" class="slick-prev far fa-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next far fa-chevron-right"></button>',
        fade: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".media-slider .slider-nav"
    }), $(".media-slider .slider-nav").slick({
        arrows: !1,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".media-slider .slider-for",
        focusOnSelect: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    })
}

function initIsotope() {
    ResponsiveHelper.addRange({
        "1500..": {
            on: function() {
                $(".isotope-grid").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "masonry",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".grid-sizer"
                    }
                })
            },
            off: function() {
                $(".isotope-grid").isotope("destroy")
            }
        }
    })
}
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
function initCustomForms() {
    jcf.setOptions("Select", {
        wrapNative: !1,
        fakeDropInBody: !1
    }), jcf.replaceAll(), jcf.destroy('.flatpickr-monthDropdown-months')
}
/*!
 * JavaScript Custom Forms
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.1.3
 */
function initMobileNav() {
    jQuery("body").mobileNav({
        menuActiveClass: "nav-active",
        menuOpener: ".nav-opener",
        hideOnClickOutside: !0,
        menuDrop: ".mobile-menu-holder"
    })
}

function initPopups() {
    ResponsiveHelper.addRange({
        "..768": {
            on: function() {
                jQuery(".popup-holder").contentPopup({
                    mode: "click",
                    btnOpen: ".popup-opener"
                })
            },
            off: function() {
                jQuery(".popup-holder").contentPopup("destroy")
            }
        }
    }), jQuery(".booking-popup-holder").contentPopup({
        mode: "click",
        btnOpen: ".popup-opener"
    }), jQuery(".info-popup").contentPopup({
        mode: "click",
        btnOpen: ".popup-opener",
        popup: ".popup-holder"
    })
}
$(".pin").click((function() {
        show_map_info($(this))
    })), $(document).click((function(t) {
        var e = t.target;
        $(e).is(".map__block") || $(e).parents().is(".map__block") || tooltip.hasClass("open") && (tooltip.removeClass("open"), $(".map .active").removeClass("selected"))
    })), $(".map__tooltip__close").click((function() {
        tooltip.removeClass("open"), $(".map .active").removeClass("selected")
    })), jQuery(window).on("load", (function() {
        initSlick(), initIsotope(), initPopups(), initMobileNav(), initFitVids(), initAnchors(), initJqueryUI(), initFancyBox(), initCustomForms(), $(document).on("mouseover", ".main-nav-drop>ul>li", (function() {
            $(".main-nav-drop>ul>li").removeClass("active"), $(this).addClass("active")
        })), $(".section-map").length && $(".section-map").map((function() {
            id = $(".map-aside ul li:first a", this).data("poi-id"), id && gmap($(".map-holder", this).attr("id"), $map_json_data[id])
        })), $("#desktop-nav > .nav > li > a").click((function(t) {
            var e = $(this).parent().find(".sub-menu");
            if (e.length) {
                t.preventDefault();
                var i = e.hasClass("open");
                $("#desktop-nav .sub-menu.open").removeClass("open"), i ? e.removeClass("open") : e.addClass("open"), $(".search-popup-opener").find(".icon").removeClass("fa-times").addClass("fa-search"), $(".search-popup-opener").removeClass("opened_opened"), $(".search-popup-holder .popups").fadeOut()
            }
        })), $(".custom_picker").datepicker();
        var t = "dd/mm/yy",
            e = $("#from").datepicker({
                changeMonth: !1,
                dateFormat: t,
                minDate: 0,
                showOtherMonths: !0
            }).on("change", (function() {
                i.datepicker("option", "minDate", getDate(this))
            })),
            i = $("#to").datepicker({
                changeMonth: !1,
                dateFormat: t,
                minDate: 0,
                showOtherMonths: !0
            }).on("change", (function() {
                e.datepicker("option", "maxDate", getDate(this))
            }));
        (window, document, "script", "dataLayer")
    })), document.tidioChatLang = document.querySelector("html").getAttribute("lang"), window.tidioChatApi ? window.tidioChatApi.on("ready", onTidioChatApiReady) : document.addEventListener("tidioChat-ready", onTidioChatApiReady), document.querySelector(".chat-bot") && document.querySelector(".chat-bot").addEventListener("click", (function() {
        window.tidioChatApi.show(), window.tidioChatApi.open(), $(".chat-bot").hide()
    })),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }((function(t) {
        t.ui = t.ui || {};
        t.ui.version = "1.12.1";
        /*!
         * jQuery UI Widget 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        var e, i = 0,
            s = Array.prototype.slice;
        t.cleanData = (e = t.cleanData, function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
            } catch (t) {}
            e(i)
        }), t.widget = function(e, i, s) {
            var n, o, a, r = {},
                l = e.split(".")[0],
                c = l + "-" + (e = e.split(".")[1]);
            return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][c.toLowerCase()] = function(e) {
                return !!t.data(e, c)
            }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
                if (!this._createWidget) return new o(t, e);
                arguments.length && this._createWidget(t, e)
            }, t.extend(o, n, {
                version: s.version,
                _proto: t.extend({}, s),
                _childConstructors: []
            }), (a = new i).options = t.widget.extend({}, a.options), t.each(s, (function(e, s) {
                t.isFunction(s) ? r[e] = function() {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function n(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }() : r[e] = s
            })), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: n && a.widgetEventPrefix || e
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: c
            }), n ? (t.each(n._childConstructors, (function(e, i) {
                var s = i.prototype;
                t.widget(s.namespace + "." + s.widgetName, o, i._proto)
            })), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, n, o = s.call(arguments, 1), a = 0, r = o.length; a < r; a++)
                for (i in o[a]) n = o[a][i], o[a].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
            return e
        }, t.widget.bridge = function(e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(o) {
                var a = "string" == typeof o,
                    r = s.call(arguments, 1),
                    l = this;
                return a ? this.length || "instance" !== o ? this.each((function() {
                    var i, s = t.data(this, n);
                    return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r)) !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                })) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each((function() {
                    var e = t.data(this, n);
                    e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this))
                }))), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, s) {
                s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === s && this.destroy()
                    }
                }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                    e._removeClass(i, t)
                })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var s, n, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                        n[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function(e) {
                var i, s, n;
                for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(e) {
                var i = [],
                    s = this;

                function n(n, o) {
                    var a, r;
                    for (r = 0; r < n.length; r++) a = s.classesElementLookup[n[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), s.classesElementLookup[n[r]] = a, i.push(n[r]), o && e.classes[n[r]] && i.push(e.classes[n[r]])
                }
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, (function(s, n) {
                    -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
                }))
            },
            _removeClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function(t, e, i, s) {
                s = "boolean" == typeof s ? s : i;
                var n = "string" == typeof t || null === t,
                    o = {
                        extra: n ? e : i,
                        keys: n ? t : e,
                        element: n ? this.element : t,
                        add: s
                    };
                return o.element.toggleClass(this._classes(o), s), this
            },
            _on: function(e, i, s) {
                var n, o = this;
                "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, (function(s, a) {
                    function r() {
                        if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = s.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        d = l[2];
                    d ? n.on(c, d, r) : i.on(c, r)
                }))
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                var i = this;
                return setTimeout((function() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }), e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, s) {
                var n, o, a = this.options[e];
                if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (n in o) n in i || (i[n] = o[n]);
                return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, (function(e, i) {
            t.Widget.prototype["_" + e] = function(s, n, o) {
                var a;
                "string" == typeof n && (n = {
                    effect: n
                });
                var r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                "number" == typeof(n = n || {}) && (n = {
                    duration: n
                }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue((function(i) {
                    t(this)[e](), o && o.call(s[0]), i()
                }))
            }
        }));
        var n, o;
        /*!
         * jQuery UI Keycode 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        t.widget, t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, t.fn.extend({
            uniqueId: (n = 0, function() {
                return this.each((function() {
                    this.id || (this.id = "ui-id-" + ++n)
                }))
            }),
            removeUniqueId: function() {
                return this.each((function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                }))
            }
        }), t.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e, i, s = this.options.icons;
                s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[s - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var e = this.options;
                this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var e, i = this.options,
                    s = i.heightStyle,
                    n = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each((function() {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        s = e.next(),
                        n = s.uniqueId().attr("id");
                    e.attr("aria-controls", n), s.attr("aria-labelledby", i)
                })).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each((function() {
                    var i = t(this),
                        s = i.css("position");
                    "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
                })), this.headers.each((function() {
                    e -= t(this).outerHeight(!0)
                })), this.headers.next().each((function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                })).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each((function() {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                })).height(e))
            },
            _activate: function(e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function(e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), (function(t, e) {
                    i[e] = "_eventHandler"
                })), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(e) {
                var i, s, n = this.options,
                    o = this.active,
                    a = t(e.currentTarget),
                    r = a[0] === o[0],
                    l = r && n.collapsible,
                    c = l ? t() : a.next(),
                    d = o.next(),
                    h = {
                        oldHeader: o,
                        oldPanel: d,
                        newHeader: l ? t() : a,
                        newPanel: c
                    };
                e.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", e, h) || (n.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(h), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel,
                    s = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                    "aria-hidden": "true"
                }), s.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && s.length ? s.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter((function() {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                })).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, e, i) {
                var s, n, o, a = this,
                    r = 0,
                    l = t.css("box-sizing"),
                    c = t.length && (!e.length || t.index() < e.index()),
                    d = this.options.animate || {},
                    h = c && d.down || d,
                    u = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof h && (o = h), "string" == typeof h && (n = h), n = n || h.easing || d.easing, o = o || h.duration || d.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: n,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: n,
                    complete: u,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, n, u) : t.animate(this.showProps, o, n, u)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        });

        function a() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = r(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function r(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, (function() {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            })).on("mouseover", i, l)
        }

        function l() {
            t.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function c(e, i) {
            for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]);
            return e
        }
        /*!
         * jQuery UI Datepicker 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        t.extend(t.ui, {
            datepicker: {
                version: "1.12.1"
            }
        }), t.extend(a.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return c(this._defaults, t || {}), this
            },
            _attachDatepicker: function(e, i) {
                var s, n, o;
                n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
            },
            _newInst: function(e, i) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? r(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var s = t(e);
                i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var s, n, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), "focus" !== (s = this._get(i, "showOn")) && "both" !== s || e.on("focus", this._showDatepicker), "button" !== s && "both" !== s || (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: n,
                    title: n
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: n,
                    title: n
                }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", (function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                })))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, s, n, o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) && (e = function(t) {
                        for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                        return s
                    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var s = t(e);
                s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, s, n, o) {
                var a, r, l, d, h, u = this._dialogInst;
                return u || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", u)), c(u.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (r = document.documentElement.clientWidth, l = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + d, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", u), this
            },
            _destroyDatepicker: function(e) {
                var i, s = t(e),
                    n = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || s.removeClass(this.markerClassName).empty(), o === n && (o = null))
            },
            _enableDatepicker: function(e) {
                var i, s, n = t(e),
                    o = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each((function() {
                    this.disabled = !1
                })).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== i && "span" !== i || ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, (function(t) {
                    return t === e ? null : t
                })))
            },
            _disableDatepicker: function(e) {
                var i, s, n = t(e),
                    o = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each((function() {
                    this.disabled = !0
                })).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== i && "span" !== i || ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, (function(t) {
                    return t === e ? null : t
                })), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return t.data(e, "datepicker")
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, i, s) {
                var n, o, a, r, l = this._getInst(e);
                if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null;
                n = i || {}, "string" == typeof i && ((n = {})[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(l, "min"), r = this._getMinMaxDate(l, "max"), c(l.settings, n), null !== a && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, a)), null !== r && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, r)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var i, s, n, o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), a = !1;
                        break;
                    case 13:
                        return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        a = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
                a && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, s, n = t.datepicker._getInst(e.target);
                if (t.datepicker._get(n, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
            },
            _doKeyUp: function(e) {
                var i = t.datepicker._getInst(e.target);
                if (i.input.val() !== i.lastVal) try {
                    t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
                } catch (t) {}
                return !0
            },
            _showDatepicker: function(e) {
                var i, s, n, o, a, r, l;
                ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (c(i.settings, n), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each((function() {
                    return !(o |= "fixed" === t(this).css("position"))
                })), a = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, o), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), i.inline || (r = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) {
                    for (var e, i; t.length && t[0] !== document;) {
                        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                        t = t.parent()
                    }
                    return 0
                }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[r] ? i.dpDiv.show(r, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[r || "show"](r ? l : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, s = this._getNumberOfMonths(e),
                    n = s[1],
                    a = e.dpDiv.find("." + this._dayOverClass + " a");
                a.length > 0 && l.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout((function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }), 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, s) {
                var n = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                    c = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function(e) {
                for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
                return [(i = t(e).offset()).left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, s, n, o, a = this._curInst;
                !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
                    t.datepicker._tidyDialog(a)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        s = t.datepicker._getInst(i[0]);
                    (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, s) {
                var n = t(e),
                    o = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
            },
            _gotoToday: function(e) {
                var i, s = t(e),
                    n = this._getInst(s[0]);
                this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
            },
            _selectMonthYear: function(e, i, s) {
                var n = t(e),
                    o = this._getInst(n[0]);
                o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
            },
            _selectDay: function(e, i, s, n) {
                var o, a = t(e);
                t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var s, n = t(e),
                    o = this._getInst(n[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, s, n, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, s) {
                if (null == e || null == i) throw "Invalid arguments";
                if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null;
                var n, o, a, r, l = 0,
                    c = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    d = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                    h = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                    u = (s ? s.dayNames : null) || this._defaults.dayNames,
                    p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (s ? s.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    y = -1,
                    b = !1,
                    w = function(t) {
                        var i = n + 1 < e.length && e.charAt(n + 1) === t;
                        return i && n++, i
                    },
                    k = function(t) {
                        var e = w(t),
                            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            n = new RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"),
                            o = i.substring(l).match(n);
                        if (!o) throw "Missing number at position " + l;
                        return l += o[0].length, parseInt(o[0], 10)
                    },
                    _ = function(e, s, n) {
                        var o = -1,
                            a = t.map(w(e) ? n : s, (function(t, e) {
                                return [
                                    [e, t]
                                ]
                            })).sort((function(t, e) {
                                return -(t[1].length - e[1].length)
                            }));
                        if (t.each(a, (function(t, e) {
                                var s = e[1];
                                if (i.substr(l, s.length).toLowerCase() === s.toLowerCase()) return o = e[0], l += s.length, !1
                            })), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    x = function() {
                        if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (n = 0; n < e.length; n++)
                    if (b) "'" !== e.charAt(n) || w("'") ? x() : b = !1;
                    else switch (e.charAt(n)) {
                        case "d":
                            v = k("d");
                            break;
                        case "D":
                            _("D", h, u);
                            break;
                        case "o":
                            y = k("o");
                            break;
                        case "m":
                            m = k("m");
                            break;
                        case "M":
                            m = _("M", p, f);
                            break;
                        case "y":
                            g = k("y");
                            break;
                        case "@":
                            g = (r = new Date(k("@"))).getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            g = (r = new Date((k("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            w("'") ? x() : b = !0;
                            break;
                        default:
                            x()
                    }
                    if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= d ? 0 : -100)), y > -1)
                    for (m = 1, v = y;;) {
                        if (v <= (o = this._getDaysInMonth(g, m - 1))) break;
                        m++, v -= o
                    }
                if ((r = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
                return r
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = s + 1 < t.length && t.charAt(s + 1) === e;
                        return i && s++, i
                    },
                    c = function(t, e, i) {
                        var s = "" + e;
                        if (l(t))
                            for (; s.length < i;) s = "0" + s;
                        return s
                    },
                    d = function(t, e, i, s) {
                        return l(t) ? s[e] : i[e]
                    },
                    h = "",
                    u = !1;
                if (e)
                    for (s = 0; s < t.length; s++)
                        if (u) "'" !== t.charAt(s) || l("'") ? h += t.charAt(s) : u = !1;
                        else switch (t.charAt(s)) {
                            case "d":
                                h += c("d", e.getDate(), 2);
                                break;
                            case "D":
                                h += d("D", e.getDay(), n, o);
                                break;
                            case "o":
                                h += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                h += c("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                h += d("M", e.getMonth(), a, r);
                                break;
                            case "y":
                                h += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                                break;
                            case "@":
                                h += e.getTime();
                                break;
                            case "!":
                                h += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? h += "'" : u = !0;
                                break;
                            default:
                                h += t.charAt(s)
                        }
                        return h
            },
            _possibleChars: function(t) {
                var e, i = "",
                    s = !1,
                    n = function(i) {
                        var s = e + 1 < t.length && t.charAt(e + 1) === i;
                        return s && e++, s
                    };
                for (e = 0; e < t.length; e++)
                    if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? i += "'" : s = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                    return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        s = t.lastVal = t.input ? t.input.val() : null,
                        n = this._getDefaultDate(t),
                        o = n,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, s, a) || n
                    } catch (t) {
                        s = e ? "" : s
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, s) {
                var n = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (t) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o))
                        }
                        l = r.exec(i)
                    }
                    return new Date(n, o, a)
                }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                }(i) : new Date(i.getTime());
                return (n = n && "Invalid Date" === n.toString() ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var s = !e,
                    n = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths"),
                    s = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map((function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(s, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(s, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(s)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(s, this, "M"), !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(s, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                }))
            },
            _generateHTML: function(t) {
                var e, i, s, n, o, a, r, l, c, d, h, u, p, f, g, m, v, y, b, w, k, _, x, C, S, T, D, $, E, M, I, A, P, O, z, j, F, H, L, N = new Date,
                    R = this._daylightSavingAdjust(new Date(N.getFullYear(), N.getMonth(), N.getDate())),
                    W = this._get(t, "isRTL"),
                    Y = this._get(t, "showButtonPanel"),
                    B = this._get(t, "hideIfNoPrevNext"),
                    q = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    K = this._get(t, "showCurrentAtPos"),
                    V = this._get(t, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - K,
                    tt = t.drawYear;
                if (J < 0 && (J += 12, tt--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = G && e < G ? G : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) --J < 0 && (J = 11, tt--);
                for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + V, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? Q : R, a = q ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = Y ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (W ? "" : l) + "</div>" : "", d = parseInt(this._get(t, "firstDay"), 10), d = isNaN(d) ? 0 : d, h = this._get(t, "showWeek"), u = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), w = "", _ = 0; _ < U[0]; _++) {
                    for (x = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                        if (S = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), T = " ui-corner-all", D = "", X) {
                            if (D += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                                case 0:
                                    D += " ui-datepicker-group-first", T = " ui-corner-" + (W ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    D += " ui-datepicker-group-last", T = " ui-corner-" + (W ? "left" : "right");
                                    break;
                                default:
                                    D += " ui-datepicker-group-middle", T = ""
                            }
                            D += "'>"
                        }
                        for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === _ ? W ? o : s : "") + (/all|right/.test(T) && 0 === _ ? W ? s : o : "") + this._generateMonthYearHeader(t, J, tt, G, Z, _ > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", $ = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", k = 0; k < 7; k++) $ += "<th scope='col'" + ((k + d + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[E = (k + d) % 7] + "'>" + p[E] + "</span></th>";
                        for (D += $ + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), I = (this._getFirstDayOfMonth(tt, J) - d + 7) % 7, A = Math.ceil((I + M) / 7), P = X && this.maxRows > A ? this.maxRows : A, this.maxRows = P, O = this._daylightSavingAdjust(new Date(tt, J, 1 - I)), z = 0; z < P; z++) {
                            for (D += "<tr>", j = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(O) + "</td>" : "", k = 0; k < 7; k++) F = m ? m.apply(t.input ? t.input[0] : null, [O]) : [!0, ""], L = (H = O.getMonth() !== J) && !y || !F[0] || G && O < G || Z && O > Z, j += "<td class='" + ((k + d + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (O.getTime() === S.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === O.getTime() && b.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !v ? "" : " " + F[1] + (O.getTime() === Q.getTime() ? " " + this._currentClass : "") + (O.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (H && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === R.getTime() ? " ui-state-highlight" : "") + (O.getTime() === Q.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                            D += j + "</tr>"
                        }++J > 11 && (J = 0, tt++), x += D += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    w += x
                }
                return w += c, t._keyEvent = !1, w
            },
            _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
                var l, c, d, h, u, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    y = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    w = "";
                if (o || !m) w += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = s && s.getFullYear() === i, c = n && n.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", d = 0; d < 12; d++)(!l || d >= s.getMonth()) && (!c || d <= n.getMonth()) && (w += "<option value='" + d + "'" + (d === e ? " selected='selected'" : "") + ">" + r[d] + "</option>");
                    w += "</select>"
                }
                if (y || (b += w + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (h = this._get(t, "yearRange").split(":"), u = (new Date).getFullYear(), p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? u : e
                            }, f = p(h[0]), g = Math.max(f, p(h[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"), y && (b += (!o && m && v ? "" : "&#xa0;") + w), b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var s = t.selectedYear + ("Y" === i ? e : 0),
                    n = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    s = this._getMinMaxDate(t, "max"),
                    n = i && e < i ? i : e;
                return s && n > s ? s : n
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, s) {
                var n = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, s, n = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, s) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function(e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each((function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            })) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new a, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1";
        t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var d = !1;
        t(document).on("mouseup", (function() {
            d = !1
        }));
        var h, u;
        /*!
         * jQuery UI Slider 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, (function(t) {
                    return e._mouseDown(t)
                })).on("click." + this.widgetName, (function(i) {
                    if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                })), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!d) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        s = 1 === e.which,
                        n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                        i.mouseDelayMet = !0
                    }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return i._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), d = !0, !0))
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, d = !1, e.preventDefault()
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, i, s = this.options,
                    n = this.element.find(".ui-slider-handle"),
                    o = [];
                for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) o.push("<span tabindex='0'></span>");
                this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function(e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                }))
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, s, n, o, a, r, l, c = this,
                    d = this.options;
                return !d.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each((function(e) {
                    var i = Math.abs(s - c.values(e));
                    (n > i || n === i && (e === c._lastChangedValue || c.values(e) === d.min)) && (n = i, o = t(this), a = e)
                })), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - r.left - o.width() / 2,
                    top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
            },
            _uiHash: function(t, e, i) {
                var s = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, i) {
                var s, n = this.value(),
                    o = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var s, n, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var s, n = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, i, s, n, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    c = !this._animateOff && r.animate,
                    d = {};
                this._hasMultipleValues() ? this.handles.each((function(s) {
                    i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, d["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](d, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === s && l.range[c ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === s && l.range[c ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                })) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, d["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](d, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, r.animate))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                    }
                    switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + n);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - n)
                    }
                    this._slide(e, o, s)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.ui.escapeSelector = (h = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function(t) {
            return t.replace(h, "\\$1")
        }), t.ui.safeActiveElement = function(t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e
        };
        /*!
         * jQuery UI Tabs 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: (u = /#.*$/, function(t) {
                var e, i;
                e = t.href.replace(u, ""), i = location.href.replace(u, "");
                try {
                    e = decodeURIComponent(e)
                } catch (t) {}
                try {
                    i = decodeURIComponent(i)
                } catch (t) {}
                return t.hash.length > 1 && e === i
            }),
            _create: function() {
                var e = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), (function(t) {
                    return e.tabs.index(t)
                })))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    s = location.hash.substring(1);
                return null === e && (s && this.tabs.each((function(i, n) {
                    if (t(n).attr("aria-controls") === s) return e = i, !1
                })), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && -1 !== e || (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    s = this.tabs.index(i),
                    n = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            s++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            n = !1, s--;
                            break;
                        case t.ui.keyCode.END:
                            s = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            s = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay((function() {
                        this.option("active", s)
                    }), this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                var s = this.tabs.length - 1;
                for (; - 1 !== t.inArray((e > s && (e = 0), e < 0 && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function(t, e) {
                "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e)
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), (function(t) {
                    return i.index(t)
                })), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    s = this.anchors,
                    n = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", (function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                })).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                })), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map((function() {
                    return t("a", this)[0]
                })).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each((function(i, s) {
                    var n, o, a, r = t(s).uniqueId().attr("id"),
                        l = t(s).closest("li"),
                        c = l.attr("aria-controls");
                    e._isLocal(s) ? (a = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (a = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                })), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function(e) {
                var i, s, n;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), (function(t, e) {
                    i[e] = "_eventHandler"
                })), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, s = this.element.parent();
                "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each((function() {
                    var e = t(this),
                        s = e.css("position");
                    "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
                })), this.element.children().not(this.panels).each((function() {
                    i -= t(this).outerHeight(!0)
                })), this.panels.each((function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                })).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each((function() {
                    i = Math.max(i, t(this).height("").height())
                })).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    s = this.active,
                    n = t(e.currentTarget).closest("li"),
                    o = n[0] === s[0],
                    a = o && i.collapsible,
                    r = a ? t() : this._getPanelForTab(n),
                    l = s.length ? this._getPanelForTab(s) : t(),
                    c = {
                        oldTab: s,
                        oldPanel: l,
                        newTab: a ? t() : n,
                        newPanel: r
                    };
                e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !a && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, c))
            },
            _toggle: function(e, i) {
                var s = this,
                    n = i.newPanel,
                    o = i.oldPanel;

                function a() {
                    s.running = !1, s._trigger("activate", e, i)
                }

                function r() {
                    s._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.length && s.options.show ? s._show(n, s.options.show, a) : (n.show(), a())
                }
                this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, (function() {
                    s._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r()
                })) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), r()), o.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), n.length && o.length ? i.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter((function() {
                    return 0 === t(this).attr("tabIndex")
                })).attr("tabIndex", -1), n.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, s = this._findActive(e);
                s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function(e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each((function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                })), this.tabs.each((function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                })), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, (function(t) {
                    return t !== e ? t : null
                })) : t.map(this.tabs, (function(t, i) {
                    return i !== e ? i : null
                }))), this._setOptionDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var s = this,
                    n = this.tabs.eq(e),
                    o = n.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(n),
                    r = {
                        tab: n,
                        panel: a
                    },
                    l = function(t, e) {
                        "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done((function(t, e, n) {
                    setTimeout((function() {
                        a.html(t), s._trigger("load", i, r), l(n, e)
                    }), 1)
                })).fail((function(t, e) {
                    setTimeout((function() {
                        l(t, e)
                    }), 1)
                }))))
            },
            _ajaxSettings: function(e, i, s) {
                var n = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""),
                    beforeSend: function(e, o) {
                        return n._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, s))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        });
        t.ui.tabs
    })),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }((function(t) {
        "use strict";
        var e, i = window.Slick || {};
        e = 0, (i = function(i, s) {
            var n, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = t(i).data("slick") || {}, o.options = t.extend({}, o.defaults, s, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, i.prototype.addSlide = i.prototype.slickAdd = function(e, i, s) {
            var n = this;
            if ("boolean" == typeof i) s = i, i = null;
            else if (i < 0 || i >= n.slideCount) return !1;
            n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === s ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each((function(e, i) {
                t(i).attr("data-slick-index", e)
            })), n.$slidesCache = n.$slides, n.reinit()
        }, i.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, i.prototype.animateSlide = function(e, i) {
            var s = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === n.options.vertical ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout((function() {
                n.disableTransition(), i.call()
            }), n.options.speed))
        }, i.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = t(e).not(this.$slider)), e
        }, i.prototype.asNavFor = function(e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each((function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            }))
        }, i.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, i.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, i.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, i.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, i.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, i.prototype.buildDots = function() {
            var e, i, s = this;
            if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
                for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
                s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
            }
        }, i.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, i.prototype.buildRows = function() {
            var t, e, i, s, n, o, a, r = this;
            if (s = document.createDocumentFragment(), o = r.$slider.children(), r.options.rows > 0) {
                for (a = r.options.slidesPerRow * r.options.rows, n = Math.ceil(o.length / a), t = 0; t < n; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < r.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < r.options.slidesPerRow; i++) {
                            var d = t * a + (e * r.options.slidesPerRow + i);
                            o.get(d) && c.appendChild(o.get(d))
                        }
                        l.appendChild(c)
                    }
                    s.appendChild(l)
                }
                r.$slider.empty().append(s), r.$slider.children().children().children().css({
                    width: 100 / r.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, i.prototype.checkResponsive = function(e, i) {
            var s, n, o, a = this,
                r = !1,
                l = a.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === a.respondTo ? o = c : "slider" === a.respondTo ? o = l : "min" === a.respondTo && (o = Math.min(c, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
                for (s in n = null, a.breakpoints) a.breakpoints.hasOwnProperty(s) && (!1 === a.originalSettings.mobileFirst ? o < a.breakpoints[s] && (n = a.breakpoints[s]) : o > a.breakpoints[s] && (n = a.breakpoints[s]));
                null !== n ? null !== a.activeBreakpoint ? (n !== a.activeBreakpoint || i) && (a.activeBreakpoint = n, "unslick" === a.breakpointSettings[n] ? a.unslick(n) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[n]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = n) : (a.activeBreakpoint = n, "unslick" === a.breakpointSettings[n] ? a.unslick(n) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[n]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = n) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = n), e || !1 === r || a.$slider.trigger("breakpoint", [a, r])
            }
        }, i.prototype.changeSlide = function(e, i) {
            var s, n, o = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === s ? o.options.slidesToScroll : o.options.slidesToShow - s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === s ? o.options.slidesToScroll : s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, i);
                    break;
                case "index":
                    var r = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(r), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, i.prototype.checkNavigable = function(t) {
            var e, i;
            if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var s in e) {
                    if (t < e[s]) {
                        t = i;
                        break
                    }
                    i = e[s]
                }
            return t
        }, i.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, i.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, i.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
        }, i.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, i.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                t(this).attr("style", t(this).data("originalStyling"))
            })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, i.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, i.prototype.fadeSlide = function(t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout((function() {
                i.disableTransition(t), e.call()
            }), i.options.speed))
        }, i.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, i.prototype.filterSlides = i.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, i.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
                i.stopImmediatePropagation();
                var s = t(this);
                setTimeout((function() {
                    e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay())
                }), 0)
            }))
        }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, i.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                s = 0;
            if (!0 === t.options.infinite)
                if (t.slideCount <= t.options.slidesToShow) ++s;
                else
                    for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) s = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return s - 1
        }, i.prototype.getLeft = function(t) {
            var e, i, s, n, o = this,
                a = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? n = -1.5 : 1 === o.options.slidesToShow && (n = -2)), a = i * o.options.slidesToShow * n), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, a = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, a = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, a = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, a = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + a, !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (o.$list.width() - s.outerWidth()) / 2)), e
        }, i.prototype.getOption = i.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, i.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                s = 0,
                n = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n
        }, i.prototype.getSlick = function() {
            return this
        }, i.prototype.getSlideCount = function() {
            var e, i, s = this;
            return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each((function(n, o) {
                if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * s.swipeLeft) return e = o, !1
            })), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, i.prototype.goTo = i.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, i.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, i.prototype.initADA = function() {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                s = e.getNavigableIndexes().filter((function(t) {
                    return t >= 0 && t < e.slideCount
                }));
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(i) {
                var n = s.indexOf(i);
                if (t(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + i,
                        tabindex: -1
                    }), -1 !== n) {
                    var o = "slick-slide-control" + e.instanceUid + n;
                    t("#" + o).length && t(this).attr({
                        "aria-describedby": o
                    })
                }
            })), e.$dots.attr("role", "tablist").find("li").each((function(n) {
                var o = s[n];
                t(this).attr({
                    role: "presentation"
                }), t(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + n,
                    "aria-controls": "slick-slide" + e.instanceUid + o,
                    "aria-label": n + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            })).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var n = e.currentSlide, o = n + e.options.slidesToShow; n < o; n++) e.options.focusOnChange ? e.$slides.eq(n).attr({
                tabindex: "0"
            }) : e.$slides.eq(n).removeAttr("tabindex");
            e.activateADA()
        }, i.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
        }, i.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, i.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, i.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, i.prototype.initUI = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, i.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, i.prototype.lazyLoad = function() {
            var e, i, s, n = this;

            function o(e) {
                t("img[data-lazy]", e).each((function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        s = t(this).attr("data-srcset"),
                        o = t(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        a = document.createElement("img");
                    a.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, (function() {
                            s && (e.attr("srcset", s), o && e.attr("sizes", o)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, (function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            })), n.$slider.trigger("lazyLoaded", [n, e, i])
                        }))
                    }, a.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                    }, a.src = i
                }))
            }
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (i = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (i = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(i + n.options.slidesToShow), !0 === n.options.fade && (i > 0 && i--, s <= n.slideCount && s++)), e = n.$slider.find(".slick-slide").slice(i, s), "anticipated" === n.options.lazyLoad)
                for (var a = i - 1, r = s, l = n.$slider.find(".slick-slide"), c = 0; c < n.options.slidesToScroll; c++) a < 0 && (a = n.slideCount - 1), e = (e = e.add(l.eq(a))).add(l.eq(r)), a--, r++;
            o(e), n.slideCount <= n.options.slidesToShow ? o(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? o(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && o(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, i.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, i.prototype.next = i.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, i.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, i.prototype.pause = i.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, i.prototype.play = i.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, i.prototype.postSlide = function(e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, i.prototype.prev = i.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, i.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, i.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, s, n, o, a, r = this,
                l = t("img[data-lazy]", r.$slider);
            l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), o = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (a = document.createElement("img")).onload = function() {
                n && (i.attr("srcset", n), o && i.attr("sizes", o)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, s]), r.progressiveLazyLoad()
            }, a.onerror = function() {
                e < 3 ? setTimeout((function() {
                    r.progressiveLazyLoad(e + 1)
                }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, s]), r.progressiveLazyLoad())
            }, a.src = s) : r.$slider.trigger("allImagesLoaded", [r])
        }, i.prototype.refresh = function(e) {
            var i, s, n = this;
            s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {
                currentSlide: i
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, i.prototype.registerBreakpoints = function() {
            var e, i, s, n = this,
                o = n.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                for (e in n.respondTo = n.options.respondTo || "window", o)
                    if (s = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (i = o[e].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                        n.breakpoints.push(i), n.breakpointSettings[i] = o[e].settings
                    }
                n.breakpoints.sort((function(t, e) {
                    return n.options.mobileFirst ? t - e : e - t
                }))
            }
        }, i.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, i.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }), 50))
        }, i.prototype.removeSlide = i.prototype.slickRemove = function(t, e, i) {
            var s = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t, s.slideCount < 1 || t < 0 || t > s.slideCount - 1) return !1;
            s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
        }, i.prototype.setCSS = function(t) {
            var e, i, s = this,
                n = {};
            !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", n[s.positionProp] = t, !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {}, !1 === s.cssTransitions ? (n[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(n)))
        }, i.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, i.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each((function(s, n) {
                e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(n).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(n).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            })), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, i.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, i.prototype.setOption = i.prototype.slickSetOption = function() {
            var e, i, s, n, o, a = this,
                r = !1;
            if ("object" === t.type(arguments[0]) ? (s = arguments[0], r = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) a.options[s] = n;
            else if ("multiple" === o) t.each(s, (function(t, e) {
                a.options[t] = e
            }));
            else if ("responsive" === o)
                for (i in n)
                    if ("array" !== t.type(a.options.responsive)) a.options.responsive = [n[i]];
                    else {
                        for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === n[i].breakpoint && a.options.responsive.splice(e, 1), e--;
                        a.options.responsive.push(n[i])
                    }
            r && (a.unload(), a.reinit())
        }, i.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, i.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, i.prototype.setSlideClasses = function(t) {
            var e, i, s, n, o = this;
            if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
                var a = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + a, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = o.options.slidesToShow + t, i.slice(s - e + 1 + a, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow, s = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(s - (o.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
        }, i.prototype.setupInfinite = function() {
            var e, i, s, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
                for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - s; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < s + n.slideCount; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                    t(this).attr("id", "")
                }))
            }
        }, i.prototype.interrupt = function(t) {
            t || this.autoPlay(), this.interrupted = t
        }, i.prototype.selectHandler = function(e) {
            var i = this,
                s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                n = parseInt(s.attr("data-slick-index"));
            n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
        }, i.prototype.slideHandler = function(t, e, i) {
            var s, n, o, a, r, l, c = this;
            if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
                if (!1 === e && c.asNavFor(t), s = t, r = c.getLeft(s), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
                    c.postSlide(s)
                })) : c.postSlide(s));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
                c.postSlide(s)
            })) : c.postSlide(s));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = s < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), o = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(n, (function() {
                    c.postSlide(n)
                }))) : c.postSlide(n), void c.animateHeight();
                !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, (function() {
                    c.postSlide(n)
                })) : c.postSlide(n)
            }
        }, i.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, i.prototype.swipeDirection = function() {
            var t, e, i, s, n = this;
            return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 || s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
        }, i.prototype.swipeEnd = function(t) {
            var e, i, s = this;
            if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
            if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
            if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (i = s.swipeDirection()) {
                    case "left":
                    case "down":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
                }
                "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
            } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
        }, i.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, i.prototype.swipeMove = function(t) {
            var e, i, s, n, o, a, r = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || r.scrolling || o && 1 !== o.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && a > 4 ? (r.scrolling = !0, !1) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = a), i = r.swipeDirection(), void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && (r.swiping = !0, t.preventDefault()), n = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + s * n : r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * n, !0 === r.options.verticalSwiping && (r.swipeLeft = e + s * n), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
        }, i.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, i.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, i.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, i.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, i.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, i.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, e, s = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                a = s.length;
            for (t = 0; t < a; t++)
                if ("object" == typeof n || void 0 === n ? s[t].slick = new i(s[t], n) : e = s[t].slick[n].apply(s[t].slick, o), void 0 !== e) return e;
            return s
        }
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, (function(t, e) {
        "use strict";

        function i(i, o, r) {
            function l(t, e, s) {
                var n, o = "$()." + i + '("' + e + '")';
                return t.each((function(t, l) {
                    var c = r.data(l, i);
                    if (c) {
                        var d = c[e];
                        if (d && "_" != e.charAt(0)) {
                            var h = d.apply(c, s);
                            n = void 0 === n ? h : n
                        } else a(o + " is not a valid method")
                    } else a(i + " not initialized. Cannot call methods, i.e. " + o)
                })), void 0 !== n ? n : t
            }

            function c(t, e) {
                t.each((function(t, s) {
                    var n = r.data(s, i);
                    n ? (n.option(e), n._init()) : (n = new o(s, e), r.data(s, i, n))
                }))
            }(r = r || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
                r.isPlainObject(t) && (this.options = r.extend(!0, this.options, t))
            }), r.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = n.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, s(r))
        }

        function s(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var n = Array.prototype.slice,
            o = t.console,
            a = void 0 === o ? function() {} : function(t) {
                o.error(t)
            };
        return s(e || t.jQuery), i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, (function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    s = i[t] = i[t] || [];
                return -1 == s.indexOf(e) && s.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = i.indexOf(e);
                return -1 != s && i.splice(s, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var o = i[n];
                    s && s[o] && (this.off(t, o), delete s[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, (function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e(t) {
            var e = getComputedStyle(t);
            return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function i() {
            if (!l) {
                l = !0;
                var i = document.createElement("div");
                i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
                var o = document.body || document.documentElement;
                o.appendChild(i);
                var a = e(i);
                n = 200 == Math.round(t(a.width)), s.isBoxSizeOuter = n, o.removeChild(i)
            }
        }

        function s(s) {
            if (i(), "string" == typeof s && (s = document.querySelector(s)), s && "object" == typeof s && s.nodeType) {
                var o = e(s);
                if ("none" == o.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < r; e++) t[a[e]] = 0;
                    return t
                }();
                var l = {};
                l.width = s.offsetWidth, l.height = s.offsetHeight;
                for (var c = l.isBorderBox = "border-box" == o.boxSizing, d = 0; d < r; d++) {
                    var h = a[d],
                        u = o[h],
                        p = parseFloat(u);
                    l[h] = isNaN(p) ? 0 : p
                }
                var f = l.paddingLeft + l.paddingRight,
                    g = l.paddingTop + l.paddingBottom,
                    m = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    y = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = c && n,
                    k = t(o.width);
                !1 !== k && (l.width = k + (w ? 0 : f + y));
                var _ = t(o.height);
                return !1 !== _ && (l.height = _ + (w ? 0 : g + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (g + b), l.outerWidth = l.width + m, l.outerHeight = l.height + v, l
            }
        }
        var n, o = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = a.length,
            l = !1;
        return s
    })),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, (function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var s = e[i] + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
            return e(t, i)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, (function(t, e) {
        var i = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            s = Array.prototype.slice;
        i.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? s.call(t) : [t]
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, s) {
            t = i.makeArray(t);
            var n = [];
            return t.forEach((function(t) {
                if (t instanceof HTMLElement) {
                    if (!s) return void n.push(t);
                    e(t, s) && n.push(t);
                    for (var i = t.querySelectorAll(s), o = 0; o < i.length; o++) n.push(i[o])
                }
            })), n
        }, i.debounceMethod = function(t, e, i) {
            i = i || 100;
            var s = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                clearTimeout(t);
                var e = arguments,
                    o = this;
                this[n] = setTimeout((function() {
                    s.apply(o, e), delete o[n]
                }), i)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                return e + "-" + i
            })).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, s) {
            i.docReady((function() {
                var o = i.toDashed(s),
                    a = "data-" + o,
                    r = document.querySelectorAll("[" + a + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    c = i.makeArray(r).concat(i.makeArray(l)),
                    d = a + "-options",
                    h = t.jQuery;
                c.forEach((function(t) {
                    var i, o = t.getAttribute(a) || t.getAttribute(d);
                    try {
                        i = o && JSON.parse(o)
                    } catch (e) {
                        return void(n && n.error("Error parsing " + a + " on " + t.className + ": " + e))
                    }
                    var r = new e(t, i);
                    h && h.data(t, s, r)
                }))
            }))
        }, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, (function(t, e) {
        "use strict";

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var s = document.documentElement.style,
            n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            a = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[n],
            r = {
                transform: o,
                transition: n,
                transitionDuration: n + "Duration",
                transitionProperty: n + "Property",
                transitionDelay: n + "Delay"
            },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function() {
            this.size = e(this.element)
        }, l.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                e[r[i] || i] = t[i]
            }
        }, l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                s = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                o = parseFloat(s),
                a = parseFloat(n),
                r = this.layout.size; - 1 != s.indexOf("%") && (o = o / 100 * r.width), -1 != n.indexOf("%") && (a = a / 100 * r.height), o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = o, this.position.y = a
        }, l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                s = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                a = i ? "right" : "left",
                r = this.position.x + t[n];
            e[o] = this.getXValue(r), e[a] = "";
            var l = s ? "paddingTop" : "paddingBottom",
                c = s ? "top" : "bottom",
                d = s ? "bottom" : "top",
                h = this.position.y + t[l];
            e[c] = this.getYValue(h), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                s = this.position.y,
                n = t == this.position.x && e == this.position.y;
            if (this.setPosition(t, e), !n || this.isTransitioning) {
                var o = t - i,
                    a = e - s,
                    r = {};
                r.transform = this.getTranslate(o, a), this.transition({
                    to: r,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function(t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
        }, l._nonTransition = function(t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var c = "opacity," + function(t) {
            return t.replace(/([A-Z])/g, (function(t) {
                return "-" + t.toLowerCase()
            }))
        }(o);
        l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: c,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(a, this, !1)
            }
        }, l.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = d[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function() {
            this.css(h)
        }, l.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function() {
            return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
                this.removeElem()
            })), void this.hide()) : void this.removeElem()
        }, l.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, l.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    })),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, s, n, o) {
            return e(t, i, s, n, o)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, (function(t, e, i, s, n) {
        "use strict";

        function o(t, e) {
            var i = s.getQueryElement(t);
            if (i) {
                this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
                var n = ++d;
                this.element.outlayerGUID = n, h[n] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }

        function a(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var r = t.console,
            l = t.jQuery,
            c = function() {},
            d = 0,
            h = {};
        o.namespace = "outlayer", o.Item = n, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var u = o.prototype;
        s.extend(u, e.prototype), u.option = function(t) {
            s.extend(this.options, t)
        }, u._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, o.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, u._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, u.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, u._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], n = 0; n < e.length; n++) {
                var o = new i(e[n], this);
                s.push(o)
            }
            return s
        }, u._filterFindItemElements = function(t) {
            return s.filterFindElements(t, this.options.itemSelector)
        }, u.getItemElements = function() {
            return this.items.map((function(t) {
                return t.element
            }))
        }, u.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, u._init = u.layout, u._resetLayout = function() {
            this.getSize()
        }, u.getSize = function() {
            this.size = i(this.element)
        }, u._getMeasurement = function(t, e) {
            var s, n = this.options[t];
            n ? ("string" == typeof n ? s = this.element.querySelector(n) : n instanceof HTMLElement && (s = n), this[t] = s ? i(s)[e] : n) : this[t] = 0
        }, u.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, u._getItemsForLayout = function(t) {
            return t.filter((function(t) {
                return !t.isIgnored
            }))
        }, u._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach((function(t) {
                    var s = this._getItemLayoutPosition(t);
                    s.item = t, s.isInstant = e || t.isLayoutInstant, i.push(s)
                }), this), this._processLayoutQueue(i)
            }
        }, u._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, u._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach((function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }), this)
        }, u.updateStagger = function() {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    s = e && e[2];
                return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0
            }(t), this.stagger)
        }, u._positionItem = function(t, e, i, s, n) {
            s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
        }, u._postLayout = function() {
            this.resizeContainer()
        }, u.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, u._getContainerSize = c, u._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, u._emitCompleteOnItems = function(t, e) {
            function i() {
                n.dispatchEvent(t + "Complete", null, [e])
            }

            function s() {
                ++a == o && i()
            }
            var n = this,
                o = e.length;
            if (e && o) {
                var a = 0;
                e.forEach((function(e) {
                    e.once(t, s)
                }))
            } else i()
        }, u.dispatchEvent = function(t, e, i) {
            var s = e ? [e].concat(i) : i;
            if (this.emitEvent(t, s), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var n = l.Event(e);
                    n.type = t, this.$element.trigger(n, i)
                } else this.$element.trigger(t, i)
        }, u.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, u.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, u.stamp = function(t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, u.unstamp = function(t) {
            (t = this._find(t)) && t.forEach((function(t) {
                s.removeFrom(this.stamps, t), this.unignore(t)
            }), this)
        }, u._find = function(t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), s.makeArray(t)
        }, u._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, u._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, u._manageStamp = c, u._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                s = this._boundingRect,
                n = i(t);
            return {
                left: e.left - s.left - n.marginLeft,
                top: e.top - s.top - n.marginTop,
                right: s.right - e.right - n.marginRight,
                bottom: s.bottom - e.bottom - n.marginBottom
            }
        }, u.handleEvent = s.handleEvent, u.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, u.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, u.onresize = function() {
            this.resize()
        }, s.debounceMethod(o, "onresize", 100), u.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, u.needsResizeLayout = function() {
            var t = i(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, u.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, u.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, u.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, u.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach((function(t, i) {
                    t.stagger(i * e), t.reveal()
                }))
            }
        }, u.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach((function(t, i) {
                    t.stagger(i * e), t.hide()
                }))
            }
        }, u.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, u.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, u.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, u.getItems = function(t) {
            t = s.makeArray(t);
            var e = [];
            return t.forEach((function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }), this), e
        }, u.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
                t.remove(), s.removeFrom(this.items, t)
            }), this)
        }, u.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
                t.destroy()
            })), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete h[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) {
            var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
            return e && h[e]
        }, o.create = function(t, e) {
            var i = a(o);
            return i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, o.compatOptions), i.namespace = t, i.data = o.data, i.Item = a(n), s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        };
        var p = {
            ms: 1,
            s: 1e3
        };
        return o.Item = n, o
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, (function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            s = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, s.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var s = e[i];
                    this.sortData[i] = s(this.element, this)
                }
            }
        };
        var n = i.destroy;
        return i.destroy = function() {
            n.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, (function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var s = i.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
            s[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        })), s.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, s._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, s.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, s.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, s.getSegmentSize = function(t, e) {
            var i = t + e,
                s = "outer" + e;
            if (this._getMeasurement(i, s), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[s] || this.isotope.size["inner" + e]
            }
        }, s.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, s.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, s.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = Object.create(s), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, (function(t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var s = i.prototype;
        return s._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, s.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var s = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                o = n / s,
                a = s - n % s;
            o = Math[a && a < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
        }, s.getContainerWidth = function() {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, s._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var s = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                    x: this.columnWidth * s.col,
                    y: s.y
                }, o = s.y + t.size.outerHeight, a = i + s.col, r = s.col; r < a; r++) this.colYs[r] = o;
            return n
        }, s._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }, s._getTopColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) e[s] = this._getColGroupY(s, t);
            return e
        }, s._getColGroupY = function(t, e) {
            if (e < 2) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }, s._getHorizontalColPosition = function(t, e) {
            var i = this.horizontalColIndex % this.cols;
            i = t > 1 && i + t > this.cols ? 0 : i;
            var s = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = s ? i + t : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }, s._manageStamp = function(t) {
            var i = e(t),
                s = this._getElementOffset(t),
                n = this._getOption("originLeft") ? s.left : s.right,
                o = n + i.outerWidth,
                a = Math.floor(n / this.columnWidth);
            a = Math.max(0, a);
            var r = Math.floor(o / this.columnWidth);
            r -= o % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
            for (var l = (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight, c = a; c <= r; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, s._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, s._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, s.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, (function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            s = i.prototype,
            n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var o in e.prototype) n[o] || (s[o] = e.prototype[o]);
        var a = s.measureColumns;
        s.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var r = s._getOption;
        return s._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
        }, i
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, (function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var s = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, s
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, (function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    })),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function(i, s, n, o, a, r) {
            return e(t, i, s, n, o, a, r)
        })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, (function(t, e, i, s, n, o, a) {
        var r = t.jQuery,
            l = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            c = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = o, c.LayoutMode = a;
        var d = c.prototype;
        d._create = function() {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], a.modes) this._initLayoutMode(t)
        }, d.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var s = t[i];
                s.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d._initLayoutMode = function(t) {
            var e = a.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, d._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, d._init = d.arrange, d._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, d._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, d._bindArrangeComplete = function() {
            function t() {
                e && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
            }
            var e, i, s, n = this;
            this.once("layoutComplete", (function() {
                e = !0, t()
            })), this.once("hideComplete", (function() {
                i = !0, t()
            })), this.once("revealComplete", (function() {
                s = !0, t()
            }))
        }, d._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], s = [], n = [], o = this._getFilterTest(e), a = 0; a < t.length; a++) {
                var r = t[a];
                if (!r.isIgnored) {
                    var l = o(r);
                    l && i.push(r), l && r.isHidden ? s.push(r) : l || r.isHidden || n.push(r)
                }
            }
            return {
                matches: i,
                needReveal: s,
                needHide: n
            }
        }, d._getFilterTest = function(t) {
            return r && this.options.isJQueryFiltering ? function(e) {
                return r(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return s(e.element, t)
            }
        }, d.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = h(i)
            }
        }, d._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                t[i].updateSortData()
            }
        };
        var h = function(t) {
            if ("string" != typeof t) return t;
            var e = l(t).split(" "),
                i = e[0],
                s = i.match(/^\[(.+)\]$/),
                n = function(t, e) {
                    return t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && i.textContent
                    }
                }(s && s[1], i),
                o = c.sortDataParsers[e[1]];
            return o ? function(t) {
                return t && o(n(t))
            } : function(t) {
                return t && n(t)
            }
        };
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, d._sort = function() {
            if (this.options.sortBy) {
                var t = n.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = function(t, e) {
                    return function(i, s) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n],
                                a = i.sortData[o],
                                r = s.sortData[o];
                            if (a > r || a < r) return (a > r ? 1 : -1) * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
                        }
                        return 0
                    }
                }(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, d._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, d._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, d._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, s, n = e.length;
                for (i = 0; i < n; i++) s = e[i], this.element.appendChild(s.element);
                var o = this._filter(e).matches;
                for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                this.reveal(o)
            }
        };
        var u = d.remove;
        return d.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            u.call(this, t);
            for (var i = e && e.length, s = 0; i && s < i; s++) {
                var o = e[s];
                n.removeFrom(this.filteredItems, o)
            }
        }, d.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var s = t.apply(this, e);
            return this.options.transitionDuration = i, s
        }, d.getFilteredItemElements = function() {
            return this.filteredItems.map((function(t) {
                return t.element
            }))
        }, c
    })),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jcf = e(jQuery)
    }(this, (function(t) {
        "use strict";
        var e = [],
            i = {
                optionsKey: "jcf",
                dataKey: "jcf-instance",
                rtlClass: "jcf-rtl",
                focusClass: "jcf-focus",
                pressedClass: "jcf-pressed",
                disabledClass: "jcf-disabled",
                hiddenClass: "jcf-hidden",
                resetAppearanceClass: "jcf-reset-appearance",
                unselectableClass: "jcf-unselectable"
            },
            s = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            n = /Windows Phone/.test(navigator.userAgent);
        i.isMobileDevice = !(!s && !n);
        var o = /(iPad|iPhone).*OS ([0-9_]*) .*/.exec(navigator.userAgent);
        o && (o = parseFloat(o[2].replace(/_/g, "."))), i.ios = o;
        ! function() {
            var e, i = navigator.pointerEnabled || navigator.msPointerEnabled,
                s = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                n = {},
                o = "jcf-";
            e = i ? {
                pointerover: navigator.pointerEnabled ? "pointerover" : "MSPointerOver",
                pointerdown: navigator.pointerEnabled ? "pointerdown" : "MSPointerDown",
                pointermove: navigator.pointerEnabled ? "pointermove" : "MSPointerMove",
                pointerup: navigator.pointerEnabled ? "pointerup" : "MSPointerUp"
            } : {
                pointerover: "mouseover",
                pointerdown: "mousedown" + (s ? " touchstart" : ""),
                pointermove: "mousemove" + (s ? " touchmove" : ""),
                pointerup: "mouseup" + (s ? " touchend" : "")
            }, t.each(e, (function(e, i) {
                t.each(i.split(" "), (function(t, i) {
                    n[i] = e
                }))
            })), t.each(e, (function(e, i) {
                i = i.split(" "), t.event.special[o + e] = {
                    setup: function() {
                        var e = this;
                        t.each(i, (function(t, i) {
                            e.addEventListener ? e.addEventListener(i, r, !1) : e["on" + i] = r
                        }))
                    },
                    teardown: function() {
                        var e = this;
                        t.each(i, (function(t, i) {
                            e.addEventListener ? e.removeEventListener(i, r, !1) : e["on" + i] = null
                        }))
                    }
                }
            }));
            var a = null,
                r = function(e) {
                    var i = e || window.event,
                        s = null,
                        r = n[i.type];
                    if ((e = t.event.fix(i)).type = o + r, i.pointerType) switch (i.pointerType) {
                        case 2:
                            e.pointerType = "touch";
                            break;
                        case 3:
                            e.pointerType = "pen";
                            break;
                        case 4:
                            e.pointerType = "mouse";
                            break;
                        default:
                            e.pointerType = i.pointerType
                    } else e.pointerType = i.type.substr(0, 5);
                    return e.pageX || e.pageY || (s = i.changedTouches ? i.changedTouches[0] : i, e.pageX = s.pageX, e.pageY = s.pageY), "touchend" === i.type && (a = {
                        x: e.pageX,
                        y: e.pageY
                    }), "mouse" === e.pointerType && a && function(t) {
                        var e = Math.abs(t.pageX - a.x),
                            i = Math.abs(t.pageY - a.y);
                        if (e <= 25 && i <= 25) return !0
                    }(e) ? void 0 : (t.event.dispatch || t.event.handle).call(this, e)
                }
        }(),
        function() {
            var e = ("onwheel" in document || document.documentMode >= 9 ? "wheel" : "mousewheel DOMMouseScroll").split(" "),
                i = "jcf-mousewheel";
            t.event.special[i] = {
                setup: function() {
                    var i = this;
                    t.each(e, (function(t, e) {
                        i.addEventListener ? i.addEventListener(e, s, !1) : i["on" + e] = s
                    }))
                },
                teardown: function() {
                    var i = this;
                    t.each(e, (function(t, e) {
                        i.addEventListener ? i.removeEventListener(e, s, !1) : i["on" + e] = null
                    }))
                }
            };
            var s = function(e) {
                var s = e || window.event;
                if ((e = t.event.fix(s)).type = i, "detail" in s && (e.deltaY = -s.detail), "wheelDelta" in s && (e.deltaY = -s.wheelDelta), "wheelDeltaY" in s && (e.deltaY = -s.wheelDeltaY), "wheelDeltaX" in s && (e.deltaX = -s.wheelDeltaX), "deltaY" in s && (e.deltaY = s.deltaY), "deltaX" in s && (e.deltaX = s.deltaX), e.delta = e.deltaY || e.deltaX, 1 === s.deltaMode) {
                    e.delta *= 16, e.deltaY *= 16, e.deltaX *= 16
                }
                return (t.event.dispatch || t.event.handle).call(this, e)
            }
        }();
        var a = {
                fireNativeEvent: function(e, i) {
                    t(e).each((function() {
                        var t, e = this;
                        e.dispatchEvent ? ((t = document.createEvent("HTMLEvents")).initEvent(i, !0, !0), e.dispatchEvent(t)) : document.createEventObject && ((t = document.createEventObject()).target = e, e.fireEvent("on" + i, t))
                    }))
                },
                bindHandlers: function() {
                    var e = this;
                    t.each(e, (function(i, s) {
                        0 === i.indexOf("on") && t.isFunction(s) && (e[i] = function() {
                            return s.apply(e, arguments)
                        })
                    }))
                }
            },
            r = {
                version: "1.1.3",
                modules: {},
                getOptions: function() {
                    return t.extend({}, i)
                },
                setOptions: function(e, s) {
                    arguments.length > 1 ? this.modules[e] && t.extend(this.modules[e].prototype.options, s) : t.extend(i, e)
                },
                addModule: function(s) {
                    var n = function(s) {
                            s.element.data(i.dataKey) || s.element.data(i.dataKey, this), e.push(this), this.options = t.extend({}, i, this.options, o(s.element), s), this.bindHandlers(), this.init.apply(this, arguments)
                        },
                        o = function(e) {
                            var s = e.data(i.optionsKey),
                                n = e.attr(i.optionsKey);
                            if (s) return s;
                            if (n) try {
                                return t.parseJSON(n)
                            } catch (t) {}
                        };
                    n.prototype = s, t.extend(s, a), s.plugins && t.each(s.plugins, (function(e, i) {
                        t.extend(i.prototype, a)
                    }));
                    var r = n.prototype.destroy;
                    n.prototype.destroy = function() {
                        this.options.element.removeData(this.options.dataKey);
                        for (var t = e.length - 1; t >= 0; t--)
                            if (e[t] === this) {
                                e.splice(t, 1);
                                break
                            }
                        r && r.apply(this, arguments)
                    }, this.modules[s.name] = n
                },
                getInstance: function(e) {
                    return t(e).data(i.dataKey)
                },
                replace: function(e, s, n) {
                    var o, a = this;
                    return i.styleSheetCreated || function() {
                        var e = t("<style>").appendTo("head"),
                            s = e.prop("sheet") || e.prop("styleSheet"),
                            n = function(t, e, i) {
                                s.insertRule ? s.insertRule(t + "{" + e + "}", i) : s.addRule(t, e, i)
                            };
                        n("." + i.hiddenClass, "position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none"), n("." + i.rtlClass + " ." + i.hiddenClass, "right:-9999px !important; left: auto !important"), n("." + i.unselectableClass, "-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"), n("." + i.resetAppearanceClass, "background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);");
                        var o = t("html"),
                            a = t("body");
                        "rtl" !== o.css("direction") && "rtl" !== a.css("direction") || o.addClass(i.rtlClass), o.on("reset", (function() {
                            setTimeout((function() {
                                r.refreshAll()
                            }), 0)
                        })), i.styleSheetCreated = !0
                    }(), t(e).each((function() {
                        var e, r = t(this);
                        (o = r.data(i.dataKey)) ? o.refresh(): (s || t.each(a.modules, (function(t, e) {
                            if (e.prototype.matchElement.call(e.prototype, r)) return s = t, !1
                        })), s && (e = t.extend({
                            element: r
                        }, n), o = new a.modules[s](e)))
                    })), o
                },
                refresh: function(e) {
                    t(e).each((function() {
                        var e = t(this).data(i.dataKey);
                        e && e.refresh()
                    }))
                },
                destroy: function(e) {
                    t(e).each((function() {
                        var e = t(this).data(i.dataKey);
                        e && e.destroy()
                    }))
                },
                replaceAll: function(e) {
                    var i = this;
                    t.each(this.modules, (function(s, n) {
                        t(n.prototype.selector, e).each((function() {
                            this.className.indexOf("jcf-ignore") < 0 && i.replace(this, s)
                        }))
                    }))
                },
                refreshAll: function(s) {
                    if (s) t.each(this.modules, (function(e, n) {
                        t(n.prototype.selector, s).each((function() {
                            var e = t(this).data(i.dataKey);
                            e && e.refresh()
                        }))
                    }));
                    else
                        for (var n = e.length - 1; n >= 0; n--) e[n].refresh()
                },
                destroyAll: function(s) {
                    if (s) t.each(this.modules, (function(e, n) {
                        t(n.prototype.selector, s).each((function(e, s) {
                            var n = t(s).data(i.dataKey);
                            n && n.destroy()
                        }))
                    }));
                    else
                        for (; e.length;) e[0].destroy()
                }
            };
        return window.jcf = r, r
    })),
    function(t, e) {
        "use strict";

        function i(e) {
            this.options = t.extend({
                wrapNative: !0,
                wrapNativeOnMobile: !0,
                fakeDropInBody: !0,
                useCustomScroll: !0,
                flipDropToFit: !0,
                maxVisibleItems: 10,
                fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
                fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
                optionClassPrefix: "jcf-option-",
                selectClassPrefix: "jcf-select-",
                dropContentSelector: ".jcf-select-drop-content",
                selectTextSelector: ".jcf-select-text",
                dropActiveClass: "jcf-drop-active",
                flipDropClass: "jcf-drop-flipped"
            }, e), this.init()
        }

        function s(e) {
            this.options = t.extend({
                wrapNative: !0,
                useCustomScroll: !0,
                fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
                selectClassPrefix: "jcf-select-",
                listHolder: ".jcf-list-wrapper"
            }, e), this.init()
        }

        function n(e) {
            this.options = t.extend({
                holder: null,
                maxVisibleItems: 10,
                selectOnClick: !0,
                useHoverClass: !1,
                useCustomScroll: !1,
                handleResize: !0,
                multipleSelectWithoutKey: !1,
                alwaysPreventMouseWheel: !1,
                indexAttribute: "data-index",
                cloneClassPrefix: "jcf-option-",
                containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
                containerSelector: ".jcf-list-content",
                captionClass: "jcf-optgroup-caption",
                disabledClass: "jcf-disabled",
                optionClass: "jcf-option",
                groupClass: "jcf-optgroup",
                hoverClass: "jcf-hover",
                selectedClass: "jcf-selected",
                scrollClass: "jcf-scroll-active"
            }, e), this.init()
        }
        jcf.addModule({
            name: "Select",
            selector: "select",
            options: {
                element: null,
                multipleCompactStyle: !1
            },
            plugins: {
                ListBox: s,
                ComboBox: i,
                SelectList: n
            },
            matchElement: function(t) {
                return t.is("select")
            },
            init: function() {
                this.element = t(this.options.element), this.createInstance()
            },
            isListBox: function() {
                return this.element.is("[size]:not([jcf-size]), [multiple]")
            },
            createInstance: function() {
                this.instance && this.instance.destroy(), this.isListBox() && !this.options.multipleCompactStyle ? this.instance = new s(this.options) : this.instance = new i(this.options)
            },
            refresh: function() {
                this.isListBox() && this.instance instanceof i || !this.isListBox() && this.instance instanceof s ? this.createInstance() : this.instance.refresh()
            },
            destroy: function() {
                this.instance.destroy()
            }
        }), t.extend(i.prototype, {
            init: function() {
                this.initStructure(), this.bindHandlers(), this.attachEvents(), this.refresh()
            },
            initStructure: function() {
                this.win = t(e), this.doc = t(document), this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeAreaStructure).insertAfter(this.realElement), this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector), this.selectText = t("<span></span>").appendTo(this.selectTextContainer), a(this.fakeElement), this.fakeElement.addClass(o(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.prop("multiple") && this.fakeElement.addClass("jcf-compact-multiple"), this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative && (this.options.wrapNative = !0), this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                }).addClass(this.options.resetAppearanceClass) : (this.realElement.addClass(this.options.hiddenClass), this.fakeElement.attr("title", this.realElement.attr("title")), this.fakeDropTarget = this.options.fakeDropInBody ? t("body") : this.fakeElement)
            },
            attachEvents: function() {
                var t = this;
                this.delayedRefresh = function() {
                    setTimeout((function() {
                        t.refresh(), t.list && (t.list.refresh(), t.list.scrollToActiveOption())
                    }), 1)
                }, this.options.wrapNative ? this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    click: this.onChange,
                    keydown: this.onChange
                }) : (this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    keydown: this.onKeyDown
                }), this.fakeElement.on({
                    "jcf-pointerdown": this.onSelectAreaPress
                }))
            },
            onKeyDown: function(t) {
                13 === t.which ? this.toggleDropdown() : this.dropActive && this.delayedRefresh()
            },
            onChange: function() {
                this.refresh()
            },
            onFocus: function() {
                this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.toggleListMode(!0), this.focusedFlag = !0)
            },
            onBlur: function() {
                this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.toggleListMode(!1), this.focusedFlag = !1)
            },
            onResize: function() {
                this.dropActive && this.hideDropdown()
            },
            onSelectDropPress: function() {
                this.pressedFlag = !0
            },
            onSelectDropRelease: function(t, e) {
                this.pressedFlag = !1, "mouse" === e.pointerType && this.realElement.focus()
            },
            onSelectAreaPress: function(e) {
                !this.options.fakeDropInBody && t(e.target).closest(this.dropdown).length || e.button > 1 || this.realElement.is(":disabled") || (this.selectOpenedByEvent = e.pointerType, this.toggleDropdown(), this.focusedFlag || ("mouse" === e.pointerType ? this.realElement.focus() : this.onFocus(e)), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onSelectAreaRelease))
            },
            onSelectAreaRelease: function(t) {
                this.focusedFlag && "mouse" === t.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onSelectAreaRelease)
            },
            onOutsideClick: function(e) {
                var i = t(e.target);
                i.closest(this.fakeElement).length || i.closest(this.dropdown).length || this.hideDropdown()
            },
            onSelect: function() {
                this.refresh(), this.realElement.prop("multiple") ? this.repositionDropdown() : this.hideDropdown(), this.fireNativeEvent(this.realElement, "change")
            },
            toggleListMode: function(t) {
                this.options.wrapNative || (t ? this.realElement.attr({
                    size: 4,
                    "jcf-size": ""
                }) : this.options.wrapNative || this.realElement.removeAttr("size jcf-size"))
            },
            createDropdown: function() {
                this.dropdown && (this.list.destroy(), this.dropdown.remove()), this.dropdown = t(this.options.fakeDropStructure).appendTo(this.fakeDropTarget), this.dropdown.addClass(o(this.realElement.prop("className"), this.options.selectClassPrefix)), a(this.dropdown), this.realElement.prop("multiple") && this.dropdown.addClass("jcf-compact-multiple"), this.options.fakeDropInBody && this.dropdown.css({
                    position: "absolute",
                    top: -9999
                }), this.list = new n({
                    useHoverClass: !0,
                    handleResize: !1,
                    alwaysPreventMouseWheel: !0,
                    maxVisibleItems: this.options.maxVisibleItems,
                    useCustomScroll: this.options.useCustomScroll,
                    holder: this.dropdown.find(this.options.dropContentSelector),
                    multipleSelectWithoutKey: this.realElement.prop("multiple"),
                    element: this.realElement
                }), t(this.list).on({
                    select: this.onSelect,
                    press: this.onSelectDropPress,
                    release: this.onSelectDropRelease
                })
            },
            repositionDropdown: function() {
                var t, e, i, s = this.fakeElement.offset(),
                    n = this.fakeElement.outerWidth(),
                    o = this.fakeElement.outerHeight(),
                    a = this.dropdown.css("width", n).outerHeight(),
                    r = this.win.scrollTop(),
                    l = this.win.height(),
                    c = !1;
                s.top + o + a > r + l && s.top - a > r && (c = !0), this.options.fakeDropInBody && (i = "static" !== this.fakeDropTarget.css("position") ? this.fakeDropTarget.offset().top : 0, this.options.flipDropToFit && c ? (e = s.left, t = s.top - a - i) : (e = s.left, t = s.top + o - i), this.dropdown.css({
                    width: n,
                    left: e,
                    top: t
                })), this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && c)
            },
            showDropdown: function() {
                this.realElement.prop("options").length && (this.dropdown || this.createDropdown(), this.dropActive = !0, this.dropdown.appendTo(this.fakeDropTarget), this.fakeElement.addClass(this.options.dropActiveClass), this.refreshSelectedText(), this.repositionDropdown(), this.list.setScrollTop(this.savedScrollTop), this.list.refresh(), this.win.on("resize", this.onResize), this.doc.on("jcf-pointerdown", this.onOutsideClick))
            },
            hideDropdown: function() {
                this.dropdown && (this.savedScrollTop = this.list.getScrollTop(), this.fakeElement.removeClass(this.options.dropActiveClass + " " + this.options.flipDropClass), this.dropdown.removeClass(this.options.flipDropClass).detach(), this.doc.off("jcf-pointerdown", this.onOutsideClick), this.win.off("resize", this.onResize), this.dropActive = !1, "touch" === this.selectOpenedByEvent && this.onBlur())
            },
            toggleDropdown: function() {
                this.dropActive ? this.hideDropdown() : this.showDropdown()
            },
            refreshSelectedText: function() {
                var e, i = this.realElement.prop("selectedIndex"),
                    s = this.realElement.prop("options")[i],
                    n = s ? s.getAttribute("data-image") : null,
                    a = "";
                this.realElement.prop("multiple") ? (t.each(this.realElement.prop("options"), (function(t, e) {
                    e.selected && (a += (a ? ", " : "") + e.innerHTML)
                })), a || (a = this.realElement.attr("placeholder") || ""), this.selectText.removeAttr("class").html(a)) : s ? this.currentSelectedText === s.innerHTML && this.currentSelectedImage === n || (e = o(s.className, this.options.optionClassPrefix), this.selectText.attr("class", e).html(s.innerHTML), n ? (this.selectImage || (this.selectImage = t("<img>").prependTo(this.selectTextContainer).hide()), this.selectImage.attr("src", n).show()) : this.selectImage && this.selectImage.hide(), this.currentSelectedText = s.innerHTML, this.currentSelectedImage = n) : (this.selectImage && this.selectImage.hide(), this.selectText.removeAttr("class").empty())
            },
            refresh: function() {
                "none" === this.realElement.prop("style").display ? this.fakeElement.hide() : this.fakeElement.show(), this.refreshSelectedText(), this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled"))
            },
            destroy: function() {
                this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                    position: "",
                    height: "",
                    width: ""
                }).removeClass(this.options.resetAppearanceClass) : (this.realElement.removeClass(this.options.hiddenClass), this.realElement.is("[jcf-size]") && this.realElement.removeAttr("size jcf-size")), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onSelectAreaRelease), this.realElement.off({
                    focus: this.onFocus
                })
            }
        }), t.extend(s.prototype, {
            init: function() {
                this.bindHandlers(), this.initStructure(), this.attachEvents()
            },
            initStructure: function() {
                this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeStructure).insertAfter(this.realElement), this.listHolder = this.fakeElement.find(this.options.listHolder), a(this.fakeElement), this.fakeElement.addClass(o(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.addClass(this.options.hiddenClass), this.list = new n({
                    useCustomScroll: this.options.useCustomScroll,
                    holder: this.listHolder,
                    selectOnClick: !1,
                    element: this.realElement
                })
            },
            attachEvents: function() {
                var e = this;
                this.delayedRefresh = function(t) {
                    t && 16 === t.which || (clearTimeout(e.refreshTimer), e.refreshTimer = setTimeout((function() {
                        e.refresh(), e.list.scrollToActiveOption()
                    }), 1))
                }, this.realElement.on({
                    focus: this.onFocus,
                    click: this.delayedRefresh,
                    keydown: this.delayedRefresh
                }), t(this.list).on({
                    select: this.onSelect,
                    press: this.onFakeOptionsPress,
                    release: this.onFakeOptionsRelease
                })
            },
            onFakeOptionsPress: function(t, e) {
                this.pressedFlag = !0, "mouse" === e.pointerType && this.realElement.focus()
            },
            onFakeOptionsRelease: function(t, e) {
                this.pressedFlag = !1, "mouse" === e.pointerType && this.realElement.focus()
            },
            onSelect: function() {
                this.fireNativeEvent(this.realElement, "change"), this.fireNativeEvent(this.realElement, "click")
            },
            onFocus: function() {
                this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.focusedFlag = !0)
            },
            onBlur: function() {
                this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.focusedFlag = !1)
            },
            refresh: function() {
                this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")), this.list.refresh()
            },
            destroy: function() {
                this.list.destroy(), this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass), this.fakeElement.remove()
            }
        }), t.extend(n.prototype, {
            init: function() {
                this.initStructure(), this.refreshSelectedClass(), this.attachEvents()
            },
            initStructure: function() {
                this.element = t(this.options.element), this.indexSelector = "[" + this.options.indexAttribute + "]", this.container = t(this.options.containerStructure).appendTo(this.options.holder), this.listHolder = this.container.find(this.options.containerSelector), this.lastClickedIndex = this.element.prop("selectedIndex"), this.rebuildList()
            },
            attachEvents: function() {
                this.bindHandlers(), this.listHolder.on("jcf-pointerdown", this.indexSelector, this.onItemPress), this.listHolder.on("jcf-pointerdown", this.onPress), this.options.useHoverClass && this.listHolder.on("jcf-pointerover", this.indexSelector, this.onHoverItem)
            },
            onPress: function(e) {
                t(this).trigger("press", e), this.listHolder.on("jcf-pointerup", this.onRelease)
            },
            onRelease: function(e) {
                t(this).trigger("release", e), this.listHolder.off("jcf-pointerup", this.onRelease)
            },
            onHoverItem: function(t) {
                var e = parseFloat(t.currentTarget.getAttribute(this.options.indexAttribute));
                this.fakeOptions.removeClass(this.options.hoverClass).eq(e).addClass(this.options.hoverClass)
            },
            onItemPress: function(t) {
                "touch" === t.pointerType || this.options.selectOnClick ? (this.tmpListOffsetTop = this.list.offset().top, this.listHolder.on("jcf-pointerup", this.indexSelector, this.onItemRelease)) : this.onSelectItem(t)
            },
            onItemRelease: function(t) {
                this.listHolder.off("jcf-pointerup", this.indexSelector, this.onItemRelease), this.tmpListOffsetTop === this.list.offset().top && this.listHolder.on("click", this.indexSelector, {
                    savedPointerType: t.pointerType
                }, this.onSelectItem), delete this.tmpListOffsetTop
            },
            onSelectItem: function(e) {
                var i, s = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),
                    n = e.data && e.data.savedPointerType || e.pointerType || "mouse";
                this.listHolder.off("click", this.indexSelector, this.onSelectItem), e.button > 1 || this.realOptions[s].disabled || (this.element.prop("multiple") ? e.metaKey || e.ctrlKey || "touch" === n || this.options.multipleSelectWithoutKey ? this.realOptions[s].selected = !this.realOptions[s].selected : e.shiftKey ? (i = [this.lastClickedIndex, s].sort((function(t, e) {
                    return t - e
                })), this.realOptions.each((function(t, e) {
                    e.selected = t >= i[0] && t <= i[1]
                }))) : this.element.prop("selectedIndex", s) : this.element.prop("selectedIndex", s), e.shiftKey || (this.lastClickedIndex = s), this.refreshSelectedClass(), "mouse" === n && this.scrollToActiveOption(), t(this).trigger("select"))
            },
            rebuildList: function() {
                var e = this,
                    i = this.element[0];
                this.storedSelectHTML = i.innerHTML, this.optionIndex = 0, this.list = t(this.createOptionsList(i)), this.listHolder.empty().append(this.list), this.realOptions = this.element.find("option"), this.fakeOptions = this.list.find(this.indexSelector), this.fakeListItems = this.list.find("." + this.options.captionClass + "," + this.indexSelector), delete this.optionIndex;
                var s = this.options.maxVisibleItems,
                    n = this.element.prop("size");
                n > 1 && !this.element.is("[jcf-size]") && (s = n);
                var o = this.fakeOptions.length > s;
                this.container.toggleClass(this.options.scrollClass, o), o && (this.listHolder.css({
                    maxHeight: this.getOverflowHeight(s),
                    overflow: "auto"
                }), this.options.useCustomScroll && jcf.modules.Scrollable) ? jcf.replace(this.listHolder, "Scrollable", {
                    handleResize: this.options.handleResize,
                    alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
                }) : this.options.alwaysPreventMouseWheel && (this.preventWheelHandler = function(t) {
                    var i = e.listHolder.scrollTop(),
                        s = e.listHolder.prop("scrollHeight") - e.listHolder.innerHeight();
                    (i <= 0 && t.deltaY < 0 || i >= s && t.deltaY > 0) && t.preventDefault()
                }, this.listHolder.on("jcf-mousewheel", this.preventWheelHandler))
            },
            refreshSelectedClass: function() {
                var t, e = this,
                    i = this.element.prop("multiple"),
                    s = this.element.prop("selectedIndex");
                i ? this.realOptions.each((function(t, i) {
                    e.fakeOptions.eq(t).toggleClass(e.options.selectedClass, !!i.selected)
                })) : (this.fakeOptions.removeClass(this.options.selectedClass + " " + this.options.hoverClass), t = this.fakeOptions.eq(s).addClass(this.options.selectedClass), this.options.useHoverClass && t.addClass(this.options.hoverClass))
            },
            scrollToActiveOption: function() {
                var t = this.getActiveOptionOffset();
                "number" == typeof t && this.listHolder.prop("scrollTop", t)
            },
            getSelectedIndexRange: function() {
                var t = -1,
                    e = -1;
                return this.realOptions.each((function(i, s) {
                    s.selected && (t < 0 && (t = i), e = i)
                })), [t, e]
            },
            getChangedSelectedIndex: function() {
                var t, e = this.element.prop("selectedIndex");
                return this.element.prop("multiple") ? (this.previousRange || (this.previousRange = [e, e]), this.currentRange = this.getSelectedIndexRange(), t = this.currentRange[this.currentRange[0] !== this.previousRange[0] ? 0 : 1], this.previousRange = this.currentRange, t) : e
            },
            getActiveOptionOffset: function() {
                var t = this.listHolder.height(),
                    e = this.listHolder.prop("scrollTop"),
                    i = this.getChangedSelectedIndex(),
                    s = this.fakeOptions.eq(i),
                    n = s.offset().top - this.list.offset().top,
                    o = s.innerHeight();
                return n + o >= e + t ? n - t + o : n < e ? n : void 0
            },
            getOverflowHeight: function(t) {
                var e = this.fakeListItems.eq(t - 1),
                    i = this.list.offset().top;
                return e.offset().top + e.innerHeight() - i
            },
            getScrollTop: function() {
                return this.listHolder.scrollTop()
            },
            setScrollTop: function(t) {
                this.listHolder.scrollTop(t)
            },
            createOption: function(t) {
                var e = document.createElement("span");
                e.className = this.options.optionClass, e.innerHTML = t.innerHTML, e.setAttribute(this.options.indexAttribute, this.optionIndex++);
                var i, s = t.getAttribute("data-image");
                return s && ((i = document.createElement("img")).src = s, e.insertBefore(i, e.childNodes[0])), t.disabled && (e.className += " " + this.options.disabledClass), t.className && (e.className += " " + o(t.className, this.options.cloneClassPrefix)), e
            },
            createOptGroup: function(t) {
                var e, i, s = document.createElement("span"),
                    n = t.getAttribute("label");
                return (e = document.createElement("span")).className = this.options.captionClass, e.innerHTML = n, s.appendChild(e), t.children.length && (i = this.createOptionsList(t), s.appendChild(i)), s.className = this.options.groupClass, s
            },
            createOptionContainer: function() {
                return document.createElement("li")
            },
            createOptionsList: function(e) {
                var i = this,
                    s = document.createElement("ul");
                return t.each(e.children, (function(t, e) {
                    var n, o = i.createOptionContainer(e);
                    switch (e.tagName.toLowerCase()) {
                        case "option":
                            n = i.createOption(e);
                            break;
                        case "optgroup":
                            n = i.createOptGroup(e)
                    }
                    s.appendChild(o).appendChild(n)
                })), s
            },
            refresh: function() {
                this.storedSelectHTML !== this.element.prop("innerHTML") && this.rebuildList();
                var t = jcf.getInstance(this.listHolder);
                t && t.refresh(), this.refreshSelectedClass()
            },
            destroy: function() {
                this.listHolder.off("jcf-mousewheel", this.preventWheelHandler), this.listHolder.off("jcf-pointerdown", this.indexSelector, this.onSelectItem), this.listHolder.off("jcf-pointerover", this.indexSelector, this.onHoverItem), this.listHolder.off("jcf-pointerdown", this.onPress)
            }
        });
        var o = function(t, e) {
                return t ? t.replace(/[\s]*([\S]+)+[\s]*/gi, e + "$1 ") : ""
            },
            a = function() {
                var t = jcf.getOptions().unselectableClass;

                function e(t) {
                    t.preventDefault()
                }
                return function(i) {
                    i.addClass(t).on("selectstart", e)
                }
            }()
    }(jQuery, this),
    function(t) {
        "use strict";
        jcf.addModule({
            name: "Checkbox",
            selector: 'input[type="checkbox"]',
            options: {
                wrapNative: !0,
                checkedClass: "jcf-checked",
                uncheckedClass: "jcf-unchecked",
                labelActiveClass: "jcf-label-active",
                fakeStructure: '<span class="jcf-checkbox"><span></span></span>'
            },
            matchElement: function(t) {
                return t.is(":checkbox")
            },
            init: function() {
                this.initStructure(), this.attachEvents(), this.refresh()
            },
            initStructure: function() {
                this.doc = t(document), this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeStructure).insertAfter(this.realElement), this.labelElement = this.getLabelFor(), this.options.wrapNative ? this.realElement.appendTo(this.fakeElement).css({
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    opacity: 0,
                    margin: 0
                }) : this.realElement.addClass(this.options.hiddenClass)
            },
            attachEvents: function() {
                this.realElement.on({
                    focus: this.onFocus,
                    click: this.onRealClick
                }), this.fakeElement.on("click", this.onFakeClick), this.fakeElement.on("jcf-pointerdown", this.onPress)
            },
            onRealClick: function(t) {
                var e = this;
                this.savedEventObject = t, setTimeout((function() {
                    e.refresh()
                }), 0)
            },
            onFakeClick: function(t) {
                this.options.wrapNative && this.realElement.is(t.target) || this.realElement.is(":disabled") || (delete this.savedEventObject, this.stateChecked = this.realElement.prop("checked"), this.realElement.prop("checked", !this.stateChecked), this.fireNativeEvent(this.realElement, "click"), this.savedEventObject && this.savedEventObject.isDefaultPrevented() ? this.realElement.prop("checked", this.stateChecked) : this.fireNativeEvent(this.realElement, "change"), delete this.savedEventObject)
            },
            onFocus: function() {
                this.pressedFlag && this.focusedFlag || (this.focusedFlag = !0, this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur))
            },
            onBlur: function() {
                this.pressedFlag || (this.focusedFlag = !1, this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur))
            },
            onPress: function(t) {
                this.focusedFlag || "mouse" !== t.pointerType || this.realElement.focus(), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onRelease)
            },
            onRelease: function(t) {
                this.focusedFlag && "mouse" === t.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onRelease)
            },
            getLabelFor: function() {
                var e = this.realElement.closest("label"),
                    i = this.realElement.prop("id");
                return !e.length && i && (e = t('label[for="' + i + '"]')), e.length ? e : null
            },
            refresh: function() {
                var t = this.realElement.is(":checked"),
                    e = this.realElement.is(":disabled");
                this.fakeElement.toggleClass(this.options.checkedClass, t).toggleClass(this.options.uncheckedClass, !t).toggleClass(this.options.disabledClass, e), this.labelElement && this.labelElement.toggleClass(this.options.labelActiveClass, t)
            },
            destroy: function() {
                this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                    position: "",
                    width: "",
                    height: "",
                    opacity: "",
                    margin: ""
                }) : this.realElement.removeClass(this.options.hiddenClass), this.fakeElement.off("jcf-pointerdown", this.onPress), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onRelease), this.realElement.off({
                    focus: this.onFocus,
                    click: this.onRealClick
                })
            }
        })
    }(jQuery),
    function(t) {
        "use strict";
        jcf.addModule({
            name: "Radio",
            selector: 'input[type="radio"]:not(.bpk-radio__input)',
            options: {
                wrapNative: !0,
                checkedClass: "jcf-checked",
                uncheckedClass: "jcf-unchecked",
                labelActiveClass: "jcf-label-active",
                fakeStructure: '<span class="jcf-radio"><span></span></span>'
            },
            matchElement: function(t) {
                return t.is(":radio")
            },
            init: function() {
                this.initStructure(), this.attachEvents(), this.refresh()
            },
            initStructure: function() {
                this.doc = t(document), this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeStructure).insertAfter(this.realElement), this.labelElement = this.getLabelFor(), this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
                    position: "absolute",
                    opacity: 0
                }) : this.realElement.addClass(this.options.hiddenClass)
            },
            attachEvents: function() {
                this.realElement.on({
                    focus: this.onFocus,
                    click: this.onRealClick
                }), this.fakeElement.on("click", this.onFakeClick), this.fakeElement.on("jcf-pointerdown", this.onPress)
            },
            onRealClick: function(t) {
                var e = this;
                this.savedEventObject = t, setTimeout((function() {
                    e.refreshRadioGroup()
                }), 0)
            },
            onFakeClick: function(t) {
                this.options.wrapNative && this.realElement.is(t.target) || this.realElement.is(":disabled") || (delete this.savedEventObject, this.currentActiveRadio = this.getCurrentActiveRadio(), this.stateChecked = this.realElement.prop("checked"), this.realElement.prop("checked", !0), this.fireNativeEvent(this.realElement, "click"), this.savedEventObject && this.savedEventObject.isDefaultPrevented() ? (this.realElement.prop("checked", this.stateChecked), this.currentActiveRadio.prop("checked", !0)) : this.fireNativeEvent(this.realElement, "change"), delete this.savedEventObject)
            },
            onFocus: function() {
                this.pressedFlag && this.focusedFlag || (this.focusedFlag = !0, this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur))
            },
            onBlur: function() {
                this.pressedFlag || (this.focusedFlag = !1, this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur))
            },
            onPress: function(t) {
                this.focusedFlag || "mouse" !== t.pointerType || this.realElement.focus(), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onRelease)
            },
            onRelease: function(t) {
                this.focusedFlag && "mouse" === t.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onRelease)
            },
            getCurrentActiveRadio: function() {
                return this.getRadioGroup(this.realElement).filter(":checked")
            },
            getRadioGroup: function(e) {
                var i = e.attr("name"),
                    s = e.parents("form");
                return i ? s.length ? s.find('input[name="' + i + '"]') : t('input[name="' + i + '"]:not(form input)') : e
            },
            getLabelFor: function() {
                var e = this.realElement.closest("label"),
                    i = this.realElement.prop("id");
                return !e.length && i && (e = t('label[for="' + i + '"]')), e.length ? e : null
            },
            refreshRadioGroup: function() {
                this.getRadioGroup(this.realElement).each((function() {
                    jcf.refresh(this)
                }))
            },
            refresh: function() {
                var t = this.realElement.is(":checked"),
                    e = this.realElement.is(":disabled");
                this.fakeElement.toggleClass(this.options.checkedClass, t).toggleClass(this.options.uncheckedClass, !t).toggleClass(this.options.disabledClass, e), this.labelElement && this.labelElement.toggleClass(this.options.labelActiveClass, t)
            },
            destroy: function() {
                this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                    position: "",
                    width: "",
                    height: "",
                    opacity: "",
                    margin: ""
                }) : this.realElement.removeClass(this.options.hiddenClass), this.fakeElement.off("jcf-pointerdown", this.onPress), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onRelease), this.realElement.off({
                    blur: this.onBlur,
                    focus: this.onFocus,
                    click: this.onRealClick
                })
            }
        })
    }(jQuery),
    function(t) {
        "use strict";
        jcf.addModule({
            name: "File",
            selector: 'input[type="file"]',
            options: {
                fakeStructure: '<span class="jcf-file"><span class="jcf-fake-input"></span><span class="jcf-upload-button"><span class="jcf-button-content"></span></span></span>',
                buttonText: "Choose file",
                placeholderText: "No file chosen",
                realElementClass: "jcf-real-element",
                extensionPrefixClass: "jcf-extension-",
                selectedFileBlock: ".jcf-fake-input",
                buttonTextBlock: ".jcf-button-content"
            },
            matchElement: function(t) {
                return t.is('input[type="file"]')
            },
            init: function() {
                this.initStructure(), this.attachEvents(), this.refresh()
            },
            initStructure: function() {
                this.doc = t(document), this.realElement = t(this.options.element).addClass(this.options.realElementClass), this.fakeElement = t(this.options.fakeStructure).insertBefore(this.realElement), this.fileNameBlock = this.fakeElement.find(this.options.selectedFileBlock), this.buttonTextBlock = this.fakeElement.find(this.options.buttonTextBlock).text(this.options.buttonText), this.realElement.appendTo(this.fakeElement).css({
                    position: "absolute",
                    opacity: 0
                })
            },
            attachEvents: function() {
                this.realElement.on({
                    "jcf-pointerdown": this.onPress,
                    change: this.onChange,
                    focus: this.onFocus
                })
            },
            onChange: function() {
                this.refresh()
            },
            onFocus: function() {
                this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur)
            },
            onBlur: function() {
                this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur)
            },
            onPress: function() {
                this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onRelease)
            },
            onRelease: function() {
                this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onRelease)
            },
            getFileName: function() {
                var e = "",
                    i = this.realElement.prop("files");
                return i && i.length ? t.each(i, (function(t, i) {
                    e += (t > 0 ? ", " : "") + i.name
                })) : e = this.realElement.val().replace(/^[\s\S]*(?:\\|\/)([\s\S^\\\/]*)$/g, "$1"), e
            },
            getFileExtension: function() {
                var t = this.realElement.val();
                return t.lastIndexOf(".") < 0 ? "" : t.substring(t.lastIndexOf(".") + 1).toLowerCase()
            },
            updateExtensionClass: function() {
                var t = this.getFileExtension(),
                    e = this.fakeElement.prop("className").replace(new RegExp("(\\s|^)" + this.options.extensionPrefixClass + "[^ ]+", "gi"), "");
                this.fakeElement.prop("className", e), t && this.fakeElement.addClass(this.options.extensionPrefixClass + t)
            },
            refresh: function() {
                var t = this.getFileName() || this.options.placeholderText;
                this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")), this.fileNameBlock.text(t), this.updateExtensionClass()
            },
            destroy: function() {
                this.realElement.insertBefore(this.fakeElement).removeClass(this.options.realElementClass).css({
                    position: "",
                    opacity: ""
                }), this.fakeElement.remove(), this.realElement.off({
                    "jcf-pointerdown": this.onPress,
                    change: this.onChange,
                    focus: this.onFocus,
                    blur: this.onBlur
                }), this.doc.off("jcf-pointerup", this.onRelease)
            }
        })
    }(jQuery), window.ResponsiveHelper = function(t) {
        var e, i = [],
            s = t(window),
            n = !1;

        function o() {
            var n = s.width();
            n !== e && (e = n, t.each(i, (function(e, i) {
                t.each(i.data, (function(t, e) {
                    e.currentActive && !a(e.range[0], e.range[1]) && (e.currentActive = !1, "function" == typeof e.disableCallback && e.disableCallback())
                })), t.each(i.data, (function(t, e) {
                    !e.currentActive && a(e.range[0], e.range[1]) && (e.currentActive = !0, "function" == typeof e.enableCallback && e.enableCallback())
                }))
            })))
        }

        function a(t, i) {
            var s = "";
            return t > 0 && (s += "(min-width: " + t + "px)"), i < 1 / 0 && (s += (s ? " and " : "") + "(max-width: " + i + "px)"),
                function(t, i, s) {
                    return window.matchMedia && n ? matchMedia(t).matches : window.styleMedia ? styleMedia.matchMedium(t) : window.media ? media.matchMedium(t) : e >= i && e <= s
                }(s, t, i)
        }
        return window.matchMedia && (window.Window && window.matchMedia === Window.prototype.matchMedia || window.matchMedia.toString().indexOf("native") > -1) && (n = !0), s.bind("load resize orientationchange", o), {
            addRange: function(s) {
                var n = {
                    data: {}
                };
                t.each(s, (function(t, e) {
                    var i, s;
                    n.data[t] = {
                        range: (i = t, s = i.split(".."), [parseInt(s[0], 10) || -1 / 0, parseInt(s[1], 10) || 1 / 0].sort((function(t, e) {
                            return t - e
                        }))),
                        enableCallback: e.on,
                        disableCallback: e.off
                    }
                })), i.push(n), e = null, o()
            }
        }
    }(jQuery),
    function(t) {
        function e(e) {
            this.options = t.extend({
                container: null,
                hideOnClickOutside: !1,
                menuActiveClass: "nav-active",
                menuOpener: ".nav-opener",
                menuDrop: ".nav-drop",
                toggleEvent: "click",
                outsideClickEvent: "click touchstart pointerdown MSPointerDown"
            }, e), this.initStructure(), this.attachEvents()
        }
        e.prototype = {
            initStructure: function() {
                this.page = t("html"), this.container = t(this.options.container), this.opener = this.container.find(this.options.menuOpener), this.drop = this.container.find(this.options.menuDrop)
            },
            attachEvents: function() {
                var e = this;
                i && (i(), i = null), this.outsideClickHandler = function(i) {
                    if (e.isOpened()) {
                        var s = t(i.target);
                        s.closest(e.opener).length || s.closest(e.drop).length || e.hide()
                    }
                }, this.openerClickHandler = function(t) {
                    t.preventDefault(), e.toggle()
                }, this.opener.on(this.options.toggleEvent, this.openerClickHandler)
            },
            isOpened: function() {
                return this.container.hasClass(this.options.menuActiveClass)
            },
            show: function() {
                this.container.addClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.on(this.options.outsideClickEvent, this.outsideClickHandler)
            },
            hide: function() {
                this.container.removeClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.off(this.options.outsideClickEvent, this.outsideClickHandler)
            },
            toggle: function() {
                this.isOpened() ? this.hide() : this.show()
            },
            destroy: function() {
                this.container.removeClass(this.options.menuActiveClass), this.opener.off(this.options.toggleEvent, this.clickHandler), this.page.off(this.options.outsideClickEvent, this.outsideClickHandler)
            }
        };
        var i = function() {
            var e, i, s = t(window),
                n = t("html"),
                o = "resize-active",
                a = function() {
                    e = !1, n.removeClass(o)
                };
            s.on("resize orientationchange", (function() {
                e || (e = !0, n.addClass(o)), clearTimeout(i), i = setTimeout(a, 500)
            }))
        };
        t.fn.mobileNav = function(i) {
            var s = Array.prototype.slice.call(arguments),
                n = s[0];
            return this.each((function() {
                var o = jQuery(this),
                    a = o.data("MobileNav");
                "object" == typeof i || void 0 === i ? o.data("MobileNav", new e(t.extend({
                    container: this
                }, i))) : "string" == typeof n && a && "function" == typeof a[n] && (s.shift(), a[n].apply(a, s))
            }))
        }
    }(jQuery),
    function(t) {
        function e(e) {
            this.options = t.extend({
                holder: null,
                popup: ".popup",
                btnOpen: ".open",
                btnClose: ".close",
                openClass: "popup-active",
                clickEvent: "click",
                mode: "click",
                hideOnClickLink: !0,
                hideOnClickOutside: !0,
                delay: 50
            }, e), this.options.holder && (this.holder = t(this.options.holder), this.init())
        }
        e.prototype = {
            init: function() {
                this.findElements(), this.attachEvents()
            },
            findElements: function() {
                this.popup = this.holder.find(this.options.popup), this.btnOpen = this.holder.find(this.options.btnOpen), this.btnClose = this.holder.find(this.options.btnClose)
            },
            attachEvents: function() {
                var t = this;
                if (this.clickMode = i || t.options.mode === t.options.clickEvent, this.clickMode) this.btnOpen.bind(t.options.clickEvent + ".popup", (function(e) {
                    t.holder.hasClass(t.options.openClass) ? t.options.hideOnClickLink && t.hidePopup() : t.showPopup(), e.preventDefault()
                })), this.outsideClickHandler = this.bind(this.outsideClickHandler, this);
                else {
                    var e, s = function(i) {
                        clearTimeout(e), e = setTimeout((function() {
                            i.call(t)
                        }), t.options.delay)
                    };
                    this.btnOpen.on("mouseover.popup", (function() {
                        s(t.showPopup)
                    })).on("mouseout.popup", (function() {
                        s(t.hidePopup)
                    })), this.popup.on("mouseover.popup", (function() {
                        s(t.showPopup)
                    })).on("mouseout.popup", (function() {
                        s(t.hidePopup)
                    }))
                }
                this.btnClose.on(t.options.clickEvent + ".popup", (function(e) {
                    t.hidePopup(), e.preventDefault()
                }))
            },
            outsideClickHandler: function(e) {
                var i = t((e.changedTouches ? e.changedTouches[0] : e).target);
                i.closest(this.popup).length || i.closest(this.btnOpen).length || this.hidePopup()
            },
            showPopup: function() {
                this.holder.addClass(this.options.openClass), this.popup.css({
                    display: "block"
                }), this.clickMode && this.options.hideOnClickOutside && !this.outsideHandlerActive && (this.outsideHandlerActive = !0, t(document).on("click touchstart", this.outsideClickHandler))
            },
            hidePopup: function() {
                this.holder.removeClass(this.options.openClass), this.popup.css({
                    display: "none"
                }), this.clickMode && this.options.hideOnClickOutside && this.outsideHandlerActive && (this.outsideHandlerActive = !1, t(document).off("click touchstart", this.outsideClickHandler))
            },
            bind: function(t, e, i) {
                return function() {
                    return t.apply(e, i ? [i] : arguments)
                }
            },
            destroy: function() {
                this.popup.removeAttr("style"), this.holder.removeClass(this.options.openClass), this.btnOpen.add(this.btnClose).add(this.popup).off(".popup"), t(document).off("click touchstart", this.outsideClickHandler)
            }
        };
        var i = /Windows Phone/.test(navigator.userAgent) || "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
        t.fn.contentPopup = function(i) {
            var s = Array.prototype.slice.call(arguments),
                n = s[0];
            return this.each((function() {
                var o = jQuery(this),
                    a = o.data("ContentPopup");
                "object" == typeof i || void 0 === i ? o.data("ContentPopup", new e(t.extend({
                    holder: this
                }, i))) : "string" == typeof n && a && "function" == typeof a[n] && (s.shift(), a[n].apply(a, s))
            }))
        }
    }(jQuery), $("#personalization_form").submit((function(t) {
        $(".isotope-item").not(".widget-holder").is(":visible") && t.preventDefault()
    })), $(document).on("click", ".nav-opener", (function(t) {
        $(".search-popup-opener").hasClass("opened_opened") && ($(".search-popup-opener").removeClass("opened_opened").find(".icon").removeClass("fa-times").addClass("fa-search"), $(".search-popup-holder .popups").fadeOut())
    })), $(document).on("click", ".mobile-menu-frame > ul  > li > a ", (function(t) {
        var e = $(this).parent();
        if (e.has(">ul").length) return e.find("> ul").slideToggle(), e.siblings().find(">ul").slideUp(), !1
    })), $(document).on("click", ".mobile-menu-frame > ul  > li > ul li a ", (function(t) {
        var e = $(this).parent();
        if (e.has("ul").length) return e.find(" ul").addClass("sub_active"), !1
    })), $(document).on("click", ".sub_active li:first span", (function() {
        $(this).closest(".sub_active ").removeClass("sub_active")
    }));
var tabInterval = setInterval((function() {
    if ($(".tabs-holder").find(".TabHeader__tabHeader___2mZxq").length) {
        var t = $("#third_tab a").clone();
        t.addClass("third_tab_a"), $(".TabHeader__tabHeader___2mZxq").eq(1).after(t), clearInterval(tabInterval)
    }
}), 300);

function SearchPopupToggle() {
    var t = $(".search-popup-opener");
    t.hasClass("opened_opened") ? (t.find(".icon").removeClass("fa-times").addClass("fa-search"), t.removeClass("opened_opened"), $(".search-popup-holder .popups").fadeOut()) : (t.addClass("opened_opened").find(".icon").removeClass("fa-search").addClass("fa-times"), $(".search-popup-holder .popups").fadeIn()), $("#search_input").focus()
}

function initFitVids() {
    jQuery("#wrapper").fitVids()
}
/*!
 * FitVids 1.0.3
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */
function initAnchors() {
    var t;
    ResponsiveHelper.addRange({
        "768..": {
            on: function() {
                t = new SmoothScroll({
                    anchorLinks: '.section-page-navigation a[href^="#"]:not([href="#"])',
                    extraOffset: function() {
                        var t = 0;
                        return jQuery(".header").each((function() {
                            var e = jQuery(this),
                                i = e.data("StickyScrollBlock");
                            i ? (i.stickyFlag = !1, i.stickyOn(), t += e.outerHeight(), i.onResize()) : t += "fixed" === e.css("position") ? e.outerHeight() : 0
                        })), t
                    },
                    wheelBehavior: "none"
                })
            },
            off: function() {
                t.destroy()
            }
        }
    })
}
/*!
 * SmoothScroll module
 */
function initFancyBox() {
    $(".lightbox-opener").fancybox({
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small fas fa-times" title="{{CLOSE}}"></button>'
        }
    }), $('[data-fancybox="gallery"]').not('.slick-cloned [data-fancybox="gallery"]').fancybox({
        infobar: !1,
        buttons: !1,
        thumbs: {
            autoStart: !0,
            axis: "x"
        },
        afterLoad: function(t, e) {
            e.$content.append('<a data-fancybox-close class="button-close  __fancy_close" href="javascript:;">x</a>')
        }
    })
}
$(document).click((function(t) {
        var e = $("#desktop-nav");
        e.is(t.target) || 0 !== e.has(t.target).length || $(".sub-menu.open").removeClass("open")
    })), $(document).on("click", (function(t) {
        var e = $("#desktop-nav");
        e === t.target || e.has(t.target).length || $(".dropdown-menu").slideUp("fast")
    })), $(".search-popup-opener").click(SearchPopupToggle), $(".share_toggle").click((function(t) {
        t.preventDefault();
        var e = $(this);
        e.toggleClass("fa-share-alt").toggleClass("fa-times").next("ul").fadeToggle(500), e.parent().siblings().toggleClass("none_visible")
    })), $(".share_toggle2").click((function(t) {
        t.preventDefault(), t.stopPropagation();
        var e = $(this);
        e.toggleClass("active_share").find(".icon").toggleClass("fa-share-alt").toggleClass("fa-times").next("ul").fadeToggle(500), e.next("ul").fadeToggle(500)
    })), $(document).on("click", ".third_tab_a", (function(t) {
        if (t.preventDefault(), $(this).addClass("active"), $(".TabHeader__tabHeader___2mZxq").removeClass("active"), $(".vertical-tabs-content >div").not(".third_tab_form").fadeOut(0), $(".PoweredBySkyscanner__poweredBySkyscanner___2Q5Yy").fadeOut(0), 0 === $(".vertical-tabs-content").children(".third_tab_form").length) {
            var e = $("#third_tab_form");
            e.addClass("none_tab"), $(".vertical-tabs-content").append(e)
        } else $(".vertical-tabs-content .third_tab_form").addClass("none_tab")
    })), $(document).on("click", ".TabHeader__tabHeader___2mZxq", (function() {
        $(".PoweredBySkyscanner__poweredBySkyscanner___2Q5Yy").fadeIn(0), $(this).addClass("active"), $(".third_tab_a").removeClass("active"), $(".none_tab").removeClass("none_tab"), $(".vertical-tabs-content > div").not(".third_tab_form").fadeIn(0)
    })),
    function(t) {
        t.fn.fitVids = function(e) {
            var i = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var s = document.createElement("div"),
                    n = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
                s.className = "fit-vids-style", s.id = "fit-vids-style", s.style.display = "none", s.innerHTML = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>", n.parentNode.insertBefore(s, n)
            }
            return e && t.extend(i, e), this.each((function() {
                var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var s = t(this).find(e.join(","));
                (s = s.not("object object")).each((function() {
                    var e = t(this);
                    if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        var i = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                        if (!e.attr("id")) {
                            var s = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", s)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"), e.removeAttr("height").removeAttr("width")
                    }
                }))
            }))
        }
    }(window.jQuery || window.Zepto),
    function(t, e) {
        var i, s, n, o = t(window),
            a = "onwheel" in document || document.documentMode >= 9 ? "wheel" : "mousewheel DOMMouseScroll";

        function r(e, o, r) {
            var l;
            document.body && (o = "number" == typeof o ? {
                duration: o
            } : o || {}, i = i || t("html, body"), l = o.container || i, "number" == typeof e && (e = {
                top: e
            }), s && n && s.off(a, n), o.wheelBehavior && "none" !== o.wheelBehavior && (n = function(t) {
                "stop" === o.wheelBehavior ? (l.off(a, n), l.stop()) : "ignore" === o.wheelBehavior && t.preventDefault()
            }, s = l.on(a, n)), l.stop().animate({
                scrollLeft: e.left,
                scrollTop: e.top
            }, o.duration, (function() {
                n && l.off(a, n), t.isFunction(r) && r()
            })))
        }

        function l(e) {
            this.options = t.extend({
                anchorLinks: 'a[href^="#"]',
                container: null,
                extraOffset: null,
                activeClasses: null,
                easing: "swing",
                animMode: "duration",
                animDuration: 800,
                animSpeed: 1500,
                anchorActiveClass: "anchor-active",
                sectionActiveClass: "section-active",
                wheelBehavior: "stop",
                useNativeAnchorScrolling: !1
            }, e), this.init()
        }
        l.prototype = {
            init: function() {
                this.initStructure(), this.attachEvents(), this.isInit = !0
            },
            initStructure: function() {
                var e = this;
                this.container = this.options.container ? t(this.options.container) : t("html,body"), this.scrollContainer = this.options.container ? this.container : o, this.anchorLinks = jQuery(this.options.anchorLinks).filter((function() {
                    return jQuery(e.getAnchorTarget(jQuery(this))).length
                }))
            },
            getId: function(t) {
                try {
                    return "#" + t.replace(/^.*?(#|$)/, "")
                } catch (t) {
                    return null
                }
            },
            getAnchorTarget: function(e) {
                var i = this.getId(t(e).attr("href"));
                return t(i.length > 1 ? i : "html")
            },
            getTargetOffset: function(t) {
                var e = t.offset().top;
                return this.options.container && (e -= this.container.offset().top - this.container.prop("scrollTop")), "number" == typeof this.options.extraOffset ? e -= this.options.extraOffset : "function" == typeof this.options.extraOffset && (e -= this.options.extraOffset(t)), {
                    top: e
                }
            },
            attachEvents: function() {
                var e = this;
                if (this.options.activeClasses && this.anchorLinks.length) {
                    this.anchorData = [];
                    for (var i = 0; i < this.anchorLinks.length; i++) {
                        var s = jQuery(this.anchorLinks[i]),
                            n = e.getAnchorTarget(s),
                            a = null;
                        t.each(e.anchorData, (function(t, e) {
                            e.block[0] === n[0] && (a = e)
                        })), a ? a.link = a.link.add(s) : e.anchorData.push({
                            link: s,
                            block: n
                        })
                    }
                    this.resizeHandler = function() {
                        e.isInit && e.recalculateOffsets()
                    }, this.scrollHandler = function() {
                        e.refreshActiveClass()
                    }, this.recalculateOffsets(), this.scrollContainer.on("scroll", this.scrollHandler), o.on("resize.SmoothScroll load.SmoothScroll orientationchange.SmoothScroll refreshAnchor.SmoothScroll", this.resizeHandler)
                }
                this.clickHandler = function(t) {
                    e.onClick(t)
                }, this.options.useNativeAnchorScrolling || this.anchorLinks.on("click", this.clickHandler)
            },
            recalculateOffsets: function() {
                var e = this;
                t.each(this.anchorData, (function(t, i) {
                    i.offset = e.getTargetOffset(i.block), i.height = i.block.outerHeight()
                })), this.refreshActiveClass()
            },
            toggleActiveClass: function(t, e, i) {
                t.toggleClass(this.options.anchorActiveClass, i), e.toggleClass(this.options.sectionActiveClass, i)
            },
            refreshActiveClass: function() {
                var e = this,
                    i = !1,
                    s = this.container.prop("scrollHeight"),
                    n = this.scrollContainer.height(),
                    a = this.options.container ? this.container.prop("scrollTop") : o.scrollTop();
                this.options.customScrollHandler ? this.options.customScrollHandler.call(this, a, this.anchorData) : (this.anchorData.sort((function(t, e) {
                    return t.offset.top - e.offset.top
                })), t.each(this.anchorData, (function(t) {
                    var o = e.anchorData.length - t - 1,
                        r = e.anchorData[o],
                        l = "parent" === e.options.activeClasses ? r.link.parent() : r.link;
                    a >= s - n ? o === e.anchorData.length - 1 ? e.toggleActiveClass(l, r.block, !0) : e.toggleActiveClass(l, r.block, !1) : !i && (a >= r.offset.top - 1 || 0 === o) ? (i = !0, e.toggleActiveClass(l, r.block, !0)) : e.toggleActiveClass(l, r.block, !1)
                })))
            },
            calculateScrollDuration: function(t) {
                return "speed" === this.options.animMode ? Math.abs(this.scrollContainer.scrollTop() - t.top) / this.options.animSpeed * 1e3 : this.options.animDuration
            },
            onClick: function(t) {
                var e = this.getAnchorTarget(t.currentTarget),
                    i = this.getTargetOffset(e);
                t.preventDefault(), r(i, {
                    container: this.container,
                    wheelBehavior: this.options.wheelBehavior,
                    duration: this.calculateScrollDuration(i)
                }), this.makeCallback("onBeforeScroll", t.currentTarget)
            },
            makeCallback: function(t) {
                if ("function" == typeof this.options[t]) {
                    var e = Array.prototype.slice.call(arguments);
                    e.shift(), this.options[t].apply(this, e)
                }
            },
            destroy: function() {
                var e = this;
                this.isInit = !1, this.options.activeClasses && (o.off("resize.SmoothScroll load.SmoothScroll orientationchange.SmoothScroll refreshAnchor.SmoothScroll", this.resizeHandler), this.scrollContainer.off("scroll", this.scrollHandler), t.each(this.anchorData, (function(t) {
                    var i = e.anchorData.length - t - 1,
                        s = e.anchorData[i],
                        n = "parent" === e.options.activeClasses ? s.link.parent() : s.link;
                    e.toggleActiveClass(n, s.block, !1)
                }))), this.anchorLinks.off("click", this.clickHandler)
            }
        }, t.extend(l, {
            scrollTo: function(t, e, i) {
                r(t, e, i)
            }
        }), e.SmoothScroll = l
    }(jQuery, this),
    function(t, e, i, s) {
        "use strict";
        if (t.console = t.console || {
                info: function(t) {}
            }, i)
            if (i.fn.fancybox) console.info("fancyBox already initialized");
            else {
                var n, o, a, r, l = {
                        closeExisting: !1,
                        loop: !1,
                        gutter: 50,
                        keyboard: !0,
                        preventCaptionOverlap: !0,
                        arrows: !0,
                        infobar: !0,
                        smallBtn: "auto",
                        toolbar: "auto",
                        buttons: ["zoom", "slideShow", "thumbs", "close"],
                        idleTime: 3,
                        protect: !1,
                        modal: !1,
                        image: {
                            preload: !1
                        },
                        ajax: {
                            settings: {
                                data: {
                                    fancybox: !0
                                }
                            }
                        },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true"></iframe>',
                            preload: !0,
                            css: {},
                            attr: {
                                scrolling: "auto"
                            }
                        },
                        video: {
                            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                            format: "",
                            autoStart: !0
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 366,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                        btnTpl: {
                            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                        },
                        parentEl: "body",
                        hideScrollbar: !0,
                        autoFocus: !0,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: {
                            autoStart: !1
                        },
                        touch: {
                            vertical: !0,
                            momentum: !0
                        },
                        hash: null,
                        media: {},
                        slideShow: {
                            autoStart: !1,
                            speed: 3e3
                        },
                        thumbs: {
                            autoStart: !1,
                            hideOnClose: !0,
                            parentEl: ".fancybox-container",
                            axis: "y"
                        },
                        wheel: "auto",
                        onInit: i.noop,
                        beforeLoad: i.noop,
                        afterLoad: i.noop,
                        beforeShow: i.noop,
                        afterShow: i.noop,
                        beforeClose: i.noop,
                        afterClose: i.noop,
                        onActivate: i.noop,
                        onDeactivate: i.noop,
                        clickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            preventCaptionOverlap: !1,
                            idleTime: !1,
                            clickContent: function(t, e) {
                                return "image" === t.type && "toggleControls"
                            },
                            clickSlide: function(t, e) {
                                return "image" === t.type ? "toggleControls" : "close"
                            },
                            dblclickContent: function(t, e) {
                                return "image" === t.type && "zoom"
                            },
                            dblclickSlide: function(t, e) {
                                return "image" === t.type && "zoom"
                            }
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom"
                            },
                            de: {
                                CLOSE: "Schlie&szlig;en",
                                NEXT: "Weiter",
                                PREV: "Zur&uuml;ck",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Vergr&ouml;&szlig;ern"
                            }
                        }
                    },
                    c = i(t),
                    d = i(e),
                    h = 0,
                    u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                        return t.setTimeout(e, 1e3 / 60)
                    },
                    p = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                        t.clearTimeout(e)
                    },
                    f = function() {
                        var t, i = e.createElement("fakeelement"),
                            n = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (t in n)
                            if (i.style[t] !== s) return n[t];
                        return "transitionend"
                    }(),
                    g = function(t) {
                        return t && t.length && t[0].offsetHeight
                    },
                    m = function(t, e) {
                        var s = i.extend(!0, {}, t, e);
                        return i.each(e, (function(t, e) {
                            i.isArray(e) && (s[t] = e)
                        })), s
                    },
                    v = function(t, e, s) {
                        var n = this;
                        n.opts = m({
                            index: s
                        }, i.fancybox.defaults), i.isPlainObject(e) && (n.opts = m(n.opts, e)), i.fancybox.isMobile && (n.opts = m(n.opts, n.opts.mobile)), n.id = n.opts.id || ++h, n.currIndex = parseInt(n.opts.index, 10) || 0, n.prevIndex = null, n.prevPos = null, n.currPos = 0, n.firstRun = !0, n.group = [], n.slides = {}, n.addContent(t), n.group.length && n.init()
                    };
                i.extend(v.prototype, {
                    init: function() {
                        var s, n, o = this,
                            a = o.group[o.currIndex].opts;
                        a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), n = "", i.each(a.buttons, (function(t, e) {
                            n += a.btnTpl[e] || ""
                        })), s = i(o.translate(o, a.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(a.baseClass).data("FancyBox", o).appendTo(a.parentEl), o.$refs = {
                            container: s
                        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(t) {
                            o.$refs[t] = s.find(".fancybox-" + t)
                        })), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                    },
                    translate: function(t, e) {
                        var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                        return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                            return i[e] === s ? t : i[e]
                        }))
                    },
                    addContent: function(t) {
                        var e, n = this,
                            o = i.makeArray(t);
                        i.each(o, (function(t, e) {
                            var o, a, r, l, c, d = {},
                                h = {};
                            i.isPlainObject(e) ? (d = e, h = e.opts || e) : "object" === i.type(e) && i(e).length ? (h = (o = i(e)).data() || {}, (h = i.extend(!0, {}, h, h.options)).$orig = o, d.src = n.opts.src || h.src || o.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
                                type: "html",
                                src: e + ""
                            }, d.opts = i.extend(!0, {}, n.opts, h), i.isArray(h.buttons) && (d.opts.buttons = h.buttons), i.fancybox.isMobile && d.opts.mobile && (d.opts = m(d.opts, d.opts.mobile)), a = d.type || d.opts.type, l = d.src || "", !a && l && ((r = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", d = i.extend(!0, d, {
                                contentType: "pdf",
                                opts: {
                                    iframe: {
                                        preload: !1
                                    }
                                }
                            })) : "#" === l.charAt(0) && (a = "inline")), a ? d.type = a : n.trigger("objectNeedsType", d), d.contentType || (d.contentType = i.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = n.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = i.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.$thumb = d.opts.$thumb || null, d.opts.$trigger && d.index === n.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"), d.$thumb.length && (d.opts.$orig = d.opts.$trigger)), d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")), d.$thumb && !d.$thumb.length && (d.$thumb = null), d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null), "function" === i.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [n, d])), "function" === i.type(n.opts.caption) && (d.opts.caption = n.opts.caption.apply(e, [n, d])), d.opts.caption instanceof i || (d.opts.caption = d.opts.caption === s ? "" : d.opts.caption + ""), "ajax" === d.type && (c = l.split(/\s+/, 2)).length > 1 && (d.src = c.shift(), d.opts.filter = c.shift()), d.opts.modal && (d.opts = i.extend(!0, d.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1
                            })), n.group.push(d)
                        })), Object.keys(n.slides).length && (n.updateControls(), (e = n.Thumbs) && e.isActive && (e.create(), e.focus()))
                    },
                    addEvents: function() {
                        var e = this;
                        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.close(t)
                        })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.previous()
                        })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.next()
                        })).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                            e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                        })), c.on("orientationchange.fb resize.fb", (function(t) {
                            t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && p(e.requestId), e.requestId = u((function() {
                                e.update(t)
                            }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function() {
                                e.$refs.stage.show(), e.update(t)
                            }), i.fancybox.isMobile ? 600 : 250))
                        })), d.on("keydown.fb", (function(t) {
                            var s = (i.fancybox ? i.fancybox.getInstance() : null).current,
                                n = t.keyCode || t.which;
                            if (9 != n) {
                                if (!(!s.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio,select"))) return 8 === n || 27 === n ? (t.preventDefault(), void e.close(t)) : 37 === n || 38 === n ? (t.preventDefault(), void e.previous()) : 39 === n || 40 === n ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, n)
                            } else s.opts.trapFocus && e.focus(t)
                        })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, d.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                            e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                        })), e.idleInterval = t.setInterval((function() {
                            e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                        }), 1e3))
                    },
                    removeEvents: function() {
                        var e = this;
                        c.off("orientationchange.fb resize.fb"), d.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                    },
                    previous: function(t) {
                        return this.jumpTo(this.currPos - 1, t)
                    },
                    next: function(t) {
                        return this.jumpTo(this.currPos + 1, t)
                    },
                    jumpTo: function(t, e) {
                        var n, o, a, r, l, c, d, h, u, p = this,
                            f = p.group.length;
                        if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
                            if (t = parseInt(t, 10), !(a = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= f)) return !1;
                            if (n = p.firstRun = !Object.keys(p.slides).length, l = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, r = p.createSlide(t), f > 1 && ((a || r.index < f - 1) && p.createSlide(t + 1), (a || r.index > 0) && p.createSlide(t - 1)), p.current = r, p.currIndex = r.index, p.currPos = r.pos, p.trigger("beforeShow", n), p.updateControls(), r.forcedDuration = s, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[n ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), o = p.isMoved(r), r.$slide.addClass("fancybox-slide--current"), n) return r.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.addClass("fancybox-is-open").trigger("focus"), p.loadSlide(r), void p.preload("image");
                            c = i.fancybox.getTranslate(l.$slide), d = i.fancybox.getTranslate(p.$refs.stage), i.each(p.slides, (function(t, e) {
                                i.fancybox.stop(e.$slide, !0)
                            })), l.pos !== r.pos && (l.isComplete = !1), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (u = c.left - (l.pos * c.width + l.pos * l.opts.gutter), i.each(p.slides, (function(t, s) {
                                s.$slide.removeClass("fancybox-animated").removeClass((function(t, e) {
                                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                }));
                                var n = s.pos * c.width + s.pos * s.opts.gutter;
                                i.fancybox.setTranslate(s.$slide, {
                                    top: 0,
                                    left: n - d.left + u
                                }), s.pos !== r.pos && s.$slide.addClass("fancybox-slide--" + (s.pos > r.pos ? "next" : "previous")), g(s.$slide), i.fancybox.animate(s.$slide, {
                                    top: 0,
                                    left: (s.pos - r.pos) * c.width + (s.pos - r.pos) * s.opts.gutter
                                }, e, (function() {
                                    s.$slide.css({
                                        transform: "",
                                        opacity: ""
                                    }).removeClass("fancybox-slide--next fancybox-slide--previous"), s.pos === p.currPos && p.complete()
                                }))
                            }))) : e && r.opts.transitionEffect && (h = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, l.$slide.addClass("fancybox-slide--" + (l.pos > r.pos ? "next" : "previous")), i.fancybox.animate(l.$slide, h, e, (function() {
                                l.$slide.removeClass(h).removeClass("fancybox-slide--next fancybox-slide--previous")
                            }), !1)), r.isLoaded ? p.revealContent(r) : p.loadSlide(r), p.preload("image")
                        }
                    },
                    createSlide: function(t) {
                        var e, s, n = this;
                        return s = (s = t % n.group.length) < 0 ? n.group.length + s : s, !n.slides[t] && n.group[s] && (e = i('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[t] = i.extend(!0, {}, n.group[s], {
                            pos: t,
                            $slide: e,
                            isLoaded: !1
                        }), n.updateSlide(n.slides[t])), n.slides[t]
                    },
                    scaleToActual: function(t, e, n) {
                        var o, a, r, l, c, d = this,
                            h = d.current,
                            u = h.$content,
                            p = i.fancybox.getTranslate(h.$slide).width,
                            f = i.fancybox.getTranslate(h.$slide).height,
                            g = h.width,
                            m = h.height;
                        d.isAnimating || d.isMoved() || !u || "image" != h.type || !h.isLoaded || h.hasError || (d.isAnimating = !0, i.fancybox.stop(u), t = t === s ? .5 * p : t, e = e === s ? .5 * f : e, (o = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(h.$slide).top, o.left -= i.fancybox.getTranslate(h.$slide).left, l = g / o.width, c = m / o.height, a = .5 * p - .5 * g, r = .5 * f - .5 * m, g > p && ((a = o.left * l - (t * l - t)) > 0 && (a = 0), a < p - g && (a = p - g)), m > f && ((r = o.top * c - (e * c - e)) > 0 && (r = 0), r < f - m && (r = f - m)), d.updateCursor(g, m), i.fancybox.animate(u, {
                            top: r,
                            left: a,
                            scaleX: l,
                            scaleY: c
                        }, n || 366, (function() {
                            d.isAnimating = !1
                        })), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
                    },
                    scaleToFit: function(t) {
                        var e, s = this,
                            n = s.current,
                            o = n.$content;
                        s.isAnimating || s.isMoved() || !o || "image" != n.type || !n.isLoaded || n.hasError || (s.isAnimating = !0, i.fancybox.stop(o), e = s.getFitPos(n), s.updateCursor(e.width, e.height), i.fancybox.animate(o, {
                            top: e.top,
                            left: e.left,
                            scaleX: e.width / o.width(),
                            scaleY: e.height / o.height()
                        }, t || 366, (function() {
                            s.isAnimating = !1
                        })))
                    },
                    getFitPos: function(t) {
                        var e, s, n, o, a = t.$content,
                            r = t.$slide,
                            l = t.width || t.opts.width,
                            c = t.height || t.opts.height,
                            d = {};
                        return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, s = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), s -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = s), (l *= n = Math.min(1, e / l, s / c)) > e - .5 && (l = e), (c *= n) > s - .5 && (c = s), "image" === t.type ? (d.top = Math.floor(.5 * (s - c)) + parseFloat(r.css("paddingTop")), d.left = Math.floor(.5 * (e - l)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (c > l / (o = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / o : l > c * o && (l = c * o)), d.width = l, d.height = c, d)
                    },
                    update: function(t) {
                        var e = this;
                        i.each(e.slides, (function(i, s) {
                            e.updateSlide(s, t)
                        }))
                    },
                    updateSlide: function(t, e) {
                        var s = this,
                            n = t && t.$content,
                            o = t.width || t.opts.width,
                            a = t.height || t.opts.height,
                            r = t.$slide;
                        s.adjustCaption(t), n && (o || a || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(n), i.fancybox.setTranslate(n, s.getFitPos(t)), t.pos === s.currPos && (s.isAnimating = !1, s.updateCursor())), s.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === s.currPos && s.$refs.toolbar.add(s.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), s.trigger("onUpdate", t, e)
                    },
                    centerSlide: function(t) {
                        var e = this,
                            n = e.current,
                            o = n.$slide;
                        !e.isClosing && n && (o.siblings().css({
                            transform: "",
                            opacity: ""
                        }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(o, {
                            top: 0,
                            left: 0,
                            opacity: 1
                        }, t === s ? 0 : t, (function() {
                            o.css({
                                transform: "",
                                opacity: ""
                            }), n.isComplete || e.complete()
                        }), !1))
                    },
                    isMoved: function(t) {
                        var e, s, n = t || this.current;
                        return !!n && (s = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(n.$slide), !n.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - s.top) > .5 || Math.abs(e.left - s.left) > .5))
                    },
                    updateCursor: function(t, e) {
                        var s, n, o = this,
                            a = o.current,
                            r = o.$refs.container;
                        a && !o.isClosing && o.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), n = !!(s = o.canPan(t, e)) || o.isZoomable(), r.toggleClass("fancybox-is-zoomable", n), i("[data-fancybox-zoom]").prop("disabled", !n), s ? r.addClass("fancybox-can-pan") : n && ("zoom" === a.opts.clickContent || i.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? r.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || o.group.length > 1) && "video" !== a.contentType && r.addClass("fancybox-can-swipe"))
                    },
                    isZoomable: function() {
                        var t, e = this,
                            i = e.current;
                        if (i && !e.isClosing && "image" === i.type && !i.hasError) {
                            if (!i.isLoaded) return !0;
                            if ((t = e.getFitPos(i)) && (i.width > t.width || i.height > t.height)) return !0
                        }
                        return !1
                    },
                    isScaledDown: function(t, e) {
                        var n = !1,
                            o = this.current,
                            a = o.$content;
                        return t !== s && e !== s ? n = t < o.width && e < o.height : a && (n = (n = i.fancybox.getTranslate(a)).width < o.width && n.height < o.height), n
                    },
                    canPan: function(t, e) {
                        var n = this.current,
                            o = null,
                            a = !1;
                        return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (a = this.getFitPos(n), t !== s && e !== s ? o = {
                            width: t,
                            height: e
                        } : n.isComplete && (o = i.fancybox.getTranslate(n.$content)), o && a && (a = Math.abs(o.width - a.width) > 1.5 || Math.abs(o.height - a.height) > 1.5)), a
                    },
                    loadSlide: function(t) {
                        var e, s, n, o = this;
                        if (!t.isLoading && !t.isLoaded) {
                            if (t.isLoading = !0, !1 === o.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                            switch (e = t.type, (s = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                                case "image":
                                    o.setImage(t);
                                    break;
                                case "iframe":
                                    o.setIframe(t);
                                    break;
                                case "html":
                                    o.setContent(t, t.src || t.content);
                                    break;
                                case "video":
                                    o.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                    break;
                                case "inline":
                                    i(t.src).length ? o.setContent(t, i(t.src)) : o.setError(t);
                                    break;
                                case "ajax":
                                    o.showLoading(t), n = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                        url: t.src,
                                        success: function(e, i) {
                                            "success" === i && o.setContent(t, e)
                                        },
                                        error: function(e, i) {
                                            e && "abort" !== i && o.setError(t)
                                        }
                                    })), s.one("onReset", (function() {
                                        n.abort()
                                    }));
                                    break;
                                default:
                                    o.setError(t)
                            }
                            return !0
                        }
                    },
                    setImage: function(t) {
                        var s, n = this;
                        setTimeout((function() {
                            var e = t.$image;
                            n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t)
                        }), 50), n.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (s = e.createElement("img")).onerror = function() {
                            i(this).remove(), t.$ghost = null
                        }, s.onload = function() {
                            n.afterLoad(t)
                        }, t.$ghost = i(s).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), n.setBigImage(t)
                    },
                    checkSrcset: function(e) {
                        var i, s, n, o, a = e.opts.srcset || e.opts.image.srcset;
                        if (a) {
                            n = t.devicePixelRatio || 1, o = t.innerWidth * n, s = a.split(",").map((function(t) {
                                var e = {};
                                return t.trim().split(/\s+/).forEach((function(t, i) {
                                    var s = parseInt(t.substring(0, t.length - 1), 10);
                                    if (0 === i) return e.url = t;
                                    s && (e.value = s, e.postfix = t[t.length - 1])
                                })), e
                            })), s.sort((function(t, e) {
                                return t.value - e.value
                            }));
                            for (var r = 0; r < s.length; r++) {
                                var l = s[r];
                                if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= n) {
                                    i = l;
                                    break
                                }
                            }!i && s.length && (i = s[s.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a)
                        }
                    },
                    setBigImage: function(t) {
                        var s = this,
                            n = e.createElement("img"),
                            o = i(n);
                        t.$image = o.one("error", (function() {
                            s.setError(t)
                        })).one("load", (function() {
                            var e;
                            t.$ghost || (s.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), s.afterLoad(t)), s.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && c.width() / c.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function() {
                                t.$ghost && !s.isClosing && t.$ghost.hide()
                            }), Math.min(300, Math.max(1e3, t.height / 1600))), s.hideLoading(t))
                        })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (n.complete || "complete" == n.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : n.error && o.trigger("error")
                    },
                    resolveImageSlideSize: function(t, e, i) {
                        var s = parseInt(t.opts.width, 10),
                            n = parseInt(t.opts.height, 10);
                        t.width = e, t.height = i, s > 0 && (t.width = s, t.height = Math.floor(s * i / e)), n > 0 && (t.width = Math.floor(n * e / i), t.height = n)
                    },
                    setIframe: function(t) {
                        var e, n = this,
                            o = t.opts.iframe,
                            a = t.$slide;
                        t.$content = i('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(t.$content), o.preload ? (n.showLoading(t), e.on("load.fb error.fb", (function(e) {
                            this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t)
                        })), a.on("refresh.fb", (function() {
                            var i, n = t.$content,
                                r = o.css.width,
                                l = o.css.height;
                            if (1 === e[0].isReady) {
                                try {
                                    i = e.contents().find("body")
                                } catch (t) {}
                                i && i.length && i.children().length && (a.css("overflow", "visible"), n.css({
                                    width: "100%",
                                    "max-width": "100%",
                                    height: "9999px"
                                }), r === s && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), n.css("width", r || "").css("max-width", ""), l === s && (l = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), n.css("height", l || ""), a.css("overflow", "auto")), n.removeClass("fancybox-is-hidden")
                            }
                        }))) : n.afterLoad(t), e.attr("src", t.src), a.one("onReset", (function() {
                            try {
                                i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                            } catch (t) {}
                            i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                        }))
                    },
                    setContent: function(t, e) {
                        var s, n = this;
                        n.isClosing || (n.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), (s = e) && s.hasOwnProperty && s instanceof i && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function() {
                            i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                        })), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), n.afterLoad(t))
                    },
                    setError: function(t) {
                        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                    },
                    showLoading: function(t) {
                        var e = this;
                        (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                    },
                    hideLoading: function(t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                    },
                    afterLoad: function(t) {
                        var e = this;
                        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                            return 2 == t.button && t.preventDefault(), !0
                        })), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                    },
                    adjustCaption: function(t) {
                        var e, i = this,
                            s = t || i.current,
                            n = s.opts.caption,
                            o = s.opts.preventCaptionOverlap,
                            a = i.$refs.caption,
                            r = !1;
                        a.toggleClass("fancybox-caption--separate", o), o && n && n.length && (s.pos !== i.currPos ? ((e = a.clone().appendTo(a.parent())).children().eq(0).empty().html(n), r = e.outerHeight(!0), e.empty().remove()) : i.$caption && (r = i.$caption.outerHeight(!0)), s.$slide.css("padding-bottom", r || ""))
                    },
                    adjustLayout: function(t) {
                        var e, i, s, n, o = t || this.current;
                        o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (s = o.$slide[0].style["padding-bottom"], n = o.$slide.css("padding-bottom"), parseFloat(n) > 0 && (e = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(e - o.$slide[0].scrollHeight) < 1 && (i = n), o.$slide.css("padding-bottom", s))), o.$content.css("margin-bottom", i))
                    },
                    revealContent: function(t) {
                        var e, n, o, a, r = this,
                            l = t.$slide,
                            c = !1,
                            d = !1,
                            h = r.isMoved(t),
                            u = t.isRevealed;
                        return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(t.forcedDuration === s ? o : t.forcedDuration, 10), !h && t.pos === r.currPos && o || (e = !1), "zoom" === e && (t.pos === r.currPos && o && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? c = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, c.scaleX = c.width / d.width, c.scaleY = c.height / d.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - d.width / d.height) > .1), a && (d.opacity = .1, c.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), g(t.$content), void i.fancybox.animate(t.$content, c, o, (function() {
                            r.isAnimating = !1, r.complete()
                        }))) : (r.updateSlide(t), e ? (i.fancybox.stop(l), n = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, l.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), g(l), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(l, "fancybox-slide--current", o, (function() {
                            l.removeClass(n).css({
                                transform: "",
                                opacity: ""
                            }), t.pos === r.currPos && r.complete()
                        }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !h || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === r.currPos && r.complete())))
                    },
                    getThumbPos: function(t) {
                        var s, n, o, a, r, l, c = t.$thumb;
                        return !(!c || ! function(t) {
                            var s, n;
                            return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), s = {
                                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                                y: t.getBoundingClientRect().top + t.offsetHeight / 2
                            }, n = e.elementFromPoint(s.x, s.y) === t, i(".fancybox-container").css("pointer-events", ""), n)
                        }(c[0])) && (n = i.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), a = parseFloat(c.css("border-right-width") || 0), r = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), s = {
                            top: n.top + o,
                            left: n.left + l,
                            width: n.width - a - l,
                            height: n.height - o - r,
                            scaleX: 1,
                            scaleY: 1
                        }, n.width > 0 && n.height > 0 && s)
                    },
                    complete: function() {
                        var t, e = this,
                            s = e.current,
                            n = {};
                        !e.isMoved() && s.isLoaded && (s.isComplete || (s.isComplete = !0, s.$slide.siblings().trigger("onReset"), e.preload("inline"), g(s.$slide), s.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, (function(t, s) {
                            s.pos >= e.currPos - 1 && s.pos <= e.currPos + 1 ? n[s.pos] = s : s && (i.fancybox.stop(s.$slide), s.$slide.off().remove())
                        })), e.slides = n), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), s.opts.video.autoStart && s.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                            Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                        })), s.opts.autoFocus && "html" === s.contentType && ((t = s.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), s.$slide.scrollTop(0).scrollLeft(0))
                    },
                    preload: function(t) {
                        var e, i, s = this;
                        s.group.length < 2 || (i = s.slides[s.currPos + 1], (e = s.slides[s.currPos - 1]) && e.type === t && s.loadSlide(e), i && i.type === t && s.loadSlide(i))
                    },
                    focus: function(t, s) {
                        var n, o, a = this,
                            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                        a.isClosing || ((n = (n = !t && a.current && a.current.isComplete ? a.current.$slide.find("*:visible" + (s ? ":not(.fancybox-close-small)" : "")) : a.$refs.container.find("*:visible")).filter(r).filter((function() {
                            return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                        }))).length ? (o = n.index(e.activeElement), t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), n.eq(n.length - 1).trigger("focus")) : (o < 0 || o == n.length - 1) && (t && t.preventDefault(), n.eq(0).trigger("focus"))) : a.$refs.container.trigger("focus"))
                    },
                    activate: function() {
                        var t = this;
                        i(".fancybox-container").each((function() {
                            var e = i(this).data("FancyBox");
                            e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                        })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                    },
                    close: function(t, e) {
                        var s, n, o, a, r, l, c, d = this,
                            h = d.current,
                            p = function() {
                                d.cleanUp(t)
                            };
                        return !d.isClosing && (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, u((function() {
                            d.update()
                        })), !1) : (d.removeEvents(), o = h.$content, s = h.opts.animationEffect, n = i.isNumeric(e) ? e : s ? h.opts.animationDuration : 0, h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(h.$slide) : s = !1, h.$slide.siblings().trigger("onReset").remove(), n && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", n + "ms"), d.hideLoading(h), d.hideControls(!0), d.updateCursor(), "zoom" !== s || o && n && "image" === h.type && !d.isMoved() && !h.hasError && (c = d.getThumbPos(h)) || (s = "fade"), "zoom" === s ? (i.fancybox.stop(o), l = {
                            top: (a = i.fancybox.getTranslate(o)).top,
                            left: a.left,
                            scaleX: a.width / c.width,
                            scaleY: a.height / c.height,
                            width: c.width,
                            height: c.height
                        }, "auto" == (r = h.opts.zoomOpacity) && (r = Math.abs(h.width / h.height - c.width / c.height) > .1), r && (c.opacity = 0), i.fancybox.setTranslate(o, l), g(o), i.fancybox.animate(o, c, n, p), !0) : (s && n ? i.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + s, n, p) : !0 === t ? setTimeout(p, n) : p(), !0)))
                    },
                    cleanUp: function(e) {
                        var s, n, o, a = this,
                            r = a.current.opts.$orig;
                        a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = a.$trigger), r && r.length && (n = t.scrollX, o = t.scrollY, r.trigger("focus"), i("html, body").scrollTop(o).scrollLeft(n))), a.current = null, (s = i.fancybox.getInstance()) ? s.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(t, e) {
                        var s, n = Array.prototype.slice.call(arguments, 1),
                            o = this,
                            a = e && e.opts ? e : o.current;
                        if (a ? n.unshift(a) : a = o, n.unshift(o), i.isFunction(a.opts[t]) && (s = a.opts[t].apply(a, n)), !1 === s) return s;
                        "afterClose" !== t && o.$refs ? o.$refs.container.trigger(t + ".fb", n) : d.trigger(t + ".fb", n)
                    },
                    updateControls: function() {
                        var t = this,
                            s = t.current,
                            n = s.index,
                            o = t.$refs.container,
                            a = t.$refs.caption,
                            r = s.opts.caption;
                        s.$slide.trigger("refresh"), r && r.length ? (t.$caption = a, a.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), o.find("[data-fancybox-count]").html(t.group.length), o.find("[data-fancybox-index]").html(n + 1), o.find("[data-fancybox-prev]").prop("disabled", !s.opts.loop && n <= 0), o.find("[data-fancybox-next]").prop("disabled", !s.opts.loop && n >= t.group.length - 1), "image" === s.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", s.opts.image.src || s.src).show() : s.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                    },
                    hideControls: function(t) {
                        var e = ["infobar", "toolbar", "nav"];
                        !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map((function(t) {
                            return "fancybox-show-" + t
                        })).join(" ")), this.hasHiddenControls = !0
                    },
                    showControls: function() {
                        var t = this,
                            e = t.current ? t.current.opts : t.opts,
                            i = t.$refs.container;
                        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                    },
                    toggleControls: function() {
                        this.hasHiddenControls ? this.showControls() : this.hideControls()
                    }
                }), i.fancybox = {
                    version: "3.5.7",
                    defaults: l,
                    getInstance: function(t) {
                        var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            s = Array.prototype.slice.call(arguments, 1);
                        return e instanceof v && ("string" === i.type(t) ? e[t].apply(e, s) : "function" === i.type(t) && t.apply(e, s), e)
                    },
                    open: function(t, e, i) {
                        return new v(t, e, i)
                    },
                    close: function(t) {
                        var e = this.getInstance();
                        e && (e.close(), !0 === t && this.close(t))
                    },
                    destroy: function() {
                        this.close(!0), d.add("body").off("click.fb-start", "**")
                    },
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: (n = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                    getTranslate: function(t) {
                        var e;
                        return !(!t || !t.length) && {
                            top: (e = t[0].getBoundingClientRect()).top || 0,
                            left: e.left || 0,
                            width: e.width,
                            height: e.height,
                            opacity: parseFloat(t.css("opacity"))
                        }
                    },
                    setTranslate: function(t, e) {
                        var i = "",
                            n = {};
                        if (t && e) return e.left === s && e.top === s || (i = (e.left === s ? t.position().left : e.left) + "px, " + (e.top === s ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== s && e.scaleY !== s ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== s && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), e.opacity !== s && (n.opacity = e.opacity), e.width !== s && (n.width = e.width), e.height !== s && (n.height = e.height), t.css(n)
                    },
                    animate: function(t, e, n, o, a) {
                        var r, l = this;
                        i.isFunction(n) && (o = n, n = null), l.stop(t), r = l.getTranslate(t), t.on(f, (function(c) {
                            (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (l.stop(t), i.isNumeric(n) && t.css("transition-duration", ""), i.isPlainObject(e) ? e.scaleX !== s && e.scaleY !== s && l.setTranslate(t, {
                                top: e.top,
                                left: e.left,
                                width: r.width * e.scaleX,
                                height: r.height * e.scaleY,
                                scaleX: 1,
                                scaleY: 1
                            }) : !0 !== a && t.removeClass(e), i.isFunction(o) && o(c))
                        })), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? (e.scaleX !== s && e.scaleY !== s && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function() {
                            t.trigger(f)
                        }), n + 33))
                    },
                    stop: function(t, e) {
                        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                    }
                }, i.fn.fancybox = function(t) {
                    var e;
                    return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                        options: t
                    }, y) : this.off("click.fb-start").on("click.fb-start", {
                        items: this,
                        options: t
                    }, y), this
                }, d.on("click.fb-start", "[data-fancybox]", y), d.on("click.fb-start", "[data-fancybox-trigger]", (function(t) {
                    i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                        $trigger: i(this)
                    })
                })), o = ".fancybox-button", a = "fancybox-focus", r = null, d.on("mousedown mouseup focus blur", o, (function(t) {
                    switch (t.type) {
                        case "mousedown":
                            r = i(this);
                            break;
                        case "mouseup":
                            r = null;
                            break;
                        case "focusin":
                            i(o).removeClass(a), i(this).is(r) || i(this).is("[disabled]") || i(this).addClass(a);
                            break;
                        case "focusout":
                            i(o).removeClass(a)
                    }
                }))
            }
        function y(t, e) {
            var s, n, o, a = [],
                r = 0;
            t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = m(t.data.options, e)), s = e.$target || i(t.currentTarget).trigger("blur"), (o = i.fancybox.getInstance()) && o.$trigger && o.$trigger.is(s) || (a = e.selector ? i(e.selector) : (n = s.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + n + '"]') : i('[data-fancybox="' + n + '"]') : [s], (r = i(a).index(s)) < 0 && (r = 0), (o = i.fancybox.open(a, e, r)).$trigger = s))
        }
    }(window, document, jQuery),
    function(t) {
        "use strict";
        var e = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            },
            i = function(e, i, s) {
                if (e) return s = s || "", "object" === t.type(s) && (s = t.param(s, !0)), t.each(i, (function(t, i) {
                    e = e.replace("$" + t, i || "")
                })), s.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + s), e
            };
        t(document).on("objectNeedsType.fb", (function(s, n, o) {
            var a, r, l, c, d, h, u, p = o.src || "",
                f = !1;
            a = t.extend(!0, {}, e, o.opts.media), t.each(a, (function(e, s) {
                if (l = p.match(s.matcher)) {
                    if (f = s.type, u = e, h = {}, s.paramPlace && l[s.paramPlace]) {
                        "?" == (d = l[s.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                        for (var n = 0; n < d.length; ++n) {
                            var a = d[n].split("=", 2);
                            2 == a.length && (h[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                        }
                    }
                    return c = t.extend(!0, {}, s.params, o.opts[e], h), p = "function" === t.type(s.url) ? s.url.call(this, l, c, o) : i(s.url, l, c), r = "function" === t.type(s.thumb) ? s.thumb.call(this, l, c, o) : i(s.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, (function(t, e, i, s) {
                        return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(s, 10))
                    })) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
                }
            })), f ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === f && (o.opts = t.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            })), t.extend(o, {
                type: f,
                src: p,
                origSrc: o.src,
                contentSource: u,
                contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
            })) : p && (o.type = o.opts.defaultType)
        }));
        var s = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: !1,
                loaded: !1
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: !1,
                loaded: !1
            },
            load: function(t) {
                var e, i = this;
                this[t].loaded ? setTimeout((function() {
                    i.done(t)
                })) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                    i[t].loaded = !0, i.done(t)
                } : e.onload = function() {
                    i[t].loaded = !0, i.done(t)
                }, document.body.appendChild(e))
            },
            done: function(e) {
                var i, s;
                "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (s = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(s.attr("id"), {
                    events: {
                        onStateChange: function(t) {
                            0 == t.data && i.next()
                        }
                    }
                }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(s).on("ended", (function() {
                    i.next()
                })))
            }
        };
        t(document).on({
            "afterShow.fb": function(t, e, i) {
                e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && s.load(i.contentSource)
            }
        })
    }(jQuery),
    function(t, e, i) {
        "use strict";
        var s = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            n = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            },
            o = function(e) {
                var i = [];
                for (var s in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[s].pageX ? i.push({
                    x: e[s].pageX,
                    y: e[s].pageY
                }) : e[s].clientX && i.push({
                    x: e[s].clientX,
                    y: e[s].clientY
                });
                return i
            },
            a = function(t, e, i) {
                return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
            },
            r = function(t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, s = t[0].attributes, n = s.length; e < n; e++)
                    if ("data-fancybox-" === s[e].nodeName.substr(0, 14)) return !0;
                return !1
            },
            l = function(e) {
                for (var i, s, n, o, a, r = !1; i = e.get(0), s = void 0, n = void 0, o = void 0, a = void 0, s = t.getComputedStyle(i)["overflow-y"], n = t.getComputedStyle(i)["overflow-x"], o = ("scroll" === s || "auto" === s) && i.scrollHeight > i.clientHeight, a = ("scroll" === n || "auto" === n) && i.scrollWidth > i.clientWidth, !(r = o || a) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"););
                return r
            },
            c = function(t) {
                var e = this;
                e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
            };
        c.prototype.destroy = function() {
            var t = this;
            t.$container.off(".fb.touch"), i(e).off(".fb.touch"), t.requestId && (n(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
        }, c.prototype.ontouchstart = function(s) {
            var n = this,
                c = i(s.target),
                d = n.instance,
                h = d.current,
                u = h.$slide,
                p = h.$content,
                f = "touchstart" == s.type;
            if (f && n.$container.off("mousedown.fb.touch"), (!s.originalEvent || 2 != s.originalEvent.button) && u.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(s.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
                if (!h || d.isAnimating || h.$slide.hasClass("fancybox-animated")) return s.stopPropagation(), void s.preventDefault();
                n.realPoints = n.startPoints = o(s), n.startPoints.length && (h.touch && s.stopPropagation(), n.startEvent = s, n.canTap = !0, n.$target = c, n.$content = p, n.opts = h.opts.touch, n.isPanning = !1, n.isSwiping = !1, n.isZooming = !1, n.isScrolling = !1, n.canPan = d.canPan(), n.startTime = (new Date).getTime(), n.distanceX = n.distanceY = n.distance = 0, n.canvasWidth = Math.round(u[0].clientWidth), n.canvasHeight = Math.round(u[0].clientHeight), n.contentLastPos = null, n.contentStartPos = i.fancybox.getTranslate(n.$content) || {
                    top: 0,
                    left: 0
                }, n.sliderStartPos = i.fancybox.getTranslate(u), n.stagePos = i.fancybox.getTranslate(d.$refs.stage), n.sliderStartPos.top -= n.stagePos.top, n.sliderStartPos.left -= n.stagePos.left, n.contentStartPos.top -= n.stagePos.top, n.contentStartPos.left -= n.stagePos.left, i(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(n, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(n, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", n.onscroll, !0), ((n.opts || n.canPan) && (c.is(n.$stage) || n.$stage.find(c).length) || (c.is(".fancybox-image") && s.preventDefault(), i.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (n.isScrollable = l(c) || l(c.parent()), i.fancybox.isMobile && n.isScrollable || s.preventDefault(), (1 === n.startPoints.length || h.hasError) && (n.canPan ? (i.fancybox.stop(n.$content), n.isPanning = !0) : n.isSwiping = !0, n.$container.addClass("fancybox-is-grabbing")), 2 === n.startPoints.length && "image" === h.type && (h.isLoaded || h.$ghost) && (n.canTap = !1, n.isSwiping = !1, n.isPanning = !1, n.isZooming = !0, i.fancybox.stop(n.$content), n.centerPointStartX = .5 * (n.startPoints[0].x + n.startPoints[1].x) - i(t).scrollLeft(), n.centerPointStartY = .5 * (n.startPoints[0].y + n.startPoints[1].y) - i(t).scrollTop(), n.percentageOfImageAtPinchPointX = (n.centerPointStartX - n.contentStartPos.left) / n.contentStartPos.width, n.percentageOfImageAtPinchPointY = (n.centerPointStartY - n.contentStartPos.top) / n.contentStartPos.height, n.startDistanceBetweenFingers = a(n.startPoints[0], n.startPoints[1]))))
            }
        }, c.prototype.onscroll = function(t) {
            this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
        }, c.prototype.ontouchmove = function(t) {
            var e = this;
            void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? e.isScrolling ? e.canTap = !1 : (e.newPoints = o(t), (e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))) : e.ontouchend(t)
        }, c.prototype.onSwipe = function(e) {
            var o, a = this,
                r = a.instance,
                l = a.isSwiping,
                c = a.sliderStartPos.left || 0;
            if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = {
                top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
                left: c
            }, a.requestId && (n(a.requestId), a.requestId = null), a.requestId = s((function() {
                a.sliderLastPos && (i.each(a.instance.slides, (function(t, e) {
                    var s = e.pos - a.instance.currPos;
                    i.fancybox.setTranslate(e.$slide, {
                        top: a.sliderLastPos.top,
                        left: a.sliderLastPos.left + s * a.canvasWidth + s * e.opts.gutter
                    })
                })), a.$container.addClass("fancybox-is-sliding"))
            }));
            else if (Math.abs(a.distance) > 10) {
                if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = o > 45 && o < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void(a.isScrolling = !0);
                r.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(r.slides, (function(t, e) {
                    var s, n;
                    i.fancybox.stop(e.$slide), s = i.fancybox.getTranslate(e.$slide), n = i.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass((function(t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    })), e.pos === r.current.pos && (a.sliderStartPos.top = s.top - n.top, a.sliderStartPos.left = s.left - n.left), i.fancybox.setTranslate(e.$slide, {
                        top: s.top - n.top,
                        left: s.left - n.left
                    })
                })), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
            }
        }, c.prototype.onPan = function() {
            var t = this;
            a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && n(t.requestId), t.requestId = s((function() {
                i.fancybox.setTranslate(t.$content, t.contentLastPos)
            })))
        }, c.prototype.limitMovement = function() {
            var t, e, i, s, n, o, a = this,
                r = a.canvasWidth,
                l = a.canvasHeight,
                c = a.distanceX,
                d = a.distanceY,
                h = a.contentStartPos,
                u = h.left,
                p = h.top,
                f = h.width,
                g = h.height;
            return n = f > r ? u + c : u, o = p + d, t = Math.max(0, .5 * r - .5 * f), e = Math.max(0, .5 * l - .5 * g), i = Math.min(r - f, .5 * r - .5 * f), s = Math.min(l - g, .5 * l - .5 * g), c > 0 && n > t && (n = t - 1 + Math.pow(-t + u + c, .8) || 0), c < 0 && n < i && (n = i + 1 - Math.pow(i - u - c, .8) || 0), d > 0 && o > e && (o = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && o < s && (o = s + 1 - Math.pow(s - p - d, .8) || 0), {
                top: o,
                left: n
            }
        }, c.prototype.limitPosition = function(t, e, i, s) {
            var n = this.canvasWidth,
                o = this.canvasHeight;
            return t = i > n ? (t = t > 0 ? 0 : t) < n - i ? n - i : t : Math.max(0, n / 2 - i / 2), {
                top: e = s > o ? (e = e > 0 ? 0 : e) < o - s ? o - s : e : Math.max(0, o / 2 - s / 2),
                left: t
            }
        }, c.prototype.onZoom = function() {
            var e = this,
                o = e.contentStartPos,
                r = o.width,
                l = o.height,
                c = o.left,
                d = o.top,
                h = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                u = Math.floor(r * h),
                p = Math.floor(l * h),
                f = (r - u) * e.percentageOfImageAtPinchPointX,
                g = (l - p) * e.percentageOfImageAtPinchPointY,
                m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                y = m - e.centerPointStartX,
                b = {
                    top: d + (g + (v - e.centerPointStartY)),
                    left: c + (f + y),
                    scaleX: h,
                    scaleY: h
                };
            e.canTap = !1, e.newWidth = u, e.newHeight = p, e.contentLastPos = b, e.requestId && n(e.requestId), e.requestId = s((function() {
                i.fancybox.setTranslate(e.$content, e.contentLastPos)
            }))
        }, c.prototype.ontouchend = function(t) {
            var s = this,
                a = s.isSwiping,
                r = s.isPanning,
                l = s.isZooming,
                c = s.isScrolling;
            if (s.endPoints = o(t), s.dMs = Math.max((new Date).getTime() - s.startTime, 1), s.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", s.onscroll, !0), s.requestId && (n(s.requestId), s.requestId = null), s.isSwiping = !1, s.isPanning = !1, s.isZooming = !1, s.isScrolling = !1, s.instance.isDragging = !1, s.canTap) return s.onTap(t);
            s.speed = 100, s.velocityX = s.distanceX / s.dMs * .5, s.velocityY = s.distanceY / s.dMs * .5, r ? s.endPanning() : l ? s.endZooming() : s.endSwiping(a, c)
        }, c.prototype.endSwiping = function(t, e) {
            var s = this,
                n = !1,
                o = s.instance.group.length,
                a = Math.abs(s.distanceX),
                r = "x" == t && o > 1 && (s.dMs > 130 && a > 10 || a > 50);
            s.sliderLastPos = null, "y" == t && !e && Math.abs(s.distanceY) > 50 ? (i.fancybox.animate(s.instance.current.$slide, {
                top: s.sliderStartPos.top + s.distanceY + 150 * s.velocityY,
                opacity: 0
            }, 200), n = s.instance.close(!0, 250)) : r && s.distanceX > 0 ? n = s.instance.previous(300) : r && s.distanceX < 0 && (n = s.instance.next(300)), !1 !== n || "x" != t && "y" != t || s.instance.centerSlide(200), s.$container.removeClass("fancybox-is-sliding")
        }, c.prototype.endPanning = function() {
            var t, e, s, n = this;
            n.contentLastPos && (!1 === n.opts.momentum || n.dMs > 350 ? (t = n.contentLastPos.left, e = n.contentLastPos.top) : (t = n.contentLastPos.left + 500 * n.velocityX, e = n.contentLastPos.top + 500 * n.velocityY), (s = n.limitPosition(t, e, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, s.height = n.contentStartPos.height, i.fancybox.animate(n.$content, s, 366))
        }, c.prototype.endZooming = function() {
            var t, e, s, n, o = this,
                a = o.instance.current,
                r = o.newWidth,
                l = o.newHeight;
            o.contentLastPos && (t = o.contentLastPos.left, n = {
                top: e = o.contentLastPos.top,
                left: t,
                width: r,
                height: l,
                scaleX: 1,
                scaleY: 1
            }, i.fancybox.setTranslate(o.$content, n), r < o.canvasWidth && l < o.canvasHeight ? o.instance.scaleToFit(150) : r > a.width || l > a.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (s = o.limitPosition(t, e, r, l), i.fancybox.animate(o.$content, s, 150)))
        }, c.prototype.onTap = function(e) {
            var s, n = this,
                a = i(e.target),
                r = n.instance,
                l = r.current,
                c = e && o(e) || n.startPoints,
                d = c[0] ? c[0].x - i(t).scrollLeft() - n.stagePos.left : 0,
                h = c[0] ? c[0].y - i(t).scrollTop() - n.stagePos.top : 0,
                u = function(t) {
                    var s = l.opts[t];
                    if (i.isFunction(s) && (s = s.apply(r, [l, e])), s) switch (s) {
                        case "close":
                            r.close(n.startEvent);
                            break;
                        case "toggleControls":
                            r.toggleControls();
                            break;
                        case "next":
                            r.next();
                            break;
                        case "nextOrClose":
                            r.group.length > 1 ? r.next() : r.close(n.startEvent);
                            break;
                        case "zoom":
                            "image" == l.type && (l.isLoaded || l.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, h) : r.group.length < 2 && r.close(n.startEvent))
                    }
                };
            if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(d > a[0].clientWidth + a.offset().left))) {
                if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) s = "Outside";
                else if (a.is(".fancybox-slide")) s = "Slide";
                else {
                    if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
                    s = "Content"
                }
                if (n.tapped) {
                    if (clearTimeout(n.tapped), n.tapped = null, Math.abs(d - n.tapX) > 50 || Math.abs(h - n.tapY) > 50) return this;
                    u("dblclick" + s)
                } else n.tapX = d, n.tapY = h, l.opts["dblclick" + s] && l.opts["dblclick" + s] !== l.opts["click" + s] ? n.tapped = setTimeout((function() {
                    n.tapped = null, r.isAnimating || u("click" + s)
                }), 500) : u("click" + s);
                return this
            }
        }, i(e).on("onActivate.fb", (function(t, e) {
            e && !e.Guestures && (e.Guestures = new c(e))
        })).on("beforeClose.fb", (function(t, e) {
            e && e.Guestures && e.Guestures.destroy()
        }))
    }(window, document, jQuery),
    function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3,
                progress: !0
            }
        });
        var i = function(t) {
            this.instance = t, this.init()
        };
        e.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function() {
                var t = this,
                    i = t.instance,
                    s = i.group[i.currIndex].opts.slideShow;
                t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                    t.toggle()
                })), i.group.length < 2 || !s ? t.$button.hide() : s.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
            },
            set: function(t) {
                var i = this,
                    s = i.instance,
                    n = s.current;
                n && (!0 === t || n.opts.loop || s.currIndex < s.group.length - 1) ? i.isActive && "video" !== n.contentType && (i.$progress && e.fancybox.animate(i.$progress.show(), {
                    scaleX: 1
                }, n.opts.slideShow.speed), i.timer = setTimeout((function() {
                    s.current.opts.loop || s.current.index != s.group.length - 1 ? s.next() : s.jumpTo(0)
                }), n.opts.slideShow.speed)) : (i.stop(), s.idleSecondsCounter = 0, s.showControls())
            },
            clear: function() {
                var t = this;
                clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
            },
            start: function() {
                var t = this,
                    e = t.instance.current;
                e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
            },
            stop: function() {
                var t = this,
                    e = t.instance.current;
                t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
            },
            toggle: function() {
                var t = this;
                t.isActive ? t.stop() : t.start()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.SlideShow && (e.SlideShow = new i(e))
            },
            "beforeShow.fb": function(t, e, i, s) {
                var n = e && e.SlideShow;
                s ? n && i.opts.slideShow.autoStart && n.start() : n && n.isActive && n.clear()
            },
            "afterShow.fb": function(t, e, i) {
                var s = e && e.SlideShow;
                s && s.isActive && s.set()
            },
            "afterKeydown.fb": function(i, s, n, o, a) {
                var r = s && s.SlideShow;
                !r || !n.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (o.preventDefault(), r.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(t, e) {
                var i = e && e.SlideShow;
                i && i.stop()
            }
        }), e(t).on("visibilitychange", (function() {
            var i = e.fancybox.getInstance(),
                s = i && i.SlideShow;
            s && s.isActive && (t.hidden ? s.clear() : s.set())
        }))
    }(document, jQuery),
    function(t, e) {
        "use strict";
        var i = function() {
            for (var e = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], i = {}, s = 0; s < e.length; s++) {
                var n = e[s];
                if (n && n[1] in t) {
                    for (var o = 0; o < n.length; o++) i[e[0][o]] = n[o];
                    return i
                }
            }
            return !1
        }();
        if (i) {
            var s = {
                request: function(e) {
                    (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    t[i.exitFullscreen]()
                },
                toggle: function(e) {
                    e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
                },
                isFullscreen: function() {
                    return Boolean(t[i.fullscreenElement])
                },
                enabled: function() {
                    return Boolean(t[i.fullscreenEnabled])
                }
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                },
                fullScreen: {
                    autoStart: !1
                }
            }), e(t).on(i.fullscreenchange, (function() {
                var t = s.isFullscreen(),
                    i = e.fancybox.getInstance();
                i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1, i.update(!0, !0, 0), i.isComplete || i.complete()), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
            }))
        }
        e(t).on({
            "onInit.fb": function(t, e) {
                i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), s.toggle()
                })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && s.request(), e.FullScreen = s) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
            },
            "afterKeydown.fb": function(t, e, i, s, n) {
                e && e.FullScreen && 70 === n && (s.preventDefault(), e.FullScreen.toggle())
            },
            "beforeClose.fb": function(t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && s.exit()
            }
        })
    }(document, jQuery),
    function(t) {
        function e(t, e) {
            if (!(t.originalEvent.touches.length > 1)) {
                t.preventDefault();
                var i = t.originalEvent.changedTouches[0],
                    s = document.createEvent("MouseEvents");
                s.initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(s)
            }
        }
        if (t.support.touch = "ontouchend" in document, t.support.touch) {
            var i, s = t.ui.mouse.prototype,
                n = s._mouseInit,
                o = s._mouseDestroy;
            s._touchStart = function(t) {
                !i && this._mouseCapture(t.originalEvent.changedTouches[0]) && (i = !0, this._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
            }, s._touchMove = function(t) {
                i && (this._touchMoved = !0, e(t, "mousemove"))
            }, s._touchEnd = function(t) {
                i && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), i = !1)
            }, s._mouseInit = function() {
                var e = this;
                e.element.bind({
                    touchstart: t.proxy(e, "_touchStart"),
                    touchmove: t.proxy(e, "_touchMove"),
                    touchend: t.proxy(e, "_touchEnd")
                }), n.call(e)
            }, s._mouseDestroy = function() {
                var e = this;
                e.element.unbind({
                    touchstart: t.proxy(e, "_touchStart"),
                    touchmove: t.proxy(e, "_touchMove"),
                    touchend: t.proxy(e, "_touchEnd")
                }), o.call(e)
            }
        }
    }(jQuery),
    function(t, e) {
        "use strict";
        var i = "fancybox-thumbs",
            s = i + "-active";
        e.fancybox.defaults = e.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, e.fancybox.defaults);
        var n = function(t) {
            this.init(t)
        };
        e.extend(n.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function(t) {
                var e = this,
                    i = t.group,
                    s = 0;
                e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var n = 0, o = i.length; n < o && (i[n].thumb && s++, !(s > 1)); n++);
                s > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function() {
                    e.toggle()
                })), e.isActive = !0) : e.$button.hide()
            },
            create: function() {
                var t, s = this,
                    n = s.instance,
                    o = s.opts.parentEl,
                    a = [];
                s.$grid || (s.$grid = e('<div class="' + i + " " + i + "-" + s.opts.axis + '"></div>').appendTo(n.$refs.container.find(o).addBack().filter(o)), s.$grid.on("click", "a", (function() {
                    n.jumpTo(e(this).attr("data-index"))
                }))), s.$list || (s.$list = e('<div class="' + i + '__list">').appendTo(s.$grid)), e.each(n.group, (function(e, i) {
                    (t = i.thumb) || "image" !== i.type || (t = i.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                })), s.$list[0].innerHTML = a.join(""), "x" === s.opts.axis && s.$list.width(parseInt(s.$grid.css("padding-right"), 10) + n.group.length * s.$list.children().eq(0).outerWidth(!0))
            },
            focus: function(t) {
                var e, i, n = this,
                    o = n.$list,
                    a = n.$grid;
                n.instance.current && (i = (e = o.children().removeClass(s).filter('[data-index="' + n.instance.current.index + '"]').addClass(s)).position(), "y" === n.opts.axis && (i.top < 0 || i.top > o.height() - e.outerHeight()) ? o.stop().animate({
                    scrollTop: o.scrollTop() + i.top
                }, t) : "x" === n.opts.axis && (i.left < a.scrollLeft() || i.left > a.scrollLeft() + (a.width() - e.outerWidth())) && o.parent().stop().animate({
                    scrollLeft: i.left
                }, t))
            },
            update: function() {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
            },
            hide: function() {
                this.isVisible = !1, this.update()
            },
            show: function() {
                this.isVisible = !0, this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                var i;
                e && !e.Thumbs && (i = new n(e)).isActive && !0 === i.opts.autoStart && i.show()
            },
            "beforeShow.fb": function(t, e, i, s) {
                var n = e && e.Thumbs;
                n && n.isVisible && n.focus(s ? 0 : 250)
            },
            "afterKeydown.fb": function(t, e, i, s, n) {
                var o = e && e.Thumbs;
                o && o.isActive && 71 === n && (s.preventDefault(), o.toggle())
            },
            "beforeClose.fb": function(t, e) {
                var i = e && e.Thumbs;
                i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
            }
        })
    }(document, jQuery),
    function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
            },
            share: {
                url: function(t, e) {
                    return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
            }
        }), e(t).on("click", "[data-fancybox-share]", (function() {
            var t, i, s, n, o = e.fancybox.getInstance(),
                a = o.current || null;
            a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [o, a])), i = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (s = t, n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }, String(s).replace(/[&<>"'`=\/]/g, (function(t) {
                return n[t]
            })))).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), e.fancybox.open({
                src: o.translate(o, i),
                type: "html",
                opts: {
                    touch: !1,
                    animationEffect: !1,
                    afterLoad: function(t, e) {
                        o.$refs.container.one("beforeClose.fb", (function() {
                            t.close(null, 0)
                        })), e.$content.find(".fancybox-share__button").click((function() {
                            return window.open(this.href, "Share", "width=550, height=450"), !1
                        }))
                    },
                    mobile: {
                        autoFocus: !1
                    }
                }
            }))
        }))
    }(document, jQuery),
    function(t, e, i) {
        "use strict";

        function s() {
            var e = t.location.hash.substr(1),
                i = e.split("-"),
                s = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
            return {
                hash: e,
                index: s < 1 ? 1 : s,
                gallery: i.join("-")
            }
        }

        function n(t) {
            "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
        }

        function o(t) {
            var e, i;
            return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
        }
        i.escapeSelector || (i.escapeSelector = function(t) {
            return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }))
        }), i((function() {
            !1 !== i.fancybox.defaults.hash && (i(e).on({
                "onInit.fb": function(t, e) {
                    var i, n;
                    !1 !== e.group[e.currIndex].opts.hash && (i = s(), (n = o(e)) && i.gallery && n == i.gallery && (e.currIndex = i.index - 1))
                },
                "beforeShow.fb": function(i, s, n, a) {
                    var r;
                    n && !1 !== n.opts.hash && (r = o(s)) && (s.currentHash = r + (s.group.length > 1 ? "-" + (n.index + 1) : ""), t.location.hash !== "#" + s.currentHash && (a && !s.origHash && (s.origHash = t.location.hash), s.hashTimer && clearTimeout(s.hashTimer), s.hashTimer = setTimeout((function() {
                        "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + s.currentHash), a && (s.hasCreatedHistory = !0)) : t.location.hash = s.currentHash, s.hashTimer = null
                    }), 300)))
                },
                "beforeClose.fb": function(i, s, n) {
                    n && !1 !== n.opts.hash && (clearTimeout(s.hashTimer), s.currentHash && s.hasCreatedHistory ? t.history.back() : s.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (s.origHash || "")) : t.location.hash = s.origHash), s.currentHash = null)
                }
            }), i(t).on("hashchange.fb", (function() {
                var t = s(),
                    e = null;
                i.each(i(".fancybox-container").get().reverse(), (function(t, s) {
                    var n = i(s).data("FancyBox");
                    if (n && n.currentHash) return e = n, !1
                })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && n(t)
            })), setTimeout((function() {
                i.fancybox.getInstance() || n(s())
            }), 50))
        }))
    }(window, document, jQuery),
    function() {
        "use strict";
        if ("undefined" != typeof window) {
            var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                e = !!t && parseInt(t[1], 10) >= 16;
            if (!("objectFit" in document.documentElement.style != !1) || e) {
                var i = function(t) {
                        var e = t.parentNode;
                        ! function(t) {
                            var e = window.getComputedStyle(t, null),
                                i = e.getPropertyValue("position"),
                                s = e.getPropertyValue("overflow"),
                                n = e.getPropertyValue("display");
                            i && "static" !== i || (t.style.position = "relative"), "hidden" !== s && (t.style.overflow = "hidden"), n && "inline" !== n || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill")
                        }(e),
                        function(t) {
                            var e = window.getComputedStyle(t, null),
                                i = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px"
                                };
                            for (var s in i) e.getPropertyValue(s) !== i[s] && (t.style[s] = i[s])
                        }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px")
                    },
                    s = function(t) {
                        if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
                        else if (t && t.nodeName) t = [t];
                        else if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
                        for (var s = 0; s < t.length; s++)
                            if (t[s].nodeName) {
                                var n = t[s].nodeName.toLowerCase();
                                if ("img" === n) {
                                    if (e) continue;
                                    t[s].complete ? i(t[s]) : t[s].addEventListener("load", (function() {
                                        i(this)
                                    }))
                                } else "video" === n ? t[s].readyState > 0 ? i(t[s]) : t[s].addEventListener("loadedmetadata", (function() {
                                    i(this)
                                })) : i(t[s])
                            }
                        return !0
                    };
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
            } else window.objectFitPolyfill = function() {
                return !1
            }
        }
    }(),
    function(t, e) {
        "use strict";
        var i = (new Date).getTime();
        e(t).on({
            "onInit.fb": function(t, e, s) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(t) {
                    var s = e.current,
                        n = (new Date).getTime();
                    e.group.length < 2 || !1 === s.opts.wheel || "auto" === s.opts.wheel && "image" !== s.type || (t.preventDefault(), t.stopPropagation(), s.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, n - i < 250 || (i = n, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                }))
            }
        })
    }(document, jQuery);
let map2 = {};

function gmap(t, e) {
    if (polylines && (polylines.setMap(null), polylines = !1), void 0 === map2[t] && (map2[t] = new GMaps({
            el: "#" + t,
            zoom: 10,
            lat: 40.4093101,
            lng: 49.8945632,
            mapTypeControl: !1,
            panControl: !1,
            scaleControl: !1,
            streetViewControl: !1,
            zoomControl: !0,
            styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }]
            }, {
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#4e3681"
                }]
            }, {
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#616161"
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#f5f5f5"
                }]
            }, {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    weight: 2
                }]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#bdbdbd"
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#eee"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#757575"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#e5e5e5"
                }]
            }, {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9e9e9e"
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#fff"
                }]
            }, {
                featureType: "road.arterial",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#757575"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#dadada"
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#616161"
                }]
            }, {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9e9e9e"
                }]
            }, {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{
                    color: "#e5e5e5"
                }]
            }, {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{
                    color: "#eee"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#c9c9c9"
                }]
            }, {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9e9e9e"
                }]
            }]
        })), markers = [], map2[t].removeMarkers(), $.each(e.items, (function(e, i) {
            infoWindow = null, i.clickable ? infoWindow = {
                content: '<div class="mapInfoWindow">' + i.image + "<h3>" + i.title + "</h3><p>" + i.desc + '</p>                                <form class="user-actions" action="#">\n                                    <div>\n                                        <label>\n                                            <input data-page-id="' + i.id + '" name="favorite" ' + (i.favorite ? "checked" : "") + ' type="checkbox"><span class="icon fal fa-heart"></span>\n                                        </label>\n                                    </div>\n                                </form>\n</div>'
            } : infoWindow = {
                content: '<div class="mapInfoWindow">' + i.image + "<h3>" + i.title + "</h3></div>"
            }, $marker = map2[t].addMarker({
                lat: i.lat,
                lng: i.lng,
                title: i.title,
                infoWindow: infoWindow,
                icon: {
                    url: "/images/map-icon2.svg",
                    scaledSize: new google.maps.Size(17, 17),
                    anchor: new google.maps.Point(8, 8)
                },
                click: function(t) {}
            }), markers.push($marker)
        })), e.route && markers.length > 1) {
        var i = [];
        $.each(markers, (function(s, n) {
            i.push([n.getPosition().lat(), n.getPosition().lng()]), s >= 1 && map2[t].drawRoute({
                origin: [n.getPosition().lat(), n.getPosition().lng()],
                destination: [markers[s - 1].getPosition().lat(), markers[s - 1].getPosition().lng()],
                travelMode: e.route,
                strokeColor: "#5f259f",
                strokeOpacity: .7,
                strokeWeight: 2
            })
        }))
    }
    1 == markers.length ? map2[t].setCenter(markers[0].position.lat(), markers[0].position.lng()) : map2[t].fitZoom(), $(".map-content-holder .map-category-form", $("#" + t).parent("")).is(":hidden") && map2[t].panBy(-200, 0)
}

function map_event(t, e, i, s) {
    "trigger" === e ? google.maps.event.trigger(markers[t], "click") : gmap(i, s), $(".map-content-holder .map-category-form", $("#" + i).parent("")).is(":hidden") && (map2[i].setCenter(markers[t].position.lat(), markers[t].position.lng()), map2[i].panBy(-200, 0))
}
polylines = !1, markers = [];

$('.hiking-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    // autoplay: 5000
    prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
    nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
});

$('.sub-menu__item--routs a').mouseover(function() {
    let $this = $(this);
    let image_src = $this.data('img');
    let image = $('.sub-menu__item--routs img');
    image.attr('src', image_src);
})

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-custom').addClass('open');
})

$('.popup-custom__close, .popup-custom__blur').click(function(e) {
    e.preventDefault();
    $('.popup-custom').removeClass('open');
})

(function() {
    "use strict";

    function e() {}
    var t = e.prototype;

    function n(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }
    t.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e)
            for (n in t = {}, i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
        else t = i[e] || (i[e] = []);
        return t
    }, t.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, t.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && ((t = {})[e] = n), t || n
    }, t.addListener = function(e, t) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof t;
        for (i in r) r.hasOwnProperty(i) && -1 === n(r[i], t) && r[i].push(s ? t : {
            listener: t,
            once: !1
        });
        return this
    }, t.on = t.addListener, t.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, t.once = t.addOnceListener, t.defineEvent = function(e) {
        return this.getListeners(e), this
    }, t.defineEvents = function(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, t.removeListener = function(e, t) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && -1 !== (i = n(s[r], t)) && s[r].splice(i, 1);
        return this
    }, t.off = t.removeListener, t.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, t.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, t.manipulateListeners = function(e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) s.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, t.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, t.emitEvent = function(e, t) {
        var n, i, r, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;)(n = s[r][i]).listener.apply(this, t || []) !== this._getOnceReturnValue() && !0 !== n.once || this.removeListener(e, s[r][i].listener);
        return this
    }, t.trigger = t.emitEvent, t.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, t.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, t._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, t._getEvents = function() {
        return this._events || (this._events = {})
    }, "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        "use strict";
        var t = document.documentElement,
            n = function() {};
        t.addEventListener ? n = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : t.attachEvent && (n = function(t, n, i) {
            t[n + i] = i.handleEvent ? function() {
                var t = e.event;
                t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
            } : function() {
                var n = e.event;
                n.target = n.target || n.srcElement, i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var i = function() {};
        t.removeEventListener ? i = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : t.detachEvent && (i = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(r) : e.eventie = r
    }(this),
    function(e) {
        "use strict";
        var t = e.jQuery,
            n = e.console,
            i = void 0 !== n;

        function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }
        var s = Object.prototype.toString;

        function o(e) {
            var t = [];
            if (function(e) {
                    return "[object Array]" === s.call(e)
                }(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; n < i; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function a(e, s) {
            function a(e, n, i) {
                if (!(this instanceof a)) return new a(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = r({}, this.options), "function" == typeof n ? i = n : r(this.options, n), i && this.on("always", i), this.getImages(), t && (this.jqDeferred = new t.Deferred);
                var s = this;
                setTimeout(function() {
                    s.check()
                })
            }
            a.prototype = new e, a.prototype.options = {}, a.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; e < t; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, s = i.length; r < s; r++) {
                        var o = i[r];
                        this.addImage(o)
                    }
                }
            }, a.prototype.addImage = function(e) {
                var t = new f(e);
                this.images.push(t)
            }, a.prototype.check = function() {
                var e = this,
                    t = 0,
                    r = this.images.length;
                if (this.hasAnyBroken = !1, r)
                    for (var s = 0; s < r; s++) {
                        var o = this.images[s];
                        o.on("confirm", a), o.check()
                    } else this.complete();

                function a(s, o) {
                    return e.options.debug && i && n.log("confirm", s, o), e.progress(s), ++t === r && e.complete(), !0
                }
            }, a.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
                })
            }, a.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, t && (t.fn.imagesLoaded = function(e, n) {
                return new a(this, e, n).jqDeferred.promise(t(this))
            });
            var c = {};

            function f(e) {
                this.img = e
            }
            return f.prototype = new e, f.prototype.check = function() {
                var e = c[this.img.src];
                if (e) this.useCached(e);
                else if (c[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                else {
                    var t = this.proxyImage = new Image;
                    s.bind(t, "load", this), s.bind(t, "error", this), t.src = this.img.src
                }
            }, f.prototype.useCached = function(e) {
                if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
                else {
                    var t = this;
                    e.on("confirm", function(e) {
                        return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, f.prototype.confirm = function(e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, f.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, f.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, f.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, f.prototype.unbindProxyEvents = function() {
                s.unbind(this.proxyImage, "load", this), s.unbind(this.proxyImage, "error", this)
            }, a
        }
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], a) : e.imagesLoaded = a(e.EventEmitter, e.eventie)
    }(window);