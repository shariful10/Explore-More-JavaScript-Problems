const country = 'Bangladesh';
const age = 52;
const isIndipendent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndipendent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

/*****************************/

console.log(friends.includes(17));

if (friends.indexOf(210) !== -1){
    console.log('is here');
} else{
    console.log('not here');
}

/****************************************
Concat
****************************************/

const newFriendsAge = [12, 18, 19, 22];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);