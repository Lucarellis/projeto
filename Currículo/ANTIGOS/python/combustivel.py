precoAlcool = float(input("Insira o valor do alcool: "))
precoGasolina = float(input("Insira o valor da gasolina: "))

resultado = precoAlcool / precoGasolina

print(resultado)

if resultado > 0.7:
    print("Abasteça com gasolina")
else:
    print("Abasteça com alcool")