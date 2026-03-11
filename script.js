const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const clearAllBtn = document.getElementById("clearAll");
const addSampleBtn = document.getElementById("addSample");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    createEventCard(title, date, category, description);
    form.reset();
});


function createEventCard(title, date, category, description) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <span class="delete-btn">X</span>
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
    `;

    eventList.appendChild(card);
}


eventList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});


clearAllBtn.addEventListener("click", function () {
    eventList.innerHTML = "";
});

const demoText = document.getElementById("demoText");
const output = document.getElementById("output");

document.getElementById("innerTextBtn").onclick = function () {
    output.innerText = demoText.innerText;
};

document.getElementById("innerHTMLBtn").onclick = function () {
    output.innerText = demoText.innerHTML;
};

document.getElementById("textContentBtn").onclick = function () {
    output.innerText = demoText.textContent;
};