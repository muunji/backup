(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5962],{199324:(e,t,n)=>{n.d(t,{Z:()=>s});const s=["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto","Oxygen-Sans","Ubuntu","Cantarell",'"Fira Sans"','"Droid Sans"','"Helvetica Neue"',"Helvetica",'"ヒラギノ角ゴ Pro W3"','"Hiragino Kaku Gothic Pro"',"メイリオ","Meiryo",'"ＭＳ Ｐゴシック"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},501338:(e,t,n)=>{n.d(t,{Z:()=>s});const s=80},150461:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(667294),a=n(199324),i=n(898781),o=n(883119),r=n(785893);function l({dataTestId:e,focusOptionId:t,isFocused:n,name:l,onBlur:c,onChange:h,onClick:d=(()=>{}),onFocus:u,onKeyDown:_,onSearchTrigger:p,placeholder:g,value:x,disabled:b=!1}){const m=(0,i.ZP)(),f=(0,s.useRef)(null);return(0,s.useEffect)((()=>{f.current&&p&&f.current.addEventListener("searchTrigger",p)}),[]),(0,s.useEffect)((()=>{if(!f.current)return;document.activeElement===f.current!==n&&(n?f.current.focus():f.current.blur())}),[n]),(0,r.jsxs)(o.xu,{height:"100%",flex:"grow",children:[(0,r.jsx)("input",{autoCapitalize:"off",autoCorrect:"off",autoComplete:"off","aria-activedescendant":t,"aria-autocomplete":"list","aria-controls":"SuggestionsMenu","aria-describedby":"searchBoxAccessibleText","aria-label":m.bt("검색", "Search", "searchBox.searchInput.placeholder", undefined, true),"aria-expanded":n,"data-test-id":e,name:l,onBlur:c,onChange:e=>{h(e.target.value)},onClick:d,onFocus:u,onKeyDown:_,placeholder:g||m.bt("검색", "Search", "searchBox.searchInput.placeholder", undefined, true),ref:f,role:"combobox",style:{backgroundColor:"transparent",border:"none",color:"#333",fontFamily:a.Z,fontSize:16,fontWeight:"normal",height:"100%",outline:"none",padding:"0",width:"100%"},type:"text",value:x,disabled:b}),(0,r.jsx)(o.xu,{display:"none",id:"searchBoxAccessibleText",children:m.bt("자동 완성 결과를 이용할 수 있게 되면 위아래 화살표를 사용하여 결과를 확인하고 엔터를 눌러 선택하세요. 터치 디바이스 사용자는 터치하거나 손가락으로 밀어서 탐색하세요.", "When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.", "searchBox.searchInput.accessibleText", undefined, true)})]})}},851516:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var s=n(698846),a=n(447409),i=n(50286),o=n(143892),r=n(348584),l=n(773285),c=n(780280),h=n(53987),d=n(883119),u=n(276775),_=n(785893);const p=new d.Ry(5),g=({deviceType:e})=>{const t=(0,u.useLocation)(),n=(0,r.Z)(),i=(0,o.Z)(),{checkExperiment:d}=(0,l.F)(),{isAuthenticated:p,isBot:g}=(0,c.B)(),x=!p&&!g&&("phone"===e||"tablet"===e)&&(0,h.Fr)(t);return"tablet"===e?!(0,h.En)(t)&&!(0,h.Xn)(t)&&!x&&(0,_.jsx)(s.Z,{}):("enabled_ignore_app_upsell_eligibility"===d("pcons_header_on_created_and_saved_tab").group?!n&&!x:"enabled"===d("pcons_header_on_created_and_saved_tab").group?i&&!n&&!x:i&&(!(e=>e.pathname.includes("_created")||e.pathname.includes("boards")||e.pathname.includes("_saved"))(t)||"enabled_add_tabs"===d("pcons_header_on_created_and_saved_tab").group)&&!n&&!x)&&(0,_.jsx)(a.Z,{})};function x({showDesktopSignupModal:e}){const t=(0,i.ZP)(),n=(0,u.useLocation)();if("desktop"===t)return!(e=>(0,h.Ni)(e)||(0,h.Xn)(e)||(0,h.C$)(e)||(0,h.kY)(e)||"/invited/"===e.pathname)(n)&&(0,_.jsx)(s.Z,{showDesktopSignupModal:e&&(t=>e({signupFlow:"login"===t?{type:"login"}:{type:"signup"},attributionLabel:"login"===t?"click_login_on_header":"click_signup_on_header",source:"login"===t?"login":"defaultSource",container:"unauth_header",reason:"CLICK_LOGIN_OR_SIGNUP"}))});const a=(0,_.jsx)(g,{deviceType:t});return(0,_.jsx)(d.Le,{top:0,zIndex:p,children:(0,_.jsx)(d.xu,{color:"default",children:a})})}},698846:(e,t,n)=>{n.d(t,{Z:()=>N});var s=n(667294),a=n(598615),i=n(501338),o=n(158989),r=n(319915),l=n(898781),c=n(52022),h=n(883119),d=n(773285),u=n(784641),_=n(780280),p=n(276775),g=n(224525),x=n(785893);function b({isDesktop:e}){const t=(0,l.ZP)(),n=(0,p.useRouteMatch)(),s=(0,c.Z)(),{country:a,isAuthenticated:i,locale:o}=(0,_.B)(),r=(0,u.bl)(),b="en"===o.slice(0,2),m=b,f=b,{checkExperiment:y}=(0,d.F)(),v=!i&&f&&y("unauth_shop_landing_page").anyEnabled,k=[];r&&k.push({text:t.bt("투데이 탭", "Today", "unauth.header.tabs.today", undefined, true),href:(0,g.tG)()}),m&&k.push({text:t.bt("보기", "Watch", "unauth.header.tabs.videos", undefined, true),href:"/videos/"}),v&&k.push({text:t.bt("쇼핑", "Shop", "unauth.header.tabs.shop", undefined, true),href:"/shopping/"}),k.push({text:i||"JP"!==a?t.bt("탐색", "Explore", "unauth.header.tabs.ideas", undefined, true):t.bt("아이디어 탐색하기", "Explore ideas", "unauth.header.tabs.ideas.jp", undefined, true),href:"/ideas/"});let w=-1;return n.path.startsWith("/today/")?w=k.findIndex((e=>e.href===(0,g.tG)())):n.path.startsWith("/ideas/")?w=k.findIndex((e=>"/ideas/"===e.href)):n.path.startsWith("/videos/")?w=k.findIndex((e=>"/videos/"===e.href)):n.path.startsWith("/shopping/")&&(w=k.findIndex((e=>"/shopping/"===e.href))),(0,x.jsx)(h.mQ,{activeTabIndex:w,onChange:({activeTabIndex:t})=>{k[t].href===(0,g.tG)()?s({action:"click",item:"site-map-today"}):"/videos/"===k[t].href?s({action:"click",item:"site-map-videos"}):"/ideas/"===k[t].href?s({action:"click",item:"site-map-ideas"}):"/shopping/"===k[t].href&&s({action:"click",item:"root-nav-shopping"}),e&&(window.location.href=k[t].href)},tabs:k})}var m=n(947599),f=n(794230),y=n(56641),v=n(862628),k=n(995228),w=n(150461),S=n(784590),j=n(425288);const{Provider:C,useHook:P}=(0,j.Z)("UnauthHeaderContext");var A=n(112690),z=n(867820);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T=(0,s.lazy)((()=>n.e(40319).then(n.bind(n,940319))));function B({pathname:e,search:t}){const n=e.includes("/password/reset");if(!t||n)return"";const s=t.substring(1);try{const e=JSON.parse('{"'+s.replace(/&/g,'","').replace(/=/g,'":"')+'"}',((e,t)=>""===e?t:decodeURIComponent(t)));if(e.q)return e.q}catch(a){return""}return""}class Z extends s.PureComponent{constructor(e){super(e),I(this,"onResize",(()=>{this.setState({windowHeight:window.innerHeight})})),I(this,"handleTypeaheadItemHover",(e=>{this.setState({hoverItem:e})})),I(this,"handleTypeaheadItemSelected",((e,t)=>{const n=(0,v.Z)(t),s=e.query||"";let a=e.url;if(a){const e={eq:n,etslf:Date.now()-this._lastFocused};a=(0,f.Z)(a,e),this.setState({focused:!1,hoverItem:void 0,text:s,query:s}),this.navigate(s,a)}})),I(this,"handleTypeaheadMouseOut",(()=>{this.setState({hoverItem:void 0})})),I(this,"handleBlur",(()=>{this.props.onBlur&&this.props.onBlur(),this.setState({focused:!1})})),I(this,"handleClick",(()=>{this.props.trackInteraction({action:"click",item:"search-input"}),this.setState({focused:!0})})),I(this,"handleFocus",(()=>{(0,z.My)("unauth.search_box.click.focus"),(0,z.NC)("focus_search_box",!0),this._lastFocused=Date.now(),this.setState({focused:!0})})),I(this,"handleKeyDown",(e=>{const t=this.state.hoverItem;switch(e.key){case"Enter":this.handleSubmit(e);break;case"Escape":this.handleBlur();break;case"ArrowUp":case"ArrowDown":e.preventDefault();const n="ArrowUp"===e.key,s=this.state.typeaheadSuggestions;let a;a=t?s.indexOf(t)+(n?-1:1):n?s.length-1:0,this.handleTypeaheadItemHover(s[a])}})),I(this,"handleSubmit",(e=>{(0,z.My)("unauth.search_box.submit-search"),e.preventDefault(),this.state.hoverItem?this.handleTypeaheadItemSelected(this.state.hoverItem,this.state.text):this.handleTypedSubmission(e)})),I(this,"handleTypeaheadSuggestionsChange",(e=>{this.setState({typeaheadSuggestions:e})})),I(this,"handleTypedSubmission",(e=>{const t=this.state.text.trim();if(""===t)return;const n=encodeURIComponent(t),s=this.state.currentScope||"pins";let a="recent_week"===this.state.currentBoost?`/search/pins/recent/?q=${n}`:`/search/${s}/?q=${n}`;a+="&rs=typed";const i=(0,v.Z)(t);this.setState({text:i,query:i}),this.handleBlur(),this.navigate(t,a)})),I(this,"handleTextChange",(e=>{this.state.hoverItem?this.setState({hoverItem:void 0,text:e}):this.setState({text:e})})),I(this,"clearAndFocusSearchBox",(()=>{this.setState({text:"",query:"",focused:!0})}));const t=B(e.location);this.state={currentBoost:"",currentScope:"",focused:!!e.initialFocus,hoverItem:void 0,prevOriginalQuery:e.initialText||t,query:t,text:t||e.initialText||"",typeaheadSuggestions:[],windowHeight:void 0}}componentDidMount(){this.onResize(),window.addEventListener("resize",this.onResize)}static getDerivedStateFromProps({initialText:e,location:t},{prevOriginalQuery:n}){const s=e||B(t);return s!==n?{prevOriginalQuery:s,currentBoost:"",text:s,query:s,currentScope:"",hoverItem:void 0}:{}}componentWillUnmount(){window.removeEventListener("resize",this.onResize)}logSearchPinNavigateClick(){this.props.logContextEvent({component:43,element:227,event_type:101,view_type:2,view_parameter:43}),(0,z.My)("unauth.search_box.search")}navigate(e,t){this.logSearchPinNavigateClick(),(0,y.Z)(t,!1),setTimeout((()=>{(0,z.NC)("searchbox_query",!0)}),0)}render(){const{headerOffsetTop:e,i18n:t}=this.props,{focused:n,hoverItem:s,query:a,text:o,windowHeight:l}=this.state,c=n&&a?"":t.bt("쉽게 만들 수 있는 저녁 메뉴, 패션 등을 검색해 보세요.", "Search for easy dinners, fashion, etc.", " - ", undefined, true);let d;if(l&&this._form&&this._form.getBoundingClientRect){d=l-14-this._form.getBoundingClientRect().bottom}const u=i.Z+e;return(0,x.jsx)(h.kC,{alignItems:"stretch",justifyContent:"start",flex:"grow",children:(0,x.jsxs)(h.kC,{alignItems:"stretch",justifyContent:"start",flex:"grow",children:[n&&(0,x.jsx)(h.xu,{position:"fixed",right:!0,bottom:!0,left:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0,0,0,0.4)",top:`${u}px`}}}),(0,x.jsx)("form",{action:"/search/pins/",method:"get",name:"search",onSubmit:this.handleSubmit,ref:e=>{this._form=e},style:{flexGrow:"1"},children:(0,x.jsxs)(h.xu,{display:"block",position:"relative",width:"100%",children:[(0,x.jsxs)(h.xu,{alignItems:"center",borderStyle:"lg",color:"default",display:"flex",height:48,position:"relative",rounding:6,children:[(0,x.jsx)("em",{}),(0,x.jsx)(h.xu,{flex:"none",marginStart:4,marginEnd:2,children:(0,x.jsx)(h.JO,{accessibilityLabel:t.bt("검색", "search", "accessible label for search icon", undefined, true),icon:"search",size:16})}),(0,x.jsxs)(h.kC,{alignItems:"center",flex:"grow",justifyContent:"start",overflow:"hidden",children:[(0,x.jsx)(w.Z,{dataTestId:"search-input",isFocused:n,name:"q",onBlur:this.handleBlur,onChange:this.handleTextChange,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,placeholder:c,value:s&&s.label||o}),o&&(0,x.jsx)(h.xu,{marginEnd:1,children:(0,x.jsx)(h.hU,{accessibilityLabel:t.bt("취소", "cancel", "accessible label for cancel icon", undefined, true),icon:"clear",onClick:this.clearAndFocusSearchBox,size:"md",iconColor:"gray"})})]})]}),(0,x.jsx)(r.Z,{name:"SafeSuspense_UnauthHeaderSearchBox_SearchTypeahead",children:(0,x.jsx)(k.Z,{children:(0,x.jsx)(T,{emptySuggestions:this.props.emptySuggestions,focused:n,hoverItem:this.state.hoverItem,maxHeight:d,onBlur:this.handleBlur,onHover:this.handleTypeaheadItemHover,onTypeaheadItemSelected:this.handleTypeaheadItemSelected,onTypeaheadMouseOut:this.handleTypeaheadMouseOut,onTypeaheadSuggestionsChange:this.handleTypeaheadSuggestionsChange,typeaheadSuggestions:this.state.typeaheadSuggestions,value:o})})})]})})]})})}}function L(e){const t=(0,A.Z)(),n=(0,c.Z)(),s=(0,l.ZP)(),{headerOffsetTop:a=0}=P(),i=(0,p.useLocation)(),{anyEnabled:o}=(0,d.F)().checkExperiment("dweb_unauth_slp_content"),{data:r}=(0,S.Z)({name:"SearchTabResource"});return(0,x.jsx)(Z,{...e,emptySuggestions:o&&null!=r?r:[],headerOffsetTop:a,i18n:s,location:i,logContextEvent:t,trackInteraction:n})}var E=n(941646),D=n(53987);const F=(0,s.lazy)((()=>n.e(80673).then(n.bind(n,580673)))),U=(0,s.forwardRef)((({isDesktop:e,onPrimaryButtonClick:t,onLoginButtonClick:n,primaryButtonText:a},o)=>{const[u,_]=(0,s.useState)(!1),g=(0,l.ZP)(),f=(0,p.useLocation)(),y=(0,s.useRef)(null),v=(0,s.useRef)(null),k=(0,s.useRef)(null),{checkExperiment:w}=(0,d.F)(),S=(0,c.Z)(),j=e&&(0,D.C$)(f),C=e&&!(0,D.C$)(f),[P,A]=(0,D.C$)(f)&&["red","gray"]||(0,D.uM)(f)&&["transparent","gray"]||["gray","red"];return(0,s.useEffect)((()=>{if(C){const e=e=>{var t,n;null!==(t=k.current)&&void 0!==t&&t.contains(e.target)||null!==(n=v.current)&&void 0!==n&&n.contains(e.target)||_(!1)};return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}}),[C]),(0,x.jsxs)(h.xu,{alignItems:"center",color:"default",direction:"row",display:"flex",height:i.Z,justifyContent:"between",padding:4,ref:o,width:"100%",children:[(0,x.jsxs)(h.kC,{alignItems:"center",direction:"row",justifyContent:"start",children:[(0,x.jsx)(h.iP,{onTap:()=>{S({action:"click",item:"pinterest-logo",within:"unauth-header"})},children:(0,x.jsx)(E.Z,{id:"unauth-header-logo",children:(0,x.jsx)(h.rU,{href:"/",target:"self",display:"inlineBlock",tapStyle:"compress",rounding:"pill",underline:"none",onClick:({dangerouslyDisableOnNavigation:e})=>e(),children:(0,x.jsxs)(h.xu,{display:"flex",alignItems:"center",direction:"row",paddingX:3,children:[(0,x.jsx)(h.JO,{accessibilityLabel:g.bt("Pinterest", "Pinterest", "Pinterest logo", undefined, true),icon:"pinterest",size:j?32:24,color:"brandPrimary"}),e&&(0,x.jsx)(h.xu,{marginStart:1,dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},onClick:()=>{S({action:"click",item:"pinterest-logo"})},children:(0,x.jsx)(h.X6,{size:"400",color:"error",overflow:"normal",accessibilityLevel:j?1:2,children:g.bt("Pinterest", "Pinterest", "Company name", undefined, true)})})]})})})}),!((0,D.C$)(f)&&e)&&(0,x.jsx)(b,{isDesktop:e})]}),!(0,D.C$)(f)&&(0,x.jsx)(h.xu,{display:"none",mdDisplay:"block",flex:"grow",paddingX:2,children:(0,x.jsx)(L,{})}),(0,x.jsxs)(h.kC,{alignItems:"center",direction:"row",flex:"none",justifyContent:"start",children:[(0,D.C$)(f)&&(0,x.jsxs)(h.xu,{display:"flex",alignItems:"center",justifyContent:"between",marginEnd:6,children:[(0,x.jsx)(h.xu,{margin:4,"data-test-id":"header-about-button",children:(0,x.jsx)(h.xv,{weight:"bold",children:(0,x.jsx)(h.rU,{href:"/_/_/about/",target:"blank",onClick:()=>{(0,z.My)("unauth.homepage_redesign.about_button_click"),S({action:"click",item:"header-about-button"})},children:g.bt("소개", "About", "Link to page describing what Pinterest is.", undefined, true)})})}),(0,x.jsx)(h.xu,{margin:4,"data-test-id":"header-business-button",children:(0,x.jsx)(h.xv,{weight:"bold",children:(0,x.jsx)(h.rU,{href:"/_/_/business/",target:"blank",onClick:()=>{(0,z.My)("unauth.homepage_redesign.business_button_click"),S({action:"click",item:"header-business-button"})},children:g.bt("비즈니스", "Business", "unauth.homepage.link", undefined, true)})})}),(0,x.jsx)(h.xu,{margin:4,"data-test-id":"header-blog-button",children:(0,x.jsx)(h.xv,{weight:"bold",children:(0,x.jsx)(h.rU,{href:"/_/_/blog/",target:"blank",onClick:()=>{(0,z.My)("unauth.homepage_redesign.blog_button_click"),S({action:"click",item:"header-blog-button"})},children:g.bt("언론", "Blog", "Link to the Pinterest business site.", undefined, true)})})})]}),(0,x.jsx)(h.xu,{marginEnd:2,"data-test-id":j?"simple-login-button":"login-button",children:(0,x.jsx)(h.zx,{text:g.bt("로그인", "Log in", "Label for log in button", undefined, true),onClick:({event:e})=>n(e),size:j?"md":"lg",color:P,ref:y})}),(0,x.jsx)(h.xu,{"data-test-id":j?"simple-signup-button":"signup-button",children:(0,x.jsx)(h.zx,{text:a,onClick:e=>{t(e.event)},color:w("lex_follow_button").group.includes("main_cta")?"gray":A,size:j?"md":"lg"})}),C&&(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)(h.xu,{ref:v,children:(0,x.jsx)(h.xu,{display:"flex",marginStart:2,marginTop:3,marginBottom:3,justifyContent:"center","data-test-id":"setting-button",children:(0,x.jsx)(h.hU,{accessibilityLabel:g.bt("설정", "Setting", "unauthHeaderBar.seetingsButton", undefined, true),icon:"arrow-down",size:"xs",onClick:({event:e})=>{e.preventDefault(),e.stopPropagation(),(0,z.NC)("click_header_setting"),S({action:"click",item:"setting-button"}),_(!u)},iconColor:"gray"})})}),u&&(0,x.jsx)(r.Z,{name:"SafeSuspense_UnauthHeader_UnauthSettingFlyout",children:(0,x.jsx)(m.Z,{fallback:(0,x.jsx)(h.xu,{}),children:(0,x.jsx)(h.xu,{ref:k,children:(0,x.jsx)(F,{anchor:v.current})})})})]},"settingButton")]})]})}));U.displayName="UnauthHeader";const O=U;var H=n(938917),M=n(50286),R=n(385740);function N({showDesktopSignupModal:e}){const t=(0,l.ZP)(),n=(0,M.ZP)(),r=(0,p.useHistory)(),u=(0,p.useLocation)(),_="desktop"===n,g=(()=>{const e=(0,p.useLocation)(),t=(0,M.ZP)();let n="unauth_dweb_sticky_header";(0,D.uM)(e)||(0,D.fY)(e)?n="unauth_dweb_sticky_header_on_pin_page":(0,D.am)(e)&&(n="unauth_dweb_sticky_header_on_board_page");const{checkExperiment:s}=(0,d.F)();return!!(0,D.C$)(e)||"desktop"===t&&((0,D.En)(e)||s(n).anyEnabled)})(),b=(0,H.Z)(),m=(0,A.Z)(),f=(0,c.Z)(),{viewType:y,viewParameter:v}=(0,R.SU)(),k=()=>{(0,z.My)("unauth.login_button.click"),(0,z.NC)("mweb_press_header_login"),f({action:"click",within:"unauth-header",item:"login-button"}),e?e("login"):(m({event_type:10439,element:30,component:14213,view_type:y,view_parameter:v,aux_data:{upsell_reason:"click_login_on_header"}}),r.push({pathname:"/login",state:{attributionLabel:"click_login_on_header",...u.state}}))},w=(0,s.useMemo)((()=>({headerOffsetTop:0,searchBoxType:_?"full":"simple"})),[_]);return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)(h.xu,{"data-test-id":"unauth-header",position:g?"fixed":"relative",top:!0,width:"100%",zIndex:o.Z,children:(0,x.jsx)(C,{value:w,children:b?(0,x.jsx)(a.Z,{componentType:14161,within:"unauth-header",children:({handleOpenApp:e})=>(0,x.jsx)(O,{isDesktop:_,primaryButtonText:t.bt("앱 다운로드", "Download app", "mweb.unauth_header.download_app", undefined, true),onLoginButtonClick:k,onPrimaryButtonClick:()=>e({deepLinkUri:"/"===u.pathname?u.pathname:u.pathname.substr(1)})})}):(0,x.jsx)(O,{isDesktop:_,primaryButtonText:t.bt("가입하기", "Sign up", "Text on button on the top bar that leads users to signing up.", undefined, true),onLoginButtonClick:k,onPrimaryButtonClick:()=>{(0,z.My)("unauth.signup_button.click"),(0,z.NC)("mweb_press_header_signup"),f({action:"click",within:"unauth-header",item:"signup-button"}),e?e("signup"):(m({event_type:10439,element:31,component:14215,view_type:y,view_parameter:v,aux_data:{upsell_reason:"click_signup_on_header"}}),r.push({pathname:"/signup",state:{attributionLabel:"click_signup_on_header",...u.state}}))}})})}),g&&(0,x.jsx)(h.xu,{height:i.Z})]})}},158989:(e,t,n)=>{n.d(t,{Z:()=>s});const s=new(n(883119).Ry)(9999)},143892:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(436851),a=n(826067),i=n(276775),o=n(780280),r=n(872482);const l=()=>{const e=(0,i.useLocation)(),t=(0,r.a)(),{locale:n,userAgent:{platform:l,raw:c}}=(0,o.B)();if(!t)return!1;const{appInstallBannerIsEnabled:h,pinPageGlobalContext:d}=t,u=!!(0,a.mB)(e.search).invite_code;return h&&!(0,s.$)(c)&&!(n.includes("ar")&&"ios"!==l)&&!(!0===(null==d?void 0:d.isStoryPin)&&u)}},224525:(e,t,n)=>{function s(e,t){return t?`${e}?${new URLSearchParams(t).toString()}`:e}function a(e){return s("/admin/",e)}function i(e){return s("/admin/oauth/logout/",e)}function o(e){return s("/today/",e)}n.d(t,{HF:()=>a,Kn:()=>i,tG:()=>o})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/UnauthPageWrapperHeader.ko_KR-067fa2400e12b220.mjs.map