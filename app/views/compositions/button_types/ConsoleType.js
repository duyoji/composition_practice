Application.Views.Compositions.ButtonTypes.ConsoleType = (function () {

    // import
    var ButtonTypeInterface = Application.Interfaces.Views.Compositions.ButtonTypeInterface;


    function ConsoleType () {}

    ConsoleType.prototype = new ButtonTypeInterface();

    ConsoleType.prototype.init = function () {
        console.log('ct init');
    };

    ConsoleType.prototype.update = function () {
        console.log('ct update');
    };

    ConsoleType.prototype.type = function () {
        console.log('ct type');
    };

    return ConsoleType;
})();