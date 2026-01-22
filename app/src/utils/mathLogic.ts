export const cleanExpression = (expr: string) => {
  return expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/,/g, '.');
};

export const formatResult = (res: number) => {
  if (isNaN(res)) return "Erreur";
  if (!isFinite(res)) return "Infini";
  return Number(res.toFixed(8)).toString(); // Max 8 décimales, supprime les zéros inutiles
};
