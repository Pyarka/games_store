import React from 'react';
import { MainMenuContainer } from './MainMenuStyles';
import { useAppSelector as select } from '../../store/hooks';

const MainMenu = () => {
  const name = select((state) => state.user.name)

  return (
    <MainMenuContainer>
      {name}
    </MainMenuContainer>
  )
}

export default MainMenu;