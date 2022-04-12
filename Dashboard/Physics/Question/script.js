import api from '../../apiLink.js'

window.onload = function(){
    fetch(api.get.apiPhy,{
        method: "GET"
    })

    .then(response => response.json())
    .then(json => {
        let topic=[];
        topic=json.result

        topic.map(e =>{
            const node = document.createElement("option");
            const textnode = document.createTextNode(e.name);
            node.appendChild(textnode);
            document.getElementById("PhyDrop").appendChild(node).className="dropdown-item"
        })
    });
};

document.getElementById("dash").textContent="Physics Questions"
var chapter
document.getElementById("PhyDrop").addEventListener("change",()=>{
    chapter = document.getElementById("PhyDrop").value
    //console.log(chapter)
})

document.getElementById("sub").addEventListener("click",()=>{
    
    var question = document.getElementById("ques").value
    var option1 = document.getElementById("op1").value
    var option2 = document.getElementById("op2").value
    var option3 = document.getElementById("op3").value
    var option4 = document.getElementById("op4").value
    var hints = document.getElementById("hints").value
    var correct_answer = document.getElementById("ans").value
    
    //console.log(question,option1,option2,option3,option4,hints,correct_answer,chapter)
    
    var subject = "physics"
    
    if(question == "" || option1 == "" || option2 == "" || option3 == "" || option4 == ""|| hints == "" || correct_answer == "")
        alert("All Fields are Required")
    if (correct_answer == option1 || correct_answer == option2 || correct_answer == option3 || correct_answer == option4)
    {
        document.getElementById("sub").textContent="Posting..."
        fetch(api.post.apiQ,{
            method: "POST",
            body: JSON.stringify({
                question, chapter, subject, option1, option2, option3, option4, correct_answer, hints
                }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                document.getElementById("sub").textContent="Submit"
                console.log(json)
                alert(json.message)});
    }
    else
        alert("Correct Answer must be same as one of the Options")
})