(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},113:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(20),r=t.n(c),s=(t(92),t(6)),o=(t(93),t(94),t(58)),i=t.n(o),m=t(59),u=t.n(m),d=t(60),p=t.n(d),E=t(61),g=t.n(E),f=t(62),v=t.n(f),h=t(63),b=t.n(h),_=t(144),N=t(140),j=t(64),k=t.n(j),y=t(65),O=t.n(y),S=t(66),w=t.n(S),L=t(67),x=t.n(L),I=t(10),C=t(21),U=t(137);t(95);var F=function(){var e=I.a.auth();return e.currentUser&&l.a.createElement("div",{className:"logout"},l.a.createElement(U.a,{className:"sign-out",onClick:function(){return e.signOut()}},"Sign Out"))};var R=function(){var e=I.a.auth(),a=Object(C.a)(e),t=Object(s.a)(a,1)[0];return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement("img",{src:"/assets/logo.png",alt:""}),l.a.createElement("div",{className:"header__input"},l.a.createElement(i.a,null),l.a.createElement("input",{placeholder:"Search Facebook",type:"text"}))),l.a.createElement("div",{className:"header__center "},l.a.createElement("div",{className:"header__option--active"},l.a.createElement(u.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(p.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(g.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(v.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(b.a,{fontSize:"large"}))),l.a.createElement("div",{className:"header__right"},l.a.createElement("div",{className:"header__info"},l.a.createElement(_.a,{src:t.photoURL}),l.a.createElement("h4",null,t.displayName),l.a.createElement(F,null)),l.a.createElement(N.a,null,l.a.createElement(k.a,null)),l.a.createElement(N.a,null,l.a.createElement(O.a,null)),l.a.createElement(N.a,null,l.a.createElement(w.a,null)),l.a.createElement(N.a,null,l.a.createElement(x.a,null))))},P=t(141);t(101),t(102);var A=function(e){var a=e.title,t=e.src,n=e.Icon;return l.a.createElement("div",{className:"sidebarRow"},t&&l.a.createElement(_.a,{src:t}),n&&l.a.createElement(n,null),l.a.createElement("h4",null,a))},B=t(68),D=t.n(B),T=t(69),V=t.n(T),z=t(70),M=t.n(z),W=t(71),G=t.n(W),H=t(72),J=t.n(H),K=t(73),Y=t.n(K);var Q=function(){var e=I.a.auth(),a=Object(C.a)(e),t=Object(s.a)(a,1)[0];return l.a.createElement("div",{className:"sidebar"},l.a.createElement(A,{src:t.photoURL,title:t.displayName}),l.a.createElement(A,{Icon:D.a,title:"COVID-19 Information Center"}),l.a.createElement(A,{Icon:V.a,title:"Pages"}),l.a.createElement(A,{Icon:M.a,title:"Friends"}),l.a.createElement(A,{Icon:G.a,title:"Messenger"}),l.a.createElement(A,{Icon:J.a,title:"Marketplace"}),l.a.createElement(A,{Icon:Y.a,title:"Videos"}),l.a.createElement(A,{Icon:P.a,title:"Marketplace"}))};t(103),t(104);var X=function(e){var a=e.image,t=e.profileSrc,n=e.title;return l.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"story"},l.a.createElement(_.a,{className:"story__avatar",src:t}),l.a.createElement("h4",null,n))};t(105);var q=function(){return l.a.createElement("div",{className:"storyReel"},l.a.createElement(X,{profileSrc:"./assets/i1.webp",image:"./assets/i1.webp",title:"Adrian Ahsin"}),l.a.createElement(X,{image:"./assets/i2.jpg",profileSrc:"./assets/i2.jpg",title:"Maria"}),l.a.createElement(X,{image:"./assets/i3.jpg",profileSrc:"./assets/i3.jpg",title:"Angela"}),l.a.createElement(X,{image:"./assets/i4.jpg",profileSrc:"./assets/i4.jpg",title:"Edward Kenway"}),l.a.createElement(X,{image:"./assets/i5.jpg",profileSrc:"./assets/i5.jpg",title:"Sheuly Akter"}))},Z=(t(106),t(74)),$=t.n(Z),ee=t(75),ae=t.n(ee),te=t(76),ne=t.n(te),le=t(29),ce=le.a.initializeApp({apiKey:"AIzaSyBL4k0yBravPJftvyrK_mRs7S-nthlHL1g",authDomain:"facebook-clone-62c48.firebaseapp.com",projectId:"facebook-clone-62c48",storageBucket:"facebook-clone-62c48.appspot.com",messagingSenderId:"880464678332",appId:"1:880464678332:web:eff43aac31057a2a16afb9",measurementId:"G-BHC1XFYRTQ"}).firestore(),re=(le.a.auth(),new le.a.auth.GoogleAuthProvider,le.a.storage()),se=ce,oe=t(142),ie=t(143);function me(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var ue=Object(oe.a)(function(e){return{paper:{position:"absolute",width:500,backgroundColor:e.palette.background.paper,border:"2px solid transparent",outline:"none",boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",borderRadius:"5px"}}});var de=function(){var e=I.a.auth(),a=Object(C.a)(e),t=Object(s.a)(a,1)[0],c=Object(n.useState)(""),r=Object(s.a)(c,2),o=r[0],i=r[1],m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],p=u[1],E=e.currentUser,g=E.uid,f=E.displayName,v=E.photoURL,h=ue(),b=Object(n.useState)(me),N=Object(s.a)(b,1)[0],j=Object(n.useState)(!1),k=Object(s.a)(j,2),y=k[0],O=k[1],S=Object(n.useState)(""),w=Object(s.a)(S,2),L=(w[0],w[1],Object(n.useState)(0)),x=Object(s.a)(L,2),F=x[0],R=(x[1],Object(n.useState)("")),P=Object(s.a)(R,2),A=P[0],B=P[1],D=Object(n.useState)(""),T=Object(s.a)(D,2),V=T[0],z=T[1],M=Object(n.useState)(0),W=Object(s.a)(M,2),G=W[0],H=W[1],J=function(){O(!0)},K=function(){O(!1),B(null)};return l.a.createElement("div",{className:"messageSender"},l.a.createElement(ie.a,{open:y,onClose:K},l.a.createElement("div",{style:N,className:h.paper},l.a.createElement("form",{className:"modal__form"},l.a.createElement("div",{className:"modal__top"},l.a.createElement("h3",null,"Create Post"),l.a.createElement("div",{onClick:K,className:"top__icon"},l.a.createElement("img",{src:"./assets/cross.png",alt:""}))),l.a.createElement("div",{className:"modal__head"},l.a.createElement(_.a,{src:t.photoURL,className:"imageupload__avatar",alt:""}),l.a.createElement("p",null,f)),l.a.createElement("textarea",{className:"modal__input",type:"text",onChange:function(e){return z(e.target.value)},onClick:J,placeholder:"What's on your mind ".concat(f," ?")}),l.a.createElement("div",{className:"image__preview ".concat(A&&"show")},l.a.createElement("img",{id:"blah",alt:""}),l.a.createElement("progress",{value:G,max:"100",className:"progress ".concat(G&&"show")}),l.a.createElement("p",{className:"image__preview ".concat(G&&"show")},"Uploaded ",G,"%")),l.a.createElement("div",{className:"imageupload"},l.a.createElement("p",null,"Add to Your Post"),l.a.createElement("div",{className:"imageupload__section"},l.a.createElement("div",{onClick:function(){document.getElementsByClassName("imageFile")[0].click()},className:"upload"},l.a.createElement("img",{src:"/assets/up.png"}),l.a.createElement("input",{type:"file",className:"imageFile",onChange:function(e){console.log(e.target.files[0].name.split(".").pop()),e.target.files[0]&&B(e.target.files[0]);var a=new FileReader;a.onload=function(){document.getElementById("blah").src=a.result},e.target.files[0]&&a.readAsDataURL(e.target.files[0])}}))),l.a.createElement("img",{src:"/assets/user.png"}),l.a.createElement("img",{src:"/assets/emoji.png"}),l.a.createElement("img",{src:"/assets/location.png"}),l.a.createElement("img",{src:"/assets/video.png"}),l.a.createElement("img",{src:"/assets/dot.png"})),l.a.createElement("div",{className:"imageupload__submitButton"},l.a.createElement(U.a,{type:"submit",onClick:function(e){e.preventDefault(),A?(e.persist(),re.ref("images/".concat(null==A.name?A:A.name)).put(A).on("state_changed",function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);H(a)},function(e){console.log(e),alert(e.message)},function(){re.ref("images").child(A.name).getDownloadURL().then(function(e){se.collection("posts").add({profilePic:v,timestamp:I.a.firestore.FieldValue.serverTimestamp(),caption:V,imageUrl:e,noLikes:F,username:f}),K(),H(0),z(""),B(null)})})):(se.collection("posts").add({timestamp:I.a.firestore.FieldValue.serverTimestamp(),caption:V,imageUrl:A,noLikes:F,profilePic:v,username:f}),K(),H(0),z(""),B(null))}},"Post"))))),l.a.createElement("div",{className:"messageSender__top"},l.a.createElement(_.a,{src:t.photoURL}),l.a.createElement("form",null,l.a.createElement("input",{onClick:J,className:"messageSender__input",placeholder:"What's on your mind, ".concat(t.displayName),type:"text"}),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),""===o&&""===d?alert("Please write something or insert a image url"):se.collection("posts").add({userId:g,message:o,timestamp:I.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:d}),i(""),p("")}},"Hidden submit"))),l.a.createElement("div",{onClick:J,className:"messageSender__bottom"},l.a.createElement("div",{className:"messageSender__option"},l.a.createElement($.a,{style:{color:"red"}}),l.a.createElement("h3",null,"Live Video")),l.a.createElement("div",{className:"messageSender__option"},l.a.createElement(ae.a,{style:{color:"green"}}),l.a.createElement("h3",null,"Photo/Video")),l.a.createElement("div",{className:"messageSender__option"},l.a.createElement(ne.a,{style:{color:"orange"}}),l.a.createElement("h3",null,"Feeling/Acitivity"))))},pe=(t(109),t(77)),Ee=t.n(pe),ge=t(78),fe=t.n(ge),ve=t(79),he=t.n(ve);var be=function(e){var a=e.userId,t=e.noLikes,c=void 0===t?0:t,r=e.postId,o=e.profilePic,i=e.image,m=e.username,u=e.timestamp,d=e.message,p=le.a.auth(),E=Object(n.useState)([]),g=Object(s.a)(E,2),f=g[0],v=g[1],h=Object(n.useState)(""),b=Object(s.a)(h,2),N=b[0],j=b[1],k=Object(n.useState)("Like"),y=Object(s.a)(k,2),O=y[0],S=y[1],w=Object(n.useState)(""),L=Object(s.a)(w,2),x=L[0],I=L[1],C=p.currentUser,U=C.photoURL,F=C.displayName;Object(n.useEffect)(function(){var e;return r&&(e=se.collection("posts").doc(r).collection("comments").orderBy("timestamp","asc").onSnapshot(function(e){v(e.docs.map(function(e){return e.data()}))})),function(){e()}},[r]),Object(n.useEffect)(function(){c?(S("Liked"),I("text")):(S("Like"),I(""))},[r,a]);var R=function(e){e.preventDefault(),se.collection("posts").doc(r).collection("comments").add({text:N,photo:U,name:F,timestamp:le.a.firestore.FieldValue.serverTimestamp()}),j("")};return l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"post__top"},l.a.createElement(_.a,{src:o,className:"post__avatar"}),l.a.createElement("div",{className:"post__topinfo"},l.a.createElement("h3",null,m),l.a.createElement("p",null,new Date(null===u||void 0===u?void 0:u.toDate()).toUTCString()))),l.a.createElement("div",{className:"post__bottom"},l.a.createElement("p",null,d)),l.a.createElement("div",{className:"post__image"},i&&i.includes("mp4")?l.a.createElement("video",{src:i,style:{width:"100%"},controls:!0}):l.a.createElement("img",{src:i,alt:""})),l.a.createElement("div",{className:"like__count"},l.a.createElement("img",{src:0!==c&&c?"./assets/like.png":"",alt:""}),l.a.createElement("span",null,0!==c&&c?c:"")),l.a.createElement("div",{className:"post__options"},l.a.createElement("div",{onClick:function(e){e.preventDefault(),"Like"===O?(S("Liked"),I("text")):(S("Like"),I("")),se.collection("posts").doc(r).get().then(function(e){var t=e.data();console.log(t,"data"),"Like"===O?se.collection("posts").doc(r).collection("likes").doc(a).get().then(function(e){e.data()?console.log(e.data()):(se.collection("posts").doc(r).collection("likes").doc(a).set({likes:1}),se.collection("posts").doc(r).update({noLikes:(t.noLikes||0)+1}))}):se.collection("posts").doc(r).collection("likes").doc(a).delete().then(function(){se.collection("posts").doc(r).update({noLikes:t.noLikes-1})})})},className:"post__option"},l.a.createElement(Ee.a,{className:x}),l.a.createElement("p",{className:x},O)),l.a.createElement("div",{onClick:""===N?null:R,className:"post__option"},l.a.createElement(fe.a,null),l.a.createElement("p",null,"Comment")),l.a.createElement("div",{className:"post__option"},l.a.createElement(he.a,null),l.a.createElement("p",null,"Share")),l.a.createElement("div",{className:"post__option"},l.a.createElement(_.a,{className:"post__option__img",src:o}),l.a.createElement(P.a,null))),f.map(function(e,a){return l.a.createElement("div",{key:a,className:"comments"},l.a.createElement(_.a,{className:"comment__img",alt:"",src:e.photo}),l.a.createElement("span",{className:"container__comments"},l.a.createElement("p",null,e.name),l.a.createElement("p",null,e.text)))}),l.a.createElement("form",{onSubmit:R},l.a.createElement("div",{className:"comment__section"},l.a.createElement("div",null,l.a.createElement(_.a,{className:"comment__img",src:U})),l.a.createElement("div",{className:"comment__input"},l.a.createElement("input",{onChange:function(e){return j(e.target.value)},placeholder:"Write a public comment...",type:"text",value:N}))),l.a.createElement("input",{type:"submit",disabled:!N,className:"transparent__submit"})))};var _e=function(){var e=0,a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],r=t[1],o=I.a.auth().currentUser.uid;return Object(n.useEffect)(function(){se.collection("posts").orderBy("timestamp","desc").onSnapshot(function(e){return r(e.docs.map(function(e){return{id:e.id,data:e.data()}}))})},[]),l.a.createElement("div",{className:"feed"},l.a.createElement(q,null),l.a.createElement(de,null),c.map(function(a){return l.a.createElement(be,{userId:o,key:e++,postId:a.id,noLikes:a.data.noLikes,profilePic:a.data.profilePic,message:a.data.caption,timestamp:a.data.timestamp,username:a.data.username,image:a.data.imageUrl})}))};t(110);var Ne=function(){return l.a.createElement("div",{className:"widgets"},l.a.createElement("iframe",{title:"Facebook Widget",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBasiliskWise%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",allow:" encrypted-media"}))};t(111);var je=function(){var e=I.a.auth(),a=Object(C.a)(e);return Object(s.a)(a,1)[0],l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__logo"},l.a.createElement("img",{src:"./assets/logo.png",alt:""}),l.a.createElement("img",{src:"./assets/text-logo.png",alt:""})),l.a.createElement(U.a,{type:"submit",onClick:function(){var e=new I.a.auth.GoogleAuthProvider;I.a.auth().signInWithPopup(e).then(function(e){var a=e.user,t=a.email,n=a.displayName,l=a.phone;console.log(t,n,l,"email, name , phone"),console.log(e,"result"),se.collection("users").add({email:t,name:n,phone:void 0==l?"":l}),e.credential.accessToken;var c=e.user;console.log(c,c)}).catch(function(e){console.log(e,"error"),e.code,e.message,e.email,e.credential})}},"Sign In with gmail"))},ke=t(46),ye=t.n(ke),Oe=t(80),Se=(t(113),t(47)),we=t.n(Se),Le=(t(114),t(115),t(116),t(81));var xe=function(){var e=I.a.auth(),a=I.a.firestore(),t=Object(C.a)(e),c=(Object(s.a)(t,1)[0],Object(n.useRef)()),r=a.collection("messages"),o=r.orderBy("createdAt"),i=Object(Le.a)(o,{idField:"id"}),m=Object(s.a)(i,1)[0],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)("rotate(45deg)"),f=Object(s.a)(g,2),v=f[0],h=f[1];function b(a){var t=a.message,n=t.text,c=t.uid,r=t.photoURL,s=t.displayName,o=c===e.currentUser.uid?"sent":"received";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message ".concat(o)},l.a.createElement("img",{alt:"",src:r||"https://api.adorable.io/avatars/23/abott@adorable.png"}),l.a.createElement("div",{className:"name_chat"},l.a.createElement("div",{className:"name"},s),l.a.createElement("p",{className:"chat"},n))))}Object(n.useEffect)(function(){we()(".chat-body").slideToggle("slow")},[]);var _=e.currentUser,N=_.uid,j=_.photoURL,k=_.displayName,y=function(){var e=Object(Oe.a)(ye.a.mark(function e(a){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,r.add({text:p,createdAt:I.a.firestore.FieldValue.serverTimestamp(),uid:N,photoURL:j,displayName:k});case 3:E(""),c.current.scrollIntoView({behavior:"smooth"});case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"chat-box"},l.a.createElement("div",{className:"chat-head"},l.a.createElement("h3",null,"Chat"),l.a.createElement("div",{className:"max",onClick:function(){return h("rotate(45deg)"===v?"rotate(225deg)":"rotate(45deg)"),void we()(".chat-body").slideToggle("slow")}},l.a.createElement("div",{className:"maxi",style:{transform:v}}))),l.a.createElement("div",{className:"chat-body"},l.a.createElement("div",{className:"msg-insert"},m&&m.map(function(e){return l.a.createElement(b,{key:e.id,message:e})}),l.a.createElement("span",{ref:c})),l.a.createElement("div",{className:"chat-text"},l.a.createElement("form",{onSubmit:y},l.a.createElement("input",{value:p,onChange:function(e){return E(e.target.value)},placeholder:"send message"}),l.a.createElement("button",{type:"submit",disabled:!p},l.a.createElement("span",null,"Send"))))))};var Ie=function(){var e=I.a.auth(),a=Object(C.a)(e);return Object(s.a)(a,1)[0],e.currentUser?l.a.createElement("div",null,l.a.createElement("div",{className:"app"},l.a.createElement(R,null),l.a.createElement("div",{className:"app__body"},l.a.createElement(Q,null),l.a.createElement(_e,null),l.a.createElement(Ne,null),l.a.createElement(xe,null)))):l.a.createElement(je,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ie,null)),document.getElementById("root"))},87:function(e,a,t){e.exports=t(117)},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.5188291a.chunk.js.map