import Layout from "@components/layout/layout";
import "../styles/globals.css";
import {store,wrapper} from '../redux/store'
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
  
}

export default wrapper.withRedux(MyApp);
