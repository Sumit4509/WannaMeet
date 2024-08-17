import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const timeInIST = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });

  const dateInIST = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: 'Asia/Kolkata',
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[323px] rounded py-2 text-center text-base font-normal">
            <a 
              href="https://github.com/Sumit4509/WannaMeet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-1 hover:underline"
            >
              If you like the project, Do give a star 🌟
            </a>
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{timeInIST}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{dateInIST}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
