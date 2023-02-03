import {fetchRickAndMorty, rickAndMortyEpisodes} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface EpisodesData {
  results: Array<{
      id: number;
      name: string;
      image:string
      species:string
  }>;
}

export const Episodes: React.FC = () => {
  const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
      suspense: false,
  });

  return (
      <>
          <h1>Episodes</h1>

          <div className={styles.container}>
              {data?.results.map((episodes) => (
                  <AntCard  key={episodes.id} name={episodes.name} image={episodes.image}  description={episodes.species}></AntCard>

              ))}
          </div>


      </>
  );
};
