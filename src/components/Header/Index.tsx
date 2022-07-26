import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
    Container,
    HeaderTitle,
    UserName,
    ProfileButton,
    UserAvatar,
  
  } from './styles';
import { useAuth } from '@src/hooks/auth';

export function Header(){

    const { user, signOut } = useAuth();

    const {navigate} = useNavigation()

    const navigateToProfile = useCallback(() => {
      // navigate('Profile');
      signOut();
    },[navigate])


    return(
        <Container>
            <HeaderTitle>
            Bem vindo, {"\n"}
            <UserName>{user.name}</UserName>
            </HeaderTitle>
        
            <ProfileButton onPress={navigateToProfile} >
            <UserAvatar source ={{ uri: user.photo}} />
            </ProfileButton>

        
        </Container>
    )
}

