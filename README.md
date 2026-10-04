<div id="top"></div>

<!-- PROJECT LOGO -->
<div align="center">
  <picture>
    <source
      srcset="src/assets/icon-light.png"
      width="128"
      height="128"
      media="(prefers-color-scheme: light)"
    />
    <source
      srcset="src/assets/icon-dark.png"
      width="128"
      height="128"
      media="(prefers-color-scheme: dark)"
    />
    <img src="src/assets/icon-light.png" alt="Logo" width="128" height="128">
  </picture>
  <h1 align="center">Audiotext Docs</h1>
  <p align="center">The source of <a href="https://getaudiotext.com">getaudiotext.com</a>, the documentation website of <a href="https://github.com/HenestrosaDev/audiotext">Audiotext</a>, in the 22 languages of its interface.</p>
  <p>
    <a href="https://github.com/HenestrosaDev/audiotext-docs/blob/main/LICENSE">
      <img
        src="https://img.shields.io/badge/license-MIT-lightgray"
        alt="License"
      />
    </a>
    <br>
    <a href="https://github.com/HenestrosaDev/audiotext-docs/stargazers">
      <img
        src="https://img.shields.io/github/stars/HenestrosaDev/audiotext-docs"
        alt="GitHub stars"
      />
    </a>
    <a href="https://github.com/HenestrosaDev/audiotext-docs/graphs/contributors">
      <img
        src="https://img.shields.io/github/contributors/HenestrosaDev/audiotext-docs"
        alt="GitHub contributors"
      />
    </a>
    <a href="https://github.com/HenestrosaDev/audiotext-docs/issues">
      <img
        src="https://img.shields.io/github/issues/HenestrosaDev/audiotext-docs"
        alt="Issues"
      />
    </a>
    <a href="https://github.com/HenestrosaDev/audiotext-docs/pulls">
      <img
        src="https://img.shields.io/github/issues-pr/HenestrosaDev/audiotext-docs"
        alt="GitHub pull requests"
      />
    </a>
  </p>
  <p>
    <a href="https://getaudiotext.com">
      <strong>Website</strong>
    </a>
    ·
    <a href="https://github.com/HenestrosaDev/audiotext">
      App Repository
    </a>
    ·
    <a href="https://github.com/HenestrosaDev/audiotext-docs/issues/new">
      Report a Mistake
    </a>
    ·
    <a href="https://github.com/HenestrosaDev/audiotext/discussions">
      Ask Question
    </a>
  </p>
</div>

<img
  src="public/screenshots/main.png"
  alt="The Audiotext window with a transcription open"
>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Features](#features)
  - [Supported Languages](#supported-languages)
  - [Project Structure](#project-structure)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Setting Up the Project Locally](#setting-up-the-project-locally)
  - [Commands](#commands)
- [Usage](#usage)
  - [Pages](#pages)
  - [Sidebar](#sidebar)
  - [Translations](#translations)
  - [Adding a Language](#adding-a-language)
  - [Screenshots](#screenshots)
  - [Styles](#styles)
- [Authors](#authors)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

<!-- ABOUT THE PROJECT -->

## About the Project

This repository contains the documentation website of **Audiotext**, a desktop app that transcribes audio and video files, YouTube videos and microphone recordings on your computer, and translates, summarizes and subtitles them. The website explains how to install the app, how to use each of its features and how to solve the most common problems. The code of the app is in the [audiotext](https://github.com/HenestrosaDev/audiotext) repository.

### Features

- **22 languages**: every page is available in all the languages of the interface of the app.
- **Automatic language**: the root of the website redirects to the language of the browser, or to English if it isn't available. Without JavaScript, it links to every language.
- **Search** across all the pages of each language.
- **Light and dark themes**, with the logo and the accent colors of the app.
- **An "Edit page" link** on every page to propose changes on GitHub, and the date of the last update.

### Supported Languages

<details>
  <summary>Click here to display</summary>

| Code | Language |
| --- | --- |
| `id` | Bahasa Indonesia |
| `ca` | Català |
| `cs` | Čeština |
| `de` | Deutsch |
| `en` | English |
| `es` | Español |
| `fr` | Français |
| `gl` | Galego |
| `it` | Italiano |
| `nl` | Nederlands |
| `pl` | Polski |
| `pt` | Português |
| `ro` | Română |
| `sv` | Svenska |
| `vi` | Tiếng Việt |
| `tr` | Türkçe |
| `ru` | Русский |
| `uk` | Українська |
| `hi` | हिन्दी |
| `ko` | 한국어 |
| `ja` | 日本語 |
| `zh-cn` | 简体中文 |

</details>

### Project Structure

<details>
  <summary>ASCII folder structure</summary>

```
│   astro.config.mjs        # Starlight settings: title, logo, social links and sidebar
│   LICENSE
│   package.json
│   README.md
│   tsconfig.json
│
├───public                  # Files served as they are
│   │   favicon.png
│   │
│   └───screenshots         # Screenshots of the app used in the pages
│
└───src
    │   content.config.ts   # Content collection of the pages
    │   locales.mjs         # Languages of the website
    │
    ├───assets              # Logo for the light and dark themes
    │
    ├───content
    │   └───docs
    │       ├───en          # A folder per language, with the same pages
    │       │   │   index.mdx                  # Home page
    │       │   │
    │       │   ├───getting-started
    │       │   │       installation.md
    │       │   │       first-transcription.md
    │       │   │
    │       │   ├───guides
    │       │   │       sources.md
    │       │   │       transcription-settings.md
    │       │   │       transcript.md
    │       │   │       summary-and-translation.md
    │       │   │       history.md
    │       │   │
    │       │   ├───reference
    │       │   │       engines.md
    │       │   │       formats-and-languages.md
    │       │   │       preferences.md
    │       │   │       cli.md
    │       │   │       files-and-data.md
    │       │   │
    │       │   └───help
    │       │           troubleshooting.md
    │       │           contributing.md
    │       │
    │       ├───es
    │       └───...
    │
    ├───pages
    │       index.astro     # Root page that redirects to the language of the browser
    │
    └───styles
            custom.css      # Accent colors and small layout adjustments
```

</details>

### Built With

- [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) for the website, its search, its themes and its translations.
- [sharp](https://sharp.pixelplumbing.com) to optimize the images.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Requirements

- [Node.js](https://nodejs.org) 22.12 or later.

### Setting Up the Project Locally

1. Clone the repository by running `git clone https://github.com/HenestrosaDev/audiotext-docs.git` and change the current working directory to `audiotext-docs` by running `cd audiotext-docs`.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to serve the website at [http://localhost:4321](http://localhost:4321). The pages reload when you save a change.

### Commands

All commands are run from the root of the project:

| Command | Action |
| --- | --- |
| `npm install` | Installs the dependencies |
| `npm run dev` | Serves the website at `http://localhost:4321` |
| `npm run build` | Builds the website into `dist/` |
| `npm run preview` | Serves the built website to check it before publishing it |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->

## Usage

### Pages

Each page is a Markdown (`.md`) or MDX (`.mdx`) file in `src/content/docs/<language>/`, and its path is its URL (e.g. `src/content/docs/en/guides/sources.md` is `/en/guides/sources/`). Every page starts with its title, a description for search engines and its position in the sidebar:

```markdown
---
title: Audio sources
description: Transcribe files, YouTube videos and links, microphone recordings, folders and watched folders.
sidebar:
  order: 1
---
```

The home page of each language (`index.mdx`) uses the `splash` template, with the logo, the tagline, the buttons and the cards of the features.

### Sidebar

The sidebar has four groups, defined in `astro.config.mjs`: **Getting started**, **Guides**, **Reference** and **Help**. Each group lists the pages of its folder, ordered by `sidebar.order`, so a new page shows up in the sidebar without changing the configuration. The names of the groups are translated in the same file.

### Translations

Every language has the same pages, with the same file names, so the language picker can switch between them. When a feature of the app changes, update the English page first and then its translations. A page that hasn't been translated yet is shown in English, with a notice, in the other languages.

Keep the names of the menus, buttons and options exactly as they appear in the interface of the app in each language, so readers can find them.

### Adding a Language

The website has the same languages as the interface of the app. To add one:

1. Add it to `src/locales.mjs`, with the name of the language in that language. The list is sorted alphabetically by those names, which is the order of the language picker.
2. Translate the names of the sidebar groups in `astro.config.mjs`.
3. Create its folder in `src/content/docs/` and translate the pages of the `en` folder.

### Screenshots

The screenshots of the app are in `public/screenshots/` and are referenced from the pages with absolute paths (e.g. `![The Audiotext window](/screenshots/main.png)`). They're shared by all the languages, so take them with the interface in English.

### Styles

The accent colors and the small layout adjustments are in `src/styles/custom.css`. The rest of the styles come from Starlight, which can be customized with its [CSS variables](https://starlight.astro.build/guides/css-and-tailwind/).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- AUTHORS -->

## Authors

- HenestrosaDev <henestrosadev@gmail.com> (José Carlos López Henestrosa)

See also the list of [contributors](https://github.com/HenestrosaDev/audiotext-docs/contributors) who participated in this project.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**, from fixing a typo to translating a page. The easiest way to propose a change is the **Edit page** link at the bottom of every page of the website. To report a mistake, open an [issue](https://github.com/HenestrosaDev/audiotext-docs/issues/new).

For bugs and features of the app itself, see the [contributing guide](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) of Audiotext.

<!-- LICENSE -->

## License

Distributed under the MIT license. See [`LICENSE`](LICENSE) for more information.

<!-- SUPPORT -->

## Support

Would you like to support the project? That's very kind of you! However, I would suggest that you to consider supporting the packages that I've used to build this project first. If you still want to support this particular project, you can go to my Ko-Fi profile by clicking on the button down below!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/henestrosadev)

<p align="right">(<a href="#top">back to top</a>)</p>
