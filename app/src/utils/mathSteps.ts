export const generateSteps = (expression: string): string[] => {
  const steps = [];
  steps.push(`Analyse de l'expression : ${expression}`);
  
  if (expression.includes('*') || expression.includes('/')) {
    steps.push("Priorité aux multiplications et divisions.");
  }
  
  if (expression.includes('(')) {
    steps.push("Résolution des parenthèses en premier.");
  }

  steps.push("Exécution des additions et soustractions de gauche à droite.");
  steps.push("Simplification finale pour obtenir le résultat.");
  
  return steps;
};
