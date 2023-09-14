---
title: Dedos que deslizam
date: 2023-09-15
image: /assets/images/2021/coolimage.jpg
---

Reparo que meus dedos deslizam.

## Onde mais você desliza os dedos?

Temos uma relação intensa com as telas. Gastamos por volta de nove horas olhando para a tela de um computador ou celular, é o que revela recente levantamento feito pela Eletronics Hub. Boa parte desse tempo realizamos a mesma tarefa, deslizamos os dedos na tela e eventualmente damos alguns toques também. 

Entre uma deslizada e um toque, alguns códigos de computador estão sendo executados, não dá nem pra pensar nisso nos 15 segundos de cada stories que a gente passa pro lado. Esses códigos escrevem o que vai aparecer na nossa frente, e ele fica rodando infinitamente, mesmo quando seu aplicativo não está aberto no celular. 

Esses códigos tem um objetivo, te manter online e deslizando. Online e roteando. Para alguns especialistas a intenção é que você consuma cada vez mais conteúdo, dando visualização principalmente para os conteúdos patrocinados por empresas, as publis. Para outros especialistas, há um interesse em te deixar tão hipnotizado, a ponto de reprogramar a forma como você vê o mundo. Existem inúmeras análises acerca da intenção das redes sociais em te manter utilizando elas. 

Find here an excerpt of the visuals.

### Bash

```bash
if [ -z "$HEROKU_PWA_APP_NAME" ]; then
    echo "Please provide HEROKU_PWA_APP_NAME environment variable"
    exit 1
fi
```

### JavaScript

```javascript
const jestLwcConfig = require("@lwc/jest-preset");
import { resolve } from "path";

export const jestConfig = {
    ...jestLwcConfig,
    resolver: resolve(__dirname, "../utils/resolver.js")
};
```

## Images, images, images

First, you'll notice this stunning picture. I got it royalty-free from Pixabay (great site). Now, that's not the point that I want to make here. The image is not added via Markdown, but instead via the `image` value of the Markdown front matter. As it's always good IMHO to start with a visual you'll get a standardized way of addding an image asset.

Second, the image is optimized for your browser size _and_ browser. Depending on what you currently use as browser you'll get i. e. a JPG or a WebP file. All in the right size for the screen. Obviously, all images have standard settings for lazy loading etc.

## Headings all over the place

It's all standard markdown to render the headings, and as well to display the table of contents (TOC) on the right side.

Note: never ever add a first level heading (aka: `h1`) to your page. This will break accessibility, as the title is already an h1, and will be represented as such in the rendered HTML.

## Other stuff

As to be expected you can do all the things that are _standard_ Markdown. So tables, blockquotes etc. And if you prefer to add custom Markdown functionality, just extend the configuration with custom [markdown-it](https://github.com/markdown-it/markdown-it) plugins.
