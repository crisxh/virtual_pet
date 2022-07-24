$(function(){
    petTemp=JSON.parse(localStorage.getItem('pets'));
    if(petTemp !=null){
        pets=petTemp;
    }
    console.log(pets);
    let petsKeys=Object.keys(pets);
    let select=$('#selectPet select');
    for (let i=0;i<petsKeys.length;i++){
       console.log(petsKeys[i]);
        let option=$(`<option></option`).html(petsKeys[i]);
        select.append(option);
    }
  
})



let view={
    updateStatus:function(msg){
        $('#statusBox').html(msg);
        setTimeout(this.statusClear,1500);
        },
    appendPet(pet){
        const petContainer=document.getElementById('petContainer');

       let petDiv= $('<div>',{class:'pet',id:pet.name});
       petDiv.css('background-color',pet.color).html(pet.name).addClass(pet.shape);
       
       if(!$.contains(document.getElementById('petContainer'), document.getElementById(pet.name))){
        $('#petContainer').append(petDiv);
        view.updateStatus(`${pet.name} says: "Hi!"`)
       }
       
     
    
      

    },
    statusClear(){
       $('#statusBox').html('');
    },
    putAwayPet(){
        let pet=$('#selectPet select').val();
        if($.contains(document.getElementById('petContainer'), document.getElementById(pet))){
            $(`#${pet}`).remove();
            view.updateStatus(`${pet} says: "bye bye"`)
        
           }
           

    }

}

function Pet(name,color,shape){
    this.shape=shape;
    this.name=name;
    this.color=color;
};



let pets={};

function createPet(){
    let petName=$('#name').val();
    let petColor=$('#color').val();
    let petShape=$("input[name='shape']:checked").val();
    let pet=new Pet(petName,petColor,petShape);
   if (pet.name !=null && pet.shape !=null && pet.color !=null && pet.name !="" )
    pets[pet.name]=pet;
    localStorage.setItem('pets',JSON.stringify(pets));
}

function toggleCreatePet(){
    $('#createPetWindow').fadeOut();
}



function getPet(){
    let pet=$('#selectPet select').val();
    console.log(pet);
view.appendPet(pets[pet]);

}

$('#createPetBtn').click(()=>{
    createPet();
    console.log(localStorage);
})

$('#getPet').click(()=>{
getPet();
})

$('#close').click(()=>{
    toggleCreatePet();
})

$('#putAwayPet').click(()=>{
    view.putAwayPet();
    console.log('put')
    
})

$('#createPet').click(()=>{
    $('#createPetWindow').fadeIn();
})