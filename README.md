This repo is a collection of simple demos of Webpack, based on [https://github.com/ruanyf/webpack-demos.git](https://github.com/ruanyf/webpack-demos.git).

These demos are purposely written in a simple and clear style. You will find no difficulty in following them to learn the powerful tool.

## How to use

```bash
$ npm i -g webpack webpack-dev-server
```

Then, clone the repo.

```bash
$ git clone https://github.com/UMSI579/webpack-demos.git 
```

Install the dependencies.

```bash
$ cd webpack-demos
$ npm install
```

Now, play with the source files under the repo's demo* directories.
`build` bundles with webpack. `serve` hosts them on a local server.

```bash
$ cd demo01
$ npm run build
$ npm run serve
```

You can also create a non-minified build to better understand what webpack is doing with
```bash
$ npm run devbuild
```
After having `webpack.config.js`, you can invoke Webpack without any arguments.

```bash
$ webpack
```
is the same as 
```bash
$ npm run build
```





## License

MIT
