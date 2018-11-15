var category = [];

function renderAll() {
    var html = "";
    for (var i = 0; i < category.length; i++) {
        if (category[i] != null) {
            html += category[i].generateHTML()
        }
    }
    return html;
}

function Category(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.values = [];
}

Category.prototype.init = function () {

};

Category.prototype.generateHTML = function () {
    var html = "";
    html += '<div id=CatgroyDiv' + this.id + '>';
    if (this.id !== 0) {
        html += '<h3>' + this.title + '</h3>';
    }
    // list
    html += '<div id="CategoryNo' + this.id + '" class="VisualControlSortableList" style="border-color:' + this.color + '" >';
    html += '</div>';
    //delete category
    if (this.id !== 0) {
        html += '<button id="categoryDeleteButton' + this.id + '" onclick="delCat(' + this.id + ' )">-</button>';
    }
    html += "<br>";

    // add inputs
    html += '<input id="CatogoryAddInput' + this.id + '">';
    html += '<select id="CatogoryAddColorInput' + this.id + '"><option>red</option><option>yellow</option><option>green</option></select>';
    html += '<input type="datetime-local" id="CatogoryAddDateInput' + this.id + '">';
    html += '<button id="CatogoryAddButton' + this.id + '">+</button>';
    html += '</div';
    return html;
};

Category.prototype.initFunctionality = function () {
    var x = this;

    document.getElementById("CatogoryAddButton"+this.id).addEventListener("click",function () {
        var name = document.getElementById("CatogoryAddInput"+x.id).value;
        var color = document.getElementById("CatogoryAddColorInput"+x.id).value;
        var date = document.getElementById("CatogoryAddDateInput"+x.id).value;
        var html = '<div id="task'+x.id + '_' + x.values.length + '" class="VisualControlSortableListElement SortableListElement_Movable" style="border-color: '+color+'; color: white">';
        html += name + "<br>" + date + '<br>';
        html += '<button onclick="openEditPopUp(this.parentElement)">edit</button>';
        html += '<button onclick="this.parentElement.parentElement.removeChild(this.parentElement);" id="deleteBtn'+x.id + '_' + x.values.length + '">x</button></div>';
        document.getElementById("CategoryNo"+x.id).innerHTML += html;
        x.values.push(x.values.length);

        // document.getElementById("deleteBtn" + x.id + "_" + (x.values.length-1)).addEventListener("click", function () {

        // })
    });

    $("#CategoryNo" + this.id).sortable({
        connectWith: ".VisualControlSortableList",
        update: function () {
            console.log($(this).sortable('toArray'));
        }
    });
};

function delCat(id) {
    category[id] = null;
    document.getElementById("mainContainer").removeChild(document.getElementById('CatgroyDiv' + id))
}

function createCat(newCat) {
    category.push(newCat);
    document.getElementById("mainContainer").innerHTML += newCat.generateHTML();
    newCat.initFunctionality();
}

function addCat() {
    var title = document.getElementById('catTitle').value;
    var color = document.getElementById('color').value;
    var newCat = new Category(category.length, title, color);
    createCat(newCat);
}

function getLength() {
    return category.length;
}


QUnit.test( 'getLength()', function( assert ) {


    assert.ok(getLength() == 0, "Passed!" );
});