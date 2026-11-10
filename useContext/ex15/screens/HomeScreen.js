import { View, Text, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function HomeScreen() {
  const { usuario, logout } = useAuth();

  return (
    <View>
      <Text>Bem-vindo, {usuario.nome}</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
