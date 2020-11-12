#!/usr/bin/env node

const net = require('net'),
      log = console.log;

if(process.argv.length < 4) {
  return log('Usage:\n\t ./02-my-telnet.js host port.');
}

let host = process.argv[2],
    port = process.argv[3];

let socket = net.connect({ host: host, port: port}, () => {
  log('connected to', host, 'on port', port);

  process.stdin.on('data', (data) => {
    let line = data.toString('utf8');
    line = line.slice(0, line.length-1) + '\r\n';
    socket.write(line);
  });

  socket.pipe(process.stdout);
});

socket.on('end', () => {
  log('disconnected from server');
  process.exit();
});
