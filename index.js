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
    "A world where everything gets decided by gambling",
    "A video game world which became realistic after the servers got closed (Overlord)",
    "The Detective Conan Universe but your inteligence is the same of Shin’ichi Kudō",
    "In the world of your favorite anime with your friends",
    "A fantasy world where you can respawn infinitly (RE:ZERO)",
    "A world where you can prove your love to your crush by protecting her from a evil clan that wants you both dead",
    "A pararell universe where your crush is your neighbour",
    "A world which you're immortal but you're incapeable of feeling emotions (The Daily Life of the Immortal King)",
    "A fantasy world where you have to fight evil magicians but you got the ability to teleport and a magical sword",
    "A world where you a have cute and hot blood related sister",
    "In the world of your favorite ecchi anime and you have daily sex with the hottest girl / boy you like.",
    "A world where you have to protect your sister from a evil group that wants her dead",
    "A world where you're the president",
    "A pararell universe where you're very powerful and you're not allowed to show your identity because you're concidered as thread and targetted for elimination",
    "In the same world but your skills are too powerful and concidered as a thread but a cute girl is on your side",
    "In a fantasy world where you get summoned as a demon lord (How NOT to Summon a Demon Lord)",
    "In the Naruto universe but you're not allowed to show your identity because you're getting hunted",
    "In a pararell universe where twitter, tiktok & reddit dosn't exists",
    "In a pararell universe where you live with your crush together but you both aren't in a relationship",
    "In a world with only 1 nation",
    "In a fantasy world but you can take your phone with you and it has WI-FI and it never runs out of battary (In Another World With My Smartphone)",
    "In a world where you have the power to create shields, explosions & able to teleport but if you see someone you love getting hurt you'll lose control of yourself.",
    "You'll get trapped in a video game world but that game is your favorite game (No Game No Live)",
    "In a pararell universe where lots of girls wants to be your girlfriend",
    "In a world where everywhere are cute kittens",
    "In a pararell universe where there's no school",
    "In a world where you and your crush are the last survivors on this world",
    "You’re just dying and landing in heaven",
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
    "./src/isekai/sislove.png",
    "./src/isekai/president.png",
    "./src/isekai/takigawattosnd.png",
    "./src/isekai/Shera_l._greenwood_6.png",
    "./src/isekai/demonlordkun.png",
    "./src/isekai/tobinaruto.png",
    "./src/isekai/nosmedia.png",
    "./src/isekai/livingwithyogirl.png",
    "./src/isekai/worldwithonly1nation.png",
    "./src/isekai/ifrikineedmyphor.png",
    "./src/isekai/averageboymage.png",
    "./src/isekai/ngnl.png",
    "./src/isekai/animeharemg.png",
    "./src/isekai/worldofkittens.png",
    "./src/isekai/noschool.png",
    "./src/isekai/worldsendharem.png",
    "./src/isekai/youdiedlmfaoo.png",
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
    "In someone's body but you only can watch them doing stuff",
    "As your crush's cat",
    "As a cute kitty",
    "Reborn as a attractive asian boy",
    "As a attractive & cute boy that attracts every girl",
    "As a powerful & cute female mage",
    "As a chair",
    "As a powerful and attractive magician but you're bond to a wheelchair",
    "Reborn as someone who looks like Toru Amuro and has the same knowledge (Detective Conan)",
    "As a undercover demon lord who works at McDonalds (The Devil Is a Part-Timer!)",
    "As someone who looks similar to Shin’ichi Kudō and has the same knowledge (Detective Conan)",
    "As Mio Naruse and have the same curse (feeling extremely sensitive and horny) but it only triggers when you feel lonely (The Testament Of Sister New Devil)",
    "As a bed",
    "As your crush's back & front phone camera",
    "As Tohka Yatogami but without spirit powers (Date a live)",
    "As a object that's used for self-pleasure",
    "As your brother's wife",
    "As a ghost with the abilty to take control of other humans",
    "As a car",
    "As a god",
    "As a table",
    "As a Vending Mashine (Reborn as a Vending Machine, I Now Wander the Dungeon)",
    "As a Sword (reincarnated as a sword)",
    "As a slime (That Time I Got Reincarnated as a Slime)"
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
    "./src/reincarnation/yuutaTheAngel.png",
    "./src/reincarnation/powerfulfmage.png",
    "./src/reincarnation/chair.png",
    "./src/reincarnation/afopow.png",
    "./src/reincarnation/Tooru_Amuro_Profile.png",
    "./src/reincarnation/l-intro-1619444419.png",
    "./src/reincarnation/shinichikudo2.png",
    "./src/reincarnation/mio_n2.png",
    "./src/reincarnation/dondra-teak-queen-bed.png",
    "./src/reincarnation/phonecam.png",
    "./src/reincarnation/tohkadal.png",
    "./src/reincarnation/sestoys.png",
    "./src/reincarnation/broswif.png",
    "./src/reincarnation/asaghast.png",
    "./src/reincarnation/nightcar.png",
    "./src/reincarnation/animegodness.png",
    "./src/reincarnation/animedesk.png",
    "./src/reincarnation/wendingmashine.png",
    "./src/reincarnation/rebornsword.png",
    "./src/reincarnation/Slime-803x452.png",
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