const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
async function fetchanddisplay() {
    try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const posts = await res.json();
        const tableBody = document.querySelector("#posts-table tbody");

        posts.forEach(post => {
            const row = `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `;
           
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        document.body.innerHTML += `<p style="color: red;">Failed to load data. Please try again later.</p>`;
    }
}


fetchanddisplay();
