
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
