import styled, {css} from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { Provider } from './index';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding-bottom: ${getBottomSpace() + 68}px;
  /* justify-content: center; */
`;


// export const Content = styled.ScrollView.attrs({
//   showsVerticalScrollIndicator: false,
//   contentContainerStyle: {
//     paddingBottom: getBottomSpace() + 48
//   }
// })`
//   width: 100%;
//   /* padding: 0 32px; */

// `;
export const Content = styled.SafeAreaView`
  width: 100%;
  padding-bottom: 130px;

  /* margin-bottom: 50px; */
  /* padding: 0 32px; */

`;

export const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 52px 0 24px;
`

export const Title = styled.Text`
  font-size: 32px;
  align-self: center;

  ${({theme})=> css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE}
  `};

`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 0px 24px 0px;
`;

export const ProviderContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  color: #999591;
  margin-left: 8px;
  font-family: ${({theme}) => theme.FONTS.TEXT};
`;
export const ProvidersListTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  font-size: 24px;
  color: #f4ede8;
  margin-bottom: 24px;
`;