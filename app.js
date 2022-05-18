function Pet(name,shape,color){
    this.shape=shape;
    this.name=name;
    this.color=color;
}

Pet.prototype={
    hunger:100,
    happy:100,
    clean:100,
    eat:function(){console.log(this.name+' says: '+ 'yummy!')},
    pat:function(){
        console.log('yay pets :)');
        this.happy+=1;
    },

}

binny=new Pet('binny','circle');
alki=new Pet('alki','square');
lala=new Pet('lala','circle','pink');


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
    
    petBody.append([petMouth,petEye,petEye]);
    

    
    console.log(pet)
}

lala.pat();
lala.pat();
lala.pat();
lala.pat();


createPet(binny);
createPet(alki);
createPet(lala);

// function patPet(pet){
//     $('.pet').click(function(){console.log(pet.pat())})

// }


