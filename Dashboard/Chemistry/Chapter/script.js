import api from '../../apiLink.js'

document.getElementById("pchsubmit").addEventListener("click",()=>{

    var subject = "chemistry"
    var name = document.getElementById("phytopic").value;
    
    if(name == "")
        alert("All Fields are Required")
    else
    {
        document.getElementById("pchsubmit").textContent="Posting..."
        fetch(api.post.apiPost,{
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