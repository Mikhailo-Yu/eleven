const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    let result = '';
    for (i = 0; i <= length; i++) {
       characters.charAt(Math.floor(Math.random() * 37));
       result = result + characters.charAt(Math.floor(Math.random() * 37));       
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);