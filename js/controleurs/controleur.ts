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
class Controleur implements Observateur
{
	//Vue associée au controleur
	private vue: Vue;
	
	//Entreprise à gérer
	private entreprise: Entreprise;

	//Clients de l'entreperise
	private consommateurs: Consommateurs;

	//Actualités du moment
	private actualites: Actualites;

	/**
	 * Constructeur
	 */
	constructor()
	{
	}

	/**
	 * Inistialisation du controleur
	 * @param vue la vue associée
	 */
	initialiser(vue: Vue)
	{
		this.vue = vue;
		this.vue.initialiser(this);

		this.entreprise = new Entreprise(this);
		this.consommateurs = new Consommateurs(this);
		this.actualites = new Actualites();

		this.notifier();

		this.demarrerActualite();
		this.demarrerAchats();
		this.demarrerSalaires();
	}

	/**
	 * @todo Fonction de notification du controleur appelée lorsqu'un de ses sujets subit une modification
	 * @param notification (facultatif) indique un message devant être transmis à la vue
	 */
	notifier(notification: Notification = null)
	{

		this.vue.actualiser(this.entreprise,this.consommateurs);
        
	}

	/**
	 * @todo Ordonne une commande de matières premières
	 */
	commanderMatieresPremieres()
	{
		this.entreprise.commanderMatieresPremieres();
		this.notifier();
	}

	/**
	 * @todo Ordonne un recrutement
	 */
	recruter()
	{
		this.entreprise.recruter();
		this.notifier();
	}

	/**
	 * @todo Ordonne un licenciement
	 */
	licencier()
    {
		this.entreprise.licencier();
		this.notifier();
	}
	
	/**
	 * @todo Démarre la temporisation pour la paie des salariés
	 */
	demarrerSalaires()
	{
		var time = setInterval(() => { this.payerSalaires() }, 15000);
	}

	/**
	 * @todo Ordonne la production d'un vélo
	 */
	produireVelo()
	{
		this.entreprise.produireVelo();
		this.notifier();
	}

	/**
	 * @todo Ordonne la production d'un scooter
	 */
	produireScooter()
	{
		this.entreprise.produireScooter();
		this.notifier();
	}

	/**
	 * @todo Ordonne la production d'une voiture
	 */
	produireVoiture()
	{
		this.entreprise.produireVoiture();
		this.notifier();
	}



	/**
	 * Ordonne le paiement des salaires
	 * Si les salaires ne peuvent être payés intégralement, la partie est terminée
	 */
	payerSalaires()
	{
		try
		{
            this.entreprise.payerSalaires();
            this.notifier();
		}
		catch(exception)
		{
			this.terminerPartie();
		}
	}

	/**
	 * @todo Démarre la temporisation des achats des consommateurs
	 */
	demarrerAchats()
	{
		setInterval(() => { this.consommateurs.acheter(this.entreprise); }, 3000);
	}

	/**
	 * Termine la partie
	 */
	terminerPartie()
	{
		//Affichage du texte de fin
		this.vue.afficherFinPartie();
	}

	/**
	 * @todo Demarre la diffusion temporisée d'actualités
	 */
	demarrerActualite()
	{
		var r = Math.floor(Math.random() * 15);
		setTimeout(() => { this.diffuserActualite() }, r * 1000);
	}

	/**
	 * @todo Diffuse une acutalité
	 */
	diffuserActualite()
	{
		var act = this.actualites.getActualite();
		this.consommateurs.apprendreActualite(act);
		this.demarrerActualite();
		this.vue.afficherActualite(act.getTitre());
	}

	/**
	 * Retire l'alerte la plus ancienne de la vue
	 */
	retirerAlerte()
	{
		this.vue.retirerAlerte();
	}
}