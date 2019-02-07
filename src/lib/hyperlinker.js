import React from "react";

const hyperlinker = text => {
  const regex = /\[([^\]]+)]\((http[s]?:\/\/[^)]+)\)/gm;
  const linkedText = text.replace(regex, (match, p1, p2) => {
    return `<a href="${p2}">${p1}</a>`;
  });

  return <span dangerouslySetInnerHTML={{ __html: linkedText }} />;
};

export default hyperlinker;
