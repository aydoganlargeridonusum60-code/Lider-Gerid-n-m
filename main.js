// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });

    // Corporate Index & Detail Segment Interaction (V6)
    const segmentDisplay = document.getElementById('info-display-segment');
    const segTitle = document.getElementById('segment-title');
    const segDesc = document.getElementById('segment-description');
    const segRegions = document.getElementById('segment-regions');
    const segIcon = document.getElementById('segment-icon');

    const productData = {
        'dkp-demir': {
            title: 'DKP Demir Hurdası',
            icon: 'fa-hammer',
            desc: 'DKP Demir, sac üretiminden kalan ve geri dönüşüm verimi en yüksek olan saf demir türüdür. Sanayi tesisleri ve otomotiv sektöründeki atıkların en değerli parçasıdır.',
            regions: 'İstanbul (Esenyurt, Gebze, Tuzla), Ankara (Ostim), Kocaeli ve Tekirdağ sanayi bölgeleri başta olmak üzere tüm Türkiye geneli adresten alım yapmaktayız.'
        },
        'insaat-demiri': {
            title: 'İnşaat Demiri Hurdası',
            icon: 'fa-building',
            desc: 'Yıkım veya şantiye süreçlerinden çıkan inşaat demiri hurdaları, tonajlı olarak kantarda şeffaf şekilde değerlendirilir. En güncel inşaat demiri piyasa fiyatlarıyla alım yapıyoruz.',
            regions: 'İstanbul, Bursa, Yalova, Sakarya ve tüm büyükşehirlerdeki şantiye sahalarından 15 dakikada nakliye hizmeti vermekteyiz.'
        },
        'soyma-bakir': {
            title: 'Soyma Bakır Hurdası',
            icon: 'fa-bolt',
            desc: 'Soyma Bakır, %99.9 saflık oranına sahip en değerli hurda türüdür. Elektrik kablolarının içindeki parlak bakırlardan oluşur ve London Metal Exchange (LME) üzerinden en yüksek fiyattan değerlendirilir.',
            regions: 'Anayol üzeri şubelerimizle Kocaeli, İstanbul Anadolu ve Avrupa yakası, Gebze Organize Sanayi bölgelerinden anında alım yapıyoruz.'
        },
        'lama-bakir': {
            title: 'Lama Bakır Hurdası',
            icon: 'fa-layer-group',
            desc: 'Lama bakır, genellikle elektrik trafoları veya pano sistemlerinde kullanılan levha/şerit bakırlardır. Saf olduğu için geri dönüşümde bir numaralı ham maddedir.',
            regions: 'Gaziantep, Kayseri, Konya gibi sanayi şehirlerimizle beraber Marmara Bölgesinin tamamında fabrika çıkışlı alımlar yapmaktayız.'
        },
        'kablo': {
            title: 'Kablo Hurdası',
            icon: 'fa-plug',
            desc: 'PVC kaplı, yeraltı veya ev tipi her türlü hurda kablo, içindeki bakır oranına göre (yüzde hesaplaması ile) en adil şekilde kantarımızda hassas tartılır.',
            regions: 'İstanbul bağcılar, Ümraniye, İkitelli Organize Sanayi ve Pendik bölgelerine yakınlığımızla anında araç yönlendiriyoruz.'
        },
        'aluminyum': {
            title: 'Profil Alüminyum',
            icon: 'fa-window-maximize',
            desc: 'Alüminyum profil ve doğrama hurdaları hafif ama geri dönüşüm döngüsü sonsuz olan metallerdir. Mimari sistemlerden çıkan tüm alüminyumları alıyoruz.',
            regions: 'Antalya, Muğla, İzmir gibi tatil bölgelerindeki otel tadilatları ve inşaat projelerinden adresten alım sağlıyoruz.'
        },
        'pirinc-sari': {
            title: 'Sarı (Pirinç) Hurda',
            icon: 'fa-faucet',
            desc: 'Pirinç (sarı) hurdaları vana, musluk ve bağlantı parçalarından çıkan alaşımlı metallerdir. MS-58 ve MS-70 kalitelerine göre borsadaki en yüksek fiyatla alınır.',
            regions: 'İstanbul İkitelli, Ankara Ostim ve İzmir Çiğli organize sanayi bölgelerinden tonaj fark etmeksizin alım yapmaktayız.'
        },
        'krom': {
            title: 'Krom 304/316 Hurdası',
            icon: 'fa-hard-hat',
            desc: 'Paslanmaz çelik gurubu olarak bilinen Krom 304 ve 316 serisi hurdalar, gıda ve kimya sanayi atıklarıdır. Kimyasal analiz kitlerimizle saflık testi yaparak alıyoruz.',
            regions: 'Kocaeli sanayi hattı, Çorlu ve Ergene bölgesindeki fabrikalardan periyodik olarak konteyner hizmeti vererek alım yapmaktayız.'
        },
        'kursun': {
            title: 'Kurşun Levha Hurdası',
            icon: 'fa-weight-hanging',
            desc: 'Çatı kaplamaları veya radyasyon kalkanlarından çıkan kurşun levhalar, geri dönüşümde kurşun-asit döngüsü için çok değerlidir. Hassas tartımla nakit alınır.',
            regions: 'Balıkesir, Çanakkale ve tüm Marmara kıyı hattında fabrika yıkım ve yenileme süreçlerinden çıkan kurşunları almaktayız.'
        },
        'motor': {
            title: 'Elektrik Motoru',
            icon: 'fa-cogs',
            desc: 'Endüstriyel elektrik motorları, içindeki yoğun bakır sargı nedeniyle çok kıymetlidir. Çıkma motorlar, trafolar ve dinamo hurdalarınızı alıyoruz.',
            regions: 'Aydın, Denizli ve Manisa gibi üretim merkezlerimizdeki fabrikalardan araçlarımızla yerinde söküm ve nakliye yapmaktayız.'
        },
        'klima': {
            title: 'Kombi & Klima Atığı',
            icon: 'fa-fan',
            desc: 'Kullanım ömrünü tamamlamış kombi, klima ve beyaz eşya üniteleri, içerdikleri bakır borular ve kompresörler sayesinde değerlidir. Toplu alımlarda en iyi fiyatı sunuyoruz.',
            regions: 'İstanbul genelinde (Beşiktaş, Kadıköy, Sarıyer vb.) kentsel dönüşüm alanlarından ve otel yenilemelerinden alım yapmaktayız.'
        },
        'elektronik': {
            title: 'Elektronik & Bilgisayar Atığı',
            icon: 'fa-microchip',
            desc: 'Bilgisayar kartları, işlemciler ve her türlü elektronik atık, nadir metaller içerdiği için geri dönüşümde kritik öneme sahiptir. Çevre dostu bertaraf ve alım sağlıyoruz.',
            regions: 'Tüm Türkiye geneli, özellikle üniversiteler, bankalar ve kurumsal firmaların teknolojik atıklarını raporlayarak almaktayız.'
        }
    };

    document.querySelectorAll('.corporate-table tr').forEach(row => {
        row.addEventListener('click', () => {
            const cat = row.getAttribute('data-category');
            if(!cat) return;

            const data = productData[cat];
            if(data) {
                // Remove active class from all rows
                document.querySelectorAll('.corporate-table tr').forEach(r => r.classList.remove('active-row'));
                // Add to current
                row.classList.add('active-row');

                // Update Segment with animation
                segmentDisplay.style.opacity = '0';
                setTimeout(() => {
                    segTitle.innerText = data.title;
                    segDesc.innerText = data.desc;
                    segRegions.innerText = data.regions;
                    segIcon.className = `fas ${data.icon}`;
                    segmentDisplay.style.opacity = '1';
                }, 200);
            }
        });
    });
});

// Navbar Scroll    // Regional Marquee Interaction (Modal Logic) - Mobile Optimized
    const modal = document.getElementById('district-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDistricts = document.getElementById('modal-districts');
    const closeModal = document.querySelector('.close-modal');

    const openDistrictModal = (chip) => {
        const city = chip.getAttribute('data-city');
        const districts = chip.getAttribute('data-districts');
        
        modalTitle.innerText = city + ' Hizmet Bölgelerimiz';
        modalDistricts.innerText = districts;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Sayfa kaymasını engelle
    };

    document.querySelectorAll('.region-chip').forEach(chip => {
        // Hem tıklama hem dokunma desteği
        chip.addEventListener('click', (e) => {
            e.preventDefault();
            openDistrictModal(chip);
        });
    });

    const closeDistrictModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Kaymayı geri aç
    };

    if(closeModal) {
        closeModal.addEventListener('click', closeDistrictModal);
    }

    // Modal dışına tıklayınca kapat (Mobil dostu)
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeDistrictModal();
        }
    });

    // Regional Marquee Logic (if needed for performance)
    const marquee = document.querySelector('.region-marquee');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
