/*
 * File: app/view/CKEField.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.view.CKEField', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.CKEField',

    fieldLabel: 'Label',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                afterrender: {
                    fn: me.onTextareafieldAfterRender,
                    scope: me
                },
                beforedestroy: {
                    fn: me.onTextareafieldBeforeDestroy,
                    scope: me
                },
                errorchange: {
                    fn: me.onTextareafieldErrorChange,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onTextareafieldAfterRender: function(component, eOpts) {
        var myTBConfig=[
            { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
            { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo',"Source"  ] },
            { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },


            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
            { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},


           /* { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },*/
            { name: 'colors', items: [ 'TextColor', '-','BGColor' ] },
            { name: 'tools', items: [ 'Maximize', '-','ShowBlocks' ] },
            { name: 'links', items: [ 'Link', "Rubedolink", 'Unlink','-','Anchor' ] },

            { name: 'insert', items: [ 'Image',  '-', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak' ] }
        ];
        if (component.CKETBConfig=="Standard"){
            myTBConfig=[
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                { name: 'colors', items: [ 'TextColor','BGColor','-', 'Scayt' ] },
                { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
                { name: 'insert', items: [ 'Image',  '-', 'Table', 'SpecialChar', 'PageBreak', 'Link', "Rubedolink", 'Unlink'] },
                { name: 'managing', items: [ 'Maximize','-','Undo', 'Redo', "Source"  ] }
            ];
        } else if (component.CKETBConfig=="Basic"){
            myTBConfig=[
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline','Strike', '-', 'RemoveFormat' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-',  'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock','-','Image']},
                { name: 'colors', items: [ 'TextColor','BGColor' ,'-', 'Scayt'] },
                { name: 'styles', items: [ 'Font', 'FontSize' ] }


            ];
        } else if (component.CKETBConfig=="Email"){
            myTBConfig=[
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline','Strike', '-', 'RemoveFormat' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-',  'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                { name: 'colors', items: [ 'TextColor','BGColor' ,'-', 'Scayt'] },
                { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
                { name: 'insert', items: [ 'Image',  '-', 'SpecialChar', 'Link', "Rubedolink", 'Unlink'] },
                { name: 'managing', items: [ 'Maximize','-','Undo', 'Redo',"Source"  ] }


            ];
        }

        var targetId = component.getInputId();
        if (Ext.isEmpty(Ext.getStore("CurrentUserDataStore"))){
            var userLanguage="en";
        } else {
            var userLanguage=Ext.getStore("CurrentUserDataStore").getRange()[0].get("language");
        }
        if (Ext.isEmpty(userLanguage)){
            userLanguage='en';
        }
        component.editor= CKEDITOR.replace(targetId,{toolbar:  myTBConfig, allowedContent:true, contentsCss:"/theme/default/css/rubedo-all.css", language:userLanguage, extraPlugins:'rubedolink,stylesheetparser',resize_enabled:false, filebrowserImageBrowseUrl:"ext-finder?type=Image", filebrowserImageUploadUrl:null});
        component.editor.on("maximize",function(){
            var mainWindow=component.findParentByType("window");
            if (!Ext.isEmpty(mainWindow)){
                var task3 = new Ext.util.DelayedTask(function(){
                    mainWindow.doLayout();
                });
                task3.delay(200);
            }
        });
        component.editor.on('instanceReady', function(){
            if (component.CKETBConfig=="Email"){
                component.editor.dataProcessor.htmlFilter.addRules(
                    {
                        elements:
                        {
                            $: function (element) {
                                // Output dimensions of images as width and height
                                if (element.name == 'img') {
                                    //compensate for old renderer
                                    if(element.attributes.src&&element.attributes.src.indexOf("http://")==-1){
                                        element.attributes.src="http://"+window.location.host+element.attributes.src;
                                    }
                                    if(element.attributes["data-cke-saved-src"]&&element.attributes["data-cke-saved-src"].indexOf("http://")==-1){
                                        element.attributes["data-cke-saved-src"]="http://"+window.location.host+element.attributes["data-cke-saved-src"];
                                    }
                                    var style = element.attributes.style;

                                    if (style) {
                                        // Get the width from the style.
                                        var match = /(?:^|\s)width\s*:\s*(\d+)px/i.exec(style),
                                            width = match && match[1];

                                        // Get the height from the style.
                                        match = /(?:^|\s)height\s*:\s*(\d+)px/i.exec(style);
                                        var height = match && match[1];

                                        // Get the align from the style

                                        var match = /(?:^|\s)float\s*:\s*(left|right)/i.exec(style),
                                            align = match && match[1];

                                        // Get the hspace and vspace from the style

                                        var match =  /(?:^|\s)margin\s*:\s*(\d+)px\s*(\d+)px/i.exec(style);
                                        var vspace = match && match[1];
                                        var hspace = match && match[2];

                                        if ((!vspace)&&(!hspace)){
                                            var match =  /(?:^|\s)margin\s*:\s*(\d+)px/i.exec(style);
                                            var hvspace=match && match[1];
                                        }

                                        if (hvspace) {
                                            element.attributes.style = element.attributes.style.replace(/(?:^|\s)margin\s*:\s*(\d+)px;?/i, '');
                                            element.attributes.vspace = hvspace;
                                            element.attributes.hspace = hvspace;
                                        }

                                        if (vspace) {
                                            element.attributes.style = element.attributes.style.replace(/(?:^|\s)margin\s*:\s*(\d+)px\s*(\d+)px;?/i, '');
                                            element.attributes.vspace = vspace;
                                        }

                                        if (hspace) {
                                            element.attributes.style = element.attributes.style.replace(/(?:^|\s)margin\s*:\s*(\d+)px\s*(\d+)px;?/i, '');
                                            element.attributes.hspace = hspace;
                                        }


                                        if (width) {
                                            element.attributes.style = element.attributes.style.replace(/(?:^|\s)width\s*:\s*(\d+)px;?/i, '');
                                            element.attributes.width = width;
                                        }

                                        if (height) {
                                            element.attributes.style = element.attributes.style.replace(/(?:^|\s)height\s*:\s*(\d+)px;?/i, '');
                                            element.attributes.height = height;
                                        }

                                        if (align) {
                                            element.attributes.style = element.attributes.style.replace(/(?:^|\s)float\s*:\s*(left|right);?/i, '');
                                            element.attributes.align = align;
                                        }
                                    }
                                }



                                if (!element.attributes.style)
                                    delete element.attributes.style;

                                return element;
                            }
                        }
                    });



            }
            component.up().doLayout();
            component.editor.document.getDocumentElement().on('click', function(){
                component.getEl().dom.click();
            });
            component.editor.on('blur', function(){
                component.validate();
            });
        });

    },

    onTextareafieldBeforeDestroy: function(component, eOpts) {
        try {component.editor.destroy();} catch(err) {
        console.log("cke destroy anomaly");
        }
    },

    onTextareafieldErrorChange: function(labelable, error, eOpts) {
        var me = this;
        if (!Ext.isEmpty(error)){
            if (!me.editor.container.hasClass("ckefail")){
                me.editor.container.addClass("ckefail");
            }
        } else {
            if (me.editor.container.hasClass("ckefail")){
                me.editor.container.removeClass("ckefail");
            }

        }
    },

    getValue: function() {
        return(this.getRawValue());
    },

    setValue: function(value) {
        if (typeof(ContentContributor)!="undefined"){
        try{
            var me=this;
            if (!Ext.isEmpty(value)){
            var task = new Ext.util.DelayedTask(function(){
            me.editor.setData(value);
                });
            task.delay(200);
            }
        } catch (err) {
        }
        } else {
        var me=this;
        if (Ext.isDefined(me.editor)) {
            me.editor.setData(value);
        } else {
            me.value=value;
            me.on("afterrender",function(){
                me.editor.setData(value);
            });
        }
        }
    },

    getRawValue: function() {
        var me=this;
        if (Ext.isDefined(me.editor)) {
            return(me.editor.getData());
        } else {
            return(me.value);
        }
    },

    setReadOnly: function(readOnly) {
        try {
            var me = this,
                inputEl = me.inputEl;
            readOnly = !!readOnly;
            me[readOnly ? 'addCls' : 'removeCls'](me.readOnlyCls);
            me.readOnly = readOnly;
            if (inputEl) {
                inputEl.dom.readOnly = readOnly;
            } else if (me.rendering) {
                me.setReadOnlyOnBoxReady = true;
            }
            me.fireEvent('writeablechange', me, readOnly);
            me.editor.setReadOnly(readOnly);
        } catch (err){
            console.log("ckeditor readonly anomaly");
        }
    }

});