var fH = $("#footer").height();
var bH = $("body").height();
var wH = $(window).height();

// set up quote scrolling variables
var scrollPos = 0;
var quote = document.querySelectorAll(".quote");
var quoteImg = document.querySelectorAll(".quote-img")
var autoScroll

// hide quotes on load
for(i = 0; i < quote.length; i++){
	if(i != scrollPos){
		$(quote[i]).fadeOut(0);
		$(quoteImg[i]).fadeOut(0);
	}
}

// add events to arrows
function scrollLeft(){
	$(".fa-arrow-left").off("click")
	$(quote[scrollPos]).fadeOut(300);
	$(quoteImg[scrollPos]).fadeOut(300, function(){
		scrollPos -= 1;
		if(scrollPos < 0){
			scrollPos = quote.length -1;
		}
		$(quote[scrollPos]).fadeIn(300);
		$(quoteImg[scrollPos]).fadeIn(300, function(){
			$(".fa-arrow-left").on("click", scrollLeft);
		});
	});
}

function scrollRight(){
	$(".fa-arrow-right").off("click");
	$(quote[scrollPos]).fadeOut(300);
	$(quoteImg[scrollPos]).fadeOut(300, function(){
		scrollPos += 1;
		if(scrollPos >= quote.length){
			scrollPos = 0;
		}
		$(quote[scrollPos]).fadeIn(300);
		$(quoteImg[scrollPos]).fadeIn(300, function(){
			$(".fa-arrow-right").on("click", scrollRight);
		});
	});
}

$(".fa-arrow-left").on("click", function(){
	clearInterval(autoScroll);
	scrollLeft();
});

$(".fa-arrow-right").on("click", function(){
	clearInterval(autoScroll);
	scrollRight();
});

// automatic scrolling evert 5 seconds
function beginScroll(){
	autoScroll = setInterval(scrollRight, 5000);
}

// initialize
// beginScroll();