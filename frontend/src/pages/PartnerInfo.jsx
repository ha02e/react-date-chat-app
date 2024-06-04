import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import PrevButton from "../components/PrevButton";
import RadioGroup from "../components/RadioGroup";
import { genderList, infoContentList } from "../data/common";
import { initialPartnerInfo } from "../data/initialState";
import Input from "../components/Input";

const PartnerInfo = ({ handlePartnerInfo }) => {
  const navigate = useNavigate();

  //백엔드에 보내줄 데이터
  const [partnerInfo, setPartnerInfo] = useState(initialPartnerInfo);

  const handleClick = () => {
    navigate("/chat");
    handlePartnerInfo(partnerInfo);
  };

  const handleGenderData = (gender) => {
    const resultData = { ...partnerInfo, gender };
    setPartnerInfo(resultData);
  };

  const handleInfoContent = (label, value) => {
    const resultData = { ...partnerInfo, [label]: value };
    setPartnerInfo(resultData);
  };

  // useEffect(() => {
  //   console.log("partnerInfo : ", partnerInfo);
  // }, [partnerInfo]); //userInfo 값이 변경될 때마다 콜백함수 실행

  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-blue-600 fixed -z-10 -left-60 -top-104"></i>
      <PrevButton />
      <div className="h-full flex flex-col">
        <Title mainTitle={"소개팅 상대를 알려주세요"} />
        {/* START:info 영역 */}
        <form className="pt-20">
          <RadioGroup
            items={genderList}
            defaultCheckedData={partnerInfo.gender}
            onChange={handleGenderData}
          />
          {/* START:input 영역 */}
          <div>
            {infoContentList.map((infoContent) => (
              <Input
                key={infoContent.id}
                label={infoContent.label}
                inputType={infoContent.inputType}
                text={infoContent.text}
                placeholder={infoContent.placeholder}
                onChange={handleInfoContent}
              />
            ))}
          </div>
          {/* END:input 영역 */}
        </form>
        {/* END:info 영역 */}
        <Button
          text={"채팅하러 가기"}
          color={"bg-date-blue-700"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PartnerInfo;
