(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,n=s("q1tI");var i=new(((r=s("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,s;function r(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=r).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,r.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return i.computeId(t,s)})).join(" ")};var n=r.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){i.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(n.Component);t.default=a},"8oxB":function(e,t){var s,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===i||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:i}catch(e){s=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,l=[],c=!1,h=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):h=-1,l.length&&p())}function p(){if(!c){var e=o(d);c=!0;for(var t=l.length;t;){for(u=l,l=[];++h<t;)u&&u[h].run();h=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];l.push(new f(e,t)),1!==l.length||c||o(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},MX0m:function(e,t,s){e.exports=s("3niX")},RNiq:function(e,t,s){"use strict";s.r(t);var r=s("MX0m"),n=s.n(r),i=s("q1tI"),a=s.n(i),o=s("8Kt/"),u=s.n(o),l={asx:{name:"S&P/ASX 200 ETF",entryFee:1.5,totalExpenseRatio:.5,prices:[[Date.UTC(2008,1,1),22.49],[Date.UTC(2008,2,1),21.97],[Date.UTC(2008,3,1),20.04],[Date.UTC(2008,4,1),21.63],[Date.UTC(2008,5,1),22.54],[Date.UTC(2008,6,1),20.16],[Date.UTC(2008,7,1),19.07],[Date.UTC(2008,8,1),19.56],[Date.UTC(2008,9,1),17.84],[Date.UTC(2008,10,1),13.72],[Date.UTC(2008,11,1),12.4],[Date.UTC(2009,0,1),12.18],[Date.UTC(2009,1,1),11.67],[Date.UTC(2009,2,1),11.26],[Date.UTC(2009,3,1),12.66],[Date.UTC(2009,4,1),14.02],[Date.UTC(2009,5,1),15.02],[Date.UTC(2009,6,1),15.05],[Date.UTC(2009,7,1),16.89],[Date.UTC(2009,8,1),18.11],[Date.UTC(2009,9,1),19.54],[Date.UTC(2009,10,1),19.61],[Date.UTC(2009,11,1),19.93],[Date.UTC(2010,0,1),21.03],[Date.UTC(2010,1,1),19.85],[Date.UTC(2010,2,1),21.62],[Date.UTC(2010,3,1),23.37],[Date.UTC(2010,4,1),23.51],[Date.UTC(2010,5,1),21.2],[Date.UTC(2010,6,1),20.2],[Date.UTC(2010,7,1),21.84],[Date.UTC(2010,8,1),22.54],[Date.UTC(2010,9,1),23.11],[Date.UTC(2010,10,1),23.76],[Date.UTC(2010,11,1),24.13],[Date.UTC(2011,0,1),25.91],[Date.UTC(2011,1,1),24.96],[Date.UTC(2011,2,1),25.67],[Date.UTC(2011,3,1),25.83],[Date.UTC(2011,4,1),25.79],[Date.UTC(2011,5,1),25.55],[Date.UTC(2011,6,1),24.78],[Date.UTC(2011,7,1),25.16],[Date.UTC(2011,8,1),23.79],[Date.UTC(2011,9,1),21.4],[Date.UTC(2011,10,1),23.41],[Date.UTC(2011,11,1),23.92],[Date.UTC(2012,0,1),23.8],[Date.UTC(2012,1,1),25.61],[Date.UTC(2012,2,1),25.98],[Date.UTC(2012,3,1),25.55],[Date.UTC(2012,4,1),26.13],[Date.UTC(2012,5,1),24.22],[Date.UTC(2012,6,1),25.3],[Date.UTC(2012,7,1),27.79],[Date.UTC(2012,8,1),27.23],[Date.UTC(2012,9,1),27.31],[Date.UTC(2012,10,1),27.91],[Date.UTC(2012,11,1),28.13],[Date.UTC(2013,0,1),28.53],[Date.UTC(2013,1,1),29.21],[Date.UTC(2013,2,1),31.34],[Date.UTC(2013,3,1),32.03],[Date.UTC(2013,4,1),32.13],[Date.UTC(2013,5,1),28.85],[Date.UTC(2013,6,1),26.36],[Date.UTC(2013,7,1),27.27],[Date.UTC(2013,8,1),27.73],[Date.UTC(2013,9,1),29.11],[Date.UTC(2013,10,1),30.53],[Date.UTC(2013,11,1),28.82],[Date.UTC(2014,0,1),28.02],[Date.UTC(2014,1,1),27.09],[Date.UTC(2014,2,1),28.61],[Date.UTC(2014,3,1),29.59],[Date.UTC(2014,4,1),30.2],[Date.UTC(2014,5,1),30.92],[Date.UTC(2014,6,1),30.66],[Date.UTC(2014,7,1),31.78],[Date.UTC(2014,8,1),33.3],[Date.UTC(2014,9,1),30.75],[Date.UTC(2014,10,1),32.4],[Date.UTC(2014,11,1),29.82],[Date.UTC(2015,0,1),30.68],[Date.UTC(2015,1,1),32.32],[Date.UTC(2015,2,1),34.95],[Date.UTC(2015,3,1),35.24],[Date.UTC(2015,4,1),34.59],[Date.UTC(2015,5,1),34.23],[Date.UTC(2015,6,1),32.68],[Date.UTC(2015,7,1),32.23],[Date.UTC(2015,8,1),27.6],[Date.UTC(2015,9,1),28.15],[Date.UTC(2015,10,1),29.28],[Date.UTC(2015,11,1),31.68],[Date.UTC(2016,0,1),31.11],[Date.UTC(2016,1,1),28.7],[Date.UTC(2016,2,1),28.61],[Date.UTC(2016,3,1),29.76],[Date.UTC(2016,4,1),31.14],[Date.UTC(2016,5,1),30.89],[Date.UTC(2016,6,1),31.47],[Date.UTC(2016,7,1),33.8],[Date.UTC(2016,8,1),32.92],[Date.UTC(2016,9,1),33.49],[Date.UTC(2016,10,1),32.84],[Date.UTC(2016,11,1),34.75],[Date.UTC(2017,0,1),35.29],[Date.UTC(2017,1,1),36.12],[Date.UTC(2017,2,1),37.97],[Date.UTC(2017,3,1),38.58],[Date.UTC(2017,4,1),37.46],[Date.UTC(2017,5,1),34.97],[Date.UTC(2017,6,1),35.68],[Date.UTC(2017,7,1),36.07],[Date.UTC(2017,8,1),35.58],[Date.UTC(2017,9,1),35.36],[Date.UTC(2017,10,1),36.89],[Date.UTC(2017,11,1),36],[Date.UTC(2018,0,1),37.37],[Date.UTC(2018,1,1),36.91],[Date.UTC(2018,2,1),36.1],[Date.UTC(2018,3,1),34.31],[Date.UTC(2018,4,1),35.67],[Date.UTC(2018,5,1),37.12],[Date.UTC(2018,6,1),37.72],[Date.UTC(2018,7,1),38.25],[Date.UTC(2018,8,1),37.93],[Date.UTC(2018,9,1),37.37],[Date.UTC(2018,10,1),35.75],[Date.UTC(2018,11,1),35.63],[Date.UTC(2019,0,1),34.16],[Date.UTC(2019,1,1),36.36],[Date.UTC(2019,2,1),38.2],[Date.UTC(2019,3,1),39.08],[Date.UTC(2019,4,1),39.43],[Date.UTC(2019,5,1),39.52],[Date.UTC(2019,6,1),40.89],[Date.UTC(2019,7,1),41.97],[Date.UTC(2019,8,1),40.47],[Date.UTC(2019,9,1),41.85],[Date.UTC(2019,10,1),41.73],[Date.UTC(2019,11,1),42.8]],dividends:[[Date.UTC(2016,3,1),1.36],[Date.UTC(2017,3,1),1.25],[Date.UTC(2018,3,1),1.09],[Date.UTC(2019,3,1),1.33]]}},c=function(e,t){var s=e.prices,r=e.dividends,n=e.entryFee,i=e.totalExpenseRatio,a=t*((100-n)/100),o=0,u=0,l=[];return s.forEach((function(e){var s=new Date(e[0]),n=e[1],c=a/n;o+=t,u+=c;var h=function(e,t){return e&&e.find((function(e){return e[0]===t}))}(r,e[0]);if(h){var d=h[1]*u/n;u+=d,l.push({type:"dividend",date:s,shareAmount:n,shareChange:d,totalShares:u,totalDeposited:o,worth:u*n,growth:u*n/o*100-100})}if(1===s.getDate()&&l.push({type:"shares",date:s,shareAmount:n,shareChange:c,totalShares:u,totalDeposited:o,worth:u*n,growth:u*n/o*100-100}),0===s.getMonth()){var p=u*(i/100);u*=(100-i)/100,l.push({type:"management",date:s,shareAmount:n,shareChange:0-p,totalShares:u,totalDeposited:o,worth:u*n,growth:u*n/o*100-100})}})),l},h=a.a.createElement,d=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};t.default=function(){var e=Object(i.useState)(100),t=e[0],s=e[1],r=Object(i.useState)([]),a=r[0],o=r[1];return h("div",{className:"jsx-1517020032"},h(u.a,null,h("title",{className:"jsx-1517020032"},"Shares Saver Calculator"),h("link",{rel:"icon",href:"/favicon.ico",className:"jsx-1517020032"})),h("div",{className:"jsx-1517020032 container"},h("h1",{className:"jsx-1517020032 title"},"Shares Saver Calculator"),h("div",{className:"jsx-1517020032 detailsContainer"},h("span",{className:"jsx-1517020032 detailsHeadline"},"Fund Details"),h("div",{className:"jsx-1517020032"},h("b",{className:"jsx-1517020032"},"Name: "),h("span",{className:"jsx-1517020032"},l.asx.name)),h("div",{className:"jsx-1517020032"},h("b",{className:"jsx-1517020032"},"Entry Fee: "),h("span",{className:"jsx-1517020032"},l.asx.entryFee,"%")),h("div",{className:"jsx-1517020032"},h("b",{className:"jsx-1517020032"},"Management Fee: "),h("span",{className:"jsx-1517020032"},l.asx.totalExpenseRatio,"% p.a"))),h("div",{className:"jsx-1517020032 calculationSettings"},h("label",{className:"jsx-1517020032"},"Monthly Contribution:"),h("input",{type:"number",value:t,onChange:function(e){return s(e.target.value)},className:"jsx-1517020032"}),h("button",{onClick:function(){return o(c(l.asx,t))},className:"jsx-1517020032"},"Calculate")),a.length>0&&h("table",{className:"jsx-1517020032"},h("tr",{className:"jsx-1517020032"},h("th",{className:"jsx-1517020032"},"Date"),h("th",{className:"jsx-1517020032"},"Type"),h("th",{className:"jsx-1517020032"},"Shares Change"),h("th",{className:"jsx-1517020032"},"Total Shares"),h("th",{className:"jsx-1517020032"},"Total Deposited"),h("th",{className:"jsx-1517020032"},"Worth"),h("th",{className:"jsx-1517020032"},"Growth")),a.map((function(e){return h("tr",{className:"jsx-1517020032 "+(e.type||"")},h("td",{className:"jsx-1517020032"},e.date.toISOString().substr(0,10)),h("td",{className:"jsx-1517020032"},e.type,"shares"===e.type?" @ ".concat(e.shareAmount," euros"):""),h("td",{className:"jsx-1517020032"},e.shareChange>0?"+":"",d(e.shareChange.toFixed(2))),h("td",{className:"jsx-1517020032"},d(e.totalShares.toFixed(2))),h("td",{className:"jsx-1517020032"},d(e.totalDeposited.toFixed(2))," euros"),h("td",{className:"jsx-1517020032"},d(e.worth.toFixed(2))," euros"),h("td",{className:"jsx-1517020032 "+((e.growth<0?"negative":"positive")||"")},e.growth.toFixed(2),"%"))})))),h(n.a,{id:"1517020032"},[".container.jsx-1517020032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:40px;width:900px;color:#333;}",".title.jsx-1517020032{margin:0;width:100%;line-height:1.15;font-size:48px;}",".title.jsx-1517020032,.description.jsx-1517020032{text-align:center;}",".detailsContainer.jsx-1517020032{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".detailsHeadline.jsx-1517020032{font-size:20px;font-weight:bold;padding:15px 0;}",".calculationSettings.jsx-1517020032{padding:15px 0;}",".calculationSettings.jsx-1517020032 label.jsx-1517020032{padding-right:10px;}",".calculationSettings.jsx-1517020032 input.jsx-1517020032{margin-right:10px;}","tr.jsx-1517020032:nth-child(even){background:#CCC;}","tr.jsx-1517020032:nth-child(odd){background:#FFF;}","tr.management.jsx-1517020032{background:red;}","tr.dividend.jsx-1517020032{background:lightblue;}","td.jsx-1517020032{padding:10px;}","td.negative.jsx-1517020032{background:red;font-weight:bold;}","td.positive.jsx-1517020032{background:green;color:white;font-weight:bold;}"]))}},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var r=i(s("9kyW")),n=i(s("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,i=t.optimizeForSpeed,a=void 0!==i&&i,o=t.isBrowser,u=void 0===o?"undefined"!==typeof window:o;this._sheet=r||new n.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),r=s.styleId,n=s.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var n=String(s),i=t+n;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+n)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var n=s+r;return t[n]||(t[n]=r.replace(e,s)),t[n]}},t.getIdAndRules=function(e){var t=this,s=e.children,r=e.dynamic,n=e.id;if(r){var i=this.computeId(n,r);return{styleId:i,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,s)]}}return{styleId:this.computeId(n),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,o=t.optimizeForSpeed,u=void 0===o?r:o,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;a(n(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,i,o,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(o){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];a(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,s){t&&a(n(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return s?i.insertBefore(r,s):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,i),o&&s(t,o),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,s("8oxB"))},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,1]]]);