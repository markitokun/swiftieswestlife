
const USERNAME = document.getElementById('USERNAME')
const PASSWORD = document.getElementById('PASSWORD')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: USERNAME.value,
        password: PASSWORD.value
        
    }
    
    console.log(data)
})