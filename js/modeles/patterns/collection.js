///<reference path="sujet.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Gère une collection d'objets
 */
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    /**
     * Constructeur
     */
    function Collection() {
        var _this = _super.call(this) || this;
        _this.elements = new Array();
        return _this;
    }
    /**
     * Vide la collection
     */
    Collection.prototype.clear = function () {
        this.elements = new Array();
        this.notifier();
    };
    /**
     * Retourne le nombre d'élément contenus dans la collection
     * @return {number} Taille de la collection
     */
    Collection.prototype.length = function () {
        return this.elements.length;
    };
    /**
     * Ajoute un élément à la collection
     * @param {T} element Element à ajouter à la collection
     */
    Collection.prototype.add = function (element) {
        this.elements.push(element);
        this.notifier();
    };
    /**
     * Retourne un élément de la collection
     * @param {number} index Indice de l'élément à récupérer
     * @throw Lève une exception si l'indice est incorrect
     */
    Collection.prototype.at = function (index) {
        if (index < 0 || index >= this.length())
            throw 'Collection::at - Index out of range (' + index + ', 0 - ' + this.length() + ').';
        return this.elements[index];
    };
    /**
     * retire un élément de la collection
     * @param {number} index Indice de l'élément à retirer
     * @throw Lève une exception si l'indice est incorrect
     */
    Collection.prototype.remove = function (index) {
        if (index < 0 || index >= this.length())
            throw 'Collection::remove - Index out of range (' + index + ', 0 - ' + this.length() + ').';
        this.elements.splice(index, 1);
        this.notifier();
    };
    return Collection;
}(Sujet));
//# sourceMappingURL=collection.js.map