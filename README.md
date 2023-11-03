<!----- BEGIN GHOST DOCS HEADER ----->

# downloads-local

[![npm-version](https://img.shields.io/npm/v/@jill64/downloads-local)](https://npmjs.com/package/@jill64/downloads-local) [![npm-license](https://img.shields.io/npm/l/@jill64/downloads-local)](https://npmjs.com/package/@jill64/downloads-local) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/downloads-local)](https://npmjs.com/package/@jill64/downloads-local) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/downloads-local)](https://npmjs.com/package/@jill64/downloads-local)

⬇️ Download local file via a-tag on browser

## Install

```sh
npm i @jill64/downloads-local
```

<!----- END GHOST DOCS HEADER ----->

## Usage

Download Blob

```js
import { download } from '@jill64/downloads-local'

download(
  'filename.xxx',
  new Blob([
    // ...
  ])
)
```

or data URL

```js
import { download } from '@jill64/downloads-local'

download('filename.xxx', 'data:xxxxxxxxxxxx')
```
