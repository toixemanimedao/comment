var scripts = document.getElementsByTagName('SCRIPT');
var theHTML2 = '<div class=\"idw-empty\"><p>No comments to display</p></div>	<div class=\"idw-footer\"> <p>Comments by <a href=\"https://www.intensedebate.com\">IntenseDebate</a></p> </div>';
for(var i=0; i<scripts.length; i++)
{
	if(scripts[i].src.indexOf('intensedebate.com/widgets/acctComment')>0)
	{
		if(scripts[i].defer)
		{
			if (window.addEventListener) 
			{ 
			    window.addEventListener("load", initIDWidget2, false); 
			} 
			else if (window.attachEvent) 
			{
			    window.attachEvent('onload', initIDWidget2);
			}
		}
		else
		{
			document.write('<style>.idw-container{cursor:default;display:block;min-width:140px;overflow:hidden;padding:0 0 1em;width:100%;}.idw-container div *{text-indent:0!important;}.idw-container img{border:none;}.idw-container p{font-size:100%;margin:0!important;padding:0!important;}.idw-container a{cursor:pointer;font-size:12px!important;line-height:1.3em!important;}.idw-container a span{display:none;}.idw-container h2{margin:0 0 .5em;}.idw-container .idw-big{float:left;padding:0 2%!important;width:96%;}.idw-container .idw-big a{font-weight:bold!important;float:left;}.idw-container .idw-small{background:url(https://www.intensedebate.com/widgets/images/idw-c-m.png) no-repeat 100% 0;font-size:10px!important;line-height:1.3em;padding:10px 2% 0!important;margin:4px 0 0!important;float:left;width:96%;}.idw-container .idw-small-t{background:none;padding:4px 2% 0!important;font-size:10px!important;line-height:1.3em;float:left;width:96%;}.idw-container ul,.idw-container li{list-style:none;width:auto;float:left;}.idw-container div{float:left;font-size:12px!important;line-height:1.3em!important;padding:0 2%;width:96%;}.idw-container div div{float:left;padding:0;width:auto;}.idw-container .idw-empty{background:url(https://www.intensedebate.com/widgets/images/idc-bg4.png) repeat-x 0 0!important;width:96%;padding:6px 2%;}.idw-container .idw-tools{background:url(https://www.intensedebate.com/widgets/images/idw-c-m.png) no-repeat 100% 0;margin:4px 0 0;padding:10px 2% 0;}.idw-container .idw-recent{font-size:11px;}.idw-container .idw-jump{background:url(https://www.intensedebate.com/widgets/images/idw-jump.png) no-repeat!important;float:right;height:13px;width:60px;border:none!important;}.idw-container .idw-jump span{display:none;}.idw-container .idw-jump:hover{background-position:0 100%!important;}.idw-overflow{width:350px!important;}.idw-container .idw-c{margin:8px 0 0;width:96%;padding:0 2%;}.idw-container .idw-c .idw-c-h{background:url(https://www.intensedebate.com/themes/chameleon/images/idc-c-h.png) repeat-x 100% 0;float:left;width:100%;}.idw-container .idw-c-h li{float:left;clear:none!important;}.idw-container .idw-c-h .idw-avatar{width:18px;height:18px;}.idw-container .idw-c .idw-c-h .idw-avatar img{padding:1px;}.idw-container .idw-c-h .idw-avatar a{border:none;float:left;background:none!important;width:18px;}.idw-c-h .idw-info{padding:2px 0 0 4px;width:auto;}.idw-c-h .idw-info a,.idw-c-h .idw-info .idc-rep{padding:0 3px 0 0;}.idw-c-h .idw-info a{float:left;font-size:12px;line-height:1.3em;}.idw-container .idw-c-h .idw-votes{float:right;margin:0 4px!important;}.idw-container .idw-c .idw-c-m{background:url(https://www.intensedebate.com/widgets/images/idw-c-m.png) no-repeat;margin:4px 0 0;padding:10px 0 0;width:100%;}.idw-container .idw-c .idw-time{font-size:10px;line-height:1.3em;padding:2px 0 4px!important;}.idw-container .idw-footer{margin:4px 0 0;padding:0;width:100%;}.idw-container .idc-rep{cursor:help;display:block;float:left;height:14px;margin:2px 0 0!important;}.idw-container .idc-rep span{background:url(https://www.intensedebate.com/themes/universal/images/idc-transparent.png) -566px -150px;float:left;height:14px;width:5px;margin:0!important;}.idw-container .idc-rep .idc-r{background-position:100% -150px;width:auto;height:12px;padding:2px 5px 0 0;color:#333;float:left!important;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:10px!important;margin:0!important;}.idw-container .idc-rep.idc-level2 span{background-position:-566px -178px;}.idw-container .idc-rep.idc-level2 .idc-r{background-position:100% -178px;color:#424b20;}.idw-container .idc-rep.idc-level1 span{background-position:-566px -164px;}.idw-container .idc-rep.idc-level1 .idc-r{background-position:100% -164px;color:#667726;}.idw-container .idc-rep.idc-level-1 span{background-position:-566px -192px;width:17px;}.idw-container .idc-rep.idc-level-1 .idc-r{background-position:100% -192px;color:#fff;width:auto;}.idw-container .idc-official,.idw-container .idc-helper{background:url(https://www.intensedebate.com/themes/universal/images/idc-transparent.png) no-repeat;height:12px;margin:0 3px 0 0;padding:0!important;width:13px;}.idc-official span,.idc-helper span{display:none;}.idw-container .idc-helper{background-position:0 -12px;}#IDWidget4.idw-container .idw-c{margin:5px 0 0;padding:0;width:100%;}#IDWidget4.idw-container .idw-c .idw-c-h{padding:0;}#IDWidget4 .idw-c-h .idw-rank{background:#fff;float:left;height:16px;margin:1px;text-align:center;width:16px;}#IDWidget2 .idw-c .idw-c-m{background:none;padding:0;}#IDWidget5{float:left;min-width:0;width:auto;}#IDWidget5 div{height:31px;padding:0;width:auto;}#IDWidget5 p{font-size:15px!important;line-height:1em!important;}#IDWidget5 .idw-m{background:url(https://www.intensedebate.com/widgets/blog-stats/images/idw-blog-stats.png) no-repeat;height:33px;padding:3px 1px 0 6px;}#IDWidget5 .idw-small{background:none;color:#666;font-size:11px!important;line-height:1em!important;margin:0!important;padding:0!important;}#IDWidget5 .idw-r{background:url(https://www.intensedebate.com/widgets/blog-stats/images/idw-blog-stats.png) no-repeat 100% 0;height:36px;padding:0;width:5px;}#IDWidget5 .idw-by{clear:both;text-align:right;}#IDWidget5 .idw-by a{font-size:10px!important;line-height:1.3em!important;padding:0 5px!important;}#IDWidget6 .idw-big{padding:0 2% 6px!important;}#IDWidget6 .idw-big a{font-weight:normal!important;}.idw-container .idw-c .idw-c-h{width:100% !important;}.idw-container .idw-c .idw-info{width:auto !important;}.idw-container .idw-c-h *{clear: none !important;display: inline !important;}.idw-container .idw-c .idw-c-h ul{width:100% !important;float: none !important;}.idw-container .idw-c .idw-c-h .idw-votes{float: right !important;}</style><div class="idw-container" id="IDWidget2">'+theHTML2+'</div><script type="text/javascript">if(!IDWUserWidget){ function userWidgetObj() { this.times=Array(); return this; } var IDWUserWidget = userWidgetObj(); IDWUserWidget.IDWUserWidgetUpdateTimeStamps = function() { var spans=document.getElementsByTagName(\"span\"); var d = new Date(); var now=d.getTime(); for(var i=0; i<spans.length; i++) { if(spans[i].className == \"IDWCommentTime\") { var id=parseInt(spans[i].id.substr(7)); var time=Date.parse(spans[i].innerHTML) - Math.floor(d.getTimezoneOffset()/60)*60*60000; if(time>0) { this.times[id] = time; var diff=now-time; this.replaceHTML(spans[i], \"&raquo; \" + this.TimeToStr(diff) + \" ago\", 0); } if(spans[i].innerHTML.indexOf(\"second\")<0 && spans[i].innerHTML.indexOf(\"minute\")<0) spans[i].className = \"\"; else spans[i].className = \"IDWCommentTimeRead\"; } else if(spans[i].className == \"IDWCommentTimeRead\") { var id=parseInt(spans[i].id.substr(7)); var time=this.times[id]; var diff=now-time; replaceHTML(spans[i], \"&raquo; \" + this.TimeToStr(diff) + \" ago\", 0); if(spans[i].innerHTML.indexOf(\"second\")<0 && spans[i].innerHTML.indexOf(\"minute\")<0) spans[i].className = \"\"; } } setTimeout(\"IDWUserWidget.IDWUserWidgetUpdateTimeStamps()\", 1000); }; IDWUserWidget.replaceHTML = function(obj, html, type) { var parent = obj.parentNode; document.body.appendChild(obj); obj.innerHTML = html; if(type==0) parent.appendChild(obj); else parent.insertBefore(obj, parent.firstChild); }; IDWUserWidget.TimeToStr = function(time) { var weeksConv = 60*60*24*7*1000; var daysConv = 60*60*24*1000; var hoursConv = 60*60*1000; var minutesConv = 60*1000; var secondsConv = 1000; var weeks = Math.floor(time/weeksConv); var days = Math.floor(time/daysConv); var hours = Math.floor(time/hoursConv); var minutes = Math.floor(time/minutesConv); var seconds = Math.floor(time/secondsConv); if(weeks>1) return weeks.toString() + \" weeks\"; else if(weeks==1) return weeks.toString() + \" week\"; else if(days>1) return days.toString() + \" days\"; else if(days==1) return days.toString() + \" day\"; else if(hours>1) return hours.toString() + \" hours\"; else if(hours==1) return hours.toString() + \" hour\"; else if(minutes>1) return minutes.toString() + \" minutes\"; else if(minutes==1) return minutes.toString() + \" minute\"; else return \"less than 1 minute\"; }; IDWUserWidget.IDWUserWidgetUpdateTimeStamps();}</script>');
			if ( typeof id_recent_comments_loaded == 'function' )
				id_recent_comments_loaded();
		}
		break;
	}
}

if(!IDWUserWidget)
{
	function userWidgetObj()
	{
		this.times=Array();
		
		return this;
	}
	
	var IDWUserWidget = userWidgetObj();
	
	IDWUserWidget.IDWUserWidgetUpdateTimeStamps = function()
	{
		var spans=document.getElementsByTagName("span");
		var d = new Date();
		var now=d.getTime();
		
		for(var i=0; i<spans.length; i++)
		{
			if(spans[i].className == "IDWCommentTime")
			{
				var id=parseInt(spans[i].id.substr(7));
				var time=Date.parse(spans[i].innerHTML) - Math.floor(d.getTimezoneOffset()/60)*60*60000;	
				if(time>0)					
				{
					this.times[id] = time;			
					var diff=now-time;						
					this.replaceHTML(spans[i], "&raquo; " + this.TimeToStr(diff) + " ago", 0);
				}
				if(spans[i].innerHTML.indexOf("second")<0 && spans[i].innerHTML.indexOf("minute")<0)
					spans[i].className = "";	
				else
					spans[i].className = "IDWCommentTimeRead";						
			}
							
			else if(spans[i].className == "IDWCommentTimeRead")
			{
				var id=parseInt(spans[i].id.substr(7));			
				var time=this.times[id];		
				var diff=now-time;
				replaceHTML(spans[i], "&raquo; " + this.TimeToStr(diff) + " ago", 0);
				if(spans[i].innerHTML.indexOf("second")<0 && spans[i].innerHTML.indexOf("minute")<0)
					spans[i].className = "";			
			}
		}
		
		setTimeout("IDWUserWidget.IDWUserWidgetUpdateTimeStamps()", 1000);
	};
	
	IDWUserWidget.replaceHTML = function(obj, html, type)
	{
		var parent = obj.parentNode;
		document.body.appendChild(obj);
		obj.innerHTML = html;
		if(type==0)
			parent.appendChild(obj);
		else
			parent.insertBefore(obj, parent.firstChild);
	};
	
	IDWUserWidget.TimeToStr = function(time)
	{
		var weeksConv = 60*60*24*7*1000;
		var daysConv = 60*60*24*1000;
		var hoursConv = 60*60*1000;
		var minutesConv = 60*1000;
		var secondsConv = 1000;
		
		var weeks = Math.floor(time/weeksConv);
		var days = Math.floor(time/daysConv);
		var hours = Math.floor(time/hoursConv);
		var minutes = Math.floor(time/minutesConv);
		var seconds = Math.floor(time/secondsConv);
		
		if(weeks>1)
			return weeks.toString() + " weeks";
		else if(weeks==1)
			return weeks.toString() + " week";
		else if(days>1)
			return days.toString() + " days";
		else if(days==1)
			return days.toString() + " day";
		else if(hours>1)
			return hours.toString() + " hours";
		else if(hours==1)
			return hours.toString() + " hour";
		else if(minutes>1)
			return minutes.toString() + " minutes";
		else if(minutes==1)
			return minutes.toString() + " minute";
		else
			return "less than 1 minute";
	};
	IDWUserWidget.IDWUserWidgetUpdateTimeStamps();
}

function initIDWidget2()
{		
	var IDWidgetCSSLoaded42 = document.createElement('link');
	IDWidgetCSSLoaded42.rel = 'stylesheet';
	IDWidgetCSSLoaded42.href = 'https://www.intensedebate.com/wCSS.php?widget=1';
	IDWidgetCSSLoaded42.type = 'text/css';
	document.getElementsByTagName("HEAD")[0].appendChild(IDWidgetCSSLoaded42);
	
	theDiv = document.createElement("DIV");
	theDiv.className = "idw-container";
	theDiv.id = "IDWidget2";
	
	var scripts = document.getElementsByTagName("script");
	var parentObj;
	var theObj;
	for(var i=0; i<scripts.length; i++)
	{
		if(scripts[i].src.indexOf("intensedebate.com/widgets/acctComment")>0)
		{
			parentObj = scripts[i].parentNode; 
			theObj = scripts[i];
			break;
		}
	}
	theDiv.innerHTML = theHTML2;		
	
	if(parentObj)
		parentObj.insertBefore(theDiv,theObj);
		
	if ( typeof id_recent_comments_loaded == 'function' )
		id_recent_comments_loaded();
};
