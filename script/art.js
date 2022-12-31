
/** Generates a random hex value between `00` and `ff` */
const randomHex = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

/** Uses `randomHex` to generate a random color string */
const randomColor = () => `#${[...Array(3)].map(randomHex).join("")}`;



// This isn't in a function because idk how to run this otherwise
var canvas = document.getElementById('art-canvas');
var context = canvas.getContext('2d');

fillBackgroundColor(canvas, context);

// Random number of shapes
var num = Math.floor(Math.random() * 51);

while (num-- > 0) {
    drawCircle(canvas, context);
    drawRect(canvas, context);
    drawTriangle(canvas, context);
}
  
function newGradient (context) {
    // Create randomly angled gradient
    var gradient = context.createLinearGradient(
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
    );

    // Set two colours
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(1, randomColor());

    return gradient;
};

// Fill the background of the canvas
function fillBackgroundColor(canvas, context) {
    context.fillStyle = newGradient(context);
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function degreesToRadians(degrees) {
return (degrees * Math.PI) / 180;
}

// Draws a circle 
function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);
    
    context.fillStyle = newGradient(context);
    context.fill();
}

// Draws a rectangle at a random location
function drawRect(canvas, context) {
    context.fillStyle = newGradient(context);
    context.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, Math.random() * 100);
}

// Draws a triangle at a random location
function drawTriangle(canvas, context) {
    context.fillStyle = newGradient(context);

    context.beginPath();
    context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    context.fill();

}












// // i - number of iterations
// var i

// // x,y - screen coordinates of the point currently being iterated. (0,0) is in the 
// // upper left corner; (200,200) in the bottom right.
// var x,y,xt;

// // cx,cy - coordinates of the point currently being iterated, on the complex plane - corresponding 
// // to x and y. (-2,-2) is in the bottom left corner; (2,2) in the upper right.
// var cx,cy;


// var color;

// var canvas = document.getElementById('art-canvas');
// var context = canvas.getContext('2d');

// // The two main loops - we divide our region into 200 rows and 200 columns and work on each point.
// for(x=0;x<200;x++)
// {
//     for(y=0;y<200;y++)
//     {
//         // Convert screen coordinates into a complex number.
//         i=0;
//         cx=-30+x/50;
//         cy=-30+y/50;


//         // z0=0
//         zx=0;
//         zy=0;

//         do
//         {
//             // Iterate the formula...
//             xt=zx*zy;
//             zx=zx*zx-zy*zy+cx;
//             zy=2*xt+cy;
//             i++;
//         }

//         // ...until you reach 255 iterations or the absolute value is greater than 4.
//         while(i<255&&(zx*zx+zy*zy)<4);

//         // Convert the number of iterations into a hexadecimal number.
//         color=i.toString(16);

//         // Draw a 4x4 square at the current screen coordinates.
//         context.beginPath();
//         context.rect(x*4, y*4, 4, 4);

//         // Use the number of iterations in hex format as the Red, Green and Blue component of the color of the square.
//         context.fillStyle ='#'+color+color+color;

//         context.fill();
//     }
// }



