

var upload = [5, 1, 12, 8, 130, 44];
var exist = [44, 1, 2, 4, 6, 10, 100];

let accept = [];
let decline = [];

for (t = 0; t < upload.length; t++) {
    //console.log("loop ",t,upload[t]) 
    let dupe = exist.find(file => file === upload[t])
    if (dupe !== undefined) {
        decline.push(upload[t]);
        console.log('a dupe file!', upload[t])
    } else {
        accept.push(upload[t]);
    }
    //console.log(exist[t],'compared with',upload[t],' result ',dupe);
}

let nExist = exist.concat(accept);
var obj = {
    accepted: accept,
    decline: decline,
    concated: nExist,
};

console.log(obj)

//var found = upload.includes();
//console.log(found);



console.log("rejected: ", decline);
console.log("accepted: ", accept);
console.log("start: ", exist);
console.log("After: ", nExist);
// expected output: 12
console.log(obj.accepted)
alert(obj.decline)

