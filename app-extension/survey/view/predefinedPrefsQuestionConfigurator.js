/*
 * File: app/view/predefinedPrefsQuestionConfigurator.js
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

Ext.define('Rubedo.view.predefinedPrefsQuestionConfigurator', {
    extend: 'Ext.window.Window',
    alias: 'widget.predefinedPrefsQuestionConfigurator',

    requires: [
        'Rubedo.view.CKEField',
        'Rubedo.view.experimentalGridField'
    ],

    localiserId: 'formOpenQuestionConfigurator',
    height: 593,
    id: 'predefinedPrefsQuestionConfigurator',
    width: 798,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Editeur de question de préférences déclarées',
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
                            id: 'OpenFieldConfiguratorSubmit1',
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
                    height: 134,
                    autoScroll: true,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'CKEField',
                            CKETBConfig: 'Standard',
                            localiserId: 'questionLabelField',
                            fieldLabel: 'Intitulé de la question',
                            labelAlign: 'top',
                            name: 'label',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            localiserId: 'questionCodeField',
                            anchor: '100%',
                            fieldLabel: 'Code de la question',
                            labelWidth: 140,
                            name: 'qNb',
                            allowBlank: false
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
                            xtype: 'numberfield',
                            anchor: '100%',
                            id: 'numberOfOptionsBearer',
                            fieldLabel: 'Nombre d\'options',
                            labelWidth: 140,
                            name: 'numberOfOptions',
                            allowBlank: false,
                            editable: false,
                            allowDecimals: false,
                            minValue: 2
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Nombre de questions',
                            labelWidth: 140,
                            name: 'numberOfQuestions',
                            allowBlank: false,
                            editable: false,
                            allowDecimals: false,
                            minValue: 1
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Nombre de choix',
                            labelWidth: 140,
                            name: 'numberOfChoices',
                            allowBlank: false,
                            editable: false,
                            allowDecimals: false,
                            minValue: 1
                        },
                        {
                            xtype: 'container',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    title: 'Source 1 (heure)',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Question',
                                            labelWidth: 140,
                                            name: 'source1Id',
                                            allowBlank: false,
                                            editable: false,
                                            displayField: 'qNb',
                                            forceSelection: true,
                                            queryMode: 'local',
                                            store: 'FCEStore',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            anchor: '100%',
                                            fieldLabel: 'Operateur',
                                            labelWidth: 140,
                                            name: 'source1Operator',
                                            submitValue: true,
                                            value: '+/-'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    margins: '0 0 0 20',
                                    title: 'Source 2 (prix)',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Question',
                                            labelWidth: 140,
                                            name: 'source2Id',
                                            allowBlank: false,
                                            editable: false,
                                            displayField: 'qNb',
                                            forceSelection: true,
                                            queryMode: 'local',
                                            store: 'FCEStore',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            anchor: '100%',
                                            fieldLabel: 'Operateur',
                                            labelWidth: 140,
                                            name: 'source2Operator',
                                            submitValue: true,
                                            value: 'x'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'experimentalGridField',
                            fieldLabel: 'Plan d\'expérience',
                            labelWidth: 140,
                            name: 'experiencePlan'
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
        if (form.isValid()) {
            var newData = Ext.clone(form.getFieldValues());
            Ext.apply(initialValues,newData);
            Ext.getCmp(myId).itemConfig=initialValues;
            button.up().up().close();
            Ext.getCmp(myId).sync();
        }
    },

    onOpenFieldConfiguratorAfterRender: function(component, eOpts) {
        var initialValues = Ext.clone(component.initialItemConfig);
        component.getComponent(0).getForm().setValues(initialValues);
    }

});