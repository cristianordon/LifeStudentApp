import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
   
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    background-color:  ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;

`;

export const ContentWrapper = styled.View``;

export const UserInfo = styled.View``;

export const Photo = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    border-radius: 50px;
`;

export const User = styled.View`
    margin: ${RFValue(12)}px`;



export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular_italic_mono};
    font-size: ${RFValue(24)}px;
    font-style: italic;
`;