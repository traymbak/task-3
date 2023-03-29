function addMore(){
    let Name = document.getElementById("tbox").value ;   
    let box = document.getElementById("box");

    let li = document.createElement('li');
    li.textContent = Name;

    

    let a = document.createElement('a');
    a.textContent = 'X';
    a.style.textDecoration ='none';
    li.appendChild(a)

     let pos = box.firstElementChild;
     if(pos==null){
             box.appendChild(li);
     }else{
             box.insertBefore(li,pos)
     }


    document.getElementById("tbox").value = "";
    document.getElementById("tbox").focus;
    document.getElementById("count").innerHTML = box.childElementCount;

   
}

    let btn = document.querySelector('ul');
    btn.addEventListener('click', function(e) {

    let box = document.getElementById("box");
    let li = e.target.parentNode;
    box.removeChild(li);
    document.getElementById("count").innerHTML = box.childElementCount;

 })