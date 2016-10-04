# eslint-config-fmal

[![Version npm](http://img.shields.io/npm/v/eslint-config-fmal.svg?style=flat-square)](http://browsenpm.org/package/eslint-config-fmal)
[![BuildStatus](http://img.shields.io/travis/fmal/eslint-config-fmal/master.svg?style=flat-square)](https://travis-ci.org/fmal/eslint-config-fmal)

## Usage

### Common

```sh
npm i -D eslint eslint-config-fmal eslint-config-semistandard
```

Add to your `.eslintrc`

```js
{
  "extends": "fmal"
}
```

### Babel

To use the Babel rule set:

```sh
npm i -D eslint eslint-config-fmal babel-eslint eslint-plugin-babel
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/babel"
}
```

### React

To use the React rule set:

```sh
npm i -D eslint eslint-config-fmal eslint-plugin-react
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/react"
}
```

### Import

To use the `eslint-plugin-import` rule set:

```sh
npm i -D eslint eslint-config-fmal eslint-plugin-import
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/import"
}
```

## Composition

You can use any combination of these shareable configs.

Install the dependencies:

```sh
npm i -D eslint eslint-config-fmal eslint-config-semistandard babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-react
```

`.eslintrc`:

```js
{
  "extends": [
    "fmal",
    "fmal/babel",
    "fmal/import",
    "fmal/react"
  ],
  "rules": {
    // custom tweaks
  }
}
```
