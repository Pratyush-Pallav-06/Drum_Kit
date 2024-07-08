
// this is for the click from the screen of the computer and to call the function accordingly 




var number_of_drums = document.querySelectorAll(".drum").length ;

for(var i = 0 ; i<number_of_drums ; i++)
{

document.querySelectorAll(".drum")[i].addEventListener ("click" , function()  {

                             // here we created a undefined function to call the function for the sake    document.querySelectorAll(".drum")[i].addEventListener ("click" , function()  {  write the function part here }); 
            
                             //   *** or ***  document.querySelectorAll(".drum")[i].addEventListener("click" , audio_play); // here we can see that we havent added the parenthasis along the function say_hello()   ........... as because if we add the parenthasis ... then it will straight away call the function without any click on the button

var button_pressed = this.innerHTML ;

makesound(button_pressed) ;
button_animation(button_pressed) ;


});




// if we press the keyboard button  then it is for that to identify and to call the function makesound accordingly 




document.addEventListener("keypress" , function(event){

   makesound(event.key) ;
   button_animation(event.key);

}) ;






// this is the function to be called ::::::







function makesound(key) 
{


switch (key) {
   case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      
      break;

  

   case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      
      break;

      case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      
      break;
      
      case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      
      break;
   
      case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      
      break;

      case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      
      break;

      case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      
      break;

      default:   console.log(button_pressed) ;
      
}

}
}




function button_animation(current_key) 
{
 var activeButton = document.querySelector("."+current_key) ;    // this selects the "button class" from the index of the html

 activeButton.classList.add("pressed") ;         // this classlist adds the css file name or the class name created  inside the javascript
 


 setTimeout(function(){                                // this is the type of function which removes the animation after few seconds so that it looks perfectly animated
   activeButton.classList.remove("pressed") ;         // after 100 miliseconds it removes the classList which was added inside the variable active button .............,,,,,,,,,,, agar isko nhiii use krte then button to click hote hue dikhtaa but wo reverse nhiii hotaa .,,.,..,. agar iskaa effect dekhnaa haiii yaa changes dekhnaa hai then iss function ko ek baar remove krke dekhlo 
 }, 100);
}









// function audio_play()                 // therefore if u want that the function calls itself after the button is clicked then ............. do not add the parenthasis when calling the function in the addEventListener(say_hello)
// {
//    var audio = new Audio("./sounds/crash.mp3");
//    audio.play();
// }
