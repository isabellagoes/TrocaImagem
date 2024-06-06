document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('trocaImagem');
    let image = document.querySelector('img');
    let imageIndex = 0;
    let images =  [
        'img/pinkiepie1.png',
        'img/princesajujuba2.png',
        'img/uniqua3.png',
    ];

    button.addEventListener('click', function() {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length;
    });
});