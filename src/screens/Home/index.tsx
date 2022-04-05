import React from 'react';



import {
    Container,
    Header,
    ContentWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,

} from './styles';

export function Home() {
    return (
        <Container>
            <Header>
                <ContentWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/cristianordon.png' }} />
                        <User>
                            <UserGreeting>Olá, Usuário! </UserGreeting>


                        </User>
                    </UserInfo>
                </ContentWrapper>
            </Header>

        </Container >
    );
}