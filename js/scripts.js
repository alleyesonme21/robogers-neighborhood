  //Bussiness Logic
function neighbor(hood) {
const number = [];
for (let i = 0; i <= hood; i++) {
 number.push(i.toString());
 if ((number[i]).match("3")) {
  number[i] = ("Won't you be my neigbor...");
 } else if ((number[i]).match("2")) {
 number[i] = ("Boop");
 }

  
}
return number;
};

  // Business logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    
  });
});