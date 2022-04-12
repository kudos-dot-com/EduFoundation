import api from '../../apiLink.js'

window.onload = function(){
    fetch(api.get.apiBio,{
        method: "GET"
    })

    .then(response => response.json())
    .then(json => {
        let topic=[];
        topic=json.result
        console.log(topic)

        topic.map(e =>{
            const node = document.createElement("button");
            const textnode = document.createTextNode(e.name);
            node.appendChild(textnode);
            document.getElementById("BioDrop").appendChild(node).className="dropdown-item";
        })
    });
};

document.getElementById("dash").textContent="Biology Questions"