(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),l=c(10),m=c(11),o=c(2),h=c(4),d=(c(28),c(0)),b=function(e){var t=e.match,c=e.teamName;if(!t||!t.team1||!t.team2)return Object(d.jsx)("div",{className:"MatchDetailsCard",children:Object(d.jsx)("h2",{children:"No Matches."})});var a=c===t.team1?t.team2:t.team1,n="/teams/".concat(a),s=c.trim()===t.winner.trim();return console.log(s),Object(d.jsxs)("div",{className:s?"MatchDetailsCard win-card":"MatchDetailsCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs-section",children:"Vs"}),Object(d.jsxs)("h1",{children:[" ",Object(d.jsx)(h.b,{to:n,children:a})]}),Object(d.jsx)("h2",{className:"date-section",children:t.date}),Object(d.jsxs)("h3",{className:"venue-section",children:["@ ",t.venue]}),Object(d.jsxs)("h3",{className:"result-section",children:[t.winner," won by ",t.resultMargin," ",t.result]})]}),Object(d.jsxs)("div",{className:"innings-section",children:[Object(d.jsx)("h3",{children:"First Innings"}),Object(d.jsx)("p",{children:t.team1}),Object(d.jsx)("h3",{children:"Second Innings"}),Object(d.jsx)("p",{children:t.team2}),Object(d.jsx)("h3",{children:"Man of the match"}),Object(d.jsx)("p",{children:t.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[t.umpire1," , ",t.umpire2]})]})]})},u=(c(35),function(e){var t=e.match,c=e.teamName;if(!t)return Object(d.jsx)("div",{className:"MatchSmallCard",children:Object(d.jsx)("p",{children:"No Mathes found"})});var a=c===t.team1?t.team2:t.team1,n="/teams/".concat(a),s=c.trim()===t.winner.trim();return Object(d.jsxs)("div",{className:s?"MatchSmallCard win-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs-section",children:"Vs"}),Object(d.jsxs)("h3",{children:[" ",Object(d.jsx)(h.b,{to:n,children:a})]}),Object(d.jsxs)("p",{className:"result-section",children:[t.winner," won by ",t.resultMargin," ",t.result]})]})}),O=c(20),x=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(o.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name-label",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Win / Loss",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:" rgb(102, 37, 14)"},{title:"Wins",value:c.totalWins,color:" rgb(80, 112, 17"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{className:"latest-matches-label",children:"Latest Matches"}),Object(d.jsx)(b,{match:c.matches[0],teamName:c.teamName})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(u,{match:e,teamName:c.teamName},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsx)(h.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More>>"})})]}):Object(d.jsx)("div",{className:"TeamPage",children:Object(d.jsx)("h1",{children:"Team Not Found."})})}),f=(c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("div",{className:"YearSelector",children:Object(d.jsx)("ol",{className:"selector-list",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})})}),N=(c(38),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(o.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year "}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{className:"all-matches-for-year",children:[Object(d.jsxs)("h2",{children:[r," IPL matches of ",i]}),c.map((function(e){return Object(d.jsx)(b,{match:e,teamName:r},e.id)}))]})]})}),v=(c(39),function(e){var t=e.team;return Object(d.jsx)("div",{className:"TeamTileCard",children:Object(d.jsx)("h3",{children:Object(d.jsxs)(h.b,{to:"/teams/".concat(t.teamName),children:[" ",t.teamName," "]})})})}),p=(c(40),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"home-header-section",children:Object(d.jsx)("h1",{className:"app-name-label",children:"IPL Dashboard"})}),Object(d.jsx)("div",{className:"home-teams-section",children:c.map((function(e){return Object(d.jsx)(v,{team:e},e.id)}))})]})});var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{className:"app-home-section",path:"/",children:Object(d.jsx)(p,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.f2e4f6f4.chunk.js.map