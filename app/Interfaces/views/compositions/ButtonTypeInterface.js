Application.Interfaces.Views.Compositions.ButtonTypeInterface = (function () {

    function ButtonTypeInterface () {}

    ButtonTypeInterface.prototype = {
        init : function () {
            throw new Error('サブクラスで実装必須:init');
        },
        update : function () {
            throw new Error('サブクラスで実装必須:update');
        },
        type   : function () {
            throw new Error('サブクラスで実装必須:type');
        }
    };

    return ButtonTypeInterface;
})();