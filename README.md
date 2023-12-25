<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/downloads-local


<!----- BEGIN GHOST DOCS BADGES ----->
<a href="https://npmjs.com/package/@jill64/downloads-local"><img src="https://img.shields.io/npm/v/@jill64/downloads-local" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/downloads-local"><img src="https://img.shields.io/npm/l/@jill64/downloads-local" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/downloads-local"><img src="https://img.shields.io/npm/dm/@jill64/downloads-local" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/downloads-local"><img src="https://img.shields.io/bundlephobia/min/@jill64/downloads-local" alt="npm-min-size" /></a>
<!----- END GHOST DOCS BADGES ----->


⬇️ Download local file via a-tag on browser

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
