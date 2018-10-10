//pure function
function checker(a, b) {
    //check with what we are dealing
    if (typeof a !== "object" && typeof b !== "object") {
        //for logging
        console.log('not object', a);

        if (a === b) {
            return b;
        } else {
            return false;
        }
    } else {
        //check relevant values for file objects
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
}

var upload = [5, 1, 12, 8, 'a', 130, 44, {
    name: "test",
    size: 400,
    type: "png",
    lastModified: "today"
}];
var exist = [44, 1, {
    name: "test1",
    size: 400,
    type: "png",
    lastModified: "today"
}, 2, 4, 6, 10, 100, 'a', '8'];


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
console.log("return obj: " , obj);
console.log(obj.accepted);
//alert(obj.decline);
