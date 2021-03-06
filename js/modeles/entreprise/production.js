///<reference path="quantite-produit.ts" />
///<reference path="velo.ts" />
///<reference path="scooter.ts" />
///<reference path="voiture.ts" />
/**
 * Classe Production - représente les produits en cours de fabrication
 */
var Production = /** @class */ (function () {
    /**
     * Constructeur
     */
    function Production() {
        this.produitsFabriques = new Array();
        this.produitsFabriques.push(new QuantiteProduit(new Velo(), 0));
        this.produitsFabriques.push(new QuantiteProduit(new Scooter(), 0));
        this.produitsFabriques.push(new QuantiteProduit(new Voiture(), 0));
    }
    /**
     * Met une certaine quantité d'un certain produit en production
     * @param {Produit} produit Produit à produire
     * @param {number} quantite Quantité du produit à produire
     */
    Production.prototype.produire = function (produit, quantite) {
        var trouve = false;
        for (var iProduit = 0; !trouve && iProduit < this.produitsFabriques.length; ++iProduit) {
            if (this.produitsFabriques[iProduit].getType() == produit.getType()) {
                this.produitsFabriques[iProduit].ajouter(quantite);
                trouve = true;
            }
        }
    };
    /**
     * Retire une certaine quantité de produits finis de la production
     * @param {Produit} produit Produit à retirer de la production
     * @param {number} quantite Quantité de produits à retirer
     */
    Production.prototype.terminer = function (produit, quantite) {
        var trouve = false;
        for (var iProduit = 0; !trouve && iProduit < this.produitsFabriques.length; ++iProduit) {
            if (this.produitsFabriques[iProduit].getType() == produit.getType()) {
                this.produitsFabriques[iProduit].retirer(quantite);
                trouve = true;
            }
        }
    };
    /**
     * Retourne la quantité de vélos en production
     * @returns Nombre de vélos en production
     */
    Production.prototype.getQuantiteVelos = function () {
        return this.produitsFabriques[0].getQuantite();
    };
    /**
     * Retourne la quantité de scooters en production
     * @returns Nombre de scooters en production
     */
    Production.prototype.getQuantiteScooters = function () {
        return this.produitsFabriques[1].getQuantite();
    };
    /**
     * Retourne la quantité de voitures en production
     * @returns Nombre de voitures en production
     */
    Production.prototype.getQuantiteVoitures = function () {
        return this.produitsFabriques[2].getQuantite();
    };
    /**
      * Retourne le cout total en ressources humaines représenté par l'ensemble des produits en cours de fabrication
      */
    Production.prototype.getCoutRessourcesHumaines = function () {
        var coutRessourcesHumaines = 0;
        this.produitsFabriques.forEach(function (produits) {
            coutRessourcesHumaines += produits.getRessourcesHumaines();
        });
        return coutRessourcesHumaines;
    };
    return Production;
}());
//# sourceMappingURL=production.js.map