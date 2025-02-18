// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = "http://127.0.0.1:8090";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase(POCKETBASE_URL);

// Exportation de l'instance PocketBase pour l'utiliser dans d'autres fichiers
export { pb };

// Fonction pour récupérer tous les événements de la collection spécifiée (par défaut "events")
// Utilise la méthode `getFullList` de PocketBase qui renvoie tous les éléments de la collection
export async function getEvents(collection = "events") {
  try {
    // Tentative de récupération de la liste complète des événements de la collection donnée
    return await pb.collection(collection).getFullList();
  } catch (error) {
    // Si une erreur survient, elle est loguée dans la console
    console.error("Erreur lors de la récupération des événements :", error);
    // Retourne un tableau vide en cas d'échec
    return [];
  }
}

// Fonction pour récupérer les prochains événements à partir d'une collection, avec pagination
// Prend en paramètre `page`, `perPage` et `collection` (par défaut "events")
export async function getNextEvents(
  page = 1,
  perPage = 6,
  collection = "events"
) {
  try {
    // Crée un objet Date représentant la date d'aujourd'hui
    const today = new Date();
    // Réinitialise l'heure à 00:00:00 (pour ne pas inclure d'événements passés)
    today.setHours(0, 0, 0, 0);

    // Récupère les événements de la collection spécifiée, en les filtrant par date
    // Le filtre assure que seuls les événements à partir d'aujourd'hui sont renvoyés
    // Le tri est effectué par date croissante
    const { items, totalItems } = await pb
      .collection(collection)
      .getList(page, perPage, {
        filter: `date >= "${today.toISOString()}"`, // Filtre basé sur la date actuelle
        sort: "+date", // Tri croissant des événements par date
      });

    // Retourne les événements récupérés ainsi que le nombre total d'éléments
    return {
      events: items,
      totalItems,
    };
  } catch (error) {
    // Si une erreur survient lors de la récupération des événements, elle est loguée dans la console
    console.error(
      "Erreur lors de la récupération des prochains événements :",
      error
    );
    // Retourne un objet avec un tableau vide d'événements et totalItems égal à 0 en cas d'échec
    return { events: [], totalItems: 0 };
  }
}

// Fonction pour récupérer un événement spécifique par son ID
// Prend en paramètre `id` (l'identifiant de l'événement) et `collection` (par défaut "events")
export async function oneEvent(id, collection = "events") {
  try {
    // Récupère un seul événement à partir de son ID dans la collection spécifiée
    const event = await pb.collection(collection).getOne(id);
    // Retourne l'événement récupéré
    return event;
  } catch (error) {
    // Si une erreur survient lors de la récupération de l'événement, elle est loguée dans la console
    console.error("Erreur lors de l'événements :", error);
    // Retourne un tableau vide en cas d'échec
    return [];
  }
}
