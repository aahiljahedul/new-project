const allBtn = document.querySelectorAll('.complete-btn');
const comments = document.querySelectorAll('.card-title');
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', function () {
        alert('Board Updated Successfully');
        const incrementElement = document.getElementById("add-nav");
        const decrementElement = document.getElementById("task-num");
        const add = parseInt(incrementElement.innerText);
        const sub = parseInt(decrementElement.innerText);
        incrementElement.innerText = add + 1;
        decrementElement.innerText = sub - 1;
        this.disabled = true;
        
        if (decrementElement.innerText == 0) {
            alert('Congratulations!!! You have completed all the task. ')
        }

        
        const cardTitle = comments[i].innerText;
        

        
        let currentTime = new Date().toLocaleTimeString();

        
        const messageContainer = document.getElementById('message-container');
       
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'mb-4', 'rounded-lg', 'p-2');
        div.innerHTML = `
        <p>You have completed the task ${cardTitle} at ${currentTime} </p>
        `
        messageContainer.appendChild(div);

        const removeChild = document.getElementById('remove-btn');
        removeChild.addEventListener('click', function () {
            messageContainer.removeChild(div)
        })

    })
}