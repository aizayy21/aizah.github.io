   // JavaScript code for hover effect and click event
   const items = document.querySelectorAll('.choose-us-item');
  
   items.forEach(item => {
     item.addEventListener('mouseover', () => {
       item.classList.add('hover');
     });
 
     item.addEventListener('mouseout', () => {
       item.classList.remove('hover');
     });
 
     item.addEventListener('click', () => {
       items.forEach(item => {
         item.classList.remove('active');
       });
       item.classList.add('active');
     });
   });