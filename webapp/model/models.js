/* webapp/model/models.js */
sap.ui.define(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/model/BindingMode"
  ],
  function (JSONModel, Device, BindingMode) {
    "use strict";

    return {
      /**
       * Provides runtime information for the device the UI5 app is running on
       * @returns {sap.ui.model.json.JSONModel} The device model.
       */
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode(BindingMode.OneWay);
        return oModel;
      }
    };
  }
);
