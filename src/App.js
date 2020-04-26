import React, {useState, useEffect, useRef} from 'react';
import LogoProesc from '../src/assets/icons/logo_proesc.png';

import {useNetInfo} from '@react-native-community/netinfo';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../src/styles/global'

export default function NetworkInformation() {
  const netInfo = useNetInfo();
  const [backgroundColor, setBackgroundCollor]     = useState(true);
  const [messageConnection, setMessageConnection] = useState('Conectado');
  const component = useRef();

  useEffect(() => {
    if (netInfo.isConnected) {
      setMessageConnection('Conectado!');
      setBackgroundCollor('#0066cc');
    } else {
      setMessageConnection('Sem conexão..');
      setBackgroundCollor('#B6470D');
    }
  });

  return (
    <View style={[styles.containerComponent, {backgroundColor}]}>
        <Image
          source={LogoProesc}
        />
        <Text style={styles.texto}>{messageConnection}</Text>
      </View>
  );
}