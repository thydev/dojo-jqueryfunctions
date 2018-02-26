$(document).ready(function(){

    $("#btnClick").click(function(){
        $(".counter").text(parseInt($(".counter").text())+1);
    });

    $("#hideh2").click(function(){
        $("h2").hide(2000);
    });

    $("#showh2").click(function(){
        $("h2").show(3000);
    });

    $("#toggle").click(function(){
        $("h2").toggle(500);
    });

    $("#slidedown").click(function(){
        $("p.test").slideDown(500);
    });
    $("#slideup").click(function(){
        $("p.test").slideUp(500);
    });
    $("#slidetoggle").click(function(){
        $(".test").slideToggle(500);
    });
    $("#fadein").click(function(){
        $("#txt1").fadeIn(500);
        $("#txt2").fadeIn(1500);

    });
    $("#fadeout").click(function(){
        $("#txt1").fadeOut(500);
        $("#txt2").fadeOut(1500);
    });
    $("#addclass").click(function(){
        $("#txt1, h2").addClass("bgBlue");
        
    });
    $("#toggleclass").click(function(){
        $("#txt1, h2").toggleClass("bgBlue");
        
    });
    $("#before").click(function(){
        $("h2").before("bgBlue");
        
    });
    $("#after").click(function(){
        $("h2").after("bgBlue");
        
    });
    $("#append").click(function(){
        $("h2").append("bgBlue");
        
    });
    $("#htmlbtn").click(function(){
        $("body").html("<h1>Hello !!</h1>");
        
    });
    $("#attr").click(function(){
        $("#txt1").text($("h2").attr("title"));
        
    });
    $("#getval").click(function(){
        $("h2").text($("#numtype").val());
        
    });

    $("body").data("user", {firstname: "toto", lastname: "tata"});
    $("#getdata").click(function(){
        $("h2").text($("body").data("user").firstname + " " + $("body").data("user").lastname);
        
    });
});