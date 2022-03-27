
let velocidade = 0; 
let maxVelocity = 70;
const kmPerPoint = 5;

function mDown(){
     veloInterval = setInterval(function () {
        velocidade++;
        document.getElementsByClassName("velocity-value")[0].innerHTML = velocidade + "km/h";

        if(velocidade < 0){
            velocidade = 0;
        }

        if (Math.floor(velocidade) >= maxVelocity && Math.floor(velocidade)  % kmPerPoint === 0){
            document.getElementsByClassName("velocity-limiter")[0].style.display = "flex";

            let walletPointsDiscount = (Math.floor(velocidade) - maxVelocity) / kmPerPoint;
            document.getElementsByClassName("wallet-points")[0].innerHTML = "&nbsp;" + walletPointsDiscount;

            if(walletPointsDiscount === 12){
                document.getElementsByClassName("accelerator")[0].style.display = "none";
                document.getElementsByClassName("wallet-points-text")[0].innerHTML = "";
                document.getElementsByClassName("wallet-points")[0].innerHTML = "Carteira Suspensa";
            }
        }
    }, 60);
    
}

function mUp(){
    clearInterval(veloInterval);
    veloInterval = setInterval(function () {
        velocidade--;
        document.getElementsByClassName("velocity-value")[0].innerHTML = velocidade + "km/h";

        if(velocidade === 0){
            clearInterval(veloInterval);
        }

        if(velocidade < 0){
            velocidade = 0;
        }

        if (velocidade < maxVelocity){
            document.getElementsByClassName("velocity-limiter")[0].style.display = "none";
        }

        
    }, 10);
}

function reset(){
    clearInterval(veloInterval);
    veloInterval = setInterval(function () {
        velocidade--;
        document.getElementsByClassName("velocity-value")[0].innerHTML = velocidade + "km/h";

        if(velocidade === 0){
            clearInterval(veloInterval);
        }

        if(velocidade < 0){
            velocidade = 0;
        }

        if (velocidade < maxVelocity){
            document.getElementsByClassName("velocity-limiter")[0].style.display = "none";
        }
        
    }, 30);
}