/**
 * Représente un taux de demande des consommateurs pour un type de produits
 */
var Demande = /** @class */ (function () {
    /**
     * Constructeur
     * @param {string} produit Type de produit concerné par la demande
     * @param {number} valeur Valeur initiale de la demande
     */
    function Demande(produit, valeur) {
        this.produit = produit;
        this.valeur = valeur;
    }
    /**
     * Retourne la valeur de la demande
     * @returns La demande des consommateurs pour ce type de produit
     */
    Demande.prototype.getValeur = function () {
        return this.valeur;
    };
    /**
     * Impact la demande des consommateurs pour ce type de produit
     * @param {number} impact Valeur de l'impact positif ou négatif
     */
    Demande.prototype.impacter = function (impact) {
        this.valeur += impact;
        if (this.valeur > 100)
            this.valeur = 100;
        else if (this.valeur < 0)
            this.valeur = 0;
    };
    return Demande;
}());
//# sourceMappingURL=demande.js.map