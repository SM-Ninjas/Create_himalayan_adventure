import React from "react";

const HTMLContentRenderer = ({ content }: any) => {
  return (
    <div
      className="html-content-wrapper"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

const HowToPrepare = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="how-to-prepare">
      {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
      <HTMLContentRenderer content={content} />
    </div>
  );
};

export default HowToPrepare;
