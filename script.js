    const options = ["rock", "paper", "scissors"];
    let count=0;
    const opciones = document.querySelector(".opciones");

    opciones.addEventListener("click", playRound);

    function compChoise(){
        return options[Math.floor(Math.random() * options.length)];
    }

    function printComp(add){
        const printing = add+".png";
        const marcador = document.querySelector("#compsChoise");
        marcador.src = printing;
    }

    function addToMarcador(winner, counter){
        const marcador = document.querySelector(".marcador");
        marcador.innerHTML += counter+". "+winner+"<br/>";
    }
    
    function playRound(e) {
        let win="";
        const comp = compChoise();
        const play = e.target.alt;
        printComp(comp);

        if (play===undefined) return;

        if(comp===play){
            win = "It's a tie!";
        }
        else{
            if (comp == "rock"){
                win = (play=="paper")?"Player":"Computer";
            }
            if (comp == "paper"){
                win = (play=="scissors")?"Player":"Computer";
            }
            if (comp == "scissors"){
                win = (play == "rock")?"Player":"Computer";
            }
        }
        count++;
        addToMarcador(win, count);  
    }
