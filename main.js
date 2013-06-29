window.onload = init;

function init(){
  var button = document.getElementByID("add_sticky");
  button.onclick = makeSticky;
  for(var i=0; i<localStorage.length; i++){
    var key = localStorage.key(i);
    if(key.substring(0,6)==='sticky'){
      var value = localStorage.getItem(key);
      addStickiesToPage(value);
    }
  }
}

function addStickiesToPage(value){
  var stickies = document.getElementByID("stickies");
  var sticky = document.createElement("li");
  var span = document.createElement("span");
  
  span.setAttribute("class","sticky");
  span.innerHTML = value;
  sticky.appendChild("span");
  stickies.appendChild("sticky");
}

function makeSticky(){
  var value = document.getElementByID("note_content").value;
  var key = "sticky_" + localStorage.length;
  localStorage.setItem(key,value);
  addStickiesToPage(value);
}
