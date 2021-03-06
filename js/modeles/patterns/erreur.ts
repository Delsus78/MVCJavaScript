///<reference path="notification.ts" />

/**
 * Représente une notification de type Erreur
 */
class Erreur extends Notification
{
  /**
   * Constructeur
   * @param {string} message Message de la notification
   */
  constructor(message: string)
  {
	super(message);
  }
}