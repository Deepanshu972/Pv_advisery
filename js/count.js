let section_counter = document.querySelector('#story');
const counters= document.querySelectorAll('#counter');


//scroll Animation

let CounterObserver = new IntersectionObserver(
    (entries,observer)=>{
 
    let [entry]= entries;
    if(!entry.isIntersecting)return;

    const speed = 700;

counters.forEach((counter,index) => { 
const updateCount =() => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
     
    const inc =target /speed ;

    if(count<target){
        counter.innerText = Math.ceil(count +inc);
        setTimeout(updateCount,1);
    }else{
        count.innerText = target;
    }
}
 
updateCount();
if(counter.parentElement.style.animation){
counter.parentElement.style.animation = "";
}
else {
    counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index/ counters.length +0.5}s`;
}
});

},

{
root:null,
threshold:0.4,

});

CounterObserver.observe(section_counter);