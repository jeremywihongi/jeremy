
// Carousel 
$(window).load(function () {

  $('.main-carousel').flickity({
			cellAlign: 'left',
			cellSelector: '.carousel-cell',
			contain: true,
			prevNextButtons: true,
			wrapAround: true,
			pageDots: false,
			draggable: false,
			imagesLoaded: true,
			accessibility: false,
			selectedAttraction: 0.040, // Default 0.025
			friction: 0.40 // Default 0.28
		});

		$('.project-images').each( function( i, container ) {
		  var $container = $( container );

		  var $carousel = $container.find('.main-carousel').flickity({
				cellAlign: 'left',
				cellSelector: '.carousel-cell',
				contain: true,
				prevNextButtons: true,
				wrapAround: true,
				pageDots: false,
				draggable: false,
				adaptiveHeight: true,
				imagesLoaded: true
			});

		  var $counter = $container.find('.gallery-counter');
		  // Flickity instance
		  var flkty = $carousel.data('flickity');

		  $carousel.on( 'select.flickity', function() {
		    // set image caption using img's alt
		    $counter.text( flkty.selectedElement.alt )
		  });

			function updateStatus() {
				var cellNumber = flkty.selectedIndex + 1;
				$counter.text( cellNumber + '/' + flkty.cells.length );
			}

			updateStatus();
			$gallery.on( 'cellSelect.flickity', updateStatus );
		});

		function layout() {
			startFlickity();
		}

});

