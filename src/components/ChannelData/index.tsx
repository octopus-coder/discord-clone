import React, {useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Luis Enrique"
          date="11/08/2020"
          content="Hoje e meu aniversario"
        />
        {
          Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage
              key={n}
              author="Luis"
              date="11/08/2020"
              content="Hello people from this channel"
            />
          ))
        }

        <ChannelMessage
          author="Luisen"
          isBot
          date="11/08/2020"
          content={
            <>
              <Mention>@Luis Enrique</Mention> congrats!
            </>
          }
        />

      </Messages >

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;