document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const categoryContents = document.querySelectorAll('.category-content');

    // Initially hide all category contents
    categoryContents.forEach(content => content.style.display = 'none');

    categories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();

            // Hide all category contents
            categoryContents.forEach(content => content.style.display = 'none');

            // Show the clicked category content
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).style.display = 'block';
        });
    });
});