if (self.CavalryLogger) { CavalryLogger.start_js(["ITFx9"]); }

__d("QuickLogActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({START:1,SUCCESS:2,FAIL:3,CANCEL:4,DRAW_COMPLETE:5,ON_RESUME:6,ACTIVITY_CREATED:7,CONSISTENCY_MODEL_UPDATER:8,SEND_MESSAGE:9,SUCCESS_COLD:10,SUCCESS_WARM:11,UI_IDLE:12,PHASE_ONE:13,PHASE_TWO:14,DEQUEUE:15,NETWORK_COMPLETE:16,MEMORY_CACHE_VISIT:17,DISK_CACHE_VISIT:18,CONSISTENCY_UPDATE:19,RETURN_TO_CALLER:20,PHOTO_UPLOAD_COMPLETE:21,USER_NAVIGATION_CANCELLATION:22,DB_FETCH:23,SERVER_FETCH:24,SUCCESS_CACHE:25,SUCCESS_DB:26,SUCCESS_NETWORK:27,SUCCESS_LOCAL_UNSPECIFIED:28,CACHE_UPDATED:29,DB_UPDATED:30,DATA_RECEIVED:31,DRAW_VIEW:32,DATA_EMPTY:33,CACHE_FETCH:34,PREPARE_BEGIN:35,PREPARE_END:36,ASYNC_BEGIN:37,ASYNC_END:38,REMOVE_BEGIN:39,REMOVE_END:40,BROADCAST_DONE:41,ON_RESUME_END:42,ON_ATTACH_END:43,ON_FRAGMENT_CREATE_END:44,ON_CREATE_VIEW_END:45,ON_ACTIVITY_CREATED_END:46,ON_START_END:47,QUEUED:48,IN_PROGRESS:49,INIT:50,UNKNOWN:51,RETRY_AFTER_FAILURE:52,RETRY_AFTER_RECONNECT:53,QUEUEING_BEGIN:54,QUEUEING_SUCCESS:55,QUEUEING_FAIL:56,MESSAGE_UPDATE_START:57,MESSAGE_UPDATE_END:58,PHOTO_CAPTURED:59,MEDIA_PREVIEW_VISIBLE:60,COUNTER:61,INTERACTION_LOAD_TIMELINE_HEADER:62,INTERACTION_LOAD_EVENT_PERMALINK:63,INTERACTION_LOAD_GROUPS_FEED:64,INTERACTION_LOAD_PAGE_HEADER:65,INTERACTION_LOAD_PAGE_HEADER_ADMIN:66,INTERACTION_LOAD_PERMALINK:67,INTERACTION_OPEN_COMPOSER:68,INTERACTION_OPEN_MEDIA_PICKER:69,INTERACTION_OPEN_PHOTO_GALLERY:70,INTERACTION_OPEN_CHECK_IN:71,INTERACTION_LOAD_WEB_VIEW:72,INTENT_MAPPED:73,ACTIVITY_LAUNCHED:74,ACTIVITY_PAUSED:75,ACTIVITY_STARTED:76,ACTIVITY_RESUMED:77,FRAGMENT_CREATED:78,FRAGMENT_RESUMED:79,ACTIVITY_ON_CREATE:80,INTENT_MAPPING_BEGIN:81,FRAGMENT_ON_CREATE:82,FRAGMENT_NEW_INSTANCE:83,MARKER_SWAPPED:84,FRAGMENT_INSTANCE_CREATED:85,PREV_ACTIVITY_PAUSED:86,ERROR:87,METHOD_INVOKE:88,FINALLY:89,PHOTO_DOWNLOAD_COMPLETE:90,MINIPREVIEW_COMPLETE:91,SEARCH_TYPEAHEAD:92,ANIMATION_END:93,UDP_REQUEST_SEND:94,MAIN_COMPLETE:95,INTERRUPTED:96,NETWORK_FAILED:97,NETWORK_RESPONSE:98,EDGE_PROCESSING_BEGIN:99,NEWSFEED_PROCESS_RESPONSE:100,ON_VIEW_CREATED_END:101,DATA_LOAD_START:102,LEGACY_MARKER:103,ACTION_BAR_COMPLETE:104,ABORTED:105,QUERY_READY:106,RTMP_PACKET_RECEIVED:107,REQUESTED_PLAYING:108,RTMP_CONNECTION_REQUESTED:109,RTMP_CONNECTION_RELEASE:110,NEW_START_FOUND:111,MISSED_EVENT:112,TIMEOUT:113,CONTROLLER_INITIATED:114,RTMP_STREAM_PREPARED:115,VIDEO_PLAYING:116,RTMP_CONNECTION_CONNECTED:117,RTMP_CONNECTION_FAILED:118,RTMP_CONNECTION_INTERCEPTED:119,VIDEO_SET_RENDERER_CONTEXT:120,HEADER_DATA_LOADED:121,CARD_DATA_LOADED:122,VIEW_WILL_APPEAR_BEGIN:123,VIEW_DID_LOAD_BEGIN:124,COMPONENTS_DATA_SOURCE_WILL_BEGIN_UPDATES:125,COMPONENTS_DATA_SOURCE_DID_END_UPDATES:126,LOAD_VIEW_BEGIN:127,RTMP_FIRST_KEY_FRAME_RECEIVED:128,MESSENGER_QUEUE_CREATION:129,APP_DID_FINISH_LAUNCHING:130,APP_DID_BECOME_ACTIVE:131,APP_WILL_ENTER_FOREGROUND:132,APP_DID_ENTER_BACKGROUND:133,APP_MAIN:134,MQTT_CONNECTING:135,MQTT_CONNECTED:136,MQTT_DISCONNECTED:137,MESSENGER_DELTA_REQUEST:138,APP_FIRST_VIEW_CONTROLLER:139,MESSENGER_THREAD_LIST_LOADED:140,MESSENGER_THREAD_LIST_DISPLAYED:141,PREV_ACTIVITY_PAUSE:142,ACTIVITY_RESUME:143,ACTIVITY_START:144,BEGIN_START_ACTIVITY:145,END_START_ACTIVITY:146,FILE_SYSTEM_FAIL:147,FORMAT_ERROR:148,PRIVACY_VIOLATION:149,NETWORK_RESPONSE_INITIAL_SCAN:150,POPULATE_CONSISTENCY_MEMORY_CACHE:151,APPLY_OPTIMISTICS:152,APPLY_FINISHED_LIST:153,APPLY_FINISHED_LIST_AGAIN:154,FUTURE_LISTENERS_COMPLETE:155,SERVICE_ON_START_COMMAND:156,WAIT_FOR_BLOCKERS:157,NOTIFY_SUBSCRIBERS:158,FAIL_FILE_TOO_LARGE:159,OFFLINE:160,ASNYC_FAILED:161,ASYNC_FAIL:162,ON_ATTACH_FRAGMENT:163,VIEW_DID_APPEAR_BEGIN:164,DISPLAYED:165,DISPLAYED_ON_SCREEN:166,ASYNC_ACTION_SUCCESS:167,ASYNC_ACTION_FAIL:168,CONNECTIVITY_CHANGED:169,VIDEO_DISPLAYED:170,VIDEO_REQUESTED_PLAYING:171,LOADED_AUDIO_SESSION:172,LOADED_CAMERA_SESSION:173,SUCCESS_OPTIMISTIC:174,OUT_OF_ORDER:175,NOT_READY:176,JSON_PARSE:177,FILE_NOT_FOUND:178,METABOX_COMPLETE:179,CALL_TO_ACTION_COMPLETE:180,HEADER_DRAW_COMPLETE:181,COVER_PHOTO_COMPLETE:182,COMPONENT_WILL_CREATE:183,COMPONENT_DID_CREATE:184,COMPONENT_WILL_LAYOUT:185,COMPONENT_DID_LAYOUT:186,COMPONENT_WILL_MOUNT:187,COMPONENT_DID_MOUNT:188,PRECALCULATE_EDGES:189,UI_THREAD_DEQUEUE:190,CALLBACKS_COMPLETE:191,CALLBACKS_DISPATCHED:192,NETWORK_PARSE_COMPLETE:193,START_LOADING_JS_BUNDLE:194,FINISH_LOADING_JS_BUNDLE:195,START_EXECUTING_JS_BUNDLE:196,FINISH_EXECUTING_JS_BUNDLE:197,START_CALLING_JS_FUNCTION:198,FINISH_CALLING_JS_FUNCTION:199,CREATED_MODEL_FILE:200,DB_SUPPLIER_GET:201,BEGIN_TRANSACTION:202,FILE_FLUSHED:203,OPTIMISTIC_UPDATES_APPLIED:204,FRAGMENT_VISIBLE:205,STALE:206,SUCCESS_GET_MODEL:207,FAIL_GET_MODEL:208,ALREADY_SEEN:209,UNKNOWN_SEEN_STATE:210,CREATED_INTENT:211,INVALID_INTENT:212,SHOW_NOTIFICATION:213,SUCCESS_FETCH_IMAGE:214,FAIL_FETCH_IMAGE:215,DROPPED:216,QUERY_CHUNKS:217,QUERY_ROWS:218,COMPUTE_CHUNKS:219,SCROLL_COMPLETE:220,USE_INSTANCE_STATE:221,USE_ARGUMENTS:222,OFFSCREEN:223,LOG_READ:224,LOG_COMPACTED:225,LOG_WRITER_OPENED:226,TAB_SWITCH:227,EXIT_VIEW_CONTROLLER:228,TAGS_PREPARED:229,VIEW_DID_APPEAR:230,MEDIA_TOO_SMALL:231,ITEM_SELECTED:232,REPOSITIONED:233,PHOTO_UPLOAD_START:234,MEDIA_EDIT:235,MEDIA_EDIT_COMPLETE:236,VIDEO_PAUSE:237,VIDEO_COMPLETE:238,VIDEO_PLAYING_TIMEOUT:239,VIDEO_PLAYING_QPL_TIMEOUT:240,SESSION_OPEN:241,SCHEMA_HASH_MISMATCH:242,OVERRIDES_EXIST:243,DI_DONE:244,FLATBUFFER_SCHEMA_ABSENT:245,SUCCESS_NONEXISTENCE:246,VIDEO_CANCELLED:247,MESSENGER_QUEUE_CREATION_FAILURE:248,MESSENGER_DELTA_REQUEST_FAILURE:249,RETURN_EXCEPTION_TO_CALLER:250,SURFACE_TEXTURE_AVAILABLE:251,NEWS_FEED_FRAGMENT:252,HEADER_CACHE_FETCH_STARTED:253,CHANGESET_ENQUEUED:258,RTC_BROADCAST_INITIALIZED:259,RTC_STREAMING_INITIALIZED:260,RTC_STREAMING_STARTED:261,CAMERA_VIDEO_OUTPUT_SWITCHED:262,RTMP_STREAM_STOPPED:263,LOCATION_FETCH_BEGIN:264,LOCATION_FETCH_SUCCESS:265,LOCATION_FETCH_FAILED:266,FIRST_UPDATE_SUCCESS:267,FIRST_UPDATE_FAILURE:268,RTMP_STREAMING_HANDLED_FRAME:269,RTMP_DVR_HANDLED_FRAME:274,LIVE_RTMP_STREAMING_HANDLED_FRAME:275,LIVE_RTMP_DVR_HANDLED_FRAME:276,PASS_QE_CHECK:277,PASS_AD_CHECK:278,PASS_SAMPLE_RATE_CHECK:279,HAS_VALID_HTML:280,FOUND_IMAGES:281,TIGON_REQUEST_BEGIN:282,TIGON_REQUEST_END:283,TIGON_RESPONSE_BEGIN:284,TIGON_RESPONSE_END:285,TIGON_PARSE_BEGIN:286,TIGON_PARSE_END:287,GRAPHQL_CACHE_FETCH_START:288,GRAPHQL_CACHE_FETCH_END:289,VIDEO_START_STALL:290,VIDEO_END_STALL:291,MERGE_LOCAL_FIELDS:292,LOAD_QUERY_STRING:293,CONFIG_TABLE_SCHEMA_HASH_MISMATCH:294,CONFIG_TABLE_SCHEMA_ABSENT:295,CONFIG_TABLE_MAGIC_MISMATCH:296,OBJSEL_FETCH:297,GO_TO_AD_ACTIVITY:298,SAVE_AD:299,UNSAVE_AD:300,SAVE_MODE:301,GO_AD_ACTIVITY_MODE:302,ACCESSIBILITY_ACTIVATE:303,ACCESSIBILITY_CUSTOM:304,ACCESSIBILITY_MAGIC_TAP:305,FINAL_IMAGE_SET:306,INTERMEDIATE_IMAGE_SET:307,INTERMEDIATE_IMAGE_FAIL:308,INTERMEDIATE_IMAGE_GOOD_ENOUGH_SET:309,APP_BACKGROUND:310,APP_FOREGROUND:311,RECEIVED_HARDWARE_FRAME:312,CAMERA_COMPONENT_MOUNTED:313,MQTT_CONNECTION_ATTEMPTED:314,DELTA_APPLICATION_COMPLETED:325,DELTAS_RECEIVED_AFTER_CONNECT:326,MESSENGER_DAY_UNIT_DISPLAYED:327,DATA_LOAD_END:328,VIEW_DID_BECOME_VISIBLE:329,DELTA_APPLICATION_INTERRUPTED:330,DELTA_BATCH_APPLICATION_COMPLETED:331,MESSAGE_LIST_DID_UPDATE:332,MESSAGE_LIST_WILL_UPDATE:333,SUCCESS_ZERO_WAIT_TIME:334,USER_SCROLLED:335,SPINNER_APPEARED:336,MODEL_ENQUEUED:337,VIEW_MODEL_APPLIED:338,PRESENTED:339,VIEW_DID_BECOME_VISIBLE_END:340,MESSENGER_DELTA_REQUEST_INIT:341,FEED_REQUEST_STARTED:342,FEED_REQUEST_FAILED:343,FEED_REQUEST_SUCCEEDED:344,FEED_LOAD_FROM_DISK_FINISHED:345,STORIES_REQUEST_STARTED:346,STORIES_REQUEST_FAILED:392,STORIES_REQUEST_SUCCEEDED:393,STORIES_LOAD_FROM_DISK_FINISHED:394,USER_INFO_LOADED:395,APP_CREATED:396,INIT_TO_USABLE:397,INIT_TO_NETWORK_CONTENT:398,TOTAL:399,HEAD:400,TAIL:401,INITIAL:402,OTHER:403,ANR_START_DATA_CAPTURE:404,ANR_ENQUEUE:405,NOTIF_NOT_ALERTED:406,NOTIF_DUPLICATE:407,NOTIF_MUTED:408,NOTIF_BUZZED:409,FEED_RESPONSE_PROCESSED:410,STORIES_RESPONSE_PROCESSED:411,APP_DID_FINISH_LAUNCHING_ENDED:412,ASYNC_BEGIN_DB:413,DELTA_APPLICATION_STARTED:414,ASYNC_SUCCESS_DB:415,ASYNC_FAIL_DB:416,ASYNC_BEGIN_SERVER:417,ASYNC_SUCCESS_SERVER:418,ASYNC_FAIL_SERVER:419,LEAVE:420,ASYNC_SUCCESS_DB_NO_DATA:429,ASYNC_FAIL_SERVER_NO_DATA:430,SUCCESS_MEMORY:431,SUCCESS_SERVER:432,FAIL_NO_DATA:433,ACTIVITY_NEW_INTENT:434,GRID_MEDIA_LOADED:435,STORY_TRAY_MEDIA_LOADED:436,INTERACTION_OPEN_QRCODE_SCANNER:437,MEDIA_LOAD_CACHE:438,MEDIA_LOAD_NETWORK:439,COMMENTS_LOAD_START:440,COMMENTS_LOAD_COMPLETE:441,MEDIA_LOAD_START:442,SCROLL_START:443,QRCODE_SCANNER_SCAN_SUCCESS:444,QRCODE_SCANNER_SCAN_FAILURE:445,APP_CREATED_MAIN_PROCESS:446,FINISH_REGISTERING_JS_NATIVE_MODULES:447,NON_ANR:448,FINISH_INITIALIZING_JS_BRIDGE:449,FINISH_INJECTING_JS_HOOKS:450,FINISH_RUNNING_JS_INITIALIZER:451,UI_RESPONSIVE:452,PHASE_ONE_COMPLETE:453,PHASE_TWO_COMPLETE:454,LS_HEADER_START:455,LS_HEADER_LOAD:456,LS_BODY_START:457,LS_BODY_LOAD:458,APP_ONCREATE:459,START_FETCH_IMAGE:460,LOGGED_OUT:461,LS_HEADER_LAYOUT_SUCCESS:462,STARTED_CAPTURE_SESSION:463,CAMERA_VIEW_READY:464,CAMERA_FIRST_FRAME:465,PHOTO_BITMAP_READY:466,END:467,FRAME_RENDERED:468,LS_MAP_LIST_START:469,LS_MAP_LIST_LOADED:470,LS_MAP_LIST_SUCCESS:471,FETCH_THREAD_STARTED:472,FETCH_THREAD_SUCCEEDED:473,FETCH_THREAD_FAILED:474,STRUCTURE_FETCH_COMPLETE:475,FOLLOWED_SHOWS_FETCHED:476,ABANDONED:477,ENTERED:478,LS_FILTER_START:479,LS_FILTER_LOAD:480,LS_FILTER_SUCCESS:481,LS_SEARCH_RESULT_START:482,LS_SEARCH_RESULT_LOAD:483,NETWORK_PARSE_START:484,NETWORK_REQUEST_SENT:485,COMPONENT_DATA_MODEL_UPDATE_START:486,COMPONENT_DATA_MODEL_UPDATE_COMPLETE:487,HIGH_RES_PHOTO_FILE_READY:488,NATIVE_PHOTO_BITMAP_READY:489,REEL_JSON_RECEIVED:490,REEL_MEDIA_RECEIVED:491,STORY_VIEWER_APPEAR:492,FETCH_INBOX_STARTED:493,FETCH_INBOX_SUCCEEDED:494,FETCH_INBOX_FAILED:495,REQUEST_ADDED:496,INIT_QE_START:497,INIT_QE_END:498,MULTIDEX_INSTALLED:499,PREPARE_CAMERA_SESSION:500,START_CAMERA_SESSION:501,DID_START_CAMERA_SESSION:502,FIRST_HARDWARE_FRAME:503,START_RENDERING_FIRST_USER_FRAME:504,FIRST_MEDIA_RENDERED:505,FIRST_CACHED_MEDIA_RENDERED:506,CAMERA_INITIALIZED:507,HTTP_TRANSACTION_STARTED:508,REMOTE_PROCESS:509,PRE_REQUEST_SEND_CALLED:510,BRIDGE_STARTUP_WILL_START:511,BRIDGE_STARTUP_DID_FINISH:512,COVER_PHOTO_LOW_RES:513,COVER_PHOTO_HIGH_RES:514,PROFILE_PIC_LOW_RES:515,PROFILE_PIC_HIGH_RES:516,CONTEXT_ITEMS:517,MEDIA_LOADED:518,STATE_UPDATE:519,ON_SHOW_LOGIN:520,EMPTY_REQUEST:521,METERED_CONNECTION:522,VIDEO_DOWNSTREAM_FORMAT_CHANGED:523,DISABLED:524,NO_METADATA:525,INCOMPLETE_METADATA:526,PHOTO_CAPTURE_READY:527,CAMERA_START_READY:528,DELAY_START:529,DELAY_STOP:530,RANK_START:531,RANK_STOP:532,DB_WRITE_START:533,DB_WRITE_STOP:534,ADD_STORY_TO_UI:535,WEBVIEW_URI_REDIRECTOR_CONSTRUCTION:536,UNINTERRUPTED:537,VIDEO_TOGGLE_FULL_SCREEN:538,CONFIGURE_START:539,CONFIGURE_END:540,BROWSER_OPEN:541,FIRST_DATA_RECEIVED:542,RVP_WILL_LOAD:543,RVP_DID_LOAD:544,CACHE_WRITE_START:545,CACHE_WRITE_SUCCESS:546,CACHE_WRITE_FAIL:547,RVP_WILL_PAUSE:548,RVP_DID_PAUSE:549,RVP_WILL_PLAY:550,RVP_DID_PLAY:551,RVP_WILL_PREPARE:552,RVP_DID_PREPARE:553,RVP_WILL_RELOAD:554,RVP_DID_RELOAD:555,RVP_WILL_CREATE:556,RVP_DID_CREATE:557,RVP_WILL_FINISH_INFLATE:558,RVP_DID_FINISH_INFLATE:559,RVP_WILL_MOUNT:560,RVP_DID_MOUNT:561,START_COMPRESSING_MESSAGE:562,MESSAGE_COMPRESSED:563,START_DECOMPRESSING_MESSAGE:564,MESSAGE_DECOMPRESSED:565,START_SENDING_MESSAGE:566,CAMERA_PREVIEW_FROZEN:567,VC_INIT_START:569,VC_INIT_BEGIN:570,VC_INIT_END:571,VC_VIEW_DID_LOAD_BEGIN:572,VC_VIEW_DID_LOAD_END:573,ROOT_QUERY_START:574,ROOT_QUERY_SUCCESS:575,ROOT_QUERY_FAIL:576,CACHE_INITIALIZED:577,FETCH_BEGIN:578,FETCH_FINISHED:579,PARSING_FINISHED:580,LOAD_VIEW_END:581,LOAD_URL_BEGIN:582,LOAD_URL_END:583,SHOULD_LOAD_URL_BEGIN:598,SHOULD_LOAD_URL_END:599,BLOCKING_RESOURCES_LOADED:600,WEB_PAGE_LOADED:601,JS_TEARDOWN:603,JS_SETUP:604,PREP_STATE:605,PREP_FORMS:606,RUN_FUNCTION:610,LOAD_MODULES:613,VIDEO_READY_TO_PLAY:614,CANCEL_NAVIGATION:615,BEGIN_HANDLE_EVENT:626,END_HANDLE_EVENT:627,BEGIN_PROCESS_EVENT:628,END_PROCESS_EVENT:629,CANCEL_BACKGROUND:630,SC_TRACKER_SETUP_BEGIN:631,SC_TRACKER_SETUP_END:632,PROFILE_TOOLBOX_SETUP_BEGIN:633,PROFILE_TOOLBOX_SETUP_END:634,FEED_TOOLBOX_SETUP_BEGIN:635,FEED_TOOLBOX_SETUP_END:636,SCREEN_PART_RECEIVED:637,RVP_DID_FAIL_AUTOPLAY:638,VIEW_WILL_APPEAR_END:639,VIDEO_RENDERED:640,VIEW_DID_APPEAR_END:641,SHARE_FLOW_LOADED:642,START_DOWNLOAD_FACE_DETECTION_EFFECT:643,APPLY_FACE_DETECTION_EFFECT:644,INTERACTION_SWIPE_UP:645,LOOM_PROVIDER_FAILURE:646,ADS_SELECT_POST_VIEW:647,ADS_SELECT_IMAGE_VIEW:648,ADS_SELECT_BUDGET_VIEW:649,ADS_SELECT_AUDIENCE_VIEW:650,ADS_SELECT_CREATIVE_VIEW:651,VIDEO_FETCH_REQUEST_START:652,VIDEO_FETCH_REQUEST_RECEIVED:653,VIDEO_FETCH_REQUEST_ENTER_NETWORK_QUEUE:654,VIDEO_FETCH_REQUEST_NETWORK_REQUEST_START:655,VIDEO_FETCH_REQUEST_NETWORK_RESPONSE_RECEIVED:656,VIDEO_FETCH_REQUEST_NETWORK_FIRST_BYTE_ARRIVED:657,VIDEO_FETCH_REQUEST_NETWORK_TRANSFER_COMPLETE:658,VIDEO_FETCH_REQUEST_SATISFIED_BY_CACHE:659,VIDEO_FETCH_REQUEST_COMPLETE:660,VIDEO_FETCH_REQUEST_CACHE_CHECK_START:661,VIDEO_FETCH_REQUEST_CACHE_CHECK_END:662,VIDEO_FETCH_REQUEST_DID_ATTACH_TO_NETWORK_REQUEST:663,SELECT_PHOTOS_FAILED_SCORE:664,SELECT_PHOTOS_FAILED_TIMESTAMP:665,INTERACTION_CLICK:666,VIDEO_SCRUBBER_FIRST_THUMBNAIL_SHOWN:667,VIDEO_SCRUBBER_THUMBNAIL_SHOWN:668})}),null);
__d("XSalesPromoWWWDetailsDialogAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sales_promo/details/",{offer_id:{type:"FBID",required:!0},referrer:{type:"String"}})}),null);