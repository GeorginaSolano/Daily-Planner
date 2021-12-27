$(document).ready( function () {
    var currentDate = moment().format("dddd, Do MMMM YYYY");
    $("#currentDay").text("Today is : " + currentDate + ".");
    
    $(".saveBtn").on("click",function() {

        // access text content for the sibling textarea which is the value
        var textContent = $(this).siblings(".description").val();

        // access id from the parent which is the key
        var time = $(this).parent().attr("id");
                localStorage.setItem(time, textContent);

    });  
  
     //checkTime function
    function checkTime() {
    //current hour 
    var currentHour = moment().format("HH");
    // get time attibute of time block id
    var blockHour = $(".time-block");

    blockHour.each(function(){
        var hour = $(this).attr("id");
    // set planner time block colours for each hour
        if ( hour === currentHour){
            $(this).children(".description").addClass("present");
        } else if (currentHour > hour){
            $(this).children(".description").addClass("past");
        } else {
           $(this).children(".description").addClass("future");
        }
    });
    };      
     checkTime();      
     for (i=0; i<localStorage.length; i++) {
         $("#"+localStorage.key(i)+".description").val(localStorage.getItem(localStorage.key(i)));
     };
     localStorage.clear();

  
});







    