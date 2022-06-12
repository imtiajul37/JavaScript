const calcTemp = () => {
    const numberTemp = document.querySelector('#number').value;
    // console.log(numberTemp);
    const tempValue = document.querySelector('#temp');
    const valueTemp = temp.options[tempValue.selectedIndex].value;
    
    let celToFah = (cel) => {
        let Fahrenheite = ((numberTemp * 9 / 5) +32).toFixed(2);;
        return Fahrenheite;
    }
    let fahToCel = (fah) => {
        let  Celcius = ((fah - 32) * 5/9 ).toFixed(2);;
        return Celcius;
    }

    let result;
    if(valueTemp == 'celcius'){
        result = celToFah(numberTemp);
        document.getElementById('result').innerHTML = `${numberTemp} = ${result} degree Fahrenheite`
    }else{
        result = fahToCel(numberTemp);
        document.querySelector('#result').innerHTML = `${numberTemp} = ${result} degree Celcius`
    }
}