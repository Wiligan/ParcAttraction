export interface CritiqueInterface {
  critique_id: number | null,
  prenom: string | null,
  nom: string | null,
  critique: string,
  note: number,
  attraction_id: number,
}

export function transformToCritiqueInterface(formData: any): CritiqueInterface {
  return {
    critique_id: null, // Vous pouvez définir la valeur par défaut de critique_id selon vos besoins
    prenom: formData.surname || null,
    nom: formData.name || null,
    critique: formData.critique,
    note: formData.note,
    attraction_id: formData.attraction_id
  };
}
