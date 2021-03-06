///<reference path="ressource.ts" />

/**
 * Représente les ressources humaines de l'entreprise
 */
class RessourcesHumaines extends Ressource
{
  /**
   * Cosntructeur
   * @param quantite : Nombre de ressources humaines initiale
   */
  constructor(quantite: number = 0)
  {
	super('Ressources humaines', quantite);
  }
}