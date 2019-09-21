(window["webpackJsonpneon-clock-with-styled-components"]=window["webpackJsonpneon-clock-with-styled-components"]||[]).push([[0],{13:function(n,t,e){n.exports=e(23)},23:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(8),a=e.n(i),c=e(1),l=e(3);function s(){var n=new Date(Date.now());return{hours:n.getHours(),minutes:n.getMinutes(),seconds:n.getSeconds(),display:n.toLocaleString()}}var u=function(){var n=Object(r.useState)(s()),t=Object(l.a)(n,2),e=t[0],o=t[1],i=Object(r.useState)(null),a=Object(l.a)(i,2),c=a[0],u=a[1];return Object(r.useEffect)((function(){return!c&&function(){var n=Date.now(),t=1e3*(Math.floor(n/1e3)+1)-n;window.setTimeout((function(){var n=window.setInterval((function(){o(s())}),1e3);u(n)}),t)}(),function(){return window.clearInterval(c)}}),[c]),e},p=e(2),x={bgColor:"#2a2e4a",muteColor:"#008000",shadowColor:"green",glowColor:"#90ee90"};function h(){var n=Object(c.a)(['\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background:',"\n}"]);return h=function(){return n},n}var d=Object(p.a)(h(),x.bgColor),f=["IT IS","ABOUT","NEARLY","TEN","QUARTER","TWENTY","FIVE","HALF","PAST","TO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","NOON","MIDNIGHT","O' CLOCK","IN THE","MORNING","AFTERNOON","EVENING"];function b(){var n=Object(c.a)(["\n  width: 10px;\n  height: 50px;\n  top: 100px;\n  left: 145px;\n  transform-origin: 6px 52px;\n  box-shadow: 0 0 3px black;\n"]);return b=function(){return n},n}function m(){var n=Object(c.a)(["\n  width: 4px;\n  height: 80px;\n  top: 70px;\n  left: 148px;\n  transform-origin: 2px 80px;\n  box-shadow: 0 0 3px black;\n"]);return m=function(){return n},n}function g(){var n=Object(c.a)(["\n  width: 2px;\n  height: 150px;\n  position: absolute;\n  top: 30px;\n  left: 149px;\n  background-color: ",";\n  transform-origin: 1px 120px;\n  border-radius: 5px 5px 0 0;\n  box-shadow: 0 0 3px black;\n"]);return g=function(){return n},n}function w(){var n=Object(c.a)(["\n  position: absolute;\n  display: inline-block;\n  top: 0px;\n  left: 91px;\n  width: 0px;\n  outline: 1px "," solid;\n  height: 8px;\n  background: green;\n  transform-origin: 0px 92px;\n"]);return w=function(){return n},n}function v(){var n=Object(c.a)(["\n  position: absolute;\n  display: inline-block;\n  top: 1px;\n  left: 100px;\n  width: 0px;\n  outline: 1px "," solid;\n  height: 8px;\n  background: green;\n  transform-origin: 0px 100px;\n"]);return v=function(){return n},n}function E(){var n=Object(c.a)(["\n  position: absolute;\n  display: inline-block;\n  top: 10px;\n  left: 125px;\n  width: 50px;\n  height: 30px;\n  font-size: 30px;\n  text-align: center;\n  transform-origin: 25px 140px;\n  color: ",";\n"]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  width: 20px;\n  height: 20px;\n  top: 140px;\n  left: 139px;\n  z-index: 10;\n  background: ",";\n  box-shadow: 0 0 10px ",";\n"]);return O=function(){return n},n}function y(){var n=Object(c.a)(["\n  width: 182px;\n  height: 182px;\n  top: 59px;\n  left: 59px;\n"]);return y=function(){return n},n}function k(){var n=Object(c.a)(["\n  border-radius: 50%;\n  border: 1px solid ",";\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  left: 50px;\n  top: 50px;\n  box-shadow: ",";\n"]);return k=function(){return n},n}function j(){var n=Object(c.a)(["\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  border: 6px "," double;\n  position: relative;\n  box-shadow: ",';\n  margin-bottom: 40px;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 320px;\n    height: 320px;\n    border-radius: 50%;\n    top: -14px;\n    left: -14px;\n    border: 4px dotted ',";\n  }\n"]);return j=function(){return n},n}var C=x,I=C.bgColor,N=C.muteColor,S=C.glowColor,T="0 0 20px ".concat(S,"40, inset 0 0 20px ").concat(S,"40"),M=p.b.div(j(),S,T,N),V=p.b.div(k(),S,T),A=Object(p.b)(V)(y()),z=Object(p.b)(V)(O(),S,I),F=p.b.span(E(),S),H=p.b.span(v(),S),R=p.b.span(w(),S),B=p.b.div(g(),S),L=Object(p.b)(B)(m()),U=Object(p.b)(B)(b()),D=function(n){var t=n.time,e=6*t.seconds,r=6*t.minutes+.1*t.seconds,i=t.hours%12*30+.5*t.minutes;return o.a.createElement(M,null,o.a.createElement("div",null,["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"].map((function(n,t){return o.a.createElement(F,{key:t,style:{transform:"rotate(".concat(30*t,"deg)")}},n)}))),o.a.createElement(V,null,Array(60).fill(1).map((function(n,t){return o.a.createElement(H,{key:t,style:{transform:"rotate(".concat(6*t,"deg)")}})}))),o.a.createElement(A,null,Array(12).fill(1).map((function(n,t){return o.a.createElement(R,{style:{transform:"rotate(".concat(30*t,"deg)")},key:t})}))),o.a.createElement(B,{style:{transform:"rotate(".concat(e,"deg)")}}),o.a.createElement(L,{style:{transform:"rotate(".concat(r,"deg)")}}),o.a.createElement(U,{style:{transform:"rotate(".concat(i,"deg)")}}),o.a.createElement(z,null))};function G(){var n=Object(c.a)(["\n  display: inline-block;\n  margin-left: 24px;\n  color: ",";\n  opacity: 0.6;\n  &.glow {\n    color: ",";\n    text-shadow: ",";\n    opacity: 1;\n  }\n"]);return G=function(){return n},n}function X(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  word-spacing: 6px;\n  max-width: 500px;\n  line-height: 2;\n"]);return X=function(){return n},n}var W=x,P=W.muteColor,J=W.glowColor,Y="0 0 1px ".concat(J),K=p.b.div(X()),Q=p.b.span(G(),P,J,Y),$=function(n){var t=n.phrases,e=n.highligts;return o.a.createElement(K,null,t.map((function(n,t){return o.a.createElement(Q,{key:t,className:e[t]?"glow":""},n)})))};function _(){var n=Object(c.a)(["\n  width: 50px;\n  height: 26px;\n  border: 2px solid ","aa;\n  border-radius: 15px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  color: ",";\n  box-shadow: ",";\n  transition: all 0.3s;\n  &.active {\n    color: ",";\n  }\n\n  & div {\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    bottom: -1px;\n    border-radius: 15px;\n    background-color: currentColor;\n    box-shadow: 0 0 3px black;\n  }\n"]);return _=function(){return n},n}function q(){var n=Object(c.a)(["\n  position: absolute;\n  top: 32px;\n  right: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 480px) {\n    top: 16px;\n    right: 16px;\n  }\n"]);return q=function(){return n},n}function Z(){var n=Object(c.a)(["\n  height: 24px;\n  width: 24px;\n  fill: ",";\n  margin-right: 16px;\n  filter: drop-shadow(0 0 2px ",");\n"]);return Z=function(){return n},n}var nn=x,tn=nn.muteColor,en=nn.glowColor,rn="0 0 10px ".concat(en,"40, inset 0 0 10px ").concat(en,"40"),on=p.b.svg(Z(),en,en),an=p.b.div(q()),cn=p.b.button(_(),en,tn,rn,en),ln=function(n){var t=n.switchSpeaker,e=n.activeSpeaker,i=n.time,a=n.timeText,c=e&&0===i.seconds&&i.minutes%15===0;return Object(r.useEffect)((function(){c&&function(n){var t=window.speechSynthesis,e=t.getVoices().filter((function(n){return"en-GB"===n.lang}))[0],r=new SpeechSynthesisUtterance(n);r.voice=e,r.pitch=.8,r.rate=1.1,t.speak(r)}(a)}),[c,a]),o.a.createElement(an,null,o.a.createElement(on,{viewBox:"0 0 60 60"},o.a.createElement("g",null,o.a.createElement("path",{d:"M26.894,7.358c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,19.358H1c-0.553,0-1,0.447-1,1\r v19c0,0.266,0.105,0.52,0.293,0.707S0.734,40.358,1,40.358l10.61-0.005l13.543,12.44c0.05,0.046,0.104,0.086,0.161,0.12\r c0.482,0.291,1.028,0.444,1.579,0.444c1.713,0,3.106-1.416,3.106-3.156V10.514C30,8.774,28.606,7.358,26.894,7.358z M13,38.358\r c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V38.358z M13,25.358c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4\r c0-0.553,0.447-1,1-1s1,0.447,1,1V25.358z"}),o.a.createElement("path",{d:"M52.026,29.858c0-8.347-5.316-15.76-13.229-18.447c-0.522-0.177-1.091,0.103-1.269,0.626\r c-0.177,0.522,0.103,1.091,0.626,1.269c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554\r c-0.522,0.178-0.802,0.746-0.623,1.27c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054\r C46.721,45.611,52.026,38.198,52.026,29.858z"}),o.a.createElement("path",{d:"M44.453,6.374c-0.508-0.213-1.095,0.021-1.312,0.53C42.926,7.413,43.163,8,43.672,8.216C52.376,11.909,58,20.405,58,29.858\r c0,9.777-5.894,18.38-15.015,21.914c-0.515,0.2-0.771,0.779-0.571,1.294c0.153,0.396,0.532,0.639,0.933,0.639\r c0.12,0,0.242-0.021,0.361-0.067C53.605,49.801,60,40.467,60,29.858C60,19.6,53.897,10.382,44.453,6.374z"}),o.a.createElement("path",{d:"M43.026,29.858c0-5.972-4.009-11.302-9.749-12.962c-0.53-0.151-1.084,0.152-1.238,0.684\r c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04\r c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039\r C39.018,41.159,43.026,35.829,43.026,29.858z"}))),o.a.createElement(cn,{onClick:t,className:e?"active":"",title:e?"mute speaker":"tell me the time every 15 minutes"},o.a.createElement("div",{style:{right:e?"-2px":"22px"}})))};function sn(){var n=Object(c.a)(["\n  display: block;\n  width: 30px;\n  height: 30px;\n  color: ",";\n  position: absolute;\n  top: 32px;\n  left: 32px;\n  border-radius: 50%;\n  box-shadow: 0 0 15px 0px ",";\n  cursor: pointer;\n  @media (max-width: 480px) {\n    top: 16px;\n    left: 16px;\n  }\n  & svg {\n    width: 30px;\n    height: 30px;\n    fill: currentColor;\n  }\n"]);return sn=function(){return n},n}var un=p.b.a(sn(),x.glowColor,x.glowColor),pn=function(){return o.a.createElement(un,{href:"https://github.com/okslutsiv/neon-clock-with-react-and-styled-components",target:"_blank",title:"Check the github repo"},o.a.createElement("svg",{viewBox:"0 0 438.549 438.549"},o.a.createElement("g",null,o.a.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\r c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\r c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\r c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\r c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\r c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\r c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\r c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\r c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\r c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\r c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\r c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\r c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\r c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\r c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\r c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\r c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\r c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\r c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\r C438.536,184.851,428.728,148.168,409.132,114.573z"}))))};function xn(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  min-height: calc(100vh - 32px);\n  padding-top: 32px;\n"]);return xn=function(){return n},n}var hn=p.b.div(xn()),dn=function(){var n=Object(r.useState)(!1),t=Object(l.a)(n,2),e=t[0],i=t[1],a=u(),c=function(n){return[!0,n.isAbout,n.isNearly,10===n.minutes,15===n.minutes,20===n.minutes||25===n.minutes,5===n.minutes||25===n.minutes,30===n.minutes,n.isPast,n.isTo,1===n.hours,2===n.hours,3===n.hours,4===n.hours,5===n.hours,6===n.hours,7===n.hours,8===n.hours,9===n.hours,10===n.hours,11===n.hours,n.isNoon,n.isMidnight,n.isOClock,n.isMorning||n.isAfternoon||n.isEvening,n.isMorning,n.isAfternoon,n.isEvening]}(function(n){var t=n.hours,e=n.minutes,r=n.base,o=void 0===r?5:r,i=Math.floor(e/o)*o,a=e-i,c=0===a,l=!c&&a>Math.floor(o/2),s=l?(i+o)%60:i,u=0===s,p=!u&&s<=30,x=!u&&!p,h=x||u&&l?(t+1)%24:t,d=0===h,f=12===h;return{isExact:c,isAbout:!c&&!l,isNearly:l,minutes:p||u?s:60-s,isOClock:u&&!f&&!d,isPast:p,isTo:x,hours:h>12?h-12:h,isNoon:f,isMidnight:d,isMorning:!d&&h<12,isAfternoon:h>12&&h<=18,isEvening:!d&&h>18}}(a)),s=f.map((function(n){return n.toLowerCase()})).filter((function(n,t){return!0===c[t]})).join(" ");return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(hn,null,"speechSynthesis"in window?o.a.createElement(ln,{switchSpeaker:function(){i(!e)},activeSpeaker:e,time:a,timeText:s}):null,o.a.createElement(D,{time:a}),o.a.createElement($,{highligts:c,phrases:f}),o.a.createElement(pn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.cbd5e711.chunk.js.map