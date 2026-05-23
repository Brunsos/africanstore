const Cart = (() => {
  const KEY = 'ccio_cart_v1';
  const listeners = new Set();

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  }
  function write(c) {
    localStorage.setItem(KEY, JSON.stringify(c));
    listeners.forEach(fn => fn(c));
  }

  function get() { return read(); }
  function count() { return Object.values(read()).reduce((s,i) => s + i.qty, 0); }
  function subtotal() { return Object.values(read()).reduce((s,i) => s + i.price * i.qty, 0); }
  function clear() { write({}); }

  function add(id) {
    const c = read();
    const p = (typeof PRODUCTS !== 'undefined') && PRODUCTS.find(x => x.id === id);
    if (!p) return;
    if (!c[id]) c[id] = { ...p, qty: 0 };
    c[id].qty++;
    write(c);
  }

  function changeQty(id, delta) {
    const c = read();
    if (!c[id]) return;
    c[id].qty += delta;
    if (c[id].qty <= 0) delete c[id];
    write(c);
  }

  function remove(id) {
    const c = read();
    delete c[id];
    write(c);
  }

  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  // cross-tab sync
  window.addEventListener('storage', e => {
    if (e.key === KEY) listeners.forEach(fn => fn(read()));
  });

  return { get, count, subtotal, clear, add, changeQty, remove, subscribe };
})();
