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

    // Add click handler to nav button
    document.getElementById('nav-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.getElementById('contact-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });

    const navList = document.getElementById('nav-links');
    navList.innerHTML = '';

    let i = 0;
    while (i < data.nav.links.length) {
        const linkData = data.nav.links[i];
        const item = document.createElement('li');
        item.classList.add('nav-item');

        const link = document.createElement('a');
        link.href = '#';
        link.innerText = linkData.text;

        if (linkData.text === 'Academics') {
            item.classList.add('has-dropdown');
            link.classList.add('has-caret');

            const dropdown = document.createElement('ul');
            dropdown.classList.add('dropdown-menu');

            let j = 0;
            while (j < data.nav.academicsDropdown.length) {
                const dropdownData = data.nav.academicsDropdown[j];
                const dropdownItem = document.createElement('li');
                const dropdownLink = document.createElement('a');

                dropdownLink.href = '#';
                dropdownLink.innerText = dropdownData.text;

                if (dropdownData.sectionId) {
                    dropdownLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        const section = document.getElementById(dropdownData.sectionId);
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                }

                dropdownItem.appendChild(dropdownLink);
                dropdown.appendChild(dropdownItem);
                j = j + 1;
            }

            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (linkData.sectionId) {
                    const section = document.getElementById(linkData.sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });

            item.appendChild(link);
            item.appendChild(dropdown);
        } else {
            if (linkData.sectionId) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const section = document.getElementById(linkData.sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
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

    // Add click handler to hero button 1 (Request Brochure)
    document.getElementById('hero-btn1').addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.getElementById('contact-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // stats cards
    renderStatsCards(data.stats.cards);

    // message section
    renderMessageSection(data.message, data.floatingButton);

    // news section
    renderNewsSection(data.news);

    // pathways section
    renderPathwaysSection(data.pathways);

    // tuition section
    renderTuitionSection(data.tuition);

    // faculty section
    renderFacultySection(data.faculty);

    // contact section
    renderContactSection(data.contact);

    // journey section
    renderJourneySection(data.journey);

    // journey card pop animation
    setupJourneyCardAnimations();

    // facilities section
    renderFacilitiesSection(data.facilities);

    // footer section
    renderFooterSection(data.footer);

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

function renderPathwaysSection(pathwaysData) {
    document.getElementById('pathways-kicker').innerText = pathwaysData.kicker;
    document.getElementById('pathways-title').innerText = pathwaysData.title;

    const pathwaysGrid = document.getElementById('pathways-grid');
    pathwaysGrid.innerHTML = '';

    let i = 0;
    while (i < pathwaysData.cards.length) {
        const cardData = pathwaysData.cards[i];

        const card = document.createElement('article');
        card.classList.add('pathways-card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('pathways-card-inner');

        // Front side
        const frontSide = document.createElement('div');
        frontSide.classList.add('pathways-card-front');

        const iconWrap = document.createElement('div');
        iconWrap.classList.add('pathways-icon-wrap');

        const icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add(cardData.iconClass);
        icon.classList.add('pathways-icon');
        iconWrap.appendChild(icon);

        const title = document.createElement('h3');
        title.classList.add('pathways-card-title');
        title.innerText = cardData.title;

        const grades = document.createElement('div');
        grades.classList.add('pathways-card-grades');
        grades.innerText = cardData.grades;

        const description = document.createElement('p');
        description.classList.add('pathways-card-description');
        description.innerText = cardData.description;

        const button = document.createElement('button');
        button.classList.add('pathways-card-btn');
        button.type = 'button';
        button.innerText = cardData.buttonText + ' →';

        frontSide.appendChild(iconWrap);
        frontSide.appendChild(title);
        frontSide.appendChild(grades);
        frontSide.appendChild(description);
        frontSide.appendChild(button);

        // Back side
        const backSide = document.createElement('div');
        backSide.classList.add('pathways-card-back');

        const backTitle = document.createElement('h4');
        backTitle.classList.add('pathways-subjects-title');
        backTitle.innerText = 'Core Subjects';

        const subjectsList = document.createElement('ul');
        subjectsList.classList.add('pathways-subjects-list');

        let j = 0;
        while (j < cardData.coreSubjects.length) {
            const subjectItem = document.createElement('li');
            subjectItem.innerText = cardData.coreSubjects[j];
            subjectsList.appendChild(subjectItem);
            j = j + 1;
        }

        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('pathways-download-btn');
        downloadBtn.type = 'button';
        downloadBtn.innerText = 'Download Syllabus';

        backSide.appendChild(backTitle);
        backSide.appendChild(subjectsList);
        backSide.appendChild(downloadBtn);

        // Assemble card
        cardInner.appendChild(frontSide);
        cardInner.appendChild(backSide);
        card.appendChild(cardInner);
        pathwaysGrid.appendChild(card);

        i = i + 1;
    }
}

function renderTuitionSection(tuitionData) {
    document.getElementById('tuition-title').innerText = tuitionData.title;
    document.getElementById('tuition-subtitle').innerText = tuitionData.subtitle;
    document.getElementById('tuition-note').innerText = tuitionData.note;

    const tableHead = document.getElementById('tuition-table-head');
    tableHead.innerHTML = '';

    const headerRow = document.createElement('tr');
    let i = 0;
    while (i < tuitionData.columns.length) {
        const th = document.createElement('th');
        th.innerText = tuitionData.columns[i];

        if (i === tuitionData.columns.length - 1) {
            th.classList.add('tuition-col-total');
        }

        headerRow.appendChild(th);
        i = i + 1;
    }
    tableHead.appendChild(headerRow);

    const tableBody = document.getElementById('tuition-table-body');
    tableBody.innerHTML = '';

    let j = 0;
    while (j < tuitionData.rows.length) {
        const rowData = tuitionData.rows[j];
        const row = document.createElement('tr');

        const gradeCell = document.createElement('td');
        gradeCell.classList.add('tuition-grade');
        gradeCell.innerText = rowData.gradeLevel;

        const tuitionCell = document.createElement('td');
        tuitionCell.innerText = rowData.tuition;

        const activitiesCell = document.createElement('td');
        activitiesCell.innerText = rowData.activities;

        const technologyCell = document.createElement('td');
        technologyCell.innerText = rowData.technology;

        const totalCell = document.createElement('td');
        totalCell.classList.add('tuition-total');
        totalCell.innerText = rowData.total;

        row.appendChild(gradeCell);
        row.appendChild(tuitionCell);
        row.appendChild(activitiesCell);
        row.appendChild(technologyCell);
        row.appendChild(totalCell);
        tableBody.appendChild(row);

        j = j + 1;
    }
}

function renderFacultySection(facultyData) {
    document.getElementById('faculty-kicker').innerText = facultyData.kicker;
    document.getElementById('faculty-title').innerText = facultyData.title;
    document.getElementById('faculty-subtitle').innerText = facultyData.subtitle;
    document.getElementById('faculty-directory-btn').innerText = facultyData.directoryButton;

    const facultyGrid = document.getElementById('faculty-grid');
    facultyGrid.innerHTML = '';

    let i = 0;
    while (i < facultyData.cards.length) {
        const cardData = facultyData.cards[i];

        const card = document.createElement('article');
        card.classList.add('faculty-card');

        const imageWrap = document.createElement('div');
        imageWrap.classList.add('faculty-photo-wrap');

        const image = document.createElement('img');
        image.classList.add('faculty-photo');
        image.src = cardData.image;
        image.alt = cardData.name;

        imageWrap.appendChild(image);

        const name = document.createElement('h3');
        name.classList.add('faculty-name');
        name.innerText = cardData.name;

        const role = document.createElement('p');
        role.classList.add('faculty-role');
        role.innerText = cardData.role;

        const department = document.createElement('p');
        department.classList.add('faculty-department');
        department.innerText = cardData.department;

        card.appendChild(imageWrap);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(department);
        facultyGrid.appendChild(card);

        i = i + 1;
    }
}

function renderContactSection(contactData) {
    document.getElementById('contact-kicker').innerText = contactData.kicker;
    document.getElementById('contact-title').innerText = contactData.title;

    const infoList = document.getElementById('contact-info-list');
    infoList.innerHTML = '';

    let i = 0;
    while (i < contactData.infoItems.length) {
        const itemData = contactData.infoItems[i];

        const item = document.createElement('div');
        item.classList.add('contact-info-item');

        const iconWrap = document.createElement('div');
        iconWrap.classList.add('contact-info-icon-wrap');

        const icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add(itemData.iconClass);
        icon.classList.add('contact-info-icon');

        const textWrap = document.createElement('div');
        textWrap.classList.add('contact-info-text');

        const label = document.createElement('p');
        label.classList.add('contact-info-label');
        label.innerText = itemData.label;

        const value = document.createElement('p');
        value.classList.add('contact-info-value');
        value.innerText = itemData.value;

        iconWrap.appendChild(icon);
        textWrap.appendChild(label);
        textWrap.appendChild(value);
        item.appendChild(iconWrap);
        item.appendChild(textWrap);
        infoList.appendChild(item);

        i = i + 1;
    }

    document.getElementById('contact-map-title').innerText = contactData.map.title;
    document.getElementById('contact-map-subtitle').innerText = contactData.map.subtitle;

    const mapCard = document.getElementById('contact-map-card');
    mapCard.style.backgroundImage =
        'linear-gradient(180deg, rgba(6, 19, 45, 0.25) 0%, rgba(6, 19, 45, 0.5) 100%), url("' + contactData.map.backgroundImage + '")';

    function openMap() {
        window.open(contactData.map.url, '_blank', 'noopener,noreferrer');
    }

    mapCard.addEventListener('click', openMap);
    mapCard.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openMap();
        }
    });

    document.getElementById('contact-form-title').innerText = contactData.form.title;
    document.getElementById('contact-form-subtitle').innerText = contactData.form.subtitle;
    document.getElementById('prospectus-name-label').innerText = contactData.form.nameLabel;
    document.getElementById('prospectus-email-label').innerText = contactData.form.emailLabel;
    document.getElementById('prospectus-message-label').innerText = contactData.form.messageLabel;
    document.getElementById('prospectus-submit').innerText = contactData.form.submitLabel;

    document.getElementById('prospectus-name').placeholder = contactData.form.namePlaceholder;
    document.getElementById('prospectus-email').placeholder = contactData.form.emailPlaceholder;
    document.getElementById('prospectus-message').placeholder = contactData.form.messagePlaceholder;

    const form = document.getElementById('prospectus-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        alert(contactData.form.successMessage);
        form.reset();
    });
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

function renderFooterSection(footerData) {
    // Brand section
    document.getElementById('footer-logo-mark').innerText = footerData.logoMark;
    document.getElementById('footer-logo-text').innerText = footerData.logo;
    document.getElementById('footer-tagline').innerText = footerData.tagline;

    // Social links
    const socialLinksContainer = document.getElementById('footer-social-links');
    socialLinksContainer.innerHTML = '';

    let i = 0;
    while (i < footerData.socialLinks.length) {
        const socialData = footerData.socialLinks[i];
        const link = document.createElement('a');
        link.href = socialData.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.classList.add('footer-social-link');

        const icon = document.createElement('i');
        icon.classList.add('bi', socialData.iconClass);
        link.appendChild(icon);

        socialLinksContainer.appendChild(link);
        i = i + 1;
    }

    // Quick Links
    document.getElementById('quick-links-heading').innerText = footerData.quickLinks.heading;
    const quickLinksList = document.getElementById('quick-links-list');
    quickLinksList.innerHTML = '';

    let j = 0;
    while (j < footerData.quickLinks.links.length) {
        const linkData = footerData.quickLinks.links[j];
        const li = document.createElement('li');

        const a = document.createElement('a');
        a.href = '#';
        a.innerText = linkData.text;
        
        if (linkData.sectionId) {
            a.addEventListener('click', function(e) {
                e.preventDefault();
                const section = document.getElementById(linkData.sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        li.appendChild(a);
        quickLinksList.appendChild(li);
        j = j + 1;
    }

    // Academics
    document.getElementById('academics-heading').innerText = footerData.academics.heading;
    const academicsList = document.getElementById('academics-links-list');
    academicsList.innerHTML = '';

    let k = 0;
    while (k < footerData.academics.links.length) {
        const linkData = footerData.academics.links[k];
        const li = document.createElement('li');

        const a = document.createElement('a');
        a.href = '#';
        a.innerText = linkData.text;
        
        if (linkData.sectionId) {
            a.addEventListener('click', function(e) {
                e.preventDefault();
                const section = document.getElementById(linkData.sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        li.appendChild(a);
        academicsList.appendChild(li);
        k = k + 1;
    }

    // Contact Info
    document.getElementById('contact-heading').innerText = footerData.contactInfo.heading;
    document.getElementById('footer-address').innerText = footerData.contactInfo.address;
    document.getElementById('footer-phone').innerText = footerData.contactInfo.phone;
    document.getElementById('footer-email').innerText = footerData.contactInfo.email;

    // Bottom section
    document.getElementById('footer-copyright').innerText = footerData.bottom.copyright;

    const bottomLinksContainer = document.getElementById('footer-bottom-links');
    bottomLinksContainer.innerHTML = '';

    let m = 0;
    while (m < footerData.bottom.links.length) {
        const linkData = footerData.bottom.links[m];
        const link = document.createElement('a');
        link.href = linkData.url;
        link.innerText = linkData.text;

        bottomLinksContainer.appendChild(link);

        if (m < footerData.bottom.links.length - 1) {
            const separator = document.createElement('span');
            separator.classList.add('footer-link-separator');
            separator.innerText = ' · ';
            bottomLinksContainer.appendChild(separator);
        }

        m = m + 1;
    }
}

renderHero();