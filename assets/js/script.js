const container = document.querySelector(".container");
const timeBlock = document.createElement('div')
const div = document.createElement("div");

const textarea = document.createElement("textarea");

const button = document.createElement("button");

timeBlock.setAttribute('class', 'time-block row')


div.innerHTML = "9:00";
div.setAttribute("class", "hour col-2")
timeBlock.appendChild(div);

textarea.innerHTML = "";
textarea.setAttribute('class', 'col-8')
timeBlock.appendChild(textarea);

button.innerHTML = "Save";
button.setAttribute("class", "saveBtn col-2")
timeBlock.appendChild(button);

container.appendChild(timeBlock)