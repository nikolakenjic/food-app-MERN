import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../ui/button';

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      <Button
        variant="destructive"
        className="font-bold text-white hover:bg-white hover:text-orange-600"
        onClick={async () => await loginWithRedirect()}
      >
        Log In
      </Button>
    </span>
  );
};

export default MainNav;
