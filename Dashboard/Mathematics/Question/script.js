window.onload = function(){
    fetch("https://edu-foundation-kudos-dot-com.vercel.app/api/chapter/chapter/mathematics",{
        method: "GET"
    })

    .then(response => response.json())
    .then(json => {
        topic=[];
        topic=json.result
        console.log(topic)

        topic.map(e =>{

            const node = document.createElement("button");
            const textnode = document.createTextNode(e.name);
            node.appendChild(textnode);
            document.getElementById("MathDrop").appendChild(node).className="dropdown-item";
        })
    });
};

document.getElementById('jeem').addEventListener('click',() =>{
    
    var a = document.getElementById('jeem').textContent
    document.getElementById("dash").textContent=a
    document.getElementById("mb").textContent = "Mathematics";
    
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
    document.getElementById("mb").textContent = "Mathematics";
})