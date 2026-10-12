
let filmes = [
    {
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        nota: 8.7,
        poster: "imagens/D_NQ_NP_729355-MLB79204005167_092024-O.webp"
    },
    {
        titulo: "Homem-Aranha: Sem Volta para Casa",
        ano: 2021,
        genero: "Ação",
        nota: 8.2,
        poster: "imagens/107727g.jpg"
    },
    {
        titulo: "As Branquelas",
        ano: 2004,
        genero: "Comédia",
        nota: 6.9,
        poster: "imagens/Branquelas.webp"
    },
    {
        titulo: "Clube da Luta",
        ano: 1999,
        genero: "Drama",
        nota: 8.8,
        poster: "imagens/como-pode-um-dos-melhores-filmes-já-feitos-ter-um-poster-v0-dwq4pa5f767b1.webp"
    },
    {
        titulo: "Vingadores: Ultimato",
        ano: 2019,
        genero: "Ação",
        nota: 8.4,
        poster: "imagens/ultimato.jpg"
    },
    {
        titulo: "Como Treinar o Seu Dragão",
        ano: 2010,
        genero: "Aventura",
        nota: 8.1,
        poster: "imagens/Comotreinarseudragao.jpg"
    },
    {
        titulo: "Invocação do Mal",
        ano: 2013,
        genero: "Terror",
        nota: 7.5,
        poster: "imagens/mal.jpg"
    },
    {
        titulo: "De Volta para o Futuro",
        ano: 1985,
        genero: "Ficção científica",
        nota: 8.5,
        poster: "imagens/futuro.jpg"
    }
];

let favoritos = [];


function mostrarFilmes(lista) {
    let catalogo = document.getElementById("lista-filmes");
    let mensagem = document.getElementById("mensagem");

    catalogo.innerHTML = "";

    if (lista.length === 0) {
        mensagem.textContent = "Nenhum filme encontrado";
    } else {
        mensagem.textContent = "";
    }

    for (let filme of lista) {
        let recomendado = filme.nota >= 8
            ? "⭐ Recomendado"
            : "";

        let card = document.createElement("div");
        card.className = "card-filme";

        card.innerHTML = `
            <img src="${filme.poster}" alt="${filme.titulo}" width="150">
            <h3>${filme.titulo}</h3>
            <p>Ano: ${filme.ano}</p>
            <p>Gênero: ${filme.genero}</p>
            <p>Nota: ${filme.nota}</p>
            <p>${recomendado}</p>
            <button class="btn-favoritar">♥ Favoritar</button>
        `;

        let botao = card.querySelector(".btn-favoritar");

        botao.addEventListener("click", function () {
            favoritar(filme.titulo);
        });

        catalogo.appendChild(card);
    }

    document.getElementById("contador").textContent = lista.length;
}

function favoritar(titulo) {
    if (!favoritos.includes(titulo)) {
        favoritos.push(titulo);
    }

    mostrarFavoritos();
}

function mostrarFavoritos() {
    let lista = document.getElementById("lista-favoritos");

    lista.innerHTML = "";

    for (let titulo of favoritos) {
        lista.innerHTML += `<li>${titulo}</li>`;
    }

    document.getElementById("contador-favoritos").textContent = favoritos.length;
}

document.getElementById("btn-limpar-favoritos").addEventListener("click", function () {
    favoritos = [];
    mostrarFavoritos();
});

mostrarFavoritos();


function buscarFilmes() {
    let texto = document.getElementById("busca").value.toLowerCase();
    let genero = document.getElementById("filtro-genero").value;
    let resultado = [];

    for (let filme of filmes) {
        let tituloCorresponde = filme.titulo.toLowerCase().includes(texto);
        let generoCorresponde = genero === "Todos" || filme.genero === genero;

        if (tituloCorresponde && generoCorresponde) {
            resultado.push(filme);
        }
    }

    mostrarFilmes(resultado);
}

document.getElementById("busca").addEventListener("input", buscarFilmes);

document.getElementById("filtro-genero").addEventListener("change", buscarFilmes);

mostrarFilmes(filmes);

document.getElementById("btn-inverter").addEventListener("click", function () {
    filmes.reverse();
    buscarFilmes();
});

let tituloDestaque = document.getElementById("titulo-destaque");

tituloDestaque.addEventListener("mouseenter", function () {
    tituloDestaque.style.color = "red";
    tituloDestaque.style.backgroundColor = "#eeeeee";
});

tituloDestaque.addEventListener("mouseout", function () {
    tituloDestaque.style.color = "";
    tituloDestaque.style.backgroundColor = "";
});