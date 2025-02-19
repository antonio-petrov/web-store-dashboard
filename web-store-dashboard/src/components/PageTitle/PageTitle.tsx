interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='text-base font-semibold ml-3.75 text-page-title-color font-roboto'>
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
