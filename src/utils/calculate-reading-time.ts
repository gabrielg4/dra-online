import type { Blog } from "../../payload-types";

type ReadingTimeProps = {
  richText: Blog["conteudo"];
  wordsPerMinute?: number;
};

type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
  [key: string]: unknown; // Aceita outras propriedades que não vamos usar
};

function extrairTextoDoRichText(nodes: LexicalNode[]): string {
  let texto = "";

  for (const node of nodes) {
    // Se o nó tem a propriedade 'text', ele é um nó de texto.
    if (node.text) {
      texto += node.text + " ";
    }

    // Se o nó tem 'children', ele é um nó pai (como um parágrafo ou cabeçalho).
    // Chamamos a função recursivamente para processar seus filhos.
    if (node.children) {
      texto += extrairTextoDoRichText(node.children);
    }
  }

  return texto;
}

export const readingTime = ({
  richText,
  wordsPerMinute = 255,
}: ReadingTimeProps) => {
  // Se o campo richText não existir ou estiver vazio, o tempo de leitura é 0.
  if (!richText?.root?.children) {
    return 0;
  }

  // 1. Extrai a string de texto puro da estrutura do richText.
  const textoCompleto = extrairTextoDoRichText(richText.root.children);

  // 2. Conta as palavras.
  // O regex \s+ corresponde a um ou mais caracteres de espaço em branco.
  const numeroDePalavras = textoCompleto.trim().split(/\s+/).length;

  // Se não houver palavras, retorna 0 para evitar divisão por zero.
  if (numeroDePalavras === 0) {
    return 0;
  }

  // 3. Calcula e arredonda o tempo de leitura.
  const tempoDeLeitura = Math.ceil(numeroDePalavras / wordsPerMinute);

  return tempoDeLeitura;
};
