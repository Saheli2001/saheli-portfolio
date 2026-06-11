
/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

console.log("Portfolio loaded");

/* ==========================================
   TYPING EFFECT
========================================== */

// const typingElement = document.getElementById("typing");

// if (typingElement) {

//     const words = [
//         "AI Engineer.",
//         // "Computer Vision Researcher",
//         // "Medical AI Enthusiast",
//         // "Foundation Model Explorer"
//     ];

//     let wordIndex = 0;
//     let charIndex = 0;
//     let deleting = false;

//     function typeEffect() {

//         const currentWord = words[wordIndex];

//         if (!deleting) {

//             typingElement.textContent =
//                 currentWord.substring(0, charIndex + 1);

//             charIndex++;

//             if (charIndex === currentWord.length) {

//                 deleting = true;

//                 setTimeout(typeEffect, 1500);

//                 return;
//             }

//         } else {

//             typingElement.textContent =
//                 currentWord.substring(0, charIndex - 1);

//             charIndex--;

//             if (charIndex === 0) {

//                 deleting = false;

//                 wordIndex++;

//                 if (wordIndex >= words.length) {
//                     wordIndex = 0;
//                 }
//             }
//         }

//         setTimeout(typeEffect, deleting ? 50 : 100);
//     }

//     typeEffect();
// }

/* ==========================================
   CURSOR GLOW
========================================== */

const cursor = document.querySelector(".cursor-glow");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });
}

/* ==========================================
   FLOATING PARTICLES
========================================== */

const particlesContainer =
    document.getElementById("particles");

if (particlesContainer) {

    for (let i = 0; i < 80; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.bottom =
            "-20px";

        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            (Math.random() * 5) + "s";

        particlesContainer.appendChild(particle);
    }
}

/* ==========================================
   CODE RAIN
========================================== */

// const codeRain =
//     document.getElementById("code-rain");

// if (codeRain) {

//     const snippets = [

//         "import torch",

//         "model.train()",

//         "loss.backward()",

//         "optimizer.step()",

//         "dice += score",

//         "PathDINO()",

//         "UNet()",

//         "YOLOv8()",

//         "torch.cuda",

//         "for epoch in range()",

//         "segmentation",

//         "foundation_model"

//     ];

//     for (let i = 0; i < 40; i++) {

//         const line =
//             document.createElement("div");

//         line.className = "rain-line";

//         line.innerText =
//             snippets[
//                 Math.floor(
//                     Math.random() *
//                     snippets.length
//                 )
//             ];

//         line.style.left =
//             Math.random() * 100 + "vw";

//         line.style.animationDuration =
//             (8 + Math.random() * 12) + "s";

//         line.style.animationDelay =
//             (Math.random() * 5) + "s";

//         codeRain.appendChild(line);
//     }
// }
/* ==========================================
   ANIMATED NEURAL NETWORK
========================================== */

const canvas =
document.getElementById(
    "neural-network"
);

if(canvas){

    const ctx =
    canvas.getContext("2d");

    let width =
    window.innerWidth;

    let height =
    window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const nodes = [];

    const NODE_COUNT = 100;

    class Node{

        constructor(){

            this.x =
            Math.random()*width;

            this.y =
            Math.random()*height;

            this.vx =
            (Math.random()-0.5)*0.4;

            this.vy =
            (Math.random()-0.5)*0.4;
        }

        update(){

            this.x += this.vx;
            this.y += this.vy;

            if(this.x < 0 || this.x > width)
                this.vx *= -1;

            if(this.y < 0 || this.y > height)
                this.vy *= -1;
        }

        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                2,
                0,
                Math.PI*2
            );

            ctx.fillStyle =
            "#ff79c6";

            ctx.fill();
        }
    }

    for(let i=0;i<NODE_COUNT;i++){

        nodes.push(
            new Node()
        );
    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        nodes.forEach(
            node => node.update()
        );

        for(let i=0;i<nodes.length;i++){

            for(
                let j=i+1;
                j<nodes.length;
                j++
            ){

                const dx =
                nodes[i].x -
                nodes[j].x;

                const dy =
                nodes[i].y -
                nodes[j].y;

                const dist =
                Math.sqrt(
                    dx*dx +
                    dy*dy
                );

                if(dist < 150){

                    ctx.beginPath();

                    ctx.moveTo(
                        nodes[i].x,
                        nodes[i].y
                    );

                    ctx.lineTo(
                        nodes[j].x,
                        nodes[j].y
                    );

                    ctx.strokeStyle =
                    `rgba(
                        255,
                        121,
                        198,
                        ${
                            1 - dist/150
                        }
                    )`;

                    ctx.stroke();
                }
            }
        }

        nodes.forEach(
            node => node.draw()
        );

        requestAnimationFrame(
            animate
        );
    }

    animate();

    window.addEventListener(
        "resize",
        () => {

            width =
            window.innerWidth;

            height =
            window.innerHeight;

            canvas.width =
            width;

            canvas.height =
            height;
        }
    );
}

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }
            });

        },

        {
            threshold: 0.15
        }
    );

revealElements.forEach((element) => {

    observer.observe(element);

});

/* ==========================================
   DEBUG
========================================== */

console.log(
    "Reveal elements found:",
    revealElements.length
);