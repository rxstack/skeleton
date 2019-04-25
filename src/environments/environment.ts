export const environment: any = {
  express_server: { },
  socketio_server: { },
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