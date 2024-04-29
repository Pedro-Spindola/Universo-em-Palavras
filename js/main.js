// Meu Array que vai simular o meu banco de dados.
let banco = []

const getBanco = () => JSON.parse(localStorage.getItem('boxListLivros')) ?? []
const setBanco = (banco) => localStorage.setItem('boxListLivros', JSON.stringify(banco))



const checkTema = document.getElementById('checkTema');
const root = document.documentElement;


checkTema.addEventListener("change", (event) => {
    if (event.target.checked) {
        // Vai ser meu tema claro.
        root.style.setProperty('--color-principal', '#f0efea');
        root.style.setProperty('--color-secundaria', '#34b4e0');
        root.style.setProperty('--color-luz', '#fcfcfc');
        root.style.setProperty('--color-sombra', '#9b9a99');
        root.style.setProperty('--color-luz-s', '#66c8e9');
        root.style.setProperty('--color-sombra-s', '#011920');
        root.style.setProperty('--color-text', '#000000');
    } else {
        // Vai ser meu tema dark
        root.style.setProperty('--color-principal', '#1f2024');
        root.style.setProperty('--color-secundaria', '#34b4e0');
        root.style.setProperty('--color-luz', '#2a2b2e');
        root.style.setProperty('--color-sombra', '#101011');
        root.style.setProperty('--color-luz-s', '#66c8e9');
        root.style.setProperty('--color-sombra-s', '#011920');
        root.style.setProperty('--color-text', '#F2F2F2');
    }
});

//Manipular os btn de mostrar a descrição do livro, e verificar qual deles foi clicado para mostrar.
const detalhesLivros = document.querySelectorAll('.detalhesLivro'); // Criando um List como todos meus elemento .detalhesLivro

detalhesLivros.forEach(detalhesLivro => {   //Loop para percorrer a lista
    detalhesLivro.addEventListener("click", () => {
        let listLivro = detalhesLivro.closest('.listLivros');           //Vai selecionar qual foi o objeto clidado
        let dadosDoLivro = listLivro.querySelector('.dadosDoLivro');    //Vai pegar a div a ser mostrado do meu obj que foi clicado
        
        // Verifica se os detalhes do livro estão abertos
        let isOpen = dadosDoLivro.classList.contains('on');

        // Fecha todos os detalhes de livros abertos
        document.querySelectorAll('.dadosDoLivro').forEach(dadosDoLivro => {
            dadosDoLivro.classList.remove('on');
        });
        
        // Se não estiverem abertos, abre os detalhes do livro clicado
        if (!isOpen) {
            dadosDoLivro.classList.add('on');
        }
    });
});

// Botão de adicionar um novo livro, onde vai mostrar na tela os campos para preencher.
const adcNewLivro = document.querySelector('.btnAdicionarLivroDiv');

adcNewLivro.addEventListener("click", ()=>{

    let isOpen = adcNewLivro.classList.contains('on');
    let container = document.querySelector('.newLivro');

    if(isOpen){
        adcNewLivro.classList.remove('on');
        container.classList.remove('on');
    } else{
        adcNewLivro.classList.add('on');
        container.classList.add('on');
    }

});

//Manipular os btn de mostrar a a tela de editar os livros.
const editarLivroBox = document.querySelectorAll('.editarLivro');

editarLivroBox.forEach(editarLivroBox => {
    editarLivroBox.addEventListener("click", () =>{
        let listLivro = editarLivroBox.closest('.listLivros');
        let listEdit = listLivro.querySelector('.editarLivroContainer');

        // Verifica se os detalhes do livro estão abertos
        let isOpen = listEdit.classList.contains('on');

        // Fecha todos os detalhes de livros abertos
        document.querySelectorAll('.editarLivroContainer').forEach(listEdit => {
            listEdit.classList.remove('on');
        });

        // Se não estiverem abertos, abre os detalhes do livro clicado
        if (!isOpen) {
            listEdit.classList.add('on');
        }

    });
});

// Manipulação para adicionar um novo livro a minha lista.
const adicionarLivro = document.getElementById('btnAdicionarLivro');
const containerPai = document.getElementById('boxListLivros');

adicionarLivro.addEventListener("click", ()=>{
    // Criar as nossas divs

    const divListLivros = document.createElement("div");
    divListLivros.className = "listLivros";

        const divLivroLine = document.createElement("div");
        divLivroLine.className = "livroLine";

            const divDivImg = document.createElement("div");
            divDivImg.className = "divImg";

                const imgLivro = document.createElement("img");
                imgLivro.id = "lLimgLivro";
                imgLivro.className = "lLimgLivro";
                imgLivro.alt = "";
            
            const divDados = document.createElement("div");
            divDados.className = "dados";

                const inputNomeDoLivro = document.getElementById("inputNomeDoLivro");
                const h2NomeDoLivro = document.createElement("h2");
                h2NomeDoLivro.id = "lLnomeDoLivro";
                h2NomeDoLivro.className = "lLnomeDoLivro";
                h2NomeDoLivro.textContent = inputNomeDoLivro.value;

                const inputGeneroDoLivro = document.getElementById("inputGeneroDoLivro");
                const h2GeneroDoLivro = document.createElement("h2");
                h2GeneroDoLivro.id = "lLgeneroDoLivro";
                h2GeneroDoLivro.className = "lLgeneroDoLivro";
                h2GeneroDoLivro.textContent = inputGeneroDoLivro.value;
                imgLivro.src = caminhoDoMeuLivro(inputGeneroDoLivro.value);

                const inputAutorDoLivro = document.getElementById("inputAutorDoLivro");
                const h2AutorDoLivro = document.createElement("h2");
                h2AutorDoLivro.id = "lLautorDoLivro";
                h2AutorDoLivro.className = "lLautorDoLivro";
                h2AutorDoLivro.textContent = inputAutorDoLivro.value;

                const inputPaginaDoLivro = document.getElementById("inputPaginaDoLivro");
                const h2Paginas = document.createElement("h2");
                h2Paginas.id = "lLpaginas";
                h2Paginas.className = "lLpaginas";
                h2Paginas.textContent = inputPaginaDoLivro.value;
                
                const inputISBNDoLivro = document.getElementById("inputISBNDoLivro");
                const h2ISBN = document.createElement("h2");
                h2ISBN.id = "lLISBN";
                h2ISBN.className = "lLISBN";
                h2ISBN.textContent = inputISBNDoLivro.value;

                const inputNotaDoLivro = document.getElementById("inputNotaDoLivro");
                const h2NotaDoLivro = document.createElement("h2");
                h2NotaDoLivro.id = "lLNotaDoLivro";
                h2NotaDoLivro.className = "lLNotaDoLivro";
                h2NotaDoLivro.textContent = inputNotaDoLivro.value;
            
            const divFerramentas = document.createElement("div");
            divFerramentas.className = "ferramentas";

                const divDivImgF = document.createElement("div");
                divDivImgF.className = "divImg";

                    const imgEstrela = document.createElement("img");
                    imgEstrela.className = "lLimgEstrela";
                    imgEstrela.src = "image/estrela.svg";
                    imgEstrela.alt = "";

                const divDetalhesLivro = document.createElement("div");
                divDetalhesLivro.className = "detalhesLivro divImg";

                    const imgDetalhesLivro = document.createElement("img");
                    imgDetalhesLivro.className = "imageEdit";
                    imgDetalhesLivro.src = "image/setas.svg";
                    imgDetalhesLivro.alt = "";

                    // Agora você precisa adicionar o evento de clique ao novo detalhesLivro
                    divDetalhesLivro.addEventListener("click", () => {
                        let listLivro = divDetalhesLivro.closest('.listLivros');
                        let dadosDoLivro = listLivro.querySelector('.dadosDoLivro');
                        let isOpen = dadosDoLivro.classList.contains('on');

                        document.querySelectorAll('.dadosDoLivro').forEach(dadosDoLivro => {
                            dadosDoLivro.classList.remove('on');
                        });

                        if (!isOpen) {
                            dadosDoLivro.classList.add('on');
                        }
                    });

                const divEditarLivro = document.createElement("div");
                divEditarLivro.className = "editarLivro divImg";

                    const imgEditarLivro = document.createElement("img");
                    imgEditarLivro.className = "imageEdit";
                    imgEditarLivro.src = "image/editar.svg";
                    imgEditarLivro.alt = "";
                
                    // Manipular o novo elemento como os outros elementos existentes
                    divEditarLivro.addEventListener("click", () => {
                        let listLivro = divEditarLivro.closest('.listLivros');
                        let listEdit = listLivro.querySelector('.editarLivroContainer');

                        // Verifica se os detalhes do livro estão abertos
                        let isOpen = listEdit.classList.contains('on');

                        // Fecha todos os detalhes de livros abertos
                        document.querySelectorAll('.editarLivroContainer').forEach(listEdit => {
                            listEdit.classList.remove('on');
                        });

                        // Se não estiverem abertos, abre os detalhes do livro clicado
                        if (!isOpen) {
                            listEdit.classList.add('on');
                        }
                    });

        const divDadosDoLivro = document.createElement("div");
        divDadosDoLivro.className = "dadosDoLivro";

            const inputDescricaoDoLivro = document.getElementById("inputDescricaoDoLivro");
            const h2DescricaoLivro = document.createElement("h2");
            h2DescricaoLivro.id = "lLdescricao";
            h2DescricaoLivro.className = "lLdescricao";
            h2DescricaoLivro.textContent = inputDescricaoDoLivro.value;

        const divEditarLivroContainer = document.createElement("div");
        divEditarLivroContainer.className = "editarLivroContainer";

            const spanNome = document.createElement("span");
            spanNome.textContent = "Nome: ";

            const inputNome = document.createElement("input");
            inputNome.id = "inputNomeDoLivroEditar";
            inputNome.className = "inputNomeDoLivro";
            inputNome.type = "text";
            inputNome.placeholder = "Nome...";

            const spanAutor = document.createElement("span");
            spanAutor.textContent = "Autor: ";

            const inputAutor = document.createElement("input");
            inputAutor.id = "inputAutorDoLivroEditar";
            inputAutor.className = "inputAutorDoLivro";
            inputAutor.type = "text";
            inputAutor.placeholder = "Autor...";

            const spanGenero = document.createElement("span");
            spanGenero.textContent = "Gênero: ";

            const inputGenero = document.createElement("input");
            inputGenero.id = "inputGeneroDoLivroEditar";
            inputGenero.className = "inputGeneroDoLivro";
            inputGenero.type = "text";
            inputGenero.placeholder = "Gênero...";

            const spanPaginas = document.createElement("span");
            spanPaginas.textContent = "Paginas: ";

            const inputPaginas = document.createElement("input");
            inputPaginas.id = "inputPaginaDoLivroEditar";
            inputPaginas.className = "inputPaginaDoLivro";
            inputPaginas.type = "text";
            inputPaginas.placeholder = "Paginas...";

            const spanISBN = document.createElement("span");
            spanISBN.textContent = "ISBN: ";

            const inputISBN = document.createElement("input");
            inputISBN.id = "inputISBNDoLivroEditar";
            inputISBN.className = "inputISBNDoLivro";
            inputISBN.type = "text";
            inputISBN.placeholder = "ISBN...";

            const spanNota = document.createElement("span");
            spanNota.textContent = "Nota: ";

            const inputNota = document.createElement("input");
            inputNota.id = "inputNotaDoLivro";
            inputNota.className = "inputNotaDoLivro";
            inputNota.type = "text";
            inputNota.placeholder = "Nota...";

            const spanDescricao = document.createElement("span");
            spanDescricao.textContent = "Descrição: ";

            const textareaDescricao = document.createElement("textarea");
            textareaDescricao.id = "inputDescricaoDoLivroEditar";
            textareaDescricao.className = "inputDescricaoDoLivro";
            textareaDescricao.placeholder = "Descrição...";

            const labelOK = document.createElement("label");
            labelOK.className = "btnAtualizarLivro";
            labelOK.textContent = "OK";

            const labelX = document.createElement("label");
            labelX.className = "btnDeletarLivro";
            labelX.textContent = "X";

    // Adicionar as divs criado dentro de seus elemento pai.
    containerPai.appendChild(divListLivros);

        divListLivros.appendChild(divLivroLine);
            divLivroLine.appendChild(divDivImg);
                divDivImg.appendChild(imgLivro);

            divLivroLine.appendChild(divDados);
                divDados.appendChild(h2NomeDoLivro);
                divDados.appendChild(h2GeneroDoLivro);
                divDados.appendChild(h2AutorDoLivro);
                divDados.appendChild(h2Paginas);
                divDados.appendChild(h2ISBN);
                divDados.appendChild(h2NotaDoLivro);
            
            divLivroLine.appendChild(divFerramentas);
                divFerramentas.appendChild(divDivImgF);
                    divDivImgF.appendChild(imgEstrela);
                divFerramentas.appendChild(divDetalhesLivro);
                    divDetalhesLivro.appendChild(imgDetalhesLivro);
                divFerramentas.appendChild(divEditarLivro);
                    divEditarLivro.appendChild(imgEditarLivro);

        divListLivros.appendChild(divDadosDoLivro);
            divDadosDoLivro.appendChild(h2DescricaoLivro);

        divListLivros.appendChild(divEditarLivroContainer);
            divEditarLivroContainer.appendChild(spanNome);
            divEditarLivroContainer.appendChild(inputNome);
            divEditarLivroContainer.appendChild(spanAutor);
            divEditarLivroContainer.appendChild(inputAutor);
            divEditarLivroContainer.appendChild(spanGenero);
            divEditarLivroContainer.appendChild(inputGenero);
            divEditarLivroContainer.appendChild(spanPaginas);
            divEditarLivroContainer.appendChild(inputPaginas);
            divEditarLivroContainer.appendChild(spanISBN);
            divEditarLivroContainer.appendChild(inputISBN);
            divEditarLivroContainer.appendChild(spanNota);
            divEditarLivroContainer.appendChild(inputNota);
            divEditarLivroContainer.appendChild(spanDescricao);
            divEditarLivroContainer.appendChild(textareaDescricao);
            divEditarLivroContainer.appendChild(labelOK);
            divEditarLivroContainer.appendChild(labelX);

        detalhesLivros.push(divDetalhesLivro);
});

function caminhoDoMeuLivro(nome){
    switch (nome){
        case "Ação":
            return "image/l-acao";
        case "Fantasia":
            return "image/l-infantil";
        case "Ficção Científica":
            return "image/l-raio";
        case "Distopia":
            return "image/l-mente";
        case "Aventura":
            return "image/l-aventura";
        case "Ficção Policial":
            return "image/l-acao";
        case "Horror":
            return "image/l-acao";
        case "Suspense":
            return "image/l-drama";
        case "Romance":
            return "image/l-roamnce";
        case "Infantil":
            return "image/l-infantil";
        case "Autobiografia":
            return "image/l-mente";
        case "Biografia":
            return "image/l-mente";
        case "Gastronomia":
            return "image/l-receitas";
        case "Arte":
            return "image/l-artes";
        case "Fotografia":
            return "image/l-artes";
        case "Autoajuda":
            return "image/l-psicologia";
        case "História":
            return "image/l-historias";
        case "Viagem":
            return "image/l-guia";
        case "Crimes Reias":
            return "image/l-acao";
        case "Humor":
            return "image/l-comedia";
        case "Guias":
            return "image/l-guia";
        case "Religião":
            return "image/l-religiao";
        case "Ciências":
            return "image/l-ciencias";
        case "Tecnologia":
            return "image/l-dev";
        case "Astrologia":
            return "image/l-astrologia";
        case "Investimento":
            return "image/l-investimento";
        case "Drama":
            return "image/l-drama";
        case "Outros":
            return "image/livros";
    }
}