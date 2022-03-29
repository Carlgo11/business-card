$('document').ready(function () {
    let qrcode = new QRCode("qrcode",
        {
            text: `${$('#qrcode').data('user')}`,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    qrcode.makeCode();
});