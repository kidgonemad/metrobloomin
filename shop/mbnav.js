// Shared Metro Bloomin menu: round frosted "•••" button that opens a frosted pill of links.
// Used by the shop overlay and the videos app so all three parts navigate the same way.
// MBNav.create({ items:[{label, href | onClick, current}], align:'left'|'right' }) -> element
(function () {
  function create(opts) {
    var wrap = document.createElement('div');
    wrap.className = 'mbn mbn--' + (opts.align || 'right');
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'mbn__btn';
    btn.setAttribute('aria-label', 'Menu'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    var pill = document.createElement('nav');
    pill.className = 'mbn__pill'; pill.setAttribute('aria-label', 'Metro Bloomin');
    (opts.items || []).forEach(function (it) {
      var a = document.createElement('a');
      a.textContent = it.label; a.href = it.href || '#';
      if (it.current) { a.className = 'is-current'; a.setAttribute('aria-current', 'page'); }
      a.addEventListener('click', function (e) {
        if (it.onClick) { e.preventDefault(); set(false); it.onClick(e); }
        else if (it.current && !it.href) { e.preventDefault(); set(false); }
      });
      pill.appendChild(a);
    });
    wrap.appendChild(opts.align === 'left' ? btn : pill);
    wrap.appendChild(opts.align === 'left' ? pill : btn);
    function set(open) {
      wrap.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open));
      if (opts.onToggle) opts.onToggle(open);
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(!wrap.classList.contains('is-open')); });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) set(false); });
    wrap.mbnClose = function () { set(false); };
    return wrap;
  }
  window.MBNav = { create: create };
})();
