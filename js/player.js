function loadPlayer() {
  fetch("https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

function displayPlayer() {
    for (const player of data) {
        console.log(player);
        const player = document.getElementById()
      
    }
}
