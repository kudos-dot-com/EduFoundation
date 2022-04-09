import api from '../../apiLink.js'

console.log(api.get.apiPhy)

document.getElementById("pchsubmit").addEventListener("click",()=>{

    var subject = window.location.pathname.split('/')[1].toLowerCase();
    var name = document.getElementById("phytopic").value;

    console.log(subject)
    console.log(name)
    if(name == "")
        alert("All Fields are Required")
    else
    {
        document.getElementById("pchsubmit").textContent="Posting..."
        fetch(api.post.apiPhyPost,{
            method: "POST",
            body: JSON.stringify({
                name,
                subject
                }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                document.getElementById("pchsubmit").textContent="Submit"
                console.log(json)
                alert(json.message)});
        }
})