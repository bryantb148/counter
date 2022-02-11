// set inital count
let count = 0;

// select value and buttons
const value = document.querySelctor("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventlistener("click", function (e){
     const styles=e.currenttarget.classList;      
  if(styles.contains('decrease')){
     count--; 
  }
else if (styles.contains('increasing')){
 count++; 
}
    else{
  count = 0;
    }
     if(count> 0){
         value.style.color = 'green';
     }
 if(count < 0){
    value.style.color = 'red' 
 }      
  if(count=== < 0){
      value.style.color ='#222;'
  }       
    value.textContent = count;
     });
});
    
    
           
