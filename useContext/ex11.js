import { createContext, useContext } from 'react';
import { View, Text } from 'react-native';

const UsuarioContext = createContext();

function Perfil() {
  const { nome, idade } = useContext(UsuarioContext);
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
    </View>
  );
}

export default function Ex11() {
  return (
    <UsuarioContext.Provider value={{ nome: 'Ana', idade: 25 }}>
      <Perfil />
    </UsuarioContext.Provider>
  );
}
