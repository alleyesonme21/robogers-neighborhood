  //Bussiness Logic
function neighborHood(num) {
let array = [];
for (let i = 0; i <= num; i = i + 1) {
 array.push(i.toString());
 if ((number[i]).match("3")) {
   number[i] = "Won't you be my neighbor?"

 }
  
}

}

  //UI Logic
  $(document).ready(function() {
    $("#formOne").submit(function(event){
      event.preventDefault();
      const inputtedNumber = parseInt($("#number").val());
    neighborHood(inputtedNumber);
    })
  })