export const environment: any = {
  express_server: {
    host: '0.0.0.0',
    port: 'EXPRESS_PORT'
  },
  socketio_server: {
    host: '0.0.0.0',
    port: 'SOCKETIO_PORT'
  },
  servers: ['express', 'socketio'],
  logger: {
    handlers: [
      {
        type: 'console',
        options: {
          level: 'silly',
        }
      }
    ]
  }
};