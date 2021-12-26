$(document).ready( function () {
    var currentDate = moment().format("dddd, Do MMMM YYYY");
    var hourArr =[];
    
    $("#currentDay").text("Today is : " + currentDate + ".");
    // eventlistener for the savebtn 
    $(".saveBtn").on("click",function(){

        // access text content for the sibling textarea which is the value
        var textContent = $(this).siblings(".description").val();

        // access id from the parent which is the key
        var time = $(this).parent().attr("id");
        console.log(time, textContent);

        // save the pair of id and value to localstorage
        localStorage.setItem(time, textContent);
        console.log(localStorage);
    });  
    // createHourArr();
    // function createHourArr(){
    //     for (var i=0; i < 9; i++){
    //         var hour = moment().hour(i+9).format("HH");
    //         hourArr.push(hour);
    //         console.log(hourArr);
    //     }
    // }  
    //checkTime function
    function checkTime() {
    //current hour 
    var currentHour = moment().format("HH");
    // get time attibute of time block id
    var blockHour = $(".time-block");
    console.log(currentHour);
    blockHour.each(function(){
        var hour = parseInt($(this).attr("id"));
        console.log(hour);
    // set planner time block colours for each hour
        if ( hour === currentHour){
            $(this).children(".description").addClass("present");
            console.log("is present");
        } else if (currentHour > hour){
            $(this).children(".description").addClass("past");
            console.log("is past");
        } else {
           $(this).children(".description").addClass("future");
           console.log("is future");
        }
    });

    
    }        
     checkTime();      

  
});







    