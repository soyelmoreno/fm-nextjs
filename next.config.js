// ~~~~~~~~~~~~~~~~~~~~~~~~ NextJS config

// Create a config object. This extends the existing NextJS config object. Can
// use this to customize things like Webpack, Babel.

/*
module.exports = {
  webpack: {
    // config
    //plugins: [new MyWebpackPlugin()]
  },
  env: {
    MY_ENV_VAR: process.env.SECRET
  }
};
*/

// The other way, which gives you a little more power, it to return a function.

// Import some stuff. Oops, this file doesn't get compiled by Babel, so we have
// to go back to CommonJS.
// import {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_DEVELOPMENT_SERVER
// } from 'next/constants';

/*
const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER
} = require('next/constants');

// phase is a string, referencing some phase or variation on the build process.
// Check out the different phases here:
// https://github.com/vercel/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4
// defaultConfig is the one that gets created for you if you don't make one
module.exports = (phase, defaultConfig) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    // do stuff specific to production build
  }
  if (phase === PHASE_PRODUCTION_SERVER) {
    // do stuff specific to production server
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()]
      }
    };
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // do stuff specific to development server
    console.log("I'm in dev mode");
    return defaultConfig;
  }
  return defaultConfig;
};
*/

// ~~~~~~~~~~~~~~~~~~~~~~~ Plugins

// Examples: withPlugins(), withSass(), withOffline()

//const withMyPlugin;
// Next config:
//const nextconfig = {};
// Have to return a config object to module.exports. Your plugin is basically a
// wrapper that set a few arguments into the next.config object.
//module.exports = withMyPlugin(arg1, arg2, nextconfig);

// We're gonna add a plugin that easily lets us add environment variables to our
// NextJS app.

// Without it, you would use a config object like this:
//module.exports = {
//  env: {
//    myCustomKey: 'my-value',
//    SECRET: 'notGonnaJustHardCodeMyAPIToken'
//  }
//};
// Use an environmental variable from next.config.js in your app somewhere.
// Next.js will replace process.env.customKey with 'my-value' at build time.
//const val = process.env.myCustomKey; // 'my-value'

// Install these: npm i next-env dotenv-load --save-dev
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
// Gonna look at env file, load up all the environmental variables, inject them
dotenvLoad();
// This part is actually creating the plugin with the environmental variables
// loaded into it automatically.
const withEnv = nextEnv();
/*
{
  env: {
    HELP_APP_URL: 'https://frontendmasters.com',
    OTHER_VARIABLE: 'some other value'
  }
};
*/
module.exports = withEnv({});
