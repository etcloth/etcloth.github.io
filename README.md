# ETCloth Project Page

Static source for the ETCloth project page, adapted from the [Nerfies project-page template](https://github.com/nerfies/nerfies.github.io).

## Layout

```text
index.html
static/
├── css/
├── images/
└── js/
```

The page deliberately excludes the Nerfies demo videos and interpolation frames. ETCloth figures are stored in `static/images/`.

## Local preview

```bash
cd project_page
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub Pages

Copy `index.html`, `static/`, and this `README.md`—not the enclosing `project_page/` directory—to the root of the `etcloth/etcloth.github.io` repository. In that repository, enable GitHub Pages from `main` and `/(root)`.

The local `assets/` directory is the previous compact-page asset backup. It is not referenced by the Nerfies page and should not be copied to the public page repository.

## Attribution and license

The original Nerfies page is distributed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Keep the template attribution in the website footer and retain a compatible license when publishing this derivative.
