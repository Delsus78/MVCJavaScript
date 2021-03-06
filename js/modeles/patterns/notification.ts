/**
 * Class Notification - Représente une information lié à une notification
 */
class Notification
{
  //Message de la notification
  private message: string;

  /**
   * Constructeur
   * @param {string} message Message de la notification
   */
  constructor(message: string)
  {
	this.message = message;
  }

  /**
   * Retourne le message de la notification
   * @returns Message de la notification
   */
  getMessage(): string
  {
	return this.message;
  }
}