///<reference path="observateur.ts" />
///<reference path="notification.ts" />
/**
 * Classe Sujet (Pattern Sujet / Observateur)
 */
var Sujet = /** @class */ (function () {
    /**
     * Constructeur
     */
    function Sujet() {
        this.observateurs = new Array();
    }
    /**
     * Ajoute un observateur au sujet
     * @param observateur {Observateur} Observateur à ajouter au sujet
     */
    Sujet.prototype.ajouterObservateur = function (observateur) {
        this.observateurs.push(observateur);
    };
    /**
     * Notifie les observateurs
     * @param notification {Notification} Informations transmises aux observateurs lors de la notification
     */
    Sujet.prototype.notifier = function (notification) {
        if (notification === void 0) { notification = null; }
        this.observateurs.forEach(function (observateur) { observateur.notifier(notification); });
    };
    return Sujet;
}());
//# sourceMappingURL=sujet.js.map