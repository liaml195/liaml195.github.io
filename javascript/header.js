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