let scanner = new window.Instascan.Scanner({ video: document.getElementById('qr-code-scan') }); 

scanner.addListener('scan', (content) => {
    scanner.stop(); 
    document.querySelector('.qr-code').style.display = 'none'
    alert('Conteúdo: ' + content);
    console.log(content);
});

const startScan = () => {
    window.Instascan.Camera.getCameras()
        .then(cameras => {
            scanner.start(cameras[0]);
            document.querySelector('.qr-code').style.display = 'flex';
        })
        .catch(err => alert("Desculpe, não conseguimos encontrar a câmera no seu dispositivo ou ela não está habilitada. Por favor, verifique suas configurações e tente novamente."));
}

document.getElementById('scan-button').addEventListener('click', startScan);