let url = window.location.search
let id = new URLSearchParams(url).get('id')
console.log(id)

fetch(`http://localhost:3000/agents/${id}`)
    .then((response) => response.json())
    .then((data) => {
        let agent = document.querySelector ('#agent')
        agent.innerHTML = `
        <small>${data.id}</small>
        <h1>${data.name}</h1>
        <a class = "linkButton" href="echanger.html"> Back </a>
        <br>
        <a class = "linkButton" href="rename.html?id=${data.id}">Rename</a>
        <br>
        <button class = "linkButton" onclick= "deleteAgent()">Delete</button>
        `
    })

const deleteAgent = async () => {
    let response = await fetch(`http://localhost:3000/agents/${id}`, {
        method: 'DELETE',
    })

    window.location.href = 'echanger.html'
}
