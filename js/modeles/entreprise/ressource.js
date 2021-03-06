/**
 * Classe Ressource
 */
var Ressource = /** @class */ (function () {
    /**
     * Constructeur
     * @param nom {string} Nom de la ressource
     * @param quantite {number} Quantité initiale de ressource disponible
     */
    function Ressource(nom, quantite) {
        this.nom = nom;
        this.quantite = quantite;
    }
    /**
     * Accesseurs en lecture
     */
    Ressource.prototype.getNom = function () { return this.nom; };
    Ressource.prototype.getQuantite = function () { return this.quantite; };
    /**
     * Ajoute une certaine quantité de ressource
     * @param {number} Quantité de ressource à ajouter
     */
    Ressource.prototype.ajouter = function (quantite) {
        this.quantite += quantite;
    };
    /**
     * Retire une certaine quantité de ressource
     * @param {number} Quantité de ressource à retirer
     * @throws Lève une exception si la quantité de ressource à retirer est supérieure à la quantité disponible.
     */
    Ressource.prototype.retirer = function (quantite) {
        if (this.quantite < quantite)
            throw "Ressource::retirer - Pas assez de " + this.getNom() + " disponible.";
        this.quantite -= quantite;
    };
    return Ressource;
}());
//# sourceMappingURL=ressource.js.map