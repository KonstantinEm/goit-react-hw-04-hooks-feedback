(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={status:"Statistics_status__3IbHW",good:"Statistics_good__2HX5O",neutral:"Statistics_neutral__lvOBy",bad:"Statistics_bad__3g1rH",items:"Statistics_items__2OJiU",positive:"Statistics_positive__MA4fj"}},,function(e,t,a){e.exports={feedbackBtn:"FeedbackOptions_feedbackBtn__3Qj3A"}},,,function(e,t,a){e.exports={title:"Section_title__1mlx-"}},function(e,t,a){e.exports={message:"Notification_message__3p0NM"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(6),i=a.n(n),o=(a(13),a(3)),r=a(7),b=a.n(r),j=a(0),d=function(e){var t=e.title,a=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:b.a.title,children:t}),a]})},l=a(2),u=a.n(l),O=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,n=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:u.a.status,children:[Object(j.jsxs)("p",{className:u.a.good,children:["Good: ",t]}),Object(j.jsxs)("p",{className:u.a.neutral,children:["Neutral: ",a]}),Object(j.jsxs)("p",{className:u.a.bad,children:["Bad: ",c]})]}),Object(j.jsxs)("p",{className:u.a.items,children:["Total: ",s]}),Object(j.jsxs)("p",{className:u.a.positive,children:["Positive feedback: ",n,"%",Object(j.jsxs)("progress",{max:"100",value:n,children:["Positive feedback: ",n," %"]})]})]})},f=a(4),m=a.n(f),x=function(e){var t=e.onLeaveFeedback;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:m.a.feedbackBtn,type:"button",name:"good",onClick:t,children:"Good"}),Object(j.jsx)("button",{className:m.a.feedbackBtn,type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(j.jsx)("button",{className:m.a.feedbackBtn,type:"button",name:"bad",onClick:t,children:"Bad"})]})},h=a(8),_=a.n(h),g=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{className:_.a.message,children:t})})};function p(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(o.a)(n,2),r=i[0],b=i[1],l=Object(c.useState)(0),u=Object(o.a)(l,2),f=u[0],m=u[1],h=Object(c.useState)(0),_=Object(o.a)(h,2),p=_[0],k=_[1],v=Object(c.useState)(""),N=Object(o.a)(v,2),S=N[0],B=N[1];return Object(c.useEffect)((function(){k(a+r+f)}),[a,r,f]),Object(c.useEffect)((function(){B("".concat((a/p*100).toFixed(2)))}),[a,p]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{title:"Please leave feedback",children:Object(j.jsx)(x,{onLeaveFeedback:function(e){switch(e.target.name){case"good":s((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":m((function(e){return e+1}))}}})}),0===p?Object(j.jsx)(g,{message:"No feedback given"}):Object(j.jsx)(d,{title:"Statistics",children:Object(j.jsx)(O,{good:a,neutral:r,bad:f,total:p,positivePercentage:S})})]})}i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.74ac5a36.chunk.js.map