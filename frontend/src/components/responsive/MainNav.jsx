import { Button } from '../ui/button';

const MainNav = () => {
  return (
    <span className="flex space-x-2 items-center">
      <Button
        variant="destructive"
        className="font-bold text-white hover:bg-white hover:text-orange-600"
        onClick={() => console.log('Login')}
      >
        Log In
      </Button>
    </span>
  );
};

export default MainNav;
