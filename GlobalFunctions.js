function initAll() {
    localStorage.setItem("admin", "admin");
    var category1 = new Category(0, "default");
    createCat(category1);
}

function openEditPopUp(task) {
    var idx = task.innerHTML.indexOf("<br>");
    var name = task.innerHTML.substring(0, idx);
    var color = task.style.borderColor;
    var date = new Date(task.innerHTML.substring(idx, idx + "2018-11-01T23:59".length));


    var html = "";


    html += '<input id="CatogoryAddInput' + this.id + '" value="'+name+'" onchange="editName(this.value, \''+task.id+'\')">';


    html += '<select id="CatogoryAddColorInput'+this.id+'" onchange="editColor(this.value, \''+task.id+'\')"><option '+(task.style.borderColor == "red" ? "selected" : "")+'>red</option><option '+(task.style.borderColor == "yellow" ? "selected" : "")+' >yellow</option><option '+(task.style.borderColor == "green" ? "selected" : "")+' >green</option></select>';


    // html += '<input type="datetime-local" id="CatogoryAddDateInput' + this.id + '" value="'+date+'" onchange="editDate(this.value, \''+task.id+'\')">';


    html += '<button onclick="hideModalBox()">done</button>';

    displayModalBox_HTML(html);
}


function editName(newName, taskID) {
    var task = document.getElementById(taskID);
    var currentContent = task.innerHTML;

    var idx = task.innerHTML.indexOf("<br>");
    currentContent = currentContent.replace(currentContent.substring(0, idx), newName);
    task.innerHTML = currentContent;
}

function editDate(newName, taskID) {
    var task = document.getElementById(taskID);
    var currentContent = task.innerHTML;

    var idx = task.innerHTML.indexOf("<br>");
    var oldDate = currentContent.substring(idx, "2018-11-01T23:59".length);
    currentContent = currentContent.replace(oldDate, newName);
    task.innerHTML = currentContent;
}

function editColor(newName, taskID) {
    var task = document.getElementById(taskID);
    task.style.borderColor = newName;
}


function displayModalBox_HTML(htmlCode)
{
    // in case the box was already displayed
    if (document.getElementById("ModalBox_Outer").style.display == "block")
    {
        htmlCode = document.getElementById("ModalBox_Content").innerHTML + "<br><br><hr><br>" + htmlCode;
    }

    document.getElementById("ModalBox_Outer").style.display = "block";
    document.getElementById("ModalBox_Content").innerHTML = htmlCode;
    adaptModalBoxSize();
}

function hideModalBox(event)
{
    if (event == null) throw "Error";

    if (event.target == document.getElementById("ModalBox_Outer") || event.target == document.getElementById("ModalBoxCloseBtn"))
    {
        hideModalBox_Force();
    }
}

function adaptModalBoxSize()
{
    return;
}

function hideModalBox_Force()
{
    document.getElementById("ModalBox_Outer").style.display = "none";
}