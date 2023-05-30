// Navbar
    // nav link
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
    link.addEventListener('click', e => {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    });
    });
    // end nav link

    // navbar scrol
    // navbar scrol
// Navbar
// Javascript Pricing
    // BTN Piricing
    const monthlyBtn = document.getElementById("monthly-btn");
    const annualBtn = document.getElementById("annual-btn");

    monthlyBtn.addEventListener("click", function() {
        monthlyBtn.classList.add("active");
        annualBtn.classList.remove("active");
    });

    annualBtn.addEventListener("click", function() {
        annualBtn.classList.add("active");
        monthlyBtn.classList.remove("active");
    });
    // End BTN Pricing

    // Card Priicng
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            cards.forEach(card => {
                card.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    // End Card Pricing
// End Javasccript Pricing