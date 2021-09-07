import React from "react";
import SelectionsTable from "./selectionsTable";
import { useState } from "react";
import styled from "styled-components";
export default function Player({ player }) {
  const pointsSoFar = player.selections.reduce((acc, curr) => {
    if (curr.isDead) {
      const handicapsPoints = curr.handicaps
        ? curr.handicaps.reduce((acc, curr) => {
            return acc + curr.value;
          }, 0)
        : 0;

      return 100 - curr.age - handicapsPoints + acc;
    } else {
      return acc;
    }
  }, 0);

  const pointsAvailable = player.selections.reduce((acc, curr) => {
    const handicapsPoints = curr.handicaps
      ? curr.handicaps.reduce((acc, curr) => {
          return acc + curr.value;
        }, 0)
      : 0;

    const totalAvailable = 100 - curr.age - handicapsPoints;
    return curr.isJoker
      ? acc + totalAvailable * 2 - handicapsPoints
      : acc + totalAvailable - handicapsPoints;
  }, 0);

  return (
    <Container>
      <TopContainer>
        {/* <UserProfilePic image={player.image}></UserProfilePic> */}
        <UserProfilePic
          src={`${
            process.env.PUBLIC_URL
          }/assets/${player.name.toLowerCase()}.png`}
        />
        <Name>{player.name}</Name>
        <PointsBreakdown>
          <PointDisplayItem>
            <PointDisplayItemTitle>Total Points Earned</PointDisplayItemTitle>
            <PointDisplayItemPoints>{pointsSoFar}</PointDisplayItemPoints>
          </PointDisplayItem>
          <PointDisplayItem>
            <PointDisplayItemTitle>
              Total Available Points
            </PointDisplayItemTitle>
            <PointDisplayItemPoints>{pointsAvailable}</PointDisplayItemPoints>
          </PointDisplayItem>
        </PointsBreakdown>
      </TopContainer>

      <SelectionsTable selections={player.selections}></SelectionsTable>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    -4px 4px 7px -2px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, -4px 4px 7px -2px rgba(0, 0, 0, 0);
  margin-bottom: 10px;
  border-top: 1px grey;
  border-radius: 5px;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 5px;
  padding-bottom: 5px;

  border: 1px solid whitesmoke;
`;
const UserProfilePic = styled.img`
  width: auto;
  height: 70px;
  border-radius: 35px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    -4px 4px 7px -2px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, -4px 4px 7px -2px rgba(0, 0, 0, 0);
`;
const Name = styled.div``;
const PointsBreakdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const PointDisplayItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PointDisplayItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

const PointDisplayItemPoints = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: solid 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
