# download-local

Download local file via \<a> on browser

## Install

```sh
npm i @jill64/download-local
```

## Usage

Download Blob

```js
download(
  'filename.xxx',
  new Blob([
    // ...
  ])
)
```

or data URL

```js
download('filename.xxx', 'data:xxxxxxxxxxxx')
```
