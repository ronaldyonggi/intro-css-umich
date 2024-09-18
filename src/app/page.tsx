import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1>Springtime in Michigan</h1>
      <main id='main'>
        <p className='pp'>
          Springtime in{' '}
          <a href='https://www.michigan.org/city/ann-arbor'>Ann Arbor</a> is a
          beautiful time. Even though it can be chilly at times, it is nice to
          walk my dog Bacon. This site includes some pictures I have taken on
          these walks.
        </p>

        <p className='pp'>
          Sometimes we walk around the neighborhood, other times we make it to
          the woods. Ann Arbor also has some beautiful lakes and rivers
          including the{' '}
          <a href='https://www.annarbor.org/things-to-do/recreation-outdoors/huron-river/'>
            Huron River Watertrail
          </a>{' '}
          and the{' '}
          <a href='https://www.a2gov.org/departments/Parks-Recreation/parks-places/argo/pages/default.aspx'>
            Argo Park Cascades
          </a>{' '}
          .
        </p>
      </main>
    </div>
  );
}
