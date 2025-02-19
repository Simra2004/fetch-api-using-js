const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
function getPostIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}
async function fetchPostDetails() {
    const postId = getPostIdFromURL();

    if (!postId) {
        document.getElementById('post-details').innerHTML = `<p style="color: red;">No post ID provided.</p>`;
        return;
    }

    try {
        const res = await fetch(`${apiUrl}/${postId}`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const post = await res.json();
        const postDetails = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        document.getElementById('post-details').innerHTML = postDetails;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('post-details').innerHTML = `<p style="color: red;">Failed to load post details. Please try again later.</p>`;
    }
}

fetchPostDetails();
