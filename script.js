const container = document.querySelector('.container');
let i=0;
const imgarr = ['1st.jpg','2nd.jpg','3rd.jpg','4th.jpg','5th.jpg'];
document.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{
        i++;
        if(i>4){
            i=0;
        }
        container.style.backgroundImage = `url(${imgarr[i]})`;
    },1500)
})
