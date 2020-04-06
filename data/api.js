import {Alert} from 'react-native';
const URL_DATA = 'http://192.168.0.106:80/nactive/';

class API {
  async validarLog(user, pass) {
    let s = `${URL_DATA}login.php?user=${user}&pass=${pass}`;
    console.log(s);
    const query = await fetch(`${URL_DATA}login.php?user=${user}&pass=${pass}`);
    const data = await query.json();
    return data;
  }

  registerData(email, user, pass) {
    fetch(`${URL_DATA}registrar.php`, {
      method: 'POST',
      body: JSON.stringify({
        pEmail: email,
        pUser: user,
        pPass: pass,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.status == 1) {
          Alert.alert('Registro exitoso');
        } else {
          Alert.alert('Ocurrio un Error');
        }
      });
  }
}

export default new API();
