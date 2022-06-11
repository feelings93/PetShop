import React, { useContext } from 'react';
import useHttp from './use-http';
import { getProfile } from '../lib/api/auth';
import { AuthContext } from '../store/auth-context';

const useAuth = () => {
  const authCtx = useContext(AuthContext);
  const { setUser } = authCtx;
  const { data, status, sendRequest } = useHttp(getProfile, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  useEffect(() => {
    if (status === 'completed') {
      if (data) {
        setUser(data);
      }
    }
  }, [data, status, setUser]);
  return [data, status];
};
export default useAuth;
