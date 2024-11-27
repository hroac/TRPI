import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import fs from "fs";
const NodeExternals =  require('webpack-node-externals')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const config: Configuration = {
  mode:
    (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
    entry: "./index.ts",
    target: 'node',
    optimization: {
        // Suppress "Critical dependency" warnings
        emitOnErrors: false,
    },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: (modulePath) => {
                  // Exclude all node_modules by default
                  if (modulePath && /node_modules/.test(modulePath)) {
                      // Check if the package has a dist folder
                      const packageName = modulePath.match(/node_modules\/([^\/]+)/)?.[1];
                      const packagePath = packageName ? path.resolve(__dirname, 'node_modules', packageName, 'dist') : '';

                      if (packagePath) {
                          //console.log(packageName, fs.existsSync(packagePath));
                          return fs.existsSync(packagePath);
                      }
                      return false;
                  }
                  return false;
              },
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
          },
      {
            test: /.tsx?$/,
            exclude: (modulePath) => {
                // Exclude all node_modules by default
                if (modulePath && /node_modules/.test(modulePath)) {
                    // Check if the package has a dist folder
                    const packageName = modulePath.match(/node_modules\/([^\/]+)/)?.[1];
                    const packagePath = packageName ? path.resolve(__dirname, 'node_modules', packageName, 'dist') : '';

                    if (packagePath) {
                        //console.log(packageName, fs.existsSync(packagePath));
                        return fs.existsSync(packagePath);
                    }
                    return false;
                }
                return false;
            },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"],
      modules: [
          path.resolve(__dirname, 'src'),
          'node_modules'
      ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
    plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};

export default config;
