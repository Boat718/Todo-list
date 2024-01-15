const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'todoList',
  brokers: ['localhost:9092'],
})

module.exports = kafka;