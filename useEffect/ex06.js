import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

function LogMontagem() {
  useEffect(() => {
    console.log('Componente montado');
    return () => console.log('Componente desmontado');
  }, []);
  return <Text>Olhe o console!</Text>;
}

export default function Ex06() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <View>
      <Button title="Montar / Desmontar" onPress={() => setMostrar(!mostrar)} />
      {mostrar && <LogMontagem />}
    </View>
  );
}
