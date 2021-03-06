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
 * Classe Scooter
 */
var Scooter = /** @class */ (function (_super) {
    __extends(Scooter, _super);
    /**
     * Constructeur
     */
    function Scooter() {
        /**
         * Espace de stockage : 3
         * Matières premières : 5
         * Ressources humaines : 2
         * Temps de fabrication : 2 secondes
         * Prix de vente : 3000 €
         */
        return _super.call(this, 'Scooter', 3, 5, 2, 2, 3000) || this;
    }
    return Scooter;
}(Produit));
//# sourceMappingURL=scooter.js.map