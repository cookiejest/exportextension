#Qlik Export Button Extension

Use this extension to create a button that exports an object data to a CSV in either a secure folder location or back to the browser.


Navigate to another sheet with the given field name.


##Prerequisites
- Qlik Sense 2.2 or higher


##Known Limitations

1. Currently this will *only work in Chrome* and browsers that support the SpeechRecognition standard. This does not include IE11 or firefox yet.

2. The app uses capitalized field names and sheet names
	A. 'Top Customers' will work as a sheet name but 'top customers' will not.
	B. 'Customer Name' will work as a field name but  'customer name' will not.

3. Current the extension only supports English feel free to add your own languages, as long as they are supported by the annyang library then its all good.

##Settings

###Switch Settings

This will enable you to use the switch or just have it turned on by default when the extension is on the page


###Debug Mode

Debug mode will turn on/off the console logging inside the developer tools so you can see whats going on.


##Credits:
It uses the open source annyang voice recognition library.
https://www.talater.com/annyang/

###Other Contributors:
Nick Webster
Adeel Khaan
