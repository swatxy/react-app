import _ from 'lodash';

export default function (server) {
  server.ext({
    type: 'onPreHandler',
    method: function (request, reply) {
      console.log('========================');
      console.log('method', JSON.stringify(_.get(request, 'method', '')));
      console.log('path', JSON.stringify(_.get(request, 'path', '')));
      console.log('query', JSON.stringify(_.get(request, 'query', '')));
      return reply.continue();
    }
  });
  server.route({
    path: '/api/react_app/example',
    method: 'GET',
    handler(req, reply) {
      reply({time: (new Date()).toISOString()});
    }
  });
}