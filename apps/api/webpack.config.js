const { composePlugins, withNx } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  // Polling mode for HMR cross-OS Linux (Docker) - Windows
  if (process.env.DEV_PLATFORM === 'docker')
    config.watchOptions = {
      aggregateTimeout: 100,
      poll: 1000,
    };

  return config;
});
