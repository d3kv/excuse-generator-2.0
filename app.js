window.onload = function(){
function ExcuseGenerator() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let WhoPicker = Math.floor(Math.random()*who.length);
    let ActionPicker = Math.floor(Math.random()*action.length);
    let WhatPicker = Math.floor(Math.random()*what.length);
    let Whenpicker = Math.floor(Math.random()*when.length);

return who[WhoPicker] + " " + action[ActionPicker]+ " " + what[WhatPicker] + " "+ when[Whenpicker];
}

document.getElementById("Excusa").innerHTML = ExcuseGenerator();

}
