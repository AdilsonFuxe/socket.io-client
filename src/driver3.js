const express = require('express');
const io = require('socket.io-client');

const app = express();

const socket = io('http://192.168.1.11:5000/drivers');

socket.emit('driver.location', {
  driverLocationId: '123458',
  coordinates: { lat: -8.8191398, lng: 13.2423589 },
});

socket.on(`tore.notification.driver.123458`, (msg) => {
  console.log(msg);
});

app.listen(3335, () => {
  console.log('server rodando');
});
