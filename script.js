function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({

        top: section.offsetTop - 60, 

        behavior: 'smooth'
      });

    }

  }
  
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  
  function toggleMenu() {
    navMobile.classList.toggle('active');
  }
  
  hamburger.addEventListener('click', toggleMenu);
  
  const scrollToTopBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add('show');

    } else {
      scrollToTopBtn.classList.remove('show');

    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      
      behavior: 'smooth'
    });
  });
  
