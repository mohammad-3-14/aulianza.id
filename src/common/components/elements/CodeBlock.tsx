import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import {
  HiCheckCircle as CheckIcon,
  HiOutlineClipboardCopy as CopyIcon,
} from 'react-icons/hi';
import { useCopyToClipboard } from 'usehooks-ts';

const CodeBlock = ({ className = '', children, inline, ...props }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const [, copy] = useCopyToClipboard();

  const handleCopy = async (content: string) => {
    await copy(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      {!inline ? (
        <div className='relative'>
          <button
            className='absolute right-3 top-3 rounded-lg border border-neutral-700 p-2 hover:bg-neutral-800'
            type='button'
            aria-label='Copy to Clipboard'
            onClick={() => handleCopy(children.toString())}
            data-umami-event='Click Copy Code'
          >
            {!isCopied ? (
              <CopyIcon size={18} className='text-neutral-400' />
            ) : (
              <CheckIcon size={18} className='text-green-600' />
            )}
          </button>
          <pre className='overflow-x-auto rounded-md bg-gray-900 p-4 text-white'>
            {String(children).replace(/\n$/, '')}
          </pre>
        </div>
      ) : (
        <code className='rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300'>
          {children}
        </code>
      )}
    </>
  );
};

const LoadingPlaceholder = () => <div className='mb-12 mt-12 h-36 w-full' />;

export default dynamic(() => Promise.resolve(CodeBlock), {
  ssr: false,
  loading: LoadingPlaceholder,
});
