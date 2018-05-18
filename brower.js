! function() {
	function checkHsugIn(t) {
		return window.__sample_hsug_length ? t.length >= 4 || encodeURIComponent(t).length >= 18 : t.length >= 4 || encodeURIComponent(t).length >= 18
	}

	function checkHsugShow(t) {
		return t.length >= 1 && encodeURIComponent(t).length > 3
	}

	function bdsug(t) {
		var e = this,
			t = e.opts = t || {};
		e.ipt = t.ipt || null, e.reverse = t.reverse || !1, e.form = t.form || null, e.submission = t.submission || null, e.maxNum = t.maxNum || 10, e.withoutMode = t.withoutMode || !1, e.withoutRich = t.withoutRich || !1, e.withoutStat = t.withoutStat || !1, e.withoutZhixin = t.withoutZhixin || !1, e.visible = !1, e.stopRefresh = !1, e.renderCallback = t.renderCallback || function() {}, e.selectCallback = t.selectCallback || function() {}, e.storestr = e.storestr || "", e.storearr = e.storearr || [], e.zhixinsug = [], e.zhixintemplate = {}, e.zhixinused = {}, e.zhixindata = {};
		e.zhixintemplate.tvsingle = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/zhixin/tvsingle_fe6cc8c.js", e.query = e.ipt && e.ipt.value || "", e.inputValue = e.query, e.showValue = e.query, e.sugValue = "", e.queryValue = "", e.reqValue = "", e.value = e.query, e.index = -1, e.sugcontainer, e.dataCached = {}, e.dataArray = [], e.dataStored = [], e.dataAladdin = [], e.dataDirect = [], e.directSugSelected = !1, e.dataHot = [], e.timer, e.rsv_sug = 0, e.rsv_sug1 = 0, e.rsv_sug3 = 0, e.rsv_sug4 = 0, e.rsv_sug9 = 0, e.initTime = 0, e.inputT = 0, e.rsv_bp = bds && bds.comm && 1 === bds.comm.ishome ? 0 : 1, e.seq = 0, e.sugId = "", e.sugRegId = "", e.sugRealRegId = "", e.hisSugDisp = [], e.sugDispNum = 0, e.enterKey = -1, e.sugReqStat = 0, e.jqXhr = null, e.ipt && e.init()
	}
	var bds = window.bds || {};
	bds.se = bds.se || {}, bds.se.store = function() {
		function t() {
			try {
				return u in o && o[u]
			} catch (t) {
				return !1
			}
		}

		function e() {
			try {
				return d in o && o[d] && o[d][o.location.hostname]
			} catch (t) {
				return !1
			}
		}

		function s(t) {
			return function() {
				var e = Array.prototype.slice.call(arguments, 0);
				e.unshift(n), g.appendChild(n), n.addBehavior("#default#userData"), n.load(u);
				var s = t.apply(a, e);
				return g.removeChild(n), s
			}
		}

		function i(t) {
			return "_" + t
		}
		var n, a = {},
			o = window,
			r = o.document,
			u = "localStorage",
			d = "globalStorage",
			c = "__storejs__";
		if (a.disabled = !1, a.set = function() {}, a.get = function() {}, a.remove = function() {}, a.clear = function() {}, a.transact = function(t, e, s) {
				var i = a.get(t);
				null == s && (s = e, e = null), "undefined" == typeof i && (i = e || {}), s(i), a.set(t, i)
			}, a.getAll = function() {}, a.serialize = function(t) {
				return String(t)
			}, a.deserialize = function(t) {
				return "string" != typeof t ? void 0 : t
			}, t()) n = o[u], a.set = function(t, e) {
			return void 0 === e ? a.remove(t) : void n.setItem(t, a.serialize(e))
		}, a.get = function(t) {
			return a.deserialize(n.getItem(t))
		}, a.remove = function(t) {
			n.removeItem(t)
		}, a.clear = function() {
			n.clear()
		}, a.getAll = function() {
			for (var t = {}, e = 0; e < n.length; ++e) {
				var s = n.key(e);
				t[s] = a.get(s)
			}
			return t
		};
		else if (e()) n = o[d][o.location.hostname], a.set = function(t, e) {
			return void 0 === e ? a.remove(t) : void(n[t] = a.serialize(e))
		}, a.get = function(t) {
			return a.deserialize(n[t] && n[t].value)
		}, a.remove = function(t) {
			delete n[t]
		}, a.clear = function() {
			for (var t in n) delete n[t]
		}, a.getAll = function() {
			for (var t = {}, e = 0; e < n.length; ++e) {
				var s = n.key(e);
				t[s] = a.get(s)
			}
			return t
		};
		else if (r.documentElement.addBehavior) {
			var g, l;
			try {
				l = new ActiveXObject("htmlfile"), l.open(), l.write("<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"), l.close(), g = l.w.frames[0].document, n = g.createElement("div")
			} catch (p) {
				n = r.createElement("div"), g = r.body
			}
			a.set = s(function(t, e, s) {
				return e = i(e), void 0 === s ? a.remove(e) : (t.setAttribute(e, a.serialize(s)), void t.save(u))
			}), a.get = s(function(t, e) {
				return e = i(e), a.deserialize(t.getAttribute(e))
			}), a.remove = s(function(t, e) {
				e = i(e), t.removeAttribute(e), t.save(u)
			}), a.clear = s(function(t) {
				var e = t.XMLDocument.documentElement.attributes;
				t.load(u);
				for (var s, i = 0; s = e[i]; i++) t.removeAttribute(s.name);
				t.save(u)
			}), a.getAll = s(function(t) {
				var e = t.XMLDocument.documentElement.attributes;
				t.load(u);
				for (var s, i = {}, n = 0; s = e[n]; ++n) i[s] = a.get(s);
				return i
			})
		}
		try {
			a.set(c, c), a.get(c) != c && (a.disabled = !0), a.remove(c)
		} catch (p) {
			a.disabled = !0
		}
		return a
	}();
	var ImeTrack = function() {
			function t(t) {
				var e = 0;
				if (document.selection) {
					t.focus();
					var s = document.selection.createRange();
					s.moveStart("character", -t.value.length), e = s.text.length - 1
				} else(t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart);
				return e
			}

			function e(e) {
				function s(t) {
					n.ipt.value != n.oldval && (n.oldval = n.ipt.value, n.inputchangeHandle(t))
				}

				function i() {
					for (var t = 0, e = n.logs.length - 1; e < n.logs.length - 1; e--)
						if (-1 == n.logs[e].type.indexOf("unval-")) return n.logs[e].time;
					return t
				}
				var n = this;
				n.logs = [], n.opts = e || {}, n.opts.logmaxnum = e.logmaxnum || 10, n.opts.adv = e.adv || !1, this.onLogChange = e.onLogChange, void 0 === n.opts.innerchange && (n.opts.innerchange = !0), n.ipt = document.getElementById(n.opts.iptId), n._kdcode = 0, n._kdevt = {}, n._keyposition = 0, n.ipt.onkeydown = function(t) {
					var e = t || window.event;
					n._kdcode = e.keyCode || e.which, n._kdevt = e
				}, n.ipt.onkeyup = function(e) {
					var s = e || window.event,
						i = s.keyCode || s.which;
					n.ipt.value || "", t(n.ipt), n._kdcode && (n.addLog({
						ku: i,
						type: "upsave"
					}), n._kdcode = 0, n._kdevt = {}, n.oldval = n.ipt.value)
				}, n.ipt.onpaste = function() {
					n.addLog(n._kdevt.ctrlKey ? {
						type: "unval-paste-key"
					} : {
						type: "unval-paste-mouse"
					})
				}, n.oldval = n.ipt.value || "", n.inputchangeHandle = function() {
					if (n._kdcode) n.addLog({
						type: "unval-change-key"
					});
					else {
						var t = "";
						n.logs.length && (new Date).getTime() - i() < 300 && (t = "unval-"), n.addLog({
							type: t + "change-unkey"
						})
					}
				}, n.timmer, n.opts.innerchange && (n.ipt.onfocus = function(t) {
					n.timmer = setInterval(function() {
						s(t)
					}, 200)
				}, n.ipt.onblur = function() {
					clearInterval(n.timmer)
				})
			}
			return e.prototype = {
				checkLog: function(t) {
					for (var e = this.logs.length, s = !1; e > 0;) e--, -1 != this.logs[e].type.indexOf("unval-") ? (t.type = (-1 == t.type.indexOf("unval-") ? "" : "unval-") + this.logs[e].type.replace("unval-", "") + "-" + t.type.replace("unval-", ""), this.logs[e] = t, s = !0) : e = -2;
					if (s) return !1;
					for (; this.logs.length >= this.opts.logmaxnum;) this.logs.shift();
					return !0
				},
				analyseLog: function() {
					function e() {
						if (s.opts.adv)
							for (var t = 0; t < a.length; t++) a.charCodeAt(t) > 256 && (r = a.substring(0, t + 1), u = a.substring(t + 1))
					}
					var s = this;
					if (this.logs.length > 0 && -1 == this.logs[this.logs.length - 1].type.indexOf("unval")) {
						var i = this.logs[this.logs.length - 1],
							n = i.val.substring(0, i.start),
							a = i.val.substring(i.start, i.cursor),
							o = i.val.substring(i.cursor),
							r = "",
							u = "";
						229 == i.kd ? a.charCodeAt(a.length - 1) > 256 || !a.match(/[\x00-\x80]/g) ? (this._keyposition = t(this.ipt), i.type += "-endime", 0 == a.length && (i.type += "-cancelime")) : (i.type += "-imeinput", e()) : i.type.indexOf("paste-mouse") > -1 ? this._keyposition = t(this.ipt) : i.type.indexOf("change-unkey") > -1 ? 0 == a.length ? (this._keyposition = t(this.ipt), this.logs.length > 1 && this.logs[this.logs.length - 2].type.indexOf("upsave") > -1 && (i.type += "-link")) : a.charCodeAt(a.length - 1) > 256 || !a.match(/[\x00-\x80]/g) ? (this._keyposition = t(this.ipt), i.type += "-endime") : (i.type += "-imeinput", e()) : this._keyposition = t(this.ipt), this.opts.adv && (i.type += "-adv", i.strA = n, i.strB = a, i.strB1 = r, i.strB2 = u, i.strC = o), this.onLogChange && this.onLogChange.call(this, i)
					}
				},
				addLog: function(e) {
					e.kd = this._kdcode, e.val = this.ipt.value, e.start = this._keyposition, e.cursor = t(this.ipt), e.type = e.type || 0, e.time = (new Date).getTime(), (0 == this.logs.length || this.logs[this.logs.length - 1].val != e.val || -1 != this.logs[this.logs.length - 1].type.indexOf("unval-") || -1 != e.type.indexOf("unval-")) && (this.checkLog(e) && this.logs.push(e), this.analyseLog())
				},
				getLog: function() {
					var t = this.logs.slice(0);
					return t
				},
				triggerInputChange: function(t) {
					this.inputchangeHandle(t)
				},
				diffLog: function() {
					var t = [],
						e = !1;
					for (var s in this.logs)
						if (0 != s) {
							var i = this.logs[s];
							if (i.strB && i.strA) {
								if (0 === i.strB.length && i.strA.length < this.logs[s - 1].strA.length) {
									t = [];
									continue
								}
								if (i.type.indexOf("link") > -1 || i.type.indexOf("paste") > -1) {
									t = [];
									continue
								}
							}
							var n = i.time - this.logs[s - 1].time;
							n > 3e3 && (t = []);
							var a = 0,
								o = (i.val.match(/[^\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[^\x00-\x80]/g) || []).length;
							o > 0 ? a = 1 : o = (i.val.match(/[\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[\x00-\x80]/g) || []).length, i.type.indexOf("ime") > -1 ? (a += 2, e = !0) : i.type.indexOf("unval") > -1 && e ? a += 2 : e = !1, o > 0 && t.push(a, o, n)
						}
					return t
				}
			}, e
		}(),
		sugLog = function() {
			function t() {
				var t = "onhashchange" in window,
					e = "onpopstate" in window;
				return (e || t) && 1 != Cookie.get("ISSW") && !window.__disable_preload
			}

			function e() {
				var t = decodeURIComponent(location.search).match(/rsv_preqid=([^&]*)&?/);
				return t && t.length > 1 ? t[1] : ""
			}

			function s() {
				this.is = bds.comm.supportis, this.async = t(), this.preQid = e(), this.focusIndex = -1, this.focusT = null, this.syncSubmit = !1, this.preInit(), this.init()
			}
			return s.prototype = {
				formSubmit: function(t, e) {
					if (e && e.p) var s = e.p("rsv_slog"),
						i = e.p("wd");
					if (t && t.qid) var n = t.qid;
					var a = {
						type: "form_submit",
						submit_type: s,
						cur_key: i,
						qid: n,
						t: (new Date).getTime()
					};
					bds.log.send.sendPack("new_input", {
						action: a
					}, {
						qid: this.qid,
						log: this.log,
						len: this.len
					})
				},
				confirmSubmit: function(t) {
					var e = {
						type: 0,
						start_qid: t,
						end_qid: bds.comm.qid
					};
					bds.log.send.sendPack("new_input", e, {
						qid: t,
						log: this.log,
						len: this.len
					}), this.preInit()
				},
				preInit: function() {
					this.qid = bds.comm.qid, this.log = "&q=" + bds.comm.queryEnc + "&qid=" + bds.comm.qid + "&rsv_did=" + bds.comm.did + "&rsv_tn=" + bds.comm.tn + "&rsv_sid=" + bds.comm.sid, this.len = (this.log + "&t=" + (new Date).getTime()).length
				},
				init: function() {
					var t = this;
					t.is ? $(window).on("swap_begin", function(e, s, i) {
						t.formSubmit(s, i)
					}).on("confirm", function() {
						t.confirmSubmit(t.qid)
					}) : t.async ? $(window).on("swap_end", function(e, s, i) {
						t.formSubmit(s, i), t.confirmSubmit(t.qid)
					}) : this.preQid && this.confirmSubmit(this.preQid), $(window).on("unload", function() {
						if (t.async !== !1 || t.syncSubmit !== !0) {
							var e = {
								type: 2,
								start_qid: t.qid,
								end_qid: ""
							};
							bds.log.send.sendNow("new_input", e, {
								qid: t.qid,
								log: t.log,
								len: t.len
							})
						}
					})
				},
				triggerIpt: function(t, e, s, i) {
					var n = {
						type: t,
						sug_id: e,
						tmp_key: s,
						cur_key: i,
						t: (new Date).getTime()
					};
					bds.log.send.sendPack("new_input", {
						action: n
					}, {
						qid: this.qid,
						log: this.log,
						len: this.len
					})
				},
				triggerSug: function(t, e, s, i, n, a) {
					var o;
					if ("sug_hide" === t) {
						if (!e) return;
						o = {
							type: t,
							sug_id: e,
							t: (new Date).getTime()
						}
					}
					if ("sug_show" === t && (o = {
							type: t,
							sug_id: e,
							sug_num: n,
							sug_info: a,
							cur_key: i,
							t: (new Date).getTime()
						}), !o) var o = {
						type: t,
						sug_id: e,
						sug_index: s,
						cur_key: i,
						t: (new Date).getTime()
					};
					if ("sug_hover" === t) {
						if (null !== this.focusT && -1 !== this.focusIndex && this.focusIndex === s) return;
						null !== this.focusT && (clearTimeout(this.focusT), this.focusT = null), this.focusIndex = s, this.focusT = setTimeout(function() {
							bds.log.send.sendPack("new_input", {
								action: o
							}, {
								qid: this.qid,
								log: this.log,
								len: this.len
							})
						}, 200)
					} else bds.log.send.sendPack("new_input", {
						action: o
					}, {
						qid: this.qid,
						log: this.log,
						len: this.len
					})
				},
				triggerSubmit: function(t, e) {
					var s = {
						type: "form_submit",
						submit_type: t,
						cur_key: e,
						t: (new Date).getTime()
					};
					this.syncSubmit = !0, bds.log.send.sendNow("new_input", {
						action: s
					}, {
						qid: this.qid,
						log: this.log,
						len: this.len
					})
				},
				triggerSugRequest: function(t, e) {
					var s = {
						type: "sug_req",
						status: t,
						sug_id: e,
						t: (new Date).getTime()
					};
					bds.log.send.sendPack("new_input", {
						action: s
					}, {
						qid: this.qid,
						log: this.log,
						len: this.len
					})
				}
			}, s
		}();
	bds.se.sug = function(t) {
		var e = new bdsug(t);
		return e.outInterface()
	};
	var supportInputEvent = "oninput" in document.createElement("input") && !navigator.userAgent.match(/MSIE 9/) && !navigator.userAgent.match(/chrome\/(28|29|30|31)/i),
		BDSUG_TIMESTAMP_START = 14183424e5,
		BDSUG_QUERY_LEV = 4;
	bdsug.prototype = {
		updateInitData: function() {
			var me = this,
				opts = me.opts || {};
			me.setsug = !0, me.setsugstorage = !0, me.sets = {}, me.sugcookie = navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3, me.sugstorecookie = navigator.cookieEnabled && /sugstore=(\d)/.test(document.cookie) ? RegExp.$1 : 1, bds.comm && bds.comm.personalData && (me.sets = "string" == typeof bds.comm.personalData ? eval("(" + bds.comm.personalData + ")") : bds.comm.personalData), me.sets.errno && 0 == me.sets.errno && me.sets.sugSet && me.sets.sugSet.ErrMsg && "SUCCESS" == me.sets.sugSet.ErrMsg ? 0 == me.sets.sugSet.value && (me.setsug = !1) : 0 == me.sugcookie && (me.setsug = !1), me.sets.errno && 0 == me.sets.errno && me.sets.sugStoreSet && me.sets.sugStoreSet.ErrMsg && "SUCCESS" == me.sets.sugStoreSet.ErrMsg ? 0 == me.sets.sugStoreSet.value && (me.setsugstorage = !1) : 0 == me.sugstorecookie && (me.setsugstorage = !1), me.loggedon = bds.comm && bds.se.store && !bds.se.store.disabled && navigator.cookieEnabled, me.showsug = opts.showsug ? opts.showsug : me.setsug, me.showsugstore = opts.showsugstore ? opts.showsugstore : me.showsug && me.loggedon && me.setsugstorage, me.query = bds.comm.query, me.pinyin = bds.comm.pinyin, me.sugHost = bds.comm.sugHost || "", me.sid = navigator.cookieEnabled && /H_PS_PSSID=([0-9_]+)/.test(document.cookie) ? RegExp.$1 : bds.comm.sid, me.writeStore()
		},
		check: function() {
			var t = this;
			t.value != t.ipt.value && t.showValue != t.ipt.value && (t.inputValue = t.showValue = t.value = t.ipt.value, bds && bds.comm && 0 === bds.comm.ishome && t.addStat("oq", bds.comm.query), $(t.ipt).trigger("inputChange", [t]), t.request(t.value))
		},
		startCircle: function() {
			var t = this;
			t.timer || ($(t.ipt).trigger("start", [t]), t.timer = setTimeout(function() {
				t.check(), t.timer = setTimeout(arguments.callee, 200)
			}, 200), supportInputEvent && $(t.ipt).bind("input", function() {
				t.check()
			}))
		},
		stopCircle: function() {
			var t = this;
			t.timer && (clearTimeout(t.timer), supportInputEvent && $(t.ipt).unbind("input"), t.timer = null, $(t.ipt).trigger("stop", [t]))
		},
		callback: function(t, e) {
			function s(t) {
				i.zhixintemplate[t] && !i.zhixinused[t] && (i.zhixinused[t] = $.ajax({
					crossDomain: !0,
					url: i.zhixintemplate[t],
					dataType: "script",
					scriptCharset: "UTF-8"
				}))
			}
			var i = this;
			if (t && t.exp ? i.addStat("rsv_sug6", t.exp) : i.removeStat("rsv_sug6"), t && (t.g || t.z || i.checkStore(t) && i.checkStore(t).length > 0)) {
				if (i.queryValue = t.q, t.q && 2 != e && (t.sugId || (t.sugId = i.sugRegId), i.dataCached[t.q] = t), $(i.form).hasClass("showsugzhixin") || (i.withoutZhixin = !0), $(i.ipt).trigger("dataReady", [i]), !i.withoutZhixin && t.zzx)
					for (var n = 0; n < t.zzx.length; n++) t.zzx[n] && t.zzx[n].type && (i.zhixinsug.push({
						value: t.g[n].q,
						type: t.zzx[n].type,
						url: t.zzx[n].url
					}), s(t.zzx[n].type));
				i.dataArray = i.packData(t), i.render(i.dataArray)
			} else i.hideSug()
		},
		buildUrl: function(t, e, s) {
			var i = this,
				n = i.sugHost || "http://suggestion.baidu.com/su",
				a = e ? "&sugmode=" + e : "",
				o = i.withoutZhixin ? "" : "&zxmode=1";
			i.sugcookie > 0 && (i.sugcookie = 3);
			var r = n + "?wd=" + encodeURIComponent(t) + a + o + "&json=1&p=" + i.sugcookie + "&sid=" + i.sid;
			return bds.comm.supportis && (r += "&req=2"), window.bds && bds.comm && bds.comm.cur_query && (r += "&bs=" + encodeURIComponent(bds.comm.cur_query)), window.bds && bds.comm && bds.comm.cur_disp_query && (r += "&pbs=" + encodeURIComponent(bds.comm.cur_disp_query)), !window._is_sugemptyhot_sam || t || s ? t || s || (r += "&sc=eb") : r += "&sc=hot", bds && bds.comm && bds.comm.qid && (i.sugRealRegId = i.sugRegId = bds.comm.qid + i.seq++, r += "&sugId=" + i.sugRegId), r
		},
		request: function(t, e) {
			var s = this;
			if (t && (t = $.limitWd(t, 160)), s.directSugSelected = !1, "_blank" == $(s.form).attr("target") && 1 == $(s.ipt).attr("data-bfocus")) $(s.ipt).focus().attr("data-bfocus", 0);
			else if (s.showsug) {
				if (s.reqValue = t, (2 != e || bds.comm.supportis) && s.dataCached[t]) {
					var i = s.dataCached[t];
					return s.callback(i), void(i.sugId && (s.sugRegId = i.sugId))
				}
				s.jqXhr && (s.jqXhr.abort(), s.jqXhr = null, s.slog.triggerSugRequest("abort", s.sugRealRegId)), s.jqXhr = $.ajax({
					dataType: "jsonp",
					async: !0,
					scriptCharset: "gbk",
					url: s.buildUrl(t, e),
					jsonp: "cb",
					timeout: 5e3,
					success: function(t) {
						s.slog.triggerSugRequest("success", s.sugRealRegId), s.sugReqStat = 1, s.callback(t, e)
					},
					error: function(t, e) {
						"timeout" === e && s.slog.triggerSugRequest("error", s.sugRealRegId)
					}
				}).always(function() {
					s.jqXhr = null, s.sugReqStat = 0
				}), s.slog.triggerSugRequest("req", s.sugRealRegId), s.sugReqStat = 0, s.rsv_sug3++, s.addStat("rsv_sug3", s.rsv_sug3), s.initTime = (new Date).getTime()
			}
		},
		packData: function(t) {
			var e = this,
				s = [];
			e.checkHot(t), e.checkAla(t), e.checkStore(t), bds.comm.supportis || e.checkDirect(t);
			for (var i = e.mergeData(t), n = 0; n < i.length; n++) {
				if (bds && bds.comm && 1 == bds.comm.ishome && bds.comm.supportis) {
					if (n > 9) break
				} else if (n > e.maxNum - 1) break;
				e.reverse ? s.unshift(i[n]) : s.push(i[n])
			}
			return s
		},
		checkHot: function(t) {
			var e = this;
			if (e.dataHot = [], t.g && t.g.length)
				for (var s = 0; s < t.g.length; s++) {
					var i = t.g[s];
					i.t && "hot" == i.t && e.dataHot.push({
						value: i.q,
						otherData: i.st
					})
				}
		},
		checkDirect: function(t) {
			var e = this;
			if (e.dataDirect = [], t.tzx && "6" == t.tzx.type && t.tzx.info) {
				var s = t.tzx.info;
				e.dataDirect.push({
					value: s.site,
					otherData: s
				})
			}
		},
		checkAla: function(t) {
			var e = this;
			if (e.dataAladdin = [], t.z && t.z.length > 0 && !e.withoutRich)
				for (var s = 0; s < t.z.length; s++) {
					var i = t.z[s];
					i.id && i.type && i.key && i.word && e.dataAladdin.push({
						value: i.key,
						otherData: i
					})
				} else e.dataAladdin = []
		},
		writeStore: function() {
			var t = this;
			if (t.showsugstore && t.query && t.pinyin && checkHsugIn(t.query)) {
				t.getStore();
				var e = encodeURIComponent(t.query.toLowerCase()),
					s = encodeURIComponent(t.pinyin.toLowerCase()),
					i = BDSUG_QUERY_LEV,
					n = (new Date).getTime() - BDSUG_TIMESTAMP_START,
					a = -1;
				$.each(t.storearr, function(t, o) {
					o.p == s && (o.q = e, o.s = i, o.t = n, a = t)
				}), a > -1 && t.storearr.splice(a, 1), t.storearr.push({
					q: e,
					p: s,
					s: i,
					t: n
				}), t.storearr.length > 50 && t.storearr.shift(), t.setStore()
			}
		},
		checkStore: function(t) {
			var e = this;
			if (e.dataStored = [], e.showsugstore && checkHsugShow(e.value)) {
				if (t && t.g && t.g.length)
					for (var s = 0; s < t.g.length; s++) {
						var i = t.g[s];
						i.t && "hs" == i.t && $.trim(i.q) && e.dataStored.push({
							value: $.trim(i.q),
							pinyin: "|",
							s: 4,
							t: ""
						})
					}
				0 == e.dataStored.length && (e.getStore(), $.each(e.storearr, function(t, s) {
					var i = decodeURIComponent(s.q),
						n = decodeURIComponent(s.p);
					(0 == i.indexOf(e.value.toLowerCase()) || 0 == n.indexOf(e.value.toLowerCase())) && e.dataStored.unshift({
						value: i,
						pinyin: n,
						s: s.s,
						t: s.t
					})
				}))
			} else if (e.showsugstore && "" === e.value) {
				if (t && t.g && t.g.length)
					for (var s = 0; s < t.g.length; s++) {
						var i = t.g[s];
						i.t && "hs" == i.t && $.trim(i.q) && e.dataStored.push({
							value: $.trim(i.q),
							pinyin: "|",
							s: 4,
							t: ""
						})
					}!window._is_sugempty_sam || window.bds && bds.comm && bds.comm.username || (e.getStore(), $.each(e.storearr, function(t, s) {
						var i = decodeURIComponent(s.q),
							n = decodeURIComponent(s.p);
						e.dataStored.unshift({
							value: i,
							pinyin: n,
							s: s.s,
							t: s.t
						})
					}))
			}
			return e.dataStored
		},
		getStore: function() {
			var t = this;
			try {
				t.storestr = bds.se.store.get("BDSUGSTORED"), t.storearr = t.storestr && $.parseJSON(t.storestr) || []
			} catch (e) {
				t.storestr = "[]", t.storearr = []
			}
			$.each(t.storearr, function(t, e) {
				e.t = e.t || 0, e.s = e.s || 4
			})
		},
		setStore: function() {
			var t = this,
				e = "";
			$.each(t.storearr, function(t, s) {
				e += (0 == t ? "" : ",") + '{"q":"' + s.q + '","p":"' + s.p + '","s":' + s.s + ',"t":' + s.t + "}"
			}), t.storestr = "[" + e + "]";
			try {
				bds.se.store.set("BDSUGSTORED", t.storestr)
			} catch (s) {}
		},
		mergeData: function(t) {
			function e(t, e, i, a) {
				function o(t, e) {
					var t = $.subByte(t, "41");
					return e && t ? (t = $.trim(t), e = $.trim(e), t = 0 == t.indexOf(e) && t !== e ? r(t, e) : u(t)) : t = u(t), t
				}

				function r(t, e) {
					t = u(t), e = u(e);
					var s = e,
						i = e.length,
						n = "<b>" + t.substring(i) + "</b>";
					return s + n
				}

				function u(t) {
					return t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;")
				}
				var d = {};
				d.value = t;
				var c = o(t, s.queryValue);
				switch (e) {
					case "hot":
						var g = ["#f54545", "#f54545", "#ff8547", "#ffac38"];
						d.html = '<span style="display:inline-block; padding:1px 0; color:#fff; width:14px; line-height:100%; font-size:12px; text-align:center; background:' + (g[n] || "#aaa") + '; margin-right:5px;">' + n + "</span>", d.html += '<span style="color:#666">' + i.q + "</span>", i.n && 1 == i.n && (d.html += '<span style="display:inline-block; padding:2px; color:#fff; line-height:100%; font-size:12px; text-align:center; background:#f13f40; margin-left:5px;">新</span>'), d.type = "hot";
						break;
					case "direct":
						d.html = "-" == i.iconurl ? '<p link="' + i.siteurl + '">' + i.site + "<span>" + i.showurl + "</span><i>官网</i></p>" : '<p link="' + i.siteurl + '"><img src="' + i.iconurl + '"/>' + i.site + "<span>" + i.showurl + "</span></p>", d.type = "direct";
						break;
					case "ala":
						d.html = "<h3>" + c + "</h3><p>" + i.word + "</p>", d.type = "ala", d.alaid = i.id;
						break;
					case "store":
						d.html = "|" == i ? "<span>" + c + '</span><u class="bdsug-store-del bdsug-store-del-cloud" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>' : "<span>" + c + '</span><u class="bdsug-store-del" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>', d.type = "store", d.pinyin = i, d.s = a;
						break;
					default:
						d.html = c
				}
				if (!s.withoutZhixin && s.zhixinsug.length > 0)
					for (var l = 0; l < s.zhixinsug.length; l++)
						if (d.value == s.zhixinsug[l].value && "ala" != d.type) {
							d.zxtype = s.zhixinsug[l].type, d.zxurl = s.zhixinsug[l].url;
							var p = '<i class="bdsug-arrow"></i>';
							d.html.split(p).length <= 1 && (d.html += p)
						}
				return d
			}
			var s = this,
				i = [],
				n = 0;
			if (s.rsv_sug = 0, s.dataHot.length > 0 && "" === s.value) {
				for (var a = 0; a < s.dataHot.length && (n++, i.push(e(s.dataHot[a].value, "hot", s.dataHot[a].otherData)), !(n >= 8)); a++);
				return i
			}
			if (s.dataDirect.length > 0 && (i.push(e(s.dataDirect[0].value, "direct", s.dataDirect[0].otherData)), ns_c({
					pj_name: "zhida_sug",
					zhida_prefix: encodeURIComponent(s.inputValue),
					zhida_query: encodeURIComponent(s.dataDirect[0].value),
					zhida_chufa: encodeURIComponent(s.dataDirect[0].otherData.hit_q),
					zhida_bp: bds.comm.ishome ? 0 : 1
				})), s.dataAladdin.length > 0)
				for (var a = 0; a < s.dataAladdin.length && (i.push(e(s.dataAladdin[0].value, "ala", s.dataAladdin[0].otherData)), n++, !(n >= 1)); a++);
			if (s.hisSugDisp = [], s.dataStored.length > 0)
				for (var a = 0; a < s.dataStored.length; a++) {
					for (var o = !1, r = 0; r < i.length; r++) "direct" != i[r].type && s.dataStored[a].value == i[r].value && (o = !0);
					if (o || (s.hisSugDisp.push(s.dataStored[a].value), i.push(e(s.dataStored[a].value, "store", s.dataStored[a].pinyin, s.dataStored[a].s || 0)), n++), s.rsv_sug++, "" === s.value && n >= 9) break;
					if ("" !== s.value && n >= 2) break
				}
			var u = [];
			if (t.g && t.g.length > 0) {
				for (var a = 0; a < t.g.length; a++)
					if ("n" === t.g[a].t) {
						for (var o = !1, r = 0; r < i.length; r++) "direct" != i[r].type && t.g[a].q == i[r].value && (o = !0);
						o || u.push(e(t.g[a].q, t.g[a].t, t.g[a].st))
					}
				i = "" === s.value && u.length ? bds.comm.supportis ? u.slice(0, Math.max(4 - i.length, 2)).concat(i) : u.slice(0, Math.max(10 - i.length, 5)).concat(i) : i.concat(u)
			}
			return i
		},
		render: function(t) {
			var e = this;
			if (e.is_selecting = !1, e.sugcontainer || (e.sugcontainer = document.createElement("DIV"), e.sugcontainer.className = "bdsug", $(e.sugcontainer).delegate("li", "mouseenter", function() {
					var t = $(this).data("key");
					e.blurSug($(e.sugcontainer).find("li")), e.focusSug(this, t), e.index = $(e.sugcontainer).find("li").index($(this)), e.slog.triggerSug("sug_hover", e.sugId, e.index, e.ipt.value)
				}).delegate("li", "mouseleave", function() {
					$(this).removeClass("bdsug-s")
				}).delegate("li", "click", function() {
					var t = $(this).data("key");
					e.directSugSelected = $(this).hasClass("bdsug-direct") ? !0 : !1, e.sugValue = e.showValue = e.value = e.ipt.value = t, e.index = $(e.sugcontainer).find("li").index($(this)), e.slog.triggerSug("sug_click", e.sugId, e.index, e.ipt.value), e.hideSug(), bds && bds.comm && 0 === bds.comm.ishome && e.addStat("oq", bds.comm.query), e.addStat("sug", t), e.addStat("rsv_sug2", 1), e.slog.async === !1 ? e.slog.triggerSubmit("sug_click", e.ipt.value) : e.addStat("rsv_slog", "sug_click"), e.formSubmit()
				}), $(e.sugcontainer).click(function(t) {
					t.stopPropagation()
				})), t.length > 0) {
				for (var s = document.createElement("UL"), i = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://sclick.baidu.com") : "http://sclick.baidu.com", n = 0; n < t.length; n++) {
					var a = document.createElement("LI");
					if (a.innerHTML = t[n].html, t[n].zxtype && t[n].zxurl) {
						var o = t[n].value,
							r = t[n].zxtype,
							u = t[n].zxurl,
							d = e.zhixindata[o] && e.zhixindata[o].responseJSON && 0 == e.zhixindata[o].responseJSON.status && e.zhixindata[o].responseJSON.data && e.zhixindata[o].responseJSON.data.length > 0;
						d || (e.zhixindata[o] = $.ajax({
							dataType: "jsonp",
							async: !0,
							url: u,
							jsonp: "cb"
						})), $(a).addClass("bdsug-zx").on("focused", function() {
							var t = $(this).data("key"),
								s = e.zhixindata[t] && e.zhixindata[t].responseJSON && 0 == e.zhixindata[t].responseJSON.status && e.zhixindata[t].responseJSON.data && e.zhixindata[t].responseJSON.data.length > 0,
								i = $(e.sugcontainer).find(".bdsug-box")[0];
							if (s && i && bds.se.sugzx && bds.se.sugzx[r]) {
								var n = bds.se.sugzx[r](e.zhixindata[t].responseJSON.data, t, e.outInterface(), e);
								n instanceof jQuery && ($(e.sugcontainer).addClass("bdsug-showzx"), $(i).empty().append(n), $(e.sugcontainer).height() < $(e.sugcontainer).find(".bdsug-box").height() && $(e.sugcontainer).css({
									height: $(e.sugcontainer).find(".bdsug-box").height()
								}))
							}
						}).on("blured", function() {
							$(e.sugcontainer).removeClass("bdsug-showzx"), $(e.sugcontainer).css({
								height: "auto"
							})
						})
					}
					e.setSug(a, t[n].value, t[n].type), s.appendChild(a)
				}
				e.form ? $(e.sugcontainer).insertBefore(e.form.firstChild) : $(e.ipt).after(e.sugcontainer), e.sugcontainer.innerHTML = "", e.sugcontainer.appendChild(s), e.sugDispNum = t.length, $(e.sugcontainer).removeClass("bdsug-showzx"), $(e.sugcontainer).css({
					height: "auto"
				});
				var c = $(e.sugcontainer).find("ul li");
				e.withoutZhixin || ($(e.sugcontainer).addClass("bdsug-showarrow"), $(e.sugcontainer).append($('<div class="bdsug-box"></div>')), $(e.form).find(".bdsug-tmp").length || $(e.form).append($('<div class="bdsug-tmp"></div>')), $(e.sugcontainer).find(".bdsug-box").on("mouseenter", function() {
					$(e.sugcontainer).addClass("bdsug-showzx"), $(c[e.index]).addClass("bdsug-s")
				}).on("mouseleave", function() {
					$(e.sugcontainer).removeClass("bdsug-showzx"), $(c[e.index]).removeClass("bdsug-s"), $(e.sugcontainer).css({
						height: "auto"
					})
				}).on("click", function(t) {
					t.stopPropagation()
				})), $(e.form).find(".bdsug-tmp").empty();
				var g = $("<li>").appendTo($("<div>").addClass("bdsug-showzx").appendTo($(e.form).find(".bdsug-tmp"))),
					l = $("<div>").css({
						position: "absolute",
						display: "inline-block",
						top: "-10000px",
						left: "-10000px"
					}).appendTo($(e.form).find(".bdsug-tmp"));
				$.each(c, function(t, s) {
					l.html($(s).html());
					var i = 28;
					l.width() > g.width() - $(e.sugcontainer).find(".bdsug-arrow").width() - i && $(s).addClass("bdsug-overflow")
				}), "" === e.value && e.dataHot.length && $(e.sugcontainer).prepend('<div style="height:25px; line-height:31px; padding-left:10px; font-size:12px; color:#333; overflow:hidden;">实时热搜</div>');
				var p = "0";
				if (0 == bds.comm.ishome ? p = "0" : 1 == bds.comm.ishome && window.s_domain && "home" == window.s_domain.base ? p = "2" : 1 == bds.comm.ishome && (p = "1"), "" === e.value && t.length) {
					for (var h = 0, n = 0; n < t.length; n++) t[n].type && "store" == t[n].type && h++;
					ns_c({
						pj_name: "es_sug",
						es_sug_num: t.length,
						eb_sug_num: t.length - h,
						es_sug_bp: p + "_" + (bds.comm.supportis ? 1 : 0)
					}), (0 != p || !bds.comm.supportis) && e.dataStored.length && e.dataStored.length > 3 && ($(e.sugcontainer).append('<div style="text-align:right; background:#fafafa; color:#666; height:25px; line-height:25px;"><span class="setup_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">关闭历史</span><span style="color:#e6e6e6;margin-right:10px;">|</span><span class="del_all_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">删除历史</span><span style="color:#e6e6e6;margin-right:10px;">|</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug" target="_blank" style="color:#666; text-decoration:underline; margin-right:10px;">更多历史</a></div>'), $(e.sugcontainer).find(".del_all_storeSug").click(function() {
						if (e.dataStored[0] && e.dataStored[0].pinyin && "|" == e.dataStored[0].pinyin) {
							var t = window.bds && bds.util && bds.util.domain && bds.util.domain.get("http://api.open.baidu.com/new_hsug/data/Deleteall");
							$.ajax({
								dataType: "jsonp",
								scriptCharset: "utf-8",
								jsonp: "cb",
								timeout: 6e3,
								url: t,
								success: function() {}
							})
						}
						e.storearr = [], e.setStore(), e.hideSug();
						var s = window["BD_PS_C" + (new Date).getTime()] = new Image;
						s.src = i + "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" + bds.comm.sid + "&t=" + (new Date).getTime() + "&path=http://www.baidu.com&rsv_sug9=es_" + p + "_" + (bds.comm.supportis ? 1 : 0)
					}), $(e.sugcontainer).find(".more_storeSug").click(function() {
						ns_c({
							pj_name: "hs_sug_more"
						})
					}), $(e.sugcontainer).find(".setup_storeSug").click(function() {
						bds.event.trigger("bd.se.loadpanel", {
							tabindex: 0,
							tipsConfig: {
								content: bds && bds.comm && bds.comm.username ? "该选项可以关闭您账号下多个设备的搜索历史" : "该选项可以关闭您的历史记录",
								wrapper: "#se-setting-5"
							}
						}), e.hideSug(), ns_c({
							pj_name: "hs_sug_setup"
						})
					}))
				}
				$.each(c, function(s, n) {
					if (t[s] && "store" == t[s].type) {
						var a = s;
						$(n).find("u").click(function(s) {
							if (s.stopPropagation(), $(n).remove(), bds && bds.comm && bds.comm.username) {
								var o = window.bds && bds.util && bds.util.domain && bds.util.domain.get("http://api.open.baidu.com/new_hsug/data/Delete");
								o = o + "?query=" + encodeURIComponent(t[a].value), $.ajax({
									dataType: "jsonp",
									scriptCharset: "utf-8",
									jsonp: "cb",
									timeout: 6e3,
									url: o,
									success: function() {}
								})
							}
							if (t[a].pinyin && "|" == t[a].pinyin) {
								e.dataCached = {};
								var r = !1;
								$.each(e.storearr, function(t) {
									encodeURIComponent(e.dataArray[a].value) == e.storearr[t].q && (r = t)
								}), r !== !1 && (e.storearr.splice(r, 1), e.setStore())
							} else {
								var r = !1;
								$.each(e.storearr, function(t) {
									e.dataArray[a].pinyin == decodeURIComponent(e.storearr[t].p) && (r = t)
								}), r !== !1 && (e.storearr.splice(r, 1), e.setStore())
							}
							var u = window["BD_PS_C" + (new Date).getTime()] = new Image;
							u.src = i + "/w.gif?q=" + encodeURIComponent(t[a].value) + "&fm=beha&rsv_sug=del&rsv_sid=" + bds.comm.sid + "&t=" + (new Date).getTime() + "&path=http://www.baidu.com" + ("" === e.value ? "&rsv_sug9=es_" + p + "_" + (bds.comm.supportis ? 1 : 0) : "")
						})
					}
				}), $(e.ipt).trigger("render", [e]), e.renderCallback(), e.showSug(), $(e.ipt).trigger("showSug", [e])
			} else e.renderCallback(), e.hideSug()
		},
		setAutocomplete: function(t) {
			var e = this;
			$(e.ipt).attr("autocomplete", t)
		},
		setSug: function(t, e, s) {
			$(t).attr("data-key", e), s && $(t).addClass("bdsug-" + s)
		},
		clickIpt: function() {
			var t = this;
			!bds.comm.supportis && t.query && t.query == t.ipt.value ? t.request(t.ipt.value, "2") : t.request(t.ipt.value)
		},
		showSug: function() {
			var t = this;
			t.index = -1, t.ipt.value == t.reqValue && $(t.sugcontainer).show(), t.visible = !0, t.rsv_sug1++, t.addStat("rsv_sug1", t.rsv_sug1), t.sugId = t.sugRegId, t.slog.triggerSug("sug_show", t.sugId, t.index, t.ipt.value, t.sugDispNum, t.hisSugDisp)
		},
		hideSug: function() {
			var t = this;
			t.is_selecting = !1, $(t.ipt).trigger("hide", [t]), $(t.sugcontainer).hide(), t.visible = !1, t.jqXhr && (t.jqXhr.abort(), 1 !== t.sugReqStat && t.slog.triggerSugRequest("abort", t.sugRealRegId)), t.jqXhr = null, t.slog.triggerSug("sug_hide", t.sugId, t.index, t.ipt.value), t.sugId = ""
		},
		selectSug: function(t) {
			var e = this,
				s = $(e.sugcontainer).find("li");
			if (e.blurSug(s), e.directSugSelected = -1 != t && s.eq(t).hasClass("bdsug-direct") ? !0 : !1, -1 != t) {
				e.is_selecting = !0;
				var i = $($(s)[t]).data("key");
				e.focusSug(s[t], i), e.sugValue = e.showValue = e.value = e.ipt.value = i, e.addStat("sug", i), bds && bds.comm && 0 === bds.comm.ishome && e.addStat("oq", bds.comm.query), e.addStat("rsv_n", 1)
			} else e.is_selecting = !1, e.selectCallback(e.inputValue), e.showValue = e.value = e.ipt.value = e.inputValue, e.sugValue = "", e.removeStat("sug"), e.removeStat("oq"), e.removeStat("rsv_n");
			e.stopRefresh = e.inputValue || 1 != bds.comm.ishome ? !1 : !0, $(e.ipt).trigger("selectSug", [e, t, i]), e.slog.triggerSug("sug_select", e.sugId, e.index, e.ipt.value)
		},
		blurSug: function(t) {
			$(t).removeClass("bdsug-s"), $(t).trigger("blured")
		},
		focusSug: function(t, e) {
			var s = this;
			$(t).addClass("bdsug-s"), $(t).trigger("focused"), s.selectCallback(e)
		},
		pressUp: function(t) {
			var e = this,
				t = $(e.sugcontainer).find("li").length;
			e.index--, e.index < -1 && (e.index = t - 1), e.selectSug(e.index)
		},
		pressDown: function(t) {
			var e = this,
				t = $(e.sugcontainer).find("li").length;
			e.index++, e.index >= t && (e.index = -1), e.selectSug(e.index)
		},
		addStat: function(t, e) {
			var s = this;
			if (s.stat || (s.stat = {}), s.stat[t] = e, !s.withoutStat) {
				var i = $(s.form).find('input[type="hidden"][name="' + t + '"]');
				i.length ? $(i).val(e) : $(s.form).append('<input type="hidden" name="' + t + '" value="' + e + '"/>')
			}
		},
		removeStat: function(t) {
			var e = this;
			if (!e.withoutStat && ($(e.form).find('input[type="hidden"][name="' + t + '"]').remove(), !e.stat)) try {
				delete e.stat[t]
			} catch (s) {}
		},
		clearStat: function() {
			var t = this;
			bds && bds.comm && bds.comm.isAsync && t.removeStat("rsp"), t.removeStat("rsv_n"), t.removeStat("rsv_sug"), t.removeStat("rsv_sug1"), t.removeStat("rsv_sug2"), t.removeStat("rsv_sug3"), t.removeStat("rsv_sug4"), t.removeStat("rsv_sug5"), t.removeStat("rsv_sug6"), t.removeStat("rsv_sug9"), t.stat = {}
		},
		getRsvStatus: function(t) {
			var e = this,
				s = [],
				i = [-2];
			if (e.rsv_sug) {
				i = [-1];
				for (var n in e.dataArray) t == e.dataArray[n].value && (i = [0, n], n < e.rsv_sug && (i = [1, n]));
				for (var n = 0; n < e.rsv_sug && e.dataArray[n]; n++) s.push(e.dataArray[n].value.length, e.dataArray[n].s);
				i.push(e.index, e.rsv_sug, s.join("."))
			}
			return i.join("_")
		},
		formSubmit: function(t) {
			var e = this,
				s = !0;
			if (-1 != e.index && (e.addStat("f", 3), e.addStat("rsp", e.index), e.dataArray[e.index] && e.dataArray[e.index].alaid ? e.addStat("rsv_sug5", e.dataArray[e.index].alaid) : e.removeStat("rsv_sug5")), "" === e.inputValue && e.dataArray[e.index] && "store" == e.dataArray[e.index].type) {
				var i = "0";
				0 == bds.comm.ishome ? i = "0" : 1 == bds.comm.ishome && window.s_domain && "home" == window.s_domain.base ? i = "2" : 1 == bds.comm.ishome && (i = "1"), e.addStat("rsv_sug9", "es_" + i + "_" + (bds.comm.supportis ? 1 : 0))
			} else "" === e.inputValue && e.addStat("rsv_sug9", "eb_" + (bds.comm.supportis ? 1 : 0));
			e.sugValue == e.value && (e.removeStat("rsv_n"), e.removeStat("sug")), 0 != e.inputT ? (e.addStat("inputT", (new Date).getTime() - e.inputT), e.directInputT = (new Date).getTime() - e.inputT, e.inputT = 0) : e.removeStat("inputT"), 0 != e.rsv_sug4 && (e.addStat("rsv_sug4", (new Date).getTime() - e.rsv_sug4), e.rsv_sug4 = 0), e.rsv_sug && e.addStat("rsv_sug", e.rsv_sug), $($(e.sugcontainer).find("li")[e.index]).hasClass("bdsug-zx") ? "all" == $(e.sugcontainer).find(".bdsug-box").attr("bdsug-click") ? e.addStat("rsv_sugtp", 1) : e.addStat("rsv_sugtp", 0) : e.removeStat("rsv_sugtp"), e.slog.async === !1 && e.addStat("rsv_preqid", bds.comm.qid);
			try {
				! function() {
					var t = (new Date).getTime();
					document.cookie = "WWW_ST=" + t + ";expires=" + new Date(t + 1e4).toGMTString()
				}()
			} catch (n) {}
			if (0 == e.index && e.dataDirect.length > 0 && e.directSugSelected) {
				if (window.open($(e.sugcontainer).find(".bdsug-direct p").attr("link"), "_blank"), ns_c({
						pj_name: "zhida_sug",
						sug_prefix: encodeURIComponent(e.inputValue),
						sug_query: encodeURIComponent(e.dataDirect[0].value),
						sug_siteurl: encodeURIComponent(e.dataDirect[0].otherData.siteurl),
						sug_chufa: encodeURIComponent(e.dataDirect[0].otherData.hit_q),
						sug_inputT: e.directInputT ? e.directInputT : 0,
						rsv_bp: bds.comm.ishome ? 0 : 1
					}), bds && bds.comm && bds.comm.username) {
					var a = window.bds && bds.util && bds.util.domain && bds.util.domain.get("http://api.open.baidu.com/new_hsug/data/write");
					a = a + "?query=" + encodeURIComponent(e.dataDirect[0].value) + "&src=1&f=3&st=" + (e.showsugstore ? "1" : "0"), $.ajax({
						dataType: "jsonp",
						scriptCharset: "utf-8",
						jsonp: "cb",
						timeout: 6e3,
						url: a,
						success: function() {}
					})
				}
				e.index = -1, e.directSugSelected = !1
			} else if ($.isFunction(e.submission) && (s = e.submission.call(e.form, t), e.hideSug(), e.inputValue = e.value, e.dataCached = {}, e.clearStat()), s) {
				var o = e.ipt.value;
				o && (o = $.limitWd(o), e.ipt.value = e.value = e.inputValue = e.showValue = o), e.form.submit()
			}
			"_blank" !== $(e.form).attr("target") && e.addStat("rsv_bp", 1)
		},
		init: function() {
			var t = this;
			t.setAutocomplete("off"), t.addStat("rsv_bp", t.rsv_bp), t.updateInitData(), bds.se.sugdnscached || ($.ajax({
				dataType: "jsonp",
				async: !0,
				scriptCharset: "gbk",
				url: t.buildUrl("", "", !0),
				jsonp: "cb",
				timeout: 5e3,
				success: function() {}
			}), bds.se.sugdnscached = 1), t.slog = new sugLog, t.imt = new ImeTrack({
				iptId: "kw",
				adv: !0,
				onLogChange: function(e) {
					var s = "",
						i = "";
					(-1 != e.kd || e.val) && (e.type.indexOf("link") > -1 ? s = "mouse_click_link" : (e.type.indexOf("mouse") > -1 || e.type.indexOf("unkey") > -1) && (s += "mouse_"), e.type.indexOf("paste") > -1 && (s += "paste", t.slog.triggerIpt("ipt_paste", t.sugId, "", e.strB)), e.type.indexOf("imeinput") > -1 && (e.strB1 || e.strB2 ? (s += "writing_", s += e.type.indexOf("unkey") > -1 ? "mouse_select" : "keyboard_select", i = e.strB1 + "|" + e.strB2) : 8 == e.ku ? (s += "writing_backspace", i = "|" + e.strB) : (s += "writing_inputing", i = "|" + e.strB)), e.type.indexOf("cancelime") > -1 ? (s += "writing_cancel", i = "") : e.type.indexOf("endime") > -1 && (s += "writing_complete", i = e.strB, t.slog.triggerIpt("ipt_input", t.sugId, i, t.ipt.value)), !s && e.strB ? (s = "ipt_input", i = e.strB, t.slog.triggerIpt("ipt_input", t.sugId, i, t.ipt.value)) : 8 == e.kd && (s = "backspace", i = e.strB, t.slog.triggerIpt("ipt_backspace", t.sugId, i, t.ipt.value)))
				}
			}), $(t.ipt).on("inputChange", function(t, e) {
				e.imt.triggerInputChange(t)
			}), t.startCircle(), t.clearStat(), $(t.ipt).on("click", function(e) {
				e.stopPropagation(), !t.withoutMode && t.clickIpt(), 0 == t.rsv_sug4 && (t.rsv_sug4 = (new Date).getTime())
			}).on("focus", function() {
				t.slog.triggerIpt("ipt_focus", t.sugId, "", t.ipt.value), t.startCircle()
			}).on("keydown", function(e) {
				e = e || window.event, 0 == t.inputT && (t.inputT = (new Date).getTime()), 0 == t.rsv_sug4 && (t.rsv_sug4 = (new Date).getTime()), (9 == e.keyCode || 27 == e.keyCode) && t.hideSug(), t.enterKey = -1, 13 == e.keyCode && (t.addStat("rsv_sug2", 0), t.enterKey = 1), 86 == e.keyCode && e.ctrlKey && t.addStat("rsv_n", 2), t.sugcontainer && "none" != t.sugcontainer.style.display ? (38 == e.keyCode && (e.preventDefault(), t.pressUp()), 40 == e.keyCode && (e.preventDefault(), t.pressDown())) : (38 == e.keyCode || 40 == e.keyCode) && (e.preventDefault(), t.request(t.value))
			}), t.form && $(t.form).submit(function() {
				var e = -1 === t.enterKey ? "btn_click" : "enter_key";
				return t.enterKey = -1, t.slog.async === !1 ? t.slog.triggerSubmit(e, t.ipt.value) : t.addStat("rsv_slog", e), bds && bds.comm && 0 === bds.comm.ishome && t.addStat("oq", bds.comm.query), t.formSubmit(), !1
			})
		},
		outInterface: function() {
			var t = this;
			return {
				setVisibleSug: function() {
					var e = $("<i class='c-icon c-icon-bear-round'></i>");
					return function(s) {
						var i;
						for (e.remove(), i = 0; i < t.dataArray.length; i++)
							if (t.dataArray[i].value == s) {
								e.appendTo($(t.sugcontainer).find("li").eq(i));
								break
							}
					}
				}(),
				getStat: function(e) {
					return t.stat ? t.stat[e] : void 0
				},
				clearStat: function() {
					return t.clearStat()
				},
				setKey: function(e) {
					t.ipt.value = t.value = t.inputValue = t.showValue = e
				},
				visible: function() {
					return t.visible
				},
				is_selecting: function() {
					return t.visible && t.is_selecting
				},
				data: function() {
					return t.dataArray && t.dataArray.length ? $.grep(t.dataArray, function(t) {
						return "direct" != t.type
					}) : []
				},
				show: function() {
					return t.showSug()
				},
				hide: function() {
					return t.hideSug()
				},
				start: function() {
					return t.startCircle()
				},
				stop: function() {
					return t.stopCircle()
				},
				setMaxNum: function(e) {
					return t.maxNum = e
				},
				check: function() {
					return t.check()
				},
				formSubmit: function() {
					return t.formSubmit()
				},
				updateInitData: function() {
					return t.updateInitData()
				},
				on: function() {
					$(t.ipt).on.apply($(t.ipt), arguments)
				},
				height: function() {
					return $(t.sugcontainer).height()
				},
				off: function() {
					$(t.ipt).off.apply($(t.ipt), arguments)
				},
				getRsvStatus: function(e) {
					return t.getRsvStatus(e)
				}
			}
		}
	}
}();