//pure function
function checker(a, b) {
  if (a.name === b.name) {
    if (a.size === b.size) {
      if (a.type === b.type) {
        if (a.lastModified === b.lastModified) {
          return b;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//var upload = [5, 1, 12, 8, 130, 44];
//var exist = [44, 1, 2, 4, 6, 10, 100];
var upload = [{
  name: "test",
  size: 400,
  type: "png",
  lastModified: "today"
}];
var exist = [{
  name: "test",
  size: 400,
  type: "png",
  lastModified: "today"
}];

let accepted = [];
let declined = [];

for (t = 0; t < upload.length; t++) {
  //let dupe = exist.find(file => file === upload[t]);
  let duplicate = exist.find(file => checker(file, upload[t]));
  console.log('file ', duplicate);
    if (duplicate !== undefined) {
      declined.push(upload[t]);
      console.log('a dupe file!', upload[t].name);
    } else {
      accepted.push(upload[t]);
    }
}

let nExist = exist.concat(accepted);
var obj = {
  accepted: accepted,
  declined: declined,
  concated: nExist
};

console.log("rejected: ", declined);
console.log("accepted: ", accepted);
console.log("start: ", exist);
console.log("After: ", nExist);
console.log("/n/n/n",obj);
console.log(obj.accepted);
//alert(obj.decline);
