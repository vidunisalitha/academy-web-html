async function renderHero() {
    const res = await fetch('./data.json');
    const data = await res.json();

    //title
    document.title = data.hero.title;

    // colors
    document.documentElement.style.setProperty('--bg-dark', data.theme.primary);
    document.documentElement.style.setProperty('--gold', data.theme.secondary);

    // nav
    document.getElementById('logo-text').innerText = data.nav.logo;
    document.getElementById('nav-btn').innerText = data.nav.brochure;
    
    // hero
    document.getElementById('hero-badge').innerText = data.hero.welcome;
    document.getElementById('hero-title').innerText = data.hero.title;
    document.getElementById('hero-subtitle').innerText = data.hero.subtitle;
    document.getElementById('hero-btn1').innerText = data.hero.btn1;
    document.getElementById('hero-btn2').innerText = data.hero.btn2;
}

renderHero();