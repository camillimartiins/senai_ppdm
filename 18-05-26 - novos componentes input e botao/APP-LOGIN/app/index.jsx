/*import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header'
import tarefas from './dados/tarefas';



function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto}/>
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='sesi produtividade'/>
      <FlatList
      data={tarefas}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
 
})*/

import {useState} from "react";
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Logo from '../assets/images/logoo.jpg'

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login(){
    console.log('Dados do login:');
    console.log({email, senha});
  }
  return (
    <ScrollView>
     <Image
     source={Logo}
     resizeMethod="contain"
     />
     <Text style={estilos.titulo}>Login</Text>
     <Text style={estilos.sub}> Para prosseguir, insira seus dados</Text>
    </ScrollView>

    
  );
}

const estilos = StyleSheet.create({

})

