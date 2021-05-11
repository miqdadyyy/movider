const fetch = require('node-fetch');
const {URLSearchParams} = require('url');

const BASE_URL = 'https://api.movider.co/v1';

const Movider = class {
  /**
   *
   * @param {string} api_key
   * @param {string} api_secret
   */
  constructor(api_key, api_secret) {
    this.api_key = api_key;
    this.api_secret = api_secret;
  }

  /**
   *
   * @param {string} path
   * @param {object} data
   * @private
   */
  _fetch(path, data = {}) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('api_key', this.api_key);
    encodedParams.set('api_secret', this.api_secret);

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedParams
    };

    return fetch(`${BASE_URL + path}`, options)
      .then(res => res.json())
      .then(res => {
        if(res.error) throw Error(res.error.name);
        return res;
      });
  }

  /**
   *
   * @returns {Promise<*>}
   */

  getBalance() {
    return this._fetch('/balance')
      .then(balance => balance);
  }

  /**
   *
   * @param {string} to
   * @param {string} message
   * @param {object} options
   */
  sendSMS(to, message, options = {
    from: 'MOVIDER',
    callback: {
      url: null,
      method: null
    }
  }) {
    return this._fetch('/sms', {
      to: to,
      text: message,
      from: options.from,
      callback_url: options.callback.url,
      callback_method: options.callback.method
    })
  }
}

module.exports = Movider;
