/* ============================================================================
   THE HUSTLE STANDARD — app.js
   No build step, no backend required. Everything below is edited by hand.
   Look for "EDIT ME" comments — those are the only places you need to touch
   to run your store.
   ============================================================================ */

/* ----------------------------------------------------------------------------
   1. STORE SETTINGS  (EDIT ME)
   Fill these in with your real details. Anything left as "INSERT_..." will
   show a visible reminder on the live site so you never accidentally launch
   with fake info.
---------------------------------------------------------------------------- */
const CONFIG = {
  brandName: "THE HUSTLE STANDARD",
  tagline: "DISCIPLINE. MONEY. GROWTH.",

  // Your WhatsApp number in international format, digits only, no + or spaces.
  // Example: "15551234567"
  whatsappNumber: "INSERT_WHATSAPP_NUMBER",

  // The email address you want customer requests and messages sent to.
  businessEmail: "INSERT_BUSINESS_EMAIL",

  // OPTIONAL. A free form backend so order requests land in your inbox
  // automatically instead of relying only on WhatsApp/email links.
  // Two free options that need no code:
  //   - Formspree (formspree.io) → free tier, gives you a URL like
  //     https://formspree.io/f/abcdwxyz
  //   - A Google Form set to "Get email notifications for new responses",
  //     using its formResponse action URL.
  // Paste the URL below. Leave it as "" to skip and rely on WhatsApp/email only.
  formEndpoint: "",

  social: {
    instagram: "INSERT_INSTAGRAM_LINK",
    tiktok: "INSERT_TIKTOK_LINK",
    facebook: "INSERT_FACEBOOK_LINK",
    youtube: "INSERT_YOUTUBE_LINK",
  },

  founder: "INSERT_FOUNDER_NAME",
  foundedYear: "INSERT_YEAR",

  shipping: {
    countries: "INSERT_SHIPPING_COUNTRIES",
    deliveryEstimate: "INSERT_ESTIMATED_DELIVERY_TIME",
    cost: "INSERT_SHIPPING_COST_INFO",
    paymentMethods: "INSERT_PAYMENT_METHODS",
  },

  // Legal business details for the Privacy / Terms / Returns / Shipping pages.
  // These pages are placeholder skeletons — have them reviewed before you
  // rely on them; this site does not provide legal advice.
  businessInfo: "INSERT_BUSINESS_INFORMATION (legal/trading name, address, business registration number if you have one)",

  analytics: {
    // Paste IDs when you have them. Leave blank to skip tracking entirely.
    googleAnalyticsId: "", // e.g. "G-XXXXXXX"
    metaPixelId: "",       // e.g. "1234567890"
    tiktokPixelId: "",     // e.g. "CXXXXXXXXXXXXXXXXX"
  },
};

/* ----------------------------------------------------------------------------
   2. PRODUCT CATALOG  (EDIT ME)
   To add a new product: copy one whole { ... } block, paste it before the
   closing "]", and change the values. "id" must be unique — use a simple
   slug like "no-excuses".

   status options: "NEW DROP" | "AVAILABLE" | "COMING SOON" | "SOLD OUT" | "PRE-ORDER"
   price: a number (e.g. 25) or null to show "PRICE ON REQUEST"
---------------------------------------------------------------------------- */
const DEFAULT_COLORS = ["Black", "Charcoal", "Sand", "White"];
const DEFAULT_SIZES = ["S", "M", "L", "XL", "XXL"];

const PRODUCTS = [
  {
    id: "discipline-motivation",
    name: "DISCIPLINE > MOTIVATION",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "Motivation gets you started. Discipline keeps you moving. A clean statement piece created for people who understand that consistency matters more than temporary motivation.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "no-excuses",
    name: "NO EXCUSES.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "No excuses, no shortcuts. A direct reminder that the work still has to get done — on the days you feel it, and the days you don't.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "build-in-silence",
    name: "BUILD IN SILENCE.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "Let the results speak. Made for people who talk less, plan quietly, and let the work announce itself.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "work-earn-repeat",
    name: "WORK. EARN. REPEAT.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "The cycle that builds everything. A straightforward tribute to consistent effort over quick wins.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "get-paid-stay-humble",
    name: "GET PAID. STAY HUMBLE.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "Success without the ego. A reminder to keep grinding without losing sight of where you started.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "consistency-wins",
    name: "CONSISTENCY WINS.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "Talent starts it. Consistency finishes it. Made for the people who show up on the days it's boring.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "your-future-needs-you",
    name: "YOUR FUTURE NEEDS YOU.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
    status: "NEW DROP",
    price: null,
    colors: DEFAULT_COLORS,
    sizes: DEFAULT_SIZES,
    description:
      "A direct message from the person you're becoming. Wear it as a daily check-in with your goals.",
    care: "INSERT CARE INSTRUCTIONS FROM YOUR PRINT-ON-DEMAND PROVIDER",
    fulfillment: "INSERT ESTIMATED PRODUCTION & FULFILLMENT TIME FROM YOUR POD PROVIDER",
  },
  {
    id: "money-loves-discipline",
    name: "MONEY LOVES DISCIPLINE.",
    collection: "THE DISCIPLINE DROP",
    category: "T-Shirt",
let PRODUCTS = [];

const PRODUCT_FILES = [
  "discipline-motivation.json",
  "no-excuses.json",
  "build-in-silence.json",
  "work-earn-repeat.json",
  "get-paid-stay-humble.json",
  "consistency-wins.json",
  "your-future-needs-you.json",
  "money-loves-discipline.json",
  "focus-build-grow.json",
  "become-unstoppable.json"
];

async function loadProducts() {
  try {
    const promises = PRODUCT_FILES.map(file => 
      fetch(`data/products/${file}`).then(res => res.json())
    );
    PRODUCTS = await Promise.all(promises);
    console.log("Products loaded:", PRODUCTS.length);
  } catch (error) {
    console.error("Failed to load products:", error);
  }
  route(); // re-render the page after products are loaded
}

// Start loading products
loadProducts();

/* ----------------------------------------------------------------------------
   3. FAQ CONTENT  (EDIT ME)
---------------------------------------------------------------------------- */
const FAQS = [
  {
    q: "Do I pay immediately?",
    a: "No. This site currently collects an order request, not an instant payment. Once you submit a request, final price, availability, shipping and payment are confirmed with you directly before anything goes into production.",
  },
  {
    q: "How do I order?",
    a: "Browse the shop, choose your product, size and color, then submit a request — or contact us directly on WhatsApp. We'll follow up to confirm the details.",
  },
  {
    q: "Where do you ship?",
    a: CONFIG.shipping.countries,
  },
  {
    q: "How long does delivery take?",
    a: CONFIG.shipping.deliveryEstimate,
  },
  {
    q: "How much is shipping?",
    a: CONFIG.shipping.cost,
  },
  {
    q: "What payment methods do you accept?",
    a: CONFIG.shipping.paymentMethods,
  },
  {
    q: "Can I request a different design?",
    a: "Reach out on WhatsApp or by email to discuss a custom request. Whether custom work is currently offered depends on availability at the time.",
  },
];

/* ----------------------------------------------------------------------------
   Helpers
---------------------------------------------------------------------------- */
const isPlaceholder = (v) => !v || /^INSERT_/i.test(v) || /^INSERT /i.test(v);
const $app = document.getElementById("app");
const money = (p) => (p == null ? "PRICE ON REQUEST" : `$${Number(p).toFixed(2)}`);
const swatchColor = (name) => {
  const map = { black: "#0b0b0a", charcoal: "#3a3a36", sand: "#ece5d3", cream: "#ece5d3", white: "#faf9f5", gold: "#b3852e" };
  return map[String(name).toLowerCase()] || "#888";
};
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function statusClass(status) {
  return {
    "NEW DROP": "status-new",
    AVAILABLE: "status-available",
    "SOLD OUT": "status-soldout",
    "PRE-ORDER": "status-preorder",
    "COMING SOON": "status-coming",
  }[status] || "status-new";
}

/* A placeholder "mockup" — a simple stenciled garment illustration carrying
   the product's slogan. Clearly a design placeholder, not a real photo, so
   nobody mistakes it for an actual product photograph. Swap the mockupBox()
   calls for <img> tags once you have real mockups from your POD provider. */
function mockupSVG(label, variant = "front") {
  const shirtPath =
    "M30 18 L45 6 L58 6 L68 16 L100 26 L92 46 L78 40 L78 116 L22 116 L22 40 L8 46 L0 26 Z";
  return `
  <svg viewBox="0 0 100 122" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)} mockup placeholder, ${variant} view">
    <path d="${shirtPath}" fill="none" stroke="#b3852e" stroke-width="1.2" opacity="0.55" transform="translate(0,0) scale(1) "/>
    <text x="50" y="60" text-anchor="middle" font-family="Space Mono, monospace" font-size="6" fill="#d7b96a" opacity="0.9">${esc(variant.toUpperCase())}</text>
    <text x="50" y="72" text-anchor="middle" font-family="Anton, sans-serif" font-size="7.5" fill="#faf9f5" opacity="0.92">
      ${wrapSvgText(label, 16)}
    </text>
    <text x="50" y="106" text-anchor="middle" font-family="Space Mono, monospace" font-size="4.2" fill="#b3852e" opacity="0.75">MOCKUP PLACEHOLDER</text>
  </svg>`;
}
function wrapSvgText(label, maxChars) {
  const words = label.split(" ");
  const lines = [];
  let cur = "";
  words.forEach((w) => {
    if ((cur + " " + w).trim().length > maxChars) { lines.push(cur.trim()); cur = w; }
    else cur = (cur + " " + w).trim();
  });
  if (cur) lines.push(cur.trim());
  return lines.slice(0, 3).map((l, i) => `<tspan x="50" dy="${i === 0 ? 0 : 9}">${esc(l)}</tspan>`).join("");
}
function mockupBox(product, variant = "front", extraClass = "") {
  // If the product has a real image, show it
  if (product.image) {
    return `
      <div class="mockup-box ${extraClass}">
        <img src="\( {product.image}" alt=" \){esc(product.name)}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" />
      </div>`;
  }

  // Otherwise show the SVG placeholder
  return `<div class="mockup-box \( {extraClass}"> \){mockupSVG(product.name, variant)}</div>`;
}

/* ----------------------------------------------------------------------------
   Router
---------------------------------------------------------------------------- */
const routes = {
  home: renderHome,
  shop: renderShop,
  product: renderProductDetail,
  about: renderAbout,
  faq: renderFAQ,
  contact: renderContact,
  privacy: () => renderLegal("Privacy Policy", "privacy"),
  terms: () => renderLegal("Terms & Conditions", "terms"),
  returns: () => renderLegal("Returns & Refunds", "returns"),
  shipping: () => renderLegal("Shipping Policy", "shipping"),
};

function parseHash() {
  const raw = (location.hash || "#home").slice(1);
  const [name, param] = raw.split("/");
  return { name: name || "home", param };
}

function route() {
  const { name, param } = parseHash();
  const fn = routes[name] || routes.home;
  $app.innerHTML = fn(param) || "";
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  closeMobileMenu();
  updateActiveNav(name);
  bindDynamicHandlers(name, param);
}
window.addEventListener("hashchange", route);

function updateActiveNav(name) {
  document.querySelectorAll("#main-nav a, #mobile-menu a").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === name);
  });
}

/* ----------------------------------------------------------------------------
   View: Home
---------------------------------------------------------------------------- */
function renderHome() {
  const featured = PRODUCTS.slice(0, 3);
  return `
  <section class="hero">
    <div class="hero-inner">
      <span class="tag-label">The Discipline Drop — Now Live</span>
      <h1>DISCIPLINE.<br>MONEY.<br><span class="accent">GROWTH.</span></h1>
      <p class="lede">Clothing for people who refuse to settle for average.</p>
      <div class="hero-actions">
        <a href="#shop" class="btn btn-gold">View Collection</a>
        <button class="btn btn-outline" data-open-order="">Make an Order Request</button>
      </div>
      <div class="hero-mockup">
        <div class="mockup-box" style="border:1px solid var(--line-soft);border-radius:var(--radius);">${mockupSVG("HUSTLE STANDARD", "lifestyle")}</div>
        <p class="mockup-note">Hero image placeholder — replace with a real lifestyle photo of the garment once you have mockups from your print-on-demand provider.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <span class="tag-label">01 / Statement</span>
        <h2>More Than Clothing.<br>It's a Standard.</h2>
      </div>
      <div class="brand-message">
        <p class="big-line">THE HUSTLE STANDARD represents discipline, ambition, consistency and growth.</p>
        <p style="max-width:60ch;color:rgba(250,249,245,.75)">Every piece is designed as a reminder to maintain your standards, do the work, and keep moving forward.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:14px;">
        <div>
          <span class="tag-label">02 / The Discipline Drop</span>
          <h2>New Drops</h2>
        </div>
        <a href="#shop" class="btn-ghost" style="font-family:var(--font-mono);font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;">View All →</a>
      </div>
      <div class="product-grid">
        ${featured.map((p, i) => productCard(p, i)).join("")}
      </div>
    </div>
  </section>

  ${orderProcessSection()}
  ${zeroCostSection()}
  ${newsletterSection()}
  `;
}

function orderProcessSection() {
  const steps = [
    ["Choose Your Design", "Browse the collection and select your favorite product."],
    ["Send a Request", "Choose your size, color and quantity."],
    ["We Confirm", "We contact you to confirm price, availability, shipping and payment."],
    ["Production", "After confirmation, our print-on-demand provider produces the item."],
    ["Delivery", "The finished product is shipped to you."],
  ];
  return `
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <span class="tag-label">03 / How It Works</span>
        <h2>Order Process</h2>
        <p>This is a request-and-confirmation process, not an instant paid checkout. Nothing goes into production until you've confirmed the details with us.</p>
      </div>
      <div class="steps">
        ${steps.map((s, i) => `
          <div class="step-card">
            <span class="step-num">${i + 1}</span>
            <div><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></div>
          </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function zeroCostSection() {
  return `
  <section class="section on-cream">
    <div class="wrap">
      <span class="tag-label">04 / How We Operate</span>
      <h2 style="margin-top:12px;max-width:20ch;">No Inventory. No Warehouse. No Guesswork.</h2>
      <p style="margin-top:14px;">Products are produced only after an order is confirmed, through our print-on-demand fulfillment partner. This keeps waste down and lets us focus entirely on the designs. Fulfillment itself isn't free to us — it's simply paid for order by order, not stockpiled in advance.</p>
    </div>
  </section>`;
}

function newsletterSection() {
  return `
  <section class="section" style="border-bottom:none;">
    <div class="wrap">
      <div class="newsletter">
        <span class="tag-label">Join the Movement</span>
        <h2>Get New Drops First</h2>
        <p>Updates about new drops, new designs and special releases. No spam.</p>
        <form class="newsletter-form" id="newsletter-form">
          <input type="email" required placeholder="Enter your email" aria-label="Email address" />
          <button class="btn btn-gold" type="submit">Join</button>
        </form>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------------------------
   View: Shop
---------------------------------------------------------------------------- */
function renderShop() {
  return `
  <section class="section" style="padding-top:40px;">
    <div class="wrap">
      <div class="section-head">
        <span class="tag-label">Shop</span>
        <h2>The Discipline Drop</h2>
      </div>
      <div class="shop-toolbar">
        <div class="shop-search">
          <span aria-hidden="true">🔍</span>
          <input type="text" id="shop-search" placeholder="Search designs, e.g. &quot;discipline&quot;" aria-label="Search products" />
        </div>
        <div class="shop-filters">
          <select id="filter-category" aria-label="Filter by category">
            <option value="">All Categories</option>
          </select>
          <select id="filter-color" aria-label="Filter by color">
            <option value="">All Colors</option>
          </select>
          <select id="filter-size" aria-label="Filter by size">
            <option value="">All Sizes</option>
          </select>
          <select id="filter-collection" aria-label="Filter by collection">
            <option value="">All Collections</option>
          </select>
        </div>
        <p class="shop-count" id="shop-count"></p>
      </div>
      <div class="product-grid" id="shop-grid"></div>
    </div>
  </section>`;
}

function productCard(p, index) {
  const outOfSelect = p.status === "SOLD OUT";
  return `
  <article class="product-card" data-id="${p.id}">
    <span class="card-index">${String(index + 1).padStart(2, "0")} / ${String(PRODUCTS.length).padStart(2, "0")}</span>
    <span class="stamp ${statusClass(p.status)}">${esc(p.status)}</span>
    <a href="#product/${p.id}" aria-label="View ${esc(p.name)}">${mockupBox(p, "front")}</a>
    <div class="card-body">
      <span class="card-meta">${esc(p.category)} · ${esc(p.collection)}</span>
      <a href="#product/${p.id}"><h3 class="card-title">${esc(p.name)}</h3></a>
      <p class="card-desc">${esc(p.description)}</p>
      <div class="swatches" aria-label="Available colors">
        ${p.colors.map((c) => `<span class="swatch" style="background:${swatchColor(c)}" title="${esc(c)}"></span>`).join("")}
      </div>
      <p class="card-price">${money(p.price)}</p>
      <div class="card-actions">
        <a href="#product/${p.id}" class="btn btn-outline">View Details</a>
        <button class="btn btn-gold" data-open-order="${p.id}" ${outOfSelect ? "disabled" : ""}>Request Item</button>
      </div>
    </div>
  </article>`;
}

function populateShopFilters() {
  const cat = document.getElementById("filter-category");
  const col = document.getElementById("filter-collection");
  const color = document.getElementById("filter-color");
  const size = document.getElementById("filter-size");
  if (!cat) return;
  const cats = [...new Set(PRODUCTS.map((p) => p.category))];
  const cols = [...new Set(PRODUCTS.map((p) => p.collection))];
  const colors = [...new Set(PRODUCTS.flatMap((p) => p.colors))];
  const sizes = [...new Set(PRODUCTS.flatMap((p) => p.sizes))];
  cat.insertAdjacentHTML("beforeend", cats.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join(""));
  col.insertAdjacentHTML("beforeend", cols.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join(""));
  color.insertAdjacentHTML("beforeend", colors.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join(""));
  size.insertAdjacentHTML("beforeend", sizes.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join(""));

  const applyFilters = () => {
    const q = document.getElementById("shop-search").value.trim().toLowerCase();
    const fc = cat.value, fco = color.value, fs = size.value, fcol = col.value;
    const filtered = PRODUCTS.filter((p) => {
      const matchesQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.collection.toLowerCase().includes(q);
      const matchesCat = !fc || p.category === fc;
      const matchesCol = !fcol || p.collection === fcol;
      const matchesColor = !fco || p.colors.includes(fco);
      const matchesSize = !fs || p.sizes.includes(fs);
      return matchesQ && matchesCat && matchesCol && matchesColor && matchesSize;
    });
    const grid = document.getElementById("shop-grid");
    grid.innerHTML = filtered.length
      ? filtered.map((p) => productCard(p, PRODUCTS.indexOf(p))).join("")
      : `<div class="empty-state" style="grid-column:1/-1;">No designs match your search yet. Try clearing a filter.</div>`;
    document.getElementById("shop-count").textContent = `${filtered.length} design${filtered.length === 1 ? "" : "s"}`;
    bindOrderButtons();
  };

  ["input", "change"].forEach((evt) => {
    document.getElementById("shop-search").addEventListener(evt, applyFilters);
    [cat, col, color, size].forEach((el) => el.addEventListener(evt, applyFilters));
  });
  applyFilters();
}

/* ----------------------------------------------------------------------------
   View: Product Detail
---------------------------------------------------------------------------- */
function renderProductDetail(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) {
    return `<section class="section"><div class="wrap"><div class="empty-state">Product not found. <a href="#shop" class="btn-ghost">Back to shop →</a></div></div></section>`;
  }
  return `
  <section class="section" style="padding-top:36px;">
    <div class="wrap">
      <a href="#shop" class="btn-ghost" style="font-family:var(--font-mono);font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;">← Back to Shop</a>
      <div class="product-detail" style="margin-top:22px;">
   <div class="detail-gallery">
              ${p.image 
                ? `<div class="mockup-box"><img src="\( {p.image}" alt=" \){esc(p.name)}" style="width:100%; height:100%; object-fit:cover;" /></div>` 
                : mockupBox(p, "front")}
              
              ${p.images && p.images.length > 0 
                ? p.images.map(img => `
                    <div class="mockup-box">
                      <img src="\( {img}" alt=" \){esc(p.name)}" style="width:100%; height:100%; object-fit:cover;" />
                    </div>`).join("")
                : `
                  ${mockupBox(p, "back")}
                  ${mockupBox(p, "lifestyle", "wide")}
                  ${mockupBox(p, "close-up", "wide")}
                `}
            </div>
        <div class="detail-info">
          <span class="badge-inline">${esc(p.status)}</span>
          <h1 style="margin-top:14px;">${esc(p.name)}</h1>
          <p class="detail-price">${money(p.price)}</p>
          <p class="detail-desc">${esc(p.description)}</p>

          <div class="detail-block">
            <h4>Color</h4>
            <div class="pill-row">${p.colors.map((c) => `<span class="pill">${esc(c)}</span>`).join("")}</div>
          </div>
          <div class="detail-block">
            <h4>Size</h4>
            <div class="pill-row">${p.sizes.map((s) => `<span class="pill">${esc(s)}</span>`).join("")}</div>
          </div>
          <div class="detail-block">
            <h4>Care Instructions</h4>
            <p style="color:rgba(250,249,245,.7);font-size:.9rem;">${esc(p.care)}</p>
          </div>
          <div class="detail-block">
            <h4>Estimated Fulfillment</h4>
            <p style="color:rgba(250,249,245,.7);font-size:.9rem;">${esc(p.fulfillment)}</p>
          </div>

          <div class="detail-actions">
            <button class="btn btn-gold" data-open-order="${p.id}" ${p.status === "SOLD OUT" ? "disabled" : ""}>Request This Item</button>
            <button class="btn btn-wa" data-wa-order="${p.id}">Order via WhatsApp</button>
          </div>
          <p class="detail-note">Submitting a request does not charge you. We'll confirm price, availability, shipping and payment before production begins.</p>
        </div>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------------------------
   View: About
---------------------------------------------------------------------------- */
function renderAbout() {
  return `
  <section class="section" style="padding-top:40px;border-bottom:none;">
    <div class="wrap">
      <span class="tag-label">About</span>
      <h2 style="margin-top:12px;">About The Hustle Standard</h2>
      <div class="prose mt-lg">
        <p>THE HUSTLE STANDARD is a clothing brand built around discipline, ambition, money, growth and personal development.</p>
        <p>Our goal is simple: create clothing that reminds you of who you're becoming — especially on the days you feel like quitting.</p>
      </div>
      <div class="fact-row">
        <div><p class="k">Founder</p><p class="v">${esc(CONFIG.founder)}</p></div>
        <div><p class="k">Founded</p><p class="v">${esc(CONFIG.foundedYear)}</p></div>
        <div><p class="k">Collection</p><p class="v">The Discipline Drop</p></div>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------------------------
   View: FAQ
---------------------------------------------------------------------------- */
function renderFAQ() {
  return `
  <section class="section" style="padding-top:40px;border-bottom:none;">
    <div class="wrap">
      <span class="tag-label">FAQ</span>
      <h2 style="margin-top:12px;margin-bottom:10px;">Frequently Asked Questions</h2>
      <div id="faq-list" style="max-width:70ch;">
        ${FAQS.map((f, i) => `
          <div class="faq-item" data-i="${i}">
            <button class="faq-q">${esc(f.q)}<span class="plus">+</span></button>
            <div class="faq-a"><p>${esc(f.a)}</p></div>
          </div>`).join("")}
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------------------------
   View: Contact
---------------------------------------------------------------------------- */
function renderContact() {
  return `
  <section class="section" style="padding-top:40px;border-bottom:none;">
    <div class="wrap">
      <span class="tag-label">Contact</span>
      <h2 style="margin-top:12px;">Contact The Hustle Standard</h2>
      <div class="contact-grid mt-lg">
        <div>
          <div class="contact-info-list">
            <div class="contact-info-item"><div><p class="k">Email</p><p class="v">${esc(CONFIG.businessEmail)}</p></div></div>
            <div class="contact-info-item"><div><p class="k">WhatsApp</p><p class="v">${esc(CONFIG.whatsappNumber)}</p></div></div>
            <div class="contact-info-item"><div><p class="k">Instagram</p><p class="v">${esc(CONFIG.social.instagram)}</p></div></div>
            <div class="contact-info-item"><div><p class="k">TikTok</p><p class="v">${esc(CONFIG.social.tiktok)}</p></div></div>
            <div class="contact-info-item"><div><p class="k">Facebook</p><p class="v">${esc(CONFIG.social.facebook)}</p></div></div>
          </div>
          <div class="hero-actions" style="margin-top:22px;">
            <button class="btn btn-wa" data-wa-general="">Message on WhatsApp</button>
            <a class="btn btn-outline" href="mailto:${isPlaceholder(CONFIG.businessEmail) ? "" : CONFIG.businessEmail}">Email Us</a>
          </div>
        </div>
        <form id="contact-form" class="form-grid">
          <div class="field"><label>Name</label><input type="text" required /></div>
          <div class="field"><label>Email</label><input type="email" required /></div>
          <div class="field"><label>WhatsApp</label><input type="tel" /></div>
          <div class="field"><label>Subject</label><input type="text" required /></div>
          <div class="field"><label>Message</label><textarea rows="4" required></textarea></div>
          <button class="btn btn-gold" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------------------------
   View: Legal pages (skeleton placeholders — have these reviewed)
---------------------------------------------------------------------------- */
function renderLegal(title, key) {
  const bodies = {
    privacy: `We collect the information you submit through order requests and contact forms (such as your name, email, WhatsApp number and delivery details) solely to process your order and communicate with you. We do not sell customer information.`,
    terms: `By submitting a request through this site, you're asking us to check availability and pricing — you are not completing a purchase. A sale is only final once we've confirmed price, shipping and payment with you directly.`,
    returns: `Because items are produced to order through a print-on-demand partner, our returns and refund process depends on that provider's policies. Details will be confirmed with you at the time of your order.`,
    shipping: `Shipping destinations, timelines and costs vary by order and are confirmed with you individually before production begins.`,
  };
  return `
  <section class="section" style="padding-top:40px;border-bottom:none;">
    <div class="wrap">
      <span class="tag-label">Legal</span>
      <h2 style="margin-top:12px;margin-bottom:24px;">${esc(title)}</h2>
      <div class="legal-notice">This is a placeholder template, not legal advice. Replace ${esc(CONFIG.businessInfo)} and review the full policy with a qualified professional before relying on it.</div>
      <div class="prose">
        <p>${esc(bodies[key])}</p>
        <p>Business information: ${esc(CONFIG.businessInfo)}</p>
      </div>
    </div>
  </section>`;
}

/* ----------------------------------------------------------------------------
   Order modal
---------------------------------------------------------------------------- */
let lastFocusedEl = null;

function openOrderModal(productId) {
  lastFocusedEl = document.activeElement;
  const product = PRODUCTS.find((p) => p.id === productId) || null;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "order-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
      <div class="modal-head">
        <h3 id="order-modal-title" style="font-size:1.3rem;">Request This Product</h3>
        <button class="modal-close" id="order-close" aria-label="Close">×</button>
      </div>
      ${configWarningIfNeeded()}
      <form id="order-form" class="form-grid">
        <div class="field">
          <label>Product</label>
          ${product
            ? `<input type="text" value="${esc(product.name)}" readonly />`
            : `<select name="product" required>
                 <option value="" disabled selected>Select a product</option>
                 ${PRODUCTS.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join("")}
               </select>`}
        </div>
        <div class="form-row-2">
          <div class="field"><label>Full Name</label><input type="text" name="fullName" required /></div>
          <div class="field"><label>Email Address</label><input type="email" name="email" required /></div>
        </div>
        <div class="form-row-2">
          <div class="field"><label>WhatsApp Number</label><input type="tel" name="whatsapp" required placeholder="+1 555 123 4567" /></div>
          <div class="field"><label>Quantity</label><input type="number" name="quantity" min="1" value="1" required /></div>
        </div>
        <div class="form-row-2">
          <div class="field">
            <label>Color</label>
            <select name="color" required>${(product ? product.colors : DEFAULT_COLORS).map((c) => `<option>${esc(c)}</option>`).join("")}</select>
          </div>
          <div class="field">
            <label>Size</label>
            <select name="size" required>${(product ? product.sizes : DEFAULT_SIZES).map((s) => `<option>${esc(s)}</option>`).join("")}</select>
          </div>
        </div>
        <div class="form-row-2">
          <div class="field"><label>Country</label><input type="text" name="country" required /></div>
          <div class="field"><label>City</label><input type="text" name="city" required /></div>
        </div>
        <div class="field"><label>Additional Message (optional)</label><textarea name="message" rows="3"></textarea></div>
        <div class="form-actions">
          <button class="btn btn-gold btn-block" type="submit">Submit Order Request</button>
        </div>
      </form>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeOrderModal(); });
  document.getElementById("order-close").addEventListener("click", closeOrderModal);
  document.addEventListener("keydown", escCloseHandler);

  document.getElementById("order-form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleOrderSubmit(e.target, product);
  });
}

function configWarningIfNeeded() {
  if (isPlaceholder(CONFIG.whatsappNumber) || isPlaceholder(CONFIG.businessEmail)) {
    return `<div class="config-alert">Store owner: add your real WhatsApp number and email in app.js (CONFIG) so requests reach you. Buttons below are shown to visitors but won't connect correctly until that's done.</div>`;
  }
  return "";
}

function escCloseHandler(e) { if (e.key === "Escape") closeOrderModal(); }

function closeOrderModal() {
  const overlay = document.getElementById("order-overlay");
  if (overlay) overlay.remove();
  document.body.style.overflow = "";
  document.removeEventListener("keydown", escCloseHandler);
  if (lastFocusedEl) lastFocusedEl.focus();
}

function buildOrderMessage(data) {
  return [
    `Hello ${CONFIG.brandName}, I would like to order:`,
    ``,
    `Product: ${data.product}`,
    `Color: ${data.color}`,
    `Size: ${data.size}`,
    `Quantity: ${data.quantity}`,
    `My Name: ${data.fullName}`,
    `My Location: ${data.city}, ${data.country}`,
    `Additional Message: ${data.message || "-"}`,
  ].join("\n");
}

async function handleOrderSubmit(form, preselectedProduct) {
  const fd = new FormData(form);
  const productName = preselectedProduct ? preselectedProduct.name : (PRODUCTS.find((p) => p.id === fd.get("product"))?.name || fd.get("product"));
  const data = {
    product: productName,
    fullName: fd.get("fullName"),
    email: fd.get("email"),
    whatsapp: fd.get("whatsapp"),
    quantity: fd.get("quantity"),
    color: fd.get("color"),
    size: fd.get("size"),
    country: fd.get("country"),
    city: fd.get("city"),
    message: fd.get("message"),
  };

  // If a free form backend is configured, send it there so it lands in your inbox.
  if (CONFIG.formEndpoint) {
    try {
      await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
    } catch (err) {
      // Silent fail is fine here — WhatsApp/email links below still work as backup.
      console.warn("Order form backend submission failed, falling back to WhatsApp/email.", err);
    }
  }

  showOrderConfirmation(data);
}

function showOrderConfirmation(data) {
  const overlay = document.getElementById("order-overlay");
  if (!overlay) return;
  const message = buildOrderMessage(data);
  const waHref = isPlaceholder(CONFIG.whatsappNumber) ? "#" : `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mailHref = isPlaceholder(CONFIG.businessEmail) ? "#" : `mailto:${CONFIG.businessEmail}?subject=${encodeURIComponent("Order Request — " + data.product)}&body=${encodeURIComponent(message)}`;

  overlay.querySelector(".modal").innerHTML = `
    <div class="confirm-box">
      <div class="big-check">🎉</div>
      <h3>Request Received</h3>
      <p>Thank you for your interest in ${esc(CONFIG.brandName)}. Your request has been received. We'll contact you to confirm availability, final price, shipping and payment details before production begins.</p>
      <div class="confirm-actions">
        <a class="btn btn-wa btn-block" href="${waHref}" target="_blank" rel="noopener">Contact Us on WhatsApp</a>
        <a class="btn btn-outline btn-block" href="${mailHref}">Email Us the Details</a>
        <button class="btn btn-ghost" id="order-return-shop">Return to Shop</button>
      </div>
    </div>`;
  document.getElementById("order-return-shop").addEventListener("click", () => {
    closeOrderModal();
    location.hash = "#shop";
  });
}

/* ----------------------------------------------------------------------------
   WhatsApp direct-order links (outside the modal, e.g. product page button)
---------------------------------------------------------------------------- */
function waOrderLink(product) {
  const message = [
    `Hello ${CONFIG.brandName}, I would like to order:`,
    ``,
    `Product: ${product.name}`,
    `Color: [COLOR]`,
    `Size: [SIZE]`,
    `Quantity: [QUANTITY]`,
    `My Name: [CUSTOMER NAME]`,
    `My Location: [CUSTOMER LOCATION]`,
    `Additional Message: [MESSAGE]`,
  ].join("\n");
  return isPlaceholder(CONFIG.whatsappNumber) ? null : `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ----------------------------------------------------------------------------
   Dynamic event binding (runs after every route render)
---------------------------------------------------------------------------- */
function bindOrderButtons() {
  document.querySelectorAll("[data-open-order]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open-order");
      openOrderModal(id || null);
    });
  });
  document.querySelectorAll("[data-wa-order]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = PRODUCTS.find((p) => p.id === btn.getAttribute("data-wa-order"));
      const link = product && waOrderLink(product);
      if (!link) { alert("Store owner: add your WhatsApp number in app.js (CONFIG.whatsappNumber) to enable this button."); return; }
      window.open(link, "_blank", "noopener");
    });
  });
  document.querySelectorAll("[data-wa-general]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isPlaceholder(CONFIG.whatsappNumber)) { alert("Store owner: add your WhatsApp number in app.js (CONFIG.whatsappNumber) to enable this button."); return; }
      window.open(`https://wa.me/${CONFIG.whatsappNumber}`, "_blank", "noopener");
    });
  });
}

function bindDynamicHandlers(routeName) {
  bindOrderButtons();

  if (routeName === "shop") populateShopFilters();

  if (routeName === "faq") {
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.querySelector(".faq-q").addEventListener("click", () => item.classList.toggle("open"));
    });
  }

  if (routeName === "contact") {
    const form = document.getElementById("contact-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const [name, email, whatsapp, subject, message] = [...form.querySelectorAll("input,textarea")].map((el) => el.value);
      if (isPlaceholder(CONFIG.businessEmail)) {
        alert("Store owner: add your business email in app.js (CONFIG.businessEmail) to enable this form.");
        return;
      }
      const body = `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\n${message}`;
      window.location.href = `mailto:${CONFIG.businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
}

document.addEventListener("submit", (e) => {
  if (e.target && e.target.id === "newsletter-form") {
    e.preventDefault();
    const email = e.target.querySelector("input").value;
    if (isPlaceholder(CONFIG.businessEmail) && !CONFIG.formEndpoint) {
      alert("Store owner: connect a free Google Form or Formspree endpoint (see CONFIG.formEndpoint in app.js) to start collecting newsletter signups.");
      return;
    }
    alert(`Thanks — ${email} is on the list.`);
    e.target.reset();
  }
});

/* ----------------------------------------------------------------------------
   Header / mobile menu
---------------------------------------------------------------------------- */
function closeMobileMenu() {
  document.getElementById("mobile-menu")?.classList.add("hidden");
  document.getElementById("hamburger")?.setAttribute("aria-expanded", "false");
}
document.getElementById("hamburger")?.addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  const isHidden = menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  document.getElementById("hamburger").setAttribute("aria-expanded", String(isHidden));
});

/* ----------------------------------------------------------------------------
   Boot
---------------------------------------------------------------------------- */
document.getElementById("wa-float-link")?.addEventListener("click", (e) => {
  if (isPlaceholder(CONFIG.whatsappNumber)) {
    e.preventDefault();
    alert("Store owner: add your WhatsApp number in app.js (CONFIG.whatsappNumber) to enable this button.");
  }
});
