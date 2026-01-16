# Example Using React.js in Mezzio application

![ci build](https://github.com/samsonasik/mezzio-react/workflows/ci%20build/badge.svg)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fsamsonasik%2Fmezzio-react%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/samsonasik/mezzio-react/master)
[![Code Coverage](https://codecov.io/gh/samsonasik/mezzio-react/branch/master/graph/badge.svg)](https://codecov.io/gh/samsonasik/mezzio-react)
[![Downloads](https://poser.pugx.org/samsonasik/mezzio-react/downloads)](https://packagist.org/packages/samsonasik/mezzio-react)

Introduction
------------

A Mezzio 3 Skeleton Application with React.js integration.

Features
--------

- SPA application with React Router DOM with cached pages after visited.
- Using server side template from Mezzio 3, eval'd with DOMPurify it first.
- Webpack support for [production](#production)

## Setup

*1.* Run composer create-project command:

```bash
composer create-project samsonasik/mezzio-react
composer development-enable
```

*2.* Run PHP Development server

```php
cd mezzio-react
composer serve
```

*3.* Open web browser http://localhost:8080

## Production

For deploy to production purpose, it has `webpack.config.js` in root directory that when we run `webpack` command, we can get `public/js/dist/bundle.js` after run it. If you don't have a `webpack` installed yet in your system, you can install nodejs and install `webpack` and `webpack-cli`:

```bash
sudo npm install -g webpack
sudo npm install -g webpack-cli
```

So, we can run:

```bash
webpack

Hash: 0dedd8dd8641d88b7665
Version: webpack 4.43.0
Time: 173ms
Built at: 06/26/2020 9:02:37 PM
                   Asset      Size  Chunks             Chunk Names
public/js/dist/bundle.js  3.33 KiB       0  [emitted]  main
Entrypoint main = public/js/dist/bundle.js
[0] ./public/js/app.js + 2 modules 6.32 KiB {0} [built]
    | ./public/js/app.js 1.62 KiB [built]
    | ./public/js/create-page.js 1.36 KiB [built]
    | ./public/js/Navigation.js 3.33 KiB [built]
```

After it generated, we can run the following commands to get `production` environment by default:

```bash
# disable dev
composer development-disable

# install with --no-dev
composer install --no-dev
```

In `default.phtml`, we have a `isDevelopment()` view helper check to use `js/app.js` when on development, and use `/js/dist/bundle.js` on production when exists.

```php
// src/App/templates/layout/default.phtml
$isDevelopment = $this->isDevelopment();

// ...
    ->prependFile(
        $isDevelopment
            ? '/js/app.js'
            : (
                // when after run webpack, allow to use bundled js
                // fallback to use /js/app.js when not
                file_exists('./public/js/dist/bundle.js')
                    ? '/js/dist/bundle.js'
                    : '/js/app.js'
            ),
        'module'
    )
// ...
```

that will automatically take care of that.