// import Example from './scripts/example';
import Planet from './scripts/planet.js';
import Question from './scripts/question.js';

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('hello world')

//     const main = document.getElementById('main');
//     new Example(main)
// })

document.addEventListener('DOMContentLoaded', () => {
    console.log('planet loaded')
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;

    const ctx = planet.getContext("2d");
    let mercury = new Planet;
    //mercury.draw(ctx);
    //mercury.make_base(ctx);

    // venus
    let venus = new Planet;
    venus.make_base(ctx);
})
