import { getPosts } from './api.js';

async function displayPostDetails() {
    const posts = await getPosts();
    const postId = new URLSearchParams(window.location.search).get('id');
    const post = posts.find(p => p.id == postId);

    document.getElementById('post-details').innerHTML = post 
        ? `<h2>${post.title}</h2><p>${post.body}</p>` 
        : `<p style="color: red;">Post not found.</p>`;
}

displayPostDetails();
