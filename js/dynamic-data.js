function getComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment.log(data));
}

function displayComment() {
    for (comment of comments) {
        console.log(comment)
    }
}