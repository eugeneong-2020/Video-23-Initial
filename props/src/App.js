import { useState } from "react";
import MembershipList from "./components/MembershipList";
function App() {
  const [memberships, setMemberships] = useState([
    {
      membershipCode: "SLVR",
      title: "Silver",
      description: "Customer Accumulating $100 spent enjoy 2% discount",
    },
    {
      membershipCode: "GLD",
      title: "Gold",
      description: "Customer Accumulating $500 spent enjoy 5% discount",
    },
    {
      membershipCode: "PLTNM",
      title: "Platinum",
      description: "Customer Accumulating $1000 spent enjoy 10% discount",
    },
  ]);

  const addRubyHandler = () => {
    setMemberships((prevMemberships) => {
      const newRubyMembership = {
        membershipCode: "Ruby",
        title: "Ruby",
        description: "Customer Accumulating $2000 spent enjoy 12% discount",
      };
      return prevMemberships.concat(newRubyMembership);
    });
  };

  const addDiamondHandler = () => {
    setMemberships((prevMemberships) => {
      const newDiamondMembership = {
        membershipCode: "Diamond",
        title: "Diamond",
        description: "Customer Accumulating $5000 spent enjoy 15% discount",
      };
      return prevMemberships.concat(newDiamondMembership);
    });
  };

  return (
    <div className="App">
      <MembershipList memberships={memberships} />
      <button onClick={addRubyHandler}>Add Ruby</button>
      <button onClick={addDiamondHandler}>Add Diamond</button>
    </div>
  );
}

export default App;
