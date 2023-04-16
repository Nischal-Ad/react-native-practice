import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={30} color={'#750'} />;

    case 'cross':
      return <Icon name="times" size={30} color={'#267'} />;

    default:
      return <Icon name="pencil" size={30} color={'#669999'} />;
  }
};

export default Icons;
