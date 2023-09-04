'use client';

import { useState } from 'react';

const Editor = ({
  entry,
}: {
  entry: {
    id: string;
    createdAt: Date;
    uodatedAt: Date;
    userId: string;
    content: string;
  } | null;
}) => {
  const [value, setValue] = useState(entry?.content);

  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-8 text-xl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
