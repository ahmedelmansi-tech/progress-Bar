const print = console.log;


let bar = document.querySelector(".container");
let percentageNum = document.querySelector(".num");
let arrow = document.querySelector(".container .fa-arrow-down-long")
bar.addEventListener("click", handleClick)



function handleClick(){
   

    let processPercentage = 0;
    let processInterval = setInterval(()=>{
        processPercentage += 1
        percentageNum.innerHTML = processPercentage + "%";

        
     bar.style.background = `conic-gradient(peru ${processPercentage}%, #efefef ${processPercentage}% 100%)`;
   
       
        if (processPercentage == 100){
            clearInterval(processInterval);
            percentageNum.innerHTML = `Done`;
            bar.style.background = `green`;

            if (percentageNum.innerHTML === `Done`) {
                bar.removeEventListener("click", handleClick)
            }
        }
    },100)


    // move the arrow
    arrow.style.transform = `translate(-50%, 220%)`;
    percentageNum.style.display = `block`
    
}




print(arrow)