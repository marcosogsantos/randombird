(this["webpackJsonpget-random-tweet-frontend"]=this["webpackJsonpget-random-tweet-frontend"]||[]).push([[0],{10:function(e,t,a){e.exports=a(29)},15:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),l=a.n(s);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(4),i=a(5),c=a(8),m=a(6),u=a(1),d=a(9),p=a(7),h=a.n(p),f=(a(28),function(e,t,a){return r.a.createElement("a",{href:e,key:a,rel:"noopener noreferrer",target:"_blank"},t)}),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={input_url:void 0,tweets:[],aux_tweets_length:0,loading:!1},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e.handleInputChanges=e.handleInputChanges.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.search,t=new URLSearchParams(e).get("user");t&&this.getArticleText(t)}},{key:"handleInputChanges",value:function(e){this.setState({input_url:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({loading:!0}),this.get_random_tweet(this.state.input_url),e.preventDefault()}},{key:"get_random_tweet",value:function(e){var t=this;fetch("https://get-random-tweet-api.herokuapp.com/?user="+e,{method:"GET"}).then((function(e){return e.json()})).then((function(a){a.username=e,t.setState({tweets:[a].concat(t.state.tweets),loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"t_builder",value:function(){return this.state.tweets.map((function(e,t){var a=e.created_at.split(" ");return a=a.slice(0,3).join(" "),r.a.createElement("div",{className:"card p-3 shadow-sm mt-3",key:t},r.a.createElement("a",{target:"blank_",href:"https://twitter.com/"+e.user.id},"@",e.username),r.a.createElement("div",null,r.a.createElement(h.a,{componentDecorator:f},e.text)),r.a.createElement("div",{style:{fontSize:14}},r.a.createElement("span",{style:{color:"grey"}},r.a.createElement("span",{className:"pr-2"},a),r.a.createElement("span",{className:"pr-2"},"Likes: ",e.favorite_count),r.a.createElement("span",{className:"pr-2"},"Retweets: ",e.retweet_count)),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/"+e.user.id+"/status/"+e.id_str}," Go to tweet")))}))}},{key:"loading_builder",value:function(){return this.state.loading?r.a.createElement("div",{className:"ml-2 spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):null}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{fontSize:45,fontFamily:"Pacifico, cursive",left:-8,position:"relative"},className:"title mt-5 text-left col"},"Random Bird"),r.a.createElement("div",{style:{fontSize:14,top:-10,color:"grey"},className:"col sub-title d-block"},"by ",r.a.createElement("a",{target:"blank_",href:"https://twitter.com/marcosogsantos"},"@marcosogsantos")),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col form-class m-0 pr-0"},r.a.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit,style:{maxWidth:700}},r.a.createElement("div",{className:"row container-fluid "},r.a.createElement("div",{className:"col-sm-6 text-center m-0 pr-0"},r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"@")),r.a.createElement("input",{placeholder:"username",className:"d-inline form-control",type:"text",value:this.state.input_url,onChange:this.handleInputChanges,required:!0}))),r.a.createElement("div",{style:{},className:"col-sm-3 m-0 p-0 text-center"},r.a.createElement("button",{type:"submit",style:{whiteSpace:"nowrap"},className:"btn ml-2 btn-primary"},"Get some tweet")),r.a.createElement("div",{className:"loading col-sm text-center mt-1"},this.loading_builder()))),r.a.createElement("div",{className:"m-3"},this.t_builder()))))}}]),t}(n.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.97ad36d8.chunk.js.map