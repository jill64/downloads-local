# @jill64/downloads-local

[![npm](https://img.shields.io/npm/v/%40jill64%2Fdownloads-local)](https://npmjs.com/package/@jill64/downloads-local)
[![npm](https://img.shields.io/npm/l/%40jill64%2Fdownloads-local)](https://npmjs.com/package/@jill64/downloads-local)

Download local file via a-tag on browser

## Installation

```sh
npm i @jill64/downloads-local
```

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
