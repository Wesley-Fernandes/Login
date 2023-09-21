import {
  Button,
  Container,
  FacebookButton,
  Form,
  InputText,
  Logo,
  Options,
  Separator,
  TextButton,
  TextSocial,
  TwitterButton
} from './App.styles';
import { StatusBar } from 'expo-status-bar';
import { Twitter, Facebook } from "lucide-react-native";
import { TextIcon } from 'lucide-react-native';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Logo source={require('./assets/logo.png')} />
      <Form>
        <InputText placeholder='Email address' placeholderTextColor="#B9B9B9" />
        <InputText placeholder='Password' placeholderTextColor="#B9B9B9" />
        <Button >
          <TextButton>Login</TextButton>
        </Button>
      </Form>
      <Separator>or log in using</Separator>
      <Options>
        <FacebookButton >
          <TextIcon>
            <Facebook
              color='#fff'
              fill='#fff'
              size={25}
              strokeWidth={1.5} />
          </TextIcon>
          <TextSocial>
            Facebook
          </TextSocial>
        </FacebookButton>
        <TwitterButton >
          <TextIcon>
            <Twitter
              color='#fff'
              fill='#fff'
              size={25}
              strokeWidth={1.5} />
          </TextIcon>
          <TextSocial>
            Twitter
          </TextSocial>
        </TwitterButton>
      </Options>
    </Container>
  );
}

