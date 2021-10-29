import {
  Display1,
  Display3,
} from 'baseui/typography';
import { Block } from 'baseui/block';

const Home = () => (
  <Block display="grid" justifyContent="center" margin="10rem">
    <Display1>Welcome to CodeZilla</Display1>
    <Display3>Codezilla has got everything you need.</Display3>
  </Block>
);

export default Home;
