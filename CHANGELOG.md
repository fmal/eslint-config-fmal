# 8.1.1 2021-03-07

- Changed: bumped `eslint-plugin-import`

# 8.1.0 2021-03-07

- Added: patch for enabling ESLint modern module resolution

# 8.0.0 2021-03-07

- Changed: `eslint-config-standard` has been updated to `~16.0.0`
- Added: detect new JSX runtime and disable React plugin rules accordingly
- Removed: deprecated `eslint-plugin-standard` plugin
- Breaking: ESLint 7+ required

# 7.1.0 2020-06-20

- Added: support for ESLint 7.0.0
- Added: `react-hooks` plugin to `react` config
- Changed: `react/jsx-no-bind` has been relaxed to allow for arrow functions

# 7.0.0 - 2020-05-14

- Changed: updated dependencies
- Added: `react/sort-comp` order with `static-variables` included
- Removed: prettier <2 support

# 6.1.0 - 2019-11-25

- Added: enforce using `T[]` for arrays
- Added: more `eslint-plugin-import` rules

# 6.0.0 - 2019-10-08

- Added: support for ESLint 6.x
- Changed: migrate deprecated `typescript-eslint-parser` and `eslint-plugin-typescript` to
  `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`

# 5.0.0 - 2018-12-20

- Added: TypeScript config

# 5.0.0 - 2018-11-09

- Added: support ESLint 5.0.0

# 4.0.0 - 2018-05-03

- Added: support for `eslint@4`
- Removed: eslint <4 support
- Changed: `camelCase` option for `css-loader` is now enabled

# 3.2.0 - 2017-04-19

- Removed: `eslint-plugin-standard` rules that might conflict with `prettier`

# 3.1.0 - 2017-04-18

- Added: rule set for `eslint-plugin-css-modules`

# 3.0.2 - 2017-04-18

- Changed: `eslint-config-standard` has been updated to `~10.2.1`
- Added: `eslint-config-prettier` and `eslint-plugin-prettier`
- Removed: rules that might conflict with `prettier`
