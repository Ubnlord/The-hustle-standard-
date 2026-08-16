# THE HUSTLE STANDARD — Website

A free, mobile-first product catalog and order-request site. No hosting fees,
no subscriptions, no payment gateway, no build step — just three files.

## What this is (and isn't)

Customers can browse designs, pick a size/color, and submit an **order
request**. Nothing is charged automatically. You confirm price, availability,
shipping and payment with each customer yourself (by WhatsApp or email),
*then* send it to production with your print-on-demand provider.

## Files

- `index.html` — page structure, header, footer
- `styles.css` — all visual design
- `app.js` — your product catalog, store settings, and all the interactive
  logic (this is the only file you'll usually need to edit)

## 1. Fill in your details (`app.js` → `CONFIG` block, top of file)

Everything below currently shows as `INSERT_...` and will display a visible
reminder on the live site until you replace it:

- [ ] WhatsApp number (`whatsappNumber`) — digits only, country code, no `+`
- [ ] Business email (`businessEmail`)
- [ ] Instagram / TikTok / Facebook / YouTube links (`social`)
- [ ] Founder name (`founder`)
- [ ] Year founded (`foundedYear`)
- [ ] Shipping countries (`shipping.countries`)
- [ ] Estimated delivery time (`shipping.deliveryEstimate`)
- [ ] Shipping cost info (`shipping.cost`)
- [ ] Accepted payment methods (`shipping.paymentMethods`)
- [ ] Business information for legal pages (`businessInfo`) — legal/trading
      name, address, registration number if you have one
- [ ] Optional: Google Analytics / Meta Pixel / TikTok Pixel IDs
      (`analytics`) — only add these if you actually want tracking, then
      uncomment the matching script block in `index.html`
- [ ] Optional but recommended: `formEndpoint` — a free Formspree
      (formspree.io) or Google Form URL so order requests land in your inbox
      automatically, in addition to the WhatsApp/email buttons customers see

## 2. Fill in per-product details (`app.js` → `PRODUCTS` array)

For each of the 10 starting designs, confirm or edit:

- [ ] Price (currently `null` → shows "Price on Request"; set a number to
      show a real price once you know your POD provider's cost + your margin)
- [ ] Colors/sizes — currently a sensible default (Black/Charcoal/Sand/White,
      S–XXL); edit to match what your POD provider actually offers
- [ ] Care instructions (`care`) — pull this from your POD provider
- [ ] Estimated fulfillment time (`fulfillment`) — pull this from your POD
      provider
- [ ] Real product mockup images — right now every product shows a labeled
      **placeholder** illustration (front/back/lifestyle/close-up) so nothing
      is mistaken for a real photo. Swap in real mockups from your POD
      provider by replacing the `mockupBox()` calls with `<img>` tags once
      you have them.

To add an 11th product (or a hoodie version of an existing design), copy one
whole `{ ... }` block in the `PRODUCTS` array, paste it before the closing
`]`, and edit the values. `id` must be unique.

## 3. Deploy for free

Any of these work with zero cost and no code changes:

- **GitHub Pages** — push these 3 files to a GitHub repo, enable Pages in
  Settings, done.
- **Netlify Drop** (app.netlify.com/drop) — drag the folder in, get a live
  URL instantly, no account required to start.
- **Cloudflare Pages** — connect a repo or drag-and-drop, free tier.

No server, database, or build step is required — it's a static site.

## How order requests work today

1. Customer taps **Request This Item** → fills out the form.
2. If you've set `formEndpoint`, the request is also sent there so it's
   waiting in your inbox.
3. Either way, they land on a confirmation screen with **Contact Us on
   WhatsApp** (pre-filled message) and **Email Us** buttons, so the request
   reaches you even without a form backend.
4. You reply to confirm price, shipping and payment, then produce the order
   through your POD provider.

## Upgrading later

When you're ready to move beyond request-based ordering, this structure is
built to be extended with a real cart, online payments, customer accounts,
discount codes, and automated fulfillment — none of that is required to
launch.
