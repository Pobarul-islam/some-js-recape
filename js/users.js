function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    .then(data=>displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user.email)
        const li = document.createElement('li');
        li.innerText = (`new user: ${user.name}, email:${user.email}`);
        ul.appendChild(li)
    }
}