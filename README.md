# generator-codechef [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Project builder for codechef

## Installation

First, install [Yeoman](http://yeoman.io) and generator-codechef using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-codechef
```

Then generate your new project:

```bash
yo codechef
```

## Using with Vim

This project is going to be built with Vim users in mind.

Load main.cpp in vim, after coding run `:make` in vim to generate the binary
and run the test.

`test.txt` will contain data which codechef will input.

## Useful macros

* `ARRINIT(arr, n, value)` - Initialize arr of size n with `value`.
* `TDINIT(arr, n, value)` - Initialize a 2d array of size n*n with `value`.
* `PRINTARR(arr, n)` - Prints an array
* `INPUTARR(arr, n)` - Input an array
 
## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Prathik Rajendran M.]()


[npm-image]: https://badge.fury.io/js/generator-codechef.svg
[npm-url]: https://npmjs.org/package/generator-codechef
[travis-image]: https://travis-ci.org/prathik/generator-codechef.svg?branch=master
[travis-url]: https://travis-ci.org/prathik/generator-codechef
[daviddm-image]: https://david-dm.org/prathik/generator-codechef.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/prathik/generator-codechef
