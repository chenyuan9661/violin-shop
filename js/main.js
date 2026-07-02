/* ========================================
   Auntie's Violins — Scripts
   ======================================== */

// Product data — replace these with real violins
const products = [
  {
    name: 'Amati Model',
    price: '$2,800',
    desc: 'A warm, responsive instrument inspired by the classic Amati style. Ideal for solo and chamber music.',
  },
  {
    name: 'Stradivari Model',
    price: '$3,500',
    desc: 'Our take on the legendary Stradivarius — powerful projection with a rich, complex tone.',
  },
  {
    name: 'Student Violin',
    price: '$800',
    desc: 'A reliable, well-balanced instrument for the developing player. Great sound at an accessible price.',
  },
  {
    name: 'Guarneri Model',
    price: '$3,200',
    desc: 'Dark, bold character modeled after del Gesù. Perfect for those who want a deeper, gutsier voice.',
  },
];

// Render product cards
const grid = document.getElementById('productGrid');

if (grid) {
  const fragment = document.createDocumentFragment();

  products.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="placeholder-img">${p.name}</div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${p.price}</p>
        <p class="product-desc">${p.desc}</p>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close nav on link click
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}
