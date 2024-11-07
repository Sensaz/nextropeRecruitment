import { Button } from "./Button";
import { AddForm } from "./Table/AddForm";
import { SelectableList } from "./Table/SelectableList";
import { SelectableSelect } from "./Table/SelectableSelect";
import React, { useState, useCallback } from "react";

interface ConnectWalletFormProps {
  onClick: (account: string, balance: string) => void;
}

interface Wallet {
  name: string;
  icon: string;
  balance: string;
}

export const ConnectWalletForm: React.FC<ConnectWalletFormProps> = ({
  onClick,
}) => {
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [isAddingWallet, setIsAddingWallet] = useState<boolean>(false);
  const [availableWallets, setAvailableWallets] = useState<Wallet[]>([
    { name: "MetaMask", icon: "🔑", balance: "2.5" },
    { name: "WalletConnect", icon: "🌐", balance: "1.1" },
    { name: "Coinbase Wallet", icon: "💼", balance: "0.8" },
  ]);

  const handleWalletSelect = useCallback((walletName: string) => {
    setSelectedWallet(walletName);
  }, []);

  const handleAddNewWalletClick = useCallback(() => {
    setIsAddingWallet(true);
  }, []);

  const handleNewWalletSubmit = useCallback((newWalletName: string) => {
    if (newWalletName.trim()) {
      setAvailableWallets((prev) => [
        ...prev,
        { name: newWalletName, icon: "🛠️", balance: "0.0 ETH" },
      ]);
      setSelectedWallet(newWalletName);
      setIsAddingWallet(false);
    } else {
      alert("Please enter a valid wallet name.");
    }
  }, []);

  const selectedWalletObject = availableWallets.find(
    (wallet) => wallet.name === selectedWallet,
  );

  return (
    <div>
      <h3 className="mb-4 text-xl">Connect Wallet</h3>
      {!isAddingWallet ? (
        <>
          <SelectableSelect
            selectedItem={selectedWallet}
            availableItems={availableWallets}
            onItemSelect={handleWalletSelect}
            placeholder="Select a Wallet"
          />
          <SelectableList
            selectedItem={selectedWallet}
            availableItems={availableWallets}
            onItemSelect={handleWalletSelect}
          />
          <div className="flex flex-col gap-2">
            {selectedWalletObject && (
              <Button
                onClick={() =>
                  onClick(
                    selectedWalletObject.name,
                    selectedWalletObject.balance,
                  )
                }
                title="Connect Wallet"
                theme="primary"
              />
            )}
            <Button
              onClick={handleAddNewWalletClick}
              title="Add New Wallet"
              theme="secondary"
            />
          </div>
        </>
      ) : (
        <AddForm
          type="wallet" 
          onAdd={handleNewWalletSubmit} 
          onCancel={() => setIsAddingWallet(false)} 
          placeholder="Enter wallet name"
          buttonText="Add Wallet"
        />
      )}
    </div>
  );
};
