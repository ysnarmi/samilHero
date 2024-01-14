import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@features/common/components/layout/Header";

export default function Dashboard() {
  const { t } = useTranslation(["dashboard", "common"]);

  return (
    <div>
      <Header />
    </div>
  );
}

// export async function getStaticProps({ locale, defaultLocale }) {
//     return {
//         props: { ...(await serverSideTranslations(locale ?? defaultLocale)) },
//     }
// }
