# cool-name-api
[![Build Status](https://travis-ci.org/mohitkyadav/cool-name-api.svg?branch=master)](https://travis-ci.org/mohitkyadav/cool-name-api)


This is a website and node.js project to transform text into a cool representation of that text.

For example `wolverine` becomes:

* `ⓦ0lv3r1nⓔ`
* `wo|ver!ne`
* `🅆🄾🄻🅅🄴🅁🄸🄽🄴`
* `ⓦⓞⓛⓥⓔⓡⓘⓝⓔ`
* `w01v3r1n3`
* `🔱⚽👢✅🎗🌱🎐🎵🎗`
* `w͓̽o͓̽l͓̽v͓̽e͓̽r͓̽i͓̽n͓̽e͓̽`
* (backwards) `‮wolverine`

## Demo

To see the API in action, you can visit the website at https://cool-name-api.glitch.me/

## Usage

### coolify

* request URL: https://cool-name-api.glitch.me/coolify
* query params (required): `name`
* example with 'wolverine': https://cool-name-api.glitch.me/coolify?name=wolverine
```
$ curl -X GET 'https://cool-name-api.glitch.me/coolify?name=wolverine'
```

### uncoolify

* request URL: https://cool-name-api.glitch.me/uncoolify
* query params (required): `name`
* example with '🌛🌱⛎〽️🅿️🎏': https://cool-name-api.glitch.me/uncoolify?name=%F0%9F%8C%9B%F0%9F%8C%B1%E2%9B%8E%E3%80%BD%EF%B8%8F%F0%9F%85%BF%EF%B8%8F%F0%9F%8E%8F
```
$ curl -X GET 'http://localhost:3000/uncoolify?name=%F0%9F%8C%9B%F0%9F%8C%B1%E2%9B%8E%E3%80%BD%EF%B8%8F%F0%9F%85%BF%EF%B8%8F%F0%9F%8E%8F'
```

## Build Setup

* **Step 1:** Fork the cool-name-api repository and clone it to your machine
* **Step 2:** Cd into the cloned folder
* **Step 3:** Install all the dependencies with:```$ npm install```
* **Step 4:** Run on http://localhost:3000 with:```$ npm start```

## Contribute
Found a bug, please [create an issue](https://github.com/mohitkyadav/cool-name-api/issues/new)

## License

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

## Live Website Hosting

The live website is hosted on [Glitch](https://glitch.com/about).
You can [remix it there](https://glitch.com/edit/#!/cool-name-api).
