function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', getComments);
};

async function getPosts(){
    const selectOption = document.getElementById('posts');
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    selectOption.innerHTML = '';
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(post => {
        const option = document.createElement('option');
        option.value = post.id;
        option.text = post.title;
        selectOption.appendChild(option)
    });
};

async function getComments(){
    const postUrl = `http://localhost:3030/jsonstore/blog/posts`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    const selectOption = document.getElementById('posts').selectedOptions[0].value;
    const titleElement = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postUlElement = document.getElementById('post-comments');
    postUlElement.innerHTML = '';
    const postResponse = await fetch(postUrl);
    const postData = await postResponse.json();

    const commentsResponse = await fetch(commentsUrl);
    const commentsData = await commentsResponse.json();

    const selectedPost = Object.values(postData).find(post => post.id = selectOption);
    titleElement.textContent = selectedPost.title;
    postBody.textContent = selectedPost.body;

    const comments = Object.values(commentsData).filter(c => c.postId === selectOption);

    comments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        postUlElement.appendChild(li);
    });
};

attachEvents();