import Input from "@features/common/components/input/Input";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useLoginQuery } from "../queries/useLoginQuery";

function LoginPanel() {
  const { t } = useTranslation();
  const { refetch: refetchLogin, isSuccess: isSuccessLogin } = useLoginQuery();

  useEffect(() => {
    refetchLogin();
  }, []);

  return (
    <>
      <div>
        <Input label="sss" />
      </div>
    </>
  );
}

export default LoginPanel;
