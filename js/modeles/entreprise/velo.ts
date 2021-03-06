///<reference path="produit.ts" />

/**
 * Classe Vélo
 */
class Velo extends Produit
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		/**
		 * Espace de stockage : 1
		 * Matières premières : 2
		 * Ressources humaines : 1
		 * Temps de fabrication : 1 secondes
		 * Prix de vente : 600 €
		 */
		super('Vélo', 1, 1, 1, 1, 600);
	}
}