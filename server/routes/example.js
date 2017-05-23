import _ from 'lodash';

export default function (server) {
  const pluginId = server.plugins.react_app.status.id;

  server.ext({
    type: 'onPreHandler',
    method: (request, reply) => {
      console.log('========================');
      console.log('method', JSON.stringify(_.get(request, 'method', '')));
      console.log('path', JSON.stringify(_.get(request, 'path', '')));
      console.log('query', JSON.stringify(_.get(request, 'query', '')));
      reply.continue();
    }
  });

  server.route({
    path: '/api/react_app/example',
    method: 'GET',
    handler(request, reply) {
      reply({time: (new Date()).toISOString()});
    }
  });

  const {callWithRequest} = server.plugins.elasticsearch.getCluster('data');

  server.route({
    method: 'GET',
    path: '/api/react_app/health',
    handler(request, reply) {
      callWithRequest(request, 'cluster.health')
        .then(
          (response) => {
            server.log([`plugin:${pluginId}`, 'info'], `Cluster status is: ${response.status}`);
            reply(response);
          },
          (error) => {
            server.log([`plugin:${pluginId}`, 'error'], 'Error while executing search');
            reply(error);
          }
        );
    }
  });
}