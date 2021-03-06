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
 * Représente les ressources humaines de l'entreprise
 */
var RessourcesHumaines = /** @class */ (function (_super) {
    __extends(RessourcesHumaines, _super);
    /**
     * Cosntructeur
     * @param quantite : Nombre de ressources humaines initiale
     */
    function RessourcesHumaines(quantite) {
        if (quantite === void 0) { quantite = 0; }
        return _super.call(this, 'Ressources humaines', quantite) || this;
    }
    return RessourcesHumaines;
}(Ressource));
//# sourceMappingURL=ressources-humaines.js.map