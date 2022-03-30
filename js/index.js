let qrcode = new QRCode('qrcode', {height: 208, width: 208});

$('li').click(function () {
    $('#socials').hide();
    $('#qr').css('display', 'flex');
    qrcode.makeCode($(this).data('url'));
});

$('#profile-pic').click(() => {
    $('#socials').show();
    $('#qr').hide();
});
