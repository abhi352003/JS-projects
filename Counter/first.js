const root = document.querySelector("#root")



function update() {
    let timer = new Date(); // Current date and time
    let olympicTime = new Date("2028-01-20T00:00:00"); // Target date and time
    let diffTime = olympicTime - timer; // Difference in milliseconds

    if (diffTime <= 0) {
        console.log("The Olympics have started!");
        return;
    }

    let daysLeft = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Calculate days
    let hoursLeft = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    let minutesLeft = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    let secondsLeft = Math.floor((diffTime % (1000 * 60)) / 1000); // Calculate seconds
    
    const Days= document.querySelector("#Days")
    
    const Hr= document.querySelector("#Hr")
    const Min= document.querySelector("#Min")
    const Sec= document.querySelector("#Sec")
    Days.innerHTML=` DAYS <br> ${daysLeft}`
    Hr.innerHTML= ` hours <br> ${hoursLeft}`
    Min.innerHTML=` minutes <br> ${minutesLeft}`
    Sec.innerHTML= ` second <br> ${secondsLeft}`
    
}


 setInterval(update, 1000);
