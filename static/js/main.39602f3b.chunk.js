(this.webpackJsonpEasy_Listening=this.webpackJsonpEasy_Listening||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(13),r=a.n(i),l=(a(27),a(3)),o=a.n(l),u=a(14),c=a(15),h=a(16),p=a(17),d=a(20),m=a(18),v=a(2),g=a(21);var f,w=function(e){for(var t,a,n=e.length;n>0;)a=Math.floor(Math.random()*n),t=e[--n],e[n]=e[a],e[a]=t;return e},b=(a(29),a(30),a(19)),y=a.n(b),k=(a(48),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleKeyPress=function(e,t){var n=a.state.isEnd;"Space"===e.key?a.playAudio(t):"ArrowLeft"!==e.key||n?"ArrowRight"!==e.key||n||(f.currentTime=f.currentTime+3<f._startTime+f.duration?f.currentTime+=3:f.currentTime):f.currentTime=f.currentTime-3>f._startTime?f.currentTime-3:f._startTime},a.state={english_text:"",vietnames_text:"",final_text:[],guessWord:"",checkAnswer:[],createAnswer:[],key:0,index:0,storeIndex:"",countGuess:0,bool:!1,english:"",vietnames:"",submit:!0,value:"default",voice:"US English Male",valueInput:"",inputArr:[],urlDownLoad:"",urlYouTuBe:"",captions:[],duration:"",audioElement:"",starts:[],durations:[],count:0,results:[],isPlayArr:[],prevKey:-1,isEnd:!1,isLoaded:!1,defaultsYoutubeUrl:["https://www.youtube.com/watch?v","https://youtu.be/","https://m.youtube.com/watch?feature=youtu.be&v=","https://www.youtube.com/watch?feature=youtu.be&v="]},a.handleGuessButtons=a.handleGuessButtons.bind(Object(v.a)(a)),a.handleGuessBox=a.handleGuessBox.bind(Object(v.a)(a)),a.handleOtherButton=a.handleOtherButton.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.showAnswers=a.showAnswers.bind(Object(v.a)(a)),a.handleSelectChange=a.handleSelectChange.bind(Object(v.a)(a)),a.playAudio=a.playAudio.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://code.responsivevoice.org/responsivevoice.js?key=FdquDWj4",e.async=!0,document.body.appendChild(e)}},{key:"handleGuessBox",value:function(e){e!==this.state.key&&this.setState((function(t){return{key:e,index:0,countGuess:0}}))}},{key:"handleOtherButton",value:function(e){var t=e.target.value;"___"!==t&&window.responsiveVoice.speak(t,this.state.voice)}},{key:"handleGuessButtons",value:function(e){var t,a=this;try{t=e.target.value}catch(h){t=e}console.log(t);var n=this.state.key,s=this.state.storeIndex,i=s[n],r=this.state.countGuess;r<1&&window.responsiveVoice.speak(t,this.state.voice);var l=this.state.final_text.slice(0,this.state.final_text.length);if(this.state.checkAnswer[n][i].replace(",","").toLowerCase()===t.replace(",","").toLowerCase()){var o=this.state.createAnswer.slice(0,this.state.createAnswer.length);l[n].splice(l[n].indexOf(this.state.checkAnswer[n][i]),1),1!==r&&this.state.bool,o[n][i]=this.state.checkAnswer[n][i];var u=s.slice(0,s.length);u[n]=i+1,this.setState((function(e){return{createAnswer:o,index:i+1,guessWord:a.state.checkAnswer[n][i],final_text:l,storeIndex:u,countGuess:0,bool:!1,valueInput:""}})),i+1===this.state.checkAnswer[n].length&&this.setState((function(e){return{index:0}}))}else{if((r+=1)>=2){var c="The next word is ".concat(this.state.checkAnswer[n][i]);window.responsiveVoice.speak(c,this.state.voice),this.setState((function(e){return{valueInput:""}}))}this.setState((function(e){return{guessWord:a.state.checkAnswer[n][i],countGuess:r,bool:!0}}))}}},{key:"handleReadText",value:function(e){0===this.state.final_text[e].length&&window.responsiveVoice.speak(this.state.english_text[e],this.state.voice)}},{key:"playAudio",value:function(e){try{var t,a,n=this.state,s=n.starts,i=n.durations,r=n.results,l=n.isPlayArr,o=n.prevKey,u=n.isEnd;e===r.length-1?(t=s[2*e],a=r.length%2!==0?i[2*e]+i[2*e+1]+1:i[2*e]+1,console.log("start",parseInt(t/60)+t%60/100,"duration",a)):(t=s[2*e],a=s[2*e+2]-s[2*e]-.15,console.log("start",parseInt(t/60)+t%60/100,"duration",a));var c=l.slice(0,l.length);if(console.log("Text: ",r[e]),e!==o&&-1!==o&&(c[o]||(c[o]=!c[o]),f.pause()),!l[e])try{f.pause()}catch(p){console.log("Don't Worry")}if(c[e]=!c[e],o!==e&&l[e]||!0===u){try{f.pause()}catch(p){}(f=document.createElement("video")).setAttribute("src",this.state.urlDownLoad),f.value=a,f._startTime=t,f.currentTime=t}!0===u&&(u=!1);var h=this;f.addEventListener("timeupdate",(function(){if(f.currentTime-f._startTime>=f.value&&(f.pause(),u=!0),u){var e=l.map((function(e){return!0}));h.setState({isPlayArr:e,isEnd:u})}})),l[e]&&f.play(),this.setState({isPlayArr:c,prevKey:e,isEnd:u})}catch(p){}}},{key:"generateButtons",value:function(){var e=this;return this.state.final_text.map((function(t,a){return s.a.createElement("section",{className:"Container",key:a,value:a,onMouseEnter:function(){return e.handleGuessBox(a)}},e.state.createAnswer[a].map((function(t,a){return s.a.createElement("button",{className:"Button",key:a,value:t,onClick:e.handleOtherButton},t)})),e.state.final_text[a].length>0?s.a.createElement("div",null,s.a.createElement("input",{type:"text",name:"valueInput",placeholder:"Typing Answer",value:e.state.key===a?e.state.valueInput:"",onChange:function(t){return e.handleChange(t,a)},style:{borderRadius:"5px",height:"30px",width:"200px",fontSize:"20px"}})):s.a.createElement("p",null),t.map((function(t,a){return s.a.createElement("button",{className:"Button",key:a,value:t,onClick:e.handleGuessButtons},t)})),s.a.createElement("div",null,s.a.createElement("button",{className:"Button",key:a,onClick:function(){return e.playAudio(a)},ref:"play",onKeyUp:function(t){return e.handleKeyPress(t,a)}},e.state.isPlayArr[a]?"Play":"Pause")),0===e.state.final_text[a].length?s.a.createElement("div",null,s.a.createElement("audio",{src:"https://media.vocaroo.com/mp3/9EciEJW3Cyt",autoPlay:!0,controls:!0,hidden:!0}),s.a.createElement("h1",{id:"meo"},e.state.results[a])):s.a.createElement("div",null,s.a.createElement("button",{className:"Button",style:{background:"#2c3e50",border:"none",color:"#e2e5e9"},key:a,onClick:function(){return e.showAnswers(a)}},"Show Answer")))}))}},{key:"handleChange",value:function(e,t){var a=this.state.index,n=this.state.checkAnswer,s=this.state.inputArr,i=s.slice(0,s.length),r=this.state.final_text;this.setState(Object(c.a)({},e.target.name,e.target.value),(function(){try{if(n.length>0){var e=r[t].map((function(e){return e.replace(",","").toLowerCase()}));if("meowmeow"===this.state.valueInput&&(window.responsiveVoice.speak("You say meowmeow",this.state.voice),0===this.state.final_text[t].length?this.setState({valueInput:"",index:a+1}):(this.handleGuessButtons(n[t][a]),this.setState({valueInput:""}))),this.state.valueInput.trim().toLowerCase()===n[t][a].toLowerCase()&&0===this.state.final_text[t].length){if(window.responsiveVoice.speak(this.state.valueInput,this.state.voice),a===n[t].length-1)new Audio("https://media.vocaroo.com/mp3/9EciEJW3Cyt").play(),console.log("Yes"),i[t]=!1;this.setState({valueInput:"",index:a+1,inputArr:i})}else e.includes(this.state.valueInput.trim().toLowerCase())&&" "===this.state.valueInput[this.state.valueInput.length-1]&&this.handleGuessButtons(this.state.valueInput.trim().toLowerCase())}}catch(s){console.log("Some Wrrong!")}}))}},{key:"handleSelectChange",value:function(e){var t=e.target.value,a=this.state.voice,n=this.state.final_text.slice(0,this.state.final_text.length),s=this.state.createAnswer.slice(0,this.state.createAnswer.length);switch(t){case"showanswer":for(var i=0;i<n.length;i++)n[i]=[],s[i]=this.state.checkAnswer[i];break;case"usmale":a="US English Male";break;case"usfemale":a="US English Female";break;case"ukmale":a="UK English Male";break;case"ukfemale":a="UK English Female"}this.setState({value:t,final_text:n,createAnswer:s,voice:a})}},{key:"showAnswers",value:function(e){var t=this.state.final_text.slice(0,this.state.final_text.length),a=this.state.createAnswer.slice(0,this.state.createAnswer.length);t[e]=[],a[e]=this.state.checkAnswer[e],this.setState((function(e){return{final_text:t,createAnswer:a}}))}},{key:"handleSubmit",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,s,i,r,l,u,c,h,p,d,m,v,g,f,b,k,E,x,A,S,_,C,B,T,I,L,O,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=this.state.urlYouTuBe.split("/"),n=this.state.urlDownLoad,!(a.length>0&&n.length>0)){e.next=50;break}if(this.setState({submit:!1}),!(0===this.state.captions.length&&this.state.urlYouTuBe.length>0)){e.next=50;break}a=this.state.urlYouTuBe,s="",i=0;case 9:if(!(i<this.state.defaultsYoutubeUrl.length)){e.next=25;break}if(a.indexOf(this.state.defaultsYoutubeUrl[i])){e.next=22;break}e.t0=i,e.next=0===e.t0?14:1===e.t0?16:2===e.t0?18:3===e.t0?20:21;break;case 14:return s=a.split("=")[1].split("&")[0],e.abrupt("break",22);case 16:return s=a.split("/")[3].slice(0,11),e.abrupt("break",22);case 18:return s=a.split("=")[2],e.abrupt("break",22);case 20:s=a.split("&")[1].split("=")[1];case 21:return e.abrupt("break",22);case 22:i++,e.next=9;break;case 25:return console.log(s),r=[],l=[],u=[],e.next=31,y.a.get("https://video.google.com/timedtext?&lang=en&v="+s);case 31:for(c=e.sent,h=c.data.replace(new RegExp("&#39;","g"),"'").replace(new RegExp("&amp;#39;","g"),"'").replace(new RegExp("&amp;amp;","g"),"and").split("<transcript>"),p=h[1].split("</text>"),console.log(p),p.pop(),d=0;d<p.length;d++)m=p[d].split(">"),v=m[0].split(" "),g=v[1].split("=")[1],f=v[2].split("=")[1],r.push(m[1].replace(new RegExp('[&/\\#,+()$~%.":*?<>{}]',"g"),"")),l.push(+g.replace(new RegExp('"',"g"),"")),u.push(+f.replace(new RegExp('"',"g"),""));if(b=r.length,k=[],b%2===0)for(E=0;E<b;E+=2)k.push(r[E]+" "+r[E+1]);else{for(x=0;x<b-1;x+=2)k.push(r[x]+" "+r[x+1]);k.push(r[b-1])}for(A=[],S=[],_=[],C=[],B=[],T=[],I=[],L=0;L<k.length;L++){for(O=[],B.push(k[L].split(" ")),T.push(k[L].split(" ")),S.push(!0),_.push(0),I.push(!0),C.push(0),j=0;j<k[L].split(" ").length;j++)O.push("___");A.push(O)}T.forEach((function(e){return w(e)})),this.setState({captions:r,starts:l,durations:u,results:k,final_text:T,createAnswer:A,inputArr:S,storeIndex:_,show:C,checkAnswer:B,isPlayArr:I,isLoaded:!0});case 50:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.generateButtons();return this.state.guessWord===this.state.english_text[this.state.key]&&console.log("Your answer is correct"),s.a.createElement("div",{className:"App"},this.state.submit?s.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"urlDownLoad",placeholder:"LinkDownLoad",value:this.state.urlDownLoad,onChange:this.handleChange})),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"urlYouTuBe",placeholder:"LinkYouTuBe",value:this.state.urlYouTuBe,onChange:this.handleChange})),s.a.createElement("button",{id:"submit"},"Submit!")):s.a.createElement("div",null,this.state.isLoaded?s.a.createElement("div",null,s.a.createElement("section",{id:"meo"},s.a.createElement("form",{onSubmit:this.showAnswers},s.a.createElement("label",null,s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"slct",id:"slct",value:this.state.value,onChange:this.handleSelectChange},s.a.createElement("option",{value:"default"},"Choose an option"),s.a.createElement("option",{value:"showanswer"},"Show Answers"),s.a.createElement("option",{value:"usmale"},"US English Male Voice"),s.a.createElement("option",{value:"usfemale"},"US English FeMale Voice"),s.a.createElement("option",{value:"ukmale"},"UK English Male Voice"),s.a.createElement("option",{value:"ukfemale"},"UK English FeMale Voice")))))),s.a.createElement("p",{className:"Hangman-btns"},e)):s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"rubik-loader"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.39602f3b.chunk.js.map