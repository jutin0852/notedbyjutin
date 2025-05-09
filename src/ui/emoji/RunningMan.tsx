import React from "react";

export default function RunningMan() {
  return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline mr-2"
      >
        <rect width="36" height="36" fill="url(#pattern0_37_751)" />
        <defs>
          <pattern
            id="pattern0_37_751"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_37_751" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_37_751"
            width="72"
            height="72"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
  );
}
