# ETCloth Project Page

This directory contains the static source of the ETCloth project page. The page is adapted from the [Nerfies project-page template](https://github.com/nerfies/nerfies.github.io), with a VGGT-style content order.

## One-time GitHub setup

1. Create the GitHub organization `etcloth`.
2. Create a **public** repository named `etcloth.github.io` under that organization.
3. GitHub Pages then serves the site at <https://etcloth.github.io/>.
4. In that repository, open **Settings → Pages** and select `main` and `/(root)` as the deployment source.
5. Set the personal membership of `ZhiyuanLu1` in the `etcloth` organization to **Private** if it should not appear on the public personal profile. This does not affect the public Project Page.

## Source layout

```text
project_page/
├── index.html          # Page structure and content
├── README.md           # This deployment note
└── static/
    ├── css/            # Nerfies base styles and ETCloth adjustments
    ├── images/         # Teaser video, pipeline, and qualitative figures
    └── js/             # Nerfies carousel and page scripts
```

The page order is: title/authors/links → teaser → Abstract → Video → Method → Qualitative Visualization → BibTeX → template attribution.

## Update and publish

1. Edit this local directory; place all visual material in `static/images/`.
2. Copy the contents below—not the enclosing `project_page/` directory—to the root of `etcloth/etcloth.github.io`:

   ```text
   index.html
   static/
   README.md
   ```

3. Commit and push the changed files in `etcloth/etcloth.github.io`.
4. Wait for the GitHub Pages deployment to finish, then visit <https://etcloth.github.io/>.

`project_page/` is intentionally ignored by the main ETCloth code repository, so Project Page files must be synchronized to the separate Pages repository rather than committed with the training code.

## Local preview

```bash
cd /home/luzhiyuan/Projects/Human/ETCloth/project_page
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Attribution and license

The original Nerfies page is distributed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Keep the template attribution in the website footer and retain a compatible license when publishing this derivative.
