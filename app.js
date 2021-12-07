/* 
Will not work but just understand 
We have to write this in script tag in the body of our html
*/

// var sock = new WebSocket('wss://echo.websocket.org');   // this site has been put down so this code wont work

// sock.onopen = function(event) {
//     console.log(event);          // this will log into the console the data stored in the event which is passed as a parameter
// }

// sock.onopen = function(event) {
//     alert('Socket connected successfully!');  // this will show an alert showing that we r connected to a server
//     setTimeout(function() {
//         sock.send('Hey There!');    // this will send message at a delay at 1s,   This message can be seen in the console where it will have an object called data which will have this message stored
//     }, 1000);     // in data part of network in inspect, we can see message getting stored and the message getting recieved by the server. The time is also shown at what time it sent the message and at what time the server recieved the message
// };

// sock.onmessage = function(event) {
//     console.log(event);     // this will console the data stored in event if the message is passed
// };

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// var server = require('ws').Server;
// var s = new server({ port: 5500});      // why we choose 5500 coz this is our live server host's port number

// Now when u run node app.js in the terminal it will wait for us, which means its working
// We created a half server where we send messages but server doesn't respond

// var server = require('ws').Server;
// var s = new server({ port: 5500});

// s.on('connection', function(ws) {
//     ws.on('message', function(message) {
//         console.log('Recieved: ' + message);     // now what will happen if connection is good it will output the message sent to the server in the console. And the message gets stored in ws part of the network 
//     });
// });

// I/P - node app.js
// O/P - Recieved: Hey There!    (after we click okay on the alert when we reload the site)

/*
// HTML
<body>
    <button>Send Hello</button>

    <script>
        var sock = new WebSocket("ws://localhost:5500");     // we run our websocket at our local host 5500

        sock.onopen = function(event) {
            // alert('Socket connected successfully!');  // this will show an alert showing that we r connected to a server
            setTimeout(function() {
                sock.send('Hey There!');    // this will send message at a delay at 1s,   This message can be seen in the console where it will have an object called data which will have this message stored

                // sock.send('hello');
            }, 1000);     // in data part of network in inspect, we can see message getting stored and the message getting recieved by the server. The time is also shown at what time it sent the message and at what time the server recieved the message
        };

        sock.onmessage = function(event) {
            console.log(event);     // this will console the data stored in event if the message is passed
        };

        // document.querySelector('button').onclick = function() {
        //     sock.send('hello');
        // };

        document.querySelector('button').addEventListener('click', function() {
            sock.send('hello');
        });
    </script>

    <!-- <script src="app.js"></script> -->
</body>

// JavaScript
var server = require('ws').Server;     // we import the webServer module 
var s = new server({ port: 5500 });    // we choose port as 5500

s.on('connection', function(ws) {        // if things go correct and client is connected to the server it will work according the message is passed
    ws.on('message', function(message) {       // it will work on what message we are sending
        console.log('Recieved: ' + message);     // now what will happen if connection is good it will output the message sent to the server in the console. And the message gets stored in ws part of the network 

        if(message == 'hello') {       // if message is hello then server will return a message
            ws.send("Hey there from the server!");    // this will get printed by the server when hello is sent as a message
        }
    });
});
*/


/*
// HTML
<body>
    <input type="text" placeholder="Your message here" id="text">   <!-- for sending messages -->

    <button>Send</button>   <!-- to send message -->
 
    <div id="log"></div>   <!-- too show server responded -->

    <script>
        var sock = new WebSocket("ws://localhost:5500");     // we run our websocket at our local host 5500

        var log = document.getElementById('log');

        sock.onmessage = function(event) {   //#6
            console.log(event);     // this will give all the details of the messaging event happened in the console
            log.innerHTML += event.data + "<br>";   // this will show what messsage server responded
        };

        // sock.onmessage = async function(event){   // BY DEVANG
        //     console.log(event);
        //     const text = await new Response(event.data).text();
        //     log.innerHTML += text;
        // }

        // document.querySelector('button').addEventListener('click', function() {
        //     var text = document.getElementById('text').value;
        //     sock.send(text);
        // });

        document.querySelector('button').onclick = function() {   // #1
            var text = document.getElementById('text').value;
            sock.send(text);
        }
        
    </script>

    <!-- <script src="app.js"></script> -->
</body>

// JavaScript
var server = require('ws').Server;     // we import the webServer module 
var s = new server({ port: 5500 });    // we choose port as 5500

s.on('connection', function(ws) {  //#2    // if things go correct and client is connected to the server it will work according the message is passed
    ws.on('message', function(message) {       // it will work on what message we are sending
        console.log('Recieved: ' + message); //(#3)    // now what will happen if connection is good it will output the message sent to the server in the console. And the message gets stored in ws part of the network 
        // it will show the message in the terminal to show whether it got recieved or not

        // ws.send(message.toString());    // we converted to string coz blob was coming without it hence we converted
        // console.log('From Server: ' + message.toString()); //(#4)  // this will show he message responded by the server
        ws.send('From Server: ' + message.toString());   //#5
    });
});
*/

/*
// HTML
<body>
    <input type="text" placeholder="Your message here" id="text">   <!-- for sending messages -->

    <button>Send</button>   <!-- to send message -->
 
    <div id="log"></div>   <!-- too show server responded -->

    <script>
        var sock = new WebSocket("ws://localhost:5500");     // we run our websocket at our local host 5500

        var log = document.getElementById('log');

        sock.onmessage = function(event) {   //#6
            console.log(event);     // this will give all the details of the messaging event happened in the console
            log.innerHTML += event.data + "<br>";   // this will show what messsage server responded
        };

        // sock.onmessage = async function(event){   // BY DEVANG
        //     console.log(event);
        //     const text = await new Response(event.data).text();
        //     log.innerHTML += text;
        // }

        // document.querySelector('button').addEventListener('click', function() {
        //     var text = document.getElementById('text').value;
        //     sock.send(text);
        // });

        document.querySelector('button').onclick = function() {   // #1
            var text = document.getElementById('text').value;
            sock.send(text);
        }
        
    </script>

    <!-- <script src="app.js"></script> -->
</body>

// JavaScript
var server = require('ws').Server;     // we import the webServer module 
var s = new server({ port: 5500 });    // we choose port as 5500

s.on('connection', function(ws) { 
    ws.on('message', function(message) {      
        console.log('Recieved: ' + message); 
        ws.send('From Server: ' + message.toString()); 
    });

    ws.on('close', function() {
        console.log('I lost a client!');   // whenever someone closes a tab it will print lost a client in the terminal
    });

    console.log('One more client connected!')    // whenever someone opens the link: http://127.0.0.1:5500/index.html, it will print the message in the console
});
*/


/*
// HTML
    <style>
        #log {
            width: 800px;
            height: 400px;
            margin: 0 auto;
            border: 5px solid black;
            border-radius: 7px;
        }
        #sendCntrls {
            width: 250px;
            margin: 0 auto;
        }
        </style>
    </head>
    <body>
        <div id="log"></div>   <!-- too show server responded -->
        <br><br>
        <div id="sendCntrls">
            <input type="text" placeholder="Your message here" id="text">   <!-- for sending messages -->
    
            <button>Send</button>   <!-- to send message -->
        </div>
    
        <script>
            var sock = new WebSocket("ws://localhost:5500");     // we run our websocket at our local host 5500
    
            var log = document.getElementById('log');
    
            sock.onmessage = function(event) {   //#6
                console.log(event);     // this will give all the details of the messaging event happened in the console
                log.innerHTML +=  event.data + "<br>";
            };
    
            document.querySelector('button').onclick = function() {   // #1
                var text = document.getElementById('text').value;
                sock.send(text);
                log.innerHTML += "You: " + text + "<br>";  
            }
            
        </script>
    
        <!-- <script src="app.js"></script> -->
    </body>

// JavaScript
var server = require('ws').Server;     // we import the webServer module 
var s = new server({ port: 5500 });    // we choose port as 5500

s.on('connection', function(ws) { 
    ws.on('message', function(message) {      
        console.log('Recieved: ' + message); 

        s.clients.forEach(function (client) {
            if(client != ws) {
                client.send(message.toString());
            } 
        });

        // ws.send('From Server: ' + message.toString()); 
    });

    ws.on('close', function() {
        console.log('I lost a client!');   // whenever someone closes a tab it will print lost a client in the terminal
    });
});
*/


var server = require('ws').Server;     // we import the webServer module 
var s = new server({ port: 5500 });    // we choose port as 5500

s.on('connection', function(ws) {     
    ws.on('message', function(message) {    // #3    on getting a message with proper connection
        message = JSON.parse(message);      // #4    we will parse the stringified message from the server

        if(message.type == "name") {        // #5    we will store the name of the person who sent the message
            ws.personName = message.data;    // storing the name of the client on the server at the current session
            return;       // So, we don't want the rest of the code to run if the name is matched. Hence we return and move out of the function
        }

        console.log('Recieved: ' + message.data);  // this will show on the terminal whether server recieved the message or not

        s.clients.forEach(function e(client) {     // #6    we run a loop to send the message to all the clients on the server the message from one client and not sending the message to same client who sent it
            if(client != ws)    // so we dont server to send the message to the same client who is sending the message but to the other ppl in the chat
            client.send(JSON.stringify({   // we convert the data to string and show it to all the clients on that server
                name: ws.personName,    // to show who sent the message
                data: message.data      // to show what message did that person sent
            })); 
        });

        // ws.send('From Server: ' + message.toString()); 
    });

    ws.on('close', function() {
        console.log('I lost a client!');   // whenever someone closes a tab it will print lost a client in the terminal
    });
});