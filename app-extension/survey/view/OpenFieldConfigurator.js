/*
 * File: app/view/OpenFieldConfigurator.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.view.OpenFieldConfigurator', {
    extend: 'Ext.window.Window',
    alias: 'widget.OpenFieldConfigurator',

    requires: [
        'Rubedo.view.CKEField'
    ],

    localiserId: 'formOpenQuestionConfigurator',
    id: 'OpenFieldConfigurator',
    width: 736,
    resizable: false,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Editeur de question ouverte',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'validateBtn',
                            id: 'OpenFieldConfiguratorSubmit',
                            iconCls: 'ouiSpetit',
                            text: 'Valider',
                            listeners: {
                                click: {
                                    fn: me.onOpenFieldConfiguratorSubmitClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    border: 0,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'CKEField',
                            CKETBConfig: 'Standard',
                            localiserId: 'questionLabelField',
                            fieldLabel: 'Intitulé de la question',
                            labelAlign: 'top',
                            name: 'fieldLabel',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            localiserId: 'questionCodeField',
                            anchor: '100%',
                            fieldLabel: 'Code de la question',
                            labelWidth: 140,
                            name: 'qNb'
                        },
                        {
                            xtype: 'textfield',
                            localiserId: 'questionHelpTextField',
                            anchor: '100%',
                            fieldLabel: 'Bulle d\'aide',
                            labelWidth: 140,
                            name: 'tooltip'
                        },
                        {
                            xtype: 'checkboxfield',
                            localiserId: 'questionMandatoryField',
                            anchor: '100%',
                            fieldLabel: 'Obligatoire',
                            labelWidth: 140,
                            name: 'mandatory',
                            boxLabel: '',
                            inputValue: 'true',
                            uncheckedValue: 'false'
                        },
                        {
                            xtype: 'radiogroup',
                            localiserId: 'questionFieldTypeRadioGroup',
                            fieldLabel: 'Type de champ',
                            labelSeparator: ' ',
                            labelWidth: 140,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    localiserId: 'questionTextRadio',
                                    name: 'fieldType',
                                    boxLabel: 'Texte',
                                    inputValue: 'textfield'
                                },
                                {
                                    xtype: 'radiofield',
                                    localiserId: 'questionTextareaRadio',
                                    width: 100,
                                    name: 'fieldType',
                                    boxLabel: 'Commentaire',
                                    inputValue: 'textareafield'
                                },
                                {
                                    xtype: 'radiofield',
                                    localiserId: 'questionNumberRadio',
                                    name: 'fieldType',
                                    boxLabel: 'Nombre',
                                    inputValue: 'numberfield'
                                },
                                {
                                    xtype: 'radiofield',
                                    localiserId: 'questionDateRadio',
                                    name: 'fieldType',
                                    boxLabel: 'Date',
                                    inputValue: 'datefield'
                                },
                                {
                                    xtype: 'radiofield',
                                    localiserId: 'questionTimeRadio',
                                    name: 'fieldType',
                                    boxLabel: 'Horaire',
                                    inputValue: 'timefield'
                                }
                            ],
                            listeners: {
                                change: {
                                    fn: me.onRadiogroupChange,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    activeItem: 1,
                    id: 'CameleonicFormContainer',
                    layout: {
                        type: 'card'
                    },
                    items: [
                        {
                            xtype: 'form',
                            border: 0,
                            itemId: 'textfield',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'minLengthField',
                                    anchor: '100%',
                                    fieldLabel: 'Longueur min',
                                    labelWidth: 140,
                                    name: 'minLength',
                                    allowDecimals: false,
                                    minValue: 0
                                },
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'maxLengthField',
                                    anchor: '100%',
                                    fieldLabel: 'Longueur max',
                                    labelWidth: 140,
                                    name: 'maxLength',
                                    allowDecimals: false,
                                    minValue: 0
                                },
                                {
                                    xtype: 'combobox',
                                    localiserId: 'validationField',
                                    anchor: '100%',
                                    fieldLabel: 'Validation',
                                    labelWidth: 140,
                                    name: 'vtype',
                                    forceSelection: true,
                                    store: [
                                        'alpha',
                                        'alphanum',
                                        'email',
                                        'url'
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            border: 0,
                            itemId: 'textareafield',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'minLengthField',
                                    anchor: '100%',
                                    fieldLabel: 'Longueur min',
                                    labelWidth: 140,
                                    name: 'minLength',
                                    allowDecimals: false,
                                    minValue: 0
                                },
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'maxLengthField',
                                    anchor: '100%',
                                    fieldLabel: 'Longueur max',
                                    labelWidth: 140,
                                    name: 'maxLength',
                                    allowDecimals: false,
                                    minValue: 0
                                },
                                {
                                    xtype: 'combobox',
                                    localiserId: 'validationField',
                                    anchor: '100%',
                                    fieldLabel: 'Validation',
                                    labelWidth: 140,
                                    name: 'vtype',
                                    forceSelection: true,
                                    store: [
                                        'alpha',
                                        'alphanum',
                                        'email',
                                        'url'
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            border: 0,
                            itemId: 'numberfield',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'minValueField',
                                    anchor: '100%',
                                    fieldLabel: 'Valeur min',
                                    labelWidth: 140,
                                    name: 'minValue'
                                },
                                {
                                    xtype: 'numberfield',
                                    localiserId: 'maxValueField',
                                    anchor: '100%',
                                    fieldLabel: 'Valeur max',
                                    labelWidth: 140,
                                    name: 'maxValue'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    localiserId: 'allowDecimalsField',
                                    anchor: '100%',
                                    fieldLabel: 'Décimales',
                                    labelWidth: 140,
                                    name: 'allowDecimals',
                                    boxLabel: ''
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            border: 0,
                            itemId: 'datefield',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'datefield',
                                    localiserId: 'minValueField',
                                    anchor: '100%',
                                    fieldLabel: 'Valeur min',
                                    labelWidth: 140,
                                    name: 'minValue'
                                },
                                {
                                    xtype: 'datefield',
                                    localiserId: 'maxValueField',
                                    anchor: '100%',
                                    fieldLabel: 'Valeur max',
                                    labelWidth: 140,
                                    name: 'maxValue'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            border: 0,
                            itemId: 'timefield',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'timefield',
                                    localiserId: 'minValueField',
                                    anchor: '100%',
                                    fieldLabel: 'Valeur min',
                                    labelWidth: 140,
                                    name: 'minValue'
                                },
                                {
                                    xtype: 'timefield',
                                    localiserId: 'maxValueField',
                                    anchor: '100%',
                                    fieldLabel: 'Valeur max',
                                    labelWidth: 140,
                                    name: 'maxValue'
                                }
                            ]
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onOpenFieldConfiguratorAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onOpenFieldConfiguratorSubmitClick: function(button, e, eOpts) {
        var initialValues = Ext.clone(button.up().up().initialItemConfig);
        var myId = Ext.clone(button.up().up().targetedId);
        var form = button.up().up().getComponent(0).getForm();
        var form2=Ext.getCmp("CameleonicFormContainer").getLayout().getActiveItem().getForm();
        if ((form.isValid())&&(form2.isValid())) {
            var newData = Ext.clone(form.getFieldValues());
            var partData = form2.getValues();
            Ext.Object.each(partData, function(key,value,it){
                if (Ext.isEmpty(value)){
                    it[key]=undefined;
                }
            });
            Ext.apply(newData,partData);
            initialValues.fieldType=newData.fieldType;
            initialValues.label=newData.fieldLabel;
            initialValues.tooltip=newData.tooltip;
            initialValues.qNb=newData.qNb;
            delete newData.fieldType;
            delete newData.fieldLabel;
            delete newData.tooltip;
            initialValues.fieldConfig=newData;
            Ext.getCmp(myId).itemConfig=initialValues;
            button.up().up().close();
            Ext.getCmp(myId).sync();
        }
    },

    onRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        Ext.getCmp("CameleonicFormContainer").getLayout().setActiveItem(Ext.getCmp("CameleonicFormContainer").getComponent(newValue.fieldType));
    },

    onOpenFieldConfiguratorAfterRender: function(component, eOpts) {
        var initialValues = Ext.clone(component.initialItemConfig.fieldConfig);
        initialValues.fieldType= Ext.clone(component.initialItemConfig.fieldType);
        initialValues.fieldLabel=Ext.clone(component.initialItemConfig.label);
        initialValues.tooltip=Ext.clone(component.initialItemConfig.tooltip);
        initialValues.qNb=Ext.clone(component.initialItemConfig.qNb);
        component.getComponent(0).getForm().setValues(initialValues);
        var task = new Ext.util.DelayedTask(function(){
            Ext.getCmp("CameleonicFormContainer").getLayout().getActiveItem().getForm().setValues(initialValues);
        });
        task.delay(200);
    }

});