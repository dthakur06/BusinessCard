import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Button } from 'react-native';
import { Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProjectCard from './ProjectCard';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const name = 'Devyani T';

  const links = {
    github: 'github.com/dthakur06',
    x: 'x.com/dthakur06',
    email: 'hey@devyani.tech',
  };

  const getOccupation = () => {
    return 'Software Developer'
  }

  const renderIcons = () => {
    return(

      <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
      {links.github && (
        <TouchableOpacity onPress={() => Linking.openURL(`https://${links.github}`)}>
          <FontAwesome6 name="github" size={24} color="black" />
        </TouchableOpacity>
      )}

      {links.x && (
        <TouchableOpacity onPress={() => Linking.openURL(`https://${links.x}`)}>
          <FontAwesome6 name="twitter" size={24} color="black" />
        </TouchableOpacity>
      )}

      {links.email && (
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${links.email}`)}>
          <FontAwesome6 name="at" size={24} color="black" />
        </TouchableOpacity>
      )}

    </View>
    );
  }

  const contactMe = () => {
    Linking.openURL("mailto:hey@devyani.tech");
    // Linking.openURL("github.com/dthakur06");
    // Linking.openURL("x.com/dthakur06");
    };

  return ( 
    <SafeAreaProvider>
    <SafeAreaView edges={['bottom']}>
    <ScrollView>   
     <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/fc/fb/5a/fcfb5a5fa98f3fd9862c8d9e6fdd7911.jpg', }}
        style={{ width: '100%', aspectRatio: 16 / 9 }}
      />
      <Image 
      // @ts-ignore
      source={require('./assets/Devyani.png')}
      style={{ 
        width: 150, 
        height: 150, 
        borderRadius: 150, 
        borderWidth: 5,
        borderColor: 'white',
        marginTop: -75, 
      }} 
      />

      <Text style={{ fontSize: 30, fontWeight: 'bold'}}> {name} </Text>
      <Text>Software Developer</Text>

      {renderIcons()}

      <Button title="Contact me" onPress={contactMe} />

    <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  </Text>
<Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20}}>
  Projects
</Text>

<ScrollView 
horizontal 
showsHorizontalScrollIndicator={false} 
contentContainerStyle={{ gap: 10, padding: 10}}
>
  <ProjectCard name="PokesPoke" image={require(
// @ts-ignore
  './assets/projects/project1.png')}/>
  <ProjectCard name="Alpha Tauri" image={require(
// @ts-ignore
  './assets/projects/project2.png')}/>
  <ProjectCard name="Fisker Ocean" image={require(
// @ts-ignore
  './assets/projects/project3.png')}/>
  <ProjectCard name="Made Chat App" image={require(
// @ts-ignore
  './assets/projects/project4.png')}/>
  </ScrollView>

      <StatusBar style="light" />
    </View>
  </ScrollView>
  </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
