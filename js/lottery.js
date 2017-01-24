//SLIDER
$(function () {
	$("#lotterySlider").responsiveSlides({
	});
});


//TABS
$(function(){
    var $block = $('.lottery-rank');
    $('.lottery-rank-tabs li').click(function(){
        var $this = $(this);
        $this.add($('.lottery-rank-content', $block).eq($this.index())).addClass('active').siblings('.active').removeClass('active');
    });
});

(function() {
    var dlgtrigger = document.querySelector( '[data-dialog]' ),
        login_window = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
        dlg = new DialogFx( login_window );
    dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
})();
