# Hillson Ghimire

Source for my personal academic website: **https://hillsonghimire.github.io/**

I am a GIS and remote sensing professional working on hydrology and machine learning.

## Where things are

| Path | Contents |
|---|---|
| `_pages/about.md` | Home page: bio and news |
| `_pages/cv.md` | CV page |
| `_data/publications.yml` | Publications, shared by the home page and CV |
| `_data/presentations.yml` | Presentations, shared by the home page and CV |
| `_layouts/minimal.html`, `assets/css/minimal.css` | Page layout and styles |
| `files/` | CV and resume PDFs |
| `images/` | Profile photo, logos, and publication figures |

## Run locally

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

The site is then at http://localhost:4000.

## Update the CV PDF

With the local server running:

```bash
npm install --no-save puppeteer-core
node scripts/generate-cv-pdf.js
```

## Credits

Built with [Jekyll](https://jekyllrb.com/), starting from the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template (MIT License, see `LICENSE`). Design inspired by [Jon Barron](https://jonbarron.info/).
