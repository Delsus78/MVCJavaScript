/**
 * Classe Produit
 */
var Produit = /** @class */ (function () {
    /**
     * Constructeur
     * @param type {string} Type du produit (vélo, scooter ou voiture)
     * @param coutStockage {integer} Volume nécessaire au stocakge du produit fini
     * @param coutMatieresPremieres {integer} Quantité de matière premières nécessaire à la fabrication du produit
     * @param coutRessourcesHumaines {integer} Nombre de peronnes nécessaire à la fabrication du produit
     * @param tempsFabrication {integer} Temps nécessaire à la fabrication du produit
     * @param prixVente {integer} Prix de vente du produit
     */
    function Produit(type, coutStockage, coutMatieresPremieres, coutRessourcesHumaines, tempsFabrication, prixVente) {
        this.type = type;
        this.coutStockage = coutStockage;
        this.coutMatierePremiere = coutMatieresPremieres;
        this.coutRessourcesHumaines = coutRessourcesHumaines;
        this.tempsFabrication = tempsFabrication;
        this.prixVente = prixVente;
    }
    /*
     * Accesseurs en lecture
     */
    Produit.prototype.getType = function () { return this.type; };
    Produit.prototype.getCoutStockage = function () { return this.coutStockage; };
    Produit.prototype.getCoutMatieresPremieres = function () { return this.coutMatierePremiere; };
    Produit.prototype.getCoutRessourcesHumaines = function () { return this.coutRessourcesHumaines; };
    Produit.prototype.getTempsFabrication = function () { return this.tempsFabrication; };
    Produit.prototype.getPrixVente = function () { return this.prixVente; };
    return Produit;
}());
//# sourceMappingURL=produit.js.map