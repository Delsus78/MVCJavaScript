/// <reference path="../vues/vue.ts" />;
/// <reference path="../modeles/patterns/observateur.ts" />;
/// <reference path="../modeles/patterns/alerte.ts" />;
/// <reference path="../modeles/patterns/erreur.ts" />;
/// <reference path="../modeles/entreprise/entreprise.ts" />;
/// <reference path="../modeles/consommateurs/consommateurs.ts" />;
/// <reference path="../modeles/actualites/actualites.ts" />;
/**
 * Controleur de l'application
 */
var Controleur = /** @class */ (function () {
    /**
     * Constructeur
     */
    function Controleur() {
    }
    /**
     * Inistialisation du controleur
     * @param vue la vue associée
     */
    Controleur.prototype.initialiser = function (vue) {
        this.vue = vue;
        this.vue.initialiser(this);
        this.entreprise = new Entreprise(this);
        this.consommateurs = new Consommateurs(this);
        this.actualites = new Actualites();
        this.notifier();
        this.demarrerActualite();
        this.demarrerAchats();
        this.demarrerSalaires();
    };
    /**
     * @todo Fonction de notification du controleur appelée lorsqu'un de ses sujets subit une modification
     * @param notification (facultatif) indique un message devant être transmis à la vue
     */
    Controleur.prototype.notifier = function (notification) {
        if (notification === void 0) { notification = null; }
        this.vue.actualiser(this.entreprise, this.consommateurs);
    };
    /**
     * @todo Ordonne une commande de matières premières
     */
    Controleur.prototype.commanderMatieresPremieres = function () {
        this.entreprise.commanderMatieresPremieres();
        this.notifier();
    };
    /**
     * @todo Ordonne un recrutement
     */
    Controleur.prototype.recruter = function () {
        this.entreprise.recruter();
        this.notifier();
    };
    /**
     * @todo Ordonne un licenciement
     */
    Controleur.prototype.licencier = function () {
        this.entreprise.licencier();
        this.notifier();
    };
    /**
     * @todo Démarre la temporisation pour la paie des salariés
     */
    Controleur.prototype.demarrerSalaires = function () {
        var _this = this;
        var time = setInterval(function () { _this.payerSalaires(); }, 15000);
    };
    /**
     * @todo Ordonne la production d'un vélo
     */
    Controleur.prototype.produireVelo = function () {
        this.entreprise.produireVelo();
        this.notifier();
    };
    /**
     * @todo Ordonne la production d'un scooter
     */
    Controleur.prototype.produireScooter = function () {
        this.entreprise.produireScooter();
        this.notifier();
    };
    /**
     * @todo Ordonne la production d'une voiture
     */
    Controleur.prototype.produireVoiture = function () {
        this.entreprise.produireVoiture();
        this.notifier();
    };
    /**
     * Ordonne le paiement des salaires
     * Si les salaires ne peuvent être payés intégralement, la partie est terminée
     */
    Controleur.prototype.payerSalaires = function () {
        try {
            this.entreprise.payerSalaires();
            this.notifier();
        }
        catch (exception) {
            this.terminerPartie();
        }
    };
    /**
     * @todo Démarre la temporisation des achats des consommateurs
     */
    Controleur.prototype.demarrerAchats = function () {
        var _this = this;
        setInterval(function () { _this.consommateurs.acheter(_this.entreprise); }, 3000);
    };
    /**
     * Termine la partie
     */
    Controleur.prototype.terminerPartie = function () {
        //Affichage du texte de fin
        this.vue.afficherFinPartie();
    };
    /**
     * @todo Demarre la diffusion temporisée d'actualités
     */
    Controleur.prototype.demarrerActualite = function () {
        var _this = this;
        var r = Math.floor(Math.random() * 15);
        setTimeout(function () { _this.diffuserActualite(); }, r * 1000);
    };
    /**
     * @todo Diffuse une acutalité
     */
    Controleur.prototype.diffuserActualite = function () {
        var act = this.actualites.getActualite();
        this.consommateurs.apprendreActualite(act);
        this.demarrerActualite();
        this.vue.afficherActualite(act.getTitre());
    };
    /**
     * Retire l'alerte la plus ancienne de la vue
     */
    Controleur.prototype.retirerAlerte = function () {
        this.vue.retirerAlerte();
    };
    return Controleur;
}());
//# sourceMappingURL=controleur.js.map