import React from "react";
import { styled } from "styled-components";

const TextPane = styled.p`
  font-weight: ${({ fw }) => fw};
  font-size: ${({ fs }) => fs}px;
  line-height: ${({ lh }) => lh}px;
`;

const Text = ({ fw, fs, lh, children }) => {
  return (
    <TextPane fw={fw} fs={fs} lh={lh}>
      {children}
    </TextPane>
  );
};

export default Text;
