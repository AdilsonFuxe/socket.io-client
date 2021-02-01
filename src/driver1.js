const express = require('express');
const io = require('socket.io-client');

const app = express();

const socket = io('http://192.168.1.11:5000/drivers');

socket.emit('driver.location', {
  driverLocationId: '123456',
  coordinates: { lat: 8.8520096, lng: 13.2548055 },
});

socket.on(`tore.notification.driver.123456`, (msg) => {
  console.log(msg);
});

app.listen(3333, () => {
  console.log('server rodando');
});
