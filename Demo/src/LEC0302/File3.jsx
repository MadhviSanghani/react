import { useState } from "react";
import { Page1, Page2, Page3 } from "./File2";
import { UserProvider } from "./useContextexpFile1";
function SelectPage({ i }) {
  const Page = [Page1, Page2, Page3][i];
  return <Page />;
}
export default function UseContextExample() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <UserProvider>
      <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
        Page1
      </button>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        Page2
      </button>
      <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>
        Page3
      </button>
      <SelectPage i={currentPage} />
    </UserProvider>
  );
}