function myFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

}


var isImg1 = true;
var isImg2 = false;

function bodyImg() {
  if (isImg1 == true) {
    // document.body.style.backgroundImage = "url('')"; 
    var element = document.getElementById("blue");
    // element.style.backgroundImage('invisible.ico')
    // element.style.backgroundColor="red";
    element.style.backgroundImage = "url('images/invisible.ico')";

    // document.getElementById("blue");
    // blue.backgroundImage=URL();
    //Go to img2
    isImg1 = false;
    isImg2 = true;
  }
  else if (isImg2 == true) {
    // document.body.style.backgroundImage = "url('')";

    var element = document.getElementById("blue");
    // element.style.backgroundImage('single.png')
    element.style.backgroundImage = "url('images/icons8_hide.ico')";
    // blue.backgroundImage=URL('single.png');
    //Revert to img1
    isImg1 = true;
    isImg2 = false;
  }
}