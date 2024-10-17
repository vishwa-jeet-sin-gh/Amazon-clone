const img = document.querySelectorAll('.slider ul img');
const prev_btn = document.querySelector('.control_next');
const next_btn = document.querySelector('.control_prev');

let n = 3;

function ChangeSlide(){
  for (let index = 0; index < img.length; index++) {
    img[index].style.display = 'none';
    
  }
  img[n].style.display = 'block';
}
ChangeSlide();
prev_btn.addEventListener("click", (e)=> {
  if(n > 0){
    n--;
  }else{
    n = img.length -1;
  }
  ChangeSlide();
})
next_btn.addEventListener("click", (e)=> {
  if(n > 0){
    n--;
  }else{
    n = img.length -1;
  }
  ChangeSlide();
})