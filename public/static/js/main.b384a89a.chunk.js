(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{87:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),c=n(30),s=n.n(c),o=n(2),l=n.n(o),u=n(7),d=n(15),j=n(8),b=n.p+"static/media/speaker.36124fcd.svg",m=n.p+"static/media/off.5893ca55.svg",p=n.p+"static/media/on.f00978e4.svg";function O(){var e=Object(r.useState)("jumbotron-logo"),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!0),s=Object(d.a)(c,2),o=s[0],l=s[1],u=Object(j.d)((function(e){return e.videoReducer.isJumboTronCanPlay})),O=Object(j.c)(),h=Object(r.useRef)(null);Object(r.useEffect)((function(){window.addEventListener("scroll",g);var e=setTimeout((function(){i("jumbotron-logo resized-logo")}),4e3);return function(){clearTimeout(e),window.removeEventListener("scroll",g)}}),[]),Object(r.useEffect)((function(){u||h.current.pause()}),[u]);var g=function(){window.pageYOffset>400&&(O({type:"TOGGLE_JUMBOTRON_VIDEO",isJumboTronCanPlay:!1}),h.current.pause())};return Object(a.jsxs)("section",{className:"jumbotron-container",onClick:function(){h.current.paused?(O({type:"TOGGLE_JUMBOTRON_VIDEO",isJumboTronCanPlay:!0}),h.current.play()):(O({type:"TOGGLE_JUMBOTRON_VIDEO",isJumboTronCanPlay:!1}),h.current.pause())},children:[Object(a.jsxs)("div",{className:"mute-btn-container",onClick:function(e){return function(e){e.stopPropagation(),l(!o),h.current.muted=!h.current.muted}(e)},children:[Object(a.jsx)("img",{src:b,alt:"toggle-mute"}),Object(a.jsx)("img",{src:o?m:p,alt:""})]}),Object(a.jsxs)("div",{className:"video-container",children:[Object(a.jsx)("div",{className:n,children:Object(a.jsx)("img",{src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1604490766/AAAABcxoPeN-DpwsPN_8-2FgylY9Qcke_I3SPAc8AtGzb-XiQxoWFGRocQ_LsTY7210f-xKKMr0DKMurSA5L84AHRrY2PSEEKDIm92fglsbdsFLd5INW09Mu0vCr05WOoDPDkchhwzDvUnBlPLzGFrGo31x-50dgKRWWdP8zZfl3KO4BEGgJRpd6nGbG7d3d0iA6UQRr0IUwWXA_xq6uso.png",alt:""})}),Object(a.jsx)("video",{autoPlay:!0,muted:!0,ref:h,children:Object(a.jsx)("source",{src:"https://res.cloudinary.com/da0i9wy5t/video/upload/v1603972997/David_Attenborough__A_Life_on_Our_Planet___Official_Trailer___Netflix_gw0wrf.mp4",type:"video/mp4"})}),Object(a.jsx)("div",{className:"jumbotron-grey-gradient"}),Object(a.jsx)("div",{className:"jumbotron-grey-bg"})]})]})}var h=n(51),g="/api/",v=n.n(h).a.create({withCredentials:!0}),f=function(e,t){return y(e,"GET",t)},x=function(e,t){return y(e,"POST",t)};function y(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(t){var n,a,r,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"get",a=i.length>2?i[2]:void 0,e.prev=2,e.next=5,v({url:"".concat(g).concat(t),method:n,data:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(a)),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&window.location.assign("/#/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=[{id:"c101",name:"New Releases"},{id:"c102",name:"Action"},{id:"c103",name:"Drama"}];function S(){return(S=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("movie");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _={query:function(e){return N.apply(this,arguments)},categoryList:k,getMovieById:function(e){return E.apply(this,arguments)},getMoviePreviews:function(){return S.apply(this,arguments)}};function R(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t({type:"RESET_MOVIE"}),e.next=8;break;case 4:throw e.prev=4,e.t0=e.catch(0),console.log(e.t0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}()}var C=n(14),T=n(5),U=n(12),I=n.p+"static/media/thumbsUp.46731bd4.svg",P=n.p+"static/media/thumbsDown.b112ce99.svg",L=n.p+"static/media/downArrow.720f6c4d.svg",M=function(){return Object(a.jsxs)("div",{className:"icons-container",children:[Object(a.jsxs)("div",{className:"thumbs-container",children:[Object(a.jsx)("div",{className:"icon-container",children:Object(a.jsx)("img",{src:P,alt:""})}),Object(a.jsx)("div",{className:"icon-container",children:Object(a.jsx)("img",{src:I,alt:""})})]}),Object(a.jsxs)("div",{className:"more-info-container",children:[Object(a.jsx)("h4",{children:"More info"}),Object(a.jsxs)("div",{className:"icon-container arrow",children:[Object(a.jsx)("img",{src:L,alt:""})," "]})]})]})},G=function(e){return Object(a.jsxs)("div",{className:"controls-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h6",{children:e.name})}),Object(a.jsx)("div",{className:"inner-controls-container",children:Object(a.jsx)(M,{})}),Object(a.jsx)("div",{className:"genres-container",children:e.genre.map((function(t,n){return n===e.genre.length-1?Object(a.jsx)("p",{children:t},n):Object(a.jsxs)("p",{children:[t,Object(a.jsx)("span",{className:"middle-dot",children:"\xb7"})]},n)}))})]})},D=n(11),A=n.p+"static/media/modalArrow.20d3ba61.svg";var J={login:function(e){return V.apply(this,arguments)},signup:function(e){return F.apply(this,arguments)},logOut:function(){return B.apply(this,arguments)},googleSignup:function(e){return H.apply(this,arguments)}};function V(){return(V=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/login",t);case 2:return n=e.sent,sessionStorage.setItem("USER",JSON.stringify(n)),e.abrupt("return",q(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/signup",t);case 2:return n=e.sent,sessionStorage.setItem("USER",JSON.stringify(n)),e.abrupt("return",q(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/logout");case 2:localStorage.clear(),sessionStorage.clear();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("google/signup",t);case 2:return n=e.sent,sessionStorage.setItem("USER",JSON.stringify(n)),e.abrupt("return",q(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return localStorage.setItem("USER",JSON.stringify(e)),e}function W(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.signup(e);case 3:a=t.sent,n({type:"SET_USER",loggedInUser:a}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0,"error signing up"),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function X(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.logOut();case 3:t({type:"SET_USER",loggedInUser:null}),e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),console.log("cannot logout",e.t0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}function z(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.login(e);case 3:a=t.sent,n({type:"SET_USER",loggedInUser:a}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log("cannot login",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function Y(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.googleSignup(e);case 3:a=t.sent,n({type:"SET_USER",loggedInUser:a}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log("error on google signup",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}var Z=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),i=n[0],c=n[1],s=Object(j.d)((function(e){return e.userReducer})).loggedInUser,o=Object(j.c)(),l=Object(U.f)();return Object(a.jsxs)(T.b.div,{className:"avatar-container",onHoverStart:function(){return c(!0)},onHoverEnd:function(){return c(!1)},children:[Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"avatar-img-container",children:Object(a.jsx)("img",{src:e.loggedInUser.imgUrl,alt:""})})}),i&&Object(a.jsxs)(T.b.div,{animate:"animate",exit:"exit",initial:"initial",variants:{animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},initial:{opacity:0}},className:"arrow-container",children:[Object(a.jsx)("img",{src:A,alt:""}),Object(a.jsx)("div",{className:"avatar-modal",children:Object(a.jsxs)("div",{className:"avatar-modal-el-container",children:[Object(a.jsxs)("h4",{children:["Hi ",s.fullName]}),Object(a.jsxs)("div",{className:"logout-container",children:[Object(a.jsx)("div",{className:"line-through"}),Object(a.jsx)("button",{onClick:function(){if(s)try{o(X()),l.replace("/login")}catch(e){console.log("there was error loging out",e)}},children:"Log out"})]})]})})]})]})},K=n.p+"static/media/logo.673ba02a.svg";function Q(){var e=Object(r.useState)("navbar"),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(j.d)((function(e){return e.userReducer})).loggedInUser;Object(r.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]);var s=function(){window.pageYOffset>=5?i("navbar bg"):i("navbar")};return Object(a.jsxs)("nav",{className:n,children:[Object(a.jsxs)("div",{className:"logo-links-container",children:[Object(a.jsx)(D.b,{to:"/",children:Object(a.jsx)("img",{src:K,alt:"logo",className:"logo"})}),Object(a.jsx)(D.b,{to:"/browse",children:"Home"}),Object(a.jsx)(D.b,{to:"/about",children:"About"})]}),Object(a.jsx)("div",{className:"search-profile-contianer",children:c?Object(a.jsx)(Z,{loggedInUser:c}):Object(a.jsx)(D.b,{to:"/login",children:"Login & Signup"})})]})}var $,ee=n.p+"static/media/exit.849cbe6e.svg",te={loadMovie:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.getMovieById(e);case 3:a=t.sent,n({type:"SET_MOVIE",currentMovie:a}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},ne=Object(j.b)((function(e){return{currentMovie:e.videoReducer.currentMovie,isJumboTronCanPlay:e.videoReducer.isJumboTronCanPlay}}),te)((function(e){var t=Object(U.h)().id,n=Object(r.useRef)(null),c=Object(j.c)(),s=Object(U.f)();Object(r.useEffect)((function(){return o(),c({type:"TOGGLE_JUMBOTRON_VIDEO",isJumboTronCanPlay:!1}),function(){c({type:"TOGGLE_JUMBOTRON_VIDEO",isJumboTronCanPlay:!0})}}),[]);var o=function(){var n=Object(u.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.loadMovie(t);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("err in FE",n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),d=[.6,.05,.01,1],b={animate:{scale:1,opacity:1,transition:{duration:.55,ease:d}},initial:{scale:.75,opacity:0},exit:{scale:0,opacity:0,transition:{duration:.5,ease:d}}};return Object(a.jsx)(i.a.Fragment,{children:e.currentMovie&&Object(a.jsxs)(T.b.div,{animate:"animate",initial:"initial",exit:"exit",variants:b,className:"details-inner-container",children:[Object(a.jsxs)(T.b.div,{className:"details-video-container",onClick:function(){n.current.paused?n.current.play():n.current.pause()},children:[Object(a.jsx)("div",{className:"details-exit-btn",onClick:function(e){e.stopPropagation(),c(R()),s.push("/browse")},children:Object(a.jsx)("img",{src:ee,alt:"exit"})}),Object(a.jsx)(T.b.video,{autoPlay:!0,className:"details-video",ref:n,children:Object(a.jsx)("source",{src:e.currentMovie.trailerURL})}),Object(a.jsx)(T.b.div,{className:"grey-gradient"}),Object(a.jsx)(T.b.div,{className:"grey-bg"})]}),Object(a.jsxs)(T.b.div,{className:"details-text-container",children:[Object(a.jsx)(T.b.h2,{children:e.currentMovie.name}),Object(a.jsx)("div",{className:"genres-container",style:{fontSize:"1rem",marginBottom:"1rem"},children:e.currentMovie.genre.map((function(t,n){return n===e.currentMovie.genre.length-1?Object(a.jsx)("p",{children:t},n):Object(a.jsxs)("p",{children:[t,Object(a.jsx)("span",{className:"middle-dot",children:"\xb7"})]},n)}))}),Object(a.jsx)(T.b.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum incidunt odio ad obcaecati necessitatibus quam officia. Deserunt eos, ab accusamus sapiente repellendus itaque dicta corrupti voluptatem ipsa, facere accusantium!"})]})]})})}));function ae(e){var t=Object(r.useState)(null),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(""),l=Object(d.a)(o,2),u=l[0],b=l[1],m=(Object(j.d)((function(e){return e.videoReducer.isJumboTronCanPlay})),Object(j.c)()),p=Object(U.f)(),O=Object(r.useRef)(null);Object(r.useEffect)((function(){c&&h()}),[c]);var h=function(){setTimeout((function(){c&&O.current&&(b("fade-out"),O.current.play())}),500)},g=function(){s(null),b(""),clearTimeout($)},v=function(t){t.stopPropagation(),g(),p.push("/browse/".concat(e.id))},f=[.6,.05,.01,1],x={animate:{opacity:1,scale:1.65,backgroundColor:"#141414",transition:{duration:.35,ease:f}},initial:{scale:1,opacity:1,originX:.5,originY:.75,top:0,left:0},exit:{scale:1,opacity:1,top:0,left:0,backgroundColor:"#14141400",transition:{duration:.35,ease:f}}},y={animateControls:{opacity:1,backgroundColor:"#141414",borderRadius:"0.35em",transition:{duration:.35,ease:f}},initialControls:{opacity:0,borderRadius:"0.35em"},exitControls:{opacity:0,backgroundColor:"#14141400",transition:{duration:.3,ease:f}}};return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(T.b.div,{className:"movie-container",onHoverStart:function(){return t=e.id,void($=setTimeout((function(){s(t),m({type:"TOGGLE_JUMBOTRON_VIDEO",isJumboTronCanPlay:!1})}),400));var t},onHoverEnd:function(){return g()},onClick:function(e){return v(e)},children:[Object(a.jsx)(T.b.img,{src:e.imgURL,alt:e.name}),Object(a.jsx)(T.a,{exitBeforeEnter:!0,children:c&&Object(a.jsxs)(T.b.div,{initial:"initial",animate:"animate",exit:"exit",variants:x,className:"movie-container trailer",onClick:function(e){return v(e)},children:[Object(a.jsx)(T.b.div,{className:"img-vid-container",children:Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("img",{className:"poster-img ".concat(u),src:e.imgURL,alt:""}),Object(a.jsx)(T.b.video,{ref:O,children:Object(a.jsx)("source",{src:e.trailerURL})})]})}),Object(a.jsx)(T.b.div,{initial:"initialControls",animate:"animateControls",exit:"exitControls",variants:y,children:Object(a.jsx)(G,{genre:e.genre,name:e.name})})]})})]})})}var re=n(96),ie=n(93),ce=n(94),se=n(97),oe=n(95);n(83),n(84),n(85),n(86);function le(e){var t=Object(j.c)(),n=Object(j.d)((function(e){return e.videoReducer})).movies,i=Object(r.useState)("movies-container"),c=Object(d.a)(i,2),s=c[0],o=c[1];function b(){return(b=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getMoviePreviews();case 3:n=e.sent,t({type:"SET_MOVIES",movies:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"error fetching movies");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]);return Object(a.jsxs)("section",{className:"list-container",children:[Object(a.jsx)("h2",{children:e.name}),Object(a.jsx)(T.b.div,{className:s,onHoverStart:function(){return o("movies-container hovering")},onHoverEnd:function(){return o("movies-container")},children:n.length&&Object(a.jsx)(se.a,Object(C.a)(Object(C.a)({className:"swiper-container"},{spaceBetween:3,slidesPerView:6,slidesPerGroup:6,speed:650,navigation:!0,loop:!0,breakpoints:{1400:{slidesPerView:6,slidesPerGroup:6},1096:{slidesPerView:5,slidesPerGroup:5},800:{slidesPerView:4,slidesPerGroup:4},500:{slidesPerView:3,slidesPerGroup:3},1:{slidesPerView:2,slidesPerGroup:2}}}),{},{onSwiper:function(t){1===e.idx&&t.slideToLoop(7,0,!1),2===e.idx&&t.slideToLoop(13,0,!1)},children:n.map((function(e,t){return Object(a.jsx)(oe.a,{children:Object(a.jsx)(ae,{id:e._id,name:e.name,imgURL:e.imgURL,genre:e.genre,trailerURL:e.trailerURL},e._id)},e._id)}))}))})]})}re.a.use([ie.a,ce.a]);var ue=function(){return Object(a.jsxs)("section",{className:"footer-container",children:[Object(a.jsx)("div",{className:"footer-divider"}),Object(a.jsxs)("div",{className:"inner-footer-contianer",children:[Object(a.jsx)("h4",{children:"This demo site was developed with \u2764\ufe0f by Daniel Dante"}),Object(a.jsx)("p",{children:"Using React, Redux, Sass, Node, Express, Framer-Motion, Swiper js, Google OAuth, Formik"}),Object(a.jsxs)("div",{className:"footer-links-container",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("a",{target:"blank",href:"https://www.linkedin.com/in/daniel-dante-61889b184/",children:[Object(a.jsx)("img",{style:{width:"25%",marginRight:"1rem"},src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1606747720/white-linkedin-icon-transparent-background-28_n5l9wn.png",alt:""}),Object(a.jsx)("p",{children:"Linkedin"})," "]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("a",{target:"blank",href:"https://github.com/xXDaniel123",children:[Object(a.jsx)("img",{style:{width:"25%",marginRight:"1rem"},src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1606747481/github-icon-white-6_lajeqf.png",alt:""}),Object(a.jsx)("p",{children:"Github"})]})})]})]})]})};function de(){var e=Object(j.d)((function(e){return e.videoReducer})),t=e.categories,n=e.currentMovie,c=Object(j.c)(),s=Object(U.f)();function o(){return(o=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.query();case 3:t=e.sent,c({type:"SET_CATEGORIES",categories:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"error fetching categories");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]);return Object(a.jsxs)(T.b.div,{className:"app-container",exit:"exit",animate:"animate",initial:"initial",variants:{animate:{opacity:1,y:0},exit:{opacity:0},initial:{opacity:0,y:30}},transition:{duration:.45,ease:"easeOut",delay:.25},children:[t.length?Object(a.jsxs)(i.a.Fragment,{children:[n&&Object(a.jsx)("div",{className:"screen",onClick:function(){return c(R()),void s.push("/browse")}}),Object(a.jsx)(O,{}),Object(a.jsx)(T.b.section,{className:"categories",exit:"exit",animate:"animate",initial:"initial",transition:{duration:.5,delay:.25,ease:"easeOut"},children:t.map((function(e,t){return Object(a.jsx)(le,{idx:t,name:e.name},e.id)}))}),Object(a.jsx)(ue,{})]}):Object(a.jsx)("h4",{children:"loading..."}),Object(a.jsx)(U.a,{path:"/browse/:id",component:ne})]})}n(87);var je=function(){var e={animate:{opacity:1,y:70},initial:{opacity:0,y:120}};return Object(a.jsx)(T.b.div,{animate:"animate",initial:"initial",variants:e,transition:{duration:.35,ease:"easeOut"},children:Object(a.jsxs)("div",{className:"inner-footer-contianer about-container",children:[Object(a.jsx)(T.b.h4,{animate:"animate",initial:"initial",variants:e,transition:{duration:.4,ease:"easeOut",delay:.2},children:"   This demo site was developed with \u2764\ufe0f by Daniel Dante"}),Object(a.jsx)(T.b.p,{animate:"animate",initial:"initial",variants:e,transition:{duration:.45,ease:"easeOut",delay:.3},children:"Using React, Redux, Sass, Node, Express, Framer-Motion, Swiper js, Google OAuth, MongoDB, Formik"}),Object(a.jsxs)(T.b.div,{className:"footer-links-container",animate:"animate",initial:"initial",variants:e,transition:{duration:.45,ease:"easeOut",delay:.42},children:[Object(a.jsx)("div",{children:Object(a.jsxs)("a",{target:"blank",href:"https://www.linkedin.com/in/daniel-dante-61889b184/",children:[Object(a.jsx)("img",{style:{width:"25%",marginRight:"1rem"},src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1606747720/white-linkedin-icon-transparent-background-28_n5l9wn.png",alt:""}),Object(a.jsx)("p",{children:"Linkedin"})," "]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("a",{target:"blank",href:"https://github.com/xXDaniel123",children:[Object(a.jsx)("img",{style:{width:"25%",marginRight:"1rem"},src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1606747481/github-icon-white-6_lajeqf.png",alt:""}),Object(a.jsx)("p",{children:"Github"})]})})]})]})})},be=n(32),me=n(40),pe=n(54),Oe=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)("signup"),o=Object(d.a)(s,2),b=o[0],m=o[1],p=Object(r.useState)({firstName:"",lastName:"",email:"",password:""}),O=Object(d.a)(p,2),h=O[0],g=O[1],v=Object(U.f)(),f=Object(j.c)(),x=function(e){var t=e.target;c(!1);var n=t.value.replace(/\s(?=\s)/g,"");g((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(be.a)({},t.name,n))}))},y=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n={email:h.email.trim(),fullName:h.firstName.trim()+" "+h.lastName.trim(),password:h.password}).email&&h.firstName.trim()&&h.lastName.trim()&&n.password){e.next=5;break}return c(!0),e.abrupt("return");case 5:return e.prev=5,e.next=8,f(W(n));case 8:v.replace("/browse"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),c(!0);case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c(!1),(n={email:h.email.trim(),password:h.password.trim()}).email&&n.password){e.next=6;break}return c(!0),e.abrupt("return");case 6:return e.prev=6,e.next=9,f(z(n));case 9:v.replace("/browse"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),c(!0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(Y(t));case 3:v.replace("/browse"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c(!0),console.log("error on front end");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsx)(D.b,{to:"/",children:Object(a.jsx)("img",{src:K,alt:"logo",className:"logo"})}),Object(a.jsxs)("div",{className:"background-container",children:[Object(a.jsx)("div",{className:"black-screen"}),Object(a.jsx)("img",{src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1605007211/hero_image_lnjtd8.jpg",alt:""})]}),Object(a.jsx)(T.b.div,{className:"form-outer-container",exit:"exit",animate:"animate",initial:"initial",variants:{animate:{opacity:1,y:0},exit:{opacity:0,y:24},initial:{opacity:0,y:24}},transition:{duration:.4},children:Object(a.jsxs)("div",{className:"form-container",children:["signup"===b&&Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(me.a,{validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:y,children:function(e){var t=e.isSubmitting;return Object(a.jsxs)("form",{className:"inner-form-container",onSubmit:y,children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsx)("input",{className:"field",type:"text",name:"firstName",onChange:x,placeholder:"First Name",autoComplete:"off"}),Object(a.jsx)("input",{className:"field",type:"text",name:"lastName",onChange:x,placeholder:"Last Name",autoComplete:"off"}),Object(a.jsx)("input",{className:"field",type:"email",name:"email",onChange:x,placeholder:"Email address",autoComplete:"off"}),Object(a.jsx)("input",{className:"field",type:"password",name:"password",onChange:x,placeholder:"Password",autoComplete:"off"}),Object(a.jsx)("button",{type:"submit",disabled:t,children:"Sign Up"})]})}})}),"login"===b&&Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(me.a,{validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:w,children:function(e){var t=e.isSubmitting;return Object(a.jsxs)("form",{className:"inner-form-container",onSubmit:w,children:[Object(a.jsx)("h1",{children:"Log In"}),Object(a.jsx)("input",{className:"field",type:"email",name:"email",onChange:x,placeholder:"Email address",autoComplete:"off"}),Object(a.jsx)("input",{className:"field",type:"password",name:"password",onChange:x,placeholder:"Password",autoComplete:"off"}),Object(a.jsx)("button",{type:"submit",disabled:t,children:"Log in"})]})}})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("h4",{children:"or"}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"google-login-btn",children:Object(a.jsx)(pe.GoogleLogin,{clientId:"168447752977-topi06sp3n60pk37e8j5dg91lnjophvi.apps.googleusercontent.com",buttonText:"signup"===b?"Sign up with Google":"Log in with google",onSuccess:N,onFailure:function(e){c(!0)},cookiePolicy:"single_host_origin",isSignedIn:!1})}),n&&Object(a.jsxs)("div",{className:"error-container",children:["Something went wrong... ",Object(a.jsx)("br",{}),"Check the details and try again?"]}),Object(a.jsx)("div",{className:"toggle-signup-mode",children:"signup"===b?Object(a.jsxs)("div",{children:["Already user?",Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){return m("login")},children:"Login"})]}):Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return m("signup")},children:"Sign up"})})})]})})]})},he=function(){var e={animate:{opacity:1,y:0},initial:{opacity:0,y:70}};return Object(a.jsxs)("div",{className:"welcome-page-container",children:[Object(a.jsxs)("div",{className:"background-container",children:[Object(a.jsx)("div",{className:"black-screen mobile-black-screen"}),Object(a.jsx)("img",{src:"https://res.cloudinary.com/da0i9wy5t/image/upload/v1605007211/hero_image_lnjtd8.jpg",alt:""})]}),Object(a.jsxs)(T.b.div,{className:"directions-container",animate:"animate",initial:"initial",variants:e,transition:{duration:.4,ease:"easeOut"},children:[Object(a.jsx)(T.b.img,{animate:"animate",initial:"initial",variants:e,transition:{duration:.4,ease:"easeOut",delay:.15},style:{minWidth:"10rem"},src:K,alt:"logo"}),Object(a.jsx)(T.b.h2,{animate:"animate",initial:"initial",variants:e,transition:{duration:.4,ease:"easeOut",delay:.35},style:{lineHeight:1.4,padding:"0 10vw"},children:"Welcome to my Netflix Clone, MOVIFY"}),Object(a.jsxs)(T.b.div,{animate:"animate",initial:"initial",variants:e,transition:{duration:.4,ease:"easeOut",delay:.425},className:"directions-buttons-container",children:[Object(a.jsx)(D.b,{to:"browse",children:Object(a.jsx)("button",{children:"Enter as Guest"})}),Object(a.jsx)(D.b,{to:"login",children:Object(a.jsx)("button",{children:"login & Signup"})})]})]}),Object(a.jsx)("div",{className:"black-gradient",style:{zIndex:-1}})]})},ge=n.p+"static/media/hamburger.e0d04c19.svg",ve=function(e){return Object(a.jsxs)("nav",{className:"navbar-mobile",style:{backgroundColor:e.isDrawerShown?"#020202":"#0000004f"},children:[Object(a.jsx)("img",{src:ge,alt:"",onClick:e.toggleDrawer}),Object(a.jsx)("img",{src:K,alt:"logo"})]})},fe=n.p+"static/media/rightArrow.9996f612.svg",xe=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(j.d)((function(e){return e.userReducer})).loggedInUser,o=Object(j.c)(),l=Object(U.f)();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(ve,{toggleDrawer:function(){c(!n)},isDrawerShown:n}),Object(a.jsx)("div",{className:"nav-drawer",style:{transform:n?"translateX(0%)":"translateX(-100%)",visibility:n?"visible":"hidden"},children:Object(a.jsxs)("div",{className:"drawer-links-container",children:[s?Object(a.jsxs)("div",{className:"navbar-avatar-container",children:[Object(a.jsx)("img",{src:s.imgUrl,alt:""}),Object(a.jsx)("h4",{children:s.fullName}),Object(a.jsx)("button",{onClick:function(){if(s)try{o(X()),l.replace("/login")}catch(e){console.log("there was error loging out",e)}},children:"Log out"})]}):Object(a.jsxs)(D.b,{to:"/login",className:"login-drawer-link",onClick:function(){return c(!1)},children:["Login & Signup",Object(a.jsx)("img",{src:fe,alt:""})]}),Object(a.jsx)("div",{className:"drwer-divider"}),Object(a.jsx)(D.c,{to:"/browse",activeClassName:"active-link",onClick:function(){return c(!1)},children:"Home"}),Object(a.jsx)(D.c,{to:"/about",activeClassName:"active-link",onClick:function(){return c(!1)},children:"About"}),Object(a.jsx)(D.c,{exact:!0,to:"/",activeClassName:"active-link",onClick:function(){return c(!1)},children:"Welcome"})]})}),Object(a.jsx)("div",{className:"mobile-black-screen",onClick:function(){return c(!1)},style:{visibility:n?"visible":"hidden",opacity:n?"1":"0"}})]})};var ye=function(){var e=Object(U.g)(),t=Object(j.d)((function(e){return e.videoReducer.currentMovie}));return Object(r.useEffect)((function(){t?document.querySelector("html").classList.add("disable-scroll"):document.querySelector("html").classList.remove("disable-scroll")}),[t]),Object(a.jsxs)(i.a.Fragment,{children:["/login"!==e.pathname&&"/"!==e.pathname&&Object(a.jsx)(Q,{}),"/login"!==e.pathname&&"/"!==e.pathname&&Object(a.jsx)(xe,{}),Object(a.jsx)(T.a,{exitBeforeEnter:!0,children:Object(a.jsxs)(U.c,{children:[Object(a.jsx)(U.a,{path:"/about",component:je}),Object(a.jsx)(U.a,{path:"/browse",component:de}),Object(a.jsx)(U.a,{path:"/login",component:Oe}),Object(a.jsx)(U.a,{path:"/",component:he})]})})]})},we=n(25),Ne=n(55),ke={categories:[],movies:[],currentMovie:null,isJumboTronCanPlay:!0};var Se={loggedInUser:sessionStorage.USER?JSON.parse(sessionStorage.USER):null};var Ee=Object(we.c)({videoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return Object(C.a)(Object(C.a)({},e),{},{categories:t.categories});case"SET_MOVIES":return Object(C.a)(Object(C.a)({},e),{},{movies:t.movies});case"SET_MOVIE":return Object(C.a)(Object(C.a)({},e),{},{currentMovie:t.currentMovie});case"RESET_MOVIE":return Object(C.a)(Object(C.a)({},e),{},{currentMovie:null});case"TOGGLE_JUMBOTRON_VIDEO":return Object(C.a)(Object(C.a)({},e),{},{isJumboTronCanPlay:t.isJumboTronCanPlay});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{loggedInUser:t.loggedInUser});default:return e}}}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Re=Object(we.e)(Ee,_e(Object(we.a)(Ne.a)));s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(j.a,{store:Re,children:Object(a.jsx)(D.a,{children:Object(a.jsx)(ye,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.b384a89a.chunk.js.map