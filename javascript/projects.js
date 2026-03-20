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

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".category");
    const contents = document.querySelectorAll(".category-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");

            const target = button.dataset.category;
            document.getElementById(target).classList.add("active");
        });
    });

});