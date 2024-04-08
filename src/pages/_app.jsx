import '../app/globals.css';
import {AuthProvider} from '../context/AuthProvider';
import RootLayout from "../app/layout";

function MyApp({Component, pageProps}) {
    return (
        <AuthProvider>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </AuthProvider>
    );
}

export default MyApp;
