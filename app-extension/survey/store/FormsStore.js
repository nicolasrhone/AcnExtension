/*
 * File: app/store/FormsStore.js
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

Ext.define('Rubedo.store.FormsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.FormsStore',

    requires: [
        'Rubedo.model.formModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Forms',
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.formModel',
            storeId: 'FormsStore',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'forms/create',
                    read: 'forms',
                    update: 'forms/update',
                    destroy: 'forms/delete'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});