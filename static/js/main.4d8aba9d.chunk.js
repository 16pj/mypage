(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{33:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),a=n(7),o=n(6),s=n(5),i=n(0),l=n.n(i),j=n(16),b=n.n(j),u=n(12),h=n(4),d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).changeColor=function(){r.setState({color:"Purple"})},r.state={color:"Black",name:"Banner",model:"WORK-IN-PROGRESS"},r}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({color:"Brown"})}),3e3)}},{key:"render",value:function(){return Object(r.jsxs)("div",{style:{color:this.state.color},children:[Object(r.jsxs)("h3",{children:[" Hi! I am a ",this.state.color," colored ",this.state.model," ",this.state.name]}),Object(r.jsx)("button",{type:"button",onClick:this.changeColor,children:"Change Color"})]})}}]),n}(l.a.Component);var O=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).changeColor=function(){r.setState({color:"Orange"})},r.state={color:"Blue",name:"Mustang",model:"Ford"},r}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({color:"Purple"})}),3e3)}},{key:"render",value:function(){return Object(r.jsxs)("div",{style:{color:this.state.color},children:[Object(r.jsxs)("h3",{children:[" Hi",(e=2,t=3,e+t),"! I am a ",this.state.color," colored ",this.state.model," ",this.state.name," Car!"]}),Object(r.jsx)("button",{type:"button",onClick:this.changeColor,children:"Change Color"})]});var e,t}}]),n}(l.a.Component),p=(n(33),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"topnav",children:[Object(r.jsx)(u.b,{to:"/mypage/home",children:"Home"}),Object(r.jsx)(u.b,{to:"/mypage/car",children:"Car"}),Object(r.jsx)(u.b,{to:"/mypage/swipe",children:"About Me"}),Object(r.jsx)(u.b,{to:"/mypage/planet",children:"Technologies"})]})}}]),n}(l.a.Component)),m=n(26),x=n.n(m),f={padding:15,minHeight:100,color:"#fff"},g={background:"#FEA900"},y={background:"#B3DC4A"},v={background:"#6AC0FF"},k={background:"#FF0000"},C=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(x.a,{children:[Object(r.jsxs)("div",{style:Object.assign({},f,g),children:["Hat1: Coder",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://github.com/16pj",target:"_blank",rel:"noreferrer",children:"Github Playground"})]}),Object(r.jsxs)("div",{style:Object.assign({},f,y),children:["Hat2: Decoder",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/robinpj",target:"_blank",rel:"noreferrer",children:"Linkedin Profile"})]}),Object(r.jsxs)("div",{style:Object.assign({},f,v),children:["Hat3: Learner",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8241091&isnumber=8241062",target:"_blank",rel:"noreferrer",children:"IEEE Paper"})]}),Object(r.jsxs)("div",{style:Object.assign({},f,k),children:["Hat4: Doer",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://www.youracclaim.com/badges/1dbdfb09-bb95-463e-b2cc-191ee3d1a412/linked_in_profile",target:"_blank",rel:"noreferrer",children:"Ericsson Recognition"})]})]})}}]),n}(l.a.Component),w=n(27),P=(n(59),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{style:{position:"absolute",left:"40%",top:"30%",transform:"translate(-50%, -50%)"},children:Object(r.jsxs)(w.a,{centerContent:Object(r.jsx)("div",{class:"big-seagreen-circle",children:"Tech Stack"}),open:!0,orbitRadius:300,rotation:30,dragablePlanet:!0,dragRadiusPlanet:20,bounce:!0,autoClose:!0,children:[Object(r.jsx)("div",{class:"yellow-circle",children:"Golang"}),Object(r.jsx)("div",{class:"violet-circle",children:"Python"}),Object(r.jsx)("div",{class:"red-circle",children:"Clojure"}),Object(r.jsx)("div",{class:"blue-circle",children:"K8s"}),Object(r.jsx)("div",{class:"orange-circle",children:"Azure"})]})})}}]),n}(l.a.Component)),H=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(h.b,{path:"/mypage/home",children:Object(r.jsx)(d,{})}),Object(r.jsx)(h.b,{path:"/mypage/car",children:Object(r.jsx)(O,{})}),Object(r.jsx)(h.b,{path:"/mypage/swipe",children:Object(r.jsx)(C,{})}),Object(r.jsx)(h.b,{path:"/mypage/planet",children:Object(r.jsx)(P,{})}),Object(r.jsx)(h.b,{exact:!0,path:"/mypage",children:Object(r.jsx)(h.a,{to:"/mypage/home"})})]})}}]),n}(l.a.Component);b.a.render(Object(r.jsx)(H,{}),document.getElementById("robin"))}},[[60,1,2]]]);
//# sourceMappingURL=main.4d8aba9d.chunk.js.map