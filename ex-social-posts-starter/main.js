const posts = [{
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
//creo una funzione che stampi i post tramite il template 
//per poi ciclare la funzione per la lunghezza del mio ogetto posts

function printMember(container, post) {
    const postHTML = document.querySelector("#tpl-post").content.cloneNode(true);
    postHTML.querySelector(".post__text").innerHTML = post.content;
    postHTML.querySelector(".post__image img").src = post.media;
    postHTML.querySelector(".post-meta__author").innerHTML = post.author.name;
    postHTML.querySelector(".post-meta__time").innerHTML = post.created;
    postHTML.querySelector(".profile-pic").src = post.author.image;
    postHTML.querySelector("#like-counter-1").innerHTML = post.likes
    postHTML.querySelector(".like-button").id = post.id
    container.append(postHTML);
}


const containerHTML = document.querySelector("#container");
const templateHTML = document.querySelector("#tpl-post").content.cloneNode(true);


for (let i = 0; i < posts.length; i++) {
    printMember(containerHTML, posts[i])
}
// seleziono le classi del bottone like 
const btnLike = document.querySelectorAll(".like-button");
const btnCounter = document.querySelectorAll(".js-likes-counter");
//creo un ciclo determinato per selezionare tutti i bottoni like di opgni post 
//per poi assegnare una funzione all'interno del evento clik
// for (let i = 0; i < btnLike.length; i++) {
//     btnLike[i].addEventListener("clik", function() {
//         btnLike.classList.add("like-button--liked")
//     })
// }
btnLike.addEventListener("click", () => {
    btnLike.classList.add(".like-button--liked");
})