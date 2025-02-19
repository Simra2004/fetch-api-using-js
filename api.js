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
                        <button onclick="toggleBody(${post.id})" id="btn-${post.id}">Show More</button>
                        <p id="body-${post.id}" style="display: none;">${post.body}</p>
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

// Function to toggle the body of the post
function toggleBody(postId) {
    const bodyElement = document.getElementById(`body-${postId}`);
    const button = document.getElementById(`btn-${postId}`);
    
    if (bodyElement.style.display === "none") {
        bodyElement.style.display = "block";
        button.textContent = "Show Less";
    } else {
        bodyElement.style.display = "none";
        button.textContent = "Show More";
    }
}

fetchanddisplay();
