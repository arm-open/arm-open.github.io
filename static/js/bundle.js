!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="http://0.0.0.0:5000/static",n(n.s=1)}([function(e,n){e.exports=jQuery},function(e,n,t){t(2),t(3),e.exports=t(4)},function(e,n,t){"use strict";function o(e){var n=r();s.offset().top>a()(window).scrollTop()&&"mobile"!=n?a()("body,html").animate({scrollTop:s.offset().top},100,function(){i(e,!0)}):s.offset().top+s.height()<a()(window).scrollTop()+a()(window).height()&&"mobile"!=n?a()("body,html").animate({scrollTop:s.offset().top+s.height()-a()(window).height()},100,function(){i(e,!0)}):i(e,!0)}function i(e,n){if(n){console.log("panel opened"),a.a.getScript("../static/js/stripe-button.js");l.find(".cd-fold-content").load(e+" .cd-fold-content > *",function(e){setTimeout(function(){a()("body").addClass("overflow-hidden"),l.addClass("is-open"),d.addClass("fold-is-open")},100)})}else{var t=r();l.removeClass("is-open"),d.removeClass("fold-is-open"),"mobile"==t||a()(".no-csstransitions").length>0?a()("body").removeClass("overflow-hidden"):d.find(".cd-item").eq(0).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){a()("body").removeClass("overflow-hidden"),d.find(".cd-item").eq(0).off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")})}}function r(){return window.getComputedStyle(document.querySelector(".cd-main"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"")}Object.defineProperty(n,"__esModule",{value:!0});var c=t(0),a=t.n(c),s=a()(".cd-gallery"),l=a()(".cd-folding-panel"),d=a()(".cd-main");s.on("click","a",function(e){e.preventDefault(),o(a()(this).attr("href"))}),l.on("click",".cd-close",function(e){e.preventDefault(),i("",!1)}),s.on("click",function(e){a()(e.target).is(".cd-gallery")&&a()(".fold-is-open").length>0&&i("",!1)})},function(e,n,t){"use strict";function o(){var e=c()(".cd-main-nav-wrapper");i();e.detach(),e.insertBefore(".cd-nav-trigger")}function i(){return"mobile"!=window.getComputedStyle(document.querySelector("header"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"")}Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),c=t.n(r);o(),c()(window).on("resize",function(){window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,300)}),c()(".cd-subnav-trigger").on("click",function(e){e.preventDefault(),c()(".cd-main-nav").toggleClass("moves-out")})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o);i.a.getScript("https://checkout.stripe.com/checkout.js",function(){console.log("stripe checkout script ready"),window.key="SAMPLESTRIPEPUBLISHABLEKEY",i.a.ajax({url:"/credentials/publishable_key",async:!1,success:function(e){window.key=e}});var e=StripeCheckout.configure({key:window.key,image:"https://stripe.com/img/documentation/checkout/marketplace.png",locale:"auto",token:function(e){i()("#stripeToken").val(e.id),i()("#stripeEmail").val(e.email),i()("#stripe-form").submit()}});i()("#stripe-button").on("click",function(n){e.open({name:"ARM New Brunswick",description:"armnewbrunswick.org",amount:100,panelLabel:"Donate",zipCode:!0,allowRememberMe:!1,bitcoin:!0}),n.preventDefault()}),i()(window).on("popstate",function(){console.log("closed"),e.close()})})}]);