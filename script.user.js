// ==UserScript==
// @run-at			document-end
// @grant			none
// @nocompat
// @noframes
// @name			e-Sim extended.
// @namespace		e-Sim - Free MMOG browser game:.
// @description		e-Sim - Free MMOG browser game:.
// @version			1.7.2
// @author			Minguez
// @date			1/12/2015
// @match			http://*.e-sim.org/*
// @match			https://*.e-sim.org/*
// @include			http*://*.e-sim.org/*
// ==/UserScript==

ca=function(){var bq=window.location.search;var bg={};bq.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function($0,$1,$2,$3){bg[$1]=$3;});return bg;};bD=function(){var aV=window.location.pathname;
var af=aV.substring(aV.lastIndexOf('/')+1);return af;};function XiTClass(call){this.version="1.7.2";this.cY="";this.dp="";this.aC=new Array();this.dQ=(function(selector,update){if(!XiT.aC[selector]||
update){XiT.aC[selector]=$(selector);}return XiT.aC[selector];});this.ai=(function(selector,update){if(!this.aC[selector]||update){this.aC[selector]=$(selector);}return this.aC[selector];});
String.prototype.bF=(function(dE){var value=this;if(value!=""){ao=parseInt(value);ao=(isNaN(ao))?0:ao;ao=(dE)?ao:Math.abs(ao);return ao;}else{return 0;}});String.prototype.ct=(function(){var bq=this;
return(bq=="0")?false:true;});String.prototype.capitalize=(function(){return this.charAt(0).toUpperCase()+this.slice(1);});this.call=(function(){if(this.bo!=""){eval("this."+this.bo+"();");}});
this.bO=(function(key,def){var name="XiT"+this.bE+"_"+key;return localStorage[name]||def;});this.ax=(function(key,value){var name="XiT"+this.bE+"_"+key;return localStorage[name]=value;});this.cU=(
function(key){var name="XiT"+this.bE+"_"+key;delete localStorage[name];});this.cS=(function(){try{var now=this.bO('pluginupdate',null);if(typeof(now)!='undefined'&&now!=null){$.extend(this.cJ,
$.parseJSON(this.bO('cJ','{'+this.aT(this.cJ)+'}')));this.ax("version",this.version);}else{var now=new Date().getTime().toString();this.ax("cJ",'{'+this.aT(this.cJ)+'}');this.ax("pluginupdate",now);}
this.cJ.co=now;}catch(e){console.log("Unknown error "+e+".");}});this.checkVersion=(function(data){var dq=data.version.split(".");var cK=this.version.split(".");var cI=false;if(dq[0]>cK[0]){cI=true;}
else if(dq[0]==cK[0]&&dq[1]>cK[1]){cI=true;}if(cI){var ck='<h3><span class="icon-new"></span> e-Sim extended new update</h3> A new version of plugin is ready for update <br><br> <a href="'+
data.downloadURL+'" class="button foundation-style"><span>Update</span></a> <br><br> version <a href="'+data.updateURL+'" target="_blank">'+data.version+'</a>';this.cq(ck);}else{var now=new Date()
.getTime().toString();this.ax("pluginupdate",now);}});this.cL=(function(){var now=new Date().getTime();var cu=60*60*24*1000;var cz=(now-parseInt(this.cJ.co));if(cz>cu){var script=
document.createElement("script");script.setAttribute("type","text/javascript");script.src="https://lv-soft.github.io/e-Sim-extended/update.js?"+now.toString();document.body.appendChild(script);}});
this.cq=(function(cC){var box='<div id="XiTAlertBox" class="canvaback"><button class="foundation-style closeDropdown">×</button><div class="XiTAlertContent">'+cC+'</div></div>';$("body").append(box);}
);this.dc=(function(ag){for(var item in ag){if(typeof(ag[item])=='object'){return true;}}return false;});this.aT=(function(aI,level){var bB="";var bA="";if(!level){level=0;}var start;if(typeof(aI)==
'object'){if(this.dc(aI)){start=0;for(var item in aI){var value=aI[item];if(start>0){bB+=',';}bA='"'+item+'":';if(value.substring){bB+=bA+'"'+value+'"';}else{bB+=bA+"{"+this.aT(value,level+1)+"}";}
start++;}}else{start=0;for(var item in aI){if(start>0){bB+=',';}bB+='"'+item+'":"'+aI[item]+'"';start++;}return bB;}}else{bB=aI;}return bB;});this.fr=(function(){this.cU("GM");this.cU("cJ");this.cU(
"pluginupdate");this.cU("version");location.href="/editCitizen.html";});this.R=(function(j,an,bz,bb,bP){if(!an)an=2;if(!bz)bz=true;if(!bb)bb=false;if(!bP)bP=false;if(isNaN(parseInt(j)))return "NaN";
var bG=j;var cr=j<0? -1:1;bG*=Math.pow(10,an);bG=Math.round(Math.abs(bG));bG/=Math.pow(10,an);bG*=cr;var K=new String(bG);if(!bz&&j<1&&j> -1&&j!=0)if(j>0)K=K.substring(1,K.length);else K="-"+
K.substring(2,K.length);if(bP&&(j>=1000||j<= -1000)){var bm=K.indexOf(".");if(bm<0)bm=K.length;bm-=3;while(bm>=1){K=K.substring(0,bm)+","+K.substring(bm,K.length);bm-=3;}}if(bb&&j<0)K="("+K.substring(
1,K.length)+")";return K;});this.aY=(function(bq,av,au){av=(av)?"color:"+av:"";au=(au)?"class='"+au+"'":"";return "<span style='"+av+"' "+au+">"+bq+"</span>";});this.cg=(function(){var hostname=
window.location.hostname;var bE=hostname.substring(0,hostname.indexOf('.'));return bE;});this.dA=(function(){var bw=$("#bw").text();var text=$.trim($(".panelPlate").eq(0).text().replace(bw,"")
.replace(/\s\s+/g,' '));var bk=text.split(" ");var cV=bk.length;var value="";var code="";for(var i=0;i<cV;i++){value=bk[i];i++;code=(i==1)?"GOLD":bk[i];this.h[code]=value;}});this.aH=(function(){
this.aB=$.parseJSON(this.bO("GM","{}"));});this.aF=(function(){this.ax('GM','{'+this.aT(this.aB)+'}');});this.by=(function(type){if(type==true){this.ax('B','{'+this.aT(this.aM)+'}');}else{var data=
this.bO("B",false);this.aM=(data===false)?this.aM:$.parseJSON(data);}});this.dn=(function(type){var dk=(type==1)?this.icons:this.dm;var cN=(type==1)?'icon-':'flags-small ';var dR=(type==1)?'icon':
'flag';if(!$("#icons"+type).hasClass("loaded")){var bY='';for(var icon in dk){bY=bY+'<a href="javascript:append(\'['+dR+']'+dk[icon]+'[/'+dR+']\',\'\')"><span class="'+cN+dk[icon].replace(/\s/g,"-")+
'"></span></a>';}this['w'+type]=$('<div id="icons'+type+'" class="blueLabel">'+bY+'</div>');this['w'+type].dialog({title:dR.toUpperCase()+'S',height:"auto",width:"400px",position:"center",resizable:
false});$("#icons"+type).addClass("loaded").html(bY);}else{if(!this['w'+type].dialog("isOpen"))this['w'+type].dialog("open");}this['w'+type].dialog("moveToTop");});this.loading=(function(bq){if($(
".XiTlodading").length==0){$("body").append("<div class='XiTlodading canvaback'><span>"+bq+"</span></div>");}else{$(".XiTlodading span").text(bq);}$(".XiTlodading").fadeIn();});this.loaded=(function()
{$(".XiTlodading").fadeOut();});this.cj=(function(C){var cb=false;if(this.aB[C]){var cs=this.aB[C][0];var now=new Date().getTime();var cu=(60*60*1000)+cs.bF();if(cu>now){cb=true;}}return cb;});
this.dr=(function(l,cZ){this.loading('Loading Currency');$.ajax({type:'GET',url:'/monetaryMarket.html?buyerCurrencyId='+l+'&sellerCurrencyId=0',cache:false,success:function(data){var aW=$(data).find(
".dataTable tr:not(:first) td:nth-child(3)").eq(0).text();var bs=$.trim(aW.replace(/\s\s+/g,' ')).split(" ")[3];XiT.aB;XiT.aB[l]=new Array();XiT.aB[l][0]=new Date().getTime().toString();XiT.aB[l][1]=
bs;XiT.aF();XiT.bo=cZ;XiT.call();XiT.loaded();}});});this.fK=(function(){if(this.cJ.dS==1){$('a[href="premiumMessages.html"]').attr("href","inboxMessages.html");}});this.fL={dS:{dI:"notrequired"}};
this.eI=(function(caller,rules){return true;});this.bo=call;this.bE=this.cg();this.bV={GOLD:0,AFN:130,DEM:3,DZD:64,AOA:65,SAR:62,ARS:24,AMD:131,AUD:35,ATS:48,AZN:132,BDT:59,BEF:40,BJ:85,BYR:52,BOB:
121,BAM:13,BWP:84,BRL:23,BGN:10,BF:86,BIF:109,KHR:119,CM:66,CAD:27,TD:92,CLP:45,CNY:28,COP:46,CG:87,KRW:31,CI:67,CRC:144,HRK:12,CUC:147,DKK:50,DJF:107,DOP:126,ECD:122,EGP:57,SVD:152,AED:110,ERN:90,
SKK:49,SIT:21,ESP:5,USD:26,EEK:53,ETB:68,PHP:54,FIM:37,FRF:4,GA:91,GMD:117,GEL:133,GHS:69,GRD:14,GTQ:127,GNF:96,GW:97,GQ:100,GYT:140,HTG:153,NLG:36,HNL:125,HUF:8,INR:34,IDR:29,IRR:30,IQD:112,IEP:38,
NIS:33,ITL:7,JMD:151,JPY:58,JOD:115,KZT:128,KES:70,KGS:134,LAK:135,LBP:148,LSL:102,LVL:20,LRD:99,LYD:71,LTL:19,MGA:104,MYR:42,MWK:105,ML:94,MAD:72,MRO:95,MXN:25,MDL:150,MNT:145,MEP:47,MZN:73,NAD:101,
NPR:120,NZD:139,NIO:142,NE:93,NGN:74,NOK:43,OMR:113,PKR:41,PAB:143,PGK:146,PYG:123,PEN:44,PLN:1,PTE:18,PRD:149,QAR:114,CDF:89,GBP:6,CF:88,CZK:51,ALL:55,MKD:15,RWF:108,RON:9,RUB:2,EH:116,SN:75,RSD:11,
SLL:98,SYP:111,SOS:106,LKR:129,ZAR:76,SDG:77,SSP:118,SEK:17,CHF:39,SRD:141,SZL:103,THB:63,TWD:32,TJS:136,TZS:78,TG:79,TND:80,TMT:137,TRY:22,UAH:16,UGX:81,UYU:124,UZS:138,VEF:56,VND:60,YER:61,ZMW:82,
ZWL:83};this.aO={0:"GOLD",130:"AFN",3:"DEM",64:"DZD",65:"AOA",62:"SAR",24:"ARS",131:"AMD",35:"AUD",48:"ATS",132:"AZN",59:"BDT",40:"BEF",85:"BJ",52:"BYR",121:"BOB",13:"BAM",84:"BWP",23:"BRL",10:"BGN",
86:"BF",109:"BIF",119:"KHR",66:"CM",27:"CAD",92:"TD",45:"CLP",28:"CNY",46:"COP",87:"CG",31:"KRW",67:"CI",144:"CRC",12:"HRK",147:"CUC",50:"DKK",107:"DJF",126:"DOP",122:"ECD",57:"EGP",152:"SVD",110:
"AED",90:"ERN",49:"SKK",21:"SIT",5:"ESP",26:"USD",53:"EEK",68:"ETB",54:"PHP",37:"FIM",4:"FRF",91:"GA",117:"GMD",133:"GEL",69:"GHS",14:"GRD",127:"GTQ",96:"GNF",97:"GW",100:"GQ",140:"GYT",153:"HTG",36:
"NLG",125:"HNL",8:"HUF",34:"INR",29:"IDR",30:"IRR",112:"IQD",38:"IEP",33:"NIS",7:"ITL",151:"JMD",58:"JPY",115:"JOD",128:"KZT",70:"KES",134:"KGS",135:"LAK",148:"LBP",102:"LSL",20:"LVL",99:"LRD",71:
"LYD",19:"LTL",104:"MGA",42:"MYR",105:"MWK",94:"ML",72:"MAD",95:"MRO",25:"MXN",150:"MDL",145:"MNT",47:"MEP",73:"MZN",101:"NAD",120:"NPR",139:"NZD",142:"NIO",93:"NE",74:"NGN",43:"NOK",113:"OMR",41:
"PKR",143:"PAB",146:"PGK",123:"PYG",44:"PEN",1:"PLN",18:"PTE",149:"PRD",114:"QAR",89:"CDF",6:"GBP",88:"CF",51:"CZK",55:"ALL",15:"MKD",108:"RWF",9:"RON",2:"RUB",116:"EH",75:"SN",11:"RSD",98:"SLL",111:
"SYP",106:"SOS",129:"LKR",76:"ZAR",77:"SDG",118:"SSP",17:"SEK",39:"CHF",141:"SRD",103:"SZL",63:"THB",32:"TWD",136:"TJS",78:"TZS",79:"TG",80:"TND",137:"TMT",22:"TRY",16:"UAH",81:"UGX",124:"UYU",138:
"UZS",56:"VEF",60:"VND",61:"YER",82:"ZMW",83:"ZWL"};this.icons=new Array("smiley","wink","sad","tongue","happy","grin","cool","neutral","wondering","confused","shocked","evil","vendetta","jason",
"skull","loved","scope","scope2","dagger","bat","flag","flag2","firstaid","rocket","bomb","cannon","route","security","tank","binoculars","emergency","hospital","warmedal","awstats","barchart","bag",
"timeline","stockup","stocks","stats","statistics","price","price2","piggybank","coupon","sc","factory","cash","dollar2","euro","euro2","value","affiliate","briefcase","tie","home","wallet","diamond",
"bread","toast","cupcake","muffin","croisant","fightIcon","avatarIcon","trainIcon","voteIcon","workIcon","intersection","globe","image","fort","razor","danger","broom","toiletpaper","satellite",
"raceflag","doghouse","helicopter","removefriend","addfriend","scales","lighthouse","uptime","domain","socialnetworking","contact","certificate","certificate2","html5","css3","jquery","jqueryui",
"java","bug","pill","syringe","lock","unlock","remotemysql","document","rawaccesslogs","news","save","deletefile","createfile","trash","email2","friends","insertpictureleft","pin","maps","place2add",
"place2delete","checkin2","place2","storm2","error","error2","info","info-2","gift","gift-2","bed","filter","search","checkmark","science","tools","trash","ticket","eye","eye-blocked","reply",
"forward","redo","undo","lock-open","newspaper","bolt","appointment","exchange","moneybag","qrcode","uniF000","uniF001","uniF004","uniF005","uniF006","uniF00F","uniF470","uniF471","uniF472","uniF473",
"uniF474","uniF475","uniF476","uniF477","uniF478","uniF479","uniF482","uni0430","bubble","bubbles","bubbles-3","chat","quote","comment","comment2","comment3","comment4","comment5","comment6","chat",
"reademail","emailforward","emailexport","emailimport","newtab","closetab","user","user-2","user-3","users","user-add","new","library","bank","men","airplane","law","paperclip","crown","lightning2",
"hammer","director","woman","man","podium","trophy","medal","medalgold","medalsilver","medalbronze","alert","zoomin","zoomout","key","earth","bookmark","compass","cart","map","tag","tags",
"accessibility","loop","shuffle","facebook","twitter","firefox","IE","chrome","opera","safari");this.dm=new Array("Afghanistan","Albania","Algeria","Angola","Argentina","Armenia","Australia",
"Austria","Azerbaijan","Bangladesh","Belarus","Belgium","Benin","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada",
"Central African Republic","Chad","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba","Czech Republic","Denmark","Djibouti","Dominican Republic","DR of the Congo","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Finland","France","Gabon","Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
"Hungary","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kyrgyzstan","Kuwait","Laos","Latvia","Lebanon","Lesotho",
"Liberia","Libya","Lithuania","Madagascar","Malawi","Malaysia","Mali","Mauritania","Mexico","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Zealand",
"Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Republic of Macedonia","Romania",
"Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Sierra Leone","Slovakia","Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland",
"Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Gambia","Togo","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay",
"USA","Uzbekistan","Venezuela","Vietnam","Western Sahara","Yemen","Zambia","Zimbabwe");this.cJ={dS:0,fl:1,ft:1,cc:1,ez:0,cG:1};this.h={};this.dA();this.l= -1;this.aB={};this.aM={id:0,type:"",ay:"",k:
0,h:"",style:"",gold:0};$(".bbcodebuttons input:last").after(
' <input type="button" name="equipmentButton" id="equipmentButton" value="Equipment" onclick="javascript: append(\'[equipment]id here[/equipment]\',\'\')">');$(".bbcodebuttons").append(
'<a href="javascript:XiT.dn(1)" id="aicons1"><span class="icon-workIcon" style="font-size:1.3em;padding-right:0px;"></span></a> ');$(".bbcodebuttons").append(
'<a href="javascript:XiT.dn(2)" id="aicons2"><span class="icon-flag2" style="font-size:1.3em;padding-right:0px;"></span></a>');this.cS();this.fK();this.call();};function aR(){XiTClass.prototype.cT=(
function(){this.l=$("#countryId option:selected").val();this.H.l=this.l;this.H.fl=this.cJ.fl;this.H.bV=this.bV;this.H.aO=this.aO;this.H.O=this.h;this.aH();this.H.al=this.aB;this.H.R=this.R;this.by();
this.H.F=this.aM;this.H.cv();var bp=this;var table=this.ai(".dataTable:nth-child(1)");table.find("tr:not(:first)").each(function(index,ba){var row=$(this);var L=row.find("input[name='id']").val();
var dP=row.find("td").eq(2).text();var ae=$.trim(row.find("td").eq(3).text().replace(/\s\s+/g,' ')).split(" ");var da=ae[0];var dh=ae[1];var cd=row.find("td:nth-child(4) div").attr("class");bp.H.add(
L,dP,da,dh,1,cd,row);});this.H.bZ();if(this.H.ap===false)this.F();});XiTClass.prototype.H={product:{},l:0,fl:false,bV:{},aO:{},O:{},al:{},aj:{},bi:false,R:{},F:{},V:[],ap:false,aK:false,add:function(
L,aX,k,bJ,T,style,bh){this.product[L]={};this.product[L].aX=aX;this.product[L].k=k;this.product[L].bJ=bJ;this.product[L].C=this.bV[bJ];this.product[L].T=T;this.product[L].style=style;
this.product[L].bh=bh;this.product[L].gold=false;this.cn(L);},cn:function(L){var G=this.product[L];var row=G.bh;var aw="<div class='"+G.style+"'></div> <span id='p"+L+"'><b>0</b></span> "+G.bJ;var bd=
"<br><div class='flags-small Gold'></div> <span id='pg-"+G.C+"-"+L+"'><b>0</b></span> Gold";var am="";if(this.fl){var az="-";var as=this.dg(G.C);if(as!==false){var bs=G.k*as;if(this.aK){if(
this.F.gold==0||this.F.type!=this.V[0]||this.F.ay!=this.V[1]||this.F.gold>bs){this.F.id=G.C;this.F.type=this.V[0];this.F.ay=this.V[1];this.F.k=G.k;this.F.h=G.bJ;this.F.style=G.style;this.F.gold=bs;}}
G.gold=as;az=this.R((G.k*as),5);}am="<br><div class='flags-small Gold'></div> <span id='pg1-"+G.C+"-"+L+"'><b>"+az+"</b></span> Gold";aw=aw+bd;}row.find("td").eq(3).append(am);var t=0;var h=0;if(
this.O[G.bJ]){h=this.O[G.bJ];t=Math.floor(h/G.k);}if(t>0){if(t>G.aX)t=G.aX;row.find("td:nth-child(5)").append('<a href="javascript:void(0);" onclick="$(\'#q'+L+'\').val('+t+');XiT.H.update('+L+','+t+
');"><b>[max. '+t+']<b></a><br>');}row.find("td:nth-child(5)").append(aw).find("input[name='quantity']").attr("id","q"+L).attr("autocomplete","off").keyup(function(){XiT.H.update(L,$(this).val().bF())
;});},update:function(L,T){var G=this.product[L];var O=this.O[G.bJ];if(T>G.aX)T=G.aX;if(T==0)T=0;else $("#q"+L).val(T);var bC=G.k*T;var J="<b>"+this.R(bC)+"</b>";if(bC>O){var bj=bC-O;J=J+" (-"+this.R(
bj)+")";J=XiT.aY(J,"red");}$("#p"+L).html(J);if(this.fl){if(G.gold!==false){var aG=(G.gold*G.k)*T;var bc="<b>"+this.R(aG,5)+"</b>";$("#pg-"+G.C+"-"+L).html(bc);}}G.T=T;},dg:function(C){var ad=true;if(
this.aj[C]===true)return false;if(this.aj[C]===false)return this.al[C][1];if(this.al[C]){var cs=this.al[C][0];var value=this.al[C][1];var now=new Date().getTime();var cu=(60*60*1000)+cs.bF();if(cu>
now){ad=false;}}if(ad==true){this.aj[C]=true;this.bi=C;return false;}else{this.aj[C]=false;return value;}},bZ:function(){for(var l in this.aj){if(this.aj[l]===true){this.db(l);this.ap=true;}}},db:
function(l){$.ajax({type:'GET',url:'/monetaryMarket.html?buyerCurrencyId='+l+'&sellerCurrencyId=0',cache:false,success:function(data){var aW=$(data).find(".dataTable tr:not(:first) td:nth-child(3)")
.eq(0).text();var bs=$.trim(aW.replace(/\s\s+/g,' ')).split(" ")[3];XiT.H.al[l]=new Array();XiT.H.al[l][0]=new Date().getTime().toString();XiT.H.al[l][1]=bs;XiT.H.de(l);}});},de:function(l){$(
'span[id*="pg1-'+l+'-"]').each(function(index,ba){var aa=$(this);var L=aa.attr('id').replace("pg1-"+l+"-","");var G=XiT.H.product[L];G.gold=XiT.H.al[l][1];if(G.gold!==false){var aG=G.gold*G.k;if(
XiT.H.aK){if(XiT.H.F.gold==0||XiT.H.F.type!=XiT.H.V[0]||XiT.H.F.ay!=XiT.H.V[1]||XiT.H.F.gold>aG){XiT.H.F.id=l;XiT.H.F.type=XiT.H.V[0];XiT.H.F.ay=XiT.H.V[1];XiT.H.F.k=G.k;XiT.H.F.h=G.bJ;XiT.H.F.style=
G.style;XiT.H.F.gold=aG;}}var bc="<b>"+XiT.R(aG,5)+"</b>";aa.html(bc);}});if(this.bi==l){XiT.aB=this.al;XiT.aF();XiT.F();}},cv:function(){var bv=[],hash;var bx=window.location.href.slice(
window.location.href.indexOf('?')+1).split('&');for(var i=0;i<bx.length;i++){hash=bx[i].split('=');bv.push(hash[0]);bv[hash[0]]=hash[1];}if(bv['resource']){switch(bv['resource']){case "IRON":
case "GRAIN":case "OIL":case "STONE":case "WOOD":case "DIAMONDS":bv['quality']="6";break;default:}this.V[0]=bv['resource'];this.V[1]=bv['quality'];if(bv['resource']!=""&&bv['countryId']=="-1"&&
bv['quality']!="0")this.aK=true;}}};XiTClass.prototype.F=(function(){if(this.H.aK==false)return false;this.F=this.H.F;this.by(true);var head=
'<h4 style="color:#f2f2f2;" class="smallHeaderSecond">Best:</h4>';var du=(this.F.ay=="6")?"":'<img src="//cdn.e-sim.org/img/productIcons/q'+this.F.ay+'.png" title="">';var icon=
'<div class="product"><div><img src="//cdn.e-sim.org/img/productIcons/'+this.F.type.toLowerCase().capitalize()+'.png" title="">'+du+'</div></div>';var h='<div class="'+this.F.style+'"></div> <b>'+
this.F.k+'</b> '+this.F.h+'<br>';var gold='<div class="flags-small Gold"></div> <b>'+this.R(this.F.gold,5)+'</b> Gold';var links='<br><a href="/productMarket.html?resource='+this.F.type+'&countryId='+
this.F.id+'&quality='+this.F.ay+'">[View]</a> | <a href="javascript:void(0);">[delete]</a>';var ds=
'<div class="columns column-margin-both column-margin-vertical foundation-style canvaback foundation-shadow foundation-radius">';$("#userMenu").append(ds+head+icon+h+gold+links+"</div>");});};
function ci(){XiTClass.prototype.dz=(function(){$(document).ajaxSuccess(function(e,xhr,settings){if(settings.url=="productTaxes.html"){var dK=/country=([0-9]{1,3})/i;var m=dK.exec(settings.data);
XiT.aH();if(XiT.cj(m[1]))XiT.dG();else XiT.dr(m[1],'dG');}});});XiTClass.prototype.dG=(function(){var C=$("#countryInput option:selected").val().bF();var value=this.aB[C][1];var tr=$(
"#preview table.dataTable tr:nth-child(2)");tr.find("td").each(function(index,ba){var data=$.trim($(this).text()).split(" ");var cB=XiT.R((value*data[0]),3);var aE=
"<br><div class='flags-small Gold'></div> <b>"+cB+"</b> Gold";$(this).append(aE);});});};function en(){XiTClass.prototype.cl=(function(){this.aH();var C=$("#countryId option:selected").val().bF();if(
this.cj(C))this.cO();else this.dr(C,'cO');});XiTClass.prototype.cO=(function(){var C=$("#countryId option:selected").val().bF();var value=this.aB[C][1];var bp=this;var table=this.ai("table.dataTable")
.eq(0);table.find("tr:not(:first)").each(function(index,ba){var row=$(this);var data=$.trim(row.find("td").eq(4).text()).split(" ");var cR=bp.R((value*data[0]),2);aE=
"<br><div class='flags-small Gold'></div> <b>"+cR+"</b> Gold";row.find("td").eq(4).css("white-space","nowrap").append(aE);});});};function bS(){XiTClass.prototype.df=(function(){var bf=$(
"#buy option:selected").val().bF();var ac=$("#sell option:selected").val().bF();if(bf>0&&ac==0){var aW=$(".dataTable tr:not(:first) td:nth-child(3)").eq(0).text();var bs=$.trim(aW.replace(/\s\s+/g,
' ')).split(" ")[3];this.aH();this.aB[bf]=new Array();this.aB[bf][0]=new Date().getTime().toString();this.aB[bf][1]=bs;this.aF();}this.aZ.O=this.h;this.aZ.bV=this.bV;this.aZ.R=this.R;var bp=this;
var table=this.ai("table.dataTable").eq(0);table.find("tr:not(:first)").each(function(index,ba){var row=$(this);var cQ=row.find("input[name='id']").val();var data=$.trim(row.find("td").eq(1).text())
.split(" ");var bX=data[0];var bH=(bf==0)?"GOLD":data[1];var data=$.trim(row.find("td").eq(2).text()).split(" ");var bL=data[3];var bu=(ac==0)?"GOLD":data[4];var cp=row.find("td:nth-child(3) div")
.attr("class");bp.aZ.add(cQ,bX,bL,bH,cp,bu,row);});});XiTClass.prototype.aZ={h:{},bV:{},aO:{},O:{},R:{},add:function(mid,aX,k,bu,style,bH,bh){this.h[mid]={};this.h[mid].aX=aX;this.h[mid].k=k;
this.h[mid].bM=bu;this.h[mid].aD=bH;this.h[mid].T=0;this.h[mid].style=style;this.h[mid].bh=bh;this.cX(mid);},cX:function(mid){var G=this.h[mid];var row=G.bh;var t=0;var h=0;var aE="";if(this.O[G.aD]){
h=this.O[G.aD];t=h/G.k;}if(t>0){if(t>G.aX)t=G.aX;t=this.R(t,(G.bM=="GOLD")?3:2);aE='<a href="javascript:void(0);" onclick="$(\'#a'+mid+'\').val('+t+');XiT.aZ.update('+mid+','+t+');">[max. '+t+']</a>';
}aE=aE+"<br><div class='"+G.style+"'></div> <span id='b"+mid+"'><b>-</b></span> "+G.aD;row.find("td:nth-child(4)").append(aE).find("input[name='ammount']").attr("id","a"+mid).attr("autocomplete",
"off").css("width","35px").keyup(function(){XiT.aZ.update(mid,$(this).val());});},update:function(mid,T){var G=this.h[mid];var O=this.O[G.aD];var bN=(G.bM=="GOLD")?2:4;var bC=G.k*T;var J="<b>"+this.R(
bC,bN)+"</b>";if(bC>O){var bj=bC-O;J=J+" (-"+this.R(bj,bN)+")";J=XiT.aY(J,"red");}$("#b"+mid).html(J);}}};function ah(){XiTClass.prototype.cf=(function(){var bn=
'<div class="foundation-style small-5 columns"><b>Total defensores Conectados:</b> <i id="totaldefenders">-</i> <a style="font-size: 11px" href="#" id="defendersLink">Mostrar detalles</a> <a style="font-size: 11px; display: none" href="#" id="defendersLinkHide">Ocultar detalles</a> <br><div id="defendersMenu" style="display: block; font-size: 11px; text-align: center; padding: 1em; margin: auto;" align="center"></div></div>';
bn=bn+
'<div class="foundation-style small-5 columns"><b>Total atacantes Conectados:</b> <i id="totalattackers">-</i> <a style="font-size: 11px" href="#" id="attackersLink">Mostrar detalles</a> <a style="font-size: 11px; display: none" href="#" id="attackersLinkHide">Ocultar detalles</a> <br><div id="attackersMenu" style="display: block; font-size: 11px; text-align: center; padding: 1em; margin: auto;" align="center"></div></div>';
bn=bn+'';var dM=
'<b>Total Espectadores online:</b> <i style="display: inline;" id="totalspectators">-</i> <a style="font-size: 11px; display: none;" href="#" id="spectatorsLink">Show details</a> <a style="font-size: 11px;" href="#" id="spectatorsLinkHide">Hide details</a> <br><div id="spectatorsMenu" style="font-size: 11px; text-align: center; padding: 1em; margin: auto; display: block;" align="center"></div>';
$("#battleStats").append('<div class="foundation-style small-10 columns">'+bn+'</div><div class="foundation-style small-10 columns">'+dM+'</div>');$.ajaxSetup({beforeSend:function(xhr,settings){if(
settings.url.match(/battleScore.html/g)){settings.url=settings.url+"&premium=1";}}});});XiTClass.prototype.dB=false;XiTClass.prototype.aL=(function(){if(this.cJ.ez==1)this.cf();if(this.cJ.cG==1){$(
document).ajaxSuccess(function(e,xhr,settings){if(settings.url.match(/aHR0cDovL3N1bmEuZS1zaW0ub3JnL2ZpZ2h0Lmh0bWw|aHR0cHM6Ly9zdW5hLmUtc2ltLm9yZy9maWdodC5odG1s|fight.html/g)){if(XiT.dB==true){var cA=$(
"#healthUpdate");var cF=$("#foodLimit2").text().bF();var dN=$("#giftLimit2").text().bF();if(cA.length==0||cA.text()=='0.0 HP'){if(dN>0){$("#useGiftButton2").click();$("#useGiftButton2").click();}
else if(cF>0){$("#eatButton2").click();$("#eatButton2").click();}else{XiT.dB=false;}setTimeout(function(){$("#fightagainbutton").eq(0).click();},1700);}else{setTimeout(function(){$(
"#fightagainbutton").eq(0).click();},1200);}}}});}$(document).keydown(function(e){var i=0;switch(e.keyCode){case 69:var eat=function(){$("#eatButton2").click();if(i==1){return false;}else{i=i+1;
setTimeout(eat,500);}};eat();break;case 71:var di=function(){$("#useGiftButton2").click();if(i==1){return false;}else{i=i+1;setTimeout(di,500);}};di();break;case 13:break;case 70:$(
"#fightagainbutton").eq(0).click();break;case 65:if(XiT.cJ.cG==1){alert("Automatic mode on");XiT.dB=true;$("#fightagainbutton").eq(0).click();}break;case 83:if(XiT.cJ.cG==1){alert(
"Automatic mode off");XiT.dB=false;}break;};});});};function bI(){XiTClass.prototype.aS=new Array();XiTClass.prototype.aA=new Array();XiTClass.prototype.v=new Array();XiTClass.prototype.ak=1;
XiTClass.prototype.dJ=$("#unitStatusHead a").attr("href").replace("militaryUnit.html?id=","");XiTClass.prototype.dH=(function(){if(this.cJ.cc!=1)return false;var html=
'<div style="width:350px;float: left; text-align: left" class="testDivwhite">'+'<center><b style="font-size:17px">Acciones</b></center><br><br>'+
'<a href="javascript:XiT.dF();">Check previous day</a>: <b><span id="workday">OFF</span></b> <br>'+'<a href="javascript:XiT.cW();">Order by Skill</a> <br>'+
'<a href="javascript:XiT.bK();">Reset data</a> <br>'+'<a href="javascript:XiT.dv();">Start checking</a> <br>'+'<br><span id="loadworkstatus"></span><br>'+'</div>';$(".testDivwhite").eq(0).after(html);
this.bU();});XiTClass.prototype.dF=(function(){var text=new Array("ON","OFF");this.ak=(this.ak==1)?0:1;$("#workday").text(text[this.ak]);});XiTClass.prototype.bU=(function(){this.v=$.parseJSON(
this.bO("MU","{}"));for(var id in this.v){var html="";var img=(this.v[id].be==1)?"http://icons.iconarchive.com/icons/jackietran/rounded/16/Done-icon.png":
"http://icons.iconarchive.com/icons/jackietran/rounded/16/Error-icon.png";html='<span class="XiWork"><img align="absmiddle" src="'+img+'"> '+this.v[id].ab+'</span> ';$(
'#donateProductForm a[href="profile.html?id='+id+'"]').before(html);}});XiTClass.prototype.aU=(function(text){$("#loadworkstatus").append(text+"<br>");});XiTClass.prototype.dv=(function(){this.aU(
"Loading members...");this.bK();var v=this.v;$("#donateProductForm .profileLink").each(function(index,ba){var id=$(this).attr("href").match(/profile\.html\?id=([0-9]+)/i)[1];var name=$(this).text();
v[id]={};v[id].name=name;v[id].be=0;v[id].ab="0";});this.dC();});XiTClass.prototype.dC=(function(){this.aU("Loading companies...");$.ajax({type:'GET',url:'/militaryUnitCompanies.html?id='+XiT.dJ,
cache:false,success:function(data){var cw=$(data).find('.dataTable a[href*="company.html?id="]').each(function(){var id=$(this).attr("href").match(/company\.html\?id=([0-9]+)/i)[1];var name=$(this)
.text();XiT.aS.push(id);XiT.aA[id]=name;});XiT.aP(0);}});return false;});XiTClass.prototype.aP=(function(j){if(this.aS[j]===undefined){this.dO();return false;}var cD=(this.ak==1)?"12":"11";id=
this.aS[j];this.aU("Verifying who be in <b>"+this.aA[id]+"</b>...");$.ajax({type:'GET',url:'/companyWorkResults.html?id='+id,cache:false,success:function(data){var cw=$(data).find(
'#productivityTable tr:not(:first)').each(function(){var ar=$(this).find('a[href*="profile.html?id="]').attr("href").match(/profile\.html\?id=([0-9]+)/i)[1];if(XiT.v[ar]){XiT.aU("--> Checking "+
XiT.v[ar].name+"...");var be=$(this).find('td:nth-child('+cD+') img').length;var ab=$.trim($(this).find('td:nth-child(2)').text().replace(/\s\s+/g,' '));if(be==0){XiT.v[ar].be=1;}else{XiT.v[ar].be=0;}
XiT.v[ar].ab=ab;}});j=j+1;XiT.aP(j);}});return false;});XiTClass.prototype.dO=(function(){this.aU("All data loading.");this.ax('MU','{'+this.aT(this.v)+'}');this.bU();});XiTClass.prototype.bK=(
function(){this.aS=new Array();this.v=new Array();this.ax('MU','{}');$('.XiWork').remove();});XiTClass.prototype.cW=(function(){aQ=new Array();for(var id in this.v){aQ.push(this.v[id].ab+"-"+id);}if(
aQ.length==0){return false;}aQ.sort();aQ.reverse();var bQ="";var i=1;for(var data in aQ){var as=aQ[data].split("-");var id=as[1];var ab=as[0];var key="input[value='"+id+"']";var ce=$(key).next().attr(
"class");var cP=$(key).next().next().attr("src");var icon=(this.v[id].be==1)?"http://icons.iconarchive.com/icons/jackietran/rounded/16/Done-icon.png":
"http://icons.iconarchive.com/icons/jackietran/rounded/16/Error-icon.png";bQ=bQ+'<br><input class="receipments" type="checkbox" name="citizen'+i+'" value="'+id+'"> - ';bQ=bQ+'<div class="'+ce+
'"></div>';bQ=bQ+'<img align="absmiddle" class="smallAvatar" src="'+cP+'">';bQ=bQ+'<span class="XiWork"><img align="absmiddle" src="'+icon+'"> '+ab+'</span> ';bQ=bQ+
'<a class="profileLink" href="profile.html?id='+id+'">'+this.v[id].name.replace("★",'<span class="premiumStar">★</span>')+'</a>';i=i+1;}$("#donateProductForm div").html(bQ);});};function fh(){
XiTClass.prototype.fk=(function(){$(".column.small-8 > .testDivblue").before(
'<div class="testDivblue" style="width:100%;"> <b style="text-align: center">e-Sim extended Options</b> <br><br> <input type="checkbox" id="XiT_dS" value="1" '+((this.cJ.dS==1)?'checked':'')+
'> <label>Disable Premium Messages</label> <br><br> <button class="foundation-style button" id="pluginSaveOptions">Save</button> <button class="foundation-style button" id="pluginClearStorage"> Clear Local Storage</button></div> <p style="clear: both"></p>')
;$("#pluginSaveOptions").click(function(){for(var aN in XiT.fL){var eU=XiT.fL[aN].dI;if(eU===null)return false;var bq=eU;var pattern=/\[|,|\]/;var result=bq.split(pattern);if(!XiT.eI("#XiT_"+aN,
result)){alert(XiT.fL[aN].text);return false;}if($("#XiT_"+aN).attr("type")=="checkbox"){if($("#XiT_"+aN).is(":checked")){XiT.cJ[aN]="1";}else{XiT.cJ[aN]="0";}}else{XiT.cJ[aN]=$("#XiT_"+aN).val();}};
XiT.ax("cJ",'{'+XiT.aT(XiT.cJ)+'}');location.href="/editCitizen.html";});$("#pluginClearStorage").click(function(){XiT.fr();});});};function et(){var bo="";var aJ="var XiT;";var aq="";var dj=bD();
var bW=ca();if(bW['q']){var cE=document.getElementById("battleHeaderImage");if(cE!=null)dj='battle.html';}switch(dj){case "productMarket.html":aq+=aR.toString()+" aR();";bo="cT";break;
case "citizenMarketOffers.html":aq+=ci.toString()+" ci();";bo="dz";break;case "monetaryMarket.html":aq+=bS.toString()+" bS();";bo="df";break;case "jobMarket.html":aq+=en.toString()+" en();";bo="cl";
break;case "battle.html":aq+=ah.toString()+" ah();";bo="aL";break;case "militaryUnitStorage.html":aq+=bI.toString()+" bI();";bo="dH";break;case "index.html":bo="cL";break;case "editCitizen.html":aq+=
fh.toString()+" fh();";bo="fk";break;default:}var css=
".XiTlodading{position:fixed;right:15px;top:50px;border:1px solid #000;background-image:none;background-color:rgba(0,0,0,0.4);padding:10px;z-index:99;}.XiTlodading span{text-shadow:0 0 1px #000,0 0 2px #000,0 0 3px #000,0 0 4px #000 !important;color:#FFF;font-weight:bold;}#preview table.dataTable{width:auto !important;}#preview table.dataTable tr:nth-child(1) td{word-break:break-word;}#preview table.dataTable tr:nth-child(2) td{white-space:nowrap;}#XiTAlertBox{position:fixed;right:20px;top:54px;z-index:99;border:solid 1px #000;padding:15px;}#XiTAlertBox .closeDropdown{position:absolute;top:7px;right:7px;padding:5px !important;}.XiTAlertContent{color:#FFF;font-family:'Open Sans',Arial,sans-serif !important;}.XiTAlertContent h3{font-size:14px;font-weight:bold;}";
var dw=document.createElement('style');dw.textContent=css;document.head.appendChild(dw);var script=document.createElement("script");script.setAttribute("type","text/javascript");script.textContent=aJ+
XiTClass.toString()+" "+aq+" XiT = new XiTClass('"+bo+"');";document.body.appendChild(script);};et();
