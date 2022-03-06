const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input =>{
    console.log('input div',input);
});

// mixed typed array and initialized as empty array
let mixedUnion: ( string|boolean|number )[] = []