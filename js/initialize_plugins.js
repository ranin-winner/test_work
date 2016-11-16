//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/




		var rangeSlider = $("#slider"),
			rangeSlider2 = $("#slider2"),
			rangeSlider3 = $("#slider3"),
			drag = $(".draggable"),
			sliderDrag = $(".drag_red"),
			map = $("#vmap"),
			slider4 = $("#slider4"),
			windowW = $(window).width(),
			windowH = $(window).height();


			if(map.length){
					include("plugins/jquery.vmap.js");
					include("plugins/maps/jquery.vmap.russia.js");
			}
			if(rangeSlider.length || rangeSlider2.length || rangeSlider3.length || slider4.length || drag.length || sliderDrag.length){
					include("plugins/jquery-ui/jquery-ui.min.js");
			}

					include("plugins/modernizr.js");



			function include(url){ 

					document.write('<script src="'+ url + '"></script>'); 

			}

		


		$(document).ready(function(){


			/* ------------------------------------------------
			DRAG START
			------------------------------------------------ */
			var box = $('.img1'),
				boxOffset = box.offset(),
				boxW = box.width(),
				boxH = box.height(),
				counter = 0;

				if (drag.length){
					drag.draggable({
				        revert: true,
				        drag: function(event, ui){
				        	// console.log($(this).offset().top)

				        	if (($(this).offset().top + 90) >= boxOffset.top){
				        		if ($(this).offset().left >= boxOffset.left && ($(this).offset().left + $(this).width()) <= (boxOffset.left + boxW)) {

				        			$(this).draggable( "option", "revert", false);

				        		}
				        	}
				        },
				        stop: function(event, ui){

		        			if (($(this).offset().top + 90) >= boxOffset.top){
				        		if ($(this).offset().left >= boxOffset.left && ($(this).offset().left + $(this).width()) <= (boxOffset.left + boxW)) {

				        			$(this).animate({
				        				left: "150px",
										top: "100%",
										visible: "hidden",
										opacity: "0"
				        			});

				        			$('body').find('.drag').addClass('fall');

				        			counter++;

				        			if (counter == 4){
				        				$('body').addClass('end');
				        			}
				        		}
				        	}
				        }
					});
				};

			/* ------------------------------------------------
			DRAG END
			------------------------------------------------ */


			/* ------------------------------------------------
			DRAG2 START
			------------------------------------------------ */

				var	mapBlock = $('.drag_yellow'),
					mapBlockOffset = mapBlock.offset(),
					mapBlockW = mapBlock.width(),
					mapBlockH = mapBlock.height();

					if (sliderDrag.length){
						sliderDrag.draggable({
					        containment: "drag_red_wrapper",
					        axis: "y",
					        drag: function(event, ui){
					        	var current 		= $(this),
					        		currentOffset 	= current.offset();

					        	$('.map').find('.yellow').each(function(){
					        		if ($(this).offset().top <= (currentOffset.top + 80) && ($(this).offset().top) >= (currentOffset.top)){
					        			$(this).addClass('active');
					        		}
					        		else{
					        			$(this).removeClass("active");
					        		}
					        	})
					        },
						});
					};

			/* ------------------------------------------------
			DRAG2 END
			------------------------------------------------ */


			/* ------------------------------------------------
			RANGE SLIDER START
			------------------------------------------------ */

					if (rangeSlider.length){
						var handle = $( "#custom-handle" );

						rangeSlider.slider({
							create: function() {
								handle.text( $( this ).slider( "value" ) );
								$( "#amount" ).text( $( this ).slider( "value" ) );
							},
							slide: function( event, ui ) {
								handle.text( ui.value );
								$( "#amount" ).text(  ui.value );
							},
							range: "min",
							value: 12,
							min: 1,
							max: 12
					    });
					};  
					
					if (rangeSlider2.length){  
					    var handle2 = $( "#custom-handle2" );

					    rangeSlider2.slider({
							range: "min",
							value: 6,
							min: 1,
							max: 12,
							create: function() {
								handle2.text( $( this ).slider( "value" ) );
								$( "#amount2" ).text( $( this ).slider( "value" ) );
							},
							slide: function( event, ui ) {
								handle2.text( ui.value );
								$( "#amount2" ).text(  ui.value );
							},
					    });
					 };

					 if (rangeSlider3.length){
					    var handle3 = $( "#custom-handle3" );

					    rangeSlider3.slider({
							range: "min",
							value: 3,
							min: 1,
							max: 12,
							create: function() {
								handle3.text( $( this ).slider( "value" ) );
								$( "#amount3" ).text( $( this ).slider( "value" ) );
							},
							slide: function( event, ui ) {
								handle3.text( ui.value );
								$( "#amount3" ).text(  ui.value );
							},
					    });
					};

					if (slider4.length){
						var handle4 = $( ".textFooter" );
						slider4.slider({
							range: "min",
							value: 0,
							min: 0,
							max: 71,
							create: function() {
								handle4.text( $( this ).slider( "value" ) );
							},
							slide: function( event, ui ) {

								var handle = $(ui.handle);

								if(!handle.length) return;

								var pos = $(ui.handle).position().left,
									peshki = $('.Peshki'),
									items = $(peshki.find('[class*="Layer"]').get().reverse());

								if(!items.length) return;

								items
									.removeClass('visible')
									.filter(function(i, el){

										return pos > $(this).position().left

									})
									.addClass('visible');

								handle4.text( $( this ).slider( "value" ) );

								if(pos < items.eq(0).outerWidth()) items.removeClass('visible');


							}
					    });
					};

			/* ------------------------------------------------
			RANGE SLIDER END
			------------------------------------------------ */


			/* ------------------------------------------------
				MAP START
			------------------------------------------------ */

			if (map.length){

				// Массив всех объектов	
				var data_obj = {
					
				};
				
				colorRegion = '#ccc'; // Цвет всех регионов
				focusRegion = '#92b4b2'; // Цвет подсветки регионов при наведении на объекты из списка
				selectRegion = '#0A4C82'; // Цвет изначально подсвеченных регионов
				hoverColor = '#92b4b2';

				highlighted_states = {};
				
				// Массив подсвечиваемых регионов, указанных в массиве data_obj
				for(iso in data_obj){
					highlighted_states[iso] = selectRegion;
				}
				

				$('#vmap').vectorMap({
				    map: 'russia_en',
					backgroundColor: '#333333',
					color: '#ccc',
					selectedColor: 'red',
					enableZoom: false,
					showTooltip: false,
					scaleColors: ['#C8EEFF', '#006491'],
					normalizeFunction: 'polynomial',
			     	borderColor: '#fff',
					hoverColor: '#92b4b2',
			      	selectedRegions: null,
			      	multiSelectRegion: true
				});
			}
			

			/* ------------------------------------------------
				MAP END
			------------------------------------------------ */




		});




//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins END    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================
