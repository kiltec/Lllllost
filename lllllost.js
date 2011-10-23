(function(lllll, $, undefined) {
	var _gridMaxX = 20;
	var _gridMaxY = 7;
	var _amountOfLs = 3;
	var _maxTime = 20;
	var _locationsOfL = new Array();
	var _foundLPositions = new Array();
	var _amountOfFoundLs = 0;

	lllll.init = function () {
		$('#start').click(lllll.start);
	};

	lllll.start = function () {
		_initLocationsOfL();
		_setScore();
		_drawGrid(_gridMaxX, _gridMaxY);
		_showGame();
	};

	function _drawGrid(maxX, maxY) {
		var gridRowId;
		var tileId;

		$('#lllllost').append('<div id="grid">');
		for( var y = 0; y <= maxY; y++) {
			gridRowId = 'grid_row_' + y;
			$('#grid').append('<div id="' + gridRowId + '" class="grid_row"  ></div>');

			for( var x = 0; x <= maxX; x++) {
				tileId = _getTileId(x, y)
				$('#' + gridRowId).append('<span id="' + tileId + '" class="grid_tile">' + _getTileContent(x, y) + '</span>');
				if(_isLocationOfL(x, y)) {
					var pos = {};
					pos.x = x;
					pos.y = y
					$('#' + tileId).click(pos, _foundL);
				}
			}
		}
		$('#lllllost').append('</div>');
	}

	function _getTileId(x, y) {
		return 'pos_' + x + '_' + y;
	}

	function _showGame() {
		$('#lllllost').fadeIn();
		_startCountDown();
	}

	function _startCountDown() {
		$('#countdown').countdown({
			until: +_maxTime,
			compact: true,
			format: 'S',
			description: '',
			onExpiry: _lostGame
		});
	}

	function _stopCountDown() {
		$('#countdown').countdown('pause');
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

	function _foundL(event) {
		var x = event.data.x;
		var y = event.data.y;
		_setLFoundAt(x, y);
		_setScore();
		if(_hasWon()) {
			_wonGame();
		}
	}

	function _setLFoundAt(x, y) {
		if(!_foundLPositions[y]) {
			_foundLPositions[y] = new Array();
		}
		if(!_foundLPositions[y][x]) {
			_foundLPositions[y][x] = true;
			$('#' + _getTileId(x, y)).toggleClass('found');
			_amountOfFoundLs++;
		}
	}

	function _hasWon() {
		return _amountOfFoundLs == _amountOfLs;
	}

	function _wonGame() {
		_stopCountDown();
		alert('Congratulations, you win!');
		_restartGame();
	}

	function _lostGame() {
		alert("You lose and thus you suck!\nAnother hint: Maybe your browser can help you?");
		_restartGame();
	}

	function _restartGame() {
		$('#lllllost').hide();
		$('#grid').remove();
		_amountOfFoundLs = 0;
		_foundLPositions = new Array();
		_locationsOfL = new Array();
		$('#countdown').countdown('destroy');
	}

	function _setScore() {
		$('#amount_of_found_Ls').html(_amountOfLs - _amountOfFoundLs);
	}

	function _randomFromTo(from, to){
		return Math.floor(Math.random() * (to - from + 1) + from);
	}
}(window.lllll = window.lllll || {}, jQuery));