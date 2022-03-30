# geiger-tools-installation-webpage

## Deploy on Github Pages
```
npm run build
```
Duplicate index.html and rename to 404.html (Handling Vue Router with a Custom 404 Page to go directly to a page)
```
git add dist && git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages
```

Example a tag
```
 <a href="https://davidkernfhnw.github.io/geiger-tools-web/downloads/file_name.apk" target="_blank">Download APK</a>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
