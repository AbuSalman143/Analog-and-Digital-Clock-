let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(()=>{
    let day=new Date();
    let hh=day.getHours() * 30;
    let mm=day.getMinutes() * 6;
    let ss=day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;

        //  digital clock


    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let secounds = document.getElementById("secounds");
    let ampm = document.getElementById("ampm"); 
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    let am=h>=12 ? "PM":"AM";
    // covert 24hr clock to 12hr
    if(h>12){
        h=h-12;
    }
    //add zero before single digit number
    
    h=(h<10) ? "0"+h : h;
    m=(m<10) ? "0"+m : m;
    s=(s<10) ? "0"+s : s; 

    hours.innerHTML=h;
    minutes.innerHTML=m;
    secounds.innerHTML=s;
    ampm.innerHTML=am

})

function getFullDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

// Function to get the full month name (e.g., January, February, etc.)
function getFullMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

// Function to display the current day and date
function displayDayAndDate() {
    const now = new Date();
    const dayElement = document.getElementById("day");
    const dateElement = document.getElementById("date");

    const dayOfWeek = getFullDayName(now.getDay());
    const month = getFullMonthName(now.getMonth());
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();

    dayElement.textContent = ` ${dayOfWeek}`;
    dateElement.textContent = `${month} ${dayOfMonth}, ${year}`;
}

// Call the displayDayAndDate function when the page loads
displayDayAndDate();