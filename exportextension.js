define(["./properties", "qlik", "jquery", "client.utils/routing"],
    function(Props, qlik, $, Routing) {
        'use strict';

        $('<link rel="stylesheet" type="text/css" href="/extensions/exportextension/exportextension.css">').appendTo("head");


        //Function to enable console logging in debug mode.
        var logger = function() {
            var oldConsoleLog = null;
            var pub = {};

            pub.enableLogger = function enableLogger() {
                if (oldConsoleLog == null)
                    return;

                window['console']['log'] = oldConsoleLog;
            };

            pub.disableLogger = function disableLogger() {
                oldConsoleLog = console.log;
                window['console']['log'] = function() {};
            };

            return pub;
        }();


        return {
            // new object properties
            initialProperties: {
                qHyperCubeDef: {
                    // Custom properties
                    qContextMode: "CurrentSelections",
                    qDebugMode: true
                }
            },

            definition: Props,
            paint: function($element, layout) {

                    //console.log('LAYOUT INFO');
                    //console.log(layout);
                    //add your rendering code here
                    //$element.html( "TalktoQlik" );
                    //console.log($('#myonoffswitch').is(':checked'));

                    if (layout.ButtonText) {
                        var Buttontext = layout.ButtonText;
                    } else {
                        var Buttontext = '';
                    }

                    var HTMLcontent = '<a class="button">' + Buttontext + '</button>';

                    $element.html(HTMLcontent);

                    console.log(layout.ButtonColor);
                    console.log(layout.ButtonText);



                    $(".button").css({
                        "background-color": layout.ButtonColor,
                        "border": "none",
                        "color": "white",
                        "padding": "15px 32px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px"
                    });

                    //
                    alert(layout.buttondata.ActionMode);

                    if (layout.buttondata.ActionMode == true) {
                        //EXPORT TO SERVER
                        $(".button").click(function() {
                            console.log('SEND DATA TO SERVER');
                            console.log(layout.buttondata);




                            $.post("/somepath", layout.buttondata, function() {
                                    alert("success");
                                })
                                .done(function() {
                                    alert("done");
                                })
                                .fail(function() {
                                    alert("error");
                                })
                                .always(function() {
                                    alert("finished");
                                });

                        });

                    } else {


                        //EXPORT TO BROWSER
                        $(".button").click(function() {
                            alert("Send to user");
                        });


                    }
                    //$(".button").


                    if (layout.DebugMode == undefined) {
                        var debugmode = false;


                    } else {
                        var debugmode = layout.DebugMode;
                    }


                    if (debugmode == true) {
                        logger.enableLogger();
                    } else {
                        logger.disableLogger();
                    }




                } //end return
                ////////////////////////////////////////////////////////

        } //close function
    }); //close define
