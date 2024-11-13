import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import BaseImage from 'components/atoms/BaseImage';
import { isLocal } from 'utils/urlUtils';

type Props = {
  src: string;
};

const R2Image: FC<Props> = ({ src }) => {
  // TODO: NODE_ENVを使ってローカルか判断する
  const displaySrc = isLocal(window.location.href)
    ? `${import.meta.env.VITE_FIREBASE_R2_URL}/${src}`
    : `${window.location.href}/${src}`;

  return (
    <Box boxSize="sm">
      <BaseImage src={displaySrc} />
    </Box>
  );
};

export default R2Image;