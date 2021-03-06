/**
 * Classe Actualité - représente une actualité médiatique qui a un impact sur les consommateurs et leurs demandes
 */
class Actualite
{
	private titre: string;
	private impactVelo: number;
	private impactScooter: number;
	private impactVoiture: number;

	/**
	 * Constructeur
	 * @param titre {string} Titre de l'actualité
	 * @param impactVelo {number} Impact de l'atualité sur la demande de vélos des consommateurs
	 * @param impactScooter {number} Impact de l'atualité sur la demande de scooters des consommateurs
	 * @param impactVoiture {number} Impact de l'atualité sur la demande de voitures des consommateurs
	 */
	constructor(titre: string, impactVelo: number, impactScooter: number, impactVoiture: number)
	{
		this.titre = titre;
		this.impactVelo = impactVelo;
		this.impactScooter = impactScooter;
		this.impactVoiture = impactVoiture;
	}

	/**
	 * Accesseurs en lecture
	 */
	getTitre() { return this.titre; }
	getImpactVelo() { return this.impactVelo; }
	getImpactScooter() { return this.impactScooter; }
	getImpactVoiture() { return this.impactVoiture; }
}