console.log("Script enabled");
var name;

function onTileClick(id) {
    // console.log(id);
    name = document.getElementById(id).textContent;
    console.log(name)
}

function onSendRequest() {
    var userMsg = document.getElementById("userMsg").value;
    console.log(userMsg);
    var request = new XMLHttpRequest();
    request.onload = function () {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {

            console.log("Status OK");
            console.log(data);
            // data.forEach(function(obj) {
            //     console.log(obj.id);
            // });
            const respContainer = document.getElementById("respContainer");
            const response = document.createElement('div');

            const respId = document.createElement('h2');
            respId.textContent = data.id;
            const date = document.createElement('h4');
            date.textContent = data.currentDate;
            const greeting = document.createElement('h1');
            greeting.textContent = data.handshakeMsg;
            const detail = document.createElement('p');
            detail.textContent = data.detailMsg;
            const reversedStr = document.createElement('h5');
            reversedStr.textContent = data.userMsg;

            response.appendChild(respId);
            response.appendChild(date);
            response.appendChild(greeting);
            response.appendChild(detail);
            response.appendChild(reversedStr);
            response.setAttribute('class', 'response');
            respContainer.appendChild(response);

        } else {
            console.log('error');
        }
    };


    var uri = 'http://localhost:8080/api?ncname=' + name + '&msg=' + userMsg;
    console.log(uri);
    request.open('GET', uri, true);
    request.send();
}
