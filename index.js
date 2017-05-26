import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    uiExports: {
      app: {
        title: 'React App',
        description: 'An awesome Kibana plugin',
        main: 'plugins/react_app/app',
        // injectVars: function (server) {
        //   const config = server.config();
        //   return {
        //     forThisPlugin: config.get('kibana.index')
        //   };
        // }
      },
      // injectDefaultVars(server, options) {
      //   const config = server.config();
      //   return {
      //     forAnyPlugin: config.get('kibana.index')
      //   };
      // },
      hacks: [
        'plugins/react_app/hack'
      ],
    },
    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true)
      }).default();
    },
    init(server, options) {
      exampleRoute(server, options);
    }
  });
};