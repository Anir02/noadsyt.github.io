function yt_check() {
    var newgen;
    var url;
    let iframesrc = document.getElementById("video").value;

    url = document.getElementById("yturl").value;


    VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    newgen = 'https://www.youtube-nocookie.com/embed/' + url.match(VID_REGEX)[1] + '?color=white&autoplay=1';
    //alert(st);
    document.getElementById("noadurl").value=newgen;
    document.getElementById("video").src = newgen;

}

    
function yt_copy() {
    /* Get the text field */
    var copyText = document.getElementById("noadurl");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    /* Copy the text inside the text field */
    document.execCommand("copy");
}