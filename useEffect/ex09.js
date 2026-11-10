import { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

export default function Ex09() {
  const [texto, setTexto] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    let cancelado = false;

    const t = setTimeout(async () => {
      if (!texto.trim()) {
        setResultados([]);
        return;
      }
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const todos = await res.json();
        if (!cancelado) {
          setResultados(
            todos.filter((u) => u.name.toLowerCase().includes(texto.toLowerCase()))
          );
        }
      } catch (e) {
        if (!cancelado) setResultados([]);
      }
    }, 500);

    return () => {
      cancelado = true;
      clearTimeout(t);
    };
  }, [texto]);

  return (
    <View>
      <TextInput placeholder="Buscar usuário..." value={texto} onChangeText={setTexto} />
      <FlatList
        data={resultados}
        scrollEnabled={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
