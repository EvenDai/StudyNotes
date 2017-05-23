//��¼
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
        if (usernameInput == ""){ document.getElementById("isLogMsg").innerHTML = "�������û���"; return false; } 
        var passwordInput = document.getElementById('isLogPDInput').value; 
        if (passwordInput == ""){ document.getElementById("isLogMsg").innerHTML = "����������"; return false; } 
        return true; 
    },
    checkLogin : function() {
        GlobalLogin.cleanMsg();
        var time=0;
        var checker = setInterval(function(){
            if(time++ < 30 && !document.cookie.match(new RegExp("(^|; )"+ GlobalLogin.csid +"=[^;]+"))) return; //3����
            if(document.cookie.match(new RegExp("(^|; )"+ GlobalLogin.csid +"=[^;]+"))) {
                clearInterval(checker);
                var cmu = GlobalLogin.loadAccountName();
                var sessionId = GlobalLogin.loadSessionId();
                if(sessionId!=null){ //��¼
                    if(cmu != "" && cmu != "null" && cmu != "undefined"){
                        GlobalLogin.hiddenFB(); //�رյ�¼����

                        if(GlobalLogin.cb){
                            GlobalLogin.cb();
                            GlobalLogin.cb = null;
                        }

                        //������¼
                        ajaxLogan.build();
                    }
                }
            }else{
                var _msg = document.getElementById("isLogMsg");                  
                if(_msg){
                    _msg.innerHTML = "<font color=red>��¼ʧ��! �����ʺź������Ƿ���ȷ��</font>";
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
            html = '<!--��¼��--> <form onsubmit="return GlobalLogin.submitForm(this);" target="isLogFrame" method="post" action="'+ GlobalLogin.passUrl +'" accept-charset="gbk"><input type="hidden" value="http://cmt.pconline.com.cn/blank.html" name="return"> <div class="expFB" id="isLogCont" style="display: none;"> <div class="th"><span class="mark">ͨ��֤��¼</span><span class="subMark"><a class="close" onclick="GlobalLogin.hiddenFB();GlobalLogin.cleanMsg();return false" href="#">�ر�</a></span></div> <div class="tb"> <table cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <th class="col1">&nbsp;</th> <th class="col34"><font color="red" id="isLogMsg"></font></th> </tr> <tr> <td align="right" class="col1">�û�����&nbsp;</td> <td class="col34"><input type="text" title="����д�û���" id="isLogUNInput" name="username" class="input grayInput" maxlength="20"></td> </tr> <tr> <td class="col1">��&nbsp;&nbsp;�룺&nbsp;</td> <td class="col34"><input type="password" title="����������" id="isLogPDInput" name="password" class="input grayInput" maxlength="20"></td> </tr> <tr> <td class="col1"></td> <td class="col34"></td> </tr> <tr> <td class="col1" style="height: 30px; line-height: 30px;">&nbsp;</td> <td class="col34" style="font-size: 12px; height: 30px; line-height: 30px;"><input type="checkbox" name="auto_login" value="3000" id="auto_login" style="border: 0pt none; vertical-align: middle; margin-top: -4px;"> <label for="auto_login"> &nbsp;��ס��¼״̬</label></td> </tr> <tr> <td class="col1">&nbsp;</td> <td class="col34"><input type="submit" class="regbut" name="loginBtn" value="��&nbsp;¼" style="border: medium none;"> <a target="_blank" class="getpass" href="http://my.pconline.com.cn/passport/forgot_password.jsp">�������룿</a></td> </tr> </tbody> </table> </div> <div class="tf">��û��ע��̫ƽ��ͨ��֤�����<a target="_blank" href="http://my.pconline.com.cn/passport/register.jsp">����ע��</a></div> </div> </form> <div id="isLogBG" class="floBG"></div> <iframe name="isLogFrame" id="isLogFrame" width="0" height="0" scrolling="no" frameborder="0" style="visibility:hidden"></iframe> <!--��¼��end-->';
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
			titleReg=/([^_]*)_?.*/;//ƥ���һ���ո�ǰ���ַ�
            shareTitle=document.title.replace(titleReg,"$1");
			_html = '';

		_html += '<div class="artTools clearfix" id="artTools">';
		_html += 	'<a href="###" onclick="if(typeof ArtFunction != \'undefined\'){ArtFunction.collect();}"  id="collect" class="vote col"><i class="iTip">���ղص���������</i><i class="icon"></i><span>�ղ�(<em>0</em>)</span></a>';
		_html += 	'<a href="###" onclick="if(typeof ArtFunction != \'undefined\'){ArtFunction.vote(this,1);}" class="vote pra" id="agree" ><i class="iTip">���޹�����</i><i class="icon"></i><span>��(<em>0</em>)</span></a>';
		_html += 	'<a href="###" onclick="if(typeof ArtFunction != \'undefined\'){ArtFunction.vote(this,2);}" class="vote neg" id="against"><i class="iTip">�Ѳȹ�����</i><i class="icon"></i><span>��(<em>0</em>)</span></a>';
		_html += 	'<div class="vote share">';
		_html += 		'<a href="javascript:;" target="_self" class="sha"><i class="icon"></i><span>����</span></a>';
		_html += 		'<div class="ctn">';
		_html += 			'<div data-tag="share_4262638" class="bdsharebuttonbox" data-bd-bind="1392347504895">';
		_html += 				'<a data-cmd="weixin" class="weixin" href="javascript:;" title="����΢��"></a>';
		_html += 				'<a data-cmd="qzone" class="qzone" href="javascript:;" title="����QQ�ռ�"></a>';
		_html += 				'<a data-cmd="tsina" class="tsina" href="javascript:;" title="��������΢��"></a>';
		_html += 				'<a data-cmd="tqq" class="tqq" href="javascript:;" title="������Ѷ΢��"></a>';
		_html += 				'<a data-cmd="renren" class="renren" href="javascript:;" title="����������"></a>';
		_html += 				'<a data-cmd="kaixin001" class="kaixin001" href="javascript:;" title="����������"></a>';
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
						//addAgree--�޳�ʼֵ,addAgainst--�ȳ�ʼֵ
		 				//agreeCount--��,againstCount--��
						//collectCount--ʵ���ղ���
						//addCollect--��������ղ���
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
					"bdText": shareTitle + '�������� @̫ƽ���������'
				}
			]
		}
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
	},
	ifLog : function(){//�Ƿ��½ 
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
		            	colCount = colNum;//-2δ��¼ -1�쳣 0�ղسɹ� 1���ղ� 
		 			if(data != null){
		 				code = data.code;
		 			} 
		 			else{
		 				alert('�ף��ӿ��쳣����ˢ��ҳ�棡');
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
				var code = 0;//-2δ��¼ -1�쳣 0��'�ޡ���'�ɹ�  1�ѵ�'��' 2�ѵ�'��'
					if(data != null){
						code = data.code;
					}else{
						alert('�ף��ӿ��쳣����ˢ��ҳ�棡');
						return;
					}

				if(code ==  -1){
					alert('�ף��ӿ��쳣����ˢ��ҳ�棡');
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
							oppVoteObjTip.innerHTML="���޹����ܲ�"
						}
						if(operate==2){
							oppVoteObjTip.innerHTML="�Ѳȹ�������"
						}
						voteObjem.innerHTML=parseInt(count) + 1;
					}else{
						if(code == 1){
							if(operate==1){
								oppVoteObjTip.innerHTML="���޹����ܲ�"
							}
							if(operate==2){
								voteObjTip.innerHTML="���޹����ܲ�"
							}
							voteObj.click()
						}else{
							if(operate==1){
								voteObjTip.innerHTML="�Ѳȹ�������"
							}
							if(operate==2){
								oppVoteObjTip.innerHTML="�Ѳȹ�������"
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