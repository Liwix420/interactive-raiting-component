const points = document.querySelectorAll(".point");
console.log(points);

function rate(x){
    for (let i=0; i < points.length; i++){
        if (points[i].classList.contains("active")) {
            points[i].classList.remove("active");
        }
        
    }
    for (let i=0; i <= x; i++){
        setTimeout(() => {
            points[i].classList.add("active");
        }, i * 50);
    }
    return x+1;
}

let finalRating = 0;
const userRating = document.querySelector('.user-rating');

points.forEach((point, index) => {
    point.addEventListener('click', () => {
        finalRating = rate(index);
        userRating.innerHTML = 'You selected '+finalRating+' out of 5';
    });
});

const thankYou = document.querySelector('.thank-you');
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    thankYou.style.display = 'flex';
})