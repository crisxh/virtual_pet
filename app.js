$(function(){
   controller.getPets();
  
})


let model={
    pets:{},
    activePets:{},
    currentActivity:'',
    activities:[
        {name:'fruits',active:false},{name:'toys',active:false},{name:'other',active:false}
    ]
}
let view={
    updateStatus(msg){
        $('#statusBox').html(msg);
        setTimeout(this.statusClear,1500);
        },
    appendPet(pet){
        const petContainer=document.getElementById('petContainer');

       let petDiv= $('<div>',{class:'pet',id:pet.name});
       petDiv.css('background-color',pet.color).html(pet.name).addClass(pet.shape);
       
       if(!$.contains(document.getElementById('petContainer'), document.getElementById(pet.name))){
        view.updateStatus(`${pet.name} says: "Hi!"`);
        $('#petContainer').append(petDiv);

        model.activePets[pet.name]=pet;
        localStorage.setItem('activePets', JSON.stringify(model.activePets));
        console.log(localStorage.activePets);
       }
    },
    statusClear(){
       $('#statusBox').html('');
    },
    putAwayPet(){
        let pet=$('#selectPet select').val();
        if($.contains(document.getElementById('petContainer'), document.getElementById(pet))){
            view.updateStatus(`${pet} says: "bye bye"`);
            $(`#${pet}`).remove();
            console.log(model.activePets);
            delete model.activePets[pet];
            localStorage.setItem('activePets',JSON.stringify(model.activePets));
            console.log(model.activePets);
            console.log(localStorage.activePets);
            
        
           }
           

    },
    toggleActivityBox:function(e){
      
      

        
        
    
        }
    }


let controller={
    getPets(){
        petTemp=JSON.parse(localStorage.getItem('pets'));
        if(petTemp !=null){
            model.pets=petTemp;
        }
        console.log(model.pets);
        let petsKeys=Object.keys(model.pets);
        let select=$('#selectPet select');
        for (let i=0;i<petsKeys.length;i++){
           console.log(petsKeys[i]);
            let option=$(`<option></option`).html(petsKeys[i]);
            select.append(option);
        }

    }
    
}

function Pet(name,color,shape){
    this.shape=shape;
    this.name=name;
    this.color=color;
    this.happy='50';
    this.maxHappy='100';
};





function createPet(){
    let petName=$('#name').val();
    let petColor=$('#color').val();
    let petShape=$("input[name='shape']:checked").val();
    let pet=new Pet(petName,petColor,petShape);
   if (pet.name !=null && pet.shape !=null && pet.color !=null && pet.name !="" )
    model.pets[pet.name]=pet;
    localStorage.setItem('pets',JSON.stringify(model.pets));
}

function toggleCreatePet(){
    $('#createPetWindow').fadeOut();
}



function getPet(){
    let pet=$('#selectPet select').val();
    console.log(pet);
view.appendPet(model.pets[pet]);

}

$('#createPetBtn').click((e)=>{
  
    createPet();
})

$('#getPet').click(()=>{
getPet();
})

$('#close').click(()=>{
    toggleCreatePet();
})

$('#putAwayPet').click(()=>{
    view.putAwayPet();
    
})

$('#createPet').click((e)=>{
   
    $('#createPetWindow').fadeIn();
})

$('.activityBtn').click((e)=>{


view.toggleActivityBox(e);
});