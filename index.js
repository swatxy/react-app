import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'React App',
        description: 'An awesome Kibana plugin',
        main: 'plugins/react_app/app',
        injectVars: function (server) {
          const config = server.config();
          // visible to `myplugin`
          return {
            kbnIndex: config.get('kibana.index')
          };
        }
      },
      injectDefaultVars(server) {
        const config = server.config();
        // visible to any plugin
        return {
          kbnIndex: config.get('kibana.index')
        };
      },
      hacks: [
        'plugins/react_app/hack'
      ],
    },
    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
    init(server, options) {
      exampleRoute(server);
    }
  });
};