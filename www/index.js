$(function() {
    var audio;
    var currentTrack = 0;
    var tracks = $('ol li');

    function loadTrack(trackIndex) {
        currentTrack = trackIndex % tracks.length;
        tracks.removeClass('playing');
        $(tracks[currentTrack]).addClass('playing');
        audio.load($('a', tracks[currentTrack]).attr('data-src'));
    }

    // Setup the player to autoplay the next track
    var a = audiojs.createAll({
        trackEnded: function() {
            loadTrack(currentTrack + 1);
            audio.play();
        }
    });
    audio = a[0];

    // Load in the first track
    loadTrack(0);

    // Load in a track on click
    tracks.click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('playing')) {
            loadTrack(tracks.index(this));
            audio.play();
        } else {
            audio.playPause();
        }
    });
});
