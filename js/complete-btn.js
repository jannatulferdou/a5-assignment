const completeBtns = document.querySelectorAll('.completeBtn');
const taskRemain = document.getElementById('remain-task');
const taskCompleted = document.getElementById('completed-task');
const activityLog = document.getElementById('activity-log'); 

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
}

for (let btn of completeBtns) {
    btn.addEventListener('click', function()  {
      completeTask(btn); 
    });
  }


  const clearHistoryBtn = document.getElementById('clear-history-btn');

  clearHistoryBtn.addEventListener('click', function(){
    activityLog.innerHTML=``;
  })
