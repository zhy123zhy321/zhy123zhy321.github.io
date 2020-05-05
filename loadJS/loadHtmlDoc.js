function getQueryVariableJson()
{	   
    var query = window.location.search.substring(1);
	var arr = query.split("&");   //先通过？分解得到？后面的所需字符串，再将其通过&分解开存放在数组里
	var obj = {};
	for (let i of arr) {
		obj[i.split("=")[0]] = i.split("=")[1];  //对数组每项用=分解开，=前为对象属性名，=后为属性值
	}
    return obj;
}
function loadHtmlDoc (url,renderCode,paramsJsonString) {
var data = "renderCode="+renderCode+"&params="+paramsJsonString;
var xmlhttp;
function loadXMLDoc(url)
{
xmlhttp=null;
if (window.XMLHttpRequest)
  {// code for all new browsers
  xmlhttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {// code for IE5 and IE6
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
if (xmlhttp!=null)
  {
  xmlhttp.onreadystatechange=state_Change;
  xmlhttp.open("POST",url,true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  xmlhttp.send(data);
  }
else
  {
  alert("browser no");
  }
}

function state_Change()
{
if (xmlhttp.readyState==4)
  {// 4 = "loaded"
  if (xmlhttp.status==200)
    {// 200 = OK
	//console.log(xmlhttp.responseText);
	document.write(xmlhttp.responseText);
    }
  else
    {
    alert("connection failed");
    }
  }
}
loadXMLDoc(url+"/standardRender");
}