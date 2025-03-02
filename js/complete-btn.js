document.addEventListener("DOMContentLoaded", function() {
    const completeBtns = document.querySelectorAll('.completeBtn');
    const taskRemain = document.getElementById('remain-task');
    const taskCompleted = document.getElementById('completed-task');
    const activityLog = document.getElementById('activity-log'); 
    const allCards = document.querySelectorAll('.border');

    let completedTasks=0;

    function completeTask(btn) {
        const card = btn.closest('.border'); 
        const heading = card.querySelector('h3').textContent; 
        alert("board updated successfully"); 

        btn.disabled = true; 

        let remaining = parseInt(taskRemain.textContent); 
        let complete = parseInt(taskCompleted.textContent);

        taskRemain.textContent = remaining - 1; 
        taskCompleted.textContent = complete + 1; 

        const now = new Date();
        const time = now.toLocaleTimeString();
        const p = document.createElement('p');
        p.textContent = `You have completed The task "${heading}" at ${time}`;
        activityLog.appendChild(p);
        completedTasks++;

        if (completedTasks === allCards.length) {
          alert("All task completed successfully");
        }
    }

    for (let btn of completeBtns) {
        btn.addEventListener('click', function() {
            completeTask(btn); 
        });
    }

    const clearHistoryBtn = document.getElementById('clear-history-btn');

    clearHistoryBtn.addEventListener('click', function() {
        activityLog.innerHTML = '';
    });

    document.getElementById("redirectBtn").addEventListener("click", function() {
        window.location.href = "./blog.html";
    });
});


const bgColorChangeBtn = document.getElementById("bg-color-change-btn");
const body = document.body;
const colors = ["#FFB3B3", "#FFD9B3", "#FFFFB3", "#B3FFB3", "#B3FFFF", "#B3B3FF", "#E6B3FF", "#808080"]; // রঙের অ্যারে
let colorIndex = 0;

bgColorChangeBtn.addEventListener("click", function() {
    body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});






const currentDateElement = document.getElementById("currentDate");
const now = new Date();

const month = now.toLocaleTimeString();
        const para = document.createElement('p');
        para.textContent = `${day} , <br> ${month}, ${year}`;
        month.appendChild(p); 


