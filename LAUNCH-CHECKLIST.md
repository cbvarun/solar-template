# Launch checklist: new solar company website

Copy this into an issue or doc for each client.

## 1. Collect from the client
- [ ] Registered legal name, GSTIN/registration number (optional)
- [ ] Year founded
- [ ] Logo (SVG or transparent PNG, light version; dark version if using dark mode)
- [ ] Brand colours (hex) and any font preference
- [ ] Phone, WhatsApp number (digits with country code), email
- [ ] Full address, Google Maps link, business hours
- [ ] Service areas: cities and localities they genuinely cover
- [ ] Utility name and regulator for each state they serve (e.g. BESCOM / KERC, KSEB / KSERC)
- [ ] Current local tariff (₹/kWh) and realistic units per kW per month
- [ ] Real stats: installations, years, rating, warranty, installers (only what they can prove)
- [ ] Real projects with photos, system size, equipment and permission to publish
- [ ] Real customer testimonials with permission to publish
- [ ] Certifications and empanelments, with documents
- [ ] Social profile URLs
- [ ] Email address that should receive leads

## 2. Set up the project
- [ ] Create a repo from the template (one repo per client)
- [ ] Copy `src/config/examples/smartsol/` to `src/config/examples/<client>/`
- [ ] Edit `site.config.ts`: company, seo, theme, contact, serviceAreas, **regional**, home, about, cta, leadForm
- [ ] Edit `locations.ts` (their areas), `projects.ts`, `testimonials.ts`
- [ ] `npm run use-company -- <client>`
- [ ] Replace `public/brand/logo.svg`, `favicon.svg` and `og-default.jpg` (1200x630 JPG or PNG)
- [ ] Replace hero, service and project images (compressed WebP or JPEG), with real alt text
- [ ] Update `logo.width` and `logo.height` in config to match the real logo

## 3. Review content
- [ ] Search the project for `[` placeholders and replace every one
- [ ] Set `isSample: false` on real projects and testimonials. Delete the rest.
- [ ] Verify `regional` facts: utility, regulator, net-metering wording, subsidy scheme and note
- [ ] Check the savings estimator constants
- [ ] Read `content/services.ts` and `content/faqs.ts`: do pricing, warranty, timing and survey-charge statements match how this company really works?
- [ ] Review the legal pages with a lawyer. Set the "last updated" dates.
- [ ] Decide which `features` to switch off (e.g. `projects: false` if there are no projects yet)

## 4. Web3Forms and spam protection
- [ ] Create a Web3Forms access key with the client's lead email
- [ ] Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to `.env.local` and Cloudflare Pages (Production and Preview)
- [ ] Set subject and sender name in config
- [ ] (Optional) Create a Turnstile widget, add the site key to env vars and the secret key in the Web3Forms dashboard
- [ ] Submit a test lead from desktop and from a phone. Confirm the email arrives.
- [ ] Test: empty submit, invalid phone, consent unchecked, and the quote sheet

## 5. Quality checks
- [ ] `npm run typecheck` and `npm run build` pass with no warnings you don't understand
- [ ] Click through every page on a phone and a desktop
- [ ] Tab through the header, a form and the FAQ with the keyboard only
- [ ] Phone and WhatsApp links open correctly on a phone
- [ ] Check dark mode if enabled
- [ ] Run Lighthouse (mobile) on home, a service page and contact
- [ ] Validate structured data with Google's Rich Results Test
- [ ] Open a page's Share preview to confirm the OG image shows

## 6. Deploy
- [ ] Connect the repo to Cloudflare Pages: preset **Next.js (Static HTML Export)**, build `npm run build`, output `out`
- [ ] Add env vars: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, `NEXT_PUBLIC_SITE_URL`, optional Turnstile key
- [ ] Add the custom domain and confirm HTTPS works
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy
- [ ] Re-test the form on the live domain
- [ ] Add analytics IDs to config (if used) and confirm events arrive

## 7. After launch
- [ ] Submit `/sitemap.xml` in Google Search Console
- [ ] Claim or update the Google Business Profile. Add its URL to `social.googleBusiness`.
- [ ] Hand over: Cloudflare, GitHub, Web3Forms and domain-registrar access
- [ ] Schedule a quarterly check: subsidy and tariff wording, stats, new projects and testimonials
