$(document).ready(function() {
    console.log("donorbox ready");
    $.getScript("https://donorbox.org/install-popup-button.js", function() {
        window.DonorBox = { widgetLinkClassName: 'custom-dbox-popup' };
    });
});
