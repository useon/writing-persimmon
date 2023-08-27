import { styled } from 'styled-components';

import { WritingType } from '@/types/writingType';

interface Props {
  writingData: WritingType;
}

const WritingPreview = ({ writingData }: Props) => {
  return (
    <>
      <TitleArea>{writingData.title}</TitleArea>
      <div dangerouslySetInnerHTML={{ __html: writingData.body }}></div>
    </>
  );
};

export default WritingPreview;

const TitleArea = styled.div`
  padding: 20px 0 20px 0;
  font-size: 2.5rem;
`;
