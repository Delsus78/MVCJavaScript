///<reference path="observateur.ts" />
///<reference path="notification.ts" />

/**
 * Classe Sujet (Pattern Sujet / Observateur)
 */
class Sujet
{
	private observateurs: Array<Observateur>;

	/**
	 * Constructeur
	 */
	constructor()
	{
		this.observateurs = new Array<Observateur>();
	}

	/**
	 * Ajoute un observateur au sujet
	 * @param observateur {Observateur} Observateur à ajouter au sujet
	 */
	ajouterObservateur(observateur: Observateur)
	{
		this.observateurs.push(observateur);
	}

	/**
	 * Notifie les observateurs
	 * @param notification {Notification} Informations transmises aux observateurs lors de la notification
	 */
	notifier(notification: Notification = null)
	{
		this.observateurs.forEach((observateur) => { observateur.notifier(notification); });
	}
}