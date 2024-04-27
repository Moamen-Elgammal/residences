export interface ResidentialUnit {
  type: string;
  area: { from: number; to?: number };
  price: { from: number; to?: number };
  payment_plan: { reservation_percentage: number };
}

export interface ResidencesData {
  name: string;
  developer: string;
  location: string;
  delivery_date: string;
  project_type: string;
  residential_units: ResidentialUnit[];
}
