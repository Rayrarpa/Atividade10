import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput placeholder="Seu nome" value={nome} onChangeText={setNome} />
      <Button title="Entrar" onPress={() => nome.trim() && login(nome.trim())} />
    </View>
  );
}
