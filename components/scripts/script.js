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
			$('ul.gallery').responsiveSlides({
		        auto: true,
		        pager: true, 
		        nav: true,
				pause: true,           // Boolean: Pause on hover, true or false
				pauseControls: true,    // Boolean: Pause when hovering controls, true or false
				prevText: '',   // String: Text for the "previous" button
				nextText: '',
		        fade: 500,
		        maxwidth: 1200,
		        navContainer: '#slideNav',
		        namespace: 'centered-btns',
		        random: true
			});
		});
		/* auto: false,
        pager: true,
        nav: true,
        speed: 500,
        maxwidth: 800,
        namespace: "centered-btns"
        */
        
		//alter the view media types filter to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('#edit-field-media-type-tid').length > 0){
			$('.form-item-field-media-type-tid select').multiselect({
											      header: false,
											      height: 110,
											      minWidth: 86,
											      classes: '',
											      checkAllText: 'Check all',
											      uncheckAllText: 'Uncheck all',
											      noneSelectedText: 'Media',
											      selectedText: '# selected',
											      selectedList: 0,
											      show: null,
											      hide: null,
											      autoOpen: false,
											      multiple: true,
											      //position: {
												  //    my: 'left bottom',
												  //    at: 'left top'
											      //},
											      appendTo: 'body',
											    });
		}

		//alter the view tags filter to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('#edit-field-tags-tid').length > 0){
			$('.form-item-field-tags-tid select').multiselect({
											      header: false,
											      height: 400,
											      minWidth: 125,
											      classes: '',
											      checkAllText: 'Check all',
											      uncheckAllText: 'Uncheck all',
											      noneSelectedText: 'Tags',
											      selectedText: '# selected',
											      selectedList: 0,
											      show: null,
											      hide: null,
											      autoOpen: false,
											      multiple: true,
											      position: {
												      my: 'left bottom',
												      at: 'left top'
											      },
											      appendTo: 'body',
											    });
		}
		var $callback = $('#block-block-1');
		//alter the view colleges and school filter to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('#edit-field-colleges-and-schools-tid').length > 0){
			$('.form-item-field-colleges-and-schools-tid select').multiselect({
												header: false,
												height: 400,
												minWidth: 315,
												classes: '',
												checkAllText: 'Check all',
												uncheckAllText: 'Uncheck all',
												noneSelectedText: 'Colleges & Schools',
												selectedText: '# selected',
												selectedList: 2,
												show: null,
												hide: null,
												autoOpen: false,
												multiple: true,
												appendTo: 'body',
												position: {
												      my: 'left bottom',
												      at: 'left top'
												   },

												//click: function(event, ui){
												//	$callback.append(ui.value + ' ' + (ui.checked ? 'checked' : 'unchecked') );
												//	},
											   optgrouptoggle: function(event, ui){
											      var values = $.map(ui.inputs, function(checkbox){
											         return checkbox.value;
											      }).join(', ');
											      
											      $callback.html('<strong>Checkboxes ' + (ui.checked ? 'checked' : 'unchecked') + ':</strong> ' + values);
											   }
											    });
		}
		
		// manipulate the search box on the timeline
		if($('.views-widget-filter-keys').length > 0){
			var searchContainer = $('.views-widget-filter-keys');
			if(searchContainer.find('#edit-keys').val() !== ''){
				searchContainer.find('label').hide();
			}
			searchContainer.find('#edit-keys').on('focus', function(){
				searchContainer.find('label').hide();
			});
			searchContainer.find('#edit-keys').on('focusout', function(){
				if($(this).val() === ''){
					searchContainer.find('label').show();	
				}
			});
		}
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
		// this was the old design
		/* $('#time-selector #time-span').on('click', function(){
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
			
		} */ 
		//control font-size in titlebox of greybar
		if($('#titlebox').length > 0){
			$('#titlebox').flowtype({
				minFont : 17,
				maxFont : 40,
				fontRatio : 22
			});
		}
		//control font-size in image caption
		if($('.caption').length > 0){
			$('.caption').flowtype({
				minFont : 12,
				maxFont : 60,
				fontRatio : 10
			});
		}
		//control font-size in gallery captions
		if($('.view-gallery .view-content ul li p').length > 0){
			$('.view-gallery .view-content ul li p').flowtype({
				minFont : 12,
				maxFont : 20,
				fontRatio : 35
			});
		}
		//control font-size in exposed filter buttons
		/* if($('.views-exposed-widget input').length > 0){
			$('.views-exposed-widget input').flowtype({
				minFont : 12,
				maxFont : 50,
				fontRatio : 40
			});
		} */
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