const urlParams = new URLSearchParams(window.location.search);


const alertParam = urlParams.get("alert");
if (alertParam != null){
        alert(alertParam)
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(`[${entry}]: ${entry}`);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

