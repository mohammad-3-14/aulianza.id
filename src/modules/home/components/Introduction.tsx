const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>سلام من محمد هستم</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              مستقر در اصفهان, ایران <span className='ml-1'>🇮🇷</span>
            </li>{' '}
            <li>دورکار</li>
          </ul>{' '}
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        یک مهندس نرم‌افزار با تجربه به ویژه در سمت فرانت‌اند، با اشتیاق برای
        ایجاد تجربه‌های وب پیکسل پرفکت. من با جاوااسکریپت کار می‌کنم و در همه
        امور مربوط به وب تخصص دارم. من از همکاری با تیم‌ها برای ارائه برنامه‌های
        وب کارآمد، مقیاس‌پذیر و از نظر بصری جذاب لذت می‌برم.
      </p>
    </section>
  );
};

export default Introduction;
