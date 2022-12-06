$(function(){
   controller.getPets();
   view.appendActivePets();
  
})


let model={
    pets:{},
    activePets:{},
    currentActivity:'',
    activities:[
        {name:'fruits',active:false},{name:'toys',active:false},{name:'other',active:false}
    ],

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
    appendActivePets(){
        let active=localStorage.getItem('activePets');
        activeObj=JSON.parse(active);
        console.log(activeObj);
        if(activeObj){
            for (let i of Object.keys(activeObj)){
                pet=activeObj[i];
                console.log(pet);
                view.appendPet(pet);
                view.updateStatus('Welcome Back!');
    
                
            }

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
        
        let petsKeys=Object.keys(model.pets);
        let select=$('#selectPet select');
        for (let i=0;i<petsKeys.length;i++){
           
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
    this.func=function(){
        console.log('function test');
    }
    this.test4='test';
  
};

Pet.prototype={
    test2:'test2',
    test3:function(){
        return 'test3';
    },
    pat:function(){
        console.log('pet :)');
    },
    test:'test',

}









function createPet(){
    let petName=$('#name').val();
    let petColor=$('#color').val();
    let petShape=$("input[name='shape']:checked").val();

   

   if (petName !=null && petShape !=null && petColor !=null && petName !="" ){
    let pet=new Pet(petName,petColor,petShape);
    console.log(pet);
    model.pets[pet.name]=pet;
    localStorage.setItem('pets',JSON.stringify(model.pets));
   }
    view.updateStatus('pet cannot be null');
   
  
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
    e.preventDefault();
   
  
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

$(document).on('click','.pet',(e)=>{
   let pet=model.pets[e.target.id];
    console.log(pet);
})

let bob= new Pet('bob','blue','circle');
console.log(bob);