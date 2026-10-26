
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const money = (amount) => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
}).format(amount);

const photo = (id, width = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

const images = [
  photo("photo-1542291026-7eec264c27ff"),
  photo("photo-1549298916-b41d501d3772"),
  photo("photo-1552346154-21d32810aba3"),
  photo("photo-1460353581641-37baddab0fa2"),
  photo("photo-1495555961986-6d4c1ecb7be3"),
  photo("photo-1608231387042-66d1773070a5"),
  photo("photo-1600185365483-26d7a4cc7519"),
  photo("photo-1600269452121-4f2416e55c28")
];

const products = [
  { id: 1, name: "Air Jordan Street", brand: "Jordan", price: 219900, sizes: [38,39,40,41,42,43], tag: "POPULAR", category: "Urbano", image: 0, desc: "Estilo clásico para todos los días." },
  { id: 2, name: "Jordan Retro Court", brand: "Jordan", price: 249900, sizes: [38,39,40,41,42,43,44], tag: "NUEVO", category: "Retro", image: 1, desc: "Diseño retro con personalidad." },
  { id: 3, name: "Nike Revolution Run", brand: "Nike", price: 159900, sizes: [36,37,38,39,40,41,42], tag: "OFERTA", category: "Deportivo", image: 2, desc: "Comodidad para moverte sin parar." },
  { id: 4, name: "Nike Air Urban", brand: "Nike", price: 189900, sizes: [38,39,40,41,42,43,44], tag: "POPULAR", category: "Urbano", image: 3, desc: "Un look urbano que combina con todo." },
  { id: 5, name: "Nike Court Vision", brand: "Nike", price: 179900, sizes: [36,37,38,39,40,41,42,43], tag: "TOP VENTAS", category: "Casual", image: 4, desc: "Inspiración clásica y estilo actual." },
  { id: 6, name: "Nike Flex Motion", brand: "Nike", price: 169900, sizes: [37,38,39,40,41,42,43], tag: "OFERTA", category: "Deportivo", image: 5, desc: "Ligereza para tu rutina diaria." },
  { id: 7, name: "Adidas Urban Classic", brand: "Adidas", price: 169900, sizes: [36,37,38,39,40,41,42,43], tag: "POPULAR", category: "Casual", image: 6, desc: "Un básico para tu colección." },
  { id: 8, name: "Adidas Street Pro", brand: "Adidas", price: 189900, sizes: [38,39,40,41,42,43,44], tag: "NUEVO", category: "Urbano", image: 7, desc: "Diseño moderno y versátil." },
  { id: 9, name: "Adidas Run Light", brand: "Adidas", price: 149900, sizes: [36,37,38,39,40,41,42], tag: "OFERTA", category: "Deportivo", image: 2, desc: "Comodidad para caminar o entrenar." },
  { id: 10, name: "Adidas Superstar Style", brand: "Adidas", price: 179900, sizes: [37,38,39,40,41,42,43,44], tag: "POPULAR", category: "Casual", image: 1, desc: "Un estilo clásico que nunca pasa." },
  { id: 11, name: "Puma Suede Urban", brand: "Puma", price: 149900, sizes: [36,37,38,39,40,41,42], tag: "OFERTA", category: "Casual", image: 3, desc: "Inspiración callejera y urbana." },
  { id: 12, name: "Puma Flyer Runner", brand: "Puma", price: 139900, sizes: [37,38,39,40,41,42,43], tag: "ECONÓMICO", category: "Deportivo", image: 5, desc: "Un par práctico para el día a día." },
  { id: 13, name: "Puma Street Rider", brand: "Puma", price: 169900, sizes: [38,39,40,41,42,43,44], tag: "NUEVO", category: "Urbano", image: 6, desc: "Diseño atrevido para destacar." },
  { id: 14, name: "Puma Court Classic", brand: "Puma", price: 154900, sizes: [36,37,38,39,40,41,42,43], tag: "POPULAR", category: "Casual", image: 7, desc: "Versátil, sencillo y cómodo." },
  { id: 15, name: "Converse Chuck High", brand: "Converse", price: 129900, sizes: [36,37,38,39,40,41,42,43], tag: "CLÁSICO", category: "Urbano", image: 4, desc: "Un clásico de la cultura urbana." },
  { id: 16, name: "Converse Low Street", brand: "Converse", price: 119900, sizes: [36,37,38,39,40,41,42], tag: "ECONÓMICO", category: "Casual", image: 1, desc: "Un estilo sencillo para combinar." },
  { id: 17, name: "Converse City Canvas", brand: "Converse", price: 124900, sizes: [36,37,38,39,40,41,42,43], tag: "OFERTA", category: "Casual", image: 3, desc: "Diseño urbano para cualquier plan." },
  { id: 18, name: "Converse Street High", brand: "Converse", price: 139900, sizes: [37,38,39,40,41,42,43], tag: "POPULAR", category: "Urbano", image: 6, desc: "Actitud y estilo en cada paso." },
  { id: 19, name: "New Balance Daily", brand: "New Balance", price: 179900, sizes: [37,38,39,40,41,42,43,44], tag: "POPULAR", category: "Casual", image: 2, desc: "Comodidad con inspiración deportiva." },
  { id: 20, name: "New Balance Run 01", brand: "New Balance", price: 189900, sizes: [38,39,40,41,42,43,44], tag: "NUEVO", category: "Deportivo", image: 5, desc: "Diseñados para acompañar tu ritmo." },
  { id: 21, name: "New Balance Street", brand: "New Balance", price: 199900, sizes: [37,38,39,40,41,42,43], tag: "URBANO", category: "Urbano", image: 7, desc: "Un look relajado y contemporáneo." },
  { id: 22, name: "New Balance Active", brand: "New Balance", price: 169900, sizes: [36,37,38,39,40,41,42], tag: "OFERTA", category: "Deportivo", image: 0, desc: "Comodidad para tus actividades." },
  { id: 23, name: "Reebok Classic Court", brand: "Reebok", price: 149900, sizes: [36,37,38,39,40,41,42,43], tag: "CLÁSICO", category: "Casual", image: 1, desc: "Un diseño retro para cualquier ocasión." },
  { id: 24, name: "Reebok Runner Lite", brand: "Reebok", price: 139900, sizes: [37,38,39,40,41,42,43], tag: "ECONÓMICO", category: "Deportivo", image: 5, desc: "Ligereza para tus recorridos." },
  { id: 25, name: "Reebok Street Flex", brand: "Reebok", price: 159900, sizes: [38,39,40,41,42,43,44], tag: "POPULAR", category: "Urbano", image: 6, desc: "Un toque deportivo para la calle." },
  { id: 26, name: "Jordan Low Essential", brand: "Jordan", price: 229900, sizes: [38,39,40,41,42,43,44], tag: "NUEVO", category: "Urbano", image: 7, desc: "Inspiración de baloncesto y calle." },
  { id: 27, name: "Nike Street Basic", brand: "Nike", price: 139900, sizes: [36,37,38,39,40,41,42], tag: "ECONÓMICO", category: "Casual", image: 4, desc: "Tu opción urbana para todos los días." },
  { id: 28, name: "Adidas Cloud Walk", brand: "Adidas", price: 159900, sizes: [37,38,39,40,41,42,43], tag: "OFERTA", category: "Deportivo", image: 0, desc: "Pensados para caminar con comodidad." },
  { id: 29, name: "Puma Everyday", brand: "Puma", price: 129900, sizes: [36,37,38,39,40,41,42], tag: "ECONÓMICO", category: "Casual", image: 3, desc: "Un par versátil a buen precio." },
  { id: 30, name: "Reebok Urban Classic", brand: "Reebok", price: 149900, sizes: [37,38,39,40,41,42,43], tag: "NUEVO", category: "Urbano", image: 2, desc: "Diseño clásico con espíritu urbano." }
];

const STORAGE_USERS = "snikerstech_demo_users";
let currentUser = null;
let cart = [];
let toastTimer;

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USERS) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function showMessage(element, message, error = false) {
  element.textContent = message;
  element.classList.toggle("error", error);
}

function showToast(message, error = false) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.toggle("error", error);
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function switchAuth(mode) {
  const isLogin = mode === "login";
  $("#loginForm").classList.toggle("hidden", !isLogin);
  $("#registerForm").classList.toggle("hidden", isLogin);
  $$(".auth-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.auth === mode));
  $("#authTitle").textContent = isLogin ? "¡Qué bueno verte!" : "Únete a la cultura.";
  $("#authSubtitle").textContent = isLogin
    ? "Inicia sesión y encuentra tu próximo par."
    : "Crea tu cuenta y empieza a explorar.";
  showMessage($("#authMessage"), "");
}

function enterStore(user) {
  currentUser = user;
  $("#authScreen").classList.add("hidden");
  $("#storeApp").classList.remove("hidden");
  $("#welcomeUser").textContent = `Hola, ${user.name.split(" ")[0]}`;
  $("#buyerName").value = user.name || "";
  $("#buyerEmail").value = user.email || "";
  renderProducts();
  updateCart();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function logout() {
  currentUser = null;
  cart = [];
  $("#storeApp").classList.add("hidden");
  $("#authScreen").classList.remove("hidden");
  $("#loginForm").reset();
  $("#registerForm").reset();
  switchAuth("login");
  updateCart();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProducts() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const brand = $("#brandFilter").value;
  const size = $("#sizeFilter").value;
  const sort = $("#sortFilter").value;

  let filtered = products.filter(product => {
    const matchesSearch = `${product.name} ${product.brand} ${product.category} ${product.desc}`.toLowerCase().includes(search);
    const matchesBrand = !brand || product.brand === brand;
    const matchesSize = !size || product.sizes.includes(Number(size));
    return matchesSearch && matchesBrand && matchesSize;
  });

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));

  $("#productCount").textContent = filtered.length;
  $("#activeFilters").textContent = [
    brand ? `Marca: ${brand}` : "",
    size ? `Talla: ${size}` : "",
    search ? `Búsqueda: "${search}"` : ""
  ].filter(Boolean).join("  ·  ");

  $("#emptyState").classList.toggle("hidden", filtered.length !== 0);
  $("#productsGrid").classList.toggle("hidden", filtered.length === 0);

  $("#productsGrid").innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-photo">
        <img src="${images[product.image]}" alt="${product.brand} ${product.name}" loading="lazy">
        <span class="product-badge">${product.tag}</span>
        <span class="product-brand">${product.brand}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.desc}</p>
        <div class="product-price-row">
          <span class="product-price">${money(product.price)}</span>
          <span class="product-price-note">COP</span>
        </div>
        <label class="product-size-label" for="size-${product.id}">Selecciona tu talla</label>
        <select class="product-size" id="size-${product.id}">
          ${product.sizes.map(sizeNumber => `<option value="${sizeNumber}">Talla ${sizeNumber}</option>`).join("")}
        </select>
        <button class="add-to-cart" type="button" data-add="${product.id}">＋ AGREGAR AL CARRITO</button>
      </div>
    </article>
  `).join("");

  $("#productsGrid").querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.src = photo("photo-1542291026-7eec264c27ff");
    }, { once: true });
  });
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const sizeSelect = $(`#size-${productId}`);
  if (!product || !sizeSelect) return;

  const size = Number(sizeSelect.value);
  const existing = cart.find(item => item.id === productId && item.size === size);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, size, quantity: 1 });
  }

  updateCart();
  showToast(`${product.name}, talla ${size}, agregado al carrito.`);
}

function subtotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function shippingCost() {
  if (cart.length === 0) return 0;
  return subtotal() >= 300000 ? 0 : 12000;
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = totalItems;
  $("#cartItems").innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return "";
    return `
      <div class="cart-row">
        <img src="${images[product.image]}" alt="${product.name}">
        <div>
          <h4>${product.name}</h4>
          <p>${product.brand} · Talla ${item.size}</p>
          <div class="cart-row-actions">
            <button class="qty-btn" type="button" data-qty="-1" data-id="${item.id}" data-size="${item.size}" aria-label="Reducir cantidad">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" type="button" data-qty="1" data-id="${item.id}" data-size="${item.size}" aria-label="Aumentar cantidad">+</button>
            <button class="remove-item" type="button" data-remove="${item.id}" data-size="${item.size}">Eliminar</button>
          </div>
        </div>
        <span class="cart-price">${money(product.price * item.quantity)}</span>
      </div>
    `;
  }).join("");

  const empty = cart.length === 0;
  $("#cartEmpty").classList.toggle("hidden", !empty);
  $("#cartSummary").classList.toggle("hidden", empty);
  $("#cartSubtotal").textContent = money(subtotal());
  $("#cartShipping").textContent = shippingCost() === 0 && !empty ? "GRATIS" : money(shippingCost());
  $("#cartTotal").textContent = money(subtotal() + shippingCost());

  $("#cartItems").querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => img.src = photo("photo-1542291026-7eec264c27ff"), { once: true });
  });
}

function openModal(id) {
  $(`#${id}`).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  $(`#${id}`).classList.add("hidden");
  if ($$(".modal:not(.hidden)").length === 0) document.body.style.overflow = "";
}

function renderCheckoutSummary() {
  $("#checkoutItems").innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return "";
    return `
      <div class="checkout-item">
        <img src="${images[product.image]}" alt="${product.name}">
        <div><strong>${product.name}</strong><span>Talla ${item.size} · Cantidad ${item.quantity}</span><span>${money(product.price * item.quantity)}</span></div>
      </div>
    `;
  }).join("");

  const shipping = shippingCost();
  const total = subtotal() + shipping;
  $("#checkoutSubtotal").textContent = money(subtotal());
  $("#checkoutShipping").textContent = shipping === 0 ? "GRATIS" : money(shipping);
  $("#checkoutTotal").textContent = money(total);
  $("#checkoutButtonTotal").textContent = money(total);
}

function updatePaymentExtra() {
  const method = $('input[name="paymentMethod"]:checked')?.value || "";
  const container = $("#paymentExtra");

  if (method === "Tarjeta de crédito o débito") {
    container.innerHTML = `
      <p class="form-note">Demostración únicamente. No escribas los datos de una tarjeta real.</p>
      <label>Nombre que aparecería en la tarjeta
        <input id="demoCardName" placeholder="NOMBRE DE PRUEBA" autocomplete="off">
      </label>
      <label>Número ficticio de tarjeta
        <input id="demoCardNumber" inputmode="numeric" maxlength="19" placeholder="0000 0000 0000 0000" autocomplete="off">
      </label>
      <div class="form-grid">
        <label>Vencimiento de prueba<input id="demoCardExpiry" placeholder="MM/AA" maxlength="5" autocomplete="off"></label>
        <label>Código de prueba<input id="demoCardCvv" inputmode="numeric" maxlength="4" placeholder="000" autocomplete="off"></label>
      </div>
    `;
    container.classList.remove("hidden");
  } else if (method === "PSE") {
    container.innerHTML = `
      <label>Banco de demostración
        <select id="demoBank"><option value="">Selecciona un banco</option><option>Bancolombia (simulación)</option><option>Banco de Bogotá (simulación)</option><option>Davivienda (simulación)</option><option>Otro banco (simulación)</option></select>
      </label>
      <p class="form-note">No se abrirá una pasarela bancaria real.</p>
    `;
    container.classList.remove("hidden");
  } else if (method === "Nequi" || method === "Daviplata") {
    container.innerHTML = `
      <label>Número de contacto de prueba
        <input id="demoWalletPhone" inputmode="numeric" maxlength="10" placeholder="Ej. 3000000000" autocomplete="off">
      </label>
      <p class="form-note">Usa un número ficticio. Esta página no enviará solicitudes de cobro.</p>
    `;
    container.classList.remove("hidden");
  } else if (method === "Contraentrega") {
    container.innerHTML = `<p class="form-note">Has seleccionado pago contraentrega. En una tienda real, la disponibilidad y las condiciones deben confirmarse con el vendedor.</p>`;
    container.classList.remove("hidden");
  } else {
    container.innerHTML = "";
    container.classList.add("hidden");
  }
}

function validateDemoPayment(method) {
  if (method === "Tarjeta de crédito o débito") {
    const name = $("#demoCardName")?.value.trim();
    const number = $("#demoCardNumber")?.value.replace(/\s/g, "");
    const expiry = $("#demoCardExpiry")?.value.trim();
    const cvv = $("#demoCardCvv")?.value.trim();

    if (!name || !number || !expiry || !cvv) {
      showMessage($("#checkoutMessage"), "Completa los campos ficticios de demostración de tarjeta.", true);
      return false;
    }
    if (!/^[0-9]{12,19}$/.test(number) || !/^[0-9]{2}\/[0-9]{2}$/.test(expiry) || !/^[0-9]{3,4}$/.test(cvv)) {
      showMessage($("#checkoutMessage"), "Usa datos de prueba con el formato indicado; no ingreses datos bancarios reales.", true);
      return false;
    }
  }

  if (method === "PSE" && !$("#demoBank")?.value) {
    showMessage($("#checkoutMessage"), "Selecciona un banco de demostración.", true);
    return false;
  }

  if ((method === "Nequi" || method === "Daviplata") &&
      !/^[0-9]{10}$/.test($("#demoWalletPhone")?.value.trim() || "")) {
    showMessage($("#checkoutMessage"), "Escribe un número ficticio de 10 dígitos para continuar.", true);
    return false;
  }

  return true;
}

/* Eventos del registro e inicio de sesión */
$$(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => switchAuth(tab.dataset.auth));
});

$("#registerForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#registerName").value.trim();
  const email = $("#registerEmail").value.trim().toLowerCase();
  const password = $("#registerPassword").value;

  if (name.length < 2) {
    showMessage($("#authMessage"), "Escribe tu nombre completo.", true);
    return;
  }
  if (password.length < 6) {
    showMessage($("#authMessage"), "La contraseña debe tener al menos 6 caracteres.", true);
    return;
  }

  const users = getUsers();
  if (users.some(user => user.email === email)) {
    showMessage($("#authMessage"), "Ese correo ya tiene una cuenta. Inicia sesión.", true);
    return;
  }

  // Solo para la demostración local: no usar este sistema para cuentas reales.
  users.push({ name, email, password });
  saveUsers(users);
  $("#registerForm").reset();
  enterStore({ name, email });
  showToast("¡Cuenta de demostración creada!");
});

$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = $("#loginEmail").value.trim().toLowerCase();
  const password = $("#loginPassword").value;
  const user = getUsers().find(item => item.email === email && item.password === password);

  if (!user) {
    showMessage($("#authMessage"), "Correo o contraseña incorrectos. Revisa tus datos o crea una cuenta.", true);
    return;
  }

  enterStore(user);
  showToast("¡Sesión iniciada correctamente!");
});

$("#logoutButton").addEventListener("click", logout);

/* Catálogo, filtros y carrito */
$("#searchInput").addEventListener("input", renderProducts);
$("#brandFilter").addEventListener("change", renderProducts);
$("#sizeFilter").addEventListener("change", renderProducts);
$("#sortFilter").addEventListener("change", renderProducts);

$("#clearFilters").addEventListener("click", () => {
  $("#searchInput").value = "";
  $("#brandFilter").value = "";
  $("#sizeFilter").value = "";
  $("#sortFilter").value = "featured";
  renderProducts();
});

$("#productsGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

$("#cartButton").addEventListener("click", () => {
  updateCart();
  openModal("cartModal");
});

$("#cartItems").addEventListener("click", event => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");

  if (qtyButton) {
    const id = Number(qtyButton.dataset.id);
    const size = Number(qtyButton.dataset.size);
    const item = cart.find(entry => entry.id === id && entry.size === size);
    if (!item) return;

    item.quantity += Number(qtyButton.dataset.qty);
    if (item.quantity <= 0) cart = cart.filter(entry => entry !== item);
    updateCart();
  }

  if (removeButton) {
    const id = Number(removeButton.dataset.remove);
    const size = Number(removeButton.dataset.size);
    cart = cart.filter(item => !(item.id === id && item.size === size));
    updateCart();
    showToast("Producto eliminado del carrito.");
  }
});

$("#checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Agrega al menos un par de tenis.", true);
    return;
  }

  closeModal("cartModal");
  $("#checkoutForm").reset();
  $("#buyerName").value = currentUser?.name || "";
  $("#buyerEmail").value = currentUser?.email || "";
  $("#paymentExtra").innerHTML = "";
  $("#paymentExtra").classList.add("hidden");
  showMessage($("#checkoutMessage"), "");
  renderCheckoutSummary();
  openModal("checkoutModal");
});

$$('input[name="paymentMethod"]').forEach(input => {
  input.addEventListener("change", updatePaymentExtra);
});

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  showMessage($("#checkoutMessage"), "");

  if (cart.length === 0) {
    showMessage($("#checkoutMessage"), "Tu carrito está vacío.", true);
    return;
  }

  const postalCode = $("#postalCode").value.trim();
  if (!/^[0-9]{6}$/.test(postalCode)) {
    showMessage($("#checkoutMessage"), "El código postal debe tener 6 dígitos.", true);
    $("#postalCode").focus();
    return;
  }

  const method = $('input[name="paymentMethod"]:checked')?.value;
  if (!method) {
    showMessage($("#checkoutMessage"), "Selecciona un método de pago.", true);
    return;
  }

  if (!validateDemoPayment(method)) return;

  const orderNumber = "ST-" + Date.now().toString().slice(-8);
  const orderTotal = subtotal() + shippingCost();
  const customerName = $("#buyerName").value.trim();

  $("#successDetails").innerHTML = `
    <p><span>Número de pedido</span><strong>${orderNumber}</strong></p>
    <p><span>Cliente</span><strong>${escapeHTML(customerName)}</strong></p>
    <p><span>Ciudad</span><strong>${escapeHTML($("#city").value.trim())}</strong></p>
    <p><span>Código postal</span><strong>${escapeHTML(postalCode)}</strong></p>
    <p><span>Forma de pago</span><strong>${escapeHTML(method)}</strong></p>
    <p><span>Total del pedido</span><strong>${money(orderTotal)}</strong></p>
  `;

  closeModal("checkoutModal");
  openModal("successModal");
  cart = [];
  updateCart();
});

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

$("#finishOrderButton").addEventListener("click", () => {
  closeModal("successModal");
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("¡Gracias por visitar SNIKERSTECH!");
});

$$("[data-close]").forEach(button => {
  button.addEventListener("click", () => closeModal(button.dataset.close));
});

$$(".modal").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal(modal.id);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    $$(".modal:not(.hidden)").forEach(modal => closeModal(modal.id));
  }
});

/* Inicio */
renderProducts();
updateCart();
