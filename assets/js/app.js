
function Click(){
    let info=document.querySelector('input').value;
    let word=info.split("").reverse()
    // let text=word.toString()
    document.getElementById("reversword").innerHTML = word.toString();
    console.log(word.toString());
}


