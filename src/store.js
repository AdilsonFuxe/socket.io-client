const express = require('express');
const io = require('socket.io-client');

const app = express();

const socket = io('http://192.168.1.11:5000');

socket.emit('store.notification', {
  storeId: '1200',
  location: { lat: 8.8520096, lng: 13.2548055 },
  maximunDistance: 100,
});

app.listen(3338, () => {
  console.log('server rodando');
});
