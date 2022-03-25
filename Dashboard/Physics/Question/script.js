document.getElementById('jeem').addEventListener('click',() =>{
    
    var a = document.getElementById('jeem').textContent
    document.getElementById("dash").textContent=a
    document.getElementById("mb").textContent = "Maths";
    
    fetch("http://localhost:8080/api/chapter/add",{
        method: "POST",
        body: JSON.stringify({
            name:"light",
            subject:"physics"
            }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
            }
    })

    .then(response => response.json())
    .then(json => console.log(json));
})

document.getElementById('neet').addEventListener('click',() =>{
    
    var a = document.getElementById('neet').textContent
    document.getElementById("dash").textContent=a
    document.getElementById("mb").textContent = "Biology";
})

document.getElementById('wbjee').addEventListener('click',() =>{
    
    var a = document.getElementById('wbjee').textContent
    document.getElementById("dash").textContent=a
    document.getElementById("mb").textContent = "Maths";
})