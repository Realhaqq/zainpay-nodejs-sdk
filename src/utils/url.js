/**
 * If the public key starts with pk_prod, return the production URL, otherwise return the sandbox URL
 * @param {string} publicKey - Your public key.
 * @returns The base url for the public key
 */
const getUrl = (sandbox) => {
  const { BASE_URL_PROD, BASE_URL } = require('./constants');

  if (sandbox) {
    return BASE_URL;
  }
  return BASE_URL_PROD;
};

module.exports = getUrl;