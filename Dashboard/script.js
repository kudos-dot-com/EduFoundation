import api from './apiLink.js'

window.onload = function(){
    Promise.all([
        fetch(api.get.apiPhy).then(value => value.json()),
        fetch(api.get.apiChem).then(value => value.json()),
        fetch(api.get.apiMath).then(value => value.json()),
        fetch(api.get.apiBio).then(value => value.json())
        ])
        .then(value => {
            document.getElementById("phn").textContent = value[0].result.length;
            document.getElementById("chemn").textContent = value[1].result.length;
            document.getElementById("mathn").textContent = value[2].result.length;
            document.getElementById("bion").textContent = value[3].result.length;
        });
    }