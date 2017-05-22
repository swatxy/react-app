import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'React App',
        description: 'An awesome Kibana plugin',
        main: 'plugins/react_app/app'
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
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }
  });
};