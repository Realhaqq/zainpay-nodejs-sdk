const serviceTypes = require("./constants/services");

async function Zainpay(param) {
    const axios = require('axios');
    const {
        getUrl,
        // BaseError,
        handleErrors,
        handleAxiosError,
    } = require('./utils');
    const {BaseError} = require('./utils/errors/error.base')
    const { publicKey, serviceType, sandbox, data } = param;
    
      /**
   * makes an encrypted call to Spendo API
   * @param {object} params => publicKey, data, serviceType sandbox
   * @param {function} callback gets called with the result(data) object
   * @return {object} data return decrypted data response object
   */
    if (!publicKey) {
        throw {
            message: 'publicKey is required',
        };
    }

    if (!serviceType) {
        throw {
            message: 'serviceType is required',
        };
    }

    if (!sandbox) {
        sandbox = false
    }

    const url1 = getUrl(sandbox);
    const axiosStruct = await axios.create({
        baseURL: url1,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + publicKey,
        },
    });

    const { url, method } = serviceTypes[serviceType];
    try {
        const response = axiosStruct[method](url, data ? data : {})
        .then(function (response) {
            if (response.status === 200) {
                return JSON.stringify(response.data)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
          
        return await response??console.log('Error: no data returned!')

    } catch (error) {
        // return handleAxiosError(error)
        throw new BaseError({ message: handleAxiosError(error) });
    }
}

module.exports = {
    Zainpay,
    serviceTypes
}
    
