
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {

  return (
    <PageContainer ghost>
      <div className={styles.container}>
         这 一个 AI 的世界
      </div>
    </PageContainer>
  );
};

export default HomePage;
