window.onload = init;

function init(){
  localStorage.setItem("note1","Study for placements");
  localStorage.setItem("note2","Go to parlour");
  
  var note = localStorage.getItem("note1");
  
  alert(note);
}
