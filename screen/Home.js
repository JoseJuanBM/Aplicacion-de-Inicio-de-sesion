import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Input,
  Icon,
  View,
} from 'native-base';
export default class IconTextboxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://crossoverrobor.000webhostapp.com/mostrar.php',
    };
  }
  componentDidMount() {
    this.getPokemon();
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemon: res.results,
          url: res.next,
          loading: false,
        });
      });
  }
  getPokemon = () => {
    this.setState({loading: true});
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={misEstilos.content}>
          <Text>Descargando Pokemones</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <View style={misEstilos.content}>
        <FlatList
          data={this.state.pokemon}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
  },
});
