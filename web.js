const containerEl = document.querySelector(".container");

const profession = ["am a good Student", "am a good Web Developer", "am a good Enginer", "am a good Freelancer"];

let professionIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I ${profession[professionIndex].slice(0,characterIndex)}</h1>`; 

    if(characterIndex === profession[professionIndex].length){
        professionIndex++
        characterIndex = 0;
    }

    if(professionIndex === profession.length){
        professionIndex = 0;
    }
    setTimeout(updateText, 400);
}

