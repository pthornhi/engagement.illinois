var hasClass, addClass, removeClass;

function classReg( className ) {
	'use strict';
	return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
}

function toggleClass( elem, c ) {
	'use strict';
	var fn = hasClass( elem, c ) ? removeClass : addClass;
	fn( elem, c );
}

$(document).ready(function ($) {
  'use strict';
	if(typeof $ !== 'undefined'){
		$(function() {
			$('.gallery').responsiveSlides({
		        auto: true,
		        pagination: false,
		        pager: false,
		        nav: false,
		        fade: 500,
		        maxwidth: 1200,
		        manualControls: '#slider3-pager',
		        namespace: 'centered-btns',
		        random: true
			});
		});
		
		/* $('nav .layout .navlist').on('click', function(){
			$(this).parent().toggleClass( 'open' );
			$('.nav-item').animate({
								visibility: 'visible',
								height: '40px'
							}, 500, function(){
								
							});
						
		}); */
		
		//make sticky greybox and nav
		$('#sticky').sticky({topSpacing:0});
		
		
		//makes the dropdown for time selectors on the timeline page
		$('#time-selector #time-span').on('click', function(){
			var NoUnits = $(this).find('#time-units li').length;
			var dropdownHeight = (NoUnits * 30)-13;
			if($('#time-units').height() === 0){
				$('#time-units li').css('border-bottom', '1px solid #ccc');
				$(this).find('#time-units').animate({
					height: dropdownHeight,
				}, 500);
			} else {
				$('#time-units li').css('border-bottom', '0');
				$(this).find('#time-units').animate({
					height: 0,
				}, 500);	
			}
		});
	    $('#time-selector #time-units .time a').on('click', function (event) {
		    event.preventDefault();
		    var loc_to_go = $(this).text();
			var index = $('.time').index($(this).parent());
			var targetPosition = $($('#'+loc_to_go)).offset().top-(200);
	        $('html,body').animate({ scrollTop: targetPosition}, 'slow');
	    });

 
		//build the next previous navigation for the timeline details pages
		if($('#timeline-detail').length > 0){
			var currentPath = (window.location.pathname);
			var pageName = currentPath.substring(location.pathname.lastIndexOf('/') + 1);
			var dataArray = $('#timeline-detail').attr('data-timeline_section');
			var currentArray = window.eval(dataArray);
			var arrayLength = currentArray.length;
			var prev,
				next;
			for (var i = 0; i < arrayLength; i++) {
			    if(pageName === (currentArray[i])){
				    prev = (currentArray[i-1]);
				    next = (currentArray[i+1]);
				}
			}
			if(typeof prev !== 'undefined'){
				$('#nav-left a').attr('href', prev);
			} else {
				$('#nav-left img').hide();
				$('#nav-left').html('&nbsp;');
			}
			if(typeof next !== 'undefined'){
				$('#nav-right a').attr('href', next);
			} else {
				$('#nav-right img').hide();
				$('#nav-right').html('&nbsp;');
			}
			
		}
		
		//control font-size in image caption
		if($('.caption').length > 0){
			$('.caption').flowtype({
				minFont : 12,
				maxFont : 60,
				fontRatio : 10
			});
		}
 /**
 * The nav stuff
 */
 
		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once		
		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    elem.classList.add( c );
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  hasClass = function( elem, c ) {
		    return classReg( c ).test( elem.className );
		  };
		  addClass = function( elem, c ) {
		    if ( !hasClass( elem, c ) ) {
		      elem.className = elem.className + ' ' + c;
		    }
		  };
		  removeClass = function( elem, c ) {
		    elem.className = elem.className.replace( classReg( c ), ' ' );
		  };
		}
		
		var classie = {
		  // full names
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass,
		  toggleClass: toggleClass,
		  // short names
		  has: hasClass,
		  add: addClass,
		  remove: removeClass,
		  toggle: toggleClass
		};
		
		// transport
		//if ( typeof define === 'function' && define.amd ) {
		  // AMD
		//  define( classie );
		//} else {
		  // browser global
		  window.classie = classie;
		//}

 
	 
		var body = document.body,
			mask = document.createElement('div'),
			togglePushTop = document.querySelector( '.toggle-push-top' ),
			toggleSlideBottom = document.querySelector( '.toggle-slide-bottom' ),
			slideMenuTop = document.querySelector( '.slide-push-top' ),
			slideMenuBottom = document.querySelector( '.slide-menu-bottom' ),
			activeNav
		;
		mask.className = 'mask';
	
		/* slide menu top */
		if(togglePushTop){
			togglePushTop.addEventListener( 'click', function(){
				classie.add( body, 'pmt-open' );
				document.body.appendChild(mask);
				activeNav = 'pmt-open';
			} );
		}
		
		if(toggleSlideBottom){
		/* slide menu bottom */
			toggleSlideBottom.addEventListener( 'click', function(){
				classie.add( body, 'smb-open' );
				document.body.appendChild(mask);
				activeNav = 'smb-open';
				$('.close-menu').toggle();
			} );
		}
		
		/* hide active menu if mask is clicked */
		mask.addEventListener( 'click', function(){
			classie.remove( body, activeNav );
			activeNav = '';
			document.body.removeChild(mask);
		} );
	
		/* hide active menu if close menu button is clicked */
		[].slice.call(document.querySelectorAll('.close-menu')).forEach(function(el,i){
			el.addEventListener( 'click', function(){
				$('.close-menu').toggle();
				classie.remove( body, activeNav );
				activeNav = '';
				document.body.removeChild(mask);
			} );
		});

	} else {
		alert('jQuery Library Not Loaded');
	}
  
 }); //on load

