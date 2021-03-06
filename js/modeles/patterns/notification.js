/**
 * Class Notification - Représente une information lié à une notification
 */
var Notification = (function () {
    /**
     * Constructeur
     * @param {string} message Message de la notification
     */
    function Notification(message) {
        this.message = message;
    }
    /**
     * Retourne le message de la notification
     * @returns Message de la notification
     */
    Notification.prototype.getMessage = function () {
        return this.message;
    };
    return Notification;
}());
