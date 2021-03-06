/**
 * Classe Produit
 */
class Produit
{
	//Type du produit
	private type: string;

	//Espace de stockage occupé par une unité du produit
	private coutStockage: number;

	//Quantité de matières premières nécessaire à la fabrication du produit
	private coutMatierePremiere: number;

	//Nombre de personnes nécessaires à la fabrication du produit
	private coutRessourcesHumaines: number;

	//Temps de fabrication nécessaire à la fabrication du produit
	private tempsFabrication: number;

	//Prix de vente du produit
	private prixVente: number;

	/**
	 * Constructeur
	 * @param type {string} Type du produit (vélo, scooter ou voiture)
	 * @param coutStockage {integer} Volume nécessaire au stocakge du produit fini
	 * @param coutMatieresPremieres {integer} Quantité de matière premières nécessaire à la fabrication du produit
	 * @param coutRessourcesHumaines {integer} Nombre de peronnes nécessaire à la fabrication du produit
	 * @param tempsFabrication {integer} Temps nécessaire à la fabrication du produit
	 * @param prixVente {integer} Prix de vente du produit
	 */
	constructor(type: string, coutStockage: number, coutMatieresPremieres: number, coutRessourcesHumaines: number, tempsFabrication: number, prixVente: number)
	{
		this.type = type;
		this.coutStockage = coutStockage;
		this.coutMatierePremiere = coutMatieresPremieres;
		this.coutRessourcesHumaines = coutRessourcesHumaines;
		this.tempsFabrication = tempsFabrication;
		this.prixVente = prixVente;
	}

	/*
	 * Accesseurs en lecture
	 */
	getType(): string { return this.type; }
	getCoutStockage(): number { return this.coutStockage; }
	getCoutMatieresPremieres(): number { return this.coutMatierePremiere; }
	getCoutRessourcesHumaines(): number { return this.coutRessourcesHumaines; }
	getTempsFabrication(): number { return this.tempsFabrication; }
	getPrixVente(): number { return this.prixVente; }
}