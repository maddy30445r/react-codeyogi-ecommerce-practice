import React, { useState } from "react";

export default function Star({
  max = 5,
  styles = { cursor: "pointer", height: 30, width: 30 },
  onsetrate,
}) {
  const [finalrate, setfinalrate] = useState(0);
  const [temprate, settemprate] = useState(0);
  const setter = temprate || finalrate;
  //   console.log(setter);
  return (
    <div className="flex">
      {Array.from({ length: max }, (_, i) => i).map((item, i) =>
        i < setter ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#FF495F"
            stroke="#FF495F"
            onClick={() => {
              setfinalrate(i + 1);
              onsetrate(i + 1);
            }}
            onMouseEnter={() => settemprate(i + 1)}
            onMouseLeave={() => settemprate(0)}
            style={styles}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FF495F"
            style={styles}
            onClick={() => {
              setfinalrate(i + 1);
              onsetrate(i + 1);
            }}
            onMouseEnter={() => settemprate(i + 1)}
            onMouseLeave={() => settemprate(0)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )
      )}
    </div>
  );
}
