const kafka = require("../config/kafka")


const producerTo = async(key, taskId, taskStatus) => {
    const producer = kafka.producer();
    const message = `Your task:${taskId} status is updated to ${taskStatus}`
    await producer.connect(()=>{console.log("kafka connected")});
    await producer.send({
        topic:"ToDoListTopic",
        messages:[{key:key, value:message}]
    })
    console.log(`kafka working`)
    await producer.disconnect()
}

module.exports = producerTo