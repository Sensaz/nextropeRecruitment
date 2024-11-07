import { Button } from "./Button";
import React, { useState, useCallback } from "react";

interface SendETHFormProps {
  onSend: (recipient: string, amount: string) => void;
}

export const SendETHForm: React.FC<SendETHFormProps> = ({
  onSend = () => {},
}) => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = useCallback(() => {
    if (recipient && amount && !isNaN(Number(amount))) {
      onSend(recipient, amount);
    } else {
      alert("Please fill in all fields correctly.");
    }
  }, [recipient, amount, onSend]);

  return (
    <div>
      <h3 className="mb-4 text-xl">Send ETH</h3>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="text"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <Button onClick={handleSubmit} title="Send ETH" />
    </div>
  );
};
