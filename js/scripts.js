  //Bussiness Logic
function neighbor(hood) {
  let number = [];
  for (let i = 0; i <= hood; i++) {
    number.push(`${i}`);
    if ((number[i]).match("3")) {
      number[i] = ("Won't you be my neigbor?.");
    } else if ((number[i]).match("2")) {
      number[i] = ("Boop");
    } else if (number[i].match("1")) {
      number[i] = ("Beep");
    } else {
      number[i];
  } 
}
return number;
};

  //UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedNumber = $("#number").val();
    let result = neighbor(inputtedNumber);
    $("#output").text(result);
    $("#output").show() 
  });
});
