# eslint-config-fmal

[![Version npm](http://img.shields.io/npm/v/eslint-config-fmal.svg?style=flat-square)](http://browsenpm.org/package/eslint-config-fmal)
[![BuildStatus](http://img.shields.io/travis/fmal/eslint-config-fmal/master.svg?style=flat-square)](https://travis-ci.org/fmal/eslint-config-fmal)

## Usage

### Common

```sh
npm i -D eslint eslint-config-fmal
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
npm i -D eslint eslint-config-fmal babel-eslint
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/babel"
}
```

### Flow

To use the [flow](https://flowtype.org) rule set:

```sh
npm i -D eslint eslint-config-fmal babel-eslint eslint-plugin-flowtype eslint-plugin-flowtype-errors
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/flow"
}
```

### TypeScript

To use the [TypeScript](https://www.typescriptlang.org/) rule set:

```sh
npm i -D eslint eslint-config-fmal @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/typescript"
}
```

### React

To use the React rule set:

```sh
npm i -D eslint eslint-config-fmal eslint-plugin-react eslint-plugin-react-hooks
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
npm i -D eslint eslint-config-fmal
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/import"
}
```

### Jest

To use the [Jest](http://facebook.github.io/jest/) rule set:

```sh
npm i -D eslint eslint-config-fmal eslint-plugin-jest
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/jest"
}
```

### Mocha

To use the [Mocha](https://mochajs.org/) rule set:

```sh
npm i -D eslint eslint-config-fmal
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/mocha"
}
```

### css-modules

To use the `eslint-plugin-css-modules` rule set:

```sh
npm i -D eslint eslint-config-fmal eslint-plugin-css-modules
```

Add this to your `.eslintrc`:

```js
{
  "extends": "fmal/css-modules"
}
```

## Composition

You can use any combination of these shareable configs.

Install the dependencies:

```sh
npm i -D eslint eslint-config-fmal babel-eslint @typescript-eslint/parser @typescript-eslint eslint-plugin eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-jest eslint-plugin-css-modules
```

`.eslintrc`:

```js
{
  "extends": [
    "fmal",
    "fmal/babel",
    "fmal/import",
    "fmal/typescript",
    "fmal/react",
    "fmal/jest",
    "fmal/css-modules"
  ],
  "rules": {
    // custom tweaks
  }
}
```
