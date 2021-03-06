///<reference path="quantite-produit.ts" />
///<reference path="velo.ts" />
///<reference path="scooter.ts" />
///<reference path="voiture.ts" />

/**
 * Classe Production - représente les produits en cours de fabrication
 */
class Production
{
  private produitsFabriques: Array<QuantiteProduit>;

  /**
   * Constructeur
   */
  constructor()
  {
	this.produitsFabriques = new Array<QuantiteProduit>();
	this.produitsFabriques.push(new QuantiteProduit(new Velo(), 0));
	this.produitsFabriques.push(new QuantiteProduit(new Scooter(), 0));
	this.produitsFabriques.push(new QuantiteProduit(new Voiture(), 0));
  }

  /**
   * Met une certaine quantité d'un certain produit en production
   * @param {Produit} produit Produit à produire
   * @param {number} quantite Quantité du produit à produire
   */
  produire(produit: Produit, quantite: number)
  {
	var trouve = false;

	for (var iProduit = 0; !trouve && iProduit < this.produitsFabriques.length; ++iProduit)
	{
	  if (this.produitsFabriques[iProduit].getType() == produit.getType())
	  {
		this.produitsFabriques[iProduit].ajouter(quantite);
		trouve = true;
	  }
	}
  }

  /**
   * Retire une certaine quantité de produits finis de la production
   * @param {Produit} produit Produit à retirer de la production
   * @param {number} quantite Quantité de produits à retirer
   */
  terminer(produit: Produit, quantite: number)
  {
	var trouve = false;

	for (var iProduit = 0; !trouve && iProduit < this.produitsFabriques.length; ++iProduit)
	{
	  if (this.produitsFabriques[iProduit].getType() == produit.getType())
	  {
		this.produitsFabriques[iProduit].retirer(quantite);
		trouve = true;
	  }
	}
  }

  /**
   * Retourne la quantité de vélos en production
   * @returns Nombre de vélos en production
   */
  getQuantiteVelos(): number
  {
	return this.produitsFabriques[0].getQuantite();
  }

  /**
   * Retourne la quantité de scooters en production
   * @returns Nombre de scooters en production
   */
  getQuantiteScooters(): number
  {
	return this.produitsFabriques[1].getQuantite();
  }

  /**
   * Retourne la quantité de voitures en production
   * @returns Nombre de voitures en production
   */
  getQuantiteVoitures(): number
  {
	return this.produitsFabriques[2].getQuantite();
  }

  /**
	* Retourne le cout total en ressources humaines représenté par l'ensemble des produits en cours de fabrication
	*/
  getCoutRessourcesHumaines()
  {
	  var coutRessourcesHumaines = 0;

	  this.produitsFabriques.forEach((produits) => {
		  coutRessourcesHumaines += produits.getRessourcesHumaines();
	  });

	  return coutRessourcesHumaines;
  }
}