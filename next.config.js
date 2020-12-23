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
