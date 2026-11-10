import { createContext, useContext, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const login = (nome) => setUsuario({ nome });
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function TelaLogin() {
  const { login } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  return (
    <View>
      <TextInput placeholder="Seu nome" value={nome} onChangeText={setNome} />
      <Button title="Entrar" onPress={() => nome.trim() && login(nome.trim())} />
    </View>
  );
}

function TelaPrincipal() {
  const { usuario, logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Bem-vindo, {usuario.nome}</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}

function Rotas() {
  const { usuario } = useContext(AuthContext);
  return usuario ? <TelaPrincipal /> : <TelaLogin />;
}

export default function Ex14() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}
