let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      
        deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
          .then(function(reg){
         }).catch(function(err) {
        });
     }     
    window.addEventListener( "pageshow", function ( event ) {
      var historyTraversal = event.persisted || 
                             ( typeof window.performance != "undefined" && 
                                  window.performance.navigation.type === 2 );
      if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
      }
    });
    function getCookie(cname) {
        var name = cname + "=",
            ca = document.cookie.split(';'),
            i,
            c,
            ca_length = ca.length;
        for (i = 0; i < ca_length; i += 1) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) !== -1) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(variable, value) {
        document.cookie = variable + '=' + value + ' ;';
    }
        
    window.onload = (function () {
        var currentCookie = getCookie('tglink');
        if (getCookie('lang') == ''){
            setCookie('lang', 'eng');
        }  
        document.getElementsByClassName("getinput")[0].value = currentCookie;
        if (document.getElementsByClassName("getinput")[0].value.charAt(0) !== '@' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 'h' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 't' && !isEmpty(document.getElementsByClassName("getinput")[0].value)) {
            for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                document.getElementsByClassName("notValid_not")[i].style.color = "#ff0033";
            }
        }
        if(document.getElementsByClassName("getinput")[0].value.length >= 3) {
            document.getElementsByClassName("btn_getLink")[0].classList.add("btn_getLinkShow");
        }
        if(document.getElementsByClassName("getinput")[0].value.startsWith("mfc.click/")) {
            document.getElementsByClassName("btn_goTestLink")[0].style.display = "block";
            document.getElementsByClassName("btn_goTestLink")[0].style.opacity = "1";
        }
        if (getCookie('lang') == 'eng') {
            document.getElementsByClassName("input__label-content")[0].innerHTML = "Enter link <span class='notValid_not'>t.me/</span> or <span class='notValid_not'>@username</span>";
            document.getElementsByClassName("btn_getLink")[0].innerHTML = "Get link";
            document.getElementsByClassName("sayHello")[0].innerHTML = "Want to learn more";
            document.getElementsByClassName("btn_goTestLink")[0].innerHTML = "open";
            document.getElementsByClassName("btn_changeLang")[0].innerHTML = "ru";
        }
        if (getCookie('lang') == 'ru') {
            document.getElementsByClassName("input__label-content")[0].innerHTML = "Укажите ссылку <span class='notValid_not'>t.me/</span> или <span class='notValid_not'>@username</span>";
            document.getElementsByClassName("btn_getLink")[0].innerHTML = "Получить ссылку";
            document.getElementsByClassName("sayHello")[0].innerHTML = "";
            document.getElementsByClassName("btn_goTestLink")[0].innerHTML = "открыть";
            document.getElementsByClassName("btn_changeLang")[0].innerHTML = "eng";
        }
    });
    
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
        
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
        
    function cookieMaster() {
        if (document.activeElement === document.getElementsByClassName("getinput")[0]) {
            document.getElementsByClassName("btn_goTestLink")[0].style.display = "none";
        }
        var i;
        if (document.getElementsByClassName("getinput")[0].value.charAt(0) !== '@' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 'h' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 't') {
            for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                document.getElementsByClassName("notValid_not")[i].style.color = "#ff0033";
            }
        }
        else {
            if (document.activeElement === document.getElementsByClassName("getinput")[0]) {
                for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                    document.getElementsByClassName("notValid_not")[i].style.color = "#fff";
                }
            }
            else {
                for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                    document.getElementsByClassName("notValid_not")[i].style.color = "#6a7989";
                }
            }
            if(document.getElementsByClassName("getinput")[0].value.length >= 3) {
                document.getElementsByClassName("btn_getLink")[0].classList.add("btn_getLinkShow");
            }
            else {
                document.getElementsByClassName("btn_getLink")[0].classList.remove("btn_getLinkShow");
            }
        }
        if(isEmpty(document.getElementsByClassName("getinput")[0].value)) {
            if (document.activeElement === document.getElementsByClassName("getinput")[0]) {
                for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                    document.getElementsByClassName("notValid_not")[i].style.color = "#fff";
                }
            }
            else {
                for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                    document.getElementsByClassName("notValid_not")[i].style.color = "#6a7989";
                }
            }
            document.getElementsByClassName("btn_getLink")[0].classList.remove("btn_getLinkShow");
        }
        setCookie('tglink', document.getElementsByClassName("getinput")[0].value);
    }
        
    function colorTextGray() {
        var i;
        if (document.getElementsByClassName("getinput")[0].value.charAt(0) !== '@' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 'h' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 't' && !isEmpty(document.getElementsByClassName("getinput")[0].value)) {
            for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                document.getElementsByClassName("notValid_not")[i].style.color = "#ff0033";
            }
        }
        else {
            for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                document.getElementsByClassName("notValid_not")[i].style.color = "#6a7989";
            }
        }
    }
        
    function colorTextWhite() {
        var i;
        if (document.getElementsByClassName("getinput")[0].value.charAt(0) !== '@' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 'h' && document.getElementsByClassName("getinput")[0].value.charAt(0) !== 't' && !isEmpty(document.getElementsByClassName("getinput")[0].value)) {
            for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                document.getElementsByClassName("notValid_not")[i].style.color = "#ff0033";
            }
        }
        else {
            for (i = 0; i < document.getElementsByClassName("notValid_not").length; i++) {
                document.getElementsByClassName("notValid_not")[i].style.color = "#fff";
            }
        }
    }
     
    function enterListen(e) {
        if (e.keyCode == 13) {
            createLink();
            return false;
        }
    }
        
    function createLink() {
        var currentLink = document.getElementsByClassName("getinput")[0].value;
        if (document.getElementsByClassName("getinput")[0].value.charAt(0) === '@') {
            document.getElementsByClassName("getinput")[0].value = 'mfc.click/' + currentLink.slice(1);
            var clipboard = new ClipboardJS('.btn_getLink', {
                target: function() {
                    return document.getElementsByClassName("getinput")[0];
                }
            });
            setTimeout(function(){document.getElementsByClassName("getinput")[0].blur();}, 10);
            setCookie('tglink', document.getElementsByClassName("getinput")[0].value);
        }
        if (currentLink.startsWith("http")) {
            var l = new URL(currentLink).pathname;
            document.getElementsByClassName("getinput")[0].value = 'mfc.click' + l;
            var clipboard = new ClipboardJS('.btn_getLink', {
                target: function() {
                    return document.getElementsByClassName("getinput")[0];
                }
            });
            setTimeout(function(){document.getElementsByClassName("getinput")[0].blur();}, 10);
            setCookie('tglink', document.getElementsByClassName("getinput")[0].value);
        }
        if (currentLink.startsWith("t.me/")) {
            var l = 'https://' + currentLink;
            l = new URL(l).pathname
            document.getElementsByClassName("getinput")[0].value = 'mfc.click' + l;
            var clipboard = new ClipboardJS('.btn_getLink', {
                target: function() {
                    return document.getElementsByClassName("getinput")[0];
                }
            });
            setTimeout(function(){document.getElementsByClassName("getinput")[0].blur();}, 10);
            setCookie('tglink', document.getElementsByClassName("getinput")[0].value);
        }
        if (currentLink.startsWith("mfc.click/")) {
            var clipboard = new ClipboardJS('.btn_getLink', {
                target: function() {
                    return document.getElementsByClassName("getinput")[0];
                }
            });
            setTimeout(function(){document.getElementsByClassName("getinput")[0].blur();}, 10);
            setCookie('tglink', document.getElementsByClassName("getinput")[0].value);
        }
        if (currentLink.startsWith("https://t.me/joinchat") || currentLink.startsWith("t.me/joinchat")) {
            if(currentLink.startsWith("https://t.me/joinchat")){
               var l = currentLink;
            }
            else {
               var l = 'https://' + currentLink;
            }
            l = new URL(l).pathname
            document.getElementsByClassName("getinput")[0].value = 'mfc.click/joinchat/' + l.split('/')[2];
            var clipboard = new ClipboardJS('.btn_getLink', {
                target: function() {
                    return document.getElementsByClassName("getinput")[0];
                }
            });
            setTimeout(function(){document.getElementsByClassName("getinput")[0].blur();}, 10);
            setCookie('tglink', document.getElementsByClassName("getinput")[0].value);
        }
        clipboard.on('success', function() {
            if (getCookie('lang') == 'eng') {
                document.getElementsByClassName("input__label-content")[0].innerHTML = "Link copied to clipboard";
            }
            else {
                document.getElementsByClassName("input__label-content")[0].innerHTML = "Ссылка скопирована в буфер обмена";
            }
            document.getElementsByClassName("input__label-content")[0].style.color = "#4BB543";
            if (getCookie('lang') == 'eng') {
                setTimeout(function(){document.getElementsByClassName("input__label-content")[0].innerHTML = "Enter link <span class='notValid_not'>t.me/</span> or <span class='notValid_not'>@username</span>";}, 2500);
            }
            else {
                setTimeout(function(){document.getElementsByClassName("input__label-content")[0].innerHTML = "Укажите ссылку <span class='notValid_not'>t.me/</span> или <span class='notValid_not'>@username</span>";}, 2500);
            }
            setTimeout(function(){document.getElementsByClassName("input__label-content")[0].style.color = "#6a7989";}, 2500);
            document.getElementsByClassName("btn_goTestLink")[0].style.display = "block";
            setTimeout(function(){document.getElementsByClassName("btn_goTestLink")[0].style.opacity = "1";}, 10);
            //document.getElementById("frameTg").src = 'https://t.me/' + document.getElementsByClassName("getinput")[0].value.slice(7) + '/1?embed=1';
        });
        clipboard.on('error', function() {
            document.getElementsByClassName("input__label-content")[0].innerHTML = "Ссылка не скопирована, скопируйте вручную";
            document.getElementsByClassName("input__label-content")[0].style.color = "#ff0033";
            setTimeout(function(){document.getElementsByClassName("input__label-content")[0].innerHTML = "Укажите ссылку <span class='notValid_not'>t.me/</span> или <span class='notValid_not'>@username</span>";}, 2500);
            setTimeout(function(){document.getElementsByClassName("input__label-content")[0].style.color = "#6a7989";}, 2500);
        });
    }
        
    function containerSlideUp() {
        document.getElementsByClassName("getinput")[0].blur();
        document.getElementsByClassName("container")[0].classList.add("transitionContainer");
        document.getElementsByClassName("sayHello")[0].classList.add("transitionSayHello");
    }
        
    function containerSlideDown() {
        document.getElementsByClassName("container")[0].classList.remove("transitionContainer");
        document.getElementsByClassName("sayHello")[0].classList.remove("transitionSayHello");
    }
        
    function goAbout() {
        document.getElementsByClassName("container")[0].style.marginTop = "-200%";
        document.getElementsByClassName("sayHello")[0].style.bottom = "-20 !important";
        document.getElementsByClassName("aboutLink")[0].style.bottom = "110%";
        setTimeout(function(){window.location.assign("http://mfc.click/about.php");}, 450);
    }
        
    function goTestLink() {
        window.location.assign(document.getElementsByClassName("getinput")[0].value.slice(10));
        document.getElementsByClassName("aboutLink")[0].style.display = "none";
    }
        
    function changeLang () {
        if (getCookie('lang') == 'eng') {
            setCookie('lang', 'ru');
            window.location.reload();
        }
        else {
            setCookie('lang', 'eng');
            window.location.reload();
        }
    }
    
(function(l, projectPages) {

  var repo = projectPages ? '/' + l.pathname.split('/')[1] : ''

   /* redirect all 404 trafic to index.html */
   function redirect() {
     l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + repo + '/?' +
              (l.pathname ? 'p=' + l.pathname.replace(/&/g, '~and~').replace(repo, '') : '') +
              (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
              (l.hash))
     window.location = "tg://resolve?domain=" + l.pathname.slice(1);
     setTimeout(function(){ window.location.href = "/"; }, 200);
   }
  
  
   /* resolve 404 redirects into internal routes */
   function resolve() {
      if (l.search) {
        var q = {}
        l.search.slice(1).split('&').forEach(function(v) {
          var a = v.split('=')
          q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&')
        })
        if (q.p !== undefined) {
          window.history.replaceState(null, null,
            repo + (q.p || '') +
            (q.q ? ('?' + q.q) : '') +
            l.hash
          )
        }
     }
   }

  /* if current document is 404 page page, redirect to index.html otherwise resolve */
  document.title === 'MFGoTo' ? redirect() : resolve()


}(window.location, window.projectPages || false ))

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});