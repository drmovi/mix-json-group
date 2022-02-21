const mix = require('laravel-mix');
const MergeGroupByFileNameWebpackPlugin = require('merge-json-group-by-file-name-webpack-plugin')
class JsonGroup {

    register(source, dist) {
        this.source = source;
        this.dist = dist;
    }

    webpackPlugins() {
        return new MergeGroupByFileNameWebpackPlugin({source: this.source, dist: this.dist});
    }
}

mix.extend('jsonGroup', new JsonGroup);
