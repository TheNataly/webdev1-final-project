if (self.CavalryLogger) { CavalryLogger.start_js(["vHN8n"]); }

__d("StarsRatableComposerCloseResetBehaviorEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",RESET_TO_EMPTY:"reset_to_empty",RESET_TO_PREVIOUS:"reset_to_previous"})}),null);
__d("StarsRatableBase",["Event","Arbiter","CSS","DOM","Parent","Run","StarsRatableComposerCloseResetBehaviorEnum"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d,e){this.root=a,this.freezeOnClick=c,this.stars=b("DOM").scry(a,"a"),this.listeners=[b("Event").listen(this.root,"click",this._onClick.bind(this)),b("Event").listen(this.root,"mousemove",this._onMouseMove.bind(this)),b("Event").listen(this.root,"mouseout",this._onMouseOut.bind(this))],this.holdMouseMove=!1,this.setRating(d),this.defaultRating=d,this.composerHideResetBehavior=e,this.composerArbiters=[],b("Run").onLeave(this.destroyListeners.bind(this))}g.init=function(a,b,c,d){return new g(a,b,c,d)};Object.assign(g.prototype,{_onClick:function(event){__p&&__p();this.layerHides=0;var a=this._getStarIndexFromEvent(event);if(!a)return;this.setRating(a);this.freezeOnClick?this.freeze():this.holdMouseMove=!0;this.composerHideResetBehavior!==b("StarsRatableComposerCloseResetBehaviorEnum").NONE&&(this.composerArbiters=[b("Arbiter").subscribe("saving_rating_from_composer",function(a,c){this.defaultRating=c,this.setRating(this.composerHideResetBehavior===b("StarsRatableComposerCloseResetBehaviorEnum").RESET_TO_EMPTY?0:c),this._unsubscribeComposerArbiters()}.bind(this)),b("Arbiter").subscribe("canceling_from_composer",function(){this.setRating(this.composerHideResetBehavior===b("StarsRatableComposerCloseResetBehaviorEnum").RESET_TO_EMPTY?0:this.defaultRating),this._unsubscribeComposerArbiters()}.bind(this))]);event.prevent()},_unsubscribeComposerArbiters:function(){for(var a=0;a<this.composerArbiters.length;++a)b("Arbiter").unsubscribe(this.composerArbiters[a]);this.composerArbiters=[]},_onMouseMove:function(event){if(this.holdMouseMove)return;var a=this._getStarIndexFromEvent(event);if(!a)return;this.setStars(a,!0)},_onMouseOut:function(event){this.holdMouseMove=!1,this.updateStars()},_getStarIndexFromEvent:function(event){var a=b("Parent").byTag(event.getTarget(),"a");return a?this.stars.indexOf(a)+1:0},setRating:function(a){this._rating=a,this.updateStars()},updateStars:function(){this.setStars(this._rating)},setStars:function(a,c){var d=c?"hoverStar":"fullStar";c=c?"fullStar":"hoverStar";for(var e=0;e<this.stars.length;++e){b("CSS").removeClass(this.stars[e],c);var f=e>=a;b("CSS").conditionClass(this.stars[e],d,!f);b("CSS").conditionClass(this.stars[e],"emptyStar",f)}},freeze:function(){b("CSS").addClass(this.root,"uiStarsRated"),this.destroyListeners()},destroyListeners:function(){this.listeners.forEach(function(a){a&&a.remove()}),this.listeners=[]}});a.StarsRatableBase=e.exports=g}),null);
__d("PageWebsiteLogger",["Banzai","Event"],(function(a,b,c,d,e,f){a={init:function(a,c,d,e){b("Event").listen(a,"click",function(a){this.log({user_id:c,page_id:d,website_url:e})}.bind(this))},log:function(a){b("Banzai").post("page_website_logger",a)}};e.exports=a}),null);
__d("XGroupsMemberConnectionsIntentLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/member_connections/log_intent/",{member_id:{type:"Int"},group_id:{type:"Int"},intent_type:{type:"Enum",enumType:1}})}),null);
__d("GroupsMemberConnectionsLogger",["AsyncRequest","Event","XGroupsMemberConnectionsIntentLoggingController"],(function(a,b,c,d,e,f){"use strict";var g={logIntentOnJavaScriptEvent:function(a,c,d,e,f){b("Event").listen(a,c,function(){g.logIntent(d,e,f)})},logIntent:function(a,c,d){c=b("XGroupsMemberConnectionsIntentLoggingController").getURIBuilder().setInt("member_id",c).setInt("group_id",a).setEnum("intent_type",d).getURI();new(b("AsyncRequest"))(c).send()}};e.exports=g}),null);
__d("PagesGrowthGeneralAnalyticalTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:PagesGrowthGeneralAnalyticalLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesGrowthGeneralAnalyticalLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesGrowthGeneralAnalyticalLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventLocation=function(a){this.$1.event_location=a;return this};a.prototype.setEventRef=function(a){this.$1.event_ref=a;return this};a.prototype.setEventResult=function(a){this.$1.event_result=a;return this};a.prototype.setEventTarget=function(a){this.$1.event_target=a;return this};a.prototype.setExperimentGroupName=function(a){this.$1.experiment_group_name=a;return this};a.prototype.setExperimentName=function(a){this.$1.experiment_name=a;return this};a.prototype.setFanCount=function(a){this.$1.fan_count=a;return this};a.prototype.setFeatureName=function(a){this.$1.feature_name=a;return this};a.prototype.setIsAdmin=function(a){this.$1.is_admin=a;return this};a.prototype.setIsPagePublished=function(a){this.$1.is_page_published=a;return this};a.prototype.setNotifID=function(a){this.$1.notif_id=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setSessionid=function(a){this.$1.sessionid=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={event:!0,event_location:!0,event_ref:!0,event_result:!0,event_target:!0,experiment_group_name:!0,experiment_name:!0,fan_count:!0,feature_name:!0,is_admin:!0,is_page_published:!0,notif_id:!0,page_id:!0,sessionid:!0};e.exports=a}),null);
__d("PagesAboutSectionLogger",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){"use strict";a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(){return b("PagesEventObserver").notify(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("ContextRowEventLogger",["BanzaiLogger","Event"],(function(a,b,c,d,e,f){a={registerContextRowClickAction:function(a,c){b("Event").listen(a,"click",function(){b("BanzaiLogger").log("PageContextRowEventsLoggerConfig",c)})}};e.exports=a}),null);
__d("PagesBanzaiEventListener",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(event){b("PagesEventObserver").logData_DEPRECATED(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("PagesPostsByOthersUnit",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g;function a(a,b){"use strict";this.$1=a,this.$2=b,g=this}a.prototype.getRoot=function(){"use strict";return this.$1};a.prototype.insertPost=function(a){"use strict";var c=this.getRoot();b("DOM").prependContent(c,a);c.children.length>this.$2&&b("DOM").remove(c.lastChild);this.$3&&(b("DOM").remove(this.$3),this.$3=null)};a.insertPostIntoCurrentInstance=function(a){"use strict";this.getInstance().insertPost(a)};a.initPlaceholderElement=function(a){"use strict";this.getInstance().$3=a};a.getInstance=function(){"use strict";return g};e.exports=a}),null);
__d("PagesTimelineSearchBar.react",["ix","cx","fbt","Arbiter","Image.react","PagesEventObserver","PagesEventType","React","XUIButton.react","XUITextInput.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={query:this.props.searchQuery,disabled:!1},this.$1="",this.$3=function(event){!this.$1?this.setState({query:""}):this.state.disabled||(this.setState({disabled:!0,query:""}),b("Arbiter").inform("PagesTimelineSearch/search",{query:""}),b("PagesEventObserver").notify(b("PagesEventType").SEARCH_TIMELINE_POSTS,this.props.pageID,{searchTerm:""}))}.bind(this),this.$5=function(event){var a=event.target.value;a.length<=this.props.maxLength&&this.setState({query:a})}.bind(this),this.$4=function(event){this.state.disabled||(this.setState({disabled:!0}),b("Arbiter").inform("PagesTimelineSearch/search",{query:this.state.query}),b("PagesEventObserver").notify(b("PagesEventType").SEARCH_TIMELINE_POSTS,this.props.pageID,{searchTerm:this.state.query}))}.bind(this),this.$2=function(a,b){b.query===this.state.query&&(this.setState({disabled:!1}),this.$1=b.query)}.bind(this),c}a.prototype.UNSAFE_componentWillMount=function(){b("Arbiter").subscribe("PagesTimelineSearch/searchDone",this.$2)};a.prototype.render=function(){var a=i._("Search for posts on this Page"),c=null;!this.state.disabled&&this.state.query&&(c=b("React").createElement(b("XUIButton.react"),{className:"_5wkw",image:b("React").createElement(b("Image.react"),{src:g("141941")}),label:i._("Clear"),labelIsHidden:!0,onClick:this.$3}));var d=this.state.disabled?"_1fa6 _1wqb":"_1fa6";return b("React").createElement("div",{className:d},b("React").createElement(b("XUIButton.react"),{className:"_3fbq",disabled:this.state.disabled,image:b("React").createElement(b("Image.react"),{src:g("142454")}),label:i._("Search"),labelIsHidden:!0,onClick:this.$4}),b("React").createElement(b("XUITextInput.react"),{className:"_3fbp",onChange:this.$5,placeholder:a,value:this.state.query,onEnter:this.$4,disabled:this.state.disabled}),c)};a.propTypes={pageID:c.string.isRequired,searchQuery:c.string.isRequired,maxLength:c.number.isRequired};e.exports=a}),null);
__d("PageFriendInviterEntryPointHelper",["Event","PagesGrowthGeneralAnalyticalTypedLogger","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={listenToClick:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){new(b("PagesGrowthGeneralAnalyticalTypedLogger"))().setEvent("click").setEventTarget(c).setEventLocation("page_timeline").setFeatureName("modal_page_invite_redesign").log()}))}};e.exports=a}),null);
__d("XReviewsTabUpdateHistogramController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/pages/review/update_histogram/",{page_id:{type:"Int"}})}),null);
__d("ReviewsController",["csx","fbt","ix","Arbiter","AsyncRequest","Dialog","DOM","Event","Image.react","React","ReactDOM","Run","XReviewsTabUpdateHistogramController","ge"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j={},k={},l={},m={},n={};a={registerRevealProfanity:function(a,c,d){b("Event").listen(c,"click",function(){a.style.display="none",d.style.display="inline"})},registerButton:function(a,b){j[b]=j[b]||[],j[b].push(a)},registerViewerReview:function(a,b){k[b]=k[b]||[],k[b].push(a)},registerComposer:function(a,b){l[b]=l[b]||[],l[b].push(a)},registerToggle:function(a,b,c,d){m[a]=m[a]||[],m[a].push([b,c,d])},registerStoryDeleteListener:function(a){b("Arbiter").subscribe("Story/delete",function(c,d){this._updateToggles(a,!1),new(b("AsyncRequest"))(b("XReviewsTabUpdateHistogramController").getURIBuilder().setInt("page_id",a).getURI()).setMethod("GET").setReadOnly(!0).send()}.bind(this))},addUserReview:function(a,b,c,d,e,f,g,h,i,j,k){this._updateState(!0,a,b,c,d,e,f,g,h,i,j,k)},deleteUserReview:function(a,b,c,d,e,f){this._updateState(!1,a,null,null,null,b,c,d,f,null,null);if(e){a=document.getElementById(e);b=a.parentNode.parentNode;b.parentNode.removeChild(b)}},_updateState:function(a,c,d,e,f,g,m,n,o,p,q,r){__p&&__p();if(p){f=b("ge")("own_review_container");f&&b("DOM").setContent(f,p)}else if(o){f=b("ge")("viewer_own_review_tab");f&&b("DOM").replace(f,o)}else if(a){p=b("ge")("page_reviews_tab_list");p&&b("DOM").prependContent(p,e);f="div._yj3";o=b("DOM").scry(document,f)[0];o&&o.parentNode.removeChild(o)}p=k[c]||[];for(e=0;e<p.length;e++)b("DOM").remove(p[e]);this._updateToggles(c,a);f=l[c]||[];for(e=0;e<f.length;e++){o=f[e];a?o.hide():(o.clear(),o.show())}p=j[c]||[];for(e=0;e<p.length;e++){o=p[e];f=b("DOM").find(o,".uiButtonText");c=b("DOM").find(o,"i");var s;a?(o=i("76766"),s=h._("Reviewed")):(o=i("76771"),s=h._("Review"));var t=b("DOM").create("span");b("ReactDOM").render(b("React").createElement("div",null,s),f);b("ReactDOM").render(b("React").createElement(b("Image.react"),{src:o,style:{paddingRight:"5px"}}),t);b("DOM").replace(c,t)}if(a){s=b("DOM").scry(document,"#page_recommendations_browse_list")[0];s&&b("DOM").prependContent(s,d)}if(g){f=b("ge")("page_reviews_pill_and_histogram");f&&b("DOM").replace(f,g)}if(m){o=b("ge")("pages_inline_rating_summary");o&&b("DOM").replace(o,m)}if(n){c=b("ge")("pages_review_needy_place_card");c&&b("DOM").replace(c,n)}if(q){t=b("ge")("spotlight_reviews_card_list");t&&b("DOM").prependContent(t,q)}if(r){p=b("ge")("review_composer_container");b("DOM").insertAfter(p,r)}},registerPhotoUpload:function(a,c){b("Arbiter").subscribe("multi-upload/images-upload-completed/"+c,function(){n[c]=!1}),b("Arbiter").subscribe("multi-upload/images-upload-start/"+c,function(){n[c]=!0}),b("Event").listen(a,"submit",function(){if(n[c]){new(b("Dialog"))().setTitle(h._("Photos Are Uploading")).setSemiModal(!0).setButtons(b("Dialog").OK).setBody(h._("Please wait until photo is uploaded before posting.")).show();return!1}return!0}.bind(this))},_updateToggles:function(a,c){a=m[a]||[];for(var d=0;d<a.length;d++){var e=a[d],f=e[c?1:2];b("DOM").setContent(e[0],f)}}};b("Run").onLeave(function(){j={},k={},l={},m={},n={}});e.exports=a}),null);
__d("PageTimelineViewportTracking",["csx","Banzai","DataAttributeUtils","DOM","TimelineViewportTrackingLogType","ViewportTracking","$","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i;function j(a){return{getAllStories:function(){return b("DOM").scry(b("$")("globalContainer"),"._5pat")},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a&&a.top_level_post_id},getDataToLog:function(a){return JSON.parse(b("DataAttributeUtils").getDataFt(a))||{}},getStream:function(){return b("$")("globalContainer")},getDataFromConfig:function(a,b){b.isTimetrackingEnabled=!0}}}h=babelHelpers.inherits(k,b("ViewportTracking"));i=h&&h.prototype;k.prototype.getTimetrackingDataToLog=function(a){a=i.getTimetrackingDataToLog.call(this,a);a.log_type=b("TimelineViewportTrackingLogType").DURATION;return a};k.prototype.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};k.prototype.sendDataToLog=function(a,c,d,e){if(!c.ft)return;a={};e&&(a.retry=e);d&&(a.delay=2e3);b("Banzai").post("page_timeline_vpv_tracking",c,a)};k.prototype.cleanup=function(){l.clearSingleton(),i.cleanup.call(this)};function k(){h.apply(this,arguments)}var l=b("viewportTrackingBuilder")(function(a){var b=new k(j(a));b.init(a);return b});l.init=l.singleton.bind(l);e.exports=l}),null);
__d("PagesPostsSearch",["cx","Arbiter","CSS","DOM","LoadingIndicator.react","React","ReactDOM","Run","SubscriptionsHandler","UIPagelet"],(function(a,b,c,d,e,f,g){__p&&__p();var h=100;a={searchPosts:function(a,c,d){this._pageID=a;this._postsContainer=c;this._searchResultsContainer=d;var e=new(b("SubscriptionsHandler"))();e.addSubscriptions(b("Arbiter").subscribe("PagesTimelineSearch/search",this._handleSearchBarAction.bind(this)));b("Run").onLeave(function(){return e.release()})},_handleSearchBarAction:function(a,c){this._query=c.query,this._query!==""?this._handleSearch():this._handleClearField(),setTimeout(function(){b("Arbiter").inform("PagesTimelineSearch/searchDone",{query:this._query})}.bind(this),h)},_handleSearch:function(){b("CSS").hide(this._postsContainer),b("ReactDOM").render(b("React").createElement("div",{className:"_3x9t"},b("React").createElement(b("LoadingIndicator.react"),{color:"white",size:"large"})),this._searchResultsContainer),b("UIPagelet").loadFromEndpoint("PagePostsSearchResultsPagelet",this._searchResultsContainer,{page_id:this._pageID,search_query:this._query})},_handleClearField:function(){b("DOM").setContent(this._searchResultsContainer,null),b("CSS").show(this._postsContainer)}};e.exports=a}),null);
__d("TimelineCommentsLoader",["CommentPrelude","CSS","DOM","Event","Parent","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g={init:function(){__p&&__p();g.init=b("emptyFunction"),b("Event").listen(document.body,"click",function(a){__p&&__p();var c=b("Parent").byClass(a.getTarget(),"fbTimelineFeedbackCommentLoader");if(c){a.kill();b("CommentPrelude").click(c,!1,"timeline_comments_loader");a=b("Parent").byTag(c,"form");var d=b("DOM").scry(a,"li.uiUfiViewAll input");d.length||(d=b("DOM").scry(a,"li.fbUfiViewPrevious input"));d.length||(d=b("DOM").scry(a,"a.UFIPagerLink"));d[0].click();b("CSS").show(b("DOM").find(a,"li.uiUfiComments"));b("CSS").removeClass(c,"fbTimelineFeedbackCommentLoader")}})}};e.exports=g}),null);
__d("ReactionLogging",["DataStore","Event","MarauderLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="reaction_logging";function a(a,c,d){b("DataStore").set(a,g,c),d&&b("Event").listen(a,"click",function(){h(a)})}function h(a){a=b("DataStore").get(a,g);if(!a||!a.logging_data)return;a=a.logging_data;b("MarauderLogger").log("reaction_unit_interaction","guide_cards_null_state",a)}e.exports={startLogTracking:a}}),null);
__d("MorePagerFetchOnScroll",["AsyncRequest","DOMQuery","Event","Style","Vector","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g={};function a(a,b,c){"use strict";this._pager=a,this._offset=b||0,this._hasEventHandlers=!1,c&&this.setup(),g[a.id]=this}a.prototype.setup=function(){"use strict";this._scrollParent=b("Style").getScrollParent(this._pager),this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this)),this.check()||(this._scrollListener=b("Event").listen(this._scrollParent,"scroll",b("throttle")(function(){this.check()}.bind(this),50)),this._clickListener=b("Event").listen(this._scrollParent,"click",b("throttle")(function(){this.check()}.bind(this),50)),this._hasEventHandlers=!0)};a.prototype.check=function(){"use strict";__p&&__p();if(!b("DOMQuery").contains(document.body,this._pager)){this.removeEventListeners();return!0}var a=b("Vector").getElementPosition(this._pager).y,c=this._scrollParent===window?b("Vector").getViewportDimensions().y:b("Vector").getElementDimensions(this._scrollParent).y;c=this._scrollParent===window?b("Vector").getScrollPosition().y+c:b("Vector").getElementPosition(this._scrollParent).y+c;if(a-this._offset<c){this._inViewHandler();this.removeEventListeners();return!0}return!1};a.prototype.removeEventListeners=function(){"use strict";this._hasEventHandlers&&(this._scrollListener&&this._scrollListener.remove(),this._clickListener&&this._clickListener.remove(),this._hasEventHandlers=!1)};a.prototype.setPagerInViewHandler=function(a){"use strict";this._inViewHandler=a;return this};a.prototype._defaultPagerInViewHandler=function(){"use strict";var a=b("DOMQuery").scry(this._pager,"a")[0];a&&b("AsyncRequest").bootstrap(a.getAttribute("ajaxify")||a.href,a)};a.getInstance=function(a){"use strict";return g[a]};e.exports=a}),null);
__d("LocalContentClickLogger",["BanzaiLogger","EventListener"],(function(a,b,c,d,e,f){__p&&__p();a.prototype.initClickThroughLogging=function(a,c,d){"use strict";b("EventListener").listen(a,"click",function(){return this.sendLoggingRequest(c,d)}.bind(this))};a.prototype.initMenuClickLogging=function(a,b,c,d){"use strict";a.subscribe("itemclick",function(a,e){e.item.getValue()==b&&this.sendLoggingRequest(c,d)}.bind(this))};a.prototype.initPrivacyMenuClickLogging=function(a,c,d){"use strict";b("EventListener").listen(a,"click",function(event){c.button_text=event.target.textContent,this.sendLoggingRequest(c,d)}.bind(this))};a.prototype.sendLoggingRequest=function(a,c){"use strict";c=="reviews"?b("BanzaiLogger").log("ReviewConsumptionLoggerConfig",a):c=="review_production"?b("BanzaiLogger").log("ReviewProductionLoggerConfig",a):c=="menus"&&b("BanzaiLogger").log("MenuConsumptionLoggerConfig",a)};function a(){"use strict"}e.exports=new a()}),null);