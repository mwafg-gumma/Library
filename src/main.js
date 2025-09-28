
// Header 
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenuContent = document.getElementById('mobile-menu-content');

        // Function to toggle the menu
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuContent.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = mobileMenuContent.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (mobileMenuContent.classList.contains('active') && !isClickInsideMenu && !isClickOnToggle) {
                mobileMenuContent.classList.remove('active');
            }
        });
    });


    // for slider

document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.getElementById('book-slider');
    const prevBtn = document.getElementById('prev-book-btn');
    const nextBtn = document.getElementById('next-book-btn');

    if (!slider || !prevBtn || !nextBtn) {
        console.error("خطأ: لم يتم العثور على عناصر الـ Slider أو الأزرار (book-slider, prev-book-btn, next-book-btn).");
        return;
    }


    const moveSlider = (direction) => {
    
        const bookCards = slider.querySelectorAll('.book-card');
        if (bookCards.length === 0) return;

        
        const cardWidth = bookCards[0].offsetWidth;
        

        const newScrollPosition = slider.scrollLeft + (cardWidth * direction);

        
        slider.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth' 
        });
    };

    
    prevBtn.addEventListener('click', () => {
    
        moveSlider(-1);
    });

    nextBtn.addEventListener('click', () => {
    
        moveSlider(1);
    });
});

// Newsletter section
    document.addEventListener('DOMContentLoaded', () => {
        // 1. 
        const subscribeForm = document.getElementById('subscribe-form');

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for subscribing! Check your email for a confirmation.';
        
        // Form
        if (subscribeForm && subscribeForm.parentNode) {
            subscribeForm.parentNode.insertBefore(successMessage, subscribeForm.nextSibling);
        } else {
            console.error("Form element with ID 'subscribe-form' not found.");
            return;
        }

        // 2(Submission Event Handler)
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', (event) => {
                    
                event.preventDefault(); 
                
                
                successMessage.style.display = 'block';

        
                const emailInput = subscribeForm.querySelector('.email-input');
                if (emailInput && emailInput instanceof HTMLInputElement) {
                    emailInput.value = '';
                }
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 4000); 
            });
        }
    });

    // footer
           // JavaScript for interactivity (unchanged from previous version)
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for all footer links
            const allFooterLinks = document.querySelectorAll('.footer-link, .utility-link');
            allFooterLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href').substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });

            // Enhanced hover effects for icons in first column
            const iconItems = document.querySelectorAll('.icon-item');
            iconItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.color = '#5dade2'; // Lighter blue on hover
                });
                item.addEventListener('mouseleave', function() {
                    this.style.color = '#3498db';
                });
            });

            // Animate footer sections on load (staggered effect)
            const footerSections = document.querySelectorAll('.footer-section');
            footerSections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 200); // Stagger by 200ms
            });

            // Add click counter for demo (optional - shows JS working)
            let clickCount = 0;
            const copyright = document.querySelector('.copyright-section p');
            copyright.addEventListener('click', function() {
                clickCount++;
                if (clickCount % 3 === 0) {
                    this.textContent = `&copy; 2023 City Central Library. All rights reserved. | You've clicked ${clickCount} times! (Demo fun)`;
                    setTimeout(() => {
                        this.textContent = '&copy; 2023 City Central Library. All rights reserved. | Serving our community with knowledge since 1923.';
                    }, 2000);
                }
            });
        });