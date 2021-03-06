///<reference path="ressource.ts" />

/**
 * Représente la trésorerie de l'entreprise
 */
class Tresorerie extends Ressource
{
  /**
   * Constructeur
   * @param montant Montant de départ posséder par l'entreprise
   */
  constructor(montant: number)
  {
	super('Trésorerie', montant);
  }
}