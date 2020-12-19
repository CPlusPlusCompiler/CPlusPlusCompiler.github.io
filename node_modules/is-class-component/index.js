/* --------------------
 * is-class-component module
 * CJS entry point
 * ------------------*/

/* eslint-disable global-require */

'use strict';

// Exports

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./dist/cjs/is-class-component.min.js');
} else {
	module.exports = require('./dist/cjs/is-class-component.js');
}
