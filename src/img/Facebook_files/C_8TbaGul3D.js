if (self.CavalryLogger) { CavalryLogger.start_js(["As2RI"]); }

__d("ChatNewMessagesTabSheet.react",["cx","fbt","Link.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){return b("React").createElement(b("Link.react"),{onClick:a.onClick},b("React").createElement("div",{className:"_2phz"},b("React").createElement("div",{className:"_1skc","data-jsid":"image"}),b("React").createElement("div",{className:"_1skd","data-jsid":"text"},h._("Scroll down to see new messages."))))};e.exports=a}),null);
__d("FantaNewMessagesTabSheet.react",["ChatNewMessagesTabSheet.react","FantaTabActions","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("FantaTabActions").showUnseenMessages(this.props.threadID)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("ChatNewMessagesTabSheet.react"),{onClick:this.$1})};e.exports=a}),null);