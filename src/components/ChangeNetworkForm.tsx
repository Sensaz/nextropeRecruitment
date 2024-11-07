import { Button } from "./Button";
import { AddForm } from "./Table/AddForm";
import { SelectableList } from "./Table/SelectableList";
import { SelectableSelect } from "./Table/SelectableSelect";
import React, { useState, useCallback } from "react";

interface ChangeNetworkFormProps {
  onChangeNetwork: (network: string) => void;
  onClose: () => void;
}

interface Network {
  name: string;
  icon: string;
}

export const ChangeNetworkForm: React.FC<ChangeNetworkFormProps> = ({
  onChangeNetwork,
  onClose,
}) => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [isAddingNetwork, setIsAddingNetwork] = useState<boolean>(false);
  const [availableNetworks, setAvailableNetworks] = useState<Network[]>([
    { name: "Ethereum", icon: "🟢" },
    { name: "Polygon", icon: "🔵" },
    { name: "Binance Smart Chain", icon: "🟡" },
  ]);

  const handleNetworkSelect = useCallback((networkName: string) => {
    setSelectedNetwork(networkName);
  }, []);

  const handleAddNetwork = useCallback((networkName: string) => {
    const newNetwork: Network = { name: networkName, icon: "🛠️" };
    setAvailableNetworks((prev) => [...prev, newNetwork]);
    setSelectedNetwork(networkName); 
    setIsAddingNetwork(false); 
  }, []);

  const selectedNetworkObject = availableNetworks.find(
    (network) => network.name === selectedNetwork,
  );

  return (
    <div>
      <h3 className="mb-4 text-xl">Change Network</h3>
      {!isAddingNetwork ? (
        <>
          <SelectableSelect
            selectedItem={selectedNetwork}
            availableItems={availableNetworks}
            onItemSelect={handleNetworkSelect}
            placeholder="Select a Network"
          />
          <SelectableList
            selectedItem={selectedNetwork}
            availableItems={availableNetworks}
            onItemSelect={handleNetworkSelect}
          />
          <div className="flex flex-col gap-2">
            {selectedNetworkObject && (
              <Button
                onClick={() => {
                  onChangeNetwork(selectedNetwork);
                  onClose();
                }}
                title="Change Network"
                theme="primary"
              />
            )}
            <Button
              onClick={() => setIsAddingNetwork(true)}
              title="Add New Network"
              theme="secondary"
            />
          </div>
        </>
      ) : (
        <AddForm
          type="network" 
          onAdd={handleAddNetwork}
          onCancel={() => setIsAddingNetwork(false)} 
          placeholder="Enter network name"
          buttonText="Add Network"
        />
      )}
    </div>
  );
};
