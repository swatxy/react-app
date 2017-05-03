export default function (server) {

  server.route({
    path: '/api/react_app/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
