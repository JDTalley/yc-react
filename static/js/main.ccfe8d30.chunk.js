(this["webpackJsonpyc-react"]=this["webpackJsonpyc-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(12),a(1)),i=a(2),u=a(4),s=a(3),m=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).navStyle={display:"flex",backgroundColor:"#f8f8f8"},e}return Object(i.a)(a,[{key:"render",value:function(){var e;return e=this.props.user?r.a.createElement("ul",null,r.a.createElement("li",null,"Signed In As ",this.props.user),r.a.createElement("li",null,r.a.createElement("a",{href:"/logout"},"Logout"))):r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/logout"},"Logout"))),r.a.createElement("nav",{style:this.navStyle},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"YelpCamp")),r.a.createElement("div",{className:"collapse navbar-collapse"},e))}}]),a}(r.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:{},authenticated:!0},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m,{user:this.state.user.name})}}]),a}(r.a.Component),h={flex:"0 0 350px",margin:10},p={display:"flex",flexWrap:"wrap",alignItems:"stretch",flexDirection:"row"},f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.campgrounds.map((function(e){return r.a.createElement("div",{key:e.name,style:h},r.a.createElement("h1",null,e.name),r.a.createElement("img",{alt:"Campground",src:e.image,width:"100%"}),r.a.createElement("button",null,"More Info"))}));return r.a.createElement("div",{style:p},e)}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLoaded:!1,campgrounds:[]},e.containerStyle={display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto",width:"90%"},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/campgrounds").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,campgrounds:t.campgrounds})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement("div",{style:this.containerStyle},r.a.createElement("div",null,r.a.createElement("h2",null,"Our Most Popular Campgrounds!")),r.a.createElement(f,{campgrounds:this.state.campgrounds})):r.a.createElement("div",null)}}]),a}(r.a.Component),g={height:"100vh",margin:"0",display:"flex",flexDirection:"column"},E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:g},r.a.createElement(d,null),r.a.createElement(v,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ccfe8d30.chunk.js.map