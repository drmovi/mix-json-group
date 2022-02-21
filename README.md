## MIX JSON GROUP

This simple plugin bundle json file content of the same name into a single file. use glob for json file matching.

## Usage

1- install the plugin:

`npm i mix-json-group`

2- in `webpack.mix.js` file add the following:

```
require('mix-json-group');

//mix.jsonGroup(source,dist)

mix.jsonGroup('./resources/js/modules/**/locales/*.json', './locales')
```
