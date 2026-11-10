import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Ex02() {
  const [nome, setNome] = useState('');
  return (
    <View>
      <TextInput placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
      <Text>Olá, {nome}!</Text>
    </View>
  );
}
