let url = window.location.search
let id = new URLSearchParams(url).get('id')
console.log(id)

fetch(`http://localhost:3000/agents/${id}`)

    .then((response) => response.json())
    .then((data) => {
        let agent = document.querySelector ('input[name=agent]')
        agent.value = data.name
        
    })


const updateAgent = async() => {

    let agent = document.querySelector('input[name="agent"]').value

    let response = await fetch(`http://localhost:3000/agents/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ name:agent}),
    })

    window.location.href = 'echanger.html'
    
}