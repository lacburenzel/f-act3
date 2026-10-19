$(document).ready(function(){

    $("p.intro").css("color", "#55627f");

    $("#btn-title").click(function(){
        $("#title").text("Good Morning!");
        $("#message").text("You change the title!");
    });

    $("#btn-title").dblclick(function(){
        $("#title").text("You double click!");
        $("#message").text("You double click the button!");
    });

     $("#btn-hide").click(function(){
        $("#profile").hide("slow");
        $("#message").text("Profile hidden.");
    });

    $("#btn-show").click(function(){
        $("#profile").show(2000);
        $("#message").text("Profile shown.");
    });

    $("#course").change(function(){
        $("#course-text").text($(this).val());
        $("#message1").text("Course change to " + $(this).val())
    })

    $("#btn-title").mousedown(function (){
        $(this).css("background", "green")
        $("#message").text("You pressed the button.")
    })

    $("#btn-title").mouseup(function (){
        $(this).css("background", "royalblue")
        $("#message").text("You unpressed the button.")
    })

    $("#btn-show").mousedown(function (){
        $(this).css("background", "green")
        $("#message").text("You pressed the button.")
    })

    $("#btn-show").mouseup(function (){
        $(this).css("background", "royalblue")
        $("#message").text("You unpressed the button.")
    })

    $("#btn-hide").mousedown(function (){
        $(this).css("background", "green")
        $("#message").text("You pressed the button.")
    })

    $("#btn-hide").mouseup(function (){
        $(this).css("background", "royalblue")
        $("#message").text("You unpressed the button.")
    })

    $("#btn-odd").mousedown(function (){
        $(this).css("background", "green")
        $("#message").text("You pressed the button.")
    })

    $("#btn-odd").mouseup(function (){
        $(this).css("background", "royalblue")
        $("#message").text("You unpressed the button.")
    })

    $("#btn-even").mousedown(function (){
        $(this).css("background", "green")
        $("#message").text("You pressed the button.")
    })

    $("#btn-even").mouseup(function (){
        $(this).css("background", "royalblue")
        $("#message").text("You unpressed the button.")
    })

    var colors = ["royalblue", "green", "orange", "purple"];
    var oddIndex = -1;
    var evenIndex = -1;

    function colorRows(){
        $("th").css("background", "lightblue");
        if (oddIndex >= 0){
            $("#table tbody tr:nth-child(odd)").css({"background": colors[oddIndex], "color": "white"})
        }
        if (evenIndex >= 0){
            $("#table tbody tr:nth-child(even)").css({"background": colors[evenIndex], "color": "white"})
        }
    }
    colorRows();

     $("#btn-h").click(function(){
        $("#table").hide("slow");
        $("#message").text("Table hidden.");
    });

    $("#btn-s").click(function(){
        $("#table").show(2000);
        $("#message").text("Table shown.");
    });

    $("#btn-odd").click(function(){
        oddIndex = (oddIndex + 1) % colors.length;
        colorRows();
        $("#message2").text("Odd rows changed to  " + colors[oddIndex] + ".")
    });

    $("#btn-even").click(function(){
        evenIndex = (evenIndex + 1) % colors.length;
        colorRows();
        $("#message2").text("Even rows changed to  " + colors[evenIndex] + ".")
    });
})