
$('document').ready(function () {
    let qrcode = new QRCode("qrcode",
        {
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    $('li').click(function() {
        $("#socials").hide();
        $("#qr").show();
        qrcode.makeCode($(this).data('url'));
    });
    $('#profile-pic').click(()  => {
        window.location.reload();
    });
});
