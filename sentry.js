// configure Sentry initialization options
const initOptions = {
  // No need to configure DSN here, it is already configured in the loader script
  // You can add any additional configuration here
  sampleRate: 0.5,
};
// edit configuration for staging env
if (location.hostname == "ordrsmart.webflow.io") {
  initOptions.debug = true;
}

Sentry.onLoad(function() {
  Sentry.init(initOptions);
});
