render();


function render() {

    var z = 0;


    var base = document.getElementById('parallax-base');

    for (i = 1; i <= 19; i++) {

        var layer = document.createElement('div');
        layer.setAttribute("id", 'layer' + i)
        layer.classList.add('layer');


        var img = document.createElement('img');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            img.setAttribute("src", 'layers/tiny/layer' + i + '.png')
        } else {
            img.setAttribute("src", 'layers/layer' + i + '.png')
        }

        layer.appendChild(img);
        base.appendChild(layer);

    }

}

display_player();

function display_player() {
    var player = document.getElementById('player');
    /*
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            player.innerHTML = '';
        } else{
            player.innerHTML = '<iframe scrolling="no" frameborder="no" allow="autoplay"src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/913674172&color=%23191917&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
        }
        */

    player.innerHTML = '<iframe scrolling="no" frameborder="no" allow="autoplay"src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1201126732%3Fsecret_token%3Ds-SjYPggdaYgP&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';


}