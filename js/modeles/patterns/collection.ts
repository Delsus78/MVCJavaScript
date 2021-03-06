///<reference path="sujet.ts" />

/**
 * Gère une collection d'objets
 */
class Collection<T> extends Sujet
{
	//Collection d'éléments
	private elements: Array<T>;

	/**
	 * Constructeur
	 */
	constructor()
	{
		super();

		this.elements = new Array<T>();
	}

	/**
	 * Vide la collection
	 */
	clear()
	{
		this.elements = new Array<T>();
		this.notifier();
	}

	/**
	 * Retourne le nombre d'élément contenus dans la collection
	 * @return {number} Taille de la collection
	 */
	length(): number
	{
		return this.elements.length;
	}

	/**
	 * Ajoute un élément à la collection
	 * @param {T} element Element à ajouter à la collection
	 */
	add(element: T)
	{
		this.elements.push(element);
		this.notifier();
	}

	/**
	 * Retourne un élément de la collection
	 * @param {number} index Indice de l'élément à récupérer
	 * @throw Lève une exception si l'indice est incorrect
	 */
	at(index: number): T
	{
		if (index < 0 || index >= this.length())
			throw 'Collection::at - Index out of range (' + index + ', 0 - ' + this.length() + ').';

		return this.elements[index];
	}

	/**
	 * retire un élément de la collection
	 * @param {number} index Indice de l'élément à retirer
	 * @throw Lève une exception si l'indice est incorrect
	 */
	remove(index: number)
	{
		if (index < 0 || index >= this.length())
			throw 'Collection::remove - Index out of range (' + index + ', 0 - ' + this.length() + ').';

		this.elements.splice(index, 1);
		this.notifier();
	}
}