/**
 * LocalStorage API
 * - Use abstract classes and generics
 */
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.setItem = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage.prototype.getItem = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clearItem = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        // 메모리 garbage 에 남기는 것 보단 다 확실히 지우는게 낫지 않을까?
        for (var key in this.storage) {
            delete this.storage[key];
        }
    };
    return LocalStorage;
}());
var StorageBehavior = /** @class */ (function () {
    function StorageBehavior() {
    }
    return StorageBehavior;
}());
var testLocalStorage = new LocalStorage();
testLocalStorage.setItem("test1", 1);
testLocalStorage.setItem("test2", 2);
console.log(testLocalStorage.getItem("test1"));
testLocalStorage.clearItem("test1");
testLocalStorage.clear();
console.log(testLocalStorage.getItem("test2"));
/**
 * Geolocation API
 * - Use overloading
 */
var MyGeolocation = /** @class */ (function () {
    function MyGeolocation() {
        this.geolocation = navigator.geolocation;
    }
    MyGeolocation.prototype.getCurrentPosition = function (successFn, errorFn, optionsObj) {
        this.geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
    };
    return MyGeolocation;
}());
var geo = new MyGeolocation();
var successFn = function (position) { return console.log(position); };
var errorFn = function (positionError) { return console.log(positionError); };
var optionsObj = {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 5000,
};
geo.getCurrentPosition(successFn);
geo.getCurrentPosition(successFn, errorFn);
geo.getCurrentPosition(successFn, errorFn, optionsObj);
