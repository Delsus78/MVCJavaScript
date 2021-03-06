///<reference path="produit.ts" />

/**
 * Classe Voiture
 */
class Voiture extends Produit
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		/**
		 * Espace de stockage : 10
		 * Matières premières : 20
		 * Ressources humaines : 10
		 * Temps de fabrication : 8 secondes
		 * Prix de vente : 15000 €
		 */
		super('Voiture', 10, 20, 10, 8, 15000);
	}
}