import React from "react";

const MessageBox = ({ messages, partnerInfo }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index}>
          {message.role === "user" ? (
            //user
            <div className="py-4 max-w-3/4 ml-auto text-right">
              <span className="inline-block px-4 py-3 text-sm rounded-xl text-left bg-date-blue-600 text-white rounded-tr-none">
                {message.content}
              </span>
            </div>
          ) : (
            //assistant
            <div className="py-4 max-w-3/4 flex">
              <div className="min-w-10 h-10 bg-date-blue-500 rounded-full">
                <img
                  src={`./images/${partnerInfo.gender.type}.svg`}
                  alt={partnerInfo.gender.type}
                />
              </div>
              <div className="pl-3">
                <span className="text-base font-medium">
                  {partnerInfo.name}
                </span>
                <div className="pt-3 pl-2">
                  <span className="inline-block px-4 py-3 text-sm rounded-xl text-left bg-date-gray-100 rounded-tl-none">
                    {message.content}
                  </span>
                  <span className="block text-right text-date-gray-400 text-xs mt-2 px-2">
                    09:25 AM
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MessageBox;
