import { useAuthContext } from '../contexts/AuthContext';
import Link from 'next/link';
import { getAuth } from 'firebase/auth';

const Header = () => {
  const { user } = useAuthContext();
  const auth = getAuth();

  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          {user ? (
            <>
              <li>{user.email}</li>
              <li><Link href="/tweet">Tweet</Link></li>
              <li><Link href="/profile">Profile</Link></li>
              <li><button onClick={() => auth.signOut()}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li> {/* 追加 */}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;