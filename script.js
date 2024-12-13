
const texthidden=document.getElementById("texthidden");
const readmore=document.getElementById("readmore");
texthidden.style.display='none';
readmore.onclick=()=>{
    if(texthidden.style.display==='none'){
        texthidden.style.display='inline';
        readmore.textContent='...Read Less';
    }
    else{
        texthidden.style.display='none';
        readmore.textContent='...Read More';  
    }
}


const texthidden1=document.getElementById("texthidden1");
const readmore1=document.getElementById("readmore1");
texthidden1.style.display='none';
readmore1.onclick=()=>{
    if(texthidden1.style.display==='none'){
        texthidden1.style.display='inline';
        readmore1.textContent='...Read Less';
    }
    else{
        texthidden1.style.display='none';
        readmore1.textContent='...Read More';  
    }
}


const texthidden2=document.getElementById("texthidden2");
const readmore2=document.getElementById("readmore2");
texthidden2.style.display='none';
readmore2.onclick=()=>{
    if(texthidden2.style.display==='none'){
        texthidden2.style.display='inline';
        readmore2.textContent='...Read Less';
    }
    else{
        texthidden2.style.display='none';
        readmore2.textContent='...Read More';  
    }
}


const texthidden3=document.getElementById("texthidden3");
const readmore3=document.getElementById("readmore3");
texthidden3.style.display='none';
readmore3.onclick=()=>{
    if(texthidden3.style.display==='none'){
        texthidden3.style.display='inline';
        readmore3.textContent='...Read Less';
    }
    else{
        texthidden3.style.display='none';
        readmore3.textContent='...Read More';  
    }
};