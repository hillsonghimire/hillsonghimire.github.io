<div align="center">
<br>

Hi 🙏, This is my personal website, a slight engineering of [gradfolio](https://github.com/jitinnair1/gradfolio), powered by Jekyll, hosted on github pages.

<div align="left">

### Build descriptions (because i always forget the exact steps)

#### Details

1. The homepage contents are in: `./index.md`
2. All site configurations are available in: `_config.ml`
3. Add navigation items from: `_includes/navigation.html`
4. Add the same item to: `_pages/<name.md>`
    This will automatically create folder in `_site/<name>` with named as `<name>`.
    Ensure that this `<name>` is the same that you added in `step:1`
5. Basic `styling` can be modified through: `assets/css/_scss/variables.scss`
6. To modify the overall layouting of homepage or other pages: `_layouts/default.html`

Note: To add the embed (like instagram posts), I added `_layout/default_embed.html`, the same as `default.html`, but inserting the desirable embeds.


#### Build Guide

1. Install [jekyll](https://jekyllrb.com/docs/installation/) and [nodejs](https://nodejs.org/en)
2. Build using: `bundle exec jekyll serve`