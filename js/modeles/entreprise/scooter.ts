///<reference path="produit.ts" />

/**
 * Classe Scooter
 */
class Scooter extends Produit
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		/**
		 * Espace de stockage : 3
		 * Matières premières : 5
		 * Ressources humaines : 2
		 * Temps de fabrication : 2 secondes
		 * Prix de vente : 3000 €
		 */
		super('Scooter', 3, 5, 2, 2, 3000);
	}
}