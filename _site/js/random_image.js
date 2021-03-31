<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>
<script>
    // Image pool to select from
    
    var images = ['/assets/images/illustrations/draculi_1080.jpg', '/assets/images/illustrations/laurence_the_duelist_1080.png','/assets/images/illustrations/iscara_the_ten_thousand_guns_1080.png','/assets/images/illustrations/alpha_draculi_1080.png']
    // Pick a random image
    var maxImages = images.length;
    var rand = Math.floor(Math.random() * maxImages);
    //var image = images[rand];
    var image = '/assets/images/illustrations/draculi_1080.jpg'
</script>

<script>
$(".jumbotron").backstretch('/assets/images/hex_board.png',
    {
        centeredY: false
    }
);
</script>
