let scanner = new window.Instascan.Scanner({ video: document.getElementById('qr-code-scan') }); 

const startScan = () => {
    scanner.addListener('scan', (content) => {
        document.querySelector('.qr-code').style.display = 'none'
        scanner.stop(); 
        alert('Conteúdo: ' + content);
    });

    window.Instascan.Camera.getCameras()
        .then(cameras => {
            scanner.start(cameras[0]);
            document.querySelector('.qr-code').style.display = 'flex';
        })
        .catch(err => alert("Desculpe, não conseguimos encontrar a câmera no seu dispositivo ou ela não está habilitada. Por favor, verifique suas configurações e tente novamente."));
}

document.getElementById('scan-button').addEventListener('click', startScan);