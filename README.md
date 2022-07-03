# Encrypt

## Stack
- Typescript 4.6.3
- Vite 2.9.9
- React 18.0.0
- Mobx 6.6.1
- Antd 4.21.3

## Development

### Install dependencies
```bash
yarn
```

### Start development mode
```bash
yarn dev
```

## Production

### Build production
```bash
yarn build
```
### Locally preview production build
```bash
yarn preview
```
## Code style
The project uses eslint, stylelint, prettier

```bash
#eslint check
yarn lint

#eslint fix
yarn lint:fix

#stylelint check
yarn stylelint

#stylelint fix
yarn stylelint:fix

#prettier check
yarn prettier

#prettier fix
yarn prettier:fix

#check types
yarn tsc
```
## Commits
There are 2 main branches in the repository: `master` and `develop`.
Development is done through develop: issue#1 -> develop. Changes in `develop` start the build on stage.
Then develop is tested and, if there are no errors, is filled into `master`.

The project uses [husky](https://www.npmjs.com/package/husky). When you commit, a pre-commit hook is started, which runs commands to check types, linter, prettier, styles.

It also checks the commit message.
Valid commit message template:
```bash
chore: run tests on travis ci
fix(server): send cors headers (#43)
feat(blog): add comment section
```
