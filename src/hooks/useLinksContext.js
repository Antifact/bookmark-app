import { useContext } from 'react';
import { LinksContext } from '../context/LinkContext';

export const useLinksContext = () => {
  const context = useContext(LinksContext);

  if (!context) {
    throw Error('useLinkContext must be used inside an LinksContextProvider');
  }

  return context;
}