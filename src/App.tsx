import queryString from 'query-string';

function App() {
  const queryStrings = queryString.parse(location.search);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                Query String
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(queryStrings).map((queryStringKey: string) => {
              return (
                <tr className="bg-white border-b  dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {queryStringKey}
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 inline-block mr-2 cursor-pointer hover:text-gray-800"
                      onClick={() =>
                        handleCopy(`${queryStrings[queryStringKey]}`)
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                      />
                    </svg>
                    {`${queryStrings[queryStringKey]}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
