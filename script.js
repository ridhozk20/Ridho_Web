const navbarNav = document.querySelector('.navbar-nav');
// ketika menu diklik
document.querySelector('#hb-mn').onclick=()=>{
    navbarNav.classList.toggle('active');
};

const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            // Menambahkan kelas 'show' saat elemen muncul di viewport
            if (elementPosition < viewportHeight - 100 && elementBottom > 0) {
                element.classList.add('show');
            } else {
                // Menghapus kelas 'show' saat elemen keluar dari viewport
                element.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);