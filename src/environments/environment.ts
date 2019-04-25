export const environment: any = {
  express_server: {
    host: '0.0.0.0'
  },
  socketio_server: {
    host: '0.0.0.0'
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