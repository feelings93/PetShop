import { useContext, useState, useEffect } from 'react';
import useHttp from './use-http';
import { getProfile } from '../lib/api/auth';
import { AuthContext } from '../store/auth-context';
const useAuth = () => {
  const authCtx = useContext(AuthContext);
  const [admin, setAdmin] = useState(false);
  const [auth, setAuth] = useState(false);
  const { setUser } = authCtx;
  const { data, status, sendRequest } = useHttp(getProfile, true);
  useEffect(() => {
    if (!localStorage.getItem('accessToken'))
      return [false, false, 'completed'];
    else sendRequest();
  }, [sendRequest]);
  useEffect(() => {
    if (status === 'completed') {
      if (data) {
        setAuth(true);
        setUser(data);
        if (data.role === 'admin') setAdmin(true);
        else setAdmin(false);
      } else setAuth(false);
    }
  }, [setAuth, data, status, setUser]);
  return [auth, admin, status];
};
export default useAuth;
