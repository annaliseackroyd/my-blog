async function loadBlogPost(){
    const response = await fetch("./blog.json");
    const posts = await response.json();
    const params = new URLSearchParams(window.location.search);
    const postIndex = params.get("post") || 0;
    const selectedPost = posts[postIndex];
    document.querySelector("#blog-post").innerHTML = `
    <h2>${selectedPost.title}</h2>
    <p>${selectedPost.post}</p>
    `;
}

loadBlogPost();