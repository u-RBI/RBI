// <site-header active="blog|tags|none">
// Native Web Component — no shadow DOM so global CSS applies directly.
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';

    this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <div class="header-inner">
            <a href="/" class="site-logo" aria-label="RBI Studios home">
              <img src="/public/logo.png" alt="RBI Studios" />
            </a>
            <nav class="site-nav" aria-label="Primary navigation">
              <a href="/blog/" class="nav-link${active === 'blog' ? ' active' : ''}">dev logs</a>
              <a href="/tags/" class="nav-link${active === 'tags' ? ' active' : ''}">tags</a>
            </nav>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
