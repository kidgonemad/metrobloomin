// The one Metro Bloomin menu, used on every view (about / shop / videos).
// Round "•••" button; tap -> the dots turn into ✕ and a pill of links grows out of it toward the centre.
//
// var nav = MBNav.create({ items:[{label, href?, onClick?}], current:'about', tone:'light', onToggle:fn })
//   nav.setCurrent(label)  underline the current view
//   nav.setTone('light'|'dark')  light = white circle, dark text; dark = black circle, white text
//   nav.close()
(function () {
  function create(opts) {
    var wrap = document.createElement('div');
    wrap.className = 'mbn';
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'mbn__btn';
    btn.setAttribute('aria-label', 'Menu'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    var pill = document.createElement('nav');
    pill.className = 'mbn__pill'; pill.setAttribute('aria-label', 'Metro Bloomin');
    var links = {};
    (opts.items || []).forEach(function (it) {
      var a = document.createElement('a');
      a.textContent = it.label; a.href = it.href || '#';
      a.addEventListener('click', function (e) {
        if (it.onClick) { e.preventDefault(); set(false); it.onClick(e); }
        else if (!it.href) { e.preventDefault(); set(false); }
      });
      links[it.label] = a;
      pill.appendChild(a);
    });
    wrap.appendChild(pill); wrap.appendChild(btn);

    function set(open) {
      wrap.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open));
      if (opts.onToggle) opts.onToggle(open);
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(!wrap.classList.contains('is-open')); });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) set(false); });

    wrap.setCurrent = function (label) {
      Object.keys(links).forEach(function (k) {
        var on = k === label; links[k].classList.toggle('is-current', on);
        if (on) links[k].setAttribute('aria-current', 'page'); else links[k].removeAttribute('aria-current');
      });
    };
    wrap.setTone = function (t) { wrap.setAttribute('data-tone', t === 'dark' ? 'dark' : 'light'); };
    wrap.close = function () { set(false); };
    wrap.setTone(opts.tone || 'light');
    if (opts.current) wrap.setCurrent(opts.current);
    return wrap;
  }
  window.MBNav = { create: create };
})();
