const choix = document.querySelector("#choix_equipe");
const equipe1 = document.querySelector("#equipe_1");
const equipe2 = document.querySelector("#equipe_2");
const choix_jeu = document.querySelector("#jeu");
const victoire = document.querySelector("#victoire");
const restart = document.querySelector("#restart");
const photo = document.querySelector("#deco");
const photorami = document.querySelector("#decorami");
const phototarot = document.querySelector("#decotarot");
const rami = document.querySelector("#rami");
const tarot = document.querySelector("#tarot");
const debut = document.querySelector("#choix_jeu")
//coinche
const jeu_coinche = document.querySelector("#coinche");
const equipe_coinche = document.querySelector("#equipec");
const equipe_annonce = document.querySelector("#equipec1");
const adversairec = document.querySelector("#adversairec");
const check_belote_c11 = document.querySelector("#belotec11");
const check_belote_c12 = document.querySelector("#belotec12");
const check_belote_c13 = document.querySelector("#belotec13");
const check_belote_c14 = document.querySelector("#belotec14");
const check_belote_c21 = document.querySelector("#belotec21");
const check_belote_c22 = document.querySelector("#belotec22");
const check_belote_c23 = document.querySelector("#belotec23");
const check_belote_c24 = document.querySelector("#belotec24");
const checkb = document.querySelector("#b");
const checkbb = document.querySelector("#bb");
const checkbbb = document.querySelector("#bbb");
const checkc = document.querySelector("#c");
const checkcc = document.querySelector("#cc");
const checkccc = document.querySelector("#ccc");
const contrat = document.querySelector("#contrat");
const annonce1= document.querySelector("#annonce_1");
const annonce2 = document.querySelector("#annonce_2");
const point_coinche = document.querySelector("#resultatc");
const coincher = document.querySelector("#coincher");
const scoincher = document.querySelector("#scoincher");
const surcoincher = document.querySelector("#surcoincher");
const bouton_retour_coinche = document.querySelector("#retour_coinche");
let valeur_contrat;
let equipe;
let belote_test = 0;
//belote
const jeu_belote = document.querySelector("#belote");
const adversaireb = document.querySelector("#adversaireb");
const equipe_belote = document.querySelector("#equipeb");
const check_belote_b1 = document.querySelector("#beloteb1");
const check_belote_b2 = document.querySelector("#beloteb2");
const point_belote = document.querySelector("#resultatb");
const bouton_retour_belote = document.querySelector("#retour_belote");
const img_valeur = document.querySelector("#valeur_belote");
let annonce = 0;
let coincherousur = 1;
//tarot
const nb_joueur_t = document.querySelector("#nombre_j_t");
const joueur_1 = document.querySelector("#joueur_1");
const joueur_2 = document.querySelector("#joueur_2");
const joueur_3 = document.querySelector("#joueur_3");
const joueur_4 = document.querySelector("#joueur_4");
const joueur_5 = document.querySelector("#joueur_5");
const jeu_tarot = document.querySelector("#jeu_tarot");
const joueur_tarots = document.querySelector("#joueurt");
const roi_appel = document.querySelector("#appel_du_roi")
const contrat_tarot = document.querySelector("#contrat_tarot");
const bout = document.querySelector("#bout");
const resultat_tarot = document.querySelector("#resultat_tarot");
const petit_bout = document.querySelector("#le_petit");
const grand_chelem = document.querySelector("#grand_chelem");
const chelem = document.querySelector("#chelem");
const echec_chelem = document.querySelector("#echec_chelem");
const qui_le_petit = document.querySelector("#qui_le_petit");
const bouton_retour_tarot = document.querySelector("#retour_tarot");
const poigne = document.querySelector("#poignee");
const joueur_poignee = document.querySelector("#joueur_poignee");
let j = [];
let nombre_de_joueur;
let valeur_a_faire;
let coef;
let bonus = 0;
let resultat_du_tarot;
let chuter;
let test = false;
//rami
const nombre_de_joueur_rami = document.querySelector("#nombre_j");
const j_rami = document.querySelector("#joueurs_rami");
const texte_nom = document.querySelector("#texte_nom");
const nom = document.querySelector("#nom");
const buttun_rami = document.querySelector("#b");
let nb_j;
let index_joueur = 1;



const tableau = document.querySelector("#tableau");
let resultat_equipe1 = 0;
let resultat_equipe2 = 0;
let belote1 = 0;
let belote2 = 0;
let taille = 0;




function joueur_tarot(){
    joueur_1.hidden = true;
    joueur_2.hidden = true;
    joueur_3.hidden = true;
    joueur_4.hidden = true;
    joueur_5.hidden = true;

    switch(nb_joueur_t.value){
        case "trois":
            joueur_1.hidden = false;
            joueur_2.hidden = false;
            joueur_3.hidden = false;
        break;
        case "quatre":
            joueur_1.hidden = false;
            joueur_2.hidden = false;
            joueur_3.hidden = false;
            joueur_4.hidden = false;
        break;
        case "cinq":
            joueur_1.hidden = false;
            joueur_2.hidden = false;
            joueur_3.hidden = false;
            joueur_4.hidden = false;
            joueur_5.hidden = false;
        break;
    }
}

function petitcheck(){
    if(petit_bout.checked == true){
        qui_le_petit.hidden = false;
    }else{
        qui_le_petit.hidden = true;
    }
}

function choixdujeu(){
    photo.hidden = true;
    choix.hidden = true;
    rami.hidden = true;
    photorami.hidden = true;
    tarot.hidden = true;
    phototarot.hidden = true;

    switch(choix_jeu.value){
        case "belote":
            photo.hidden = false;
            choix.hidden = false;
        break;
        case "coinche":
            photo.hidden = false;
            choix.hidden = false;
        break;
        case "rami":
            rami.hidden = false;
            photorami.hidden = false;
        break;
        case "tarot":
            tarot.hidden = false;
            phototarot.hidden = false;
        break;
    }

}

function changementvaleur(p){
    p.value = 162 - parseInt(p.value);
}

function verifcheck(a,b){
    if(a.checked == true){
        return b + 1;
    }
    return b;
}

function ajoutbelote(b1,b2,b3){
    
    if(b1.checked == true){
        b2.hidden = false;
    }else{ 
        if(b3.checked == true){
            b3.checked = false;
        }
        b2.hidden = true;
    }
}

function creation_victoire(e){
    victoire.textContent = "bravo " + e.value + " vous avez gagnés";
    victoire.hidden = false;
    restart.hidden = false;
}

function creation_tab(liste){
    debut.hidden = true;

    for (i =0; i < liste.length; i++){
        var el = document.createElement("th");
        el.textContent = liste[i].value;
        tableau.appendChild(el);
    }

    tableau.hidden = false;
    

}

function ajouter_tab(liste,e,t){
    let jou = tableau.querySelectorAll("TH");
    const resultat = tableau.querySelectorAll("TD");
    let point_max = 0;
    let index_max = [];
    let point_min = 2000000000;
    let index_min = [];

    var el = document.createElement("tr");
    tableau.appendChild(el);
    taille += 1;
    
    for (i = 0; i < liste.length; i++){

        if(taille>10){
            tableau.removeChild(resultat[i]);

        }
        
        var el = document.createElement("td");
        el.textContent = liste[i];
        if(e.value== "equipe_" + (i+1)){
            if(t){
                el.className="pritv";
            }else{
                el.className="pritnv";
            }
        }
        tableau.appendChild(el);
        
        if (liste[i]>point_max){
            index_max = [i];
            point_max = liste[i];
        }
        if (liste[i]<point_min){
            index_min = [i];
            point_min = liste[i];
        }
        if (liste[i] == point_max){
            index_max.push(i);
        }
        if (liste[i] == point_min){
            index_min.push(i);
        }
    }
    
    for (i = 0; i < jou.length; i++){
        jou[i].className = "entre";

    }
    for (i = 0; i < index_max.length; i++){
        jou[index_max[i]].className = "gagnent";

    }
    for (i = 0; i < index_min.length; i++){
        jou[index_min[i]].className = "perdent";

    }
    if (point_max == point_min){
        for (i = 0; i < jou.length; i++){
            jou[i].className = "egalite";
    
        }
    }
    
    
}

function ajouter_annonce(v){
    annonce = annonce + v;
}

function dedans(e,c,a){
    if(e.value == "equipe_1"){
        resultat_equipe2 = parseInt(resultat_equipe2) + 162 + (c * coincherousur) + a + belote2;
        resultat_equipe1 = parseInt(resultat_equipe1) + belote1;
        
    }
    if(e.value == "equipe_2"){
        resultat_equipe1 = parseInt(resultat_equipe1) + 162 + (c * coincherousur) + a + belote1;
        resultat_equipe2 = parseInt(resultat_equipe2) + belote2;
    }
    ajouter_tab([resultat_equipe1,resultat_equipe2],e,false);
}

function ajout(e,c,a,q,p){
    
    if(q == "equipe_1"){
        if(e.value == "equipe_1"){
            resultat_equipe1 = parseInt(resultat_equipe1) + parseInt(p.value) + (c * coincherousur) + a + belote1;
            resultat_equipe2 =  parseInt(resultat_equipe2) + 162 - parseInt(p.value) + belote2;
        }
        if(e.value == "equipe_2"){
            resultat_equipe2 = parseInt(resultat_equipe2) + parseInt(p.value) + (c * coincherousur) + belote2;
            resultat_equipe1 = parseInt(resultat_equipe1) + 162 - parseInt(p.value) + a + belote1;
        }
    }
    if(q == "equipe_2"){
        if(e.value == "equipe_1"){
            resultat_equipe1 = parseInt(resultat_equipe1) + parseInt(p.value) + (c * coincherousur) + belote1;
            resultat_equipe2 =  parseInt(resultat_equipe2) + 162 - parseInt(p.value) + a + belote2;
        }
        if(e.value == "equipe_2"){
            resultat_equipe2 = parseInt(resultat_equipe2) + parseInt(p.value) + (c * coincherousur) + a + belote2;
            resultat_equipe1 = parseInt(resultat_equipe1) + 162 - parseInt(p.value) + belote1;
        }
    }
    
    ajouter_tab([resultat_equipe1,resultat_equipe2],e,true);
}

function capot(e,c,a,q){
    if(q == "equipe_1"){
        if(e.value == "equipe_1"){
            resultat_equipe1 =  parseInt(resultat_equipe1) + 252 + (c * coincherousur) + a  + belote1;
            resultat_equipe2 = parseInt(resultat_equipe2) + belote2;
        }
        if(e.value == "equipe_2"){
            resultat_equipe2 = parseInt(resultat_equipe2) + 252 + (c * coincherousur)  + belote2;
            resultat_equipe1 = parseInt(resultat_equipe1) + belote1;
        }
    }
    if(q == "equipe_2"){
        if(e.value == "equipe_1"){
            resultat_equipe1 =  parseInt(resultat_equipe1) + 252 + (c * coincherousur);
            resultat_equipe2 = parseInt(resultat_equipe2) + belote2;
        }
        if(e.value == "equipe_2"){
            resultat_equipe2 = parseInt(resultat_equipe2) + 252 + (c * coincherousur) + a;
            resultat_equipe1 = parseInt(resultat_equipe1) + belote1;

        }
    }
    ajouter_tab([resultat_equipe1,resultat_equipe2],e,true);
}

function retour(liste){
    const resultat = tableau.querySelectorAll("TD");
    let nb;
    if(resultat.length<1){
        alert("faudrait jouer d'abord");
        return;
    }
    if (confirm("sur de vouloir de retourner en arriere")){
        let jou = tableau.querySelectorAll("TH");
        for (i = 0; i < jou.length; i++){
            jou[i].className = "entre";
        }
        if(nb_joueur_t.value == "trois"){
            nb = 3;
        }
        if(nb_joueur_t.value == "quatre"){
            nb = 4;
        }
        if(nb_joueur_t.value == "cinq"){
            nb = 5;
        }
        if(choix_jeu.value == "belote" || choix_jeu.value == "coinche"){
            nb = 2 
        }

        if(resultat.length == nb){
            for (i = 0; i < nb; i++){
                tableau.removeChild(resultat[i]);
                liste[i] = 0;
            }
            return liste;
        }
        
        let index = resultat.length - 1;
        
        for (i = 0; i < nb; i++){
            tableau.removeChild(resultat[index]);
            index--
        }
        let test = nb;
        while ( test > 0){
            liste[test-1] = parseInt(resultat[index].innerText);
            index--
            test--
        } 
        let point_max = 0;
        let index_max = [];
        let point_min = 2000000000;
        let index_min = [];
        
        for (i = 0; i < liste.length; i++){            
            if (liste[i]>point_max){
                index_max = [i];
                point_max = liste[i];
            }
            if (liste[i]<point_min){
                index_min = [i];
                point_min = liste[i];
            }
            if (liste[i] == point_max){
                index_max.push(i);
            }
            if (liste[i] == point_min){
                index_min.push(i);
            }
        }
        
        for (i = 0; i < jou.length; i++){
            jou[i].className = "entre";

        }
        for (i = 0; i < index_max.length; i++){
            jou[index_max[i]].className = "gagnent";

        }
        for (i = 0; i < index_min.length; i++){
            jou[index_min[i]].className = "perdent";

        }
        if (point_max == point_min){
            for (i = 0; i < jou.length; i++){
                jou[i].className = "egalite";
        
            }
        }
        return liste;
        
        
    }
}

function donne_indice(lieu){
    switch(lieu.value){
        case("equipe_1"):
        return 0;
        break;
        case("equipe_2"):
        return 1;
        break;
        case("equipe_3"):
        return 2;
        break;
        case("equipe_4"):
        return 3;
        break;
        case("equipe_5"):
        return 4;
        break;
        default:
        return -1;
        break;
    }
}

function calcul_resultat_tarot(){

    let n = nombre_de_joueur - 1;

    switch(bout.value){
        case("zero"):
            valeur_a_faire = 56;
        break;
        case("un"):
            valeur_a_faire = 51;
        break;
        case("deux"):
            valeur_a_faire = 41;
        break;
        case("trois"):
            valeur_a_faire = 36;
        break;
    }
    switch(contrat_tarot.value){
        case("petite"):
        coef = 1;
        break;
        case("garde"):
        coef = 2;
        break;
        case("garde_sans"):
        coef = 4;
        break;
        case("garde_contre"):
        coef = 6;
        break;
    }

    
    if (grand_chelem.checked == true){
        bonus += 400;
    }
    if (chelem.checked == true){
        bonus += 200;
    }
    
    let poignee;
    switch(poigne.value){
        case("simple_poignee"):
            poignee = 20
        break;
        case("double_poignee"):
            poignee = 30
        break;
        case("triple_poignee"):
            poignee = 40
        break;
    }

    let indice = donne_indice(joueur_poignee);
    
    resultat_du_tarot[indice] += poignee; 


    

    if (parseInt(resultat_tarot.value) >= valeur_a_faire){
        chuter = true;
        
        let valeur_a_evite = donne_indice(joueur_tarots);

        resultat_du_tarot[valeur_a_evite] += (25 + parseInt(resultat_tarot.value) - valeur_a_faire) * coef * n + bonus;

        let valeur_roi = donne_indice(roi_appel);
        
        if (valeur_roi != -1){
            resultat_du_tarot[valeur_roi] += (25 + parseInt(resultat_tarot.value) - valeur_a_faire) * coef * n + bonus;
        }

        if (petit_bout.checked == true){
            if (qui_le_petit.value == joueur_tarots.value){
                resultat_du_tarot[valeur_a_evite] += 10;  
                if (valeur_roi != -1){
                    resultat_du_tarot[valeur_roi] += 10 ;
                }
            }else{
                test = true;
            }
            
        }

        for (i = 0; i < resultat_du_tarot.length; i++){
            if(valeur_a_evite != i && valeur_roi == -1){
                resultat_du_tarot[i] -= (25 + parseInt(resultat_tarot.value) - valeur_a_faire) * coef
                if (test == true){
                    resultat_du_tarot[i] += 10;
                }
            }else{
                if(valeur_a_evite != i && valeur_roi != i){
                    resultat_du_tarot[i] -= (25 + parseInt(resultat_tarot.value) - valeur_a_faire) * coef
                    if (test == true){
                        resultat_du_tarot[i] += 10;
                    } 
                }
            }
        }
    }else{
        chuter = false;

        valeur_a_evite = donne_indice(joueur_tarots);

        resultat_du_tarot[valeur_a_evite] -= (25 - parseInt(resultat_tarot.value) + valeur_a_faire) * coef * n;

        if (petit_bout.checked == true){
            if (qui_le_petit.value == joueur_tarots.value){
              resultat_du_tarot[valeur_a_evite] += 10;  
            }else{
                test = true;
            }
            
        }
     
        for (i = 0; i < resultat_du_tarot.length; i++){
            if(valeur_a_evite != i){
                resultat_du_tarot[i] += (25 - parseInt(resultat_tarot.value) + valeur_a_faire) * coef
                if (test == true){
                    resultat_du_tarot[i] += 10;
                }
            }else{
                if (echec_chelem.checked == true){
                    resultat_du_tarot[i] -= 200;
                }
            }
        }
        

    }

    

    ajouter_tab(resultat_du_tarot,joueur_tarots,chuter);

    bonus = 0;
    test = false;
    joueur_tarots.value = "";
    contrat_tarot.value = "";
    bout.value = "";
    resultat_tarot.value = "";
    qui_le_petit.value = "";
    joueur_poignee.value = "";
    poigne.value = "";
    roi_appel.value = "";
    grand_chelem.checked = false;
    chelem.checked = false;
    echec_chelem.checked = false;
    petit_bout.checked = false;

}

function chelem_test(e){
    switch(e){
        case("grand_chelem"):
        chelem.checked = false;
        echec_chelem.checked = false;
        break;
        case("chelem"):
        grand_chelem.checked = false;
        echec_chelem.checked = false;
        break;
        case("echec_chelem"):
        grand_chelem.checked = false;
        chelem.checked = false;
        break;
    }

}

function roi(){
    for (i = 0; i < j.length; i++){
        j[i].hidden = false;
        if (joueur_tarots.value == j[i].value){
            j[i].hidden = true;
            roi_appel.value = "";
        }
    }

}

function ajout_option(liste,lieu){
    j = [];
    for (i = 0; i < liste.length; i++){
        var el = document.createElement("option");
        el.textContent = liste[i].value;
        el.value = "equipe_" + (i+1);
        if(lieu.name == "roi__"){
            j.push(el);
        }
        lieu.appendChild(el);
    }
    

}





choix.addEventListener("submit",function(e){
    e.preventDefault();

    if (equipe1.value == "" || equipe2.value == ""){
        alert("Trouve toi des amis!!!!");
        return;
    }
    if (choix_jeu.value == ""){
        alert("Choisis un jeu non??!");
        return;
    }
    if (equipe1.value.trim() ==  equipe2.value.trim()){
        alert("Deux même pseudo mais trouvez de l'originaliter!!");
        return;
    }

    choix.hidden = true;
    creation_tab([equipe1,equipe2]);
    photo.hidden = true;
    if (choix_jeu.value == "belote"){
        jeu_belote.hidden = false;
        var el = document.createElement("option");
        el.textContent = equipe1.value;
        el.value = "equipe_1";
        equipe_belote.appendChild(el);
        var el = document.createElement("option");
        el.textContent = equipe2.value;
        el.value = "equipe_2";
        equipe_belote.appendChild(el);
        return;
    }
    if (choix_jeu.value == "coinche"){
        jeu_coinche.hidden = false;
        var el = document.createElement("option");
        el.textContent = equipe1.value;
        el.value = "equipe_1";
        equipe_coinche.appendChild(el);
        var el = document.createElement("option");
        el.textContent = equipe2.value;
        el.value = "equipe_2";
        equipe_coinche.appendChild(el);

        var el = document.createElement("option");
        el.textContent = equipe1.value;
        el.value = "equipe_1";
        equipe_annonce.appendChild(el);
        var el = document.createElement("option");
        el.textContent = equipe2.value;
        el.value = "equipe_2";
        equipe_annonce.appendChild(el);
        return;
    }
    
});

tarot.addEventListener("submit",function(e){
    e.preventDefault();
    switch(nb_joueur_t.value){
        case("trois"):
        if(joueur_1.value == "" || joueur_2.value == "" || joueur_3.value == "" ){
            alert("tout les joueurs ne sont pas la?");
            return;
        }

        tarot.hidden = true;
        creation_tab([joueur_1,joueur_2,joueur_3]);

        jeu_tarot.hidden = false;

        ajout_option([joueur_1,joueur_2,joueur_3],joueur_tarots);
        ajout_option([joueur_1,joueur_2,joueur_3],joueur_poignee);

        resultat_du_tarot = [0,0,0];

        nombre_de_joueur = 3;
        break;
        case("quatre"):
            if(joueur_1.value == "" || joueur_2.value == "" || joueur_3.value == "" || joueur_4.value == ""){
                alert("tout les joueurs ne sont pas la?");
                return;
            }

            tarot.hidden = true;
            creation_tab([joueur_1,joueur_2,joueur_3,joueur_4]);

            jeu_tarot.hidden = false;

            ajout_option([joueur_1,joueur_2,joueur_3,joueur_4],joueur_tarots);

            ajout_option([joueur_1,joueur_2,joueur_3,joueur_4],joueur_poignee);

            resultat_du_tarot = [0,0,0,0];

            nombre_de_joueur = 4;
        break;
        case("cinq"):
            if(joueur_1.value == "" || joueur_2.value == "" || joueur_3.value == "" || joueur_4.value == "" || joueur_5.value == ""){
                alert("tout les joueurs ne sont pas la?");
                return;
            }

            tarot.hidden = true;
            creation_tab([joueur_1,joueur_2,joueur_3,joueur_4,joueur_5]);

            jeu_tarot.hidden = false;
            
            ajout_option([joueur_1,joueur_2,joueur_3,joueur_4,joueur_5],joueur_tarots);
            
            ajout_option([joueur_1,joueur_2,joueur_3,joueur_4,joueur_5],joueur_poignee);
            
            ajout_option([joueur_1,joueur_2,joueur_3,joueur_4,joueur_5],roi_appel);

                
            roi_appel.hidden = false;
            resultat_du_tarot = [0,0,0,0,0];

            nombre_de_joueur = 5;
        break;
        default:
            alert("nombre de joueur?");
        break;
    }
});

rami.addEventListener("submit",function(e){
    e.preventDefault();
    nb_j = Number.isInteger(nombre_de_joueur_rami.value);
    debut.hidden = true;
    rami.hidden = true;
    j_rami.hidden = false;
    texte_nom.textContent = "Joueur " + index_joueur;
    nom.placeholder = "Joueur " + index_joueur;
});

j_rami.addEventListener("submit",function(e){
    e.preventDefault();
    
});

//envoi le jeu belote
jeu_belote.addEventListener("submit",function(e){
    e.preventDefault();
    if(equipe_belote.value == ""){
        alert("Qui a pris?");
        return;
    }
    if(!Number.isInteger(parseInt(point_belote.value))){
        alert("Nombre demander");
        return;
    }
    if (!(-1<parseInt(point_belote.value) && parseInt(point_belote.value)<163 || (parseInt(point_belote.value) == 250))){
        alert("Nombre de point invalide");
        return;
    }
    if(check_belote_b1.checked == true && check_belote_b2.checked == true){
        alert("Deux belote vraiment??");
        return;
    }
    if(check_belote_b1.checked == true){
        belote1 = 20;
    }
    if(check_belote_b2.checked == true){
        belote2 = 20;
    }
    if(parseInt(point_belote.value)<82){
        dedans(equipe_belote,0,0);
    }
    if(parseInt(point_belote.value)>81 && parseInt(point_belote.value) != 250){
        ajout(equipe_belote,0,0,"equipe_1",point_belote);
    }
    if(parseInt(point_belote.value) == 250){
        capot(equipe_belote,0,0,"equipe_1");
    }
    
    check_belote_b1.checked = false;
    check_belote_b2.checked = false;
    equipe_belote.value = "";
    point_belote.value = "";
    adversaireb.checked = false;
    belote1 = 0;
    belote2 = 0;

    if(resultat_equipe1>1000 && resultat_equipe2<1000){
        jeu_belote.hidden = true;
        creation_victoire(equipe1);
    }
    if(resultat_equipe2>1000 && resultat_equipe1<1000){
        jeu_belote.hidden = true;
        creation_victoire(equipe2);
    }
    if(resultat_equipe2>1000 && resultat_equipe1>1000){
        jeu_belote.hidden = true;
        if(resultat_equipe2>resultat_equipe1){
            creation_victoire(equipe2);
        }else{
            creation_victoire(equipe1);
        }
    }

});

//envoi le jeu coinche
jeu_coinche.addEventListener("submit",function(e){
    e.preventDefault();
    belote_test = 0;
    belote_test = verifcheck(check_belote_c11,belote_test);
    belote_test = verifcheck(check_belote_c12,belote_test);
    belote_test = verifcheck(check_belote_c13,belote_test);
    belote_test = verifcheck(check_belote_c14,belote_test);
    belote_test = verifcheck(check_belote_c21,belote_test);
    belote_test = verifcheck(check_belote_c22,belote_test);
    belote_test = verifcheck(check_belote_c23,belote_test);
    belote_test = verifcheck(check_belote_c24,belote_test);


    if(belote_test>4){
        alert("il y a trop de belote non???");
        return;
    }

    if(equipe_coinche.value == ""){
        alert("Qui a pris?");
        return;
    }
    if(contrat.value == ""){
        alert("Le contrat est de combien?");
        return;
    }
    if(!Number.isInteger(parseInt(point_coinche.value))){
        alert("Nombre demander");
        return;
    }
    if (!(-1<parseInt(point_coinche.value) && parseInt(point_coinche.value)<163 || (parseInt(point_coinche.value) == 250) || (parseInt(point_coinche.value) == 500))){
        alert("Nombre de point invalide");
    }
    if(annonce1.value != "" && equipe_annonce.value == ""){
        alert("Qui a gange l'annonce?");
        return;
    }
    if(annonce1.value == "" && equipe_annonce.value != ""){
        alert("Quel annonce?");
        return;
    }
    if(equipe_annonce.value == ""){
        equipe = "equipe_1";
    }else{
        equipe = equipe_annonce.value; 
    }
    switch(contrat.value){
        case "80":
            valeur_contrat = 80;
        break;
        case "90":
            valeur_contrat = 90;
        break;
        case "100":
            valeur_contrat = 100;
        break;
        case "110":
            valeur_contrat = 110;
        break;
        case "120":
            valeur_contrat = 120;
        break;
        case "130":
            valeur_contrat = 130;
        break;
        case "140":
            valeur_contrat = 140;
        break;
        case "150":
            valeur_contrat = 150;
        break;
        case "160":
            valeur_contrat = 160;
        break;
        case "capot":
            valeur_contrat = 250;
        break;
        case "general":
            valeur_contrat = 500;
        break;
    }
    switch(annonce1.value){
        case("20"):
        ajouter_annonce(20);
        break;
        case("50"):
        ajouter_annonce(50);
        break;
        case("100"):
        ajouter_annonce(100);
        break;
        case("carre"):
        ajouter_annonce(100);
        break;
        case("150"):
        ajouter_annonce(150);
        break;
        case("200"):
        ajouter_annonce(200);
        break;
    }
    switch(annonce2.value){
        case("20"):
        ajouter_annonce(20);
        break;
        case("50"):
        ajouter_annonce(50);
        break;
        case("100"):
        ajouter_annonce(100);
        break;
        case("carre"):
        ajouter_annonce(100);
        break;
        case("150"):
        ajouter_annonce(150);
        break;
        case("200"):
        ajouter_annonce(200);
        break;
    }
    coincherousur = verifcheck(coincher,coincherousur);
    coincherousur = verifcheck(surcoincher,coincherousur);
    if(coincherousur==3){
        coincherousur = 4;
    }
    if(check_belote_c11.checked == true){
        belote1 = belote1 + 20;
    }
    if(check_belote_c21.checked == true){
        belote2 = belote2 + 20;
    }
    if(check_belote_c12.checked == true){
        belote1 = belote1 + 20;
    }
    if(check_belote_c22.checked == true){
        belote2 = belote2 + 20;
    }
    if(check_belote_c13.checked == true){
        belote1 = belote1 + 20;
    }
    if(check_belote_c23.checked == true){
        belote2 = belote2 + 20;
    }
    if(check_belote_c14.checked == true){
        belote1 = belote1 + 20;
    }
    if(check_belote_c24.checked == true){
        belote2 = belote2 + 20;
    }

    switch(valeur_contrat){
        case(250):
            if(valeur_contrat == parseInt(point_coinche.value)){
                capot(equipe_coinche,valeur_contrat,annonce,equipe);
            }else{
                dedans(equipe_coinche,valeur_contrat,annonce);
            }
        break;
        case(500):
            if(valeur_contrat == parseInt(point_coinche.value)){
                capot(equipe_coinche,valeur_contrat,annonce,equipe);
            }else{
                dedans(equipe_coinche,valeur_contrat,annonce);
            }
        break;
        default:
            if(equipe_coinche.value == "equipe_1"){
                if(equipe_annonce.value == equipe_coinche.value){
                    if(parseInt(point_coinche.value)>(valeur_contrat-annonce-belote1-1) && parseInt(point_coinche.value)>81){
                        if(parseInt(point_coinche.value)>163){
                            capot(equipe_coinche,valeur_contrat,annonce,equipe);
                        }else{
                            ajout(equipe_coinche,valeur_contrat,annonce,equipe,point_coinche)
                        }
                    }else{
                        dedans(equipe_coinche,valeur_contrat,annonce);
                    }
                }else{
                    if(parseInt(point_coinche.value)>(valeur_contrat-belote1-1) && parseInt(point_coinche.value)>81){
                        if(parseInt(point_coinche.value)>163){
                            capot(equipe_coinche,valeur_contrat,annonce,equipe);
                        }else{
                            if(parseInt(point_coinche.value)>163){
                                capot(equipe_coinche,valeur_contrat,annonce,equipe);
                            }else{
                                ajout(equipe_coinche,valeur_contrat,annonce,equipe,point_coinche)
                            }
                        }
                    }else{
                        dedans(equipe_coinche,valeur_contrat,annonce);
                    }
                }
            }else{
                if(equipe_annonce.value == equipe_coinche.value){
                    if(parseInt(point_coinche.value)>(valeur_contrat-annonce-belote2-1) && parseInt(point_coinche.value)>81){
                        if(parseInt(point_coinche.value)>163){
                            capot(equipe_coinche,valeur_contrat,annonce,equipe);
                        }else{
                            ajout(equipe_coinche,valeur_contrat,annonce,equipe,point_coinche)
                        }
                    }else{
                        dedans(equipe_coinche,valeur_contrat,annonce);
                    }
                }else{
                    if(parseInt(point_coinche.value)>(valeur_contrat-belote2-1) && parseInt(point_coinche.value)>81){
                        if(parseInt(point_coinche.value)>163){
                            capot(equipe_coinche,valeur_contrat,annonce,equipe);
                        }else{
                            ajout(equipe_coinche,valeur_contrat,annonce,equipe,point_coinche)
                        }
                    }else{
                        dedans(equipe_coinche,valeur_contrat,annonce);
                    }
                }
            }
            
        break;
    }

    equipe_coinche.value = "";
    equipe_annonce.value = "";
    annonce1.value = "";
    annonce2.value = "";
    contrat.value = "";
    point_coinche.value = "";
    check_belote_c11.checked = false;
    check_belote_c12.checked = false;
    check_belote_c13.checked = false;
    check_belote_c14.checked = false;
    checkb.hidden = true;
    checkbb.hidden = true;
    checkbbb.hidden = true;
    check_belote_c21.checked = false;
    check_belote_c22.checked = false;
    check_belote_c23.checked = false;
    check_belote_c24.checked = false;
    checkc.hidden = true;
    checkcc.hidden = true;
    checkccc.hidden = true;
    coincher.checked = false;
    surcoincher.checked = false;
    scoincher.hidden = true;
    adversairec.checked = false;
    belote1 = 0;
    belote2 = 0;
    annonce = 0;

    if(resultat_equipe1>1500 && resultat_equipe2<1500){
        jeu_coinche.hidden = true;
        creation_victoire(equipe1);
    }
    if(resultat_equipe2>1500 && resultat_equipe1<1500){
        jeu_coinche.hidden = true;
        creation_victoire(equipe2);
    }
    if(resultat_equipe2>1500 && resultat_equipe1>1500){
        jeu_coinche.hidden = true;
        if(resultat_equipe2>resultat_equipe1){
            creation_victoire(equipe2);
        }else{
            creation_victoire(equipe1);
        }
    }
        
});

//envoi le jeu de tarot
jeu_tarot.addEventListener("submit",function(e){
    e.preventDefault();

    if (joueur_tarots.value == ""){
        alert("qui a prit?");
        return;
    }
    if (contrat_tarot.value == ""){
        alert("quel contrat a était prit?");
        return;
    }
    if (bout.value == ""){
        alert("combien de bout?");
        return;
    }
    if (!Number.isInteger(parseInt(resultat_tarot.value))){
        alert("combien le preuneur a fait?");
        return;
    }
    if (qui_le_petit.value == "" && petit_bout.checked == true){
        alert("qui a amener le petit au bout?");
        return;
    }
    if (qui_le_petit.value != "" && petit_bout.checked == false){
        alert("quelqu'un a amener le petit au bout?");
        return;
    }
    if (nb_joueur_t.value == "cinq" && roi_appel.value == ""){
        alert("qui a été appeler?");
        return;
    }
    if (poigne.value == "" && joueur_poignee.value != ""){
        alert("quel poignée a était montrée?");
        return;
    }
    if (poigne.value != "" && joueur_poignee.value == ""){
        alert("qui a eu la poignée qui était montrée?");
        return;
    }
   
    calcul_resultat_tarot();
});

bouton_retour_belote.addEventListener("click",function(e){
    e.preventDefault();
    let l = retour([resultat_equipe1,resultat_equipe2]);
    resultat_equipe1 = l[0];
    resultat_equipe2 = l[1];
});

bouton_retour_coinche.addEventListener("click",function(e){
    e.preventDefault();
    let l = retour([resultat_equipe1,resultat_equipe2]);
    resultat_equipe1 = l[0];
    resultat_equipe2 = l[1];
});

bouton_retour_tarot.addEventListener("click",function(e){
    e.preventDefault();
    let l = retour(resultat_du_tarot);
    resultat_du_tarot[0] = l[0];
    resultat_du_tarot[1] = l[1];
    resultat_du_tarot[2] = l[2];
    if (nb_joueur_t.value == "quatre" || nb_joueur_t.value == "cinq"){
        resultat_du_tarot[3] = l[3];
        if (nb_joueur_t.value == "cinq"){
            resultat_du_tarot[4] = l[4];
        }
    }
});