  const form = document.getElementById("userForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const submitBtn = document.getElementById("submitBtn");
    const message = document.getElementById("message");

  let reset=document.querySelector("#reset");
   reset.addEventListener("click",()=>{
    nameField.innerText="";
    emailField.innerText="";
   })



//  const password=document.querySelector("#password");
//   const p=document.querySelector("p");
//  function passwordCheck(){
//      if(password.value.length<6){
//         p.innerText="password is less";
//      }
//      else{
//         p.innerText="";
//      }
     
//  }  
//  password.addEventListener("input",passwordCheck);


// function validateFields() {
//       if (nameField.value.trim() !== "" && emailField.value.trim() !== "" ) {
//         submitBtn.disabled = false;
//       } else {
//         submitBtn.disabled = true;
//       }
//     }

    // nameField.addEventListener("input", validateFields);
    // emailField.addEventListener("input", validateFields);
  
    

    // form.addEventListener("submit", function(e) {
    //   e.preventDefault(); // prevent real submission

    //   const name = nameField.value.trim();
    //   const email = emailField.value.trim();

    //   if (name === "" || email === "") {
    //     message.innerText = "Please fill in both fields.";
    //     message.className = "error";
    //   } else {
    //     message.innerText = "Thank you!";
    //     message.className = "success";
    //     form.reset(); // optional: clear fields
    //     submitBtn.disabled = true; // disable again until retyped
    //   }
    // });
  



    
