Application.Views.Button = (function () {
    function Button (type, name) {
        this._type = type;
        this._name = name;
    }

    Button.prototype.click = function () {
        alert('click type : ' + _type);
    };

    Button.prototype.init = function () {
        this._type.init();
    };

    Button.prototype.update = function () {
        this._type.update();
    };

    Button.prototype.type = function () {
        this._type.type();
    };

    Button.prototype.getName = function () {
        return this._name;
    };


    return Button;
})();