$(function(){
    model.pets=retrievePets();
})

let body=$('body');
petContainer=$('<div>').attr('id','petContainer').appendTo($('body'));



function Pet(name,shape,color){
    this.shape=shape;
    this.name=name;
    this.color=color;
}

Pet.prototype={
    hunger:10,
    happy:80,
    clean:100,
    eat:()=>{
        $('.mouth').droppable({
            drop:function(event,ui){
                var mouth=event.target;
                event.stopPropagation();
                ui.draggable.css('visibility','hidden');
                view.updateStatus('yummy!');
                $(mouth).addClass('eating');
                setTimeout(function(){
                    $(mouth).removeClass('eating');
                   
    
                },500)
           
                
            }
        });

    },
    pat:function(){
        console.log('yay pets :)');
        model.updatePetStats('happy',3)
        console.log(this.happy);
    },


}
model={
    pets:[],
    updatePetStats:(stat,value)=>{
        console.log(this)
        
    },
    count:5
   

}

view = {
    updateStatus:function(msg){
        statusBox.html(msg);
        },
   outputPetStats(){
   },
   appendPet(pet){

   },

},

  
    


controller={


}

binny=new Pet('binny','circle');
// alki=new Pet('alki','square');
// lala=new Pet('lala','circle','pink');
// oinky=new Pet('oinky','square','orange');




function createPet(pet){
    
    petBox=$('<div>').addClass('petBox').appendTo(petContainer);
    petBody=$('<div>').attr('id',pet.name).addClass([pet.shape,'pet','petBody']).html(pet.name).css('backgroundColor',pet.color).appendTo(petBox);
    petStats=$('<div>').addClass('petStats').html('stats').appendTo(petBox);
    petStats.append($('<li>')).html(`hunger. ${this.hunger}`);
    
    
    petMouth=$('<div>').addClass('mouth');
    petEye=$('<div>').addClass('eye');
    petEye2=$('<div>').addClass('eye');
    
    petBody.append([petEye,petMouth,petEye2]);
    
    

    
    pet.eat()
    console.log(pet)
    model.pets.push(pet);
    localStorage.setItem('pets',JSON.stringify(model.pets));
    
}

function retrievePets(){
    
  retrievedPets=localStorage.getItem('pets');
  retrievedPets=JSON.parse(retrievedPets);
  model.pets.push(retrievedPets);
  
  console.log(retrievedPets)
  return retrievedPets;
   
}

petArray=retrievePets();



createPet(binny);
// createPet(alki);
// createPet(lala);
// createPet(oinky);






$('.pet').on('click',function(){
    petTemp=eval(this.id);
        console.log(petTemp);
        console.log(petTemp.name)
        view.updateStatus(petTemp.name);
    })

    fruitBox=$('<div>',{id:'fruitBox'}).appendTo($('body'));
    
    fruits=[{name:'apple',full:5},{name:'orange',full:3},{name:'blueBerry',full:1},{name:'banana',full:5}]
    function createFruit(fruitArr){
        fruitArr.forEach(function(fruit){
            let specificFruitBox=$('<div>',{class:`${fruit.name}Box`})
            fruitBox.append(specificFruitBox);
            for(let i=0;i<=10;i++){
                let specificFruit=$('<div>',{"class":'fruit',}).addClass(fruit.name);
                specificFruitBox.append(specificFruit);

            }

        })

     
    }
    createFruit(fruits)

    // for(let i=0;i<10;i++){
    //     apple=$('<div>').html('apple').addClass('fruit apple').appendTo($('.appleBox'));
        

    // }
    // for(let i=0;i<10;i++){
    //     orange=$('<div>').html('orange').addClass('fruit orange').appendTo($('.orangeBox'));
        

    // }

   


    $( ".fruit" ).draggable();




    

  

  statusBox=$('<div>',{id:'statusBox'});
  body.append(statusBox);
  
  view.updateStatus('testing')


function createNewPetFunc(){
    newPet= new Pet(prompt('name'),prompt('shape'),prompt('color'));
    createPet(newPet);

}
createNewPet=$('<button>',{id:'createNewButton'}).html('create new pet').appendTo(body).click(createNewPetFunc);





