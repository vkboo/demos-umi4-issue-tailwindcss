import './index.less';

const HomePage: React.FC = () => {
  return (
    // .bg-blue可生效，说明theme配置ok
    // .container 中使用theme不可用
    <div className='border container'>
      <div className="flex items-center space-x-2 text-base">
        <h4 className="font-semibold text-slate-900">Contributors</h4>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
      </div>
    </div>
  );
};

export default HomePage;
