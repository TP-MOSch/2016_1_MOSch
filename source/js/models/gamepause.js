define(function (require) {

	var Backbone = require('backbone'),
		BABYLON = require('babylon'),
		modes = require('models/modes'),
		states = require('models/states'),
		ColorJS = require('color'),
		cfg = require('models/gameconfig'),
		_ = require('underscore'),
		$ = require('jquery');

	var pauseFunc = function () {
		if (this._state === states.play) {
			this._state = states.pause;
			$('#fade').show();
			$('#pause').hide();
		} else if (this._state === states.finish) {
			Backbone.history.navigate('menu', {trigger: true});
			return;
		} else if (this._state === states.pause) {
			this._state = states.play;
			$('#fade').hide();
			$('#pause').show();
		}
		if (this._state === states.pause) {
			if ('ontouchstart' in window) {
				// mobile device (work only in modern browsers)
				this._scoresElem.innerHTML = 'Tap to continue';
			} else {
				this._scoresElem.innerHTML = 'Click to continue';
			}
		} else if (this._state === states.play) {
			this._scoresElem.innerHTML = this._score;
		}
		console.log(this._state);
	};

	return pauseFunc;

});