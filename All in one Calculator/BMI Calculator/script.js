let form = document.querySelector('form');

form.addEventListener('submit', function(e){
   // to prevent the default behaviour
    e.preventDefault(); 
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');
    results.style.padding = '30px'

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    
    else if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }  
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});