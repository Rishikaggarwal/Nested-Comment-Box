let all=document.getElementById("all");
function createreplydiv() {

    let div=document.createElement("div");
    div.setAttribute("class", "replydiv");
    div.innerHTML += `<input type="text" placeholder="add text here" class="input"/>
    <button class="btn_submit">submit</button>`;

    return div;
}

function addreply(text){
    let div=document.createElement("div");
    div.setAttribute("class", "comment-box");
    div.innerHTML+=`
    <div class="card"><span class="comment">${text}</span>
    <span class="reply" id="reply" >Add Reply</span></div>`

    return div;
}


all.addEventListener("click",function(e){
    let replyclicked=e.target.classList.contains("reply");

    let submitclicked=e.target.classList.contains("btn_submit");
    let closestCard=e.target.closest(".comment-box")
    if(replyclicked){
        // add input box
        closestCard.appendChild(createreplydiv());
    }

    if(submitclicked){
        // add reply card
        const replydiv=e.target.closest(".replydiv");
        if(replydiv.children[0].value){
            closestCard.appendChild(addreply(replydiv.children[0].value));
            replydiv.remove();
        }
    }
})
