(this["webpackJsonpapi-hackathon-banca"]=this["webpackJsonpapi-hackathon-banca"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/home.3fcb2f7c.png"},22:function(e,t,a){var n={"./capital.png":47,"./chase.png":48,"./fargo.png":49,"./home.png":16};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=22},35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/capital.74967fcf.png"},48:function(e,t,a){e.exports=a.p+"static/media/chase.1200262f.png"},49:function(e,t,a){e.exports=a.p+"static/media/fargo.8a028e8d.png"},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),i=(a(40),a(6)),s=a(7),l=(a(41),a(16)),u=a.n(l);function m(){return r.a.createElement("div",{className:"Home"},r.a.createElement("p",null,"Connect to your bank, get finance recommendations and learn about the latest trends in the market"),r.a.createElement("img",{src:u.a,alt:"Banca Finance"}),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/api-hackathon-19/connect-bank"},r.a.createElement("button",null,"Get Started")))}var d=a(9),h=a(10),p=a(12),f=a(11),g=a(13),v=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={isBankSelected:e.isBankSelected},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"#",onClick:function(){window.history.back()},style:{color:"white"}},"< Home"),r.a.createElement("p",null,"Log into your Bank"),r.a.createElement("div",{className:"login"},r.a.createElement("br",null),r.a.createElement("img",{src:a(22)("./".concat(this.props.bankSelected,".png")),alt:"Bank Logo",style:{width:"150px"}}),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Username",type:"text",name:"username",value:this.props.user}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:"apiworld"}),r.a.createElement("br",null))),r.a.createElement(i.b,{to:"/api-hackathon-19/dashboard"},r.a.createElement("button",null,"Login")))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={user:"gustavozapata",banks:[{id:1,bankName:"Chase",image:"chase"},{id:2,bankName:"Wells Fargo",image:"fargo"},{id:3,bankName:"Capital One",image:"capital"}],isBankSelected:!1,bankSelected:""},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"selectBank",value:function(e){var t=this.state.banks.find((function(t){return t.id===e}));this.setState({isBankSelected:!0,bankSelected:t.image})}},{key:"toggleSelect",value:function(){this.setState({isBankSelected:!1})}},{key:"render",value:function(){var e=this;return this.state.isBankSelected?r.a.createElement(v,{user:this.state.user,banks:this.state.banks,bankSelected:this.state.bankSelected,toggleSelect:this.toggleSelect}):r.a.createElement("div",null,r.a.createElement("a",{href:"#",onClick:function(){window.history.back()},style:{color:"white"}},"< Back"),r.a.createElement("p",null,"Connect to your Bank"),r.a.createElement("section",{className:"chooseBank"},this.state.banks.map((function(t){return r.a.createElement("div",{key:t.id,onClick:function(){return e.selectBank(t.id)}},r.a.createElement("img",{src:a(22)("./".concat(t.image,".png")),alt:t.bankName}),r.a.createElement("h3",null,t.bankName))}))))}}]),t}(n.Component),k=a(34),E=a(19),y=a.n(E),S={Shops:6702.710000000001,"Music, Video and DVD":175.64,"Discount Stores":54.04,"Food and Drink":1458.07,Restaurants:1451.4199999999998,Recreation:227.12999999999997,"Arts and Entertainment":120.46000000000001,Transfer:1374.1800000000003,Debit:10226.76,Service:779.1600000000003,Insurance:10.38,"Gyms and Fitness Centers":106.66999999999999,Travel:817.72,"Gas Stations":278,"Department Stores":767.8299999999999,"Car Service":33.69,"Ride Share":33.69,"Computers and Electronics":1812.9299999999998,"Video Games":97.08999999999999,"Supermarkets and Groceries":294.33000000000004,Subscription:175.51000000000002,"Bank Fees":629.51,Pets:41.51,"Digital Purchase":220.06,"Food and Beverage":232.21999999999997,"Warehouses and Wholesale Stores":432.36,"Business Services":22.72,"Personal Care":145,Community:176.64,Education:176.64,"Airlines and Aviation Services":354.3,"Coffee Shop":118.81,"Clothing and Accessories":1076.0700000000002,"Shoe Store":401.87,Financial:17.5,"Stock Brokers":17.5,"Furniture and Home Decor":66.43,Payroll:-1e4,"Women's Store":83.6,"Convenience Stores":19.37,Withdrawal:1147.42,Pharmacies:76.98,"Credit Counseling and Bankruptcy Services":34.98,Parking:11.25,"Beauty Products":254.13,"Public Transportation Services":30,"Glasses and Optometrist":.75,Cable:41.2,"Gift and Novelty":58.4,"Food and Beverage Store":12.21,"Hardware Store":210,Taxi:13.77,Veterinarians:26.21,"Shipping and Freight":6.75,Lodging:96.71},w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).fetchUserData=function(){y.a.post("https://dev-api.evenfinancial.com/originator/rateTables/",{productTypes:["credit_card"],personalInformation:{firstName:"John",lastName:"Doe",email:"john@example.com",city:"New York",state:"NY",primaryPhone:"2125556789",address1:"45 West 21st Street",address2:"5th Floor",zipcode:"10010",dateOfBirth:"1993-10-09"},creditCardInformation:{allowAnnualFee:!0,cardBenefits:["travel_incentives"]},creditInformation:{providedCreditRating:"excellent",providedNumericCreditScore:750},financialInformation:{employmentStatus:"employed",employmentPayFrequency:"weekly",annualIncome:12e4},legalInformation:{consentsToFcra:!0,consentsToTcpa:!0,tcpaLanguage:"I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."},clientTags:{hello:["world","there"],something:["else"]}},{headers:{Authorization:"Bearer ".concat("1fb5853d-2f0a-478f-b83d-94b3c8561349_9732a9ea-2191-4180-a657-c5a2c0d19046")}}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},a.fetchUserData2=function(){y.a.get("https://gustavozapata.me/api/get-vendors.php").then((function(e){a.setState({userFinance:Object(k.a)(e.data)})}),(function(e){console.error("An error occurred when making the request...")}))},a.state={userFinance:[],dataUser:S,topExpenses:[],user:"gustavozapata",score:75},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"getUserData",value:function(){var e=Object.entries(this.state.dataUser).sort((function(e,t){return e[1]-t[1]}));e.reverse();for(var t=[],a=0,n=2;n<7;n++)t[n-2]={id:n-1,category:e[n][0],value:+e[n][1].toFixed(2)},a+=+e[n][1].toFixed(2);this.setState({topExpenses:[].concat(t),total:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/api-hackathon-19",style:{color:"white",float:"right",fontSize:".9em"}},"Log out"),r.a.createElement("p",{style:{fontWeight:"bold"}},"Welcome ",r.a.createElement("span",{style:{color:"#18C4ED"}},this.state.user)),r.a.createElement("div",{className:"score"},r.a.createElement("h2",null,"Your Score"),r.a.createElement("div",{className:"elScore"},r.a.createElement("span",{id:"circle"},r.a.createElement("a",null,this.state.score,r.a.createElement("span",null,"/100"))))),r.a.createElement("div",{className:"bar-container"},r.a.createElement("div",{className:"elBar"},this.state.topExpenses.map((function(t){return r.a.createElement("div",{className:"lasBars"},r.a.createElement("p",null,"$ ",t.value),r.a.createElement("span",{className:"bar bar-".concat(t.id),style:{width:"".concat(t.value/e.state.total*100+60,"%")}},t.category))}))),r.a.createElement("h2",null,"Total Expenses: $",this.state.total)))}}]),t}(n.Component);function B(){return r.a.createElement("div",null,r.a.createElement("h1",null,"BANCA"))}function C(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("a",{href:"https://github.com/gustavozapata/api-hackathon-19",target:"_blank",rel:"noopener noreferrer"},"GitHub"),r.a.createElement("p",null,"Designed and Developed by The Health Finance Team"))}var N=function(){return r.a.createElement(i.a,{basename:"/api-hackathon-19"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"viewport"},r.a.createElement("header",{className:"App-header"},r.a.createElement(B,null)),r.a.createElement("main",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/api-hackathon-19",component:m}),r.a.createElement(s.a,{path:"/api-hackathon-19/connect-bank",component:b}),r.a.createElement(s.a,{path:"/api-hackathon-19/dashboard",component:w})))),r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.41225d01.chunk.js.map