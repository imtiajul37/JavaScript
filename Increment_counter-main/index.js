const counters = document.querySelectorAll('.pr_num');

counters.forEach((pr_num) => {
    pr_num.innerHTML = 0;

    const updateCounter = () => {
    const targetCounter = + pr_num.getAttribute('data-target');
    const startingCount = +pr_num.innerHTML;
    const incr = Math.round(targetCounter / 99);
    if (startingCount < targetCounter){
        pr_num.innerHTML = `${startingCount + incr}`
        setTimeout(updateCounter, 20)
    }
    }
    updateCounter();
})