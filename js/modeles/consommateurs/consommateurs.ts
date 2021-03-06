/// <reference path="../patterns/sujet.ts" />;
/// <reference path="../../controleurs/controleur.ts" />;
/// <reference path="demande.ts" />;

/**
 * Classe Consommateurs - représente les consommateurs du marché
 */
class Consommateurs extends Sujet
{
	private demandeVelo: Demande;
	private demandeScooter: Demande;
	private demandeVoiture: Demande;

	/**
	 * Constructeur
	 * @param controleur {Controleur} Observateur à notifier en cas de changement
	 */
	constructor(controleur: Controleur)
	{
		super();
		this.ajouterObservateur(controleur);

		//Initialisation des taux de demandes des consommateurs en fonction du produit
		this.demandeVelo = new Demande('velo', 50);
		this.demandeScooter = new Demande('scooter', 40);
		this.demandeVoiture = new Demande('voiture', 30);
	}

	/**
	 * Le consommateur est mis au courant d'une actualité qui a un impacte sur sa façon de consommer
	 * @param actualite {Actualite} Actualité dont le consommateur prend connaissance
	 */
	apprendreActualite(actualite: Actualite)
	{
		this.demandeVelo.impacter(actualite.getImpactVelo());
		this.demandeScooter.impacter(actualite.getImpactScooter());
		this.demandeVoiture.impacter(actualite.getImpactVoiture());

		this.notifier();
	}

	/**
	 * Retourne la demande des consommateurs en matière de vélo
	 */
	getDemandeVelo(): number
	{
		return this.demandeVelo.getValeur();
	}

	/**
	 * Retourne la demande des consommateurs en matière de scooter
	 */
	getDemandeScooter(): number
	{
		return this.demandeScooter.getValeur();
	}

	/**
	 * Retourne la demande des consommateurs en matière de voiture
	 */
	getDemandeVoiture(): number
	{
		return this.demandeVoiture.getValeur();
	}

	/**
	 * Achat des consommateurs en fonction de leurs demandes
	 * @param entreprise {Entreprise} Entreprise à laquelle les consommateurs achètent leurs biens
	 */
	acheter(entreprise: Entreprise)
	{
		entreprise.vendreVelos(Math.ceil(this.demandeVelo.getValeur() / 100 * 10));
		entreprise.vendreScooters(Math.ceil(this.demandeScooter.getValeur() / 100 * 10));
		entreprise.vendreVoitures(Math.ceil(this.demandeVoiture.getValeur() / 100 * 10));
	}
}