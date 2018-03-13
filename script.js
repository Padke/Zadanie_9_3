var text1 = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var bigDinosaur = dinosaur.toUpperCase();

var replacedDinosaur = text1.replace('Velociraptor', bigDinosaur);

console.log(replacedDinosaur.substr(0, replacedDinosaur.length/2));