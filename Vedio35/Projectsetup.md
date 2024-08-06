# Project related to DOM


# Prject 1
```javascript
consol.log('Kiran')
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
console.log(button);
button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'green') {
    body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
    body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
    body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
    body.style.backgroundColor = e.target.id;
    }
    
});
});
```

# Project 2
```JavaScript
const form = document.querySelector('form');

        form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
        const weightGuide = document.querySelector('#weight-guide');
        const weightGuideMsg = document.querySelector('#WGT_GUIDE_MSG');

        if (height === '' || height < 0 || isNaN(height)) {
            results.innerHTML = `Please give a valid height ${height}`;
        }
        else if (weight === '' || weight < 0 || isNaN(weight)) {
            results.innerHTML = `Please give a valid weight ${weight}`;
        } 
        else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = `<span>${bmi}</span>`;
            weightGuideMsg.style.color ="yellow";
            weightGuideMsg.style.fontSize ="20px";
            if (bmi < 18.6) {
                weightGuideMsg.innerHTML = weightGuide.children[1].innerText;
                console.log(weightGuide.children[1]);
            }
            else if (bmi == 18.6 || bmi<=24.9){
                weightGuideMsg.innerHTML = weightGuide.children[2].innerText;
                console.log(weightGuide.children[2]);
            }
            else{
                weightGuideMsg.innerHTML = weightGuide.children[3].innerText;
                console.log(weightGuide.children[3]);
            }
            }


        }
        );
```