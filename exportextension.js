define(["./properties", "qlik","jquery"], 
	function(Props, qlik,$) {
		'use strict';

	 	$('<link rel="stylesheet" type="text/css" href="/extensions/exportextension/exportextension.css">').appendTo("head");


		//console.log(qlik);

		var app = qlik.currApp(this);


		//Function to enable console logging in debug mode.
		var logger = function()
		{
		    var oldConsoleLog = null;
		    
		    var pub = {};

		    pub.enableLogger =  function enableLogger() 
		                        {
		                            if(oldConsoleLog == null)
		                                return;

		                            window['console']['log'] = oldConsoleLog;
		                        };

		    pub.disableLogger = function disableLogger()
		                        {
		                            oldConsoleLog = console.log;
		                            window['console']['log'] = function() {};
		                        };

		    return pub;
		}();


		return {
			// new object properties
			definition: Props,
			paint: function($element, layout) {
				//add your rendering code here
				//$element.html( "TalktoQlik" );
				//console.log($('#myonoffswitch').is(':checked'));


				if(layout.DefaultMode==true) {

					var HTMLcontent = '<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked><label class="onoffswitch-label" for="myonoffswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div><div id="TalkToQlikNotificationDiv"></div>';


				}


				$element.html(HTMLcontent);


				if(layout.DebugMode==undefined) {
				var debugmode = false;


				} else {
					var debugmode = layout.DebugMode;

				}


				if(debugmode==true) {
					logger.enableLogger();
				} else {
					logger.disableLogger();
				}

			}

		}//end return
		  ////////////////////////////////////////////////////////

	}//close function
}
); //close define

