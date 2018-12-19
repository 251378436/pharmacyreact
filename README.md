# Pharmacyreact

> This is a small react project demo. It includs router, redux, less, model the most common parts in React.

## Quick Start

```bash
# Install dependencies for server
npm install

# Run the React client 
npm start

# Server runs on  http://localhost:3000
```

## Configuration
You will need to create a webpack.config.dev.js and webpack.config.prod.js in the node_modules\react-scripts\config

You can use search function to find the location of these points in webpack.config.dev.js and webpack.config.prod.js.

```bash
#point 1: add @ as default src route

alias: {
    '@': path.resolve('src'),      // add this line in alias
    'react-native': 'react-native-web',
},

#point 2: add use .(css|less) replace .css in the following lines

const cssRegex = /\.(css|less)$/;
const cssModuleRegex = /\.module\.(css|less)$/;
exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.(css|less)$/],

#point 3: add less-loader in const loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('less-loader'),
      options: cssOptions,
    },

```

## App Info

### Author

Bo Long

### Version

1.0.0

### License

This project is licensed under the MIT License
