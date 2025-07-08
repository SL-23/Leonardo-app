import { Button, Stack, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InfoForm = () => {
  const [inputUserName, setInputUserName] = useState<string | null>(null);
  const [inputJobTitle, setInputJobTitle] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputUserName !== null) localStorage.setItem("userName", inputUserName);
    if (inputJobTitle !== null) localStorage.setItem("jobTitle", inputJobTitle);
    router.push("/home");
  };

  return (
    <Stack>
      <Input
        required
        placeholder="User name"
        onChange={(e) => setInputUserName(e.target.value.trim())}
      />
      <Input
        required
        placeholder="Job title"
        onChange={(e) => setInputJobTitle(e.target.value.trim())}
      />
      <Button
        disabled={!inputUserName || !inputJobTitle}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Save
      </Button>
    </Stack>
  );
};

export default InfoForm;
