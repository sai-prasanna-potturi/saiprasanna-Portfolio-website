
function mynav(){
    const data = document.getElementById("btn");
    data.addEventListener('click', ()=> {
        document.getElementById("navlist").style.display = "block";

    });
}   

function myclosenav(){
    const data = document.getElementById("btn");
    data.addEventListener('click', ()=> {
        document.getElementById("navlist").style.display = "none";

    });
}   
function myclosenav(){
    const linkdata = document.getElementById("navlist");
    linkdata.addEventListener('click', ()=>{
        document.getElementById("navlist").style.display = "none";
    });
}


function homeSection(){
    document.getElementById("myhome");
}


function myWorkGallery01(){
    window.open("https://github.com/sai-prasanna-potturi/Digital-Clock-and-Date");
}

function myWorkGallery02(){
    window.open("https://github.com/sai-prasanna-potturi/shopping-products");
}

function myWorkGallery03(){
    window.open("https://github.com/sai-prasanna-potturi/shopping-products");
}

function myGallery(){
    window.open("https://www.google.com/");
}







