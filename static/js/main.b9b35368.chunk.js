(this.webpackJsonpEasy_Listening=this.webpackJsonpEasy_Listening||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),i=a.n(r),l=(a(27),a(3)),o=a.n(l),u=a(14),c=a(15),h=a(16),p=a(17),d=a(20),m=a(18),v=a(2),g=a(21);var f,w=function(e){for(var t,a,n=e.length;n>0;)a=Math.floor(Math.random()*n),t=e[--n],e[n]=e[a],e[a]=t;return e},b=(a(29),a(30),a(19)),y=a.n(b),E=(a(48),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleKeyPress=function(e,t){var n=a.state.isEnd;"Space"===e.key?a.playAudio(t):"ArrowLeft"!==e.key||n?"ArrowRight"!==e.key||n||(f.currentTime=f.currentTime+3<f._startTime+f.duration?f.currentTime+=3:f.currentTime):f.currentTime=f.currentTime-3>f._startTime?f.currentTime-3:f._startTime},a.state={english_text:"",vietnames_text:"",final_text:[],guessWord:"",checkAnswer:[],createAnswer:[],key:0,index:0,storeIndex:"",countGuess:0,bool:!1,english:"",vietnames:"",submit:!0,value:"default",voice:"US English Male",valueInput:"",inputArr:[],urlDownLoad:"",urlYouTuBe:"",captions:[],duration:"",audioElement:"",starts:[],durations:[],count:0,results:[],isPlayArr:[],prevKey:-1,isEnd:!1,isLoaded:!1,defaultsYoutubeUrl:["https://www.youtube.com/watch?v","https://youtu.be/","https://m.youtube.com/watch?feature=youtu.be&v=","https://www.youtube.com/watch?feature=youtu.be&v="]},a.handleGuessButtons=a.handleGuessButtons.bind(Object(v.a)(a)),a.handleGuessBox=a.handleGuessBox.bind(Object(v.a)(a)),a.handleOtherButton=a.handleOtherButton.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.showAnswers=a.showAnswers.bind(Object(v.a)(a)),a.handleSelectChange=a.handleSelectChange.bind(Object(v.a)(a)),a.playAudio=a.playAudio.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://code.responsivevoice.org/responsivevoice.js?key=FdquDWj4",e.async=!0,document.body.appendChild(e)}},{key:"handleGuessBox",value:function(e){e!==this.state.key&&this.setState((function(t){return{key:e,index:0,countGuess:0}}))}},{key:"handleOtherButton",value:function(e){var t=e.target.value;"___"!==t&&window.responsiveVoice.speak(t,this.state.voice)}},{key:"handleGuessButtons",value:function(e){var t,a=this;try{t=e.target.value}catch(m){t=e}console.log(t);var n=this.state,s=n.key,r=n.storeIndex,i=n.countGuess,l=n.checkAnswer,o=(n.bool,n.createAnswer),u=r[s];i<1&&window.responsiveVoice.speak(t,this.state.voice);var c=this.state.final_text.slice(0,this.state.final_text.length);if(l[s][u].replace(",","").toLowerCase()===t.replace(",","").toLowerCase()){var h=o.slice(0,o.length);c[s].splice(c[s].indexOf(l[s][u]),1),h[s][u]=l[s][u];var p=r.slice(0,r.length);p[s]=u+1,this.setState((function(e){return{createAnswer:h,index:u+1,guessWord:a.state.checkAnswer[s][u],final_text:c,storeIndex:p,countGuess:0,bool:!1,valueInput:""}})),u+1===l[s].length&&this.setState((function(e){return{index:0}}))}else{if((i+=1)>=2){var d="The next word is ".concat(l[s][u]);window.responsiveVoice.speak(d,this.state.voice),this.setState((function(e){return{valueInput:""}}))}this.setState((function(e){return{guessWord:l[s][u],countGuess:i,bool:!0}}))}}},{key:"handleReadText",value:function(e){0===this.state.final_text[e].length&&window.responsiveVoice.speak(this.state.english_text[e],this.state.voice)}},{key:"playAudio",value:function(e){try{var t,a,n=this.state,s=n.starts,r=n.durations,i=n.results,l=n.isPlayArr,o=n.prevKey,u=n.isEnd;e===i.length-1?(t=s[2*e],a=i.length%2!==0?r[2*e]+r[2*e+1]+1:r[2*e]+1,console.log("start",parseInt(t/60)+t%60/100,"duration",a)):(t=s[2*e],a=s[2*e+2]-s[2*e]-.15,console.log("start",parseInt(t/60)+t%60/100,"duration",a));var c=l.slice(0,l.length);if(console.log("Text: ",i[e]),e!==o&&-1!==o&&(c[o]||(c[o]=!c[o]),f.pause()),!l[e])try{f.pause()}catch(p){console.log("Don't Worry")}if(c[e]=!c[e],o!==e&&l[e]||!0===u){try{f.pause()}catch(p){}(f=document.createElement("video")).setAttribute("src",this.state.urlDownLoad),f.value=a,f._startTime=t,f.currentTime=t}!0===u&&(u=!1);var h=this;f.addEventListener("timeupdate",(function(){if(f.currentTime-f._startTime>=f.value&&(f.pause(),u=!0),u){var e=l.map((function(e){return!0}));h.setState({isPlayArr:e,isEnd:u})}})),l[e]&&f.play(),this.setState({isPlayArr:c,prevKey:e,isEnd:u})}catch(p){}}},{key:"generateButtons",value:function(){var e=this,t=this.state,a=t.final_text,n=t.createAnswer;return a.map((function(t,a){return s.a.createElement("section",{className:"Container",key:a,value:a,onMouseEnter:function(){return e.handleGuessBox(a)}},n[a].map((function(t,a){return s.a.createElement("button",{className:"Button",key:a,value:t,onClick:e.handleOtherButton},t)})),e.state.final_text[a].length>0?s.a.createElement("div",null,s.a.createElement("input",{type:"text",name:"valueInput",placeholder:"Typing Answer",value:e.state.key===a?e.state.valueInput:"",onChange:function(t){return e.handleChange(t,a)},style:{borderRadius:"5px",height:"30px",width:"200px",fontSize:"20px"}})):s.a.createElement("p",null),t.map((function(t,a){return s.a.createElement("button",{className:"Button",key:a,value:t,onClick:e.handleGuessButtons},t)})),s.a.createElement("div",null,s.a.createElement("button",{className:"Button",key:a,onClick:function(){return e.playAudio(a)},ref:"play",onKeyUp:function(t){return e.handleKeyPress(t,a)}},e.state.isPlayArr[a]?"Play":"Pause")),0===e.state.final_text[a].length?s.a.createElement("div",null,s.a.createElement("audio",{src:"https://media.vocaroo.com/mp3/9EciEJW3Cyt",autoPlay:!0,controls:!0,hidden:!0}),s.a.createElement("h1",{id:"meo"},e.state.results[a])):s.a.createElement("div",null,s.a.createElement("button",{className:"Button",style:{background:"#2c3e50",border:"none",color:"#e2e5e9"},key:a,onClick:function(){return e.showAnswers(a)}},"Show Answer")))}))}},{key:"handleChange",value:function(e,t){var a=this.state,n=a.index,s=a.checkAnswer,r=a.inputArr,i=a.final_text,l=a.valueInput,o=r.slice(0,r.length);this.setState(Object(c.a)({},e.target.name,e.target.value),(function(){try{if(s.length>0){var e=i[t].map((function(e){return e.replace(",","").toLowerCase()}));if("meowmeow"===l&&(window.responsiveVoice.speak("You say meowmeow",this.state.voice),0===i[t].length?this.setState({valueInput:"",index:n+1}):(this.handleGuessButtons(s[t][n]),this.setState({valueInput:""}))),l.trim().toLowerCase()===s[t][n].toLowerCase()&&0===i[t].length){if(window.responsiveVoice.speak(this.state.valueInput,this.state.voice),n===s[t].length-1)new Audio("https://media.vocaroo.com/mp3/9EciEJW3Cyt").play(),console.log("Yes"),o[t]=!1;this.setState({valueInput:"",index:n+1,inputArr:o})}else e.includes(l.trim().toLowerCase())&&" "===l[l.length-1]&&this.handleGuessButtons(l.trim().toLowerCase())}}catch(a){console.log("Some Wrrong!")}}))}},{key:"handleSelectChange",value:function(e){var t=e.target.value,a=this.state.voice,n=this.state.final_text.slice(0,this.state.final_text.length),s=this.state.createAnswer.slice(0,this.state.createAnswer.length);switch(t){case"showanswer":for(var r=0;r<n.length;r++)n[r]=[],s[r]=this.state.checkAnswer[r];break;case"usmale":a="US English Male";break;case"usfemale":a="US English Female";break;case"ukmale":a="UK English Male";break;case"ukfemale":a="UK English Female"}this.setState({value:t,final_text:n,createAnswer:s,voice:a})}},{key:"showAnswers",value:function(e){var t=this.state.final_text.slice(0,this.state.final_text.length),a=this.state.createAnswer.slice(0,this.state.createAnswer.length);t[e]=[],a[e]=this.state.checkAnswer[e],this.setState((function(e){return{final_text:t,createAnswer:a}}))}},{key:"handleSubmit",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,s,r,i,l,u,c,h,p,d,m,v,g,f,b,E,k,x,A,S,_,C,B,T,L,O,j,I;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=this.state.urlYouTuBe.split("/"),n=this.state.urlDownLoad,!(a.length>0&&n.length>0)){e.next=49;break}if(this.setState({submit:!1}),!(0===this.state.captions.length&&this.state.urlYouTuBe.length>0)){e.next=49;break}a=this.state.urlYouTuBe,s="",r=0;case 9:if(!(r<this.state.defaultsYoutubeUrl.length)){e.next=25;break}if(a.indexOf(this.state.defaultsYoutubeUrl[r])){e.next=22;break}e.t0=r,e.next=0===e.t0?14:1===e.t0?16:2===e.t0?18:3===e.t0?20:21;break;case 14:return s=a.split("=")[1].split("&")[0],e.abrupt("break",22);case 16:return s=a.split("/")[3].slice(0,11),e.abrupt("break",22);case 18:return s=a.split("=")[2],e.abrupt("break",22);case 20:s=a.split("&")[1].split("=")[1];case 21:return e.abrupt("break",22);case 22:r++,e.next=9;break;case 25:return console.log(s),i=[],l=[],u=[],e.next=31,y.a.get("https://video.google.com/timedtext?&lang=en&v="+s);case 31:for(c=e.sent,h=c.data.replace(new RegExp("&#39;","g"),"'").replace(new RegExp("&amp;#39;","g"),"'").replace(new RegExp("&amp;amp;","g"),"and").split("<transcript>"),(p=h[1].split("</text>")).pop(),d=0;d<p.length;d++)m=p[d].split(">"),v=m[0].split(" "),g=v[1].split("=")[1],f=v[2].split("=")[1],i.push(m[1].replace(new RegExp('[&/\\#,+()$~%.":*?<>{}]',"g"),"")),l.push(+g.replace(new RegExp('"',"g"),"")),u.push(+f.replace(new RegExp('"',"g"),""));if(b=i.length,E=[],b%2===0)for(k=0;k<b;k+=2)E.push(i[k]+" "+i[k+1]);else{for(x=0;x<b-1;x+=2)E.push(i[x]+" "+i[x+1]);E.push(i[b-1])}for(A=[],S=[],_=[],C=[],B=[],T=[],L=[],O=0;O<E.length;O++){for(j=[],B.push(E[O].split(" ")),T.push(E[O].split(" ")),S.push(!0),_.push(0),L.push(!0),C.push(0),I=0;I<E[O].split(" ").length;I++)j.push("___");A.push(j)}T.forEach((function(e){return w(e)})),this.setState({captions:i,starts:l,durations:u,results:E,final_text:T,createAnswer:A,inputArr:S,storeIndex:_,show:C,checkAnswer:B,isPlayArr:L,isLoaded:!0});case 49:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.generateButtons();return this.state.guessWord===this.state.english_text[this.state.key]&&console.log("Your answer is correct"),s.a.createElement("div",{className:"App"},this.state.submit?s.a.createElement("div",{id:"form"},s.a.createElement("iframe",{width:"420",height:"315",src:"https://www.youtube.com/embed/Ye1ACgqbF_4"}),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"urlDownLoad",placeholder:"LinkDownLoad",value:this.state.urlDownLoad,onChange:this.handleChange})),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"urlYouTuBe",placeholder:"LinkYouTuBe",value:this.state.urlYouTuBe,onChange:this.handleChange})),s.a.createElement("button",{id:"submit"},"Submit!"))):s.a.createElement("div",null,this.state.isLoaded?s.a.createElement("div",null,s.a.createElement("section",{id:"meo"},s.a.createElement("form",{onSubmit:this.showAnswers},s.a.createElement("label",null,s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"slct",id:"slct",value:this.state.value,onChange:this.handleSelectChange},s.a.createElement("option",{value:"default"},"Choose an option"),s.a.createElement("option",{value:"showanswer"},"Show Answers"),s.a.createElement("option",{value:"usmale"},"US English Male Voice"),s.a.createElement("option",{value:"usfemale"},"US English FeMale Voice"),s.a.createElement("option",{value:"ukmale"},"UK English Male Voice"),s.a.createElement("option",{value:"ukfemale"},"UK English FeMale Voice")))))),s.a.createElement("p",{className:"Hangman-btns"},e)):s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"rubik-loader"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b9b35368.chunk.js.map