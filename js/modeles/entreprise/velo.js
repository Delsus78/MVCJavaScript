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
 * Classe Vélo
 */
var Velo = /** @class */ (function (_super) {
    __extends(Velo, _super);
    /**
     * Constructeur
     */
    function Velo() {
        /**
         * Espace de stockage : 1
         * Matières premières : 2
         * Ressources humaines : 1
         * Temps de fabrication : 1 secondes
         * Prix de vente : 600 €
         */
        return _super.call(this, 'Vélo', 1, 1, 1, 1, 600) || this;
    }
    return Velo;
}(Produit));
//# sourceMappingURL=velo.js.map