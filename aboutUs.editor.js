aboutUs = aboutUs.extend({
  /*
   * Config to define Widget Properties
   */
  propertiesConfig: [
    {
      headerTitle: "Connector",
      accordion: true,
      accordionState: "close",
      config: [
        {
          type: "connectorV2",
          name: "APIConnector_POST",
          label: "APIConnector_POST",
          model: "ViewModel",
          value: "global_connector_APIConnector",
        },
        {
          type: "connectorV2",
          name: "APIConnector_GET",
          label: "APIConnector_GET",
          model: "ViewModel",
          value: "global_connector_APIConnector",
        },
      ],
    },
  ],

  /*
   * Triggered when the user Creates a new widget and used to initialize the widget properties
   */
  create: function (cbk) {
    if (cbk) {
      this._super();
      cbk();
    }
  },
});

const params = {};
Studio.registerWidget("aboutUs", "aboutUs", params);
