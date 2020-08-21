  //Bussiness Logic
function neighbor(number) {
const hood = [];
for (let i = 0; i <= number; i++) {
 hood.push(i.toString());
 if ((number[i]).match("3")) {
  number[i] = ("Won't you be my neigbor...");

}
}
return number;
};

  // business logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedNumber = parseInt($("#number").val());
    const result =neighbor(inputtedNumber) ;
    $("#outcome").text(result);
   
  });
});