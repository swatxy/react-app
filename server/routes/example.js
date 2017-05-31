import _ from 'lodash';

export default function (server) {
  const pluginId = server.plugins.react_app.status.id;

  server.ext({
    type: 'onPreHandler',
    method: (request, reply) => {
      let data = {
        method: _.get(request, 'method', ''),
        path: _.get(request, 'path', ''),
        query: _.get(request, 'query', '')
      };
      request.log([`${pluginId}`, 'info', 'onPreHandler'], data);
      reply.continue();
    }
  });

  server.route({
    path: '/api/react_app/example',
    method: 'GET',
    handler(request, reply) {
      request.log([`${pluginId}`, 'info'], 'Test for request.log');
      server.log([`${pluginId}`, 'info'], 'Test for server.log');
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
            server.log([`${pluginId}`, 'info'], `Cluster status is: ${response.status}`);
            reply(response);
          },
          (error) => {
            server.log([`${pluginId}`, 'error'], 'Error while executing search');
            reply(error);
          }
        );
    }
  });

  server.route({
    method: 'GET',
    path: '/api/react_app/indices',
    handler(request, reply) {
      callWithRequest(request, 'indices.get', {
        index: '_all',
        type: '_mapping'
      })
        .then(
          (response) => {
            let indices = _(response).keys().sort((a, b) => {
              return a.localeCompare(b);
            }).values();
            reply(indices);
          },
          (error) => {
            server.log([`${pluginId}`, 'error'], 'Error while executing search');
            reply(error);
          }
        );
    }
  });

  server.route({
    method: 'GET',
    path: '/api/react_app/mappings',
    handler(request, reply) {
      callWithRequest(request, 'indices.get', {
        index: '_all',
        type: '_mapping'
      })
        .then(
          (response) => {
            let mappings = _(response).map((m) => {
              return _.keys(m.mappings);
            }).flatten().uniq().sort((a, b) => {
              return a.localeCompare(b);
            }).values();
            reply(mappings);
          },
          (error) => {
            server.log([`${pluginId}`, 'error'], 'Error while executing search');
            reply(error);
          }
        );
    }
  });

  server.route({
    method: 'POST',
    path: '/api/react_app/msearch',
    handler(request, reply) {
      let databasesCheck = request.payload.databasesCheck;
      let tablesCheck = request.payload.tablesCheck;
      let searchVal = request.payload.searchVal;
      let body = [];
      databasesCheck.split(',').map(database => {
        tablesCheck.split(',').map(table => {
          body.push({index: database, type: table});
          body.push({query: {query_string: {query: searchVal}}});
        });
      });
      callWithRequest(request, 'msearch', {
        body: body
      })
        .then(
          (response) => {
            reply(response);
          },
          (error) => {
            server.log([`${pluginId}`, 'error'], 'Error while executing search');
            reply(error);
          }
        );
    }
  });
}