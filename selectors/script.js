// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.

// let importantElements = document.getElementsByClassName('important');
// let importantElements = document.querySelectorAll('.important');

// console.log('importantElements : ', importantElements);

// for (let element of importantElements) {
//     element.setAttribute('title', 'This is an important item');
// }

// --------------------------------------------------------------------

// Select all the img tags and loop through them. If they have no important class, turn their display property to none

// let allImages = document.querySelectorAll('img');

// console.log('allImages : ', allImages);

// for (let img of allImages) {
//     if (img.className !== 'important') {
//         console.log(img);
//         img.style.display = 'none';
//     }
// }

// --------------------------------------------------------------------

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

// let allParagraphs = document.querySelectorAll('p');

// console.log('allParagraphs : ', allParagraphs);

// for (let parag of allParagraphs) {
//     console.log('parag.textContent : ', parag.textContent);
//     if (parag.className) {
//         console.log('class (parag.className) : ', parag.className);
//     }
// }

// --------------------------------------------------------------------

// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

let allParagraphs = document.querySelectorAll('p');

console.log('allParagraphs : ', allParagraphs);

for (let parag of allParagraphs) {
    if (!parag.className) {
        console.log(parag)
        let n1 = Math.ceil(Math.random() * 255);
        let n2 = Math.ceil(Math.random() * 255);
        let n3 = Math.ceil(Math.random() * 255);
        parag.style.color = `rgb(${n1}, ${n2}, ${n3})`;
    }
}


