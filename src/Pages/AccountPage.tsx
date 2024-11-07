import { Button } from "../components/Button";
import { ChangeNetworkForm } from "../components/ChangeNetworkForm";
import { ConnectWalletForm } from "../components/ConnectWalletForm";
import { Modal } from "../components/Modal";
import { SendERC20Form } from "../components/SendERC20Form";
import { SendETHForm } from "../components/SendETHForm";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type AccountPageProps = {
  account: string | null;
  balance: string | null;
  network: string | null;
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
  setBalance: React.Dispatch<React.SetStateAction<string | null>>;
  onChangeNetwork: (networkName: string) => void;
  onSendETH: (recipient: string, amount: string) => void;
  onSendERC20Token: (
    recipient: string,
    amount: string,
    tokenAddress: string,
  ) => void;
};

export const AccountPage = ({
  account,
  balance,
  network,
  setBalance,
  setAccount,
  onChangeNetwork,
  onSendETH,
  onSendERC20Token,
}: AccountPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const navigate = useNavigate();

  const openModal = useCallback((content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Account Details
        </h1>
        <div className="mb-6 text-center">
          <p className="text-lg font-medium">
            <strong>Account:</strong> {account || "N/A"}
          </p>
          <p className="text-lg font-medium">
            <strong>Balance:</strong> {balance ? `${balance} ETH` : "N/A"}
          </p>
          <p className="text-lg font-medium">
            <strong>Network:</strong> {network || "N/A"}
          </p>
        </div>
        <div className="space-y-2">
          <Button
            title="Change Wallet"
            onClick={() =>
              openModal(
                <ConnectWalletForm
                  onClick={(walletName, walletBalance) => {
                    setAccount(walletName);
                    setBalance(walletBalance);
                    setIsModalOpen(false);
                  }}
                />,
              )
            }
          />
          <Button
            title="Change Network"
            onClick={() =>
              openModal(
                <ChangeNetworkForm
                  onChangeNetwork={onChangeNetwork}
                  onClose={() => setIsModalOpen(false)}
                />,
              )
            }
          />
          <Button title="Disconnect" onClick={() => navigate("/")} />
          <Button
            title="Send ETH"
            onClick={() => openModal(<SendETHForm onSend={onSendETH} />)}
          />
          <Button
            title="Send ERC-20"
            onClick={() =>
              openModal(<SendERC20Form onSend={onSendERC20Token} />)
            }
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modalContent}
        </Modal>
      </div>
    </div>
  );
};
