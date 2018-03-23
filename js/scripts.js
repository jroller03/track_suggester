$(document).ready(function(){
  $("form#info").submit(function(event){
    var gender = $("select#gender").val();
    var company = $("select#company").val();
    var system = $("select#system").val();
    var work_type = $("select#work_type").val();
    var city = $("select#city").val();
    var typing = $("input#typing").val();
    var passion = $("select#passion").val();

    if (!typing){
      alert("Please fill out all the forms!");
      return;
    }
    if (company === 'Microsoft'){
        $(".suggest").text("C#/.Net");
        $("#route").show();
      }else if (company === 'Steam') {
        $(".suggest").text("Java and CSS");
        $("#route").show();
      } else if (company === 'Godaddy.com'){
        $(".suggest").text("Java and CSS");
        $("#route").show();
      } else if (company === 'Groupon'){
        $(".suggest").text("Ruby/Rails");
        $("#route").show();
      }
    event.preventDefault();
  });
});
