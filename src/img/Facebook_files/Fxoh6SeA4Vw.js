if (self.CavalryLogger) { CavalryLogger.start_js(["KrUmc"]); }

__d("PageCallToActionRef",[],(function(a,b,c,d,e,f){e.exports={NONE:"None",MOBILE_PAGE_PRESENCE_CALL_TO_ACTION:"mobile_page_presence_call_to_action",COVER_PHOTO_SURFACE:"coverPhoto",HOVER_CARD_SURFACE:"hoverCard",PAGE_PLUGIN_SURFACE:"pagePlugin",ADMIN_MENU_TEST_LINK:"adminMenuTestLink",PAGE_PRESENCE_LHS_CARD:"pagePresenceLhsCard",SEARCH_ENTITY_CARD:"searchEntityCard",PROSERVICES_SEARCH_ENTITY_CARD:"proservices_search_entity_card",FEED_STORY:"feed_story",FEED_STORY_SEARCH:"feed_story_search",FEED_STORY_ATTACHMENT:"feed_story_attachment",PAGES_SAVED_SECTION:"pages_saved_section",PAGES_SHARE_ATTACHMENT:"pages_share_attachment",PAGES_MINUTIAE_ATTACHMENT:"pages_minutiae_attachment",PAGES_ACTIONS_UNIT_SURFACE:"pages_actions_unit",PAGES_ACTION_BAR_CHANNEL:"pages_action_bar_channel",PAGES_COVER_AREA_SURFACE:"pages_cover_area_surface",PAGES_SERVICES_SURFACE:"pages_services_surface",CTA_HOVER_CARD_SURFACE:"ctaHoverCard",DYNAMIC_HOVER_CARD_SURFACE:"dynamicHoverCard",PAGES_EDIT_PAGE_SURFACE:"pages_edit_page_surface",CITY_HUB_SOCIAL_MODULE:"city_hub_social_module",CITY_HUB_LOCAL_MODULE:"city_hub_local_module",CITY_HUB_CATEGORY_MODULE:"city_hub_category_module",CITY_HUB_PYML_MODULE:"city_hub_pyml_module",UNOWNED_PAGE_COVER:"unowned_page_cover",SERP_TOP:"serp_top",SERP_PAGES:"serp_pages",SERP_PLACES:"serp_places",LED_FEED_UNIT:"led_feed_unit",FEED_PAGE_ATTACHMENT:"feed_page_attachment",GROUPS_RHC:"groups_rhc",EVENT_PERMALINK:"event_permalink",SERVICES_INCENTIVE_PAGE_SURFACE:"services_incentive_page_surface",SERVICES_HIGH_CONFIDENCE_MODULE:"services_high_confidence_module"}}),null);
__d("VideoCopyrightDisputeStatus",[],(function(a,b,c,d,e,f){e.exports={IN_PROGRESS:"IN_PROGRESS",APPEALED:"APPEALED",RESOLVED_CLAIM_RETRACTED:"RESOLVED_CLAIM_RETRACTED",RESOLVED_CLAIM_UPHELD:"RESOLVED_CLAIM_UPHELD",RESOLVED_TAKEDOWN_REQUESTED:"RESOLVED_TAKEDOWN_REQUESTED",EXPIRED_RELEASED:"EXPIRED_RELEASED",EXPIRED_UPHELD:"EXPIRED_UPHELD",APPEAL_REJECTED:"APPEAL_REJECTED"}}),null);
__d("MentionsInputTypeaheadView.react",["cx","MentionsTypeaheadViewItem.react","React"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){var c=a===this.props.highlightedEntry;return b("React").createElement(b("MentionsTypeaheadViewItem.react"),{key:a.getUniqueID(),entry:a,highlighted:c,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight})}.bind(this),c}a.prototype.render=function(){"use strict";var a="_5u8_"+(this.props.entries.length?"":" _5u90");return b("React").createElement("ul",{className:a,role:"listbox",id:this.props.id},this.props.entries.map(this.$1))};a.propTypes={id:c.string,highlightedEntry:c.object,entries:c.array.isRequired,onSelect:c.func.isRequired,onHighlight:c.func,onRenderHighlight:c.func};e.exports=a}),null);
__d("Token.react",["cx","fbt","CloseButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null;this.props.name&&(a=[b("React").createElement("input",{type:"hidden",name:this.props.name+"[]",value:this.props.value}),b("React").createElement("input",{type:"hidden",name:"text_"+this.props.name+"[]",value:this.props.label})]);var c=null,d=h._("Remove {item}",[h._param("item",this.props.label)]);this.props.removable&&(c=b("React").createElement(b("CloseButton.react"),{ariaLabel:d,className:"remove",size:"small",onClick:this.props.onRemove}));d="uiToken"+(this.props.removable?" removable":"");return b("React").createElement("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d)}),b("React").createElement("span",{className:"uiTokenText"},this.props.label),a,c)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={name:c.string,label:c.string.isRequired,value:c.string,removable:c.bool,onRemove:c.func};e.exports=a}),null);
__d("XUIDialogConfirmButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"confirm",label:g._("Confirm")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("PagesButton.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;a=b("React").PropTypes;var i="accentblue",j="medium";h=babelHelpers.inherits(k,b("React").Component);h&&h.prototype;k.getButtonSize=function(a){"use strict";return a.size||j};k.getButtonColor=function(a){"use strict";return a.color||i};k.prototype.render=function(){"use strict";var a=k.getButtonColor(this.props),c=k.getButtonSize(this.props),d=this.props.disabled,e=this.props.fill;c=b("joinClasses")("_2-sm _1olk"+(c==="small"?" _xa8":"")+(c==="medium"?" _xa9":"")+(c==="large"?" _xaf":"")+(!d&&a==="accentblue"?" _xag":"")+(!d&&a==="fbblue"?" _xah":"")+(!d&&a==="gray"?" _42q9":"")+(!d&&a==="green"?" _xai":"")+(d?" _xaj":"")+(e?" _xak":"")+(e?"":" _xal")+(this.props.slim?" _4t_j":""));return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),label:this.props.label}))};function k(){"use strict";h.apply(this,arguments)}k.propTypes={color:a.oneOf(["accentblue","fbblue","green"]),size:a.oneOf(["small","medium","large"]),disabled:a.bool,fill:a.bool,slim:a.bool};k.defaultProps={color:i,size:j,disabled:!1,fill:!1,slim:!1};e.exports=k}),null);
__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={getCapstone:function(a){var c=b("DOM").scry(a,"._x1g");c.length||(c=b("DOM").scry(a.parentNode,"._x1g"));return c?c[0]:null},addCapstoneByStoryID:function(a,c){a=b("Parent").bySelector(b("ge")(a),"._5jmm");this.addCapstone(a,c)},addCapstone:function(a,c){var d=b("DOM").find(a,"._5v3q");d&&(a=d);this.removeCapstone(a);c&&b("DOM").prependContent(a,c);return c},removeCapstone:function(a){a=h.getCapstone(a);a&&b("DOM").remove(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="EntstreamFeedObjectFollowup/removed",j={getFollowup:function(a){var c=b("DOM").scry(a,"._5lum");c.length||(c=b("DOM").scry(a.parentNode,"._5lum"));return c?c[0]:null},initCloseButton:function(a){var c=b("DOM").scry(a,"._5xsl");if(c.length==0)return;var d=b("Event").listen(c[0],"click",function(){d.remove(),b("DOM").remove(a),b("Arbiter").inform(i,a)});a.listener=d},stopListenCloseButton:function(a){a.listener&&a.listener.remove()},addFollowup:function(a,c,d){__p&&__p();var e=b("CSS").matchesSelector(a,"._5pat"),f=b("DOM").create("div",{className:"_5lum"});e?b("CSS").addClass(f,"_5pau"):b("CSS").addClass(f,"_1f84");if(d)if(typeof d==="string")b("CSS").addClass(f,d);else if(d instanceof Array)for(var e=0;e<d.length;e++)b("CSS").addClass(f,d[e]);d=b("DOM").scry(a,"._5v3q")[0];d&&(a=d);e=j.getFollowup(a);e&&this.removeFollowup(e);b("FeedObjectCapstone").removeCapstone(a);c?(b("DOM").appendContent(f,c),this.initCloseButton(f),b("CSS").matchesSelector(f,"._4-u3")?b("DOM").prependContent(a,f):b("DOM").insertBefore(a,f)):b("DOM").prependContent(a,f);return f},removeFollowup:function(a){a=j.getFollowup(a);this.stopListenCloseButton(a);b("DOM").remove(a);b("Arbiter").inform(i,a)},appendToFollowup:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=j.getFollowup(a);b("DOM").appendContent(a,c)},addInstreamAdsFollowup:function(a){a=b("DOM").scry(a,"._211q");var c=b("DOM").create("div",{className:"_5lum"});b("DOM").prependContent(a[0],c);return c}};e.exports=j}),null);
__d("XLtgLanguageDialectTypeaheadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/translation/dialects/",{value:{type:"String",defaultValue:""},q:{type:"String",defaultValue:""},dialect_set:{type:"Enum",defaultValue:"language_detection",enumType:1},render:{type:"Enum",defaultValue:"default",enumType:1}})}),null);
__d("LanguageDialectAsyncSearchSource",["WebAsyncSearchSource","XLtgLanguageDialectTypeaheadController"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("WebAsyncSearchSource"));g=c&&c.prototype;function a(a,c,d){g.constructor.call(this,{asyncErrorHandler:d,bootstrapRequests:[{uri:b("XLtgLanguageDialectTypeaheadController").getURIBuilder().setEnum("dialect_set",a).setEnum("render",c).getURI()}]})}a.prototype.searchImpl=function(a,b,c){!a?b(Object.values(this.getAllEntriesMap()),a):g.searchImpl.call(this,a,b,c)};e.exports=a}),null);
__d("LanguageDialectRenderStyle",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DEFAULT:"default",INTERNAL:"internal",ULM_CATEGORIES:"ulm_categories"})}),null);
__d("LanguageDialectCategory",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIEWER_UNDERSTOOD:"viewer_understood",OTHER:"other"})}),null);
__d("LanguageDialectViewRenderer.react",["cx","fbt","LanguageDialectCategory","LanguageDialectRenderStyle","React","XUIGrayText.react","XUITypeaheadViewItem.react","groupArray"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.$1=function(a){"use strict";return b("React").createElement(b("XUITypeaheadViewItem.react"),{key:a.getUniqueID(),entry:a,highlighted:a===this.props.highlightedEntry,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight})};a.prototype.$2=function(a,c){"use strict";__p&&__p();var d=null;switch(a){case b("LanguageDialectCategory").VIEWER_UNDERSTOOD:d=h._("Frequently used languages");break;case b("LanguageDialectCategory").OTHER:d=h._("Other languages");break;default:break}c=c.map(function(a){return this.$1(a)}.bind(this));d&&c.unshift(b("React").createElement(b("XUIGrayText.react"),{key:a,className:"_2pir _2pi2",shade:"light",display:"block"},d));return c};a.prototype.$3=function(){var a,c=b("groupArray")(this.props.entries,function(a){return a.getType()}),d=Object.keys(c);if(d.length===1)return this.$2("",this.props.entries);Object.prototype.hasOwnProperty.call(c,b("LanguageDialectCategory").VIEWER_UNDERSTOOD)&&(d.splice(d.indexOf(b("LanguageDialectCategory").VIEWER_UNDERSTOOD),1),d.unshift(b("LanguageDialectCategory").VIEWER_UNDERSTOOD));return(a=[]).concat.apply(a,d.map(function(a){return this.$2(a,c[a])}.bind(this)))};a.prototype.render=function(){"use strict";var a=this.props.renderStyle===b("LanguageDialectRenderStyle").ULM_CATEGORIES?this.$3():this.$2("",this.props.entries);return b("React").createElement("ul",{className:"_5p0r",role:this.props.role},a)};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("LanguageDialectInlineTypeahead.react",["cx","AbstractTypeahead.react","LanguageDialectAsyncSearchSource","LanguageDialectRenderStyle","LanguageDialectViewRenderer.react","React"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$1=function(a){this.props.onSelect&&this.props.onSelect(a),this.$3()}.bind(this),this.$2=function(event){var a=event.target.value;this.props.onChange&&this.props.onChange(a);this.setState({query:event.target.value})}.bind(this),this.$3=function(){this.setState({query:""})}.bind(this),this.searchSource=new(b("LanguageDialectAsyncSearchSource"))(this.props.dialectType,this.props.renderStyle),this.state={query:""}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";(a.dialectType!==this.props.dialectType||a.renderStyle!==this.props.renderStyle)&&(this.searchSource=new(b("LanguageDialectAsyncSearchSource"))(a.dialectType,a.renderStyle))};a.prototype.render=function(){"use strict";var a={};this.props.excludedDialects.forEach(function(b){return a[b]=!0});return b("React").createElement(b("AbstractTypeahead.react"),{autoHighlight:!0,inputClassName:this.props.className||"_5p0s",hideViewWithEntries:!1,showEntriesOnFocus:!0,onSelectAttempt:this.$1,onChange:this.$2,onClear:this.$3,searchSource:this.searchSource,placeholder:this.props.placeholder,excludedEntries:a,queryString:this.state.query,presenter:{ViewRenderer:b("LanguageDialectViewRenderer.react"),maxEntries:200,useLayer:!1,extraRendererProps:{renderStyle:this.props.renderStyle}}})};a.defaultProps={excludedDialects:[],renderStyle:b("LanguageDialectRenderStyle").DEFAULT};e.exports=a}),null);
__d("LanguageDialectSearchableDropdown.react",["cx","fbt","ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","LanguageDialectInlineTypeahead.react","LanguageDialectRenderStyle","LayerAutoFocus","LayerHideOnBlur","LayerHideOnEscape","React","XUIPopoverButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=" \u25be",k="xx_XX";c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a),this.$2=function(a){this.setState({selectedDialect:a.getUniqueID(),selectedDialectName:a.getTitle(),isOpen:!1}),this.props.onSelect(a.getUniqueID())}.bind(this),this.$4=function(){this.setState({isOpen:!this.state.isOpen})}.bind(this),this.$5=function(a){this.setState({isOpen:a})}.bind(this),this.state={selectedDialect:this.props.initialDialect?this.props.initialDialect:k,selectedDialectName:this.props.initialDialectName?this.props.initialDialectName:h._("Select"),isOpen:!1}}a.prototype.$3=function(){return h._("Show available languages")};a.prototype.render=function(){var a=this.props.useSelector?b("React").createElement(b("XUIPopoverButton.react"),{hasChevron:!0,label:this.state.selectedDialectName,onClick:this.$4,ref:function(a){return this.$1=a}.bind(this)}):b("React").createElement("a",{onClick:this.$4,ref:function(a){return this.$1=a}.bind(this),role:"button",tabIndex:"0",title:this.$3()},this.state.selectedDialectName,j);return b("React").createElement("span",{className:this.props.className},a,b("React").createElement(b("ContextualLayer.react"),{alignment:"left",autofocus:!0,behaviors:{ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerAutoFocus:b("LayerAutoFocus"),LayerHideOnBlur:b("LayerHideOnBlur"),LayerHideOnEscape:b("LayerHideOnEscape")},contextRef:function(){return this.$1}.bind(this),position:"below",onToggle:this.$5,shown:this.state.isOpen},b("React").createElement("div",{className:"_5ge1"},b("React").createElement(b("LanguageDialectInlineTypeahead.react"),{dialectType:this.props.dialectType,onSelect:this.$2,placeholder:this.props.placeholder,excludedDialects:this.props.excludedDialects,hasCategories:this.props.hasCategories,renderStyle:this.props.renderStyle}))))};a.defaultProps={initialDialect:k,hasCategories:!1,renderStyle:b("LanguageDialectRenderStyle").DEFAULT,useSelector:!1};e.exports=a}),null);
__d("BusinessConversationEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:BusinessConversationEventsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:BusinessConversationEventsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BusinessConversationEventsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setActorID=function(a){this.$1.actor_id=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventLocation=function(a){this.$1.event_location=a;return this};a.prototype.setEventTarget=function(a){this.$1.event_target=a;return this};a.prototype.setIsActorPage=function(a){this.$1.is_actor_page=a;return this};a.prototype.setIsEmployee=function(a){this.$1.is_employee=a;return this};a.prototype.setMessageAttachmentInfos=function(a){this.$1.message_attachment_infos=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setMessageAttribution=function(a){this.$1.message_attribution=a;return this};a.prototype.setMessageBodyLength=function(a){this.$1.message_body_length=a;return this};a.prototype.setMessageChannel=function(a){this.$1.message_channel=a;return this};a.prototype.setMessageConversationState=function(a){this.$1.message_conversation_state=a;return this};a.prototype.setMessageID=function(a){this.$1.message_id=a;return this};a.prototype.setMessageIntent=function(a){this.$1.message_intent=a;return this};a.prototype.setMessageIsGroupThread=function(a){this.$1.message_is_group_thread=a;return this};a.prototype.setMessageIsSentViaMessengerPlatform=function(a){this.$1.message_is_sent_via_messenger_platform=a;return this};a.prototype.setMessageOfflineThreadingID=function(a){this.$1.message_offline_threading_id=a;return this};a.prototype.setMessageRecipientCount=function(a){this.$1.message_recipient_count=a;return this};a.prototype.setMessageRecipientInfos=function(a){this.$1.message_recipient_infos=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setMessageServerTimestamp=function(a){this.$1.message_server_timestamp=a;return this};a.prototype.setMessageSource=function(a){this.$1.message_source=a;return this};a.prototype.setMessageTags=function(a){this.$1.message_tags=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setMessageThreadFbid=function(a){this.$1.message_thread_fbid=a;return this};a.prototype.setMessageType=function(a){this.$1.message_type=a;return this};a.prototype.setMesssageRecipientID=function(a){this.$1.messsage_recipient_id=a;return this};a.prototype.setPageCategory=function(a){this.$1.page_category=a;return this};a.prototype.setPageHasMessengerPlatformBot=function(a){this.$1.page_has_messenger_platform_bot=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPageMessagingActiveness=function(a){this.$1.page_messaging_activeness=a;return this};a.prototype.setPageSubVertical=function(a){this.$1.page_sub_vertical=a;return this};a.prototype.setPageVertical=function(a){this.$1.page_vertical=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={actor_id:!0,event:!0,event_location:!0,event_target:!0,is_actor_page:!0,is_employee:!0,message_attachment_infos:!0,message_attribution:!0,message_body_length:!0,message_channel:!0,message_conversation_state:!0,message_id:!0,message_intent:!0,message_is_group_thread:!0,message_is_sent_via_messenger_platform:!0,message_offline_threading_id:!0,message_recipient_count:!0,message_recipient_infos:!0,message_server_timestamp:!0,message_source:!0,message_tags:!0,message_thread_fbid:!0,message_type:!0,messsage_recipient_id:!0,page_category:!0,page_has_messenger_platform_bot:!0,page_id:!0,page_messaging_activeness:!0,page_sub_vertical:!0,page_vertical:!0};e.exports=a}),null);
__d("formatDurationSeconds",["fbt","padNumber"],(function(a,b,c,d,e,f,g){function a(a){var c=Math.floor(a/3600),d=Math.floor(a/60%60);a=Math.floor(a%60);if(c)return g._("{hours}:{minutes}:{seconds}",[g._param("hours",c),g._param("minutes",b("padNumber")(d,2)),g._param("seconds",b("padNumber")(a,2))]);else return g._("{minutes}:{seconds}",[g._param("minutes",d),g._param("seconds",b("padNumber")(a,2))])}e.exports=a}),null);
__d("SUIToggle.react",["cx","fbt","Link.react","React","SUIComponent","SUITheme","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j={isHovering:!1};d={display:"block"};f=babelHelpers.inherits(a,b("SUIComponent"));i=f&&f.prototype;function a(a,b){i.constructor.call(this,a,b),this.state=j,this.$SUIToggle1=this.$SUIToggle1.bind(this),this.$SUIToggle2=this.$SUIToggle2.bind(this),this.$SUIToggle3=this.$SUIToggle3.bind(this)}a.prototype.$SUIToggle1=function(event){this.props.onClick(event)};a.prototype.$SUIToggle2=function(){this.setState({isHovering:!0})};a.prototype.$SUIToggle3=function(){this.setState({isHovering:!1})};a.prototype.render=function(){var a=b("uniqueID")(),c=b("SUITheme").get(this).SUIToggle,d=c.height-6,e=d+2,f=b("joinClasses")((this.props.display==="inline"?"inlineBlock":"")+" _22jf"+(this.props.value?" _22jg":"")+(this.props.value?"":" _22jh"),this.props.className,this.props.margin),g=this.props.value?this.state.isHovering?c.on.hover:c.on.normal:this.state.isHovering?c.off.hover:c.off.normal;return b("React").createElement("div",{className:f,"data-testid":this.props["data-testid"]},b("React").createElement(b("Link.react"),{"aria-checked":!!this.props.value,"aria-labelledby":(this.props["aria-labelledby"]||"")+" "+a,className:"_22jj",href:"#",id:a,onClick:this.$SUIToggle1,onMouseEnter:this.$SUIToggle2,onMouseLeave:this.$SUIToggle3,role:"switch",style:babelHelpers["extends"]({},c.typeStyle,{backgroundColor:g.backgroundColor,color:g.color,height:c.height+"px",lineHeight:c.height+"px"})},b("React").createElement("div",{className:"_22jk",style:{marginRight:e+"px"}},this.props.onText?this.props.onText:h._("ON")),b("React").createElement("div",{className:"_22jl",style:{marginLeft:e+"px"}},this.props.offText?this.props.offText:h._("OFF")),b("React").createElement("div",{className:"_22jm",style:{backgroundColor:c.switchColor,height:d+"px",marginTop:-Math.floor(d/2)+"px",width:d+"px"}})))};a.propTypes={display:c.oneOf(["block","inline","inline-block"]).isRequired,margin:c.string,onClick:c.func.isRequired,value:c.bool.isRequired,offText:c.string,onText:c.string};a.defaultProps=d;e.exports=a}),null);
__d("SUITableSubtitleCell.react",["cx","FbtResultBase","FlexLayout.react","React","SUIComponent","SUITableAbstractCell.react","SUITableCellTypes","SUITheme"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("SUITableCellTypes").DEFAULT_TABLE_CELL_PROPS;h=babelHelpers.inherits(a,b("SUIComponent"));h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.errorMessage,d=a.hasBorders,e=a.isModified,f=a.height;a=a.warningMessage;return b("React").createElement(b("SUITableAbstractCell.react"),{className:"_3bfi",content:this.$SUITableSubtitleCell1(),errorMessage:c,hasBorders:d,height:f,isModified:e,warningMessage:a})};a.prototype.$SUITableSubtitleCell2=function(a){return typeof a==="string"||a instanceof b("FbtResultBase")||typeof a==="number"};a.prototype.$SUITableSubtitleCell1=function(){var a=this.props,c=a.align,d=a.subtitle,e=a.title,f=a.titleIsSummary;a=a.leftIcon;var g=b("SUITheme").get(this).SUITableCell;c=c==="right";var h=this.$SUITableSubtitleCell2(e)?{"data-hover":"tooltip","data-tooltip-content":e,"data-tooltip-display":"overflow","data-tooltip-position":"above"}:null,i=this.$SUITableSubtitleCell2(d)?{"data-hover":"tooltip","data-tooltip-content":d,"data-tooltip-display":"overflow","data-tooltip-position":"above"}:null;f=f?700:g.textStyles.primaryText.fontWeight;f=babelHelpers["extends"]({},g.textStyles.primaryText,{fontWeight:f});f=b("React").createElement(b("FlexLayout.react"),{align:c?"end":"start",className:"_13aw",direction:"vertical",justify:"center"},b("React").createElement("div",babelHelpers["extends"]({className:"ellipsis _13a-"+(c?" _13a_":""),style:f},h),e),b("React").createElement("div",babelHelpers["extends"]({className:"ellipsis _13b0"+(c?" _13a_":""),style:babelHelpers["extends"]({},g.textStyles.secondaryText)},i),d));return!a?f:b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_13aw",direction:"horizontal",justify:"all"},b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_3-90",direction:"vertical",justify:"center"},a),f)};function a(){h.apply(this,arguments)}a.defaultProps=c;e.exports=a}),null);
__d("MentionsInputUtility",["UnicodeUtils","createEditorStateWithRanges","sanitizeDraftText"],(function(a,b,c,d,e,f){__p&&__p();var g=new RegExp(/@\[(\d+):((\\\]|[^\]])+)\]/g),h=new RegExp(/@\[(\d+):(\d+):((\\\]|[^\]])+)\]/g),i=function(a){__p&&__p();a=b("sanitizeDraftText")(a);a=a.replace(h,"@[$1:$3]");var c=[],d;while(d=g.exec(a)){var e=d[2].replace(/\\:/g,":").replace(/\\]/g,"]").replace(/\n/g,"");e={uid:d[1],text:e,offset:d.index,length:e.length,weakreference:!1,entity:{uid:d[1],weakreference:!1}};c.push(e);a=a.substr(0,e.offset)+e.text+a.substr(e.offset+d[0].length);g.lastIndex=e.offset+e.length}return{text:a,ranges:c}};function j(a,c){__p&&__p();var d=0,e=0;c.forEach(function(c){__p&&__p();var f,g;f=c.offset;g=a.slice(d,f);e+=g.length-b("UnicodeUtils").strlen(g);d=f;var h=f-e;f=c.offset+c.length;g=a.slice(d,f);e+=g.length-b("UnicodeUtils").strlen(g);d=f;g=f-e;c.offset=h;c.length=g-h})}function a(a,c){a=i(a);var d=a.text;a=a.ranges;j(d,a);return b("createEditorStateWithRanges")({text:d,ranges:a,decorator:c,addEntityToContentStateFn:function(a,b){return b.createEntity("MENTION","IMMUTABLE",{id:a.entity.uid,isWeak:a.entity.weakreference})},splitIntoBlocks:!0,allowUndo:!0})}e.exports={createFromTextWithMentions:a}}),null);
__d("VideoHomePlayButtonThumbnailOverlay.react",["cx","ix","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a;switch(this.props.size){case"24":a=h("354763");break;case"48":a=h("101640");break;case"72":a=h("352839");break}return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_604-")},b("React").createElement(b("Image.react"),{src:a,width:this.props.size}))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("VideoLink.react",["cx","Bootloader","Keys","React","URI","VideoPlayerOrigins","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(event){event.preventDefault();var a=this.props,c=a.channelID,d=a.channelCaller,e=a.playerOrigin,f=a.playerSuborigin,g=a.reactionVideoChannelType,h=a.reactionVideoChannelSubtype,i=new(b("URI"))(this.props.href);this.props.referrer&&this.props.referrer==="video_home"&&(e=b("VideoPlayerOrigins").VIDEO_HOME,f=f?"page_timeline_"+f:"page_timeline_misc");b("Bootloader").loadModules(["TahoeController"],function(a){a.openFromVideoLink(i,{channelID:c,caller:d,origin:e,suborigin:f,reactionVideoChannelType:g,reactionVideoChannelSubtype:h})},"VideoLink.react");this.props.onClick&&this.props.onClick()}.bind(this),this.$2=function(event){event.keyCode==b("Keys").RETURN&&this.$1(event)}.bind(this),c}a.prototype.render=function(){return b("React").createElement("span",babelHelpers["extends"]({},this.props,{href:this.props.href,ref:"link",onClick:this.$1,onKeyDown:this.$2,className:b("joinClasses")(this.props.className,"_3vwb _400z _2-40"),role:"button",tabIndex:"0"}),this.props.children)};e.exports=a}),null);
__d("VideoWithSpacePlayPause",["Event","Run","VideoPlayerReason"],(function(a,b,c,d,e,f){__p&&__p();var g=32;function a(a){"use strict";this.$1=a;var c=b("Event").listen(window,"keypress",this.$2.bind(this));b("Run").onLeave(function(){return c.remove()})}a.prototype.$2=function(a){"use strict";this.$1.isFullscreen()&&a.charCode==g&&(this.$1.isState("playing")?this.$1.pause(b("VideoPlayerReason").USER):this.$1.play(b("VideoPlayerReason").USER))};e.exports=a}),null);
__d("CommercialBreakHostStoryComponentType",[],(function(a,b,c,d,e,f){a=Object.freeze({POP_OVER_MENU:"POP_OVER_MENU",HOST_STORY_HEADER:"HOST_STORY_HEADER"});e.exports=a}),null);
__d("StoryComponentVideoPlayerControllerRegistry",["CommercialBreakHostStoryComponentType","DOMQuery","EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("EventEmitter"))(),h=new Map(),i=new Map(),j=new Map();function k(a){a=a;var b=[];while(a)b.unshift(a),a=a.parentElement;return b}function l(a,b){__p&&__p();if(a===null)return null;var c=k(a);a=null;var d=null;b.forEach(function(b){var e=b[0];b=b[1];e=k(e);for(var f=0;f<c.length;++f)if(c[f]!==e[f]){(d===null||f>d)&&(d=f,a=b);break}});return a}a={registerVideoPlayerController:function(a,c){var d=a.getVideoID(),e=h.get(d);e?e.push(a):(e=[a],h.set(d,e));d=null;c===b("CommercialBreakHostStoryComponentType").POP_OVER_MENU?d=this.findPopoverAsyncMenuForVideoPlayerController(a):c===b("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER&&(d=this.findHostStoryControllerForVideoPlayerController(a));if(!d)return;g.emit(d.getInstanceID()+"/register",a)},registerHostStoryController:function(a,b,c){var d=j.get(b);d?d.push(a):(d=[a],j.set(b,d));this.findVideoControllerForStoryController(a,b,c)},registerPopoverAsyncMenu:function(a,b){var c=b.host_video_id;if(!c)return;a=new m(a,b);b=a.getInstanceID();var d=i.get(c);d||(d=[],i.set(c,d));d.push(a);this._informStoryComponentRegister(a.getTriggerElem(),b,c,a.registerVideoPlayerController.bind(a))},_informStoryComponentRegister:function(a,b,c,d){g.addListener(b+"/register",d);d=this.findVideoPlayerControllerForElement(a,c);if(!d)return;g.emit(b+"/register",d)},findVideoPlayerControllerForElement:function(a,b){b=h.get(b);return!b?null:l(a,b.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")}).map(function(a){return[a.getRootNode(),a]}))},findPopoverAsyncMenuForVideoPlayerController:function(a){var b=i.get(a.getVideoID());return!b?null:l(a.getRootNode(),b.map(function(a){return[a.getTriggerElem(),a]}))},findHostStoryControllerForVideoPlayerController:function(a){var c=j.get(a.getVideoID());if(!c)return null;for(var d=0;d<c.length;d++){var e=c[d];if(b("DOMQuery").contains(e.getContainerElement(),a.getRootNode()))return e}return null},findVideoControllerForStoryController:function(a,c,d){__p&&__p();g.addListener(a.getInstanceID()+"/register",d);d=h.get(c);if(!d)return;d=d.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")});for(var c=0;c<d.length;c++){var e=d[c];if(b("DOMQuery").contains(a.getContainerElement(),e.getRootNode())){g.emit(a.getInstanceID()+"/register",e);return}}}};function m(a,b){this._menu=a,this._originalEndpoint=this._menu._endpoint,this._additionalData=b}m.prototype.registerVideoPlayerController=function(a){a.addListener("commercialBreak/updateOptionMenuURI",function(a){this._updateEndpoint(a)}.bind(this)),a.addListener("commercialBreak/recoverOptionMenuURI",function(){return this._updateEndpoint(this._originalEndpoint)}.bind(this))};m.prototype._updateEndpoint=function(a){var b=this._menu;b.setMenu(b._loadingMenu);b._setFocus(b._loadingMenu);b._endpoint=a;b._fetched&&(b._fetched=!1,b.fetchMenu())};m.prototype.getInstanceID=function(){return this._menu._instanceId.toString()};m.prototype.getTriggerElem=function(){return this._menu.getTriggerElem()};m.prototype.getOptionsButtonID=function(){return this._additionalData.options_button_id||""};e.exports=a}),null);
__d("BusinessConversationEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BLOCK:"block",DELETE:"delete",MESSAGE_SENT:"message_sent",IMPRESSION:"impression",CREATE:"create",UPSELL:"upsell",UNBLOCK:"unblock",CLICK:"click",XOUT:"xout",TAP:"tap",EXIT:"exit"})}),null);
__d("BusinessConversationEventTarget",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ONE_CLICK_MESSAGE_BUTTON:"one_click_message_button",CALL_DEFLECTION_UPSELL_THREAD:"call_deflection_upsell_thread",COMMENT_QUESTION_TRIGGERED_MESSAGE_BUTTON:"comment_question_triggered_message_button",CUSTOMIZED_MESSAGE_CTA_SELECTOR:"customized_message_cta_selector",PAGE_STORY_REPLY_BAR:"page_story_reply_bar",USER_MESSAGE_PROMPT:"user_message_prompt",COMPOSER_MESSAGE_TAGGER:"composer_message_tagger",MESSENGER_PAGES_CHAT_EXTENSION:"messenger_pages_chat_extension",PAGE_MESSAGE_OBJECTIVE_POST:"page_message_objective_post",SEND_MESSAGE_BUTTON:"send_message_button",PAGE_MESSAGES_TAB:"page_messages_tab",POST_AND_SEND_BUTTON:"post_and_send_button",PAGE_COMPOSER_INTERCEPT_DIALOG:"page_composer_intercept_dialog",PAGE_COMPOSER_INTERCEPT_DIALOG_ACCEPT:"page_composer_intercept_dialog_accept",PAGE_COMPOSER_INTERCEPT_DIALOG_ORIGINAL:"page_composer_intercept_dialog_original"})}),null);
__d("LanguageDialectSetTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LANGUAGE_DETECTION:"language_detection",MT_SOURCE:"source",MT_TARGET:"target",MLC:"mlc",MT_SOURCE_DARK_TRAFFIC:"source_dark",MT_TARGET_DARK_TRAFFIC:"target_dark"})}),null);
__d("LanguageDialectSets",["LtgLanguageDialectRawSets"],(function(a,b,c,d,e,f){__p&&__p();a.prototype.getTranslationSupportedDialects=function(){"use strict";return new Set(b("LtgLanguageDialectRawSets").TRANSLATION_SUPPORTED_DIALECTS)};a.prototype.getTranslationSupportedTargetDialects=function(){"use strict";return new Set(b("LtgLanguageDialectRawSets").TRANSLATION_SUPPORTED_TARGET_DIALECTS)};a.prototype.getTranslationSupportedSourceDialects=function(){"use strict";return new Set(b("LtgLanguageDialectRawSets").TRANSLATION_SUPPORTED_SOURCE_DIALECTS)};a.prototype.getMultilingualDialectsToExclude=function(){"use strict";return new Set(b("LtgLanguageDialectRawSets").MULTILINGUAL_DIALECTS_EXCLUDE)};a.prototype.getMultilingualDialectsToInclude=function(){"use strict";return new Set(b("LtgLanguageDialectRawSets").MULTILINGUAL_DIALECTS_INCLUDE)};a.prototype.getMultiLingualComposerDialects=function(){"use strict";return new Set(b("LtgLanguageDialectRawSets").MULTILINGUAL_COMPOSER_DIALECTS)};a.prototype.getUniqueParentDialects=function(){"use strict";return new Map(Object.entries(b("LtgLanguageDialectRawSets").UNIQUE_PARENT_DIALECTS))};function a(){"use strict"}e.exports=new a()}),null);
__d("AbstractLanguageDialectNames",["LanguageDialectSets"],(function(a,b,c,d,e,f){__p&&__p();a.prototype.getDialectNames=function(){"use strict";return this.dialectToNames};a.prototype.getNameForDialect=function(a){"use strict";return this.dialectToNames.get(a)};a.prototype.filterDialects=function(a){"use strict";var b=new Map();this.dialectToNames.forEach(function(c,d){a.has(d)&&b.set(d,c)});return b};a.prototype.getTranslationSupportedDialects=function(){"use strict";return this.filterDialects(b("LanguageDialectSets").getTranslationSupportedDialects())};a.prototype.getTranslationSupportedSourceDialects=function(){"use strict";return this.filterDialects(b("LanguageDialectSets").getTranslationSupportedSourceDialects())};a.prototype.getTranslationSupportedTargetDialects=function(){"use strict";return this.filterDialects(b("LanguageDialectSets").getTranslationSupportedTargetDialects())};a.prototype.getAllMultilingualComposerDialects=function(){"use strict";return this.filterDialects(b("LanguageDialectSets").getMultiLingualComposerDialects())};a.prototype.getMultilingualComposerDialects=function(){"use strict";__p&&__p();var a=this.getAllMultilingualComposerDialects();b("LanguageDialectSets").getMultilingualDialectsToExclude().forEach(function(b){a["delete"](b)});b("LanguageDialectSets").getMultilingualDialectsToInclude().forEach(function(b){var c=this.getNameForDialect(b);c&&a.set(b,c)}.bind(this));var c=[];a.forEach(function(a,b){return c.push([b,a])});return new Map(c.sort(function(a,b){return a[1].localeCompare(b[1])}))};function a(){"use strict"}e.exports=a}),null);
__d("MultilingualPostStrings",["fbt"],(function(a,b,c,d,e,f,g){a={DELETE:g._("Delete"),EDIT:g._("Edit"),EDIT_POST:g._("Edit Post"),REMOVE:g._("Remove"),CANCEL:g._("Cancel"),WRITE_IN_ANOTHER_LANGUAGE:g._("Write in another language"),WRITE_IN_NEW_LANGUAGE:g._("Write in new language"),WRITE_POST_IN_ANOTHER_LANGUAGE:g._("Write post in another language"),POST_IN_MULTIPLE_LANGUAGES:g._("Post in multiple languages"),MULTILINGUAL_POSTS_DESCRIPTION:g._("Your post will be shown to your followers in a language that is most relevant to them. Comments and likes will be added to the same post."),LINK_TO_MULTILINGUAL_SETTINGS:g._("Turn this option off."),MULTILINGUAL_COMPOSER_NUX:g._("Automatically translate posts to reach your audience in the language they understand."),DROPDOWN_PLACEHOLDER:g._("Type to search"),getEditPostInLanguage:function(a){return g._("Edit Post - {language name}",[g._param("language name",a)])},getViewingLanguage:function(a){return g._("Viewing: {language name}",[g._param("language name",a)])},getDefaultLanguage:function(a){return g._("Default: {language switcher}",[g._param("language switcher",a)])},getSelectLanguage:function(a){return g._("Language: {language switcher}",[g._param("language switcher",a)])},getAuthorTranslationPlaceholder:function(a){return!a?this.WRITE_IN_ANOTHER_LANGUAGE:g._("Write in {language name}...",[g._param("language name",a)])}};e.exports=a}),null);
__d("BusinessConversationLogger",["BusinessConversationEventsTypedLogger"],(function(a,b,c,d,e,f){a={log:function(a,event,c,d,e){d===void 0&&(d=null);var f=e||{};Object.keys(f).forEach(function(a){var b=f[a];(b instanceof Array||b instanceof Object)&&(b=JSON.stringify(b));f[a]=b});new(b("BusinessConversationEventsTypedLogger"))().setPageID(a).setEvent(event).setEventLocation(d).setEventTarget(c).updateExtraData(f).log()}};e.exports=a}),null);
__d("Dimensions",[],(function(a,b,c,d,e,f){"use strict";a={get:function(a){return{fontScale:1,height:550,width:310,scale:2.5}}};e.exports=a}),null);
__d("PixelRatio",["Dimensions"],(function(a,b,c,d,e,f){"use strict";var g={get:function(){return b("Dimensions").get("window").scale},getFontScale:function(){return b("Dimensions").get("window").fontScale||g.get()},getPixelSizeForLayoutSize:function(a){return Math.round(a*g.get())},roundToNearestPixel:function(a){var b=g.get();return Math.round(a*b)/b},startDetecting:function(){}};e.exports=g}),null);