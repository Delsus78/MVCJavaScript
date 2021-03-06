///<reference path="notification.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Représente une notification de type Alerte
 */
var Alerte = /** @class */ (function (_super) {
    __extends(Alerte, _super);
    /**
     * Constructeur
     * @param {string} message Message de la notification
     */
    function Alerte(message) {
        return _super.call(this, message) || this;
    }
    return Alerte;
}(Notification));
//# sourceMappingURL=alerte.js.map