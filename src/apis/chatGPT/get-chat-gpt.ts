export async function getChatGpt(openaiApiKey: string) {
  const requests = [
    '흔하지 않으면서 문장 형식으로 된 쉽고 재밌는',
    '서정적인 글을 적을 수 있으면서 흔하지 않고 간단한 문장 형식으로 된 쉽고 재밌는',
    '흔하지 않고 문장 형식으로 된 쉽고',
    '일상적이고 재밌고',
    '자연적이고 재밌고',
  ]

  const index = Math.floor(Math.random() * (4-0)+0);
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: '너는 작가 지망생에게 글소재를 추천해주기 위해 도와주는 교수야',
        },
        { role: 'user', content: `${requests[index]}간단한 문장 형식으로 된 글주제 추천해줘. 글감에 대한 설명은 생략해줘. :뒤에 말도 생략해줘. 여러개 말고 반드시 1개만 추천해줘` },
      ],
      temperature: 0.8,
      frequency_penalty: 1,
    }),
  });

  const json = await response.json()
    .then((res) => {
      return res.choices[0].message.content;
    })
    .catch((error) => error);
  return json;
}