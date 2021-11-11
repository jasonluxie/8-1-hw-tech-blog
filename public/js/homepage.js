const cardBuilder = async (event) => {
    event.preventDefault()
    const postTitle = document.querySelector('.new-post_title').value.trim()
    const postContent = document.querySelector('.new-post_content').value.trim()
    const res = await fetch ('api/posts', {
        method:"POST",
        body: JSON.stringify({
            postTitle,
            postContent
        }),
        headers: { "Content-Type": "application/json" },
    })
    console.log("res:", res)
    if (res.ok) {
        document.location.replace('/')
    } else {
        alert('Something went wrong')
    }
}

const deletePost = async (event) => {
    const blogID = event.target.getAttribute('data-id')
    const deleteBlogPost = await fetch (`api/posts/${blogID}`, {
        method:"DELETE",
    })
    if (deleteBlogPost) {
        document.location.replace("/")
    } else {
        alert(`Something went wrong.`)
    }
}

document.querySelector('.blog-posts_new-post').addEventListener('submit', cardBuilder)
document.querySelector('.delete-button').addEventListener('click', deletePost)