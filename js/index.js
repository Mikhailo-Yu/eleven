const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    let result = '';
    for (i = 0; i <= length; i++) {
       result = result + characters.charAt(Math.floor(Math.random() * 37));       
    }
    return result;
}

const key = generateKey(10, characters);
console.log(key);