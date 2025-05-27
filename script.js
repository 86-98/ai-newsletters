document.addEventListener('DOMContentLoaded', () => {
    const newsletterGrid = document.getElementById('newsletterGrid');
    const searchInput = document.getElementById('searchInput');

    // Function to render newsletters
    function renderNewsletters(newslettersToRender) {
        newsletterGrid.innerHTML = ''; // Clear existing content

        categories.forEach(categoryName => {
            const newslettersInCategory = newslettersToRender.filter(
                newsletter => newsletter.category === categoryName
            );

            if (newslettersInCategory.length > 0) {
                const categorySection = document.createElement('section');
                categorySection.classList.add('category-section');

                const categoryTitle = document.createElement('h2');
                categoryTitle.classList.add('category-title');
                categoryTitle.textContent = categoryName;
                categorySection.appendChild(categoryTitle);

                const gridContainer = document.createElement('div');
                gridContainer.classList.add('newsletter-grid-container');

                newslettersInCategory.forEach(newsletter => {
                    const card = document.createElement('div');
                    card.classList.add('newsletter-card');

                    const title = document.createElement('h3');
                    title.textContent = newsletter.name;

                    const description = document.createElement('p');
                    description.textContent = newsletter.description;

                    const link = document.createElement('a');
                    link.href = newsletter.url;
                    link.textContent = 'Visit Newsletter';
                    link.target = '_blank'; // Open in new tab
                    link.rel = 'noopener noreferrer';

                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(link);
                    gridContainer.appendChild(card);
                });
                categorySection.appendChild(gridContainer);
                newsletterGrid.appendChild(categorySection);
            }
        });
    }

    // Initial render
    renderNewsletters(newsletters);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredNewsletters = newsletters.filter(newsletter =>
            newsletter.name.toLowerCase().includes(searchTerm) ||
            newsletter.description.toLowerCase().includes(searchTerm) ||
            newsletter.category.toLowerCase().includes(searchTerm)
        );
        renderNewsletters(filteredNewsletters);
    });
});