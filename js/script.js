// $(function(){
// 	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
// 	ua = navigator.userAgent,

// 	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

// 	scaleFix = function () {
// 		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
// 			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
// 			document.addEventListener("gesturestart", gestureStart, false);
// 		}
// 	};
	
// 	scaleFix();
// });
// var ua=navigator.userAgent.toLocaleLowerCase(),
//  regV = /ipod|ipad|iphone/gi,
//  result = ua.match(regV),
//  userScale="";
// if(!result){
//  userScale=",user-scalable=0"
// }
// document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

// ЕСЛИ ПРОЕКТ РЕСПОНСИВ ТО ВСЕ ЧТО ВЫШЕ НУЖНО РАССКОМЕНТИРОВАТЬ. СКРИПТ ВЫШЕ ПРЕДНАЗНАЧЕН ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ВЕРСТКИ ПРИ СМЕНЕ ОРИЕНТАЦИИ НА ДЕВАЙСАХ




$(document).ready(function(){

	/* ------------------------------------------------
		CLICK BTN TEST_02 START
	------------------------------------------------ */

		$(".css_start").on("click ontouchstart", function(){
			$("body").find(".css_box").addClass("active");
		});

		$(".css_reset").on("click ontouchstart", function(){
			$("body").find(".css_box").removeClass("active");
		});

		$(".jquery_start").on("click ontouchstart", function(){
			$(".box_item5").fadeIn(1000);
			$(".box_item6").fadeOut(1000);
			$(".box_item7").animate({
				left: "-150px",
				top: "200px"
			});
			$(".box_item8").animate({
				width: "200px",
				height: "200px"
			});
		});

		$(".jquery_reset").on("click ontouchstart", function(){
			$(".box_item5").fadeOut("slow");
			$(".box_item6").fadeIn("slow");
			$(".box_item7").animate({
				left: "0",
				top: "125px"
			});
			$(".box_item8").animate({
				width: "100px",
				height: "100px"
			});
		});

		$(".canvas_area").on("click ontouchstart", function(){
			$("body").find(".Stage_base_2").addClass("active");
			$("body").find("#canvas_int").addClass("active");
		});

	/* ------------------------------------------------
		CLICK BTN TEST_02 END
	------------------------------------------------ */






});

/* ------------------------------------------------
	CANVAS 05 START
------------------------------------------------ */

if ($('#canvas').length){

	var canvas = document.getElementById("canvas");
	var canvasCont = canvas.getContext("2d");
	canvasCont.moveTo(0,0);
	canvasCont.lineTo(120,120);
	canvasCont.strokeStyle = 'blue';
	canvasCont.stroke();
	canvasCont.font = "20px Arial";
	canvasCont.fillText("Hello World!",20,50);
	canvasCont.strokeStyle = 'grey';
	canvasCont.strokeRect(10, 23, 210, 40);
}



/* ------------------------------------------------
	CANVAS 05 END
------------------------------------------------ */