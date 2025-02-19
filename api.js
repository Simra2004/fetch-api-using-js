const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
    let posts = JSON.parse(localStorage.getItem('posts'));

    if (!posts) {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        posts = await res.json();
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    return posts;
}
