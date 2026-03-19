const items = [
    { text: "Home", link: "homepage.html" },
    { text: "About", link: "about.html" },
    { text: "Projects", link: "projects.html" },
    { text: "Education", link: "education.html" }
];

document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = items.filter(item => item.text.toLowerCase().includes(query));
    
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    if (query) {
        results.forEach(item => {
            const a = document.createElement('a');
            a.textContent = item.text;
            a.href = item.link;
            resultsDiv.appendChild(a);
        });
        resultsDiv.parentNode.classList.add('show');
    } else {
        resultsDiv.parentNode.classList.remove('show');
    }
});

// Hide the dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});



const buttons = document.querySelectorAll("[data-theme]");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(`theme-${savedTheme}`);

// Add click listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.dataset.theme;

        // Remove all theme classes
        document.body.classList.remove("theme-light", "theme-dark", "theme-contrast");

        // Add selected theme
        document.body.classList.add(`theme-${theme}`);

        // Save it
        localStorage.setItem("theme", theme);
    });
});