const selector  = document.querySelectorAll('.pr_num');

selector.forEach((pr_num) => {
    pr_num.innerHTML = 0;

    const counter = () =>{
        const  valueD = +pr_num.getAttribute('data-target');
        const fixedData = + pr_num.innerHTML;
        const devided = Math.round(valueD / 100 );
        if (fixedData < valueD){
            pr_num.innerHTML = `${fixedData + devided}`
            setTimeout(counter, 10)
        }
    }
    counter()
})
  