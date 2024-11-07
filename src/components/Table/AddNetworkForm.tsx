import { Button } from "../Button";
import React, { useState, useCallback } from "react";

interface AddNetworkFormProps {
  onAddNetwork: (networkName: string) => void;
  onCancel: () => void;
}

export const AddNetworkForm: React.FC<AddNetworkFormProps> = ({
  onAddNetwork,
  onCancel,
}) => {
  const [newNetworkName, setNewNetworkName] = useState<string>("");

  const handleNewNetworkSubmit = useCallback(() => {
    if (newNetworkName.trim()) {
      onAddNetwork(newNetworkName);
      setNewNetworkName("");
    } else {
      alert("Please enter a valid network name.");
    }
  }, [newNetworkName, onAddNetwork]);

  return (
    <div className="mt-4">
      <input
        type="text"
        value={newNetworkName}
        onChange={(e) => setNewNetworkName(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        placeholder="Enter network name"
      />
      <div className="flex gap-5">
        <Button
          onClick={handleNewNetworkSubmit}
          title="Add Network"
          theme="success"
        />
        <Button onClick={onCancel} title="Cancel" theme="danger" />
      </div>
    </div>
  );
};
