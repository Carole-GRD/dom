
// There are some predefined Javascript objects in your browser. The DOM is one of them. If you open a console and type in document. you'll see a list of accessors to the DOM tree.

console.log(document);

// -----------------------------------------------------------------------

// Display the document title in the console

console.log('head => title : ', document.title);

// -----------------------------------------------------------------------

// Change the document title to Modifying the DOM

document.title = "Modifying the DOM";
console.log('head => title : ', document.title);

// -----------------------------------------------------------------------

// Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

document.body.style.backgroundColor = "#FF69B4";

let n1 = Math.round(Math.random() * 255);
let n2 = Math.round(Math.random() * 255);
let n3 = Math.round(Math.random() * 255);

document.body.style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`;

// -----------------------------------------------------------------------

// Using the children method and a for ... of  loop, display every children elements of the second child element of your document (display all children elements of the <body>)

console.log('body => children : ', document.body.children);

for (let child of document.body.children) {
    console.log('child : ', child);
}