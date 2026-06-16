/* ============================================================
   Standard Hill School – Shared JavaScript (Merged v2)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ===== HAMBURGER / MOBILE NAV =====
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  var closeNav  = document.getElementById('closeNav');

  function openMenu() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (hamburger) {
    hamburger.addEventListener('click', openMenu);
    hamburger.addEventListener('keydown', function(e){ if(e.key==='Enter') openMenu(); });
  }
  if (closeNav) {
    closeNav.addEventListener('click', closeMenu);
    closeNav.addEventListener('keydown', function(e){ if(e.key==='Enter') closeMenu(); });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  }
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });


  // ===== ACTIVE NAV LINK =====
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mobile-nav a').forEach(function(link){
    var href = (link.getAttribute('href') || '').split('/').pop();
    if (href && href === currentPage) link.classList.add('active');
  });


  // ===== SCROLL REVEAL (.reveal) =====
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var ro = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el){ ro.observe(el); });
  }


  // ===== LEGACY FADE-UP (.fade-up) =====
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    var fo = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    fadeEls.forEach(function(el){ fo.observe(el); });
    setTimeout(function(){
      fadeEls.forEach(function(el){ el.classList.add('visible'); });
    }, 200);
  }


  // ===== ANIMATED COUNTER UTILITY =====
  function animateCount(el, target, suffix) {
    suffix = suffix || '';
    var start = null;
    var duration = 1800;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  // Hero stat cards – animate on load
  setTimeout(function(){
    document.querySelectorAll('.stat-card .num[data-count]').forEach(function(el){
      animateCount(el, parseInt(el.dataset.count), '+');
    });
  }, 800);

  // Counter strip – animate on scroll into view
  var counterEls = document.querySelectorAll('.counter-number[data-target]');
  if (counterEls.length) {
    var co = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = '1';
          animateCount(entry.target, parseInt(entry.target.dataset.target), '+');
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(function(el){ co.observe(el); });
  }


  // ===== SCROLL TO TOP =====
  var scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function(){
      if (window.scrollY > 400) scrollTopBtn.classList.add('visible');
      else scrollTopBtn.classList.remove('visible');
    });
    scrollTopBtn.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    scrollTopBtn.addEventListener('keydown', function(e){
      if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ===== STICKY HEADER SHADOW =====
  var headerEl = document.querySelector('header');
  if (headerEl) {
    window.addEventListener('scroll', function(){
      headerEl.style.boxShadow = window.scrollY > 20
        ? '0 4px 30px rgba(10,26,58,0.12)'
        : '0 2px 20px rgba(10,26,58,0.06)';
    });
  }

});
