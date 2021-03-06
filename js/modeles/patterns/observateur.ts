///<reference path="notification.ts" />

/**
 * Classe Observateur (pattern Sujet/Observateur)
 */
interface Observateur
{
	/**
	 * Fonction de notification
	 */
	notifier(notification: Notification);
}