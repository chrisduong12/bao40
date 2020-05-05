let newSVG = document.querySelectorAll('path');

anime({
    targets: newSVG[0],
    translateX: 250,
});

anime({
    targets: newSVG[1],
    translateX: 250,
});














// function setup() {
//     anime({
//         targets: newSVG[0],
//         translateX: 250,
//     });
// }

// function mouseClicked() {

//     for (let index = 0; index < newSVG.length; index++) {
//         let element = newSVG[index];

//         anime({
//             targets: element,
//             translateX: 250,
//             // strokeDashoffset: [offset, 0],
//             duration: anime.random(1000, 3000),
//             delay: anime.random(0, 2000),
//             loop: true,
//             direction: 'alternate',
//             easing: 'easeInOutSine',
//             //autoplay: false
//         });

//     }

// }