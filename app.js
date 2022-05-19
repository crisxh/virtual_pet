let body=$('body');
petContainer=$('<div>').attr('id','petContainer').appendTo($('body'));

function Pet(name,shape,color){
    this.shape=shape;
    this.name=name;
    this.color=color;
}

Pet.prototype={
    hunger:100,
    happy:80,
    clean:100,
    eat:function(){console.log(this.name+' says: '+ 'yummy!')},
    pat:function(){
        console.log('yay pets :)');
        model.updatePetStats('happy',3)
        console.log(this.happy);
    },


}
model={
    pets:{},
    updatePetStats:function(stat,value){
        this.stat+=value;
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
   outputTimer:function(count){
    counterDiv.html('counter '+count);
},

  
    
}

controller={
    counter:function(){
        view.outputTimer(model.count);
        model.count+=2;
        console.log(model.count)
        

    }

}

binny=new Pet('binny','circle');
alki=new Pet('alki','square');
lala=new Pet('lala','circle','pink');
oinky=new Pet('oinky','square','orange');




function createPet(pet){
    
    petBox=$('<div>').addClass('petBox').appendTo(petContainer);
    petBody=$('<div>').attr('id',pet.name).addClass([pet.shape,'pet','petBody']).html(pet.name).css('backgroundColor',pet.color).appendTo(petBox);
    petStats=$('<div>').addClass('petStats').html('stats').appendTo(petBox);
    
    
    petMouth=$('<div>').addClass('mouth');
    petEye=$('<div>').addClass('eye');
    petEye2=$('<div>').addClass('eye');
    
    petBody.append([petEye,petMouth,petEye2]);
    
    

    model.pets[pet.name]=pet;
    console.log(pet)
}




createPet(binny);
createPet(alki);
createPet(lala);
createPet(oinky);






$('.pet').on('click',function(){
    petTemp=eval(this.id);
        console.log(petTemp);
        console.log(petTemp.name)
        view.updateStatus(petTemp.name);
    })

    fruitBox=$('<div>',{id:'fruitBox'}).appendTo($('body'));

    for(let i=0;i<10;i++){
        apple=$('<div>').html('apple').addClass('fruit apple').appendTo($('#fruitBox'));
        orange=$('<div>').html('orange').addClass('fruit orange').appendTo($('#fruitBox'));

    }


$( function() {
    $( ".fruit" ).draggable();
    $('.mouth').droppable({
        drop:function(event,ui){
            var mouth=event.target;
            event.stopPropagation();
            ui.draggable.css('visibility','hidden');
            console.log('yummy!')
            view.updateStatus('yummy!');
            $(mouth).addClass('eating');
            setTimeout(function(){
                $(mouth).removeClass('eating');
                console.log(this);

            },500)
       
            
        }
    });

  } );

  statusBox=$('<div>',{id:'statusBox'});
  body.append(statusBox);
  
  view.updateStatus('testing')


function createNewPetFunc(){
    newPet= new Pet(prompt('name'),prompt('shape'),prompt('color'));
    createPet(newPet);

}
createNewPet=$('<button>',{id:'createNewButton'}).html('create new pet').appendTo(body).click(createNewPetFunc);

mvcCounterTest=$('<button>',{id:'mvcCounterTest'}).html('mvcCounterTest').appendTo(body).click(controller.counter);
counterDiv=$('<div>',{id:'counter'}).appendTo(body);

localStorage.setItem('pets',JSON.stringify(model.pets));