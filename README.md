# Rooftop Solar Website Template

A reusable website template for rooftop solar installation and service companies.
Next.js 15 (App Router) + TypeScript + Tailwind CSS 3.4 + shadcn/ui, exported as a **fully static site** for Cloudflare Pages. Lead forms post to **Web3Forms**.

**One company = one config file.** Branding, contact details, regional utility facts, navigation, form options and page copy live in `src/config/site.config.ts`. Components never contain company details.

Two sample companies ship with it: **Smartsol Systems** (Bengaluru, active) and **Green World Innovations** (Kottayam). Contact details are real; stats, ratings, projects, testimonials and certifications are **placeholders** and are clearly marked.

---

## Contents

1. [Local development](#1-local-development)
2. [Project structure](#2-project-structure)
3. [Create a new company site](#3-create-a-new-company-site)
4. [Content and configuration](#4-content-and-configuration)
5. [Branding](#5-branding)
6. [Web3Forms setup](#6-web3forms-setup)
7. [Deploy to Cloudflare Pages](#7-deploy-to-cloudflare-pages)
8. [Custom domain](#8-custom-domain)
9. [SEO notes](#9-seo-notes)
10. [Analytics](#10-analytics)
11. [Troubleshooting](#11-troubleshooting)
12. [Things to know](#12-things-to-know)

---

## 1. Local development

Requires **Node 20+**.

```bash
npm install
cp .env.example .env.local     # then fill in the values (see section 6)
npm run dev                    # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Validates config and content, then exports the static site to `out/` |
| `npm run start` | Serves `out/` locally (`npx serve out`) to preview the production build |
| `npm run typecheck` | TypeScript check only |
| `npm run use-company -- <name>` | Switch the active company (see section 3) |

`npm run build` **fails on purpose** if `site.config.ts` or any content file is invalid (bad colour, missing field, broken slug reference). A broken site can't ship by accident.

### Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key. Required for forms to send. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, no trailing slash. Overrides `seo.siteUrl`. Used for canonical tags, Open Graph, sitemap and JSON-LD. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile **site** key. Optional. |

`NEXT_PUBLIC_*` values are inlined **at build time**. After changing one in Cloudflare, trigger a new deployment. None of these are secrets: the Web3Forms access key and Turnstile site key are designed to be public. **The Turnstile secret key never goes in this repo.**

---

## 2. Project structure

```
public/                    Static assets (brand/, images/, _headers)
scripts/use-company.mjs    Switches the active company
src/
  app/                     Routes: home, about, services, projects, service-areas,
                           contact, faqs, privacy-policy, terms, thank-you, sitemap, robots
  components/
    ui/                    shadcn/ui primitives (button, input, select, checkbox, accordion, sheet...)
    layout/                Header, Navbar, MobileNav, Footer, StickyMobileCTA, PageHeader
    sections/              Hero, StatsSection, ServicesOverview, WhyChooseUs, ProcessSteps,
                           SavingsSection, TestimonialsSection, FAQPreview, CTASection, LeadSection
    cards/                 ServiceCard, ProjectCard, LocationCard, TestimonialCard
    forms/                 LeadForm, QuoteSheet, TurnstileWidget
    faq/  whatsapp/  analytics/  seo/
  config/
    site.config.ts         ACTIVE company (the file you edit per client)
    site.schema.ts         Zod schema: the full list of config options
    defaults.ts            Shared nav, footer and form options
    examples/<company>/    Saved companies: config + locations + projects + testimonials + logo
  content/                 services, faqs, process, legal (shared) + locations, projects,
                           testimonials (company-specific, copied from examples/)
  lib/                     config loader, content loader, metadata, JSON-LD, Web3Forms client,
                           validation, rate limit, theme, fonts, WhatsApp link builder
  types/
```

**Shared vs company-specific content**

- **Shared** (same on every site, wording adapts through `{{tokens}}`): `services.ts`, `faqs.ts`, `process.ts`, `legal.ts`.
- **Company-specific** (replace per client): `locations.ts`, `projects.ts`, `testimonials.ts`, plus the config itself.

---

## 3. Create a new company site

**Recommended: one Git repository per company.** Click **Use this template** on GitHub (or copy the folder), then:

1. **Add the company folder.** Copy `src/config/examples/smartsol/` to `src/config/examples/<yourcompany>/`. It contains `site.config.ts`, `locations.ts`, `projects.ts`, `testimonials.ts` and `logo.svg`.
2. **Edit those files** (see section 4 and the [launch checklist](LAUNCH-CHECKLIST.md)).
3. **Activate it:**
   ```bash
   npm run use-company -- <yourcompany>
   ```
   This copies the folder's files into `src/config/site.config.ts`, `src/content/*` and `public/brand/logo.svg`, and fixes the import paths.
4. Add your images under `public/images/` and your OG image at `public/brand/og-default.jpg`.
5. `npm run dev`, check every page, then `npm run build`.

> Edit the **example folder** and re-run `use-company`, or edit the active files directly. If you edit the active files, copy them back into the example folder if you want to keep a saved version.

Switching between the two shipped companies:

```bash
npm run use-company -- greenworld
npm run use-company -- smartsol
```

### Keeping a client site up to date with the template

```bash
git remote add template <template-repo-url>
git fetch template
git merge template/main      # resolve conflicts in config/content files, keep yours
```

---

## 4. Content and configuration

### `site.config.ts` highlights

| Section | Controls |
|---|---|
| `company` | Name, legal name, tagline, description, logo (light/dark), favicon, OG image |
| `seo` | Site URL, title template, default title, locale, price range, optional geo |
| `theme` | Colours, fonts, radius, button style, dark mode |
| `contact` | Phone, WhatsApp number and message template, email, address, Maps embed + link, hours |
| `serviceAreas` | Headline, states, primary cities |
| `regional` | Utility (`BESCOM`, `KSEB`...), regulator, net-metering term, subsidy scheme and disclaimer |
| `social`, `analytics` | Social URLs; GA4, Meta Pixel and Cloudflare Web Analytics IDs (each loads only if set) |
| `navigation` | Menu, header CTA, footer columns, legal links, copyright text |
| `home`, `about`, `cta` | Hero, trust stats, "why us", savings estimator constants, about copy, CTA labels |
| `leadForm` | Web3Forms key/subject/sender, messages, visible fields, dropdown options, consent text, rate limit, Turnstile |
| `features` | Switch on/off: sticky mobile bar, floating WhatsApp, quote sheet, projects, service-area pages, testimonials |

`src/config/site.schema.ts` is the authoritative list. Your editor will autocomplete and flag mistakes.

### `{{tokens}}`

Any string in config or shared content can use:

`{{companyName}}` `{{legalName}}` `{{phone}}` `{{email}}` `{{city}}` `{{state}}` `{{year}}` `{{utilityName}}` `{{regulatorName}}` `{{netMeteringTerm}}` `{{subsidyScheme}}` `{{subsidyNote}}`

Unknown tokens are left visible (not silently dropped), so typos are easy to spot.

### Regional facts (important)

Net-metering and subsidy rules differ by state and change over time. Everything region-specific comes from `regional` in the config. **Verify these for each client**, especially `utilityName`, `regulatorName`, and the subsidy note. The Mysuru page in the Smartsol sample mentions a different utility than BESCOM. Confirm it.

### Placeholders and samples

- Anything in `[square brackets]` is a placeholder to replace before launch.
- Projects and testimonials have `isSample: true`. Sample entries show a "Sample" badge, are **excluded from Review/AggregateRating JSON-LD**, and sample project pages are `noindex` and left out of the sitemap. Set `isSample: false` when you add real ones.
- `npm run build` prints a warning while sample entries remain.
- Warranty, pricing and workmanship wording in `content/services.ts` and `content/faqs.ts` is neutral draft copy. Check it against how each company actually works.

### Icons

Config refers to icons by Lucide name (`Gauge`, `ShieldCheck`...). The allowed set is in `src/lib/icons.ts`. Add more there.

### Images

Placeholders are SVGs. Replace them with real photos (WebP/JPEG) at the same paths, or change the paths in config and content. Keep the aspect ratios close to avoid layout shift: hero 4:3, services 16:10, projects 3:2. Static export cannot use Next.js image optimisation, so **resize and compress photos before adding them** (around 150 KB or less for most).

---

## 5. Branding

All in `theme` (and `company.logo`):

- **Colours:** `primary`, `secondary`, optional `accent`, `background`, `foreground`, and `dark` overrides. Use hex values. Check that `primaryForeground` has enough contrast on `primary` (4.5:1 for body text).
- **Fonts:** pick from the built-in list in `src/lib/fonts.ts`: Inter, Poppins, Manrope, DM Sans, Plus Jakarta Sans, Montserrat, Outfit, Sora. `next/font` needs fonts declared in code at build time, so config chooses by name. To add a font, import it in `fonts.ts`, add it to the registry, and add its name to `FONT_OPTIONS` in `site.schema.ts`.
- **Radius:** `none | sm | md | lg | xl | full`.
- **Buttons:** `solid | outline | gradient | pill`.
- **Dark mode:** `off | system | toggle`. With `toggle`, a switch appears in the header.
- **Logo:** `company.logo.light` (and optional `dark`). Replace `public/brand/logo.svg`. Update `width` and `height` to match.
- **Favicon / OG image:** `public/brand/favicon.svg` and `public/brand/og-default.jpg`. The OG image must be **JPG or PNG, 1200x630**. Facebook, WhatsApp and LinkedIn don't show SVG previews.

---

## 6. Web3Forms setup

All forms (home, service pages, contact, location pages and the slide-in quote sheet) use one component, `LeadForm`, which posts JSON to `https://api.web3forms.com/submit` from the browser. There is no server or API route.

### 6.1 Create an access key

1. Go to <https://web3forms.com> and enter the email address that should **receive the leads**.
2. Web3Forms emails you an **access key**. Copy it.

The key is tied to that email address. That is how each company gets its own leads.

### 6.2 Add the key to `.env.local` and Cloudflare Pages

- **Local:** put it in `.env.local`:
  ```
  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
  ```
- **Cloudflare Pages:** *Workers & Pages → your project → Settings → Variables and Secrets* (labels may vary slightly). Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for **both Production and Preview**, then **redeploy**, because the value is baked in at build time.

You can also hard-code `leadForm.web3formsAccessKey` in `site.config.ts`, but the environment variable keeps it out of Git and lets one codebase serve several deployments.

### 6.3 Test locally and in production

1. Put the key in `.env.local`, run `npm run dev`, open `/contact/`.
2. Submit the form with valid details. You should see the green confirmation panel and receive an email at the address you registered (check spam the first time).
3. Try the failure paths: submit empty (inline errors appear), enter `12345` as the phone (Indian mobile validation message), and remove the key to see the "form isn't configured" message.
4. After deploying, repeat on the live URL, and also test from your phone. Test the quote sheet (header "Get a Quote" button) and one service page.
5. Submissions from `localhost` count toward your Web3Forms plan, so use a throwaway name.

If a submission fails, open the browser's Network tab and look at the response from `api.web3forms.com/submit`. Its `message` explains why.

### 6.4 Spam protection and Turnstile

Built in and always on:

- **Honeypot:** a hidden `botcheck` checkbox. If it's ticked, the form pretends to succeed and sends nothing.
- **Client-side rate limit:** `leadForm.rateLimit` (default: 3 submissions per 60 minutes per browser). This only stops accidental double-sends and casual abuse. It is not real security.
- Web3Forms' own filtering.

**Enable Cloudflare Turnstile (optional):**

1. In the Cloudflare dashboard, go to **Turnstile → Add widget**. Add your domain(s). Add `localhost` too if you want to test locally. Choose *Managed*.
2. Copy the **Site key** and **Secret key**.
3. Put the **site key** in `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (local and Cloudflare Pages, Production + Preview).
4. In your **Web3Forms dashboard**, open the form settings for your access key and add the Turnstile **secret key** (see Web3Forms' docs for the current menu location). The secret lives only there, never in this repo.
5. Make sure `leadForm.captcha.provider` is `"turnstile"` in `site.config.ts` (it is by default). Turnstile only appears when a site key exists, so leaving the variable empty turns it off.
6. Redeploy and test. The widget loads when someone first focuses a form field (to keep the page light) and the token is sent as `cf-turnstile-response`, the field name Web3Forms reads.

For quick local checks of the widget itself, Cloudflare publishes dummy keys (for example site key `1x00000000000000000000AA`). End-to-end verification through Web3Forms needs your real key pair.

**hCaptcha instead of Turnstile?** Web3Forms supports it, but this template ships only Turnstile code. To switch: replace `TurnstileWidget` with hCaptcha's widget, and send its token as `h-captcha-response` in `src/lib/web3forms.ts`.

### 6.5 Email subject and sender name

In `site.config.ts`:

```ts
leadForm: {
  web3formsSubject: "New solar enquiry — {{companyName}}",
  web3formsFromName: "{{companyName}} Website",
  successMessage: "Thank you. Our solar team will contact you shortly.",
  ...
}
```

Both support `{{tokens}}`. They are sent as `subject` and `from_name`. The notification email also includes the page URL and which form it came from (`form_source`: `home`, `contact`, `quote-sheet`, `service:<slug>`, `location:<slug>`).

### 6.6 Change the recipient email

The recipient is **whoever the access key was created for**. To send a company's leads somewhere else:

1. Create a new access key at web3forms.com using the new email address.
2. Replace `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Cloudflare Pages and redeploy.

For multiple recipients, check Web3Forms' dashboard options for your plan, or use a shared mailbox or forwarding rule.

### 6.7 Redirect to a thank-you page (optional)

By default, a success message appears inline. Set `leadForm.redirectToThankYou: true` to send people to `/thank-you/` instead. This is done client-side after a successful response, because Web3Forms ignores its `redirect` field for JSON requests. Add your conversion tracking to that page if you need it.

---

## 7. Deploy to Cloudflare Pages

1. Push the project to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, and pick the repo.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | **Next.js (Static HTML Export)** |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` (leave default) |

4. **Environment variables** (Production and Preview): `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, `NEXT_PUBLIC_SITE_URL`, and optionally `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. The repo includes `.node-version` (Node 20), which Pages respects.
5. **Save and Deploy.** Every push to the production branch redeploys. Other branches and PRs get preview URLs.

Notes:

- This is a plain static export. You do **not** need `@cloudflare/next-on-pages` or any adapter.
- The build downloads Google Fonts at build time, so the build environment needs internet access (Cloudflare's does).
- `public/_headers` sets security headers and cache rules. Edit as needed.
- `trailingSlash: true` is set, so pages live at `/about/` and are served from `about/index.html`.

---

## 8. Custom domain

1. In your Pages project: **Custom domains → Set up a custom domain** and enter the domain (e.g. `www.example.com`).
2. **If the domain's DNS is on Cloudflare**, the DNS record is created for you. Confirm it.
3. **If DNS is elsewhere:**
   - For a subdomain such as `www`, add a `CNAME` record pointing to `<your-project>.pages.dev`.
   - For a bare/apex domain (`example.com`), most registrars can't do this with a CNAME. The simplest fix is to move the domain's nameservers to Cloudflare, or use `www` as the main address and redirect the apex to it at your registrar.
4. Wait for the certificate to activate (usually minutes).
5. Set `NEXT_PUBLIC_SITE_URL=https://www.example.com` (exactly the address people use, no trailing slash) in Cloudflare Pages and **redeploy**, so canonical URLs, Open Graph, sitemap and structured data all use the real domain.
6. Add the domain to your Turnstile widget's allowed domains if you use Turnstile.
7. Submit `https://www.example.com/sitemap.xml` in Google Search Console.

---

## 9. SEO notes

- Every page has a unique title and description, a canonical URL, and Open Graph and Twitter tags.
- **JSON-LD:** `LocalBusiness` + `HomeAndConstructionBusiness` (schema.org has no solar-installer type, so services are listed in `makesOffer`), `Service` on service and location pages, `FAQPage` on the home, FAQ and service pages, `BreadcrumbList` everywhere. `Review` and `AggregateRating` appear only for real (non-sample) testimonials.
- `sitemap.xml` and `robots.txt` are generated at build. Switched-off sections and sample projects are left out.
- Add `seo.geo` (latitude/longitude) once you have it, to enrich LocalBusiness data.
- Google can show review stars only for genuine, verifiable reviews. Never mark up invented ones.

---

## 10. Analytics

Put IDs in `analytics` in `site.config.ts`: `googleAnalyticsId` (e.g. `G-XXXXXXX`), `metaPixelId`, `cloudflareWebAnalyticsToken`. Each script loads only if its ID is set.

Google Analytics and Meta Pixel set cookies. If the company has visitors who need a consent banner under their legal advice, add one. The template doesn't include a cookie banner. Cloudflare Web Analytics is cookieless.

---

## 11. Troubleshooting

| Problem | Fix |
|---|---|
| Build error mentioning `site.config.ts` or a content file | Read the message. It lists the exact field and the reason. |
| Form says "This form isn't configured yet" | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is missing at build time. Add it and redeploy. |
| Changed an env var but nothing changed | `NEXT_PUBLIC_*` values are baked in at build time. Redeploy. |
| Turnstile widget never appears | Check the site key, that the domain is allowed in the widget, and that `provider` is `"turnstile"`. It appears after the first field focus. |
| Form submits but no email | Check spam, the access key's email, and the Network response from Web3Forms. Check the Turnstile secret key in Web3Forms if Turnstile is on. |
| Fonts fail to download during build | The build machine needs internet access to `fonts.googleapis.com`. |
| Social preview shows no image | The OG image must be JPG or PNG at 1200x630, and `NEXT_PUBLIC_SITE_URL` must be your real domain. |
| Canonical URLs show the wrong domain | Set `NEXT_PUBLIC_SITE_URL` and redeploy. |

---

## 12. Things to know

- **Legal pages are templates.** Have a lawyer review the Privacy Policy and Terms before launch, and set the "last updated" date.
- **Savings estimator is illustrative.** It uses `costPerUnit` and `unitsPerKwPerMonth` from config (sample values). Update them to the current tariff and local generation figures, and keep the on-page disclaimer.
- **Subsidy schemes change.** The copy deliberately avoids amounts and points to `subsidyNote`. Keep it that way unless you maintain it.
- **No "free" claims** are made in the sample copy because policies differ per company. Add them in services content if true.
- **The client-side rate limit is a convenience**, not protection. Use Turnstile if spam is a problem.
