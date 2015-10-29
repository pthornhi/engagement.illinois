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

var loadHorizLoad = function(){
	'use strict';
	/* if(typeof $.fn.mCustomScrollbar !== 'undefined'){
		var windowWidth = ($(window).width())-200;
		$('.owl-carousel').mCustomScrollbar({
				axis:'x',
				theme: 'dark-thick',
				scrollbarPosition: 'inside',
				scrollButtons: 'enable',
				set_width: '100%',
				mouseWheelPixels:0,
				advanced:{
					autoScrollOnFocus:false, 
				},
		});
		var owlControls = $('.owl-controls').detach();
		owlControls.appendTo('#mCSB_1');
		$('.owl-wrapper').css("max-width", "22500px !important");
	} */
	if($('.owl-controls .owl-pagination')){
		var owlControls = $('.owl-controls .owl-pagination').detach();
		$('.view-content').prepend(owlControls);
		$('.owl-pagination').wrap( '<div class="custom-owl-controls clickable"></div>');
	}
};

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
		
		//alter the view tags in gallery filter to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('#edit-field-gallery-tags-tid').length > 0){
			$('.form-item-field-gallery-tags-tid select').multiselect({
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

		//alter the view tags in timeline filter to be a dropdown button
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
												selectedList: 0,
												show: null,
												hide: null,
												autoOpen: false,
												multiple: true,
												appendTo: 'body',
												position: {
												      my: 'left bottom',
												      at: 'left top'
												   }
											    });
		}
		
		//alter the gallery tags in node edit form to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('.form-item-field-gallery-tags-und').length > 0){
			$('.form-item-field-gallery-tags-und select').multiselect({
												header: false,
												height: 250,
												minWidth: 315,
												classes: '',
												checkAllText: 'Check all',
												uncheckAllText: 'Uncheck all',
												noneSelectedText: '',
												selectedText: '# selected',
												selectedList: 8,
												show: null,
												hide: null,
												autoOpen: false,
												multiple: true,
												appendTo: 'body',
											    });
		}
		//alter the timeline tags in node edit form to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('.form-item-field-tags-und').length > 0){
			$('.form-item-field-tags-und select').multiselect({
												header: false,
												height: 250,
												minWidth: 315,
												classes: '',
												checkAllText: 'Check all',
												uncheckAllText: 'Uncheck all',
												noneSelectedText: '',
												selectedText: '# selected',
												selectedList: 8,
												show: null,
												hide: null,
												autoOpen: false,
												multiple: true,
												appendTo: 'body',
											    });
		}
		//alter the colleges and school in node edit form to be a dropdown button
		if(typeof $.fn.multiselect !== 'undefined' && $('.form-item-field-colleges-and-schools-und').length > 0){
			$('.form-item-field-colleges-and-schools-und select').multiselect({
												header: false,
												height: 250,
												minWidth: 315,
												classes: '',
												checkAllText: 'Check all',
												uncheckAllText: 'Uncheck all',
												noneSelectedText: '',
												selectedText: '# selected',
												selectedList: 8,
												show: null,
												hide: null,
												autoOpen: false,
												multiple: true,
												appendTo: 'body',
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
		
		//make sticky greybox and nav
		$('#sticky').sticky({topSpacing:0});
		

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
		
		//change the text on the gallery item save button to submit
		$('#node-gallery-item-node-form #edit-actions input#edit-submit').val('Submit');
		
		//this generates classes for the five different timeline styles
		if($('.owl-wrapper').length > 0){
			var owl_items = $('.owl-wrapper .owl-item');
			var i = 0;
			$.each(owl_items, function(index){
				if(i === 6){
					i = 0;
				} 
				$(this).addClass('item-style'+i);
				i++;
			});
			//alert(typeof($.fn.horizontalScroll));
			window.setTimeout(loadHorizLoad,1000);
			//owl.owlCarousel();
			//console.log(owlCarousel);
			//owl.on('resize', function(e) {
			//	alert('it resized');
			//});
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