# Rounds HMS - User Guide

> **Rounds HMS and this guide belong to Vinish Kapoor. All rights reserved.** They may not be copied,
> republished, resold or used to build another product without his written permission — see
> [LICENSE](LICENSE). To buy Rounds HMS or ask about it: **https://vinish.dev/get-rounds-hms**

The step-by-step user guide of **Rounds HMS**, a hospital management system built on Oracle APEX:
registration, appointments, the clinical record, billing and insurance, the laboratory and radiology, the
pharmacy, reports and administration.

**Read it at https://devvinish.github.io/rounds-docs/**

Every name, mobile number, amount and record in the screenshots is invented: they come from a
demonstration copy of the application with made-up data.

## Building the site

The site is built with [MkDocs](https://www.mkdocs.org/) and the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. GitHub Actions publishes it to
GitHub Pages on every push to `main` (`.github/workflows/docs.yml`).

To preview it on your own computer:

```bash
python3 -m venv .venv
.venv/bin/pip install mkdocs-material mkdocs-glightbox
.venv/bin/mkdocs serve
```

then open http://127.0.0.1:8000/.

## Layout

- `docs/` - one folder per menu of the application, one page per screen
- `docs/assets/screens/<chapter>/` - the screenshots of each chapter
- `mkdocs.yml` - the site's settings and its table of contents
