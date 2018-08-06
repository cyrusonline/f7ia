cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
        "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
        "pluginId": "cordova-plugin-inapppurchase",
        "clobbers": [
            "inAppPurchase"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inapppurchase": "1.1.0"
}
// BOTTOM OF METADATA
});