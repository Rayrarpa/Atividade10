import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Ex07() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    if (!rodando) return; 
    const timer = setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => clearInterval(timer); // cleanup
  }, [rodando]);

  return (
    <View>
      <Text>Tempo: {segundos}s</Text>
      <Button title={rodando ? 'Pausar' : 'Retomar'} onPress={() => setRodando(!rodando)} />
    </View>
  );
}
