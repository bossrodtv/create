import { type NextPage } from 'next';
import Link from 'next/link';
import { ROUTES } from 'shared/constants/commons';

const SamplePage: NextPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <p className="mb-10 text-center font-['Poppins'] text-3xl font-[500] md:text-5xl">
        Samples:{' '}
      </p>
      <Link href={ROUTES.CSR}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          CSR
        </p>
      </Link>
      <Link href={ROUTES.SSR}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          SSR
        </p>
      </Link>
      <Link href={ROUTES.SSG}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          SSG
        </p>
      </Link>
      <Link href={ROUTES.TODOS}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          ISR
        </p>
      </Link>
      <Link href={ROUTES.LOGIN}>
        <p className="w-[150px] rounded-[5px] border-[1px] border-solid border-[#C8C8C8] py-2 text-center font-['Poppins'] text-2xl font-[400] md:text-4xl">
          BASIC AUTH
        </p>
      </Link>
    </div>
  );
};

export default SamplePage;
