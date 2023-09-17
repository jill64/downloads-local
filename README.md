# downloads-local

![github-actions-ci](https://github.com/jill64/downloads-local/actions/workflows/ci.yml/badge.svg)

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
