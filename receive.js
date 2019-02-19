var amqp = require('amqplib/callback_api');

amqp.connect("amqp://localhost", function(err, conn) {
    if(err) {
        console.log(err);
    }
    else {
        conn.createChannel(function(err, ch) {
            if(err) {
                console.log(err);
            }
            else {
                var q = "hello";
                ch.assertQueue(q,{durable : false});
                ch.consume(q, function(msg){
                    console.log(" [x] Received %s", msg.content.toString());
                }, {noAck : true});
            }
        })
    }
})