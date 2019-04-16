console.log("exercice 5");

$(document).ready(() => {

    function getComputerChoice () {
        let computerDice = Math.floor(Math.random()*Math.floor(3));
        let computerChoice;
        switch (computerDice) {
            case 0 : computerChoice = 'rock';
                break;
            case 1 : computerChoice = 'paper';
                break;
            case 2 : computerChoice = 'scissor';
                break;
        }
        return computerChoice;
    }
    function determineWinner(a, b) {
        switch (a) {
            case  b :
                return "tied";
                break;
            case 'rock' :
                if (b === 'scissor') { return "win";} else {return "lost";};
                break;
            case 'scissor' :
                if (b === 'paper') { return "win";} else {return "lost";};
                break;
            case 'paper' :
                if (b === 'rock') { return "win";} else {return "lost";};
                break;
        }
    }


    $('li>img').on('click', event =>{
        let userChoice = $(event.currentTarget).attr('alt');
        let computerChoice = getComputerChoice();
        let score = determineWinner(userChoice, computerChoice);

        $('#result').replaceWith("<div id='result'><h2>RESULT</h2><br><div id='resultFinal'><br><p>Your choice:</p><p>Computer's choice:</p><p>Score:</p></div></div>"); //permet de vider la div Resultat pour  pouvoir rejouer
        $("#battleAnimation").fadeIn(1000).show(1);
        $("#battleText").delay(300).show(1).delay(300).hide(1).delay(300).show(1).delay(300).hide(1).delay(300).show(1).delay(300).hide(1).delay(300).show(1).delay(300).hide(1);
        $("#battleAnimation").delay(2000).fadeOut(500);
        $('#result').delay(4000).show(1);
        $("#resultFinal>p:eq(0)").after("<p class='score'>"+userChoice+"</p>");
        $("#resultFinal>p:eq(2)").after("<p class='score'>"+computerChoice+"</p>");
        $("#resultFinal>p:eq(4)").after("<p class='score "+score+"'>"+score+"</p>");
    });

});
