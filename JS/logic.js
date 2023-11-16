var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let year =document.getElementById("year");
let month=document.getElementById("mon");
let date=document.getElementById("date");
let mesg=document.getElementById("msg");
const current=new Date();
    function AGE()
    {
        if(year.value=== "" || month.value===""||date.value===""){

           mesg.innerHTML="enter required feilds";
          
            date.focus();
        }
        
        else if((year.value!== "" || month.value!==""||date.value!=="")){

            if((year.value <0) && (date.value <1 || date.value >31) && (month.value <1 || month.value >11))  
                {
                      mesg.innerHTML="Enter valid date "+"<br>"+"Enter valid month "+"<br>"+"Enter valid year"; 
                      mesg.style.color="red";   
                }
                else if((date.value <1 || date.value >31) && (month.value <1 || month.value >11))
                {
                    mesg.innerHTML="Enter valid Date and Month";
                   
                }
                else if((date.value <1 || date.value >31) && (year.value <0))
                {
                       mesg.innerHTML="Enter valid Date and Year";
                }
               
              
                else if((month.value <1 || month.value >11) && (year.value <0))
                    {

                        mesg.innerHTML="Enter Valid Month and Year";
                    }
          
                  
            else if((month.value <1 || month.value >11))
                {
                    mesg.innerHTML="valid month"
                }

                else if((year.value <0))
                {
                    mesg.innerHTML="year positive"
                }
                else if((date.value <1 || date.value >31))
                {
                    mesg.innerHTML="Enter Valid Date"
                }
             

                else{

                    const mydate=new Date(parseInt(year.value),(parseInt(month.value)-1),parseInt(date.value));


                    setTimeout(()=>{
                       
                       
                        mesg.innerHTML="Born day: "+(days[mydate.getDay()])+"<br>"+"Your age:  "+((current.getFullYear())-year.value)
       +"<br>"+"Full details: "+(days[mydate.getDay()])+" "+date.value+" "+(months[mydate.getMonth()])+" "+year.value+"<br>"+
       "details: "+ ((current.getFullYear())-year.value)+" Years "+((current.getMonth()+1)-month.value)+" Months "+((current.getDate())-date.value)+" days "+"<br>";
       },1000);}
}
    }
