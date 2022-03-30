let qrcode = new QRCode("qrcode");

$('li').click(function () {
    $("#socials").hide();
    $("#qr").show();
    qrcode.makeCode($(this).data('url'));
});

$('#profile-pic').click(() => {
    $("#socials").show();
    $("#qr").hide();
});
