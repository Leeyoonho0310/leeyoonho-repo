import { useState } from "react";
import CharacterInfo from "./CharacterInfo";

export default function CharactersContainer() {
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      id: 2,
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      id: 3,
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ]);

  // selectedCharacter state 선언
  // 선택된 캐릭터의 정보를 객체 형태로 저장할 예정
  // 조건 중에서 선택 된 캐릭터가 없을 때 CharacterInfo 컴포넌트를 렌더링 하지 말라는 조건
  // 초기값을 null로 주어 해당 state로 조건부 랜더링까지 할 수 있도록 작성
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // handleClick 함수 (인자: 선택된 버튼의 name 값)
  // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
  // selectedCharacter state에 저장
  const handleClick = (name) => {
    const selected = characters.find((character) => character.name === name);
    setSelectedCharacter(selected);
  };

  return (
    <div>
      {/* characters 배열 순회하며 버튼 렌더링 하기 */}
      {characters.map((character) => (
        <button key={character.id} onClick={() => handleClick(character.name)}>
          {character.name}
        </button>
      ))}

      {/* 선택된 캐릭터 정보를 props로 전달하기 */}
      {/* selectedCharacteor state의 값이 없는 경우 CharactorInfo 컴포넌트 렌더링 X */}
      {selectedCharacter && <CharacterInfo characterInfo={selectedCharacter} />}
    </div>
  );
}
