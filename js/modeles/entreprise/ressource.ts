/**
 * Classe Ressource
 */
class Ressource
{
	private nom: string;
	private quantite: number;

	/**
	 * Constructeur
	 * @param nom {string} Nom de la ressource
	 * @param quantite {number} Quantité initiale de ressource disponible
	 */
	constructor(nom: string, quantite: number)
	{
		this.nom = nom;
		this.quantite = quantite;
	}

	/**
	 * Accesseurs en lecture
	 */
	getNom(): string { return this.nom; }
	getQuantite(): number { return this.quantite; }

	/**
	 * Ajoute une certaine quantité de ressource
	 * @param {number} Quantité de ressource à ajouter
	 */
	ajouter(quantite: number)
	{
		this.quantite += quantite;
	}

	/**
	 * Retire une certaine quantité de ressource
	 * @param {number} Quantité de ressource à retirer
	 * @throws Lève une exception si la quantité de ressource à retirer est supérieure à la quantité disponible.
	 */
	retirer(quantite: number)
	{
		if (this.quantite < quantite)
			throw "Ressource::retirer - Pas assez de " + this.getNom() + " disponible.";

		this.quantite -= quantite;
	}
}