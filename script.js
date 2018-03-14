var female = ['Anna', 'Daria', 'Adrianna', 'Maria', 'Pola'];
var male = ['Bartosz', 'Cezary', 'Leon', 'Nikodem'];
var all = female.concat(male);

console.log(all);


function addingName(name) {
    if(all.indexOf(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()) !== -1) {
       console.log("MAMY TO IMIĘ!!!!");
    }
    else {
       all.push(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
       console.log(all);
    }
}
console.log(addingName(prompt('Wprowadź imię: ')));