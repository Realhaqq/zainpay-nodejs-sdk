# Zainpay Node SDK

NodeJS wrapper for making request to Zainpay API


## Table of content

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)

## Getting Started

- To get started with this SDK, create an [account](https://zainpay.ng/) on Zainpay if you haven't already.
- You can then retrieve your API keys from your [dashboard](https://zainpay.ng/).

## Installation

This SDK can be installed with `npm` or `yarn`.

Using `npm`,

```
npm install zainpay-nodejs-sdk
```

Using `yarn`,

```bash
yarn add zainpay-nodejs-sdk
```

## Usage

```js
const { Zainpay, serviceTypes} = require('zainpay-nodejs-sdk'); // JavaScript
```

Instantiate the Zainpay class

```js
  const reponse = await Zainpay({
    publicKey: PUBLIC_KEY,
    serviceType: serviceTypes.SERVICE_TYPE,
    sandbox: true,
    data: {
      "bankType": "wemaBank",
      "firstName": "Bello",
      "surname": "Samuel Sunday",
      "email": "bellosamuelsunday@gmail.com",
      "mobileNumber": "0810000000",
      "dob": "12-08-1980",
      "gender": "M",
      "address": "Gidado street Kano",
      "title": "Mr",
      "state": "Kano",
      "zainboxCode": "_FDkbg2DOykjQWRpNxv9d"
  }
  });
  console.log(reponse);
```

**Note:**

- The sandbox field is optional, if you don't specify it, it will default to false, and you will be using the [production(live)](https://zainpay.ng/) API. For example:
    
    ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.CREATE_VIRTUAL_ACCOUNT,
    data: {
      "bankType": "wemaBank",
      "firstName": "Bello",
      "surname": "Samuel Sunday",
      "email": "bellosamuelsunday@gmail.com",
      "mobileNumber": "0810000000",
      "dob": "12-08-1980",
      "gender": "M",
      "address": "Gidado street Kano",
      "title": "Mr",
      "state": "Kano",
      "zainboxCode": "_FDkbg2DOykjQWRpNxv9d"
  }
    });
    console.log(reponse);
    ```


- For more information about the services exposed by the SDK, please refer to the [documentation](https://zainpay.ng/developers/).

## Available Services exposed by the SDK

The following services are available with this SDK

**1**. [**Virtual-Accounts**](#1-virtual-accounts)
- [Get ZainBoxes](#get-zainboxes)

**2**. [**Card Endpoints**](#1-virtual-accounts)



<!-- add the Virtual Accounts -->
### 1. Get ZainBoxes
Get all your created zainboxes
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOXES,
    });
    console.log(reponse);
    ```


