function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

loadComments()

function displayData(data) {
    console.log(data)
    for (const comment of data) {
        // console.log(comment.name);
        const ul = document.getElementById('viewComments');
        const li = document.createElement('li');
        li.innerText = (`New comments:${comment.name}`);
         ul.appendChild(li);

    }


    
}



