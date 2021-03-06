/*
 * File: app/view/FormsEditContainer.js
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

Ext.define('Rubedo.view.FormsEditContainer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.FormsEditContainer',

    cls: 'x-portal',
    id: 'FormsEditContainer',
    minHeight: 100,
    autoScroll: true,
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        me.addEvents(
            'validatedrop',
            'beforedragover',
            'dragover',
            'beforedrop',
            'drop'
        );

        Ext.applyIf(me, {
            listeners: {
                afterrender: {
                    fn: me.onFormsEditContainerAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onFormsEditContainerAfterRender: function(component, eOpts) {
        this.dd = Ext.create('Rubedo.view.PortalDropZone', this, this.dropConfig);
    }

});