var error;
function valid(form)
 {
   var str=document.forms["form"]["fullName"].value;
   if(str== "" || str.includes(" "))
   {
       error=document.createElement("h3");
       error.innerText="error:please refresh the page  and replace the name input without spaces";
       error.style.position = "absolute";
       error.style.top="600px";
       error.style.left= "580px";
       form.appendChild(error);
       return false; 
   }
   
    if(str.includes("d")&&str.includes("a"))
   {
       return true;

   }
   else
   {
       error=document.createElement("h3");
       error.innerText="error:please refresh the page and replace  the name input that contain the letters :a&d ";
       error.style.position="absolute";
       error.style.top="600px";
       error.style.left="520px";
       form.appendChild(error); 
    return false;
   }
}