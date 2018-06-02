$(document).ready(function(){
   $( "#form" ).submit(function(e) {
    var chk = FormValidate();
if(!chk){
    return false;
}
 });

});

function FormValidate() {   
validator=$("#form").validate({
    rules: {
        "id_1":{
        required:true,
        minlength: 7
        },              
        "name":{
        required:true,
        minlength: 10
        },
        "b_date":{
        required:true
        }
    },  
    messages: {
        "id_1":{
        required: "ID is required."
        },
        "name":{
        required: "Full name is required."
        },
        "b_date":{
        required:"Date of birth is required."
        }       
    }
    });
    x=validator.form();
    return x;
}


