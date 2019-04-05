console.log("hello")
/* this function is to test my jsscript for the 
priority project--->*/

function myFunction() {
 document.getElementById("demo").innerHTML = " wow";

}

/* test code for project 1
using the .ready jquery FF
*/
$(document).ready(function(){

   $("addbutton").click(function(){
    additem();
  });

}); 
 
 // made change to learn to debug

 /*Call the 'addItem()' function whenever
   * The enter button is pressed. The 'e'
   * passed into the function is the event (user action).
   * e.keyCode tells us which button was clicked.
   * The keyCode for the enter button is 13.
   * Since we don't want to add items when any button is clicked,
   * we use an 'if' statement to make sure the keyCode is 13*/
  $('#listInput').keyup(function(e)
  {
    if(e.keyCode == 13)
     {
      addItem();
     }
  });

  // addItem function
  /*This is the function that gets called above.*/
function addItem() {

  /*Use the jQuery 'val' function to get the value of the input fields on the page*/
  var task = $('#listInput').val()
  var priority = $('#priority').val()

  /*pass them to a function that will add them to the page*/
  addItemToHTML(task, priority)

  /*Reset the fields*/
  $('#listInput').val('');
  $('#priority').val(-1)
}

// set the page

function addItemToHTML(task, priority) {
  /*take the task and priority the user entered
   * and update the page accordingly*/

  /*priorityClass represents the css class we're gonna use
   * on an item depending on what priority the user wanted it to be.
   * We use a switch statement to see what the value for priority is
   * (this comes from the values we entered in the <select> in the html)*/
  var priorityClass='priority';
  switch(priority) {
    case '1':
      priorityClass='priority1';
      break;
    case '2':
      priorityClass='priority2';
      break;
    case '3':
      priorityClass='priority3';
      break;
  }

  //end of switch loop

 /*finally, add the task to the page using the jQuery 'append' function.
   * This gets added into the <ul> with id 'listreturn' on the html page.
   * Notice how we also use the Font Awesome icon 'fa-close' */
  $('#listreturn').append("<li class="+ priorityClass +"><i class='fa fa-close'/>" + task + "</li>")

  /*Bind the click event for 'fa-close' so that whenever the X is clicked,
   * It removed the list item from the page. Notice how this is the only
   * event that's not in '$(document).ready()'. This is because we need
   * html to be loaded before we bind any events to it. So we do this here
   * because we need to bind this event every time a new item is added to the
   * page*/
  $('.fa-close').click(function(){
    console.log($(this).parent())
    $(this).parent().remove()
  });
}
