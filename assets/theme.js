(function(){
  function getIsDark() {
    var theme = document.documentElement.dataset.theme;
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme || '';
    localStorage.setItem('theme', theme || '');
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var isDark = theme === 'dark' || (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
    btn.setAttribute('title', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
  }
  function toggle() {
    var isDark = getIsDark();
    applyTheme(isDark ? 'light' : 'dark');
  }
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
    applyTheme(document.documentElement.dataset.theme || null);
  });
})();
