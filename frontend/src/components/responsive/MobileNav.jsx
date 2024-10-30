import { Separator } from '@radix-ui/react-separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';
import { Button } from '../ui/button';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            <span> Welcome to MernEats.com!</span>
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            <Button
              onClick={() => console.log('Login')}
              className="flex-1 font-bold bg-orange-500"
            >
              Log In
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
