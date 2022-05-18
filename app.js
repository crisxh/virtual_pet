let body=$('body');

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
        this.happy+=1;
    },

}

view = {
    updateStatus:function(msg){
        statusBox.html(msg);
         
        
    }
}

binny=new Pet('binny','circle');
alki=new Pet('alki','square');
lala=new Pet('lala','circle','pink');
oinky=new Pet('oinky','square','orange');


// console.log(binny,alki);

// binny.eat()
// alki.eat()


// binnyBox=$('<div>').attr('id',binny.name).html(binny.hunger).appendTo($('body'));
petContainer=$('<div>').attr('id','petContainer').appendTo($('body'));


function createPet(pet){
    
    petBox=$('<div>').addClass('petBox').appendTo(petContainer);
    petBody=$('<div>').attr('id',pet.name).addClass([pet.shape,'pet','petBody']).html(pet.name).css('backgroundColor',pet.color).appendTo(petBox);
    petStats=$('<div>').addClass('petStats').html(`name: ${pet.name} <br> hunger: ${pet.hunger} <br> happy: ${pet.happy} <br> higiene: ${pet.clean} `).appendTo(petBox);
    
    
    petMouth=$('<div>').addClass('mouth');
    petEye=$('<div>').addClass('eye');
    petEye2=$('<div>').addClass('eye');
    
    petBody.append([petEye,petMouth,petEye2]);
    
    

    
    console.log(pet)
}

$('#oinky').click(()=>{
    oinky.pat();
})


createPet(binny);
createPet(alki);
createPet(lala);
createPet(oinky);

// function patPet(pet){
//     $('.pet').click(function(){console.log(pet.pat())})

// }


$('eye').animate({

});


$('.pet').click(function(){
    petTemp=eval(this.id);
        console.log(petTemp);
        console.log(petTemp.name)
    })

    fruitBox=$('<div>',{id:'fruitBox'}).appendTo($('body'));

    for(let i=0;i<10;i++){
        apple=$('<div>').html('apple').addClass('apple').appendTo($('#fruitBox'));

    }


$( function() {
    $( ".apple" ).draggable();
    $('.mouth').droppable({
        drop:function(event,ui){
            event.stopPropagation();
            ui.draggable.css('visibility','hidden');
            console.log('yummy!')
            view.updateStatus('yummy!')
        }
    });
    // $('.petBody').droppable({
    //     drop:function(event,ui){
    //         event.stopPropagation();
    //         view.updateStatus('i want apple :(')
    //     }
    // })
  } );

  statusBox=$('<div>',{id:'statusBox'});
  body.append(statusBox);
  


view.updateStatus('testing')