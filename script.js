const iniciaTroca = () => {
    let imagens = [
        'pinkiepie1.png',
        'princesajujuba2.png',
        'uniqua3.png',
    ];

    let ordem = 0;

    const clickTroca = (evento) => {
        evento.preventDefault();
        let imag2 = document.getElementById('gatinho');
        ordem = (ordem + 1) % imagens.length; 
        imag2.src = imagens[ordem]; 
    };

    document.getElementById('troca').addEventListener('click', clickTroca);
};

document.addEventListener('DOMContentLoaded', iniciar);

function trocaImagem() {
    const imageElement = document.getElementById('image');

    if (imageElement.src.includes('pin.webp')) {
        imageElement.src = 'M2.webp';
    } else {
        imageElement.src = 'M1.webp';
    }
}