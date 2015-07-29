var list = [];

//saves text box entries as var
function recordText () {
    $("#addbox").keyup(function (event) {
        if (event.keyCode == 13) {
        console.log("enter keyup\n");
        var txt = $("#addbox").val();
        console.log(txt);
        displayNewItem(createData(txt));
        $('#addbox').val('');
   }});
    $(document).on("click", "#addbutton", function(e) {
        console.log("addbutton clicked\n");
        var txt = $("#addbox").val();
        console.log(txt);
        displayNewItem(createData(txt));
        $('#addbox').val('');
    });
    
}

function createId () {
    console.log("creating id");
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
    });
}

function createData (text) {
    console.log("creating data");
    var newItem = {
        "description": text,
        "id": createId()
    }
    console.log("appending new item\n");
    list.push(newItem);
    console.log(list, "\n");
    return newItem;
}


$(document).ready(function() {
    $("#addbox").val("").focus();
    recordText();
    if (list.length == 0) {
        $('.notable').hide;
        console.log("Table hidden");
    }
});


function displayNewItem(newItem) {
    var idx = list.length;
    var itemElement = $("<li class='notable table-view-cell' id=item'" +"-"+ idx + "'>" + "<span class='description'>" + newItem.description + "</span> </li>");
    $( ".notable").append(itemElement);
}