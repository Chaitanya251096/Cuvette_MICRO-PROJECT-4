let string = "";
let buttons = document.querySelectorAll('.Button');
// let inputVal = document.querySelector('#display').value
let DEL =document.querySelector('#Del')




Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'RESET') {
      string = "";
      if (string = "") {
        document.querySelector('input').value = 0;
      }
      else {
        document.querySelector('input').value = 0;
      }
      

      
    }
   

    
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }  
  })
  
})



function Del(){
  let display = document.querySelector('input');
      display.value = display.value.slice(0,-1);
      if (display.value === "") {
        display.value = "0";
      }

}
