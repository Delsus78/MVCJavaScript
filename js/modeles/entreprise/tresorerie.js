///<reference path="ressource.ts" />
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
 * Représente la trésorerie de l'entreprise
 */
var Tresorerie = /** @class */ (function (_super) {
    __extends(Tresorerie, _super);
    /**
     * Constructeur
     * @param montant Montant de départ posséder par l'entreprise
     */
    function Tresorerie(montant) {
        return _super.call(this, 'Trésorerie', montant) || this;
    }
    return Tresorerie;
}(Ressource));
//# sourceMappingURL=tresorerie.js.map