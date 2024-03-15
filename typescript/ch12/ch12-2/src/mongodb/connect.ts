import MongoClient from 'mongodb'

export const connect = (mongoUrl: string = 'mongodb://127.0.0.1:27017') =>
  MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
