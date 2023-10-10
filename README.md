# downloads-local

[![npm](https://img.shields.io/npm/v/%40jill64%2Fdownloads-local)](https://npmjs.com/package/@jill64/downloads-local)
[![CI](https://github.com/jill64/downloads-local/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/downloads-local/actions/workflows/ci.yml)

Download local file via a tag on browser

## Install

```sh
npm i @jill64/downloads-local
```

## Usage

Download Blob

```js
import { download } from ' @jill64/downloads-local'

download(
  'filename.xxx',
  new Blob([
    // ...
  ])
)
```

or data URL

```js
import { download } from ' @jill64/downloads-local'

download('filename.xxx', 'data:xxxxxxxxxxxx')
```
