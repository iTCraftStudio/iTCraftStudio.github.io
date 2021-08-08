
function jrrp(c,d) {
  return (((d+1324)*(((d+154)*(c+1))%(c+3421)+((d+879)*(c+34))%((c+413)%(9*(((d+87)*(c+213))%((c+45)+76))))))+(((d+1)*(c+43))%(c+1)+((d+234)*(c+654))%((c+32)%(453*(((d+5362)*(c+532))%((c+86)+234)))))+91312)%101
}

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+ d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}

function Jrrp() {
  var code = getCookie("code");
  if (code == "") {
    setCookie("code",Math.floor(Math.random() * 10000000),740);
    code = getCookie("code");
  }

  var day = new Date();
  var date = (day.getMonth() + 1) * day.getFullYear() * (day.getDay() + 1) * day.getDate()

  // 开始计算
  return jrrp(code,date);
}

function start() {
  document.getElementById("jrrp").innerHTML=Jrrp()
}
