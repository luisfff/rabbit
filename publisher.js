const amqp = require("amqplib");

// Get scrip  input number/code
const msg = { number: process.argv[2]}

connect();

async function connect () {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job send successfully ${msg.number}`);
    }
    catch (exe){
        console.error(ex)
    }
}