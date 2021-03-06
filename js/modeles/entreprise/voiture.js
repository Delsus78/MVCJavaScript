///<reference path="produit.ts" />
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
 * Classe Voiture
 */
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    /**
     * Constructeur
     */
    function Voiture() {
        /**
         * Espace de stockage : 10
         * Matières premières : 20
         * Ressources humaines : 10
         * Temps de fabrication : 8 secondes
         * Prix de vente : 15000 €
         */
        return _super.call(this, 'Voiture', 10, 20, 10, 8, 15000) || this;
    }
    return Voiture;
}(Produit));
//# sourceMappingURL=voiture.js.map