document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. STICKY NAVBAR & ACTIVE SCROLL INDICATOR ---
    window.addEventListener('scroll', function() {
        const header = document.getElementById('navbar');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 50);
        }

        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- 2. INTERACTIVE BRANCH TABS ---
    const tabPikBtn = document.getElementById('tab-pik-btn');
    const tabBandungBtn = document.getElementById('tab-bandung-btn');
    const menuPik = document.getElementById('menu-pik');
    const menuBandung = document.getElementById('menu-bandung');

    if (tabPikBtn && tabBandungBtn) {
        tabPikBtn.addEventListener('click', function() {
            tabPikBtn.classList.add('active');
            tabBandungBtn.classList.remove('active');
            menuPik.classList.add('active');
            menuBandung.classList.remove('active');
        });

        tabBandungBtn.addEventListener('click', function() {
            tabBandungBtn.classList.add('active');
            tabPikBtn.classList.remove('active');
            menuBandung.classList.add('active');
            menuPik.classList.remove('active');
        });
    }

    // --- 3. CUSTOM IMAGE CAROUSEL SYSTEM ---
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    let currentSlide = 0;

    // Generasi Indikator Dots Sesuai Jumlah Slide
    if (dotsContainer && slides.length > 0) {
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.dot');

    function updateCarouselStatus() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
                if(dots[index]) dots[index].classList.add('active');
            } else {
                slide.classList.remove('active');
                if(dots[index]) dots[index].classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarouselStatus();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarouselStatus();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarouselStatus();
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Auto Play Slide Setiap 5 Detik
    setInterval(nextSlide, 5000);

    // --- 4. LEAFLET CONTACT MAPS ---
    function initLeafletMap(containerId, coordinates, label) {
        const container = document.getElementById(containerId);
        if (!container || typeof L === 'undefined') {
            return;
        }

        const map = L.map(containerId, {
            scrollWheelZoom: false,
            zoomControl: true,
            preferCanvas: true
        }).setView(coordinates, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const mapPin = L.divIcon({
            className: 'rpm-map-pin-wrapper',
            html: '<div class="rpm-map-pin"><i class="fa-solid fa-location-dot"></i></div>',
            iconSize: [34, 34],
            iconAnchor: [17, 34],
            popupAnchor: [0, -34]
        });

        L.marker(coordinates, { icon: mapPin })
            .addTo(map)
            .bindPopup(label)
            .openPopup();

        window.addEventListener('resize', () => map.invalidateSize());
    }

    initLeafletMap(
        'map-jakarta',
        [-6.0462181, 106.6960363],
        'RPM Jakarta Branch<br>Golf Island PIK, Jakarta Utara'
    );
    initLeafletMap(
        'map-bandung',
        [-6.9451695, 107.6128983],
        'RPM Bandung Branch<br>Jalan Sriwijaya No. 111, Bandung'
    );


    // --- 4. SCROLL REVEAL ANIMATION ---
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Run once at initial load

    // --- 5. FORM SUBMISSION HANDLING ---
    const form = document.getElementById('rpmForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gas! Agenda kopdar atau pesan kamu berhasil dikirim ke RPM Team. Kami akan segera membalasnya via email/WhatsApp.');
            this.reset();
        });
    }
});