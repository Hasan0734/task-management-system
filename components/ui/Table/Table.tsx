import React from "react";

interface PropsType {
  theadData: any[];
  children: React.ReactNode;
}

const Table = ({ theadData, children }: PropsType) => {
  return (
    <>
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {theadData.map((head) => (
                    <th
                      scope="col"
                      className="text-sm font-semibold text-gray-900 px-6 py-4 text-left uppercase relative
                       before:content-['\2191'] before:absolute before:text-[10px] before:right-2  before:opacity-50
                        after:content-['\2193'] after:absolute after:text-[10px] after:right-0 after:opacity-50 cursor-pointer"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
