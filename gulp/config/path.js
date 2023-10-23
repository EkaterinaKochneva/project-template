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
  },

  scripts: {
    src: `${srcFolder}/js/*.js`,
    build: `${buildFolder}/js/`,
    watch: `${srcFolder}/**/*.js`,
  },

  imgOptimize: {
    src: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    build: `${buildFolder}/img/`,
    watch: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
  },

  icons: {
    src: `${srcFolder}/icons/*.{png,svg}`,
    build: `${buildFolder}/img/icons/`,
    watch: `${srcFolder}/icons/*.{png,svg}`,
  },

  spriteSvg: {
    src: `${srcFolder}/sprite/*.svg`,
    build: `${buildFolder}/img/sprite/`,
    watch: `${srcFolder}/sprite/*.svg`,
  },

  fonts: {
    src: `${srcFolder}/fonts/**/*.{eot,ttf,otf,woff,woff2}`,
    build: `${buildFolder}/fonts/`,
    watch: `${srcFolder}/font/*.{eot,ttf,otf,woff,woff2}`,
  },
}