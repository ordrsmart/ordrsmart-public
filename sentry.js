Sentry.onLoad(function() {
  Sentry.init({
    // No need to configure DSN here, it is already configured in the loader script
    // You can add any additional configuration here
    sampleRate: 0.5,
  });
});

myUndefinedFunction();
