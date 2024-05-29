import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import PrevButton from "../components/PrevButton";
import RadioGroup from "../components/RadioGroup";
import { genderList } from "../data/common";
import { initialUserInfo } from "../data/initialState";

const UserInfo = () => {
  const navigate = useNavigate();

  //백엔드에 보내줄 데이터
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleClick = () => {
    navigate("/partner-info");
  };

  const handleGenderData = (gender) => {
    const resultData = { ...userInfo, gender };
    setUserInfo(resultData);
  };

  useEffect(() => {
    console.log("userInfo : ", userInfo);
  }, [userInfo]); //userInfo 값이 변경될 때마다 콜백함수 실행

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-pink-500 fixed -z-10 -left-60 -top-104"></i>
      <PrevButton />
      <div className="h-full flex flex-col">
        <Title mainTitle={"당신을 알려주세요"} />
        {/* START:info 영역 */}
        <form className="pt-20">
          {/* START:성별 체크 */}
          <RadioGroup
            items={genderList}
            defaultCheckedData={userInfo.gender}
            onChange={handleGenderData}
          />
          {/* END:성별 체크 */}
          {/* START:input 영역 */}
          <div>
            <div className="py-2 first:pt-0 last:pb-0 ">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="홍길동"
                  className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-200 rounded-2xl placeholder:text-date-gray-200"
                />
              </div>
            </div>
            <div className="py-2 first:pt-0 last:pb-0 ">
              <div className="relative">
                <label
                  htmlFor="age"
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="20"
                  className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-200 rounded-2xl placeholder:text-date-gray-200"
                />
              </div>
            </div>
            <div className="py-2 first:pt-0 last:pb-0 ">
              <div className="relative">
                <label
                  htmlFor="mbti"
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
                >
                  Mbti
                </label>
                <input
                  type="text"
                  id="mbti"
                  name="mbti"
                  placeholder="ENTJ"
                  className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-200 rounded-2xl placeholder:text-date-gray-200"
                />
              </div>
            </div>
          </div>
          {/* END:input 영역 */}
        </form>
        {/* END:info 영역 */}
        <Button text={"다음"} onClick={handleClick} />
      </div>
    </div>
  );
};

export default UserInfo;
