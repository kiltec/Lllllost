(function(lllll, $, undefined) {
	var _gridMaxX = 10;
	var _gridMaxY = 10;
	var _locationsOfL = new Array();
	var _amountOfLs = 3;

	lllll.run = function () {
		_locationsOfL[0] = new Array();
		_locationsOfL[0][0] = true;

		_drawGrid(_gridMaxX, _gridMaxY);
	};
	function _drawGrid(maxX, maxY) {
		$('#lllllost').append('<div id="grid">');
		for( var y = 0; y <= maxY; y++) {
			$('#grid').append('<div class="grid_row">');

			for( var x = 0; x <= maxX; x++) {
				$('#grid').append('<span id="pos_' + x + '_' + y + '" class="grid_tile">' + _getTileContent(x, y) + '</span>');
			}
			$('#grid').append('</div>');
		}
		$('#lllllost').append('</div>');
	}

	function _getTileContent (x, y) {
		var tileContent;

		if(_isLocationOfL(x, y)) {
			tileContent = 'l';
		}else {
			tileContent = 'I';
		}
		return tileContent;
	}

	function _initLocationsOfL() {
		var x, y;
		var remainingLs = _amountOfLs;

		while(remainingLs) {
			x = Math.r
		}
	}
	function _isLocationOfL(x, y) {
		return _locationsOfL[y] && _locationsOfL[y][x];
	}
	function _randomFromTo(from, to){
		return Math.floor(Math.random() * (to - from + 1) + from);
	}
}(window.lllll = window.lllll || {}, jQuery));