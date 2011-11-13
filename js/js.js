function secondLevelShow(){
	var mouseover_tid = [];
	var mouseout_tid = [];

	jQuery(document).ready(function(){
		jQuery("#nav > li").each(function(index){
			jQuery(this).hover(function(){
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseout_tid[index] = setTimeout(function(){
					jQuery(_self).find('ul:eq(0)').slideDown(200);
				}, 0);
			},
			function(){
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseout_tid[index] = setTimeout(function(){
					jQuery(_self).find('ul:eq(0)').slideUp(200);
				}, 0);
			});
		});

		// js for left menu
		$('ul.menu ul').hide();
		$.each($('ul.menu'), function(){
			$('#' + this.id + '.expandfirst ul:first').show();
		});
		$('ul.menu li a').click(
			function() {
				var checkElement = $(this).next();
				var parent = this.parentNode.parentNode.id;

				if($('#' + parent).hasClass('noaccordion')) {
					$(this).next().slideToggle('normal');
					return false;
				}
				if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
					if($('#' + parent).hasClass('collapsible')) {
						$('#' + parent + ' ul:visible').slideUp('normal');
					}
					return false;
				}
				if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
					$('#' + parent + ' ul:visible').slideUp('normal');
					checkElement.slideDown('normal');
					return false;
				}
			}
		);
	});
}

function show (th, cur) {
    if (typeof show.th == 'undefined') {
        show.th = document.getElementById('hg');
        show.cur = 1;
    }
    if (show.th == th) return;

    show.th.className = '';
    th.className = 'li_d';

    document.getElementById('tab_' + show.cur).style.display = 'none';
    document.getElementById('tab_' + cur).style.display = 'block';
    show.th = th;
    show.cur = cur;
}

function showOther(dst)
{
	document.body.innerHTML = dst.document.body.innerHTML;
}
