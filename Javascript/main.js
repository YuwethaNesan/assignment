$(document).ready(function(){
  var name1={email:"kishore1@gmail.com",password:"YoonaKishore1"};
  var name2={email:"kishore2@gmail.com",password:"YoonaKishore2"};
  var name3={email:"kishore3@gmail.com",password:"YoonaKishore3"};
  var name4={email:"kishore4@gmail.com",password:"YoonaKishore4"};
  var name5={email:"kishore5@gmail.com",password:"YoonaKishore5"};
  var totalUser=[name1,name2,name3,name4,name5];
  $("#btnsubmit").click(function(){
    var logInState=0;
    var email=$("#email").val();
    var password=$("#password").val();
    for(var i=0; i<5; i++){
      if(totalUser[i]['email']==email){
        logInState=1;
        alert();
      }
    }
    if(logInState===1){
      alert("Successful");
    }
   else{
    alert("Unsuccessful")
  }
});
});
