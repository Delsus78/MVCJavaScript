/**
 * Classe Actualité - représente une actualité médiatique qui a un impact sur les consommateurs et leurs demandes
 */
var Actualite = /** @class */ (function () {
    /**
     * Constructeur
     * @param titre {string} Titre de l'actualité
     * @param impactVelo {number} Impact de l'atualité sur la demande de vélos des consommateurs
     * @param impactScooter {number} Impact de l'atualité sur la demande de scooters des consommateurs
     * @param impactVoiture {number} Impact de l'atualité sur la demande de voitures des consommateurs
     */
    function Actualite(titre, impactVelo, impactScooter, impactVoiture) {
        this.titre = titre;
        this.impactVelo = impactVelo;
        this.impactScooter = impactScooter;
        this.impactVoiture = impactVoiture;
    }
    /**
     * Accesseurs en lecture
     */
    Actualite.prototype.getTitre = function () { return this.titre; };
    Actualite.prototype.getImpactVelo = function () { return this.impactVelo; };
    Actualite.prototype.getImpactScooter = function () { return this.impactScooter; };
    Actualite.prototype.getImpactVoiture = function () { return this.impactVoiture; };
    return Actualite;
}());
//# sourceMappingURL=actualite.js.map