import { Image, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/bp-logo.png')}
          style={{height: 250, width: 390}}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{color: 'rgba(254, 150, 178, 0.992)'}}>BP</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">BlackPink</ThemedText>
        <Image
          source={require('@/assets/images/integrantes.jpeg')}
                  style={{height: 330, width: 330, borderRadius: 5}}
        />
        <ThemedText>
          Um dos mais famosos grupos femininos do gênero pop da atualidade.
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
      },
      stepContainer: {
        gap: 8,
        marginBottom: 8,
      },
      reactLogo: {
        height: 130,
        width: 100,
        bottom: 60,
        left: 100,
        position: 'absolute',
      },
  });
  