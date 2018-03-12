var female = ['Anna', 'Daria', 'Adrianna', 'Maria', 'Pola'];
var male = ['Bartosz', 'Cezary', 'Leon', 'Nikodem'];
var all = female.concat(male);

console.log(all);


function addingName(name) {
    var addedName = all.indexOf(name);
    if(addedName == true) {
       console.log("MAMY TO IMIĘ!!!!");
    }
    else {
       all.push(name);
       console.log(all);
    }
}
console.log(addingName(prompt('Wprowadź imię: ')));