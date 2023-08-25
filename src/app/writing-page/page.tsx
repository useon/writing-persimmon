'use client';
import { useState } from 'react';

import { styled } from 'styled-components';

import RichTextEditor from '@/components/TextEditor/TextEditor';
import WritingPreview from '@/components/WritingPreview/WritingPreview';
import { WritingType } from '@/types/writingType';

const WritingPage = () => {
  const [writingData, setWritingData] = useState<WritingType>({ title: '', body: '' });

  return (
    <Container>
      <TextEditorArea>
        <RichTextEditor setWritingData={setWritingData} writingData={writingData} />
      </TextEditorArea>
      <PreviewArea>
        <WritingPreview writingData={writingData} />
      </PreviewArea>
    </Container>
  );
};

export default WritingPage;

const Container = styled.div`
  height: 880px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextEditorArea = styled.div`
  display: grid;
  grid-template-rows: 15% 80% 5%;
  padding: 20px 40px;
`;

const PreviewArea = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  padding: 20px 40px;
`;
