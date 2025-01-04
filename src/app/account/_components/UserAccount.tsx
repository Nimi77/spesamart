import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const UserAccount = () => {
  const { data: session } = useSession();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      setUserName(session.user.name || 'User');
    }
  }, [session]);

  return (
    <div>
      <h2 className="font-semibold">
        Welcome!{' '}
        <span className="text-orange-red">
          {userName ? userName : 'Loading'}
        </span>
      </h2>
    </div>
  );
};

export default UserAccount;
