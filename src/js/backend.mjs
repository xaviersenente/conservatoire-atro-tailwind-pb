// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = "http://127.0.0.1:8090";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase(POCKETBASE_URL);

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

try {
  //debugger
  const events = await getEvents();
  console.log(events);
} catch (e) {
  console.error(e);
}
