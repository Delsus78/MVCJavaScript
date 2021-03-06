///<reference path="../patterns/observateur.ts" />
///<reference path="../patterns/sujet.ts" />
///<reference path="../patterns/erreur.ts" />
///<reference path="stock.ts" />
///<reference path="matieres-premieres.ts" />
///<reference path="ressources-humaines.ts" />
///<reference path="tresorerie.ts" />
///<reference path="production.ts" />
///<reference path="velo.ts" />
///<reference path="scooter.ts" />
///<reference path="voiture.ts" />

/**
 * Classe Entreprise (partie du modèle)
 */
class Entreprise extends Sujet
{
	private stock: Stock;
	private matieresPremieres: MatieresPremieres;
	private ressourcesHumaines: RessourcesHumaines;
	private tresorerie: Tresorerie;
	private productionEnCours: Production;

	/**
	 * Constructeur
	 * @param observateur {Observateur} Controleur qui devra être notifié des changements subis par l'entreprise
	 */
	constructor(observateur: Observateur)
	{
		super();

		this.ajouterObservateur(observateur);

		this.stock = new Stock(100);
		this.matieresPremieres = new MatieresPremieres(0);
		this.ressourcesHumaines = new RessourcesHumaines(0);
		this.tresorerie = new Tresorerie(300000);
		this.productionEnCours = new Production();
	}

	/**
	 * @return l'espace de stockage total de l'entreprise
	 */
	getEspaceStockageTotal()
	{
		return this.stock.getEspaceTotal();
	}

	/**
	 * @return l'espace de stockage occupé de l'entreprise
	 */
	getEspaceStockageOccupe(): number
	{
		return this.stock.getEspaceOccupe();
	}

	/**
	 * @return la quantité de matières premières disponibles
	 */
	getMatieresPremieres(): number
	{
		return this.matieresPremieres.getQuantite();
	}

	/**
	 * @return le nombre d'employés occupés
	 */
	getRessourcesHumainesOccupees(): number
	{
		return this.productionEnCours.getCoutRessourcesHumaines();
	}

	/**
	 * @return le nombre d'employés total
	 */
	getRessourcesHumainesTotal(): number
	{
		return this.ressourcesHumaines.getQuantite() ;
	}

	/**
	 * @return la trésorerie disponible
	 */
	getTresorerie(): number
	{
		return this.tresorerie.getQuantite();
	}

	/**
	 * @return la quantité de vélos en production
	 */
	getQuantiteProductionVelos(): number
	{
		return this.productionEnCours.getQuantiteVelos();
	}

	/**
	 * @return la quantité de scooters en production
	 */
	getQuantiteProductionScooters(): number
	{
		return this.productionEnCours.getQuantiteScooters();
	}

	/**
	 * @return la quantité de voitures en production
	 */
	getQuantiteProductionVoitures(): number
	{
		return this.productionEnCours.getQuantiteVoitures();
	}

	/**
	 * @return la quantité de vélos stockés
	 */
	getQuantiteStockVelos(): number
	{
		return this.stock.getQuantiteVelos()
	}

	/**
	 * @return la quantité de scooters stockés
	 */
	getQuantiteStockScooters(): number
	{
		return this.stock.getQuantiteScooters()
	}

	/**
	 * @return la quantité de voitures stockés
	 */
	getQuantiteStockVoitures(): number
	{
		return this.stock.getQuantiteVoitures()
	}

	/**
	 * @todo Effectue une commande de matières premières
	 */
	commanderMatieresPremieres()
	{
		this.tresorerie.retirer(400);
		this.matieresPremieres.ajouter(100);
	}

	/**
	 * @todo Recrute un nouveau salarié
	 */
	recruter()
	{
		this.ressourcesHumaines.ajouter(1);
	}

	/**
	 * @todo Licencie un salarié
	 * @throws une exception s'il est impossible de licencier
	 */
	licencier()
	{
		if (this.tresorerie.getQuantite() >= 10000)
		{
			this.ressourcesHumaines.retirer(1);
			this.tresorerie.retirer(10000);
        }
	}
	/**
	 * @todo Paie les salaires des salariés
	 */
	payerSalaires()
	{
		this.tresorerie.retirer(this.ressourcesHumaines.getQuantite() * 2500);

	}

	/**
	 * Donne l'ordre de produire un produit
	 * @param produit {Produit} Produit à produire	 
	 */
	produire(produit: Produit)
	{
		this.testerProductionPossible(produit);		
		this.demarrerProduction(produit);
	}

	/**
	 * Vérifie que la production d'un produit est possible
	 * @param produit {Produit} Produit pour lequel on souhaite vérifier que la fabrication est possible
	 * @throws Lève une exception si une contrainte de fabrication n'est pas respectée
	 */
	testerProductionPossible(produit: Produit)
	{
		if(this.matieresPremieres.getQuantite() < produit.getCoutMatieresPremieres())
			throw "Pas assez de matières premières !";

		if(!this.stock.peutStocker(produit))
			throw "Pas assez de place dans le stock !";

		if (this.ressourcesHumaines.getQuantite()- this.getRessourcesHumainesOccupees() < produit.getCoutRessourcesHumaines())
			throw "Pas assez de main d'oeuvre disponible !";
	}

	/**
	 * @todo Donne l'ordre de produire un vélo
	 */
	produireVelo()
	{
		this.produire(new Velo());
	}

	/**
	 * @todo Donne l'ordre de produire un scooter
	 */
	produireScooter()
    {
		this.produire(new Scooter());
	}

	/**
	 * @todo Donne l'ordre de produire une voiture
	 */
	produireVoiture()
    {
		this.produire(new Voiture());
	}

	/**
	 * @todo Démarre la production d'un produit (attribution des ressources humaines, consommation des matière première, mise en production du produit)
	 * @param produit {Produit} Produit à produire
	 */
	demarrerProduction(produit: Produit)
	{
		this.matieresPremieres.retirer(produit.getCoutMatieresPremieres());
		this.productionEnCours.produire(produit, 1);
		setTimeout(() => { this.acheverProduction(produit) }, produit.getTempsFabrication()*1000);
		this.notifier();	
	}

	/**
	 * @todo Indique que la production du produit est terminée et place le produit fini dans le stock
	 * @param produit {Produit} Produit fini à ajouter au stock
	 */
	acheverProduction(produit: Produit)
	{
		this.stock.stocker(produit);
		this.productionEnCours.terminer(produit, 1);
		this.notifier();
	}


	/**
	 * @todo Vend une certaine quantité de vélos
	 * @param quantité {number} Quantité de vélos à vendre
	 */
	vendreVelos(quantite: number)
	{
		if (this.stock.destockerVelos(1) != 0) {
			this.tresorerie.ajouter(new Velo().getPrixVente());
        }
	}

	/**
	 * @todo Vend une certaine quantité de scooters
	 * @param quantité {number} Quantité de scooters à vendre
	 */
	vendreScooters(quantite: number)
	{
		if (this.stock.destockerScooters(1) != 0) {
			this.tresorerie.ajouter(new Scooter().getPrixVente());
		}
	}

	/**
	 * @todo Vend une certaine quantité de voitures
	 * @param quantité {number} Quantité de voitures à vendre
	 */
	vendreVoitures(quantite: number)
	{
		if (this.stock.destockerVoitures(1) != 0) {
			this.tresorerie.ajouter(new Voiture().getPrixVente());
		}
	}
}