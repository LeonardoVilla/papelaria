document.getElementById('uploadImagem').addEventListener('change', function(event) {
    var fileInput = event.target;
    var hiddenFileNameInput = document.getElementById('imagem');
    var fileNameElement = document.getElementById('fileName');
    
    if (fileInput.files.length > 0) {
        // Obtém o primeiro arquivo selecionado
        var file = fileInput.files[0];
        // Define o valor do campo oculto como o nome do arquivo
        hiddenFileNameInput.value = file.name;
        // Mostra o nome do arquivo
        // fileNameElement.textContent = "Nome da Imagem: " + file.name;
    } else {
        hiddenFileNameInput.value = '';  // Limpa o campo oculto se nenhum arquivo for selecionado
        fileNameElement.textContent = "Nenhum arquivo selecionado.";
    }
});