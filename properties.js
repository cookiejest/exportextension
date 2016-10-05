define([], function() {
    'use strict';

/*
        //console.log(qlik);

        var app = qlik.currApp(this);

        var qlikobjectcomplete = [];

        app.getAppObjectList('sheet', function(reply) {

            //console.log(reply.qAppObjectList.qItems);

            var qliksheets = reply.qAppObjectList.qItems;


            console.log('EXPORTEXTENSION: Loop through sheets');
            console.log(qliksheets.length);
            //Loop through sheets
            for (var sheetnum = 0; sheetnum < qliksheets.length; sheetnum++) {

                //console.log(sheetnum);
                console.log('EXPORTEXTENSION: Sheet' + qliksheets[sheetnum].qInfo.qId);
                console.log(qliksheets[sheetnum].qData.cells);

                var qlikobjects = qliksheets[sheetnum].qData.cells;
                var sheetid = qliksheets[sheetnum].qInfo.qId;


                //loop through objects
                for (var objectnum = 0; objectnum < qlikobjects.length; objectnum++) {


                    var objectid = qlikobjects[objectnum].name;

                    console.log('EXPORTEXTENSION: ObjectId'+ objectid);


                    //loop through sheets
                    //console.log(app.getObject("FkdxuP").qInfo);
                    app.getObjectProperties(qlikobjects[objectnum].name).then(function(model) {

                        //console.log(model);
                        console.log('EXPORTEXTENSION: Sheet: ' + sheetid + ' ObjectId: ' + objectid + ' Title: ' + model.properties.title);

                        //this.title = model.properties.title;
                        //console.log(model.properties.title);


                        qlikobjectcomplete.push({objectid: objectid, objecttitle: model.properties.title});


                    });

                }
            }
            console.log('complete object');
            console.log(qlikobjectcomplete);


        });
*/

    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var myCustomSection = {
        component: "expandable-items",
        label: "Export Config",
        items: {
            buttonaction: {
                label: 'Button Action Settings',
                items: {
                    exportobjectid: {
                        ref: "buttondata.exportobjectid",
                        label: "Object ID for export",
                        type: "string",
                        expression: "optional"
                    },
                    actionmode: {
                        label: "Action Mode",
                        ref: "buttondata.ActionMode",
                        type: "boolean",
                        component: "switch",
                        options: [{
                            value: true,
                            label: "Store On Server"
                        }, {
                            value: false,
                            label: "Send to User"
                        }],
                        defaultValue: true
                    },
                    storagefilename: {
                        ref: "buttondata.storagefilename",
                        label: "Storage File Name",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            console.log(data);
                            return data.buttondata.ActionMode;
                        }
                    },
                    storagelocation: {
                        label: "Storage Location",
                        ref: "buttondata.StorageLocation",
                        type: "string",
                        component: "radiobuttons",
                        options: [{
                            value: "FTP Server",
                            label: "FTP Server"
                        }, {
                            value: "Server Folder",
                            label: "Server Folder"
                        }],
                        defaultValue: true,
                        show: function(data) {
                            return data.buttondata.ActionMode;
                        }
                    },
                    storagepath: {
                        ref: "buttondata.storagepath",
                        label: "Server Storage Path",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            if(data.buttondata.StorageLocation == 'Server Folder' &&  data.buttondata.ActionMode==true) {return true} else {return false};
                        }
                    },
                    ftppath: {
                        ref: "buttondata.ftp.path",
                        label: "FTP Path",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            if(data.buttondata.StorageLocation == 'FTP Server' && data.buttondata.ActionMode==true) {return true} else {return false};
                        }
                    },
                    ftpuser: {
                        ref: "buttondata.ftp.user",
                        label: "FTP User",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            if(data.buttondata.StorageLocation == 'FTP Server' && data.buttondata.ActionMode==true) {return true} else {return false};
                        }
                    },
                    ftppassword: {
                        ref: "buttondata.ftp.password",
                        label: "FTP Password",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            if(data.buttondata.StorageLocation == 'FTP Server' && data.buttondata.ActionMode==true) {return true} else {return false};
                        }
                    },
                    ftpport: {
                        ref: "buttondata.ftp.port",
                        label: "FTP Port",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            if(data.buttondata.StorageLocation == 'FTP Server' && data.buttondata.ActionMode==true) {return true} else {return false};
                        }
                    }
                }
            }
        }
    };

    var myDebugSection = {
        component: "expandable-items",
        label: "Debug Mode",
        items: {
            debugmode: {
                type: "boolean",
                label: "Debug Mode",
                ref: "DebugMode",
                defaultValue: true
            }
        }
    };


    var appearanceSection = {
        uses: "settings",
        items: {
            buttoncolor: {
                ref: "ButtonColor",
                label: "Button Color (Hex Code)",
                type: "string",
                expression: "optional"
            },
            buttontext: {
                ref: "ButtonText",
                label: "Button Text",
                type: "string",
                expression: "optional"
            }
        }
    };

    // *****************************************************************************
    // Main properties panel definition
    // Only what is defined here is returned from properties.js
    // *****************************************************************************
    return {

        type: "items",
        component: "accordion",
        items: {
            customSection: myCustomSection,
            Settings: appearanceSection,
            debugSection: myDebugSection,
            addons: {
                uses: "addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling"
                    }
                }
            }
        }
    };
});

/*
            notificationposition : {
                type: "string",
                label: "Position",
                component: "dropdown",
                ref: "notificationposition", 
                options: [
                {
                    value: "below",
                    label: "Below"
                },{
                    value: "left",
                    label: "Left"
                },{
                    value: "right",
                    label: "Right"
                },{
                    value: "above",
                    label: "Above"
                }],
                defaultValue: "below"
            },
            */
