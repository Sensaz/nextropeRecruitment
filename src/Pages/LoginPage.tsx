import { ConnectWalletForm } from "../components/ConnectWalletForm";
import { useNavigate } from "react-router-dom";

type AccountPageProps = {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
  setBalance: React.Dispatch<React.SetStateAction<string | null>>;
  setNetwork: React.Dispatch<React.SetStateAction<string | null>>;
};

export const LoginPage = ({ setAccount, setBalance }: AccountPageProps) => {
  const navigate = useNavigate();

  const handleConnect = async (account: string, balance: string) => {
    if (!account || !balance) {
      alert("Invalid account or balance");
      return;
    }

    setAccount(account);
    setBalance(balance);
    navigate("/account");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold">Login with MetaMask</h1>
        <ConnectWalletForm
          onClick={(account, balance) => handleConnect(account, balance)}
        />
      </div>
    </div>
  );
};
