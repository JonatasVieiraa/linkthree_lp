
    document.getElementById("downloadButton").addEventListener("click", function(event) {
        event.preventDefault();

        // URL do arquivo PDF no Google Drive com o link modificado para download
        const fileId = "1JrgQi1A6lmePjOYgzm6UIZPJQ8sktnRY";
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

        // Criando um link temporário para forçar o download
        const tempLink = document.createElement("a");
        tempLink.href = downloadUrl;
        tempLink.download = "evento.pdf"; // Nome do arquivo que será baixado
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
