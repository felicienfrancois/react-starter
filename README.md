# react-starter
Minimal JavaScript App featuring [React](https://facebook.github.io/react/), [TypeScript](http://www.typescriptlang.org/), [SCSS](http://sass-lang.com/), [WebPack](https://webpack.github.io/) and [Karma](https://karma-runner.github.io)+[Mocha](https://mochajs.org/)+[Chai](http://chaijs.com/)+[ReactTestUtils](https://facebook.github.io/react/docs/test-utils.html)

Based on:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
- [How to setup testing using TypeScript, Mocha, Karma and Webpack](https://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/)
- [React Documentation](https://facebook.github.io/react/docs/getting-started.html)
- [Webpack Documentation](https://webpack.github.io/docs/)
- [Taiga Boilerplate](http://www.taigaboilerplate.com/)

Commitments:
- No global dependencies. CLI utilities are included as devDependencies and can be used via `npm run`
- Stylesheets and TypeScript sources share the same directory (Stylesheet files are put next to the associated TypeScript file)

### Install

[Fork](https://github.com/felicienfrancois/react-starter/fork) or [Download](https://github.com/felicienfrancois/react-starter/archive/master.zip)

then

```
cd react-starter
npm install
```

### Run tests

```
npm test
```

or

```
npm run test:watch
```

### Run dev server

```
npm start
```

then open `http://localhost:8080/webpack-dev-server/` in your browser

### Manage TypeScript Typings

```
npm run typings -- search <<somelibrary>>
npm run typings -- install dt~<<somelibrary>> --save --global
```
