// First requirement

var date = new Date();

console.log(date.toString());
console.log(date.getDate());
console.log(date.getUTCMonth());

let date_format = new RegExp(date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());

console.log("Expresion: " + date_format);

string = "Nací el 23/03/2001 en Zaragoza";

console.log(date_format.exec(string));

// Second requirement

var email = prompt('Introduce una dirección email: ');

var emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

if (emailRegex.test(email)) {
    alert('El mail es valido');
} else {
    alert('El mail no es válido');
}

// Third requirement

function escapeHTML(text) {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}

// Fourth requirement

const re = /(\w+)\s(\w+)/;

const str = 'John Smith';

console.log(str.replace(re, '$2, $1')); // Returns Smith, John

// Fifth requirement

var regex = /(<([^>]+)>)/ig;
body = "<p>test</p>";
result = body.replace(regex, "");

console.log(result);