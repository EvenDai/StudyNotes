<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> <html><head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <title>错误: 您所请求的网址（URL）无法获取</title> <style type="text/css"><!--   /*
 Stylesheet for Squid Error pages
 Adapted from design by Free CSS Templates
 http://www.freecsstemplates.org
 Released for free under a Creative Commons Attribution 2.5 License
*/

/* Page basics */
* {
	font-family: verdana, sans-serif;
}

html body {
	margin: 0;
	padding: 0;
	background: #efefef;
	font-size: 12px;
	color: #1e1e1e;
}

/* Page displayed title area */
#titles {
	margin-left: 15px;
	padding: 10px;
	padding-left: 100px;
	background: url('http://www.squid-cache.org/Artwork/SN.png') no-repeat left;
}

/* initial title */
#titles h1 {
	color: #000000;
}
#titles h2 {
	color: #000000;
}

/* special event: FTP success page titles */
#titles ftpsuccess {
	background-color:#00ff00;
	width:100%;
}

/* Page displayed body content area */
#content {
	padding: 10px;
	background: #ffffff;
}

/* General text */
p {
}

/* error brief description */
#error p {
}

/* some data which may have caused the problem */
#data {
}

/* the error message received from the system or other software */
#sysmsg {
}

pre {
    font-family:sans-serif;
}

/* special event: FTP / Gopher directory listing */
#dirmsg {
    font-family: courier;
    color: black;
    font-size: 10pt;
}
#dirlisting {
    margin-left: 2%;
    margin-right: 2%;
}
#dirlisting tr.entry td.icon,td.filename,td.size,td.date {
    border-bottom: groove;
}
#dirlisting td.size {
    width: 50px;
    text-align: right;
    padding-right: 5px;
}

/* horizontal lines */
hr {
	margin: 0;
}

/* page displayed footer area */
#footer {
	font-size: 9px;
	padding-left: 10px;
}
  body :lang(fa) { direction: rtl; font-size: 100%; font-family: Tahoma, Roya, sans-serif; float: right; } :lang(he) { direction: rtl; float: right; }  --></style> </head><body> <div id="titles"> <h1>ERROR</h1> <h2>The requested URL could not be retrieved</h2> </div> <hr>  <div id="content"> <p>当尝试取回该 URL 时遇到下面的错误：<a href="http://hm.baidu.com/hm.js?">http://hm.baidu.com/hm.js?</a></p>  <blockquote id="error"> <p><b>读取错误</b></p> </blockquote>  <p id="sysmsg">系统返回以下内容：<i>(104) Connection reset by peer</i></p>  <p>An error condition occurred while reading data from the network. Please retry your request.</p>  <p>缓存服务器的管理员 <a href="mailto:root?subject=CacheErrorInfo%20-%20ERR_READ_ERROR&amp;body=CacheHost%3A%20proxy%0D%0AErrPage%3A%20ERR_READ_ERROR%0D%0AErr%3A%20(104)%20Connection%20reset%20by%20peer%0D%0ATimeStamp%3A%20Mon,%2016%20Nov%202015%2015%3A42%3A34%20GMT%0D%0A%0D%0AClientIP%3A%20221.163.38.105%0D%0AServerIP%3A%20220.181.7.190%0D%0A%0D%0AHTTP%20Request%3A%0D%0AGET%20%2Fhm.js%3F46c8852ae89f7d9526f0082fafa15edd%20HTTP%2F1.1%0AHost%3A%20hm.baidu.com%0D%0AProxy-Connection%3A%20keep-alive%0D%0AProxy-Authorization%3A%20Basic%20ZGFpemhlbmxpYW5nQHFxLmNvbTpmYWx3cmRmeXYx%0D%0AAccept%3A%20*%2F*%0D%0AUser-Agent%3A%20Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML,%20like%20Gecko)%20Chrome%2F31.0.1650.63%20Safari%2F537.36%0D%0AReferer%3A%20http%3A%2F%2Fjingyan.baidu.com%2Farticle%2F948f592437e704d80ef5f950.html%0D%0AAccept-Encoding%3A%20gzip,deflate,sdch%0D%0AAccept-Language%3A%20zh-CN,zh%3Bq%3D0.8%0D%0ACookie%3A%20BAIDUID%3D68ECBDF2E5002F5A02CF0327B3A8893F%3AFG%3D1%3B%20BIDUPSID%3D68ECBDF2E5002F5A02CF0327B3A8893F%3B%20PSTM%3D1447678464%3B%20HMACCOUNT%3DE395370E96CD0FD6%3B%20H_PS_PSSID%3D17721_1441_17901_12825_17782_17927_17971_18042_17837_17000_17072_15116_11551_17998_10632%3B%20BCLID%3D9557035180230279275%3B%20BDSFRCVID%3DCl8sJeC62iGtD0O4sVyPwmWVVgK5285TH6aIMEhl-CrFFktMgTNFEG0Pt3lQpYD-yCFVogKKK2OTH65P%3B%20H_BDCLCKID_SF%3DJRkD_DKhtDvbfP0k-tcH244HqxbXqMJQfT7Z0l8KtJTnfh-xXTO53RFr5UcULq5MWbIHVI5mWIQHOq6HM-kVLnDzQxRJW4bnBec4KKJxbIOSVtJXQKcBLUKZhUJiBMPHBan7_D5xfJOKHIC4D6D5Df5%0D%0A%0D%0A%0D%0A">root</a>.</p> <br> </div>  <hr> <div id="footer"> <p>已由 proxy (squid/3.1.10) 生成 Mon, 16 Nov 2015 15:42:34 GMT</p> <!-- ERR_READ_ERROR --> </div> </body></html> 