let qrcode = new QRCode('qrcode');

$('li').click(function () {
    $('#socials').hide();
    $('#qr').css('display', 'flex');
    qrcode.makeCode($(this).data('url'));
});

$('#profile-pic').click(() => {
    $('#socials').show();
    $('#qr').hide();
});
