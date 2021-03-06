///<reference path="../patterns/observateur.ts" />
///<reference path="../patterns/sujet.ts" />
///<reference path="../patterns/erreur.ts" />
///<reference path="stock.ts" />
///<reference path="matieres-premieres.ts" />
///<reference path="ressources-humaines.ts" />
///<reference path="tresorerie.ts" />
///<reference path="production.ts" />
///<reference path="velo.ts" />
///<reference path="scooter.ts" />
///<reference path="voiture.ts" />
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
 * Classe Entreprise (partie du modèle)
 */
var Entreprise = /** @class */ (function (_super) {
    __extends(Entreprise, _super);
    /**
     * Constructeur
     * @param observateur {Observateur} Controleur qui devra être notifié des changements subis par l'entreprise
     */
    function Entreprise(observateur) {
        var _this = _super.call(this) || this;
        _this.ajouterObservateur(observateur);
        _this.stock = new Stock(100);
        _this.matieresPremieres = new MatieresPremieres(0);
        _this.ressourcesHumaines = new RessourcesHumaines(0);
        _this.tresorerie = new Tresorerie(300000);
        _this.productionEnCours = new Production();
        return _this;
    }
    /**
     * @return l'espace de stockage total de l'entreprise
     */
    Entreprise.prototype.getEspaceStockageTotal = function () {
        return this.stock.getEspaceTotal();
    };
    /**
     * @return l'espace de stockage occupé de l'entreprise
     */
    Entreprise.prototype.getEspaceStockageOccupe = function () {
        return this.stock.getEspaceOccupe();
    };
    /**
     * @return la quantité de matières premières disponibles
     */
    Entreprise.prototype.getMatieresPremieres = function () {
        return this.matieresPremieres.getQuantite();
    };
    /**
     * @return le nombre d'employés occupés
     */
    Entreprise.prototype.getRessourcesHumainesOccupees = function () {
        return this.productionEnCours.getCoutRessourcesHumaines();
    };
    /**
     * @return le nombre d'employés total
     */
    Entreprise.prototype.getRessourcesHumainesTotal = function () {
        return this.ressourcesHumaines.getQuantite();
    };
    /**
     * @return la trésorerie disponible
     */
    Entreprise.prototype.getTresorerie = function () {
        return this.tresorerie.getQuantite();
    };
    /**
     * @return la quantité de vélos en production
     */
    Entreprise.prototype.getQuantiteProductionVelos = function () {
        return this.productionEnCours.getQuantiteVelos();
    };
    /**
     * @return la quantité de scooters en production
     */
    Entreprise.prototype.getQuantiteProductionScooters = function () {
        return this.productionEnCours.getQuantiteScooters();
    };
    /**
     * @return la quantité de voitures en production
     */
    Entreprise.prototype.getQuantiteProductionVoitures = function () {
        return this.productionEnCours.getQuantiteVoitures();
    };
    /**
     * @return la quantité de vélos stockés
     */
    Entreprise.prototype.getQuantiteStockVelos = function () {
        return this.stock.getQuantiteVelos();
    };
    /**
     * @return la quantité de scooters stockés
     */
    Entreprise.prototype.getQuantiteStockScooters = function () {
        return this.stock.getQuantiteScooters();
    };
    /**
     * @return la quantité de voitures stockés
     */
    Entreprise.prototype.getQuantiteStockVoitures = function () {
        return this.stock.getQuantiteVoitures();
    };
    /**
     * @todo Effectue une commande de matières premières
     */
    Entreprise.prototype.commanderMatieresPremieres = function () {
        this.tresorerie.retirer(400);
        this.matieresPremieres.ajouter(100);
    };
    /**
     * @todo Recrute un nouveau salarié
     */
    Entreprise.prototype.recruter = function () {
        this.ressourcesHumaines.ajouter(1);
    };
    /**
     * @todo Licencie un salarié
     * @throws une exception s'il est impossible de licencier
     */
    Entreprise.prototype.licencier = function () {
        if (this.tresorerie.getQuantite() >= 10000) {
            this.ressourcesHumaines.retirer(1);
            this.tresorerie.retirer(10000);
        }
    };
    /**
     * @todo Paie les salaires des salariés
     */
    Entreprise.prototype.payerSalaires = function () {
        this.tresorerie.retirer(this.ressourcesHumaines.getQuantite() * 2500);
    };
    /**
     * Donne l'ordre de produire un produit
     * @param produit {Produit} Produit à produire
     */
    Entreprise.prototype.produire = function (produit) {
        this.testerProductionPossible(produit);
        this.demarrerProduction(produit);
    };
    /**
     * Vérifie que la production d'un produit est possible
     * @param produit {Produit} Produit pour lequel on souhaite vérifier que la fabrication est possible
     * @throws Lève une exception si une contrainte de fabrication n'est pas respectée
     */
    Entreprise.prototype.testerProductionPossible = function (produit) {
        if (this.matieresPremieres.getQuantite() < produit.getCoutMatieresPremieres())
            throw "Pas assez de matières premières !";
        if (!this.stock.peutStocker(produit))
            throw "Pas assez de place dans le stock !";
        if (this.ressourcesHumaines.getQuantite() - this.getRessourcesHumainesOccupees() < produit.getCoutRessourcesHumaines())
            throw "Pas assez de main d'oeuvre disponible !";
    };
    /**
     * @todo Donne l'ordre de produire un vélo
     */
    Entreprise.prototype.produireVelo = function () {
        this.produire(new Velo());
    };
    /**
     * @todo Donne l'ordre de produire un scooter
     */
    Entreprise.prototype.produireScooter = function () {
        this.produire(new Scooter());
    };
    /**
     * @todo Donne l'ordre de produire une voiture
     */
    Entreprise.prototype.produireVoiture = function () {
        this.produire(new Voiture());
    };
    /**
     * @todo Démarre la production d'un produit (attribution des ressources humaines, consommation des matière première, mise en production du produit)
     * @param produit {Produit} Produit à produire
     */
    Entreprise.prototype.demarrerProduction = function (produit) {
        var _this = this;
        this.matieresPremieres.retirer(produit.getCoutMatieresPremieres());
        this.productionEnCours.produire(produit, 1);
        setTimeout(function () { _this.acheverProduction(produit); }, produit.getTempsFabrication() * 1000);
        this.notifier();
    };
    /**
     * @todo Indique que la production du produit est terminée et place le produit fini dans le stock
     * @param produit {Produit} Produit fini à ajouter au stock
     */
    Entreprise.prototype.acheverProduction = function (produit) {
        this.stock.stocker(produit);
        this.productionEnCours.terminer(produit, 1);
        this.notifier();
    };
    /**
     * @todo Vend une certaine quantité de vélos
     * @param quantité {number} Quantité de vélos à vendre
     */
    Entreprise.prototype.vendreVelos = function (quantite) {
        if (this.stock.destockerVelos(1) != 0) {
            this.tresorerie.ajouter(new Velo().getPrixVente());
        }
    };
    /**
     * @todo Vend une certaine quantité de scooters
     * @param quantité {number} Quantité de scooters à vendre
     */
    Entreprise.prototype.vendreScooters = function (quantite) {
        if (this.stock.destockerScooters(1) != 0) {
            this.tresorerie.ajouter(new Scooter().getPrixVente());
        }
    };
    /**
     * @todo Vend une certaine quantité de voitures
     * @param quantité {number} Quantité de voitures à vendre
     */
    Entreprise.prototype.vendreVoitures = function (quantite) {
        if (this.stock.destockerVoitures(1) != 0) {
            this.tresorerie.ajouter(new Voiture().getPrixVente());
        }
    };
    return Entreprise;
}(Sujet));
//# sourceMappingURL=entreprise.js.map