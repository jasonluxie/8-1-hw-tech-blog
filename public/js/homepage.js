const cardBuilder = async (event) => {
    event.preventDefault()
    const res = await fetch ('api/posts', {
        method:"POST",
        body: JSON.stringify({
            postTitle,
            postContent
        }),
        headers: { "Content-Type": "application/json" },
    })
    if (res.ok) {
        document.location.replace('/')
    } else {
        alert('Something went wrong')
    }

}

document.querySelector('#post-submit-btn').addEventListener('submit', cardBuilder)