console.log("hi");

$("#language").on("hover", function(){
    if($("#english").hasClass("active")){
        $("#english").removeClass("active");
        $("#english").addClass("inactive");
        $("#spanish").removeClass("inactive");
        $("#spanish").addClass("active");
        $("#french").removeClass("inactive");
        $("#french").addClass("active");
    }
});

function english(){
    $("#english").addClass("active");
    $("#spanish").removeClass("active");
    $("#french").removeClass("active");
}

function spanish(){
    $("#spanish").addClass("active");
    $("#english").removeClass("active");
    $("#french").removeClass("active");
}

function french(){
    $("#french").addClass("active");
    $("#spanish").removeClass("active");
    $("#english").removeClass("active");
}

setTimeout(english,400);
setTimeout(spanish,800);
setTimeout(french,1200);

