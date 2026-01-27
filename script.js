
      // Initialize GSAP
      gsap.registerPlugin(ScrollTrigger);

      // Page load animation
      window.addEventListener("load", function () {
        document.body.classList.add("page-loaded");

        // Animate skill bars
        gsap.utils.toArray(".skill-bar").forEach((bar) => {
          const width = bar.getAttribute("data-width") + "%";
          ScrollTrigger.create({
            trigger: bar.parentElement.parentElement,
            start: "top 80%",
            onEnter: () => {
              gsap.to(bar, {
                width: width,
                duration: 1.5,
                ease: "power3.out",
              });
            },
          });
        });

        // Animate section elements on scroll
        gsap.utils.toArray(".page-load").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            },
          });
        });
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const hamburger = menuBtn.querySelector(".hamburger");

      menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");

        // Hamburger animation
        if (mobileMenu.classList.contains("hidden")) {
          hamburger.innerHTML = `
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
                `;
        } else {
          hamburger.innerHTML = `
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 rotate-45 translate-y-2 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 opacity-0 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-y-1 transition-all duration-300"></span>
                `;
        }
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          hamburger.innerHTML = `
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
                `;
        });
      });

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        // Show/hide back to top button
        const backToTop = document.getElementById("backToTop");
        if (window.scrollY > 500) {
          backToTop.classList.remove("hidden");
          gsap.to(backToTop, { opacity: 1, duration: 0.3 });
        } else {
          gsap.to(backToTop, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => backToTop.classList.add("hidden"),
          });
        }
      });

      // Back to top button
      document.getElementById("backToTop").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Set current year in footer
      document.getElementById("currentYear").textContent =
        new Date().getFullYear();

      // Enhanced form submission
      const contactForm = document.getElementById("contactForm");
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Loading state
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;

        // Simulate API call with animation
        setTimeout(() => {
          // Success animation
          submitBtn.innerHTML =
            '<i class="fas fa-check mr-2"></i>Message Sent!';
          submitBtn.classList.remove("from-indigo-600", "to-purple-600");
          submitBtn.classList.add("from-green-500", "to-emerald-600");

          // Show success message
          const successMessage = document.createElement("div");
          successMessage.className =
            "mt-4 p-4 bg-green-50 text-green-700 rounded-lg animate-fade-in";
          successMessage.innerHTML =
            '<i class="fas fa-check-circle mr-2"></i> Your message has been sent successfully!';
          this.appendChild(successMessage);

          // Reset form after 3 seconds
          setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove("from-green-500", "to-emerald-600");
            submitBtn.classList.add("from-indigo-600", "to-purple-600");
            successMessage.remove();
          }, 3000);
        }, 2000);
      });

      // Hover effect for cards
      document.querySelectorAll(".card-hover").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

// Certifications Section Interactions
function initializeCertificationsSection() {
    // Add Certifications to Navigation
    const desktopMenu = document.querySelector('.hidden.md\\:flex.space-x-8');
    const mobileMenu = document.querySelector('#mobileMenu .flex.flex-col.space-y-4');
    
    // Add to desktop navigation
    if (desktopMenu) {
        const certificationsLink = document.createElement('a');
        certificationsLink.href = '#certifications';
        certificationsLink.className = 'nav-link text-gray-700 hover:text-indigo-600 font-medium relative group transition-all duration-300';
        certificationsLink.innerHTML = `
            <span>Certifications</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
        `;
        
        // Insert after Skills link and before Projects link
        const skillsLink = desktopMenu.querySelector('a[href="#skills"]');
        const projectsLink = desktopMenu.querySelector('a[href="#projects"]');
        
        if (skillsLink && projectsLink) {
            skillsLink.parentNode.insertBefore(certificationsLink, projectsLink);
        } else if (skillsLink) {
            skillsLink.parentNode.insertBefore(certificationsLink, skillsLink.nextSibling);
        } else {
            desktopMenu.appendChild(certificationsLink);
        }
    }
    
    // Add to mobile navigation
    if (mobileMenu) {
        const mobileCertificationsLink = document.createElement('a');
        mobileCertificationsLink.href = '#certifications';
        mobileCertificationsLink.className = 'mobile-nav-link text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:translate-x-2';
        mobileCertificationsLink.textContent = 'Certifications';
        
        // Insert after Skills link in mobile menu
        const mobileSkillsLink = mobileMenu.querySelector('a[href="#skills"]');
        const mobileProjectsLink = mobileMenu.querySelector('a[href="#projects"]');
        
        if (mobileSkillsLink && mobileProjectsLink) {
            mobileSkillsLink.parentNode.insertBefore(mobileCertificationsLink, mobileProjectsLink);
        } else if (mobileSkillsLink) {
            mobileSkillsLink.parentNode.insertBefore(mobileCertificationsLink, mobileSkillsLink.nextSibling);
        } else {
            mobileMenu.appendChild(mobileCertificationsLink);
        }
        
        // Add click handler to close mobile menu
        mobileCertificationsLink.addEventListener('click', () => {
            const mobileMenuContainer = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger');
            
            if (mobileMenuContainer && hamburger) {
                mobileMenuContainer.classList.add('hidden');
                hamburger.innerHTML = `
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
                `;
            }
        });
    }
    
    // Add GSAP animations for certification cards
    gsap.utils.toArray('.bg-white.rounded-2xl.p-8.shadow-lg').forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: index * 0.1
                });
            }
        });
    });
}

// Initialize certifications section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCertificationsSection();
    
    // Update existing smooth scrolling to include certifications
    document.querySelectorAll('a[href="#certifications"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
});

// Hover effects for certification cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bg-white.rounded-2xl.p-8.shadow-lg').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.15)"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            });
        });
    });
    
    // Add animation to Show Credential button
    const showCredentialBtn = document.querySelector('.show-credential-btn');
    if (showCredentialBtn) {
        showCredentialBtn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        showCredentialBtn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    }
});      


// Projects Section Interactions
function initializeProjectsSection() {
    // Add Projects to Navigation
    const desktopMenu = document.querySelector('.hidden.md\\:flex.space-x-8');
    const mobileMenu = document.querySelector('#mobileMenu .flex.flex-col.space-y-4');
    
    // Add to desktop navigation
    if (desktopMenu) {
        const projectsLink = document.createElement('a');
        projectsLink.href = '#projects';
        projectsLink.className = 'nav-link text-gray-700 hover:text-indigo-600 font-medium relative group transition-all duration-300';
        projectsLink.innerHTML = `
            <span>Projects</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
        `;
        
        // Insert after Skills link and before Testimonials link
        const skillsLink = desktopMenu.querySelector('a[href="#skills"]');
        const testimonialsLink = desktopMenu.querySelector('a[href="#testimonials"]');
        
        if (skillsLink && testimonialsLink) {
            skillsLink.parentNode.insertBefore(projectsLink, testimonialsLink);
        } else if (skillsLink) {
            skillsLink.parentNode.insertBefore(projectsLink, skillsLink.nextSibling);
        } else {
            desktopMenu.appendChild(projectsLink);
        }
    }
    
    // Add to mobile navigation
    if (mobileMenu) {
        const mobileProjectsLink = document.createElement('a');
        mobileProjectsLink.href = '#projects';
        mobileProjectsLink.className = 'mobile-nav-link text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:translate-x-2';
        mobileProjectsLink.textContent = 'Projects';
        
        // Insert after Skills link in mobile menu
        const mobileSkillsLink = mobileMenu.querySelector('a[href="#skills"]');
        const mobileTestimonialsLink = mobileMenu.querySelector('a[href="#testimonials"]');
        
        if (mobileSkillsLink && mobileTestimonialsLink) {
            mobileSkillsLink.parentNode.insertBefore(mobileProjectsLink, mobileTestimonialsLink);
        } else if (mobileSkillsLink) {
            mobileSkillsLink.parentNode.insertBefore(mobileProjectsLink, mobileSkillsLink.nextSibling);
        } else {
            mobileMenu.appendChild(mobileProjectsLink);
        }
        
        // Add click handler to close mobile menu
        mobileProjectsLink.addEventListener('click', () => {
            const mobileMenuContainer = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger');
            
            if (mobileMenuContainer && hamburger) {
                mobileMenuContainer.classList.add('hidden');
                hamburger.innerHTML = `
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
                `;
            }
        });
    }
    
    // Smooth scrolling for Projects link
    document.querySelectorAll('a[href="#projects"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetElement = document.querySelector("#projects");
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
    
    // Add GSAP animations for project cards
    gsap.utils.toArray(".project-card").forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: index * 0.1
                });
            }
        });
    });
}

// Initialize projects section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectsSection();
    
    // Update existing smooth scrolling to include projects
    document.querySelectorAll('a[href="#projects"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
});

// Hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.15)"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            });
        });
    });
});      

// Testimonials View More Button
const viewMoreBtn = document.getElementById('viewMoreTestimonials');
const moreTestimonials = document.getElementById('moreTestimonials');

if (viewMoreBtn && moreTestimonials) {
    viewMoreBtn.addEventListener('click', function() {
        moreTestimonials.classList.toggle('hidden');
        
        if (moreTestimonials.classList.contains('hidden')) {
            viewMoreBtn.textContent = 'View More Testimonials';
            // Smooth scroll to keep button in view
            viewMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            viewMoreBtn.textContent = 'Show Less Testimonials';
            // Trigger animations for newly shown testimonials
            const hiddenCards = moreTestimonials.querySelectorAll('.card-hover');
            hiddenCards.forEach((card, index) => {
                card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
                card.classList.add('page-load');
                
                // Animate with GSAP
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    }
                });
            });
            
            // Scroll to show the newly revealed content
            moreTestimonials.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Add Testimonials to Navigation
function addTestimonialsToNavigation() {
    const desktopMenu = document.querySelector('.hidden.md\\:flex.space-x-8');
    const mobileMenu = document.querySelector('#mobileMenu .flex.flex-col.space-y-4');
    
    // Add to desktop navigation
    if (desktopMenu) {
        const testimonialsLink = document.createElement('a');
        testimonialsLink.href = '#testimonials';
        testimonialsLink.className = 'nav-link text-gray-700 hover:text-indigo-600 font-medium relative group transition-all duration-300';
        testimonialsLink.innerHTML = `
            <span>Testimonials</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
        `;
        
        // Insert before Contact link
        const contactLink = document.querySelector('a[href="#contact"]');
        if (contactLink) {
            contactLink.parentNode.insertBefore(testimonialsLink, contactLink);
        } else {
            desktopMenu.appendChild(testimonialsLink);
        }
    }
    
    // Add to mobile navigation
    if (mobileMenu) {
        const mobileTestimonialsLink = document.createElement('a');
        mobileTestimonialsLink.href = '#testimonials';
        mobileTestimonialsLink.className = 'mobile-nav-link text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:translate-x-2';
        mobileTestimonialsLink.textContent = 'Testimonials';
        
        // Insert before Contact link in mobile menu
        const mobileContactLink = mobileMenu.querySelector('a[href="#contact"]');
        if (mobileContactLink) {
            mobileContactLink.parentNode.insertBefore(mobileTestimonialsLink, mobileContactLink);
        } else {
            mobileMenu.appendChild(mobileTestimonialsLink);
        }
        
        // Add click handler to close mobile menu
        mobileTestimonialsLink.addEventListener('click', () => {
            mobileMenu.parentElement.classList.add('hidden');
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.innerHTML = `
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
                    <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
                `;
            }
        });
    }
}

// Initialize Testimonials Navigation
document.addEventListener('DOMContentLoaded', function() {
    addTestimonialsToNavigation();
    
    // Update smooth scrolling for new testimonials link
    document.querySelectorAll('a[href="#testimonials"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetElement = document.querySelector("#testimonials");
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
});