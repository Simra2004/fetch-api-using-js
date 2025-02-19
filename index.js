import { getPosts } from './api.js';

async function displayPosts() {
    const posts = await getPosts();
    const tableBody = document.querySelector("#posts-table tbody");

    tableBody.innerHTML = posts.slice(0, 20).map(post => `
        <tr>
            <td>${post.id}</td>
            <td>${post.title} 
                <button onclick="viewDetails(${post.id})">Show More</button>
            </td>
        </tr>
    `).join('');
}

window.viewDetails = (postId) => {
    window.location.href = `details.html?id=${postId}`;
};

displayPosts();
