///<reference path="produit.ts" />
/**
 * Classe QuantiteProduit - Représente une quantité d'un type de produit
 */
var QuantiteProduit = /** @class */ (function () {
    /**
     * Constructeur
     * @param {Produit} produit Produit pour lequel on gère la quantité
     * @param {number} quantite Quantité initiale du produit
     */
    function QuantiteProduit(produit, quantite) {
        this.produit = produit;
        this.quantite = quantite;
    }
    /**
     * Retourne l'espace occupé par la quantité de produits
     * @returns Le volume occupé par la quantité de produits
     */
    QuantiteProduit.prototype.getVolume = function () {
        return this.produit.getCoutStockage() * this.quantite;
    };
    /**
     * Retourne le nombre de personnes nécessaires à la fabrication de la quantité de produits
     * @returns Le nombre de personnes nécessaires à la fabrication de la quantité de produit
     */
    QuantiteProduit.prototype.getRessourcesHumaines = function () {
        return this.produit.getCoutRessourcesHumaines() * this.quantite;
    };
    /**
     * Retourne la quantité de produits
     * @returns La quantité de produits
     */
    QuantiteProduit.prototype.getQuantite = function () {
        return this.quantite;
    };
    /**
     * Retourne le type de produit pour lequel on gère la quantité
     * @returns Le type de produit géré
     */
    QuantiteProduit.prototype.getType = function () {
        return this.produit.getType();
    };
    /**
     * Ajoute une certaine quantité de produits
     * @param {number} quantite Quantité à ajouter
     */
    QuantiteProduit.prototype.ajouter = function (quantite) {
        this.quantite += quantite;
    };
    /**
     * Retire une certaine quantité de produits
     * @param {number} quantite Quantité de produits à retirer
     * @returns Quantité de produits réellement retirée (si quantite > quantite gérée)
     */
    QuantiteProduit.prototype.retirer = function (quantite) {
        var quantiteRetiree = quantite;
        if (quantite > this.quantite) {
            quantiteRetiree = this.quantite;
            this.quantite = 0;
        }
        else
            this.quantite -= quantite;
        return quantiteRetiree;
    };
    return QuantiteProduit;
}());
//# sourceMappingURL=quantite-produit.js.map