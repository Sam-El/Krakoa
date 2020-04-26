$(function(){
    $("#politicalVisitBtn").on("submit", function(){
        $(".modal-dialog-1").show();
    });
    
    $("#asylumApplicationBtn").on("submit", function(){
        alert("Asylum application pending approval!");
    });
});