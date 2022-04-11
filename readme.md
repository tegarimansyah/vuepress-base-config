# Tegar's Vue Base Config

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

### Navbar and Sidebar

You can modify navbar in `config.js` inside `.vuepress` folder.

For sidebar, you can split to multiple files in `sidebar` folder inside `.vuepress`, please refer to it's `index.js`. But if you don't want to create custom group sidebar, you can change `sidebar: 'auto'` in `config.js`. 

Please refer [here](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar) to more comprehensive tutorial about config for sidebar using default theme.

