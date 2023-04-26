import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useUserStore } from 'shared/store';
import { logger } from 'shared/utils';
import { type z } from 'zod';
import { loginSchema } from '../validations';

export const Login = () => {
  const { handleSubmit, register, formState } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useUserStore(state => state.login);

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
      await login(data);
    } catch (error) {
      logger({
        path: 'src/modules/auth/components/login.ts',
        event: 'handleLogin',
        log: error,
      });
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <form
        className="flex h-auto w-[250px] flex-col gap-5 border-2 p-4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1>Sign In</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input id="email" placeholder="" {...register('email')} />
          {formState.errors?.email?.message && (
            <p className="text-sm text-red-500">{formState.errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" {...register('password')} />
          {formState.errors?.password?.message && (
            <p className="text-sm text-red-500">{formState.errors.password.message}</p>
          )}
        </div>
        <input className="cursor-pointer" type="submit" value="Login" />
      </form>
    </div>
  );
};
