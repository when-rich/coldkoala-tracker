(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{271:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("4f467bcc",content,!0,{sourceMap:!1})},317:function(t,e,r){"use strict";r(271)},318:function(t,e,r){var n=r(59)((function(i){return i[1]}));n.push([t.i,".flex-wrapper[data-v-30d9994c]{\n  display:flex;\n  flex-flow:row nowrap\n}\n.circular-chart[data-v-30d9994c]{\n  display:block;\n  width:128px;\n  height:128px\n}\n.circle-bg[data-v-30d9994c]{\n  fill:none;\n  stroke:#f3f3f3;\n  stroke-width:3.8\n}\n.circle[data-v-30d9994c]{\n  fill:none;\n  stroke-width:2.8;\n  stroke-linecap:round;\n  -webkit-animation:progress-data-v-30d9994c 1s ease-out forwards;\n          animation:progress-data-v-30d9994c 1s ease-out forwards\n}\n@-webkit-keyframes progress-data-v-30d9994c{\n0%{\n    stroke-dasharray:0 100\n}\n}\n@keyframes progress-data-v-30d9994c{\n0%{\n    stroke-dasharray:0 100\n}\n}\n.circular-chart.blue .circle[data-v-30d9994c]{\n  stroke:#0051ff\n}\n.percentage[data-v-30d9994c]{\n  fill:#666;\n  font-family:sans-serif;\n  font-size:.5em;\n  text-anchor:middle\n}",""]),n.locals={},t.exports=n},407:function(t,e,r){"use strict";r.r(e);r(314);var n={props:{percent:{type:Number,required:!0}}},c=(r(317),r(43)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-wrapper"},[r("div",{staticClass:"single-chart relative h-32 w-32"},[r("svg",{staticClass:"circular-chart blue",attrs:{viewBox:"0 0 36 36"}},[r("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831"}}),t._v(" "),r("path",{staticClass:"circle",attrs:{"stroke-dasharray":t.percent+", 100",d:"M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831"}})]),t._v(" "),r("div",{staticClass:"absolute inset-0 flex items-center justify-center"},[0!==t.percent?r("div",{staticClass:"text-md text-blue-700 z-30 font-extrabold"},[r("div",[t._v("Burned")]),t._v(" "),r("div",{staticClass:"text-sm"},[t._v(t._s(t.percent.toFixed(1))+"%")])]):r("svg",{staticClass:"animate-spin ml-3 mr-3 h-5 w-5 text-blue-700",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])])])])}),[],!1,null,"30d9994c",null);e.default=component.exports},423:function(t,e){},432:function(t,e){},450:function(t,e){},452:function(t,e){},468:function(t,e){},471:function(t,e){},524:function(t,e){},526:function(t,e){},558:function(t,e){},560:function(t,e){},561:function(t,e){},566:function(t,e){},568:function(t,e){},574:function(t,e){},576:function(t,e){},589:function(t,e){},601:function(t,e){},604:function(t,e){},609:function(t,e){},620:function(t,e){},623:function(t,e){},680:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(36),r(25),r(35),r(64),r(411)),l=r.n(c),o={head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},data:function(){return{menu:!1,title:"ColdKoala Tracker",description:"Track your ColdKoala rewards.",image:"https://when-rich.github.io/coldkoala-tracker/icon.png",url:"https://api.bscscan.com/api",rpcUrl:"https://bsc-dataseed1.binance.org:443",priceUrl:"https://bsc.api.0x.org/swap/v1/quote",holdersUrl:"https://cpdir8453.com/holders.php",walletAddress:null,tokenContract:"0x1bfe24e7fb1d3b2dffd9c1d49372b07bc6fda829",burnAddress:"0x000000000000000000000000000000000000dead",secondBurnAddress:"0x0000000000000000000000000000000000000001",walletInput:"",currentBalance:0,rewards:0,burnedTokens:0,tokenPrice:0,currentHolders:0,interval:null,timeout:null,web3:null,message:null}},created:function(){this.init()},watch:{message:function(t){var e=this;t&&setTimeout((function(){e.message=null}),3e3)}},methods:{init:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSavedWallet();case 2:if(t.walletAddress=e.sent,t.walletAddress){e.next=5;break}return e.abrupt("return",null);case 5:return t.web3=new l.a(t.rpcUrl),t.interval&&clearInterval(t.interval),e.next=9,t.calculations();case 9:t.interval=setInterval(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.calculations();case 2:case"end":return e.stop()}}),e)}))),2e4);case 10:case"end":return e.stop()}}),e)})))()},calculations:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request"),e.prev=1,e.next=4,t.getFirstBalance();case 4:return r=e.sent,e.next=7,t.getLastTransaction();case 7:return n=e.sent,e.next=10,t.getCurrentBalance();case 10:return c=e.sent,e.next=13,t.getPrice();case 13:return t.tokenPrice=e.sent,e.next=16,t.getHolders();case 16:if(t.currentHolders=e.sent,n&&c){e.next=19;break}return e.abrupt("return",null);case 19:t.currentBalance=c,r&&"value"in r&&r.value&&"lastTransaction"in r&&r.lastTransaction&&r.lastTransaction===n?t.rewards=c-r.value:(t.rewards=0,t.setFirstBalance({value:c,lastTransaction:n})),e.next=28;break;case 23:return e.prev=23,e.t0=e.catch(1),console.error(e.t0),e.next=28,t.removeWallet();case 28:case"end":return e.stop()}}),e,null,[[1,23]])})))()},isAddress:function(address){return l.a.utils.isAddress(address)},getLastTransaction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get(t.url,{params:{module:"account",action:"tokentx",contractaddress:t.tokenContract,address:t.walletAddress,startblock:1,endblock:99999999,sort:"desc"}});case 3:if(r=e.sent,t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBurned();case 2:case"end":return e.stop()}}),e)}))),1e4),r.result.length){e.next=10;break}return e.next=9,t.removeWallet();case 9:t.message={type:"error",text:"No data found."};case 10:return e.abrupt("return",new Date(1e3*r.result[0].timeStamp).getTime());case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},getCurrentBalance:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"}],n=new t.web3.eth.Contract(r,t.tokenContract),e.next=5,n.methods.balanceOf(t.walletAddress).call();case 5:return c=e.sent,e.next=8,n.methods.decimals().call();case 8:return l=e.sent,e.abrupt("return",c/Math.pow(10,l));case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},getBurned:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"}],n=new t.web3.eth.Contract(r,t.tokenContract),e.next=5,n.methods.balanceOf(t.burnAddress).call();case 5:return c=e.sent,e.next=8,n.methods.balanceOf(t.secondBurnAddress).call();case 8:return l=e.sent,e.next=11,n.methods.decimals().call();case 11:o=e.sent,t.burnedTokens=c/Math.pow(10,o),t.burnedTokens+=l/Math.pow(10,o),e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()},setFirstBalance:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.localStorage.setItem("ck_data",JSON.stringify(t));case 2:case"end":return e.stop()}}),e)})))()},getFirstBalance:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.localStorage.getItem("ck_data");case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return",null);case 5:return t.abrupt("return",JSON.parse(e));case 6:case"end":return t.stop()}}),t)})))()},saveWalletLocally:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.localStorage.setItem("ck_wallet",t.walletInput);case 2:return e.next=4,t.init();case 4:case"end":return e.stop()}}),e)})))()},getSavedWallet:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.localStorage.getItem("ck_wallet");case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return",null);case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))()},getPrice:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get(t.priceUrl,{params:{buyToken:"BUSD",sellToken:t.tokenContract,sellAmount:1e18}});case 3:if(!("price"in(r=e.sent))){e.next=6;break}return e.abrupt("return",r.price);case 6:return e.abrupt("return",0);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getHolders:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get(t.holdersUrl);case 3:if(!("holders"in(r=e.sent))){e.next=6;break}return e.abrupt("return",r.holders);case 6:return e.abrupt("return",0);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},linkWallet:function(){if(!this.isAddress(this.walletInput))return this.message={type:"error",text:"Your address is invalid."},null;this.message={type:"success",text:"Success"},this.saveWalletLocally()},removeWallet:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopIntervals(),e.next=3,window.localStorage.removeItem("ck_wallet");case 3:return e.next=5,window.localStorage.removeItem("ck_data");case 5:t.walletInput="",t.walletAddress=null,t.currentBalance=0,t.rewards=0,t.burnedTokens=0;case 10:case"end":return e.stop()}}),e)})))()},stopIntervals:function(){clearInterval(this.interval),clearTimeout(this.timeout)}},beforeDestroy:function(){this.stopIntervals()},filters:{currency:function(t){return t.toLocaleString()}}},d=r(43),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"grid place-items-center h-screen bg-blue-800"},[r("div",{staticClass:"\n      relative\n      flex-row\n      py-10\n      px-5\n      bg-white\n      sm:rounded-md\n      shadow-lg\n      sm:max-w-2xl\n      h-screen\n      w-full\n      sm:h-auto\n      overflow-y-auto overflow-x-hidden\n    "},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.menu,expression:"menu"}],staticClass:"absolute inset-0 bg-blue-900 opacity-50 z-40",on:{click:function(e){t.menu=!1}}}),t._v(" "),r("div",{staticClass:"\n        transform\n        transition\n        ease-in-out\n        bg-white\n        w-72\n        absolute\n        inset-y-0\n        right-0\n        z-40\n        rounded-2xl\n        my-3\n        shadow-lg\n        overflow-y-auto\n      ",class:{"translate-x-0 mr-3":t.menu,"translate-x-full -mr-3":!t.menu}},[r("div",{staticClass:"text-2xl text-gray-600 font-bold p-3"},[t._v("Links")]),t._v(" "),r("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},[r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://coldkoala.com",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}})]),t._v(" "),t._m(0)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1bfe24e7fb1d3b2dffd9c1d49372b07bc6fda829",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22 22 17.5 22 12M15 6.5L18.5 10L15 13.5V11H11V9H15V6.5M9 17.5L5.5 14L9 10.5V13H13V15H9V17.5Z"}})]),t._v(" "),t._m(1)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://poocoin.app/tokens/0x1bfe24e7fb1d3b2dffd9c1d49372b07bc6fda829",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64"}})]),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"text-2xl text-gray-600 font-bold p-3"},[t._v("Social")]),t._v(" "),r("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},[r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://twitter.com/coldkoalacoin",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}})]),t._v(" "),t._m(3)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"http://discord.gg/J7spdHkP8b",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{fill:"currentColor",d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"}})]),t._v(" "),t._m(4)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://www.reddit.com/r/ColdKoala/",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{fill:"currentColor",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"}})]),t._v(" "),t._m(5)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://t.me/joinchat/A23HQUq-JZZjMDFk",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"}})]),t._v(" "),t._m(6)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"http://facebook.com/coldkoalacoin",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{fill:"currentColor",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"}})]),t._v(" "),t._m(7)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://instagram.com/coldkoalacoin",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{fill:"currentColor",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t._v("\n            >\n            "),r("path",{attrs:{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}})]),t._v(" "),t._m(8)]),t._v(" "),r("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{href:"https://www.twitch.tv/coldkoala_official",target:"_blank"}},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{fill:"currentColor",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"}})]),t._v(" "),t._m(9)])])]),t._v(" "),r("div",{staticClass:"p-3 mb-10 flex justify-between"},[r("div",{staticClass:"flex items-center space-x-2"},[r("img",{staticClass:"h-12",attrs:{src:"/coldkoala-tracker/icon.png",alt:"ColdKoala"}}),t._v(" "),r("div",[r("div",{staticClass:"text-3xl mt-3 text-gray-600 font-bold"},[t._v("Hi Koala")]),t._v(" "),t.walletAddress?r("div",{staticClass:"text-sm text-gray-600"},[t._v("\n            Have a great day!\n          ")]):r("div",{staticClass:"text-sm text-gray-600"},[t._v("\n            Please paste your public wallet address\n          ")])])]),t._v(" "),r("div",{staticClass:"flex flex-col items-end"},[r("button",{staticClass:"\n            w-10\n            h-10\n            rounded-2xl\n            text-blue-800\n            flex\n            justify-center\n            items-center\n          ",on:{click:function(e){t.menu=!0}}},[r("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"}})])]),t._v(" "),t.walletAddress?r("div",{staticClass:"flex justify-end mb-5"},[r("button",{staticClass:"\n              focus:outline-none\n              transition\n              text-blue-800\n              px-2\n              py-1\n              justify-center\n              items-center\n              rounded-md\n              mt-5\n              text-xs\n              flex\n              relative\n            ",on:{click:t.removeWallet}},[r("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"}})]),t._v(" "),r("div",{staticClass:"bg-white rounded-full w-3 h-3 absolute left-2 top-1"},[r("svg",{staticClass:"h-3 w-3 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}})])])])]):t._e()])]),t._v(" "),t.walletAddress?[r("div",{staticClass:"grid grid-cols-3 p-4 bg-blue-700 text-white rounded-2xl"},[r("div",{staticClass:"col-span-1 font-bold opacity-75 text-xl text-right"},[t._v("\n          Your Balance:\n        ")]),t._v(" "),r("div",{staticClass:"\n            col-span-2\n            text-lg\n            font-bold\n            flex\n            items-center\n            justify-center\n          "},[0===t.tokenPrice||0===t.currentBalance?r("svg",{staticClass:"animate-spin h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):r("span",[t._v("USD $"+t._s(t._f("currency")(t.currentBalance*t.tokenPrice)))])]),t._v(" "),0!==t.tokenPrice&&0!==t.currentBalance?r("div",{staticClass:"col-span-3 mt-3 text-center text-sm"},[t._v("\n          CK "+t._s(t._f("currency")(t.currentBalance))+"\n        ")]):t._e()]),t._v(" "),r("div",{staticClass:"grid grid-cols-3 p-4 bg-yellow-500 text-white rounded-2xl mt-3"},[r("div",{staticClass:"col-span-3 text-xs text-center"},[t._v("\n          Rewards since your last buy or sell\n        ")]),t._v(" "),r("div",{staticClass:"\n            col-span-3\n            text-lg\n            font-bold\n            flex\n            items-center\n            justify-center\n          "},[0===t.rewards||0===t.tokenPrice?r("svg",{staticClass:"animate-spin h-5 w-5 block",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._e()]),t._v(" "),0!==t.rewards&&0!==t.tokenPrice?r("div",{staticClass:"col-span-3 text-center text-sm font-bold"},[r("div",[t._v("CK Rewards "+t._s(t._f("currency")(t.rewards)))]),t._v(" "),r("div",[t._v("USD $"+t._s(t._f("currency")(t.rewards*t.tokenPrice)))])]):t._e()]),t._v(" "),r("div",{staticClass:"grid grid-cols-2 mt-6"},[r("div",{staticClass:"col-span-1 flex flex-col justify-center"},[r("div",{staticClass:"flex space-x-2 font-bold text-gray-700"},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"}})]),t._v(" "),r("span",[t._v("Holders:")]),t._v(" "),t.currentHolders<1?r("svg",{staticClass:"animate-spin h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):r("span",[t._v(t._s(t._f("currency")(t.currentHolders)))])]),t._v(" "),r("div",{staticClass:"flex space-x-2 font-bold text-gray-700"},[r("svg",{staticClass:"w-6 h-6 text-blue-800",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"}})]),t._v(" "),r("span",[t._v("Price:")]),t._v(" "),0===t.tokenPrice?r("svg",{staticClass:"animate-spin h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._e()]),t._v(" "),0!==t.tokenPrice?r("div",{staticClass:"font-bold text-gray-700 ml-8 text-sm"},[t._v("\n            "+t._s(t._f("currency")(t.tokenPrice))+"\n          ")]):t._e()]),t._v(" "),r("div",{staticClass:"col-span-1 flex items-center"},[r("percent",{staticClass:"ml-auto",attrs:{percent:t.burnedTokens/1e23*100}})],1)])]:[r("div",[r("label",{staticClass:"block text-sm font-medium text-white"},[t._v("Paste your wallet address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.walletInput,expression:"walletInput"}],staticClass:"\n            mt-1\n            block\n            w-full\n            py-2\n            px-3\n            border border-gray-300\n            bg-white\n            rounded-md\n            shadow-sm\n            focus:outline-none\n            focus:ring-indigo-500\n            focus:border-indigo-500\n            sm:text-sm\n          ",attrs:{type:"text",placeholder:"0x00000000"},domProps:{value:t.walletInput},on:{input:function(e){e.target.composing||(t.walletInput=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"\n          focus:outline-none\n          transition\n          text-white\n          uppercase\n          px-8\n          py-3\n          w-full\n          flex\n          justify-center\n          items-center\n          rounded-md\n          mt-5\n          bg-blue-700\n          hover:bg-blue-900\n        ",on:{click:t.linkWallet}},[t._v("\n        Track your rewards\n      ")])],t._v(" "),t._m(10)],2),t._v(" "),r("div",{staticClass:"fixed bottom-0 right-0 m-6"},[r("Transition",{attrs:{name:"slide-fade"}},[t.message?r("div",{staticClass:"rounded-lg shadow-md p-6 pr-10",class:{"bg-red-200 text-red-900":"error"===t.message.type,"bg-green-200 text-green-900":"success"===t.message.type},staticStyle:{"min-width":"240px"}},[r("div",{staticClass:"flex items-center text-center"},[t._v("\n          "+t._s(t.message.text)+"\n        ")])]):t._e()])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Coldkoala.com")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("Official website.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("PancakeSwap")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("Buy Cold Koala tokens")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Live Charts")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("Poocoin live charts")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Twitter")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Discord")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Reddit")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Telegram")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Facebook")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Instagram")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("Twitch")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-center"},[r("div",{staticClass:"transform scale-75"},[r("script",{attrs:{defer:"",src:"https://www.livecoinwatch.com/static/lcw-widget.js"}}),t._v(" "),r("div",{staticClass:"livecoinwatch-widget-1",attrs:{"lcw-coin":"COLDKOALA","lcw-base":"USD","lcw-secondary":"BTC","lcw-period":"d","lcw-color-tx":"#4b5563","lcw-color-pr":"#1d4ed8","lcw-color-bg":"#ffffff","lcw-border-w":"0"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Percent:r(407).default})}}]);