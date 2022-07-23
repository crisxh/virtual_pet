$(function(){
    petTemp=JSON.parse(localStorage.getItem('pets'));
    if(petTemp !=null){
        pets=petTemp;
    }
console.log(pets);
    // if(petTemp !=null){
    //     for(let i=0;i<petTemp.length;i++){
    //         pets.push(petTemp[i]);
    
    //     }
       
    //     console.log(pets);

    // }
  
})

function Pet(name,color,shape){
    this.shape=shape;
    this.name=name;
    this.color=color;
};



let pets={};

function createPet(){
    let pet=new Pet(prompt('name'),prompt('color'),prompt('shape'));
   if (pet.name !=null && pet.shape !=null && pet.color !=null )
    pets[pet.name]=pet;
    localStorage.setItem('pets',JSON.stringify(pets));
}

function getPet(){
    let pet=$('#selectPet select').val();
    console.log(pets[pet]);
}

$('#createPetBtn').click(()=>{
    createPet();
    console.log(localStorage);
})

$('#getPet').click(()=>{
getPet();
})

