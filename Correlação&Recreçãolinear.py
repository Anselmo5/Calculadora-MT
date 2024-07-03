
import numpy as np

def regressao_linear(x, y):
    n = len(x)
    x_mean = np.mean(x)
    y_mean = np.mean(y)
    
    numerador = np.sum((x - x_mean) * (y - y_mean))
    denominador = np.sum((x - x_mean)**2)
        
    beta1 = numerador / denominador
    beta0 = y_mean - beta1 * x_mean
    return beta0, beta1

def correlacao(x, y):
    correlacao = np.corrcoef(x, y)[0, 1]
    return correlacao

x = np.array([4, 6, 8, 10, 12])
y = np.array([14, 17, 20, 23, 26])
valorx = 52
valory = 256

beta0, beta1 = regressao_linear(x, y)
corr = correlacao(x, y)

print("Coeficientes da Regressão Linear:")
print(f"B = {beta0}, A = {beta1}")
print(f"Coeficiente de Correlação: {corr}")
print(f'Y = {beta1} x + {beta0}')
print(f"valor de x {(valory - beta0) /beta1}")
print(f"valor de y {valorx * beta1 + beta0}")


