const aboutUs = StudioWidgetWrapper.extend({
  /*
   * Triggered when initializing a widget and will have the code that invokes rendering of the widget
   */
  init: function () {
    const thisObj = this;
    thisObj._super.apply(thisObj, arguments);
    thisObj.render();
    if (typeof Studio !== "undefined" && Studio) {
      /*
       * Register custom event or action here, and trigger the event afterwards.
       * Studio.registerEvents(thisObj, '', '', EventConfig),
       * Studio.registerAction(thisObj, '', '', ActionConfig, $.proxy(this.Cbk, this), );
       * thisObj.triggerEvent('', )
       */
    }
  },

  /*
   * Triggered from init method and is used to render the widget
   */
  render: async function () {
    const thisObj = this;
    const elem = thisObj.getContainer();

    /*
     * API to get base path of your uploaded widget API file
     */
    const widgetBasePath = thisObj.getWidgetBasePath();
    if (elem) {
      let containerDiv = $(".scfClientRenderedContainer", elem);
      if (containerDiv.length) {
        $(containerDiv).empty();
      } else {
        containerDiv = document.createElement("div");
        containerDiv.className = "scfClientRenderedContainer";
        $(elem).append(containerDiv);
      }
      thisObj.i18nVM = Vue.createApp();
      const i18n = HttpUtils.getI18n(
        {
          locale: HttpUtils.getLocale(),
          messages: await thisObj.getMessagesSync(),
        },
        thisObj.i18nVM
      );
      thisObj.i18nVM.use(i18n);
      thisObj.i18nVM.$t = i18n.global.t;

      const app = Vue.createApp({
        i18n: i18n,
        data() {
          return {
            widgetBasePath,
            currentPageName: "aboutUs",
          };
        },
        mounted() {},

        methods: {},
      });
      app.use(i18n);
      app.use(ElementPlus);
      thisObj.vm = app.mount($("#aboutUs", elem)[0]);
    }

    /*
     * API to bind global events to the item DOM, it should not be deleted if there will some events to trigger in this widget.
     */
    thisObj.sksBindItemEvent();

    /*
     * API to refresh the previously bound events when a resize or orientation change occurs.
     */
    $(window).resize(() => {
      thisObj.sksRefreshEvents();
    });
  },
});
