// Lider Hurda Geri Dönüşüm - Master JS Control Unit (V12 - September 2026 Updated Borsa Prices)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }

    // Mobile Navigation Drawer Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });

        // Close menu when clicking outside or link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }

    // 2. Corporate Index & Detail Segment (V6)
    const segmentDisplay = document.getElementById('info-display-segment');
    const segTitle = document.getElementById('segment-title');
    const segDesc = document.getElementById('segment-description');
    const segRegions = document.getElementById('segment-regions');
    const segIcon = document.getElementById('segment-icon');

    const productData = {
        'dkp-demir': { title: 'DKP Demir Hurdası', icon: 'fa-hammer', desc: 'Geri dönüşüm verimi en yüksek saf demir türüdür. Sanayi sac atıklarının 1. sınıf maddesidir.', regions: 'İstanbul, Gebze, Ankara, Kocaeli, Bursa' },
        'insaat-demiri': { title: 'İnşaat Demiri Hurdası', icon: 'fa-building', desc: 'Şantiye ve yıkım süreçlerinden çıkan tonajlı metallerdir.', regions: 'Bursa, Yalova, Sakarya, İstanbul, Tekirdağ' },
        'soyma-bakir': { title: 'Soyma Bakır Hurdası', icon: 'fa-bolt', desc: '%99.9 saflıkta, kablodan soyulmuş parlak saf bakırdır.', regions: 'Gebze, Dilovası, Tuzla, Esenyurt, Çorlu' },
        'lama-bakir': { title: 'Lama Bakır Hurdası', icon: 'fa-layer-group', desc: 'Trafo ve panolardan çıkan yüksek iletkenlikli bakırlardır.', regions: 'Gaziantep, Konya, Marmara Bölgesi, Ege' },
        'kablo': { title: 'Kablo Hurdası (TTR & Karışık)', icon: 'fa-plug', desc: 'İçindeki bakır oranına göre değerlendirilen her türlü tesisat kablosu.', regions: 'Anadolu ve Avrupa Yakası, Tüm OSB Bölgeleri' },
        'aluminyum': { title: 'Profil Alüminyum', icon: 'fa-window-maximize', desc: 'Hafif ama geri dönüşüm döngüsü sonsuz olan kaliteli profil metallerdir.', regions: 'İzmir, Antalya, Muğla, Otel Yenileme Bölgeleri' },
        'pirinc-sari': { title: 'Sarı (Pirinç) Hurda', icon: 'fa-faucet', desc: 'Vana, musluk ve bağlantı parçalarından çıkan alaşımlı maden.', regions: 'Ostim, İkitelli, Çiğli OSB, Gebze' },
        'krom': { title: 'Krom 304 Paslanmaz', icon: 'fa-hard-hat', desc: 'Gıda ve kimya sanayi atığı 1. sınıf paslanmaz çeliklerdir.', regions: 'Kocaeli, Çorlu, Ergene Fabrika Hatları' },
        'kursun': { title: 'Kurşun Levha Hurdası', icon: 'fa-weight-hanging', desc: 'Çatı kaplamaları ve radyasyon kalkanı hurdalarıdır.', regions: 'Balıkesir, Çanakkale, Marmara Kıyı Hattı' },
        'motor': { title: 'Elektrik Motoru', icon: 'fa-cogs', desc: 'İçindeki yoğun bakır sargı nedeniyle kıymetli çıkma motorlar.', regions: 'Ege ve İç Anadolu Üretim Merkezleri' },
        'klima': { title: 'Kombi & Klima Atığı', icon: 'fa-fan', desc: 'Bakır boru ve kompresör içeren değerli iklimlendirme üniteleri.', regions: 'İstanbul Geneli, Kentsel Dönüşüm Alanları' },
        'elektronik': { title: 'Elektronik & Bilgisayar Atığı', icon: 'fa-microchip', desc: 'Nadir metaller ve kart bileşenleri içeren teknolojik atıklar.', regions: 'Tüm Türkiye Geneli Bilgi Kaynağı' },
        'demir-1': { title: '1. Grup Hurda Demir', icon: 'fa-shredder', desc: 'Dökümhaneler için ideal, kalın ve temiz sanayi demiri.', regions: 'Gebze, Tuzla, İkitelli Sanayi Bölgeleri' },
        'demir-ekstra': { title: 'Ekstra Hurda Demir', icon: 'fa-truck-loading', desc: 'Standart sanayi demiri, imalat artığı ağır parçalar.', regions: 'Marmara Bölgesi, Ankara, İzmir' },
        'kirkambar-bakir': { title: 'Kırkambar Bakır', icon: 'fa-coins', desc: 'Karışık, lehimli veya boyalı geri dönüşüm bakırı.', regions: 'İstanbul, Anadolu Yakası, Kocaeli' },
        'talas': { title: 'Metal Talaşı', icon: 'fa-spray-can', desc: 'CNC ve torna tezgahlarından çıkan metal artıkları.', regions: 'Çayırova, Gebze, Dudullu OSB' },
        'jant': { title: 'Jant Alüminyum', icon: 'fa-car', desc: 'Otomotiv sektöründen çıkan saf alüminyum alaşımları.', regions: 'İstanbul, Sakarya, Bursa' },
        'krom-430': { title: 'Krom 430 Hurdası', icon: 'fa-utensils', desc: 'Mutfak ekipmanları ve beyaz eşya üretim atıkları.', regions: 'Tekirdağ, Çorlu, İstanbul' },
        'petek': { title: 'Bakır/Alüminyum Petek', icon: 'fa-snowflake', desc: 'Klima ve radyatörlerden çıkan petek hurdaları.', regions: 'Adana, Mersin, Antalya, İstanbul' },
        'aku': { title: 'Akü Hurdası (Sulu/Kuru)', icon: 'fa-car-battery', desc: 'Kurşun ağırlıklı, tehlikeli atık sınıfında geri dönüşüm.', regions: 'Konya, Ankara, İstanbul Lojistik Ağı' },
        'antigron-kablo': { title: 'Antigron Kablo', icon: 'fa-microchip', desc: 'Tesisat ve yer altı kabloları, yüksek bakır verimi.', regions: 'Marmara, Ege, Akdeniz Bölgeleri' },
        'pano-bakir': { title: 'Pano Bakırı', icon: 'fa-bolt', desc: 'Elektrik panolarından çıkan temiz, işlenmiş bakır raylar.', regions: 'Tüm Sanayi Siteleri, OSB Merkezleri' },
        'bronz-kizil': { title: 'Bronz (Kızıl) Hurda', icon: 'fa-coins', desc: 'Yüksek sürtünme dayanımlı, kıymetli alaşımlı maden.', regions: 'Tersaneler, Gemi Söküm Alanları' },
        'bakir-talasi': { title: 'Bakır Talaşı', icon: 'fa-spray-can', desc: 'İmalat sürecinde CNC tezgahlarından çıkan bakır artıkları.', regions: 'Gebze, Tuzla, İkitelli Fabrikaları' },
        'pik-demir': { title: 'Pik Demir Hurdası', icon: 'fa-industry', desc: 'Döküm sanayisinin temel hammaddesi olan ağır metal.', regions: 'Kocaeli, Bursa, İzmir Sanayi Aksı' },
        'teneke-hurda': { title: 'Teneke Hurdası', icon: 'fa-box', desc: 'İnce sac ve ambalaj atıklarından oluşan hafif metal.', regions: 'Tüm Şehir Merkezleri, Gıda Tesisleri' },
        'aluminyum-tel': { title: 'Alüminyum Tel (Saf)', icon: 'fa-wave-square', desc: 'Enerji nakil hatlarından çıkan saf alüminyum teller.', regions: 'Anadolu Yakası, Nilüfer, Aliağa' },
        'aluminyum-sert': { title: 'Sert Alüminyum', icon: 'fa-cubes', desc: 'Otomotiv ve makine sanayi parçalarından çıkan alaşım.', regions: 'Konya, Ankara, Gaziantep' },
        'aluminyum-kutu': { title: 'Kutu Alüminyum', icon: 'fa-wine-bottle', desc: 'İçecek kutuları ve folyo ambalaj atıkları.', regions: 'Oteller, Tatil Köyleri, Lojistik Merkezler' },
        'aluminyum-radyator': { title: 'Araç Radyatörü', icon: 'fa-car-side', desc: 'Otomobil soğutma sistemlerinden çıkan değerli petekler.', regions: 'Oto Sanayi Siteleri, Çıkmacılar' },
        'sari-cubuk': { title: 'Çubuk Sarı (Araiş)', icon: 'fa-grip-lines', desc: 'Tornadan çıkmış temiz, işlenmemiş pirinç parçalar.', regions: 'Marmara Bölgesi, Endüstriyel Üretim' },
        'sari-su-saati': { title: 'Su Saati Hurdası', icon: 'fa-tint', desc: 'Eski tip mekanik su sayaçları ve vana gövdeleri.', regions: 'Belediye Atık Sahaları, Şantiye Alanları' },
        'sari-talas': { title: 'Sarı Talaşı', icon: 'fa-magic', desc: 'Üretim bandı artığı, saf sarı talaş formunda maden.', regions: 'Gebze, Bursa, İzmir OSB' },
        'krom-316': { title: '316 Krom (Paslanmaz)', icon: 'fa-shield-alt', desc: 'Asit ve korozyon direnci en yüksek paslanmaz türü.', regions: 'Kimya Tesisleri, İlaç Fabrikaları' },
        'krom-201': { title: '201 Krom (Paslanmaz)', icon: 'fa-utensil-spoon', desc: 'Dekoratif amaçlı kullanılan, düşük nikel içerikli metal.', regions: 'Çorlu, Ergene, Kıraç Bölgeleri' },
        'nikel-hurda': { title: 'Nikel Hurdası', icon: 'fa-gem', desc: 'Havacılık ve savunma sanayisinin kıymetli madeni.', regions: 'Tüm Türkiye, Stratejik Üretim Hatları' },
        'cinko-hurda': { title: 'Çinko Hurdası', icon: 'fa-cube', desc: 'Kaplama sanayi ve levha üretiminden çıkan maden.', regions: 'Tuzla, Dilovası Sanayi Hattı' },
        'kalay-hurda': { title: 'Kalay Hurdası', icon: 'fa-ring', desc: 'Lehim ve kaplama işlerinden çıkan, nadir ve değerli.', regions: 'Teknoloji Merkezleri, Elektronik Üretim' },
        'titanyum-hurda': { title: 'Titanyum Hurdası', icon: 'fa-space-shuttle', desc: 'Uzay, havacılık ve medikal sektörün en dayanıklı metali.', regions: 'Stratejik Fabrikalar, Savunma Sanayi' },
        'kursun-boru': { title: 'Kurşun Boru Hurdası', icon: 'fa-database', desc: 'Eski tesisat ve yalıtım sistemlerinden çıkan ağır metal.', regions: 'Kentsel Dönüşüm, Eski Şehir Merkezleri' }
    };

    document.querySelectorAll('.borsa-table tr').forEach(row => {
        row.addEventListener('click', () => {
            const cat = row.getAttribute('data-category');
            if(!cat || !productData[cat]) return;

            const data = productData[cat];
            document.querySelectorAll('.borsa-table tr').forEach(r => r.classList.remove('active-row'));
            row.classList.add('active-row');

            if(segmentDisplay) {
                segmentDisplay.style.opacity = '0';
                setTimeout(() => {
                    if(segTitle) segTitle.innerText = data.title;
                    if(segDesc) segDesc.innerText = data.desc;
                    if(segRegions) {
                        const regionList = data.regions.split(',');
                        segRegions.innerHTML = `<div class="chip-container">${regionList.map(r => `<span class="bg-chip">${r.trim()}</span>`).join('')}</div>`;
                    }
                    if(segIcon) segIcon.className = `fas ${data.icon}`;
                    segmentDisplay.style.opacity = '1';
                }, 200);
            }
        });
    });

    // 3. District Modal Logic (Mobile Optimized)
    const modal = document.getElementById('district-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDistricts = document.getElementById('modal-districts');
    const closeModal = document.querySelector('.close-modal');

    const openDistrictModal = (chip) => {
        const city = chip.getAttribute('data-city');
        const districts = chip.getAttribute('data-districts');
        if(modalTitle) modalTitle.innerText = city + ' Hizmet Bölgelerimiz';
        if(modalDistricts) modalDistricts.innerText = districts;
        if(modal) modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.region-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.preventDefault();
            openDistrictModal(chip);
        });
    });

    const closeDistrictModal = () => {
        if(modal) modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    if(closeModal) closeModal.addEventListener('click', closeDistrictModal);
    if(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target == modal) closeDistrictModal();
        });
    }

    // 4. Navbar Scrolled State
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // 5. Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(href);
                if(targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 6. FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) answer.style.display = 'none';
            });
            if(!isActive) {
                faqItem.classList.add('active');
                const answer = faqItem.querySelector('.faq-answer');
                if (answer) answer.style.display = 'block';
            }
        });
    });

    // 7. Dynamic Borsa Engine (V25) - MASTER SYNC MODE WITH SEPTEMBER 2026 PRICES
    const priceData = {
        'dkp-demir': 15.50,
        'insaat-demiri': 14.60,
        'soyma-bakir': 560.00,
        'lama-bakir': 550.00,
        'kablo': 215.00,
        'aluminyum': 148.00,
        'pirinc-sari': 270.00,
        'krom': 78.00,
        'kursun': 88.00,
        'motor': 68.00,
        'klima': 2900.00,
        'elektronik': 48.00,
        'demir-1': 14.90,
        'demir-ekstra': 14.60,
        'kirkambar-bakir': 500.00,
        'talas': 12.80,
        'jant': 165.00,
        'krom-430': 36.00,
        'petek': 190.00,
        'aku': 34.00,
        'antigron-kablo': 230.00,
        'pano-bakir': 555.00,
        'bronz-kizil': 330.00,
        'bakir-talasi': 490.00,
        'pik-demir': 13.00,
        'teneke-hurda': 10.20,
        'aluminyum-tel': 158.00,
        'aluminyum-sert': 135.00,
        'aluminyum-kutu': 118.00,
        'aluminyum-radyator': 115.00,
        'sari-cubuk': 280.00,
        'sari-su-saati': 250.00,
        'sari-talas': 240.00,
        'krom-316': 98.00,
        'krom-201': 34.00,
        'nikel-hurda': 1180.00,
        'cinko-hurda': 148.00,
        'kalay-hurda': 1880.00,
        'titanyum-hurda': 1280.00,
        'kursun-boru': 85.00
    };

    const updatePricesUI = () => {
        Object.keys(priceData).forEach(cat => {
            const targets = document.querySelectorAll(`.price-val[data-cat="${cat}"]`);
            targets.forEach(el => {
                const val = priceData[cat];
                if(val >= 1000) {
                    el.innerText = Math.floor(val).toLocaleString('tr-TR');
                } else {
                    el.innerText = val.toFixed(2).replace('.', ',');
                }
            });
        });
        calculateScrapValue(); // Keep calculator synced
    };

    const jitterPrices = () => {
        const categories = Object.keys(priceData);
        const randomCat = categories[Math.floor(Math.random() * categories.length)];
        const jitter = (Math.random() * 0.4 - 0.2); 
        priceData[randomCat] = Math.max(1, priceData[randomCat] + jitter);
        
        // Visual indicator for jitter
        const targets = document.querySelectorAll(`.price-val[data-cat="${randomCat}"]`);
        targets.forEach(el => {
            el.classList.add(jitter > 0 ? 'price-up' : 'price-down');
            setTimeout(() => el.classList.remove('price-up', 'price-down'), 2000);
        });

        updatePricesUI();
    };

    // 8. Interactive Table Rows
    const categoryToPage = {
        'dkp-demir': 'dkp-demir.html',
        'insaat-demiri': 'insaat-demiri.html',
        'soyma-bakir': 'soyma-bakir.html',
        'lama-bakir': 'lama-bakir.html',
        'kablo': 'kablo-hurdasi.html',
        'kablo-hurdasi': 'kablo-hurdasi.html',
        'aluminyum': 'aluminyum-hurda.html',
        'aluminyum-hurda': 'aluminyum-hurda.html',
        'pirinc-sari': 'sari-hurda.html',
        'sari-hurda': 'sari-hurda.html',
        'krom-paslanmaz': 'krom-paslanmaz.html',
        'krom': 'krom-paslanmaz.html',
        'kursun': 'kursun-hurdasi.html',
        'motor': 'elektrik-motoru.html',
        'elektrik-motoru': 'elektrik-motoru.html',
        'klima': 'klima-hurdasi.html',
        'elektronik': 'e-atik.html',
        'demir-1': 'bir-grup-demir.html',
        'demir-ekstra': 'ekstra-demir.html',
        'kirkambar-bakir': 'kirkambar-bakir.html',
        'talas-alimi': 'talas-alimi.html',
        'talas': 'talas-alimi.html',
        'jant': 'jant-aluminyum.html',
        'petek': 'arac-radyatoru.html',
        'aku': 'aku-hurdasi.html',
        'tel-aluminyum': 'aluminyum-tel.html',
        'sert-aluminyum': 'aluminyum-sert.html',
        'kutualu': 'aluminyum-kutu.html',
        'antigron-kablo': 'kablo-hurdasi.html',
        'pano-bakir': 'soyma-bakir.html',
        'bakir-talasi': 'bakir-fiyat-analizi.html',
        'sari-analiz': 'sari-hurda-analizi.html',
        'krom-analiz': 'krom-analiz-rehberi.html'
    };

    const tableRows = document.querySelectorAll('tbody tr[data-category]');
    tableRows.forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', (e) => {
            // Prevent redirect if clicking interactive buttons inside table row
            if (e.target.closest('a') || e.target.closest('button')) return;
            const cat = row.getAttribute('data-category');
            const targetPage = categoryToPage[cat] || (cat + '.html');
            window.location.href = targetPage;
        });
        row.addEventListener('mouseenter', () => row.style.backgroundColor = 'rgba(0, 255, 65, 0.05)');
        row.addEventListener('mouseleave', () => row.style.backgroundColor = 'transparent');
    });

    // --- CALCULATOR ENGINE ---
    const calcCategory = document.getElementById('calc-category');
    const calcWeight = document.getElementById('calc-weight');
    const calcTotal = document.getElementById('calc-total');
    const calcWhatsapp = document.getElementById('calc-whatsapp');

    function calculateScrapValue() {
        if (!calcCategory || !calcWeight || !calcTotal) return;

        const category = calcCategory.value;
        const weight = parseFloat(calcWeight.value) || 0;
        const unitPrice = priceData[category] || 0;
        const total = weight * unitPrice;

        const formatter = new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 2
        });

        calcTotal.textContent = formatter.format(total);

        // Update WhatsApp Message
        if(calcWhatsapp) {
            const selectedText = calcCategory.options[calcCategory.selectedIndex].text;
            const waMessage = `Merhaba Lider Hurda, Akıllı Hesaplayıcı ile analiz yaptım.%0A*Ürün:* ${selectedText}%0A*Miktar:* ${weight} KG%0A*Tahmini Değer:* ${formatter.format(total)}%0A%0ABu fiyattan satış yapmak için adresten alım randevusu istiyorum.`;
            calcWhatsapp.href = `https://wa.me/905364863466?text=${waMessage}`;
        }
    }

    if(calcCategory) calcCategory.addEventListener('change', calculateScrapValue);
    if(calcWeight) {
        calcWeight.addEventListener('input', calculateScrapValue);
        calcWeight.addEventListener('keyup', calculateScrapValue);
    }
    
    // Quick Category Filter Search on fiyat-listesi.html
    const searchInput = document.getElementById('price-search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const rows = document.querySelectorAll('.full-price-table tbody tr');
            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes(filter)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Ignition
    updatePricesUI();
    setInterval(jitterPrices, 4000);
});
