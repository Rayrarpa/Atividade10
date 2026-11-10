import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Ex03() {
  const [visivel, setVisivel] = useState(false);
  return (
    <View>
      <Button title="Mostrar / Esconder" onPress={() => setVisivel(!visivel)} />
      {visivel && <Text>Você encontrou o segredo!</Text>}
    </View>
  );
}
