var appModule = angular.module('localStorageModule', []);
appModule.factory('localStorageService', ['$window', function ($window) {
	var storage = (angular.isUndefined($window.localStorage)) ? undefined : $window.localStorage, isSupported = !(angular.isUndefined(storage) || angular.isUndefined($window.JSON));


	var privateStorage = {
	  //use this function to get pased and useable data from storage.
		parseValue: function (res) {
			var val;
			try {
				val = JSON.parse(res);
				if (angular.isUndefined(val)) {
					val = res;
				}
				if (val == 'true') {
					val = true;
				}
				if (val == 'false') {
					val = false;
				}
				if (parseFloat(val) == val && !angular.isObject(val)) {
					val = parseFloat(val);
				}
			} catch (e) {
				val = res;
			}
			return val;
		},
		getStorageKey: function (key, prefix) {
			return prefix + key;
		},
	};
	function publicStorage() {
		
		this.prefix = "";

		this.getStorageKey = function(key) {
			return this.prefix + key;
		};
		this.set = function (key, value) {
			if (!isSupported) {
				try {
					$.cookie(this.getStorageKey(key), value);
					return value;
				} catch (e) {
					throw new Error('Local Storage not supported, make sure you have the $.cookie supported.');
				}
			}
			var saver = JSON.stringify(value);
			storage.setItem(this.getStorageKey(key), value);
			return privateStorage.parseValue(saver);
		};
		this.get = function (key) {
			if (!isSupported) {
				try {
					return privateStorage.parseValue($.cookie(this.getStorageKey(key)));
				} catch (e) {
					return null;
				}
			}
			var item = storage.getItem(this.getStorageKey(key));
			return privateStorage.parseValue(item);
		};
		this.remove = function (key) {
			if (!isSupported) {
				try {
					$.cookie(this.getStorageKey(key), null);
					return true;
				} catch (e) {
					return false;
				}
			}
			storage.removeItem(this.getStorageKey(key));
			return true;
		};
		this.removeAll = function () {
			if (!isSupported) {
				try {
					$.cookie(this.getStorageKey(key), null);
					return true;
				} catch (e) {
					return false;
				}
			}
			storage.clear();
			return true;
		};
	}
	return {
		create: function () {
			return new publicStorage();
		}
	};
}]);
