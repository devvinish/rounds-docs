# Rounds HMS - User Guide

> **Copyright © 2026 Vinish Kapoor. All rights reserved.** Rounds HMS is proprietary software. The
> software, this guide and its screenshots may not be copied, reproduced, modified, republished,
> distributed or used to create another product without the prior written permission of Vinish Kapoor —
> see [LICENSE](LICENSE). Licensing and enquiries: **https://vinish.dev/get-rounds-hms**

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
