var titlearray =[

    "Finance Function Effectiveness",
    "Standardistion of processes",
    "Stock Audit",
    "Virtual CFO"
    
]

var descriptionarray = [
    "We were engaged to review key finance processes, identify improvement opportunities and assist in implementation to reduce the finance cost by bringing in efficiencies.",
    "We were engaged to review, identify the scope for improvement and standardise finance processes across 8 cities in 5 countries to bring in consistencies.",
    "We performed the Physical verification of Fixed Assets and reconciliation of the fixed assets along with assisting in tagging of fixed assets with QR codes",
    " We implemented forecasting and planning function, working capital management and treasury processes for a medium sized organisation based in Singapore and in India.We were also engaged to lay down a billing structure in line with Double Taxation Avoidance Agreement between India and Singapore.We assisted the client in setting up operations in the Special Economic Zone to benefit from direct and indirect tax exemptions.We created Business Intelligence Dashboards for the management.",
];

var dynamic = document.querySelector('.car1');

for (var i=0 ; i<titlearray.length ; i++){

    var fetch  = document.querySelector('.car1').innerHTML;
    dynamic.innerHTML = 
    `
    <div class="card" id="plm1" style="width: 18rem; height:18rem";>
  
  <div class="card-body">
   <div class="d-flex justify-content-center"> <h class="card-title">${titlearray[i]}</h></div>
   <div class="d-flex justify-content-center"> <p class="card-text">${descriptionarray[i]}</p></div>
    
  </div>
</div>
    
    ` +fetch;
}














