import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Ex05() {
  const [jogo, setJogo] = useState({ pontos: 0, vidas: 3 });

  return (
    <View>
      <Text>Pontos: {jogo.pontos}</Text>
      <Text>Vidas: {jogo.vidas}</Text>
      <Button title="Acertar" onPress={() => setJogo({ ...jogo, pontos: jogo.pontos + 1 })} />
      <Button
        title="Errar"
        onPress={() => setJogo({ ...jogo, vidas: Math.max(0, jogo.vidas - 1) })}
      />
    </View>
  );
}
