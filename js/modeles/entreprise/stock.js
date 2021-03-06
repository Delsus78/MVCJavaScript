///<reference path="quantite-produit.ts" />
///<reference path="velo.ts" />
///<reference path="scooter.ts" />
///<reference path="voiture.ts" />
/**
 * Classe Stock - représente le stock de produits de l'entreprise
 */
var Stock = /** @class */ (function () {
    /**
     * Constructeur
     * @param volumeStockageMax {number} Espace maximum de stockage (en unité de volume)
     */
    function Stock(volumeStockageMax) {
        this.volumeStockageMax = volumeStockageMax;
        this.produitsStockes = new Array();
        this.produitsStockes.push(new QuantiteProduit(new Velo(), 0));
        this.produitsStockes.push(new QuantiteProduit(new Scooter(), 0));
        this.produitsStockes.push(new QuantiteProduit(new Voiture(), 0));
    }
    /**
     * @return L'espace total de stockage du stock
     */
    Stock.prototype.getEspaceTotal = function () {
        return this.volumeStockageMax;
    };
    /**
     * @return Le volume d'espace libre du stock
     */
    Stock.prototype.getEspaceLibre = function () {
        var espaceLibre = this.volumeStockageMax - this.getEspaceOccupe();
        return espaceLibre;
    };
    /**
     * @return Le volume d'espace occupé du stock
     */
    Stock.prototype.getEspaceOccupe = function () {
        var espaceOccupe = 0;
        this.produitsStockes.forEach(function (produits) { espaceOccupe += produits.getQuantite(); });
        return espaceOccupe;
    };
    /**
     * Indique si un produit peut être stocké dans le stock
     * @param produit {Produit} Produit à stocker
     * @return true si l'espace disponible est suffisant pour accueillir le produit, false sinon
     */
    Stock.prototype.peutStocker = function (produit) {
        return this.getEspaceOccupe() + produit.getCoutStockage() <= this.getEspaceTotal();
    };
    /**
     * Retourne la quantité de vélos stockés
     * @return La quantité de vélos stockés
     */
    Stock.prototype.getQuantiteVelos = function () {
        return this.produitsStockes[0].getQuantite();
    };
    /**
     * Retourne la quantité de scooters stockés
     * @return La quantité de scooters stockés
     */
    Stock.prototype.getQuantiteScooters = function () {
        return this.produitsStockes[1].getQuantite();
    };
    /**
     * Retourne la quantité de voitures stockés
     * @return La quantité de voitures stockés
     */
    Stock.prototype.getQuantiteVoitures = function () {
        return this.produitsStockes[2].getQuantite();
    };
    /**
     * Stock le produit donné
     * @param produit {Produit} Produit à stocker
     * @throws Lève une exception s'il n'y a pas assez de place dans le stock
     */
    Stock.prototype.stocker = function (produit) {
        if (!this.peutStocker(produit))
            throw "Pas assez de place dans le stock ! Produit détruit !";
        var trouve = false;
        for (var iProduit = 0; !trouve && iProduit < this.produitsStockes.length; ++iProduit) {
            if (this.produitsStockes[iProduit].getType() == produit.getType()) {
                this.produitsStockes[iProduit].ajouter(1);
                trouve = true;
            }
        }
    };
    /**
     * Destock une certaine quantité de vélos
     * @param quantite {number} Quantité de vélos à destocker
     * @return La quantité réellement destockée en fonction de la quantité de vélos disponible
     */
    Stock.prototype.destockerVelos = function (quantite) {
        return this.produitsStockes[0].retirer(quantite);
    };
    /**
     * Destock une certaine quantité de scooters
     * @param quantite {number} Quantité de scooters à destocker
     * @return La quantité réellement destockée en fonction de la quantité de scooters disponible
     */
    Stock.prototype.destockerScooters = function (quantite) {
        return this.produitsStockes[1].retirer(quantite);
    };
    /**
     * Destock une certaine quantité de voitures
     * @param quantite {number} Quantité de voitures à destocker
     * @return La quantité réellement destockée en fonction de la quantité de voitures disponible
     */
    Stock.prototype.destockerVoitures = function (quantite) {
        return this.produitsStockes[2].retirer(quantite);
    };
    return Stock;
}());
//# sourceMappingURL=stock.js.map