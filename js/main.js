$(document).ready(function(){
  $('.bxslider').bxSlider({
  	infiniteLoop: false,
  	hideControlOnEnd: true,
  	controls: false,
  	onSlideBefore: function($slideElement, oldIndex, newIndex){
  		$slideElement.find('.slider-text').animate({'right':'-235px','top':'0'},250)
  		
  	},
  	onSlideAfter: function($slideElement, oldIndex, newIndex){
  		
  		$slideElement.find('.slider-text').animate({'right':'0','top':'0'},250)
  	}
	});

	$(function() {

	$('ul.tabs-nav').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tab-content').removeClass('activ-tab').eq($(this).index()).addClass('activ-tab');
		$(this)
			.children('span').removeClass('tabs-item');
		$('li:not(.active)')
			.children('span').addClass('tabs-item');
	});
	});

	$(function() {
 		$('select').styler({
 		});
	});
  
});