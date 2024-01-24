import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { CustomerRoutes } from './customer.routes';
import { AdminRoutes } from './admin.routes';
import { SaleRoutes } from './sale.routes';
import { AuthRoutes } from './auth.routes';
import { USER_RULE } from '../utils/roles';

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_RULE.ADMIN:
        return <AdminRoutes />;
      case USER_RULE.CUSTOMER:
        return <CustomerRoutes />
      case USER_RULE.SALE:
        return <SaleRoutes />
        default:
          return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}