class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    this.innerHTML = `
      <header class="site-header">
        <div class="container"><div class="header-inner">
          <a href="/" class="site-logo" aria-label="RBI Studios home"><img src="/public/logo.png" alt="RBI Studios" /></a>
          <nav class="site-nav" aria-label="Primary navigation">
            <a href="/blog/" class="nav-link${active === 'blog' ? ' active' : ''}">Dev logs</a>
            <a href="https://playstrikeking.com" class="nav-link nav-link--strike">Strike King ↗</a>
          </nav>
        </div></div>
      </header>`;
  }
}
customElements.define('site-header', SiteHeader);
