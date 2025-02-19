const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
async function fetchanddisplay() {
    try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const posts = await res.json();
        const tableBody = document.querySelector("#posts-table tbody");

        // Display only the first 20 posts
        posts.slice(0, 20).forEach(post => {
            const row = `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title} 
                        <button onclick="viewDetails(${post.id})">Show More</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        document.body.innerHTML += `<p style="color: red;">Failed to load data. Please try again later.</p>`;
    }
}

// Function to redirect to details page with post ID as a query parameter
function viewDetails(postId) {
    window.location.href = `details.html?id=${postId}`;
}

fetchanddisplay();
