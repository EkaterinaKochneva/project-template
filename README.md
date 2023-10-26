# Gulp сборка (html + SCSS) В РАЗРАБОТКЕ

## Основные команды

- Скачать сборку: 
```
git clone git@github.com:EkaterinaKochneva/project-template.git
```
- Установка зависимостей: 
```
npm install
```
- Запуск проекта в режиме разработки: 
```
npm run dev
```
- Сборка проекта для продакшена: 
```
npm run build
```

## Html
Данный вариант сборки рассчитан на работу с html-файлами. Страницы необходимо создавать в директории `src/pages`.
Для блоков и компонентов предусмотрена папка `src/components`. Подключение блоков на страницу осуществляется конструкцией `@@include`

## SCSS
Основной файл стилей - `src/styles/main.scss`. Файлы стилей отдельных компонентов должны располагаться в соответвующих папках `src/components` и подключаться в основной файл стилей вручную конструкцией `@import`.

## JS
Основной файл скриптов - `src/js/scripts.js`. Файлы скриптов отдельных компонентов должны располагаться в соответвующих папках `src/components` и подключаться в основной файл скриптов вручную конструкцией `//=include`.

## Шрифты
Для шрифтов предусмотрена папка `src/assets/fonts/`, поддерживаемые форматы: `eot,ttf,otf,woff,woff2`. При запуске сборки шрифты конвертируются в форматы `ttf,woff,woff2`. Эта задача не добавлена для отслеживания изменений. Запустить принудительную конвертацию шрифтов во время работы:

```
gulp fonts
```

## Изображения
### Растровые изображения
Растровые изображения размещаются в папке `src/assets/img/`. Они автоматически конвертируются в формат `.webp`.
### Векторные изображения
Для svg-иконок, которые будут использоваться в спрайте, предусмотрена директория `src/assets/sprite/`. Спрайт выгружается в файл `assets/img/svg-sprite/sprite.svg`. Для использования на странице/в блоке:
```
<svg>
  <use xlink:href="assets/img/svg-sprite/sprite.svg#название-иконки"></use>
</svg>
```
Если нужны иконки вне спрайта, то для них предусмотрена папка `src/assets/icons/`. Выгружаются в папку:  `assets/img/icons`

## Сторонние библиотеки
Сторонние библиотеки, скаченные через npm, можно подключить в основные файлы scss и js. Но если хочется или требуется подключить их отдельно, можно воспользоваться папкой `src/assets/vendor/`. Для js файла используется подключение `//=include "../../../node_modules/путь-до-необходимого-файла.js"`. Для стилей в любом случае нужно создать файл с раширением `.scss` и подключить стиль конструкцией `@import "../../../node_modules/путь-до-необходимого-файла.scss"`. **Если требуется подключить стиль с расширением `/css`, то расширение не указывается! Иначе срабатывает обычный импорт .css**
Файлы будут скопированы в директорию `assets/vendor`, подключение в верстку производится вручную.