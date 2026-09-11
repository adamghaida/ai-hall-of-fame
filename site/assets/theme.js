(function () {
  var root = document.documentElement, btn = document.getElementById('themebtn');
  function current() { return root.getAttribute('data-theme') || 'light'; }
  function apply(t) { root.setAttribute('data-theme', t); try { localStorage.setItem('hof-theme', t); } catch (e) {} if (btn) { btn.setAttribute('aria-pressed', String(t === 'dark')); btn.title = t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'; } }
  if (btn) { btn.addEventListener('click', function () { apply(current() === 'dark' ? 'light' : 'dark'); }); btn.setAttribute('aria-pressed', String(current() === 'dark')); }
})();
