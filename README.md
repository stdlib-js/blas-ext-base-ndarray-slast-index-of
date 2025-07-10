<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# slastIndexOf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the last index of a search element in a one-dimensional single-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
slastIndexOf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-slast-index-of@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var slastIndexOf = require( 'path/to/vendor/umd/blas-ext-base-ndarray-slast-index-of/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-slast-index-of@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.slastIndexOf;
})();
</script>
```

#### slastIndexOf( arrays )

Returns the last index of a specified search element in a one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );

var xbuf = new Float32Array( [ 1.0, 2.0, 4.0, 2.0 ] );
var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var searchElement = scalar2ndarray( 2.0, {
    'dtype': 'float32'
});

var fromIndex = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var idx = slastIndexOf( [ x, searchElement, fromIndex ] );
// returns 3
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the search element.
    -   a zero-dimensional ndarray containing the index from which to begin searching.

If the function is unable to find a search element, the function returns `-1`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );

var xbuf = new Float32Array( [ 1.0, 2.0, 4.0, 2.0 ] );
var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var searchElement = scalar2ndarray( 10.0, {
    'dtype': 'float32'
});

var fromIndex = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var idx = slastIndexOf( [ x, searchElement, fromIndex ] );
// returns -1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a specified starting search index is negative, the function resolves the starting search index by counting backward from the last element (where `-1` refers to the last element).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2scalar@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-slast-index-of@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
var x = new ndarray( 'float32', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var searchElement = scalar2ndarray( 80.0, {
    'dtype': 'float32'
});
console.log( 'Search Element:', ndarraylike2scalar( searchElement ) );

var fromIndex = scalar2ndarray( 0, {
    'dtype': 'generic'
});
console.log( 'From Index:', ndarraylike2scalar( fromIndex ) );

var idx = slastIndexOf( [ x, searchElement, fromIndex ] );
console.log( idx );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-slast-index-of.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-slast-index-of

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-slast-index-of/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-slast-index-of?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-slast-index-of.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-slast-index-of/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/main/LICENSE

</section>

<!-- /.links -->
