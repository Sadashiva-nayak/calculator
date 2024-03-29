let box=document.getElementsByClassName("element");
let inp=document.getElementById("display");
Array.from(box).forEach(e =>{
    e.addEventListener('click',()=>{
        if(e.innerText==='C')
        inp.value='';
        else if(e.innerText==="=")
        inp.value=eval(inp.value);
        else if(e.innerText==="AC")
        {
        let s=inp.value;
        console.log(1);
        s=s.slice(0,-1);
        inp.value=s;
        }
        else
        inp.value+=e.innerText;
    })
})