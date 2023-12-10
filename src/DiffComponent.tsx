import React from "react";
import { diffWords } from "diff";
import "./DiffComponent.css";

// ****************SCRIPT FOR OPENAI API**************** //
//// # Rules: Keep the original text as much as possible. The intention is to follow the "# Context" below, but to correct only critical errors. The answer should only consist of the corrected English text.
////
//// # Context: The return of Sam Altman as CEO of OpenAI is expected to increase his control over the start-up. The move may reduce the constraints on his authority, especially as the company is developing technologies that have the potential to revolutionise several industries.
////
//// # Comand : Correct the grammar, vocabulary and expressions in the English text I will write in the next prompt by following the "# Rules".

const DiffComponent: React.FC = () => {
  const one: string =
    "The article mentioned that Sam Altman may enhance his power after the trouble of resignation caused by the board of OpenAI. I think every leader who is influential in the world has to be moderate, otherwise technology, social situations, and politics would be in dangerous situation because of the misleading by the too much priviledged head person.";
  const other: string =
    "The article suggested that Sam Altman might increase his influence following the turmoil caused by his resignation from the OpenAI board. I believe that every globally influential leader must exercise moderation. Otherwise, technology, social dynamics, and politics could be endangered due to misdirection from an overly privileged leader.";

  const options = { ignoreCase: true };
  const diff = diffWords(one, other, options);
  const prev = diff.map((part, index) => {
    if (part.added) return "";
    return (
      <span
        key={index}
        style={{
          color: part.removed ? "red" : "grey",
        }}
      >
        {part.value}
      </span>
    );
  });
  const next = diff.map((part, index) => {
    if (part.removed) return "";
    return (
      <span
        key={index}
        style={{
          color: part.added ? "green" : "grey",
        }}
      >
        {part.value}
      </span>
    );
  });

  return (
    <>
      <div className="container">
        <div className="text-area">{prev}</div>
        <div className="text-area">{next}</div>
      </div>
      <div>
        {diff.map((part, index) => (
          <>
            <span
              key={index}
              style={{
                color: part.added ? "green" : part.removed ? "red" : "grey",
              }}
            >
              {part.value}
            </span>
          </>
        ))}
      </div>
    </>
  );
};

export default DiffComponent;
