(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{100:function(e,t,a){e.exports={default:"webGLCanvas_default__3HJfO",fullScreen:"webGLCanvas_fullScreen__3ptjp"}},102:function(e,t,a){e.exports=a(159)},103:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);a(103);var n,r=a(0),i=a.n(r),o=a(85),c=a.n(o),s=a(32),l=a(7),u=a(6),m=a(86),d=a.n(m),p=function(e){var t=e.preset,a=void 0===t?"default":t,n=Object(u.a)(e,["preset"]);return i.a.createElement("div",Object.assign({},n,{className:d.a[a]}),"Jonas Kordt")},f=a(87),h=a.n(f),g=a(88),v=a.n(g),_=function(e){e.children;var t=e.preset,a=void 0===t?"default":t,n=Object(u.a)(e,["children","preset"]);return i.a.createElement("div",Object.assign({},n,{className:v.a[a]}),i.a.createElement("img",{src:h.a,alt:""}))},b=a(47),E=a.n(b),k=function(e){var t=e.preset,a=void 0===t?"default":t,n=Object(u.a)(e,["preset"]),o=Object(l.f)(),c=Object(r.useCallback)((function(){o.push("/")}),[o]);return i.a.createElement("div",Object.assign({},n,{className:E.a[a]}),i.a.createElement("div",{className:E.a.portrait_container},i.a.createElement(_,{preset:a})),i.a.createElement("div",{onClick:c,role:"link",className:E.a.name_container},i.a.createElement(p,null)))},y=a(90),w=a.n(y),j=function(e){var t=e.children,a=e.preset,n=void 0===a?"default":a,r=Object(u.a)(e,["children","preset"]);return i.a.createElement("main",Object.assign({},r,{className:w.a[n]}),t)},C=a(91),x=a.n(C),O=a(67),D=a.n(O),S=a(92),I=a.n(S),N=a(1),P=a(5),M=a(93),z=a.n(M),B=[[],[],[],[]],T=function(){function e(t){var a=this;Object(N.a)(this,e),this.canvas=t,this.controls=B,this.resizeSensor=void 0,this.resizeSensor=new z.a(t.parentElement,(function(){return a.resizeCanvas()}))}return Object(P.a)(e,[{key:"dispose",value:function(){this.resizeSensor.detach()}},{key:"resizeCanvas",value:function(){var e=this.canvas.parentElement;e&&(this.canvas.width=e.clientWidth-2,this.canvas.height=e.clientHeight-2)}}]),e}(),L=a(101),H=a(14),F=a(13),A=a(9),q=a(2),R=a(3),G=a(4),V=function(e){var t=new G.h(30,e.width/e.height,.01,1e3);return t.position.set(3,3,3),t.lookAt(0,0,0),t},W=function(e){var t=new G.q({alpha:!0,canvas:e});return t.setPixelRatio(window.devicePixelRatio),t},Q=function(){return["red","green","blue"].map((function(e){var t=new G.a(e);return new G.g({color:t,transparent:!0,opacity:.5,side:G.b})}))},J=function(e){return e.map((function(e,t){var a=[new G.i,new G.i,new G.i,new G.i];return a[0].translate(-.5,-.5,0),a[1].translate(.5,-.5,0),a[2].translate(-.5,.5,0),a[3].translate(.5,.5,0),a.map((function(a){var n=new G.f(a,e);return n.userData.index=t,function(e,t){switch(t){case 1:e.rotateX(Math.PI/2),e.rotateY(Math.PI/2);break;case 2:e.rotateX(Math.PI/2)}}(n,t),n}))}))},Y=a(94),U=function(e,t,a){var n=new Y.a(e,t.parentElement);return n.enableDamping=!0,n.enablePan=!1,n.addEventListener("change",a),n},Z=new G.k,X=function(e,t,a,n){var r=a.getBoundingClientRect();if(e.x<=r.left||e.x>=r.right||e.y<=r.top||e.y>=r.bottom)return[];var i,o,c={x:e.x-r.left,y:e.y-r.top};return function(e,t,a){return Z.setFromCamera(e,a),Z.intersectObjects(t)}({x:2*(i=c).x/(o=r).width-1,y:-2*i.y/o.height+1},t,n)},K=function(e,t){switch(e){case 0:return[t[0][0],t[1][0],t[2][0]];case 1:return[t[0][1],t[1][0],t[2][1]];case 2:return[t[0][2],t[1][1],t[2][0]];case 3:return[t[0][3],t[1][1],t[2][1]];case 4:return[t[0][0],t[1][2],t[2][2]];case 5:return[t[0][1],t[1][2],t[2][3]];case 6:return[t[0][2],t[1][3],t[2][2]];case 7:return[t[0][3],t[1][3],t[2][3]];default:return[]}},$=function(e){var t=0;return e.x>0&&(t|=1),e.y>0&&(t|=2),e.z>0&&(t|=4),t},ee=function(e){return[[{action:"Default transparency",initialValue:!1,callback:e.setDefaultTransparency},{action:"Separate plane parts",initialValue:!1,callback:e.setSeperatePlaneParts}],[{action:"Plane opacity",initialValue:.5,callback:e.setOpacity}],[{action:"rotate view",controls:["Drag & Drop"]},{action:"zoom",controls:["Scroll"]},{action:"move the planes",controls:["Ctrl","Scroll"]}],[]]},te=function(e){Object(q.a)(a,e);var t=Object(R.a)(a);function a(e){var n,r;return Object(N.a)(this,a),(r=t.call(this,e)).renderer=void 0,r.scene=new G.l,r.camera=void 0,r.materials=void 0,r.planes=void 0,r.planeGroup=new G.d,r.cameraControls=void 0,r.cameraOctant=void 0,r.defaultTransparency=!1,r.lastMouseEvent=void 0,r.renderDirty=!0,r.animate=function(){window.requestAnimationFrame(r.animate),r.cameraControls.update(),r.renderDirty&&r.forceRender()},r.render=function(){r.renderDirty=!0},r.setOpacity=function(e){r.materials.forEach((function(t){return t.setValues({opacity:e})})),r.render()},r.setDefaultTransparency=function(e){r.defaultTransparency=e,e?r.planes.flat().forEach((function(e){e.renderOrder=0})):r.updateRenderOrder(!0),r.render()},r.setSeperatePlaneParts=function(e){if(e){r.planes[0][0].position.set(-.3,-.3,0),r.planes[0][1].position.set(.3,-.3,0),r.planes[0][2].position.set(-.3,.3,0),r.planes[0][3].position.set(.3,.3,0),r.planes[1][0].position.set(0,-.3,-.3),r.planes[1][1].position.set(0,.3,-.3),r.planes[1][2].position.set(0,-.3,.3),r.planes[1][3].position.set(0,.3,.3),r.planes[2][0].position.set(-.3,0,-.3),r.planes[2][1].position.set(.3,0,-.3),r.planes[2][2].position.set(-.3,0,.3),r.planes[2][3].position.set(.3,0,.3)}else r.planes.flat().forEach((function(e){e.position.set(0,0,0)}));r.render()},r.onMouseMove=function(e){r.lastMouseEvent=e},r.onScroll=function(e){if(e.ctrlKey||e.metaKey){if(e.stopPropagation(),0===e.deltaY)return;if(!r.moveIntersectionPoint(e.deltaY))return;r.scalePlaneParts(),r.updateRenderOrder(),r.render()}},r.onCameraMove=function(){r.updateRenderOrder(),r.render()},r.moveIntersectionPoint=function(e){if(!r.lastMouseEvent)return!1;var t={x:r.lastMouseEvent.x,y:r.lastMouseEvent.y},a=X(t,r.planes.flat(),r.canvas,r.camera);if(!a.length)return!1;var n=a[0].object.userData.index,i=e>0?.01:-.01,o=r.planeGroup.position;switch(n){case 0:o.z=Math.min(1,Math.max(-1,o.z+i));break;case 1:o.x=Math.min(1,Math.max(-1,o.x+i));break;case 2:o.y=Math.min(1,Math.max(-1,o.y+i))}return r.planeGroup.updateMatrixWorld(!0),!0},r.scalePlaneParts=function(){r.planes.forEach((function(e,t){var a=["x","y","x"][t],n=["y","z","z"][t],i=r.planeGroup.position;e[0].scale.set(1+i[a],1+i[n],1),e[1].scale.set(1-i[a],1+i[n],1),e[2].scale.set(1+i[a],1-i[n],1),e[3].scale.set(1-i[a],1-i[n],1)}))},r.updateRenderOrder=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=r.planeGroup.worldToLocal(r.camera.position.clone()),a=$(t);if((r.cameraOctant!==a||e)&&(r.cameraOctant=a,!r.defaultTransparency)){var n=7-a,i=a;r.planes.flat().forEach((function(e){e.renderOrder=1})),K(n,r.planes).forEach((function(e){e.renderOrder=0})),K(i,r.planes).forEach((function(e){e.renderOrder=2}))}},r.forceRender=function(){r.renderDirty=!1,r.renderer.render(r.scene,r.camera)},r.controls=ee(Object(H.a)(r)),r.renderer=W(e),r.camera=V(e),r.materials=Q(),r.planes=J(r.materials),(n=r.planeGroup).add.apply(n,Object(L.a)(r.planes.flat())),r.scene.add(r.planeGroup),r.cameraControls=U(r.camera,r.canvas,r.onCameraMove),function(e,t,a){window.addEventListener("mousemove",t),e.addEventListener("wheel",a)}(r.canvas,r.onMouseMove,r.onScroll),r.updateRenderOrder(),r.animate(),r}return Object(P.a)(a,[{key:"dispose",value:function(){var e,t,n;Object(F.a)(Object(A.a)(a.prototype),"dispose",this).call(this),e=this.canvas,t=this.onMouseMove,n=this.onScroll,window.removeEventListener("mousemove",t),e.removeEventListener("wheel",n)}},{key:"resizeCanvas",value:function(){var e=this.canvas.parentElement;e&&(this.renderer.setSize(e.clientWidth,e.clientHeight),this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.forceRender())}}]),a}(T),ae=a(38),ne=a.n(ae),re=a(95),ie=a.n(re),oe=function(e){var t=e.preset,a=void 0===t?"default":t,n=e.text,r=Object(u.a)(e,["preset","text"]);return i.a.createElement("h1",Object.assign({},r,{className:ie.a[a]}),n)},ce="Classifai\u2019s 3D Toolkit: Correcting Segmentation Errors in 3D Medical Image Analysis",se='My bachelor thesis on the topic "'.concat(ce,'".'),le=i.a.createElement("div",null,i.a.createElement(oe,{text:ce}),i.a.createElement("p",null,"In this thesis, I present Classifai\u2019s 3D Toolkit, a new 3D annotation tool for medical image analysis, which allows modifying segmentations in 3D. In current tooling, there are usually problems with the workflow, as 3D images are annotated in a 2D environment and automatic segmentation often produces errors which are time consuming to correct in 2D. With Chassifai\u2019s 3D Toolkit, the time it takes to correct a machine generated segmentation is greatly reduced and the frustrating task of removing the same error on many slices is removed, thus increasing usability and making the training of a machine learning model much faster. For removing obvious machine learning errors, benchmarking showed that Classifai\u2019s 3D Toolkit can reduce the time it takes with existing tools by up to 98.5%. Saving this time can both, make studies on bigger datasets possible and, in a clinical environment, accelerate operation planning, for example for tumor resection operations."),i.a.createElement("p",null,"For a demo of Classifai\u2019s 3D Toolkit, check out the video below."),i.a.createElement("div",null,i.a.createElement(ne.a,{id:"2O-99Zb-JR0"})),i.a.createElement("p",null,"For access to the full thesis, contact me.")),ue={classifai:{name:"Classifai",shortName:"Classifai",quickSummary:"World first usable active learning system for medical image segmentation. Developed as a bachelor\u2019s project at HPI.",content:i.a.createElement("div",null,i.a.createElement(oe,{text:"Classifai"}),i.a.createElement("p",null,"During my studies in IT-Systems Engineering at Hasso Plattner Institute at the University of Potsdam, I was part of a bachelor project team at the chair for Digital Health and Machine Learning. The goal of the project was to design and develop a usable active learning tool for 3D image segmentation in life science and medical applications. Over a span of 10 months, we developed a fully working prototype of the software called Classifai. For a popular scientific explanation of the project you can check out our final project presentation."),i.a.createElement("div",null,i.a.createElement(ne.a,{id:"Z8s3fdrzI7c",appendSrc:"?start=7900&end=8507"})),i.a.createElement("p",null,"Classifai introduces an active learning workflow and brings an entirely new and easy to use editor with it, which supports touch and touch pen interaction. It supports creating new machine learning models based on a default model architecture for custom use cases, and also the use of pretrained models. For the whole process, little machine learning expertise is required, which enables medical experts to train machine learning models without the help from data scientists."),i.a.createElement("p",null,"Classifai runs in the web browser and offloads all the heavy computing such as machine learning to a server. This way users don\u2019t need very powerful devices themselves and cross platform support is achieved as any operating system with any browser can run the system."),i.a.createElement("p",null,"The web frontend is built with React and uses the library Three.js to leverage WebGL for the graphics. It communicates to the backend via a REST-API. The backend is programmed with Python to give easy access to machine learning and uses the Django framework for the database."),i.a.createElement("p",null,"My main role in the team was programming the editor itself. It is build with WebGL using Three.js. For an overview of the editor check out this demo video."),i.a.createElement("div",null,i.a.createElement(ne.a,{id:"OfchCyHBAII",appendSrc:"?start=2"}))),isPreview:!1,img:x.a},bachelorThesis:{name:ce,shortName:"Bachelor Thesis",quickSummary:se,content:le,isPreview:!1,img:D.a}},me={planes:{name:"Transparent Planes",shortName:"Planes",CanvasController:te,summary:"In computer graphics it is usually not possible to see object A through object B if you can also see object B through object A. This usually is not a problem because if said object A is further away from the camera than object B, it is not even desirable to see object B through object A. However, this changes once the objects intersect like these three planes. Now, every plane should be able to shine through every other plane. To make this possible, I split the three planes at their intersections, which results in 12 plane parts and then position them seamlessly. Together with a custom rendering order for those 12 slices based on the position of the camera, this produces the perfect transparency effect seen here.",quickSummary:"A way to have properly transparent intersecting planes with a variable intersection point. Part of Classifai 3D.",isPreview:!1,img:I.a},classifai3D:{name:"Classifai's 3D Toolkit",shortName:"Classifai3D",CanvasController:T,summary:"",quickSummary:"My bachelor's thesis project. Enables 3D exploration and modification of MRI scans as an extension to Classifai.",isPreview:!0,img:D.a}},de=[{isBlog:!0,id:"classifai"},{isBlog:!1,id:"planes"},{isBlog:!0,id:"bachelorThesis"},{isBlog:!1,id:"classifai3D"}],pe=a(68),fe=a.n(pe),he=function(){var e=Object(l.g)().blogId,t=ue[e];return i.a.createElement(j,{preset:"thin"},i.a.createElement(k,null),t?i.a.createElement("div",{className:fe.a.container},t.content):i.a.createElement("div",{className:fe.a.container},i.a.createElement("p",null,"Blog ",e," doesn't exist yet.")))},ge=["January","February","March","April","May","June","July","August","September","October","November","December"],ve=function(e){return e.toString().padStart(2,"0")},_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t?a?e.getFullYear().toString():"".concat(ge[e.getMonth()]," ").concat(e.getFullYear()):"".concat(ve(e.getDate()),".").concat(ve(e.getMonth()+1),".").concat(e.getFullYear())},be=a(23),Ee=a.n(be),ke=function(e){var t=e.heading,a=e.organization,n=e.details,r=e.start,o=e.end,c=e.noDay,s=e.noMonth,l=e.organizationLink,m=e.preset,d=void 0===m?"default":m,p=Object(u.a)(e,["heading","organization","details","start","end","noDay","noMonth","organizationLink","preset"]);return i.a.createElement("div",Object.assign({className:o?Ee.a[d]:Ee.a.active},p),i.a.createElement("div",{className:Ee.a.leftContainer},i.a.createElement("p",null,_e(r,c,s)," -"),i.a.createElement("p",null,o?_e(o,c,s):"present")),i.a.createElement("div",{className:Ee.a.container},i.a.createElement(oe,{preset:"cvCard",text:t}),i.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:l?Ee.a.organizationLink:Ee.a.organization},a),n&&i.a.createElement("ul",null,n.map((function(e){return i.a.createElement("li",{key:e},e)})))))},ye=[{name:"German",level:1,comment:"Mother Tongue"},{name:"English",level:.92,comment:"Fluent"},{name:"Spanish",level:.15,comment:"Basics"}],we=[{name:"WebGL",level:.85},{name:"React",level:.8},{name:"TypeScript",level:.9},{name:"Java",level:.85},{name:"Git",level:.75}],je=["Independent Working","Problem Solving","Motivation to Learn","Communication","Agile Development","Looking at the Big Picture"],Ce=a(48),xe=a.n(Ce),Oe=function(e){var t=e.level,a=e.preset,n=void 0===a?"default":a,r=Object(u.a)(e,["level","preset"]);return i.a.createElement("div",Object.assign({className:xe.a[n]},r),i.a.createElement("div",{className:xe.a.background}),i.a.createElement("div",{className:xe.a.foreground,style:{width:"".concat(100*t,"%")}}))},De=a(96),Se=a.n(De),Ie=function(e){var t=e.name,a=e.level,n=e.comment,r=e.preset,o=void 0===r?"default":r,c=Object(u.a)(e,["name","level","comment","preset"]);return i.a.createElement("div",Object.assign({className:Se.a[o]},c),i.a.createElement("div",null,i.a.createElement("p",null,t),i.a.createElement(Oe,{level:a})),n&&i.a.createElement("p",null,n))},Ne=a(39),Pe=a.n(Ne),Me=function(e){var t=e.preset,a=void 0===t?"default":t,n=Object(u.a)(e,["preset"]);return i.a.createElement("div",Object.assign({className:Pe.a[a]},n),i.a.createElement("div",{className:Pe.a.languages},i.a.createElement(oe,{preset:"quickInfo",text:"Languages"}),ye.map((function(e){return i.a.createElement(Ie,Object.assign({key:e.name},e))}))),i.a.createElement("div",{className:Pe.a.generalSkills},i.a.createElement(oe,{preset:"quickInfo",text:"Skills"}),i.a.createElement("div",null,je.map((function(e){return i.a.createElement("p",{key:e},e)})))),i.a.createElement("div",{className:Pe.a.tech},i.a.createElement(oe,{preset:"quickInfo",text:"Tech"}),we.map((function(e){return i.a.createElement(Ie,Object.assign({key:e.name},e))}))))},ze=a(69),Be=a.n(ze),Te=function(e){var t=e.preset,a=void 0===t?"default":t,n=e.isCV,r=Object(u.a)(e,["preset","isCV"]);return i.a.createElement("div",Object.assign({className:Be.a[a]},r),i.a.createElement(oe,{text:"\nMe in a Nutshell"}),i.a.createElement("p",null,"\nI am a young and active software engineer from Berlin, Germany. \nAfter completing my Bachelor's degree in IT Systems Engineering at HPI I am now working on my Master's degree.\nMy main interests are computer graphics and machine learning.\nHowever, I also like to dabble with human computer interaction and UI design and have quite some experience with web development."),n||i.a.createElement("p",{className:Be.a.finisher},"\nFeel free to check out some of my projects below."))},Le=[{heading:"Aspiring Master of Science: IT System Engineering",organization:"Hasso-Plattner-Institute at the University of Potsdam",start:new Date(2020,9),organizationLink:"https://hpi.de"},{heading:"Bachelor of Science: IT System Engineering",organization:"Hasso-Plattner-Institute at the University of Potsdam",details:['average grade: 1.2 "with distinction" (A)'],start:new Date(2017,9),end:new Date(2020,7),organizationLink:"https://hpi.de"},{heading:"High School",organization:"Werner-von-Siemens-Gymnasium",details:["diploma: German High-School-Diploma","average grade: 1.0 (A)"],start:new Date(2010,7),end:new Date(2017,5),organizationLink:"https://www.siemens-gymnasium-berlin.de"},{heading:"Exchange Year",organization:"River Bluff High School",details:["Lexington, South Carolina, USA"],start:new Date(2014,7),end:new Date(2015,5),organizationLink:"http://rbhs.lexington1.net"}],He=[{heading:"Talent Program",organization:"Friedrich Naumann Stiftung f\xfcr die Freiheit",start:new Date(2017,9),organizationLink:"https://www.freiheit.org"}],Fe=[{heading:"Table-Tennis Coach",organization:"TuS Lichterfelde Berlin e.V.",start:new Date(2013,9),organizationLink:"https://tt.tusli.de"},{heading:"Chaperone in Summer Camps",organization:"Sportjugend Berlin",start:new Date(2016,0),end:new Date(2017,0),organizationLink:"https://www.sportjugendreisen.de"}],Ae=[{heading:"Research Assistant",organization:"Chair for Digital Health and Machine Learning at HPI",start:new Date(2020,10,1),organizationLink:"https://hpi.de/forschung/fachgebiete/digital-health-machine-learning.html"},{heading:"Medicine Delivery Driver",organization:"Apotheke 4.0 (pharmacy)",details:["doing my part to help during the COVID-19 pandemic"],start:new Date(2020,8,1)},{heading:"Java Developer & Tutor",organization:"Chair for System-Analysis and Modeling at HPI",details:["development of webservices and simulators in Java as sample solutions for different lectures","development of web interface for live ECG data using HTML, CSS, JavaScript","prepare exercises for students","prepare and execute practice lessons for students"],start:new Date(2018,8,1),end:new Date(2019,6,31),organizationLink:"https://hpi.de/forschung/fachgebiete/systemanalyse-und-modellierung.html"},{heading:"Web Developer (internship)",organization:"Institute for School Quality of Berlin-Brandenburg",details:["development of web portal for school inspection using PHP, MySQL, jQuery and CSS"],start:new Date(2017,7,7),end:new Date(2017,8,15),organizationLink:"https://www.isq-bb.de/wordpress/"},{heading:"Student Intern",organization:"Mercedes Benz AG",start:new Date(2013,4,27),end:new Date(2013,5,14)}],qe=a(97),Re=a.n(qe),Ge=function(){return i.a.createElement(j,{preset:"thin"},i.a.createElement(k,null),i.a.createElement("div",{className:Re.a.container},i.a.createElement(Te,{isCV:!0,preset:"cv"}),i.a.createElement(oe,{preset:"cv",text:"Quick Info"}),i.a.createElement(Me,null),i.a.createElement(oe,{preset:"cv",text:"Work Experience"}),Ae.map((function(e){return i.a.createElement(ke,Object.assign({key:e.heading},e))})),i.a.createElement(oe,{preset:"cv",text:"Education"}),Le.map((function(e){return i.a.createElement(ke,Object.assign({key:e.heading},e,{noDay:!0}))})),i.a.createElement(oe,{preset:"cv",text:"Volunteering"}),Fe.map((function(e){return i.a.createElement(ke,Object.assign({key:e.heading},e,{noDay:!0,noMonth:!0}))})),i.a.createElement(oe,{preset:"cv",text:"Scholarships"}),He.map((function(e){return i.a.createElement(ke,Object.assign({key:e.heading},e,{noDay:!0}))}))))},Ve=a(70),We=a.n(Ve),Qe=function(e){var t=e.children,a=e.to,n=e.clickCallback,o=e.preset,c=void 0===o?"default":o,s=Object(u.a)(e,["children","to","clickCallback","preset"]),m=Object(l.f)(),d=Object(r.useCallback)((function(){a&&(m.push(a),window.scrollTo(0,0))}),[m,a]);return i.a.createElement("div",Object.assign({},s,{onClick:n||d,role:"link",className:We.a[c]}),Boolean(a)||i.a.createElement("p",{className:We.a.soonTag},"Soon"),t)},Je=a(98),Ye=a.n(Je),Ue=a(71),Ze=a.n(Ue),Xe=function(e){return i.a.createElement(Qe,Object.assign({to:"/cv"},e),i.a.createElement("img",{className:Ze.a.cvImg,src:Ye.a,alt:""}),i.a.createElement("p",{className:Ze.a.coHeader},"Current Occupation:"),i.a.createElement("p",null,"M.Sc. IT Systems Engineering at HPI"))},Ke=a(24),$e=a.n(Ke),et=function(e){var t=e.name,a=e.text,n=e.projectId,r=e.isBlog,o=void 0!==r&&r,c=e.image,s=e.isPreview,l=Object(u.a)(e,["name","text","projectId","isBlog","image","isPreview"]),m=o?"/blogs/".concat(n):"/projects/".concat(n);return i.a.createElement(Qe,Object.assign({to:s?void 0:m},l),i.a.createElement("div",{className:$e.a.container},i.a.createElement(oe,{text:t,preset:"projectCard"}),i.a.createElement("p",{className:$e.a.text},a),c&&i.a.createElement("div",{className:$e.a.imgContainer},i.a.createElement("img",{className:$e.a.img,src:c,alt:""}),i.a.createElement("div",{className:$e.a.backgroundBlend})),i.a.createElement("p",{className:$e.a.type},o?"Blog":"Project")))},tt=a(33),at=a.n(tt),nt=function(){return i.a.createElement(j,null,i.a.createElement(k,null),i.a.createElement("div",{className:at.a.upperContainer},i.a.createElement(Te,null),i.a.createElement("div",{className:at.a.cvContainer},i.a.createElement(Xe,null))),i.a.createElement("div",{className:at.a.lowerContainer},i.a.createElement("div",{className:at.a.lowerHeadingContainer},i.a.createElement(oe,{text:"Projects"})),i.a.createElement("div",{className:at.a.projectContainer},de.map((function(e){var t=e.isBlog?ue[e.id]:me[e.id];return i.a.createElement(et,{name:t.shortName,text:t.quickSummary,projectId:e.id,isBlog:e.isBlog,isPreview:t.isPreview,image:t.img,key:t.name})})))))},rt=a(15),it=function(e){return e.map((function(e){return 1===e.length?e.toUpperCase():e})).join(" + ")},ot=a(49),ct=a.n(ot),st=function(e){var t=e.action,a=e.controls,n=e.preset,r=void 0===n?"default":n,o=Object(u.a)(e,["action","controls","preset"]),c=it(a);return i.a.createElement("div",Object.assign({},o,{className:ct.a[r]}),i.a.createElement("p",{className:ct.a.controls},c),i.a.createElement("p",{className:ct.a.action},"to ",t))},lt=a(50),ut=a.n(lt),mt=function(e){var t=e.action,a=e.keys,n=e.callback,r=e.preset,o=void 0===r?"default":r,c=Object(u.a)(e,["action","keys","callback","preset"]),s=it(a);return i.a.createElement("div",{className:ut.a[o]},i.a.createElement(Qe,Object.assign({},c,{clickCallback:n,preset:"keyControl"}),i.a.createElement("p",{className:ut.a.keys},s)),i.a.createElement("p",{className:ut.a.action},"to ",t))},dt=function(e){return function(t){t.preventDefault(),t.stopPropagation(),e(t)}},pt=a(25),ft=a.n(pt),ht=function(e){var t=e.action,a=e.callback,n=e.min,o=void 0===n?0:n,c=e.max,s=void 0===c?1:c,l=e.step,m=void 0===l?.01:l,d=e.initialValue,p=e.preset,f=void 0===p?"default":p,h=Object(u.a)(e,["action","callback","min","max","step","initialValue","preset"]),g=Object(r.useState)(d),v=Object(rt.a)(g,2),_=v[0],b=v[1],E=Object(r.useRef)(null),k=Object(r.useCallback)((function(e){if(!E.current)return 0;var t=E.current.getBoundingClientRect();return Math.max(0,Math.min(1,(e.clientX-t.left)/t.width))}),[E]),y=Object(r.useCallback)((function(e){var t=(s-o)/m,n=Math.round(t*k(e)),r=n*m/(s-o);r!==_&&(a(n*m+o),b(r))}),[o,s,m,k,_,a]),w=dt(y),j=Object(r.useCallback)((function(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",j),document.removeEventListener("pointerleave",j)}),[w]),C=Object(r.useCallback)((function(e){document.addEventListener("pointermove",w),document.addEventListener("pointerup",j),document.addEventListener("pointerleave",j),w(e)}),[w,j]);return i.a.createElement("div",Object.assign({},h,{className:ft.a[f]}),i.a.createElement("p",{className:ft.a.text},t),i.a.createElement("div",{className:ft.a.track,role:"button",onPointerDown:C,ref:E},i.a.createElement("div",{className:ft.a.trackFiller,style:{right:"".concat(100*(1-_),"%")}}),i.a.createElement("div",{className:ft.a.knubWrapper,style:{left:"".concat(100*_,"%")}},i.a.createElement("div",{className:ft.a.knub}))))},gt=a(26),vt=a.n(gt),_t=function(e){var t=e.action,a=e.initialValue,n=e.callback,o=e.preset,c=void 0===o?"default":o,s=Object(u.a)(e,["action","initialValue","callback","preset"]),l=Object(r.useState)(a),m=Object(rt.a)(l,2),d=m[0],p=m[1],f=Object(r.useCallback)((function(){n(!d),p(!d)}),[n,d]);return i.a.createElement("div",Object.assign({},s,{className:vt.a[c]}),i.a.createElement("p",{className:vt.a.text},t),i.a.createElement("div",{className:vt.a.switch,onClick:f,role:"button"},i.a.createElement("div",{className:d?vt.a.background:vt.a.backgroundInactive},i.a.createElement("div",{className:vt.a.knub}))))},bt=a(99),Et=a.n(bt),kt=function(e){var t=e.preset,a=void 0===t?"default":t,n=e.toggleFullScreen,r=e.controls,o=Object(u.a)(e,["preset","toggleFullScreen","controls"]),c=Object(rt.a)(r,4),s=c[0],l=c[1],m=c[2],d=c[3];return i.a.createElement("div",Object.assign({},o,{className:Et.a[a]}),i.a.createElement(oe,{text:"Controls"}),i.a.createElement("div",null,i.a.createElement(mt,{keys:["f"],action:"toggle fullscreen",callback:n}),m.map((function(e){return i.a.createElement(st,Object.assign({key:e.action},e))})),s.map((function(e){return i.a.createElement(_t,Object.assign({key:e.action},e))})),l.map((function(e){return i.a.createElement(ht,Object.assign({key:e.action},e))})),d.map((function(e){return i.a.createElement(mt,Object.assign({key:e.action},e))}))))},yt=a(100),wt=a.n(yt),jt=i.a.forwardRef((function(e,t){var a=e.preset,n=void 0===a?"default":a,r=Object(u.a)(e,["preset"]);return i.a.createElement("canvas",Object.assign({},r,{width:1,height:1,ref:t,className:wt.a[n]}))})),Ct=a(19),xt=a.n(Ct),Ot=function(){var e,t=Object(l.g)().projectId,a=me[t],o=Object(r.useRef)(null),c=Object(r.useState)({}),s=Object(rt.a)(c,2)[1];Object(r.useEffect)((function(){return o.current&&a&&(n=new a.CanvasController(o.current),s({})),function(){var e;null===(e=n)||void 0===e||e.dispose()}}),[a]);var u=Object(r.useState)(!1),m=Object(rt.a)(u,2),d=m[0],p=m[1],f=Object(r.useCallback)((function(){p(!d)}),[d]),h=Object(r.useCallback)((function(e){"f"===e.key&&f()}),[f]);return Object(r.useEffect)((function(){return document.addEventListener("keydown",h),function(){return document.removeEventListener("keydown",h)}}),[h]),i.a.createElement(j,{preset:"fullHeight"},i.a.createElement(k,{preset:"thin"}),a?i.a.createElement("div",{className:xt.a.container},i.a.createElement(oe,{preset:"centered",text:a.name}),i.a.createElement("div",{className:xt.a.grid},i.a.createElement("div",{className:xt.a.controlsContainer},i.a.createElement(kt,{toggleFullScreen:f,controls:(null===(e=n)||void 0===e?void 0:e.controls)||B})),i.a.createElement("div",{className:d?xt.a.fullScreen:xt.a.canvasContainer},i.a.createElement(jt,{ref:o,preset:d?"fullScreen":void 0})),i.a.createElement("p",{className:xt.a.text},a.summary))):i.a.createElement("div",{className:xt.a.container},i.a.createElement("p",null,"Project ",t," doesn't exist yet.")))},Dt=function(){return i.a.createElement(s.a,null,i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/projects/:projectId"},i.a.createElement(Ot,null)),i.a.createElement(l.a,{path:"/blogs/:blogId"},i.a.createElement(he,null)),i.a.createElement(l.a,{path:"/cv"},i.a.createElement(Ge,null)),i.a.createElement(l.a,{path:"/"},i.a.createElement(nt,null))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Dt,null)),document.getElementById("root"))},19:function(e,t,a){e.exports={container:"project_container__1pVNY",grid:"project_grid__szIKr",controlsContainer:"project_controlsContainer__2xd9G",canvasContainer:"project_canvasContainer__1xf62",fullScreen:"project_fullScreen__qQF8K",text:"project_text__2xbu0"}},23:function(e,t,a){e.exports={default:"cvEntry_default__1CQC1",active:"cvEntry_active__UgB_Y",container:"cvEntry_container__1_AB3",leftContainer:"cvEntry_leftContainer__3zpAX",organization:"cvEntry_organization__2S9OI",organizationLink:"cvEntry_organizationLink__1yZqZ"}},24:function(e,t,a){e.exports={default:"projectCard_default__3fhBq",container:"projectCard_container__AFDe2",imgContainer:"projectCard_imgContainer__1ZmhQ",backgroundBlend:"projectCard_backgroundBlend__3hr7f",text:"projectCard_text__2-laP",type:"projectCard_type__2kMfF"}},25:function(e,t,a){e.exports={default:"sliderControl_default__2R8v3",text:"sliderControl_text__w3VzC",track:"sliderControl_track__20PPp",trackFiller:"sliderControl_trackFiller__1Qro0",knubWrapper:"sliderControl_knubWrapper__3M8l6",knub:"sliderControl_knub__1DDm6"}},26:function(e,t,a){e.exports={default:"toggleControl_default__EIH_0",switch:"toggleControl_switch__2BH0r",knub:"toggleControl_knub__1-Lb3",background:"toggleControl_background__3VD_c",backgroundInactive:"toggleControl_backgroundInactive__1quNI",text:"toggleControl_text__1qAyq"}},33:function(e,t,a){e.exports={container:"home_container__20HsP",upperContainer:"home_upperContainer__2HZBx",lowerContainer:"home_lowerContainer__27qkc",cvContainer:"home_cvContainer__2c82m",lowerHeadingContainer:"home_lowerHeadingContainer__3sVQX",projectContainer:"home_projectContainer__1Ae05"}},39:function(e,t,a){e.exports={default:"quickInfo_default__14Kvv",container:"quickInfo_container__2FMEF",generalSkills:"quickInfo_generalSkills__1XlDU",languages:"quickInfo_languages__3QH06",tech:"quickInfo_tech__XPED0"}},47:function(e,t,a){e.exports={default:"header_default__32Ya_",thin:"header_thin__kdFBZ",container:"header_container__3SUA-",name_container:"header_name_container__1Leal",portrait_container:"header_portrait_container__109j6"}},48:function(e,t,a){e.exports={default:"progressBar_default__1tnPK",bar:"progressBar_bar__2bgth",background:"progressBar_background__22MTE",foreground:"progressBar_foreground__1B1vR"}},49:function(e,t,a){e.exports={default:"controlInfo_default__1sf9j",text:"controlInfo_text__3hpcp",controls:"controlInfo_controls__d4oX5",action:"controlInfo_action__1LwK0"}},50:function(e,t,a){e.exports={default:"keyControl_default__1QV7Y",text:"keyControl_text__1Wcsc",keys:"keyControl_keys__1QDwd",action:"keyControl_action__2BPCQ"}},67:function(e,t,a){e.exports=a.p+"static/media/classifai3D.2e6a12c8.png"},68:function(e,t,a){e.exports={container:"blog_container__U03Zg"}},69:function(e,t,a){e.exports={default:"summary_default__LuT4d",cv:"summary_cv__dQhJY",finisher:"summary_finisher__3658l"}},70:function(e,t,a){e.exports={default:"card_default__2Xs0m",keyControl:"card_keyControl__1p4ak",soonTag:"card_soonTag__2HB3D"}},71:function(e,t,a){e.exports={cvImg:"cvCard_cvImg__2h4zf",coHeader:"cvCard_coHeader__35IeN"}},86:function(e,t,a){e.exports={default:"name_default__1xZXI"}},87:function(e,t,a){e.exports=a.p+"static/media/portrait.baaa0c5c.png"},88:function(e,t,a){e.exports={default:"portrait_default__QFmvo",thin:"portrait_thin__33mOH"}},90:function(e,t,a){e.exports={default:"screen_default__3pvzY",fullHeight:"screen_fullHeight__2T8wj",thin:"screen_thin__E6iDi"}},91:function(e,t,a){e.exports=a.p+"static/media/classifai.920de65b.png"},92:function(e,t,a){e.exports=a.p+"static/media/planes.79ad186f.png"},95:function(e,t,a){e.exports={default:"heading_default__1Zeep",cv:"heading_cv__W7ZzC",cvCard:"heading_cvCard__TOvV6",quickInfo:"heading_quickInfo__eI_2Q",projectCard:"heading_projectCard__1GESU",centered:"heading_centered__28jZH"}},96:function(e,t,a){e.exports={default:"skill_default__2tPc_"}},97:function(e,t,a){e.exports={container:"cv_container__rIf8r"}},98:function(e,t,a){e.exports=a.p+"static/media/cv.23a0bc3d.png"},99:function(e,t,a){e.exports={default:"controls_default__2U96F"}}},[[102,1,2]]]);
//# sourceMappingURL=main.9bf8f89e.chunk.js.map