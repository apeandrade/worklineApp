import styled from 'styled-components/native';

export const Background = styled.View`
flex:1;
background-color: #f4a460;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
height: 50px;
width: 90%;
background-color: rgbargba(0,0,0,0.20)';
margin-top: 30px;
font-size: 17px;
`;

export const SubmitButton = styled.TouchableOpacity`
height: 50px;
width: 90%;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color:#556b2f;
`;

export const EscButton = styled.TouchableOpacity`
height: 50px;
width: 90%;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color:#8b0000;
`;

export const SubmitText = styled.Text`
font-size: 21px;
font-weight: bold;
color: #FFF;
`;
