/* eslint sort-keys: error */
import { useRouter } from 'next/router';
import { defineConfig, Giscus, useTheme } from '@theguild/components';

export default defineConfig({
  docsRepositoryBase: 'https://github.com/Urigo/graphql-mesh/tree/master/website',
  main: function Main({ children }) {
    const { resolvedTheme } = useTheme();
    const { route } = useRouter();

    const comments = route !== '/' && (
      <Giscus
        // ensure giscus is reloaded when client side route is changed
        key={route}
        repo="Urigo/graphql-mesh"
        repoId="MDEwOlJlcG9zaXRvcnkyMzM1OTc1MTc="
        category="Docs Discussions"
        categoryId="DIC_kwDODexqTc4CSDDQ"
        mapping="pathname"
        theme={resolvedTheme}
      />
    );

    return (
      <>
        {children}
        {comments}
      </>
    );
  },
  siteName: 'MESH',
});
