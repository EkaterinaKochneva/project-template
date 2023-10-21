const buildFolder = `./docs`; 
const srcFolder = `./src`;

module.exports = {
  buildFolder: buildFolder,
  srcFolder: srcFolder,

  styles: {
    src: `${srcFolder}/styles/style.scss`,
    build: `${buildFolder}/css/`,
    watch: `${srcFolder}/**/*.scss`,
  },
  
  html: {
    src: `${srcFolder}/pages/*.html`,
    build: `${buildFolder}/`,
    watch: `${srcFolder}/**/*.html`
  }
}