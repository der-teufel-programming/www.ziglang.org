/*! highlight.js v9.3.0 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function i(e){return/^(no-?highlight|plain|text)$/i.test(e)}function a(e){var n,t,r,a=e.className+" ";if(a+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(a))return N(t[1])?t[1]:"no-highlight";for(a=a.split(/\s+/),n=0,r=a.length;r>n;n++)if(N(a[n])||i(a[n]))return a[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function c(e){var n=[];return function r(e,i){for(var a=e.firstChild;a;a=a.nextSibling)3==a.nodeType?i+=a.nodeValue.length:1==a.nodeType&&(n.push({event:"start",offset:i,node:a}),i=r(a,i),t(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:a}));return i}(e,0),n}function u(e,r,i){function a(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function c(e){l+="</"+t(e)+">"}function u(e){("start"==e.event?o:c)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=a();if(l+=n(i.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=a();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(i.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(i,a){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");c[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.k?u("keyword",i.k):Object.keys(i.k).forEach(function(e){u(e,i.k[e])}),i.k=c}i.lR=t(i.l||/\w+/,!0),a&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=t(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=t(i.e)),i.tE=n(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=t(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var s=[];i.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?i:e)}),i.c=s,i.c.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,a);var l=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(n).filter(Boolean);i.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,i,a){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,n):void 0}function u(e,n){return!i&&r(n.iR,e)}function g(e,n){var t=w.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function d(e,n,t,r){var i=r?"":_.classPrefix,a='<span class="'+i,o=t?"":"</span>";return a+=e+'">',a+n+o}function b(){if(!E.k)return n(L);var e="",t=0;E.lR.lastIndex=0;for(var r=E.lR.exec(L);r;){e+=n(L.substr(t,r.index-t));var i=g(E,r);i?(M+=i[1],e+=d(i[0],n(r[0]))):e+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(L)}return e+n(L.substr(t))}function p(){var e="string"==typeof E.sL;if(e&&!x[E.sL])return n(L);var t=e?l(E.sL,L,!0,k[E.sL]):f(L,E.sL.length?E.sL:void 0);return E.r>0&&(M+=t.r),e&&(k[E.sL]=t.top),d(t.language,t.value,!1,!0)}function h(){C+=void 0!==E.sL?p():b(),L=""}function v(e,n){C+=e.cN?d(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(L+=e,void 0===n)return h(),0;var t=o(n,E);if(t)return t.skip?L+=n:(t.eB&&(L+=n),h(),t.rB||t.eB||(L=n)),v(t,n),t.rB?0:n.length;var r=c(E,n);if(r){var i=E;i.skip?L+=n:(i.rE||i.eE||(L+=n),h(),i.eE&&(L=n));do E.cN&&(C+="</span>"),E.skip||(M+=E.r),E=E.parent;while(E!=r.parent);return r.starts&&v(r.starts,""),i.rE?0:n.length}if(u(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return L+=n,n.length||1}var w=N(e);if(!w)throw new Error('Unknown language: "'+e+'"');s(w);var R,E=a||w,k={},C="";for(R=E;R!=w;R=R.parent)R.cN&&(C=d(R.cN,"",!0)+C);var L="",M=0;try{for(var y,B,I=0;;){if(E.t.lastIndex=I,y=E.t.exec(t),!y)break;B=m(t.substr(I,y.index-I),y[0]),I=y.index+B}for(m(t.substr(I)),R=E;R.parent;R=R.parent)R.cN&&(C+="</span>");return{r:M,value:C,language:e,top:E}}catch(j){if(-1!=j.message.indexOf("Illegal"))return{r:0,value:n(t)};throw j}}function f(e,t){t=t||_.languages||Object.keys(x);var r={r:0,value:n(e)},i=r;return t.filter(N).forEach(function(n){var t=l(n,e,!1);t.language=n,t.r>i.r&&(i=t),t.r>r.r&&(i=r,r=t)}),i.language&&(r.second_best=i),r}function g(e){return _.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,_.tabReplace)})),_.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,n,t){var r=n?R[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}function b(e){var n=a(e);if(!i(n)){var t;_.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?l(n,r,!0):f(r),s=c(t);if(s.length){var b=document.createElementNS("http://www.w3.org/1999/xhtml","div");b.innerHTML=o.value,o.value=u(s,c(b),r)}o.value=g(o.value),e.innerHTML=o.value,e.className=d(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function p(e){_=o(_,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,b)}}function v(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function m(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){R[e]=n})}function w(){return Object.keys(x)}function N(e){return e=(e||"").toLowerCase(),x[e]||x[R[e]]}var _={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},x={},R={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=b,e.configure=p,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=w,e.getLanguage=N,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var i=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return i.c.push(e.PWM),i.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e.registerLanguage("zig",function(e){var n={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},t={cN:"string",v:[e.inherit(e.QSM,{b:'((u8?|U)|L)?"'}),{b:'(u8?|U)?R"',e:'"',c:[e.BE]},{b:"'\\\\?.",e:"'",i:"."}]},r={cN:"number",v:[{b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{b:e.CNR}],r:0},i=e.IR+"\\s*\\(",a={keyword:"const align var extern stdcallcc coldcc nakedcc volatile export pub noalias inline struct packed enum union goto break return test continue unreachable comptime and or asm defer if else switch while for fn use bool f32 f64 void type noreturn error i8 u8 i16 u16 i32 u32 i64 u64 isize usize i8w u8w i16w i32w u32w i64w u64w isizew usizew c_short c_ushort c_int c_uint c_long c_ulong c_longlong c_ulonglong",built_in:"breakpoint returnAddress frameAddress setFloatMode IntType compileError compileLog setDebugSafety setEvalBranchQuota offsetOf memcpy inlineCall setGlobalLinkage setGlobalSection divTrunc divFloor enumTagName intToPtr ptrToInt panic canImplicitCast ptrCast bitCast rem mod memset sizeOf alignOf maxValue minValue memberCount typeOf addWithOverflow subWithOverflow mulWithOverflow shlWithOverflow shlExact shrExact cInclude cDefine cUndef compileVar constEval ctz clz import cImport errorName embedFile cmpxchg fence divExact truncate",literal:"true false null undefined"},o=[n,e.CLCM,e.CBCM,r,t];return{aliases:["zig"],k:a,i:"</",c:o.concat([,{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:a,c:o.concat([{b:/\(/,e:/\)/,k:a,c:o.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+e.IR+"[\\*&\\s]+)+"+i,rB:!0,e:/[{;=]/,eE:!0,k:a,i:/[^\w\s\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:a,r:0,c:[e.CLCM,e.CBCM,t,r,n]},e.CLCM,e.CBCM]}]),exports:{strings:t,k:a}}}),e});
