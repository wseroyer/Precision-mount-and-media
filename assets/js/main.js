(function () {
  'use strict';

  /* ── Quote form → mailto ───────────────────────────────────── */
  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name    = (document.getElementById('name')    || {}).value || '';
      var phone   = (document.getElementById('phone')   || {}).value || '';
      var tvsize  = (document.getElementById('tvsize')  || {}).value || '';
      var address = (document.getElementById('address') || {}).value || '';
      var details = (document.getElementById('details') || {}).value || '';

      var body = [
        'Name: '    + name,
        'Phone: '   + phone,
        'TV size: ' + tvsize,
        'Area: '    + address,
        '',
        'Details:',
        details
      ].join('\n');

      window.location.href =
        'mailto:wseroyer@gmail.com'
        + '?subject=' + encodeURIComponent('TV Mounting Quote Request — ' + name)
        + '&body='    + encodeURIComponent(body);
    });
  }

  /* ── Header scroll class ──────────────────────────────────── */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── FAQ accordion ──────────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item   = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      /* close all */
      document.querySelectorAll('.faq-item.open').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      /* open clicked (unless it was already open) */
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

}());
