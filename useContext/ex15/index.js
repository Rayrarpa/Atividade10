import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function Rotas() {
  const { usuario } = useAuth();
  return usuario ? <HomeScreen /> : <LoginScreen />;
}

export default function Ex15() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}
