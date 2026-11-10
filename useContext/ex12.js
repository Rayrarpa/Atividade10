import { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

const TemaContext = createContext();

function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  const alternarTema = () => setTema((t) => (t === 'claro' ? 'escuro' : 'claro'));
  const cores =
    tema === 'escuro'
      ? { fundo: '#111', texto: '#fff' }
      : { fundo: '#fff', texto: '#111' };

  return (
    <TemaContext.Provider value={{ tema, alternarTema, ...cores }}>
      {children}
    </TemaContext.Provider>
  );
}

function Header() {
  const { fundo, texto } = useContext(TemaContext);
  return (
    <View style={{ backgroundColor: fundo, padding: 16 }}>
      <Text style={{ color: texto, fontSize: 20 }}>Meu App</Text>
    </View>
  );
}

function Corpo() {
  const { fundo, texto, tema, alternarTema } = useContext(TemaContext);
  return (
    <View style={{ backgroundColor: fundo, padding: 16 }}>
      <Text style={{ color: texto }}>Tema atual: {tema}</Text>
      <Button title="Alternar tema" onPress={alternarTema} />
    </View>
  );
}

export default function Ex12() {
  return (
    <TemaProvider>
      <Header />
      <Corpo />
    </TemaProvider>
  );
}
