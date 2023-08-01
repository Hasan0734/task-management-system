import React from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  cardClass?: string;
  title?: string;
  children: React.ReactNode;
  titleClass?: string;
  titleAreaClass?: string;
  countNumber?: any;
}

export default function Card({
  cardClass,
  title,
  children,
  titleClass,
  titleAreaClass,
  countNumber,
}: PropsType) {
  return (
    <>
      <div
        className={twMerge(
          "bg-white border border-gray-100  p-4 rounded-lg",
          cardClass
        )}
      >
        {(title || countNumber) && (
          <div
            className={twMerge(
              "flex items-center justify-between",
              titleAreaClass
            )}
          >
            {title && (
              <h3
                className={twMerge(
                  "text-lg font-bold text-gray-800",
                  titleClass
                )}
              >
                {title}
              </h3>
            )}
            {countNumber && (
              <h3
                className={twMerge(
                  "text-lg font-bold text-gray-800",
                  titleClass
                )}
              >
                100
              </h3>
            )}
          </div>
        )}

        {children}
      </div>
    </>
  );
}
