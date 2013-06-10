Application.Views.Compositions.ButtonTypes.AlertType = (function () {

    // import
    var ButtonTypeInterface = Application.Interfaces.Views.Compositions.ButtonTypeInterface;


    function AlertType () {}

    AlertType.prototype = new ButtonTypeInterface();

    AlertType.prototype.init = function () {
        alert('at init');
    };

    AlertType.prototype.update = function () {
        alert('at update');
    };

    AlertType.prototype.type = function () {
        alert('at type');
    };

    return AlertType;
})();