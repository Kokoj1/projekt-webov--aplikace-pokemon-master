const startbutton = document.getElementById("startbutton");
const startscreen = document.getElementById("startscreen");
const choosepok = document.getElementById("choosepok");
const pikachu = document.getElementById("pikachu");
const charmander = document.getElementById("charmander");
const squirtle = document.getElementById("squirtle");
const bulbasaur = document.getElementById("bulbasaur");
const stats = document.getElementById("stats");
const statsen = document.getElementById("statsen");
const pokemon = document.getElementById("pokemon");
const move1=document.getElementById("move1");
const move2=document.getElementById("move2");
const move3=document.getElementById("move3");
const move4=document.getElementById("move4");
const move5=document.getElementById("move5");
const battle = document.getElementById("battle");
const hp = document.getElementById("hp");
const hpen = document.getElementById("hpen");
const hpbar = document.getElementById("hpbar");
const chooseenpok = document.getElementById("chooseenpok");
const encharmander = document.getElementById("encharmander");
const enpikachu = document.getElementById("enpikachu");
const ensquirtle = document.getElementById("ensquirtle");
const enbulbasaur = document.getElementById("enbulbasaur");
const enemypok = document.getElementById("enemypok");
const menubattle =document.getElementById("menubattle");
const info = document.getElementById("info");
const hpbaryour = document.getElementById("hpbaryour");
const moves = document.getElementById("moves");
const yourname = document.getElementById("yourname");
const enemypokemon1 = document.getElementById("enemypokemon1");
const titlesong=document.getElementById("titlesong");
const battlesong =document.getElementById("battlesong");
const victorysong = document.getElementById("victorysong");
const endbutton = document.getElementById("endbutton");
const endgood = document.getElementById("endgood");
const endbad = document.getElementById("endbad");
const pikachucri = document.getElementById("pikachucri");
const charmandercri = document.getElementById("charmandercri");
const squirtlecri = document.getElementById("squirtlecri");
const bulbasaurcri = document.getElementById("bulbasaurcri");
   


startbutton.onclick = ()=>{
    titlesong.play();
startscreen.style.display="none";
choosepok.style.display="block";
}
pikachu.addEventListener("mouseover", function handleMouseOverEvent(){
    stats.style.display="block";
    stats.innerHTML="Pikachu";
});
pikachu.addEventListener('mouseout', function handleMouseOutEvent() {
    stats.style.display="none";
    });
    charmander.addEventListener("mouseover", function handleMouseOverEvent(){
        stats.style.display="block";
        stats.innerHTML="Charmander";
    });
    charmander.addEventListener('mouseout', function handleMouseOutEvent() {
        stats.style.display="none";
        });
        squirtle.addEventListener("mouseover", function handleMouseOverEvent(){
            stats.style.display="block";
            stats.innerHTML="Squirtle";
        });
        squirtle.addEventListener('mouseout', function handleMouseOutEvent() {
            stats.style.display="none";
            });
            bulbasaur.addEventListener("mouseover", function handleMouseOverEvent(){
                stats.style.display="block";
                stats.innerHTML="Bulbasaur";
            });
            bulbasaur.addEventListener('mouseout', function handleMouseOutEvent() {
                stats.style.display="none";
                });

enpikachu.addEventListener("mouseover", function handleMouseOverEvent(){
    statsen.style.display="block";
    statsen.innerHTML="Pikachu";
});
enpikachu.addEventListener('mouseout', function handleMouseOutEvent() {
    statsen.style.display="none";
    });
    encharmander.addEventListener("mouseover", function handleMouseOverEvent(){
        statsen.style.display="block";
        statsen.innerHTML="Charmander";
    });
    encharmander.addEventListener('mouseout', function handleMouseOutEvent() {
        statsen.style.display="none";
        });
        ensquirtle.addEventListener("mouseover", function handleMouseOverEvent(){
            statsen.style.display="block";
            statsen.innerHTML="Squirtle";
        });
        ensquirtle.addEventListener('mouseout', function handleMouseOutEvent() {
            statsen.style.display="none";
            });
           enbulbasaur.addEventListener("mouseover", function handleMouseOverEvent(){
                statsen.style.display="block";
                statsen.innerHTML="Bulbasaur";
            });
            enbulbasaur.addEventListener('mouseout', function handleMouseOutEvent() {
                statsen.style.display="none";
                });


    let yourpok = 0;
    let hpenemy = 16; // životy nepřítele
    let yattdamhpbar1 =0; // hráčova síla útoku (projeví se v hp baru)
    let yattdamhpbar2 =0; // hráčova síla útoku (projeví se v hp baru)
    let yattdamhpbar3 =0; // hráčova síla útoku (projeví se v hp baru)
    let yattdamhpbar4 =0; // hráčova síla útoku (projeví se v hp baru)
    let yattdamhpbar5 =0; // hráčova síla útoku (projeví se v hp baru)
    let hpbarlen = 0; // nepřátelská délka hp baru
    let enemyattdamhpbar = 0; // nepřítelova síla (projeví se v hp baru)
    let yourhp = 16; // životy hráče
    let yourhpbarlen = 0; // hráčova délka hp baru
    let damage1 = 0; // síla útoku hráče (číselná)
    let damage2 = 0; // síla útoku hráče (číselná)
    let damage3 = 0; // síla útoku hráče (číselná)
    let damage4 = 0; // síla útoku hráče (číselná)
    let damage5 = 0; // síla útoku hráče (číselná)
    let damageen = 0; //síla útoku nepřitele (číselná)
    let z = 0;
    let u = 0;
    let t = 0;
    let move1d=0;
    let move2d=0;
    let move3d=0;
    let move4d=0;
    let move5d=0;
    let enemypokemon=0;
    let enemydamage1 = 0;
    let enemydamage = 0;
    let yourpok1=0;
    let enemypokemonname=0;
    let think = 0;
  
    pikachu.onclick = () => {
        pikachucri.play();
        pokemon.style.backgroundImage="url(./res/img/Pikachu1.png)";
        choosepok.style.display="none";
        chooseenpok.style.display="block";
        yourpok = "Pikachu";
        yourpok1 = 1;
        move1.innerHTML="Nuzzle";
        move2.innerHTML="Quick attack";
        move3.innerHTML="Feint";
        move4.innerHTML="Fake out";
        move5.innerHTML="Flail";

    }
    charmander.onclick = () => {
        charmandercri.play();
        pokemon.style.backgroundImage="url(./res/img/Charmander1.png)";
        choosepok.style.display="none";
        chooseenpok.style.display="block";
        yourpok = "Charmander"; 
        yourpok1 = 2;
        move1.innerHTML="Scratch";
        move2.innerHTML="Fire fang";
        move3.innerHTML="Slash";
        move4.innerHTML="Bite";
        move5.innerHTML="Dragon tail";

    }
    squirtle.onclick = () => {
        squirtlecri.play();
        pokemon.style.backgroundImage="url(./res/img/Squirtle1.png)";
        choosepok.style.display="none";
        chooseenpok.style.display="block";
        yourpok = "Squirtle"; 
        yourpok1 = 3;
        move1.innerHTML="Tackle";
        move2.innerHTML="Rapid spin";
        move3.innerHTML="Bite";
        move4.innerHTML="Aqua jet";
        move5.innerHTML="Fake out";

    }
    bulbasaur.onclick = () => {
        bulbasaurcri.play();
        pokemon.style.backgroundImage="url(./res/img/Bulbasaur1.png)";
        choosepok.style.display="none";
        chooseenpok.style.display="block";
        yourpok = "Bulbasaur"; 
        yourpok1 = 4;
        move1.innerHTML="Tackle";
        move2.innerHTML="Vine whip";
        move3.innerHTML="Razor leaf";
        move4.innerHTML="Power whip";
        move5.innerHTML="Seed bomb";

    }

    encharmander.onclick = () => {
        charmandercri.play();
        enemypokemonname="Charmander";
        titlesong.pause();
        battlesong.play();
        enemypok.style.backgroundImage="url(./res/img/Charmander.png)";
        enemypokemon1.innerHTML="Charmander";
        yourname.innerHTML=yourpok;
enemypokemon=" Enemy Charmander";
enemydamage1 = "Fire fang";
        chooseenpok.style.display="none";
        battle.style.display="block";
        if(yourpok1=1){
            damageen = Math.floor(Math.random() * 5)+1;
            damage1= 3;
            damage2 = 2;
            damage3 = 1;
            damage4 = 4;
            damage5 = 5;

    
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         enemydamage =(6/hpenemy*100);
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
        }
      else if(yourpok1=2){
        damageen = Math.floor(Math.random() * 5)+1;
        damage1= 3;
        damage2 = 3;
        damage3 = 2;
        damage4 = 1;
        damage5 = 4;
   
     hp.innerHTML= hpenemy;
     hpbarlen = 100;
     yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yourhp = 16;
     enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
     hpen.innerHTML= yourhp;
      yourhpbarlen=100;
           }
           else if(yourpok1=4){
            damageen = Math.floor(Math.random() * 3)+1;
            damage1= 1;
            damage2 = 1;
            damage3 = 1;
            damage4 = 2;
            damage5 = 2;
       
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
               }

               else if(yourpok1=3){
                damageen = Math.floor(Math.random() * 8)+1;
                damage1= 7;
                damage2 = 8;
                damage3 = 5;
                damage4 = 3;
                damage5 = 4;
           
             hp.innerHTML= hpenemy;
             hpbarlen = 100;
             yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yourhp = 16;
             enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
             hpen.innerHTML= yourhp;
              yourhpbarlen=100;
                   }
    }
    ensquirtle.onclick = () => {
        squirtlecri.play();
        enemypokemonname="Squirtle";
        titlesong.pause();
        battlesong.play();
        enemypok.style.backgroundImage="url(./res/img/Squirtle.png)";
        enemypokemon1.innerHTML="Squirtle";
        yourname.innerHTML=yourpok;
        enemypokemon="Enemy Squirtle";
        enemydamage1 = "Bite";
        chooseenpok.style.display="none";
        battle.style.display="block";
        if(yourpok1=1){
            damageen = Math.floor(Math.random() * 8)+1;
            damage1= 4;
            damage2 = 6;
            damage3 = 5;
            damage4 = 4;
            damage5 = 5;

    
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         enemydamage =(6/hpenemy*100);
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
        }
      else if(yourpok1=2){
        damageen = Math.floor(Math.random() * 3)+1;
        damage1= 3;
        damage2 = 3;
        damage3 = 2;
        damage4 = 1;
        damage5 = 2;
   
     hp.innerHTML= hpenemy;
     hpbarlen = 100;
     yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yourhp = 16;
     enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
     hpen.innerHTML= yourhp;
      yourhpbarlen=100;
           }
           else if(yourpok1=4){
            damageen = Math.floor(Math.random() * 8)+1;
            damage1= 5;
            damage2 = 6;
            damage3 = 4;
            damage4 = 3;
            damage5 = 3;
       
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
               }

               else if(yourpok1=3){
                damageen = Math.floor(Math.random() * 5)+1;
                damage1= 6;
                damage2 = 3;
                damage3 = 4;
                damage4 = 1;
                damage5 = 4;
           
             hp.innerHTML= hpenemy;
             hpbarlen = 100;
             yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yourhp = 16;
             enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
             hpen.innerHTML= yourhp;
              yourhpbarlen=100;
                   }
    }
    enpikachu.onclick = () => {
        pikachucri.play();
        enemypokemonname="Pikachu";
        titlesong.pause();
        battlesong.play();
        enemypok.style.backgroundImage="url(./res/img/Pikachu.png)";
        enemypokemon1.innerHTML="Pikachu";
        yourname.innerHTML=yourpok;
        enemydamage1 = "Quick attack";
        enemypokemon="Enemy Pikachu";
        chooseenpok.style.display="none";
        battle.style.display="block";
        if(yourpok1=1){
            damageen = Math.floor(Math.random() * 5)+1;
            damage1= 3;
            damage2 = 2;
            damage3 = 1;
            damage4 = 4;
            damage5 = 5;

    
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         enemydamage =(6/hpenemy*100);
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
        }
      else if(yourpok1=2){
        titlesong.pause();
        damageen = Math.floor(Math.random() * 5)+1;
        damage1= 3;
        damage2 = 3;
        damage3 = 2;
        damage4 = 1;
        damage5 = 4;
   
     hp.innerHTML= hpenemy;
     hpbarlen = 100;
     yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yourhp = 16;
     enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
     hpen.innerHTML= yourhp;
      yourhpbarlen=100;
           }
           else if(yourpok1=4){
            damageen = Math.floor(Math.random() * 5)+1;
            damage1= 2;
            damage2 = 1;
            damage3 = 1;
            damage4 = 4;
            damage5 = 2;
       
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
               }

               else if(yourpok1=3){
                damageen = Math.floor(Math.random() * 3)+1;
                damage1= 6;
                damage2 = 3;
                damage3 = 4;
                damage4 = 1;
                damage5 = 4;
           
             hp.innerHTML= hpenemy;
             hpbarlen = 100;
             yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yourhp = 16;
             enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
             hpen.innerHTML= yourhp;
              yourhpbarlen=100;
                   }
    }
    enbulbasaur.onclick = () => {
        bulbasaurcri.play();
        enemypokemonname="Bulbasaur";
        titlesong.pause();
        battlesong.play();
        enemypok.style.backgroundImage="url(./res/img/Bulbasaur.png)";
        enemypokemon1.innerHTML="Bulbasaur";
        yourname.innerHTML=yourpok;
        enemydamage1 = "Razor leaf";
        enemypokemon="Enemy Bulbasaur";
        chooseenpok.style.display="none";
        battle.style.display="block";
        if(yourpok1=1){
            damageen = Math.floor(Math.random() * 5)+1;
            damage1= 3;
            damage2 = 2;
            damage3 = 1;
            damage4 = 4;
            damage5 = 5;

    
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         enemydamage =(6/hpenemy*100);
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
        }
      else if(yourpok1=2){
        damageen = Math.floor(Math.random() * 3)+1;
        damage1= 5;
        damage2 = 3;
        damage3 = 4;
        damage4 = 8;
        damage5 = 4;
   
     hp.innerHTML= hpenemy;
     hpbarlen = 100;
     yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
     yourhp = 16;
     enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
     hpen.innerHTML= yourhp;
      yourhpbarlen=100;
           }
           else if(yourpok1=4){
            damageen = Math.floor(Math.random() * 5)+1;
            damage1= 3;
            damage2 = 4;
            damage3 = 4;
            damage4 = 3;
            damage5 = 2;
       
         hp.innerHTML= hpenemy;
         hpbarlen = 100;
         yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
         yourhp = 16;
         enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
         hpen.innerHTML= yourhp;
          yourhpbarlen=100;
               }

               else if(yourpok1=3){
                damageen = Math.floor(Math.random() * 3)+1;
                damage1= 3;
                damage2 = 3;
                damage3 = 2;
                damage4 = 1;
                damage5 = 2;
           
             hp.innerHTML= hpenemy;
             hpbarlen = 100;
             yattdamhpbar1 =(damage1/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar2 =(damage2/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar3 =(damage3/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar4 =(damage4/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yattdamhpbar5 =(damage5/hpenemy*100); // hráčova síla útoku (projeví se v hp baru)
             yourhp = 16;
             enemyattdamhpbar= (damageen/yourhp*100);  // nepřítelova síla (projeví se v hp baru)
             hpen.innerHTML= yourhp;
              yourhpbarlen=100;
                   }
    }
      move1.onclick = () => {
        move1d = move1.innerHTML;
        hp.innerHTML=(hpenemy-=damage1)+ "/16";
        moves.style.display="none";
        info.innerHTML= yourpok + " used " + move1d;
        z = hpbarlen-=yattdamhpbar1; //damage of enemy
        hpbar.style.width= z + "px";
        pokemon.style.marginLeft="800px";
        pokemon.style.marginTop="-150px";
        setTimeout(function() {
            pokemon.style.marginLeft="50px";
            pokemon.style.marginTop="200px";
            info.innerHTML="";
             }, 500);
             if(hpenemy<=0){
                                                        
                info.innerHTML = enemypokemonname + " fainted";
                move1.style.display="none";
                move2.style.display="none";
                move3.style.display="none";
                move4.style.display="none";
                move5.style.display="none";
                hp.innerHTML = "0";
                hpbar.style.width="0px";
                endbutton.style.display="block";
                endbutton.onclick = () =>{
                    battle.style.display="none";
                        endgood.style.display="block";

                }
                battlesong.pause();
                victorysong.play();
                clearInterval(interval);
                
             }
             setTimeout(function() {
               
                hpen.innerHTML=(yourhp-=damageen)+ "/16";
                u = yourhpbarlen-=enemyattdamhpbar; // player damage
                hpbaryour.style.width= u + "px";
                enemypok.style.marginLeft="200px";
                enemypok.style.marginTop="300px";
                info.innerHTML=enemypokemon + " used " + enemydamage1 ;
                if(yourhp<1){
                    hpbaryour.style.width="0px";
                    hpen.innerHTML="0";
                    move1.style.display="none";
                    move2.style.display="none";
                    move3.style.display="none";
                    move4.style.display="none";
                    move5.style.display="none";
                    endbutton.style.display="block";
                    endbutton.onclick = () =>{
                        battle.style.display="none";
                            endbad.style.display="block";
                            battlesong.pause();
                    }

                 }
                setTimeout(function() {
                    enemypok.style.marginLeft="780px";
                    enemypok.style.marginTop="100px";
                    info.innerHTML="";
                    moves.style.display="block";
                },700)
                 }, 1000);
           
               
                


            
      
    }   
    
    move2.onclick = () => {
        move2d = move2.innerHTML;
        hp.innerHTML=(hpenemy-=damage2) + "/16";  
        moves.style.display="none";
        info.innerHTML= yourpok + " used " + move2d;
        z = hpbarlen-=yattdamhpbar2; //damage of enemy
        hpbar.style.width= z + "px";
        pokemon.style.marginLeft="800px";
        pokemon.style.marginTop="-150px";
        setTimeout(function() {
            pokemon.style.marginLeft="50px";
            pokemon.style.marginTop="320px";
            info.innerHTML="";
             }, 500);
             if(hpenemy<=0){
                                                        
                info.innerHTML = enemypokemonname + " fainted";
                move1.style.display="none";
                move2.style.display="none";
                move3.style.display="none";
                move4.style.display="none";
                move5.style.display="none";
                hp.innerHTML = "0";
                hpbar.style.width="0px";
                endbutton.style.display="block";
                endbutton.onclick = () =>{
                    battle.style.display="none";
                        endgood.style.display="block";

                }
                battlesong.pause();
                victorysong.play();
                clearInterval(interval);
                
             }
             setTimeout(function() {
               
                hpen.innerHTML=(yourhp-=damageen)+ "/16";
                u = yourhpbarlen-=enemyattdamhpbar; // player damage
                hpbaryour.style.width= u + "px";
                enemypok.style.marginLeft="200px";
                enemypok.style.marginTop="300px";
                info.innerHTML=enemypokemon + " used " + enemydamage1 ;
                if(yourhp<1){
                    hpbaryour.style.width="0px";
                    hpen.innerHTML="0";
                    move1.style.display="none";
                    move2.style.display="none";
                    move3.style.display="none";
                    move4.style.display="none";
                    move5.style.display="none";
                    endbutton.style.display="block";
                    endbutton.onclick = () =>{
                        battle.style.display="none";
                            endbad.style.display="block";
                            battlesong.pause();

                    }
                 }
                setTimeout(function() {
                    enemypok.style.marginLeft="780px";
                   enemypok.style.marginTop="100px";
                    info.innerHTML="";
                    moves.style.display="block";
                },700)
                 }, 1000);
          
               
          
            
       
    }  
    move3.onclick = () => {
        move3d = move3.innerHTML;
        hp.innerHTML=(hpenemy-=damage3) + "/16";  
        moves.style.display="none";
        info.innerHTML= yourpok + " used " + move3d;
        z = hpbarlen-=yattdamhpbar3; //damage of enemy
        hpbar.style.width= z + "px";
        pokemon.style.marginLeft="800px";
        pokemon.style.marginTop="-150px";
        setTimeout(function() {
            pokemon.style.marginLeft="50px";
            pokemon.style.marginTop="320px";
            info.innerHTML="";
             }, 500);
             if(hpenemy<=0){
                                                        
                info.innerHTML = enemypokemonname + " fainted";
                move1.style.display="none";
                move2.style.display="none";
                move3.style.display="none";
                move4.style.display="none";
                move5.style.display="none";
                hp.innerHTML = "0";
                hpbar.style.width="0px";
                endbutton.style.display="block";
                endbutton.onclick = () =>{
                    battle.style.display="none";
                        endgood.style.display="block";

                }
                battlesong.pause();
                victorysong.play();
                clearInterval(interval);
                
             }
             setTimeout(function() {
              
                hpen.innerHTML=(yourhp-=damageen) + "/16";
                u = yourhpbarlen-=enemyattdamhpbar; // player damage
                hpbaryour.style.width= u + "px";
                enemypok.style.marginLeft="200px";
                enemypok.style.marginTop="300px";
                info.innerHTML=enemypokemon + " used " + enemydamage1 ;
                if(yourhp<1){
                    hpbaryour.style.width="0px";
                    hpen.innerHTML="0";
                    move1.style.display="none";
                    move2.style.display="none";
                    move3.style.display="none";
                    move4.style.display="none";
                    move5.style.display="none";
                    endbutton.style.display="block";
                    endbutton.onclick = () =>{
                        battle.style.display="none";
                            endbad.style.display="block";
                            battlesong.pause();
                    }
                 }
                setTimeout(function() {
                    enemypok.style.marginLeft="780px";
                    enemypok.style.marginTop="100px";
                    info.innerHTML="";
                    moves.style.display="block";
                },700)
                 }, 1000);
          
              
                 
                }

                 move4.onclick = () => {
                    move4d = move4.innerHTML;
                    hp.innerHTML=(hpenemy-=damage4) + "/16";  
                    moves.style.display="none";
                    info.innerHTML= yourpok + " used " + move4d;
                    z = hpbarlen-=yattdamhpbar4; //damage of enemy
                    hpbar.style.width= z + "px";
                    pokemon.style.marginLeft="800px";
                    pokemon.style.marginTop="-150px";
                    setTimeout(function() {
                        pokemon.style.marginLeft="50px";
                        pokemon.style.marginTop="320px";
                        info.innerHTML="";
                         }, 500);
                         if(hpenemy<=0){
                                                        
                            info.innerHTML = enemypokemonname + " fainted";
                            move1.style.display="none";
                            move2.style.display="none";
                            move3.style.display="none";
                            move4.style.display="none";
                            move5.style.display="none";
                            hp.innerHTML = "0";
                            hpbar.style.width="0px";
                            endbutton.style.display="block";
                            endbutton.onclick = () =>{
                                battle.style.display="none";
                                    endgood.style.display="block";

                            }
                            battlesong.pause();
                            victorysong.play();
                            clearInterval(interval);
                            
                         }
                         setTimeout(function() {
                         
                            hpen.innerHTML=(yourhp-=damageen)+ "/16";
                            u = yourhpbarlen-=enemyattdamhpbar; // player damage
                            hpbaryour.style.width= u + "px";
                            enemypok.style.marginLeft="200px";
                            enemypok.style.marginTop="300px";
                            info.innerHTML=enemypokemon + " used " + enemydamage1 ;
                            if(yourhp<1){
                                hpbaryour.style.width="0px";
                                hpen.innerHTML="0";
                                move1.style.display="none";
                                move2.style.display="none";
                                move3.style.display="none";
                                move4.style.display="none";
                                move5.style.display="none";
                                endbutton.style.display="block";
                                endbutton.onclick = () =>{
                                    battle.style.display="none";
                                        endbad.style.display="block";
                                        battlesong.pause();
                                }
                             }
                            setTimeout(function() {
                                enemypok.style.marginLeft="780px";
                                enemypok.style.marginTop="100px";
                                info.innerHTML="";
                                moves.style.display="block";
                            },700)
                             }, 1000);
                        
                          
                          

                            }
                          

                                        move5.onclick = () => {
                                            move5d = move5.innerHTML;
                                            hp.innerHTML=(hpenemy-=damage5) + "/16";  
                                            moves.style.display="none";
                                            info.innerHTML= yourpok + " used " + move5d;
                                            z = hpbarlen-=yattdamhpbar5; //damage of enemy
                                            hpbar.style.width= z + "px";
                                            pokemon.style.marginLeft="800px";
                                            pokemon.style.marginTop="-150px";
                                            setTimeout(function() {
                                                pokemon.style.marginLeft="50px";
                                                pokemon.style.marginTop="320px";
                                                info.innerHTML="";
                                                 }, 500);
                                                 if(hpenemy<=0){
                                                        
                                                    info.innerHTML = enemypokemonname + " fainted";
                                                    move1.style.display="none";
                                                    move2.style.display="none";
                                                    move3.style.display="none";
                                                    move4.style.display="none";
                                                    move5.style.display="none";
                                                    hp.innerHTML = "0";
                                                    hpbar.style.width="0px";
                                                    endbutton.style.display="block";
                                                    endbutton.onclick = () =>{
                                                        battle.style.display="none";
                                                            endgood.style.display="block";

                                                    }
                                                    battlesong.pause();
                                                    victorysong.play();
                                                    clearInterval(interval);
                                                    
                                                 }
                                                 setTimeout(function() {
                                                   
                                                    hpen.innerHTML=(yourhp-=damageen)+ "/16";
                                                    u = yourhpbarlen-=enemyattdamhpbar; // player damage
                                                    hpbaryour.style.width= u + "px";
                                                    enemypok.style.marginLeft="200px";
                                                    enemypok.style.marginTop="300px";
                                                    info.innerHTML=enemypokemon + " used " + enemydamage1 ;
                                                    if(yourhp<1){
                                                        hpbaryour.style.width="0px";
                                                        hpen.innerHTML="0";
                                                        move1.style.display="none";
                                                        move2.style.display="none";
                                                        move3.style.display="none";
                                                        move4.style.display="none";
                                                        move5.style.display="none";
                                                        
                                                       endbutton.style.display="block";
                                                       endbutton.onclick = () =>{
                                                        battle.style.display="none";
                                                            endbad.style.display="block";
                                                            battlesong.pause();
                                                    }
                                                     }
                                                    setTimeout(function() {
                                                        enemypok.style.marginLeft="780px";
                                                        enemypok.style.marginTop="100px";
                                                        info.innerHTML="";
                                                        moves.style.display="block";
                                                    },700)
                                                     }, 1000);
                                               
                                                    
                                                    
                                                    }
                                                
                                                 
                                                    
