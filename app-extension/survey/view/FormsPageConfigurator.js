/*
 * File: app/view/FormsPageConfigurator.js
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

Ext.define('Rubedo.view.FormsPageConfigurator', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormsPageConfigurator',

    localiserId: 'formPageConfigurator',
    height: 113,
    width: 389,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Editeur de page',
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
                            id: 'formPageConfiguratorSubmit',
                            iconCls: 'ouiSpetit',
                            text: 'Valider',
                            listeners: {
                                click: {
                                    fn: me.onRichTextConfiguratorSubmitClick,
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
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            localiserId: 'formPageLabelField',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'label',
                            allowBlank: false
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onWindowAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onRichTextConfiguratorSubmitClick: function(button, e, eOpts) {
        var field = button.up().up().getComponent(0).getComponent(0);
        if (field.isValid()) {
            var target=Ext.getCmp(button.up().up().targetedId);
            target.itemConfig.label=field.getValue();
            button.up().up().close();
            target.sync();
        }

    },

    onWindowAfterRender: function(component, eOpts) {
        var initialValues = Ext.clone(component.initialItemConfig);
        component.getComponent(0).getForm().setValues(initialValues);
    }

});