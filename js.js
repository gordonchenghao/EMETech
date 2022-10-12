$(window).scroll(navBarActive);
$(window).scroll(scrollToTopDisplay);
$(window).scroll(dynamicCount);

$("#scroll-top").click(function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

function navBarActive() {
	let position = window.pageYOffset + 1;
	$("section").each(function () {
		var target = $(this).offset().top;
		var id = $(this).attr("id");
		var navLinks = $("nav li a");
		if (position >= target) {
			navLinks.removeClass("active");
			$('nav li a[href="#' + id + '"]').addClass("active");
		}
	});
}

function scrollToTopDisplay() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		$("#scroll-top").css("display", "block");
	} else {
		$("#scroll-top").css("display", "none");
	}
}

let countInitialise = false;
let maxValue = [32, 623, 2450, 36];

function dynamicCount() {
	let position = window.pageYOffset + 300;
	let countAreaTop = $("#count").offset().top;
	let countAreaBottom = $("#features").offset().top;

	if (countInitialise) {
		return;
	} else {
		if (position < countAreaTop || position > countAreaBottom) {
			return;
		} else {
			countInitialise = true;
			$(".count-number").each(function (idx) {
				let maxCount = maxValue[idx];
				let count = 0;
				let int = setInterval(countNumber, 30);
				function countNumber() {
					count = Math.ceil(count + maxCount / 30);

					if (count > maxCount) {
						clearInterval(int);
					} else {
						$(".count-number:eq(" + idx + ")").text(count);
					}
				}
			});
		}
	}
}
