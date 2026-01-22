import sys
import json
from sympy import sympify, solve, diff, integrate, latex

def process_calculation(expression):
    try:
        # Transformation de l'expression en objet mathématique
        expr = sympify(expression)
        
        # On tente une résolution si c'est une équation (contient x)
        if 'x' in expression:
            solution = solve(expr)
            return f"x = {solution}"
        
        # Sinon on simplifie simplement le calcul
        return str(expr.evalf(4)) # Limité à 4 décimales
    except Exception as e:
        return f"Erreur: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        query = sys.argv[1]
        print(process_calculation(query))
