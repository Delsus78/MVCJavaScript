///<reference path="notification.ts" />

/**
 * Représente une notification de type Alerte
 */
class Alerte extends Notification
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