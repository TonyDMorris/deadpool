import React, { useState } from "react";
import styled from "styled-components";
import { Collapse } from "react-collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
export default function SelectionsTable({ selections }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Table>
      <Caption
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Selections {<FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />}
      </Caption>

      <Container isOpened={isOpen}>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>handicap</Th>
          <Th>Joker?</Th>
          <Th>Total obtainable points</Th>
        </Tr>
        {selections.map(({ name, age, isJoker, handicaps }) => {
          const handicapsPoints = handicaps
            ? handicaps.reduce((acc, curr) => {
                return acc + curr.value;
              }, 0)
            : 0;

          const totalAvailable = 100 - age - handicapsPoints;
          return (
            <Tr>
              <Td>{name}</Td>
              <Td>{age}</Td>
              <Td>{handicapsPoints}</Td>
              <Td>{isJoker ? "true" : "false"}</Td>
              <Td>{isJoker ? totalAvailable * 2 : totalAvailable}</Td>
            </Tr>
          );
        })}
      </Container>
    </Table>
  );
}

const Table = styled.table`
  font-family: arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  min-height: 20px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;
const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
`;
const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
`;

const Container = styled(Collapse)``;

const Caption = styled.caption`
  font-size: 15px;
`;
