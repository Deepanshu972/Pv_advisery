const data = [
    
    
    {
        title:"Finance Transformation",
      img:"tip1.JPG",
        
    },
    {
        title:"Virtual CFO",
        img:"top2.JPG",
     },
     {
        title:"Analytics",
          img:"tip3.JPG",
     },
     {
        title:"Start-up Solutions",
          img:"tip4.JPG",
     },     
];


data.forEach((element,i) => {
               
    const main = document.querySelector("#whay");
    
    console.log(main);
    
    const card = document.createElement('div');
    card.classList= 'card';
    
    const movieCard =`
    
    <img src= ${data[i].img} class="card-img-top" >
    <div class="card-body">
    <p class="card-text">${data[i].title}</p>
   
    </div>
    `;
    
    card.innerHTML += movieCard;
    
    main.appendChild(card);
});