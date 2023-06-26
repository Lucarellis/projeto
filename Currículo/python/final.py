nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))
nota4 = float(input("Digite a quarta nota: "))

final = (nota1 + nota2 + nota3 + nota4) / 4

print("A Nota Final é: ", final)

if final < 60:
    print('Reprovado')
elif final < 70:
    print('Mediano')
elif final < 80:
    print('Muito Bom')
elif final < 90:
    print('Ótimo')
else:
    print('Excelente')
    
#Ctrl + L= limpa tudo (arquivo executado)