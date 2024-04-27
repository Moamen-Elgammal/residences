export const residencesMocks = [
  {
    name: 'Bloom Arjaan by Rotana',
    developer: 'Bloom Real Estate',
    location: 'Saadiyat Island',
    delivery_date: 'Q4_2024',
    project_type: 'Hotel apartments from studio to two rooms and a hall',
    residential_units: [
      {
        type: 'Studio + balcony',
        area: {
          from: 34,
          to: 50,
        },
        price: {
          from: 800000,
          to: 1000000,
        },
        payment_plan: {
          reservation_percentage: 10,
        },
      },
      {
        type: 'One bedroom apartment + balcony',
        area: {
          from: 58,
          to: 90,
        },
        price: {
          from: 1200000,
          to: 1700000,
        },
        payment_plan: {
          reservation_percentage: 10,
        },
      },
      {
        type: 'Two-bedroom apartment + balcony',
        area: {
          from: 113,
          to: 113,
        },
        price: {
          from: 1900000,
          to: 2100000,
        },
        payment_plan: {
          reservation_percentage: 10,
        },
      },
    ],
  },

  {
    name: 'Marina Bay Suites',
    developer: 'Emaar Properties',
    location: 'Dubai Marina',
    delivery_date: 'Q2_2023',
    project_type: 'Luxury apartments from one to three rooms and a hall',
    residential_units: [
      {
        type: 'One bedroom apartment + balcony',
        area: {
          from: 70,
          to: 85,
        },
        price: {
          from: 1200000,
          to: 1500000,
        },
        payment_plan: {
          reservation_percentage: 10,
          installment_percentage: 20,
          balance_percentage: 70,
        },
      },
    ],
  },
];
