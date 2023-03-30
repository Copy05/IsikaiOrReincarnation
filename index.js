/**
 * Isekai or Reincarnation a Anime Would you rather game made by Copy05
 * If you have complains about any images used in this game please contact me immediantly!!!
 * 
 * Copyright 2023 Copy05. All Rights Reserved.
 */

const option1 = document.getElementById('option1')
const option1title = document.getElementById('option1title')

const option2 = document.getElementById('option2')
const option2title = document.getElementById('option2title')

var ri, rr;

const isekai = [
    "A world where you have the power to nuke the world.",
    "A world where you're having bad luck in life",
    "A video game world where you cannot escape but you'll find the love of your life there.",
    "A pararell universe where you're married with your crush",
    "A world where every girl wants you. (sexually)",
    "A world where you everything gets decided by gambling",
    "A video game world which became realistic after the servers got closed (Overlord)",
    "The Detective Conan Universe but your inteligence is the same of shinichi kudo",
    "In the world of your favorite anime with your friends",
    "A fantasy world where you can respawn infinitly (RE:ZERO)",
    "A world where you can prove your love to your crush by protecting her from a evil clan that wants you both dead",
    "A pararell universe where your crush is your neighbour",
    "A world which you're immortal but you lost all your emotions (The Daily Life of the Immortal King)",
    "A fantasy world where you have to fight evil magicians but you got the ability to teleport and a magical sword",
    "A world where you a have cute and hot blood related sister",
    "In the world of your favorite ecchi anime but you have a weakness for nudity and love"
]

const isekaisrc = [
    "./src/isekai/atomic.png",
    "./src/isekai/FailureBadluck.png",
    "./src/isekai/HeartScreen.png",
    "./src/isekai/lovesunset.png",
    "./src/isekai/girlwantsboy1.png",
    "./src/isekai/yumekochan.png",
    "./src/isekai/AlbedoOW.png",
    "./src/isekai/ShinichiKudo.png",
    "./src/isekai/friendship.png",
    "./src/isekai/Re-Zero.png",
    "./src/isekai/ProteccGirl1.png",
    "./src/isekai/ShiinaChan.png",
    "./src/isekai/TDLOTIK.png",
    "./src/isekai/teleportationanim.png",
    "./src/isekai/MioNaruse.png",
    "./src/isekai/TMIHRIM_Lilith.png",
]

const reincarnation = [
    "As grass",
    "As a wind mage that can controll the wind",
    "As a trash can",
    "As truck-kun",
    "As yourself but younger (Erased)",
    "As a girl in the same world",
    "As your sister's husband",
    "As a cute and beautiful girl (Date A Live)",
    "As a powerful mage but you often cannot control your magic and there's a small chance that you nuke the whole world",
    "As a tree",
    "As a human but you're in spectator mode. and only can see what that human does.",
    "As your crush's cat",
    "As a cute kitty",
    "Reborn as a attractive asian boy",
]

const reincarnationsrc = [
    "./src/reincarnation/fresh-green-grass.png",
    "./src/reincarnation/windmaster.png",
    "./src/reincarnation/trashy.png",
    "./src/reincarnation/truckkun.png",
    "./src/reincarnation/SatoruErased.png",
    "./src/reincarnation/ONIMAI_cootie.png",
    "./src/reincarnation/Detektiv-Conan-The-Culprit-Hanzawa.png",
    "./src/reincarnation/date-a-live-tohka.png",
    "./src/reincarnation/toostrongbasara.png",
    "./src/reincarnation/treeanim.png",
    "./src/reincarnation/Spectator.png",
    "./src/reincarnation/cutekitty.png",
    "./src/reincarnation/cootiekitty.png",
    "./src/reincarnation/TAKUTOasianboy.png",
]


function Firstrandomize(){
    for (let i = 0; i < 620000; i++) {
        var rand_i = Math.floor(Math.random() * isekai.length)
        rand_i = Math.floor(Math.random() * isekai.length)
        rand_i = Math.floor(Math.random() * isekai.length)

        var rand_r = Math.floor(Math.random() * reincarnation.length)
        rand_r = Math.floor(Math.random() * reincarnation.length)
        rand_r = Math.floor(Math.random() * reincarnation.length)
    }
    ri = rand_i;
    rr = rand_r;

    option1title.innerText = isekai[rand_i]
    option1.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${isekaisrc[rand_i]})`;

    option2title.innerText = reincarnation[rand_r]
    option2.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${reincarnationsrc[rand_r]})`;
}

function randomizeOption1(){
    for (let i = 0; i < 620000; i++) {
        var rand_i = Math.floor(Math.random() * isekai.length)
        rand_i = Math.floor(Math.random() * isekai.length)
        rand_i = Math.floor(Math.random() * isekai.length)
    }
    if(ri == rand_i){
        rand_i = Math.floor(Math.random() * isekai.length)
    }

    ri = rand_i;
    

    option1.style.animation = "fade-in 1s ease-in";
    option1title.innerText = isekai[rand_i]
    option1.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${isekaisrc[rand_i]})`;
    setTimeout(() => { option1.style.animation = ""; }, 1200)
}

function randomizeOption2(){
    for (let i = 0; i < 620000; i++) {
        var rand_r = Math.floor(Math.random() * reincarnation.length)
        rand_r = Math.floor(Math.random() * reincarnation.length)
        rand_r = Math.floor(Math.random() * reincarnation.length)
    }
    if(rr == rand_r){
        rand_r = Math.floor(Math.random() * reincarnation.length)
    }


    rr = rand_r;

    option2.style.animation = "fade-in 1s ease-in";
    option2title.innerText = reincarnation[rand_r]
    option2.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${reincarnationsrc[rand_r]})`;
    setTimeout(() => { option2.style.animation = ""; }, 1200)
}


document.addEventListener('DOMContentLoaded', (e) => {
    Firstrandomize();
})

option1.addEventListener('click', e => {
    option2.style.animation = "fade-out 1s ease-in";
    setTimeout(randomizeOption2, 900)
})

option2.addEventListener('click', e => {
    option1.style.animation = "fade-out 1s ease-in";
    setTimeout(randomizeOption1, 900)
    
})


// Debuging.
document.addEventListener('keypress', e => {
    if(e.code == "KeyD"){
        console.log(`Isekai: ${isekai.length}\nReincarnation: ${reincarnation.length}`);
    }
})
