document.addEventListener('DOMContentLoaded', function() {
    // ========== MOBILE NAVIGATION ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('is-active');
    });

    // Close mobile menu when clicking links
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('is-active');
        });
    });

    // ========== SMOOTH SCROLLING ==========
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get target element
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // ========== FORM HANDLING ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Store form data before submission
            const formData = {
                name: this.elements['name'].value.trim(),
                email: this.elements['email'].value.trim(),
                message: this.elements['message'].value.trim()
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.message) {
                e.preventDefault();
                alert('Please fill in all fields');
                return;
            }

            // Save to localStorage
            localStorage.setItem('formData', JSON.stringify(formData));
            
            // Show temporary feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
            }, 500);
            
            // FormSubmit will handle the actual submission
        });
    }

    // ========== SCROLL ANIMATIONS ==========
    // Add scroll reveal animations if needed
    window.addEventListener('scroll', function() {
        // You can add scroll effects here
    });

    // ========== INITIALIZATION ==========
    // Initialize any other components here
});