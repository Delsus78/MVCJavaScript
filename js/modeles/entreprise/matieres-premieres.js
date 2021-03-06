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
 * Représente les matières premières de l'entreprise
 */
var MatieresPremieres = /** @class */ (function (_super) {
    __extends(MatieresPremieres, _super);
    /**
     * Constructeur
     * @param quantite Quantite de matières premières initiale
     */
    function MatieresPremieres(quantite) {
        if (quantite === void 0) { quantite = 0; }
        return _super.call(this, 'Matières premières', quantite) || this;
    }
    return MatieresPremieres;
}(Ressource));
//# sourceMappingURL=matieres-premieres.js.map