import MembershipList from "./components/MembershipList";
import Membership from "./models/membership";

function App() {
  const InitialMembershipList: Membership[] = [
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
  ];
  return (
    <div className="App">
      <MembershipList memberships={InitialMembershipList} />
    </div>
  );
}

export default App;
