import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';


import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import { USER_RULE } from "../../utils/roles"

export function Home() {
  const { user } = useAuth();


  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />

        {
          [USER_RULE.ADMIN,USER_RULE.SALE].includes(user.role)&&
          <>
            <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
            <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />
          </>
        }
      </main>
    </Container>
  )
}