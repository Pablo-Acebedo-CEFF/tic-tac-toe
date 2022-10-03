$(function(){
    //initialisation de la variable altern qui va servir à alterner entre x et o
    var altern = true;
    //initialisation du tableau caseId qui va servir à savoir si une case est déjà occupée
    var caseId = Array(9);
    //initialisation du tableau nbtd qui va contenir tous les td de morpion.html et leurs donner une class et une id
    var nbtd = $("td");
    //initialisation de la variable turn qui va servir à compter le nombre de tour
    var turn = 0;
    //attribution de class et id pour nbtd
    for(i = 0 ; i < nbtd.length ; i++){
        nbtd[i].classList.add("case");
        nbtd[i].id = (i);
    }
    //initialisation de l'event click
    $(".case").click(function(){
        //test if pour savoir si la case est déjà occupée
        if (isNaN(caseId[($(this).attr('id'))])) {
            //si elle est libre attribution d'un 0 pour dire qu'elle est à présent occupée
            caseId[($(this).attr('id'))] = 0;
            //utilisation de altern pour placer les symboles et leurs donner une class définissent leur attribut true = x false = o
            if(altern){
                $(this).addClass("symbole_1");
                $(this).addClass("x");
            }
            else{
                $(this).addClass("symbole_0");
                $(this).addClass("o");
            }
            //incrémentation de turn pour passer au tour suivant
            turn++;
            //changement de la variable altern true => false => etc...
            altern = !altern;
            //test de conditions de victoire uniquement après le tour 5
            if(!(turn < 5)){
                //condition de victoire x
                if($("#0").hasClass("x") && $("#1").hasClass("x") && $("#2").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#3").hasClass("x") && $("#4").hasClass("x") && $("#5").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#6").hasClass("x") && $("#7").hasClass("x") && $("#8").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#0").hasClass("x") && $("#3").hasClass("x") && $("#6").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#1").hasClass("x") && $("#4").hasClass("x") && $("#7").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#2").hasClass("x") && $("#5").hasClass("x") && $("#8").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#0").hasClass("x") && $("#4").hasClass("x") && $("#8").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                if($("#2").hasClass("x") && $("#4").hasClass("x") && $("#6").hasClass("x")){
                    alert("x win");
                    location.reload();
                }
                //condition de victoire o
                if($("#0").hasClass("o") && $("#1").hasClass("o") && $("#2").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#3").hasClass("o") && $("#4").hasClass("o") && $("#5").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#6").hasClass("o") && $("#7").hasClass("o") && $("#8").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#0").hasClass("o") && $("#3").hasClass("o") && $("#6").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#1").hasClass("o") && $("#4").hasClass("o") && $("#7").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#2").hasClass("o") && $("#5").hasClass("o") && $("#8").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#0").hasClass("o") && $("#4").hasClass("o") && $("#8").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                if($("#2").hasClass("o") && $("#4").hasClass("o") && $("#6").hasClass("o")){
                    alert("o win");
                    location.reload();
                }
                //condition égalité
                if(turn === 9){
                    alert("equality");
                    location.reload();
                }
            }
        }
    });    
});