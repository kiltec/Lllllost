(function(lllll, $, undefined) {
	var _gridMaxX = 10;
	var _gridMaxY = 10;
	var _locationsOfL = new Array();
	var _amountOfLs = 3;

	lllll.run = function () {
		_initLocationsOfL();
		_drawGrid(_gridMaxX, _gridMaxY);
	};
	function _drawGrid(maxX, maxY) {
		var gridId;

		$('#lllllost').append('<div id="grid">');
		for( var y = 0; y <= maxY; y++) {
			$('#grid').append('<div class="grid_row">');

			for( var x = 0; x <= maxX; x++) {
				gridId = 'pos_' + x + '_' + y;
				$('#grid').append('<span id="' + gridId + '" class="grid_tile">' + _getTileContent(x, y) + '</span>');
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
			x = _randomFromTo(0, _gridMaxX);
			y = _randomFromTo(0, _gridMaxY);
			if(!_locationsOfL[y]) {
				_locationsOfL[y] = new Array();
			}
			_locationsOfL[y][x] = true;
			remainingLs--;
		}
	}
	function _isLocationOfL(x, y) {
		return _locationsOfL[y] && _locationsOfL[y][x];
	}

	function _randomFromTo(from, to){
		return Math.floor(Math.random() * (to - from + 1) + from);
	}
}(window.lllll = window.lllll || {}, jQuery));