function submit()
{
	//var cost=document.getElementById("select2").value;
	var cost= $("#select2").val();
//var cost1=document.getElementById("select4").value;
var cost1= $("#select4").val();
if(cost!=null&&cost1!=null){
	var result=sai(cost,cost1);
    document.getElementById("book").innerHTML="Your total bill is: $"+result;
	// window.alert("Have a Nice day");
}
else{
    // window.alert("Have a Nice day");
}
}
function sai(a,b){
    if(!isNaN(a) && !isNaN(b))
		return a*b;
	else
		throw Error("only numbers are allowed");
}



    function validation()
      {
      
         if( document.forms["valid"]["Firstname"].value == "" )
         {
            window.alert( "Please provide your first name!" );
            document.validation.firstname.focus() ;
            return false;
         }
         
         if( document.forms["valid"]["Lastname"].value == "" )
         {
            window.alert( "Please provide your lastname!" );
            document.validation.lastname.focus() ;
            return false;
         }

         if( document.forms["valid"]["Gender"].value == "" )
         {
            window.alert( "Please provide your gender!" );
            document.validation.gender.focus() ;
            return false;
         }

         return (true);
     }

 function App()
 {
 	validation();
 	submit();
 }
		 
