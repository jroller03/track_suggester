$(document).ready(function(){
  $("form#info").submit(function(event){
    var company = $("input#company").val();
    var system = $("select#system").val();
    var work_type = $("select#work_type").val();
    var city = $("select#city").val();

    if (!age){
      alert("Please fill out all the forms!");
      return;
    }

    if (gender === 'male'){
      if (){
        $(".suggest").text("");
        $("#route").show();
      }else if () {
        $(".suggest").text("");
        $("#route").show();
      } else if (){
        $(".suggest").text("");
        $("#route").show();
      }

    } else {
        if () {
          $(".suggest").text("");
          $("#route").show();
        } else if () {
          $(".suggest").text("");
          $("#route").show();
        } else if (){
          $(".suggest").text("");
          $("#route").show();
        }
    }
    event.preventDefault();
  });
});
