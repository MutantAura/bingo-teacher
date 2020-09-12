(this["webpackJsonpbingo-teacher"]=this["webpackJsonpbingo-teacher"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(16),a(2));var i=a(5),s=a(1);function u(e){var t=e.videoUrl,a=e.widthInPx,n=e.heightInPx;return r.a.createElement("div",null,r.a.createElement("iframe",{src:function(){var e=-1!==t.indexOf("v=");if(t=(t=t.replace("&t=","&start=")).replace("?t=","?start="),e){var a=new URLSearchParams(t.split("?")[1]),n="";if(console.log(a.has("start")),a.has("start")){var r=a.get("start").substring(0,a.get("start").length-1);n="?start=".concat(r)}return"https://www.youtube.com/embed/"+a.get("v")+n}if(-1!==t.indexOf(".be/"))return"https://www.youtube.com/embed/"+t.split(".be/")[1]}(),width:a,height:n,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"}))}var m=a(3),d="#ec407a",b="#3f51b5",h="#424242",g="#303030",f="#fff",p="bold",v="pointer",E="2rem",j="1.5rem",O="1.2rem";function k(e){e.className;var t=e.checked,a=Object(m.a)(e,["className","checked"]),n=s.a.create({styledCheckboxBackground:{backgroundColor:t?d:"white"}});return r.a.createElement("div",{className:Object(s.b)(x.checkboxContainer)},r.a.createElement("input",Object.assign({type:"checkbox",className:Object(s.b)(x.hiddenCheckbox)},a)),r.a.createElement("input",Object.assign({type:"checkbox",className:Object(s.b)([x.styledCheckbox,n.styledCheckboxBackground])},a)))}var x=s.a.create({checkboxContainer:{display:"inline-block",verticalAlign:"middle"},hiddenCheckbox:{border:0,clip:"rect(0 0 0 0)",clippath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},styledCheckbox:{display:"inline-block",width:"2em",height:"2em",borderRadius:"3px",transition:"all 150ms"}});function C(e){var t=e.goal,a=e.onRemoveGoal,c=Object(n.useState)(!1),l=Object(o.a)(c,2),i=l[0],m=l[1],d=Object(n.useMemo)((function(){return!!t.goalNotes}),[t]),b=Object(n.useMemo)((function(){return Array.isArray(t.goalNotes)?t.goalNotes.join("\r\n"):t.goalNotes}),[t.goalNotes]),h=Object(n.useMemo)((function(){return t.tricks.length>0}),[t]),g=Object(n.useMemo)((function(){return t.tricks.filter((function(e){return e.isFundamental}))}),[t]),f=Object(n.useMemo)((function(){return t.tricks.filter((function(e){return!e.isFundamental}))}),[t]);return r.a.createElement("div",null,r.a.createElement("h4",{className:Object(s.b)(N.goalNameText),onContextMenu:function(e){e.preventDefault(),a(t)}},t.goalName),d&&r.a.createElement("div",{className:Object(s.b)(N.noteWrapper)},r.a.createElement("h4",{className:Object(s.b)(N.lowMargin)},"Notes:"),r.a.createElement("p",{className:Object(s.b)(N.lowMargin)},b)),h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(s.b)(N.tricksContainer)},f.map((function(e){return!!e.trickUrl?r.a.createElement("div",{key:e.trickName,className:Object(s.b)(N.trick)},r.a.createElement("p",null,e.trickName),e.trickUrl&&r.a.createElement(u,{videoUrl:e.trickUrl,widthInPx:384,heightInPx:216})):null}))),g.length>0&&r.a.createElement("label",null,r.a.createElement(k,{checked:i,onChange:function(e){return m(e.target.checked)}}),r.a.createElement("span",null,"Show Fundamentals (",g.length," tricks)")),i&&r.a.createElement("div",{className:Object(s.b)(N.tricksContainer)},g.map((function(e){return!!e.trickUrl?r.a.createElement("div",{key:e.trickName,className:Object(s.b)(N.trick)},r.a.createElement("p",null,e.trickName),e.trickUrl&&r.a.createElement(u,{videoUrl:e.trickUrl,widthInPx:384,heightInPx:216})):null})))))}var N=s.a.create({tricksContainer:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},noteWrapper:{},lowMargin:{margin:".1em"},goalNameText:{color:d,fontSize:E}});function y(e){var t=e.selectedGoals,a=e.onRemoveGoal;return 0===t.length?null:r.a.createElement("div",{className:Object(s.b)(w.container)},t.map((function(e){return r.a.createElement(C,{key:e.goalName,goal:e,onRemoveGoal:a})})))}var w=s.a.create({container:{marginBottom:"25rem"}});function S(e){var t=e.value,a=e.onChange,n=e.styles;Object(m.a)(e,["value","onChange","styles"]);return r.a.createElement("input",{className:Object(s.b)(B.textInput,n),type:"text",value:t,onChange:function(e){a(e.target.value)}})}var B=s.a.create({textInput:{fontSize:j,width:"10em",border:"none",borderRadius:".25em",":focus":{outline:"none"}}});function I(e){e.value;var t=e.text,a=e.onClick;Object(m.a)(e,["value","text","onClick"]);return r.a.createElement("button",{className:Object(s.b)(G.textInput),onClick:a},t)}var G=s.a.create({textInput:{fontSize:j,backgroundColor:d,color:f,cursor:"pointer",paddingLeft:".5em",paddingRight:".5em",paddingTop:".25em",paddingBottom:".25em",border:"none",borderRadius:".25em",":focus":{outline:"none"}}});function T(e){var t=e.goals,a=e.selectedGoals,c=e.onSelectedGoalsChange,l=e.searchValue,u=e.onSearchValueChange,m=Object(n.useState)(""),d=Object(o.a)(m,2),b=d[0],h=d[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"OotBingo Popout Card URL:"),r.a.createElement("div",{className:Object(s.b)(R.popoutTextEntryContainer)},r.a.createElement(S,{value:b,onChange:function(e){h(e)},styles:R.popoutTextEntryTextInput}),r.a.createElement(I,{text:"Parse",onClick:function(){var e=function(e){var t=e.goals,a=e.url.split("%3D");if(1===a.length)return[];var n=a[1].split("%3B%3B%3B"),r=new Set;return n.forEach((function(e){var t=decodeURI(e);t=t.replace("%26","&"),r.add(decodeURI(t))})),t.filter((function(e){return r.has(e.goalName)}))}({goals:t,url:b});c([].concat(Object(i.a)(a),Object(i.a)(e)))}},"Parse!"))),r.a.createElement("div",null,r.a.createElement("h4",null,"manually search goals:"),r.a.createElement(S,{value:l,onChange:function(e){return u(e)}})))}var R=s.a.create({popoutTextEntryContainer:{display:"flex"},popoutTextEntryTextInput:{marginRight:"2em"},popoutTextEntryButton:{margin:"2em"}});function P(e){var t=e.filteredGoals,a=e.onSelectGoal;return r.a.createElement("div",null,t.length>0&&r.a.createElement("h3",null,"Search Results"),t().map((function(e){return r.a.createElement("p",{className:Object(s.b)(U.goalNameText),key:e.goalName,onClick:function(){a(e)}},e.goalName)})))}var U=s.a.create({goalNameText:{color:b,fontSize:O,fontWeight:p,cursor:v}});function L(e){e.goals,e.selectedGoals,e.onSelectedGoalsChange,e.searchValue,e.onSearchValueChange;return r.a.createElement("div",null,r.a.createElement("h4",null,"Help:"),r.a.createElement("ul",null,r.a.createElement("li",{className:Object(s.b)(M.helpListItem)},"Right Click a pink header to remove a goal"),r.a.createElement("li",{className:Object(s.b)(M.helpListItem)},"Show fundamentals to see tricks most players are assumed to know"),r.a.createElement("li",{className:Object(s.b)(M.helpListItem)},"Please contact qwoodmansee#1028 if you encounter a bug or a video isnt good enough")))}var M=s.a.create({helpListItem:{fontSize:".8em",margin:".8em",textAlign:"left"}});function F(e){var t=e.goals,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],m=Object(n.useState)([]),d=Object(o.a)(m,2),b=d[0],h=d[1],g=Object(n.useState)(!0),f=Object(o.a)(g,2),p=f[0],v=f[1],E=Object(n.useCallback)((function(e){h(b.filter((function(t){return t.goalName!==e.goalName})))}),[h,b]),j=Object(n.useCallback)((function(){return l?t.filter((function(e){return-1!==e.goalName.toLowerCase().indexOf(l.toLowerCase())})):[]}),[t,l]);return r.a.createElement("div",{className:Object(s.b)(V.rowHelperContainer)},r.a.createElement("div",{className:Object(s.b)(V.leftColumn)},r.a.createElement(y,{selectedGoals:b,onRemoveGoal:E})),r.a.createElement("div",{className:Object(s.b)(V.rightColumn)},r.a.createElement("div",{className:Object(s.b)(V.stickyTop)},r.a.createElement("div",{className:Object(s.b)(V.card)},p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{goals:t,selectedGoals:b,onSelectedGoalsChange:function(e){return h(e)},searchValue:l,onSearchValueChange:function(e){return u(e)}}),r.a.createElement(P,{className:Object(s.b)(V.searchResults),filteredGoals:j,selectedGoals:b,onSelectGoal:function(e){return h([].concat(Object(i.a)(b),[e]))}})),r.a.createElement("div",{className:Object(s.b)(V.topPadded)},r.a.createElement("label",null,r.a.createElement(k,{checked:p,onChange:function(){return v(!p)}}),r.a.createElement("span",null,"Hide Search Form")))),r.a.createElement("div",{className:Object(s.b)(V.card)},r.a.createElement(L,null)))))}var V=s.a.create({rowHelperContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},leftColumn:{alignSelf:"flex-start",flexBasis:"90%",order:1,flexGrow:3},topPadded:{marginTop:"1em"},rightColumn:{flexBasis:"10%",order:2,flexShrink:3},stickyTop:{top:"3em",right:"1em",position:"sticky"},card:{backgroundColor:h,boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",borderRadius:".3em",padding:"1em",margin:"1em"}});function z(){return r.a.createElement("div",{className:Object(s.b)(A.menuBarContainer)},r.a.createElement("h1",{className:Object(s.b)(A.menuBarText)},"BingoTeacher"))}var A=s.a.create({menuBarContainer:{flex:1,alignItems:"flex-end",flexDirection:"column"},menuBarText:{padding:".2em",margin:0}});function H(){return r.a.createElement("div",{className:"loader"},r.a.createElement("h2",null,"Loading..."))}a(19);var D=s.a.create({appContainer:{width:"100%",backgroundColor:g,color:f,textAlign:"center",minHeight:"100vh"},menuBarContainer:{width:"100%",backgroundColor:h},bodyContainer:{padding:10,height:"100%"}}),W=function(){var e=function(e,t){var a=Object(n.useState)(null),r=Object(o.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),h=b[0],g=b[1];return Object(n.useEffect)((function(){m(!0),fetch(e,t).then((function(e){return e.json()})).then((function(e){l(e),m(!1)})).catch((function(){g(!0),m(!1)}))}),[e,t]),[c,u,h]}("https://afternoon-fortress-59487.herokuapp.com/goals"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),i=Object(o.a)(l,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){c||m(a)}),[a,c]),r.a.createElement("div",{className:Object(s.b)(D.appContainer)},r.a.createElement("div",{className:Object(s.b)(D.menuBarContainer)},r.a.createElement(z,null)),r.a.createElement("div",{className:Object(s.b)(D.bodyContainer)},c?r.a.createElement(H,null):r.a.createElement(F,{goals:u})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.84d4cb42.chunk.js.map