const kafka = require("./kafkaConfig")


const saveNotification = [];

const consumeFrom = async () => {
    
    const consumer = kafka.consumer({ groupId: 'todo-group', sessionTimeout: 6000});
    await consumer.connect()
    console.log("Kafka consumer is connected");
    await consumer.subscribe({topic:"ToDoListTopic", fromBeginning: true});
    await consumer.run({
        eachMessage: ({message}) => {
            console.log("message =>>>>  ",message.value.toString());
            saveNotification.push(message.value.toString());
        }
    })
}


module.exports = {consumeFrom, saveNotification}