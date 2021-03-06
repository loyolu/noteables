var list = [];

$(document).ready(function() {
    loadData();
    recordEvent();
});

function saveData () {
    localStorage.setItem("notes", JSON.stringify(list));
}

function loadData () {
    list = JSON.parse(localStorage.getItem("notes"));
    $("#alert-empty-input").hide();
    $("#addbox").val("").focus();
    if (list === null) {
        list = []
        $('table').hide();
        console.log("table hidden");
    }
    else {
        displayItems(list);
    }
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
    if (txt == '') {
        $('#addbox').val(''); 
        $("#addbox").val("").focus();
        $("#alert-empty-input").show();
        console.log("err: no text; empty input alert shown \n");
        return;
    }
    else {
        $("#alert-empty-input").hide();
        console.log(txt + "\n");
        createItem(txt);
        console.log("Item created\n");
        $('table').show();   
        displayItem(list);
        $('#addbox').val('');
        saveData (); 
    };
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

function displayItem (arr) {
    var idx = arr.length-1;
    var itemElement = ("<tr> <td class='table-view-cell' id=item'" +"-"+ idx + "'>" + "<span class='description'>" + arr[idx].description + "</span> </td> </tr>");
    $("table").append(itemElement);
    console.log("displaying item #" + idx + "\n");    
}

function displayItems (arr) {
    for (var i = 0; i < arr.length; i++) {
        var itemElement = ("<tr> <td class='table-view-cell' id=item'" +"-"+ i + "'>" + "<span class='description'>" + arr[i].description + "</span> </td> </tr>");
        $("table").append(itemElement);
        console.log("displaying item #" + i + "\n"); 
    };
}

loadData ();

// change focus of input box to red (and shake) if input = ''
