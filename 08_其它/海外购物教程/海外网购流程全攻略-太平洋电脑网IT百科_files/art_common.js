//登录
var	GlobalLogin = {
    cb : null,
    addHtml : false,
    cmu : "cmu",
    csid : "common_session_id",
    passUrl : "http://passport2.pconline.com.cn/passport2/passport/login.jsp",
    loadAccountName : function() {
        var cmu = decodeURIComponent(GlobalLogin.getCookie(GlobalLogin.cmu));
        return cmu;
    },
    loadSessionId : function() {
        return GlobalLogin.getCookie(GlobalLogin.csid);
    },
    getCookie : function(name) {
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr != null) return (arr[2]); return null;
    },
    checkForm : function() { 
        var usernameInput = document.getElementById('isLogUNInput').value; 
        if (usernameInput == ""){ document.getElementById("isLogMsg").innerHTML = "请输入用户名"; return false; } 
        var passwordInput = document.getElementById('isLogPDInput').value; 
        if (passwordInput == ""){ document.getElementById("isLogMsg").innerHTML = "请输入密码"; return false; } 
        return true; 
    },
    checkLogin : function() {
        GlobalLogin.cleanMsg();
        var time=0;
        var checker = setInterval(function(){
            if(time++ < 30 && !document.cookie.match(new RegExp("(^|; )"+ GlobalLogin.csid +"=[^;]+"))) return; //3秒钟
            if(document.cookie.match(new RegExp("(^|; )"+ GlobalLogin.csid +"=[^;]+"))) {
                clearInterval(checker);
                var cmu = GlobalLogin.loadAccountName();
                var sessionId = GlobalLogin.loadSessionId();
                if(sessionId!=null){ //登录
                    if(cmu != "" && cmu != "null" && cmu != "undefined"){
                        GlobalLogin.hiddenFB(); //关闭登录弹窗

                        if(GlobalLogin.cb){
                            GlobalLogin.cb();
                            GlobalLogin.cb = null;
                        }

                        //关联登录
                        ajaxLogan.build();
                    }
                }
            }else{
                var _msg = document.getElementById("isLogMsg");                  
                if(_msg){
                    _msg.innerHTML = "<font color=red>登录失败! 请检查帐号和密码是否正确。</font>";
                }
            }
        },100);
    },
    ifLogin : function(){
        if(!document.cookie.match(new RegExp("(^|; )"+ GlobalLogin.csid +"=[^;]+"))) {
            return false;
        }else{
            return true;
        }
    },
    hiddenFB : function(){ 
        document.getElementById('isLogCont').style.display='none';  
        document.getElementById('isLogBG').style.display='none'; 
    },
    showFB : function(cb){
        var html = '';
        if(!GlobalLogin.addHtml){
            html = '<!--登录框--> <form onsubmit="return GlobalLogin.submitForm(this);" target="isLogFrame" method="post" action="'+ GlobalLogin.passUrl +'" accept-charset="gbk"><input type="hidden" value="http://cmt.pconline.com.cn/blank.html" name="return"> <div class="expFB" id="isLogCont" style="display: none;"> <div class="th"><span class="mark">通行证登录</span><span class="subMark"><a class="close" onclick="GlobalLogin.hiddenFB();GlobalLogin.cleanMsg();return false" href="#">关闭</a></span></div> <div class="tb"> <table cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <th class="col1">&nbsp;</th> <th class="col34"><font color="red" id="isLogMsg"></font></th> </tr> <tr> <td align="right" class="col1">用户名：&nbsp;</td> <td class="col34"><input type="text" title="请填写用户名" id="isLogUNInput" name="username" class="input grayInput" maxlength="20"></td> </tr> <tr> <td class="col1">密&nbsp;&nbsp;码：&nbsp;</td> <td class="col34"><input type="password" title="请输入密码" id="isLogPDInput" name="password" class="input grayInput" maxlength="20"></td> </tr> <tr> <td class="col1"></td> <td class="col34"></td> </tr> <tr> <td class="col1" style="height: 30px; line-height: 30px;">&nbsp;</td> <td class="col34" style="font-size: 12px; height: 30px; line-height: 30px;"><input type="checkbox" name="auto_login" value="3000" id="auto_login" style="border: 0pt none; vertical-align: middle; margin-top: -4px;"> <label for="auto_login"> &nbsp;记住登录状态</label></td> </tr> <tr> <td class="col1">&nbsp;</td> <td class="col34"><input type="submit" class="regbut" name="loginBtn" value="登&nbsp;录" style="border: medium none;"> <a target="_blank" class="getpass" href="http://my.pconline.com.cn/passport/forgot_password.jsp">忘记密码？</a></td> </tr> </tbody> </table> </div> <div class="tf">还没有注册太平洋通行证？点击<a target="_blank" href="http://my.pconline.com.cn/passport/register.jsp">立即注册</a></div> </div> </form> <div id="isLogBG" class="floBG"></div> <iframe name="isLogFrame" id="isLogFrame" width="0" height="0" scrolling="no" frameborder="0" style="visibility:hidden"></iframe> <!--登录框，end-->';
            var GlobalLoginHtml=document.createElement("div");
            pc.addClass(GlobalLoginHtml, 'GlobalLogin');
            GlobalLoginHtml.innerHTML=html;
            document.body.appendChild(GlobalLoginHtml);

            GlobalLogin.addHtml = true;
            GlobalLogin.cb = cb;
        }

        document.getElementById('isLogCont').style.display='block';  
        document.getElementById('isLogBG').style.display='block'; 
    },
    cleanMsg : function(){ 
        var _msg = document.getElementById("isLogMsg"); if(_msg){ _msg.innerHTML = ""; }
    },
    submitForm : function(obj){
        if(GlobalLogin.checkForm()){

            GlobalLogin.checkLogin();
            obj.submit();
        }
        return false;
    }
};

var ArtFunction={
	init:function(){
		var id= ArtInfo.id,
			initAgree=ArtInfo.initAgree,
			initAgainst=ArtInfo.initAgainst,
			titleReg=/([^_]*)_?.*/;//匹配第一个空格前的字符
            shareTitle=document.title.replace(titleReg,"$1");
			_html = '';

		_html += '<div class="artTools clearfix" id="artTools">';
		_html += 	'<a href="###" onclick="if(typeof ArtFunction != \'undefined\'){ArtFunction.collect();}"  id="collect" class="vote col"><i class="iTip">已收藏到个人中心</i><i class="icon"></i><span>收藏(<em>0</em>)</span></a>';
		_html += 	'<a href="###" onclick="if(typeof ArtFunction != \'undefined\'){ArtFunction.vote(this,1);}" class="vote pra" id="agree" ><i class="iTip">已赞过文章</i><i class="icon"></i><span>赞(<em>0</em>)</span></a>';
		_html += 	'<a href="###" onclick="if(typeof ArtFunction != \'undefined\'){ArtFunction.vote(this,2);}" class="vote neg" id="against"><i class="iTip">已踩过文章</i><i class="icon"></i><span>踩(<em>0</em>)</span></a>';
		_html += 	'<div class="vote share">';
		_html += 		'<a href="javascript:;" target="_self" class="sha"><i class="icon"></i><span>分享</span></a>';
		_html += 		'<div class="ctn">';
		_html += 			'<div data-tag="share_4262638" class="bdsharebuttonbox" data-bd-bind="1392347504895">';
		_html += 				'<a data-cmd="weixin" class="weixin" href="javascript:;" title="分享到微信"></a>';
		_html += 				'<a data-cmd="qzone" class="qzone" href="javascript:;" title="分享到QQ空间"></a>';
		_html += 				'<a data-cmd="tsina" class="tsina" href="javascript:;" title="分享到新浪微博"></a>';
		_html += 				'<a data-cmd="tqq" class="tqq" href="javascript:;" title="分享到腾讯微博"></a>';
		_html += 				'<a data-cmd="renren" class="renren" href="javascript:;" title="分享到人人网"></a>';
		_html += 				'<a data-cmd="kaixin001" class="kaixin001" href="javascript:;" title="分享到开心网"></a>';
		_html += 			'</div>';
		_html += 		'</div>';
		_html += 	'</div>';
		_html += '</div>';
		pc.getElem('#artFunc').innerHTML = _html;
		pc.need('ajax', function(){
			pc.ajax({
				type: "GET",
			    url: "http://bip.pconline.com.cn/intf/article.jsp?act=getArticleCount&siteId=1&articleId="+id+"&additionalCollect=0&additionalAgree="+initAgree+"&additionalAgainst="+initAgainst,
				dataType: 'scriptp',
				success : function(data){
					var agreeCount=0,againstCount=0,addAgree=0,addAgainst=0,collectCount=0;
					if(data != null){
						agreeCount = data.agreeCount,
						againstCount = data.againstCount,
						addAgree=data.addAgree,
						addAgainst=data.addAgainst,
						collectCount = data.collectCount;
						//addAgree--赞初始值,addAgainst--踩初始值
		 				//agreeCount--赞,againstCount--踩
						//collectCount--实际收藏数
						//addCollect--额外的收收藏数
		 			} 
					var colObj = pc.getElem("#collect"),
						agreeObj = pc.getElem("#agree"),
						againstObj = pc.getElem("#against"),
						colObjem = pc.getElems('em',colObj)[0],
						agreeObjem = pc.getElems('em',agreeObj)[0],
						againstObjem = pc.getElems('em',againstObj)[0];
					agreeCount=parseInt(agreeCount)+parseInt(addAgree);
					againstCount=parseInt(againstCount)+parseInt(addAgainst);
					colObjem.innerHTML = collectCount;
					agreeObjem.innerHTML = agreeCount; 
					againstObjem.innerHTML = againstCount;
		        }
			});
		});
		var share=pc.getElem("#artTools .share");
		pc.addEvent(share, 'mouseenter', function(e){  
			pc.addClass(share,'hover');	
		});
		pc.addEvent(share, 'mouseleave', function(e){    		
			pc.removeClass(share,'hover');	
		});
		window._bd_share_config = {
			common : {
				"common": {
					"bdSnsKey": {
						"tsina": "2953917903"
					},
					"bdMini": "2",
					"bdMiniList": false,
					"bdPic": "",
					"bdStyle": "0",
					"bdSize": "26"
				}
			},
			share : [
				{
					"tag" : "share_4262638",
					"bdText": shareTitle + '（分享自 @太平洋电脑网）'
				}
			]
		}
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
	},
	ifLog : function(){//是否登陆 
		if (!!document.cookie.match(/(^|; )common_session_id=[^;]+/)) {
			return true;
		}
		return false;
	},

	showTips : function(obj){
		pc.addClass(obj,'done');
		setTimeout(function(){
			pc.removeClass(obj,'done');	
		},1000);
		pc.addClass(obj,' showTip');
	},
	collect : function(){
		if (ArtFunction.ifLog() == false) {
			GlobalLogin.showFB();
		}
		else{
			var id= ArtInfo.id,
			    colObj = pc.getElem("#collect"),
			    colObjem = pc.getElems('em',colObj)[0],
			    colNum = colObjem.innerHTML;
			
			pc.need('ajax', function(){
				pc.get("http://bip.pconline.com.cn/intf/article.jsp?act=addArtCollect&siteId=1&articleId="+id,function(data){
		            var code = 0,
		            	colCount = colNum;//-2未登录 -1异常 0收藏成功 1已收藏 
		 			if(data != null){
		 				code = data.code;
		 			} 
		 			else{
		 				alert('亲，接口异常，请刷新页面！');
		 				return;
		 			}
		 			if(code == 0){ 
		 				colCount=parseInt(colCount) + 1;
		 				colObj.onclick=function(){
		 					ArtFunction.showTips(this)
		 				}
					}else if(code == 1){
						colObj.onclick=function(){
							ArtFunction.showTips(this)
						}
						colObj.click();
    				} else if(code == -2) {
    					showFB('login');
    				} else{
						
					}
					colObjem.innerHTML=colCount; 
			    },'scriptp');
		    });
		}
	},
	vote:function(obj,operate){
		var voteObj=obj;
			operate = operate,
			id= ArtInfo.id,
			voteObjem = pc.getElems('em',voteObj)[0],
			voteObjTip = pc.getElems('i',voteObj)[0],
			count = voteObjem.innerHTML,
			oppVoteObj=null,
			oppVoteObjTip=null;
		if(operate == 1){
			oppVoteObj=pc.nextElem(voteObj);
		}
		if(operate == 2){
			oppVoteObj=pc.prevElem(voteObj);
			
		}
		oppVoteObjTip = pc.getElems('i',oppVoteObj)[0];	
		pc.need('ajax', function(){
			pc.get("http://bip.pconline.com.cn/intf/article.jsp?act=addArtAgree&siteId=1&articleId="+ id +"&isAgree="+ operate,function(data){
				var code = 0;//-2未登录 -1异常 0点'赞、踩'成功  1已点'赞' 2已点'踩'
					if(data != null){
						code = data.code;
					}else{
						alert('亲，接口异常，请刷新页面！');
						return;
					}

				if(code ==  -1){
					alert('亲，接口异常，请刷新页面！');
					return;
				}else {
					voteObj.onclick = function(){
						ArtFunction.showTips(this);
					}
					oppVoteObj.onclick=function(){
						ArtFunction.showTips(this);
					};
					if(code == 0){
						if(operate==1){
							oppVoteObjTip.innerHTML="已赞过不能踩"
						}
						if(operate==2){
							oppVoteObjTip.innerHTML="已踩过不能赞"
						}
						voteObjem.innerHTML=parseInt(count) + 1;
					}else{
						if(code == 1){
							if(operate==1){
								oppVoteObjTip.innerHTML="已赞过不能踩"
							}
							if(operate==2){
								voteObjTip.innerHTML="已赞过不能踩"
							}
							voteObj.click()
						}else{
							if(operate==1){
								voteObjTip.innerHTML="已踩过不能赞"
							}
							if(operate==2){
								oppVoteObjTip.innerHTML="已踩过不能赞"
							}
							voteObj.click()
						}
					} 
				}

			},'scriptp');
		});
		
	}

}
ArtFunction.init();