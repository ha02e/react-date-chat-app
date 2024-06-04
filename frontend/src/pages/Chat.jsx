import React, { useState } from "react";
import PrevButton from "../components/PrevButton";
import MessageBox from "../components/MessageBox";

const Chat = ({ partnerInfo }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = {
      role: "user",
      content: value,
    };

    // const assistantResult = {
    //   role: "assistant",
    //   content: "저는 chatGPT입니다.",
    // };

    setMessages((prev) => [...prev, result]);
    setValue("");

    // setMessages((prev) => [...prev, assistantResult]);
  };

  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <PrevButton />
      <div className="h-full flex flex-col">
        {/* START:헤더 영역 */}
        <div className="-mx-6 -mt-10 py-7 bg-date-blue-600">
          <span className="block text-xl text-center text-white">
            {partnerInfo.name}
          </span>
        </div>
        {/* END:헤더 영역 */}
        {/* START:채팅 영역 */}
        <div className="overflow-auto">
          <MessageBox messages={messages} partnerInfo={partnerInfo} />
        </div>
        {/* END:채팅 영역 */}
        {/* START:메시지 입력 영역 */}
        <div className="mt-auto flex py-5 -mx-2 border-t border-gray-100">
          <form
            id="sendForm"
            className="w-full px-2 h-full"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full text-sm px-3 py-2 h-full block rounded-xl bg-gray-100 focus:"
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </form>
          <button
            type="submit"
            form="sendForm"
            className="w-10 min-w-10 h-10 inline-block rounded-full bg-date-blue-600 text-none px-2 bg-[url('../public/images/send.svg')] bg-no-repeat bg-center"
          >
            보내기
          </button>
        </div>
        {/* END:메시지 입력 영역 */}
      </div>
    </div>
  );
};

export default Chat;
