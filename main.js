// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
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
