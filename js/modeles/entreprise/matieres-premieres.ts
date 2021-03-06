///<reference path="ressource.ts" />

/**
 * Représente les matières premières de l'entreprise
 */
class MatieresPremieres extends Ressource
{
  /**
   * Constructeur
   * @param quantite Quantite de matières premières initiale
   */
  constructor(quantite: number = 0)
  {
	super('Matières premières', quantite);
  }  
}