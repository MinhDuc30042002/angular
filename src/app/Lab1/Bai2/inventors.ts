export interface Inventor {
    id: number;
    firstname: string;
    lastname: string;
    year: number;
    passed: number;
  }
  
  export const inventors = [
    { id: 1, firstname: 'Alert', lastname: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, firstname: 'Isaac', lastname: 'Newton', year: 1643, passed: 1727 },
    {
      id: 3,
      firstname: 'Galileo',
      lastname: 'Galilei',
      year: 1564,
      passed: 1642,
    },
    { id: 4, firstname: 'Marie', lastname: 'Curie', year: 1867, passed: 1934 },
    {
      id: 5,
      firstname: 'Johannes',
      lastname: 'Kepler',
      year: 1571,
      passed: 1630,
    },
    {
      id: 6,
      firstname: 'Nicolaus',
      lastname: 'Copernicus',
      year: 1473,
      passed: 1543,
    },
  ];