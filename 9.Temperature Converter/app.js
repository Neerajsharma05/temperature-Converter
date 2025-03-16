const textInput = document.querySelector('#tempinput');
const clstofr = document.querySelector('#clsTofr');
const frtocls = document.querySelector('#frtocls');
const submit = document.querySelector('#Submit');
const result = document.querySelector('#result');


function celsiusToFr(cl){
    let Fr = cl *9/5 +32;
    console.log(Fr);
    return Fr;
}

function Fahrenheittocls(fr){
    let cls = (fr-32) * 5/9;
    console.log(cls);
    return cls
}

submit.addEventListener('click',()=>{
    let value = parseInt(textInput.value);
  
    if(clstofr.checked){
       
        result.textContent = `${ celsiusToFr(value)} °F`;
        
    }else if(frtocls.checked){
        result.textContent = `${Fahrenheittocls(value)} °C`;
    }else{
        result.textContent ='Select a Unit'
    }
})