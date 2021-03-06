/// <reference path="../patterns/sujet.ts" />;
/// <reference path="../../controleurs/controleur.ts" />;
/// <reference path="demande.ts" />;
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
 * Classe Consommateurs - représente les consommateurs du marché
 */
var Consommateurs = /** @class */ (function (_super) {
    __extends(Consommateurs, _super);
    /**
     * Constructeur
     * @param controleur {Controleur} Observateur à notifier en cas de changement
     */
    function Consommateurs(controleur) {
        var _this = _super.call(this) || this;
        _this.ajouterObservateur(controleur);
        //Initialisation des taux de demandes des consommateurs en fonction du produit
        _this.demandeVelo = new Demande('velo', 50);
        _this.demandeScooter = new Demande('scooter', 40);
        _this.demandeVoiture = new Demande('voiture', 30);
        return _this;
    }
    /**
     * Le consommateur est mis au courant d'une actualité qui a un impacte sur sa façon de consommer
     * @param actualite {Actualite} Actualité dont le consommateur prend connaissance
     */
    Consommateurs.prototype.apprendreActualite = function (actualite) {
        this.demandeVelo.impacter(actualite.getImpactVelo());
        this.demandeScooter.impacter(actualite.getImpactScooter());
        this.demandeVoiture.impacter(actualite.getImpactVoiture());
        this.notifier();
    };
    /**
     * Retourne la demande des consommateurs en matière de vélo
     */
    Consommateurs.prototype.getDemandeVelo = function () {
        return this.demandeVelo.getValeur();
    };
    /**
     * Retourne la demande des consommateurs en matière de scooter
     */
    Consommateurs.prototype.getDemandeScooter = function () {
        return this.demandeScooter.getValeur();
    };
    /**
     * Retourne la demande des consommateurs en matière de voiture
     */
    Consommateurs.prototype.getDemandeVoiture = function () {
        return this.demandeVoiture.getValeur();
    };
    /**
     * Achat des consommateurs en fonction de leurs demandes
     * @param entreprise {Entreprise} Entreprise à laquelle les consommateurs achètent leurs biens
     */
    Consommateurs.prototype.acheter = function (entreprise) {
        entreprise.vendreVelos(Math.ceil(this.demandeVelo.getValeur() / 100 * 10));
        entreprise.vendreScooters(Math.ceil(this.demandeScooter.getValeur() / 100 * 10));
        entreprise.vendreVoitures(Math.ceil(this.demandeVoiture.getValeur() / 100 * 10));
    };
    return Consommateurs;
}(Sujet));
//# sourceMappingURL=consommateurs.js.map