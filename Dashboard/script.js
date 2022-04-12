import api from './apiLink.js'

window.onload = function(){

    let subn = ["phn", "chemn", "mathn", "bion"];
    let chapn = ["PhyDrop", "ChemDrop", "MathDrop", "BioDrop"];

    Promise.all([
        fetch(api.get.apiPhy).then(value => value.json()),
        fetch(api.get.apiChem).then(value => value.json()),
        fetch(api.get.apiMath).then(value => value.json()),
        fetch(api.get.apiBio).then(value => value.json())
        ])
        .then(value => {
            for(var i=0;i<value.length;i++){
                document.getElementById(subn[i]).textContent = value[i].result.length;

                value[i].result.map(e =>{
                    const node = document.createElement("button");
                    const textnode = document.createTextNode(e.name);
                    node.appendChild(textnode);
                    document.getElementById(chapn[i]).appendChild(node).className="dropdown-item";
                })
            }
        });
    }