
// SMOOTH ANİMASYONLAR
// CSS EKLENMESİ
// ALERT BOX ALTERNATİFİ



var gamearea = document.getElementById('gamearea');
var dealerarea = document.getElementById('dealercards');
var playerarea = document.getElementById('playercards');
var dealersum = document.getElementById('dealersum');
var playersum = document.getElementById('playersum');
var celebrate = document.getElementById('blackjack');


var betcompleted = false;
var balance = 1000;
var balancearea = document.getElementById('balancearea');
function showbetarea() {
    
    var betarea = document.getElementById('betarea'); 
    betarea.style = 'visibility:visible;';
    balancearea.textContent += balance + '$';
}

function placebet() {
    hitbutton.disabled = false;
    standbutton.disabled = false;
    betbutton.disabled = true;
    let bet = parseInt(document.querySelector('input').value);
    if(bet > balance) {
        alert('YOUR BALANCE IS NOT ENOUGH TO BET ' + bet +'$');
        window.location = window.location;
    }
    else if(balance == 0) {
        alert('YOUR BALANCE IS NOT ENOUGH TO BET ' + bet +'$');
        window.location = window.location;
    }
    else if(bet < 0 || bet == 0) {
        alert('You need to place bet!');
        window.location = window.location;
    }
    
    else {
        balance -= bet;
    }
    var printbet = document.getElementById('printbet');
    printbet.textContent = balance + '$';
    betcompleted = true;
    balancearea.style = 'visibility:hidden;';
     play(bet);
}


function play(bet) {
    
    if(betcompleted = true) {
        betcompleted = false;
    }
    gamearea.style = 'visibility:visible;';
    if(bj = true) {
        celebrate.style = 'visibility:hidden;';
        bj = false;
    }

    this.randomCard = function() {
        return Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    }

    var dfirstCard = randomCard();
    var dsecondCard = randomCard();
    var ufirstCard = randomCard();
    var usecondCard = randomCard();
    var usum = ufirstCard + usecondCard;
    var dsum = dfirstCard + dsecondCard;
    var dvisiblesum = dfirstCard;
    var hitbutton = document.getElementById('hitbutton');
    var standbutton = document.getElementById('standbutton');
    var betbutton = document.getElementById('betbutton');
    this.checkBlackjack = function() {
        if(usum == 21) {
            celebrate.style = 'visibility:visible';
            alert('BLACKJACK!');
            var bj = true;
            balance += bet * 2.5
            usum.textContent = balance;
            hitbutton.disabled = true;
            standbutton.disabled = true;
            betbutton.disabled = false;
         }
    }
    this.checkBlackjack();    

    dealerarea.innerHTML = '<div class="card">' + dfirstCard + '</div>' +'<div class="card">?</div> <br>';
    dealersum.style = 'text-align:center;';
    dealersum.innerHTML = 'Sum : ' + dvisiblesum;

    playerarea.innerHTML = '<div class="card">' + ufirstCard + '</div>' +'<div class="card">'+ usecondCard +'</div> <br>';
    playersum.style = 'text-align:center;';
    playersum.innerHTML = 'Sum : ' + usum;
   
    this.checkbust = function() {
        if(usum > 21) {
            alert('YOU LOST '+ bet +'$');
            hitbutton.disabled = true;
            standbutton.disabled = true;
            betbutton.disabled = false;
        }
    }

    this.checkwinner = function() {
        var earning = bet * 2;
        if(dsum > 21) {
            alert('DEALER GONE BUST , YOU WON ' + earning + '$ !');
            balance += earning;
            printbet.textContent = 'BALANCE : ' + balance;
            hitbutton.disabled = true;
            standbutton.disabled = true;
            betbutton.disabled = false;
        }
        else if(usum > 21) {
            alert('BUST , YOU LOST ' + bet + '$');
            balance -= earning;
            printbet.textContent = 'BALANCE : ' + balance;
            hitbutton.disabled = true;
            standbutton.disabled = true;
            document.getElementById('betbutton').disabled = false;
        }
        else if(usum > dsum) {
            alert('YOU WON ' + bet + '$ !');
            balance += earning;
            printbet.textContent = 'BALANCE : ' + balance;
            hitbutton.disabled = true;
            standbutton.disabled = true;
            betbutton.disabled = false;
        }
        else if(usum < dsum) {
            alert('YOU LOST ' + bet + '$');
            printbet.textContent = 'BALANCE : ' + balance;
            hitbutton.disabled = true;
            standbutton.disabled = true;
            betbutton.disabled = false;
        }
        else if(usum = dsum) {
            alert('DRAW!');
            balance += bet;
            printbet.textContent = 'BALANCE : ' + balance;
            hitbutton.disabled = true;
            standbutton.disabled = true;
            betbutton.disabled = false;
        }
    }

    this.hit = function() {
        var hit = randomCard();
        playerarea.innerHTML += '<div class="card">' + hit + '</div>';
        usum += hit;
        this.checkbust();
        playersum.innerHTML = 'Sum : ' + usum;
        this.checkBlackjack();

    this.stand = function() {
        dealerarea .innerHTML = '<div class="card">' + dfirstCard + '</div>' +'<div class="card">'+ dsecondCard + '</div> <br>';
        dealersum.innerHTML = 'Sum : ' + dsum;
        if(dsum < 17) {
            while(dsum <= 17) {
                var dealerhit = randomCard();
                dsum += dealerhit;
                dealerarea.innerHTML += '<div class="card">' + dealerhit + '</div>';
                dealersum.innerHTML = 'Sum : ' + dsum;     
                }
            }
            this.checkwinner();
        } 
    }       
}




