// configure Sentry initialization options
const initOptions = {
  // No need to configure DSN here, it is already configured in the loader script
  // You can add any additional configuration here
  environment: "production",
};
// edit configuration for staging env
if (location.hostname == "ordrsmart.webflow.io") {
  initOptions.debug = true;
  initOptions.environment = "staging";
}

Sentry.onLoad(function() {
  Sentry.init(initOptions);
});
