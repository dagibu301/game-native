import React from 'react';
import { View, Text, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Easily {'\n'}
          organize {'\n'}
          your games
        </Text>

        <Text style={styles.subtitle}>
          create groups to play your favorite games {'\n'}
          with your friends
        </Text>

        <ButtonIcon title='Sign in with Discord' />
      </View>
    </View>
  );
};
