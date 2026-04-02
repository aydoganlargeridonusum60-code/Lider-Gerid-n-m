// Lider Hurda Geri Dönüşüm - Master JS Control Unit (V11)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });

    // 2. Corporate Index & Detail Segment (V6)
    const segmentDisplay = document.getElementById('info-display-segment');
    const segTitle = document.getElementById('segment-title');
    const segDesc = document.getElementById('segment-description');
    const segRegions = document.getElementById('segment-regions');
    const segIcon = document.getElementById('segment-icon');

    const productData = {
        'dkp-demir': { title: 'DKP Demir Hurdası', icon: 'fa-hammer', desc: 'Geri dönüşüm verimi en yüksek saf demir türüdür.', regions: 'İstanbul, Gebze, Ankara, Kocaeli' },
        'insaat-demiri': { title: 'İnşaat Demiri Hurdası', icon: 'fa-building', desc: 'Şantiye ve yıkım süreçlerinden çıkan tonajlı metallerdir.', regions: 'Bursa, Yalova, Sakarya, İstanbul' },
        'soyma-bakir': { title: 'Soyma Bakır Hurdası', icon: 'fa-bolt', desc: '%99.9 saflıkta, kablodan soyulmuş parlak bakırdır.', regions: 'Gebze, Dilovası, Tuzla, Esenyurt' },
        'lama-bakir': { title: 'Lama Bakır Hurdası', icon: 'fa-layer-group', desc: 'Trafo ve panolardan çıkan yüksek iletkenlikli bakırlardır.', regions: 'Gaziantep, Konya, Marmara Bölgesi' },
        'kablo': { title: 'Kablo Hurdası', icon: 'fa-plug', desc: 'İçindeki bakır oranına göre değerlendirilen her türlü kablo.', regions: 'Anadolu ve Avrupa Yakası, Tüm Sanayi Siteleri' },
        'aluminyum': { title: 'Profil Alüminyum', icon: 'fa-window-maximize', desc: 'Hafif ama geri dönüşüm döngüsü sonsuz olan metallerdir.', regions: 'İzmir, Antalya, Muğla, Otel Yenileme Bölgeleri' },
        'pirinc-sari': { title: 'Sarı (Pirinç) Hurda', icon: 'fa-faucet', desc: 'Vana, musluk ve bağlantı parçalarından çıkan alaşımlı metal.', regions: 'Ostim, İkitelli, Çiğli OSB' },
        'krom': { title: 'Krom 304/316 Hurdası', icon: 'fa-hard-hat', desc: 'Gıda ve kimya sanayi atığı paslanmaz çeliklerdir.', regions: 'Kocaeli, Çorlu, Ergene Fabrika Hatları' },
        'kursun': { title: 'Kurşun Levha Hurdası', icon: 'fa-weight-hanging', desc: 'Çatı kaplamaları ve radyasyon kalkanı hurdalarıdır.', regions: 'Balıkesir, Çanakkale, Marmara Kıyı Hattı' },
        'motor': { title: 'Elektrik Motoru', icon: 'fa-cogs', desc: 'İçindeki yoğun bakır sargı nedeniyle kıymetli çıkma motorlar.', regions: 'Ege ve İç Anadolu Üretim Merkezleri' },
        'klima': { title: 'Kombi & Klima Atığı', icon: 'fa-fan', desc: 'Bakır boru ve kompresör içeren değerli üniteler.', regions: 'İstanbul Geneli, Kentsel Dönüşüm Alanları' },
        'elektronik': { title: 'Elektronik & Bilgisayar Atığı', icon: 'fa-microchip', desc: 'Nadir metaller içeren teknolojik atıklar.', regions: 'Tüm Türkiye Geneli Bilgi Kaynağı' },
        'demir-1': { title: '1. Grup Hurda Demir', icon: 'fa-shredder', desc: 'Dökümhaneler için ideal, kalın ve temiz sanayi demiri.', regions: 'Gebze, Tuzla, İkitelli Sanayi Bölgeleri' },
        'demir-ekstra': { title: 'Ekstra Hurda Demir', icon: 'fa-truck-loading', desc: 'Standart sanayi demiri, her türlü imalat artığı.', regions: 'Marmara Bölgesi, Ankara, İzmir' },
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
        'aluminyum-tel': { title: 'Alüminyum Tel', icon: 'fa-wave-square', desc: 'Enerji nakil hatlarından çıkan saf alüminyum teller.', regions: 'Anadolu Yakası, Nilüfer, Aliağa' },
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 5. Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if(targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 6. FAQ Accordion Logic (V8 Overdrive)
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.display = 'none';
            });
            if(!isActive) {
                faqItem.classList.add('active');
                faqItem.querySelector('.faq-answer').style.display = 'block';
            }
        });
    });

    // 7. Dynamic Borsa Engine (V22) - MASTER SYNC MODE
    const priceData = {
        'dkp-demir': 15.20,
        'insaat-demiri': 14.40,
        'soyma-bakir': 550.00,
        'lama-bakir': 540.00,
        'kablo': 210.00,
        'aluminyum': 145.00,
        'pirinc-sari': 265.00,
        'krom': 75.00,
        'kursun': 85.00,
        'motor': 65.00,
        'klima': 2850.00,
        'elektronik': 45.00,
        'demir-1': 14.80,
        'demir-ekstra': 14.20,
        'kirkambar-bakir': 490.00,
        'talas': 12.50,
        'jant': 160.00,
        'krom-430': 35.00,
        'petek': 185.00,
        'aku': 32.00,
        'antigron-kablo': 225.00,
        'pano-bakir': 545.00,
        'bronz-kizil': 320.00,
        'bakir-talasi': 480.00,
        'pik-demir': 12.50,
        'teneke-hurda': 9.80,
        'aluminyum-tel': 155.00,
        'aluminyum-sert': 130.00,
        'aluminyum-kutu': 115.00,
        'aluminyum-radyator': 110.00,
        'sari-cubuk': 275.00,
        'sari-su-saati': 245.00,
        'sari-talas': 235.00,
        'krom-316': 95.00,
        'krom-201': 32.00,
        'nikel-hurda': 1150.00,
        'cinko-hurda': 145.00,
        'kalay-hurda': 1850.00,
        'titanyum-hurda': 1250.00,
        'kursun-boru': 82.00
    };

    const updatePricesUI = () => {
        Object.keys(priceData).forEach(cat => {
            const targets = document.querySelectorAll(`.price-val[data-cat="${cat}"]`);
            targets.forEach(el => {
                const val = priceData[cat];
                if(val > 1000) {
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

    // --- CALCULATOR ENGINE (V22) ---
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
            const waMessage = `Merhaba, Akıllı Hesaplayıcı ile bir analiz yaptım.%0A*Ürün:* ${selectedText}%0A*Miktar:* ${weight} KG%0A*Tahmini Değer:* ${formatter.format(total)}%0A%0ABu fiyattan satış yapmak için ekspertiz randevusu istiyorum.`;
            calcWhatsapp.href = `https://wa.me/905364863466?text=${waMessage}`;
        }
    }

    if(calcCategory) calcCategory.addEventListener('change', calculateScrapValue);
    if(calcWeight) {
        calcWeight.addEventListener('input', calculateScrapValue);
        calcWeight.addEventListener('keyup', calculateScrapValue);
    }
    
    // Ignition
    updatePricesUI();
    setInterval(jitterPrices, 4000);
});
