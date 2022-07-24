var titlearray =[

   
    "Treasury Management",
    "Tax Compliances",
    "Bussiness Analystics and Insights "
    
]



var dynamic = document.querySelector('.vir1');

for (var i=0 ; i<titlearray.length ; i++){

    var fetch  = document.querySelector('.vir1').innerHTML;
    dynamic.innerHTML = 
    `
    <div class="card" id="plmss" style="width: 18rem; height:10rem";>
  
  <div class="card-body" id="plms">
   <div class="d-flex justify-content-center" id="gg"> <h class="card-title">${titlearray[i]}</h></div>
   
  </div>
</div>
    
    ` +fetch;
}














