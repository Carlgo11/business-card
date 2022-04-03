let options = {height: 208, width: 208}
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    jQuery.extend(options, {colorDark: "#eee", colorLight: "#000"});
}

let qrcode = new QRCode('qrcode', options);

$('li').click(function () {
    $('#socials').hide();
    $('#qr').css('display', 'flex');
    qrcode.makeCode($(this).data('url'));
});

$('#profile-pic').click(() => {
    $('#socials').show();
    $('#qr').hide();
});
