(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),o=n(2),i=n(3),h=n(5),l=n(4),b=n(0),u=function(e){var t=e.name,n=e.username,r=e.email,c=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(c,"?"),alt:"robofriend"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("h3",{children:n}),Object(b.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email},t[n].id)}))})},d=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--grenn bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"600px"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:" OOPS, BAD Robot"}):this.props.children}}]),n}(r.Component),m=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(d,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(j,{robots:t})})})]})}}]),n}(r.Component));s.a.render(Object(b.jsx)(m,{}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.bbae12aa.chunk.js.map