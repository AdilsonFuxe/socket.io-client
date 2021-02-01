const express = require('express');
const io = require('socket.io-client');

const app = express();

const socket = io('http://192.168.1.11:5000/drivers');

socket.emit('driver.location', {
  driverLocationId: '123457',
  coordinates: { lat: -8.8398131, lng: 13.2512853 },
});

socket.on(`tore.notification.driver.123457`, (msg) => {
  console.log(msg);
});

app.listen(3334, () => {
  console.log('server rodando');
});
