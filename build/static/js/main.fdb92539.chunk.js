(this.webpackJsonpcampusbanners2=this.webpackJsonpcampusbanners2||[]).push([[0],{203:function(e,t,a){e.exports=a(472)},208:function(e,t,a){},209:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(33),s=a.n(l),o=(a(208),a(209),a(18)),c=a(19),i=a(21),m=a(20),u=a(22),p=a(16),d=a(87),E=a.n(d),f=a(195),h=a.n(f),g="https://sheets.googleapis.com/v4/spreadsheets/".concat("1K-UvLNjpAXfY-nOwSht750RfDj_m3DsjTor0rhVOpDM","/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat("AIzaSyCD609vf8KI2aJa7Ya38E04VLlFYq4g3mM");function v(e){return 2==e.indexOf(".")||0==e.indexOf("-")?e:h.a.parseDMS(e)}function b(){return function(e){return e(_()),new Promise((function(e,t){E.a.get(g).accept("json").end((function(a,r){if(a)t(a);else{var n=[];r.body.valueRanges[0].values.forEach((function(e,t){if(!(t<1)){var a=v(e[0]),r=v(e[1]);n.push({id:t-1,name:e[2],lat:a,lng:r,num:e[3],img:e[5],icon:"https://maps.google.com/mapfiles/ms/icons/blue.png",sel:!1,avail:!0})}})),e(n)}}))})).then((function(t){return e(O(t)),t})).catch((function(t){return e(D(t))}))}}var k="FETCH_MARKERS_BEGIN",y="FETCH_MARKERS_SUCCESS",S="FETCH_MARKERS_FAILURE",_=function(){return{type:k}},O=function(e){return{type:y,payload:{markers:e}}},D=function(e){return{type:S,payload:{error:e}}},N="TOGGLE_SELECTED_MARKER",j="SET_MARKER_ICON",A=function(e){return{type:N,data:e}},w=function(e){return{type:j,new_icon:e}},M="SET_AVAILABLE_MARKER",C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onMarkerSelect=function(e){var t=[e.id,!1===e.sel];a.props.toggleSelect(t);var r=e;-1==r.icon.indexOf("-dot")?r.icon=r.icon.slice(0,-4)+"-dot"+r.icon.slice(-4):r.icon=r.icon.slice(0,-8)+r.icon.slice(-4);var n=[r.id,r.icon];a.props.setMarker(n)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMarkers()}},{key:"render",value:function(){var e=this,t=this.props,a=t.error,r=t.loading,l=t.markers;return a?n.a.createElement("div",null,"Error! ",a.message):r?n.a.createElement("div",null,"Loading..."):n.a.createElement("div",{className:"banner-list"},n.a.createElement("h3",null,"Click on a banner name on the list below to select a banner."),n.a.createElement("h3",null,"Banners"),n.a.createElement("p",null,"listed numerically by secondary number, e.g. the '10' in 115/10 - Eshleman Rd / Barrow Ln"),n.a.createElement("select",{multiple:!0},l.map((function(t,a){if(t.avail)return n.a.createElement("option",{key:a,onClick:function(){return e.onMarkerSelect(t)},className:!1===t.sel?"unselected":"selected"},t.num," - ",t.name)}))))}}]),t}(n.a.Component),T=Object(p.b)((function(e){return{markers:e.markers.items,loading:e.markers.loading,error:e.markers.error}}),(function(e){return{fetchMarkers:function(){return e(b())},toggleSelect:function(t){return e(A(t))},setMarker:function(t){return e(w(t))}}}))(C),R=a(132),B=a.n(R),L=a(39),x=a.n(L),F=a(123),I=(a(220),"https://www.googleapis.com/calendar/v3/calendars/".concat("campusbanners@berkeley.edu","/events?key=").concat("AIzaSyANex6uU7VPEPopyL2pi9ooB_oyi_uh_2Y"));function P(){return function(e){return e(Y()),new Promise((function(e,t){E.a.get(I).accept("json").end((function(a,r){if(a)t(a);else{var n=[],l=x()().format("YYYY-MM-DD");JSON.parse(r.text).items.forEach((function(e){(l<e.end.date||l<e.end.dateTime)&&n.push({start:e.start.date||e.start.dateTime,end:e.end.date||e.end.dateTime,title:e.summary,location:e.location})})),e(n)}}))})).then((function(t){return e(K(t)),t})).catch((function(t){return e(H(t))}))}}var $="FETCH_EVENTS_BEGIN",U="FETCH_EVENTS_SUCCESS",G="FETCH_EVENTS_FAILURE",Y=function(){return{type:$}},K=function(e){return{type:U,payload:{events:e}}},H=function(e){return{type:G,payload:{error:e}}},V="SET_START_DATE",z="SET_END_DATE",J=Object(F.extendMoment)(x.a);J.locale("en_US");var q=new Date;q.setDate(q.getDate()+14);var Q=q.getDay();0===Q?q.setDate(q.getDate()+1):6===Q&&q.setDate(q.getDate()+2);var W=new Date(q);W.setDate(W.getDate()+1);var Z=new Date;Z.setDate(q.getDate()+366);var X=Z.getDay();0===X?Z.setDate(Z.getDate()+1):6===X&&Z.setDate(Z.getDate()+2);var ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onStartSelect=function(e){a.props.setStartDate(e);var t=new Date(e);t.setDate(t.getDate()+1),a.props.setEndDate(t)},a.onEndSelect=function(e){a.props.setEndDate(e);var t=[],r=J.range(a.props.start,a.props.end);a.props.events.forEach((function(e){var a=J.range(e.start,e.end);t.includes(e.location)||a.overlaps(r)&&t.push(e.location)}));var n=[];a.props.markers.forEach((function(e){-1!==t.indexOf(e.num)?(-1==e.icon.indexOf("orange")&&(-1!=e.icon.indexOf("dot")?a.props.setMarker([e.id,"https://maps.google.com/mapfiles/ms/icons/orange-dot.png"]):a.props.setMarker([e.id,"https://maps.google.com/mapfiles/ms/icons/orange.png"])),0!=e.avail&&n.push([e.id,!1])):(-1==e.icon.indexOf("green")&&(-1!=e.icon.indexOf("dot")?a.props.setMarker([e.id,"https://maps.google.com/mapfiles/ms/icons/green-dot.png"]):a.props.setMarker([e.id,"https://maps.google.com/mapfiles/ms/icons/green.png"])),1!=e.avail&&n.push([e.id,!0]))})),n.forEach((function(e){a.props.setAvailableMarker(e)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchEvents(),this.props.setStartDate(q),this.props.setEndDate(W)}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,r=e.start,l=e.end;return t?n.a.createElement("div",null,"Error! ",t.message):a?n.a.createElement("div",null,"Loading..."):n.a.createElement("div",{className:"date-range"},n.a.createElement("h3",null,"1. Click on the date boxes below to select the start and end date for your banner reservation"),n.a.createElement("div",{className:"start"},n.a.createElement("strong",null,"Start Date"),n.a.createElement(B.a,{selected:r,selectsStart:!0,startDate:r,onChange:this.onStartSelect,minDate:r,maxDate:Z,dateFormat:"MM/dd/yyyy"})),n.a.createElement("div",{className:"end"},n.a.createElement("strong",null,"End Date"),n.a.createElement(B.a,{selected:l,selectsEnd:!0,endDate:l,onChange:this.onEndSelect,minDate:l,maxDate:Z,dateFormat:"MM/dd/yyyy"})))}}]),t}(r.Component),te=Object(p.b)((function(e){return{events:e.events.items,start:e.events.start,end:e.events.end,loading:e.events.loading,error:e.events.error,markers:e.markers.items}}),(function(e){return{fetchEvents:function(){return e(P())},setStartDate:function(t){return e(function(e){return{type:V,start_date:e}}(t))},setEndDate:function(t){return e(function(e){return{type:z,end_date:e}}(t))},setAvailableMarker:function(t){return e(function(e){return{type:M,marker_item:e}}(t))},setMarker:function(t){return e(w(t))}}}))(ee),ae=a(202),re=a(66),ne=Object(ae.a)(re.withScriptjs,re.withGoogleMap)((function(e){return n.a.createElement(re.GoogleMap,{defaultZoom:17,defaultCenter:{lat:37.87215,lng:-122.257812},latLngBounds:{north:-122.262866,south:-122.258798,west:37.870773,east:37.87076}},e.markers.map((function(t){var a=e.onClick.bind(void 0,t);return n.a.createElement(re.Marker,{key:t.id,position:{lat:parseFloat(t.lat,10),lng:parseFloat(t.lng,10)},onClick:a,icon:t.icon})})))})),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onMarkerSelect=function(e){var t=[e.id,!1===e.sel];a.props.toggleSelect(t);var r=e;-1==r.icon.indexOf("-dot")?r.icon=r.icon.slice(0,-4)+"-dot"+r.icon.slice(-4):r.icon=r.icon.slice(0,-8)+r.icon.slice(-4);var n=[r.id,r.icon];a.props.setMarker(n)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,r=e.markers;return t?n.a.createElement("div",null,"Error! ",t.message):a?n.a.createElement("div",null,"Loading..."):n.a.createElement("div",{className:"campus-map"},n.a.createElement("h3",null,"2. Click on a marker to select a banner. This is a Google map and you are able to use normal Google map functionality. Be sure to check out the street view!"),n.a.createElement(ne,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBeNjH2b1nQ7b7TGQz-KWE5OrrZLNCrZy8&v=4.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"100%",width:"100%"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),markers:r,onClick:this.onMarkerSelect}),n.a.createElement("div",{className:"map-key"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("img",{src:"https://maps.google.com/mapfiles/ms/icons/blue.png",alt:"blue marker icon"}),n.a.createElement("label",null,"Banner Location")),n.a.createElement("li",null,n.a.createElement("img",{src:"https://maps.google.com/mapfiles/ms/icons/green.png",alt:"green marker icon"}),n.a.createElement("label",null,"Banner Available During Chosen Date Range")),n.a.createElement("li",null,n.a.createElement("img",{src:"https://maps.google.com/mapfiles/ms/icons/orange.png",alt:"orange marker icon"}),n.a.createElement("label",null,"Banner Un-Available During Chosen Date Range"))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("img",{src:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",alt:"blue marker icon with dot"}),n.a.createElement("label",null,"Selected Banner")),n.a.createElement("li",null,n.a.createElement("img",{src:"https://maps.google.com/mapfiles/ms/icons/green-dot.png",alt:"green marker icon with dot"}),n.a.createElement("label",null,"Banner Available & Selected During Chosen Date Range")),n.a.createElement("li",null,n.a.createElement("img",{src:"https://maps.google.com/mapfiles/ms/icons/orange-dot.png",alt:"orange marker icon with dot"}),n.a.createElement("label",null,"Banner Un-Available & Selected During Chosen Date Range")))))}}]),t}(r.Component),se=Object(p.b)((function(e){return{markers:e.markers.items,selected_marker:e.markers.selected_marker,loading:e.markers.loading,error:e.markers.error}}),(function(e){return{toggleSelect:function(t){return e(A(t))},setMarker:function(t){return e(w(t))}}}))(le),oe=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"avail_dates",value:function(){return this.props.events[this.props.selected_marker]?"Reserved until "+this.props.events[this.props.selected_marker].end:this.props.markers[this.props.selected_marker].avail?"Available now":void 0}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,r=e.markers,l=e.selected_marker;if(t)return n.a.createElement("div",null,"Error! ",t.message);if(a)return n.a.createElement("div",null,"Loading...");if(l||0===l){var s="./inc/img/"+r[l].img;return n.a.createElement("div",{className:"selected-marker"},n.a.createElement("img",{src:s,alt:"image of banner post"}),n.a.createElement("div",null,n.a.createElement("h3",null,r[l].num," - ",r[l].name),n.a.createElement("p",null,this.avail_dates())))}return n.a.createElement("div",{className:"selected-marker"})}}]),t}(n.a.Component),ce=Object(p.b)((function(e){return{markers:e.markers.items,loading:e.markers.loading,error:e.markers.error,selected_marker:e.markers.selected_marker,events:e.events.items}}))(oe),ie=a(200),me=a(201),ue=(a(470),"SET_NAME"),pe="SET_EMAIL",de="SET_DEPARTMENT",Ee="SET_ALT_NAME",fe="SET_ALT_EMAIL",he="SET_ERROR",ge="SET_RECAPTCHA";function ve(e){return function(t){return(a=e,fetch("https://publicaffairs.berkeley.edu/campus-banners/filled.php",{method:"POST",mode:"cors",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){})).catch((function(e){return console.log(e)}))).then((function(e){t(ye(e))})).catch((function(e){return t(Se(e))}));var a}}var be="POST_FORM_SUCCESS",ke="POST_FORM_FAILURE",ye=function(e){return{type:be,payload:e}},Se=function(e){return{type:ke,payload:e}},_e=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).submitted=function(t){return e.props.success?"Form submitted successfully. If you do not receive an email with your order within the next hour, please email campusbanners@berkeley.edu":e.props.error?"Form submission was not successful. Please screenshot your order screen and email it to campusbanners@berkeley.edu":void 0},e.recap=function(t){null===t?e.props.setRecaptcha(!1):e.props.setRecaptcha(!0)},e.onNameBlur=function(t){t.target.value.length>5?("good"!=e.state.nameErr&&e.setState({nameErr:"good"}),e.props.setName(t.target.value)):"error"!=e.state.nameErr&&e.setState({nameErr:"error"})},e.onEmailBlur=function(t){t.target.value.length>0&&-1!==t.target.value.toLowerCase().indexOf("@berkeley.edu")?("good"!=e.state.emailErr&&e.setState({emailErr:"good"}),e.props.setEmail(t.target.value)):"error"!=e.state.emailErr&&e.setState({emailErr:"error"})},e.onDeptBlur=function(t){t.target.value.length>5?("good"!=e.state.deptErr&&e.setState({deptErr:"good"}),e.props.setDepartment(t.target.value)):"error"!=e.state.deptErr&&e.setState({deptErr:"error"})},e.onAltNameBlur=function(t){t.target.value.length>5?("good"!=e.state.altNameErr&&e.setState({altNameErr:"good"}),e.props.setAltName(t.target.value)):"error"!=e.state.altNameErr&&e.setState({altNameErr:"error"})},e.onAltEmailBlur=function(t){t.target.value.length>0&&-1!==t.target.value.toLowerCase().indexOf("@berkeley.edu")?("good"!=e.state.altEmailErr&&e.setState({altEmailErr:"good"}),e.props.setAltEmail(t.target.value)):"error"!=e.state.altEmailErr&&e.setState({altEmailErr:"error"})},e.onNoShowBlur=function(t){t.target.value.length>0?e.setState({noShow:!0}):e.setState({noShow:!1})},e.handleSubmit=function(t){t.preventDefault();for(var a=!1,r=0,n=Object.entries(e.state);r<n.length;r++){var l=n[r],s=Object(ie.a)(l,2);s[0];"error"==s[1]&&(a=!0)}if(e.props.name&&e.props.email&&e.props.department&&e.props.alt_name&&e.props.alt_email&&e.props.e_start&&e.props.e_end&&e.props.recaptcha&&!a&&!e.state.noShow){"no-err"!=e.state.formErr&&e.setState({formErr:"no-err"});var o=[];e.props.markers.forEach((function(e){if(e.sel&&e.avail){var t=[e.num+" - "+e.name,e.img];o.push(t)}}));var c=[e.props.name,e.props.email,e.props.department,e.props.alt_name,e.props.alt_email,o,e.props.e_start,e.props.e_end];e.props.postForm(c)}else"has-err"!=e.state.formErr&&e.setState({formErr:"has-err"})},e.state={nameErr:"good",emailErr:"good",deptErr:"good",altNameErr:"good",altEmailErr:"good",formErr:"no-err",noShow:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props;e.markers,e.start,e.end;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("h2",null,"Submission Form"),n.a.createElement("div",{className:"error"},this.props.error),n.a.createElement("h3",null,"Confirm this info is correct. If it is not, make new selections in the section above."),n.a.createElement("div",{className:"markers"},n.a.createElement("label",null,"Selected Markers:",n.a.createElement("select",{size:"10"},this.props.markers.map((function(e){if(e.sel&&e.avail)return n.a.createElement("option",{value:e.name,key:e.id},e.num," - ",e.name)}))))),n.a.createElement("div",{className:"dates"},n.a.createElement("label",null,"Start Date:"),n.a.createElement("div",{className:"date"},this.props.e_start),n.a.createElement("label",null,"End Date:"),n.a.createElement("div",{className:"date"},this.props.e_end)),n.a.createElement("p",null,n.a.createElement("span",{class:"star"},"*"),"All below fields required"),n.a.createElement("div",{className:"primary"},n.a.createElement("label",{className:this.state.nameErr},n.a.createElement("span",{class:"star"},"*"),"Name:",n.a.createElement("input",{onBlur:this.onNameBlur}),n.a.createElement("div",{className:"notice"},"Please input a full name, longer than 5 characters")),n.a.createElement("label",{className:this.state.emailErr},n.a.createElement("span",{class:"star"},"*"),"Email:",n.a.createElement("input",{onBlur:this.onEmailBlur}),n.a.createElement("div",{className:"notice"},"Please input a valid bCal email address")),n.a.createElement("label",{className:this.state.deptErr},n.a.createElement("span",{class:"star"},"*"),"Department:",n.a.createElement("input",{onBlur:this.onDeptBlur}),n.a.createElement("div",{className:"notice"},"Please input a department name, longer than 5 characters"))),n.a.createElement("div",{className:"alternate"},n.a.createElement("label",{className:this.state.altNameErr},n.a.createElement("span",{class:"star"},"*"),"Alternate Contact Name:",n.a.createElement("input",{onBlur:this.onAltNameBlur}),n.a.createElement("div",{className:"notice"},"Please input a full name, longer than 5 characters")),n.a.createElement("label",{className:this.state.altEmailErr},n.a.createElement("span",{class:"star"},"*"),"Alternate Contact Email:",n.a.createElement("input",{onBlur:this.onAltEmailBlur}),n.a.createElement("div",{className:"notice"},"Please input a valid bCal email address")),n.a.createElement("label",{className:"no-show","aria-hidden":"true"},n.a.createElement("input",{onBlur:this.onNoShowBlur}))),n.a.createElement("div",{className:"recap"},n.a.createElement(me.a,{sitekey:"6Le75cgUAAAAAG7na3_PrNAGnmvM0RkbQcnI0kWB",onChange:this.recap})),n.a.createElement("div",{className:this.state.formErr},"Please fix errors in form, then re-submit"),n.a.createElement("div",{className:"submitted"},this.submitted()),n.a.createElement("input",{className:"submit",type:"submit",value:"Submit"}))}}]),t}(n.a.Component),Oe=Object(p.b)((function(e){return{markers:e.markers.items,e_start:x()(e.events.start).format("MM/DD/YY"),e_end:x()(e.events.end).format("MM/DD/YY"),name:e.form.name,email:e.form.email,department:e.form.department,alt_name:e.form.alt_name,alt_email:e.form.alt_email,recaptcha:e.form.recaptcha,success:e.form.success,error:e.form.error}}),(function(e){return{setName:function(t){return e(function(e){return{type:ue,name:e}}(t))},setEmail:function(t){return e(function(e){return{type:pe,email:e}}(t))},setDepartment:function(t){return e(function(e){return{type:de,dept:e}}(t))},setAltName:function(t){return e({type:Ee,alt_name:t})},setAltEmail:function(t){return e({type:fe,alt_email:t})},setError:function(t){return e(function(e){return{type:he,error:e}}(t))},setRecaptcha:function(t){return e(function(e){return{type:ge,recaptcha:e}}(t))},postForm:function(t){return e(ve(t))}}}))(_e),De=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"info"},n.a.createElement("h2",null,"Information"),n.a.createElement("p",null,"There is a two week processing time."),n.a.createElement("p",null,"Email campusbanners@berkeley.edu for further questions."))}}]),t}(n.a.Component),Ne=a(44),je=a(199),Ae=a(57),we=a(40),Me=a(12),Ce=a.n(Me),Te={items:[],selected_marker:null,loading:!1,error:null};var Re={items:[],start:null,end:null,loading:!1,error:null};var Be={name:void 0,email:void 0,department:void 0,alt_name:void 0,alt_email:void 0,items:[],start:void 0,end:void 0,error:void 0,success:void 0,response:void 0,recaptcha:void 0};var Le=Object(Ne.c)({markers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(we.a)({},e,{loading:!0,error:null});case y:return Object(we.a)({},e,{loading:!1,items:t.payload.markers});case S:return Object(we.a)({},e,{loading:!1,error:t.payload.error,items:[]});case N:var a=t.data;return Ce()(e,{items:Object(Ae.a)({},a[0],{sel:{$set:a[1]}}),selected_marker:{$set:a[0]}});case j:var r=t.new_icon;return Ce()(e,{items:Object(Ae.a)({},r[0],{icon:{$set:r[1]}})});case M:var n=t.marker_item;return Ce()(e,{items:Object(Ae.a)({},n[0],{avail:{$set:n[1]}})});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(we.a)({},e,{loading:!0,error:null});case U:return Object(we.a)({},e,{loading:!1,items:t.payload.events});case G:return Object(we.a)({},e,{loading:!1,error:t.payload.error,items:[]});case V:var a=t.start_date;return Ce()(e,{start:{$set:a}});case z:var r=t.end_date;return Ce()(e,{end:{$set:r}});default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Ce()(e,{name:{$set:t.name}});case pe:return Ce()(e,{email:{$set:t.email}});case de:return Ce()(e,{department:{$set:t.dept}});case Ee:return Ce()(e,{alt_name:{$set:t.alt_name}});case fe:return Ce()(e,{alt_email:{$set:t.alt_email}});case he:return Ce()(e,{error:{$set:t.error}});case ge:return Ce()(e,{recaptcha:{$set:t.recaptcha}});case be:return Ce()(e,{success:{$set:!0}});case ke:return Ce()(e,{error:{$set:!0}});default:return e}}}),xe=Object(Ne.d)(Le,Object(Ne.a)(je.a)),Fe=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"left"},n.a.createElement(p.a,{store:xe},n.a.createElement(te,null)),n.a.createElement(p.a,{store:xe},n.a.createElement(ce,null)),n.a.createElement(p.a,{store:xe},n.a.createElement(T,null))),n.a.createElement("div",{className:"right","aria-label":"map-section","aria-hidden":"true"},n.a.createElement(p.a,{store:xe},n.a.createElement(se,null))),n.a.createElement("div",{className:"bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(De,null),n.a.createElement(p.a,{store:xe},n.a.createElement(Oe,null)))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(Fe,null),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.fdb92539.chunk.js.map