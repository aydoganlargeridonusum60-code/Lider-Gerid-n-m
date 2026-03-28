// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });
});

// Navbar Scroll    // Regional Marquee Interaction (Modal Logic)
    const modal = document.getElementById('district-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDistricts = document.getElementById('modal-districts');
    const closeModal = document.querySelector('.close-modal');

    document.querySelectorAll('.region-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const city = chip.getAttribute('data-city');
            const districts = chip.getAttribute('data-districts');
            
            modalTitle.innerText = city + ' Hizmet Bölgelerimiz';
            modalDistricts.innerText = districts;
            modal.style.display = 'flex';
        });
    });

    if(closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
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
