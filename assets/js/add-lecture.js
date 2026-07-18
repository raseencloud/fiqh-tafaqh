document.addEventListener("DOMContentLoaded", () => {

    console.log("Add Lecture Module Loaded");

    const saveBtn = document.getElementById("saveBtn");

    saveBtn.addEventListener("click", () => {

        const lecture = {

            title: document.getElementById("title").value,

            speaker: document.getElementById("speaker").value,

            category: document.getElementById("category").value,

            audio: document.getElementById("audio").value,

            youtube: document.getElementById("youtube").value,

            description: document.getElementById("description").value

        };

        console.log(lecture);

    });

});