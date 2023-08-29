'use client';

import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import { styled } from 'styled-components';
import { Editor as TinyMCEEditor } from 'tinymce';

import Button from '../common/Button/Button';
import { WritingType } from '@/types/writingType';

interface Props {
  writingData: any;
  setWritingData: Dispatch<SetStateAction<WritingType>>;
}

const TextEditor = ({ writingData, setWritingData }: Props) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const log = () => {
    if (editorRef.current) {
      // 추후에 이 자리에 데이터베이스 연결
      // console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <TitleWrapper>
        <TitleArea>
          <input
            placeholder='제목을 입력해주세요'
            className='title-input'
            onChange={(event) => setWritingData({ ...writingData, title: event.target.value })}
          ></input>
        </TitleArea>
        <TagArea>
          <span className='title-tag'>바닷물이 달콤하다면</span>
        </TagArea>
      </TitleWrapper>
      <div>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
          onEditorChange={(editor) => setWritingData({ ...writingData, body: editor })}
          initialValue=''
          init={{
            height: 650,
            menubar: false,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'code',
              'help',
              'wordcount',
            ],
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | ' +
              'removeformat | help' +
              'preview',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
      </div>
      <ButtonWrapper>
        <div>
          <Button color={'sub'} onClick={log}>
            취소하기
          </Button>
        </div>
        <div>
          <Button color={'sub'} onClick={log}>
            임시저장
          </Button>
          <Button onClick={log}>게시하기</Button>
        </div>
      </ButtonWrapper>
    </>
  );
};

export default TextEditor;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
`;

const TitleArea = styled.div`
  display: flex;

  .title-input {
    width: 100%;
    border-style: none;
    font-size: 2.5rem;
    outline: none;
  }
`;

const TagArea = styled.div`
  display: flex;
  align-items: center;

  .title-tag {
    padding: 10px;
    border-radius: 20px;
    background-color: var(--main-color);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
