import { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

const CarrinhoContext = createContext();

function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionar = (item) =>
    setItens([...itens, { ...item, uid: Date.now() + Math.random() }]);
  const remover = (uid) => setItens(itens.filter((i) => i.uid !== uid));
  const total = itens.reduce((s, i) => s + i.preco, 0); // calculado, sem estado

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

const PRODUTOS = [
  { id: 1, nome: 'Camiseta', preco: 50 },
  { id: 2, nome: 'Tênis', preco: 200 },
  { id: 3, nome: 'Boné', preco: 30 },
];

function ListaProdutos() {
  const { adicionar } = useContext(CarrinhoContext);
  return (
    <View>
      <Text>Produtos</Text>
      {PRODUTOS.map((p) => (
        <View key={p.id}>
          <Text>{p.nome} — R$ {p.preco}</Text>
          <Button title="Adicionar" onPress={() => adicionar(p)} />
        </View>
      ))}
    </View>
  );
}

function Carrinho() {
  const { itens, remover, total } = useContext(CarrinhoContext);
  return (
    <View>
      <Text>Carrinho</Text>
      {itens.map((i) => (
        <View key={i.uid}>
          <Text>{i.nome} — R$ {i.preco}</Text>
          <Button title="Remover" onPress={() => remover(i.uid)} />
        </View>
      ))}
      <Text>Total: R$ {total}</Text>
    </View>
  );
}

export default function Ex13() {
  return (
    <CarrinhoProvider>
      <ListaProdutos />
      <Carrinho />
    </CarrinhoProvider>
  );
}
