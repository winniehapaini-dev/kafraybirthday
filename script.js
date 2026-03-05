const pages = document.querySelectorAll(".page");
let total = pages.length;
let current = 1;

pages.forEach((page, index)=>{
    page.style.zIndex = total - index;
});

pages.forEach((page, index)=>{
    page.style.zIndex = total - index;
});

function start(){
    document.getElementById("intro").style.display="none";
    document.getElementById("book").style.display="block";
    document.getElementById("music").play();
    confetti({particleCount:150,spread:100});
}

function playFlip(){
    const flip=document.getElementById("flipSound");
    flip.currentTime=0;
    flip.play();
}

function nextPage(){
    if(current <= total){
        playFlip();
        document.getElementById("p"+current).classList.add("flipped");
        current++;
    }
    if(current > total){
        confetti({particleCount:400,spread:150});
    }
}

function prevPage(){
    if(current > 1){
        current--;
        playFlip();
        document.getElementById("p"+current).classList.remove("flipped");
    }
}

// Hidden message
function showHidden(){
    const secret = document.getElementById("secret");
    const typed = document.getElementById("typed");

    secret.classList.add("show");

    let text = `back then, u were simply living unaware of time,
unaware of chance,
unaware of how quickly moments like these would pass.
yet within this small, ordinary season of your life,
u were already becoming 
already carrying the beginnings of everything u are today.`;

    let i = 0; 
    typed.innerHTML = "";

    let typing = setInterval(()=>{
        if(i < text.length){
            typed.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    },40);

    confetti({particleCount:80,spread:60});
}