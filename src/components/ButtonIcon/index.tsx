import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
/* import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; */

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

/* type Props = RectButtonProps & {
  title: string;
}; */

type Props = {
  title: string;
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
