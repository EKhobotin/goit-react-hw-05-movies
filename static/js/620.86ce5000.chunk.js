"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{81:function(n,e,t){t.d(e,{HI:function(){return u},IQ:function(){return c},Jh:function(){return f},Od:function(){return h},gH:function(){return l}});var r=t(861),a=t(757),i=t.n(a),s=t(294).Z.create({baseURL:"https://api.themoviedb.org",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM1MzIzZTE0NTNkYTg1ZGE4ZGZjYTBhYTE4ZjJmOCIsInN1YiI6IjY1OGFhNTJhMDcyMTY2NjcyOWE2ZjY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9S3WjV4UjaEJoJz6OptdDBIODLhE2U9ptkeW9OXTOr4"},params:{api_key:"cf35323e1453da85da8dfca0aa18f2f8"}});function c(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/3/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/3/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/3/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/3/search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/3/trending/all/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},620:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,i,s,c,o,u,p,f,d,l=t(861),x=t(439),h=t(757),m=t.n(h),v=t(168),Z=t(924),g=Z.ZP.button(r||(r=(0,v.Z)(["\n  background-color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  color: #000000;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  padding: 4px;\n  text-align: center;\n"]))),j=t(686),y=t(791),b=t(137),w=t(689),k=t(87),I=Z.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 10px;\n"]))),J=Z.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),O=Z.ZP.img(s||(s=(0,v.Z)(["\n  padding: 10px;\n"]))),z=Z.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n"]))),P=Z.ZP.h2(o||(o=(0,v.Z)(["\n  margin-bottom: 40px;\n  margin-top: 40px;\n  text-transform: uppercase;\n  font-size: 24px;\n  font-weight: 700;\n"]))),T=Z.ZP.h4(u||(u=(0,v.Z)(["\n  margin-bottom: 40px;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 500;\n"]))),C=Z.ZP.h4(p||(p=(0,v.Z)(["\n  margin-bottom: 40px;\n  font-size: 16px;\n  font-weight: 400;\n"]))),N=Z.ZP.div(f||(f=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  margin: 0 auto;\n"]))),Y=(0,Z.ZP)(k.OL)(d||(d=(0,v.Z)(["\n  padding: 5px;\n  border: 1px solid #000000;\n  border-radius: 5 px;\n"]))),E=t(81),_=t(184),B=function(){var n=(0,w.UO)().movieId,e=(0,y.useState)(null),t=(0,x.Z)(e,2),r=t[0],a=t[1],i=(0,y.useState)(!1),s=(0,x.Z)(i,2),c=s[0],o=s[1],u=(0,w.s0)(),p=(0,w.TH)();return(0,y.useEffect)((function(){function e(){return(e=(0,l.Z)(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,(0,E.HI)(n);case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j.Notify.failure(e.t0.message);case 11:return e.prev=11,o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,_.jsxs)(_.Fragment,{children:[c&&(0,_.jsx)(b.Bb,{}),(0,_.jsx)(g,{onClick:function(){var n;return u(null!==(n=p.state)&&void 0!==n?n:"/movies")},children:"BACK"}),r&&(0,_.jsxs)(I,{children:[(0,_.jsxs)(J,{children:[(0,_.jsx)(O,{src:"https://image.tmdb.org/t/p/original/".concat(r.poster_path),alt:r.title,width:"300"}),(0,_.jsxs)(z,{children:[(0,_.jsx)(P,{children:r.title}),(0,_.jsxs)(C,{children:["User score - ",r.vote_average.toFixed(1),"/10"]}),(0,_.jsx)(T,{children:"Overview"}),(0,_.jsx)(C,{children:r.overview}),(0,_.jsx)(T,{children:"Genres"}),(0,_.jsx)(C,{children:r.genres.map((function(n){return n.name+" "}))})]})]}),(0,_.jsxs)(N,{children:[(0,_.jsx)(Y,{to:"cast",state:p.state,children:"Cast"}),(0,_.jsx)(Y,{to:"reviews",state:p.state,children:"Reviews"})]}),(0,_.jsx)(w.j3,{})]})]})}}}]);
//# sourceMappingURL=620.86ce5000.chunk.js.map