import { useRouter } from 'next/router';
import React, { useEffect, type ReactNode } from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/commons';
import { AUTH_LS } from 'shared/constants/local-storages';
import { useUserStore } from 'shared/store';
import { getLocalStorage } from 'shared/utils';

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { push: navigate } = useRouter();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);
  const verifySession = useUserStore(state => state.verifySession);

  useEffectOnce(() => {
    void verifySession();
  });

  useEffect(() => {
    const prevSignedIn = getLocalStorage(AUTH_LS.PrevSignedIn) === 'true';

    // * If user is not signed in or no previous signed in state, redirect to login page.
    if (!prevSignedIn && !isSignedIn) void navigate(ROUTES.LOGIN);
  }, [isSignedIn, navigate]);

  if (!isSignedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};
