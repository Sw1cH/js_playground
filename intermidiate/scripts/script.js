var createPTag = document.createElement("li");
createPTag.innerHTML = "Sup beaches, this my element";
document.getElementById("list").appendChild(createPTag);


var createText = document.createTextNode("Text document");
document.getElementById("p1").appendChild(createText);

function timer5second(){
    alert("This is 5 second timer");
}

// setTimeout(timer5second,10000);

var myImage = document.getElementById("image");
var ArrayImage= ["images/1.png","images/2.png","images/3.png","images/4.png"];
var imageIndex = 0;

function imageAnimation(){
   
    myImage.setAttribute("src", ArrayImage[imageIndex]);
   
    console.log("Image file: ", ArrayImage[imageIndex]);
   
    ++imageIndex;
   
    if (imageIndex >= ArrayImage.length) {
        imageIndex = 0;
        console.log("Image index: ", imageIndex);
    }
}


setInterval(imageAnimation, 200);
