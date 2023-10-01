// const btn = document.querySelector('button');
// const para = document.querySelector('p');

// btn.addEventListener('click', updateBtn );

// function updateBtn()
// {
//     if (btn.textContent === " click me ") {
//     btn.textContent = " you clicked me";
//     para.textContent = 'hey whasup !!';
// }

// else{
//     btn.textContent = " click me ";
//     para.textContent = ".. ?? ";
// }
// }

const bt = document.querySelector('button');
const p = document.querySelector('p');




p.addEventListener('mousemove', paraTrick);


function paraTrick (){ 
    
        if (p.textContent===".. ??"){

        bt.textContent= "you were supposed to click";
        p.textContent="ahrrrr";
    }
    else {

        bt.textContent="click me";
        p.textContent='.. ??';
    }
}