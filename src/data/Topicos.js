export const topicos = [
  {
    id: "aplicacoes",
    title: "Por que aprender Python? Suas aplicações no mundo real",
    description: "Descubra como o Python é usado em áreas como ciência de dados, desenvolvimento web e automação — e por que essa popularidade faz sentido.",
    content1: `<p>Aprender Python abre portas para muitos campos da tecnologia. Por ser uma linguagem de propósito geral, ela se tornou favorita em diversos cenários de alta demanda. Confira algumas das aplicações mais relevantes:</p>
<ul>
  <li><strong>Ciência de Dados e Machine Learning:</strong> Com bibliotecas como NumPy, Pandas e Matplotlib, é possível manipular, analisar e visualizar grandes volumes de dados com poucas linhas de código.</li>
  <li><strong>Desenvolvimento Web:</strong> Frameworks como Django e Flask permitem construir desde blogs até redes sociais e e-commerce robustos.</li>
  <li><strong>Automação e Scripting:</strong> Python brilha quando o objetivo é automatizar tarefas repetitivas — renomear arquivos, extrair dados de sites, enviar e-mails automaticamente, preencher planilhas, entre outros.</li>
  <li><strong>Inteligência Artificial e Visão Computacional:</strong> Muitos sistemas modernos de IA e de processamento de imagens utilizam Python como linguagem principal ou de ligação, pela sua sintaxe simples e vasta comunidade.</li>
</ul>`,
    code1: `# Um pequeno trecho que prepara ambiente para análise de dados usando Pandas.
import pandas as pd

# A partir daqui, você poderia carregar dados de um arquivo csv, fazer seleção e visualização.`,
    content2: `<p>A razão pela qual Python domina tantos desses nichos não é mágica: ela se apoia em características fundamentais bem pensadas.</p>
<p>Por exemplo: em ciência de dados, parte do “motor pesado” (como cálculos vetoriais) pode estar escrito em C ou C++ — enquanto o desenvolvedor interage com tudo via a sintaxe simples do Python. Isso permite combinar performance com produtividade.</p>
<p>Na automação, a natureza de script da linguagem — ou seja, código que pode rodar direto, com sintaxe clara — permite prototipar e executar tarefas com agilidade.</p>`,
    code2: `# Exemplo conceitual de automação.
import os

# os.rename("relatorio_janeiro.txt", "relatorio_01_arquivado.txt")
print("Tarefa de automação concluída com sucesso!")`
  },
  {
    id: "ola_mundo",
    title: "Seu primeiro programa: o 'Olá, Mundo!'",
    description: "Escreva e execute seu primeiro código em Python. Entenda a função print(), o que significa rodar um programa e dar os primeiros passos práticos.",
    content1: `<p>Vamos começar com um clássico da programação: exibir a mensagem “Olá, Mundo!”. Em Python, isso é simples e direto.</p>
<p>Usamos a função <code>print()</code> — que serve para “imprimir” (mostrar) algo na tela.</p>
<p>Vamos analisar o comando:</p>
<ul>
  <li><code>print</code>: nome da função que queremos usar.</li>
  <li><code>()</code>: parênteses para chamar a função e passar argumentos.</li>
  <li><code>"Olá, Mundo!"</code>: o argumento – texto que queremos exibir. Como é texto, deve estar entre aspas.</li>
</ul>`,
    code1: `# Este comando chama a função print e mostra o texto.
print("Olá, Mundo!")`,
    content2: `<p>Como executar:</p>
<ol>
  <li>Abra um editor de texto simples ou IDE (ex: VS Code, Sublime Text).</li>
  <li>Copie o código acima no arquivo e salve com extensão <code>.py</code>, por exemplo: <code>meu_primeiro_programa.py</code>.</li>
  <li>No terminal, navegue até a pasta onde está o arquivo.</li>
  <li>Execute com <code>python meu_primeiro_programa.py</code> (ou <code>python3</code>, dependendo do sistema).</li>
</ol>
<p>Se tudo der certo, você verá: <code>Olá, Mundo!</code></p>
<p>Uma boa prática é usar <strong>comentários</strong> para explicar partes do código. Comentários começam com <code>#</code> e o Python os ignora. São úteis para o programador, não para o computador.</p>`,
    code2: `# Comentário: explicando o que o código faz
# A linha abaixo imprime uma frase personalizada.
print("Olá, Mundo! Esta é a minha primeira linha de código.")`
  },
  {
    id: "variaveis",
    title: "Guardando informações: introdução às variáveis",
    description: "Entenda o que são variáveis e como usá-las para armazenar e gerenciar dados em seus programas.",
    content1: `<p>Pense nas variáveis como etiquetas que você cola em potes para organizar ingredientes: “açúcar”, “farinha”, “sal”. Na programação fazemos algo semelhante com as informações — usamos variáveis para dar nomes aos dados que queremos armazenar.</p>
<p>Em Python, uma variável é criada no momento em que você atribui um valor a ela. Não é necessário declarar seu tipo antecipadamente — é o que chamamos de tipagem dinâmica. [em texto explicativo]</p>`,
    code1: `# Criando uma variável chamada saudacao
saudacao = "Olá, programador(a)!"

# Usando a variável ao invés de repetir o texto
print(saudacao)`,
    content2: `<p>A analogia da “etiqueta” é mais precisa do que “caixa”. Quando você faz <code>idade = 30</code>, cria-se um objeto número “30” em memória e cola a etiqueta <code>idade</code> nele. Se depois fizer <code>idade = "Trinta"</code>, a etiqueta se descola do “30” e cola-se no “Trinta”. O Python permite que você mude o tipo da variável — tipagem dinâmica. [em texto explicativo]</p>
<p>Boas práticas de nomeação de variáveis:</p>
<ul>
  <li>Nome deve começar com letra ou sublinhado (_).</li>
  <li>Pode conter letras, números e sublinhados.</li>
  <li>Sensível a maiúsculas: <code>idade</code> ≠ <code>Idade</code>.</li>
  <li>Use convenção <code>snake_case</code> (minúsculas + sublinhados) para melhor legibilidade.</li>
</ul>`,
    code2: `# Exemplo mostrando que a mesma variável pode mudar de tipo
valor = 100       # inteiro
print(valor, type(valor))

valor = 100.5     # float
print(valor, type(valor))

valor = "Cem"     # string
print(valor, type(valor))`
  },
  {
    id: "tipos_de_dados",
    title: "Tipos de dados essenciais: números, textos e booleanos",
    description: "Conheça os blocos de construção de qualquer programa: strings, inteiros, floats e booleanos.",
    content1: `<p>Toda variável referencia um valor, e cada valor tem um <strong>tipo de dado</strong>. O tipo define quais operações são possíveis com aquele valor. Por exemplo: faz sentido somar dois números, mas não faz sentido dividir um nome por um endereço.</p>
<p>Os tipos fundamentais em Python são:</p>
<ul>
  <li><strong>String (<code>str</code>)</strong>: texto entre aspas, ex: <code>"Olá"</code>.</li>
  <li><strong>Integer (<code>int</code>)</strong>: números inteiros, ex: <code>42</code>.</li>
  <li><strong>Float (<code>float</code>)</strong>: números decimais, ex: <code>3.14</code>.</li>
  <li><strong>Boolean (<code>bool</code>)</strong>: valores lógicos <code>True</code> ou <code>False</code>, usados para decisões.</li>
</ul>`,
    code1: `# Exemplos de variáveis com diferentes tipos de dados
nome_do_curso   = "Python para Iniciantes"   # str
alunos_inscritos = 1500                       # int
avaliacao_media  = 4.7                        # float
curso_ativo      = True                        # bool

print(nome_do_curso, alunos_inscritos, avaliacao_media, curso_ativo)`,
    content2: `<p>Quer ver o tipo “dentro da caixa”? Use a função <code>type()</code> para saber o tipo de uma variável ou valor. [em texto explicativo]</p>
<p>Exemplo de erro comum: tentar somar número e texto, como <code>10 + "5"</code>. O Python reclama. Sempre converta (casting) antes de operações cruzadas.</p>`,
    code2: `idade = 30
altura = 1.75
nome   = "Carlos"

print(type(idade))   # <class 'int'>
print(type(altura))  # <class 'float'>
print(type(nome))    # <class 'str'>`
  },
  {
    id: "atribuicao_e_casting",
    title: "Atribuição múltipla e conversão de tipos (casting)",
    description: "Aprenda técnicas para atribuir valores a várias variáveis de uma vez e para converter dados entre diferentes tipos quando necessário.",
    content1: `<p>Python oferece atalhos que tornam seu código mais conciso e legível.</p>
<p>Por exemplo, a <strong>atribuição múltipla</strong> permite duas formas principais:</p>
<ol>
  <li>Inicializar várias variáveis em uma linha: <code>x, y, z = 10, 20, 30</code>.</li>
  <li>Atribuir o mesmo valor a várias variáveis: <code>a = b = c = 0</code>.</li>
</ol>`,
    code1: `# Atribuindo múltiplos valores
x, y, z = 10, 20, 30
print(x, y, z)

# Atribuindo o mesmo valor
ponto_a = ponto_b = ponto_c = 0
print(ponto_a, ponto_b, ponto_c)`,
    content2: `<p>Outra técnica importante é a conversão de tipo — ou <strong>casting</strong>. Quando recebemos um valor (por exemplo, de <code>input()</code>) como string, mas precisamos que seja número, convertemos antes de operar.</p>
<p>Funções comuns:</p>
<ul>
  <li><code>int(valor)</code> → inteiro</li>
  <li><code>float(valor)</code> → ponto flutuante</li>
  <li><code>str(valor)</code> → string</li>
</ul>
<p>Erro comum: <code>int("olá")</code> dá erro, porque “olá” não representa número.</p>`,
    code2: `# Temos um número de ponto flutuante
preco_produto_float = 99.90
print(type(preco_produto_float))  # float

# Convertendo para inteiro (parte decimal é perdida)
preco_produto_int = int(preco_produto_float)
print(preco_produto_int, type(preco_produto_int))  # int

# Convertendo para string para exibição em mensagem
preco_produto_str = str(preco_produto_int)
print("O preço arredondado é: " + preco_produto_str + " reais.")
print(type(preco_produto_str))  # str`,
  },
  {
    id: "input_usuario",
    title: "Tornando o programa interativo: a função input()",
    description: "Aprenda a receber dados do usuário usando <code>input()</code> e a combinar com casting para tornar seu programa responsivo.",
    content1: `<p>Até agora, os dados vinham de dentro do código. Para criar programas realmente úteis, precisamos receber dados do <strong>usuário</strong>. A função <code>input()</code> faz isso.</p>
<p>O que <code>input()</code> faz:</p>
<ol>
  <li>Exibe uma mensagem-prompt para o usuário digitar algo.</li>
  <li>Pausa o programa até o usuário digitar algo e pressionar Enter.</li>
  <li>Retorna o que foi digitado como string (<code>str</code>), sempre — mesmo que o usuário digite número.</li>
</ol>`,
    code1: `# Solicita o nome do usuário
nome = input("Por favor, digite o seu nome: ")

saudacao = "Olá, " + nome + "! Seja bem-vindo(a)."
print(saudacao)`,
    content2: `<p>Como <code>input()</code> retorna string, se você espera número, deve fazer o casting. E então, podemos usar f-string para exibir mensagem formatada.</p>
<p>Exemplo completo:</p>`,
    code2: `nome_usuario = input("Qual é o seu nome? ")
ano_nascimento_str = input("Em que ano você nasceu? ")

# Converte string para inteiro
ano_nascimento_int = int(ano_nascimento_str)

ano_atual = 2024
idade = ano_atual - ano_nascimento_int

print(f"Olá, {nome_usuario}! Você tem ou fará {idade} anos em {ano_atual}.")`,
  },
  {
    id: "listas",
    title: "Organizando dados: introdução às listas",
    description: "Descubra as listas, a estrutura de dados mais versátil do Python, para armazenar e manipular coleções de itens.",
    content1: `<p>Uma lista é uma coleção <strong>ordenada</strong> e <strong>mutável</strong> de itens. “Ordenada” significa que a ordem importa; “mutável” significa que você pode alterar, adicionar ou remover itens após a criação.</p>
<p>Em Python, usamos colchetes <code>[ ]</code> e separamos itens por vírgulas. Cada item tem um índice, começando em 0.</p>`,
    code1: `# Uma lista de frutas
frutas = ["maçã", "banana", "cereja"]

# Acessando o primeiro item (índice 0)
print(frutas[0])

# Modificando o segundo item (índice 1)
frutas[1] = "manga"
print(frutas)`,
    content2: `<p>Como as listas são mutáveis, existem métodos úteis para manipulá-las:</p>
<ul>
  <li><code>.append(item)</code>: adiciona item ao final.</li>
  <li><code>.pop(indice)</code>: remove item em índice indicado ou o último se não houver índice.</li>
  <li><code>.insert(indice, item)</code>: insere item em posição específica.</li>
  <li><code>.remove(valor)</code>: remove primeira ocorrência do valor.</li>
</ul>
<p>Função <code>len(lista)</code> devolve quantos itens há. Erro comum: índice fora de alcance (“index out of range”) se usar número maior que <code>len-1</code>.</p>`,
    code2: `numeros = [2, 3, 4]

# Adicionando 40 ao final
numeros.append(40)
print(f"Após append: {numeros}")

# Removendo o último item
item_removido = numeros.pop()
print(f"Item removido: {item_removido}")
print(f"Após pop: {numeros}")

# Verificando tamanho da lista
print(f"Tamanho da lista: {len(numeros)}")`,
  },
  {
    id: "metodos_iteracao",
    title: "Métodos para percorrer listas: enumerate e zip",
    description: "Aprofunde o laço ‘for’ básico e aprenda técnicas mais ‘Pythônicas’ para iterar, como <code>enumerate()</code> para índice+valor e <code>zip()</code> para múltiplas listas.",
    content1: `<p>Quando precisamos também do índice de cada elemento ao iterar, a função <code>enumerate()</code> é a forma recomendada. Ela devolve pares (<em>índice, valor</em>) de forma clara e legível.</p>`,
    code1: `tarefas = ['Lavar a louça', 'Passear com o cachorro', 'Fazer compras']

print("Usando enumerate:")
for indice, tarefa in enumerate(tarefas):
    print(f"Tarefa {indice + 1}: {tarefa}")`,
    content2: `<p>Quando temos duas ou mais listas e queremos percorrê-las em paralelo, usamos <code>zip()</code>. Ele “zipa” as listas e retorna tuplas correspondentes. Ele para quando a menor lista termina.</p>`,
    code2: `nomes  = ["Ana", "Bruno", "Carla"]
idades = [19, 22, 18]

for nome, idade in zip(nomes, idades):
    print(f"{nome} tem {idade} anos.")`,
  },
  {
    id: "repeticoes",
    title: "Automatizando tarefas: laços de repetição (for e while)",
    description: "Aprenda a repetir blocos de código com os laços <code>for</code> e <code>while</code>, e a gerar sequências com <code>range()</code>.",
    content1: `<p>Laços de repetição permitem executar um mesmo bloco de código várias vezes. O laço <code>for</code> é ideal para percorrer uma sequência, como uma lista. A sintaxe básica: <code>for item in sequencia:</code>.</p>`,
    code1: `frutas = ["maçã", "banana", "cereja"]
for fruta in frutas:
    print(f"Eu gosto de {fruta}")`,
    content2: `<p>Se quisermos repetir algo um número específico de vezes, usamos <code>range()</code>. E quando não sabemos quantas vezes vamos repetir, mas sabemos a condição de parada, usamos <code>while</code>. Atenção: sempre atualize a condição no while, senão vira “loop infinito”.</p>`,
    code2: `print("Contagem com range:")
for i in range(5):  # vai de 0 até 4
    print(i)

print("\nContagem com while:")
contador = 1
while contador <= 3:
    print(contador)
    contador = contador + 1  # atualiza condição para parar o loop`,
  },
  {
    id: "tuplas",
    title: "Dados imutáveis: conhecendo as tuplas",
    description: "Entenda as tuplas — coleções ordenadas e imutáveis — e aprenda o recurso de desempacotamento (<em>unpacking</em>), que facilita trabalhar com elas.",
    content1: `<p>Uma tupla é muito parecida com uma lista (coleção ordenada). A diferença é que ela é <strong>imutável</strong>: uma vez criada, seus valores não mudam. Isso a torna ideal para registros fixos, como coordenadas, cores ou dados que não devem ser alterados.</p>`,
    code1: `coordenadas = (10, 20)
print(f"Coordenada X: {coordenadas[0]}")
# coordenadas[0] = 15  # isso gera erro, pois tuplas são imutáveis`,
    content2: `<p>Um dos recursos mais elegantes das tuplas é o <strong>desempacotamento</strong>: podemos atribuir os valores a variáveis de forma clara e limpa. Exemplo:<br>
<code>x, y = ponto</code></p>`,
    code2: `ponto = (150, 75)
x, y = ponto
print(f"O valor de x é {x}")
print(f"O valor de y é {y}")`,
  },
  {
    id: "dicionarios",
    title: "Pares chave-valor: explorando dicionários",
    description: "Aprenda a usar dicionários para armazenar dados em pares “chave: valor”, permitindo buscas rápidas e organizadas.",
    content1: `<p>Diferente de listas ou tuplas, que são indexadas por números, os dicionários usam <strong>chaves</strong>: pense num dicionário real — você busca uma palavra (chave) para obter sua definição (valor).</p>
<p>Em Python, definimos dicionários com chaves <code>{}</code>. As chaves devem ser únicas e imutáveis (por exemplo, strings ou números). Os valores podem ser de qualquer tipo.</p>`,
    code1: `aluno = {"nome": "Carlos", "idade": 22}
print(aluno["nome"])

# Adicionando nova chave-valor
aluno["curso"] = "Engenharia"
print(aluno)`,
    content2: `<p>Para percorrer um dicionário, usamos <code>.items()</code>, que retorna pares (chave, valor). Também há <code>.keys()</code> e <code>.values()</code>.</p>`,
    code2: `aluno = {"nome": "Carlos", "idade": 22, "curso": "Engenharia"}

for chave, valor in aluno.items():
    print(f"A chave é '{chave}' e o valor é '{valor}'.")`,
  },
  {
    id: "funcoes",
    title: "Blocos reutilizáveis: criando funções",
    description: "Organize seu código, evite repetição e crie programas mais limpos e eficientes aprendendo a definir-e usar funções.",
    content1: `<p>Funções são blocos de código nomeados que executam uma tarefa específica. Em vez de repetir código, você escreve a função uma vez e a chama sempre que precisar. Isso melhora a legibilidade e a manutenção.</p>
<p>Para definir uma função usamos <code>def</code>, nome da função, parênteses com parâmetros (opcionais) e dois pontos. O código da função é indentado.</p>`,
    code1: `def saudar(nome):
    print(f"Olá, {nome}! Bem-vindo(a).")

saudar("Maria")
saudar("João")`,
    content2: `<p>Se a função precisa devolver um valor para ser usado depois, usamos <code>return</code>. Diferente de <code>print</code>, que só exibe algo, <code>return</code> envia o valor para quem chamou. Também podemos definir parâmetros com valor padrão (opcionais).</p>`,
    code2: `def somar(a, b):
    resultado = a + b
    return resultado

soma = somar(5, 3)
print(f"O resultado da soma é {soma}")`,
  },
  {
    id: "excecoes",
    title: "Lidando com o inesperado: tratamento de erros",
    description: "Aprenda a criar programas robustos que não travam diante de erros, usando os blocos <code>try</code> e <code>except</code> para tratar exceções.",
    content1: `<p>Uma <strong>exceção</strong> é um erro que ocorre durante a execução de um programa — por exemplo, dividir por zero ou converter texto que não é número. Sem tratamento, a exceção faz o programa parar abruptamente.</p>
<p>Para lidar com isso, usamos o bloco <code>try…except</code>. O código que pode gerar erro vai dentro do <code>try</code>; se o erro ocorrer, o código do <code>except</code> correspondente é executado, impedindo que o programa falhe completamente.</p>`,
    code1: `try:
    resultado = 10 / 0
    print(resultado)
except ZeroDivisionError:
    print("Erro: você não pode dividir um número por zero!")`,
    content2: `<p>Boa prática: capture exceções específicas, não use <code>except:</code> genérico — isso evita mascarar erros reais. Você também pode usar <code>else</code> (quando não houve erro) e <code>finally</code> (sempre executado, dê limpeza ou fechamento de recursos).</p>`,
    code2: `try:
    numero_str = input("Digite um número: ")
    numero_int = int(numero_str)
except ValueError:
    print("Isso não é um número válido.")
else:
    print(f"Ótimo! O número que você digitou foi {numero_int}.")
finally:
    print("Fim da tentativa de conversão.")`,
  },
  {
    id: "condicionais",
    title: "Tomando decisões: if, elif, else e match/case",
    description: "Aprenda a usar as estruturas condicionais para que seu programa decida e execute diferentes caminhos conforme circunstâncias.",
    content1: `<p>Na programação, nem todo código deve ser executado da mesma forma para todas as entradas. As estruturas condicionais permitem que seu programa escolha entre diferentes caminhos de execução com base em <strong>condições</strong>. Em Python, as formas básicas são <code>if</code>, <code>elif</code> e <code>else</code>. [2]</p>
<p>Exemplo simples:</p>
<pre><code>numero = -5

if numero &gt; 0:
    print("Número positivo")
elif numero &lt; 0:
    print("Número negativo")
else:
    print("Zero")</code></pre>
<p>Explicação:</p>
<ul>
  <li>Se (<code>numero &gt; 0</code>) for verdadeiro → executa primeiro bloco.</li>
  <li>Senão, se (<code>numero &lt; 0</code>) for verdadeiro → executa o segundo bloco.</li>
  <li>Se nenhuma condição for verdadeira → executa o bloco <code>else</code>. [3]</li>
</ul>`,
    code1: `# Verificação simples de número positivo, negativo ou zero
numero = int(input("Digite um número: "))

if numero > 0:
    print("Você digitou um número positivo.")
elif numero < 0:
    print("Você digitou um número negativo.")
else:
    print("Você digitou zero.")`,
    content2: `<p>A partir do Python 3.10 foi introduzida a estrutura <code>match/case</code>, que permite fazer “combinações de padrão” (pattern matching) de maneira mais expressiva — útil quando temos muitos casos distintos ou queremos comparar estruturas complexas. [0][12]</p>
<p>Exemplo de <code>match/case</code>:</p>
<pre><code>def verificar_dia(dia):
    match dia:
        case "segunda" | "terça" | "quarta" | "quinta" | "sexta":
            print("Dia útil")
        case "sábado" | "domingo":
            print("Fim de semana")
        case _:
            print("Dia inválido")

verificar_dia("terça")  # imprime: Dia útil</code></pre>
<p>O <code>case _:</code> funciona como “caso padrão” — equivalente ao <code>else</code>. [12]</p>`,
    code2: `# Exemplo com match/case para categoria de idade
idade = int(input("Digite sua idade: "))

match idade:
    case _ if idade < 0:
        print("Idade inválida!")
    case _ if idade <= 12:
        print("Criança")
    case _ if idade <= 19:
        print("Adolescente")
    case _ if idade <= 64:
        print("Adulto")
    case _:
        print("Idoso")`,
  }
]
