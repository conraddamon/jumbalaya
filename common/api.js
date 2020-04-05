/**
  * This module supports communicating with a server over an API.
  */

/**
 * Sends a request to the server and optionally calls a callback with the results. If a callback
 * is not provided, this function returns a jQuery Deferred object which can be handed to various
 * promise-like functions.
 *
 * @param {string}   op        operation to perform     
 * @param {object}   args      (optional) arguments for op
 * @param {function} callback  (optional) function to call when response comes
 *
 * @return a jQuery Deferred object
 */
export const sendRequest = async (op, args, callback) => {

    var m = location.pathname.match(/^\/(\w+)/),
	app = m && m[1];

    if (location.hostname === 'doubledisccourt.com') {
	app = 'ddc';
    }
    else if (location.hostname === 'overalldisc.com') {
	app = 'overall';
    }

    args = args || {};
    args.op = op;

    const data = await $.get("/data/" + app + ".php", args);
    return JSON.parse(data);
};


