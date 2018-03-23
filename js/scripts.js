$(document).ready(function(){
  $("form#info").submit(function(event){
    var company = $("select#company").val();
    var system = $("select#system").val();
    var comfort = $("select#comfort").val();
    var city = $("select#city").val();
    var typing = $("input#typing").val();
    var passion = $("select#passion").val();

    if (!typing){
      alert("Please fill out all the forms!");
      return;
    }

    if (company === '1') {
      $(".suggest").text("C#/.Net");
      $("#route").show();
    } else if (company === '2') {
      $(".suggest").text("Java and C#");
      $("#route").show();
    } else if (company === '3') {
      $(".suggest").text("Java, C#, and PHP");
      $("#route").show();
    } else if (company === '4') {
      $(".suggest").text("Ruby/Rails");
      $("#route").show();
    }
    event.preventDefault();
    console.log(this);
  });
});
