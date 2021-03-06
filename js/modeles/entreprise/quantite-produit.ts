///<reference path="produit.ts" />

/**
 * Classe QuantiteProduit - Représente une quantité d'un type de produit
 */
class QuantiteProduit
{
  //Produit pour lequel on mesure la quantité
  private produit: Produit;

  //Quantité du produit
  private quantite: number;

  /**
   * Constructeur
   * @param {Produit} produit Produit pour lequel on gère la quantité
   * @param {number} quantite Quantité initiale du produit
   */
  constructor(produit: Produit, quantite: number)
  {
	this.produit = produit;
	this.quantite = quantite;
  }

  /**
   * Retourne l'espace occupé par la quantité de produits
   * @returns Le volume occupé par la quantité de produits
   */
  getVolume(): number
  {
	return this.produit.getCoutStockage() * this.quantite;
  }

  /**
   * Retourne le nombre de personnes nécessaires à la fabrication de la quantité de produits
   * @returns Le nombre de personnes nécessaires à la fabrication de la quantité de produit
   */
  getRessourcesHumaines(): number
  {
	return this.produit.getCoutRessourcesHumaines() * this.quantite;
  }

  /**
   * Retourne la quantité de produits
   * @returns La quantité de produits
   */
  getQuantite(): number
  {
	return this.quantite;
  }

  /**
   * Retourne le type de produit pour lequel on gère la quantité
   * @returns Le type de produit géré
   */
  getType(): string
  {
	return this.produit.getType();
  }

  /**
   * Ajoute une certaine quantité de produits
   * @param {number} quantite Quantité à ajouter
   */
  ajouter(quantite: number)
  {
	this.quantite += quantite;
  }

  /**
   * Retire une certaine quantité de produits
   * @param {number} quantite Quantité de produits à retirer
   * @returns Quantité de produits réellement retirée (si quantite > quantite gérée)
   */
  retirer(quantite: number)
  {
	var quantiteRetiree = quantite;

	if(quantite > this.quantite)
	{
	  quantiteRetiree = this.quantite;
	  this.quantite = 0;
	}
	else
	  this.quantite -= quantite;

	return quantiteRetiree;
  }
}