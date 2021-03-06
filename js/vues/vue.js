/// <reference path="../controleurs/controleur.ts" />
/// <reference path="../libs/jquery.d.ts" />
/**
 * Gestion de la vue principale de l'application
 */
var Vue = /** @class */ (function () {
    /**
     * Constructeur
     */
    function Vue() {
        //Controleur associé à la vue
        this.controleur = null;
    }
    /**
     * Initialisation de la vue
     * @param {Controleur} controleur Controleur associé à la vue
     */
    Vue.prototype.initialiser = function (controleur) {
        this.controleur = controleur;
        this.attacherEvenements();
    };
    /**
     * @todo Attache les événements click aux boutons de la page HTML
     */
    Vue.prototype.attacherEvenements = function () {
        var _this = this;
        var btnCommandMP = $('#btn-commander-matieres-premieres');
        btnCommandMP.on("click", function () {
            try {
                _this.controleur.commanderMatieresPremieres();
            }
            catch (ex) {
                _this.afficherErreur(ex);
            }
        });
        var btnRecruter = $('#btn-recruter');
        btnRecruter.on("click", function () {
            try {
                _this.controleur.recruter();
            }
            catch (ex) {
                _this.afficherErreur(ex);
            }
        });
        var btnLicencier = $('#btn-licencier');
        btnLicencier.on("click", function () {
            try {
                _this.controleur.licencier();
            }
            catch (ex) {
                _this.afficherErreur(ex);
            }
        });
        var btnProdVelo = $('#btn-produire-velo');
        btnProdVelo.on("click", function () {
            try {
                _this.controleur.produireVelo();
            }
            catch (ex) {
                //this.afficherErreur(Notification.get);
                _this.afficherErreur(ex);
            }
        });
        var btnProdScooter = $('#btn-produire-scooter');
        btnProdScooter.on("click", function () {
            try {
                _this.controleur.produireScooter();
            }
            catch (ex) {
                _this.afficherErreur(ex);
            }
        });
        var btnProdVoiture = $('#btn-produire-voiture');
        btnProdVoiture.on("click", function () {
            try {
                _this.controleur.produireVoiture();
            }
            catch (ex) {
                _this.afficherErreur(ex);
            }
        });
    };
    /**
     * Actualise l'affichage de la page
     * @param entreprise {Entreprise} Informations sur l'entreprise
     * @param consommateurs {Consommateurs} Informations sur les consommateurs
     */
    Vue.prototype.actualiser = function (entreprise, consommateurs) {
        //Actualisation des ressources
        this.actualiserRessources(entreprise);
        //Actualisation de la production
        this.actualiserProduction(entreprise);
        //Actualisation du stock
        this.actualiserStock(entreprise);
        //Actualisation du stock
        this.actualiserDemandes(consommateurs);
    };
    /**
     * @todo Actualise le niveau des ressources
     * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées les ressources
     */
    Vue.prototype.actualiserRessources = function (entreprise) {
        var stock = $('#stock > .header-ressource-quantite');
        stock.html("" + entreprise.getEspaceStockageTotal());
        var mpremieres = $('#matieres-premieres > .header-ressource-quantite');
        mpremieres.html("" + entreprise.getMatieresPremieres());
        var rhumaines = $('#ressources-humaines > .header-ressource-quantite');
        rhumaines.html("" + entreprise.getRessourcesHumainesTotal());
        var tresorerie = $('#tresorerie > .header-ressource-quantite');
        tresorerie.html("" + entreprise.getTresorerie());
    };
    /**
     * @todo Actualise la production en cours
     * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées informations de production
     */
    Vue.prototype.actualiserProduction = function (entreprise) {
        var prodVelo = $('#info-production-velo');
        prodVelo.html("" + entreprise.getQuantiteProductionVelos());
        var prodVoiture = $('#info-production-voiture');
        prodVoiture.html("" + entreprise.getQuantiteProductionVoitures());
        var prodScooter = $('#info-production-scooter');
        prodScooter.html("" + entreprise.getQuantiteProductionScooters());
    };
    /**
     * @todo Actualise le stock
     * @param entreprise {Entreprise} Entreprise pour laquelle est affiché l'état du stock
     */
    Vue.prototype.actualiserStock = function (entreprise) {
        var prodVelo = $('#info-stock-velo');
        prodVelo.html("" + entreprise.getQuantiteStockVelos());
        var prodVoiture = $('#info-stock-voiture');
        prodVoiture.html("" + entreprise.getQuantiteStockVoitures());
        var prodScooter = $('#info-stock-scooter');
        prodScooter.html("" + entreprise.getQuantiteStockScooters());
    };
    /**
     * @todo Actualise la demande des consommateurs
     * @param consommateurs {Consommateurs} Consommateurs pour lesquels sont affichées les demandes en produits
     */
    Vue.prototype.actualiserDemandes = function (consommateurs) {
        var prodVelo = $('#info-demandes-velo');
        prodVelo.html("" + consommateurs.getDemandeVelo());
        var prodVoiture = $('#info-demandes-voiture');
        prodVoiture.html("" + consommateurs.getDemandeVoiture());
        var prodScooter = $('#info-demandes-scooter');
        prodScooter.html("" + consommateurs.getDemandeScooter());
    };
    //#region Gestion des alertes
    /**
     * Affiche une erreur
     * @param erreur {string} Erreur à afficher
     */
    Vue.prototype.afficherErreur = function (erreur) {
        this.afficherAlerte(erreur, 'erreur');
    };
    /**
     * Affiche une actualité
     * @param actualite {string} Titre de l'actualité à afficher
     */
    Vue.prototype.afficherActualite = function (actualite) {
        this.afficherAlerte(actualite, 'actualite');
    };
    /**
     * Affiche l'écran de fin de partie
     */
    Vue.prototype.afficherFinPartie = function () {
        $('#ecran-fin-partie').addClass('visible');
    };
    /**
     * Affiche une alerte
     * @param titre {string} Texte de l'alerte
     * @param type {string} Type d'alerte (erreur ou actualite)
     */
    Vue.prototype.afficherAlerte = function (titre, type) {
        var _this = this;
        var alerte = $('<p></p>');
        alerte.addClass(type);
        alerte.html(titre);
        $('#alertes').append(alerte);
        //Efface l'alerte après 5 secondes
        setTimeout(function () { _this.controleur.retirerAlerte(); }, 5000);
    };
    /**
     * Efface la première alerte de la page
     */
    Vue.prototype.retirerAlerte = function () {
        $('#alertes p').eq(0).remove();
    };
    return Vue;
}());
//# sourceMappingURL=vue.js.map