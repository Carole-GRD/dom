// Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>


// If the background is dark the text should be white, if the background is light the text should be black


// Find a way so that everytime you load the page the order of the elements changes!


let learners = [
    'Alexandre Vandewiele', 
    'Antoine Lansman',
    'Bastien Venturi',
    'Carole Gérard',
    'Dorian Vanden Eynde',
    'Elisabeth Leyder',
    'Elodie Ali',
    'Justin Michel',
    'Justine Frigo',
    'Justine Leleu',
    'Kimi Lefort',
    'Layla',
    'Lidwine Careme',
    'Lucas Beauloi',
    'Marie Tara',
    'Mathias Barbier',
    'okly2023',
    'Pierre Marien',
    'Robin Piot',
    'Rosalie Boulard',
    'Stephane Comblez',
    'Tim Desmet',
    'Toms',
    'Valentin Lefort',
    'Vens Alexandre',
    'Virginie Dourson'
];

let copy = [...learners];
let randLearner = '';


// Créer une section 
let section = document.createElement('section');


for (let learner of learners) {
    // Créer un paragraphe
    let newParag = document.createElement('p');

    // Créer un nouveau nœud texte indépendant
    // let newText = document.createTextNode(learner);
    let newText = document.createTextNode(randomLearners(copy));
    
    // Ajouter le nom de l'apprenant au paragraphe
    newParag.appendChild(newText);

    // Ajouter le paragraphe à la section
    section.appendChild(newParag);

    // Créer une couleur aléatoire (avec la fonction qui génère un background et une color)
    let randCol = randomColor();

    // Ajouter une couleur aléatoire au paragraphe
    newParag.style.backgroundColor = randCol.randomBackgroundColor;

    // Ajouter la couleur du texte en fonction de la couleur du backgroungColor
    newParag.style.color = randCol.randomColorText;
}

// Récupérer la balise article
let article = document.querySelector('article');

// Ajouter la section à l'article
article.appendChild(section);



// +++++++++++++++++++++++++++   FUNCTIONS    +++++++++++++++++++++++++++

/**
 * Generates a random RGB color for background and returns its text color (black or white) for readability.
 * @returns {Object} An object containing the random background color and text color.
 */
function randomColor() {
    // Generate random values for red, green, and blue components
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    // Calculate the HSP (Highly Sensitive Poo) equation
    let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Determine the text color (black or white) based on HSP value
    let randomColorText = '';
    if (hsp > 127.5) {
        randomColorText = 'rgb(0, 0, 0)';
    } 
    else {
        randomColorText = 'rgb(255, 255, 255)';
    }
    
    // Return an object with the random background color and text color
    return {
            randomBackgroundColor : `rgb(${r}, ${g}, ${b})`,
            randomColorText
        }
}




/**
 * Randomly selects and returns a learner from the provided array.
 * @param {Array} tab - An array of learners to choose from.
 * @returns {string} A randomly selected learner's name from the input array.
 */
function randomLearners(tab) {
    
    let index = Math.round(Math.random() * (tab.length - 1));
    randLearner = tab[index];
    tab.splice(index, 1);

    return randLearner;
}


