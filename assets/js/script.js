//structure
const currentTime = moment().format("DD/MM/YYYY H:m");
document.getElementById("currentDay").innerHTML = currentTime;
console.log(currentTime)

const container = document.querySelector(".container");

for (i = 9; i < 18; i++) {
    const timeBlock = document.createElement('div')
    const div = document.createElement("div");

    const textarea = document.createElement("textarea");

    const button = document.createElement("button");

    timeBlock.setAttribute('class', 'time-block row')


    div.innerHTML = +i + ":00";
    div.setAttribute("class", "hour col-2")
    timeBlock.appendChild(div);

    const currentHour = moment().hour(); 

    textarea.innerHTML = "";
    textarea.setAttribute('class', 'col-8')
    textarea.value = localStorage.getItem(+i + ":00");
    if (i === currentHour) {
        textarea.classList.add("present")
    } else if (i < currentHour) {
        textarea.classList.add("past")
    } else {
        textarea.classList.add("future")
    }
    timeBlock.appendChild(textarea);

    button.innerHTML = "Save";
    button.setAttribute("class", "saveBtn col-2")
    timeBlock.appendChild(button);

    container.appendChild(timeBlock)

    // save
    button.addEventListener("click", function(event) {
        const userInput = event.target.previousElementSibling.value;
        const hour = div.textContent;
        localStorage.setItem(hour, userInput);
    })
    ;
}


