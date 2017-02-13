(function () {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var drw = initCtx(ctx);
	var dots = [];

	var lineHandler = function(pt1, pt2) {};

	$(canvas).click(function (evt) {
		const x = evt.pageX - $(this).offset().left;
		const y = evt.pageY - $(this).offset().top;

		const pos = {x: x, y: y};

		drw.drawCircle(pos);
		dots.push(pos);

		if(dots.length == 2)
		{
			drw.drawLine(dots.shift(), dots.shift());
		}
	});

	function initCtx(ctx) {

		const _width = ctx.canvas.width;
		const _height = ctx.canvas.height;

		return {
			drawCircle: function (pos) {
				const rad = 7;

				var circle = new Path2D();
			    circle.moveTo(125, 35);
			    circle.arc(pos.x, pos.y, rad, 0, 2 * Math.PI);

			    ctx.fillStyle = "rgb(0, 0, 0)";
			    ctx.fill(circle);

			    ctx.font = "12 Arial bold";
			    ctx.fillStyle = "black";

			    const posStr = "("+pos.x+","+pos.y+")";

			    ctx.fillText(posStr, pos.x - posStr.length/2 * 5, pos.y + rad * 2);
			},

			drawLine: function (pt1, pt2) {
				const cat1 = Math.abs(pt1.x - pt2.x);
				const cat2 = Math.abs(pt1.y - pt2.y);
				const ratio = cat1 / cat2;

				const auxPt1 = findAuxPt(pt1, pt2);
				const auxPt2 = findAuxPt(pt2, pt1);

				ctx.beginPath();
				ctx.moveTo(auxPt1.x, auxPt1.y);
				ctx.lineTo(auxPt2.x, auxPt2.y);
				ctx.stroke();

				lineHandler(auxPt1, auxPt2);

				function findAuxPt (pt1, pt2) {
					if(pt2.x > pt1.x) {
						if(pt2.y > pt1.y) {
							return {x: pt2.x + (_height - pt2.y) * ratio, y: _height};
						}else if(pt2.y < pt1.y) {
							return {x: pt2.x + pt2.y * ratio, y: 0};
						}else if(pt2.y == pt1.y) {
							return {x: _width, y: pt2.y};
						}
					}else if(pt2.x < pt1.x) {
						if(pt2.y > pt1.y) {
							return {x: pt2.x - (_height - pt2.y) * ratio, y: _height};
						}else if(pt2.y < pt1.y) {
							return {x: pt2.x - pt2.y * ratio, y: 0};
						}else if(pt2.y == pt1.y) {
							return {x: 0, y: pt2.y};
						}
					}else if(pt2.x == pt1.x) {
						if(pt2.y > pt1.y) {
							return {x: pt2.x, y: _height};
						}else if(pt2.y < pt1.y) {
							return {x: pt2.x, y: 0};
						}
					}
				}
			}
		}
	}

	window.onLineAdded = function(callback) {
		lineHandler = callback;
	};
})();