"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const title = localStorage.getItem("jobTitle");

    if (name !== null && title !== null) {
      setAllowed(true);
    } else {
      router.replace("/");
    }
  }, []);

  if (!allowed) return null;
  return <>{children}</>;
};

export default AuthWrapper;
