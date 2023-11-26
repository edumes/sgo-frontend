import type { NextPage } from "next";
import { Button, Card, CardBody, CardHeader, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { PasswordIcon } from "../components/icons/password-icon";
import { AtIcon } from "../components/icons/at-icon";
import { toast } from "react-toastify";
import Link from "next/link";

const Login: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    if (userEmail === "" || password === "") {
      toast.warning("Please fill in all fields!");
      return;
    }

    setLoading(true);

    const lowercaseEmail = userEmail.toLowerCase();
    const lowercasePassword = password.toLowerCase();

    const userData = {
      username: lowercaseEmail,
      password: lowercasePassword,
    }

    setLoading(false);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-4 mx-auto w-full sm:w-[500px]">
        <Card>
          <CardHeader className="justify-center">
            <h4 className="font-bold text-2xl">Cabanha M.Sol</h4>
          </CardHeader>
          <CardBody>
            <Input
              size="lg"
              variant="faded"
              label="Usuário"
              labelPlacement="outside"
              placeholder="Insira seu nome de usuário"
              startContent={<AtIcon />}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="mb-4 mt-2"
            />
            <Input
              size="lg"
              label="Senha"
              labelPlacement="outside"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="faded"
              startContent={<PasswordIcon />}
              type="password"
              className="mb-4"
            />
            <div className="flex py-2 px-2 justify-between">
              <Checkbox
                classNames={{
                  label: "text-small",
                }}
              >
                Lembrar de mim
              </Checkbox>
              <Link href="/register">
                Criar nova conta
              </Link>
            </div>
            <Button color="success" variant="bordered" onClick={handleLogin} fullWidth isLoading={loading}>
              Login
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;