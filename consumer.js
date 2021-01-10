const amqp = require("amqplib");

connect();

async function connect () {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();

        channel.consume("jobs", message => {

          const input = JSON.parse(message.content);
          console.log(`Received job with input ${input.number}`);
          channel.ack(message);
        });
        
        console.log("Waiting for messages...");
    }
    catch (exe){
        console.error(ex)
    }
}