const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(err => console.log(err));
}

getUsers();