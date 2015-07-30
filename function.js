var list = [];

$(document).ready(function() {
    $("#addbox").val("").focus();
    recordEvent();
});

function saveData () {
    localStorage.setItem("notes", JSON.stringify(list));
}

function loadData () {
    list = JSON.parse(localStorage.getItem("notes"));
    if (list === null)
     list = []
}

function recordEvent () {
    $("#addbox").keyup(function (event) {
        if (event.keyCode == 13)
            recordEventHelper ();
   });
    $(document).on("click", "#addbutton", function(e) {
        recordEventHelper ();
    });
}

function recordEventHelper () {
    console.log("event recorded on page: enter keyup or addbutton clicked\n");
    var txt = $("#addbox").val();
    console.log(txt + "\n");
    createItem(txt);
    console.log("Item created\n");   
    displayItems(list);
    $('#addbox').val('');
    saveData (); 
}

function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
    });
}

function createItem (text) {
    console.log("creating data");
    var newItem = {
        "description": text,
        "id": generateId()
    }
    console.log("appending new item\n");
    list.push(newItem);
    console.log(list, "\n");
    saveData ();
    return newItem.id;
}

function displayItems (arr) {
    var i = arr.length-1;
    var itemElement = ("<tr> <td class='table-view-cell' id=item'" +"-"+ i + "'>" + "<span class='description'>" + arr[i].description + "</span> </td> </tr>");
    $("table").append(itemElement);
    console.log("displaying item #" + i + "\n");    
  //document.write("<td>" + arr[i].description + "</td></tr>");
}
