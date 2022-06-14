import React, { lazy } from "react";
import { Head, STATS_GET, Loading, ErrorComponent } from "../";
import { useFetch } from "../../Hooks";
const UserStatsGraphs = React.lazy(() => import("../UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" description="Estatisticas do usuário." />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
