import { Connection } from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://roydev:Sc2pXOxg7lWnFM4r@rbcluster.pq2vtnc.mongodb.net/?retryWrites=true&w=majority&appName=RBCluster',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const dbConnection: Connection = mongoose.connection;

export default dbConnection;


