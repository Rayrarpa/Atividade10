import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

function Versao1() {
  const [valor, setValor] = useState(0);
  const [titulo, setTitulo] = useState('Valor: 0');

  useEffect(() => {
    console.log('Novo valor:', valor);
    setTitulo(`Valor: ${valor}`);
  }, [valor]);

  return (
    <View>
      <Text>Versão 1: {titulo}</Text>
      <Button title="+1 (versão 1)" onPress={() => setValor(valor + 1)} />
    </View>
  );
}

function Versao2() {
  const [valor, setValor] = useState(0);
  const titulo = `Valor: ${valor}`;

  useEffect(() => {
    console.log('Novo valor:', valor);
  }, [valor]);

  return (
    <View>
      <Text>Versão 2: {titulo}</Text>
      <Button title="+1 (versão 2)" onPress={() => setValor(valor + 1)} />
    </View>
  );
}

export default function Ex10() {
  return (
    <View>
      <Versao1 />
      <Versao2 />
    </View>
  );
}
