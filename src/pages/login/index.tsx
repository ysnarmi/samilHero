import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import LoginPanel from "@features/auth/components/LoginPanel";

const Login = () => {
    return (
        <>
           <LoginPanel/>
        </>
    );
};

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Login;