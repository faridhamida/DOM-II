// Your code goes here
//Number 1 Click

document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = "#e62739";
        setTimeout(() => {
            el.style.color = "";
        }, 1000);
    })   
})

//Number 2 DoubleClick

const logo = document.querySelector('.logo-heading');

logo.addEventListener("dblclick", () => {
    logo.style.color = "green"
    
    setTimeout(() => {
        logo.style.color = "";
    }, 1500);
})

//Number 3 mouseenter

const welcome = document.querySelector('content-section,  h2');
welcome.addEventListener('mouseenter', () =>{
    welcome.textContent = "Welcome To The Yellow Bus";
    setTimeout(() => {
        welcome.textContent = "Welcome To Fun Bus";
    }, 1500);
})

//Number 4 Scroll
const scrollPage = document.querySelector('body');
window.addEventListener('scroll', () => {
    scrollPage.style.backgroundColor = "lightblue";
    setTimeout(() => {
        scrollPage.style.backgroundColor = "";
    }, 2000);
})

//Number 5 mouseleave
const boatImage = document.querySelector(".des-img");

boatImage.addEventListener("mouseenter", () => {
    boatImage.style.transform = "scale(1.2)";
    boatImage.style.transition = "all 0.3s"
})
boatImage.addEventListener("mouseleave", () => {
    boatImage.style.transform = "scale(1)";
    boatImage.style.transition = "all 0.3s";
})

// number 6 MouseOver

const busImg = document.querySelector('#first-img');

busImg.addEventListener('mouseover', () => {
    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "all 0.3s"
})

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
    busImg.style.transition = "all 0.3s";
})

//Number 7 Resize

const advenImg = document.querySelector('.adven');

window.addEventListener("resize", () => {
    advenImg.src = "https://images.unsplash.com/photo-1480910353825-384b0e8e7074?ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80";

})

//Number 8 mouseenter

document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "all 0.3s";
        setTimeout(() => {
            el.style.transform = "";
            el.style.transition = "";

        }, 1000);
    })
})

//Number 9 MouseOver

document.querySelectorAll("h4").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "all 0.3s";
        el.style.color = "green";
        setTimeout(() => {
            el.style.transform = "";
            el.style.transition = "";
            el.style.color = "";
        }, 1000);
    })
})

//Number 10 MouseOver

const go = document.querySelector('.go');
go.addEventListener('mouseenter', () => {
    go.textContent = "Let's Go Home";
    go.style.color = "orange";
    setTimeout(() => {
        welcome.textContent = "Let's Go";
        go.style.color = "";
    }, 1500);
})

//PreventDefault

const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
    console.log("stopped the link");
    event.preventDefault();
})

//Propagation 
const stop = document.querySelectorAll(".nav-link");

stop.forEach((ele) => {
    ele.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});
