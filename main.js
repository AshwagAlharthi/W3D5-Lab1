// let button1 = document.getElementById("btn1");
// let button2 = document.getElementById("btn2");
// let button3 = document.getElementById("btn3");

// let preButton1 = button1.textContent;
// let preButton2 = button2.textContent;
// let preButton3 = button3.textContent;

function toggleCheckbox(id) {
    const checkboxElement = document.getElementById(id);
    const label = document.querySelector(`label[for=${buttonId}]`);

    checkboxElement.checked = !checkboxElement.checked;

    // if (checkboxElement.checked) {
    //     label.textContent = label.dataset.originalText + " (Clicked)";
    //     label.classList.add('active');
    // } else {
    //     label.textContent = label.dataset.originalText;
    //     label.classList.remove('active');
    // }
}


// toggleButton('chk1');
