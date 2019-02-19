var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
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
                ch.assertQueue(q, { durable : false });
                ch.sendToQueue(q, new Buffer.from('Hello World!'));
                console.log(" [x] 'Sent Hello World !'");
                setTimeout(function() { conn.close(); process.exit(0) }, 500);
            }
        })
    }
});