(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79e4d6aa"],{"1dde":function(t,n,o){var e=o("d039"),r=o("b622"),i=o("2d00"),a=r("species");t.exports=function(t){return i>=51||!e((function(){var n=[],o=n.constructor={};return o[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,o){var e=o("861d"),r=o("e8b5"),i=o("b622"),a=i("species");t.exports=function(t,n){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?e(o)&&(o=o[a],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===n?0:n)}},7089:function(t,n,o){},8418:function(t,n,o){"use strict";var e=o("c04e"),r=o("9bf2"),i=o("5c6c");t.exports=function(t,n,o){var a=e(n);a in t?r.f(t,a,i(0,o)):t[a]=o}},"99af":function(t,n,o){"use strict";var e=o("23e7"),r=o("d039"),i=o("e8b5"),a=o("861d"),c=o("7b0b"),s=o("50c4"),u=o("8418"),l=o("65f0"),p=o("1dde"),d=o("b622"),f=o("2d00"),v=d("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",b=f>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=p("concat"),h=function(t){if(!a(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)},y=!b||!w;e({target:"Array",proto:!0,forced:y},{concat:function(t){var n,o,e,r,i,a=c(this),p=l(a,0),d=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?a:arguments[n],h(i)){if(r=s(i.length),d+r>g)throw TypeError(m);for(o=0;o<r;o++,d++)o in i&&u(p,d,i[o])}else{if(d>=g)throw TypeError(m);u(p,d++,i)}return p.length=d,p}})},a55b:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"login"},[o("div",{staticClass:"login-box"},[o("h1",{staticClass:"login-title"},[t._v("ログイン")]),o("form",{attrs:{action:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputID,expression:"inputID"}],staticClass:"input",attrs:{type:"text",placeholder:"IDを入力してください"},domProps:{value:t.inputID},on:{input:function(n){n.target.composing||(t.inputID=n.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPW,expression:"inputPW"}],staticClass:"input",attrs:{type:"password",placeholder:"パスワードを入力してください"},domProps:{value:t.inputPW},on:{input:function(n){n.target.composing||(t.inputPW=n.target.value)}}}),o("br"),o("input",{staticClass:"login-button",attrs:{type:"button",value:"ログインする"},on:{click:function(n){return n.preventDefault(),t.doLogin(t.inputID,t.inputPW)}}})])])])},r=[],i=(o("99af"),o("d3b7"),{data:function(){return{inputID:"",inputPW:""}},methods:{doLogin:function(t,n){var o=this;fetch("https://91ss8vtva7.execute-api.ap-northeast-1.amazonaws.com/mytubeapi/mytube/get?id=".concat(t,"&pass=").concat(n)).then((function(e){if(e.ok)return e.json().then((function(e){console.log(t),console.log(n),console.log(e),console.log(e["message"]),"id or password is incorrect"===e["message"]?(window.alert("ユーザーIDかパスワードが間違っています"),console.log(o.$store.state.isLogin)):e["id"]!=o.inputID?(console.log(e["id"]),window.alert("ユーザーIDかパスワードが間違っています")):(o.login(),o.$store.state.id=t,window.alert("ログインしました"))}));console.error("エラーレスポンス")})).catch((function(){window.alert("IDかパスワードが間違っています")}))},login:function(){this.$store.commit("login")}}}),a=i,c=(o("d142"),o("2877")),s=Object(c["a"])(a,e,r,!1,null,"18247b1c",null);n["default"]=s.exports},d142:function(t,n,o){"use strict";var e=o("7089"),r=o.n(e);r.a},e8b5:function(t,n,o){var e=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}}}]);
//# sourceMappingURL=chunk-79e4d6aa.964043df.js.map