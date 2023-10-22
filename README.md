<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

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
