
document.getElementById('footerForm').addEventListener('submit', (event) => {
    event.preventDefault();
   
const btn = document.getElementById('Submit');
const mailcheck = document.getElementById('Emails');
const input = document.getElementsByTagName('input');
const message = document.getElementById('textarea');
const Name = document.getElementById('Name');
const validfarm = /^[a-zA-Z0-9._%+-]+@(gmail)\.com$/;
  /* || sending message to the costumer */
  btn.value = 'Sending...';
   
     /* || checking if form validation  */
  
     if (!validfarm.test(mailcheck.value) ||message.value === ''|| Name.value === '') {
      if (Name.value === '') {
         Name.style.border = '1px solid red';
      }
       else {
           Name.style.border = 'none';
       }
      if (message.value === '') {
         message.style.border = '1px solid red';
      }
       else {
           message.style.border = 'none';
       }
      if (!validfarm.test(mailcheck.value)) {
         mailcheck.style.border = '1px solid red';
      }
       else {
           mailcheck.style.border = 'none';
       }
   
      
    }
    else{
   
      const serviceID = 'service_b2bxzmq';
      const templateID = 'template_uo5r91c';
      emailjs.sendForm(serviceID, templateID ,footerForm)
       .then(() => {
         btn.value = 'submit';
         const body = document.querySelector('body');
         const successMessage = document.createElement('div');
         successMessage.textContent = 'Message sent successfully!';
         successMessage.style.position = 'fixed';
         successMessage.style.top = '50%';
         successMessage.style.left = '50%';
         successMessage.style.transform = 'translate(-50%, -50%)';
         successMessage.style.backgroundColor = '#4CAF50';
         successMessage.style.color = 'white';
         successMessage.style.padding = '20px';
         successMessage.style.borderRadius = '5px';
         successMessage.style.zIndex = '1000';
         body.appendChild(successMessage);
         setTimeout(() => {
           body.removeChild(successMessage);
         }, 3000);
         footerForm.reset();
       }, (err) => {
         btn.value = 'Resend';
         alert(JSON.stringify(err));
       });
   }

 });

