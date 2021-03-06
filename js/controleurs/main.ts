/// <reference path="controleur.ts" />;
/// <reference path="../vues/vue.ts" />;

/**
 * Démarrage de l'application
 */
class Application
{
	private controleur: Controleur = null;
	private vue: Vue = null;

	constructor()
	{
		this.controleur = new Controleur();
		this.vue = new Vue();

		this.controleur.initialiser(this.vue);
	}
}
 
var application: Application = null;

$(window).ready(() => {
	application = new Application();
});