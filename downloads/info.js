function getAppName()
{
  var url=location.href;
  return(url.split("?")[1]);
}

var app=getAppName();
// alert(app);
console.log(app)

window.onload = function () {
    var url = "./downlist/"+app+".json";   // JSON文件路径
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            for(var i=0;i<json.length;i++){
                console.log(json[i].name);
            }
            document.getElementById("name").innerHTML=json["name"];
            document.getElementById("chiname").innerHTML=json["cn"];
            document.getElementById("ver").innerHTML=json["ver"];
            document.getElementById('msg').innerHTML=json["info"];
            document.getElementById("down1").innerHTML=json["down"];
            document.getElementById("md5").innerHTML=json["md5"];
            document.getElementById("zuozhe").innerHTML=json["zuozhe"];
            document.getElementById("down1").href=json["down"];
            document.getElementById("code").href=json["code"];
            document.getElementById("code").innerHTML=json["code"];
        }
    }
}

// console.log(json);
