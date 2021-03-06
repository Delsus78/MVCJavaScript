/**
 * Représente un taux de demande des consommateurs pour un type de produits
 */
class Demande
{
  //Type de produit concerné par la demande
  private produit: string;

  //Pourcentage de la demande
  private valeur: number;

  /**
   * Constructeur
   * @param {string} produit Type de produit concerné par la demande
   * @param {number} valeur Valeur initiale de la demande
   */
  constructor(produit: string, valeur: number)
  {
	this.produit = produit;
	this.valeur = valeur;
  }

  /**
   * Retourne la valeur de la demande
   * @returns La demande des consommateurs pour ce type de produit
   */
  getValeur(): number
  {
	return this.valeur;
  }

  /**
   * Impact la demande des consommateurs pour ce type de produit
   * @param {number} impact Valeur de l'impact positif ou négatif
   */
  impacter(impact: number)
  {
	this.valeur += impact;

	if (this.valeur > 100)
	  this.valeur = 100;
	else if (this.valeur < 0)
	  this.valeur = 0;
  }
}