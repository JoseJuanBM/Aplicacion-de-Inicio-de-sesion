import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Item,
  Input,
  Icon,
} from 'native-base';
import api from '../data/api';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      user: '',
      pass: '',
    };
  }
  register = () =>
    api.registerData(this.state.email, this.state.user, this.state.pass);
  render() {
    const navegar = this.props.navigation;

    return (
      <Container>
        <Content padder contentContainerStyle={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>
                {this.props.route.params.titulo}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body style={misEstilos.body}>
                <Item inlineLabel>
                  <Icon type="FontAwesome" name="envelope" />
                  <Input
                    placeholder="Correo electronico"
                    onChangeText={email => this.setState({email})}
                  />
                </Item>
                <Item inlineLabel>
                  <Icon type="FontAwesome" name="user" />
                  <Input
                    placeholder="Nombre de usuario"
                    onChangeText={user => this.setState({user})}
                  />
                </Item>
                <Item inlineLabel>
                  <Icon type="FontAwesome" name="lock" />
                  <Input
                    placeholder="contraseña"
                    onChangeText={pass => this.setState({pass})}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary onPress={() => navegar.navigate('Login')}>
                <Text>Login</Text>
              </Button>
              <Button success style={misEstilos.boton} onPress={this.register}>
                <Text>Guardar</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '35%',
  },
  body: {
    paddingVertical: 30,
  },
});

export default Registro;
