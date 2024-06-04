import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-bp-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.textColor}>Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="subtitle">Eu sou o Raphael!</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Etapa 1:</ThemedText>
        <ThemedText>Primeiro app concluído.</ThemedText>
        <ThemedText type="subtitle">E agora?</ThemedText>
        <ThemedText>
          Vamos aprender um pouco sobre a estrutura de arquivos.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color: '#NaN96b2',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textColor: {
    color: 'rgba(254, 150, 178, 0.992)'
  }
});
