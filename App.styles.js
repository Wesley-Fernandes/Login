import styled from "styled-components/native";
import { Twitter } from "lucide-react-native";
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #F1F1F1;
`;


export const InputText = styled.TextInput`
    height: 45px;
    padding-left: 15px;
    background-color: #fff;
    border-bottom-width: 1px;
    border-bottom-color: #F1F1F1;

    color: black;
`;

export const Logo = styled.Image`
    margin-bottom: 15px;
`

export const Button = styled.Pressable`
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 60px;
    width: 100%;

`

export const TextButton = styled.Text`
    color: #434343;
    font-size: 20px;
    font-weight: 500;
`;

export const Form = styled.View`
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    overflow: hidden;
    width: 95%;
    height: fit-content;
    flex-direction: column;
`;

export const Separator = styled.Text`
    margin-top: 40px;
    margin-bottom: 40px;
    opacity: 0.3;
`
export const Options = styled.View`
    width: 95%;
    gap: 5px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextSocial = styled.Text`
    color: #fff;
    font-size: 25px;
    height: 100%;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

export const TextIcon = styled.Text`
    color: red;
    font-size: 35px;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`
export const FacebookButton = styled.Pressable`
    background-color: #4178BF;
    border: 1px solid #3E6AC0;
    min-height: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 5px;

    width: 180px;
    border-radius: 5px;
`

export const TwitterButton = styled.Pressable`
    background-color: #22CCF2;
    border: 1px solid #18B1EA;
    min-height: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 5px;
    gap: 5px;
    width: 180px;
    border-radius: 10px;
`