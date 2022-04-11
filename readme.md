# Tegar's Vuepress Base Config

You can clone and create your own blog using this configuration.

## Local Development

Clone this repo and run `yarn` to install dependencies. Content and configuration live in `./src` folder.

### Folder Structures

```
src
├── index.md            => Your Homepage
├── .vuepress           => Your Configuration folder
|   |                      Only change if you need to modify your web structure
|   |
│   ├── components      => Vue component that we can call in markdown
│   ├── config.js       => Main config file
│   ├── dist            => After build, you can deploy your site from here
│   ├── enhanceApp.js   => Custom vue behaviour
│   ├── public          => Static data, something like image live here
│   │   └── .gitkeep
│   ├── sidebar         => Custom sidebar generator, talk about it later
│   └── styles          => Modify web styling
|
└─── <Your Folder Name> => routing to https://yourdomain.com/yourfolder/
    ├── readme.md       => Article when you go to https://yourdomain.com/yourfolder/
    ├── article1.md     => Article when you go to https://yourdomain.com/yourfolder/article1.md
    └── article2.md     => Article when you go to https://yourdomain.com/yourfolder/article2.md
```

> **TLDR**: If you only care about writing articles, then you may only need to create folder and your markdown files

### Edit Your Homepage

* Edit your site name and description in `config.js`. It will be used for your [meta tags](https://www.w3schools.com/tags/tag_meta.asp)
* Edit your `.src/index.md` to add content or change some configuration
  * Configuration between `---` called [frontmatter](https://v1.vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats)
  * You can add markdown text or html or call vue components after frontmatter. Refer to the file to see example


### Navbar and Sidebar

You can modify navbar in `config.js` inside `.vuepress` folder.

For sidebar, you can split to multiple files in `sidebar` folder inside `.vuepress`, please refer to it's `index.js`. But if you don't want to create custom group sidebar, you can change `sidebar: 'auto'` in `config.js`. 

Please refer [here](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar) to more comprehensive tutorial about config for sidebar using default theme.

## Deployment

My recommendation is using [vercel](https://vercel.com/) or [netlify](https://www.netlify.com/) since it will be really easy to set up your CI/CD workflow (that's mean auto build and release your site after your `git push`). Your set up will be something like this:

```
Build command   : yarn build
Output dir      : ./src/.vuepress/dist
Install command : yarn
```

But if you prefer host to github pages or firebase, you need to add github action. Tutorial to be added here later.