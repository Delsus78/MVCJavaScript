/// <reference path="../controleurs/controleur.ts" />
/// <reference path="../libs/jquery.d.ts" />

/**
 * Gestion de la vue principale de l'application
 */
class Vue
{
	//Controleur associé à la vue
	private controleur: Controleur = null;

	/**
	 * Constructeur
	 */
	constructor()
	{
	}

	/**
	 * Initialisation de la vue
	 * @param {Controleur} controleur Controleur associé à la vue
	 */
	initialiser(controleur: Controleur)
	{
	  this.controleur = controleur;
	  this.attacherEvenements();
	}

	/**
	 * @todo Attache les événements click aux boutons de la page HTML
	 */
	attacherEvenements()
	{
		var btnCommandMP = $('#btn-commander-matieres-premieres');
		btnCommandMP.on("click", () => {
			try {
				this.controleur.commanderMatieresPremieres()
			}
			catch (ex) {
				this.afficherErreur(ex)
            }
		});

		var btnRecruter = $('#btn-recruter');
		btnRecruter.on("click", () => {
			try {
				this.controleur.recruter()
			}
			catch (ex) {
				this.afficherErreur(ex)
			}
		});

		var btnLicencier = $('#btn-licencier');
		btnLicencier.on("click", () => {
			try {
				this.controleur.licencier()
			}
			catch (ex) {
				this.afficherErreur(ex)
			}
		});

		var btnProdVelo = $('#btn-produire-velo');
		btnProdVelo.on("click", () => {
			try {
				this.controleur.produireVelo()
			}
			catch (ex) {
				//this.afficherErreur(Notification.get);
				this.afficherErreur(ex);
			}
		});

		var btnProdScooter = $('#btn-produire-scooter');
		btnProdScooter.on("click", () => {
			try {
				this.controleur.produireScooter()
			}
			catch (ex) {
				this.afficherErreur(ex)
			}
		});

		var btnProdVoiture = $('#btn-produire-voiture');
		btnProdVoiture.on("click", () => {
			try {
				this.controleur.produireVoiture()
			}
			catch (ex) {
				this.afficherErreur(ex)
			}
		});
	}

	/**
	 * Actualise l'affichage de la page
	 * @param entreprise {Entreprise} Informations sur l'entreprise
	 * @param consommateurs {Consommateurs} Informations sur les consommateurs
	 */
	actualiser(entreprise: Entreprise, consommateurs: Consommateurs)
	{
		//Actualisation des ressources
		this.actualiserRessources(entreprise);

		//Actualisation de la production
		this.actualiserProduction(entreprise);

		//Actualisation du stock
		this.actualiserStock(entreprise);

		//Actualisation du stock
		this.actualiserDemandes(consommateurs);
	}

	/**
	 * @todo Actualise le niveau des ressources
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées les ressources
	 */
	actualiserRessources(entreprise: Entreprise)
	{
		var stock = $('#stock > .header-ressource-quantite');
		stock.html("" + entreprise.getEspaceStockageTotal());
		var mpremieres = $('#matieres-premieres > .header-ressource-quantite');
		mpremieres.html("" + entreprise.getMatieresPremieres());
		var rhumaines = $('#ressources-humaines > .header-ressource-quantite');
		rhumaines.html("" + entreprise.getRessourcesHumainesTotal());
		var tresorerie = $('#tresorerie > .header-ressource-quantite');
		tresorerie.html("" + entreprise.getTresorerie());
	}

	/**
	 * @todo Actualise la production en cours
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées informations de production
	 */
	actualiserProduction(entreprise: Entreprise)
    {
		var prodVelo = $('#info-production-velo');
		prodVelo.html("" + entreprise.getQuantiteProductionVelos());
		var prodVoiture = $('#info-production-voiture');
		prodVoiture.html("" + entreprise.getQuantiteProductionVoitures());
		var prodScooter = $('#info-production-scooter');
		prodScooter.html("" + entreprise.getQuantiteProductionScooters());
	}

	/**
	 * @todo Actualise le stock
	 * @param entreprise {Entreprise} Entreprise pour laquelle est affiché l'état du stock
	 */
	actualiserStock(entreprise: Entreprise)
	{
		var prodVelo = $('#info-stock-velo');
		prodVelo.html("" + entreprise.getQuantiteStockVelos());
		var prodVoiture = $('#info-stock-voiture');
		prodVoiture.html("" + entreprise.getQuantiteStockVoitures());
		var prodScooter = $('#info-stock-scooter');
		prodScooter.html("" + entreprise.getQuantiteStockScooters());
	}

	/**
	 * @todo Actualise la demande des consommateurs
	 * @param consommateurs {Consommateurs} Consommateurs pour lesquels sont affichées les demandes en produits
	 */
	actualiserDemandes(consommateurs: Consommateurs)
    {
		var prodVelo = $('#info-demandes-velo');
		prodVelo.html("" + consommateurs.getDemandeVelo());
		var prodVoiture = $('#info-demandes-voiture');
		prodVoiture.html("" + consommateurs.getDemandeVoiture());
		var prodScooter = $('#info-demandes-scooter');
		prodScooter.html("" + consommateurs.getDemandeScooter());
	}

	//#region Gestion des alertes
	/**
	 * Affiche une erreur
	 * @param erreur {string} Erreur à afficher
	 */
	afficherErreur(erreur: string)
	{
		this.afficherAlerte(erreur, 'erreur');
	}

	/**
	 * Affiche une actualité
	 * @param actualite {string} Titre de l'actualité à afficher
	 */
	afficherActualite(actualite: string)
	{
		this.afficherAlerte(actualite, 'actualite');
	}

	/**
	 * Affiche l'écran de fin de partie
	 */
	afficherFinPartie()
	{
		$('#ecran-fin-partie').addClass('visible');
	}

	/**
	 * Affiche une alerte
	 * @param titre {string} Texte de l'alerte
	 * @param type {string} Type d'alerte (erreur ou actualite)
	 */
	afficherAlerte(titre: string, type: string)
	{
		var alerte = $('<p></p>');
		alerte.addClass(type);
		alerte.html(titre);

		$('#alertes').append(alerte);

		//Efface l'alerte après 5 secondes
		setTimeout(() => { this.controleur.retirerAlerte(); }, 5000);
	}

	/**
	 * Efface la première alerte de la page
	 */
	retirerAlerte()
	{
		$('#alertes p').eq(0).remove();
	}
	//#endregion
}