import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.0.104:3000';

function showError(err) {
  Alert.alert('Ops! Houve um Problema!', `Mensagem: ${err}`);
}

function showSuccess(msg) {
  Alert.alert('Success!', msg);
}

export {server, showError, showSuccess};