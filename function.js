var list = [];

$(document).ready(function() {
    $("#addbox").val("").focus();
    loadData();
    recordEvent();
});

function saveData () {
    // save data to local storage
    localStorage.setItem("notes",JSON.stringify(list));
}

function loadData () {
    // load data from local storage
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
    console.log(txt);
    createItem(txt);
    displayItems(list);
    $('#addbox').val('');        
    console.log("Item created\n");    
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

function displayItems(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        var itemElement = $("<li class='notable table-view-cell' id=item'" +"-"+ idx + "'>" + "<span class='description'>" + arr[idx].description + "</span> </li>");
        $( ".notable").append(itemElement);
        console.log("displaying item #" + idx + "\n")    };
}
loadData ();
