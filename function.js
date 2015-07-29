var list = [];

//saves text box entries as var
function recordText () {
    $("#addbox").keyup(function (event) {
        if (event.keyCode == 13) {
        console.log("enter keyup\n");
        var txt = $("#addbox").val();
        console.log(txt);
        createData(txt);
   }});
    $(document).on("click", "#addbutton", function(e) {
        console.log("addbutton clicked\n");
        var txt = $("#addbox").val();
        console.log(txt);
        createData(txt);
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
}


$(document).ready(function() {
    recordText();
});

/* have box in focus on page load */