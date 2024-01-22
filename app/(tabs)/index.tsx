import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Platform, RefreshControl } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Lottie from 'lottie-react-native';

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={()=>{animationRef.current?.play();}}
            tintColor={'transparent'}
          />
        }
      >
        <Lottie
        ref={animationRef}
          source={require('./Animation - 1705938539478.json')}
          loop={false}
          autoPlay={true}
          style={{width: 120, height: 120, alignSelf: 'center'}}
       
       />
      </ScrollView>
    </SafeAreaView>
  );
}