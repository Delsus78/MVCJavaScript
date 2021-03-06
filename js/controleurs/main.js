/// <reference path="controleur.ts" />;
/// <reference path="../vues/vue.ts" />;
/**
 * Démarrage de l'application
 */
var Application = /** @class */ (function () {
    function Application() {
        this.controleur = null;
        this.vue = null;
        this.controleur = new Controleur();
        this.vue = new Vue();
        this.controleur.initialiser(this.vue);
    }
    return Application;
}());
var application = null;
$(window).ready(function () {
    application = new Application();
});
//# sourceMappingURL=main.js.map