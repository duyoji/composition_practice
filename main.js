(function (window) {

    // import
    var Button      = Application.Views.Button;
    var ConsoleType = Application.Views.Compositions.ButtonTypes.ConsoleType;
    var AlertType   = Application.Views.Compositions.ButtonTypes.AlertType;

    window.onload = function () {

        // ConsoleType
        var consoleType = new ConsoleType();
        var cButton1      = new Button(consoleType, 'cButton1');
        var cButton2      = new Button(consoleType, 'cButton2');
        cButton1.init();
        cButton1.update();
        cButton1.type();
        alert(cButton1.getName());
        cButton2.init();
        cButton2.update();
        cButton2.type();
        alert(cButton2.getName());

        // AlertType
        var alertType = new AlertType();
        var aButton1  = new Button(alertType, 'aButton1');
        var aButton2  = new Button(alertType, 'aButton2');
        aButton1.init();
        aButton1.update();
        aButton1.type();
        alert(aButton1.getName());
        aButton2.init();
        aButton2.update();
        aButton2.type();
        alert(aButton2.getName());


    };
})(window);