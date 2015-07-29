var list = [];

//saves text box entries as var
function recordText () {
    $("#addbox").keyup(function (event) {
        if (event.keyCode == 13) {
        console.log("enter keyup\n");
        var txt = $("#addbox").val();
        console.log(txt);
   }});
    $(document).on("click", "#addbutton", function(e) {
        console.log("addbutton clicked\n");
        var txt = $("#addbox").val();
        console.log(txt);
    });
    
}

$(document).ready(function() {
    recordText();
});

/* have box in focus on page load */