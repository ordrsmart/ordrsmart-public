// configure Sentry initialization options
const initOptions = {
  // No need to configure DSN here, it is already configured in the loader script
  // You can add any additional configuration here
  environment: "production",
  // send session events to Sentry
  autoSessionTracking: true,
};
// edit configuration for staging env
if (location.hostname == "ordrsmart.webflow.io") {
  initOptions.debug = true;
  initOptions.environment = "staging";
  // don't send session events to Sentry in staging
  // TODO(shubham): uncomment the following line after testing session events in staging
  // initOptions.autoSessionTracking = false;
}

Sentry.onLoad(function() {
  Sentry.init(initOptions);
});
