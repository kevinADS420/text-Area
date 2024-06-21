const TextArea = document.getElementById ('text-Area');
const NumberWords = document.getElementById ('number-words');
const listText = document.getElementById ('text-List')
const upper = document.getElementById ('button-upper')
const lower = document.getElementById ('button-lower')
const paragraphe = document.getElementById ('parrafo')

const LimitText = 255;

TextArea.addEventListener('keydown', handleKeyDown);

// hace que el TextArea tenga las letras mayusculas
upper.addEventListener ('click', () => {
    TextArea.value = TextArea.value.toUpperCase()
});

// hace que el TextArea tenga las letras minusculas
lower.addEventListener ('click', () => {
    TextArea.value = TextArea.value.toLowerCase()
});

// agrega una tarea a la lista
listText.addEventListener ('click', () => {
    const text = TextArea.value
    console.log(text);
    const Textlist = document.createElement('li');
    Textlist.textContent = text;

    paragraphe.appendChild(Textlist);

});


function handleKeyDown(event){
    const numberOfChars = TextArea.value.length;

    if (this.value.length >= 255 && event.key !== "Backspace"){
        event.preventDefault();
    }

    if (numberOfChars >= 205){
        NumberWords.style.color = 'red';
    }else{
        NumberWords.style.color = '#fff'
    }


    NumberWords.textContent=` ${numberOfChars} / ${LimitText}`;
}





