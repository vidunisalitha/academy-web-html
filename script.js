async function renderHero() {
    const res = await fetch('./data.json');
    const data = await res.json();

    // page title
    document.title = data.page.title;

    // theme colors
    document.documentElement.style.setProperty('--bg-top', data.theme.backgroundTop);
    document.documentElement.style.setProperty('--bg-mid', data.theme.backgroundMid);
    document.documentElement.style.setProperty('--bg-bottom', data.theme.backgroundBottom);
    document.documentElement.style.setProperty('--gold', data.theme.gold);
    document.documentElement.style.setProperty('--white', data.theme.textWhite);
    document.documentElement.style.setProperty('--soft', data.theme.textSoft);

    // nav
    document.getElementById('logo-mark').innerText = data.nav.logoMark;
    document.getElementById('logo-text').innerText = data.nav.logo;
    document.getElementById('nav-btn').innerText = data.nav.button;

    const navList = document.getElementById('nav-links');
    navList.innerHTML = '';

    let i = 0;
    while (i < data.nav.links.length) {
        const item = document.createElement('li');
        item.classList.add('nav-item');

        const link = document.createElement('a');
        link.href = '#';
        link.innerText = data.nav.links[i];

        if (data.nav.links[i] === 'Academics') {
            item.classList.add('has-dropdown');
            link.classList.add('has-caret');

            const dropdown = document.createElement('ul');
            dropdown.classList.add('dropdown-menu');

            let j = 0;
            while (j < data.nav.academicsDropdown.length) {
                const dropdownItem = document.createElement('li');
                const dropdownLink = document.createElement('a');

                dropdownLink.href = '#';
                dropdownLink.innerText = data.nav.academicsDropdown[j];

                dropdownItem.appendChild(dropdownLink);
                dropdown.appendChild(dropdownItem);
                j = j + 1;
            }

            item.appendChild(link);
            item.appendChild(dropdown);
        } else {
            item.appendChild(link);
        }

        navList.appendChild(item);
        i = i + 1;
    }

    // hero content
    document.getElementById('hero-badge').innerText = data.hero.welcome;
    document.getElementById('hero-title').innerText = data.hero.title;
    document.getElementById('hero-subtitle').innerText = data.hero.subtitle;
    document.getElementById('hero-btn1').innerText = data.hero.primaryButton;
    document.getElementById('hero-btn2').innerText = data.hero.secondaryButton;

    // stats cards
    renderStatsCards(data.stats.cards);

    // message section
    renderMessageSection(data.message, data.floatingButton);

    // news section
    renderNewsSection(data.news);

    // journey section
    renderJourneySection(data.journey);

    // journey card pop animation
    setupJourneyCardAnimations();

    // facilities section
    renderFacilitiesSection(data.facilities);

    // section reveal animations
    setupSectionAnimations();

    // navbar scroll effect
    setupNavbarScrollEffect();
}

function setupSectionAnimations() {
    const sections = document.querySelectorAll('section');

    let i = 0;
    while (i < sections.length) {
        sections[i].classList.add('reveal-section');
        i = i + 1;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            let j = 0;
            while (j < entries.length) {
                if (entries[j].isIntersecting) {
                    entries[j].target.classList.add('is-visible');
                }
                j = j + 1;
            }
        },
        {
            threshold: 0.16
        }
    );

    let k = 0;
    while (k < sections.length) {
        observer.observe(sections[k]);
        k = k + 1;
    }

    if (sections.length > 0) {
        sections[0].classList.add('is-visible');
    }
}

function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');

    function updateNavbarScrollState() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    updateNavbarScrollState();
    window.addEventListener('scroll', updateNavbarScrollState);
}

function formatNumber(value) {
    return value.toLocaleString();
}

function animateRollingNumber(numberElement, suffixElement, targetValue, suffixText) {
    let startValue = targetValue + Math.floor(targetValue * 0.35) + 20;

    if (startValue < targetValue + 10) {
        startValue = targetValue + 10;
    }

    let currentValue = startValue;
    let steps = 90;
    let stepSize = Math.ceil((startValue - targetValue) / steps);

    if (stepSize < 1) {
        stepSize = 1;
    }

    numberElement.innerText = formatNumber(currentValue);
    suffixElement.innerText = '';

    const timer = setInterval(function () {
        currentValue = currentValue - stepSize;

        if (currentValue <= targetValue) {
            currentValue = targetValue;
        }

        numberElement.innerText = formatNumber(currentValue);

        if (currentValue === targetValue) {
            suffixElement.innerText = suffixText;
            clearInterval(timer);
        }
    }, 38);
}

function renderStatsCards(cards) {
    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = '';

    let i = 0;
    while (i < cards.length) {
        const cardData = cards[i];

        const card = document.createElement('article');
        card.classList.add('stats-card');

        const iconWrap = document.createElement('div');
        iconWrap.classList.add('stats-icon-wrap');

        const icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add(cardData.iconClass);
        icon.classList.add('stats-icon');
        iconWrap.appendChild(icon);

        const valueLine = document.createElement('div');
        valueLine.classList.add('stats-value-line');

        const numberElement = document.createElement('span');
        numberElement.classList.add('stats-number');

        const suffixElement = document.createElement('span');
        suffixElement.classList.add('stats-suffix');

        valueLine.appendChild(numberElement);
        valueLine.appendChild(suffixElement);

        const label = document.createElement('p');
        label.classList.add('stats-label');
        label.innerText = cardData.label;

        card.appendChild(iconWrap);
        card.appendChild(valueLine);
        card.appendChild(label);
        statsGrid.appendChild(card);

        animateRollingNumber(numberElement, suffixElement, cardData.value, cardData.suffix);
        i = i + 1;
    }
}

function renderMessageSection(messageData, floatingButtonData) {
    document.getElementById('message-kicker').innerText = messageData.kicker;
    document.getElementById('message-title-main').innerText = messageData.titleMain;
    document.getElementById('message-title-accent').innerText = messageData.titleAccent;
    document.getElementById('message-quote').innerText = messageData.quote;
    document.getElementById('message-name').innerText = messageData.name;
    document.getElementById('message-role').innerText = messageData.role;
    document.getElementById('message-btn').innerText = messageData.button;
    document.getElementById('message-image').src = messageData.image;

    const toTopButton = document.getElementById('to-top-btn');
    toTopButton.setAttribute('aria-label', floatingButtonData.ariaLabel);

    toTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function renderNewsSection(newsData) {
    document.getElementById('news-kicker').innerText = newsData.kicker;
    document.getElementById('news-title').innerText = newsData.title;
    document.getElementById('news-view-btn').innerText = newsData.viewAllButton;

    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = '';

    let i = 0;
    while (i < newsData.cards.length) {
        const cardData = newsData.cards[i];

        const card = document.createElement('article');
        card.classList.add('news-card');

        const imageWrap = document.createElement('div');
        imageWrap.classList.add('news-image-wrap');

        const image = document.createElement('img');
        image.classList.add('news-image');
        image.src = cardData.image;
        image.alt = cardData.title;

        const category = document.createElement('span');
        category.classList.add('news-category');
        category.innerText = cardData.category;

        imageWrap.appendChild(image);
        imageWrap.appendChild(category);

        const body = document.createElement('div');
        body.classList.add('news-card-body');

        const dateLine = document.createElement('p');
        dateLine.classList.add('news-date');

        const dateIcon = document.createElement('i');
        dateIcon.classList.add('bi');
        dateIcon.classList.add('bi-calendar3');

        const dateText = document.createElement('span');
        dateText.innerText = cardData.date;

        dateLine.appendChild(dateIcon);
        dateLine.appendChild(dateText);

        const title = document.createElement('h3');
        title.classList.add('news-card-title');
        title.innerText = cardData.title;

        const description = document.createElement('p');
        description.classList.add('news-description');
        description.innerText = cardData.description;

        const link = document.createElement('a');
        link.classList.add('news-link');
        link.href = '#';
        link.innerText = cardData.linkText + '  ->';

        body.appendChild(dateLine);
        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(link);

        card.appendChild(imageWrap);
        card.appendChild(body);
        newsGrid.appendChild(card);

        i = i + 1;
    }
}

function renderJourneySection(journeyData) {
    document.getElementById('journey-kicker').innerText = journeyData.kicker;
    document.getElementById('journey-title').innerText = journeyData.title;

    const timeline = document.getElementById('journey-timeline');
    timeline.innerHTML = '';

    let i = 0;
    while (i < journeyData.events.length) {
        const eventData = journeyData.events[i];

        const item = document.createElement('article');
        item.classList.add('journey-item');

        if (i % 2 === 0) {
            item.classList.add('journey-right');
        } else {
            item.classList.add('journey-left');
        }

        const card = document.createElement('div');
        card.classList.add('journey-card');

        const year = document.createElement('span');
        year.classList.add('journey-year');
        year.innerText = eventData.year;

        const title = document.createElement('h3');
        title.classList.add('journey-card-title');
        title.innerText = eventData.title;

        const description = document.createElement('p');
        description.classList.add('journey-card-description');
        description.innerText = eventData.description;

        const dot = document.createElement('span');
        dot.classList.add('journey-dot');

        card.appendChild(year);
        card.appendChild(title);
        card.appendChild(description);
        item.appendChild(card);
        item.appendChild(dot);
        timeline.appendChild(item);

        i = i + 1;
    }
}

function setupJourneyCardAnimations() {
    const items = document.querySelectorAll('.journey-item');

    let i = 0;
    while (i < items.length) {
        items[i].classList.add('journey-pop-hidden');
        i = i + 1;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            let j = 0;
            while (j < entries.length) {
                if (entries[j].isIntersecting) {
                    entries[j].target.classList.remove('journey-pop-hidden');
                    entries[j].target.classList.add('journey-pop-visible');
                    observer.unobserve(entries[j].target);
                }
                j = j + 1;
            }
        },
        {
            threshold: 0.25
        }
    );

    let k = 0;
    while (k < items.length) {
        observer.observe(items[k]);
        k = k + 1;
    }
}

function renderFacilitiesSection(facilitiesData) {
    document.getElementById('facilities-kicker').innerText = facilitiesData.kicker;
    document.getElementById('facilities-title').innerText = facilitiesData.title;

    const facilitiesGrid = document.getElementById('facilities-grid');
    facilitiesGrid.innerHTML = '';

    let i = 0;
    while (i < facilitiesData.cards.length) {
        const cardData = facilitiesData.cards[i];

        const card = document.createElement('article');
        card.classList.add('facility-card');
        card.classList.add('facility-' + cardData.slot);

        const image = document.createElement('img');
        image.classList.add('facility-image');
        image.src = cardData.image;
        image.alt = cardData.title;

        const title = document.createElement('h3');
        title.classList.add('facility-title');
        title.innerText = cardData.title;

        card.appendChild(image);
        card.appendChild(title);
        facilitiesGrid.appendChild(card);

        i = i + 1;
    }
}

renderHero();